import React from "react";
import { Paragraph } from "../../components/tachyons/text";
import { SubHeading } from "../../components/tachyons/text";
import FullWidthPanel from "../../components/fullWidthPanel"
import { StyledSmallWidth } from "../../components/styled/styled";

const EventPlanning = ({data}) => (
  <FullWidthPanel colours="bg-gold white" markup={"get in touch"} navigation={"/#contact"} image={data.vegCoupleTwo.childImageSharp.gatsbyImageData} bottom={"-7.9rem"} left={"40rem"}maxWidth={"64rem"}>
    <StyledSmallWidth>
      <SubHeading className="mb4">
        Full Event Planning & Delivery
      </SubHeading>
      <Paragraph className="fw6">
        Our expert team are fully equipped to create a family-friendly event to meet your specific needs and objectives.
      </Paragraph>
      <Paragraph className="fw6">
        We’ve worked extensively with Business Improvement Districts, councils, stately homes, festivals, community venues, retail centres and more, curating and delivering fabulous experiences to attract audiences of all ages.
      </Paragraph>
      <Paragraph className="fw6">
        From concept generation to full production and delivery, whether it be a single performance or full programmes, we can curate the solution for you.
      </Paragraph>
      <Paragraph className="fw6">
        No matter the size or scale, delighted audiences are guaranteed!
      </Paragraph>
    </StyledSmallWidth>
  </FullWidthPanel>

);



export default EventPlanning;
