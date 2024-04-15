'use client'

import { useSearchParams } from 'next/navigation'

import {
  Box,
  Button,
  Heading,
  Link,
  List,
  Text,
  VStack,
} from '@chakra-ui/react'

import Card from "./components/Card";
import Template, { responsiveGutters, responsiveSpacing } from "./components/Template";

const TemplatePage = () => {
  const buttonStyles = {
    lineHeight: "1.5",
    borderRadius: "2px",
    fontWeight: "400",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
    color: "white",
    justifyContent: "center",
    textDecoration: "none",
    overflowWrap: "normal",
    height: "40px",
    fontSize: "14px",
    paddingInlineStart: "1rem",
    paddingInlineEnd: "1rem",
    background: "blue",
    minHeight: "44px",
    paddingTop: ".5rem",
    paddingBottom: ".5rem"
  }
  const actions = (
    <>
      <Button width="100%" variant="solid" colorScheme="blue">Download</Button>
      <Button width="100%" variant="outline" colorScheme="blue">Save</Button>
    </>
  )

  const searchParams = useSearchParams()
  const show = searchParams.get('show')
  const showButtons = show === "true" ? true : false;
  
  return (
    <>
      <style>{`
        #Header-Placeholder {
          minheight: 62px;
        }
        @media screen and (min-width: 832px) {
          #Header-Placeholder {
            min-height: 130px;
          }
        }
      `}</style>
      <div id="Header-Placeholder">
        <div id="nypl-header"></div>
        <script
          src="https://ds-header.nypl.org/header.min.js?containerId=nypl-header"
          async
        ></script>
      </div>
      <Box bgColor="#bdbdbd">
        <Box margin="auto" maxWidth="1280px" px={responsiveGutters} width="100%" fontSize="14px" py=".5rem">
          <a href="https://www.nypl.org"><span>Home</span></a> / <a href="https://www.nypl.org/blog"><span>Blog</span></a> / <Box as="span" fontWeight="700">NYPL&apos;S Top 10 Comics and Graphic Novels of 2023</Box>
        </Box>
      </Box>
      <Template 
        mainContent={
          <>
            <Heading as="h1" fontSize={{base: "2.125rem", md: "2.625rem"}} fontWeight="200" lineHeight="1.1" margin="0 0 1rem">NYPL&apos;S Top 10 Comics and Graphic Novels of 2023</Heading>
            <Heading as="h2" fontSize="1.375rem" fontWeight="500" mb=".5rem">By NYPL Best Comics Committee</Heading>
            <Heading as="h3" fontSize="1rem" fontWeight="300" mb="1rem">November 30, 2023</Heading>
            <Text fontWeight="300" mb="2rem">
              After reading over 550 different titles, NYPL&apos;s Best Comics Committee not only narrowed this year&apos;s releases down to <a href="https://www.nypl.org/books-more/recommendations/comics-2023/adults" rel="nofollow">50 incredible books</a>, but further narrowed <em>those</em> down to 10 exceptional titles. From fantastical intergalactic wrestling tournaments and parallel worlds full of wish-granting genies to slow burn paranoid obsessions and brave fights against impossible but very human scenarios, there is something remarkable for every kind of reader in this list.
            </Text>
            <VStack spacing={responsiveSpacing} width="100%" align="left">
              <Card 
                actions={showButtons ? actions : undefined}
                subheading="Daniel Warren Johnson"
                content="Nothing would make young Lona Steelrose happier than following in her late mother&apos;s footsteps to become a high-flying, tough-as-nails wrestling champion, though nobody would dare train her, lest she repeat her mother&apos;s fatal slip in her tragic final match. This incredibly personal tale is quite literally blown to cosmic proportions when an intergalactic wrestling fanatic necromancer proposes she enter his outlandish tournament… and win back her mother. Illustrated in colors brighter than every tag team&apos;s spandex attire put together while jumping between tender family memories, action-packed sequences in the ring, zany sci-fi dialogue, and flashbacks offering beautifully empathetic insight into seemingly two-dimensional opponents, Do A Powerbomb will sweep you off your feet whether you're a wrestling fan or simply someone who loves a great story of ambition, family, and grief."
                img="https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fcontentcafecloud.baker-taylor.com%2FJacket.svc%2F687E8C19-A3BC-4C42-8417-3550389695CF%2F9781534324749%2FLarge%2FLogo&w=128&q=75" 
                heading="Do a Powerbomb"
                readalikes={
                  <>
                    <a href="https://nypl.na2.iiivega.com/search/card?id=6f9f269c-5624-5210-b7b7-4727d3318192&amp;entityType=FormatGroup" rel="nofollow"><em>Teenage Mutant Ninja Turtles: The Last Ronin</em></a>&nbsp;by Kevin Eastman, Peter Laird, and Tom Waltz<br />
                    <a href="https://nypl.na2.iiivega.com/search/card?id=12028d2a-adb7-562a-bcb0-9cd528e99f05&amp;entityType=FormatGroup" rel="nofollow"><em>Fantasy Sports</em></a>&nbsp;by Sam Bosma<br />
                    <a href="https://nypl.na2.iiivega.com/search/card?id=50c2fd7d-16b2-5063-ad32-63d71250347f&amp;entityType=FormatGroup" rel="nofollow"><em>Fist of the North Star</em></a>&nbsp;by Buronson and Tetsuo Hara
                  </>
                }
                url="https://nypl.na2.iiivega.com/search/card?id=d729429b-9aed-5026-8f51-d664cf4a3b2a&entityType=FormatGroup"
              />
              <Card 
                actions={showButtons ? actions : undefined}
                subheading="Charles Soule and Ryan Brown"
                content="If every single person on the planet suddenly received a genie granting one wish, the world would be unrecognizable in seconds. Eight Billion Genies not only paints a grim, yet hilarious prediction of these first few seconds, but also of the preceding minutes, days, months, and years of a world that has given way to limitless chaos and nonsensical logic in the wake of billions of ill-conceived wishes. This tale of unlikely heroes, unrequited love, generational trauma, rebuilding community, and examining ethics manages to be completely sincere and human at every turn, despite the backdrop of robots, dinosaurs, robot dinosaurs, and the ghost of Jim Morrison. For a rewarding, thought-provoking, and undeniably humorous reading experience, dive into Eight Billion Genies, a book with a beginning and middle as unpredictable as its ending."
                img="https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fcontentcafecloud.baker-taylor.com%2FJacket.svc%2F687E8C19-A3BC-4C42-8417-3550389695CF%2F9781534323537%2FLarge%2FLogo&w=128&q=75" 
                heading="Eight Billion Genies"
                readalikes={
                  <>
                    <a href="https://nypl.na2.iiivega.com/search/card?id=0f54036d-a488-5b10-a67f-c0be85af583f&amp;entityType=FormatGroup" rel="nofollow"><em>Crossover</em></a>&nbsp;by Donny Cates<br />
                    <a href="https://nypl.na2.iiivega.com/search/card?id=316de137-9318-5f15-b1c4-9718133f9237&amp;entityType=FormatGroup" rel="nofollow"><em>The Hitchhiker&apos;s Guide to the Galaxy</em></a>&nbsp;by Douglas Adams<br />
                    <em><a href="https://nypl.na2.iiivega.com/search/card?id=0e0b8589-5f63-593c-907f-4a2119f4c9c6&amp;entityType=FormatGroup" rel="nofollow">X-Ray Robot</a>&nbsp;</em>by Mike Allred
                  </>
                }
                url="https://nypl.na2.iiivega.com/search/card?id=95352aa1-d6f9-56ba-8f64-365693ae75f6&entityType=FormatGroup"
              />
              <Card 
                actions={showButtons ? actions : undefined}
                subheading="Mike Birchall"
                content="Sam and Maggie are a completely ordinary couple living their ordinary life in a completely ordinary community. Perhaps too ordinary…<br>
                <br>
                Though it begins as perhaps an uncomfortably, darkly minimalist comedy, Everything is Fine quickly shows its teeth and unnervingly reveals the corruption, betrayal, and repressive surveillance state that power this ordinary community while Sam and Maggie are torn between digging for the truth or maintaining their safety with the chilling mantra “we have to forget.” Within Birchall&apos;s simple little world of smiling cat faces and pristine, pastel houses lie horrific sights and deadly decisions that just may keep readers up at night… but mainly to see what happens next."
                img="https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fcontentcafecloud.baker-taylor.com%2FJacket.svc%2F687E8C19-A3BC-4C42-8417-3550389695CF%2F9781990259913%2FLarge%2FLogo&w=128&q=75" 
                heading="Everything is Fine"
                readalikes={
                  <>
                    <em><a href="https://nypl.na2.iiivega.com/search/card?id=0c5f86d5-b986-55a3-b5de-5b8a774fe53a&amp;entityType=FormatGroup" rel="nofollow">1984</a> </em>by George Orwell<br />
                    <em><a href="https://nypl.na2.iiivega.com/search/card?id=371f539e-ea0e-5274-a80e-127dce5e5dc9&amp;entityType=FormatGroup" rel="nofollow">The Stepford Wives</a> </em>by Ira Levin<br />
                    <em><a href="https://nypl.na2.iiivega.com/search?query=wayward%20pines%20crouch&amp;searchType=everything&amp;pageSize=10&amp;materialTypeIds=a&amp;pageNum=0" rel="nofollow">Wayward Pines</a> </em>by Blake Crouch
                  </>
                }
                url="https://nypl.na2.iiivega.com/search/card?id=dbb814cc-cdfb-5ea0-b40e-8b00d7917292&entityType=FormatGroup"
              />
              <Card 
                actions={showButtons ? actions : undefined}
                subheading="Emily Carroll"
                content="A slow-burn, dream-forward psychological thriller that is two parts Rebecca and one part The Twilight Zone, somehow blended effortlessly with the most surreal moments of visually striking films like Pink Floyd: The Wall and fantastical daydreams akin to Brazil. What begins as a modest cashier&apos;s attempt to fit in to her new quiet lakeside life with her unassuming husband and somewhat distant stepdaughter shifts slowly towards a creeping and vague uncertainty about her new role, propelled by a vivid, otherworldly romantic obsession with what may be the ghost of her husband&apos;s late wife. Expertly plotted to keep our protagonist&apos;s perspective and journey relatable, even as she slips further from credibility, A Guest in the House lulls you with its serene, yet dreary pace only to blindside you with gripping tension, splashes of wonder, and a fearful curiosity that follows you to the very last page."
                img="https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fcontentcafecloud.baker-taylor.com%2FJacket.svc%2F687E8C19-A3BC-4C42-8417-3550389695CF%2F9781250255525%2FLarge%2FLogo&w=128&q=75" 
                heading="A Guest in the House"
                readalikes={
                  <>
                    <a href="https://nypl.na2.iiivega.com/search/card?id=cf67a533-6333-51d5-a92e-b02292ad393b&amp;entityType=FormatGroup" rel="nofollow"><em>Rebecca</em></a> by Daphne du Maurier<br />
                    <a href="https://nypl.na2.iiivega.com/search/card?id=f636a680-07c3-579c-bd3f-909a1bc1dda1&amp;entityType=FormatGroup" rel="nofollow"><em>The Blackhouse</em></a> by Carole Johnstone<br />
                    <a href="https://nypl.na2.iiivega.com/search/card?id=56b289f3-7257-5586-8558-0d42f0a36032&amp;entityType=FormatGroup" rel="nofollow"><em>The Only One Left</em></a> by Riley Sager
                  </>
                }
                url="https://nypl.na2.iiivega.com/search/card?id=81c8c58d-74ea-54d3-b5ca-59143139505e&entityType=FormatGroup"
              />
              {/* <Card img="https://placekitten.com/300/400" imgSize="oneThird" /> */}
              {/* <Card img="https://placekitten.com/400/300" imgSize="oneThird" /> */}
            </VStack>
          </>
        }
        sidebar="left" 
        sidebarContent={
          <>
            <Heading as="h3" fontSize="1.375rem" fontWeight="500" mb=".5rem">More at NYPL</Heading>
            <List margin="0 0 1rem" padding={0} styleType="none" spacing=".25rem">
              <li><a href="https://www.nypl.org/library-card">Get a Library Card</a></li>
              <li><a href="https://www.nypl.org/books-more/recommendations/staff-picks/adults">Find Your Next Book</a></li>
              <li><a href="https://www.nypl.org/locations">Search Library Locations</a></li>
              <li><a href="https://www.nypl.org/help/computers-internet-and-wireless-access/reserving-computer">Reserve a Computer</a></li>
            </List>
            <Heading as="h3" fontSize="1.375rem" fontWeight="500" mb=".5rem">Need Help? Ask NYPL</Heading>
            <List margin="0 0 1rem" padding={0} styleType="none" spacing=".25rem">
              <li><a href="https://www.nypl.org/email-us">Email us your question</a></li>
              <li><a href="https://www.nypl.org/get-help/contact-us/chat">Chat with a librarian</a></li>
              <li>Text (917) 983-4584</li>
              <li><a href="tel:1-917-983-4584">Call (917) ASK-NYPL</a></li>
              <li><a href="tel:1-917-275-6975">(917) 275-6975</a></li>
              <li>TTY 212-930-0020</li>
            </List>
            <Heading as="h3" fontSize="1.375rem" fontWeight="500" mb=".5rem">Support NYPL</Heading>
            <List margin="0 0 1rem" padding={0} styleType="none" spacing=".25rem">
              <li><a href="https://www.nypl.org/help/about-nypl/volunteer-nypl">Volunteer</a></li>
              <li><Link __css={buttonStyles} href="https://secure.nypl.org/site/Donation2?7825_donation=form1&amp;amp;df_id=7825&amp;amp;mfc_pref=T&amp;amp;set_custom_Donation_Direction=Mid-Manhattan%20at%2042nd%20Street%20Library&amp;amp;s_src=FRQXXZZ_QWLPN">Support Your Library!</Link></li>
            </List>
          </>
        }
      />
      <div id="nypl-footer"></div>
      <script
        src="https://ds-header.nypl.org/footer.min.js?containerId=nypl-footer"
        async
      ></script>
    </>
  );
}

export default TemplatePage;