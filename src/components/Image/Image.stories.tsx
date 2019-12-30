import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';

import Image from './Image';
import { Text } from '../Text';

storiesOf('Image', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .addDecorator(story => <div className="center-col">{story()}</div>)
  .add('Sizes', () => (
    <>
      <Image
        src="https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188327.jpg"
        size="small"
        marginBottom="lg"
      />
      <Image
        src="https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188327.jpg"
        marginBottom="lg"
      />
      <Image
        src="https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188327.jpg"
        size="large"
      />
    </>
  ))
  .add('Masks', () => (
    <>
      <Image
        src="https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188327.jpg"
        round
      />
    </>
  ));
