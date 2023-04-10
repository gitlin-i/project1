import { faSliders, faUmbrellaBeach, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState,useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from './Button';
import Category from './Category';
import Text from './Text';
import { CategoryProps, AllCategories } from './Categories';
import withCarousel from './withCarousel';


const StyledCategoryHeader = styled.div<CategoryHeaderProps>`
    width:100%;
    height:6rem;
    background-color:white;
    position: sticky;
    top:calc(5rem - 20px);
    z-index:0;
    padding: 20px 80px 0 80px;
    box-shadow: ${({isSticky}) => isSticky? "0px 2px 2px #e3e3e3;" : ""};
    
`
const StyledDiv = styled.div`
  width:100%;
  height:100%;
`
const CategoriesArea = styled.div`
  display:inline-block;
  width:90%;
  height:100%;
  vertical-align:top;
`
const Form = styled.form`
  height:100%;
`
const FilterArea = styled.div`
  display:inline-flex;
  width:10%;
  height:100%;
  flex-wrap:wrap;
  align-content:center;
  justify-content:center;
  
`
const CategoryList = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(58px, 1fr));
  grid-template-rows:100%;
  grid-column-gap: 2rem;
  white-space: nowrap; 
  
  /* overflow:hidden; */
`

const RestyledButton = styled(Button)`
  min-height:48px;
  min-width:80px;
  max-height:48px;
  max-width:80px;
  padding:0;
  color:black;
  font-size:0.9rem;
  :hover{
    box-shadow:none;
  }
  border:solid 1px gray;
`
interface CategoryHeaderProps {
  isSticky ?: boolean;
}
export const ConvertCategory = <T extends string>({icondef , presentText ,value} : CategoryProps<T>,index:number) : React.ReactNode => {
  const isDefault = index === 0;
  const ref = index === 14;
  if (value == null){
    return <></>
  }
  return (
    <Category value={value} key={value} defaultchecked={isDefault}>
      <FontAwesomeIcon icon={icondef} />
      <Text size={14}>{presentText}</Text>
    </Category>
  )
}

export const ConvertArrayCategory  = (Categories : Array<CategoryProps<any>>) :Array<React.ReactNode> => {
  return Categories.map(ConvertCategory);
}

const handleClick = () => {
  
}
const CategoryHeader : React.FC<CategoryHeaderProps> = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [CategoryNodeArray,setCategoryNodeArray] = useState<React.ReactNode[]>([]);


  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    
    window.addEventListener('scroll',handleScroll);
    setCategoryNodeArray(ConvertArrayCategory(AllCategories));
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  }, [])

  return (
    <StyledCategoryHeader isSticky={isSticky}>
      <StyledDiv>
        <CategoriesArea>

          {withCarousel(ConvertArrayCategory(AllCategories),62,32,3)}

        </CategoriesArea>


        <FilterArea>  
          <RestyledButton onClick={handleClick}> <FontAwesomeIcon icon={faSliders} /> 필터 </RestyledButton>
        </FilterArea>

      </StyledDiv>
    </StyledCategoryHeader>
  )
}
//클릭시 화면 밖의 첫 번째 요소를 선택해서, 움직임.
export default CategoryHeader



