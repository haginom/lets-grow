import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List, NotepadWrapper } from "./styles"
import VegetableTable from "../../../components/portal/continuousProvisionTable"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const plantingInstructions = [
  "Make sure that your large container and compost are ready.",
  "Fill your container with compost up to 5cm from the top.",
  "Make a hole in the centre of the compost, just large enough to plant your pepper.",
  "Gently hold your hand around the plant to stop it falling to the floor and turn its pot upside down, giving the pot a little squeeze, if the plant needs a little encouragement to come out of the pot.",
  "Plant your pepper plant so that the first 1cm or so of stem is under the compost.",
  "Press the compost around the plant gently to ensure that there are no air pockets.",
  "Move your container to a warm, bright, sunny spot.",
  "Water the plant. The compost should be damp, and never dry out – but don’t let the plant sit in water.",
  "Pepper plants like a humid environment, so you can lightly mist your plant once a day too to ensure that the leaves receive some moisture.",
  "When the plant reaches 15cm or so high, you may find that it would benefit from a little support.",
  "Gently poke the kebab stick into the pot a few cm away from the stem and then encourage the plant to lean against the stick. As the plant grows, it might be necessary to tie the plant to the stick. Don’t tie the string tightly as this will damage the stem.",
  "When the plant is 30cm high, you should remove the top two tiny leaves on the stem. You can do this just with your thumb and index finger. This will help the plant to become a little bushier and grow more fruit.",
  "Expect to start harvesting peppers at around 12 weeks.",
]
const plantingInstructionsTwo = [
  "Ensure that you have enough yoghurt pot-sized containers for your seeds.",
  "Make sure that you have drainage holes in your pots.",
  "Fill your pots to 1cm from the top.",
  "Place the seed on the compost.",
  "Cover over the seed with a little compost, then water very gently.",
  "Now open a sandwich bag and place it over your pot like a mini greenhouse, this will keep your seed warm enough to germinate.",
  "Place on a windowsill indoors, or in another warm, light place.",
  "As soon as you see the green shoots start to appear, you should remove the plastic bag, so that your seedling doesn’t rot.",
  "The plant will grow two leaves at first. Then it will grow a third leaf that will look different from the first two. These new leaves are called the 'true leaves,' and all of the plant's new leaves will look like this.",
  "Continue with instructions from above, in the bought pepper plant instructions.",
]

const facts = [
  "Peppers are fruit. They grow above ground.",
  "Most UK peppers come from Spain and the Netherlands, as they need warmer temperatures to grow.",
  "Pointy Peppers and Bell Peppers are the types of pepper that you might see in the shops most often. These are not are not hot and spicy like Chilli Peppers.",
  "Peppers are full of carotenoids. This means that they are great at keeping your eyes healthy.",
  "In shops you will see red, yellow, orange and green peppers. They all come from the same plant but green ones are less ripe than red ones. It’s fun to taste them all and see which you think are the sweetest and mostripe!",
]

const ingredients = [
  "1 onion.",
  "2 cloves garlic.",
  "4 tins of tomatoes (discuss how these tomatoes look different to fresh tomatoes).",
  "2 jars roasted peppers (discuss and explore what has happened to these peppers. Where has the skin gone?).",
  "500ml vegetable stock.",
  "Tablespoon of olive oil.",
  "Pan.",
  "Stick Blender.",
  "Tablespoon of yoghurt to stir in at the end.",
]

const recipeInstructions = [
  "Pepper & Tomato Soup!",
  "Let children handle the onion and garlic, do they know how to remove the papery skin?",
  "Let the children see the onion and garlic being chopped.",
  "Gently fry the onion and garlic over a low heat, with the lid on, don’t let it brown!",
  "Chop the tomatoes and peppers. Children may be able to do this with a table knife.",
  "Grown-ups add the tomatoes and peppers to the pan and stir.",
  "Allow the soup to gently bubble for five minutes.",
  "Grown-ups blend the soup in the pan and then warm again.",
  "Spoon into bowls and allow children to blob their own yoghurt on top, then enjoy!",
  "Note to teachers: Explain that keeping fruit or vegetables in cans or jars helps them to stay fresh for longer.",
]

