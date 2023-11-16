import { Card as ChakraCard } from "@chakra-ui/react";
import { readColorFromTheme } from "../../shared/read-from-theme";

interface CardProps {
  children: React.ReactNode;
  isActive?: boolean;
}

const accentColor = readColorFromTheme("accent").default;
const activeGradient = `bg-gradient-to-r from-[${accentColor}] to-black`;
const notActiveGradient = "bg-gradient-to-r from-gray-800 to-black";

export function Card({ children, isActive = false }: CardProps) {
  return (
    <ChakraCard
      as="article"
      width="100%"
      padding="2rem 2rem"
      flexDirection="column"
      alignItems="center"
      borderStyle="solid"
      borderWidth="1px"
      borderColor="#333"
      color="white"
      height="100%"
      borderRadius="10px"
      className={isActive ? activeGradient : notActiveGradient}
    >
      {children}
    </ChakraCard>
  );
}
