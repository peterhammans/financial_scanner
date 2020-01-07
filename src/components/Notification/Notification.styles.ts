import { css } from '@emotion/core';
import { NotificationProps } from './Notification';
import * as mixins from 'src/design-system/mixins';
import { Theme } from 'src/design-system/types';

type StyleProps = Pick<
  NotificationProps,
  'variant' | 'padding' | 'marginBottom'
>;

const notification = ({ variant, padding, marginBottom }: StyleProps) => (
  theme: Theme
) => css`
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  width: 300px;

  ${variant === 'success' &&
    css`
      background: ${theme.colors.success50};
      border-color: ${theme.colors.success};
    `}

  ${variant === 'warning' &&
    css`
      background: ${theme.colors.warning50};
      border-color: ${theme.colors.warning};
    `}

  ${variant === 'error' &&
    css`
      background: ${theme.colors.error50};
      border-color: ${theme.colors.error};
    `}

  ${mixins.spacings({
    padding,
    marginBottom
  })(theme)}
`;

export { notification };
