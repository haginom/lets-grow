import React from "react"
import FullWidthPanelTwo from "../../components/fullWidthPanel"
import styled from "styled-components"
import { IconLink } from "../../components/iconButton"
import HandyHintsPanel from "../../components/portal/handyHintsPanel"
import {
  HHGrid,
  HHGridItem,
  HHGridItemTwo,
} from "../../components/portal/hhGrid"
import { GatsbyImage } from "gatsby-plugin-image"

export const HHOne = () => (
  <FullWidthPanelTwo colours="bg-gold white" maxWidth="56rem">
    <Paragraph className="fw6">
      Our Handy Hints help you prepare for and deliver brilliant Let’s Grow
      sessions, helping you to create the best learning experience from the
      visiting fruit or vegetable babies.
    </Paragraph>
    <Paragraph className="mb5">
      Each session plan tells you everything you need to know, but the Handy
      Hints sections supplement this with more in-depth practical information on
      what makes the sessions work best and offers insights into the creative
      practice that underpins Let’s Grow.
    </Paragraph>
  </FullWidthPanelTwo>
)

export const HHTwo = ({ data }) => (
  <FullWidthPanelTwo colours="bg-gold white" maxWidth="56rem">
    <Subheading className="coffeeTea">Pratical Preparation</Subheading>
    <IconDiv className="mh3-m">
      <IconLink
        navigation="#resources_accessories"
        icon={data.icon.childImageSharp.gatsbyImageData}
        text={"Resources and Accessories"}
      />
      <IconLink
        navigation="#shopping"
        icon={data.iconOne.childImageSharp.gatsbyImageData}
        text={"Shopping for the Right Vegetable"}
      />
      <IconLink
        navigation="#characters"
        icon={data.iconOne.childImageSharp.gatsbyImageData}
        text={"Turning fruits and vegetables into characters"}
      />
    </IconDiv>
  </FullWidthPanelTwo>
)

export const HHThree = ({ data }) => (
  <FullWidthPanelTwo colours="bg-gold white" maxWidth="56rem">
    <Subheading className="coffeeTea">
      Making the most of the fruit & vegetable babies
    </Subheading>
    <IconDiv className="mh3-m">
      <IconLink
        navigation="#interaction"
        icon={data.iconOne.childImageSharp.gatsbyImageData}
        text={"REVEALING & INTERACTING WITH THE BABY"}
      />
      <IconLink
        navigation="#creative_teaching"
        icon={data.iconOne.childImageSharp.gatsbyImageData}
        text={"CREATIVE TEACHING WITH THE BABIES"}
      />
      <IconLink
        navigation="#rules"
        icon={data.iconOne.childImageSharp.gatsbyImageData}
        text={"RULES FOR PLAY"}
      />
      <IconLink
        navigation="#faqs"
        icon={data.iconOne.childImageSharp.gatsbyImageData}
        text={"FAQ’S"}
      />
    </IconDiv>
  </FullWidthPanelTwo>
)

export const HHFour = ({ data }) => (
  <FullWidthPanelTwo colours="bg-gold white" maxWidth="56rem">
    <Subheading className="coffeeTea">Health & Safety</Subheading>
    <IconDiv className="mh3-m">
      <IconLink
        navigation="#health_and_safety"
        icon={data.iconTwo.childImageSharp.gatsbyImageData}
        text={"Health & safety in preparation and playing"}
      />
    </IconDiv>
    <GatsbyImage
      style={{ margin: "-2rem", marginTop: "1rem" }}
      alt="group baby shot"
      image={data.decorative.childImageSharp.gatsbyImageData}
    />
  </FullWidthPanelTwo>
)

export const HHFive = ({ data }) => (
  <HandyHintsPanel
    left={"46rem"}
    bottom={"0rem"}
    image={data.decorativeOne.childImageSharp.gatsbyImageData}
    banner={data.banner.childImageSharp.gatsbyImageData}
    intro={
      <>
        <Paragraph>
          To make the fruit & vegetable baby characters you will need the
          following resources.
        </Paragraph>
        <Paragraph>
          We encourage you to be creative, to recycle and reuse items that you
          may already have, using our list as a suggested guide and keeping
          safety as the priority.
        </Paragraph>
        <Paragraph>
          Note that for each class of children simultaneuosly using Let’s Grow,
          teachers will require their own fruit & vegetable characters with the
          associated resources and accessories.
        </Paragraph>
      </>
    }
  >
    <Paragraph ml={"2.5rem"} fw="600" mb={"0.5rem"} mt={"-1rem"}>
      Craft Items
    </Paragraph>
    <HHGrid>
      <HHGridItem
        transform={"scale(1.7) translate(0px, -10px)"}
        image={data.craftOne.childImageSharp.gatsbyImageData}
        text={"10mm googly\neyes x 100"}
      />
      <HHGridItem
        transform={"scale(1.7) translate(0px, -10px)"}
        image={data.craftTwo.childImageSharp.gatsbyImageData}
        text={"15mm googly\neyes x 50"}
      />
      <HHGridItem
        transform={"scale(1.5) translate(0px, -10px)"}
        image={data.craftThree.childImageSharp.gatsbyImageData}
        text={"18mm googly\neyes x 50"}
      />
      <HHGridItem
        image={data.craftFour.childImageSharp.gatsbyImageData}
        text={"Hot glue gun\n(mini or regular)"}
      />
      <HHGridItem
        image={data.craftFive.childImageSharp.gatsbyImageData}
        text={"Glue sticks"}
        transform={"scale(1.2) translate(0px, 10px)"}
      />
      <HHGridItem
        image={data.craftSix.childImageSharp.gatsbyImageData}
        text={"Children’s scissors"}
        transform={"scale(1.2)"}
      />
    </HHGrid>
    <Paragraph ml={"2.5rem"} fw="600" mb={"0.5rem"} mt={"1rem"}>
      Baby Items
    </Paragraph>
    <HHGrid>
      <HHGridItem
        transform={"scale(1.3) translate(0px,0px)"}
        image={data.babyOne.childImageSharp.gatsbyImageData}
        text={"3 x white muslin\nsquares"}
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.babyTwo.childImageSharp.gatsbyImageData}
        text={"A pair of white frilly\nnewborn size baby socks"}
      />
      <HHGridItem
        transform={"scale(1.2) translate(0px, 0px)"}
        image={data.babyThree.childImageSharp.gatsbyImageData}
        text={"2 x white newborn\nsize baby socks"}
      />
      <HHGridItem
        transform={"scale(1.2) translate(0px, -10px)"}
        image={data.babyFour.childImageSharp.gatsbyImageData}
        text={"3 x safety nappy pins"}
      />
      <HHGridItem
        image={data.babyFive.childImageSharp.gatsbyImageData}
        text={"2 x dummies"}
        transform={"scale(1.2) translate(0px, 10px)"}
      />
      <HHGridItem
        image={data.babySix.childImageSharp.gatsbyImageData}
        text={"2 x baby bottles"}
        transform={"scale(1.2)"}
      />
      <HHGridItem
        className="mb3"
        image={data.babySeven.childImageSharp.gatsbyImageData}
        text={"A few plasters"}
        transform={"scale(1.2)"}
      />
    </HHGrid>
  </HandyHintsPanel>
)

