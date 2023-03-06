import React from 'react'
import styled from 'styled-components'

interface MenuItem {
    children ?: React.ReactNode;
}

const Item = styled.li`
    list-style : none;
    background-color:white;
    color: black;
    width:100%;
    padding: 0.5rem 0;
`

const MenuItem : React.FC<MenuItem> = (props) => {
    const {children} = props;
  return (
    <Item>{children}</Item>
  )
}

export default MenuItem