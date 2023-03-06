import React, { useState } from 'react'
import Button from './Button'
import styled from 'styled-components'


interface DropDownProps {
    children: any;
    isOpen: boolean;
}
const Menu = styled.div<DropDownProps>`
    display: ${ ({isOpen}) => (isOpen ? "block": "none")};
    width:16rem;
    position:absolute;
    left:40px;
    z-index: 1;
    box-shadow: 0px 6px 10px #e3e1e1;
    border-radius: 1rem;

`

const MenuContainer = styled.ul`
    padding: 0.5rem 0  0.5rem 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`
const Item = styled.li`
    list-style : none;
    background-color:white;
    color: black;
    width:100%;
    padding: 0.5rem 0;
`

const DropDown : React.FC<DropDownProps> = (props) => {
    const {children} = props;
    const [isOpen, setisOpen] = useState(false)
    const handleOpen = () => {
        setisOpen(!isOpen);
    }
  return (
    <>
        <Button primary onClick={handleOpen}>{children}</Button>
        <Menu isOpen={isOpen}>
            <MenuContainer>
                <Item>123</Item>
                <Item>123</Item>
                <Item>123</Item>
                <Item>123</Item>
            </MenuContainer>
            
        </Menu>
    </>
    
  )
}

export default DropDown;