import React from 'react'
import ModalContent from './ModalContent'
import Button from '../Button';

interface page {
  children?: any;
}
const LoginModal: React.FC<page> = (props) => {

  return (
    <ModalContent title='~여행사 온 것을 환영합니다.'>
      <form action='localhost:8080/login' method='post' name='loginForm'>
        <input type='text' name='id' placeholder='아이디'/>
        <input type='password' name='pwd' placeholder='패스워드'/>
      </form>
      
      <Button type='submit' form='loginForm' primary>계속</Button>
    </ModalContent>
  )
}

export default LoginModal