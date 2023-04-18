import {ComponentStory,ComponentMeta} from '@storybook/react'
import Carousel22 from '../component/Carousel22'
import withCarousel from '../component/withCarousel';
import { ConvertArrayCategory } from '../component/CategoryHeader';
import { AllCategories } from '../component/Categories';

export default {
    title: 'my-app/Carousel22',
    component: Carousel22,
    decorators: [(Story) => {
      return(
        <div style={{ margin : '3em'}}>
          <Story />
        </div>
      )
    },
  ],
  } as ComponentMeta<typeof Carousel22>;


const Template : ComponentStory<typeof Carousel22> = (args) => {

  return (
    <div style={{width:'282px', height:'100px'}}>
    {withCarousel(ConvertArrayCategory(AllCategories),58,32,3)}
    </div>
  )
};

export const Base = Template.bind({});
Base.args = {

};