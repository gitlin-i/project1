import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa } from '@fortawesome/free-solid-svg-icons'


const Brand = styled.div`
  width:140px;
  max-width:140px;
  height: 50px;
  
  @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
    display:none;
  }
  @media (max-width: ${props => props.theme.breakPoints['large']}px) {
      width: calc(140px * 0.6);
  }
`
const StyledA = styled.a`
  width:100%;
  height:100%;
  display:block;
  color:${props => props.theme.color.primary};
  text-decoration : none;
  @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
    display:none;
  } 
`
const BrandMarkArea = styled.div`
  display:inline-block;
  width:40%;
  height:100%;
  @media (max-width: ${props => props.theme.breakPoints['large']}px) {
      width: 100%;
  }
  vertical-align: bottom;
    > .fa-spa{
    width:100%;
    height:100%;
  }

`
const BrandNameArea = styled.div`
display:inline-flex;
width:60%;
height:100%;
  @media (max-width: ${props => props.theme.breakPoints['xlarge']}px) {
      display:none;
  }
  vertical-align: bottom;
  justify-content: center;
  align-items:center;
`



const BrandBox : React.FC = () => {
    
  return (
    <Brand>
        <StyledA href='/'>
          <BrandMarkArea>
            <FontAwesomeIcon icon={faSpa} ></FontAwesomeIcon>
          </BrandMarkArea>
          <BrandNameArea>
            <Text bold color="#038cfc" size={20}>여행사</Text>
          </BrandNameArea>
        </StyledA>
    </Brand>
  )
}

export default BrandBox;