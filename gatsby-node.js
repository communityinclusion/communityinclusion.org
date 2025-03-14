const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require('lodash');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // Handle Markdown nodes (Blog Posts, Pages, etc.)
  if (node.internal.type === `MarkdownRemark`) {
    const parentNode = node.parent ? getNode(node.parent) : null;

    if (parentNode && parentNode.sourceInstanceName) {
      const basePath = parentNode.sourceInstanceName === 'posts' ? 'news' : 'pages';

      let slug = ''; // ✅ Declare slug before assigning it

      if (node.frontmatter.path) {
        slug = node.frontmatter.path;
      } else {
        try {
          slug = createFilePath({ node, getNode, basePath });
        } catch (error) {
          console.error(`Error generating slug for Markdown node ${node.id}:`, error);
          slug = `/fallback-slug/`; // Prevent crashing
        }
      }

    console.log(`✅ Generated slug: ${slug}`);

      createNodeField({
        node,
        name: `slug`,
        value: slug || "/fallback-slug/", 
      });
    }
  }

  // Handle Airtable nodes (Staff Profiles)
if (node.internal.type === `Airtable` && node.table === `Staff`) {
  if (node.data?.Name) {
    try {
      const slug = `about/staff-directory/${node.data.Name
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[,&]/g, "") // Remove commas & ampersands
        .replace(/'/g, "") // Remove apostrophes
        .replace(/-+/g, "-") // Remove double hyphens
      }/`;

        console.log(`Generated slug for Staff: ${slug}`);

        createNodeField({ node, name: `slug`, value: slug });
      } catch (error) {
        console.error(`Error generating slug for Airtable Staff node ${node.id}:`, error);
      }
    } else {
      console.warn(`Warning: Airtable Staff node ${node.id} is missing Name field.`);
    }

  if (node.data.staff_bio) {
      createNodeField({
        node,
        name: "markdownBio",
        value: node.data.staff_bio, // Treats bio as raw Markdown
      });
    }
      if (node.data.staff_ed) {
      createNodeField({
        node,
        name: "markdownEd",
        value: node.data.staff_ed, // Treats bio as raw Markdown
      });
    }
  }
};

// Create pages dynamically
exports.createPages = async function ({ actions, graphql, reporter }) {
  console.log("====================================");
  console.log(`createPages entered`);
  console.log("====================================");

  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/postTemplate.js`);
  const jobsTemplate = path.resolve(`./src/templates/jobsTemplate.js`);
  const pageTemplate = path.resolve(`./src/templates/pageTemplate.js`);
  const staffTemplate = path.resolve(`./src/templates/staffTemplate.js`);
  const tagTemplate = path.resolve(`./src/templates/tagTemplate.js`);
  const postListTemplate = path.resolve(`./src/templates/postListTemplate.js`);
  const jobsListTemplate = path.resolve(`./src/templates/jobsListTemplate.js`);

  /**
 * Returns the current date in YYYY-MM-DD format
 */
function getCurrentDate() {
  const d = new Date()
  let month = (d.getMonth() + 1).toString()
  if (month.length < 2) {
    month = `0${month}`
  }
  let day = d.getDate().toString()
  if (day.length < 2) {
    day = `0${day}`
  }
  return `${d.getFullYear()}-${month}-${day}`
}


  // ✅ First GraphQL Query (Markdown + Staff Data)
  const result = await graphql(`
    {
      allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 200)
            fields {
              slug
            }
            frontmatter {
              title
              tags
              posttype
            }
          }
        }
      }
       allAirtable(filter: {table: {eq: "Staff"}}) {
    edges {
      node {
        data {
          Name
          staff_fname
          staff_lname
        }
        id
        recordId
      }
    }
  }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  console.log("GraphQL query result:", result); // Log the result for debugging
    // ✅ Ensure `posts` is defined before using it
  const posts = result.data.allMarkdownRemark.edges;

