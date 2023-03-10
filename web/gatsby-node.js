const path = require(`path`)
//function for creating slugs
const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
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
  const videoPageTemplate = path.resolve(`src/templates/videos.js`)
  const themePageTemplate = path.resolve(`src/templates/themes.js`)
  const sessionPageTemplate = path.resolve(`src/templates/session.js`)
  const result = await graphql(`
    query {
      allSanitySessionResources(filter: { fileCategory: { eq: "video" } }) {
        edges {
          node {
            id
            name
          }
        }
      }
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
      allSanitySongs {
        edges {
          node {
            id
            name
            artist
          }
        }
      }
    }
  `)

  result.data.allSanitySessionResources.edges.forEach(edge => {
    const id = edge.node.id
    const name = edge.node.name
    createPage({
      path: `portal/resources-library/${slugify(name)}`,
      component: videoPageTemplate,
      context: {
        id,
      },
    })
  })
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
  result.data.allSanitySongs.edges.forEach(edge => {
    const id = edge.node.id
    const name = edge.node.name
    const artist = edge.node.artist
    createPage({
      path: `portal/songs/${slugify(name)}-${slugify(artist)}`,
      component: videoPageTemplate,
      context: {
        id,
      },
    })
  })
}
