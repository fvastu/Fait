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

export function HealthIcon(props: ChakraProps) {
  return <Image {...props} src="assets/icons/health.png"></Image>;
}

export function ProgressIcon(props: ChakraProps) {
  return <Image {...props} src="assets/icons/progress.png"></Image>;
}

export function WeightIcon(props: ChakraProps) {
  return <Image {...props} src="assets/icons/weight.png"></Image>;
}
