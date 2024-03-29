/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Let's Grow`,
    description: `Let's Grow is an innovative, multi-media resource for educational settings that offers an irresistible invitation to learn and play for children and their educators.`,
    author: `@haginom`,
    siteUrl: `https://letsgrow.org.uk/`,
    image: `./images/logo large.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-anchor-links`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
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
        name: `educational-resources`,
        path: `${__dirname}/src/educational-resources`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`],
          placeholder: `blurred`,
          tracedSVGOptions: {},
          blurredOptions: {},
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        version: "v1",
        projectId: "a6vt2u3f",
        dataset: "production",
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: false,
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: "a6vt2u3f",
        dataset: "production",
      },
    },
  ],
}
