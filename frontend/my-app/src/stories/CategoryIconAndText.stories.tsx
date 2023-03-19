import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ComponentStory,ComponentMeta} from '@storybook/react'
import Text from '../component/Text';

import CategoryIconAndText from '../component/CategoryIconAndText';

export default {
    title: 'my-app/CategoryIconAndText',
    component: CategoryIconAndText,
    parameters: {
      layout: 'centered',
     }
  } as ComponentMeta<typeof CategoryIconAndText>;
  const Template : ComponentStory<typeof CategoryIconAndText> = (args) => {
    return (
        <CategoryIconAndText>
            <FontAwesomeIcon icon={faUmbrellaBeach} size="xl" />
            <Text size={12}>해변</Text>
        </CategoryIconAndText>
    )
    
};

export const Base = Template.bind({});

Base.args = {
};