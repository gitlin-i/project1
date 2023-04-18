import React, { PureComponent, useState } from 'react'
import styled from 'styled-components'
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '../../hook/hooks';
import { closeModal,  selectModalId,  selectModalTitle, selectModalisOpen } from '../../reducer/modalReducers';
import LoginModal from '../../component/Modal/LoginModal';
import { ModalInterface } from '../../type';

const StyledModal = styled.div`
    position: fixed;
    top:5rem;
    height:60vh;

    /* transform: translate(-50%, -50%); */
    z-index: 11;
    width: 50vw;

    border-radius:1rem;
    background-color:white;
    border: none;

`
const ModalHeader = styled.header`
    display:block;
    width:100%;
    height: 4rem;
    border-bottom: solid 2px #c9c9c9;
    text-align:center;
`
const ModalFooter = styled.div`
    display:flex;
    width:100%;
    height: 2rem;
    justify-content:center;
    align-items: center;
    border-top: solid 2px gray;
`
const ModalContents = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    height:calc(60vh - 4rem - 1rem);
    margin-bottom:1rem;
    overflow-y:scroll;
`
const RestyledButton = styled(Button)`
    display:inline-block;
    position:absolute;
    top:1rem;
    left:1rem;
    text-align:none;
    
    width:2rem;
    height:2rem;

    padding:0;
    margin-right:1rem;
    border-radius:2rem;
    
    :hover{
        background-color:#dcdcdc;
        box-shadow:none;
    }
    color:black;
`
const H5 = styled.h5`
    display:inline-block;
    vertical-align:middle;
    line-height:4rem;
    margin:0;
`
const Overlay = styled.div`
width:100vw;
height: 100vh;
background-color: rgba(0,0,0,.2);
position:fixed;
top:0;
left:0;
z-index:10;

display:flex;
justify-content:center;
align-content:center;
`
const Modal: React.FC<ModalInterface> = (props) => {
    const {children, ...args} = props;
    const isOpen = useAppSelector(selectModalisOpen)
    const modalTitle = useAppSelector(selectModalTitle)
    const modalId = useAppSelector(selectModalId)
    const dispatch = useAppDispatch()
    
    const closeModal2 = (e:React.MouseEvent) => {
        e.stopPropagation()
        dispatch(closeModal())
    }
  return (
    <React.Fragment>
        { isOpen &&
        <Overlay onClick={closeModal2} >
            <StyledModal onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <RestyledButton onClick={closeModal2} >X</RestyledButton>
                    <H5>{modalTitle}</H5>
                </ModalHeader>
                <ModalContents>
                {modalId === "login" && <LoginModal/>}
                {children}
                </ModalContents>
            </StyledModal>
        </Overlay>
        }
    </React.Fragment>
    
  )
}

export default Modal;