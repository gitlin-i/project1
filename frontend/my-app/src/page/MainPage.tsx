import React, { PureComponent, Component } from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  position: relative;
  width:100%;
  height: 10000px;
  background-color: orange;
  outline:auto;
  color:purple;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:-1;
`
const StyledCardList = styled.ul`
  display: flex;
  flex-wrap: "wrap";
  justify-content: start;
  align-items: center;
  position: relative;
  width: 90%;
  height:50%;
  background-color: green;
  color:black;

`
const StyledCard = styled.li`
  background-color: white;
  position: static;
  
  width: 6rem;
  height : 3rem;
  outline:auto;
  padding: 8em 8em;


`

export default class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <StyledMain>main
          <StyledCardList>
            card list <br/>
            <StyledCard> 123 </StyledCard>
            <StyledCard> 456 </StyledCard>
            <StyledCard> 789 </StyledCard>
            <StyledCard> 012 </StyledCard>

            </StyledCardList>
        </StyledMain>
      </React.Fragment>
    )
  }
}
