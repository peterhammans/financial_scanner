import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Card', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .add('Default', () => (
    <Button onClick={() => { }}>[Content]</Button>
  ));