export const HHSix = ({ data }) => (
  <HandyHintsPanel
    left={"45rem"}
    bottom={"0rem"}
    image={data.decorativeTwo.childImageSharp.gatsbyImageData}
    banner={data.banner.childImageSharp.gatsbyImageData}
    intro={
      <>
        <Paragraph>
          Add accessories to enhance the experience of the fruit & vegetable
          babies coming to visit. From cute costumes to comfy cribs, the
          possibilities are endless. Have fun and make it your own! Here are
          some suggestions for starters...
        </Paragraph>
      </>
    }
  >
    <HHGrid>
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesOne.childImageSharp.gatsbyImageData}
        text={
          "A hamper with a\nclosable lid is a great\nway for the baby to\narrive in at the start of\neach session"
        }
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesTwo.childImageSharp.gatsbyImageData}
        text={
          "An artificial grass\ncircle can be used as\na playmat and is ideal\nfor focusing play with\nthe baby in a particu-\nlar area"
        }
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesFour.childImageSharp.gatsbyImageData}
        text={
          "A blanket can be used\nas a playmat and ise\nideal for focusing play \nwith the baby in\na particular area"
        }
      />
      <HHGridItem
        transform={"scale(1.1) translate(2px, 0px)"}
        image={data.babySix.childImageSharp.gatsbyImageData}
        text={
          "Baby bottles can be \nfilled with water. To \navoid water leaking \nout during play, seal \nthe inside of the teet \nwith a blob of glue \nfrom the glue gun."
        }
      />
    </HHGrid>
    <HHGrid>
      <HHGridItemTwo
        mt={"-30px"}
        maxHeight={"180px"}
        transform={"scale(1.1) translate(0px, 10px)"}
        image={data.accessoriesFive.childImageSharp.gatsbyImageData}
        text={"Oz likes wearing hats"}
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesSix.childImageSharp.gatsbyImageData}
        text={"Knitted wooly hat"}
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesSeven.childImageSharp.gatsbyImageData}
        text={"Knitted wooly hat"}
      />
    </HHGrid>
    <HHGrid>
      <HHGridItemTwo
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesEight.childImageSharp.gatsbyImageData}
        text={"Peep loves being wrapped up in a blanket"}
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesNine.childImageSharp.gatsbyImageData}
        text={"Soft comfort blanket"}
      />
    </HHGrid>
    <HHGrid>
      <HHGridItemTwo
        maxHeight={"150px"}
        transform={"scale(1) translate(0px, 10px)"}
        image={data.accessoriesTen.childImageSharp.gatsbyImageData}
        text={"Dug loves playing in vehicles that can fly"}
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesEleven.childImageSharp.gatsbyImageData}
        text={"Playmobile plane"}
      />
    </HHGrid>
  </HandyHintsPanel>
)

