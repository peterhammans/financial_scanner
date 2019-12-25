import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';

import Pill from './Pill';
import { Text } from '../Text';

storiesOf('Pill', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .addDecorator(story => <div className="center-col">{story()}</div>)
  .add('Sizes', () => (
    <>
      <Pill size="small" marginBottom="lg">
        Small
      </Pill>
      <Pill marginBottom="lg">Normal</Pill>
      <Pill size="large">Large</Pill>
    </>
  ));
