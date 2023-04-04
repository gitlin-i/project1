import React, { PureComponent } from 'react'
import { useAppSelector } from '../hook/hooks'
import { selectRoomsState } from '../reducer/roomsReducers'
import styled, { keyframes } from 'styled-components'
import Text from './Text'
import { Room } from '../type/type'
import { AllCategoriesValue } from './Categories'

const loadingAni = keyframes`
from {
  transform: translateX(0)
}

to {
  transform: translateX(100%);
}
`;
const StyledDiv = styled.div`
    display:  "flex";
    flex-direction:column;
    background-color: white;
    height: calc(100vh - 11rem - 12vh);//

`
const Img = styled.img`
    width: 100%;
    height:75%;
    border-radius:1.5rem;
`
const LoadingDiv = styled.div`
    width: 100%;
    height:75%;
    border-radius:1.5rem;
    background-color:#dddddd;
`
const TextArea = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:25%;
`

interface CardProps {
  content?: Room;
  dataState?: 'idle' | 'loading' | 'succeeded' | 'failed';
}
interface TextProps{
  isloading?:boolean;
}

const StyledText = styled.div<TextProps>`
  color : ${ props => props.theme.font.color};
  font-size : ${(props) => props.theme.font.fontSize}px;
  font-family : ${(props) =>props.theme.font.fontFamily };
  background-color: ${props => props.isloading? "#dddddd": ""};
  border-radius:1rem;
  margin-top:8px;
  height:1rem;
  content:'';
`
const Card :React.FC<CardProps>= (props) => {
  const {content,dataState, ...rest} = props; 
  const loading = (dataState !== 'succeeded' || typeof content === 'undefined')
  return (
    <StyledDiv >
      {loading &&
      <>
        <LoadingDiv></LoadingDiv>
        <TextArea >
        <StyledText isloading><Text fontFamily='Noto Sans KR' ></Text></StyledText>
        <StyledText isloading><Text fontFamily='Noto Sans KR' ></Text></StyledText>
        <StyledText isloading><Text fontFamily='Noto Sans KR' ></Text></StyledText>
        <StyledText isloading><Text fontFamily='Noto Sans KR' ></Text></StyledText>
        </TextArea>
      </>
      }
      {!loading &&
      <>
        <Img src="/ex.jpg" alt='Card Image...'></Img>
        <TextArea >
        <StyledText ><Text fontFamily='Noto Sans KR' >{props.content?.title}</Text></StyledText>
        <StyledText ><Text fontFamily='Noto Sans KR' >{props.content?.SelectCategory}</Text></StyledText>
        <StyledText ><Text fontFamily='Noto Sans KR' >{props.content?.address}</Text></StyledText>
        <StyledText ><Text fontFamily='Noto Sans KR' >{props.content?.price}</Text></StyledText>
      </TextArea>
      </>
      }


    </StyledDiv>
  )
}

export default Card;
