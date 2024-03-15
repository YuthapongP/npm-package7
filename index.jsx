import React from "react";
import styled from "styled-components";


const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const NormalReactComponent = () => {
  return (
    <div>
      <StyledButton>Leave me alone, Don't click!</StyledButton>
    </div>
  );
};

