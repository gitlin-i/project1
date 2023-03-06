import {ComponentStory,ComponentMeta} from '@storybook/react'

import Navbar from '../component/Navbar'

export default {
    title: 'my-app/Navbar',
    component: Navbar,
  } as ComponentMeta<typeof Navbar>;
const Template : ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Base = Template.bind({});

Base.args = {
  
};