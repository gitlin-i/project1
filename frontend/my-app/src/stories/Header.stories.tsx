import {ComponentStory,ComponentMeta} from '@storybook/react'


import Header from '../component/Header'

export default {
    title: 'my-app/Header',
    component: Header,
    decorators: [(Story) => {
      return(
        <div style={{ margin : '3em'}}>
          <Story />
        </div>
      )
    },
  ],
  } as ComponentMeta<typeof Header>;


const Template : ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Base = Template.bind({});
Base.args = {

};