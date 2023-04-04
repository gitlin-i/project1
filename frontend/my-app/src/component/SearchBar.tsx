import React, { PureComponent } from 'react'
import styled from 'styled-components';
import { faMagnifyingGlass,faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from './Text';


export interface SearchBarProps {
  onClick? : () => void;
  isExpand ?: boolean;
}
// div <- form
const StyledDiv = styled.div<SearchBarProps>`
  width: 36vw;
  min-width:390px;
  height:3rem;
  display:none;
  
  @media (min-width: ${props => props.theme.breakPoints['medium']}px) {
    display: block;

  }
`
const Container = styled.div`
    width:100%;
    border-radius:1.5rem;
    border:solid 1px #d0d0d0;
    display:flex;
    align-items: center;
    justify-content: start;
    box-shadow: 0px 6px 10px #e3e1e1;
    &:hover {
    box-shadow: 0px 6px 16px #e3e1e1;
  }
  > * {
    flex: 0 0 auto;
  }

`
const StyledButton = styled.button`

  display:inline-block;
  background-color: white;
  width:33%;
  height: 3rem;
  position:relative;
  border-radius: 0px;
  cursor: pointer;
  align-items:center;
  margin : 0;
  border: none;
  outline:none;
  &:disabled {
    opacity: 0.6;
  }
  padding: 0;
`


const LocationButton = styled(StyledButton)`
  border-radius: 1.5rem 0 0 1.5rem;
  padding-left:0.5rem;
`
const PeriodButton = styled(StyledButton)`
  display:flex;
  justify-content: start;
  padding: 0;
`

const VisitorButton = styled(StyledButton)`
  border-radius: 0 1.5rem 1.5rem 0;
  display:flex;
  align-items: center; 
  justify-content:space-evenly;
  padding-right:0.5rem;
`
const VisitorArea = styled.div`
  display:flex;
  width:60%;
  height:100%;
  align-items: center;
  
`
const SearchIconArea = styled.div`
  width:36px;
  height:36px;
  border-radius : 2rem;
  background-color: ${props => props.theme.color.primary};
  color: white;
  display:flex;
  align-items:center;
  justify-content: center;
`
const Bar = styled.span`
  height:50%;
  border-left: 1px solid #ccc;
`
const ReStyledText = styled(Text)`
  width:100%;
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
`

export default class SearchBar extends PureComponent<SearchBarProps>{
  render() {
    const {onClick,...props} = this.props;
    return (
      <StyledDiv>
        <Container>
          <LocationButton {...props} onClick={onClick}>
            <Text fontFamily='Noto sans KR' >어디든지</Text>
            
          </LocationButton>
          
          <PeriodButton {...props} onClick={onClick} >
            <Bar />
            <ReStyledText fontFamily='Noto sans KR' bold >언제든지 일주일</ReStyledText>
            <Bar />
          </PeriodButton>

          <VisitorButton {...props} onClick={onClick}>
            <VisitorArea>
              <ReStyledText fontFamily='Noto sans KR' color='gray' >게스트 추가</ReStyledText>
            </VisitorArea>
            
            <SearchIconArea {...props} onClick={onClick}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchIconArea>

          </VisitorButton>

        </Container>
      </StyledDiv>
    )
  }
}