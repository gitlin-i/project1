import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  AccountButton  from '../component/AccountButtonWithDropDown';

export default {
    title: 'my-app/AccountButton',
    component: AccountButton,
    argTypes: {
       onClick: { action: 'clicked' },
   },
   parameters: {
    layout: 'centered',
   }

} as ComponentMeta<typeof AccountButton>;


const Template: ComponentStory<typeof AccountButton> = (args) => <AccountButton > 버튼 </AccountButton>

export const Base = Template.bind({});
Base.args = {

};



// More on args: https://storybook.js.org/docs/react/writing-stories/args
