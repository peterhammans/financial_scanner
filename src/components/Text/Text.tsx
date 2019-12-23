import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Responsive, Sizes, Spacings, Colors } from 'src/design-system/types';
import * as styles from './Text.styles';

type TagName = 'span' | 'p' | 'div';

interface RequiredProps {
  children: React.ReactNode;
}

interface DefaultProps {
  tagName: TagName;
  color: Colors;
  fontSize: Responsive<Sizes>;
  marginRight?: Responsive<Spacings>;
  marginBottom?: Responsive<Spacings>;
  marginLeft?: Responsive<Spacings>;
}

export type TextProps = RequiredProps & DefaultProps;

const Text: React.FC<TextProps> & { defaultProps: DefaultProps } = ({
  children,
  tagName,
  color,
  marginRight,
  marginBottom,
  marginLeft,
  fontSize,
  ...outerProps
}) => {
  const styleProps = {
    color,
    marginBottom,
    marginRight,
    marginLeft,
    fontSize
  };

  const Component = tagName;

  return (
    <Component {...outerProps} css={styles.text(styleProps)}>
      {children}
    </Component>
  );
};

Text.defaultProps = {
  tagName: 'p',
  color: 'dark',
  fontSize: 'md'
};

export default Text;
