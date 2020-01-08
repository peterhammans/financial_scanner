import { css } from '@emotion/core';
import Color from 'color';
import { AlertProps } from './Alert';
import * as mixins from 'src/design-system/mixins';
import { Theme } from 'src/design-system/types';

type StyleProps = Pick<AlertProps, 'variant' | 'padding' | 'marginBottom'>;

const alert = ({ variant, padding, marginBottom }: StyleProps) => (
  theme: Theme
) => css`
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;

  ${variant === 'success' &&
    css`
      background: ${Color(theme.colors.success)
        .lighten(1.2)
        .hex()};
      border-color: ${Color(theme.colors.success)
        .lighten(0.9)
        .hex()};
    `}

  ${variant === 'warning' &&
    css`
      background: ${Color(theme.colors.warning)
        .lighten(0.5)
        .hex()};
      border-color: ${Color(theme.colors.warning)
        .lighten(0.4)
        .hex()};
    `}

  ${variant === 'error' &&
    css`
      background: ${Color(theme.colors.error)
        .lighten(0.9)
        .hex()};
      border-color: ${Color(theme.colors.error)
        .lighten(0.8)
        .hex()};
    `}

  ${variant === 'info' &&
    css`
      background: ${Color(theme.colors.info)
        .lighten(0.8)
        .hex()};
      border-color: ${Color(theme.colors.info)
        .lighten(0.6)
        .hex()};
    `}

  ${mixins.spacings({
    padding,
    marginBottom
  })(theme)}
`;

export { alert };
