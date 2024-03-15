import React, { ComponentProps, ReactNode } from 'react';

type CustomComponentProps = ComponentProps<"button">;
type CustomButtonProps = {
    children: ReactNode;
} & CustomComponentProps;

declare const NormalButton: React.FC<Partial<CustomButtonProps>>;

type CustomButtonProps2 = {
    message: string;
};

declare const NormalButton2: React.FC<Partial<CustomButtonProps2>>;

export { type CustomButtonProps, type CustomButtonProps2, type CustomComponentProps, NormalButton, NormalButton2 };
