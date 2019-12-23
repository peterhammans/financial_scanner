import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';

import Box from './Box';
import { Card } from '../Card';
import { Text } from '../Text';

storiesOf('Box', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .add('Guttering', () => (
    <Box direction="column">
      <Box guttering="md" marginBottom="md">
        <Card>Col 1</Card>
        <Card>Col 2</Card>
      </Box>
      <Box guttering="md" marginBottom="md">
        <Box>
          <Card>Col 1</Card>
        </Box>
        <Box guttering="md">
          <Card>Col 2</Card>
          <Card>Col 3</Card>
        </Box>
      </Box>
      <Box>
        <Card>Row 1</Card>
      </Box>
    </Box>
  ));
