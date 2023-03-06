import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Text from './Text'

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    background-color: white;
    height: calc(100vh - 11rem - 12vh);

`
const Img = styled.img`
    width: 100%;
    height:75%;
    border-radius:1.5rem;
`
const TextArea = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:25%;
`

export default class Card extends PureComponent {
  render() {
    return (
      <StyledDiv>
        <Img src="/ex.jpg" alt='Card Image...'></Img>
        <TextArea>
            <Text fontFamily='Noto Sans KR'>위치</Text>
            <Text fontFamily='Noto Sans KR' size={14} color="gray">소개</Text>
            <Text fontFamily='Noto Sans KR' size={14} color="gray">기간</Text>
            <Text fontFamily='Noto Sans KR' >가격</Text>
        </TextArea>


      </StyledDiv>
    )
  }
}
