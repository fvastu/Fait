import { Text } from "@chakra-ui/react";
import { AnimatedOnScroll } from "../base/animated-on-scroll";

export const UserFollowing = () => {
  return (
    <AnimatedOnScroll id="user-following" alignItems={"center"} as="section">
      <Text textAlign={"center"} fontSize={"5xl"}>
        Trusted by
        <Text fontWeight={"regular"} as="span" color="accent">
          {" Millions "}
        </Text>
        of User <br />
        around the World
      </Text>
      <Text align={{ base: "center", lg: "left" }} fontWeight={"regular"}>
        Transforming Lives Globally with Trusted Fitness Solutions
      </Text>
    </AnimatedOnScroll>
  );
};
