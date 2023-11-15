"use client";
import {
  Box,
  HStack,
  IconButton,
  Input,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiMailSend } from "react-icons/bi";

const Menus = [
  {
    label: "App",
    links: [
      {
        label: "Home",
        href: "",
        icon: null,
      },
      {
        label: "Feature",
        href: "",
        icon: null,
      },
      {
        label: "Pricing",
        href: "",
        icon: null,
      },
      {
        label: "Testimonial",
        href: "",
        icon: null,
      },
      {
        label: "FAQ",
        href: "",
        icon: null,
      },
    ],
  },
  {
    label: "Information",
    links: [
      {
        label: "",
        href: "",
        icon: null,
      },
      {
        label: "",
        href: "",
        icon: null,
      },
      {
        label: "",
        href: "",
        icon: null,
      },
    ],
  },
  {
    label: "Follow us",
    links: [
      {
        label: "",
        href: "",
        icon: null,
      },
      {
        label: "",
        href: "",
        icon: null,
      },
      {
        label: "",
        href: "",
        icon: null,
      },
    ],
  },
];

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <section>
      <HStack w={"6xl"} spacing={20}>
        <VStack w="50%">
          <Text>
            Join our newsletter to stay up to date on features and releases.
          </Text>
          <HStack>
            <Input
              placeholder={"Enter your email"}
              bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
              border={1}
              _focus={{
                bg: "whiteAlpha.300",
              }}
            />
            <IconButton
              bg={useColorModeValue("green.400", "green.800")}
              color={useColorModeValue("white", "gray.800")}
              _hover={{
                bg: "green.600",
              }}
              aria-label="Subscribe"
              icon={<BiMailSend />}
            />
          </HStack>
          <Text fontSize={"md"}>
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </Text>
        </VStack>
        <SimpleGrid
          w={"50%"}
          justifyContent={"center"}
          background={"red"}
          columns={3}
        >
          <Stack align={"flex-start"}>
            <ListHeader>Follow us</ListHeader>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Box as="a" href={"#"}>
                About us
              </Box>
              <Box as="a" href={"#"}>
                Blog
              </Box>
              <Box as="a" href={"#"}>
                Contact us
              </Box>
              <Box as="a" href={"#"}>
                Pricing
              </Box>
              <Box as="a" href={"#"}>
                Testimonials
              </Box>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"#"}>
              About us
            </Box>
            <Box as="a" href={"#"}>
              Blog
            </Box>
            <Box as="a" href={"#"}>
              Contact us
            </Box>
            <Box as="a" href={"#"}>
              Pricing
            </Box>
            <Box as="a" href={"#"}>
              Testimonials
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={"#"}>
              Help Center
            </Box>
            <Box as="a" href={"#"}>
              Terms of Service
            </Box>
            <Box as="a" href={"#"}>
              Legal
            </Box>
            <Box as="a" href={"#"}>
              Privacy Policy
            </Box>
            <Box as="a" href={"#"}>
              Satus
            </Box>
          </Stack>
        </SimpleGrid>
      </HStack>
    </section>
  );
}
