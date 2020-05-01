const path = require('path')
const _ = require('lodash')
const { createFilePath } = require('gatsby-source-filesystem')
const striptags = require(`striptags`)
const lunr = require(`lunr`)
const { GraphQLJSONObject } = require("graphql-type-json")
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const sharp = require('sharp')

sharp.cache(false);
sharp.simd(false);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`./src/templates/postTemplate.js`);
  const tagTemplate = path.resolve(`./src/templates/tagTemplate.js`);
  const postListTemplate = path.resolve(`./src/templates/postListTemplate.js`);
  const pageTemplate = path.resolve(`./src/templates/pageTemplate.js`);

  return graphql(`
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
  }
`
).then(result => {
  if (result.errors) {
  return Promise.
  //  console.log(result.errors);
  //  reject(result.errors);
 // }
 reporter.panicOnBuild(`Error while running GraphQL query.`)
// return
}


 // const posts = result.data.allMarkdownRemark.edges;
 // result.data.allMarkdownRemark.edges.forEach(edge => 


{/** const posts = result.data.allMarkdownRemark.edges;

 posts.forEach(({ node }) => {


    {
  if (edge.node.frontmatter.posttype === 'news') {
    createPage({
      path: `/news${edge.node.fields.slug}`,
      component: postTemplate,
      context: {
        slug: edge.node.fields.slug
      }
    });
  } else { // blog post
    createPage({
      path: edge.node.fields.slug,
      component: pageTemplate,
      context: {
        slug: edge.node.fields.slug
      }
    });
  }
}
})*/} 
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


else {
  createPage({
      path: edge.node.fields.slug,
      component: pageTemplate,
      context: {
          slug: edge.node.fields.slug,
      },
  })
}
})
 // )
{/*
const posts = result.data.allMarkdownRemark.edges;

 posts.forEach(({ node }) => {
   createPage({
     path: node.fields.slug,
     component: pageTemplate,
     context: { slug: node.fields.slug }, // additional data can be passed via context
   });
 });
*/}


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
 const postsPerPage = 4;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/news` : `/news/${i + 1}`,
      component: postListTemplate,
       context: {
        length : posts.length,
        limit: postsPerPage,
        skip: i * postsPerPage,
         numPages,
         currentPage: i + 1,
       },
   });
 });
});
}



exports.onCreateNode = ({ node, actions, getNode }) => {
const { createNodeField } = actions;
fmImagesToRelative(node) // convert image paths for gatsby images
if (node.internal.type === `MarkdownRemark`) {
  const slug = createFilePath({ node, getNode,basePath: `pages` }); // basePath: `pages`
 // console.log(createFilePath({ node, getNode, basePath: `pages` }))
  createNodeField({
    name: `slug`,
    node,
    value: slug,
  });
}
};

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