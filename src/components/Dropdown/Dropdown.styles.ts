import { css } from '@emotion/core';
import { DropdownProps, PlacementProps } from "./Dropdown";
import * as mixins from 'src/design-system/mixins';
import { Theme, Colors } from "src/design-system/types";

type StyleProps = Pick<
  DropdownProps,
  'backgroundColor' | 'noShadow' | 'padding'
  >;

interface StylePropsArrow {
  color: Colors;
  placement: PlacementProps;
}

const dropdown = ({ backgroundColor, noShadow, padding }: StyleProps) => (theme: Theme) => css`
  background-color: ${theme.colors[backgroundColor]};
  ${!noShadow && css`box-shadow: ${mixins.boxShadow()}`};
  ${mixins.spacings({
    padding
  })(theme)}
  border-radius: 3px;
`;

const arrow = ({ color, placement }: StylePropsArrow) => (theme: Theme) => css`
  position: absolute;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid ${theme.colors[color]};
  z-index: 1;

  ${placement === 'top' && css`
    transform: rotate(180deg);
    bottom: -8px;
  `}
  ${placement === 'right' && css`
    transform: rotate(-90deg);
    left: -12px;
  `}
  ${placement === 'bottom' && css`
    transform: rotate(0deg); 
    top: -8px;
  `}
  ${placement === 'left' && css`
    transform: rotate(-270deg);
    right: -12px;
  `}
`;

export {
  dropdown,
  arrow
};
