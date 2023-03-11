
import React, {  useEffect, useState } from 'react'

import styled from 'styled-components'
import SearchBar from './SearchBar'
import SimpleSearchBar from './SimpleSearchBar'
import AccountButton from './AccountButtonWithDropDown'
import BrandBox from './BrandBox'

interface NavbarProps {
  isExpand?: boolean;
}

const StyledNav = styled.div<NavbarProps>`
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

`
const NavContainer = styled.div`
  height:5rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin:0;

`

const Overlay = styled.div<NavbarProps>`
width:100vw;
height: 100vh;
background-color: rgba(0,0,0,.5);
display: ${({isExpand}) => isExpand? "block":"none"};
position:fixed;
z-index:1;
`
const ExpandArea = styled.div<NavbarProps>`
  
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

  display: ${({isExpand}) => isExpand? "block" : "none"}; 

`
const Layout = styled.div`
  width: 33%;
  height:100%;
`


const Navbar : React.FC<NavbarProps> = (props) => {
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
    <>
      <StyledNav isExpand={isExpand} >
        <NavContainer >

          <BrandBox />
          <SearchBar onClick={handleClick} isExpand={isExpand} />
          <SimpleSearchBar/>

          <AccountButton />

          
        </NavContainer>


        <ExpandArea isExpand={isExpand} />
      </StyledNav>
      <Overlay isExpand={isExpand} onClick={handleClick}></Overlay>

    </>
  )
}
export default Navbar


