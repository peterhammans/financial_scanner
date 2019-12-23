import { css } from '@emotion/core';
import * as mixins from 'src/design-system/mixins';
import { ThProps } from './Th';
import { TdProps } from './Td';
import { Theme, Responsive, Spacings } from 'src/design-system/types';

const table = () => () => css`
  border-collapse: collapse;
  width: 100%;
`;

const th = ({
  textAlign,
  padding,
  noBorder
}: Pick<ThProps, 'padding' | 'textAlign' | 'noBorder'>) => (
  theme: Theme
) => css`
  ${mixins.spacings({
    padding
  })(theme)}
  text-align: ${textAlign};
  ${!noBorder &&
    css`
      border-bottom: 1px solid ${theme.colors.grey20};
    `}
  text-transform: uppercase;
  weight: normal;
`;

const td = ({
  textAlign,
  padding,
  noBorder
}: Pick<TdProps, 'padding' | 'textAlign' | 'noBorder'>) => (
  theme: Theme
) => css`
  ${mixins.spacings({
    padding
  })(theme)},
  text-align: ${textAlign},
  ${!noBorder &&
    css`
      border-bottom: 1px solid ${theme.colors.grey20};
    `}
`;

const tdMobile = (padding: Responsive<Spacings>) => (theme: Theme) => css`
  ${mixins.spacings({
    padding
  })(theme)}
`;

const trMobile = (noBorder: boolean) => (theme: Theme) => css`
  ${!noBorder &&
    css`
      border-bottom: 1px solid ${theme.colors.grey20};
    `}
`;

export { table, th, td, tdMobile, trMobile };
