import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: filippopallianimail@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/handlePippo?tab=repositories",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/filippopalliani/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'
      zIndex={999}
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <SimpleGrid
          columns={{ base: 1, md: 3, xl: 3 }}
          px={6}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <nav>
            <HStack spacing={3}>
              {socials.map((el) => {
                return (
                  <a href={el.url} target='_blank'>
                    <FontAwesomeIcon
                      icon={el.icon}
                      size='2x'
                      className='ruota'
                    />
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav
            display={{
              base: "block",
              md: "none",
              xl: "none",
            }}
          >
            <HStack
              spacing={8}
              display={"flex"}
              justifyContent={{ base: "left", md: "center", xl: "right" }}
              marginLeft={{ md: "50vw", xl: "50vw" }}
            >
              <a href='/#homepage' onClick={handleClick("homepage")}>
                <Text fontSize='sm' className='anchor'>
                  Homepage
                </Text>
              </a>
              <a href='/#projects' onClick={handleClick("projects")}>
                <Text fontSize='sm' className='anchor'>
                  Progetti
                </Text>
              </a>
              <a href='/#contact-me' onClick={handleClick("contactme")}>
                <Text fontSize='sm' className='anchor'>
                  Contattami
                </Text>
              </a>
            </HStack>
          </nav>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Header;
