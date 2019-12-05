import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export type ResponsiveStyleProps = Record<
  string,
  Record<
    string, string | number
  > | string | number
>;

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type Spacings = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '0';

export type Responsive<T> = Record<Breakpoint, T> | T;

export interface ResponsiveThemeOptions {
  typography: {
    sizes: Record<Sizes, number>;
  },
  spacings: Record<Spacings, number>;
} 
