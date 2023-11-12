import { HStack, Text, VStack } from "@chakra-ui/react";
import { HealthIcon, ProgressIcon, WeightIcon } from "../base/assets-wrapper";
import { Card } from "../base/card";

const Cards = [
  {
    icon: <ProgressIcon />,
    title: "Monitor your progress",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    icon: <WeightIcon />,
    title: "Workout Gears",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
  {
    icon: <HealthIcon />,
    title: "Custom Meal Plan",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  },
];

export const Features = () => {
  return (
    <section>
      <VStack spacing={20} w={"6xl"}>
        <Text alignSelf={"start"} fontSize={"4xl"}>
          Fitness Made Simple
        </Text>
        <HStack textAlign="center" spacing={10}>
          {Cards.map((card) => (
            <Card key={card.title}>
              <VStack>
                {card.icon}
                <Text fontSize={"2xl"}>Monitor your progress</Text>
                <Text fontWeight={"regular"} fontSize={"sm"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </Text>
              </VStack>
            </Card>
          ))}
        </HStack>
      </VStack>
    </section>
  );
};
