import { Stack, Text, VStack } from "@chakra-ui/react";
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

const FeatureCard: React.FC<FeatureData> = ({ icon, title, content }) => (
  <Card key={title}>
    <VStack height="100%" minH={"100%"}>
      {icon}
      <Text fontSize="2xl">{title}</Text>
      <Text fontWeight="regular" fontSize="sm">
        {content}
      </Text>
    </VStack>
  </Card>
);

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
    <Stack
      direction={{ base: "column", md: "row" }}
      w="full"
      textAlign="center"
      spacing={10}
    >
      {featureData.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </Stack>
  </VStack>
);
