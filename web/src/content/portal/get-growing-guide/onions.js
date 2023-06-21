import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List } from "./styles"
import VegetableTable from "../../../components/portal/continuousProvisionTable"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const plantingInstructions = [
  "Make sure that you have enough large containers and compost ready.",
  "Fill your containers with compost to 5cm from the top.",
  "Look at your onion sets. You will be able to see very tiny roots at the base. The top of the onion will be slightly more papery and pointy. Make sure that you know which is which.",
  "With your index finger, make holes up to your first knuckle joint for all of the onions. The holes will be 10-15cm apart.",
  "Put one onion set into each hole, with its bottom in the bottom of the hole and its top just peeking out the top. Gently push the compost up to the onion with your fingers.",
  "Water the onions once a week, if there is no rain.",
  "If your onions start to form flowers, just snip them away. The flowers will take energy away from the onion that we are trying to grow in the ground.",
  "When the leaves have died back, your onion is ready to harvest and should lift out of the pot fairly easily. This will be after approximately 12 weeks of growth.",
]

const facts = [
  "Onions are vegetables. They grow under the ground.",
  "Onions grow well in the UK; they like a cooler climate and plenty of rain. When it is too cold to grow onions in the UK, they are imported from Spain, the Netherlands, and Egypt.",
  "Onions are from the same family as garlic, shallots & leeks.",
  "Onions are incredible! They are full of flavonoids. This means that they can protect your body from different illnesses.",
  "Onions are so tasty and delicious that they are in lots of the foods that we eat, such as pasta sauce, pizza, curry, and lots more. Look at the ingredients of your favorite foods to see if they contain onion!",
]

const ingredients = [
  "1 bag of frozen onions",
  "50g butter",
  "1 tsp brown sugar",
  "1 tbsp plain flour",
  "500ml warm vegetable stock",
  "Sprigs of fresh thyme",
  "Pan and heat source",
  "Meat or veggie sausages",
]

const recipeInstructions = [
  "Onion sauce – served with sausages!",
  "Cooking onions with young children can be tricky as their tendency to make people cry can be off-putting. You can overcome this by using a packet of frozen chopped onion and discussing how the onion has changed from the unprocessed vegetable. This makes cooking with onion much easier and eliminates those tears!",
  "While children are waiting for the onions to soften and caramelize, they can explore the thyme leaves. What does it smell like? Is it familiar? How do we know that thyme is an herb? Do we know any other herbs? Why do we not eat the stalks and stems?",
  "Melt the butter gently in the pan, then add the onion and stir.",
  "Put the lid on the pan and gently soften them over a low heat for 15 mins, then add the sugar and stir.",
  "Continue to cook for 15 mins, stirring and observing the changes every 5 mins.",
  "Add the flour and stir through, off the heat.",
  "Add the stock and stir, then return to the heat.",
  "Add the picked thyme and simmer for 5-10 mins.",
  "Serve with sausages of your choice.",
  "Note to teachers: whilst children are waiting for the onions to soften and caramelise they can explore the thyme leaves What does it smell like? Is it familiar? How do we know that thyme is a herb? Do we know any other herbs? Why do we not eat the stalks and stems?",
]

const OnionsGrowingGuide = () => {
  return (
    <section className="relative" id="onion">
      <VegTitle
        title={"onion"}
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
            src="../../../images/portal/get-growing-guide/Onion.png"
          />
        }
      />

      <FullWidthPanel colours="bg-gold white" maxWidth="56rem">
        <Subheading className="coffeeTea mb2">Planting Onions</Subheading>
        <Paragraph className="fw6">
          Onions are very easy for children to plant since the “sets” (this is
          the special name for the tiny onions that you plant) are large and
          robust enough for children to handle easily.
        </Paragraph>
        <Paragraph className="mb4">
          Onions are also great because you can plant them when the temperature
          outside is much colder than some of our other plants, meaning that you
          can have something growing for more of the year.
        </Paragraph>
        <StaticImage
          alt=""
          objectFit="contain"
          src="../../../images/portal/get-growing-guide/onions-assets/onion-np.png"
        />
        <Subheading className="coffeeTea mb3">When?</Subheading>
        <Paragraph className="fw6">
          March/ April or Oct/ Nov – Plant oinon “sets.” Choose whichever time
          of year works best for you. You will be able to buy the appropriate
          variety of onion at that time.
        </Paragraph>
        <Paragraph className="fw6">
          Harvest in June/ July/ Aug, if you planted in Oct/ Nov.
        </Paragraph>
        <Paragraph className="mb4 fw6">
          Harvest in Aug/ Sept, if you planted in March/ April.
        </Paragraph>
        <Subheading className="coffeeTea mb3 mt4">What to do?</Subheading>
        <List>
          {plantingInstructions.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </List>
        <StaticImage
          alt=""
          objectFit="contain"
          style={{ width: "100%" }}
          src="../../../images/portal/get-growing-guide/onions-assets/onions-bucket.png"
        />
      </FullWidthPanel>
      <VegTitle
        colour="bg-gold white"
        title={"enhanced continuous provision"}
      />
      <FullWidthPanel colours="bg-gold " maxWidth="56rem">
        <VegetableTable
          name="onions"
          singular="onion"
          facts={facts}
          recipeInstructions={recipeInstructions}
          ingredients={ingredients}
          moreInfo={
            <p>
              Check out our{" "}
              <Link to="/portal/sessions/bonfire-night" className="fw6">
                Bonfire Night{" "}
              </Link>
              session in the{" "}
              <Link to="/portal/celebrations" className="fw6">
                Celebrations
              </Link>{" "}
              theme, where you will meet Sparks the Onion.
            </p>
          }
          vegetableImage={
            <StaticImage
              style={{
                width: "35vw",
                height: "30vw",
                maxWidth: "160px",
                maxHeight: "160px",
                bottom: "-3rem",
                right: "1rem",
              }}
              imgStyle={{}}
              className="vegetableImage"
              src="../../../images/vegetables/Sparks.png"
              alt="image"
            />
          }
          spacerHeight={"12rem"}
        />
      </FullWidthPanel>
    </section>
  )
}

export default OnionsGrowingGuide
