import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Responsive, Spacings, Colors } from "src/design-system/types";
import * as styles from "./Card.styles";

export interface RequiredProps {
  children: React.ReactNode;
}

interface DefaultProps {
  backgroundColor: Colors;
  padding: Responsive<Spacings>;
  noShadow: boolean;
  fullWidth: boolean;
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
  fullWidth,
  noShadow,
  ...outerProps
}) => {
  const styleProps = {
    marginBottom,
    marginRight,
    marginLeft,
    backgroundColor,
    padding,
    fullWidth,
    noShadow
  };

  return (
    <div {...outerProps} css={styles.card(styleProps)}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  backgroundColor: "light",
  padding: "md",
  noShadow: false,
  fullWidth: false
}

export default Card;
