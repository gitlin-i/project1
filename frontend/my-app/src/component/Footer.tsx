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
  @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
      width: calc(140px * 0.6);
  }
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
    text-align:start;
    overflow:auto;
`


//#e5e5e5
export default class Footer extends PureComponent {

  render() {
    return (
      <StyledFooter>
        <Footerlayout >
          <TopBox>
              <Text size={16} color="gray">여행사</Text>
              <Text size={16} color="gray">개인정보 처리방침</Text>
              <Text size={16} color="gray">이용약관</Text>
              <Text size={16} color="gray">사이트맵</Text>
              <Text size={16} color="gray">한국의 변경된 환불 정책</Text>
              <Text size={16} color="gray">세부정보</Text>
          </TopBox>

        <BottomBox>
          <Text size={10} color="gray">
          웹사이트 제공자: @@@ | 이사: @@@ | VAT 번호: @@@ | 사업자 등록 번호: @@@ | 연락처: @@@, 웹사이트, @@@ | 호스팅 서비스 제공업체: 아마존 웹서비스 | @@@는 통신판매 중개자로 @@@을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. @@@을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
          </Text>
        </BottomBox>
        </Footerlayout>
      </StyledFooter>
    )
  }
}
