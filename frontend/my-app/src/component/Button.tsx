import React,{PureComponent} from 'react';
import styled from 'styled-components';
export interface ButtonProps {
  onClick?: () => void;
  children?:any;
  disabled?: boolean;
  primary?: boolean;
  secondary? : boolean;
  theme?: any;
}

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  background-color: ${props => props.primary? props.theme.color.primary : props.theme.color.white };
  font-size: 1rem;
  color: ${props => props.primary ? props.theme.color.white : props.theme.color.secondary};
  border: ${props => props.secondary? "solid":"none"};
  border-color: ${props => props.secondary? props.theme.color.secondary: props.theme.color.white };
  border-radius: 16px;
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



export default class Button extends PureComponent<ButtonProps> {
  render(): React.ReactNode {
    const {children,...props} = this.props;
    return <StyledButton {...props}>
       {children}
       </StyledButton>
  }

}