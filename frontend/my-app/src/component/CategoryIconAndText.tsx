import React from 'react'
import styled from 'styled-components'
import { CategoryProps } from './Category'

const StyledSpan = styled.span`
  display:flex;
  height:3rem;
  align-content:space-between;
  row-gap: 0.5rem;
  justify-content:center;
  flex-direction:column;

  > svg {
    display:block;    
  }
  > span {
    height:1rem;
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