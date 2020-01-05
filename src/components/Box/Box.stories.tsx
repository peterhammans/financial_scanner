import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';

import Box from './Box';
import { Card } from '../Card';

storiesOf('Box', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .add('Guttering', () => (
    <Box direction="column">
      <Box guttering="md" marginBottom="md">
        <Card>Col 1</Card>
        <Card>Col 2</Card>
      </Box>
    </Box>
  ))
  .add('Grid', () => (
    <Box>
      <Box column={2}>
        <Card>Col 2</Card>
      </Box>
      <Box column={8}>
        <Card>Col 2</Card>
      </Box>
      <Box column={2}>
        <Card>Col 2</Card>
      </Box>
    </Box>
  ));
