import { Box, Text, VStack } from "@chakra-ui/react";
import { CompanyLogo } from "../base/assets-wrapper";
import { AnimatedOnScroll } from "../base/animated-on-scroll";

export const TrustedBy = () => {
  return (
    <VStack as="section" w={"6xl"} spacing={6}>
      <Text fontSize={"xl"}>Trusted By</Text>
      <AnimatedOnScroll>
        <Box
          flexWrap={"wrap"}
          display={{ base: "grid", lg: "flex" }} // Use grid on small screens and flex on medium screens and larger
          gridTemplateColumns={{
            base: "1fr 1fr",
            md: "repeat(3, 1fr)",
          }}
          gridColumnGap={{
            base: "4rem",
            md: "2rem",
          }}
          gridRowGap="2rem"
          gridTemplateRows="auto"
        >
          <CompanyLogo w={{ base: "10rem", lg: "12rem" }}></CompanyLogo>
          <CompanyLogo w={{ base: "10rem", lg: "12rem" }}></CompanyLogo>
          <CompanyLogo w={{ base: "10rem", lg: "12rem" }}></CompanyLogo>
          <CompanyLogo w={{ base: "10rem", lg: "12rem" }}></CompanyLogo>
          <CompanyLogo w={{ base: "10rem", lg: "12rem" }}></CompanyLogo>
          <CompanyLogo w={{ base: "10rem", lg: "12rem" }}></CompanyLogo>
          <CompanyLogo w={{ base: "10rem", lg: "12rem" }}></CompanyLogo>
          <CompanyLogo w={{ base: "10rem", lg: "12rem" }}></CompanyLogo>
          <CompanyLogo w={{ base: "10rem", lg: "12rem" }}></CompanyLogo>
        </Box>
      </AnimatedOnScroll>
    </VStack>
  );
};
