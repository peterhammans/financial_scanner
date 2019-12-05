
import React from 'react';
import { Without } from 'src/types';
import { Responsive, Sizes, Spacings } from 'src/design-system/types';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import useStyles from './Text.styles';

export interface Props extends Without<TypographyProps, 'paragraph' | 'gutterBottom'> {
  children: React.ReactNode;
  marginRight?: Responsive<Spacings>;
  marginBottom?: Responsive<Spacings>;
  marginLeft?: Responsive<Spacings>;
  fontSize?: Responsive<Sizes>;
}

const Text = ({
  children,
  marginRight = '0',
  marginBottom = '0',
  marginLeft = '0',
  fontSize = 'md',
  ...outerProps
}: Props) => {
  const classes = useStyles({ marginBottom, marginRight, marginLeft, fontSize });

  return <Typography {...outerProps} className={classes.text}>{children}</Typography>;
};

export default Text;