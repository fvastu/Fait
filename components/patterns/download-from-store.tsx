import { HStack, Text, VStack } from "@chakra-ui/react";
import { StoreButton } from "../base/store-button";

export const DownloadFromStore = () => {
  return (
    <section>
      <VStack w={"2xl"}>
        <VStack textAlign={"center"} spacing={5}>
          <Text fontSize={"5xl"}>
            Take your Fitness to the Next Level with
            <Text fontWeight={"regular"} as="span" color="accent">
              {" Fait "}
            </Text>
          </Text>
          <Text marginBottom={10} fontWeight={"regular"} fontSize={"md"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </Text>
          <HStack>
            <StoreButton type="Apple" />
            <StoreButton type="Google" />
          </HStack>
        </VStack>
      </VStack>
    </section>
  );
};
