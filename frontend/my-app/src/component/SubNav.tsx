import React, { PureComponent } from 'react'
import styled from 'styled-components'

const StyledSubNav = styled.div`
    width:100%;
    height:6rem;
    background-color:blue;
    position: sticky;
    top:5rem;
    @media (max-width: 744px){
        display:none;

    }
`


export default class SubNav extends PureComponent {
  render() {
    return (
      <StyledSubNav></StyledSubNav>
    )
  }
}