export const HHSeven = ({ data }) => (
  <HandyHintsPanel
    banner={data.banner.childImageSharp.gatsbyImageData}
    left={"48rem"}
    bottom={"0rem"}
    image={data.decorativeThree.childImageSharp.gatsbyImageData}
    intro={
      <>
        <Paragraph>
          Add accessories to enhance the experience of the fruit & vegetable
          babies coming to visit. From cute costumes to comfy cribs, the
          possibilities are endless. Have fun and make it your own! Here are
          some suggestions for starters...
        </Paragraph>
      </>
    }
  >
    <HHGrid>
      <HHGridItemTwo
        mt={"-30px"}
        maxHeight={"180px"}
        image={data.accessoriesTwelve.childImageSharp.gatsbyImageData}
        text={
          "Hoola loves wearing\ndifferent clips, bows,\nribbons and hairbands"
        }
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesThirteen.childImageSharp.gatsbyImageData}
        text={"Hair clips"}
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesFourteen.childImageSharp.gatsbyImageData}
        text={"Soft baby hair brush"}
      />
    </HHGrid>
    <HHGrid>
      <HHGridItemTwo
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesFifteen.childImageSharp.gatsbyImageData}
        text={"Babs loves to wear a\nsporty sweatband and\nto roll around"}
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesSixteen.childImageSharp.gatsbyImageData}
        text={"Sweatband"}
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesSeventeen.childImageSharp.gatsbyImageData}
        text={"Chunky pavement\nchalks"}
      />
    </HHGrid>
    <HHGrid>
      <HHGridItemTwo
        maxHeight={"150px"}
        transform={"scale(1) translate(0px, 10px)"}
        image={data.accessoriesEighteen.childImageSharp.gatsbyImageData}
        text={"Send the Teeny Toms\noff to sleep with a\ncalming lullaby"}
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesNineteen.childImageSharp.gatsbyImageData}
        text={""}
      />
    </HHGrid>
    <HHGrid>
      <HHGridItemTwo
        maxHeight={"150px"}
        transform={"scale(1) translate(0px, 10px)"}
        image={data.accessoriesTwenty.childImageSharp.gatsbyImageData}
        text={"Dilly & Dally love to\ndress up in different\noutfits!"}
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesTwentyOne.childImageSharp.gatsbyImageData}
        text={
          "Coloured frilly newborn\nsize socks make great\nTutus - simply cut the\nfoot part off the sock"
        }
      />
      <HHGridItem
        transform={"scale(1) translate(0px, 0px)"}
        image={data.accessoriesTwentyTwo.childImageSharp.gatsbyImageData}
        text={
          "Design your own\nfashionable band -\nthese ones are made\nout of strips of sequins"
        }
      />
    </HHGrid>
  </HandyHintsPanel>
)

export const HHEight = ({ data }) => (
  <HandyHintsPanel
    banner={data.banner.childImageSharp.gatsbyImageData}
    left={"42rem"}
    bottom={"0rem"}
    image={data.decorativeFour.childImageSharp.gatsbyImageData}
  >
    <List>
      <li>
        We recommend going to a large market or supermarket where you’ll find
        good quantities to choose from.
      </li>
      <li>
        It will be a little bit like ‘auditioning’ fruits or vegetables for the
        character you’re going to make. Yes, you may look and feel a little
        weird at first, but you’ll soon find it’s great fun using your
        imagination as you rummage through different shapes and sizes in the
        search for the perfect ‘whoever-it-is!’
      </li>
      <li>
        Take an image of the particular Let’s Grow baby character with you, so
        you can hunt for the best look alike.
      </li>
      <li>
        If it doesn’t look or feel quite right, then it probably isn’t. You may
        need to pop to a different shop to find the correct fruit or vegetable
        that you’re looking for. Remember though, it will always be worth it.
      </li>
      <li>
        Make sure you leave enough time to be able to hunt around in different
        shops if you have to.
      </li>
      <li>
        Looks DO matter. Don’t buy old, wilted or over-ripe fruits or vegetables
        – the priority is that they look their very best and that they’ll last
        the course.
      </li>
      <li>
        Always buy some surplus fruits or vegetables as spares or replacements,
        in case of accidents!
      </li>
    </List>
  </HandyHintsPanel>
)

export const HHNine = ({ data }) => (
  <HandyHintsPanel
    image={data.decorativeFive.childImageSharp.gatsbyImageData}
    left={"52rem"}
    bottom={"-5rem"}
    banner={data.banner.childImageSharp.gatsbyImageData}
  >
    <Paragraph>
      We recommend going to a large market or supermarket where you’ll find good
      quantities to choose from.
    </Paragraph>
    <Paragraph>
      Each session plan starts with a character preparation section with
      step-by-step instructions for making the visiting fruit or vegetable baby.
      In additon to this guidance, please note...
    </Paragraph>
    <Paragraph>
      We recommend being prepared by making each baby the night before the
      session. Then keep the character fresh in the fridge overnight.
    </Paragraph>
    <Paragraph>
      Avoid leaving the babies out in the sun or hot atmosphere as they will
      start to perish. Be prepared to make up a new baby if this happens. They
      should always look their best, not droopy or wilting.
    </Paragraph>
    <Paragraph>
      Maintain the continuity of the size and shape of the baby from session to
      session as they are replaced. Also make sure this adheres as best as
      possible to how the babies appear in the films.
    </Paragraph>
    <Paragraph mb={"0rem"} fw={"600"}>
      Nappies{" "}
    </Paragraph>
    <Paragraph>
      When making the characters, always start by putting the nappy on first. It
      will be easier to judge where to place the dummy and the eyes once the
      nappy is in place.{" "}
    </Paragraph>
    <Paragraph>
      Rest assured, that while at first, applying the nappy might seem
      difficult, you will quickly find a technique that works and be a dab-hand
      in no time.{" "}
    </Paragraph>
    <Paragraph>
      When wrapping the muslin nappy around the fruit or vegetable, you must
      make sure it’s tightly wound. Practice makes perfect. You may find it
      easier to rest the baby in your lap, gently held between your legs, when
      putting the nappy on. Some people find that doing it on a table or work
      top can make the job harder.{" "}
    </Paragraph>
    <Paragraph mb={"0rem"} fw={"600"}>
      Googly eyes{" "}
    </Paragraph>
    <Paragraph>
      Use a heated glue gun to attach the baby’s eyes. The priority is for the
      eyes to stay on the baby when children are playing with them and hot glue
      does the very best job at achieving this, so the extra time it takes to
      use is definitely worth it.{" "}
    </Paragraph>
    <Paragraph>
      Put a piece of cardboard down to protect the surface you’re working on
      from any hot glue spillages. It can be a messy job so use the cardboard to
      contain the mess.{" "}
    </Paragraph>
    <Paragraph>
      When sticking the eyes on, it works well to put the glue on the eyes and
      then press them onto the skin of the fruit or vegetable.{" "}
    </Paragraph>
    <Paragraph>
      Always put the eyes close together to make them look like they do in the
      films. Also, this makes the babies look cute.{" "}
    </Paragraph>
    <Paragraph>
      Sometimes the black bit of the googly eye, the pupil, gets stuck in the
      wrong position, which makes it look as if the eye is looking in the wrong
      direction. Try flicking the surface and this should dislodge it from a
      wonky position. If this doesn’t work, just peel it off and use a different
      eye.{" "}
    </Paragraph>
    <Paragraph mb={"0rem"} fw={"600"}>
      Mouths{" "}
    </Paragraph>
    <Paragraph>
      When carving the mouth START SMALL. Once it’s gone, you can’t put it back!
      As you increase the size of the hole, have the dummy to hand. Keep
      checking if it will fit and most importantly, stay in place.
    </Paragraph>
    <Paragraph mb="0rem">
      You’ll notice some babies have a mouth, while others do not. This is
      largely dictated by the fact that some fruits and vegetables are better
      built to hold a dummy and feeding bottle than others. For example, you can
      core a hole in a courgette to fit a dummy and receive a feeding bottle,
      but if you tried this with a red pointed pepper, that’s hollow and doesn’t
      have the same rigidity, it’ll end in disaster! However, babies that can be
      fed with a bottle add an extra layer of interactivity when children are
      tasked with caring for them. As a result, feel free to experiment with any
      of the baby characters that don’t have dummies or mouths. For example, if
      you would like to give Peep the Cauliflower or Boo the Lemon a mouth for a
      dummy and a bottle, then go for it! Just make sure you practice in advance
      and that you’ve got some spare fruits or vegetables to hand in case of
      accidents!
    </Paragraph>
  </HandyHintsPanel>
)

