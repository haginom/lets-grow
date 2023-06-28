import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { OrangeButtonInternalLink } from "../../components/button"
import FullWidthPanel from "../../components/fullWidthPanel"
import styled from "styled-components"

const SoonToCome = () => {
  const data = useStaticQuery(graphql`
    {
      logoFunAtHome: file(relativePath: { eq: "logo-fun-at-home.png" }) {
        childImageSharp {
          gatsbyImageData(width: 330)
        }
      }
      logoOrganisations: file(relativePath: { eq: "logo-organisations.png" }) {
        childImageSharp {
          gatsbyImageData(width: 330)
        }
      }
    }
  `)
  return (
    <FullWidthPanel colours="white bg-light-yellow" maxWidth="57rem">
      <StyledLayout>
        <StyledSubHeading className="letsgrowfont ttn ml4-l">
          Soon to come! Two more additions to our collection of offers. Online
          resources for arts, cultural and community organisations and parents
          and carers at home:
        </StyledSubHeading>
      </StyledLayout>
      <StyledSecondLayout className="flex flex-wrap mt4-ns mb4-ns">
        <StyledFlex className="b--white bg-orange bw2-l pa4 pt0 mb2 mb1-l ma3 br4">
          <GatsbyImage
            alt="Lets Grow Workshops for Organisations Logo"
            image={data.logoOrganisations.childImageSharp.gatsbyImageData}
            style={{ margin: "0.5rem auto 0.5rem auto" }}
          />
          <StyledParagraph className="white center">
            For arts, cultural and community organisations. Flexible workshops
            and activities which are super family-friendly.
          </StyledParagraph>
          <div className="flex justify-center">
            <OrangeButtonInternalLink
              className="grow"
              markup={"Keep me updated"}
              navigation={"#contact"}
            />
          </div>
        </StyledFlex>
        <StyledFlex className="b--white bg-lightest-blue bw2-l pa4 pt0 mb2 mb1-l ma3 br4">
          <GatsbyImage
            alt="Lets Grow Fun at Home"
            image={data.logoFunAtHome.childImageSharp.gatsbyImageData}
            style={{ margin: "0.5rem auto 0.5rem auto" }}
          />
          <StyledParagraph>
            For parents, grandparents, carers and nannies.
            <br />
            Playful sessions perfect for enjoyment in a home setting.
          </StyledParagraph>
          <div className="w-100 flex justify-center">
            <OrangeButtonInternalLink
              className="grow"
              markup={"Keep me Updated"}
              navigation={"#contact"}
            />
          </div>
        </StyledFlex>
      </StyledSecondLayout>
    </FullWidthPanel>
  )
}

const StyledSubHeading = styled.h2`
  font-size: 1.5rem;
  @media screen and (min-width: 60em) {
    font-size: 2.25rem;
  }
`

const StyledLayout = styled.div`
  max-width: 54rem;
  font-size: 2rem;
`

const StyledSecondLayout = styled.div`
  max-width: 58rem;
  justify-content: center;
`

const StyledParagraph = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 60em) {
    font-size: 0.875rem;
  }
`

const StyledFlex = styled.div`
  flex: 1 1 420px;
  max-width: 446px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default SoonToCome
