import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';

import { Card } from 'src/components/Card';
import Table from './Table';
import Tr from './Tr';
import Th from './Th';
import Td from './Td';
import { Text } from 'src/components/Text';

storiesOf('Table', module)
  .addDecorator(story => <StoryDecorator><Card>{story()}</Card></StoryDecorator>)
  .addDecorator(themeDecorator)
  .add('Default', () => (
    <Table summary="Default table">
      <Tr>
        <Th><Text tagName="span">Heading 1</Text></Th>
        <Th><Text tagName="span">Heading 2</Text></Th>
        <Th><Text tagName="span">Heading 3</Text></Th>
      </Tr>
      <Tr>
        <Td><Text tagName="span">Row 1</Text></Td>
        <Td><Text tagName="span">Row 1</Text></Td>
        <Td><Text tagName="span">Row 1</Text></Td>
      </Tr>
      <Tr>
        <Td><Text tagName="span">Row 2</Text></Td>
        <Td><Text tagName="span">Row 2</Text></Td>
        <Td><Text tagName="span">Row 2</Text></Td>
      </Tr>
      <Tr noBorder>
        <Td><Text tagName="span">Row 3</Text></Td>
        <Td><Text tagName="span">Row 3</Text></Td>
        <Td><Text tagName="span">Row 3</Text></Td>
      </Tr>
    </Table>
  ));