require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const config = require('./config')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

// console.log("GATSBY PATH PREFIX: ", pathPrefix)
//if (!process.env.GATSBY_AIRTABLE_APIKEY) {
//  throw new Error("process.env.GATSBY_AIRTABLE_APIKEY is undefined.")
// }


module.exports = {
siteMetadata: {
  siteUrl: config.siteUrl + pathPrefix,
  title: config.siteTitle,
  description: config.siteDescription,
  author: config.siteAuthor,
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
      start_url: `/`,
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

  
  {	resolve: `gatsby-source-filesystem`,
    options: {
      raw: false,
      path: `${__dirname}/src/data`,
      name: `data`,
    },
    },
    {
      resolve: `gatsby-transformer-excel`,
      options: {
        raw: false,
      },
    },
    `gatsby-plugin-offline`,
`gatsby-plugin-twitter`,
`gatsby-plugin-netlify-cms`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-catch-links`,

  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages/`,
    },
  },
  {
    resolve: "gatsby-plugin-page-creator",
    options: {
      path: `${__dirname}/src/pages`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `files`,
      path: `${__dirname}/src/files`,
    },
  },    {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Open Sans', 'Montserrat']
      }
    }
  },
      {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
        resolve: `gatsby-remark-relative-images-v2`,
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 300,
            showCaptions: [`title`, `alt`],
            markdownCaptions: true,
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {},
        },
        {
          resolve: `gatsby-source-airtable`,
          options: {
            apiKey: process.env.GATSBY_AIRTABLE_APIKEY, // may instead specify via env, see below
           // concurrency: 5, // default, see using markdown and attachments for more information
            tables: [
              {
                baseId: `appJQcdnZUpt9xJgo`,
                tableName: `Staff`,
                tableView: `Grid view`, // optional
              //  queryName: `Staff`, // optionally default is false - makes all records in this table a separate node type, based on your tableView, or if not present, tableName, e.g. a table called "Fruit" would become "allAirtableFruit". Useful when pulling many airtables with similar structures or fields that have different types. See https://github.com/jbolda/gatsby-source-airtable/pull/52.
              //   mapping: {  
              //    Name: "text/markdown",
              //    }, 
              },
            ]
          }
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
          destinationDir: 'public',
          },
          },
        {
        resolve: `gatsby-remark-embed-video`,
        options: {
          width: 800,
          ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
          height: 400, // Optional: Overrides optional.ratio
          related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
          noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
          urlOverrides: [
            {
              id: 'wistia',
              embedURL: (videoId) => `http://fast.wistia.net/embed/iframe/${videoId}`,
            }
          ]
          //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
        }
      },
      {
        resolve: `gatsby-remark-responsive-iframe`,
        options: {
          wrapperStyle: `margin-bottom: 1.0725rem`,
        },
      }
    ]
  }
},
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, 
        {
          resolve: `gatsby-plugin-material-ui`,
          options: {
            stylesProvider: {
              injectFirst: true,
            },
          },
        },
  `gatsby-plugin-styled-components`,
  

  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline

//`gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
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
   crumbLabelUpdates: [
     {
        pathname: '/areas-of-emphasis',
       crumbLabel: 'Areas of Emphasis',
  }
 ],
       // optional: switch to className styling
        // see `useClassNames example with `AutoGen` below
      useClassNames: true,
        // optional: if you are using path prefix
      // usePathPrefix: '/news',
      },
    },
    `gatsby-plugin-offline`,
],
pathPrefix: '/ici-dev',
}