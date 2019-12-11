import React from 'react';
import { ThemeProvider } from "emotion-theming";
import { theme } from "src/design-system/theme";

export const themeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export const StoryDecorator = ({ children }: { children: React.ReactNode}) => (
  <div style={{
    background: '#f2f2f2',
    padding: '24px'
  }}>
    {children}
  </div>
);