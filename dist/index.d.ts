import React, { ComponentProps, ReactNode } from 'react';

type CustomComponentProps = ComponentProps<"button">;
type CustomButtonProps = {
    children: ReactNode;
} & CustomComponentProps;

declare const NormalButton: React.FC<Partial<CustomButtonProps>>;

type CustomComponentProps2 = ComponentProps<"button">;
type CustomButtonProps2 = {
    children: ReactNode;
} & CustomComponentProps2;

declare const NormalButton2: React.FC<Partial<CustomButtonProps2>>;

export { type CustomButtonProps, type CustomButtonProps2, type CustomComponentProps, type CustomComponentProps2, NormalButton, NormalButton2 };
