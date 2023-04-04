import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from '../component/Text';

export default {
    title: 'my-app/Text',
    component: Text,
  } as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
    return (
    <React.Fragment>
        <Text {...args}> ABCDabcde 0123 가,나,다 </Text>
        <Text size={24} > ABCDabcde 0123 가,나,다 </Text>
        <Text size={36} color='green' fontFamily='Noto Serif KR'> ABCDabcde 0123 모든</Text>
        <Text loading color='yellow'> ABCDabcde 0123 모든</Text>
    </React.Fragment>)
};

export const Base = Template.bind({});
Base.args = {
};