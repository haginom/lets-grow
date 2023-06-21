import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List } from "./styles"
import { StaticImage } from "gatsby-plugin-image"
import VegetableTable from "../../../components/portal/continuousProvisionTable"

const leekPlantingInstructions = [
  "Make sure that you have enough small containers and compost ready.",
  "Fill your containers with compost to 2cm from the top.",
  "Drop a few seeds onto the compost and lightly cover.",
  "Keep on a windowsill if you have planted while it is still freezing outside.",
  "When the leek plants begin to look well established, carefully pull out of the pot any spare plants, keeping only the strongest one in each pot. Discard the ones that you have pulled out. This gives each leek room to grow.",
  "When your plants are pencil thick, they should be ready to go out to the large containers or into the ground.",
  "If planting into the ground, dig the soil with a spade and add some compost. Dig it into the soil to mix it well in. If planting in a container, fill to 5cm from the top with compost.",
  "Make a hole for each leek with a trowel handle. If you have space, you can make a row of holes.",
  "Each hole should be 4cm across and 15cm deep.",
  "Lift out your leek plant and trim off its roots with scissors so that they are only 3cm long.",
  "Drop a leek plant into the hole. Do not tuck it in or push compost around it.",
  "When all the leeks are in the holes, fill a bottle or watering can and pour into the hole. Repeat until all the leeks have been 'puddled in'.",
  "When the leeks are beginning to look big and strong, you should push compost up around them in a mound. This will help the stem of the leek to be white and not have too many leaves.",
  "Your seed packet will offer advice as to when to harvest your particular variety of leek. Some baby leeks will take only two months or so to be ready to harvest, larger leeks will take longer.",
  "You should make sure that your leeks are well watered.",
]

const leekFacts = [
  "Leeks are a vegetable that grow under and above ground.",
  "Lots of leeks are grown across the UK, particularly in Cambridgeshire, Lincolnshire, The Midlands and of course Wales. Some leeks are also imported from other European countries.",
  "Leeks are in the same family as onions, however, onions grow mainly underground, whereas most of a leek grows above ground. Can you see a root? Leeks are roots.",
  "Leeks contain Flavonols. Flavonols are a special mixture of chemicals that are made by the plant and are good for your heart.",
  "The leek is the national emblem of Wales!",
]

const leekRecipeInstructions = [
  "Cheese Leek Bake!",
  "Preheat the oven to 180C.",
  "Finely slice the leeks (this is difficult for children to do, but they can explore the structure and layers of the leek with you before you slice up the leek. Take time to also find the root and leaves of the leek. It's quite an unusual plant because the stalk and leaves seem to run into each other.)",
  "Gently fry off the leeks in a tablespoon of oil on your lowest heat, taking care not to brown. Ask the children when they can begin to smell the leek cooking.",
  "Children can pick thyme leaves while the leek is softening.",
  "Sprinkle the thyme leaves into the leek.",
  "When the leeks have begun to soften, remove from the heat and tip in the crème fraiche – stir.",
  "Tip into the baking dish and sprinkle the cheese on top.",
  "Bake in the oven for ten mins or so, until the cheese is bubbling.",
]

const leekIngredients = [
  "Three large leeks",
  "One tub of crème fraiche",
  "Olive oil",
  "Bunch of thyme",
  "100g grated cheddar cheese",
  "Baking dish Pan.",
]

const LeekGrowingGuide = () => {
  return (
    <section className="relative" id="leek">
      <VegTitle
        title={"leek"}
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
            src="../../../images/portal/get-growing-guide/Leek.png"
          />
        }
      />

      <FullWidthPanel colours="bg-gold white" maxWidth="56rem">
        <Subheading className="coffeeTea mb3">Planting Leeks</Subheading>
        <Paragraph className="mb3 fw6">
          You can buy young leek plants from early spring, or grow from seed. If
          you choose to grow from seed you should check against the packet for
          information about whether you have an “early” or “late” variety and
          follow the sowing, planting out and harvesting schedule for that
          particular leek. Leeks can also take up quite a lot of space and are
          quite slow to crop if you choose a larger variety. If you have a large
          plot they can be fun to grow, but you might choose not to grow leeks
          if space is at a premium or you are limited only to pots and
          containers.
        </Paragraph>

        <StaticImage
          objectFit="contain"
          src="../../../images/portal/get-growing-guide/leek-assets/leeks-np.png"
        />
        <Subheading className="coffeeTea mb3">When?</Subheading>
        <Paragraph className="fw6">Feb/ Mar/ April - Sow your seeds</Paragraph>

        <Paragraph className="fw6">
          May/ June/ July - Plant out plants
        </Paragraph>
        <Paragraph className="fw6 mb4">
          Aug to Jan - Harvest (depending upon whether you chose an early or
          late variety)
        </Paragraph>
        <Subheading className="coffeeTea mt4 mb3">What to do?</Subheading>

        <List>
          {leekPlantingInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </List>
        <div className="mb3">
          <StaticImage
            style={{
              width: "20vw",
              maxWidth: "12rem",
              float: "right",
              marginTop: "-1rem",
              marginLeft: "1rem",
              transform: "rotate(13deg)",
            }}
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/leek-assets/leeks-new.png"
          />
        </div>
      </FullWidthPanel>

      <FullWidthPanel colours="bg-gold " maxWidth="56rem">
        <VegetableTable
          name="leeks"
          singular="leek"
          facts={leekFacts}
          recipeInstructions={leekRecipeInstructions}
          ingredients={leekIngredients}
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
              src="../../../images/portal/get-growing-guide/leek-assets/leeks-new.png"
              alt="image"
            />
          }
        />
      </FullWidthPanel>
    </section>
  )
}

export default LeekGrowingGuide
