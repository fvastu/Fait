import { Card as ChakraCard } from "@chakra-ui/react";
import { readColorFromTheme } from "../../shared/read-from-theme";

export function Card({ children, isActive = false }: any) {
  const accentColor = readColorFromTheme("accent").default;
  const gradient = isActive
    ? `bg-gradient-to-r from-[${accentColor}] to-black`
    : "bg-gradient-to-r from-gray-800 to-black";
  return (
    <ChakraCard
      width="100%"
      padding="2rem 2rem"
      flexDirection="column"
      alignItems="center"
      borderStyle="solid"
      borderWidth="1px"
      borderColor="#333"
      color="white"
      height={"100%"}
      borderRadius="10px"
      className={gradient}
    >
      {children}
    </ChakraCard>
  );
}
