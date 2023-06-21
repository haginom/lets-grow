import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export const GrowingCalender = () => (
  <>
    <Table className="dt dt--fixed">
      <tr>
        <th
          className="bg-hot-pink white col-header first-col-header"
          rowSpan="2"
          colSpan="2"
        >
          <StyledHeading>
            <StaticImage
              alt=""
              style={{ width: "80%", height: "80%" }}
              src="../../../images/portal/get-growing-guide/Potatoes.png"
            />
            <InnerWrapper>Potatoes</InnerWrapper>
          </StyledHeading>
        </th>

        <Th className="bg-hot-pink white first-left-column">Feb</Th>
        <Th className="bg-hot-pink white">March</Th>
        <Th className="bg-hot-pink white">April</Th>
        <Th className="bg-hot-pink white">May</Th>
        <Th className="bg-hot-pink white">June</Th>
        <Th className="bg-hot-pink white">July</Th>
        <Th className="bg-hot-pink white">Sept</Th>
        <Th className="bg-hot-pink white">Oct</Th>
        <Th className="bg-hot-pink white last-right-column">Nov</Th>
      </tr>
      <tr>
        <td className="bg-gold white">Buy and chit your potatoes.</td>
        <td className="bg-gold white">
          Plant first earlies towards the end of March.
        </td>
        <td className="bg-gold white">
          Plant second earlies early / mid April.
          <br />
          <br />
          Plant maincrop varieties mid/ late April.
        </td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">
          Harvest first earlies if finished flowering.
        </td>
        <td className="bg-gold white">
          Harvest first / second earlies if finished flowering.
        </td>
        <td className="bg-gold white">
          Harvest maincrop in late Sept if plants have died back.
        </td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white"></td>
      </tr>
      <tr>
        <th className="bg-hot-pink white col-header" rowSpan="1" colSpan="2">
          <StyledHeading>
            <StaticImage
              alt=""
              style={{ width: "80%", height: "80%" }}
              src="../../../images/portal/get-growing-guide/Courgette.png"
            />
            <InnerWrapper>Courgettes</InnerWrapper>
          </StyledHeading>
        </th>
        <td className="bg-gold white"></td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">Sow seed indoors.</td>
        <td className="bg-gold white">
          Sow seed indoors. <br /> Sow seed ourdoors. <br /> Plant out
          seedlings. <br /> Buy seedlings from your garden center if you have
          not planted seeds.
        </td>
        <td className="bg-gold white">Plant out seedlings.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white"></td>
      </tr>
      <tr>
        <th className="bg-hot-pink white col-header" rowSpan="1" colSpan="2">
          <StyledHeading>
            <StaticImage
              alt=""
              style={{ width: "80%", height: "80%" }}
              src="../../../images/portal/get-growing-guide/Tomatoes.png"
            />
            <InnerWrapper>Tomatoes</InnerWrapper>
          </StyledHeading>
        </th>
        <td className="bg-gold white"></td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">Buy plants.</td>
        <td className="bg-gold white">Buy plants.</td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white"></td>
      </tr>
      <tr>
        <th className="bg-hot-pink white col-header" rowSpan="1" colSpan="2">
          <StyledHeading>
            <StaticImage
              alt=""
              style={{ width: "80%", height: "80%" }}
              src="../../../images/portal/get-growing-guide/Pepper.png"
            />
            <InnerWrapper>Peppers</InnerWrapper>
          </StyledHeading>
        </th>
        <td className="bg-gold white"></td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">Buy plants.</td>
        <td className="bg-gold white">Buy plants.</td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white"></td>
      </tr>
      <tr>
        <th className="bg-hot-pink white col-header" rowSpan="2" colSpan="2">
          <StyledHeading>
            <StaticImage
              alt=""
              src="../../../images/portal/get-growing-guide/Onion.png"
              style={{ width: "80%", height: "80%" }}
            />
            <InnerWrapper>Onions</InnerWrapper>
          </StyledHeading>
        </th>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">Buy and plant 'onion sets'</td>
        <td className="bg-gold white">Buy and plant 'onion sets'</td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">Harvest autumn planted 'onion sets.'</td>
        <td className="bg-gold white">Harvest autumn planted 'onion sets.'</td>
        <td className="bg-gold white">
          Harvest March/April planted 'onion sets.'
        </td>
        <td className="bg-gold white">Buy and plant 'onion sets'</td>
        <td className="bg-gold white">Buy and plant 'onion sets'</td>
      </tr>
      <tr>
        <Th className="bg-hot-pink white ">Feb</Th>
        <Th className="bg-hot-pink white">March</Th>
        <Th className="bg-hot-pink white">April</Th>
        <Th className="bg-hot-pink white">May</Th>
        <Th className="bg-hot-pink white">June</Th>
        <Th className="bg-hot-pink white">July</Th>
        <Th className="bg-hot-pink white">Sept</Th>
        <Th className="bg-hot-pink white">Oct</Th>
        <Th className="bg-hot-pink white ">Nov</Th>
      </tr>
      <tr>
        <th className="bg-hot-pink white col-header" rowSpan="1" colSpan="2">
          <StyledHeading>
            <StaticImage
              alt=""
              style={{ width: "80%", height: "80%" }}
              src="../../../images/portal/get-growing-guide/Apple.png"
            />
            <InnerWrapper>Apples</InnerWrapper>
          </StyledHeading>
        </th>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">Plant.</td>
        <td className="bg-gold white">Plant.</td>
        <td className="bg-gold white">Plant.</td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">Plant.</td>
        <td className="bg-gold white">Plant.</td>
        <td className="bg-gold white">Plant.</td>
      </tr>
      <tr>
        <th className="bg-hot-pink white col-header" rowSpan="1" colSpan="2">
          <StyledHeading>
            <StaticImage
              alt=""
              style={{ width: "80%", height: "80%" }}
              src="../../../images/portal/get-growing-guide/Squash.png"
            />
            <InnerWrapper>Squash</InnerWrapper>
          </StyledHeading>
        </th>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">Plant runners.</td>
        <td className="bg-gold white">Plant plants.</td>
        <td className="bg-gold white">Plant plants.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white"></td>
      </tr>
      <tr>
        <th className="bg-hot-pink white col-header" rowSpan="1" colSpan="2">
          <StyledHeading>
            <StaticImage
              alt=""
              style={{ width: "80%", height: "80%" }}
              src="../../../images/portal/get-growing-guide/Strawberry.png"
            />
            <InnerWrapper>Strawberries</InnerWrapper>
          </StyledHeading>
        </th>
        <td className="bg-gold white"></td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">Buy and sow seed indoors</td>
        <td className="bg-gold white">
          Sow seed indoors. <br />
          <br /> Plant out.
        </td>
        <td className="bg-gold white">Plant out.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white"></td>
      </tr>
      <tr>
        <th className="bg-hot-pink white col-header" rowSpan="1" colSpan="2">
          <StyledHeading>
            <StaticImage
              alt=""
              style={{ width: "80%", height: "80%" }}
              src="../../../images/portal/get-growing-guide/Carrot.png"
            />
            <InnerWrapper>Carrots</InnerWrapper>
          </StyledHeading>
        </th>
        <td className="bg-gold white">Sow seed.</td>
        <td className="bg-gold white">Sow seed.</td>
        <td className="bg-gold white">Sow seed.</td>
        <td className="bg-gold white">
          Sow seed. <br />
          <br /> Harvest.
        </td>
        <td className="bg-gold white">
          Sow seed. <br />
          <br /> Harvest.
        </td>
        <td className="bg-gold white">
          Sow seed. <br />
          <br /> Harvest.
        </td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white"></td>
      </tr>
      <tr>
        <th className="bg-hot-pink white col-header" rowSpan="2" colSpan="2">
          <StyledHeading>
            <StaticImage
              alt=""
              style={{ width: "80%", height: "80%" }}
              src="../../../images/portal/get-growing-guide/Rainbow Chard.png"
            />
            <InnerWrapper>Rainbow Chard</InnerWrapper>
          </StyledHeading>
        </th>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">Buy and sow seed indoors.</td>
        <td className="bg-gold white">Buy and sow seed indoors.</td>

        <td className="bg-gold white">
          Buy and sow seed outdoors. <br /> <br /> Plant out seedlings. <br />
          <br /> Buy seedlings from your centre now if you have garden not
          planted seeds.
        </td>
        <td className="bg-gold white">
          Buy and sow seed outdoors. <br /> <br /> Harvest by cutting leaves.
        </td>

        <td className="bg-gold white">
          Buy and sow seed outdoors. <br /> <br /> Harvest by cutting leaves.
        </td>
        <td className="bg-gold white">Harvest by cutting leaves.</td>
        <td className="bg-gold white">Harvest by cutting leaves.</td>
        <td className="bg-gold white">Harvest by cutting leaves.</td>
      </tr>
      <tr>
        <Th className="bg-hot-pink white ">Feb</Th>
        <Th className="bg-hot-pink white">March</Th>
        <Th className="bg-hot-pink white">April</Th>
        <Th className="bg-hot-pink white">May</Th>
        <Th className="bg-hot-pink white">June</Th>
        <Th className="bg-hot-pink white">July</Th>
        <Th className="bg-hot-pink white">Sept</Th>
        <Th className="bg-hot-pink white">Oct</Th>
        <Th className="bg-hot-pink white ">Nov</Th>
      </tr>
      <tr>
        <th className="bg-hot-pink white col-header" rowSpan="1" colSpan="2">
          <StyledHeading>
            <StaticImage
              alt=""
              style={{ width: "80%", height: "80%" }}
              src="../../../images/portal/get-growing-guide/Carrot.png"
            />
            <InnerWrapper>Carrots</InnerWrapper>
          </StyledHeading>
        </th>
        <td className="bg-gold white">Sow seed.</td>
        <td className="bg-gold white">Sow seed.</td>
        <td className="bg-gold white">Sow seed.</td>
        <td className="bg-gold white">
          Sow seed. <br />
          <br /> Harvest.
        </td>
        <td className="bg-gold white">
          Sow seed. <br />
          <br /> Harvest.
        </td>
        <td className="bg-gold white">
          Sow seed. <br />
          <br /> Harvest.
        </td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white"></td>
      </tr>
      <tr>
        <th className="bg-hot-pink white col-header" rowSpan="1" colSpan="2">
          <StyledHeading>
            <StaticImage
              alt=""
              style={{ width: "80%", height: "80%" }}
              src="../../../images/portal/get-growing-guide/Cucumber.png"
            />
            <InnerWrapper>Cucumber</InnerWrapper>
          </StyledHeading>
        </th>
        <td className="bg-gold white">Sow seed.</td>
        <td className="bg-gold white">Sow seed.</td>
        <td className="bg-gold white">Buy Plants.</td>
        <td className="bg-gold white">Buy Plants.</td>
        <td className="bg-gold white"></td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white">Harvest.</td>
        <td className="bg-gold white"></td>
      </tr>
      <tr>
        <th className="bg-hot-pink white col-header" rowSpan="1" colSpan="2">
          <StyledHeading>
            <StaticImage
              alt=""
              style={{ width: "80%", height: "80%" }}
              src="../../../images/portal/get-growing-guide/Leek.png"
            />
            <InnerWrapper>Leek</InnerWrapper>
          </StyledHeading>
        </th>
        <td className="bg-gold white">Sow seed.</td>
        <td className="bg-gold white">Sow seed.</td>
        <td className="bg-gold white">Sow seed.</td>
        <td className="bg-gold white">Plant out young plants.</td>
        <td className="bg-gold white">Plant out young plants.</td>
        <td className="bg-gold white">Plant out young plants.</td>
        <td className="bg-gold white">
          Harvest in late August or September (depending upon whether you chose
          an early or late variety).
        </td>
        <td className="bg-gold white">
          Harvest in late August or September (depending upon whether you chose
          an early or late variety).
        </td>
        <td className="bg-gold white">
          Harvest in November, December or January (depending upon whether you
          chose an early or late variety).
        </td>
      </tr>
      <tr>
        <th
          className="bg-hot-pink white col-header bottom-column"
          rowSpan="1"
          colSpan="2"
        >
          <StyledHeading>
            <StaticImage
              alt=""
              style={{ width: "80%", height: "80%" }}
              src="../../../images/portal/get-growing-guide/Avocado.png"
            />
            <InnerWrapper>Avocado</InnerWrapper>
          </StyledHeading>
        </th>
        <td
          style={{ verticalAlign: "middle", textAlign: "center" }}
          className="bg-gold white bottom-column"
          colSpan="9"
        >
          You can have fun growing an avocado plant from a stone any time of
          year.
        </td>
      </tr>
    </Table>
  </>
)

