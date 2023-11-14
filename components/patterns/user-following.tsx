import { Text, VStack } from "@chakra-ui/react";

export const UserFollowing = () => {
  return (
    <section>
      <VStack>
        <Text textAlign={"center"} fontSize={"5xl"}>
          Trusted by
          <Text fontWeight={"regular"} as="span" color="accent">
            {" Millions "}
          </Text>
          of User <br />
          around the World
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </Text>
      </VStack>
    </section>
  );
};
