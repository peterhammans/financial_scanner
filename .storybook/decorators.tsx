import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from "emotion-theming";
import { theme } from "src/design-system/theme";

import { Provider } from 'react-redux';

import configureStore from "src/store/configureStore";

const store = configureStore();

export const themeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>
    <div id="modal-root" />
    <Global styles={css`
        body {
          font-family: ${theme.typography.fontFamily};
          font-size: ${theme.typography.sizes.md}px;
        }

        .center-col {
          div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
        }
    `} />
    <Provider store={store}>{storyFn()}</Provider>
  </ThemeProvider>
);

export const StoryDecorator = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    background: '#f2f2f2',
    padding: '24px'
  }}>
    {children}
  </div>
);