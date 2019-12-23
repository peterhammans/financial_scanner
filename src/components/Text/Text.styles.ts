import { css } from '@emotion/core';
import * as mixins from 'src/design-system/mixins';
import { TextProps } from './Text';
import { Theme } from 'src/design-system/types';

type StyleProps = Pick<
  TextProps,
  'color' | 'marginRight' | 'marginBottom' | 'marginLeft' | 'fontSize'
>;

const text = ({
  color,
  marginRight,
  marginBottom,
  marginLeft,
  fontSize
}: StyleProps) => (theme: Theme) => css`
  margin: 0;
  
  ${mixins.spacings({
    marginRight,
    marginBottom,
    marginLeft
  })(theme)}

  ${mixins.responsive(
    fontSize,
    rule => css`
      font-size: ${theme.typography.sizes[rule]}px;
    `
  )(theme)}

  color: ${theme.colors[color]};
`;

export { text };
