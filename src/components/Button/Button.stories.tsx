import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .addDecorator(story => <div className="center-col">{story()}</div>)
  .add('Variants', () => (
    <div>
      <Button onClick={() => {}} marginBottom="md">
        Primary
      </Button>
      <Button onClick={() => {}} variant="secondary">
        Secondary
      </Button>
    </div>
  ))
  .add('Size', () => (
    <div>
      <Button onClick={() => {}} size="large" marginBottom="md">
        Large
      </Button>
      <Button onClick={() => {}} marginBottom="md">
        Normal
      </Button>
      <Button onClick={() => {}} size="small">
        Small
      </Button>
    </div>
  ));
