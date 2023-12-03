import { Box, Text, VStack } from "@chakra-ui/react";
import { AnimatedOnScroll } from "../base/animated-on-scroll";
import { CompanyLogo } from "../base/assets-wrapper";

const logosData = Array(9).fill({ width: { base: "10rem", lg: "12rem" } });

export const TrustedBy = () => {
  return (
    <VStack as="section" w="full" maxW="6xl" spacing={8}>
      <Text fontSize="4xl">Trusted By</Text>
      <AnimatedOnScroll>
        <Box
          flexWrap="wrap"
          display={{ base: "grid", lg: "flex" }}
          gridTemplateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr" }}
          gridColumnGap={{ base: "4rem", md: "2rem" }}
          gridRowGap="2rem"
          gridTemplateRows="auto"
        >
          {logosData.map((logo, index) => (
            <CompanyLogo key={index} w={logo.width}></CompanyLogo>
          ))}
        </Box>
      </AnimatedOnScroll>
    </VStack>
  );
};
