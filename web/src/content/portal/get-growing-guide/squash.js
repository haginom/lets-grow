import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List } from "./styles"
import VegetableTable from "../../../components/portal/continuousProvisionTable"
import { StaticImage } from "gatsby-plugin-image"
import { NotepadWrapper } from "./styles"

const plantingInstructions = [
  "Ensure that you have enough yoghurt pot sized containers for your seeds.",
  "Make sure that you have drainage holes in your pots.",
  "Fill your pots to 1cm from the top with compost.",
  "Make a 1cm hole with a pencil in the centre of the pot, in the compost.",
  "Place the seed on its side in the hole.",
  "Cover over the seed with a little compost then water very gently.",
  "Place on a windowsill indoors, or in another warm light place. If it is late May, you can put your pots straight outside, but be careful that they can’t be knocked over by the wind.",
  "Within a week or so you will start to see some green leaves.",
  "The plant will grow two leaves at first. Then it will grow a third leaf that will look different to the first two. These new leaves are called the “true leaves” and all of the plant’s new leaves will look like this.",
  "You will notice that the squash and courgette leaves look very similar to one another. This is because the plants are from the same family.",
  "When the plant has three leaves it will probably look a bit too big for its pot. You should now 'pot on'. 'Potting on' just means that you are moving your plant into a bigger pot, to give it more room to grow.",
  "In this case we are going to 'pot on' straight into our final location.",
  "Your seedlings are now ready to plant out.",
  "Get your large containers ready. They should be at least as big as a 'bag for life.' Remember that you might need to put drainage holes in a solid plastic container like a bin.",
  "Decide where you would like your squash to grow. You will need as much sun as you can, so have a look at your site throughout the day, where seems to have the most sunlight? You are going to plant out your squash in this location, so that you don’t have to move the containers when they are full.",
  "Fill the container to around 5cm from the top.",
  "Gently hold your hand around the seedling to stop it falling to the floor and turn its pot upside down, giving the pot a little squeeze if the plant needs a little encouragement to come out of the pot.",
  "You should be able to see the roots of your plant.",
  "Now make a hole in the compost in the centre of your large container. The hole should be just big enough to pop your seedling into.",
  "Put your seedling into the hole and push the compost around its base a little to make sure that there are no big air pockets around the plant.",
  "Now give the plant a gentle but generous watering.",
  "Continue to water your squash plants regularly.",
  "Expect to harvest in 12 to 15 weeks from sowing seeds.",
  "You should harvest the squash by cutting them off with a sharp knife when they are still small. (You can involve children by getting them to point out the ones that are ready for picking and then you use the knife to safely remove the fruit).",
]

const facts = [
  "Although we call butternut squash vegetables, they’re technically a fruit because they contain seeds.",
  "Butternut squash grow above ground, on the soil.",
  "Butternut squash contain Vitamin C, Zinc and Sodium; which are all important for good bone health.",
  "Butternut squash are just one type of squash; there are lots of different types, shapes and colours of squash.",
  "Sometimes butternut squash are known as acorn squash, can you think why?",
  "Farmers in the UK are beginning to grow butternut squash as the climate changes and becomes a little warmer. However, most UK butternut squash is still imported from Argentina, South Africa or Greece.",
]

const ingredients = [
  "1 small butternut squash.",
  "500g pasta shells.",
  "150g crème fraiche.",
  "100g grated cheddar.",
  "Olive oil.",
  "Baking tray lined with greaseproof paper.",
  "An ovenproof dish.",
]

const recipeInstructions = [
  "Butternut Pasta Shells!",
  "Preheat the oven to 200C.",
  "Chop open the butternut squash.",
  "Explore the inside & allow children to remove all the seeds.",
  "Chop the butternut squash into cubes approximately 1cm in size, leaving the skin on.",
  "Tip the squash cubes onto the tray.",
  "Pour on a very little olive oil and encourage children to tumble the squash over and over until they are thoroughly coated.",
  "Then roast for 30 mins, turning once.",
  "Cook the pasta then drain and tip into the ovenproof dish.",
  "When the squash is cooked, place on a chopping board and mash down with a fork. Then, scrape onto the pasta.",
  "Spoon in the crème fraiche and stir all together, then top with cheese and bake in the oven until gently bubbling. Once cooled, enjoy!",
]

const SquashGrowingGuide = () => {
  return (
    <section className="relative" id="squash">
      <VegTitle
        title={"butternut squash"}
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
            src="../../../images/portal/get-growing-guide/Squash.png"
          />
        }
      />

      <FullWidthPanel colours="bg-gold white" maxWidth="56rem">
        <Subheading className="coffeeTea mb2">
          Planting a butternut squash
        </Subheading>
        <Paragraph className="fw6">
          Much like courgettes, squash have big seeds that are easy for children
          to plant, but you might not have space for both courgettes and squash,
          particularly if all of your children are going to plant both. You
          might consider half of your children planting squash and half planting
          courgettes, since they are planted in the same way.
        </Paragraph>
        <Paragraph>
          There are lots of varieties of squash available and you can have a go
          at both summer and winter squash of all different types, if any
          particular seed packet excites you.
        </Paragraph>
        <Paragraph>
          You just need to pay attention to the details on the timing of
          planting that you will find on the seed packet and look out for the
          words “bush” or “compact.”
        </Paragraph>
        <Paragraph>
          We are going to look at butternut squash here. Butternut squash are a
          winter squash and “Butterbush” is a great variety for growing in
          containers as will take up less space than some varieties that need
          much more room to spread out.
        </Paragraph>
        <Paragraph className="mb4">
          If you are lucky enough to have a compost bin at school you can even
          plant a squash in the top of it!{" "}
        </Paragraph>
        <NotepadWrapper flexItemOneSize="80%">
          <StaticImage
            alt=""
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/squash-assets/squash-snippers.png"
          />
          <StaticImage
            alt=""
            objectFit="contain"
            src="../../../images/portal/get-growing-guide/squash-assets/squash-np.png"
          />
        </NotepadWrapper>
        <Subheading className="coffeeTea mb3">When?</Subheading>
        <Paragraph className="fw6">
          April/ early May - Sow seeds indoors.
        </Paragraph>
        <Paragraph className="fw6">LateMay/ June - Plant out.</Paragraph>
        <Paragraph className="fw6 mb4">July-October - Harvest.</Paragraph>
        <Subheading className="coffeeTea mb3">What to do?</Subheading>
        <List>
          {plantingInstructions.map((list, index) => (
            <li>{list}</li>
          ))}
        </List>
        <div className="mv4"></div>
      </FullWidthPanel>
      <VegTitle
        colour="bg-gold white"
        title={"enhanced continuous provision"}
      />
      <FullWidthPanel colours="bg-gold " maxWidth="56rem">
        <VegetableTable
          name="butternut squash"
          singular="butternut squash"
          facts={facts}
          recipeInstructions={recipeInstructions}
          ingredients={ingredients}
          moreInfo={
            <p>
              Check out our Transitions session in the Celebrations theme, where
              you will meet Doop the Butternut Squash.
            </p>
          }
          vegetableImage={
            <StaticImage
              style={{
                width: "200px",
                height: "160px",
                bottom: "0rem",
                left: "3rem",
                transform: "rotate(2deg)",
              }}
              imgStyle={{}}
              className="vegetableImage"
              src="../../../images/vegetables/Doop.png"
              alt="image"
            />
          }
          spacerHeight={"16rem"}
        />
      </FullWidthPanel>
    </section>
  )
}

export default SquashGrowingGuide
