import React from "react";
import { Avatar, Heading, Highlight, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar src="https://i.pravatar.cc/150?img=7"></Avatar>
      <Heading size="sm">{greeting}</Heading>
      <br/>
      <Heading size="2xl" letterSpacing="tight">{bio1}</Heading>
      <Heading size="2xl">
        <Highlight query="React" styles={{ color: "#fa706b" }}>
          {bio2}
        </Highlight>
      </Heading>

      
      
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
