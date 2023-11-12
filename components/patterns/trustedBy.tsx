import { Stack, Text, VStack } from "@chakra-ui/react";
import { CompanyLogo } from "../base/assets-wrapper";

export const TrustedBy = () => {
  return (
    <section>
      <VStack w={"6xl"}>
        <Text fontSize={"xl"}>Trusted By</Text>
        <Stack
          direction="row"
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
        </Stack>
      </VStack>
    </section>
  );
};
