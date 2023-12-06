import { Box } from "@chakra-ui/react";
import {
  HeroImage,
  HorizontalPattern,
  ShapePattern,
} from "../base/assets-wrapper";

export const HeroFullImage = () => {
  return (
    <Box h="full" zIndex={0} position={"relative"}>
      <HorizontalPattern
        display={{ base: "none", lg: "block" }}
        right={100}
        top={0}
        position={"absolute"}
        height="12vh"
        objectFit={"cover"}
        zIndex={-1}
      />
      <HorizontalPattern
        left={100}
        bottom={0}
        position={"absolute"}
        height="12vh"
        objectFit={"cover"}
        zIndex={-1}
        display={{ base: "none", lg: "block" }}
      />
      <ShapePattern
        left={200}
        bottom={-200}
        position={"absolute"}
        objectFit={"cover"}
        zIndex={-1}
        display={{ base: "none", lg: "block" }}
      />
      <HeroImage
        boxSize={{ base: 900, lg: 700 }}
        objectFit="contain"
        h="full"
        zIndex={1}
      ></HeroImage>
    </Box>
  );
};
