import Button from "./Button";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

interface CarouselProps{
  offsetX?: number;
  moveX?:number;
}
const Window = styled.div`
  /* overflow: hidden;  */
  position: relative;
  width: 60px;
  height: 60px;
  border: 4px solid red;

`;
const Container = styled.ul<CarouselProps>`

  position: absolute;
  width:600px;
  height:100%;
  margin:0;
  padding:0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(58px, 1fr));
  grid-template-rows: 100%;
  white-space: nowrap;
  border: solid 4px purple;
  transform: translateX( ${ ({moveX}) => moveX? -moveX : 0 }px);
  transition-duration: 500ms;
  
`;

const ReStyledButton = styled(Button)`
  width :48px;
  height: 48px;
  
`

const Item = styled.li`
  display: inline-block;
  list-style-type: none;
  border: solid 4px yellow;
`;

const testArr = (num:number)  => {
  const testArr = Array(num).fill('').map((_,index)=> {
    return <Item key={index}>carousel</Item>
  })
  return testArr
}

const Carousel : React.FC<CarouselProps> = (props) => {
  const {offsetX , ...rest} = props;
  const [moveX, setMoveX] = useState(0)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [someContents,setSomeContents] = useState<Array<React.ReactNode>>([])

  useEffect(() => {
    setSomeContents(testArr(5))

  }, [])
  useEffect(() => {
    if(offsetX){
      setMoveX(offsetX * carouselIndex)
    }
  }, [carouselIndex])

  const nextClick = () => {
    setCarouselIndex(carouselIndex +1)

  };
  const prevClick = () => {
    setCarouselIndex(carouselIndex -1)
  };
  return (
    <>
      <Window>
        <Container moveX={moveX} >
          {someContents}
        </Container>
      </Window>

      <hr></hr>
      <ReStyledButton onClick={prevClick} disabled={carouselIndex <= 0}> &lt; </ReStyledButton>
      <Button onClick={nextClick} disabled={carouselIndex >= someContents.length -1} > &gt; </Button>

    </>
  );
};

export default Carousel;
