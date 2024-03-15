import { ComponentProps, ReactNode } from "react";

export type CustomComponentProps2 = ComponentProps<"button">;

export type CustomButtonProps2 = {
  children: ReactNode;
} & CustomComponentProps2;
