import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
 
type Payload = {
  message: string
}
 
export const getStaticProps = (async () => {
  const res = await fetch('http://localhost:3000/api/hello', { method: "GET" })
  const payload = await res.json()
  return { props: { payload } }
}) satisfies GetStaticProps<{
  payload: Payload
}>
 

export default function Home({
  payload,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 6, md: 12 }}
        py={{ base: 10, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Use me as a <br />
          <Text as={"span"} color={"green.400"}>
            Template starter
          </Text>
        </Heading>
        <Text fontSize={{ base: "xl" }} color={"gray.500"}>
          With this template you can use out-of-the-box Chakra, Next.Js,
          tailwind, Husky, Eslint. Focus on the code and stop wasting time for
          your configurations.
        </Text>
        <Text fontSize={{ base: "xl" }}>{payload.message}</Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
            }}
          >
            I am ready to use this template
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
