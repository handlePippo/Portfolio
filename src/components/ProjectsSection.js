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
    description:
      "Sezione in costruzione, di tanto in tanto verranno aggiunti nuovi progetti, sia quì che su GitHub.",
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
      id='projects-section'
    >
      <Heading as='h1' mt='10'>
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
