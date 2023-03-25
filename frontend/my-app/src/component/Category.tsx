import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import styled from 'styled-components'

import CategoryIconAndText from './CategoryIconAndText';


const Label = styled.label`
  cursor: pointer;
  min-height:48px;
  min-width:56px;
  margin:12px 0 10px;
  
  
`
const RadioInput = styled.input`
  display:none;
  appearance: none;

`
export interface CategoryProps {
  children?: React.ReactNode;
  checked?: boolean;
  name ?: string;
  value ?: string;
  type ?: string;
  defaultchecked ?: boolean;
} 

export const isChecked  = (someInput : HTMLInputElement) : boolean => {
  if(someInput.checked){
    return true;
  }
  else{
    return false;
  }

}
// onClick={callNewDataArray}

const Category: React.FC<CategoryProps> = (props) => {
  const {children,value, ...rest} = props;


  return (
    <React.Fragment>
        <Label>
          <RadioInput type="radio" name='SelectCategory' value={value}  {...rest} />
          <CategoryIconAndText>
            {children}
          </CategoryIconAndText>
        </Label>
    </React.Fragment>


  )
}

export default Category;


