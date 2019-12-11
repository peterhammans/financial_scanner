import React from "react";
import { theme } from "src/design-system/theme";
import { CSS } from "src/helpers";

export interface ViewportProps {
  viewportWidth: number;
}

export interface State {
  viewportWidth: number;
}

export interface Props {
  children({ viewportWidth }: ViewportProps): React.ReactElement;
}

class Viewport extends React.Component<Props, State> {
  state = {
    viewportWidth: window.innerWidth
  };

  queries: {
    xs: MediaQueryList,
    sm: MediaQueryList,
    md: MediaQueryList,
    lg: MediaQueryList,
    xl: MediaQueryList
  } | undefined = undefined;

  constructor(props: Props) {
    super(props);

    const { breakpoints: { values: breakpointValues } } = theme;

    this.queries = {
      xs: this.mediaQueryBetween(breakpointValues.xs, breakpointValues.sm),
      sm: this.mediaQueryBetween(breakpointValues.sm, breakpointValues.md),
      md: this.mediaQueryBetween(breakpointValues.md, breakpointValues.lg),
      lg: this.mediaQueryBetween(breakpointValues.lg, breakpointValues.xl),
      xl: this.mediaQueryBetween(breakpointValues.xl)
    }
  }

  componentWillMount() {
    if (this.queries) {
      this.queries.xs.addListener(this.updateDimensions);
      this.queries.sm.addListener(this.updateDimensions);
      this.queries.md.addListener(this.updateDimensions);
      this.queries.lg.addListener(this.updateDimensions);
      this.queries.xl.addListener(this.updateDimensions);
    }
  }

  componentWillUnmount() {
    if (this.queries) {
      this.queries.xs.removeListener(this.updateDimensions);
      this.queries.sm.removeListener(this.updateDimensions);
      this.queries.md.removeListener(this.updateDimensions);
      this.queries.lg.removeListener(this.updateDimensions);
      this.queries.xl.removeListener(this.updateDimensions);
    }
  }

  mediaQueryBetween = (breakpoint: number, nextBreakpoint?: number) => {
    let maxWidth = '';
    if(nextBreakpoint) {
      maxWidth = nextBreakpoint
        ? ` and (max-width: ${CSS.px(
          nextBreakpoint - 1
        )})`
      : '';
    }

    return window.matchMedia(`
      (min-width: ${CSS.px(
        breakpoint
      )})${maxWidth}
    `);
  }

  updateDimensions = (e: any) => {
    if (e.matches) {
      this.setState({
        viewportWidth: window.innerWidth
      });
    }
  };

  render() {
    const { viewportWidth } = this.state;
    const { children } = this.props;

    return <>{children({ viewportWidth })}</>;
  }
}

export default Viewport;
