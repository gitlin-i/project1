import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { PureComponent } from 'react'
import { faCircleUser,faSpa } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import styled from 'styled-components'

// import "../css/navbar.css"
const StyledNav = styled.nav`
  width: 100%;
  outline: auto;
  background-color: ${props => props.theme.backgroundColor};
  position:sticky;
  top:0;
  .navbar-container {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding : 1rem 1rem;
  }
  .brand_icon {
    position: relative;
    left:1rem;
    &:hover {
    }
  }
  Button{
    position: relative;
    right:1rem;
  }

`

export default class Navbar extends PureComponent {
  render() {
    return (
      <StyledNav>
        <div className='navbar-container'>

          <a href='/' className='brand-icon'><FontAwesomeIcon icon={faSpa} size="3x"></FontAwesomeIcon> </a>

          <Button  onClick={() => {} } > <FontAwesomeIcon icon={faCircleUser} size="3x" /> </Button>
        </div>
      </StyledNav>
    )
  }
}
