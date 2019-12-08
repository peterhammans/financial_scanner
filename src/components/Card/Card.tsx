import React from "react";
import { Responsive, Spacings, Colors } from "src/design-system/types";
import useStyles from "./Card.styles";
import { useTheme } from 'react-jss';

export interface RequiredProps {
  children: React.ReactNode;
}

interface DefaultProps {
  backgroundColor: Colors;
  padding: Responsive<Spacings>;
  noShadow: boolean;
  marginRight?: Responsive<Spacings>;
  marginBottom?: Responsive<Spacings>;
  marginLeft?: Responsive<Spacings>;
}

export type CardProps = RequiredProps & DefaultProps;

const Card: React.FC<CardProps> & { defaultProps: DefaultProps } = ({
  children,
  backgroundColor,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  noShadow,
  ...outerProps
}) => {
  const theme = useTheme();
  const classes = useStyles({
    marginBottom,
    marginRight,
    marginLeft,
    backgroundColor,
    padding,
    noShadow,
    theme
  });

  return (
    <div {...outerProps} className={classes.card}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  backgroundColor: "light",
  padding: "md",
  noShadow: false
}

export default Card;
