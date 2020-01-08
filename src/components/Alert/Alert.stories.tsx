import React, { useState } from 'react';
import { StoryDecorator, themeDecorator } from '.storybook/decorators';
import { storiesOf } from '@storybook/react';
import Alert from './Alert';

storiesOf('Alert', module)
  .addDecorator(story => <StoryDecorator>{story()}</StoryDecorator>)
  .addDecorator(themeDecorator)
  .add('Variants', () => (
    <div>
      <Alert variant="success" marginBottom="sm">
        Success alert
      </Alert>
      <Alert variant="warning" marginBottom="sm">
        Warning alert
      </Alert>
      <Alert variant="error" marginBottom="sm">
        Error alert
      </Alert>
      <Alert variant="info">Info alert</Alert>
    </div>
  ))
  .add('Dismissable', () =>
    React.createElement(() => {
      const [dismissed, setDismissed] = useState(false);

      return (
        !dismissed && (
          <Alert
            variant="success"
            marginBottom="sm"
            onDismiss={() => setDismissed(!dismissed)}
          >
            Success Alert
          </Alert>
        )
      );
    })
  );
