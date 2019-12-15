import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Responsive, Spacings } from "src/design-system/types";
import * as styles from "./Button.styles";

export interface RequiredProps {
  children: React.ReactNode;
  onClick(): void;
}

interface DefaultProps {
  type: 'button' | 'reset' | 'submit';
  variant: 'primary' | 'secondary';
  size: 'small' | 'normal' | 'large';
  ref?: React.Ref<any>;
  marginBottom?: Responsive<Spacings>;
  marginLeft?: Responsive<Spacings>;
  marginRight?: Responsive<Spacings>;
}

export type ButtonProps = RequiredProps & DefaultProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  marginBottom,
  marginRight,
  marginLeft,
  variant,
  size,
  ...outerProps
}, ref) => {
  return (
    <button {...outerProps} ref={ref} css={styles.button({
      marginBottom,
      marginRight,
      marginLeft,
      variant,
      size
    })}>
      {children}
    </button>
  );
});

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  size: 'normal'
}

export default Button;
