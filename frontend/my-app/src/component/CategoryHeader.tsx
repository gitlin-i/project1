import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState,useEffect} from 'react'
import styled from 'styled-components'
import Button from './Button';
import Category from './Category';
import Text from './Text';
import { CategoryProps, AllCategories } from './Categories';
import withCarousel from './withCarousel';
import { throttle } from 'lodash';
import { useAppDispatch } from '../hook/hooks';
import { openModal } from '../reducer/modalReducers';



const StyledCategoryHeader = styled.div<CategoryHeaderProps>`
    width:100%;
    height:6rem;
    background-color:white;
    position: sticky;
    top:calc(5rem - 20px);
    z-index:0;
    padding: 20px 80px 0 80px;
    box-shadow: ${({isSticky}) => isSticky? "0px 2px 2px #e3e3e3;" : ""};

    @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
    height:4rem;
    top: 5rem;
    padding: 0px 20px 0 20px;
  }
    
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

  @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
    width:100%;
  }

`

const FilterArea = styled.div`
  display:inline-flex;
  width:10%;
  height:100%;
  flex-wrap:wrap;
  align-content:center;
  justify-content:center;

  @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
    display:none;
  }
  
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


const CategoryHeader : React.FC<CategoryHeaderProps> = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const dispatch = useAppDispatch();

  const openModal2 = () => {
    dispatch(openModal({isOpenModal:true, modalTitle:"필터" }))
  }
  const closeModal = () => {
    setIsOpenModal(false)
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    const handleThrottleScroll = throttle(handleScroll,300)

    window.addEventListener('scroll',handleThrottleScroll);
    return () => {
      window.removeEventListener('scroll',handleThrottleScroll);
    }
  }, [])

  return (
    <StyledCategoryHeader isSticky={isSticky}>
      <StyledDiv>
        <CategoriesArea>
          {withCarousel(ConvertArrayCategory(AllCategories),58,32,4)}
        </CategoriesArea>


        <FilterArea>  
          <RestyledButton onClick={openModal2}> <FontAwesomeIcon icon={faSliders} /> 필터 </RestyledButton>
        </FilterArea>

      </StyledDiv>
    </StyledCategoryHeader>
  )
}

export default CategoryHeader



