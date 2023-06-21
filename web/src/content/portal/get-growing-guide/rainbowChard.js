import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List } from "./styles"
import VegetableTable from "../../../components/portal/continuousProvisionTable"
import { StaticImage } from "gatsby-plugin-image"
import { NotepadWrapper } from "./styles"

const plantingInstructions = [
  "Fill your pot or seed tray with compost.",
  "Water the compost to ensure that it is damp, but not waterlogged.",
  "You will have lots of seeds in your packet, so you should expect to sow seed in several pots or two seed trays.",
  "You will find that the chard seeds are quite small, try to sprinkle the seeds on top of the compost with some spacing between them.",
  "Cover very lightly with a little more compost.",
  "You should keep the pots inside in March and April, to give them a good start whilst it is still cold.",
  "You can leave the pots outside from May to August.",
  "Keep the compost damp.",
  "The seeds should show signs of growth within a week or so and will be ready for 'pricking out' in three to four weeks. Follow the guidance in the 'Seedlings' session from here on.",
  "Once pricked out and grown into sturdy little plants, they should be watered whenever the compost feels dry to the touch.",
  "Expect to harvest your rainbow chard after 10 to 14 weeks.",
]

const facts = [
  "Rainbow chard is a leafy green vegetable. It grows above ground.",
  "Some rainbow chard is grown in the UK, although you might find it in supermarkets from other European countries such as Spain.",
  "Rainbow chard is filled with Vitamin K that helps your blood to stick together and make a scab if you fall over and hurt yourself.",
  "You can eat the stem and leaves of rainbow chard.",
  "Chard is related to spinach.",
]

const ingredients = [
  "Rainbow chard leaves.",
  "Olive oil.",
  "Garlic cloves.",
  "Salt and pepper.",
]

const recipeInstructions = [
  "Salt and Pepper Chard and Peas!",
  "Slice the garlic.",
  "Tear the leaves of the chard from the stems.",
  "Gently fry off the garlic and chard stems, being careful not to colour either, just soften.",
  "Add the peas.",
  "Add the leaves, salt and pepper.",
  "Stir then leave the lid on just until the leaves have wilted and the peas are hot.",
  "The sweetness of the peas makes the chard more appealing to children.",
]

const ChardGrowingGuide = () => {
  return (
    <section className="relative" id="chard">
      <VegTitle
        title={"rainbow chard"}
        icon={
          <StaticImage
            style={{
              position: "absolute",
              height: "20vw",
              width: "20vw",
              top: "1rem",
              right: "5%",
              maxWidth: "12rem",
              maxHeight: "12rem",
            }}
            alt=""
            src="../../../images/portal/get-growing-guide/RainbowChard.png"
          />
        }
      />

      <FullWidthPanel colours="bg-gold white" maxWidth="56rem">
        <Subheading className="coffeeTea mb2">
          Planting Rainbow Chard
        </Subheading>
        <Paragraph className="mb4">
          Rainbow Chard is so cheerful and colourful, it’s also relatively fast
          growing. You can plant Rainbow Chard leaves three weeks in advance of
          delivering our “Seedlings” session.
        </Paragraph>
        <NotepadWrapper flexItemOneSize="80%">
          <StaticImage
            alt=""
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/chard-assets/rainbow-chard.png"
          />
          <StaticImage
            alt=""
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/chard-assets/chard-np.png"
          />
        </NotepadWrapper>
        <Subheading className="coffeeTea mb3">When?</Subheading>
        <Paragraph className="fw6">March to August - Planting.</Paragraph>
        <Paragraph className="fw6">
          Remember to plant your seeds 3 weeks before you want to deliver the
          ‘Seedlings’ session.
        </Paragraph>
        <Paragraph className="fw6">
          If you are planting in early March this may take a little longer
          because it is colder. May to Oct - Harvest, dependent upon when you
          planted (12 to 16 weeks from planting).
        </Paragraph>
        <Paragraph className="fw6 mb4">
          June to November - Harvest, depending on when you planted.
        </Paragraph>
        <Subheading className="coffeeTea  mb3 mt4">What to do?</Subheading>
        <List>
          {plantingInstructions.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </List>
        <StaticImage
          alt=""
          style={{ marginTop: "-2rem" }}
          objectFit="contain"
          src="../../../images/portal/get-growing-guide/chard-assets/chard-tools.png"
        />
      </FullWidthPanel>
      <VegTitle
        colour="bg-gold white"
        title={"enhanced continuous provision"}
      />
      <FullWidthPanel colours="bg-gold " maxWidth="56rem">
        <VegetableTable
          name="rainbow chard"
          singular="chards"
          facts={facts}
          recipeInstructions={recipeInstructions}
          ingredients={ingredients}
          vegetableImage={
            <StaticImage
              objectFit="contain"
              style={{
                position: "absolute",
                height: "16vw",
                width: "16vw",
                maxHeight: "8rem",
                maxWidth: "8rem",
                bottom: "2rem",
                left: 0,
              }}
              src="../../../images/portal/get-growing-guide/chard-assets/rainbow-chard.png"
              alt="image"
            />
          }
        />
      </FullWidthPanel>
    </section>
  )
}

export default ChardGrowingGuide
