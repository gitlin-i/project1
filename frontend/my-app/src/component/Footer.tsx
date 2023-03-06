import React, { PureComponent } from 'react'
import styled from 'styled-components'



const StyledFooter = styled.div`
  width:100%;
  height:12vh;
  background-color: white ;
  position:fixed;
  bottom:0;
  border-top: solid 2px;
  color:#e5e5e5;

`
const P = styled.p`
    color:black;
    text-align:center;
`

//#e5e5e5
export default class Footer extends PureComponent {
  render() {
    return (
      <StyledFooter>
        <div>
          
        </div>
        <div>

        </div>
      </StyledFooter>
    )
  }
}
