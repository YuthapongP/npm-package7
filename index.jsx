import React from "react";
import styled, { css } from "styled-components";

// import { ComponentProps } from "react";

const StyledButton = styled.button`
  ${({ color }) => css`
    background-color: ${color || "#ff00e6"};
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: "#0056b3";
    }
  `}
`;

// export type ButtonComponentProps = ComponentProps<"button">;

// type NormalReactComponentType = {
//   children?: ReactNode;
//   label?: string;
//   color?: string;
// };

// type ComnbineType = ButtonComponentProps & NormalReactComponentType

const NormalReactComponent = ({ children, color }) => {
  return (
    <div>
      <StyledButton color={color}>{children}</StyledButton>
    </div>
  );
};

export { NormalReactComponent };
