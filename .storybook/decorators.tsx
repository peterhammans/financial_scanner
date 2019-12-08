import React from 'react';
import { ThemeProvider, createUseStyles } from "react-jss";
import { theme } from "src/design-system/theme";

export const themeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

const useStyles = createUseStyles({
  story: {
    background: '#f2f2f2',
    padding: '24px'
  }
});

export const StoryDecorator = ({ children }: { children: React.ReactNode}) => {
  const classes = useStyles();

  return <div className={classes.story}>{children}</div>;
};