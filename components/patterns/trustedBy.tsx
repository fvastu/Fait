import { HStack, Text, VStack } from "@chakra-ui/react";
import { CompanyLogo } from "../base/assets-wrapper";

export const TrustedBy = () => {
  return (
    <section>
      <VStack w={"6xl"}>
        <Text fontSize={"xl"}>Trusted By</Text>
        <HStack
          spacing="2rem"
          justify="center"
          align="center"
          wrap="wrap"
          gridColumnGap="2rem"
          gridRowGap="2rem"
          gridTemplateRows="auto"
        >
          <CompanyLogo w="200px"></CompanyLogo>
          <CompanyLogo w="200px"></CompanyLogo>
          <CompanyLogo w="200px"></CompanyLogo>
          <CompanyLogo w="200px"></CompanyLogo>
          <CompanyLogo w="200px"></CompanyLogo>
          <CompanyLogo w="200px"></CompanyLogo>
          <CompanyLogo w="200px"></CompanyLogo>
        </HStack>
      </VStack>
    </section>
  );
};
