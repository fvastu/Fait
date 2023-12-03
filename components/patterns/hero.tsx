import { Center, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { HeroImage } from "../base/assets-wrapper";
import { StoreButton } from "../base/store-button";

export default function Hero() {
  return (
    <Stack
      h={{ base: 1200, lg: 800 }}
      as="section"
      direction={{ base: "column", lg: "row" }}
      paddingTop={100}
      spacing={{ base: 8, lg: 24 }}
    >
      <VStack
        spacing={8}
        paddingLeft={{ base: 8, lg: 160 }}
        paddingRight={{ base: 50, lg: 0 }}
        alignItems={"center"}
        w={{ base: "100%", lg: "50%" }}
      >
        <VStack
          alignItems={"start"}
          w={"100%"}
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
      <Center overflow={"hidden"} w={{ base: "100%", lg: "50%" }} h="full">
        <HeroImage
          boxSize={{ base: 900, lg: 700 }}
          objectFit="contain"
          h="full"
        ></HeroImage>
        {/* 
        <HorizontalPattern
          right={"20%"}
          top={0}
          position={"absolute"}
          height="12vh"
          zIndex={"hide"}
          objectFit={"cover"}
        />
        <HorizontalPattern
          left={"20%"}
          bottom={0}
          position={"absolute"}
          height="12vh"
          zIndex={"hide"}
          objectFit={"cover"}
        />
        <ShapePattern
          overflow={{ base: "hidden", lg: "visible" }}
          left={"40%"}
          top={"30%"}
          position={"absolute"}
          height="100%"
          zIndex={"hide"}
          objectFit={"cover"}
        />*/}
      </Center>
    </Stack>
  );
}
