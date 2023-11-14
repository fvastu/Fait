import { Button, HStack, Text, VStack } from "@chakra-ui/react";

export const DownloadFromStore = () => {
  return (
    <section>
      <VStack w={"2xl"}>
        <VStack textAlign={"center"}>
          <Text fontSize={"5xl"}>
            Take your Fitness to the Next Level with
            <Text fontWeight={"regular"} as="span" color="accent">
              {" Fait "}
            </Text>
          </Text>
          <Text marginBottom={10} fontWeight={"regular"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </Text>
          <HStack>
            <Button backgroundColor={"accent"}>Download on App Store</Button>
            <Button backgroundColor={"accent"}>Download on Google Play</Button>
          </HStack>
        </VStack>
      </VStack>
    </section>
  );
};
