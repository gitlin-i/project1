import Button, { ButtonProps } from "./Button"
import React from 'react'
import styled from "styled-components"
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import withDropDown from "./withDropDown"
import MenuItem from "./MenuItem"
const StyledButton = styled(Button)`
  position: relative;
  padding: 0px 0px;
  border-radius: 2rem;
  color:gray;
  @media (max-width: ${props => props.theme.breakPoints['medium']}px) {
    display:none;
  }
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
  return (
    <React.Fragment>
      <MenuItem> 회원 가입 </MenuItem>
      <MenuItem> 로그인 </MenuItem>
    </React.Fragment>
  )
}
const AccountButton = withDropDown(AccountButtonRaw)(MenuItems)//클릭 대상, 보여질 메뉴 아이템(Node 반환 함수)

export default AccountButton;