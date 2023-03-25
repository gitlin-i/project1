import React from 'react'
import styled from 'styled-components'
import { CategoryProps } from './Category'

const StyledSpan = styled.span`
  display:flex;
  /* height:3rem; */
  height:100%;

  flex-direction:column;
  align-content:center;
  justify-content:space-between;
  text-align:center;
  > svg {
    display:block;  
    min-height:24px;  
  }

  
`
const CategoryIconAndText: React.FC<CategoryProps> = (props) => {
  const {children, ...rest} = props;
  return (
    <StyledSpan>
        {children}
    </StyledSpan>
  )
}

export default CategoryIconAndText