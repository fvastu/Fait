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
import { pricingCardsData } from "../../shared/__mock__/pricing-data";
import { toRem } from "../../shared/utils";
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

const PricingCard = forwardRef(({ card, isActive, ...rest }, ref) => (
  <Card ref={ref} key={card.id} isActive={isActive} {...rest}>
    <VStack h="full" w="full" position={"relative"}>
      <Box height="6rem">
        <Text fontSize="xl">{card.name}</Text>
        <Text fontSize="4xl" fontWeight="bold">
          {card.price}
        </Text>
        <Text fontSize="sm">{card.description}</Text>
      </Box>
      <List marginY={toRem(70)} spacing={4}>
        {card.features.map((feature: any, index: number) => (
          <ListItem key={index}>
            <ListIcon as={AiOutlineCheck} color="white" />
            {feature}
          </ListItem>
        ))}
      </List>
      <Button position={"absolute"} bottom={0} w="full">
        Get started
      </Button>
    </VStack>
  </Card>
));

export const Pricing = () => {
  return (
    <VStack id="pricing" as="section" spacing={16} w="full" maxW={"6xl"}>
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
        {pricingCardsData.map((card: CardData, index) => (
          <PricingCard key={card.id} card={card} isActive={index === 1} />
        ))}
      </AnimatedOnScroll>
    </VStack>
  );
};
