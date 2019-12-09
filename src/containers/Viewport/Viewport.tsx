import React from "react";
import { theme } from "src/design-system/theme";
import { Breakpoint } from "src/design-system/types";
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

  queries: Partial<Record<Breakpoint, MediaQueryList>> = {};

  constructor(props: Props) {
    super(props);

    const { breakpoints: { values: breakpointValues } } = theme;

    Object.keys(breakpointValues).forEach(
      (breakpoint: string, index: number) => {
        if (this.queries) {
          const nextBreakpoint = Object.keys(breakpointValues)[index + 1];
          console.log('Next breakpoint', nextBreakpoint);
          const maxWidth = nextBreakpoint
            ? ` and (max-width: ${CSS.px(
              breakpointValues[nextBreakpoint as Breakpoint] - 1
              )})`
            : '';

          this.queries[breakpoint as Breakpoint] = window.matchMedia(`
          (min-width: ${CSS.px(
            breakpointValues[breakpoint as Breakpoint]
          )})${maxWidth}
        `);
        }
      }
    );
  }

  componentWillMount() {
    Object.keys(this.queries).forEach((breakpoint: string) => {
      const queryList = this.queries[breakpoint as Breakpoint];
      if (queryList) {
        queryList.addListener(this.updateDimensions);
      }
    });
  }

  componentWillUnmount() {
    Object.keys(this.queries).forEach((breakpoint: string) => {
      const queryList = this.queries[breakpoint as Breakpoint];
      if (queryList) {
        queryList.removeListener(this.updateDimensions);
      }
    });
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
