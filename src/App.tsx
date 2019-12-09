import React from "react";
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { theme } from 'src/design-system/theme';
import { Route, BrowserRouter as Router } from "react-router-dom";

import Listing from "src/pages/Listing";
import configureStore from "./store/configureStore";

const store = configureStore();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Route path="/listing" component={Listing} />
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
