import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import WithAuthCheck from "../../components/withAuthCheck"
import HandyHintTitle from "../../components/portal/hhTitle"
import FullWidthPanel from "../../components/fullWidthPanel"
import { StaticImage } from "gatsby-plugin-image"
import { IconLinkStatic } from "../../components/iconButton"
import { Link } from "gatsby"
import { GrowingCalender } from "../../content/portal/get-growing-guide/growingCalender"

const Ggg = () => {
  return (
    <>
      <Layout portal>
        <Seo title="Portal" />
        <HandyHintTitle title="get growing guide" />
        <FullWidthPanel colours="bg-gold white" maxWidth="56rem">
          <Subheading className="coffeeTea mb1">Overview</Subheading>
          <Paragraph className="fw6">
            Our easy to follow guide enables you to begin to integrate growing
            fruits and vegetables into your planning in a way that is accessible
            to all settings and compliments the academic year perfectly. No
            previous gardening experience is required. You will learn everything
            that you need to know in order to build your confidence,
            understanding and get your children growing successfully together.
          </Paragraph>
          <Paragraph>
            We want you to be successful whatever your circumstances, whether
            you have huge school garden, or a just a few pots in a yard. We have
            chosen a range of easy to grow plants that will give you and your
            children a positive growing experience. Our guide is based around
            container planting in small spaces in order to make it accessible to
            all.
          </Paragraph>
          <Paragraph>
            Some things will grow better than others in your situation and there
            are many factors beyond your control that can impact upon your crops
            (weather, bugs and other animals, curious little fingers!) so don’t
            be too hard on yourself if some things don’t turn out perfectly.
          </Paragraph>
          <Paragraph className="mb4">
            There is a lot of choice and information here, don’t try to do
            everything, choose the things that excite a harvest! Mr. Bloom’s top
            tip is to try potatoes first. you the most. Enjoy watching things
            grow and seeing daily changes, as much as (hopefully) enjoying
          </Paragraph>
          <div className="flex mt4 mb5">
            <div className="w-75 mr3">
              <Subheading className="coffeeTea mb2">
                Tools & Equipment
              </Subheading>
              <Paragraph>
                You don’t need lots of specialist equipment to get growing to
                get started. Often some compost and a container of the right
                size is enough
              </Paragraph>
              <Paragraph>
                You can use a range of recycled vessels as planters, from old
                ‘bags for life’, to yoghurt pots. Just make sure that you add
                drainage holes to the bottom of solid containers, so that your
                plants don’t rot.
              </Paragraph>
              <Paragraph>
                A watering can is useful, but you can use a jug, or empty drinks
                bottles if you don’t have one. You can use old tubs as plastic
                scoops for compost if you like, but compost is fine for children
                to touch with their hands, as long as they wash them afterwards.
              </Paragraph>
            </div>
            <div className="ml-2">
              <StaticImage
                style={{ marginTop: "-1rem" }}
                src="../../images/portal/get-growing-guide/CompostBag.png"
              />
            </div>
          </div>
        </FullWidthPanel>
        <FullWidthPanel colours="bg-gold white" maxWidth="58rem">
          <Subheading className="coffeeTea mb4">Contents</Subheading>
          <GridContainer>
            <GridItem className="mb4">
              <IconLinkStatic
                navigation="#"
                icon={
                  <StaticImage src="../../images/portal/get-growing-guide/grow-icon.png" />
                }
                text="WHEN DO I NEED TO DO THINGS?"
              />
            </GridItem>
          </GridContainer>
          <GridContainer className="mb5">
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Potatoes.png"
                />
                <InnerWrapper>potatoes</InnerWrapper>
              </StyledLink>
            </GridItem>
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Courgette.png"
                />
                <InnerWrapper>courgettes</InnerWrapper>
              </StyledLink>
            </GridItem>
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Tomatoes.png"
                />
                <InnerWrapper>tomatoes</InnerWrapper>
              </StyledLink>
            </GridItem>
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Pepper.png"
                />
                <InnerWrapper>peppers</InnerWrapper>
              </StyledLink>
            </GridItem>
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Onion.png"
                />
                <InnerWrapper>onions</InnerWrapper>
              </StyledLink>
            </GridItem>
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Apple.png"
                />
                <InnerWrapper>apples</InnerWrapper>
              </StyledLink>
            </GridItem>
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Squash.png"
                />
                <InnerWrapper>squash</InnerWrapper>
              </StyledLink>
            </GridItem>
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Strawberry.png"
                />
                <InnerWrapper>strawberries</InnerWrapper>
              </StyledLink>
            </GridItem>
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Carrot.png"
                />
                <InnerWrapper>Carrots</InnerWrapper>
              </StyledLink>
            </GridItem>
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Rainbow Chard.png"
                />
                <InnerWrapper>Rainbow Chard</InnerWrapper>
              </StyledLink>
            </GridItem>
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Lettuce.png"
                />
                <InnerWrapper>Lettuce</InnerWrapper>
              </StyledLink>
            </GridItem>
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Cucumber.png"
                />
                <InnerWrapper>Cucumber</InnerWrapper>
              </StyledLink>
            </GridItem>
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Leek.png"
                />
                <InnerWrapper>Leek</InnerWrapper>
              </StyledLink>
            </GridItem>
            <GridItem>
              <StyledLink to="#">
                <StaticImage
                  alt=""
                  src="../../images/portal/get-growing-guide/Avocado.png"
                />
                <InnerWrapper>Avocado</InnerWrapper>
              </StyledLink>
            </GridItem>
          </GridContainer>
        </FullWidthPanel>
        <HandyHintTitle title="when do i need to do things" />

        <FullWidthPanel colours="bg-gold white" maxWidth="60rem">
          <GrowingCalender />
        </FullWidthPanel>
      </Layout>
    </>
  )
}

const GetGrowingGuide = ({ ...props }) => (
  <WithAuthCheck>
    <Ggg {...props} />
  </WithAuthCheck>
)

const Subheading = styled.h2`
  font-size: 1.8rem;
  font-style: italic;
  @media screen and (min-width: 35em) {
    margin-left: ${props => (props.ml ? props.ml : "1rem")};
  }
`

const Paragraph = styled.p`
  max-width: 56rem;
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: ${props => (props.fw ? props.fw : "400")};
  margin-bottom: ${props => (props.mbs ? props.mbs : "0rem")};
  margin-top: ${props => (props.mts ? props.mts : "0.5rem")};

  @media screen and (min-width: 35em) {
    font-size: 1.2rem;
    line-height: 1.1rem;
    margin-top: ${props => (props.mtm ? props.mtm : "0.5rem")};
    margin-bottom: ${props => (props.mbm ? props.mbm : "0rem")};
  }

  @media screen and (min-width: 60em) {
    font-size: 1.25rem;
    line-height: 1.5rem;
    padding-bottom: 0.25rem;
    margin-left: ${props => (props.ml ? props.ml : "1rem")};
    margin-bottom: ${props => (props.mbl ? props.mbl : "0rem")};
    margin-top: ${props => (props.mt ? props.mt : "0.5rem")};
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 3rem;
`

const GridItem = styled.div`
  grid-column: span 1;
  grid-row: span 1;
`

const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StyledLink = styled(props => <Link {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;

  :visited {
    color: white;
  }
`

const InnerWrapper = styled.div`
  margin-top: 0.5rem;
  max-width: 120px;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1rem;
  text-align: center;
`

export default GetGrowingGuide
