import { Normal, Breakpoints, Spacings, Theme, Responsive } from './types';
import { CSSInterpolation } from '@emotion/serialize';
import { css } from '@emotion/core';
import CSS from 'src/helpers/css';

function isResponsiveProp<T>(prop: Normal<T> | Breakpoints<T>): prop is Breakpoints<T> {
  if (
    typeof prop === 'object' &&
    prop !== null &&
    ('xs' in prop || 'sm' in prop || 'md' in prop || 'lg' in prop || 'xl' in prop)
  ) {
    return true;
  }
  return false;
}

export const responsive = <T>(prop: Normal<T> | Breakpoints<T>, propHandler: (prop: Normal<T>) => CSSInterpolation) => (theme: Theme) => {
  const styles = [];
  if (isResponsiveProp(prop)) {
    if (typeof prop.xs !== 'undefined') {
      styles.push(propHandler(prop.xs));
    }
    if (typeof prop.sm !== 'undefined') {
      styles.push(css`
        @media (min-width: ${theme.breakpoints.values.sm}px) {
          ${propHandler(prop.sm)}
        }
      `);
    }
    if (typeof prop.md !== 'undefined') {
      styles.push(css`
        @media (min-width: ${theme.breakpoints.values.md}px) {
          ${propHandler(prop.md)}
        }
      `);
    }
    if (typeof prop.lg !== 'undefined') {
      styles.push(css`
        @media (min-width: ${theme.breakpoints.values.lg}px) {
          ${propHandler(prop.lg)}
        }
      `);
    }
    if (typeof prop.xl !== 'undefined') {
      styles.push(css`
        @media (min-width: ${theme.breakpoints.values.xl}px) {
          ${propHandler(prop.xl)}
        }
      `);
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
      `)(theme)}
    `}
    ${marginTop && css`
      ${responsive(marginTop, (rule) => css`
        margin-top: ${theme.spacings[rule]}px;
      `)(theme)}
    `}
    ${marginRight && css`
      ${responsive(marginRight, (rule) => css`
        margin-right: ${theme.spacings[rule]}px;
      `)(theme)}
    `}
    ${marginBottom && css`
      ${responsive(marginBottom, (rule) => css`
        margin-bottom: ${theme.spacings[rule]}px;
      `)(theme)}
    `}
    ${marginLeft && css`
      ${responsive(marginLeft, (rule) => css`
        margin-left: ${theme.spacings[rule]}px;
      `)(theme)}
    `}
    ${padding && css`
      ${responsive(padding, (rule) => css`
        padding: ${theme.spacings[rule]}px;
      `)(theme)}
    `}
    ${paddingTop && css`
      ${responsive(paddingTop, (rule) => css`
        padding-top: ${theme.spacings[rule]}px;
      `)(theme)}
    `}
    ${paddingRight && css`
      ${responsive(paddingRight, (rule) => css`
        padding-right: ${theme.spacings[rule]}px;
      `)(theme)}
    `}
    ${paddingBottom && css`
      ${responsive(paddingBottom, (rule) => css`
        padding-bottom: ${theme.spacings[rule]}px;
      `)(theme)}
    `}
    ${paddingLeft && css`
      ${responsive(paddingLeft, (rule) => css`
        padding-left: ${theme.spacings[rule]}px;
      `)(theme)}
    `}
  `
}

export const boxShadow = (height: number = 4) => `0 ${CSS.px(height)} 8px 0 rgba(0, 0, 0, 0.2)`;
    