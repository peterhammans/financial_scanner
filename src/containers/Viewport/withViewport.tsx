import React from 'react';
import { Subtract } from 'utility-types';

import Viewport, { ViewportProps } from './Viewport';

const withViewport = () => <
  C extends React.ComponentType<React.ComponentProps<C> & ViewportProps>,
  ResolvedProps = JSX.LibraryManagedAttributes<C, Subtract<React.ComponentProps<C>, ViewportProps>>
>(
  Component: C
) => {
  return class ViewportWrappedComponent extends React.Component<ResolvedProps> {
    static displayName = `WithViewport(${Component.name})`;

    render() {
      return (
        <Viewport>
          {(viewportProps: ViewportProps) => (
            <Component
              // proper typecast since ts has fixed type infering on object rest
              {...(this.props as JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>)}
              {...viewportProps}
            />
          )}
        </Viewport>
      );
    }
  };
};

export default withViewport;
