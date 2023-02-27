import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { PureComponent } from 'react'
import { faCircleUser,faSpa } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import SimpleSearchBar from './SimpleSearchBar'

const StyledNav = styled.nav`
  width: 100%;
  height:5rem;
  background-color: ${props => props.theme.backgroundColor};
  position: sticky;
  top:0;
  padding: 0px 80px;
  @media (max-width: 744px) {
    padding:20px;
  }
`
const NavContainer = styled.div`
  height:100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
`

const AccountButton = styled(Button)`
  position: relative;
  padding: 0px 0px;
  border-radius: 2rem;
  color:gray;
  @media (max-width: 744px) {
    display:none;
  }
`
const StyledA = styled.a`
  color:${props => props.theme.color.primary};
  @media (max-width: 744px) {
    display:none;
  }
`

export default class Navbar extends PureComponent {
  render() {
    const {...props} =this.props;
    return (
      <StyledNav>
        <NavContainer>
          <StyledA href='/' ><FontAwesomeIcon icon={faSpa} size="3x"></FontAwesomeIcon> </StyledA>
          <SearchBar/>
          <SimpleSearchBar/>
          <AccountButton  onClick={() => {} } {...props}> <FontAwesomeIcon icon={faCircleUser} size="3x" /> </AccountButton>
        </NavContainer>
      </StyledNav>
    )
  }
}
