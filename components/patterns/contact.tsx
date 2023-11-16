import { Text, VStack } from "@chakra-ui/react";
import Button from "../base/button";

export const Contact = () => {
  return (
    <section id="#contact">
      <VStack w={"6xl"}>
        <VStack spacing={5}>
          <Text fontSize={"4xl"}>Still have questions?</Text>
          <Text marginBottom={10} fontWeight={"regular"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Button>Contact</Button>
        </VStack>
      </VStack>
    </section>
  );
};
