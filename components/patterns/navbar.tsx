"use client";

import {
  Box,
  Button as ChakraButton,
  Collapse,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { NAVIGATION_ITEMS } from "../../shared/constants";
import { NavigationItem } from "../../shared/navigation-item";
import Button from "../base/button";

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
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
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      {NAVIGATION_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavigationItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text>{label}</Text>
        {children && (
          <Icon
            as={MdSearch}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
