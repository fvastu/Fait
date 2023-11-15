import { Button, Text, VStack } from "@chakra-ui/react";

export const Contact = () => {
  return (
    <section>
      <VStack w={"6xl"}>
        <VStack spacing={5}>
          <Text fontSize={"4xl"}>Still have questions?</Text>
          <Text marginBottom={10} fontWeight={"regular"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Button backgroundColor={"accent"}>Contact</Button>
        </VStack>
      </VStack>
    </section>
  );
};
