import React from "react";
import { ThemeProvider } from 'react-jss';
import { theme } from 'src/design-system/theme';
import { Route, BrowserRouter as Router } from "react-router-dom";

import Listing from "src/pages/Listing";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/listing" component={Listing} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
