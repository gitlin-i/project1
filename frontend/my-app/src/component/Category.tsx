import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import CategoryIconAndText from './CategoryIconAndText';

export interface CategoryProps {
  children?: React.ReactNode;
  checked?: boolean;
  name ?: string;
  value ?: string;
} 


const StyledSpan = styled.span`
  color: gray;
  text-align:center;
  min-height:56px;
  min-width:56px;
  padding:4px 0px;
  margin:12px 0 10px;
  :hover::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ccc;
}
`

const Label = styled.label`
  cursor: pointer;
  

`
const RadioInput = styled.input`
  appearance: none;
 &:checked{
  background-color:yellow;
 }
`


const Category: React.FC<CategoryProps> = (props) => {
  const {children, value, ...rest} = props;
  return (
    <StyledSpan>
      <Label>
      <RadioInput type="radio" name='SelectCategory' value={value}/>
      <CategoryIconAndText>
        {children}
      </CategoryIconAndText>
      </Label>
    </StyledSpan>
  )
}

export default Category;


