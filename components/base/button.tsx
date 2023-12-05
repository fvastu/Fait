import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { ReactNode, forwardRef } from "react";
import { readColorFromTheme } from "../../shared/read-from-theme";

interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...rest }, ref) => {
    const accentColor = readColorFromTheme("accent").default;
    const opaqueColor = `${accentColor}80`;

    const buttonStyles = {
      width: "min-content",
      padding: "1.5rem 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      _hover: {
        bg: opaqueColor,
      },
      backgroundColor: accentColor,
      ...rest,
    };

    return (
      <ChakraButton ref={ref} {...buttonStyles}>
        {children}
      </ChakraButton>
    );
  }
);
