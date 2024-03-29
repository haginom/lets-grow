import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import GraphQLErrorList from "../components/portal/graphql-error-list"
import Session from "../components/portal/sessionPage"
import WithAuthCheck from "../components/withAuthCheck"

export const query = graphql`
  query SessionPageTemplateQuery($id: String!) {
    session: sanitySessions(id: { eq: $id }) {
      name
      id
      color {
        hex
      }
      slug {
        current
      }
      image {
        crop {
          bottom
          left
          right
          top
        }
        hotspot {
          height
          width
          x
          y
        }
        asset {
          url
        }
      }
      visitingBaby
      sessionResources {
        id
        fileCategory
        fileAttachment {
          fileName
          file {
            asset {
              url
            }
          }
        }
        url {
          linkName
          url
        }
      }
      songs {
        id
        fileCategory
        fileAttachment {
          fileName
          file {
            asset {
              url
            }
          }
        }
        url {
          linkName
          url
        }
      }
      scrapbook {
        id
        fileCategory
        fileAttachment {
          fileName
          file {
            asset {
              url
            }
          }
        }
        url {
          linkName
          url
        }
      }
      topTips {
        id
        fileCategory
        fileAttachment {
          fileName
          file {
            asset {
              url
            }
          }
        }
        url {
          linkName
          url
        }
      }
      email {
        id
        name
        fileCategory
        videoResources {
          name
          video {
            asset {
              filename
              assetId
              playbackId
            }
          }
        }
      }
      videoCall {
        id
        name
        fileCategory
        videoResources {
          name
          video {
            asset {
              filename
              assetId
              playbackId
            }
          }
        }
      }
      sessionPlan2 {
        id
        fileCategory
        fileAttachment {
          fileName
          file {
            asset {
              url
            }
          }
        }
        url {
          linkName
          url
        }
      }
      sessionPlan1 {
        id
        fileCategory
        fileAttachment {
          fileName
          file {
            asset {
              url
            }
          }
        }
        url {
          linkName
          url
        }
      }
      videoStill {
        asset {
          url
        }
        crop {
          bottom
          right
          left
          top
        }
        hotspot {
          height
          width
          x
          y
        }
      }
      whiteArt {
        asset {
          url
        }
        crop {
          bottom
          right
          left
          top
        }
        hotspot {
          height
          width
          x
          y
        }
      }
      characterPrep {
        id
        fileCategory
        fileAttachment {
          fileName
          file {
            asset {
              url
            }
          }
        }
        url {
          linkName
          url
        }
      }
      howToVideo {
        name
        fileCategory
        id
        videoResources {
          name
          video {
            asset {
              playbackId
            }
          }
        }
      }
    }
  }
`
const SessionTemplateBody = props => {
  const { data, errors } = props
  const session = data && data.session

  if (errors) {
    return (
      <Layout portal>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  return <>{session && <Session {...session} />}</>
}

const SessionTemplate = ({ data, ...props }) => (
  <WithAuthCheck>
    <SessionTemplateBody data={data} {...props} />
  </WithAuthCheck>
)

export default SessionTemplate
