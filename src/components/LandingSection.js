import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Ciao, sono Filippo!";
const bio1 = "Un Fullstack Developer Jr.";
const bio2 = "e questa pagina è realizzata in React.js";

const LandingSection = () => (
  <>
    <FullScreenSection
      justifyContent='center'
      alignItems='center'
      isDarkBackground
      backgroundColor='#2A4365'
      id='homepage-section'
    >
      <VStack>
        <Avatar
          size={{ base: "200px", md: "250px", lg: "300px" }}
          height={{ base: "200px", md: "250px", lg: "300px" }}
          src='https://i.ibb.co/gzhcjcp/123.jpg'
        />
        <Heading
          pb={{ base: "2", md: "10" }}
          pt={{ base: "2", md: "0" }}
          fontSize={{ base: "24px", md: "36px", lg: "48px" }}
          textAlign='center'
        >
          {greeting}
        </Heading>
        <Heading
          fontSize={{ base: "20px", md: "24px", lg: "36px" }}
          textAlign='center'
        >
          {bio1}
        </Heading>
        <Heading
          fontSize={{ base: "20px", md: "24px", lg: "36px" }}
          textAlign='center'
        >
          {bio2}
        </Heading>
      </VStack>
    </FullScreenSection>
  </>
);

export default LandingSection;
