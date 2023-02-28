import * as React from "react";
import tachyons from "./tachyons/tachyonsComposer";
import Masonry from "react-masonry-css";

const MasonryItem = tachyons("div", "mb2");
const MasonryTextWrapper = tachyons("div", "pa2 pa3-m pa4-l f6 f5-ns");
const MasonryHeader = tachyons("h3", "lh-copy measure mb3 fw5");
const MasonryParagraph = tachyons("p", "lh-copy measure mb3");
const MasonryListHeader = tachyons("h4", "lh-copy measure mb3 fw5");
const MasonryListContainer = tachyons("ul");
const MasonryListItem = tachyons("li", "lh-copy mb3");

const MasonryList = ({ heading, children }) => (
  <MasonryListContainer>
    {!!heading && <MasonryListHeader>{heading}</MasonryListHeader>}
    {children}
  </MasonryListContainer>
);

const MasonryContainer = ({ children, breakpoints, ...props }) => (
  <Masonry
    breakpointCols={
      breakpoints || {
        default: 2,
        800: 1
      }
    }
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
    {...props}
  >
    {children}
  </Masonry>
);

MasonryContainer.Item = MasonryItem;
MasonryContainer.Text = MasonryTextWrapper;
MasonryContainer.Header = MasonryHeader;
MasonryContainer.Paragraph = MasonryParagraph;
MasonryContainer.List = MasonryList;
MasonryContainer.ListItem = MasonryListItem;

export default MasonryContainer;
