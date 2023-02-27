import {ComponentStory,ComponentMeta} from '@storybook/react'

import SearchBar from '../component/SearchBar';

export default {
    title: 'my-app/SearchBar',
    component: SearchBar,
    argTypes: { onClick: { action: 'clicked' } },
    parameters: {
      layout: 'fullscreen',
      
    },
  } as ComponentMeta<typeof SearchBar>;
  const Template : ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
};