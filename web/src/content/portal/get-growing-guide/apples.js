import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List } from "./styles"
import VegetableTable from "../../../components/portal/continuousProvisionTable"
import { StaticImage } from "gatsby-plugin-image"
import { NotepadWrapper } from "./styles"

const plantingInstructions = [
  "Have your pot, 'feet', compost, and stones ready.",
  "Decide where you want your tree to be. It will be heavy when it is planted and you don’t want to move it then.",
  "You will need a light and sunny spot, where the tree is relatively sheltered from strong winds.",
  "Place your pot on its 'feet'.",
  "Put the stones into the bottom of the pot, over the hole, but not with the aim of blocking the hole.",
  "Now cover the stones with some compost, so that they are just covered.",
  "Without removing your tree from its pot, lower it into your planting container in order to work out how much more compost you will need to add to the pot to bring the apple tree up to its existing soil level.",
  "When your tree is planted you want the top of the compost to be the same as it is now.",
  "Lift the tree out and add more compost until you achieve the right height for your tree.",
  "Now gently release the tree from its pot and sit it on top of your compost, ensuring that the top of its soil is now around 5cm from the top of your large container.",
  "Now fill in around the tree with more compost until the compost level is the same all around the tree.",
  "Gently press the compost around the tree, adding more if required.",
  "Water the tree.",
  "If you have access to coffee grounds you can cover the top surface of the compost with these in order to help to prevent the tree from drying out. Don’t put too many coffee grounds on top though, a 1cm depth is perfect.",
  "Over the coming months ensure that your tree does not dry out, by watering it if the weather is dry.",
  "Keep an eye out for changes to your tree.",
  "Changes in leaf colour, leaves dropping, new buds, blossoms – these are all great to point out to your children.",
]

const facts = [
  "Apples are fruit. They grow in trees.",
  "Apples like a cool climate and rainfall.",
  "Apples grow well in the UK and around half of the apples that you see in the UK shops are UK grown. Others are imported from France and South Africa.",
  "Apples are full of fibre. This is really important for a healthy tummy.",
  "When you eat apples you should try to eat the skin too, so make sure that you wash your apples, rather than peeling them.",
  "Dried apple rings can make a tasty snack.",
]

const ingredients = [
  "3 apples",
  "6 dried apricots",
  "150g porridge oats",
  "2 tablespoons sesame seeds (careful of allergies here)",
  "2 tablespoons nuts (careful of allergies here)",
  "2 tablespoons sultanas",
  "A pinch of cinnamon",
  "1 banana",
  "300ml apple juice",
  "300g Greek-style yoghurt",
  "A grater",
  "A selection of bowls",
]

const recipeInstructions = [
  "Apple Bircher Bowl!",
  "Grate the apple.",
  "Chop the nuts finely.",
  "Chop the apricots.",
  "Mix together all the ingredients except the banana.",
  "Chill overnight in a fridge.",
  "Serve in bowls, topped with a slice of banana.",
  "Then, enjoy!",
]

const ApplesGrowingGuide = () => {
  return (
    <section className="relative" id="apples">
      <VegTitle
        title={"apples"}
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
            src="../../../images/portal/get-growing-guide/Apple.png"
          />
        }
      />

      <FullWidthPanel colours="bg-gold white" maxWidth="56rem">
        <Subheading className="coffeeTea mb2">
          Planting an apple tree
        </Subheading>
        <Paragraph className="fw6 mb2">
          An apple tree is a lovely addition to any school. You are unlikely to
          harvest lots and lots of apples from your tree, particularly in the
          first year or so, but a small tree is useful when you want to discuss
          seasonal changes, pollinators, food origin. We think that adding a
          single apple tree to your provision is a great asset and one which
          requires relatively little maintenance.
        </Paragraph>
        <Paragraph className="mb2">
          You will find it easier to look for a tree in a pot, rather than one
          that is “bare root.”
        </Paragraph>
        <Paragraph className="mb2">
          Choose a variety of apple tree that says “Dwarf”, “Patio” or “M27” on
          the label. These will be trees that will remain small and grow well in
          a pot of around 50cm.
        </Paragraph>
        <Paragraph className="mb2">
          Sometimes you will find trees for sale that will say that they have
          two varieties of apple grafted. They might be labelled as “Duo” and
          this just means that two types of apple have been attached to the
          central stem. They will both grow, giving you two types of apple from
          one tree. Usually this will be a red apple and a contrasting green
          apple.
        </Paragraph>
        <Paragraph className="mb2">
          Make sure that your tree says “self-pollinating” or “self-fertile” on
          the label. This means that you do not need more than one tree in order
          to have fruit.
        </Paragraph>
        <Paragraph className="mb2">
          This might sound daunting at first but once you know what all of the
          terms on the label mean it is much less confusing.
        </Paragraph>
        <Paragraph className="mb4">
          The tree that you buy will probably be one-two years old and is
          unlikely to fruit until it is three–four years old.
        </Paragraph>
        <NotepadWrapper flexItemOneSize="30%">
          <StaticImage
            alt=""
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/appels-assets/apple-trowel.png"
          />
          <StaticImage
            alt=""
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/appels-assets/apple-np.png"
          />
        </NotepadWrapper>
        <Subheading className="coffeeTea mb3">When?</Subheading>

        <Paragraph className="mb4 fw6">
          Plant in September/ October/ November or March/ April/ May, but not
          when the ground is frozen.
        </Paragraph>
        <Subheading className="coffeeTea mb3">What to do?</Subheading>
        <List>
          {plantingInstructions.map((list, index) => (
            <li>{list}</li>
          ))}
        </List>
        <div className="mv5"></div>
      </FullWidthPanel>
      <VegTitle
        colour="bg-gold white"
        title={"enhanced continuous provision"}
      />
      <FullWidthPanel colours="bg-gold " maxWidth="56rem">
        <VegetableTable
          name="apples"
          singular="apple"
          facts={facts}
          recipeInstructions={recipeInstructions}
          ingredients={ingredients}
          moreInfo={
            <p>
              Check out our Easter session in the Celebrations theme, where you
              will meet Bee the Apple.
            </p>
          }
          vegetableImage={
            <StaticImage
              style={{
                width: "250px",
                height: "160px",
                bottom: "-0.5rem",
                right: "3rem",
                transform: "rotate(3deg)",
              }}
              imgStyle={{}}
              className="vegetableImage"
              src="../../../images/vegetables/Bee.png"
              alt="image"
            />
          }
          spacerHeight={"12rem"}
        />
      </FullWidthPanel>
    </section>
  )
}

export default ApplesGrowingGuide