const Table = styled.table`
  margin-top: 2rem;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border-radius: 12px;
  border: 3px solid white;
  background-color: white;

  tr {
    th {
      border-left: ${props => props.bl || "1px solid white"};
      border-right: 1px solid white;
    }
    td {
      border: 1px solid white;
      font-size: 0.4rem;
      line-height: 1rem;
      font-weight: 400;
      padding: 0.2rem;
    }

    .col-header {
      border: 1px solid white;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      border-right: 3px solid white;
      vertical-align: middle;
    }

    .first-col-header {
      border-top-left-radius: 18px;
      border-top-right-radius: 20px;
    }
    .first-left-column {
      border-top-left-radius: 18px;
    }
    .last-right-column {
      border-top-right-radius: 18px;
    }
    .bottom-column {
      border-bottom-left-radius: 18px;
      border-bottom-right-radius: 18px;
    }
  }

  @media screen and (min-width: 35em) {
    border: 6px solid white;

    tr {
      td {
        font-size: 0.6rem;
      }
      .col-header {
        border-right: 6px solid white;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
      }
    }
  }

  @media screen and (min-width: 60em) {
    border: 10px solid white;

    tr {
      th {
        border-left: ${props => props.bl || "1px solid white"};
        border-right: 1px solid white;
      }
      td {
        font-size: 0.8rem;
        padding: 0.5rem;

        border-left: 1px solid white;
        border-right: 1px solid white;
      }
      .col-header {
        border-right: 10px solid white;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }
  }
`
const Th = styled.th`
  vertical-align: middle;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-transform: uppercase;
  line-height: 1rem;
  font-weight: 600;
  font-size: 0.5rem;

  @media screen and (min-width: 35rem) {
    padding: 0.5rem;

    line-height: 0.8rem;
    font-size: 0.65rem;
  }

  @media screen and (min-width: 60em) {
    padding: 0.5rem;

    line-height: 1rem;
    font-size: 0.85rem;
  }
`

const StyledHeading = styled.div`
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
