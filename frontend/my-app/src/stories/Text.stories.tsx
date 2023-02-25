import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from '../component/Text';

export default {
    title: 'my-app/Text',
    component: Text,
    parameters: {
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof Text>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => {
    return (
    <React.Fragment>
        <Text {...args}> ABCDabcde 0123 가,나,다 </Text>
        <Text size={24} > ABCDabcde 0123 가,나,다 </Text>
        <Text size={36} color='green' fontFamily='Noto Serif KR'> ABCDabcde 0123 모든</Text>
    </React.Fragment>)
};

export const Base = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
};