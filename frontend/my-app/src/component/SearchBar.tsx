import React, { PureComponent } from 'react'
import styled from 'styled-components';
import { faMagnifyingGlass,faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from './Text';


export interface SearchBarProps {
  onClick? : () => void,
}
// div <- form
const StyledDiv = styled.div`
  width: 36vw;
  max-width:352px;
  height:3rem;
  display:none;

  @media (min-width: 744px) {
    display: flex;
  }
`
const Container = styled.div`
    width:100%;
    border-radius:1.5rem;
    display:flex;
    align-items: center;
    justify-content: start;
    box-shadow: 0px 6px 10px #e3e1e1;
    &:hover {
    box-shadow: 0px 6px 16px #e3e1e1;
  }

`
const StyledButton = styled.button`
  display:inline-block;
  background-color: white;
  width:34%;
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
  justify-content:space-between;
  padding-right:0.5rem;
`
const VisitorArea = styled.div`
  display:flex;
  width:60%;
  height:100%;
  align-items: center;
  justify-content: center;
`
const SearchIconArea = styled.div`
  width:40%;
  height:70%;
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
function handleClicked(event:React.MouseEvent) {
  console.log(event.target)
}
const ReStyledText = styled(Text)`
  width:100%;
`

export default class SearchBar extends PureComponent<SearchBarProps>{
  render() {
    const {...props} = this.props;
    return (
      <StyledDiv>
        <Container>
          <LocationButton {...props} onClick={handleClicked}>
            <Text fontFamily='Noto sans KR' >장소</Text>
          </LocationButton>
          
          <PeriodButton {...props} onClick={handleClicked} >
            <Bar />
            <ReStyledText fontFamily='Noto sans KR' >기간</ReStyledText>
            <Bar />
          </PeriodButton>

          <VisitorButton {...props} onClick={handleClicked}>
            <VisitorArea>
              <ReStyledText fontFamily='Noto sans KR' >인원</ReStyledText>
            </VisitorArea>
            
            <SearchIconArea {...props} onClick={handleClicked}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchIconArea>

          </VisitorButton>

        </Container>
      </StyledDiv>
    )
  }
}