import { Center, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { StoreButton } from "../base/store-button";
import { HeroFullImage } from "./hero-full-image";

export default function Hero() {
  return (
    <Stack
      id="hero"
      h={{ base: 1200, lg: 800 }}
      as="section"
      direction={{ base: "column", lg: "row" }}
      paddingTop={24}
      spacing={{ base: 8, lg: 24 }}
    >
      <VStack
        spacing={8}
        paddingLeft={{ base: 8, lg: 160 }}
        alignItems={"center"}
        w={{ base: "full", lg: "50%" }}
      >
        <VStack
          alignItems={"start"}
          w={"full"}
          fontWeight={"extrabold"}
          fontSize={"6xl"}
        >
          <Text>Workout Anytime.</Text>
          <Text>Anywhere with</Text>
          <Text color={"accent"} as="strong">
            Fait
          </Text>
        </VStack>
        <Text fontWeight={"thin"} fontSize={"l"}>
          Fait is one of the top fitness apps for iPhone, Android, or web users.
          Our workout plans are designed to help you reach your fitness goals
          faster and simpler. Take control of their health — anytime, anywhere,
          any age, any fitness level.
        </Text>
        <HStack alignItems={"start"} w="full">
          <StoreButton type="Apple" />
          <StoreButton type="Google" />
        </HStack>
      </VStack>
      <Center overflow={"hidden"} w={{ base: "full", lg: "50%" }} h="full">
        <HeroFullImage />
      </Center>
    </Stack>
  );
}
