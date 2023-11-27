import {
  Box,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import Button from "../base/button";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <VStack as="section" marginBottom={20} spacing={10}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        w="full"
        maxW={"6xl"}
        alignItems={"start"}
        spacing={20}
      >
        <VStack w={{ base: "full", lg: "50%" }} spacing={5}>
          <Text fontWeight={"regular"} w="full">
            Join our newsletter to stay up to date on features and releases.
          </Text>
          <HStack w="full">
            <Input
              w="full"
              placeholder={"Enter your email"}
              border={1}
              borderStyle="solid"
              _focus={{
                bg: "whiteAlpha.300",
              }}
            />
            <Button>Subscribe</Button>
          </HStack>
          <Text fontWeight={"regular"} fontSize={"2xs"}>
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </Text>
        </VStack>
        <SimpleGrid
          w={{ base: "full", lg: "50%" }}
          justifyContent={"center"}
          columns={3}
        >
          <Stack align={"flex-start"}>
            <ListHeader>Follow us</ListHeader>
            <Stack align={"flex-start"}>
              <Box as="a" href={"#about"}>
                About us
              </Box>
              <Box as="a" href={"#blog"}>
                Blog
              </Box>
              <Box as="a" href={"#contact"}>
                Contact us
              </Box>
              <Box as="a" href={"#pricing"}>
                Pricing
              </Box>
              <Box as="a" href={"#testimonials"}>
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
      </Stack>
      <Text>© Fait. All rights reserved.</Text>
    </VStack>
  );
}
