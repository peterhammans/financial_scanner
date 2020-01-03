import * as React from 'react';
import { Subtract } from 'utility-types';

export interface WithClickOutsideProps {
  onClickOutside: () => void;
  containerRef: React.RefObject<any>;
}

const withClickOutside = (WrappedComponent: any) => {
  class WithClickOutside extends React.Component<any> {
    static displayName: string;

    componentDidMount() {
      document.addEventListener('click', this.handleOutsideClick, false);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    handleOutsideClick = (e: MouseEvent) => {
      const { containerRef, onClickOutside } = this.props;
      if (!containerRef.current.contains(e.target)) {
        onClickOutside();
      }
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithClickOutside.displayName = `WithClickOutside(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return WithClickOutside;
};

export default withClickOutside;
