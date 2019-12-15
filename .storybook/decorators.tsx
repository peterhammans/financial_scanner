import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from "emotion-theming";
import { theme } from "src/design-system/theme";

export const themeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>
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
    {storyFn()}
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