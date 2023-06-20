import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List, NotepadWrapper } from "./styles"
import VegetableTable from "../../../components/portal/continuousProvisionTable"
import { StaticImage } from "gatsby-plugin-image"

const PotatoeGrowingGuide = () => {
  return (
    <section className="relative" id="potatoes">
      <VegTitle
        title={"potatoes"}
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
            src="../../../images/portal/get-growing-guide/Potatoes.png"
          />
        }
      />
      <FullWidthPanel colours="bg-gold white" maxWidth="58rem">
        <Subheading className="coffeeTea mv2">Planting Potatoes</Subheading>
        <Paragraph className="mb4">
          Potatoes are one of the easiest and most satisfying things to grow
          with children. You can easily see the growth.
        </Paragraph>
        <NotepadWrapper>
          <StaticImage
            alt=""
            objectFit="contain"
            style={{ transform: "rotate(-25deg)" }}
            src="../../../images/portal/get-growing-guide/potato-assets/potato-garden-rake.png"
          />
          <StaticImage
            alt=""
            objectFit="contain"
            style={{ padding: "0.25rem" }}
            src="../../../images/portal/get-growing-guide/potato-assets/potato-np.png"
          />
        </NotepadWrapper>
        <Subheading className="coffeeTea mb3">When?</Subheading>
        <Paragraph className="mb4">
          Plant in March/ April. Remember; it’s going to take 10 weeks or so for
          your potatoes to grow enough to be ready for the ‘Potatoes & Peppers’
          session. This may be longer if it is colder or not so sunny. You
          should try to keep your potatoes in a frost free place if you’re
          planting very early in the year. A sheltered spot in your space will
          be perfect, you do not need to bring them inside as it will be too
          warm.
        </Paragraph>
        <Subheading className="coffeeTea mb3">What to do?</Subheading>
        <Paragraph className="mb4">
          Four weeks before you want to plant (probably in February), place the
          potatoes in the egg box, as if they are eggs. Leave the lid off the
          egg box and place it in a cool but light place. This will encourage
          the potatoes to start to sprout, just like when you have left potatoes
          in your cupboard for too long. When your cooking potatoes sprout in
          the cupboard the shoots are white and weak, they are searching for
          light. Your seed potatoes will sprout short dark shoots that are
          strong. This will help your plants to be strong too. You only want
          three shoots, so rub off any extra ones with your thumb just before
          planting. This process is called chitting.
        </Paragraph>
        <Subheading className="coffeeTea mb3">Planting...</Subheading>
        <List>
          <li>
            Fill your bag or pot with 10cm compost and put three-five potatoes
            on top of the compost.
          </li>
          <li>Cover them with another 10cm compost and give them a water.</li>
          <li>
            When the potatoes have got shoots that are as long as your index
            finger growing out of the compost, you should cover them again with
            more compost.
          </li>
          <li>
            Repeat this every time the shoots grow as long as your finger, until
            the bag is full.
          </li>
          <li>
            Make sure that you water your potatoes regularly over the next 10
            weeks, remember that potatoes are mainly water.
          </li>
          <li>
            If you have grown ‘first or second earlies’ you should wait until
            they have got flowers to deliver the{" "}
            <span className="fw6">“Peppers and Potatoes” </span>session. If you
            have grown ‘maincrop’ potatoes, you should wait until the flowers
            have died back.
          </li>
        </List>
      </FullWidthPanel>
      <VegTitle
        colour="bg-gold white"
        title={"enhanced continuous provision"}
      />
      <FullWidthPanel colours="bg-gold " maxWidth="56rem">
        <VegetableTable
          name="potatoes"
          singular="potato"
          facts={[
            "Potatoes are vegetables. They grow underground.",
            "Lots of potatoes are grown in the UK as the climate is well suited to growing. Potatoes like it to be not too warm and regular rainfall. There is a good chance that your potatoes have come from Norfolk or Suffolk.",
            "Potatoes are really good at filling your tummy if you are hungry because they are full of starchy carbohydrate.",
            "There are lots of ways to cook potatoes – mashed, boiled, fried, chipped, baked etc. What is your favorite?",
            "Sometimes potatoes are covered in soil when you buy them, that is because they are grown under the ground.",
          ]}
          recipeInstructions={[
            "Minty New Potatoes!",
            "Take each potato and chop it in half. Some children may be able to do this carefully with a table knife.",
            "Put the potatoes into the pan and cover with cold water.",
            "Bring to the boil for 15 mins or until cooked.",
            "Whilst the potatoes are boiling, children can tear the mint leaves from the stalks and then tear each leaf into smaller pieces.",
            "Drain the potatoes.",
            "Allow the butter to melt onto the potatoes and then add the mint.",
            "Stir, then serve and enjoy!",
          ]}
          ingredients={[
            "A bag of new potatoes.",
            "A bunch of mint.",
            "50g butter.",
            "A pan.",
            "Water.",
          ]}
          moreInfo={
            <p>
              Check out our <span className="fw6">Special People </span>session
              in the<span className="fw6"> Getting To Know Each Other </span>
              theme, where you will meet Dug the Potato. Additonally, you can
              get to know Tibbs the Big Potato in our Diwali session, in our
              Celebrations theme.
            </p>
          }
          spacerHeight={"12rem"}
          dug={
            <StaticImage
              style={{
                width: "80px",
                height: "120px",
                bottom: "-2rem",
                left: "1rem",
              }}
              imgStyle={{ transform: "rotate(-5deg)" }}
              className="vegetableImage"
              src="../../../images/vegetables/Potato.png"
              alt="image"
            />
          }
          vegetableImage={
            <StaticImage
              style={{
                width: "240px",
                height: "200px",
                bottom: "-3rem",
                right: "3rem",
              }}
              imgStyle={{ transform: "rotate(5deg)" }}
              className="vegetableImage"
              src="../../../images/vegetables/Tibz.png"
              alt="image"
            />
          }
        />
      </FullWidthPanel>
    </section>
  )
}

export default PotatoeGrowingGuide
