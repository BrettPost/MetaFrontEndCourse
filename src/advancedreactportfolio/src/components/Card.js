import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing={3} style={{background: "white", borderRadius: "15px"}}>
      <Image src={imageSrc} style={{borderRadius: "15px"}}></Image>
      <Heading color="black" size="2x1">{title}</Heading>
      <Text color="#AAA" fontSize="sm">{description}</Text>
      <HStack><Text color="black">See more</Text><FontAwesomeIcon color="black" icon={faArrowRight} size="1x" /></HStack>
    </VStack>
  );
};

export default Card;
