import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faqItems } from "../../shared/__mock__/faq-data";
import { AnimatedOnScroll } from "../base/animated-on-scroll";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton padding={5}>
          <Box fontWeight={"bold"} as="span" flex="1" textAlign="left">
            {question}
          </Box>
          <AccordionIcon color={"accent"} />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{answer}</AccordionPanel>
    </AccordionItem>
  );
};

const Faq = () => {
  const title = "Top FAQs";
  const description =
    "Explore our frequently asked questions to find answers to common queries about our app and services.";

  return (
    <AnimatedOnScroll id="faq" w="full" as="section" spacing={16} maxW={"2xl"}>
      <VStack textAlign={"center"}>
        <Text fontSize={"4xl"}>{title}</Text>
        <Text fontWeight={"regular"} fontSize={"lg"}>
          {description}
        </Text>
      </VStack>
      <Accordion w="full" allowToggle>
        {faqItems.map((item, index) => (
          <FaqItem key={index} {...item} />
        ))}
      </Accordion>
    </AnimatedOnScroll>
  );
};

export default Faq;
