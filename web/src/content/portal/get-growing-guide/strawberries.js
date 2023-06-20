import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List } from "./styles"
import VegetableTable from "../../../components/portal/continuousProvisionTable"
import { StaticImage } from "gatsby-plugin-image"
import { NotepadWrapper } from "./styles"

const plantingInstructions = [
  "Make sure that you have your containers, compost and plants/ runners ready.",
  "For plants you should put enough compost into your containers to bring your strawberries up to the level of 5cm below the top of your container when planted. Then place the plant on top of the compost and fill around it/ them.",
  "For 'runners' you should fill the container, then make a hole for planting.",
  "Now place a handful of straw around the plant, this will keep slugs and snails away from your strawberries, keep moisture in the pot and prevent compost from being splashed up onto your strawberries when you water.",
  "Gently water on top of the straw; this will help to bed the straw down and stop it blowing away immediately.",
  "Water the strawberries regularly and keep an eye out for flowers and strawberries, as the weather warms up.",
  "Expect to start harvesting from 8 to 10 weeks from planting.",
  "It can be difficult to prevent children from eating the strawberries before they are fully ripe - so keep an eye out for eager fingers!",
]

const facts = [
  "Strawberries are fruit. They grow above ground.",
  "British strawberries grow between May and September, so strawberries bought at other times of the year have probably come on a long journey from another country.",
  "Strawberries are best when they are eaten quite quickly after harvest. British strawberries are available from April to October, but strawberries imported from other countries are available almost all year round.",
  "Strawberries have their seeds on their outside – which is interesting because most fruits have their seeds inside!",
  "Strawberries contain fiber that is good for your tummy.",
]

const ingredients = [
  "500g fresh strawberries.",
  "250ml double cream.",
  "150ml thick Greek-style yogurt.",
  "Small cups, ramekins or other individual serving-sized containers.",
  "Spoons.",
  "Hand whisk.",
]

const recipeInstructions = [
  "Strawberry Mousse Cups!",
  "Give each child a strawberry to squash into the bottom of their cup with a fork. Keep squashing until it is pulpy.",
  "Whisk the cream, taking turns until it is whipped.",
  "Stir in the yogurt.",
  "Squash all but five of the remaining strawberries onto a chopping board with a fork and then scrape the pulpy strawberries into the whipped cream. Stir.",
  "Spoon the creamy mousse into the cups and top each with a slice of strawberry from the remaining five strawberries.",
  "Refrigerate for at least two hours, then serve and enjoy!",
]

const StrawberryGrowingGuide = () => {
  return (
    <section className="relative" id="strawberries">
      <VegTitle
        title={"strawberries"}
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
            src="../../../images/portal/get-growing-guide/Strawberry.png"
          />
        }
      />

      <FullWidthPanel colours="bg-gold white" maxWidth="56rem">
        <Subheading className="coffeeTea mb2">Planting Strawberries</Subheading>
        <Paragraph>
          Strawberries are loved by most children and they require almost no
          maintenance.
        </Paragraph>

        <Paragraph className="mb4">
          Strawberries also spread very easily, sending out new plants on long
          stalks called “runners,” so you will probably find someone locally who
          will willingly gift you a few plants. Try asking parents or even your
          staff. If you cannot find anyone with plants to give away, it is
          relatively inexpensive to purchase strawberry plants.
        </Paragraph>
        <NotepadWrapper flexItemOneSize="35%">
          <StaticImage
            alt=""
            style={{ transform: "rotate(-6deg)", marginTop: "8rem" }}
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/strawberry-assets/strawberry-new.png"
          />
          <StaticImage
            alt=""
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/strawberry-assets/strawberry-np.png"
          />
        </NotepadWrapper>
        <Subheading className="coffeeTea mb3">When?</Subheading>
        <Paragraph className="fw6">March - Plant ‘runners.’</Paragraph>
        <Paragraph className="fw6">
          April/ May - Plant strawberry plants.
        </Paragraph>
        <Paragraph className="mb4 fw6">
          June/ July/ Aug/ Sept - Harvest.
        </Paragraph>
        <Subheading className="coffeeTea mb3">What to do?</Subheading>
        <List>
          {plantingInstructions.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </List>
        <div style={{ maxWidth: "58rem" }}>
          <StaticImage
            style={{ maxWidth: "40rem", float: "right" }}
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/strawberry-assets/strawberry-watering-can.png"
          />
        </div>
      </FullWidthPanel>
      <VegTitle
        colour="bg-gold white"
        title={"enhanced continuous provision"}
      />
      <FullWidthPanel colours="bg-gold " maxWidth="56rem">
        <VegetableTable
          name="strawberries"
          singular="strawberry"
          facts={facts}
          recipeInstructions={recipeInstructions}
          ingredients={ingredients}
          vegetableImage={
            <StaticImage
              objectFit="contain"
              style={{
                marginTop: "14rem",
                paddingLeft: "2rem",
              }}
              src="../../../images/portal/get-growing-guide/strawberry-assets/strawberry-new.png"
              alt="image"
            />
          }
        />
      </FullWidthPanel>
    </section>
  )
}

export default StrawberryGrowingGuide
