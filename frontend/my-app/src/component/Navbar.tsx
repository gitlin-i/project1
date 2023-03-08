
import React, { PureComponent } from 'react'

import styled from 'styled-components'
import SearchBar from './SearchBar'
import SimpleSearchBar from './SimpleSearchBar'
import AccountButton from './AccountButtonWithDropDown'
import BrandBox from './BrandBox'

const StyledNav = styled.div`
  width: 100%;
  height:5rem;
  background-color: ${props => props.theme.backgroundColor};
  position: sticky;
  top:0;
  z-index:5;
  border-bottom: solid 2px #d8d8d89f;
  padding: 0px 80px;
  @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
    padding: 0px 20px;
  }
  @media (max-width: 1440px) {
    padding: 0px 40px;
  }
`
const NavContainer = styled.div`
  height:100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
`



const Navbar : React.FC = (props) => {
  return (
    <StyledNav>
      <NavContainer>
        <BrandBox />
        <SearchBar/>
        <SimpleSearchBar/>
        <AccountButton {...props}/>
      </NavContainer>
    </StyledNav>
  )
}
export default Navbar


