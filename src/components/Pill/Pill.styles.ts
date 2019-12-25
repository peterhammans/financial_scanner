import { css } from '@emotion/core';
import * as mixins from 'src/design-system/mixins';
import { PillProps } from './Pill';
import { Theme } from 'src/design-system/types';

type StyleProps = Pick<
  PillProps,
  'marginRight' | 'marginBottom' | 'marginLeft' | 'backgroundColor' | 'size'
>;

const pill = ({
  backgroundColor,
  marginRight,
  marginBottom,
  marginLeft,
  size
}: StyleProps) => (theme: Theme) => css`
  background-color: ${theme.colors[backgroundColor]};
  padding: 2px ${theme.spacings.sm}px;
  border-radius: 50px;
  line-height: 1;
  display: inline-block;

  ${size === 'small' &&
    css`
      padding: 1px ${theme.spacings.sm}px;
    `};

  ${size === 'large' &&
    css`
      padding: 4px ${theme.spacings.md}px;
    `};

  ${mixins.spacings({
    marginRight,
    marginBottom,
    marginLeft
  })(theme)}
`;

export { pill };
