"use client";

import { Button, Center, HStack, Text, VStack } from "@chakra-ui/react";
import {
  HeroImage,
  HorizontalPattern,
  ShapePattern,
} from "../base/assets-wrapper";

export default function Hero() {
  return (
    <section>
      <HStack paddingTop={100}>
        <VStack w={"60%"}>
          <VStack
            spacing={-6}
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
            Fait is one of the top fitness apps for iPhone, Android, or web
            users. Our workout plans are designed to help you reach your fitness
            goals faster and simpler. Take control of their health — anytime,
            anywhere, any age, any fitness level.
          </Text>
          <HStack alignItems={"start"} w="full">
            <Button backgroundColor={"accent"}>Install</Button>
            <Button backgroundColor={"accent"}>Try</Button>
          </HStack>
        </VStack>
        <Center w={"50%"} position={"relative"}>
          <HeroImage boxSize="32vh" objectFit="cover" h={"full"}></HeroImage>
          <HorizontalPattern
            right={0}
            top={0}
            position={"absolute"}
            height="12vh"
            zIndex={"hide"}
            objectFit={"cover"}
          />
          <HorizontalPattern
            left={0}
            bottom={0}
            position={"absolute"}
            height="12vh"
            zIndex={"hide"}
            objectFit={"cover"}
          />
          <ShapePattern
            left={200}
            bottom={-400}
            position={"absolute"}
            height="150%"
            zIndex={"hide"}
            objectFit={"cover"}
          />
        </Center>
      </HStack>
    </section>
  );
}