export const HHTen = ({ data }) => (
  <HandyHintsPanel
    image={data.decorativeSix.childImageSharp.gatsbyImageData}
    left={"46rem"}
    bottom={"0rem"}
    banner={data.banner.childImageSharp.gatsbyImageData}
  >
    <Paragraph mb={"-0.25rem"} fw={"600"}>
      Making the moment special
    </Paragraph>
    <Paragraph mb={"-0.25rem"}>
      How the baby is revealed, especially for the very first time, is crucial.
      Think of the experience a child has when they see Father Christmas in his
      grotto. There’s a sense of anticipation in meeting the magical character
      and then a BIG reveal. Your excitement will be mirrored by the children,
      so don’t hold back.
    </Paragraph>
    <Paragraph mb={"0rem"}>
      <span className="fw6">Firstly...</span>each visiting character should be
      presented or revealed as if they are a REAL baby. Cradle them carefully,
      speak gently to them and the children will naturally do the same.{" "}
    </Paragraph>
    <Paragraph mb={"0.25rem"}>
      <span className="fw6">Secondly... </span>think carefully about HOW the
      baby is revealed. Make sure this is an important moment for the children,
      as it will lay the foundations for how they engage with the character and
      therefore the whole experience of Let’s Grow.
    </Paragraph>
    <Paragraph mb={"-1rem"} fw={"600"}>
      Some ideas:
    </Paragraph>
    <List mb="0.25rem">
      <li>
        Unseen by the children, place the baby outside the door to the
        classroom. Suggest that you think you heard a knock at the door. When
        you go to investigate you find the visiting baby concealed, fast asleep
        in a special basket or wrapped in a blanket.
      </li>
      <li>
        Have an amenable adult arrive, carefully carrying the baby, at an
        arranged time. The announcement of the arrival of their special visitor
        will no doubt cause much excitement.
      </li>
      <li>
        Establish a ’special place’ where a new baby will be found for each
        session. This could be outside the classroom door or from within a
        special box or hamper that is placed in the font of the carpet area for
        the reveal. Use the{" "}
        <Highlight>
          <a href="https://cdn.sanity.io/files/a6vt2u3f/production/bb9d74194874557f6fc6d37bf180d4a42e885b40.mp4">
            Countdown Clock Song
          </a>
        </Highlight>{" "}
        as an exciting one-minute countdown to the arrival – as the song
        finishes the baby is revealed, gathered up in your arms to be cuddled
        and presented to the children.
      </li>
    </List>
    <Paragraph mb={"0rem"} mt="1rem">
      Establishing a routine for revealing the baby, so that children know what
      to expect, is strongly recommended. Most children will enjoy the sense of
      anticipation that this brings. Of course, this process can be playfully
      subverted, providing some exciting surprises and learning opportunities
      that reflect the babies’ different character traits. For example, the
      ‘Feelings’ session features a shy cauliflower called Peep who tends to get
      nervous about new people and places. The session starts with Peep not
      being in the place that the children expect. The children must then
      actively look for Peep. It turns out that Peep has hidden because they’re
      nervous. It’s therefore up to the children to support Peep in dealing with
      these uncomfortable feelings. We encourage you to put your own twist on
      the reveal or on any part of the baby’s visit. For example, a ‘cheeky’
      character may be found getting up to some mischief or somehow covered in
      paint. Be creative and have fun!
    </Paragraph>
    <Paragraph mb={"-1rem"} fw={"600"}>
      When interacting with the babies remember to...{" "}
    </Paragraph>
    <List>
      <li>
        Treat them as REAL babies. No ‘acting’ is needed, simply draw on your
        own experience of caring for a baby. Children instinctively understand
        the nature of caring for the very young or for animals, and will emulate
        your behaviour. Resist the temptation to break the fiction with any
        other adults who are present - some children will pick up on this, even
        if it’s just for a moment.
      </li>
      <li>
        Think of each baby as a new member of the class. Get to know them, their
        personality and character traits. These can develop for you and the
        children over time, but referring back to things they’ve done or said
        will help build the sense of character for the children.
      </li>
      <li>
        Respond to the babies as if they have spoken to you - “Oh that’s right
        Dug. It IS nearly lunchtime!” We want the children to imagine the babies
        speaking as it helps them channel their own thoughts and questions
        through
      </li>
      <li>
        Demonstrate how to feed any baby that comes with a bottle. Ask the
        children about why we need to be gentle with babies – this not only
        develops intrinsic motivation to take care of things but will also help
        the fruit and vegetables to last longer!
      </li>
      <li>
        Be playful and allow yourself to be ‘in the moment’. Often, the
        spontaneous suggestions the children make can be acted on, and
        unexpected learning opportunities could come from them.
      </li>
      <li>Enjoy yourself! Having fun is key (for adults and children).</li>
    </List>
  </HandyHintsPanel>
)

