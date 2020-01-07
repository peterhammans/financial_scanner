import { Theme } from './types';
import Color from 'color';

export const isMobile = (viewportWidth: number) => {
  const {
    breakpoints: { values: breakpointValues }
  } = theme;
  return (
    viewportWidth >= breakpointValues.xs && viewportWidth < breakpointValues.md
  );
};

export const isMobileUp = (viewportWidth: number) => {
  const {
    breakpoints: { values: breakpointValues }
  } = theme;
  return viewportWidth >= breakpointValues.xs;
};

export const isTablet = (viewportWidth: number) => {
  const {
    breakpoints: { values: breakpointValues }
  } = theme;
  return (
    viewportWidth >= breakpointValues.md && viewportWidth < breakpointValues.lg
  );
};

export const isTabletUp = (viewportWidth: number) => {
  const {
    breakpoints: { values: breakpointValues }
  } = theme;
  return viewportWidth >= breakpointValues.md;
};

export const isDesktop = (viewportWidth: number) => {
  const {
    breakpoints: { values: breakpointValues }
  } = theme;
  return viewportWidth >= breakpointValues.lg;
};

export const isDesktopUp = (viewportWidth: number) => {
  const {
    breakpoints: { values: breakpointValues }
  } = theme;
  return viewportWidth >= breakpointValues.lg;
};

export const theme: Theme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  grid: 12,
  typography: {
    fontFamily: [
      'Noto Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    sizes: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
      '2xl': 20,
      '3xl': 22
    }
  },
  colors: {
    dark: '#000',
    light: '#fff',
    accent: '#00bed9',
    grey20: '#ccc',
    grey5: '#f2f2f2',
    success: '#24a148',
    success50: Color('#24a148')
      .lighten(1.2)
      .hex(),
    warning: '#FFB43E',
    warning50: Color('#FFB43E')
      .lighten(0.5)
      .hex(),
    error: '#d82121',
    error50: Color('#d82121')
      .lighten(0.8)
      .hex(),
    transparent: 'transparent'
  },
  spacings: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '0': 0
  }
};
