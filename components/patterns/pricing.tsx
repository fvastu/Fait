import {
  Box,
  Button,
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
    description: "80% off | Popular",
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
    description: "or 216$ yearly",
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
          <Text fontWeight={"regular"} fontSize={"lg"}>
            Find the best plan that works for you
          </Text>
        </VStack>
        <HStack w="full" alignItems="stretch" textAlign="center" spacing={10}>
          {Cards.map((card, index) => (
            <Card key={card.id} isActive={index === 1}>
              <VStack w="full">
                <Box height="6rem">
                  <Text fontSize="xl">{card.name}</Text>
                  <Text fontSize="4xl" fontWeight="bold">
                    {card.price}
                  </Text>
                  <Text fontSize="sm">{card.description}</Text>
                </Box>
                <List height="15rem" paddingTop={35} spacing={2}>
                  {card.features.map((feature) => (
                    <ListItem key={feature}>
                      <ListIcon as={AiOutlineCheck} color="white" />
                      {feature}
                    </ListItem>
                  ))}
                </List>
                <Button w="full" height="3rem" backgroundColor="accent">
                  Get started
                </Button>
              </VStack>
            </Card>
          ))}
        </HStack>
      </VStack>
    </section>
  );
};
