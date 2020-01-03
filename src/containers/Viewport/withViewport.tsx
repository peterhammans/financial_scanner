import React from 'react';
import { Subtract } from 'utility-types';

import Viewport, { ViewportProps } from './Viewport';

const withViewport = () => (Component: any) => {
  return class ViewportWrappedComponent extends React.Component<any> {
    static displayName = `WithViewport(${Component.name})`;

    render() {
      return (
        <Viewport>
          {viewportProps => (
            <Component
              // proper typecast since ts has fixed type infering on object rest
              {...this.props}
              {...viewportProps}
            />
          )}
        </Viewport>
      );
    }
  };
};

export default withViewport;
