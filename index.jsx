import styled from 'styled-components';

export const StyledButton = styled.button`
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

function NormalButton() {
  return (
    <div>
      <StyledButton>Click Me</StyledButton>
    </div>
  );
}

export {NormalButton};