export const HHEleven = ({ data }) => (
  <HandyHintsPanel
    image={data.decorativeSeven.childImageSharp.gatsbyImageData}
    left={"46rem"}
    bottom={"0rem"}
    banner={data.banner.childImageSharp.gatsbyImageData}
  >
    <Paragraph>
      Let’s Grow is a fantastic resource for creative teaching and learning, and
      caring for the fruit and vegetable babies is at the very heart of this.
      Your children will build empathy and develop communication skills as they
      explore the world from the babies’ perspective. To maximise this, try to…
    </Paragraph>
    <Paragraph mb={"0.1rem"} fw={"600"}>
      Develop the identities of the babies{" "}
    </Paragraph>
    <Paragraph>
      The babies are archetypal characters and can be personalised to mirror the
      children’s own challenges, so that day-to-day issues can be effectively
      addressed. For example, Dilly &amp; Dally are great at making a mess but
      not so good at tidying up. This is a perfect opportunity for children to
      demonstrate how grown-up and capable they are, by showing Dilly &amp;
      Dally how to tidy up.
    </Paragraph>
    <Paragraph mb={"0.1rem"} fw={"600"}>
      Use the babies to help the children develop age-appropriate skills{" "}
    </Paragraph>
    <Paragraph>
      For example, the babies can be effectively used to support children who
      are transitioning from baby bottles to cups; or moving on from using a
      dummy. You can explain that only some of the fruit &amp; vegetable babies
      need bottles and dummies as they are so little.
    </Paragraph>
    <Paragraph mb={"0.1rem"} fw={"600"}>
      Use the babies to enable children to safely address personal issues{" "}
    </Paragraph>
    <Paragraph>
      For example, if a child is feeling worried about trying something new,
      deciding as a group that we need to help one of the babies who is
      experiencing the same thing, can help the child to work through their
      difficulty.
    </Paragraph>
    <Paragraph mb={"0.1rem"} fw={"600"}>
      Use the babies to talk about gender stereotypes{" "}
    </Paragraph>
    <Paragraph>
      The gender of the babies isn’t defined. Use them to explore any
      expectations that the children may have around things such aspirations,
      characteristics, clothing, colours, hairstyles, toys and activities.
    </Paragraph>
    <Paragraph mb={"0.1rem"} fw={"600"}>
      Keep communication in mind
    </Paragraph>
    <Paragraph>
      Build in moments where the children need to listen carefully and give
      their attention, as well as communicating their own ideas. This is a key
      aspect of SLCN (Speech language and communication needs) that young
      children need support to develop. For example, “What’s that Dug, you’ve
      got a question you’d like to ask the children?” or “Oh dear, Peep looks a
      bit upset. Shall we find out what’s the matter?” can be very effective way
      of bringing everyone’s attention back to the baby.
    </Paragraph>
  </HandyHintsPanel>
)

export const HHTwelve = ({ data }) => (
  <HandyHintsPanel
    image={data.decorativeEight.childImageSharp.gatsbyImageData}
    left={"44rem"}
    bottom={"0rem"}
    banner={data.banner.childImageSharp.gatsbyImageData}
  >
    <Paragraph>
      With each visiting baby, the children are given the opportunity to become
      the baby’s expert helpers, nurturing the baby through imaginative play.
      The children are encouraged to be gentle and kind, to take turns, to
      actively listen and to be patient, offering opportunities for both verbal
      and non-verbal communication. Children will naturally be solving problems
      and thinking critically along the way and can be supported to do so.
    </Paragraph>
    <Paragraph>
      The baby provides the purpose for this positive behaviour, which can
      ultimately lead to building confidence and self-esteem in the children, as
      they rise to the challenge and fulfil this roll, which often comes
      instinctively. Teachers can support and encourage this positive behaviour
      by co-creating some rules for play with the children.
    </Paragraph>
    <Paragraph fw={"600"}>Here are some ideas...</Paragraph>
    <List>
      <li>
        Agree that it would be ideal if the children play with the visiting
        character in the allocated ‘Baby Area’.
      </li>
      <li>
        Encourage the children to take turns fairly when playing with a visiting
        baby. An egg timer really helps!
      </li>
      <li>
        Teach the children how to care for the babies – model handling them
        gently, speaking softly and how to look after their belongings. Being
        careful with the babies in every way teaches the children to take care
        of things and for practical purposes, the fruits and vegetables will
        last longer.
      </li>
      <li>
        Teach the children how to feed the babies correctly by inserting the
        bottle gently into the ‘mouth,’ being careful not to force it.
      </li>
      <li>
        Agree ground rules to keep the babies ‘happy,’ such as to always put the
        baby back on its play mat, lying down or in its basket, so it can see
        everyone when not being held. Practically, this helps to avoid the baby
        ending up face down on the floor!
      </li>
      <li>
        To help contain play in one spot, teachers may find it useful to use a
        small, portable ‘focusing device’. Ideas include a baby’s playmat, a
        square of muslin material, a circle of artifical grass or a blanket.
        Anything which can be moved around • the classroom as needed.
      </li>
      <li>
        Include any other ground rules for play discussed and agreed upon with
        the children.
      </li>
    </List>
  </HandyHintsPanel>
)

