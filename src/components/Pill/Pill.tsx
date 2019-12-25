import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Responsive, Spacings, Colors } from 'src/design-system/types';
import * as styles from './Pill.styles';
import { Text } from '../Text';
import { Sizes } from 'src/design-system/types';

type PillSizes = 'small' | 'normal' | 'large';

const sizeMap: Record<PillSizes, Sizes> = {
  small: 'xs',
  normal: 'sm',
  large: 'md'
};

export interface RequiredProps {
  children: React.ReactNode;
}

interface DefaultProps {
  size: PillSizes;
  backgroundColor: Colors;
  marginRight?: Responsive<Spacings>;
  marginBottom?: Responsive<Spacings>;
  marginLeft?: Responsive<Spacings>;
}

export type PillProps = RequiredProps & DefaultProps;

const Pill: React.FC<PillProps> & { defaultProps: DefaultProps } = ({
  children,
  backgroundColor,
  marginRight,
  marginBottom,
  marginLeft,
  size,
  ...outerProps
}) => {
  const styleProps = {
    marginBottom,
    marginRight,
    marginLeft,
    backgroundColor,
    size
  };

  return (
    <span {...outerProps} css={styles.pill(styleProps)}>
      <Text fontSize={sizeMap[size]} tagName="span" lineHeight={0}>
        {children}
      </Text>
    </span>
  );
};

Pill.defaultProps = {
  backgroundColor: 'grey20',
  size: 'normal'
};

export default Pill;
