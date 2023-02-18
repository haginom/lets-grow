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
  const introSessionPageTemplate = path.resolve(`src/templates/intro.js`)
  const themePageTemplate = path.resolve(`src/templates/themes.js`)
  const sessionPageTemplate = path.resolve(`src/templates/session.js`)
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
      allSanityIntroSessions {
        edges {
          node {
            slug {
              current
            }
            id
            name
          }
        }
      }
      allSanitySessions {
        edges {
          node {
            slug {
              current
            }
            id
            name
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
  result.data.allSanityIntroSessions.edges.forEach(edge => {
    const id = edge.node.id
    createPage({
      path: `portal/sessions/${edge.node.slug.current}`,
      component: introSessionPageTemplate,
      context: {
        id,
      },
    })
  })
  result.data.allSanitySessions.edges.forEach(edge => {
    const id = edge.node.id
    createPage({
      path: `portal/sessions/${edge.node.slug.current}`,
      component: sessionPageTemplate,
      context: {
        id,
      },
    })
  })
}
