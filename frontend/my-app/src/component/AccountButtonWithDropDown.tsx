import Button, { ButtonProps } from "./Button"
import React from 'react'
import styled from "styled-components"
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import withDropDown from "./withDropDown"
import MenuItem from "./MenuItem"
import Text from "./Text"
import { useAppDispatch } from "../hook/hooks"
import { openModal } from "../reducer/modalReducers"
import LoginModalPage from "./Modal/LoginModal"
const StyledButton = styled(Button)`
  position: relative;
  padding: 0px 0px;
  border-radius: 2rem;
  color:gray;
  @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
    display:none;
  }
  border: none;
  outline:none;
`
const StyledA = styled.a`
  display:grid;
  text-decoration:none;
  width:100%;
  height:100%;

  align-content:center;

`

const AccountButtonRaw : React.FC<ButtonProps> = (props) => {
    const {...args} = props;


  return (
    <StyledButton {...args}>
        <FontAwesomeIcon icon={faCircleUser} size="3x" />
    </StyledButton>
  )
}
const MenuItems = () => {
  const dispatch = useAppDispatch()
  const handleClick = () => { dispatch(openModal({isOpenModal:true, modalTitle:"로그인 또는 회원가입", modalId: 'login'}))}
  return (
    <React.Fragment>  
      <MenuItem > <StyledA onClick={handleClick} > <Text bold> 회원 가입 </Text>  </StyledA> </MenuItem>
      <MenuItem> <StyledA onClick={handleClick} ><Text> 로그인 </Text> </StyledA> </MenuItem>
    </React.Fragment>
  )
}
const AccountButton = withDropDown(AccountButtonRaw)(MenuItems)//클릭 대상, 보여질 메뉴 아이템(Node 반환 함수)

export default AccountButton;