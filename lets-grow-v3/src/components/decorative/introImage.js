import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const IntroImage = () => {
  const data = useStaticQuery(graphql`{
    introMrBloom: file(relativePath: {eq: "intro-mr-bloom.png"}) {
      childImageSharp {
        gatsbyImageData(width:375, layout: FIXED)
      }
    }
  }
  `);

  return(
    <div className="dn-m absolute" style={{left:"38rem", bottom:"-42px"}}>
      <GatsbyImage 
      alt="image of Mr Bloom" 
      image={data.introMrBloom.childImageSharp.gatsbyImageData}/>
     </div>
  )
  
};

export default IntroImage;
