import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';
import { Button } from 'src/components/Button';

import Dropdown from './Dropdown';
import { Text } from 'src/components/Text';

storiesOf('Dropdown', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .addDecorator(story => <div className="center-col">{story()}</div>)
  .add('Placements', () => (
    <>
      <Dropdown
        name="dropdown-default"
        button={({ ref, show, hide, open }) => (
          <Button
            type="button"
            ref={ref}
            onClick={open ? hide : show}
            marginBottom="xl"
          >
            Default
          </Button>
        )}
      >
        <Text color="light" fontSize="sm">
          Popper
        </Text>
      </Dropdown>
      <Dropdown
        name="dropdown-right"
        placement="right"
        button={({ ref, show, hide, open }) => (
          <Button
            type="button"
            ref={ref}
            onClick={open ? hide : show}
            marginBottom="xl"
          >
            Right
          </Button>
        )}
      >
        <Text color="light" fontSize="sm">
          Popper
        </Text>
      </Dropdown>
      <Dropdown
        name="dropdown-top"
        placement="top"
        button={({ ref, show, hide, open }) => (
          <Button
            type="button"
            ref={ref}
            onClick={open ? hide : show}
            marginBottom="xl"
          >
            Top
          </Button>
        )}
      >
        <Text color="light" fontSize="sm">
          Popper
        </Text>
      </Dropdown>
      <Dropdown
        name="dropdown-left"
        placement="left"
        button={({ ref, show, hide, open }) => (
          <Button
            type="button"
            ref={ref}
            onClick={open ? hide : show}
            marginBottom="xl"
          >
            Left
          </Button>
        )}
      >
        <Text color="light" fontSize="sm">
          Popper
        </Text>
      </Dropdown>
    </>
  ));
