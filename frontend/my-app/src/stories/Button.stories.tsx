import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button  from '../component/Button';

export default {
    title: 'my-app/Button',
    component: Button,
  //   argTypes: {
  //      onClick: { action: 'clicked' },
  //  },
  decorators: [(Story) => {
    return(
      <div style={{ margin : '3em'}}>
        <Story />
      </div>
    )
  },
],
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args}> 버튼 </Button>

export const Base = Template.bind({});
Base.args = {

};

export const Primary = Template.bind({});
Primary.args = {
  primary:true
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary:true
};


// More on args: https://storybook.js.org/docs/react/writing-stories/args
