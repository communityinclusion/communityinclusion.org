require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const mergePath = (basePath = '/', path = '')=>{
  let result = "/" + basePath + "/" + path
  result = result.replace(/\/+/g, '/')
  return result
}

module.exports = {
siteMetadata: {
  siteUrl: 'https://www.communityinclusion.org',
  title: 'Institute for Community Inclusion',
  description: 'The Institute for Community Inclusion at UMass Boston supports the rights of children and adults with disabilities to participate in all aspects of society.',
  keywords: 'Community Inclusion, UMB, Disabilities',
  twitterUsername: '@ICInclusion',
  author: 'Institute for Community Inclusion',
  image: '/static/ici-150w-1c1c4ac706a0672a9800093794f86167.png',
   social: {
      twitter: `ICInclusion`,
    },
},
 flags: {
    PARALLEL_SOURCING: false,
  },
plugins: [
  {
  resolve: 'gatsby-plugin-robots-txt',
  options: {
    host: 'https://www.communityinclusion.org',
    env: {
      development: {
        policy: [{ userAgent: '*', disallow: ['/'] }]
      },
      production: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  }
}, 
{
  resolve: "@sentry/gatsby"
}, 


  `gatsby-plugin-netlify`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`, 
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
          {
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
            maxWidth: 600,
            showCaptions: ['title'],
            markdownCaptions: true,
          },
        },
     //   {
      //    resolve: `gatsby-remark-prismjs`,
        //  options: {},
     //   },
        {
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
          destinationDir: 'public',
          ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
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
     // {
    //    resolve: `gatsby-remark-responsive-iframe`,
    //    options: {
    //      wrapperStyle: `margin-bottom: 1.0725rem`,
    //    },
     // }
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
    resolve: `gatsby-plugin-sass`,
    options: {
    implementation: require("sass"),
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
      icon: `src/images/icon.png`, // This path is relative to the root of the site.
      crossOrigin: `use-credentials`,
    },
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      typekit: {
        id: 'hss6qfr'
      },
      google: {
        families: ['Open Sans:300,400,500,700', 'Open Sans Condensed:300,700']
      }
    }
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://www.communityinclusion.org`,
    },
  },
  'gatsby-plugin-htaccess',
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
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/pages/news`,
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
  `gatsby-plugin-styled-components`,
  'babel-plugin-styled-components',
  {
    resolve: 'gatsby-plugin-sitemap',
    options: {
      output: '/sitemap',
    },
  },
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
        pathname: '/about/areas-of-emphasis',
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
  pathname: '/jobs',
  crumbLabel: 'Jobs',
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
},
{
  pathname: '/about/fellowships',
  crumbLabel: 'Fellowships',
}
 ],
       // optional: switch to className styling
        // see `useClassNames example with `AutoGen` below
      useClassNames: true,
      },
    },
    {
   resolve: `gatsby-plugin-algolia`,
     options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
       apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries.js"),
     },
   },
 //   {
 //     resolve: 'gatsby-plugin-local-search',
  //    options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
  //      name: 'pages',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
   //     engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
   //     engineOptions: 'speed',

        // GraphQL query used to fetch all data for the search index. This is
        // required.
   //    query: `
 //   query {
 // allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
 //   nodes {
 //     excerpt
 //     fields {
 //       slug
 //     }
 //     frontmatter {
  //      date(formatString: "MMMM DD, YYYY")
   //     title
 //     }
 //   }
//  }
// }
// `,

        // Field used as the reference value for each document.
        // Default: 'id'.
  //      ref: 'slug',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
   //     index: ['title','excerpt', 'body'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
  //      store: ['title', 'excerpt', 'date', 'slug'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
 ////       normalizer: ({ data }) =>
  //        data.allMarkdownRemark.nodes.map((node) => ({
  //          title: node.frontmatter.title,
  //           excerpt: node.excerpt,
  //           date: node.frontmatter.date,
     //           slug: node.fields.slug,
   //            body: node.rawMarkdownBody,
   //          })),
 //     },
//    },
]
}