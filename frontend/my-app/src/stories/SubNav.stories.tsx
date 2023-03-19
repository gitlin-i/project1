import {ComponentStory,ComponentMeta} from '@storybook/react'

import SubNav from '../component/SubNav';

export default {
    title: 'my-app/SubNav',
    component: SubNav,
  } as ComponentMeta<typeof SubNav>;
  const Template : ComponentStory<typeof SubNav> = (args) => <SubNav  />;

export const Base = Template.bind({});

Base.args = {
};