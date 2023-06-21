import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List } from "./styles"
import VegetableTable from "../../../components/portal/continuousProvisionTable"
import { StaticImage } from "gatsby-plugin-image"
import { NotepadWrapper } from "./styles"

const lettucePlantingInstructions = [
  "Fill your pot or seed tray with compost.",
  "Water the compost to ensure that it is damp, but not waterlogged.",
  "Sow the lettuce seeds on top of the compost with some spacing between them.",
  "Keep the pots inside in March and April, and leave them outside from May to September.",
  "Keep the compost damp.",
  "The seeds should show signs of growth within a week or so and will be ready for pricking out in three to four weeks. Follow the guidance in the ‘Seedlings’ session from this point onwards.",
  "Once pricked out and grown into sturdy little plants, water them whenever the compost feels dry to the touch.",
  "Expect to harvest lettuce between 4 to 14 weeks.",
]

const lettuceFacts = [
  "Lettuce is a leafy green vegetable that grows above ground.",
  "There are so many types of lettuce! Some are grown in the UK and Ireland and some in countries such as Poland.",
  "Some are green, some are purplish, some are soft, some are crunchy. You can try lots of types of lettuce until you find your favourite!",
  "Lettuce is packed full of vitamin A that helps you to get better if you catch a cough or cold.",
  "Lettuce grows really quickly, so you can eat lots of it and then plant some more!",
]

const recipeInstructions = [
  "Lettuce scoopy dishes!",
  "Using individual lettuce leaves as a dish, scoop a little of your favorite filling into the leaf.",
  "If the chosen filling is dry (such as chicken or egg), you can add a teaspoon of mayo or yogurt to help the filling stay in the lettuce dish.",
  "Eat the stuffed lettuce dish easily by holding the stalk end with your fingers and eating it like an open sandwich.",
]

const lettuceIngredients = [
  "Little gem lettuce (four or five should be enough for a class)",
  "Favourite sandwich fillings (e.g., egg, grated cheese, tuna, ham, cooked chicken or turkey)",
  "Mayo or natural yogurt",
]

const LettuceGrowingGuide = () => {
  return (
    <section className="relative" id="lettuce">
      <VegTitle
        title={"lettuce"}
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
            src="../../../images/portal/get-growing-guide/Lettuce.png"
          />
        }
      />

      <FullWidthPanel colours="bg-gold white" maxWidth="56rem">
        <Subheading className="coffeeTea mb2">Planting Lettuce</Subheading>
        <Paragraph className="fw6">
          There are lots of varieties of lettuce to choose from. Some you will
          be familiar with from seeing in the shops, others might be unfamiliar
          to you. You should choose any lettuce that you like and are excited to
          grow, but be mindful that the timings and instructions on your seed
          packet may vary slightly from those here.
        </Paragraph>
        <NotepadWrapper flexItemOneSize="85%">
          <StaticImage
            alt=""
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/lettuce-assets/lettuces.png"
          />
          <StaticImage
            alt=""
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/lettuce-assets/lettuce-np.png"
          />
        </NotepadWrapper>
        <Subheading className="coffeeTea mb3">When?</Subheading>
        <Paragraph className="fw6">
          Early March to September - Plant seeds. Remember to plant your seeds
          three weeks before you want to deliver the ‘Seedlings’ session. If you
          are planting in early March, this may take a little longer because it
          is colder.
        </Paragraph>

        <Paragraph className="fw6 mb4">
          June to October - Harvest, depending on when you planted.
        </Paragraph>
        <Subheading className="coffeeTea mb3 mt4">What to do?</Subheading>
        <List>
          {lettucePlantingInstructions.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </List>
        <div style={{ maxWidth: "58rem" }}>
          <StaticImage
            style={{ width: "60vw", maxWidth: "40rem", float: "right" }}
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/lettuce-assets/lettuce-wellies.png"
          />
        </div>
      </FullWidthPanel>
      <VegTitle
        colour="bg-gold white"
        title={"enhanced continuous provision"}
      />
      <FullWidthPanel colours="bg-gold " maxWidth="56rem">
        <VegetableTable
          name="lettuce"
          singular="lettuce"
          facts={lettuceFacts}
          recipeInstructions={recipeInstructions}
          ingredients={lettuceIngredients}
          vegetableImage={
            <StaticImage
              objectFit="contain"
              style={{
                position: "absolute",
                height: "16vw",
                width: "16vw",
                maxHeight: "8rem",
                maxWidth: "8rem",
                bottom: 0,
                left: 0,
              }}
              src="../../../images/portal/get-growing-guide/lettuce-assets/lettuce-single.png"
              alt="image"
            />
          }
        />
      </FullWidthPanel>
    </section>
  )
}
export default LettuceGrowingGuide
