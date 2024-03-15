import { ComponentProps, ReactNode } from "react";

export type CustomComponentProps = ComponentProps<"button">;

export type CustomButtonProps = {
  children: ReactNode;
} & CustomComponentProps;
