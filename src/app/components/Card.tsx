import {
  Box,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react'

import { responsiveSpacing } from "./Template";

import Image from 'next/image'

export const imgSizesArray = [
  "oneQuarter",
  "oneThird",
  "oneHalf",
  "twoThirds",
  "threeQuarters",
  "full",
] as const;
export type ImgSizes = typeof imgSizesArray[number];

export interface CardProps {
  actions?: JSX.Element;
  content?: string | JSX.Element;
  heading?: string | JSX.Element;
  img?: string;
  imgSize?: ImgSizes;
  readalikes?: string | JSX.Element;
  subheading?: string;
  url?: string;
}

const Card = ({
  actions,
  content,
  heading,
  img,
  imgSize = "oneQuarter",
  readalikes,
  subheading,
  url,
}: CardProps) => {
  const cardStyles = {
    display: "grid",
    gap: { ...responsiveSpacing },
    a: {
      color: "#0069BF",
      textDecoration: "underline 1px dotted",
      textUnderlineOffset: "2px",
      _hover: {
        color: "black",
      }
    },
    p: {
      lineHeight: "1.5"
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "300",
      a: {
        textDecoration: "none",
        _hover: {
          textDecoration: "underline 1px dotted",
          textUnderlineOffset: "2px",
        }
      }
    },
    h4: {
      fontSize: ".875rem",
      fontWeight: "400",
      mt: ".5rem",
    },
    h5: {
      fontSize: ".875rem",
      fontWeight: "400",
      mt: "1rem",
    }
  }
  const imgSizeStyles = {
    oneQuarter: {
      gridTemplateColumns: "1fr 3fr",
    },
    oneThird: {
      gridTemplateColumns: "1fr 2fr",
    },
    oneHalf: {
      gridTemplateColumns: "1fr 1fr",
    },
    twoThirds: {
      gridTemplateColumns: "2fr 1fr",
    },
    threeQuarters: {
      gridTemplateColumns: "3fr 1fr",
    },
    full: {
      gridTemplateColumns: "1fr",
    },
  };
  // const bgImage = `linear-gradient(black, black), url(${img})`;
  const imgBoxStyle = {
    aspectRatio: "1 / 1" ,
    bgColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // maxHeight: "100%",
    overflow: "hidden",
    height: "auto",
    _after: {
      aspectRatio: "1 / 1" ,
      backgroundBlendMode: "saturation",
      backgroundImage: `linear-gradient(black, black), url(${img})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      filter: "blur(4px)",
      width: "100%",
      height: "auto",
      content: '" "',
      position: "absolute",
      opacity: "0.3",
      zIndex: "1",
      overflow: "hidden",
    }
  }
  return (
    <Box sx={{
      containerType: "inline-size",
      containerName: "my-container",
      "@container my-container (min-width: 0px)": {
        "[data-container]": { gridTemplateColumns: "1fr 1fr 1fr 1fr", },
        "[data-image]": { gridColumn: "1 / 5", },
        "[data-content]": { gridColumn: "1 / 5", },
        "[data-actions]": { gridColumn: "1 / 5", flexDirection: "column"},
      },
      "@container my-container (min-width: 472px)": {
        "[data-container]": { gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", },
        "[data-image]": { gridColumn: "1 / 4", },
        "[data-content]": { gridColumn: "4 / 7", },
        "[data-actions]": { gridColumn: "4 / 7"},
      },
      "@container my-container (min-width: 686px)": {
        "[data-container]": { gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr", },
        "[data-image]": { gridColumn: actions ? "1 / 4" : "1 / 4", },
        "[data-content]": { gridColumn: actions ? "4 / 8" : "4 / 10", },
        "[data-actions]": { gridColumn: "8 / 10" },
      },
      "@container my-container (min-width: 992px)": {
        "[data-container]": { gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr", },
        "[data-image]": { gridColumn: "1 / 4", },
        "[data-content]": { gridColumn: actions ? "4 / 10" : "4 / 13", },
        "[data-actions]": { gridColumn: "10 / 13" },
      }
    }}>
      <Box 
        data-container
        // __css={{...cardStyles, ...imgSizeStyles[imgSize]}}
        __css={
            {
              ...cardStyles, 
              // gridTemplateColumns: { base: "1fr", sm: "1fr 1fr", md: "1fr 2fr", lg: "1fr 3fr"},
            }
          }
        >
        <Box data-image position={"relative"}>
          <Box __css={imgBoxStyle}>
            {/* <Image 
              height={600}
              src={ img ? img : "https://images.freeimages.com/images/large-previews/e81/westminster-bridge-and-big-ben-london-uk-1635339.jpg" }
              width={600}
              alt="My image"
              style={{objectFit: "contain", maxWidth: "100%", zIndex: 2, overflow: "hidden"}} 
              /> */}
            <img 
              src={ img ? img : "https://images.freeimages.com/images/large-previews/e81/westminster-bridge-and-big-ben-london-uk-1635339.jpg" }
              alt="My image"
              style={
                {
                  objectFit: "contain", 
                  maxWidth: "100%", 
                  zIndex: 2, 
                  overflow: "hidden", 
                  width: "100%", 
                  height: "100%",
                  // boxShadow: "2px 2px 6px rgba(255, 255, 255, 0.4)",
                  boxShadow: "12px 12px 6px white",
                  // border: "1px solid white",
                }
              } 
              />
          </Box>
        </Box>
        <Box data-content>
          <Heading as="h3"><Link href={url}>{heading}</Link></Heading>
          {subheading && <Heading as="h4">by {subheading}</Heading>}
          {content && <Text fontSize=".875rem" fontWeight="300" mt=".5rem"><span dangerouslySetInnerHTML={{__html: content}} /></Text>}
          {readalikes && 
            <>
              <Heading as="h5" fontWeight="500">Readalikes:</Heading>
              <Text fontSize=".875rem" fontWeight="300" mt=".0rem">{readalikes}</Text>
            </>
          }
        </Box>
        {actions && 
          <Box 
            data-actions 
            display="flex" 
            gap=".5rem">
              {actions}
          </Box>
        }
      </Box>
    </Box>
  )
}

export default Card;
