import {ComponentStory,ComponentMeta} from '@storybook/react'
import Carousel from '../component/Carousel'


export default {
    title: 'my-app/Carousel',
    component: Carousel,
    decorators: [(Story) => {
      return(
        <div style={{ margin : '3em'}}>
          <Story />
        </div>
      )
    },
  ],
  } as ComponentMeta<typeof Carousel>;


const Template : ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Base = Template.bind({});
Base.args = {
  offsetX: 60
};