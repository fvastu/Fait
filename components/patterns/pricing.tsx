import {
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";
import { Card } from "../base/card";

const Cards = [
  {
    id: 0,
    name: "Basic Plan",
    price: "Free",
    description: "Start with StayFit Today",
    features: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
  },
  {
    id: 1,
    name: "Annual Plan",
    price: "$159/yr",
    description: "Start with StayFit Today",
    features: [
      "consectetur adipiscing elit",
      "consectetur adipiscing elit",
      "consectetur adipiscing elit",
      "consectetur adipiscing elit",
    ],
  },
  {
    id: 2,
    name: "Monthly Plan",
    price: "$18/mo",
    description: "Start with StayFit Today",
    features: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
  },
];

export const Pricing = () => {
  return (
    <section>
      <VStack spacing={20} w={"6xl"}>
        <VStack>
          <Text fontSize={"4xl"}>Pricing plan</Text>
          <Text fontSize={"lg"}>Find the best plan that works for you</Text>
        </VStack>
        <HStack w="full" alignItems={"stretch"} textAlign="center" spacing={10}>
          {Cards.map((card, index) => (
            <Card isActive={index === 1} key={card.id}>
              <VStack>
                <Text fontSize={"xl"}>{card.name}</Text>
                <Text fontSize={"4xl"} fontWeight={"bold"}>
                  {card.price}
                </Text>
                <Text fontSize={"lg"}>{card.description}</Text>
                <List spacing={3}>
                  {card.features.map((feature) => {
                    return (
                      <ListItem key={feature}>
                        <ListIcon as={AiOutlineCheck} color="white" />
                        {feature}
                      </ListItem>
                    );
                  })}
                </List>
              </VStack>
            </Card>
          ))}
        </HStack>
      </VStack>
    </section>
  );
};
