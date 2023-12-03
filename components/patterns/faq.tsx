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
import { AnimatedOnScroll } from "../base/animated-on-scroll";

interface FaqItemProps {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  description: string;
  faqItems: FaqItemProps[];
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
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

const FaqSection: React.FC<FaqSectionProps> = ({
  title,
  description,
  faqItems,
}) => {
  return (
    <AnimatedOnScroll w="full" as="section" spacing={16} maxW={"2xl"}>
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

const Faq: React.FC = () => {
  const faqItems: FaqItemProps[] = [
    {
      question: "How to download the app",
      answer:
        "To download the app, visit the App Store or Google Play Store on your mobile device and search for our app. Click on the 'Download' button and follow the on-screen instructions to install the app.",
    },
    {
      question: "How do I connect to Smart Watch?",
      answer:
        "To connect your Smart Watch, go to the app's settings, select 'Device Connection,' and follow the prompts to pair your Smart Watch with the app. Make sure Bluetooth is enabled on both your mobile device and Smart Watch.",
    },
    {
      question: "What’s the difference with Free and Annual Plan",
      answer:
        "The Free Plan provides basic access to the app's features, while the Annual Plan offers premium features, ad-free experience, and additional content. Upgrade to the Annual Plan for a more enhanced and enjoyable experience.",
    },
    {
      question: "Can I cancel the Fait Subscription",
      answer:
        "Yes, you can cancel your Fait subscription at any time. Visit your account settings, go to the 'Subscription' section, and follow the cancellation instructions. Keep in mind that canceling your subscription will result in the loss of premium features.",
    },
    {
      question: "How do I see new classes being added in Fait App?",
      answer:
        "Stay updated on new classes by regularly checking the app's 'New Classes' section. You'll find the latest additions to our fitness classes, and you can explore and join them to diversify your workout routine.",
    },
  ];

  return (
    <FaqSection
      title="Top FAQs"
      description="Explore our frequently asked questions to find answers to common queries about our app and services."
      faqItems={faqItems}
    />
  );
};

export default Faq;
