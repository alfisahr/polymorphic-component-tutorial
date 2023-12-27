import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type BoxProps<C extends ElementType> = {
  children: ReactNode;
  as?: C;
} & ComponentPropsWithoutRef<C>;

export const Box = <C extends ElementType>({
  children,
  as,
  ...rest
}: BoxProps<C>) => {
  const Component = as || "div";
  return <Component {...rest}>{children}</Component>;
};
