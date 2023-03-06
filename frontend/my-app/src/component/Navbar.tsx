import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { PureComponent } from 'react'
import {faSpa } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import SimpleSearchBar from './SimpleSearchBar'
import Text from './Text'
import AccountButton from './AccountButtonWithDropDown'

const StyledNav = styled.nav`
  width: 100%;
  height:5rem;
  background-color: ${props => props.theme.backgroundColor};
  position: sticky;
  top:0;
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


const BrandBox = styled.div`
  display:flex;
  align-items:center;
`
const StyledA = styled.a`
  color:${props => props.theme.color.primary};
  @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
    display:none;
  }
`
const StyledBrandName = styled.a`

  color:${props => props.theme.color.primary};
  @media (max-width: ${props => props.theme.breakPoints['large']}px) {
    display:none;
  }
  text-decoration:none;
`

export default class Navbar extends PureComponent {
  render() {
    const {...props} =this.props;
    return (
      <StyledNav>
        <NavContainer>
          <BrandBox>
            <StyledA href='/' ><FontAwesomeIcon icon={faSpa} size="3x"></FontAwesomeIcon> </StyledA>
            <StyledBrandName href='/' >
               <Text bold fontFamily='Noto Sans KR' size={36} color="#038cfc">여행사</Text>
              </StyledBrandName>
          </BrandBox>

          <SearchBar/>
          <SimpleSearchBar/>
          <AccountButton />
        </NavContainer>
      </StyledNav>
    )
  }
}
