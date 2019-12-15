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
        button={({ ref, setOpen, open }) => (
          <Button type="button" ref={ref} onClick={() => setOpen(!open)} marginBottom="xl">
            Default
          </Button>
        )}
      >
        <Text color="light" fontSize="sm">Popper</Text>
      </Dropdown>
      <Dropdown
        placement="right"
        button={({ ref, setOpen, open }) => (
          <Button type="button" ref={ref} onClick={() => setOpen(!open)} marginBottom="xl">
            Right
          </Button>
        )}
      >
        <Text color="light" fontSize="sm">Popper</Text>
      </Dropdown>
      <Dropdown
        placement="top"
        button={({ ref, setOpen, open }) => (
          <Button type="button" ref={ref} onClick={() => setOpen(!open)} marginBottom="xl">
            Top
          </Button>
        )}
      >
        <Text color="light" fontSize="sm">Popper</Text>
      </Dropdown>
      <Dropdown
        placement="left"
        button={({ ref, setOpen, open }) => (
          <Button type="button" ref={ref} onClick={() => { console.log('BLAH'); setOpen(!open); }} marginBottom="xl">
            Left
          </Button>
        )}
      >
        <Text color="light" fontSize="sm">Popper</Text>
      </Dropdown>
    </>
  ));