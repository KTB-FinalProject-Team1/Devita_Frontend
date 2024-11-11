import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #7DB1FF;
  color: white;
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '40px'};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #4790FF;
  }
`;

const ButtonBlue = ({ children, width, height, onClick }) => {
    return (
        <StyledButton width={width} height={height} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default ButtonBlue;