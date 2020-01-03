import { Global, css } from '@emotion/core';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Provider } from 'react-redux';
import { theme } from 'src/design-system/theme';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { Home } from 'src/pages/Home';
import { Listing } from 'src/pages/Listing';
import configureStore from './store/configureStore';

const store = configureStore();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            font-family: ${theme.typography.fontFamily};
            font-size: ${theme.typography.sizes.md}px;
          }
        `}
      />
      <Provider store={store}>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/listing" component={Listing} />
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
