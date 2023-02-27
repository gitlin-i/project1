import {ComponentStory,ComponentMeta} from '@storybook/react'

import SimpleSearchBar from '../component/SimpleSearchBar';

export default {
    title: 'my-app/SimpleSearchBar',
    component: SimpleSearchBar,
    argTypes: { onClick: { action: 'clicked' } },
    parameters: {
      layout: 'fullscreen',
      
    },
  } as ComponentMeta<typeof SimpleSearchBar>;
  const Template : ComponentStory<typeof SimpleSearchBar> = (args) => <SimpleSearchBar {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
};