import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import FullWidthPanel from "../components/fullWidthPanel"
import { SubHeading } from "../components/tachyons/text"
import OrangeButton from "../components/button"

const News = () => {
  return (
    <Layout>
      <FullWidthPanel colours="bg-dark-green white">
        <Seo title="News" />
        <SubHeading className="ml5-l">Lets Grow News</SubHeading>
        <StyledContainer>
          <Centered>
            <Paragraph>Can't see our Facebook news feed?</Paragraph>
            <Position>
              <OrangeButton
                targetBlank={true}
                className="mb3"
                navigation="https://www.facebook.com/plungeboom1"
                markup="click here"
              />
            </Position>
          </Centered>
          <Width>
            <iframe
              id="facebook_timeline"
              title="facebook_plugin"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fplungeboom1&tabs=timeline&width=500&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="500"
              height="1000"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </Width>
        </StyledContainer>
      </FullWidthPanel>
    </Layout>
  )
}

const StyledContainer = styled.div`
  margin-top: 1rem;
  width: 100%;

  @media screen and (min-width: 60em) {
    margin-top: 3rem;
    margin-left: 4rem;
  }
`

const Centered = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
  @media screen and (min-width: 45em) {
    margin-top: -2rem;
  }
`

const Paragraph = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  @media screen and (min-width: 35em) {
    font-size: 1rem;
  }
`

const Position = styled.div`
  margin-left: 1rem;
`

const Width = styled.div`
  max-width: 500px;
  width: 100%;
`
export default News
