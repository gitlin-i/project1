import {ComponentStory,ComponentMeta} from '@storybook/react'

import Navbar from '../component/Navbar'

export default {
    title: 'my-app/Navbar',
    component: Navbar,
    argTypes: { onClick: { action: 'clicked' } },
    parameters: {
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof Navbar>;
  const Template : ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  
};