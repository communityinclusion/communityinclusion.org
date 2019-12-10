module.exports = {
  pathPrefix: '/ici-dev',
siteMetadata: {
  siteUrl: "http://localhost:8000",
  title: `Gatsby Default Starter`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  author: `@gatsbyjs`,
},
plugins: [
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
    name: 'pages',
  },
},
`gatsby-plugin-sharp`,
`gatsby-transformer-sharp`,
      {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1080,
          },
        },
  {
    resolve: 'gatsby-remark-copy-linked-files',
    options: {
      destinationDir: 'static',
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
      icon: `src/images/ici-icon.png`, // This path is relative to the root of the site.
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
],
},
},
`gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        useClassNames: true,
      },
    },
],
}