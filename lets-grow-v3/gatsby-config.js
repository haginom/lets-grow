/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  siteMetadata: {
    title: `Let's Grow`,
    description: `Let's Grow is an innovative, multi-media resource for educational settings that offers an irresistible invitation to learn and play for children and their educators.`,
    author: `@haginom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
        resolve: 'gatsby-plugin-manifest',
        options: {
          icon: 'src/images/favicon.png',
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
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ],
};

