import React, { PureComponent } from 'react'
import styled from 'styled-components';

export interface TextProps {
  children? : any;
  color?: string;
  size? : number | string;
  fontFamily?: string ;
  bold?: boolean;
  loading?:boolean;
}

const StyledText = styled.span<TextProps>`
  color : ${ (props) => props.color? props.color : props.theme.font.color};
  font-size : ${(props) => props.size? props.size : props.theme.font.fontSize}px;
  font-family : ${(props) => props.fontFamily ? props.fontFamily: props.theme.font.fontFamily };
  line-height: ${ (props) => props.theme.font.lineHeight};
  font-weight: ${ (props) => props.bold ? props.theme.font.fontweight : ""};
  background-color: ${(props) => props.loading? "#aaaaaa":""};

`

export default class Text extends PureComponent<TextProps> {
  render() {
    const {children,loading, ...props} = this.props;
    return (
      <StyledText 
      {...props}>
        {!loading && children}
      </StyledText>
      
    )
  }
}
