module.exports = {
  pathPrefix: '/ici-dev',
siteMetadata: {
  siteUrl: 'https://communityinclusion.org',
  title: `Gatsby Default Starter`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  author: `@gatsbyjs`,
},
plugins: [
  `gatsby-plugin-remove-trailing-slashes`,
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      output: `/sitemap.xml`,
      // Exclude specific pages or groups of pages using glob parameters
      // See: https://github.com/isaacs/minimatch
      // The example below will exclude the single `path/to/page` and all routes beginning with `category`
    //  exclude: ["/category/*", `/path/to/page`],
      query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
      serialize: ({ site, allSitePage }) =>
        allSitePage.edges.map(edge => {
          return {
            url: site.siteMetadata.siteUrl + edge.node.path,
            changefreq: `daily`,
            priority: 0.7,
          }
        })
    }
  },
  {
    resolve: `gatsby-plugin-breadcrumb`,
    options: {
      sitemapPath: `/sitemap.xml`,
    },
  },
  `gatsby-transformer-excel`,
  {	resolve: `gatsby-source-filesystem`,
    options: {
      raw: false,
      path: `${__dirname}/src/data`,
      name: `data`,
    },
    },
`gatsby-plugin-twitter`,
`gatsby-plugin-netlify-cms`,
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
   {
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/src/pages`,
    name: "pages",
  },
},
      {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        },
`gatsby-remark-copy-linked-files`,
   {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 1080,
    },
  },
 

  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
],
},
},
],
}