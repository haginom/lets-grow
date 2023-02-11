import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Bunting = () => {
  const data = useStaticQuery(graphql`{
    bunting: file(relativePath: {eq: "Bunting.png"}) {
      childImageSharp {
        gatsbyImageData(width: 380, layout:FIXED)
      }
    }
  }
  `);

  return(
    <div className="dn-m absolute" style={{left:"36rem", top:"-6rem"}}>
      <GatsbyImage 
      alt="" 
      image={data.bunting.childImageSharp.gatsbyImageData}/>
     </div>
  )
  
};

export default Bunting;
