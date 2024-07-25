import {
  AnimatedOnScrollStack,
  AnimatedOnScrollStackProps,
} from "@fvastu/animated-on-scroll-stack";
import { forwardRef } from "react";

const DEFAULT_DELAY = 200;
const DEFAULT_INTEVAL = 500;

type AnimatedOnScrollProps = {
  children?: React.ReactNode;
  className?: string;
} & Partial<AnimatedOnScrollStackProps>;

export const AnimatedOnScroll = forwardRef<
  HTMLDivElement,
  AnimatedOnScrollProps
>(({ children, className, interval, delay, ...rest }) => {
  return (
    <AnimatedOnScrollStack
      origin="bottom"
      delay={delay ?? DEFAULT_DELAY}
      className={className}
      interval={interval ?? DEFAULT_INTEVAL}
      {...rest}
    >
      {children}
    </AnimatedOnScrollStack>
  );
});
