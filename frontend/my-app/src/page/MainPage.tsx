import React, { PureComponent, Component } from 'react'
import Card from 'src/component/Card'
import styled from 'styled-components'

const StyledMain = styled.main`
  width:100%;
  background-color: white;
  margin-top:1rem;
  margin-bottom:12vh;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  z-index:-1;
  padding: 0px 80px;
  @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
    padding:0px 20px;
  }
  @media (max-width: 1440px) {
    padding:0px 40px;
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

export default class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <StyledMain>
          <StyledCardList>
            <Card>1</Card>
            <Card>2</Card>
            <Card>3</Card>
            <Card>4</Card>
            <Card>5</Card>
            <Card>6</Card>
            <Card>7</Card>
            <Card>5</Card>

            <Card>1</Card>
            <Card>2</Card>
            <Card>3</Card>
            <Card>4</Card>
            <Card>5</Card>
            <Card>6</Card>
            <Card>7</Card>
            <Card>5</Card>

            <Card>1</Card>
            <Card>2</Card>
            <Card>3</Card>
            <Card>4</Card>
            <Card>5</Card>
            <Card>6</Card>
            <Card>7</Card>
            <Card>5</Card>
          </StyledCardList>
        </StyledMain>
      </React.Fragment>
    )
  }
}
