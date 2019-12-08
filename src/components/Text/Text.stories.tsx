import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';

import { Card } from 'src/components/Card';
import Text from './Text';

storiesOf('Text', module)
  .addDecorator(story => <StoryDecorator><Card>{story()}</Card></StoryDecorator>)
  .addDecorator(themeDecorator)
  .add('Sizes', () => (
    <div>
      <Text color="dark">
        Dark
      </Text>
      <Text color="accent">
        Accent
      </Text>
      <Text color="grey5">
        Grey 5
      </Text>
      <Text color="grey20">
        Grey 20
      </Text>
      <Text color="success">
        Success
      </Text>
      <Text color="warning">
        Warning
      </Text>
      <Text color="error">
        Error
      </Text>
    </div>
  ))
  .add('Colors', () => (
    <div>
      <Text marginBottom="sm" fontSize="3xl">
        Size 5xl
      </Text>
      <Text marginBottom="sm" fontSize="2xl">
        Size 5xl
      </Text>
      <Text marginBottom="sm" fontSize="xl">
        Size 5xl
      </Text>
      <Text marginBottom="sm" fontSize="lg">
        Size 5xl
      </Text>
      <Text marginBottom="sm" fontSize="md">
        Size 5xl
      </Text>
      <Text marginBottom="sm" fontSize="sm">
        Size 5xl
      </Text>
      <Text marginBottom="sm" fontSize="xs">
        Size 5xl
      </Text>
    </div>
  ));