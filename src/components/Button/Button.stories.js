import React from 'react';
import { Text,Button,View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


storiesOf('Button', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('with text', () => (
      <Text>Hello ADNAN</Text>
  ))
  .add('with some emoji', () => (
      <Text>😀 😎 👍 💯</Text>
  ));
