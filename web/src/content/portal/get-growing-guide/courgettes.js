import * as React from "react"
import FullWidthPanel from "../../../components/fullWidthPanel"
import VegTitle from "../../../components/portal/vegTitle"
import { Subheading, Paragraph, List } from "./styles"
import VegetableTable from "../../../components/portal/continuousProvisionTable"
import { NotepadWrapper } from "./styles"
import { StaticImage } from "gatsby-plugin-image"

const CourgettesGrowingGuide = () => {
  return (
    <section className="relative" id="courgette">
      <VegTitle
        title={"courgettes"}
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
            src="../../../images/portal/get-growing-guide/Courgette.png"
          />
        }
      />
      <FullWidthPanel colours="bg-gold white" maxWidth="56rem">
        <Subheading className="coffeeTea mv3">Planting Courgettes</Subheading>
        <Paragraph className="fw6">
          Courgette plants are easy to grow from seed and the seeds are big
          enough for little fingers to handle easily.
        </Paragraph>
        <Paragraph>
          Much like squash, courgettes have big seeds that are easy for children
          to plant, but you might not have space for both courgettes and squash,
          particularly if all of your children are going to plant both. You
          might consider half of your children planting squash and half planting
          courgettes, since they are planted in the same way. You are likely to
          have lots of fruit from these plants, which gives more children an
          opportunity to help with the harvest.
        </Paragraph>
        <Paragraph className="mb3">
          You are likely to have lots of fruit from these plants, which gives
          more children an opportunity to help with the harvest.
        </Paragraph>
        <NotepadWrapper>
          <StaticImage
            alt=""
            objectFit="contain"
            style={{ transform: "rotate(10deg) scale(1.5)" }}
            src="../../../images/portal/get-growing-guide/courgette-assets/courgette-wa.png"
          />
          <StaticImage
            alt=""
            objectFit="contain"
            style={{ padding: "0.25rem" }}
            src="../../../images/portal/get-growing-guide/courgette-assets/np-both.png"
          />
        </NotepadWrapper>
        <Subheading className="coffeeTea mb3">When?</Subheading>
        <Paragraph className="fw6">April/ May – Sow seed indoors.</Paragraph>
        <Paragraph className="fw6">Late May – Sow seed outdoors</Paragraph>
        <Paragraph className="fw6">
          May/ June – Plant out your seedlings.
        </Paragraph>
        <Paragraph className="fw6 mb3">
          July to October - Harvest (you are likely to return in Sept to some
          very large courgettes!)
        </Paragraph>
        <Subheading className="coffeeTea mb3">What to do?</Subheading>
        <Paragraph className="fw6 mv3">
          If planting from seed in April/ early May...
        </Paragraph>
        <List>
          <li>
            Ensure that you have enough yoghurt pot sized containers for your
            seeds.
          </li>
          <li>Make sure that you have drainage holes in your pots.</li>
          <li>Fill your pots to 1cm from the top with compost.</li>
          <li>
            Make a 1cm hole with a pencil in the centre of the pot, in the
            compost.
          </li>
          <li>Place the see on its side in the hole.</li>
          <li>
            Cover over the seed with a little compost then water very gently.
          </li>
          <li>
            Place on a windowsill indoors, or in another warm light place.
          </li>
        </List>
        <Paragraph className="fw6 mv3">If it's late May...</Paragraph>
        <List>
          <li>
            You can put your pots straight outside, , but be careful that they
            can’t be knocked over by the wind.
          </li>
          <li>Within a week or so you will start to see some green leaves.</li>
          <li>
            The plant will grow two leaves at first. Then it will grow a third
            leaf that will look different to the first two. These new leaves are
            called the “true leaves” and all of the plant’s new leaves will look
            like this.
          </li>
          <li>
            When the plant has three leaves it will probably look a bit too big
            for its pot. You should now “pot on”. “Potting on” just means that
            you are moving your plant into a bigger pot, to give it more room to
            grow.
          </li>
          <li>
            In this case, we are going to “pot on” straight into our final
            location.
          </li>
          <li>
            Cover over the seed with a little compost then water very gently.
          </li>
          <li>
            Place on a windowsill indoors, or in another warm light place.
          </li>
        </List>
        <Subheading className="coffeeTea mt4 mb3">Planting out...</Subheading>
        <List>
          <li>Your seedlings are now ready to plant out.</li>
          <li>
            Get your large containers ready. They should be at least as big as a
            “bag for life.” Remember that you might need to put drainage holes
            in a solid plastic container like a bin.
          </li>
          <li>
            Decide where you would like your courgettes to grow. You will need
            as much sun you can, so have a look at your site throughout the day,
            where seems to have the most sun light? You are going to plant out
            your courgettes in this location, so that you don’t have to move the
            containers when they are full.
          </li>
          <li>Fill the container to around 5cm from the top with compost.</li>
          <li>
            Gently hold your hand around the seedling to stop it falling to the
            floor and turn its pot upside down, giving the pot a little squeeze
            if the plant needs a little encouragement to come out of the pot.
          </li>
          <li>You should be able to see the roots of your plant.</li>
          <li>
            Now make a hole in the compost in the centre of your large
            container. The hole should be just big enough to pop your seedling
            into.
          </li>
          <li>
            Put your seedling into the hole and push the compost around its base
            a little, to make sure that there are no big air pockets around the
            plant
          </li>
          <li>Now give the plant a gentle but generous watering </li>
          <li>
            Continue to water your courgette plants regularly; if possible using
            a tomato feed weekly.(Follow the directions on the bottle of the
            particular feed that you buy){" "}
          </li>
          <li>
            Expect to start harvesting courgettes 8 to 10 weeks, from sowing
            seeds.
          </li>
          <li>
            You should harvest the courgettes by cutting them off with a sharp
            knife when they are still small. (You can involve children by
            getting them to point out the ones that are ready for picking and
            then you use the knife to safely remove the fruit).{" "}
          </li>
          <li>
            You will find that some courgettes will grow much bigger over
            weekends and holidays. It is still fine to pick and eat these
            courgettes, children will also find this very exciting!
          </li>
        </List>
        <StaticImage
          style={{ float: "right", width: "550px" }}
          src="../../../images/portal/get-growing-guide/courgette-assets/watering-can-gloves.png"
          alt=""
        />
      </FullWidthPanel>
      <VegTitle
        colour="bg-gold white"
        title={"enhanced continuous provision"}
      />
      <FullWidthPanel colours="bg-gold " maxWidth="56rem">
        <VegetableTable
          name="courgettes"
          singular="courgette"
          facts={[
            "Although we call courgettes a vegetable, they’re technically a fruit because they contain seeds.",
            "Courgettes grow above ground.",
            "Courgettes are tasty when you eat them raw or cooked. They are full of potassium, a special mineral that helps your muscles move!",
            "Courgettes can be green or yellow.",
            "UK courgettes are often imported from countries like Spain and Morocco because courgettes like warmer temperatures.",
          ]}
          recipeInstructions={[
            "Courgette & Carrot Muffins!",
            "Preheat the Oven to 200C.",
            "Put the muffin cases into the trays.",
            "Grate the courgette and carrot.",
            "Lay it out onto the kitchen roll and press some more Put the cheese, courgette and carrot and flour into the kitchen roll on top to soak up as much of the moisture as possible from the courgette and carrot.",
            "Drain the courgettes.",
            "Crack the egg into the jug and mix it with the fork. Add the milk and oil to the egg and mix again.",
            "Pour the egg, oil and milk mixture into the bowl and mix.",
            "Now spoon the muffin mixture into the cases and bake for 25 mins.",
            "Let cool, then enjoy!",
          ]}
          ingredients={[
            "1 carrot",
            "1 courgette",
            "2 eggs",
            "120ml vegetable oil",
            "300ml of milk",
            "Water",
            "250g grated cheese",
            "350g self-raising flour",
            "2 x Muffin trays",
            "Muffin cases",
            "Kitchen roll",
            "Bowl",
            "Measuring jug",
            "Fork",
          ]}
          moreInfo={
            <p>
              Check out our <span className="fw6">All About Me</span> session in
              the <span className="fw6">Getting To Know Each Other</span> theme,
              where you will meet Oz the Courgette.
            </p>
          }
          spacerHeight={"12rem"}
          vegetableImage={
            <StaticImage
              style={{
                width: "200px",
                height: "260px",
                bottom: "-1.5rem",
                right: "-1rem",
                transform: "rotate(5deg)",
              }}
              imgStyle={{}}
              className="vegetableImage"
              src="../../../images/vegetables/Courgette.png"
              alt=""
            />
          }
        />
      </FullWidthPanel>
    </section>
  )
}

export default CourgettesGrowingGuide
