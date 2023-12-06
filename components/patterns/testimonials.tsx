import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { forwardRef } from "react";
import { testimonialsData } from "../../shared/__mock__/testimonials-data";
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
      {testimonialsData.map((card: TestimonialData) => (
        <TestimonialCard key={card.id} card={card} />
      ))}
    </AnimatedOnScroll>
  </VStack>
);
