import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa } from '@fortawesome/free-solid-svg-icons'


const Brand = styled.div`
  width:140px;
  height: 50px;
  display:flex;
  
  @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
    display:none;
  }
  @media (max-width: ${props => props.theme.breakPoints['large']}px) {
      width: calc(140px * 0.6);
  }
`
const BrandMarkArea = styled.div`
  display:inline-block;
  width:40%;
  height:100%;
  @media (max-width: ${props => props.theme.breakPoints['large']}px) {
      width: 100%;
  }
`
const BrandNameArea = styled.div`
display:inline-block;
width:60%;
height:100%;
  @media (max-width: ${props => props.theme.breakPoints['large']}px) {
      display:none;
  }
`
const StyledA = styled.a`
  color:${props => props.theme.color.primary};
  text-decoration : none;
  @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
    display:none;
  }
  > .fa-spa{
    width:100%;
    height:100%;
  }
`
const StyledBrandName = styled.a`
  display:inline-block;
  width:100%;
  height:100%;
  color:${props => props.theme.color.primary};

  text-decoration:none;
`
const ReStyledText = styled(Text)`
  display:inline-block;
  width:100%;
  height:calc(100% - 10px);
  padding-top:10px;
  text-align:center;
`

const BrandBox : React.FC = () => {
    
  return (
    <Brand>
        <BrandMarkArea>
        <StyledA href='/' >
          <FontAwesomeIcon icon={faSpa} size="3x"></FontAwesomeIcon>
        </StyledA>
        </BrandMarkArea>

        <BrandNameArea>
          <StyledBrandName href='/' >
              <ReStyledText bold fontFamily='Noto Sans KR' size={24} color="#038cfc"  >여행사</ReStyledText>
          </StyledBrandName>
        </BrandNameArea>

    </Brand>
  )
}

export default BrandBox;