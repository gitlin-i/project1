import {ComponentStory,ComponentMeta} from '@storybook/react'

import CategoryHeader from '../component/CategoryHeader';

export default {
    title: 'my-app/CategoryHeader',
    component: CategoryHeader,
  } as ComponentMeta<typeof CategoryHeader>;
  const Template : ComponentStory<typeof CategoryHeader> = (args) => <CategoryHeader  {...args}/>;

export const Base = Template.bind({});

Base.args = {
};