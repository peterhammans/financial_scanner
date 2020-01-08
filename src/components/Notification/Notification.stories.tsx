import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';
import Notification from './Notification';

storiesOf('Notification', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .add('Variants', () => (
    <div>
      <Notification variant="success" marginBottom="sm">
        Success notification
      </Notification>
      <Notification variant="warning" marginBottom="sm">
        Warning notification
      </Notification>
      <Notification variant="error" marginBottom="sm">
        Error notification
      </Notification>
      <Notification variant="info">Info notification</Notification>
    </div>
  ));
