import { Stack, VStack } from "@chakra-ui/react";

export function Layout({ children }: any) {
  // Destructure 'children' from props
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <VStack spacing={40} w={"6xl"}>
        {children}
      </VStack>
    </Stack>
  );
}