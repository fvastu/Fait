"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  SlideFade,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { NAVIGATION_ITEMS } from "../../shared/constants";
import { NavigationItem } from "../../shared/navigation-item";
import { toRem } from "../../shared/utils";
import { Button } from "../base/button";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const filter = `blur(${isOpen ? toRem(20) : toRem(0)})`;
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
          <Link href="/">
            <Image alt="fait logo"
              minW={toRem(100)}
              w={toRem(100)}
              src="assets/logo.png"
            ></Image>
          </Link>
          <HStack
            w="full"
            justifyContent={"center"}
            as={"nav"}
            spacing={8}
            display={{ base: "none", md: "flex" }}
          >
            {NAVIGATION_ITEMS.map((link: NavigationItem) => (
              <Link key={link.label} href={link.href ?? ""}>
                {link.label}
              </Link>
            ))}
          </HStack>
        </HStack>
        <Flex style={{ filter }} alignItems={"center"}>
          <Button>Get Started</Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box
          position={"absolute"}
          top={20}
          left={0}
          w="full"
          h="full"
          display={{ md: "none" }}
        >
          <Box
            borderBottom={toRem(1)}
            borderColor={"grey"}
            backdropFilter="auto"
            backdropBlur={toRem(30)}
            h={toRem(500)}
            as={"nav"}
          >
            <SlideFade in={isOpen} offsetY={toRem(20)}>
              <VStack paddingX={8} spacing={8} alignItems={"start"}>
                {NAVIGATION_ITEMS.map((link: NavigationItem) => (
                  <Link key={link.label} href={link.href ?? ""}>
                    <Box
                      _hover={{
                        color: "accent",
                      }}
                      color={"white"}
                      fontSize={"xl"}
                    >
                      {link.label}
                    </Box>
                  </Link>
                ))}
              </VStack>
            </SlideFade>
          </Box>
        </Box>
      ) : null}
    </VStack>
  );
}
