import { Stack, VStack } from "@chakra-ui/react";

export function Layout({ children }: any) {
  return (
    <Stack w="full" alignItems={"center"} justifyContent={"center"}>
      <VStack w="full" spacing={40}>
        {children}
      </VStack>
    </Stack>
  );
}
