import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ComponentStory,ComponentMeta} from '@storybook/react'
import Text from '../component/Text';
import Category from '../component/Category';

export default {
    title: 'my-app/Category',
    component: Category,
    parameters: {
      layout: 'centered',
     }
  } as ComponentMeta<typeof Category>;
  const Template : ComponentStory<typeof Category> = (args) => {
  return (
  <Category>
    <FontAwesomeIcon icon={faUmbrellaBeach} size="xl" />
    <Text size={12}>해변</Text>
  </Category>
  )};

export const Base = Template.bind({});

Base.args = {
};