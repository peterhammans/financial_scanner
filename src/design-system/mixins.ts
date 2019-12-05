import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { Responsive, Sizes, ResponsiveStyleProps, Spacings } from './types';

const getPropValue = (themeFormatter: any, value: string | number) => {
  if (value) {
    if (typeof themeFormatter === 'function') {
      return themeFormatter(value);
    }
    return (themeFormatter as any)[value];
  }
}

export const responsive = (theme: Theme) => (
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

export const spacings = (theme: Theme) => (margins: any) =>
  responsive(theme)((value: string) => 
    `${theme.spacing(theme.responsive.spacings[value as Spacings])}px`,
    margins
  )
    