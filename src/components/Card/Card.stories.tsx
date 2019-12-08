import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';

import Card from './Card';

storiesOf('Card', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .add('Default', () => (
    <Card>[Content]</Card>
  ))
  .add('No shadow', () => (
    <Card noShadow>[Content]</Card>
  ));