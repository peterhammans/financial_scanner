import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';

import Loading from './Loading';
import { Box } from '../Box';

storiesOf('Loading', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .add('Sizes', () => (
    <Box justifyContent="center" alignItems="center" direction="column">
      <Box marginBottom="lg" width="auto">
        <Loading size="small" />
      </Box>
      <Box marginBottom="lg" width="auto">
        <Loading size="normal" />
      </Box>
      <Box marginBottom="lg" width="auto">
        <Loading size="big" />
      </Box>
    </Box>
  ))
  .add('Colors', () => (
    <Box justifyContent="center" alignItems="center" direction="column">
      <Box marginBottom="lg" width="auto">
        <Loading color="dark" />
      </Box>
      <Box marginBottom="lg" width="auto">
        <Loading color="accent" />
      </Box>
    </Box>
  ));;