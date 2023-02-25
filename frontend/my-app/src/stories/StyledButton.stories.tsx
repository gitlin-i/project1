import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button  from '../component/Button';

export default {
    title: 'my-app/Button',
    component: Button,
    parameters: {
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof Button>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}> 123 </Button>;


export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {

};
