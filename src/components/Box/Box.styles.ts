import { css } from '@emotion/core';
import * as mixins from 'src/design-system/mixins';
import { BoxProps } from './Box';
import { Theme, Responsive, Spacings } from 'src/design-system/types';

type BoxStyleProps = Pick<
  BoxProps,
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'margin'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'padding'
  | 'width'
  | 'wrap'
  | 'grow'
  | 'direction'
  | 'justifyContent'
  | 'alignItems'
  | 'backgroundColor'
  | 'guttering'
  | 'height'
  | 'column'
>;

type BoxInnerStyleProps = Pick<BoxProps, 'guttering'>;

const box = ({
  alignItems,
  justifyContent,
  width,
  direction,
  wrap,
  grow,
  backgroundColor,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  guttering,
  height,
  column
}: BoxStyleProps) => (theme: Theme) => css`
  display: flex;
  box-sizing: border-box;
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  flex-grow: ${grow};
  background-color: ${theme.colors[backgroundColor]};
  width: ${width};
  height: ${height};
  justify-content: ${justifyContent};
  align-items: ${alignItems};

  ${column &&
    mixins.responsive(
      column,
      rule => css`
        width: calc(${rule / theme.grid} * 100%);
        padding-left: ${theme.spacings.md}px;
        padding-right: ${theme.spacings.md}px;
        margin-left: -${theme.spacings.md / 2}px;
        margin-right: -${theme.spacings.md / 2}px;
      `
    )(theme)}

  ${guttering &&
    mixins.responsive(
      guttering,
      rule => css`
        margin-left: -${theme.spacings[rule] / 2}px;
        margin-right: -${theme.spacings[rule] / 2}px;
        width: calc(${theme.spacings[rule]}px + 100%);
      `
    )(theme)}

  ${mixins.spacings({
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  })(theme)}
`;

const innerBox = ({ guttering }: BoxInnerStyleProps) => (theme: Theme) => css`
  ${guttering &&
    mixins.responsive(
      guttering,
      rule => css`
        padding-left: ${theme.spacings[rule]}px;
        padding-right: ${theme.spacings[rule]}px;
        margin-left: -${theme.spacings[rule] / 2}px;
        margin-right: -${theme.spacings[rule] / 2}px;
      `
    )(theme)}

  flex-grow: 1;
`;

export { box, innerBox };
