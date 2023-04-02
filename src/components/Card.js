import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Button,
  StackDivider,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, isDisabled }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <>
      <VStack
        divider={<StackDivider borderColor='white' />}
        spacing={4}
        align='stretch'
      >
        <HStack
          direction={{ base: "column", sm: "row" }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            borderRadius={"20"}
            objectFit='cover'
            maxW={{ base: "100%", sm: "600px" }}
            src={imageSrc}
            alt='image'
            position={"relative"}
            height='50vh'
          />
        </HStack>
        <VStack>
          <Heading size='md' d-flex justifyContent={"left"}>
            {title}
          </Heading>

          <Text py='2'>{description}</Text>

          <a href='https://github.com/handlePippo?tab=repositories'>
            <Button
              variant='solid'
              colorScheme='transparent'
              justifyContent={"left"}
              textAlign={"left"}
              isDisabled={isDisabled}
            >
              Repository GitHub
              <FontAwesomeIcon
                icon={faArrowRight}
                size='1x'
                style={{ marginLeft: "5px" }}
              />
            </Button>
          </a>
        </VStack>
      </VStack>
    </>
  );
};

export default Card;