export const HHThirteen = ({ data }) => (
  <HandyHintsPanel
    image={data.decorativeNine.childImageSharp.gatsbyImageData}
    left={"55rem"}
    bottom={"-0.4rem"}
    banner={data.banner.childImageSharp.gatsbyImageData}
  >
    <List ti={"0rem"} ml={"0rem"}>
      <li>
        <span className="fw6">
          What do I do if the children ask, ”Are the fruit & vegetable babies
          real?”
        </span>{" "}
        <Paragraph ml={"3.3rem"}>
          As the fiction is established, the children may ask you if the babies
          are real. Your response should be an unequivocal clear and confident:
          YES! The babies are REAL fruit & vegetables. All of them will have
          grown from a seed, into the food produce that is now the focus (and
          star attraction!) of this lesson. The more ambiguous, imaginative and
          creative element that is layered on top of this truth, is that... “In
          our story”, these baby fruits & vegetables are coming to visit us. It
          can be very effective to frame it like this for some or all of the
          children, saying... “In our story, Oz the Courgette has started
          school, just like you and all your friends”. If asked or pressed on
          this point of course, it’s important to be honest about the fact that
          this is pretend and this is “our story”. If you are asked about the
          eyes, simply say “Well, they’re Peep’s eyes. Peep needs them.” We want
          the children to be consenting and willing participants in the fiction
          of Let’s Grow and co-creators of the imaginative play that ensues.
          Children will naturally test the boundaries.
        </Paragraph>
      </li>
      <li>
        <span className="fw6">
          What to do if the children ask, ”Can we eat the fruit & vegetable
          babies?”
        </span>{" "}
        <Paragraph ml={"3.3rem"}>
          If children bring up the matter of ‘eating’ the babies, that is of
          course a good point. After all, they’re REAL fruits and vegetables.
          The answer here is really, quite simple. Let them know that we eat ALL
          fruits and vegetables, but would you eat the one that has eyes? No
          way!
        </Paragraph>
        <Paragraph ml={"3.3rem"}>
          If a child is keen to taste one of the characters, this is the ideal
          opportunity for the child to try this fruit or vegetable, while their
          interest is pricked! Teachers should get a spare one without eyes on,
          cut it up, and let the child and the group, explore and taste. The
          baby character will be very excited to watch this and find out what
          the child thinks it tastes and smells like! This is a fantastic
          outcome!
        </Paragraph>
      </li>
      <li>
        <span className="fw6">
          ”How does Let’s Grow encourage healthy eating?”
        </span>{" "}
        <Paragraph ml={"3.3rem"}>
          Included in Let’s Grow are opportunities for healthy eating, with
          themed recipes for children to try food that they might not have
          tasted before. Furthermore, by handling a variety of fruits and
          vegetables, the sensory experience the children encounter, allows them
          to become familar with what can sometimes be, quite an alien looking
          object.
        </Paragraph>
        <Paragraph ml={"3.3rem"}>
          The babies in our story are fantastic encouragers for eating
          healthily. Reassure the children and any1 concerned adults that it is
          ONLY the fruit or vegetable with eyes that we don’t eat.
        </Paragraph>
      </li>
      <li>
        <span className="fw6">
          ”What if a fruit or vegetable baby incurs any injury or accident when
          being played with?”
        </span>
        <Paragraph ml={"3.3rem"}>
          Use a plaster to conceal any ‘injuries’ the baby may recieve during
          the lesson, just as you would if a child had fallen and cut their
          knee. The children can help you with this. Never make a big fuss, just
          reassure the child using soothing, kind words and actions.
        </Paragraph>
        <Paragraph ml={"3.3rem"}>
          Sometimes major injuries occur. If they do, put the baby down and
          explain, “Oh dear Hoola, you’re going to have a bump on your head
          later!” and then remove the baby from the classroomn, so as to have a
          little lie down. You can mend or replace them, out of sight, later on.
          Always have spare fruits or vegetables to hand.
        </Paragraph>
      </li>
      <li>
        <span className="fw6">“How long do the fruits & vegetables last?”</span>
        <Paragraph ml={"3.3rem"}>
          All of the babies are perishible food produce, so have a certain
          ‘lifespan’. For the purposes of Let’s Grow, they need to look in prime
          and be the best representation of that particular fruit or vegetable.
          As a result, NEVER let the babies get old and shriveled! Some last
          longer than others, such as a butternut squash compared with a cherry
          tomato. It also depends on how much they are played with, as well as
          the temperature! The babies can get easily ‘worn out’ after the
          children have played with them. Be prepared to replace the babies.
          Overnight you can keep some of the babies in a fridge to help keep
          them fresh. It’s worth having a spare fruit or vegetable in the
          fridge, to replace without children knowing, so they always look their
          best. Keep each character version as similar as possible, for
          continuity purposes.
        </Paragraph>
      </li>
    </List>
  </HandyHintsPanel>
)

