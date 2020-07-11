import React from 'react';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import ProjectCard from '../components/ProjectCard';

import { frontMatter as styleGuides } from './blog/style-guides-component-libraries-design-systems.mdx';
import { frontMatter as nextFirebase } from './blog/nextjs-firebase-serverless.mdx';

const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <HomeHero
            secondaryTextColor={secondaryTextColor}
            colorMode={colorMode}
          />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Most Recent
          </Heading>
          <BlogPost {...styleGuides} />
          <BlogPost {...nextFirebase} />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Projects
          </Heading>
          <Projects />
        </Flex>
      </Stack>
    </Container>
  );
};

const HomeHero = ({ secondaryTextColor, colorMode }) => (
  <>
    <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
      elrypto.dev
    </Heading>
    <Text color={secondaryTextColor[colorMode]}>
      Sharing what i have learned when building Scalable and Performant Modern
      Web Applications with nextjs, React, Typescript, graphQL, Hasura,
      tailwindCSS, Google Cloud and react-query (and sometimes Ethereum).
    </Text>
  </>
);

const Projects = () => (
  <>
    <ProjectCard
      title="kodeart"
      description="A platform developed to enable and empower developers"
      href="https://kode.art"
      icon="react2025"
    />
    <ProjectCard
      title="brightgrape"
      description="A product that finds the best wine for you for the store you in"
      href="https://brightgrape.com"
      icon="nextjs"
    />
    <ProjectCard
      title="blockexpo"
      description="A blockexplorer for the Ethereum blockchain"
      href="https://blockexpo.io"
      icon="jamstackfns"
    />
  </>
);

export default Index;
