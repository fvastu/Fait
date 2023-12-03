import {
  AnimatedOnScrollStack,
  AnimatedOnScrollStackProps,
} from "@fvastu/animated-on-scroll-stack";
import { forwardRef } from "react";

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
      delay={delay ?? 200}
      className={className}
      interval={interval ?? 500}
      {...rest}
    >
      {children}
    </AnimatedOnScrollStack>
  );
});
