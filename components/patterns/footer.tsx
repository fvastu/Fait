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
import { AnimatedOnScroll } from "../base/animated-on-scroll";
import { Button } from "../base/button";
import { followUsLinks, companyLinks, supportLinks } from "../../shared/__mock__/footer-data";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <VStack id="footer" as="section" marginBottom={16} spacing={8}>
      <AnimatedOnScroll
        direction={{ base: "column", lg: "row" }}
        w="full"
        maxW={"6xl"}
        alignItems={"start"}
        spacing={16}
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
              {followUsLinks.map(({ href, text }) => (
                <Box as="a" key={text} href={href}>
                  {text}
                </Box>
              ))}
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            {companyLinks.map(({ href, text }) => (
              <Box as="a" key={text} href={href}>
                {text}
              </Box>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            {supportLinks.map(({ href, text }) => (
              <Box as="a" key={text} href={href}>
                {text}
              </Box>
            ))}
          </Stack>
        </SimpleGrid>
      </AnimatedOnScroll>
      <Text>© Fait. All rights reserved.</Text>
    </VStack>
  );
}
