import {ComponentStory,ComponentMeta} from '@storybook/react'


import SubHeader from '../component/SubHeader'

export default {
    title: 'my-app/SubHeader',
    component: SubHeader,
    
  } as ComponentMeta<typeof SubHeader>;


const Template : ComponentStory<typeof SubHeader> = (args) => <SubHeader  />;

export const Base = Template.bind({});
Base.args = {

};