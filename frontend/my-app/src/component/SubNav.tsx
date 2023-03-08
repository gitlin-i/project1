import React, { useState,useEffect } from 'react'
import styled from 'styled-components'

interface SubNavProps {
  isSticky : boolean;
}

const StyledSubNav = styled.div<SubNavProps>`
    width:100%;
    height:6rem;
    background-color:white;
    position: sticky;
    top:calc(5rem - 20px);
    z-index:0;
    padding-block-start: 20px; 
    box-shadow: ${({isSticky}) => isSticky? "0px 6px 10px #c7c7c7;" : ""};
`
const Container = styled.div`
  width:100%;
  height:100%;
  padding : 0 80px;
  display:flex;
  align-items: center;
  justify-content: space-between;

`
const Radio_input = styled.input`
  
`

const SubNav = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    
    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  }, [])
  
  return (
    <StyledSubNav isSticky={isSticky}>
      <Container>
        <label>
        <Radio_input type="radio" name='SelectCategory' />
        입력1
        </label>
        
        <label>
        <Radio_input type="radio" name='SelectCategory' />
        입력2
        </label>
        <label>
        <Radio_input type="radio" name='SelectCategory' />
        입력3
        </label>
      </Container>
    </StyledSubNav>
  )
}

export default SubNav



