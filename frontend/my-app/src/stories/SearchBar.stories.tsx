import {ComponentStory,ComponentMeta} from '@storybook/react'

import SearchBar from '../component/SearchBar';

export default {
    title: 'my-app/SearchBar',
    component: SearchBar,
  } as ComponentMeta<typeof SearchBar>;
  const Template : ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Base = Template.bind({});

Base.args = {
};