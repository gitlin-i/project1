
import React, { useEffect } from 'react'
import Card from 'src/component/Card'
import styled from 'styled-components'

import { Room } from 'src/type/type';
import { selectRooms,fetchRooms, selectRoomsState } from '../reducer/roomsReducers';
import { useAppDispatch, useAppSelector } from '../hook/hooks';

const StyledMain = styled.main`
  width:100%;
  background-color: white;
  margin-top:1rem;
  margin-bottom:12vh;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  z-index:-1;
  padding: 0px ${props => props.theme.layoutPadding['p0']}px;
  
  @media (min-width: ${props => props.theme.breakPoints['medium']}px) {
    padding: 0px ${props => props.theme.layoutPadding['p744']}px;
  }
  @media (min-width: 1440px) {
    padding: 0px ${props => props.theme.layoutPadding['p1440']}px;
  }
`
const StyledCardList = styled.div`
  display: grid;
  grid-template-columns:repeat(1,1fr);
  grid-auto-rows: auto;
  gap:20px;
  width: 100%;
  height:100%;
  background-color: white;
  @media (min-width: ${props => props.theme.breakPoints['small']}px) {
    grid-template-columns:repeat(2,1fr);

  }
  @media (min-width: ${props => props.theme.breakPoints['large']}px) {
    grid-template-columns:repeat(3,1fr);
  }
  @media (min-width: ${props => props.theme.breakPoints['xlarge']}px) {
    grid-template-columns:repeat(4,1fr);
  }
  
`


const ConvertCard = (Content:Room) : React.ReactNode => {
  return (<Card title={Content.title}  price={Content.price} key={Content.id}  />)
}

const ConvertArrayCard = (Contents:Array<Room>) : Array<React.ReactNode> => {
  return Contents.map(ConvertCard)
}



const MainPage: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const roomArray = useAppSelector(selectRooms);
  const roomsStatus = useAppSelector(selectRoomsState);
  useEffect(() => {
    if(roomsStatus === 'idle'){
      dispatch(fetchRooms())
    }

  }, [dispatch, roomsStatus])
  
  roomArray.map(ConvertCard)
  return (
    <React.Fragment>
      <StyledMain>
        <StyledCardList>
          {ConvertArrayCard(roomArray)}
        </StyledCardList>
      </StyledMain>
  </React.Fragment>
  )
}
export default MainPage