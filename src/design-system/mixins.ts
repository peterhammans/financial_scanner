import { Normal, Responsive, Spacings, Theme } from './types';
import { CSSInterpolation } from '@emotion/serialize';
import { css } from '@emotion/core';
import CSS from 'src/helpers/css';

function isResponsiveProp<T>(prop: Normal<T> | Responsive<T>): prop is Responsive<T> {
  if (
    typeof prop === 'object' &&
    prop !== null &&
    ('xs' in prop || 'sm' in prop || 'md' in prop || 'lg' in prop || 'xl' in prop)
  ) {
    return true;
  }
  return false;
}

export function responsive<T>(
  prop: Normal<T> | Responsive<T>,
  propHandler: (value: Normal<T>) => CSSInterpolation
) {
  const styles: CSSInterpolation[] = [];
  if(isResponsiveProp(prop)) {
    if(typeof prop.xs !== 'undefined') {
      styles.push(propHandler(prop.xs));
    }

    if(typeof prop.sm !== 'undefined') {
      styles.push(propHandler(prop.sm));
    }

    if(typeof prop.md !== 'undefined') {
      styles.push(propHandler(prop.md));
    }

    if(typeof prop.lg !== 'undefined') {
      styles.push(propHandler(prop.lg));
    }

    if(typeof prop.xl !== 'undefined') {
      styles.push(propHandler(prop.xl));
    }
  } else {
    styles.push(propHandler(prop));
  }
  return styles;
}

export const spacings = ({
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
}: {
  margin?: Responsive<Spacings>,
  marginTop?: Responsive<Spacings>,
  marginRight?: Responsive<Spacings>,
  marginBottom?: Responsive<Spacings>,
  marginLeft?: Responsive<Spacings>,
  padding?: Responsive<Spacings>,
  paddingTop?: Responsive<Spacings>,
  paddingRight?: Responsive<Spacings>,
  paddingBottom?: Responsive<Spacings>,
  paddingLeft?: Responsive<Spacings>
}) => (theme: Theme) => {
  return css`
    ${margin && css`
      ${responsive(margin, (rule) => css`
        margin: ${theme.spacings[rule]}px;
      `)}
    `}
    ${marginTop && css`
      ${responsive(marginTop, (rule) => css`
        margin-top: ${theme.spacings[rule]}px;
      `)}
    `}
    ${marginRight && css`
      ${responsive(marginRight, (rule) => css`
        margin-right: ${theme.spacings[rule]}px;
      `)}
    `}
    ${marginBottom && css`
      ${responsive(marginBottom, (rule) => css`
        margin-bottom: ${theme.spacings[rule]}px;
      `)}
    `}
    ${marginLeft && css`
      ${responsive(marginLeft, (rule) => css`
        margin-left: ${theme.spacings[rule]}px;
      `)}
    `}
    ${padding && css`
      ${responsive(padding, (rule) => css`
        margin: ${theme.spacings[rule]}px;
      `)}
    `}
    ${paddingTop && css`
      ${responsive(paddingTop, (rule) => css`
        margin-top: ${theme.spacings[rule]}px;
      `)}
    `}
    ${paddingRight && css`
      ${responsive(paddingRight, (rule) => css`
        margin-right: ${theme.spacings[rule]}px;
      `)}
    `}
    ${paddingBottom && css`
      ${responsive(paddingBottom, (rule) => css`
        margin-bottom: ${theme.spacings[rule]}px;
      `)}
    `}
    ${paddingLeft && css`
      ${responsive(paddingLeft, (rule) => css`
        margin-left: ${theme.spacings[rule]}px;
      `)}
    `}
  `
}

export const boxShadow = (height: number = 4) => `0 ${CSS.px(height)} 8px 0 rgba(0, 0, 0, 0.2)`;
    