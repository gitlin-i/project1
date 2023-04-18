import React from 'react'
import styled from 'styled-components'
import Text from '../Text';

interface ModalContentProps {
  title: string;
  children: any;
}
const StyledContent = styled.div`

    border-bottom: solid 2px #d2d2d2;
    width:100%;
    padding:2rem 0;
    outline:auto;
`


const ModalContent : React.FC<ModalContentProps> = (props) => {
    const {title,children} = props;
  return (
    <StyledContent>
        { title && 
        <Text bold size={20}>{title}</Text>
        }
        {children}
    </StyledContent>
  )
}

export default ModalContent