import { Theme, Breakpoint } from "./types";

export const theme: Theme = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    up: (breakpoint: Breakpoint) => {
      console.log(theme);
      return ''
    }
  },
  typography: {
    fontFamily: [
      "Noto Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    sizes: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
      "2xl": 20,
      "3xl": 22
    }
  },
  colors: {
    dark: '#000',
    light: '#fff',
    accent: '#00bed9',
    grey20: '#ccc',
    grey5: '#f2f2f2',
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
    "2xl": 24,
    "3xl": 28,
    "0": 32
  }
};
