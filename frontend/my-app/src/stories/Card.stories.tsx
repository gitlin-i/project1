import { configureStore, createSlice } from '@reduxjs/toolkit';
import {ComponentStory,ComponentMeta} from '@storybook/react'
import { Provider } from 'react-redux';
import { fetchRooms } from '../reducer/roomsReducers';

import Card from '../component/Card'

export default {
    title: 'my-app/Card',
    component: Card,
    decorators: [(Story) => {
      return(
        <div style={{ margin : '3em'}}>
          <Story />
        </div>
      )
    },
  ],
  } as ComponentMeta<typeof Card>;


const Template : ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Base = Template.bind({});
Base.args = {

};