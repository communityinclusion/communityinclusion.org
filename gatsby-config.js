module.exports = {
  pathPrefix: '/ici-dev',
siteMetadata: {
  siteUrl: "http://localhost:8000",
  title: `Gatsby Default Starter`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  author: `@gatsbyjs`,
},
plugins: [
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-WSWCPVW",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },

      // Specify optional GTM environment details.
      // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
      // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
      // dataLayerName: "YOUR_DATA_LAYER_NAME",
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/ici-dev`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/ici-icon.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: "gatsby-plugin-sentry",
    options: {
      dsn: "https://3d981740717e4fe8a72e44cce3060d6e@sentry.io/1875087",
      // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
      environment: process.env.NODE_ENV,
      enabled: (() => ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
    }
  },
  {
    resolve: `gatsby-transformer-excel`,
    options: {
      raw: false,
    },
  },
  
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
  `gatsby-plugin-catch-links`,

  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `page`,
      path: `${__dirname}/src/pages/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  //{
   // resolve: `gatsby-source-filesystem`,
   // options: {
   //    name: `markdown-pages`,
  //     path: `${__dirname}/src/markdown-pages`,
  //  },
  // },

      {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 580,
            showCaptions: 'true',
          },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        
      ],
    },
  },
  `gatsby-plugin-styled-components`,
  
  {
    resolve: 'gatsby-remark-copy-linked-files',
    options: {
    destinationDir: 'public',
    },
    },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,


// `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: `true`,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Home`,
        // exlude: optional, include to overwrite these default excluded pages
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
    //     crumbLabelUpdates: optional, update specific crumbLabels in the path
   // crumbLabelUpdates: [
  //   {
   //      pathname: '/areas-of-emphasis/',
   //     crumbLabel: 'Areas of Emphasis ',
  // }
  // ],
       // optional: switch to className styling
        // see `useClassNames example with `AutoGen` below
      useClassNames: true,
        // optional: if you are using path prefix
      // usePathPrefix: '/news',
      },
    },
],
}