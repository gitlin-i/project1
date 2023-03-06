import {ComponentStory,ComponentMeta} from '@storybook/react'

import SimpleSearchBar from '../component/SimpleSearchBar';

export default {
    title: 'my-app/SimpleSearchBar',
    component: SimpleSearchBar,
    parameters: {
      layout: 'smallmobile',
    }
  } as ComponentMeta<typeof SimpleSearchBar>;
  const Template : ComponentStory<typeof SimpleSearchBar> = (args) => <SimpleSearchBar {...args} />;

export const Base = Template.bind({});

Base.args = {
};