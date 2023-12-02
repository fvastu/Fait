import { Text, VStack } from "@chakra-ui/react"; // Make sure to replace '@chakra-ui/react' with the actual Chakra UI import path
import React, { forwardRef } from "react";
import { AnimatedOnScroll } from "../base/animated-on-scroll";
import { HealthIcon, ProgressIcon, WeightIcon } from "../base/assets-wrapper";
import { Card } from "../base/card";

const featureData = [
  {
    icon: <ProgressIcon />,
    title: "Personalized Progress Tracking",
    content:
      "Track your fitness journey with our advanced progress monitoring tools. Set goals, measure achievements, and stay motivated on your path to a healthier lifestyle.",
  },
  {
    icon: <WeightIcon />,
    title: "Premium Workout Gear",
    content:
      "Elevate your workouts with our high-quality and comfortable workout gear. From breathable activewear to durable accessories, we provide everything you need for a stylish and effective exercise routine.",
  },
  {
    icon: <HealthIcon />,
    title: "Tailored Custom Meal Plans",
    content:
      "Achieve your nutritional goals with our customized meal plans. Our experts design plans that fit your dietary preferences, ensuring a well-balanced and delicious approach to fueling your body.",
  },
];

type FeatureData = typeof featureData[0];

type FeatureCardProps = FeatureData;

const FeatureCard: React.FC<FeatureCardProps> = forwardRef<
  HTMLDivElement,
  FeatureCardProps
>(({ icon, title, content, ...rest }, ref) => (
  <Card ref={ref} key={title} {...rest}>
    <VStack height="full" minH="full">
      {icon}
      <Text fontSize="2xl">{title}</Text>
      <Text fontWeight="regular" fontSize="sm">
        {content}
      </Text>
    </VStack>
  </Card>
));

export const Features: React.FC = () => (
  <VStack
    as="section"
    alignItems={"center"}
    justifyContent={"center"}
    spacing={20}
    w="full"
    maxW={"6xl"}
  >
    <Text alignSelf="start" fontSize="4xl">
      Fitness Made Simple
    </Text>
    <AnimatedOnScroll className="flex flex-column gap-10">
      {featureData.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </AnimatedOnScroll>
  </VStack>
);
