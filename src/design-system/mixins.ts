import { Responsive, Sizes, ResponsiveStyleProps, Spacings, Breakpoint } from './types';

const getPropValue = (themeFormatter: any, value: string | number) => {
  if (value) {
    if (typeof themeFormatter === 'function') {
      return themeFormatter(value);
    }
    return (themeFormatter as any)[value];
  }
}

export const responsive = (theme: any) => (
  themeFormatter: any,
  styleProps: {
    [key: string]: Responsive<Sizes | Spacings> | number | string | undefined
  }
) => {
  const styles: ResponsiveStyleProps = {};

  Object.keys(styleProps).forEach((styleProp: string) => {
    const props = styleProps[styleProp];
    if (props !== undefined) {
      if (typeof props === 'object') {
        Object.keys(props).forEach((breakpointProp: string) => {
          const breakpointSize = breakpointProp as Breakpoint;
          const breakpointValue = props[breakpointSize];

          styles[theme.breakpoints.up(breakpointSize)] = {
            [styleProp]: getPropValue(themeFormatter, breakpointValue)
          }
        });
      } else {
        styles[styleProp] = getPropValue(themeFormatter, props)
      }
    }
  });

  return styles;
}

export const spacings = (theme: any) => (spacings: any) =>
  responsive(theme)((value: string) =>
    theme.spacings[value as Spacings],
    spacings
  );

export const boxShadow = (height: number = 4) => `0 ${height}px 8px 0 rgba(0, 0, 0, 0.2)`;
    