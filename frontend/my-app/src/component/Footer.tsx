import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Text from './Text'


const StyledFooter = styled.div`
  width:100%;
  height:calc(200px - 8vw);
  min-height:12vh;
  max-height:24vh;
  background-color: white ;
  position:fixed;
  bottom:0;
  border-top: solid 2px;
  color:#e5e5e5;

`
const Footerlayout = styled.div`
  width:100%;
  height:100%;
  padding: 0 80px;
`
const TopBox = styled.div`
    display:flex;
    justify-content: start;
    height:50%;
    align-items:center;
    color:gray;
    text-align:center;
    overflow:auto;
    list-style:none;
  > span {
    padding-left: 10px;
  }
  border-bottom: solid 2px #d0d0d0;
`
const BottomBox = styled.div`
    display:flex;
    height:50%;
    justify-content:start;
    align-items:start;
    color:gray;
    text-align:center;
    overflow:auto;
`


//#e5e5e5
export default class Footer extends PureComponent {
  render() {
    return (
      <StyledFooter>
        <Footerlayout >
          <TopBox>
              <Text size={16} color="gray"> 회사명</Text>
              <Text size={16} color="gray"> 정책</Text>
              <Text size={16} color="gray"> 공지사항</Text>
              <Text size={16} color="gray"> 세부정보</Text>

          </TopBox>
        
        <BottomBox>
          <Text size={10} color="gray">
            주의사항1.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.
            주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.
            주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.
            주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항.주의사항2.
          </Text>
        </BottomBox>
        </Footerlayout>
      </StyledFooter>
    )
  }
}
