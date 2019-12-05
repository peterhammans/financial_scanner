import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure } from '@storybook/react';
import { sortCategoryPaths } from './utils';

const req = require.context('../src', true, /.stories.(js|jsx|ts|tsx)$/);

function loadStories() {
  addDecorator(withInfo);
  addDecorator(withA11y);
  addDecorator(withKnobs);

  sortCategoryPaths(req.keys()).forEach(req);
}

configure(loadStories, module);
