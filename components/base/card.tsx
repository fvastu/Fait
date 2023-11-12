import { Card as ChakraCard } from "@chakra-ui/react";

export function Card({ children, isActive = false }: any) {
  const gradient = isActive
    ? "bg-gradient-to-r from-blue-500 via-blue-900 to-black"
    : "bg-gradient-to-r from-gray-800 to-black";
  return (
    <ChakraCard
      width="100%"
      padding="2rem 1rem"
      flexDirection="column"
      alignItems="center"
      borderStyle="solid"
      borderWidth="1px"
      borderColor="#333"
      color="white"
      borderRadius="10px"
      className={gradient}
    >
      {children}
    </ChakraCard>
  );
}