posts.forEach(({ node }) => {
    if (!node.fields || !node.fields.slug) {
    console.warn(`Skipping node without slug: ${JSON.stringify(node, null, 2)}`);
    return; // Skip this node if slug is missing
  }


    let template = pageTemplate;
    if (node.frontmatter.posttype === "news") 
      template = postTemplate;
    else if (node.frontmatter.posttype === "jobs") 
      template = jobsTemplate;
    
    console.log("Creating page with slug:", node.fields.slug); // Log before creating page
    
    createPage({
      path: node.fields.slug,
      component: template,
      context: { slug: node.fields.slug },
    });
});

 result.data.allAirtable.edges.forEach(({ node }) => {
  if (!node.data.staff_fname || !node.data.staff_lname) {
    console.warn("⚠️ Skipping node without FirstName or LastName:", node);
    return;
  }

  // Generate slug from first and last name
  const staffSlug = `/about/staff-directory/${_.kebabCase(`${node.data.staff_fname}-${node.data.staff_lname}`)}`;
  console.log("✅ Creating staff profile page with slug:", staffSlug);

  createPage({
    path: staffSlug,
    component: staffTemplate,
     context: { id: node.id },
  });
});

  let tags = _.uniq(posts.flatMap(edge => edge.node.frontmatter.tags || []));
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: { tag },
    });
  });

  const paginate = async (type, filter, template, basePath) => {
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          filter: { frontmatter: { posttype: { eq: "${type}" } } }
        ) {
          edges {
            node {
              fields { 
              slug
               }
              frontmatter { 
              title 
              tags 
              posttype 
              }
            }
          }
        }
      }
    `);
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query for ${type}.`);
      throw result.errors;
    }
    const posts = result.data.allMarkdownRemark.edges;
    const postsPerPage = 20;
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/${basePath}` : `/${basePath}/${i + 1}`,
        component: template,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          currentDate: getCurrentDate(),
        },
      });
    });


  await paginate("news", {}, postListTemplate, "news");
  await paginate("jobs", {}, jobsListTemplate, "jobs");
};





  // ✅ Second GraphQL Query (News Posts) - Should be inside `createPages`
  const newsResult = await graphql(`
    {
      allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}
        filter: {frontmatter: {posttype: {eq: "news"}}}
      ) {
        edges {
          node {
            excerpt(pruneLength: 200)
            fields {
              slug
            }
            frontmatter {
              title
              tags
              posttype
            }
          }
        }
      }
    }
  `);

  if (newsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for news.`);
    throw newsResult.errors;
  }

  const newsPosts = newsResult.data.allMarkdownRemark.edges;
  const newsPostsPerPage = 10;
  const numNewsPostPage = Math.ceil(newsPosts.length / newsPostsPerPage);

  Array.from({ length: numNewsPostPage }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/news` : `/news/${i + 1}`,
      component: path.resolve(`./src/templates/postListTemplate.js`),
      context: {
        limit: newsPostsPerPage,
        skip: i * newsPostsPerPage,
        numPages: numNewsPostPage,
        currentPage: i + 1,
      },
    });
  });

  // ✅ Third GraphQL Query (Jobs Posts) - Should be inside `createPages`
  const jobsResult = await graphql(`
    {
      allMarkdownRemark(
        sort: {frontmatter: {date: DESC}}
        filter: {frontmatter: {posttype: {eq: "jobs"}}}
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              posttype
              close_date
            }
          }
        }
      }
    }
  `);

  if (jobsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for jobs.`);
    throw jobsResult.errors;
  }

  const jobsPosts = jobsResult.data.allMarkdownRemark.edges;
  const jobsPostsPerPage = 20;
  const numJobsPostPage = Math.ceil(jobsPosts.length / jobsPostsPerPage);

  Array.from({ length: numJobsPostPage }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/jobs` : `/jobs/${i + 1}`,
      component: jobsListTemplate,
      context: {
        limit: jobsPostsPerPage,
        skip: i * jobsPostsPerPage,
        numPages: numJobsPostPage,
        currentPage: i + 1,
        currentDate: getCurrentDate(),
      },
    });
  });
};