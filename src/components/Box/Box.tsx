import React from "react";
import { Responsive, Spacings } from "src/design-system/types";
import { useTheme } from 'react-jss';
import useStyles from "./Box.styles";

interface RequiredProps {
  children: React.ReactNode;
}

interface DefaultProps {
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent: 'flex-start' | 'center' | 'flex-end';
  alignItems: 'flex-start' | 'center' | 'flex-end';
  width: string;
  grow?: number;
  marginTop?: Responsive<Spacings>;
  marginRight?: Responsive<Spacings>;
  marginBottom?: Responsive<Spacings>;
  marginLeft?: Responsive<Spacings>;
  margin?: Responsive<Spacings>;
  paddingTop?: Responsive<Spacings>;
  paddingRight?: Responsive<Spacings>;
  paddingBottom?: Responsive<Spacings>;
  paddingLeft?: Responsive<Spacings>;
  padding?: Responsive<Spacings>;
}

export type BoxProps = RequiredProps & DefaultProps;

const Box: React.FC<BoxProps> & { defaultProps: DefaultProps } = ({
  children,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  padding,
  ...outerProps
}) => {
  const theme = useTheme();
  const classes = useStyles({
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    padding,
    theme
  });

  return (
    <div {...outerProps} className={classes.box}>
      {children}
    </div>
  );
};

Box.defaultProps = {
  direction: 'row',
  wrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%'
};

export default Box;
