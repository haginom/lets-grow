import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List } from "./styles"
import VegetableTable from "../../../components/portal/continuousProvisionTable"
import { NotepadWrapperSwap } from "./styles"
import { StaticImage } from "gatsby-plugin-image"

const plantingOutText = [
  "Fill your container to 5cm from the top with compost.",
  "Make a hole in the centre of the compost that is just big enough for your plant.",
  "Gently hold your hand around the plant to stop it falling to the floor and turn its pot upside down, giving the pot a little squeeze, if the plant needs a little encouragement to come out of the pot.",
  "Look carefully at your plant. You should be able to see the roots. If you look at the base of the stem you will see some very small leaves part way up, these were the very first leaves of the plant. You are going to plant your seedling deep enough in the hole that these leaves are now covered. This will give your tomato plant more support in the pot to stop it from falling over when it is full of fruit.",
  "Press the compost gently around the plant base, this will make sure that there are no air pockets around the plant.",
  "If it is still cold at night, it is a good idea to bring the plant inside overnight, particularly if it is frosty as the frost will damage your plant.",
  "After the frosts are gone, it is safe to leave your plant outside, and it will be happiest in the sunniest spot that you have.",
  "Remember to water your plant regularly. When it is very hot you might need to water once a day at the base of the tomato.",
  "Once the fruit start to form, feed your tomato once a week following the instructions on your tomato feed bottle. Keep the tomato feed well away from children.",
  "You will be able to see the yellow flowers form first, this is where the tomatoes will grow.",
  "The tomatoes will be very small to begin with, and then grow into bigger green fruits.",
  "You can expect to start harvesting tomatoes 12 to 15 weeks from planting.",
  "Unlike the courgettes, the tomatoes would benefit from a little care over the summer holidays. If your plant is small enough, you could take it with you over the holidays for watering & ongoing harvesting.",
]

const tomatoFacts = [
  "Tomatoes are fruit. They grow above ground.",
  "Some tomatoes are grown in the UK but because tomatoes like warm conditions, they are usually grown in a big glasshouse. Most tomatoes eaten in the UK are imported from Spain and North Africa.",
  "Tomatoes are full of lycopene this means that they are really helpful to your heart.",
]

const TomatoGrowingGuide = () => {
  return (
    <section className="relative" id="tomato">
      <VegTitle
        title={"tomatoes"}
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
            src="../../../images/portal/get-growing-guide/Tomatoes.png"
          />
        }
      />

      <FullWidthPanel colours="bg-gold white" maxWidth="56rem">
        <Subheading className="coffeeTea mv3">Planting Tomatos</Subheading>
        <Paragraph className="mb4 fw6">
          It is not difficult to grow tomatoes from seed, however you may find
          that just one or two plants bought from your garden centre in
          April/early May is the best way to grow tomatoes. This will mean that
          you can choose a couple of different varieties without ending up with
          hundreds of plants. You should look out for those tomatoes labelled
          “Dwarf”, “Patio” or “Bush” variety.
        </Paragraph>
        <NotepadWrapperSwap>
          <StaticImage
            alt=""
            objectFit="contain"
            style={{ transform: "scaleX(-1)" }}
            src="../../../images/portal/get-growing-guide/tomato-assets/tomato-wa.png"
          />
          <StaticImage
            alt=""
            objectFit="contain"
            style={{ padding: "0.25rem" }}
            src="../../../images/portal/get-growing-guide/tomato-assets/np-both.png"
          />
        </NotepadWrapperSwap>
        <Subheading className="coffeeTea mv3">When?</Subheading>
        <Paragraph className="fw6">April/ May – Plant</Paragraph>
        <Paragraph className="fw6">
          July to Sept – Harvest (your children will be able to see the tiny
          green tomatoes forming, even if they are not ripe before the
          holidays).
        </Paragraph>
        <Subheading className="coffeeTea mt4 mb3">What to do?</Subheading>
        <List>
          {plantingOutText.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </List>
      </FullWidthPanel>
      <VegTitle
        colour="bg-gold white"
        title={"enhanced continuous provision"}
      />
      <FullWidthPanel colours="bg-gold " maxWidth="56rem">
        <VegetableTable
          name="tomatoes"
          singular="tomato"
          facts={tomatoFacts}
          recipeInstructions={[
            "A quick tomato recipe... Tomato and Feta Salad!",
            "Examine the fruits and herbs before they are chopped up.",
            "Chop the tomatoes in half, examining the seeds, and slice the cucumber again, examining its inside.",
            "Prepare the feta, slicing it into chunks.",
            "Tear the mint into little pieces.",
            "Mix everything together and add the olive oil.",
            "Mix again, then serve and enjoy!",
          ]}
          ingredients={[
            "A large packet of cherry tomatoes.",
            "1 cucumber.",
            "1 bunch of mint.",
            "1 tbsp olive oil.",
            "200g Feta.",
          ]}
          moreInfo={
            <p>
              Check out our ‘Looking after me’ session in the ‘Getting To Know
              Each Other’ theme, where you will meet the Teeny Toms.
            </p>
          }
          vegetableImage={
            <StaticImage
              style={{
                width: "200px",
                height: "160px",
                bottom: "-3rem",
                right: "3rem",
              }}
              imgStyle={{}}
              className="vegetableImage"
              src="../../../images/vegetables/teeny-toms.png"
              alt="image"
            />
          }
          spacerHeight={"12rem"}
        />
      </FullWidthPanel>
    </section>
  )
}

export default TomatoGrowingGuide
