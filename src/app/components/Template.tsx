import {
  Box,
} from '@chakra-ui/react'

export interface TemplateProps {
  mainContent?: JSX.Element;
  sidebar?: "left" | "right" | "none";
  sidebarContent?: JSX.Element;
}

export interface SidebarProps {
  children?: JSX.Element;
  sidebar?: string;
}

export const responsiveGutters = { base: "1rem", md: "1.5rem", xl: "1rem" };
export const responsiveSpacing = { base: "1rem", md: "1.5rem", xl: "2rem" };

const SidebarElement = ({children, sidebar = "left"}: SidebarProps) => {
  const sidebarStyles = {
    // bgColor: "#efefef",
    gridColumn: sidebar === "left" 
      ? {base: "1 / 13", sm: "1 / 7", md: "1 / 5", lg: "1 / 4"}
      : sidebar === "right"
        ? {base: "1 / 13", sm: "7 / 13", md: "9 / 13", lg: "10 / 13"}
        : undefined,
    a: {
      textDecoration: "underline 1px dotted",
      textUnderlineOffset: "2px",
    }
    // p: "1rem",
    // display: "sticky",
    // height: "200px"
  }
  return (
    <Box __css={sidebarStyles}>{children}</Box>
  )
}

const Template = ({
  mainContent,
  sidebar = "none",
  sidebarContent,
}: TemplateProps) => {
  const templateStyles = {
    display: "grid",
    gap: {...responsiveSpacing},
    gridTemplateColumns: sidebar === "left" 
      ? "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
      : sidebar === "right" 
        ? "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        : "1fr",
    margin: "2rem auto",
    maxWidth: "1280px",
    px: {base: "1rem", md: "1.5rem", xl: "1rem"},
    // bgColor: "red",
  }
  const contentStyles = {
    gridColumn: sidebar === "left"  
    ? {base: "1 / 13", sm: "7 / 13", md: "5 / 13", lg: "4 / 13"}
    :  sidebar === "right"
    ? {base: "1 / 13", sm: "1 / 7", md: "1 / 9", lg: "1 / 10"}
    : "1 / 13",
    // bgColor: "green",
  }
  return (
    <Box __css={templateStyles} className="template">
      {sidebar === "left" && 
        <SidebarElement sidebar={sidebar}>{ sidebarContent }</SidebarElement>
      }
      {mainContent && 
        <Box __css={contentStyles}>{mainContent}</Box>
      }
      {sidebar === "right" && 
        <SidebarElement sidebar={sidebar}>{ sidebarContent }</SidebarElement>
      }
    </Box>
  )
}

export default Template;