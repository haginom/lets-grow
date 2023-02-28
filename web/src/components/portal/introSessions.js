// import * as React from "react"
// import styled from "styled-components"
// import { GatsbyImage } from "gatsby-plugin-image"

// const IntroSession = ({ menu, className, ...props }) => {
//   const [showMore, setShowMore] = React.useState(false)
//   {
//     menu && (
//       <IntroSessionTitle
//         showMore={showMore}
//         setShowMore={setShowMore}
//         {...props}
//       />
//     )
//   }
// }

// const IntroSessionTitle = ({ showMore, setShowMore, ...props }) => {
//   return (
//     <StyledButton
//       color={props.backgroundColour.hex}
//       onClick={() => setShowMore(!showMore)}
//       className={`${
//         className ? ` ${className}` : ""
//       } dt white br4 f8 f5-ns fw5 mh1`}
//     >
//       {showMore ? (
//         <IntroSessionBody {...body} />
//       ) : (
//         <InnerWrapper className="f2 ttu coffeeTea pv3-ns pv1 tc b dtc v-mid">
//           {props.name}{" "}
//         </InnerWrapper>
//       )}
//     </StyledButton>
//   )
// }

// const IntroSessionBody = ({ ...props }) => {
//   return (
//     <>
//       <div className="flex">
//         <div>
//           <div>Session Plan</div>
//           <div>Meet the Characters</div>
//           <div>Video Call</div>
//         </div>
//         <GatsbyImage image={props.image} />
//       </div>
//     </>
//   )
// }

// const StyledButton = styled.button`
//   display: block;
//   background-color: ${props => props.color || "orange"};
//   margin-bottom: 0.25rem;
//   width: 100%;
//   text-decoration: none;

//   :not(:disabled) {
//     cursor: pointer;
//     outline: none;
//   }
// `

// const InnerWrapper = styled.p`
//   display: block;
//   padding-top: 1.25rem;
//   padding-bottom: 1rem;
//   &:visited {
//     color: white;
//   }
// `

// export default IntroSession
