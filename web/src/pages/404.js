import React from "react";
import Layout from "../components/layout/layout";
import { Link } from "gatsby";
import { Heading, Paragraph } from "../components/tachyons/text";
import FullWidthPanel from "../components/fullWidthPanel";
import Seo from "../components/seo";


const Page = () => {
  return (
    <Layout>
    <FullWidthPanel colours={"bg-green white"}>
      <Seo title="404" />
      <Heading>Page Not Found</Heading>
      <Paragraph>Oops! The page you are looking for does not exist.</Paragraph>
      <Link to="/">Go Back </Link>
    </FullWidthPanel>
  </Layout>
  )
}

export default Page