import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';

import Loading from './Loading';
import { Box } from '../Box';

storiesOf('Loading', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .addDecorator(story => <div className="center-col">{story()}</div>)
  .add('Sizes', () => (
    <>
      <Box marginBottom="lg" width="auto">
        <Loading size="small" />
      </Box>
      <Box marginBottom="lg" width="auto">
        <Loading size="normal" />
      </Box>
      <Box marginBottom="lg" width="auto">
        <Loading size="big" />
      </Box>
    </>
  ))
  .add('Colors', () => (
    <>
      <Box marginBottom="lg" width="auto">
        <Loading color="dark" />
      </Box>
      <Box marginBottom="lg" width="auto">
        <Loading color="accent" />
      </Box>
    </>
  ));
