import React from 'react'
import styled from 'styled-components'
import SimpleSearchBar from './SimpleSearchBar'

const StyledDiv = styled.div`
  display:block;
  width: 100%;
  height: 5rem;
  background-color: ${props => props.theme.backgroundColor};
  position: sticky;
  top:0;
  z-index:5;
  padding-top: 14px;
  padding-left: ${props => props.theme.layoutPadding['p0']}px;
  padding-right: ${props => props.theme.layoutPadding['p0']}px;
  padding-bottom: 0;
    @media screen and (min-width: ${(props) => props.theme.breakPoints['medium']}px) {
        display:none;
    }
`

const Container = styled.div`
    display:flex;
    align-content:center;
    justify-content:center;

`


const SubHeader = () => {
  return (
    <StyledDiv>
        <Container>
            <SimpleSearchBar />
        </Container>
    </StyledDiv>
  )
}

export default SubHeader