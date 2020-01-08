import { Theme, Sizes, Responsive } from './types';
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

export const getResponsiveSize = (
  viewportWidth: number,
  size: Responsive<Sizes>
) => (theme: Theme): number => {
  const {
    breakpoints: { values: breakpointValues }
  } = theme;

  if (typeof size === 'string') {
    return theme.typography.sizes[size];
  }

  if (viewportWidth >= breakpointValues.sm) {
    if (size.xl && viewportWidth >= breakpointValues.xl) {
      return theme.typography.sizes[size.xl];
    }

    if (size.lg && viewportWidth >= breakpointValues.lg) {
      return theme.typography.sizes[size.lg];
    }

    if (size.md && viewportWidth >= breakpointValues.md) {
      return theme.typography.sizes[size.md];
    }

    if (size.sm) {
      return theme.typography.sizes[size.sm];
    }
  }

  if (viewportWidth >= breakpointValues.md) {
    if (size.xl && viewportWidth >= breakpointValues.xl) {
      return theme.typography.sizes[size.xl];
    }

    if (size.lg && viewportWidth >= breakpointValues.lg) {
      return theme.typography.sizes[size.lg];
    }

    if (size.md) {
      return theme.typography.sizes[size.md];
    }
  }

  if (viewportWidth >= breakpointValues.lg) {
    if (size.xl && viewportWidth >= breakpointValues.xl) {
      return theme.typography.sizes[size.xl];
    }

    if (size.lg) {
      return theme.typography.sizes[size.lg];
    }
  }

  if (size.xs) {
    return theme.typography.sizes[size.xs];
  }

  return 0;
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
    info: '#3a87ad',
    success: '#24a148',
    warning: '#FFB43E',
    error: '#d82121',
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
