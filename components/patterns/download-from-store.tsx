import { HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { HorizontalPattern, ShapePattern } from "../base/assets-wrapper";
import { StoreButton } from "../base/store-button";

export const DownloadFromStore = () => {
  return (
    <section style={{ width: "100%" }}>
      <Stack
        position={"relative"}
        w="full"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ShapePattern
          left={0}
          zIndex={-1}
          top="0"
          w="40%"
          overflow={"hidden"}
          position={"absolute"}
        ></ShapePattern>
        <HorizontalPattern
          right={0}
          zIndex={-1}
          top="0"
          opacity={0.5}
          w="20%"
          position={"absolute"}
        ></HorizontalPattern>
        <VStack w={"2xl"}>
          <VStack textAlign={"center"} spacing={5}>
            <Text fontSize={"5xl"}>
              Take your Fitness to the Next Level with
              <Text fontWeight={"regular"} as="span" color="accent">
                {" Fait "}
              </Text>
            </Text>
            <Text marginBottom={10} fontWeight={"regular"} fontSize={"md"}>
              Transform your fitness journey with Fait, the ultimate workout
              companion. Download now for tailored plans, expert guidance, and a
              supportive community. Unlock a stronger, healthier you – your
              journey begins here!
            </Text>
            <HStack>
              <StoreButton type="Apple" />
              <StoreButton type="Google" />
            </HStack>
          </VStack>
        </VStack>
      </Stack>
    </section>
  );
};
