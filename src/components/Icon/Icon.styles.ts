import { css } from '@emotion/core';
import * as mixins from 'src/design-system/mixins';
import { IconProps } from './Icon';
import { Theme } from 'src/design-system/types';

type StyleProps = Pick<
  IconProps,
  'marginRight' | 'marginBottom' | 'marginLeft'
> & { clickable: boolean };

const icon = ({
  marginRight,
  marginBottom,
  marginLeft,
  clickable
}: StyleProps) => (theme: Theme) => css`
  ${clickable &&
    css`
      cursor: pointer;
    `}
  ${mixins.spacings({
    marginRight,
    marginBottom,
    marginLeft
  })(theme)}
`;

export { icon };
