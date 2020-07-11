import React from 'react';
import { Flex, Link, IconButton } from '@chakra-ui/core';

const Footer = () => (
  <Flex justify="center" mb={4}>
    <Link href="https://twitter.com/elrypto" title="Twitter" isExternal>
      <IconButton
        aria-label="Twitter"
        icon="twitter"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
    <Link href="https://github.com/lrypto" title="GitHub" isExternal>
      <IconButton
        aria-label="GitHub"
        icon="github"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>

    <Link
      href="https://www.youtube.com/channel/UC0CFiIg0jhtBRy_U0Rs4gpw"
      title="Email"
      isExternal
    >
      <IconButton
        aria-label="Email"
        icon="YouTube"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
    <Link href="mailto:elrypto@gmail.com" title="Email" isExternal>
      <IconButton
        aria-label="Email"
        icon="mail"
        size="lg"
        color="gray.500"
        variant="ghost"
      />
    </Link>
  </Flex>
);

export default Footer;
