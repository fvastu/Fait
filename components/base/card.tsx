import {
  Card as ChakraCard,
  CardProps as ChakraCardProps,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { toRem } from "../../shared/utils";

export interface CardProps extends ChakraCardProps {
  children: React.ReactNode;
  isActive?: boolean;
}

const activeGradient = `bg-gradient-to-r from-[#3d7ab2] to-black`;
const notActiveGradient = "bg-gradient-to-r from-gray-800 to-black";

export const Card = forwardRef<HTMLElement, CardProps>(
  ({ children, isActive, ...rest }, ref) => {
    return (
      <ChakraCard
        as="div"
        width="full"
        padding="2rem 2rem"
        alignItems="center"
        borderStyle="solid"
        borderWidth={toRem(1)}
        borderColor="#333"
        color="white"
        borderRadius={toRem(10)}
        className={isActive ? activeGradient : notActiveGradient}
        ref={ref}
        {...rest}
      >
        {children}
      </ChakraCard>
    );
  }
);
