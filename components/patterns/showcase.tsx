import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { HorizontalPattern, ShapePattern } from "../base/assets-wrapper";
import Button from "../base/button";

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
  <section>
    <VStack w={"6xl"} spacing={100}>
      {showcaseData.map((data: ShowcaseData) => {
        return (
          <article key={data.title}>
            <HStack height={"550px"} minH={"550px"} w="full">
              <VStack
                order={data.imagePosition === "left" ? 1 : 0}
                w="50%"
                h="full"
                justifyContent={"center"}
                alignItems={"start"}
                spacing={5}
              >
                <Text fontSize={"5xl"}>{data.title}</Text>
                <Text fontWeight={"regular"}>{data.subtitle}</Text>
                <Button>{data.cta}</Button>
              </VStack>
              <VStack
                order={data.imagePosition === "left" ? 0 : 1}
                position={"relative"}
                w="50%"
                h="full"
              >
                <Image h="full" src={data.image}></Image>
                <HorizontalPattern
                  height={100}
                  left={350}
                  zIndex={-1}
                  position={"absolute"}
                ></HorizontalPattern>
                <ShapePattern
                  top={100}
                  left={data.imagePosition === "left" ? -200 : 200}
                  zIndex={-1}
                  position={"absolute"}
                ></ShapePattern>
                <HorizontalPattern
                  height={100}
                  bottom={0}
                  right={350}
                  zIndex={-1}
                  position={"absolute"}
                ></HorizontalPattern>
              </VStack>
            </HStack>
          </article>
        );
      })}
    </VStack>
  </section>
);
