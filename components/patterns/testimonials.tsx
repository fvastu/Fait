import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { StarIcon } from "../base/assets-wrapper";
import { Card } from "../base/card";

const Cards = [
  {
    id: 0,
    name: "Whitney Emilia",
    stars: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "avatar1.jpg",
  },
  {
    id: 0,
    name: "Lucy Addison",
    stars: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "avatar2.jpg",
  },
  {
    id: 0,
    name: "Jacob Watson",
    stars: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "avatar3.jpg",
  },
];

export const Testimonials = () => {
  return (
    <section>
      <VStack spacing={20} w={"6xl"}>
        <VStack>
          <Text fontSize={"4xl"}>Customer testimonials</Text>
          <Text fontWeight={"regular"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </VStack>
        <HStack w="full" alignItems="stretch" textAlign="center" spacing={5}>
          {Cards.map((card) => (
            <Card key={card.id}>
              <VStack textAlign={"left"} w="full" spacing={5}>
                <HStack w="full" spacing={0} alignContent={"start"}>
                  {new Array(card.stars).fill(0).map((_, index) => {
                    return <StarIcon height={"15px"} key={index} />;
                  })}
                </HStack>
                <Text fontWeight={"medium"}>"{card.description}"</Text>
                <HStack spacing={4} w="full">
                  <Image
                    w="40px"
                    rounded={"full"}
                    src={`assets/images/${card.image}`}
                    alt="Dan Abramov"
                  ></Image>
                  <Text>{card.name}</Text>
                </HStack>
              </VStack>
            </Card>
          ))}
        </HStack>
      </VStack>
    </section>
  );
};