const PeppersGrowingGuide = () => {
  return (
    <section className="relative" id="pepper">
      <VegTitle
        title={"peppers"}
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
            src="../../../images/portal/get-growing-guide/Pepper.png"
          />
        }
      />

      <FullWidthPanel colours="bg-gold white" maxWidth="56rem">
        <Subheading className="coffeeTea mv3">Planting Peppers</Subheading>
        <Paragraph className="fw6">
          Peppers will grow best inside in a sunny spot, so make sure that you
          have a bright windowsill or similar spot in mind before you begin.
          Your plant will grow to around 60cm tall. It’s helpful to have a plant
          in an inside location. This means that you have a growing plant on
          hand to refer to more easily and children can see the development of
          the plant without going outside too.
        </Paragraph>
        <Paragraph>
          Like the tomatoes, you could buy just one or two plants from your
          garden centre. You are unlikely to have space for lots of plants
          indoors, so buying and growing from seed is unnecessary, however we
          appreciate that you may want to. Below we offer two approaches -
          firstly we guide you from buying a pepper plant from a garden centre;
          and then we provide instructions for growing a pepper plant from seed.
        </Paragraph>
        <Subheading className="coffeeTea mv3">
          Growing peppers from a bought pepper plant
        </Subheading>
        <NotepadWrapper flexItemOneSize="35%" className="items-start">
          <StaticImage
            style={{
              transform: "scaleX(-1) rotate(-20deg)",
              width: "100%",
              objectFit: "cover",
            }}
            src="../../../images/portal/get-growing-guide/peppers-assets/pepper-image.png"
          />
          <StaticImage
            style={{
              transform: "scale(1.2)",
            }}
            src="../../../images/portal/get-growing-guide/peppers-assets/pepper-plant-nb.png"
          />
        </NotepadWrapper>
        <Subheading className="coffeeTea mb3 ">When?</Subheading>
        <Paragraph className="fw6">April/ early May - Planting.</Paragraph>
        <Paragraph className=" fw6 mb4">July to October - Harvest.</Paragraph>
        <Subheading className="coffeeTea  mb3 mt4">What to do?</Subheading>
        <List>
          {plantingInstructions.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </List>
        <div className="w-100 cf">
          <StaticImage
            style={{ width: "60vw", maxWidth: "30rem", float: "right" }}
            src="../../../images/portal/get-growing-guide/peppers-assets/peppers-watering-can.png"
          />
        </div>

        <Subheading className="coffeeTea mt4 mb3">
          Growing peppers from seed
        </Subheading>
        <Paragraph className="mb4 fw6">
          If you do choose to grow peppers from seed that’s great! You should
          choose a small variety, as this will need less space to grow. Remember
          that you will need to keep these plants indoors in a light and warm
          space all of the time unless you are in a very warm and sunny
          location.
        </Paragraph>
        <NotepadWrapper flexItemOneSize="80%" className="items-start">
          <StaticImage
            className="w-50"
            style={{
              transform: "scaleX(-1) rotate(10deg) scale(0.6)",
              objectFit: "contain",
              marginRight: "2rem",
              marginLeft: "-3rem",
              marginTop: "-3rem",
            }}
            src="../../../images/portal/get-growing-guide/peppers-assets/pepper-image.png"
          />
          <StaticImage
            style={{
              transform: "scale(1.1)",
              objectFit: "contain",
              marginLeft: "2rem",
            }}
            src="../../../images/portal/get-growing-guide/peppers-assets/Peppers-what-you-need.png"
          />
        </NotepadWrapper>
        <Subheading className="coffeeTea mb3 fw6">When?</Subheading>
        <Paragraph className="fw6">Feb/ March - Sow seeds indoors.</Paragraph>
        <Paragraph className="fw6">
          Pot on when your seedlings have four leaves.
        </Paragraph>
        <Paragraph className="mb4 fw6">July to October - Harvest.</Paragraph>
        <Subheading className="coffeeTea mv3">What to do?</Subheading>
        <List>
          {plantingInstructionsTwo.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </List>
        <div style={{ maxWidth: "58rem" }}>
          <StaticImage
            style={{ width: "60vw", maxWidth: "30rem", float: "right" }}
            src="../../../images/portal/get-growing-guide/peppers-assets/peppers-trowel.png"
          />
        </div>
      </FullWidthPanel>
      <VegTitle
        colour="bg-gold white"
        title={"enhanced continuous provision"}
      />
      <FullWidthPanel colours="bg-gold " maxWidth="56rem">
        <VegetableTable
          name="peppers"
          singular="pepper"
          facts={facts}
          recipeInstructions={recipeInstructions}
          ingredients={ingredients}
          moreInfo={
            <p>
              Check out our{" "}
              <Link to="/portal/getting-to-know-each-other" className="fw6">
                ‘Favourite Things ’
              </Link>{" "}
              session in the{" "}
              <Link to="/portal/getting-to-know-each-other" className="fw6">
                ‘Getting To Know Each Other’
              </Link>{" "}
              theme, where you will meet Dilly & Dally the Peppers.
            </p>
          }
          vegetableImage={
            <StaticImage
              style={{
                width: "30vw",
                height: "35vw",
                maxWidth: "180px",
                maxHeight: "220px",
                bottom: "-3.5rem",
                right: "1rem",
                transform: "rotate(5deg)",
              }}
              className="vegetableImage"
              src="../../../images/vegetables/Peppers.png"
              alt="image"
            />
          }
          spacerHeight={"14rem"}
        />
      </FullWidthPanel>
    </section>
  )
}

export default PeppersGrowingGuide
