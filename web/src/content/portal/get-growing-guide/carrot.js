import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List } from "./styles"
import VegetableTable from "../../../components/portal/continuousProvisionTable"
import { StaticImage } from "gatsby-plugin-image"
import { NotepadWrapper } from "./styles"

const plantingInstructions = [
  "Make sure you have all of your containers, compost and seed ready.",
  "Fill your containers to 7cm or so from the top.",
  "Now water your compost surface.",
  "Sprinkle your seed very finely across the surface of the compost.",
  "Very lightly sprinkle a little more compost on top, barely covering the carrots at all.",
  "Water the carrots the following day and then keep the surface moist but not wet.",
  "Try to avoid touching the leaves if you can, as the smell of the disturbed leaves can attract carrot fly which will reduce your success.",
  "Water the carrots whenever the compost seems dry.",
  "Expect to harvest from 12 to 16 weeks.",
]

const facts = [
  "Carrots are vegetables. They grow below ground.",
  "Lots of carrots are grown in Britain, which means that they’re a great eco-friendly vegetable because they don’t need to be imported.",
  "Carrots are delicious and crunchy when they are uncooked.",
  "Some people say that carrots help you to see in the dark, and this really is true! Carrots are full of vitamin A that can help our eyes to work well.",
  "When we eat a carrot, we are actually just eating the root of the carrot plant. The plant also has leaves and even flowers too.",
]

const ingredients = [
  "A selection of carrots.",
  "Enough carrots to create carrot sticks for every child.",
  "1 tub ricotta cheese.",
  "1 lemon.",
  "Big handful of mint.",
  "500g bag of defrosted frozen peas.",
  "Mini food processor.",
  "Lemon squeezer.",
]

const recipeInstructions = [
  "Carrot Sticks with Minty Pea Dip!",
  "Squeeze the lemon.",
  "Pick the leaves from the mint.",
  "Cut the carrots into sticks (This is a teacher task, but worth doing in front of the children so that they can see the transition of the carrot into carrot stick).",
  "Taste each of the ingredients separately.",
  "Discuss safety. Ensure that the processor bowl is detached from the processor.",
  "Put all ingredients except for the carrot sticks into the bowl.",
  "Encourage children to make predictions about taste.",
  "Reiterate safety and ensure a safe distance for children to observe.",
  "Blitz the dip. Remove the bowl.",
  "Scoop the dip into a bowl.",
  "Serve with the carrot sticks.",
]

const CarrotGrowingGuide = () => {
  return (
    <section className="relative" id="carrot">
      <VegTitle
        title={"carrots"}
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
            src="../../../images/portal/get-growing-guide/Carrot.png"
          />
        }
      />

      <FullWidthPanel colours="bg-gold white" maxWidth="56rem">
        <Subheading className="coffeeTea mb2">Planting Carrots</Subheading>
        <Paragraph>
          Carrots are fabulous to plant with children, because you can plant
          them throughout so much of the year and you do not need to pot them
          on.
        </Paragraph>
        <Paragraph>
          If you want to plant in February or March, you should look for an
          “early” variety (check the details on the packet to see that your
          variety is ok to plant this soon – not all earlies are) and be
          prepared to cover your carrots with the sort of fleecy insulating
          material that comes in recipe delivery boxes, if it turns frosty.
        </Paragraph>
        <Paragraph>
          If you are planting from April onwards, you should not have to worry
          so much about the frost and can look for an “early” or a “maincrop”
          variety of carrot.
        </Paragraph>
        <Paragraph>
          Round carrots will do particularly well in a container.
        </Paragraph>
        <Paragraph className="mb4">
          You can sprinkle a few seeds into your container to begin growing and
          then do a few more a week or so later if you want to not pull all of
          your carrots at the same time.
        </Paragraph>
        <NotepadWrapper flexItemOneSize="75%">
          <StaticImage
            alt=""
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/carrots-assets/carrots.png"
          />
          <StaticImage
            alt=""
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/carrots-assets/carrots-np.png"
          />
        </NotepadWrapper>
        <Subheading className="coffeeTea mb3">When?</Subheading>
        <Paragraph className="fw6">
          Feb/ March - Sow some early varieties, but check the details on the
          packet and be prepared to protect from frost and snow.
        </Paragraph>
        <Paragraph className="fw6">
          April to July - Sow “early” and “maincrop” varieties. “Early”
          varieties will be ready to harvest sooner.
        </Paragraph>
        <Paragraph className="fw6 mb4">
          May to Oct - Harvest, dependent upon when you planted (12 to 16 weeks
          from planting).
        </Paragraph>
        <Subheading className="coffeeTea  mb3 mt4">What to do?</Subheading>
        <List>
          {plantingInstructions.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </List>
        <div>
          <StaticImage
            style={{ width: "60vw", maxWidth: "40rem", float: "right" }}
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/carrots-assets/carrots-snippers.png"
          />
        </div>
      </FullWidthPanel>
      <VegTitle
        colour="bg-gold white"
        title={"enhanced continuous provision"}
      />
      <FullWidthPanel colours="bg-gold " maxWidth="56rem">
        <VegetableTable
          name="carrots"
          singular="carrot"
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
              src="../../../images/portal/get-growing-guide/carrots-assets/carrots-new.png"
              alt="image"
            />
          }
        />
      </FullWidthPanel>
    </section>
  )
}

export default CarrotGrowingGuide
