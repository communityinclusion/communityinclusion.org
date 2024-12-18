
const SegfaultHandler = require('segfault-handler');
SegfaultHandler.registerHandler('crash.log');
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  let slug;
 
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode,basePath: `pages` }); // basePath: `pages`
    console.log(createFilePath({ node, getNode, basePath: `pages` }))
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
if (node.internal.type === `Airtable` && node.table === `Staff`) {
 slug = `about/staff-directory/${node.data.Name.replace(/ /g, "-")
 .replace(/[,&]/g, "")
 .toLowerCase()}/`;

  // Add slug as a field on the node.
 createNodeField({ node, name: `slug`, value: slug });
 }
};

exports.createPages = async function ({ actions, graphql, reporter }) {

console.log("====================================");
console.log(`createPages entered`);
console.log("====================================");
const { createPage } = actions;
  const postListTemplate = path.resolve(`./src/templates/postListTemplate.js`);
  const postTemplate = path.resolve(`./src/templates/postTemplate.js`);
  const jobsListTemplate = path.resolve(`./src/templates/jobsListTemplate.js`);
  const jobsTemplate = path.resolve(`./src/templates/jobsTemplate.js`);
  const tagTemplate = path.resolve(`./src/templates/tagTemplate.js`);
  const pageTemplate = path.resolve(`./src/templates/pageTemplate.js`);
  const staffTemplate = path.resolve(`./src/templates/staffTemplate.js`);

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



  return new Promise(async resolve => {

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
        id
        fields {
          slug
        }
        data {
          Name
        }
        recordId
        table
      }
    }
  }
}
`
 )
 // Run news graphql queries
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
`)

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
`)
if (result.errors) {
  throw result.errors
}

 const posts = result.data.allMarkdownRemark.edges;
result.data.allMarkdownRemark.edges.forEach(edge => {
   if (edge.node.frontmatter.posttype === 'news') {
    createPage({
        path: edge.node.fields.slug,
        component: postTemplate,
        context: {
            slug: edge.node.fields.slug,
        }
    });
 }

 else if (edge.node.frontmatter.posttype === 'jobs') {
  createPage({
      path: edge.node.fields.slug,
      component: jobsTemplate,
      context: {
          slug: edge.node.fields.slug,
      }
  });
}

  else {
      createPage({
      path: edge.node.fields.slug,
      component: pageTemplate,
      context: {
          slug: edge.node.fields.slug,
      },
  })
}


result.data.allAirtable.edges.forEach(({ node}) => {
  createPage({
    path:  node.fields.slug,
    component: staffTemplate,
    context: {
      slug:  node.fields.slug,
    },
  })
})

})




  // create Tags pages
  // pulled directly from https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
  let tags = [];
  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });
  // Eliminate duplicate tags
  tags = _.uniq(tags);
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    });
  });




//   Create blog post list pages
const newsPosts = newsResult.data.allMarkdownRemark.edges;
const newsPostsPerPage = 20;
const numNewsPostPage = Math.ceil(newsPosts.length / newsPostsPerPage);

  Array.from({ length: numNewsPostPage }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/news` : `/news/${i + 1}`,
      component: postListTemplate,
       context: {
        limit: newsPostsPerPage,
        skip: i * newsPostsPerPage,
        numPages: numNewsPostPage,
         currentPage: i + 1,
       },
   });
 });
//   Create jobs post list page
 const jobsPosts = jobsResult.data.allMarkdownRemark.edges;
 const jobsPostsPerPage = 20;
 const numJobsPostPage = Math.ceil(jobsPosts.length / jobsPostsPerPage);
 
   Array.from({ length: numJobsPostPage }).forEach((_, i) => {
     createPage({
       path: i === 0 ? `/jobs` : `/jobs/${i + 1}`,
       component: jobsListTemplate,
        context: {
         limit: jobsPostsPerPage,
         skip: i *  jobsPostsPerPage,
         numPages: numJobsPostPage,
          currentPage: i + 1,
          currentDate: getCurrentDate()
        },
    });
  });
 

 resolve()
});
}

