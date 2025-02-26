import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Lam !";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    py={16} // Adjusted padding for better spacing
  >
    <VStack spacing={4} textAlign="center" color="white">
      <Avatar size="2xl" src="https://i.pravatar.cc/150?img=7" />
      <Heading as="h1" size="xl">
        {greeting}
      </Heading>
      <Heading as="h2" size="md">
        {bio1}
      </Heading>
      <Heading as="h2" size="md">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
