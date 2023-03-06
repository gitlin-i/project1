import React, { PureComponent } from 'react'
import styled from 'styled-components'

const StyledSubNav = styled.div`
    width:100%;
    height:6rem;
    background-color:blue;
    position: sticky;
    top:5rem;
    z-index:0;
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

export default class SubNav extends PureComponent {
  render() {
    return (
      <StyledSubNav>
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
}

