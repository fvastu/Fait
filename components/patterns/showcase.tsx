import { Image, Stack, Text, VStack } from "@chakra-ui/react";
import { AnimatedOnScroll } from "../base/animated-on-scroll";
import { Button } from "../base/button";

const showcaseData = [
  {
    title: "Workout Plan that fits you",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    cta: "Get started",
    imagePosition: "right",
    image: "assets/images/screen1.png",
  },
  {
    title: "Monitor your daily progress",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    cta: "Get started",
    imagePosition: "left",
    image: "assets/images/screen2.png",
  },
];

type ShowcaseData = typeof showcaseData[0];

export const Showcase: React.FC = () => (
  <VStack as="section" maxW={"6xl"} w="full" spacing={{ base: 50, lg: 100 }}>
    {showcaseData.map((data: ShowcaseData) => {
      return (
        <Stack
          key={data.title}
          as="article"
          spacing={{ base: 100, lg: 50 }}
          justifyContent={"space-between"}
          textAlign={{ base: "center", md: "start" }}
          alignItems={{ base: "center", md: "start" }}
          direction={{ base: "column", md: "row" }}
          w="full"
          h="full"
        >
          <AnimatedOnScroll
            delay={0}
            order={data.imagePosition === "left" ? 1 : 0}
            w={{ base: "100%", lg: "50%" }}
            h="full"
            justifyContent={{ base: "center", md: "start" }}
            alignItems={{ base: "center", md: "start" }}
            spacing={8}
          >
            <Text fontSize={"5xl"}>{data.title}</Text>
            <Text fontWeight={"regular"}>{data.subtitle}</Text>
            <Button>{data.cta}</Button>
          </AnimatedOnScroll>
          <AnimatedOnScroll
            direction={"column"}
            order={data.imagePosition === "left" ? 0 : 1}
            h="full"
          >
            <Image
              maxH={"600px"}
              alt={"showcase"}
              h="full"
              src={data.image}
            ></Image>
            {/*
            <HorizontalPattern
              height={100}
              left={400}
              zIndex={-1}
              position={"absolute"}
            ></HorizontalPattern>
          <ShapePattern
            overflow={{ base: "hidden", lg: "visible" }}
            top={100}
            left={data.imagePosition === "left" ? -200 : 200}
            zIndex={-1}
            position={"absolute"}
          ></ShapePattern>
            <HorizontalPattern
              height={100}
              bottom={0}
              right={400}
              zIndex={-1}
              position={"absolute"}
            ></HorizontalPattern>
          */}
          </AnimatedOnScroll>
        </Stack>
      );
    })}
  </VStack>
);
