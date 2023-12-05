import { Text, VStack } from "@chakra-ui/react";
import { AnimatedOnScroll } from "../base/animated-on-scroll";
import { Button } from "../base/button";

export const Contact = () => {
  return (
    <VStack id="contact" as="section" w="full" maxW={"6xl"}>
      <AnimatedOnScroll alignItems={"center"} textAlign={"center"} spacing={4}>
        <Text fontSize={"4xl"}>Still have questions?</Text>
        <Text
          textAlign={"center"}
          marginBottom={10}
          fontWeight={"regular"}
          fontSize={"lg"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Button>Contact</Button>
      </AnimatedOnScroll>
    </VStack>
  );
};
