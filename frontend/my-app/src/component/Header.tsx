import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import AccountButton from './AccountButtonWithDropDown';
import BrandBox from './BrandBox';
import SearchBar from './SearchBar';

interface HeaderProps {
    isExpand?: boolean;
}

const expandOut = keyframes`
  from {
    transform: scaleX(1);
    
  }
    to {
      transform: scaleX(0);
  }
`

const StyledHeader = styled.header<HeaderProps>`
  display:block;
  width: 100%;
  height: 5rem;
  background-color: ${props => props.theme.backgroundColor};
  position: sticky;
  top:0;
  z-index:5;
  border-bottom: ${({isExpand}) => isExpand? "" : "solid 2px #d8d8d89f"};
  padding: 0px ${props => props.theme.layoutPadding['p0']}px;
  
  @media (min-width: ${props => props.theme.breakPoints['medium']}px) {
    padding: 0px ${props => props.theme.layoutPadding['p744']}px;
  }
  @media (min-width: 1440px) {
    padding: 0px ${props => props.theme.layoutPadding['p1440']}px;
  }
    @media screen and (max-width: ${(props) => props.theme.breakPoints['medium']}px) {
        display:none;
    }
`

const FlexContainer = styled.div`
  height:5rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin:0;

`

const ExpandArea = styled.div<HeaderProps>`
  
  height:6rem;
  position:relative;
  right:${props => props.theme.layoutPadding['p0']}px;
  width: calc(100% + 2 * (${props => props.theme.layoutPadding['p0']}px)) ;

  @media (min-width: ${props => props.theme.breakPoints['medium']}px) {
    right:${props => props.theme.layoutPadding['p744']}px;
    width: calc(100% + 2 * (${props => props.theme.layoutPadding['p744']}px)) ;
  }
  @media (min-width: 1440px) {
    right:${props => props.theme.layoutPadding['p1440']}px;
    width: calc(100% + 2 * (${props => props.theme.layoutPadding['p1440']}px)) ;
  }

  background-color:white;

  display: ${({isExpand}) => isExpand? "flex" : "none"}; 
  justify-content:center;
  

`
const Flexlayout = styled.div`
  width:calc(100% / 3);
  
`
const FlexMiddlelayout = styled(Flexlayout)<HeaderProps>`
  
  display: ${({isExpand}) => isExpand? "none" : "flex"}; 
  justify-content:center;
  /* animation: ${expandOut} 0.2s ease-in-out; */
  /* transition: transform 250ms ease, opacity 100ms ease,visibility 0ms 50ms; */
/* 
  &:active{
    transition: transform 250ms ease opacity 100ms ease visibility 0ms 50ms;
    transform: scale(3,1.4) ;
  } */

`

const FlexEndlayout = styled(Flexlayout)`
  display:flex;
  justify-content:flex-end;
`

const Overlay = styled.div<HeaderProps>`
width:100vw;
height: 100vh;
background-color: rgba(0,0,0,.2);
display: ${({isExpand}) => isExpand? "block":"none"};
position:fixed;
z-index:1;
`
//////////////////////////////////////////////
const Header : React.FC = () => {
  const [isExpand, setIsExpand] = useState(false);
  const [ScrollPosition, setScrollPosition] = useState(0);
  const handleClick = () => {
    setIsExpand(!isExpand);
    setScrollPosition(window.scrollY);
  }
  useEffect(()=> {
    const handleScroll = () => {
      
      if (ScrollPosition !== window.scrollY) {
        setIsExpand(false);
      }
    }
    if (isExpand){
      window.addEventListener('scroll',handleScroll);
    }
    
    return () => { window.removeEventListener('scroll',handleScroll);}

  },[isExpand])


  return (
    <React.Fragment>
        <StyledHeader isExpand={isExpand}>
            <FlexContainer>
                <Flexlayout>
                  <BrandBox />
                </Flexlayout>
                
                <FlexMiddlelayout isExpand={isExpand}>
                  <SearchBar onClick={handleClick} isExpand={isExpand} />
                </FlexMiddlelayout>
                <FlexEndlayout>
                  <AccountButton />
                </FlexEndlayout>
                
                
            </FlexContainer>
            <ExpandArea isExpand={isExpand} >
              <SearchBar onClick={handleClick} isExpand={isExpand} />
            </ExpandArea>  
        </StyledHeader>
        <Overlay isExpand={isExpand} onClick={handleClick}></Overlay>
    </React.Fragment>
  )
}

export default Header