import React from "react";
import { Paragraph } from "../../components/tachyons/text";
import FullWidthPanel from "../../components/fullWidthPanel"
import { StyledSmallWidth, StyledSubheading } from "../../components/styled/styled";

const EventsIntro = ({data}) => (
  <FullWidthPanel colours="bg-gold white" navigation={"/#contact"} markup={"get in touch"} className={"center"} image={data.vegCoupleOne.childImageSharp.gatsbyImageData} bottom={"-7.5rem"} left={"42rem"} hasBunting={true} maxWidth="64rem"
  >
    <StyledSmallWidth>
      <StyledSubheading className="letsgrowfont mb4">
        Let's Grow Live Events
      </StyledSubheading>
      <Paragraph className="fw6">
        Immersive, family-friendly entertainment for audiences of all ages.
      </Paragraph>

      <Paragraph className="fw6">
      Regardless of the size or scale of your event or setting, we can tailor performances, workshops and activities to captivate and delight. From supplying individual acts to entire event curation, we’ve got you covered.
      </Paragraph>
    </StyledSmallWidth>
  </FullWidthPanel>

);

export default EventsIntro;
