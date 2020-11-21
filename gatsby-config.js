require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
//const config = require('./config')

// const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

// console.log("GATSBY PATH PREFIX: ", pathPrefix)
//if (!process.env.GATSBY_AIRTABLE_APIKEY) {
//  throw new Error("process.env.GATSBY_AIRTABLE_APIKEY is undefined.")
// }


module.exports = {
  pathPrefix:'/',
siteMetadata: {
  siteUrl: 'https://icibeta.netlify.app',
  title: 'Institute for Community Inclusion',
  description: 'The Institute for Community Inclusion at UMass Boston supports the rights of children and adults with disabilities to participate in all aspects of society.',
  keywords: 'Community Inclusion, UMB, Disabilities',
  author: '@ICInclusion',
  image: 'https://icibeta.netlify.app/static/ici-150w-1c1c4ac706a0672a9800093794f86167.png'
},
plugins: [
  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      excerpt_separator: `<!-- end -->`,
      plugins: [{
        resolve: `gatsby-remark-vscode`,
        options: {
          theme: 'Abyss' // Or install your favorite theme from GitHub
        }
      },
      {
       resolve: `gatsby-remark-relative-images-v2`,
       options: {
        name: "images" // Must match the source name ^
      },
      },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 400,
            showCaptions: [`title`],
            markdownCaptions: true,
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {},
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
      name: `Community-Inclusion`,
      short_name: `ici`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/ici-icon.png`, // This path is relative to the root of the site.
      crossOrigin: `use-credentials`,
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
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Open Sans', 'Montserrat']
      }
    }
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://icibeta.netlify.app`,
    },
  },
    `gatsby-plugin-offline`,
`gatsby-plugin-twitter`,
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
          mapping: { staff_photo: `fileNode` },
        //  queryName: `Staff`, // optionally default is false - makes all records in this table a separate node type, based on your tableView, or if not present, tableName, e.g. a table called "Fruit" would become "allAirtableFruit". Useful when pulling many airtables with similar structures or fields that have different types. See https://github.com/jbolda/gatsby-source-airtable/pull/52.
        //   mapping: {  
        //    Name: "text/markdown",
        //    }, 
        },
      ]
    }
  },

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
  },
  {
    pathname: '/',
    crumbLabel: 'Home',
},
{
  pathname: '/about',
  crumbLabel: 'About',
},
{
  pathname: '/news',
  crumbLabel: 'News',
},
{
  pathname: 'news/',
  crumbLabel: 'News',
},
{
  pathname: '/projects',
  crumbLabel: 'Projects',
},
{
  pathname: '/services',
  crumbLabel: 'Services',
},
{
  pathname: '/publications',
  crumbLabel: 'Publications',
},
{
  pathname: '/search',
  crumbLabel: 'Search',
},
{
  pathname: '/about/staff-directory',
  crumbLabel: 'Staff Directory',
}
 ],
       // optional: switch to className styling
        // see `useClassNames example with `AutoGen` below
      useClassNames: true,
      trailingSlashes: true,
        // optional: if you are using path prefix
      usePathPrefix: '/',
     
      },
    },
],
}