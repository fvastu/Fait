"use client";

import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  SlideFade,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { NAVIGATION_ITEMS } from "../../shared/constants";
import { NavigationItem } from "../../shared/navigation-item";
import Button from "../base/button";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack w="full" direction={"column"} justifyContent={"center"}>
      <Flex
        w="full"
        paddingX={{ base: 8, lg: 160 }}
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <IconButton
          paddingLeft={3.5}
          background={"transparent"}
          color={"accent"}
          size={"lg"}
          icon={isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          display={{ base: "none", md: "flex" }}
          w="full"
          spacing={8}
          alignItems={"center"}
        >
          <Link as="a" minW={"100px"} w="100px" href="/">
            <Image src="assets/logo.png"></Image>
          </Link>
          <HStack
            w="full"
            justifyContent={"center"}
            as={"nav"}
            spacing={8}
            display={{ base: "none", md: "flex" }}
          >
            {NAVIGATION_ITEMS.map((link: NavigationItem) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </HStack>
        </HStack>
        <Flex
          style={{ filter: `blur(${isOpen ? "20px" : "0px"})` }}
          alignItems={"center"}
        >
          <Button>Get Started</Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box
          position={"absolute"}
          top={20}
          left={0}
          w="100%"
          h="full"
          display={{ md: "none" }}
        >
          <Box
            borderBottom={"1px"}
            borderColor={"grey"}
            backdropFilter="auto"
            backdropBlur="30px"
            h="500px"
            as={"nav"}
          >
            <SlideFade in={isOpen} offsetY="20px">
              <VStack paddingX={10} spacing={8} alignItems={"start"}>
                {NAVIGATION_ITEMS.map((link: NavigationItem) => (
                  <Link
                    _hover={{
                      color: "accent",
                    }}
                    as="a"
                    color={"white"}
                    fontSize={"xl"}
                    key={link.label}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </VStack>
            </SlideFade>
          </Box>
        </Box>
      ) : null}
      <Divider
        margin={0}
        borderWidth={"0.5px"}
        opacity={0.15}
        orientation="horizontal"
      />
    </VStack>
  );
}