export const HHFourteen = ({ data }) => (
  <HandyHintsPanel
    image={data.decorativeTen.childImageSharp.gatsbyImageData}
    left={"53rem"}
    bottom={"-0.4rem"}
    banner={data.banner.childImageSharp.gatsbyImageData}
    health={data.health.childImageSharp.gatsbyImageData}
  >
    <Paragraph>
      Adults will make the baby characters before introducing them to the
      children. This activity is not intended to be an adult and child activity.
    </Paragraph>
    <Paragraph mb={"0rem"} fw={"600"}>
      Gluing on the googly eyes{" "}
    </Paragraph>
    <Paragraph>
      Hot glue from a glue gun burns if it comes into contact with skin. All due
      care and attention should be taken to avoid getting hot glue on skin when
      gluing on the baby character’s eyes.
    </Paragraph>
    <Paragraph>
      We recommend that adults glue the eyes on the baby characters in a space
      that is out of reach of children.
    </Paragraph>
    <Paragraph>Glue guns should be kept out of reach of children. </Paragraph>
    <Paragraph>Remember to turn the glue gun off straight after use.</Paragraph>
    <Paragraph mb={"0rem"} fw={"600"}>
      Carving the mouth{" "}
    </Paragraph>
    <Paragraph>
      Practitioners can carve the mouth safely by using children’s scissor
      recommended. These have a rounded end and you are unlikely to hurt
      yourself with this safe tool. Pay attention and be careful not to cut
      yourself on the blades of the children’s scissors.
    </Paragraph>
    <Paragraph mb={"0rem"} fw={"600"}>
      Applying the nappy pin
    </Paragraph>
    <Paragraph>
      Nappy pins have a sharp point. When placing the nappy pin on the baby’s
      nappy, be careful not to prick yourself.
    </Paragraph>
    <Paragraph mb={"0rem"} fw={"600"}>
      Resources & accessories
    </Paragraph>
    <Paragraph>
      The suggested resources & accessories are to guide and inspire.
      Practitioners can choose what is appropriate and safe to use with their
      cohort in mind and take responsibility for these choices.
    </Paragraph>
    <Paragraph>
      All items selected to make and use with the babies are chosen at your own
      risk. Always follow inherent product safety guidance.
    </Paragraph>
    <Paragraph>
      All resources are for adult use only and should be kept out of reach of
      all children, especially those under 36 months.
    </Paragraph>
    <Paragraph>
      <span className="fw6">WARNING:</span> Please be aware that if you choose
      to use items that contain natural fibres like 100% cotton (found in muslin
      cloths, baby socks, blankets and sweatbands), the material is NOT flame
      resistant and should be kept away from fire. Polyester alternatives are
      inherently flame resistant.
    </Paragraph>
    <Paragraph fw={"600"}>
      Some of the suggested resources contain the following hazardous parts:
    </Paragraph>
    <List>
      <li>
        <span className="fw6">Sharp components.</span> The safety nappy pin has
        a hazardous point and the children’s scissors are sharp.
      </li>
      <li>
        <span className="fw6">Small parts.</span>Choking hazard. Googly eyes.
      </li>
      <li>
        <span className="fw6">Burn Hazard.</span>Heated glue from a hot glue gun
        will burn skin if it comes into contact.
      </li>
    </List>
    <Paragraph mb={"0rem"} fw={"600"} mt={"1rem"}>
      Risk assessment
    </Paragraph>
    <Paragraph>
      A generic ‘risk assessment’ for health & safety in preparation is
      available for you to use and<br></br>adapt for your setting.
    </Paragraph>
  </HandyHintsPanel>
)

