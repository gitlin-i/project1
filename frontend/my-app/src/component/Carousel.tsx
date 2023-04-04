import React from 'react'
import Button from './Button'
import styled from 'styled-components'
const Window = styled.div`
    /* overflow: hidden;  check out container's movement : command + */
  position: relative;
  width:60px;
  height:60px;


  border: 4px solid red; 
  

    
`
const Container = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(58px, 1fr));
  grid-template-rows:100%;
  grid-column-gap: 2rem;
  white-space: nowrap;
`
const Item = styled.li`
    list-style-type: none;
`
const nextClick = () => {

}
const prevClick = () => {
    
}
const Carousel = () => {
  return (
    <>
    <Window>
        <Container>
            <Item>Carousel</Item>
            {/* <Item>adss</Item>
            <Item>Carousel</Item>
            <Item>adss</Item>
            <Item>Carousel</Item>
            <Item>adss</Item>
            <Item>Carousel</Item>
            <Item>adss</Item> */}
        </Container>
        
    </Window>

    <hr></hr>
    <Button onClick={nextClick}>next</Button>
    <Button onClick={prevClick}>prev</Button>
    </>
    
  )
}

export default Carousel