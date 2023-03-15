import React from "react"
import FullWidthPanel from "../../components/fullWidthPanel"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  StyledEventContainer,
  StyledTitle,
  StyledTag,
  ButtonContainer,
  Paragraph,
} from "../../components/styled/eventTypeStyles"
import { OrangeButtonInternalLink } from "../../components/button"
import RoundedImg from "../../components/roundedImg"

const HeadlineShow = ({ data }) => (
  <FullWidthPanel maxWidth="64rem" colours="bg-dark-green white">
    <div id="headlineShow"></div>
    <StyledEventContainer>
      <Rows wrap="wrap">
        <StyledTitle className="bradbunfont" fs="4rem">
          <span>Mr. Bloom & his Band</span>
        </StyledTitle>
        <StyledTag className="bg-washed-green white letsgrowfont">
          Headline Show
        </StyledTag>
      </Rows>
      <Rows wrap="wrap-reverse" className="mt4">
        <TextWrapper>
          <Paragraph className="fw6">
            All the fabulous musical hits from Mr. Bloom’s well-loved TV shows
            as well as numerous cheeky covers and banter. Audiences love to
            participate!
          </Paragraph>
          <Paragraph>
            At the end of a long day’s gardening, once the veggies are asleep,
            Mr. Bloom loves to get together with his musical friends on the
            allotment and play some songs.
          </Paragraph>
          <Paragraph>
            Our headline show is typically 45-60 minutes long and features Mr.
            Bloom and his band of merry gardeners, Peggy the dancing broad bean
            and our array of giant inflatable vegetables.
          </Paragraph>
          <Paragraph>Mr. Bloom meet and greets can also be arranged!</Paragraph>
        </TextWrapper>
        <ImgContainer>
          <RoundedImg
            image={data.hsTwo?.childImageSharp.gatsbyImageData}
            alt="Mr Bloom & Band"
          />
        </ImgContainer>
      </Rows>
      <LastRow>
        <RoundedImg
          image={data.hs1Cover?.childImageSharp.gatsbyImageData}
          alt="Stage of Mr Bloom & Band playing live"
        />
        <RoundedImg
          image={data.hsThree?.childImageSharp.gatsbyImageData}
          alt="Crowd at Mr Bloom & Band playing live"
        />
      </LastRow>
    </StyledEventContainer>
    <ButtonContainer>
      <OrangeButtonInternalLink
        className="center grow"
        navigation={"/#contact"}
        markup={"get in touch"}
      />
    </ButtonContainer>

    <StyledEventContainer className="flex flex-wrap" gap="1rem">
      <FirstColumn>
        <StyledTitle className="bradbunfont" fs="9.4rem" lh="7rem">
          <span>Mr. Bloom</span>
        </StyledTitle>
        <br />
        <StyledTitle className="bradbunfont mb3" fs="6rem" lh="4rem">
          <span>One Man Show</span>
        </StyledTitle>

        <GatsbyImage
          imgStyle={{ borderRadius: "15px 15px 0px 0px" }}
          style={{ borderRadius: "15px 15px 0px 0px" }}
          image={data.hsFour.childImageSharp.gatsbyImageData}
          alt="Crowd at Mr Bloom & Band playing live"
        />
        <GatsbyImage
          imgStyle={{ borderRadius: "0px 0px 15px 15px" }}
          style={{ borderRadius: "0px 0px 15px 15px", marginTop: "-0.1rem" }}
          image={data.hsFive.childImageSharp.gatsbyImageData}
          alt="Crowd at Mr Bloom & Band playing live"
        />
      </FirstColumn>
      <SecondColumn>
        <StyledTag className="w-100 bg-washed-green white letsgrowfont mb2">
          Headline Show
        </StyledTag>

        <TextWrapper mw="380px" mb="1rem" className="mt2">
          <Paragraph className="fw6">
            Mr. Bloom, CBeebies best loved Gardener, brings you a fantastic
            one-man stage show based on his award-winning TV shows.
          </Paragraph>
          <Paragraph>
            Audiences are entertained and educated by songs, stories and games
            led by Mr. Bloom himself, helped out by his team of giant inflatable
            vegetables!
          </Paragraph>
          <Paragraph>
            Perfect for festivals, community events, special occasions and more,
            headline shows can be tailored to suit your event and are typically
            30 minutes long.
          </Paragraph>
          <Paragraph>Mr. Bloom meet and greets can also be arranged!</Paragraph>
        </TextWrapper>
        <GatsbyImage
          imgStyle={{ borderRadius: "15px" }}
          style={{ borderRadius: "15px" }}
          image={data.hsSix.childImageSharp.gatsbyImageData}
          alt="Crowd at Mr Bloom & Band playing live"
        />
      </SecondColumn>
    </StyledEventContainer>
    <ButtonContainer>
      <OrangeButtonInternalLink
        className="center grow"
        navigation={"/#contact"}
        markup={"get in touch"}
      />
    </ButtonContainer>
  </FullWidthPanel>
)

const Rows = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrap || "nowrap"};
  justify-content: center;
  gap: 2rem;

  > * {
    margin: ${props => props.margin || "0rem"};
  }
  first-child {
    flex: 1 1 34rem;
  }
  h3:last-child {
    flex: 1 1 23rem;
  }
`
const LastRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margintop: -1rem;
  justify-content: center;

  > * {
    flex: 0 1 430px;
    margin: 0.5rem 0.5rem 0rem 0.5rem;
  }
`

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex: 0 0 auto;
  max-width: 520px;
  width: 100%;
`

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  flex: 1 1 360px;

  @media screen and (max-width: 30em) {
    margin-top: -0.5rem;
  }
`

const ImgContainer = styled.div`
  margin-top: -1.5rem;
`

const TextWrapper = styled.div`
  max-width: ${props => props.mw || "30.5rem"};
  margin-bottom: 1rem;
  margin-top:0.5rem;
  align-self: center;
  

  @media screen and (min-width:1146px){
    margin-bottom: ${props => props.mb || "0rem"}
    align-self: flex-end;
  }
  
`

export default HeadlineShow
