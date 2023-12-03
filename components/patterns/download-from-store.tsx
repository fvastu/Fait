import { HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { AnimatedOnScroll } from "../base/animated-on-scroll";
import { StoreButton } from "../base/store-button";

export const DownloadFromStore = () => {
  return (
    <Stack
      as="section"
      overflow={{ base: "hidden", lg: "visible" }}
      position={"relative"}
      w="full"
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/*
      <ShapePattern
        left={0}
        zIndex={-1}
        top="0"
        w="40%"
        overflow={"hidden"}
        position={"absolute"}
      ></ShapePattern>
      {/*
      <HorizontalPattern
        right={0}
        zIndex={-1}
        top="0"
        opacity={0.5}
        w="20%"
        position={"absolute"}
      ></HorizontalPattern>*/}
      <VStack w="full" maxW={"2xl"}>
        <AnimatedOnScroll
          alignItems={"center"}
          textAlign={"center"}
          spacing={4}
        >
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
        </AnimatedOnScroll>
      </VStack>
    </Stack>
  );
};
