import { ChakraProps, Image } from "@chakra-ui/react";

export function HeroImage(props: ChakraProps) {
  return (
    <Image
      alt="hero image"
      {...props}
      src="assets/images/hero-image.png"
    ></Image>
  );
}

export function HorizontalPattern(props: ChakraProps) {
  return (
    <Image
      alt="horizontal pattern"
      {...props}
      src="assets/images/pattern-horizontal.png"
    ></Image>
  );
}

export function ShapePattern(props: ChakraProps) {
  return (
    <Image
      alt="shape pattern"
      {...props}
      src="assets/images/bg-pattern.png"
    ></Image>
  );
}

export function CompanyLogo(props: ChakraProps) {
  return (
    <Image
      alt="company logo"
      {...props}
      src="assets/images/company.png"
    ></Image>
  );
}

export function HealthIcon(props: ChakraProps) {
  return (
    <Image alt="health icon" {...props} src="assets/icons/health.png"></Image>
  );
}

export function ProgressIcon(props: ChakraProps) {
  return (
    <Image
      alt="progress icon"
      {...props}
      src="assets/icons/progress.png"
    ></Image>
  );
}

export function WeightIcon(props: ChakraProps) {
  return (
    <Image alt="weight icon" {...props} src="assets/icons/weight.png"></Image>
  );
}

export function StarIcon(props: ChakraProps) {
  return <Image alt="star icon" {...props} src="assets/icons/star.png"></Image>;
}

export function GooglePlayStore(props: ChakraProps) {
  return (
    <Image
      alt="google play store"
      {...props}
      src="assets/images/googlePlayStore.png"
    ></Image>
  );
}

export function AppleAppStore(props: ChakraProps) {
  return (
    <Image
      alt="apple app store"
      {...props}
      src="assets/images/appleAppStore.png"
    ></Image>
  );
}
