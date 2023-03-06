import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  DropDown  from '../component/DropDown';

export default {
    title: 'my-app/DropDown',
    component: DropDown,
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
} as ComponentMeta<typeof DropDown>;


const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args}> 버튼 </DropDown>

export const Base = Template.bind({});
Base.args = {

};