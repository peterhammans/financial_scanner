import { css } from '@emotion/core';
import * as mixins from 'src/design-system/mixins';
import { IconProps } from './Icon';
import { Theme } from 'src/design-system/types';

type StyleProps = Pick<
  IconProps,
  'marginRight' | 'marginBottom' | 'marginLeft'
>;

const icon = ({ marginRight, marginBottom, marginLeft }: StyleProps) => (
  theme: Theme
) => css`
  ${mixins.spacings({
    marginRight,
    marginBottom,
    marginLeft
  })(theme)}
`;

export { icon };
