
import React from 'react'
import Card from 'src/component/Card'
import styled from 'styled-components'
import Api from '../Api';

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
interface ContentProps {
  id:number;
  title:string;
  price:number;
  addres:string;
}

const CardComponet = (Content:ContentProps) => {
  return (<Card title={Content.title}  price={Content.price} />)
}

const getArrayData = (data: Array<ContentProps>) => {
  const temp = data.slice()
  return temp.map(CardComponet)
  
}
const data = Api.get<ContentProps>("/rooms?_limit=8");

const MainPage: React.FC = (props) => {
  let Adata :ContentProps[] = []


  return (
    <React.Fragment>
      <StyledMain>
        <StyledCardList>
          {getArrayData(Adata)}
        </StyledCardList>
      </StyledMain>
  </React.Fragment>
  )
}
export {data,getArrayData,CardComponet}
export default MainPage