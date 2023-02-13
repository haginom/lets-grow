const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const themePageTemplate = path.resolve(`src/templates/themes.js`)
  const result = await graphql(`
    query {
      allSanityTheme {
        edges {
          node {
            id
            name
            slug {
              current
            }
          }
        }
      }
    }
  `)
  result.data.allSanityTheme.edges.forEach(edge => {
    const id = edge.node.id
    createPage({
      path: `portal/${edge.node.slug.current}`,
      component: themePageTemplate,
      context: {
        id,
      },
    })
  })
}
