import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Button from './Button';

interface CarouselProps{
  ItemWidth?: number;
  moveX?:number;
  length?:number;
  gap?:number;
}
const Window = styled.div`
  overflow: hidden; 
  position: relative;
  width:100%;
  height:100%;
  

`;
const Container = styled.ul<CarouselProps>`
  position: absolute;
  width: calc((${props => props.ItemWidth}px * ${props=>props.length}) + ${props => props.gap}px * (${props=>props.length} -1)  ); 
  height:100%;
  margin:0;
  padding:0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 58px);
  grid-template-rows: 100%;
  grid-column-gap: 2rem;
  white-space: nowrap;

  transform: translateX( ${ ({moveX}) => moveX? -moveX : 0 }px);
  transition-duration: 500ms;
  
`;

const ReStyledButton = styled(Button)`
  position:absolute;
  width :48px;
  height: 48px;
  border-radius:2rem;
  padding: 0;
  display: ${props => props.disabled? 'none':''};
  opacity:0.6;
  &:hover{
    opacity:1;
  }
`
const RightButton = styled(ReStyledButton)`
  right:0;
  top:25%;
`
const LeftButton = styled(ReStyledButton)`
  left:0;
  top:25%;
`

const Item = styled.li`
  display: inline-block;
  list-style-type: none;
  border: solid 4px yellow;
`;
//ItemWidth=> item의 가로 길이
export const calcViewItem = (viewWidth:number,itemWidth:number, gap=0) => {
  const viewItems = viewWidth / (itemWidth + gap)
  return  Math.trunc(viewItems)

}// 지금 내 화면에 몇개가 보이는가?



const withCarousel = (WrappedComponents : React.ReactNode[], itemWidth:number ,gap=0,offset=1,) => {

      const [moveX, setMoveX] = useState(0) 
      const [carouselIndex, setCarouselIndex] = useState(0)
      const windowRef = useRef<HTMLDivElement>(null)

      const [presentItems,setPresentItems] = useState(0) 
      

      useEffect(() => { 
        setMoveX((itemWidth + gap) * carouselIndex)
        if(windowRef.current){
          const viewWidth :number = windowRef.current.clientWidth
          setPresentItems( calcViewItem(viewWidth,itemWidth,gap) )
        }

      }, [carouselIndex])
      const nextClick = () => {
        const rest = WrappedComponents.length - (carouselIndex + presentItems)
        if( rest  < offset) {
          setCarouselIndex( carouselIndex + rest) 
        } else{
          setCarouselIndex(carouselIndex + offset)
        }
        
      };
      const prevClick = () => {
        const rest = carouselIndex
        if( rest  < offset) {
          setCarouselIndex( carouselIndex - rest) 
        } else{
          setCarouselIndex(carouselIndex - offset)
        }

      };
      return (
        <React.Fragment>
          <Window ref={windowRef}>
            <Container moveX={moveX} ItemWidth={itemWidth} gap={gap} length={WrappedComponents.length} >
              {WrappedComponents}
            </Container>
            <LeftButton onClick={prevClick} disabled={carouselIndex <= 0}> &lt; </LeftButton>
            <RightButton onClick={nextClick} disabled={carouselIndex + presentItems >= WrappedComponents.length} > &gt; </RightButton>
          </Window>
        </React.Fragment>
      );
}


export default withCarousel