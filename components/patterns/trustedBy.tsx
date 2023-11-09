import { Center, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { CompanyLogo } from "../base/assets-wrapper";

export const TrustedBy = () => {
  return (
    <section>
      <VStack spacing={10}>
        <Text fontSize={"xl"}>Trusted By</Text>
        <Wrap spacing={10}>
          <WrapItem>
            <Center w="250px">
              <CompanyLogo w="full"></CompanyLogo>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="250px">
              <CompanyLogo w="full"></CompanyLogo>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="250px">
              <CompanyLogo w="full"></CompanyLogo>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="250px">
              <CompanyLogo w="full"></CompanyLogo>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center marginLeft={"20"} w="250px">
              <CompanyLogo w="full"></CompanyLogo>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="250px">
              <CompanyLogo w="full"></CompanyLogo>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="250px">
              <CompanyLogo w="full"></CompanyLogo>
            </Center>
          </WrapItem>
        </Wrap>
      </VStack>
    </section>
  );
};
