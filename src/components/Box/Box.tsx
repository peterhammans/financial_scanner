
import React from 'react';
import { Without } from 'src/types';
import { Responsive, Spacings } from 'src/design-system/types';
import { default as MuiBox, BoxProps as MuiBoxProps } from '@material-ui/core/Box';
import useStyles from './Box.styles';

export interface Props extends Without<MuiBoxProps, 'mb' | 'marginBottom'> {
  children: React.ReactNode;
  marginRight?: Responsive<Spacings>;
  marginBottom?: Responsive<Spacings>;
  marginLeft?: Responsive<Spacings>;
}

const Box = ({
  children,
  marginRight = '0',
  marginBottom = '0',
  marginLeft = '0',
  ...outerProps
}: Props) => {
  const classes = useStyles({ marginRight, marginBottom, marginLeft });

  return <MuiBox {...outerProps} className={classes.box}>{children}</MuiBox>;
};

export default Box;