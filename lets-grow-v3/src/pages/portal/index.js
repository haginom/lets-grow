import React from "react"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import FullWidthPanel from "../../components/fullWidthPanel"
import WithAuthCheck from "../../components/withAuthCheck"
import { Paragraph, SubHeading } from "../../components/tachyons/text"
import OrangeButton from "../../components/button"
import SessionIntro from "../../content/educationalSettings/sessionIntro"
import { graphql, useStaticQuery } from "gatsby"
import ResourcesLibraryIntro from "../../content/portal/resourcesLib"
import ArtsAwards from "../../content/educationalSettings/artsAwards"
import styled from "styled-components"

const PortalPage = () => {
  const data = useStaticQuery(graphql`
    query {
      flickRosetta: file(
        relativePath: { eq: "vegetables/flick-and-rosette.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: FIXED)
        }
      }
      decorativeOne: file(
        relativePath: { eq: "educationalSettings/decorative-one.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 400, height: 260)
        }
      }
      decorativeTwo: file(
        relativePath: { eq: "educationalSettings/decorative-two.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 490)
        }
      }
      decorativeThree: file(
        relativePath: { eq: "educationalSettings/decorative-three.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 530)
        }
      }
      decorativeFour: file(
        relativePath: { eq: "educationalSettings/decorative-four.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 530)
        }
      }
      lpBabies: file(relativePath: { eq: "portal/lp-1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 280)
        }
      }
    }
  `)
  return (
    <Layout portal>
      <Seo title="Portal" />
      <FullWidthPanel
        image={data.lpBabies.childImageSharp.gatsbyImageData}
        bottom="-3rem"
        left="42rem"
        colours="bg-light-blue white"
        maxWidth="58rem"
      >
        <Container className="mw6 mw8-l center">
          <SubHeading className="letsgrowfont mb2 tc tl-l">
            Getting Started Guide
          </SubHeading>
          <Paragraph className="fw6 tc tl-l">
            New to Let’s Grow? We’ve got you covered...
          </Paragraph>
          <ButtonContainer>
            <OrangeButton
              navigation="/portal/getting-started-guide"
              className="center-m mb3 mt4 grow"
              markup={"let's go"}
            />
          </ButtonContainer>
        </Container>
      </FullWidthPanel>
      <SessionIntro portal data={data} />
      <ArtsAwards portal data={data} />
      <ResourcesLibraryIntro data={data} />
    </Layout>
  )
}

const PortalIndex = ({ data, ...props }) => (
  <WithAuthCheck>
    <PortalPage data={data} {...props} />
  </WithAuthCheck>
)

const Container = styled.div``
const ButtonContainer = styled.div`
  max-width: 200px;
  margin: 0 auto;
  @media screen and (min-width: 60em) {
    margin-left: 5rem;
  }
`
export default PortalIndex
