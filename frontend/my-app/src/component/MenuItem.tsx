import React from 'react'
import styled from 'styled-components'

interface MenuItem {
    children ?: React.ReactNode;
}

const Item = styled.li`
    list-style : none;
    color: black;
    width:100%;
    padding: 0.5rem 0;
  

  &:hover{
    background-color: #e6e6e6;
  }
  > * {
    padding-left:1rem;
  }
`

const MenuItem : React.FC<MenuItem> = (props) => {
    const {children} = props;
  return (
    <Item>{children}</Item>
  )
}

export default MenuItem