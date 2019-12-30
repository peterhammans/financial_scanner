import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Responsive, Spacings } from 'src/design-system/types';
import * as styles from './Image.styles';

type ImageSizes = 'small' | 'normal' | 'large';

const sizeMap: Record<ImageSizes, number> = {
  small: 40,
  normal: 80,
  large: 120
};

export interface RequiredProps {
  children: React.ReactNode;
  src: string;
}

interface DefaultProps {
  size: ImageSizes;
  round: boolean;
  marginRight?: Responsive<Spacings>;
  marginBottom?: Responsive<Spacings>;
  marginLeft?: Responsive<Spacings>;
}

export type ImageProps = RequiredProps & DefaultProps;

const Image: React.FC<ImageProps> & { defaultProps: DefaultProps } = ({
  round,
  marginRight,
  marginBottom,
  marginLeft,
  size,
  src,
  ...outerProps
}) => {
  const styleProps = {
    marginBottom,
    marginRight,
    marginLeft,
    round,
    size: sizeMap[size]
  };

  return (
    <img
      src={src}
      width={sizeMap[size]}
      {...outerProps}
      css={styles.image(styleProps)}
    />
  );
};

Image.defaultProps = {
  round: false,
  size: 'normal'
};

export default Image;
