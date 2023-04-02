import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Skigames",
    description:
      "Prototipo di e-Commerce di videogiochi, realizzato come progetto finale del Bootcamp con Aulab",
    display: false,
    getImageSrc: () => require("../images/skig.png"),
  },
  {
    title: "Prossimamente..",
    description: "Sezione in costruzione",
    display: true,
    getImageSrc: () => require("../images/Work-In-Progress.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor='#14532d'
      isDarkBackground
      p={8}
      alignItems='flex-start'
      spacing={8}
    >
      <Heading as='h1' id='projects-section'>
        Progetti
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={8}>
        {projects.map((project) => (
          <Box key={project.title}>
            <Card
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
              isDisabled={project.display}
            />
          </Box>
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
