import React from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';
import { Button } from 'src/components/Button';
import Modal from './Modal';
import { Card } from 'src/components/Card';
import { Box } from 'src/components/Box';
import { Text } from 'src/components/Text';

storiesOf('Modals', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .add('Default', () => (
    <Modal name="default-modal" button={({ show }) => <Button onClick={show}>Modal</Button>}>
      {({ hide }) => (
        <Card padding="2xl">
          <Text marginBottom="lg">Lorem ipsum dolor sit amet ad hicio hortus est  ipsum dolor sit amet ad hicio hortus est  ipsum dolor sit amet ad hicio hortus est</Text>
          <Box alignItems="flex-end" justifyContent="flex-end">
            <Button onClick={hide} marginRight="md" variant="secondary">Cancel</Button>
            <Button onClick={hide}>Ok</Button>
          </Box>
        </Card>
      )}
    </Modal>
  ));