export const HHFifteen = ({ data }) => (
  <HandyHintsPanel
    image={data.decorativeEleven.childImageSharp.gatsbyImageData}
    health={data.health.childImageSharp.gatsbyImageData}
    left={"44rem"}
    bottom={"0rem"}
    banner={data.banner.childImageSharp.gatsbyImageData}
  >
    <Paragraph fw={"600"}>
      The fruit & vegetable babies are not suitable for children under 36 months
      to play with.
    </Paragraph>
    <Paragraph>
      <span className="fw6">WARNING:</span>Children playing with the baby fruits
      & vegetables should do so under the direct supervision of an adult.
    </Paragraph>
    <Paragraph fw={"600"}>
      There is danger of the following hazardous component parts falling off or
      being picked off or taken off by children when playing with the fruit or
      vegetable babies:
    </Paragraph>
    <List>
      <li>
        <span className="fw6">Sharp components.</span> The safety nappy pin has
        a hazardous point.
      </li>
      <li>
        <span className="fw6">Small parts.</span>Choking hazard. The googly eyes
        are a choking hazard.
      </li>
    </List>
    <Paragraph>
      A good way to manage safety in any setting, is to create a designated
      space for playing with the babies, where an adult can always be close by
      and oversee safe play; for example, by creating a ’Baby Area’. As children
      learn how to care for the visiting baby appropriately and safely, the
      playing area could extend beyond the ‘Baby Area’. A small, portable
      focusing device (e.g. baby’s playmat or circle of artificial turf) may be
      moved around the class room as required, to contain any play with the
      character to this spot (wherever it is placed). Children will understand
      that any rules for play are applicable.
    </Paragraph>
    <Paragraph fw={"600"}>Due care must be taken to ensure that...</Paragraph>
    <List>
      <li>
        Children don’t pull off the googly eyes and put them in their mouth as
        this could be a choking hazard.
      </li>
      <li>
        Children don’t undo the nappy pin. By design nappy pins are childproof,
        so this shouldn’t be an issue. If unsure, don’t use one.
      </li>
      <li>
        Children don’t trip or fall over any fruits & vegetables that are left
        on the floor.
      </li>
      <li>
        For hygiene reasons, children must not put the baby’s dummy or bottle in
        their own mouths.
      </li>
      <li>
        If practitioners choose to fill the baby bottles with liquid, only
        choose drinking water so that if a child does put the bottle in their
        mouth, the contents are drinkable. If you prefer, simply don’t fill the
        bottles with any liquid.
      </li>
      <li>
        Some of the fruits & vegetables can be heavy to hold and could cause
        injury if dropped on a child. Adults should support children who want to
        play with the heavier characters, to do so safely. For example,
        watermelons, pineapples, squashes, pumpkins and others may be quite
        heavy for children to carry.
      </li>
      <li>
        We recommend that children play with ‘Babs the Watermelon’ whilst
        sitting down. It works well to gently roll Babs around on the floor from
        one child to the next. If ‘Babs the Watermelon’ is dropped from a
        height, Babs is likely to smash open. As Babs is heavy, this could cause
        injury to a child or an adult, so due care and attention should be
        maintained at all times to prevent this from occurring.
      </li>
    </List>
  </HandyHintsPanel>
)

export const HHSixteen = ({ data }) => (
  <HandyHintsPanel
    health={data.health.childImageSharp.gatsbyImageData}
    image={data.decorativeTwelve.childImageSharp.gatsbyImageData}
    left={"53rem"}
    bottom={"-0.3rem"}
    banner={data.banner.childImageSharp.gatsbyImageData}
  >
    <List>
      <li>
        Sometimes a little bit of watery juice can come out of the mouth of a
        baby. This could be the juice from the fruit or vegetable or sometimes
        some water from their baby bottle may have gotten inside. This usually
        happens if the children have pushed the bottle into the mouth a little
        too hard. Please be aware that any juice that comes out of the baby’s
        mouth could be a slip hazard on the floor. Children should be shown how
        to feed the babies correctly, by inserting the bottle gently into the
        mouth of the baby and not forcing it. Being careful with the babies
        should be encouraged as it teaches the children to take care of things
        and for practical purposes, the fruit or vegetable will last longer.
      </li>
      <li>
        Hoola the Pineapple, by nature’s design, has protruding, spiky leaves.
        Care must be taken for the leaves not to poke children in the eye.
        Children should be instructed how to carefully handle Hoola. Sharp
        leaves should be rounded off with scissors beforehand.
      </li>
    </List>
    <Paragraph mb={"0rem"} fw={"600"} mt={"1rem"}>
      Risk assessment
    </Paragraph>
    <Paragraph>
      A generic ‘risk assessment’ for health & safety in preparation is
      available for you to use and<br></br>adapt for your setting.
    </Paragraph>
  </HandyHintsPanel>
)

const List = styled.ul`
  margin-left: ${props => (props.ml ? props.ml : "2rem")};
  text-indent: ${props => (props.ti ? props.ti : "-3.3rem")};

  > li {
    font-size: 0.7rem;
    list-style-position: inside;
    list-style-type: none;
    margin-bottom: ${props => (props.mb ? props.ml : "0.5rem")};
    margin-left: ${props => (props.ml ? props.ml : "1rem")};
    margin-right: 1rem;
    margin-top: 0;
    padding-top: 0;
    font-weight: 400;
    line-height: 1rem;
    vertical-align: top;

    @media screen and (min-width: 35em) {
      font-size: 1rem;
      line-height: 1.3rem;
      margin-top: 1rem;
    }
  }

  > li:before {
    content: "\\00B7";
    font-size: 5rem;
    margin-left: 1rem;
    padding-right: 1rem;

    vertical-align: middle;
  }
`

const Paragraph = styled.p`
  font-size: 0.7rem;
  margin-bottom: ${props => (props.mb ? props.mb : "0.5rem")};
  line-height: 1rem;
  font-weight: ${props => (props.fw ? props.fw : "400")};
  max-width: 58rem;
  margin-top: ${props => (props.mt ? props.mt : "0rem")};

  @media screen and (min-width: 35em) {
    font-size: 1rem;
    line-height: 1.3rem;
    padding-bottom: 0.5rem;
    margin-left: ${props => (props.ml ? props.ml : "1rem")};
  }
`

const Subheading = styled.h2`
  font-size: 2rem;
`

const IconDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 9rem);
  justify-content: space-around;
  grid-gap: 16px;
  align-items: start;
  justify-content: center;
  margin: 2rem 0rem 2rem 0rem;

  @media screen and (min-width: 45em) {
    margin: 1rem 0rem 0rem 1rem;
    justify-content: start;
  }

  @media screen and (min-width: 60em) {
  }
`

const Highlight = styled.span`
  position: relative;
  background-color: #7fb5aa;
  transform: rotate(2deg);
  border-radius: 0px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: -8px;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  line-height: 1rem;
  a {
    transform: rotate(-2deg);
    line-height: 1.1rem;
    text-decoration: none;
    color: white;

    &: hover {
      text-decoration: underline;
    }
    & :visited {
      color: white;
    }
  }
`
