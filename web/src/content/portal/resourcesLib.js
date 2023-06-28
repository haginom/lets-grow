import React from "react"
import FullWidthPanel from "../../components/fullWidthPanel"
import { OrangeButton } from "../../components/button"
import { Paragraph, SubHeading } from "../../components/tachyons/text"
import styled from "styled-components"
import FloatingPhoto from "../../components/floatingPhoto"

const ResourcesLibraryIntro = ({ data }) => {
  return (
    <FullWidthPanel colours="bg-purple white" maxWidth="58rem">
      <SubHeading className="letsgrowfont self-start mb2 tc tl-l">
        Let's Grow Resources Library
      </SubHeading>
      <Container className="flex flex-wrap-reverse justify-between-l justify-center mw6 center mw-100-l">
        <TextContainer>
          <Paragraph>
            Let’s Grow content covers engaging themes which are flexible enough
            for teachers to fit into wider learning plans. Sessions are brought
            to life with the help of innovative, multimedia resources and can be
            delivered in a variety of ways to suit the setting.
          </Paragraph>
          <ButtonContainer>
            <OrangeButton
              navigation={"/portal/resources-library"}
              markup={"Let's Go"}
              className="grow mt4-l ml5-l center "
            />
          </ButtonContainer>
        </TextContainer>
        <FloatingPhoto
          alt="Mr Bloom"
          className="mv4 mv0-l"
          image={data.resourcesLibrary.childImageSharp.gatsbyImageData}
          direction="right"
        />
      </Container>
    </FullWidthPanel>
  )
}

const Container = styled.div`
  div:first-child {
    flex: 0 1 35rem;
  }
  div:last-child {
    flex: 0 1 20rem;
  }
`

const TextContainer = styled.div`
  margin-right: 1rem;
  @media screen and (min-width: 35rem) and (max-width: 60rem) {
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 60em) {
    max-width: 42rem;
  }
`
const ButtonContainer = styled.div`
  max-width: 200px;
  margin: 0 auto;
  @media screen and (min-width: 60em) {
    margin-left: 5rem;
  }
`
export default ResourcesLibraryIntro
