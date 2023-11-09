import { ChakraProps, Image } from "@chakra-ui/react";

export function HeroImage(props: ChakraProps) {
  return <Image {...props} src="assets/images/hero-image.png"></Image>;
}

export function HorizontalPattern(props: ChakraProps) {
  return <Image {...props} src="assets/images/pattern-horizontal.png"></Image>;
}

export function ShapePattern(props: ChakraProps) {
  return <Image {...props} src="assets/images/bg-pattern.png"></Image>;
}

export function CompanyLogo(props: ChakraProps) {
  return <Image {...props} src="assets/images/company.png"></Image>;
}
