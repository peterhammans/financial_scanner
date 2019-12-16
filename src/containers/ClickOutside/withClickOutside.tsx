import * as React from 'react';
import { Subtract } from 'utility-types';

export interface WithClickOutsideProps {
  onClickOutside: () => void;
  containerRef: React.RefObject<any>;
}

const withClickOutside = <
  P extends React.ComponentType<React.ComponentProps<P> & WithClickOutsideProps>,
  ResolvedProps = React.ComponentProps<P>
  >(
    WrappedComponent: P
  ) => {
  class WithClickOutside extends React.Component<ResolvedProps & WithClickOutsideProps> {
    static displayName: string

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
    }

    render() {
      return (
        <WrappedComponent
          {...(this.props as JSX.LibraryManagedAttributes<P, React.ComponentProps<P>>)}
        />
      );
    }
  }

  WithClickOutside.displayName = `WithClickOutside(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`

  return WithClickOutside;
}

export default withClickOutside;