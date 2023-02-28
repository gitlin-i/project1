import {ComponentStory,ComponentMeta} from '@storybook/react'

import Card from '../component/Card'

export default {
    title: 'my-app/Card',
    component: Card,
    argTypes: { onClick: { action: 'clicked' } },
    parameters: {
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof Card>;
  const Template : ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  
};