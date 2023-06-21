import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List } from "./styles"
import VegetableTable from "../../../components/portal/continuousProvisionTable"
import { StaticImage } from "gatsby-plugin-image"
import { NotepadWrapper } from "./styles"

const cucumberPlantingInstructions = [
  "Ensure that you have enough yoghurt pot sized containers for your seeds.",
  "Make sure that you have drainage holes in your pots.",
  "Fill your pots with compost, up to 1cm from the top.",
  "Make a 1cm hole with a pencil in the compost, in the centre of the pot.",
  "Place the seed on its side in the hole.",
  "Cover over the seed with a little compost then water very gently.",
  "Place on a windowsill indoors, or in another warm light place.",
  "Within a week or so you will start to see some green leaves.",
  "The plant will grow two leaves at first. Then it will grow a third leaf that will look different to the first two. These new leaves are called the 'true leaves' and all of the plant's new leaves will look like this.",
  "When the plant has three leaves it will probably look a bit too big for its pot. You should now 'pot on'. 'Potting on' just means that you are moving your plant into a bigger pot, to give it more room to grow.",
  "In this case, we are going to 'pot on' straight into our final location.",
]

const cucumberPlantingOutInstructions = [
  "Your seedlings are now ready to plant out in your greenhouse.",
  "Get your large containers ready. They should be at least as big as a 'bag for life.' Remember that you might need to put drainage holes in a solid plastic container like a bin.",
  "Decide where you would like your cucumbers to grow. You are going to plant out in this location, so that you don’t have to move the containers when they are full.",
  "Fill the container to around 5cm from the top.",
  "Gently hold your hand around the seedling to stop it from falling to the floor and turn its pot upside down, giving the pot a little squeeze if the plant needs a little encouragement to come out of the pot.",
  "You should be able to see the roots of your plant.",
  "Now make a hole in the compost in the centre of your large container. The hole should be just big enough to pop your seedling into.",
  "Put your seedling into the hole and push the compost around its base a little to make sure that there are no big air pockets around the plant.",
  "Now give the plant a gentle but generous watering.",
  "Continue to water your cucumber plants regularly, if possible using a tomato feed weekly. (Follow the directions on the bottle of the particular feed that you buy).",
  "Some varieties of cucumber will be 'bush' varieties, these will not need any support.",
  "Others will be 'vine' varieties and will need a little support if they are not going to sprawl across your greenhouse.",
  "You can put three bamboo canes into your pot to make a tripod and tie it at the top with string to secure.",
  "As the cucumber grows, gently wrap the vines up the canes to encourage them to grow up rather than out, tying very gently with garden string if need be.",
  "Expect to harvest 6 to 10 weeks after planting.",
  "You should harvest the cucumbers by cutting them off with a sharp knife when they are still small. (You can involve children by getting them to point out the ones that are ready for picking and then you use the knife to safely remove the fruit).",
  "You should enjoy plenty of mini cucumbers from just one plant. Children will enjoy watching the fruits growing day by day and deciding when they are big enough to be eaten.",
]

const cucumberFacts = [
  "Cucumbers are fruit that grow above ground.",
  "They require a warm climate to grow, and they are commonly grown in Spain, the Netherlands, and Morocco.",
  "Cucumbers are hydrating and refreshing.",
  "They can be enjoyed as a crunchy snack or added to lunch boxes.",
]

const cucumberRecipeInstructions = [
  "Cool Raita Dip",
  "Squeeze the lime.",
  "Pick the leaves from the mint.",
  "Chop the coriander and mint finely.",
  "Grate the cucumber and place on a pad of kitchen roll.",
  "Press another pad of kitchen roll on top to remove most of the liquid.",
  "Stir together all of the ingredients, then enjoy with your chosen bread!",
]

const cucumberIngredients = [
  "500g Greek-style yogurt.",
  "1 garlic clove, crushed.",
  "1 bunch coriander.",
  "1 bunch mint.",
  "1 lime.",
  "1/2 cucumber.",
  "Pinch of salt.",
  "Lemon squeezer.",
  "Grater.",
  "Kitchen roll.",
  "Serve with naan or your bread of choice!",
]
const CucumberGrowingGuide = () => {
  return (
    <section className="relative" id="cucumber">
      <VegTitle
        title={"cucumber"}
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
            src="../../../images/portal/get-growing-guide/Cucumber.png"
          />
        }
      />

      <FullWidthPanel colours="bg-gold white" maxWidth="56rem">
        <Subheading className="coffeeTea mb3">Planting Cucumber</Subheading>
        <Paragraph className="fw6 mb3">
          There are many varieties of cucumber to choose from. Select your
          favorite cucumber and follow these planting instructions:
        </Paragraph>
        <NotepadWrapper flexItemOneSize="85%">
          <StaticImage
            alt=""
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/cucumber-assets/cucumber-new.png"
          />
          <StaticImage
            alt=""
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/cucumber-assets/cucumber-np.png"
          />
        </NotepadWrapper>
        <Subheading className="coffeeTea mb3">When?</Subheading>

        <Paragraph className="fw6">Feb/ March - Sow seed.</Paragraph>
        <Paragraph className="fw6 mb4">July to Oct - Harvest.</Paragraph>
        <Subheading className="coffeeTea  mb3 mt4">What to do?</Subheading>

        <List>
          {cucumberPlantingInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </List>
        <Subheading className="coffeeTea mt4 mb3">Planting out...</Subheading>
        <Paragraph className="fw6 mb3">
          (You can jump straight to this section if you bought a seedling from
          your garden centre in May.)
        </Paragraph>

        <List>
          {cucumberPlantingOutInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </List>
        <div className="mb3">
          <StaticImage
            style={{ maxWidth: "35rem", float: "right", marginTop: "-2rem" }}
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/cucumber-assets/cucumber-trowel.png"
          />
        </div>
      </FullWidthPanel>

      <FullWidthPanel colours="bg-gold ">
        <VegetableTable
          name="cucumbers"
          singular="cucumber"
          facts={cucumberFacts}
          recipeInstructions={cucumberRecipeInstructions}
          ingredients={cucumberIngredients}
          moreInfo={
            <p>
              Check out our Eid session in the Celebrations theme, where you
              will meet Pip the Cucumber.
            </p>
          }
          spacerHeight={"12rem"}
          vegetableImage={
            <StaticImage
              style={{
                width: "200px",
                height: "260px",
                bottom: "-2.5rem",
                right: "6rem",
                transform: "rotate(5deg)",
              }}
              imgStyle={{}}
              className="vegetableImage"
              src="../../../images/vegetables/Pip.png"
              alt=""
            />
          }
        />
      </FullWidthPanel>
    </section>
  )
}

export default CucumberGrowingGuide
