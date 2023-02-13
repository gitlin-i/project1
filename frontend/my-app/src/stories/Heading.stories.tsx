import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading }  from '../component/Heading';

export default {
  title: 'my-app/Heading',
  component: Heading,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const base = Template.bind({});
