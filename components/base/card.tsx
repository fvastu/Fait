import { Card as ChakraCard } from "@chakra-ui/react";

export function Card({ children, isActive = false }: any) {
  const accentColor = "3d7ab2";
  const gradient = isActive
    ? `bg-gradient-to-r from-${accentColor} via-${accentColor} to-black`
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
