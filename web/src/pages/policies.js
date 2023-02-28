import React from "react";
import Layout from "../components/layout/layout"
import Seo from "../components/seo";
import Masonry from "../components/masonry";
import FullWidthPanel from "../components/fullWidthPanel";
import tachyons from "../components/tachyons/tachyonsComposer";

const A = tachyons("a", "lh-copy db mb3 black no-underline");
const PolicyLink = ({ href, children, ...props }) => (
  <A href={href} {...props} download rel="noopener noreferrer" target="_BLANK">
    {children}
  </A>
);
const PoliciesPage = () => (
  <Layout noFooter>
    <Seo title="Policies and Procedures" />
    <FullWidthPanel colours="bg-black white">
      <h1>Policies and Procedures</h1>
    </FullWidthPanel>
    <Masonry
      breakpoints={{
        default: 3,
        960: 2,
        480: 1
      }}
    >
      <Masonry.Item className="bg-light-yellow white h5 pa3 pa4-l">
        <Masonry.Header>Child Protection Policy</Masonry.Header>
        <PolicyLink href="/files/child-protection-policy.pdf">
          &#11015; Download
        </PolicyLink>
      </Masonry.Item>
      <Masonry.Item className="bg-light-blue white h5 pa3 pa4-l">
        <Masonry.Header>Health and Safety at Events</Masonry.Header>
        <PolicyLink href="/files/health-and-safety-at-events.pdf">
          &#11015; Download
        </PolicyLink>
      </Masonry.Item>
      <Masonry.Item className="bg-pink white h5 pa3 pa4-l">
        <Masonry.Header>
          Health and Safety in Educational Settings
        </Masonry.Header>
        <PolicyLink href="/files/health-and-safety-in-educational-settings.pdf">
          &#11015; Download Health and Safety in Educational Settings
        </PolicyLink>
        <PolicyLink href="/files/risk-assessment.docx">
          &#11015; Download Risk Assessment
        </PolicyLink>
      </Masonry.Item>
      <Masonry.Item className="bg-light-red white h5 pa3 pa4-l">
        <Masonry.Header>Equal Opportunities Policy</Masonry.Header>
        <PolicyLink href="/files/equal-opportunities-policy.pdf">
          &#11015; Download
        </PolicyLink>
      </Masonry.Item>
      <Masonry.Item className="bg-purple white h5 pa3 pa4-l">
        <Masonry.Header>GDPR and Privacy Policy</Masonry.Header>
        <PolicyLink href="/files/gdpr-and-privacy-policy.pdf">
          &#11015; Download
        </PolicyLink>
      </Masonry.Item>
      <Masonry.Item className="bg-light-yellow white h5 pa3 pa4-l">
        <Masonry.Header>Safeguarding Procedure</Masonry.Header>
        <PolicyLink href="/files/safeguarding-procedure.docx">
          &#11015; Download
        </PolicyLink>
      </Masonry.Item>
      <Masonry.Item className="bg-green white h5 pa3 pa4-l">
        <Masonry.Header>Safeguarding Policy</Masonry.Header>
        <PolicyLink href="/files/safeguarding-policy.pdf">
          &#11015; Download
        </PolicyLink>
      </Masonry.Item>
    </Masonry>
  </Layout>
);

export default PoliciesPage;
