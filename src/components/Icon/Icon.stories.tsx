import React from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';

import Icon from './Icon';

storiesOf('Icon', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .addDecorator(story => <div className="center-col">{story()}</div>)
  .add('Sizes', () => (
    <>
      <Icon size="xs" marginBottom="md" render={() => <FaArrowAltCircleUp />} />
      <Icon size="sm" marginBottom="md" render={() => <FaArrowAltCircleUp />} />
      <Icon size="md" marginBottom="md" render={() => <FaArrowAltCircleUp />} />
      <Icon size="lg" marginBottom="md" render={() => <FaArrowAltCircleUp />} />
      <Icon size="xl" marginBottom="md" render={() => <FaArrowAltCircleUp />} />
      <Icon
        size="2xl"
        marginBottom="md"
        render={() => <FaArrowAltCircleUp />}
      />
      <Icon
        size="3xl"
        marginBottom="md"
        render={() => <FaArrowAltCircleUp />}
      />
    </>
  ))
  .add('Responsive', () => (
    <>
      <Icon
        size={{ xs: 'xs', sm: 'md', md: 'lg', lg: 'xl', xl: '3xl' }}
        render={() => <FaArrowAltCircleUp />}
      />
    </>
  ));
