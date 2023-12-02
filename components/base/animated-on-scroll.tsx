import { AnimatedOnScrollStack } from "@fvastu/animated-on-scroll-stack";
import { FC } from "react";

type AnimatedOnScrollProps = {
  children?: React.ReactNode;
  className?: string;
};

export const AnimatedOnScroll: FC<AnimatedOnScrollProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <AnimatedOnScrollStack
      direction={"row"}
      origin="bottom"
      interval={500}
      delay={200}
      className={className}
      {...rest}
    >
      {children}
    </AnimatedOnScrollStack>
  );
};
