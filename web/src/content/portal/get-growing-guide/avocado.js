import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List } from "./styles"
import VegetableTable from "../../../components/portal/continuousProvisionTable"
import { StaticImage } from "gatsby-plugin-image"
import { NotepadWrapper } from "./styles"

const avocadoPlantingInstructions = [
  "Look carefully at the stone.",
  "The top of the avocado stone is slightly pointier, and the bottom has a differently coloured shape.",
  "Make sure that you hold the avocado stone the right way up.",
  "Now poke the four toothpicks into the sides of the avocado stone, like spikey spokes sticking out.",
  "The toothpicks will allow you to rest the stone on top of a glass without it falling in.",
  "Now fill the glass with water, so the water is touching the stone, and place it on a sunny windowsill.",
  "Keep the water topped up.",
  "After three weeks or so you should see some roots appearing.",
  "Wait for your plant to have a stem and some leaves.",
  "Now plant your avocado into a pot with some compost.",
  "Water when the compost seems dry to touch.",
  "When the avocado plant is 30cm tall, you should cut off the stem to 15cm. This seems harsh, but it will help the plant to be nice and bushy, rather than just tall.",
  "Your plant will grow bigger, but it will be very unlikely to have fruit.",
]

const avocadoFacts = [
  "Avocados are fruit that grow on trees.",
  "They are mainly imported to the UK from countries like Peru and Kenya.",
  "Avocados are rich in Vitamin E, which is good for your brain, blood, and skin.",
  "The fats in avocados are helpful for your heart.",
  "Eating avocados can help you feel full for longer.",
]

const avocadoRecipeInstructions = [
  "Run a sharp knife around the avocado stone and pull it into two halves.",
  "Remove the stone.",
  "Peel the avocado halves.",
  "Using a fork, mash the avocado.",
  "Squeeze the lemon and add a little lemon juice to the avocado.",
  "Spoon the mashed avocado onto the toast and spread it with the back of the spoon.",
  "Enjoy your delicious avocado on toast!",
]

const avocadoIngredients = [
  "Ripe avocados",
  "Lemon",
  "Crusty bread - toasted",
  "Salt and pepper (optional)",
]

const AvocadoGrowingGuide = () => {
  return (
    <section className="relative" id="avocado">
      <VegTitle
        title={"avocado"}
        icon={
          <StaticImage
            style={{
              position: "absolute",
              height: "12rem",
              width: "12rem",
              top: "1rem",
              right: "5%",
            }}
            alt=""
            src="../../../images/portal/get-growing-guide/Avocado.png"
          />
        }
      />
      <FullWidthPanel colours="bg-gold white">
        <Subheading className="coffeeTea mb3">
          Growing an avocado houseplant from a stone
        </Subheading>
        <Paragraph className="fw6 mb3">
          Avocados grow on trees in countries that are much warmer than the UK.
          However, we can have a lot of fun growing our own tree from the stone
          inside the avocados that we buy in the shops for eating. It probably
          won’t bear fruit though. Here’s how!
        </Paragraph>

        <NotepadWrapper flexItemOneSize="50%">
          <StaticImage
            alt=""
            style={{
              transform: "rotate(-30deg)",
              marginLeft: "3rem",
              marginRight: "3rem",
            }}
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/avocado-assets/avocado-new.png"
          />
          <StaticImage
            alt=""
            style={{ marginLeft: "3rem" }}
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/avocado-assets/avocado-np.png"
          />
        </NotepadWrapper>
        <Subheading className="coffeeTea mb3">When?</Subheading>
        <Paragraph className="fw6 mb4">Whenever you like!</Paragraph>
        <Subheading className="coffeeTea mt4 mb3">What to do?</Subheading>
        <List>
          {avocadoPlantingInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </List>
        <div className="mb3">
          <StaticImage
            style={{
              maxWidth: "40rem",
              float: "right",
            }}
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/avocado-assets/avocado-watering-can.png"
          />
        </div>
      </FullWidthPanel>

      <FullWidthPanel colours="bg-gold">
        <VegetableTable
          name="avocados"
          singular="avocado"
          facts={avocadoFacts}
          recipeInstructions={avocadoRecipeInstructions}
          ingredients={avocadoIngredients}
          moreInfo={
            <p>
              Check out our Valentines Day session in the Celebrations theme,
              where you'll meet Edz the Avocado.
            </p>
          }
          vegetableImage={
            <StaticImage
              style={{
                width: "200px",
                height: "250px",
                bottom: "-5rem",
                left: "3rem",
              }}
              imgStyle={{}}
              className="vegetableImage"
              src="../../../images/vegetables/Edz.png"
              alt="image"
            />
          }
        />
      </FullWidthPanel>
    </section>
  )
}

export default AvocadoGrowingGuide
