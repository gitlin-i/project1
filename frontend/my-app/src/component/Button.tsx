import React,{PureComponent} from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
export interface ButtonProps {
  onClick: () => void;
  children:any;
  disabled?: boolean;
  primary?: boolean;
  theme?: any;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => props.theme.backgroundColor};
  color: gray ;
  font-size: 1rem;
  border: none;
  border-radius: 16px;
  padding: 0px 0px;
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



export default class Button extends PureComponent<ButtonProps> {
  render(): React.ReactNode {
    const {children,...props} = this.props;
    return <StyledButton {...props}>
       {children}
       </StyledButton>
  }

}