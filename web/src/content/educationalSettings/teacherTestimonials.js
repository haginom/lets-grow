import React from "react"
import FullWidthPanel from "../../components/fullWidthPanel"
import { SubHeading } from "../../components/tachyons/text"
import styled from "styled-components"
import { IconButton } from "../../components/iconButton"
import { GatsbyImage } from "gatsby-plugin-image"

const TeacherTestimonials = ({ data }) => {
  return (
    <FullWidthPanel colours={"bg-green white"}>
      <StyledMaxWidth className="mt4-l">
        <SubHeading>Teacher Testimonials</SubHeading>

        <div className="mb4">
          <StyledParagraph className="i">
            “As a school and integrated network of children’s centres, we are
            committed to school readiness and are passionate about exploring new
            programmes that benefit children in terms of their progress over
            time as well as contributing to a rich, broad and relevant
            curriculum. In my opinion, Let’s Grow is a fantastic example of such
            a programme. It is very much aimed at increasing children’s skill in
            the areas of communication, language and literacy as well as
            personal, social and emotional development. These are key elements
            of the school readiness agenda. The Let’s Grow programme allows
            children to explore extremely relevant areas of interest that
            contribute to school readiness. Throughout, the programme remains
            very interesting and motivating for very young children. The
            sessions are structured in their delivery which allows the
            practitioner to differentiate according to the group but also
            flexible in that it provides lots of examples of play within
            continuous provision. Such an approach creates a fundamental
            atmosphere that allows for children to become deeply engaged in
            their learning, providing depth and breadth as well as opportunities
            to be creative and think critically.”
          </StyledParagraph>
          <StyledParagraph className="fw6">
            Donna Crawford – SENDco/ Deputy Head Teacher, Martenscroft Nursery
            School
          </StyledParagraph>
          <div style={{ maxWidth: "130px" }}>
            <IconButton
              file={data.caseStudyOne.publicURL}
              icon={data.iconFive.childImageSharp.gatsbyImageData}
              text={"CLICK HERE TO VIEW THE CASE STUDY 1"}
            />
          </div>
        </div>

        <div className="mb4">
          <StyledParagraph className="i">
            “Let’s Grow had an amazing effect on our reception class. Children
            transformed from being quiet, shy, lacking in confidence when
            starting school, to becoming confident and expressive. They were
            able to demonstrate their wonderful caring nature towards the fruit
            and vegetable babies. Children were given opportunities to learn new
            vocabulary, practise asking questions and learning to take turns,
            all in a meaningful fun imaginative context. The children loved the
            fruit and vegetable babies. They couldn’t wait to meet the next one
            and find out how they could help and nurture them. This is great for
            baseline assessments. We can’t wait to use Let’s Grow with our new
            year group in September. Even creating the veg babies and putting
            them in nappies with their cute googly eyes was fun for me!”
          </StyledParagraph>
          <StyledParagraph className="fw6">
            Jo Worthy – Reception Teacher, Barden Primary School
          </StyledParagraph>
          <div style={{ maxWidth: "130px" }}>
            <IconButton
              file={data.caseStudyTwo.publicURL}
              icon={data.iconFive.childImageSharp.gatsbyImageData}
              text={"CLICK HERE TO VIEW THE CASE STUDY 2"}
            />
          </div>
        </div>
        <div className="mb4">
          <StyledParagraph className="i">
            “We absolutely loved Let’s Grow! Children were engaged and given
            opportunities to touch, smell, and discover through a range of
            mediums. The fruit and vegetable babies brought out a nurturing side
            to the children that we hadn’t seen before and gave lots of
            communication opportunities. The children truly thought that we were
            being visited by the babies and they made so many things for them
            including models, pictures and cards, as it gave them a purpose and
            a role to fulfil. We recommend it to any school for the amazing
            cross curricula links and opportunities for learning that it
            provides.”
          </StyledParagraph>
          <StyledParagraph>
            Natasha Willenbrook – Reception Teacher, Cherry Fold Community
            Primary
          </StyledParagraph>
          <div style={{ maxWidth: "130px" }}>
            <IconButton
              file={data.caseStudyThree.publicURL}
              icon={data.iconFive.childImageSharp.gatsbyImageData}
              text={"CLICK HERE TO VIEW THE CASE STUDY 3"}
            />
          </div>
        </div>
        <div style={{ zIndex: 2 }} className="mb4 relative">
          <StyledParagraph className="i">
            “Let’s Grow provided us with a fun, engaging and effective way to
            help our nursery and reception children settle in to life at
            Heptonstall School. Let’s Grow is easy to follow, fun to teach and
            great value! It was a very rewarding process for both the children
            and staff, giving us an exciting way to start the year and the
            children made fantastic progress because of it.”
          </StyledParagraph>
          <StyledParagraph>
            Megan Dodd – Nursery & Reception Teacher, SEND, Heptonstall, Junior,
            Infant & Nursery School
          </StyledParagraph>
          <div style={{ maxWidth: "130px" }}>
            <IconButton
              file={data.caseStudyFour.publicURL}
              icon={data.iconFive.childImageSharp.gatsbyImageData}
              text={"CLICK HERE TO VIEW THE CASE STUDY 4"}
            />
          </div>
        </div>
        <StyledBanner className="center relative">
          <GatsbyImage
            objectFit="contain"
            imgStyle={{ width: "100%", marginBottom: "1rem" }}
            alt="Banner with text, Lets Grow Online is coming soon"
            className="center"
            style={{ minWidth: "100%", maxWidth: "20rem" }}
            image={data.banner.childImageSharp.gatsbyImageData}
          />
        </StyledBanner>
        <ImgContainer>
          <GatsbyImage
            alt="Lets Grow workshop taking place in school"
            className="br4 shadow-3"
            style={{ border: "white 1px solid", transform: "rotate(8deg)" }}
            image={data.ttPhotoThree.childImageSharp.gatsbyImageData}
          />
          <GatsbyImage
            alt="Lets Grow workshop taking place in school"
            className="br4 shadow-3"
            style={{ border: "white 1px solid", transform: "rotate(-8deg)" }}
            image={data.ttPhotoTwo.childImageSharp.gatsbyImageData}
          />
          <GatsbyImage
            alt="Lets Grow workshop taking place in school"
            className="br4 shadow-3"
            style={{ border: "white 1px solid", transform: "rotate(8deg)" }}
            image={data.ttPhotoOne.childImageSharp.gatsbyImageData}
          />
        </ImgContainer>
      </StyledMaxWidth>
    </FullWidthPanel>
  )
}

const StyledMaxWidth = styled.div`
  max-width: 52rem;
  margin-bottom: 3rem;
`
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-top: -2rem;

  @media screen and (min-width: 60em) {
    padding: 0rem;
    margin-top: 0rem;
  }
`
const StyledParagraph = styled.p`
  font-size: 0.875rem;
  line-height: 1.2rem;
  margin-bottom: 1rem;
`

const StyledBanner = styled.div`
  margin-top: -3rem;
  margin-bottom: 2rem;
  z-index: 1;

  @media screen and (min-width: 60em) {
    max-width: 66rem;
    margin-top: -10rem;
  }
`
export default TeacherTestimonials
