import React, { PureComponent, useState } from 'react'
import styled from 'styled-components'
import Button from './Button';

interface ModalProps {
    children?: React.ReactNode;
    isOpenModal?: boolean;
}

const StyledModal = styled.div<ModalProps>`
    display: ${({ isOpenModal }) => (isOpenModal ? "block" : "none")};
    position:fixed;
    z-index: 100;
    width: 60vw;
    height:60vh;
    outline:auto;
`
const ModalWrapper = styled.div`
    vertical-align: middle;
`
const ModalContainer = styled.div`
    background-color:orange;
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
`

const Modal: React.FC<ModalProps> = (props) => {
    const {children, ...args} = props;
    const [isOpenModal, setIsOpenModal ] = useState(false)

    const handleOpenModal = () => {
        setIsOpenModal(true);
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };
  return (
    <>
        <Button onClick={handleOpenModal} >Open Modal</Button>
        
        <StyledModal isOpenModal={isOpenModal}>
            <Button onClick={handleCloseModal} >Close Modal</Button>
            <ModalWrapper>
                <ModalContainer>
                    {children}
                </ModalContainer>
            </ModalWrapper>
        </StyledModal>
    </>
    
  )
}

export default Modal;