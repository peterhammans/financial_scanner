import { css } from '@emotion/core';
import * as mixins from 'src/design-system/mixins';
import { CardProps } from './Card';
import { Theme } from 'src/design-system/types';

type StyleProps = Pick<
  CardProps,
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'padding'
  | 'backgroundColor'
  | 'fullWidth'
  | 'noShadow'
>;

const card = ({
  backgroundColor,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  fullWidth,
  noShadow
}: StyleProps) => (theme: Theme) => css`
  background-color: ${theme.colors[backgroundColor]};
  box-sizing: border-box;
  ${fullWidth &&
    css`
      width: 100%;
    `};
  ${!noShadow &&
    css`
      box-shadow: ${mixins.boxShadow()};
    `};

  ${mixins.spacings({
    marginRight,
    marginBottom,
    marginLeft,
    padding
  })(theme)}
`;

export { card };
