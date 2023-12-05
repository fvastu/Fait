import { Text, VStack } from "@chakra-ui/react";

export const JoinNewsletter = () => {
  return (
    <VStack id="join-newsletter" as="section" w={"2xl"}>
      <VStack textAlign={"center"}>
        <Text fontSize={"xl"}>
          Join our newsletter to stay up to date on features and releases.
        </Text>
        <Text fontSize={"sm"}>
          By subscribing you agree to with our Privacy Policy and provide
          consent to receive updates from our company.
        </Text>
      </VStack>
    </VStack>
  );
};
