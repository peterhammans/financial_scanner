import { css } from '@emotion/core';
import * as mixins from 'src/design-system/mixins';
import { ImageProps } from './Image';
import { Theme } from 'src/design-system/types';

type StyleProps = Pick<
  ImageProps,
  'marginRight' | 'marginBottom' | 'marginLeft' | 'round'
> & { size: number };

const image = ({
  round,
  marginRight,
  marginBottom,
  marginLeft,
  size
}: StyleProps) => (theme: Theme) => css`
  ${round &&
    css`
      clip-path: circle(${size / 2}px at center);
    `};

  ${mixins.spacings({
    marginRight,
    marginBottom,
    marginLeft
  })(theme)}
`;

export { image };
