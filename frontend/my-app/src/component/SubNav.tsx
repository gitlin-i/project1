import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button';
import Category from './Category';
import Text from './Text';

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
    box-shadow: ${({isSticky}) => isSticky? "0px 2px 2px #e3e3e3;" : ""};
`
const Container = styled.div`
  width:100%;
  height:100%;
  padding: 0px ${props => props.theme.layoutPadding['p0']}px;
  
  @media (min-width: ${props => props.theme.breakPoints['medium']}px) {
    padding: 0px ${props => props.theme.layoutPadding['p744']}px;
  }
  @media (min-width: 1440px) {
    padding: 0px ${props => props.theme.layoutPadding['p1440']}px;
  }
  
  align-items: center;
  justify-content: start;
  display:flex;
  
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
  // icon, text, tag value,
  return (
    <StyledSubNav isSticky={isSticky}>
      <form action='http://localhost:3001/posts' acceptCharset='utf-8' method='get' id='main'>
      <Container>
          <Category checked value="beach">
            <FontAwesomeIcon icon={faUmbrellaBeach} ></FontAwesomeIcon>
            <Text>해변</Text>
          </Category>
          <Category value="1">
            입력1
          </Category >
          <Category  value="2">
            입력1
          </Category >
          <Category  value="3">
            입력1
          </Category >
          <Category  value="4">
            입력1
          </Category>
          <Button type="submit" form="main"> 제출 </Button>
        </Container>
      
      </form>
    </StyledSubNav>
  )
}

export default SubNav



