
import React, { useContext, useEffect, useRef } from 'react'
import Card from '../component/Card'
import styled from 'styled-components'

import { isRoom, PageSetting, Room, Rooms } from '../type';
import { selectRooms,fetchRooms, selectRoomsState, selectRoomsRaw, resetRooms, updateRooms } from '../reducer/roomsReducers';
import { useAppDispatch, useAppSelector } from '../hook/hooks';
import { selectPageSetting, setPage } from '../reducer/pageSettingReducers';
import { createPageSetting } from 'src/func/func';
import {throttle} from 'lodash';


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

const CreateCards = (num: number,data:Room[]) => {
  console.log("createCards");
  const arr = Array(num).fill('').map((_,index)=> {
    if(data[index]){
      return <Card key={data[index].id} content={data[index]} />
    } else {
      return <Card key={index} />
    }
  })
  return arr;
}


const MainPage: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const pageSetting :PageSetting = useAppSelector(selectPageSetting)
  const roomsStatus = useAppSelector(selectRoomsState);
  const roomsData = useAppSelector(selectRooms)

  useEffect(() => {//페이지 세팅
    if(roomsStatus === "idle" && pageSetting.requestCategory !== null ){
      dispatch(fetchRooms(pageSetting))
    }
  }, [roomsStatus,pageSetting])

//inf_scroll
  useEffect(()=> {

    const handleScroll = () => {

      const {scrollTop, offsetHeight} = document.documentElement
      if(roomsStatus === 'succeeded'){
        if( window.innerHeight + scrollTop >= offsetHeight - 10) {
          const setting = createPageSetting(
            pageSetting.requestPageStart,
            pageSetting.requestPageEnd + pageSetting.requestSize,
            pageSetting.requestSize,
            pageSetting.requestCategory)

            dispatch(updateRooms(setting))
        }
      }
    }
    const handleThrottleScroll = throttle(handleScroll,300,);
    window.addEventListener('scroll', handleThrottleScroll)
    return () => {
      window.removeEventListener('scroll',handleThrottleScroll)
    }
  }, [roomsStatus,pageSetting])

  return (
    <React.Fragment>
      <StyledMain>
        <StyledCardList >
          {CreateCards(pageSetting.requestPageEnd, roomsData)}
        </StyledCardList>
      </StyledMain>
  </React.Fragment>
  )
}
export default MainPage