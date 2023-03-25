import React, { PureComponent } from 'react'
import styled from 'styled-components';
import { faMagnifyingGlass,faSliders  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from './Text';


export interface SearchBarProps {
  onClick? : () => void,
}
// div <- form
const StyledDiv = styled.div`
  width: 90vw;
  height:3rem;
`
const Container = styled.div`
    height:100%;
    width:100%;
    border-radius:1.5rem;
    display:flex;
    align-items: center;
    box-shadow: 0px 6px 10px #e3e1e1;

`
const StyledButton = styled.button`
  display:flex;
  align-items:center;
  justify-content: start;
  background-color: white;
  width:100%;
  height: 100%;
  position:relative;
  cursor: pointer;
  border:none;
  outline:none;
  &:disabled {
    opacity: 0.6;
  }
  padding:0;
`
const SearchButton = styled(StyledButton)`
    width:86%;
    border-radius: 2rem 0 0 2rem;
`
const FilterButton = styled(StyledButton)`
    width:14%;
    border-radius: 0 2rem 2rem 0;
    margin: 0;
`
const SearchIconArea = styled.div`
    height:100%;
    width:16%;
    display:flex;
    align-items:center;
    justify-content:center;
`
const ReStyledText = styled(Text)`
    display:block;
    text-align:left;
    
    
`
const TextContainer = styled.div`
    width:100%;
    height:100%;
`
const FilterIconArea = styled.div`
    width:36px;
    height:36px;
    display:flex;
    align-items:center;
    justify-content: center;
    margin:0;
    border: solid 1px #a0a0a0;
    /* outline: auto;
    outline-color: #a0a0a0; */
    border-radius:2rem;
`

export default class SimpleSearchBar extends PureComponent<SearchBarProps>{
  render() {
    const {...props} = this.props;
    return (
        <StyledDiv>
            <Container>
                <SearchButton>
                    <SearchIconArea>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </SearchIconArea>
                    <TextContainer>
                        <ReStyledText fontFamily='Noto sans KR' >어디든지</ReStyledText>
                        <ReStyledText fontFamily='Noto sans KR'color='gray' size={14} >언제든지 ∙ 게스트 추가 </ReStyledText>
                    </TextContainer>
                </SearchButton>
                <FilterButton>
                    <FilterIconArea>
                        <FontAwesomeIcon icon={faSliders} />
                    </FilterIconArea>
                </FilterButton>
            </Container>
        </StyledDiv>
    )
  }
}