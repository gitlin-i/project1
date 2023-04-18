import {ComponentStory,ComponentMeta} from '@storybook/react'

import Modal from '../component/Modal/Modal'
import React from 'react'
import Button from '../component/Button';
import { useAppDispatch } from '../hook/hooks';
import { openModal } from '../reducer/modalReducers';
import ModalContent from '../component/Modal/ModalContent';
export default {
    title: 'my-app/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;
  const Template : ComponentStory<typeof Modal> = (args) => {
    const dispatch = useAppDispatch();
    const modalContents = [<ModalContent title='test' >hi, modal</ModalContent>,
    <ModalContent title='test'>hi, modal2</ModalContent>,
    <ModalContent title='test'>hi, modal3</ModalContent>]
    const onF = () => {
      dispatch(openModal({isOpenModal:true, modalTitle: "test"}))
    }
    return (
        <React.Fragment>
            <Button onClick={onF} >on</Button>
            <Modal {...args}>
              {modalContents}
            </Modal>
        </React.Fragment>

    )
  };

export const Base = Template.bind({});
Base.args = {
  isOpenModal:false
};