import {
  Box,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
  forwardRef,
} from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";
import { AnimatedOnScroll } from "../base/animated-on-scroll";
import { Button } from "../base/button";
import { Card } from "../base/card";

type CardData = {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
};

const CardsData: CardData[] = [
  {
    id: 0,
    name: "Basic Plan",
    price: "Free",
    description: "Start with Fait Today",
    features: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
  },
  {
    id: 1,
    name: "Annual Plan",
    price: "$159/yr",
    description: "80% off | Popular",
    features: Array(4).fill("consectetur adipiscing elit"),
  },
  {
    id: 2,
    name: "Monthly Plan",
    price: "$18/mo",
    description: "or 216$ yearly",
    features: Array(5).fill("Lorem ipsum dolor"),
  },
];

const PricingCard = forwardRef(({ card, isActive, ...rest }, ref) => (
  <Card ref={ref} key={card.id} isActive={isActive} {...rest}>
    <VStack w="full">
      <Box height="6rem">
        <Text fontSize="xl">{card.name}</Text>
        <Text fontSize="4xl" fontWeight="bold">
          {card.price}
        </Text>
        <Text fontSize="sm">{card.description}</Text>
      </Box>
      <List height="15rem" spacing={4}>
        {card.features.map((feature: any, index: number) => (
          <ListItem key={index}>
            <ListIcon as={AiOutlineCheck} color="white" />
            {feature}
          </ListItem>
        ))}
      </List>
      <Button w="full">Get started</Button>
    </VStack>
  </Card>
));

export const Pricing = () => {
  return (
    <VStack as="section" spacing={16} w="full" maxW={"6xl"}>
      <VStack>
        <Text fontSize={"4xl"}>Pricing plan</Text>
        <Text fontWeight={"regular"} fontSize={"lg"}>
          Find the best plan that works for you
        </Text>
      </VStack>
      <AnimatedOnScroll
        direction={{ base: "column", lg: "row" }}
        w="full"
        alignItems="stretch"
        textAlign="center"
        spacing={8}
      >
        {CardsData.map((card, index) => (
          <PricingCard key={card.id} card={card} isActive={index === 1} />
        ))}
      </AnimatedOnScroll>
    </VStack>
  );
};
