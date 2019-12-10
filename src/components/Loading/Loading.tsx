import React from "react";
import useStyles from "./Loading.styles";
import { useTheme } from 'react-jss';
import { Colors, Theme } from "src/design-system/types";

export type LoadingSize = 'small' | 'normal' | 'big';

interface DefaultProps {
  size: LoadingSize;
  color: Colors;
}

export type LoadingProps = DefaultProps;

const Loading: React.FC<LoadingProps> & { defaultProps: DefaultProps } = ({
  size,
  color,
  ...outerProps
}) => {
  const theme = useTheme();
  const classes = useStyles({
    color,
    size,
    theme
  });

  return (
    <div {...outerProps} className={classes.loading}>
      <div />
      <div />
    </div>
  );
};

Loading.defaultProps = {
  size: 'normal',
  color: 'accent'
};

export default Loading;
