"use client";

import {
  Button as ChakraButton,
  Flex,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { NAVIGATION_ITEMS } from "../../shared/constants";
import Button from "../base/button";

export const DesktopNavBar = () => {
  return (
    <Flex w="100%" px="6" py="5" align="center" justify="space-between">
      <Link as="a" w="100px">
        <Image src="assets/logo.png"></Image>
      </Link>
      <HStack as="nav" spacing="5">
        {NAVIGATION_ITEMS.map((item, i) => (
          <Link key={i}>
            <ChakraButton variant="nav"> {item.label} </ChakraButton>
          </Link>
        ))}
      </HStack>

      <HStack>
        <Button>Get Started</Button>
      </HStack>
    </Flex>
  );
};
