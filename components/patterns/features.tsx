import { Text, VStack } from "@chakra-ui/react"; // Make sure to replace '@chakra-ui/react' with the actual Chakra UI import path
import React, { forwardRef } from "react";
import { featureData } from "../../shared/__mock__/features-data";
import { AnimatedOnScroll } from "../base/animated-on-scroll";
import { Card } from "../base/card";

type FeatureCardProps = typeof featureData[0];

const FeatureCard = forwardRef<
  HTMLDivElement,
  FeatureCardProps
>(({ icon, title, content, ...rest }, ref) => (
  <Card ref={ref} key={title} {...rest}>
    <VStack textAlign={"center"} height="full" minH="full">
      {icon}
      <Text fontSize="2xl">{title}</Text>
      <Text fontWeight="regular" fontSize="sm">
        {content}
      </Text>
    </VStack>
  </Card>
));

export const Features = () => (
  <VStack
    id="features"
    as="section"
    alignItems={"center"}
    justifyContent={"center"}
    spacing={16}
    w="full"
    maxW={"6xl"}
  >
    <Text alignSelf={{ base: "start", md: "center" }} fontSize="4xl">
      Fitness Made Simple
    </Text>
    <AnimatedOnScroll spacing={8} direction={{ base: "column", md: "row" }}>
      {featureData.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </AnimatedOnScroll>
  </VStack>
);
