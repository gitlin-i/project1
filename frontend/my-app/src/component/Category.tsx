
import React, { useContext, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hook/hooks';
import { PageSetting } from '../type';
import styled from 'styled-components'
import {selectPageSetting, setPage}from '../reducer/pageSettingReducers'
import CategoryIconAndText from './CategoryIconAndText';
import {  AllCategoriesValue } from './Categories';
import { resetRooms } from '../reducer/roomsReducers';
import { createPageSetting } from '../func/func';


const Label = styled.label`
  display:inline-block;
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
  }}
// onClick={callNewDataArray}

const Category: React.FC<CategoryProps> = (props) => {
  const {children,value,defaultchecked, ...rest} = props;
  const dispatch  = useAppDispatch();
  const pageSetting : PageSetting = useAppSelector(selectPageSetting)
  
  const handleClick = (event: React.MouseEvent) => {
    if (value){
      const setting : PageSetting = createPageSetting(0,8,8,value as AllCategoriesValue); 
      dispatch(setPage(setting))
      dispatch(resetRooms())
    }// code smell
  }
  useEffect(() => {
    if (defaultchecked && pageSetting.requestCategory == null ){
      dispatch(setPage(createPageSetting(0,8,8,value as AllCategoriesValue)))
    }
  }, [])
  
  
  return (
    <React.Fragment>
        <Label   >
          <RadioInput
           type="radio" name='SelectCategory' value={value} defaultChecked={defaultchecked} onClick={handleClick}
           {...rest} />
          <CategoryIconAndText>
            {children}
          </CategoryIconAndText>
        </Label>
    </React.Fragment>


  )
}

export default React.memo(Category);


