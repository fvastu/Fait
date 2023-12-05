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
        visibility={{ base: "hidden", md: "visible" }}
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
        visibility={{ base: "hidden", md: "visible" }}
      />
      <ShapePattern
        left={200}
        bottom={-200}
        position={"absolute"}
        objectFit={"cover"}
        zIndex={-1}
        visibility={{ base: "hidden", md: "visible" }}
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
