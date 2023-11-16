import {
  BoxProps,
  ButtonProps,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { readColorFromTheme } from "../../shared/read-from-theme";

interface CustomButtonProps extends BoxProps {
  children: ReactNode;
  buttonProps?: ButtonProps;
}

export default function Button({ children, buttonProps }: CustomButtonProps) {
  const accentColor = readColorFromTheme("accent").default;

  const buttonStyles = {
    padding: "1.5rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    _hover: {
      bg: accentColor,
    },
    backgroundColor: "accent",
    ...buttonProps,
  };

  return <ChakraButton {...buttonStyles}>{children}</ChakraButton>;
}
