import React from 'react';
import styled from 'styled-components';
import { ThemeProps } from '../my-theme';
export interface ButtonProps {
  onClick?: () => void;
  children?:React.ReactNode;
  disabled?: boolean;
  primary?: boolean;
  secondary? : boolean;
  theme?: ThemeProps;
}

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  background-color: ${props => props.primary? props.theme.color.primary : props.theme.color.white };
  font-size: 1rem;
  color: ${props => props.primary ? props.theme.color.white : props.theme.color.secondary};
  border: ${props => props.secondary? "solid":"none"};
  border-color: ${props => props.secondary? props.theme.color.secondary: props.theme.color.white };
  border-radius: 1rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 6px 10px #e3e1e1;
  }

  &:active {
    transform: translateY(0.5rem);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;


const Button :React.FC<ButtonProps> = (props) => {
  const {children,...args} = props;
    return (
      <StyledButton {...args}>
       {children}
      </StyledButton>
    )
}

export default Button