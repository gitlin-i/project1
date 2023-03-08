import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa } from '@fortawesome/free-solid-svg-icons'


const Brand = styled.div`
`
const StyledA = styled.a`
  color:${props => props.theme.color.primary};

  text-decoration : none;
  @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
    display:none;
  }
`
const StyledBrandName = styled.a`
  margin-left: 0.5rem;
  color:${props => props.theme.color.primary};
  @media (max-width: ${props => props.theme.breakPoints['large']}px) {
    display:none;
  }
  text-decoration:none;
`


const BrandBox : React.FC = () => {
    
  return (
    <Brand>
        <StyledA href='/' ><FontAwesomeIcon icon={faSpa} size="3x"></FontAwesomeIcon> </StyledA>
        <StyledBrandName href='/' >
            <Text bold fontFamily='Noto Sans KR' size={36} color="#038cfc">여행사</Text>
        </StyledBrandName>
    </Brand>
  )
}

export default BrandBox;