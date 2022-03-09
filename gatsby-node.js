const path = require('path')
const _ = require('lodash')
const { createFilePath } = require('gatsby-source-filesystem')
const { GraphQLJSONObject } = require(`graphql-type-json`)
const striptags = require(`striptags`)
const lunr = require(`lunr`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images-v2')

const sharp = require('sharp')

sharp.cache(false);
sharp.simd(false);



exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug;
  fmImagesToRelative(node) // convert image paths for gatsby images
  
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

  return new Promise(async resolve => {

    const result = await graphql(`
  { 
	  allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
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
    sort: { fields: [frontmatter___date], order: DESC },
    filter: {frontmatter: {posttype: {eq: "news"}}}
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
`)

const jobsResult = await graphql(`
{ 
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC },
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

 
 if (edge.node.frontmatter.posttype === 'jobs') {
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
const newsPostsPerPage = 8;
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
 const jobsPostsPerPage = 1;
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
        },
    });
  });
 

 resolve()
});
}


// Lunr search implementation


exports.createResolvers = ({ cache, createResolvers }) => {
  createResolvers({
    Query: {
      LunrIndex: {
        type: GraphQLJSONObject,
        resolve: (source, args, context, info) => {
          const postNodes = context.nodeModel.getAllNodes({
            type: `MarkdownRemark`,
          })
          const type = info.schema.getType(`MarkdownRemark`)
          return createIndex(postNodes, type, cache)
        },
      },
    },
  })
};


const createIndex = async (postNodes, type, cache) => {
  const cacheKey = `IndexLunr`
  const cached = await cache.get(cacheKey)
  if (cached) {
    return cached
  }
  const documents = []
  const store = {}
  // iterate over all posts
  for (const node of postNodes) {
    const { slug } = node.fields
    const title = node.frontmatter.title
    const [html, excerpt] = await Promise.all([
      type.getFields().html.resolve(node),
      type.getFields().excerpt.resolve(node, { pruneLength: 200 }),
    ])
    // once html is resolved, add a slug-title-content object to the documents array
    documents.push({
      slug,
      title: node.frontmatter.title,
      content: striptags(html),
    })

    store[slug] = {
      title,
      excerpt,
    }
  }  
  const index = lunr(function() {
  this.ref("slug")
  this.field("title")
  this.field("content")
  for (const doc of documents) {
    this.add(doc)
  }
})

const json = { index: index.toJSON(), store }
await cache.set(cacheKey, json)
return json
}

