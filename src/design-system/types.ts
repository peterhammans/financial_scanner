export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ResponsiveStyleProps = Record<
  string,
  Record<
    string, string | number
  > | string | number
>;

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export type Spacings = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '0';

export type SpacingProps = 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft' | 'margin' | 'paddingTop' | 'paddingRight' | 'padingBottom' | 'paddingLeft' | 'padding'

export type Colors = 'dark' | 'light' | 'success' | 'warning' | 'error' | 'grey20' | 'grey5' | 'accent' | 'transparent';

export type Responsive<T> = Record<Breakpoint, T> | T;

export interface Theme {
  breakpoints: {
    values: {
      xs: number,
      sm: number,
      md: number,
      lg: number,
      xl: number
    },
    up(breakpoint: Breakpoint): string;
    down(breakpoint: Breakpoint): string;
  },
  typography: {
    fontFamily: string;
    sizes: Record<Sizes, number>;
  },
  colors: Record<Colors, string>;
  spacings: Record<Spacings, number>;
}
