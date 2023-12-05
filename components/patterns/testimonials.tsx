import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { forwardRef } from "react";
import { AnimatedOnScroll } from "../base/animated-on-scroll";
import { StarIcon } from "../base/assets-wrapper";
import { Card } from "../base/card";

type TestimonialData = {
  id: number;
  name: string;
  stars: number;
  description: string;
  image: string;
};

const testimonialsData = [
  {
    id: 0,
    name: "Whitney Emilia",
    stars: 5,
    description:
      "I had a great experience with Fait Today. The instructors were knowledgeable, and the variety of workouts kept me engaged. The facility is clean and well-maintained. I highly recommend it to anyone looking for a fitness program.",
    image: "avatar1.jpg",
  },
  {
    id: 1,
    name: "Lucy Addison",
    stars: 5,
    description:
      "Fait Today is fantastic! The trainers are friendly, and the classes are diverse and challenging. The atmosphere is welcoming, and I always leave feeling accomplished. It's the perfect place to achieve your fitness goals.",
    image: "avatar2.jpg",
  },
  {
    id: 2,
    name: "Jacob Watson",
    stars: 5,
    description:
      "I've been a member of Fait Today for a year now, and it has transformed my fitness journey. The personalized meal plans and motivating instructors make every workout enjoyable. The community here is supportive and encouraging.",
    image: "avatar3.jpg",
  },
];

type TestimonialCardProps = {
  card: TestimonialData;
};

const TestimonialCard: React.FC<TestimonialCardProps> = forwardRef<
  HTMLDivElement,
  TestimonialCardProps
>(({ card }, ref) => (
  <Card ref={ref} key={card.id}>
    <VStack textAlign="left" w="full" spacing={4}>
      <HStack w="full" spacing={0} alignContent="start">
        {Array(card.stars)
          .fill(0)
          .map((_, index) => (
            <StarIcon height="15px" key={index} />
          ))}
      </HStack>
      <Text fontWeight="medium">{card.description}</Text>
      <HStack spacing={4} w="full">
        <Image
          w="40px"
          rounded="full"
          src={`assets/images/${card.image}`}
          alt={card.name}
        />
        <Text>{card.name}</Text>
      </HStack>
    </VStack>
  </Card>
));

export const Testimonials: React.FC = () => (
  <VStack id="testimonials" as="section" spacing={16} w="full" maxW={"6xl"}>
    <VStack>
      <Text fontSize="4xl">Customer testimonials</Text>
      <Text textAlign="center" fontWeight="regular" fontSize="lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </VStack>
    <AnimatedOnScroll
      direction={{ base: "column", lg: "row" }}
      w="full"
      alignItems="stretch"
      textAlign="center"
      spacing={8}
    >
      {testimonialsData.map((card) => (
        <TestimonialCard key={card.id} card={card} />
      ))}
    </AnimatedOnScroll>
  </VStack>
);
