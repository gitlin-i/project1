import {ComponentStory,ComponentMeta} from '@storybook/react'

import Modal from '../component/Modal'
import React from 'react'
export default {
    title: 'my-app/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;
  const Template : ComponentStory<typeof Modal> = (args) => {
    
    return (
        <React.Fragment>
            <Modal {...args}>
                <p>123</p>
                <p>456</p>
            </Modal>
        </React.Fragment>

    )
  };

export const Base = Template.bind({});
Base.args = {
  isOpenModal:false
};