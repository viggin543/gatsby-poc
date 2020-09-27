import dontenv from 'dotenv'
// todo: use secrets in gatsby config
if (process.env.NODE_ENV !== 'production') {
  dontenv.config()
}

export default {
  siteMetadata: {
    title: `PIZZZZAAA`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-styled-components`, // todo:  gatsby styled components: enables to compile critical css and other optimizations with styled components !!!
    // npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/
    {
      resolve: `gatsby-source-filesystem`, // todo: use a plugin as object ( resolve: is whre you write the name )
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bananas`,
        path: `${__dirname}/src/pages/bananas`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_SECRET,
      },
    },
    {
      resolve: 'gatsby-source-sanity', // run: 'sanity graphql deploy production' to enable graphql api
      // checkout this plugin -> gatsby-source-sanity
      // https://github.com/sanity-io/gatsby-source-sanity#graphql-api

      options: {
        projectId: 'noucstet',
        dataset: 'production',
        watchMode: true, // todo: when in dev mode this does hot reloading
        token: process.env.SANITY_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`
  ],
}
