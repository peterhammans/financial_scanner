import * as React from 'react';

export interface WithClickOutsideProps {
  onClickOutside: () => void;
  containerRef: React.RefObject<any>;
}

const withClickOutside = <P extends WithClickOutsideProps>(
  WrappedComponent: any
) => {
  class WithClickOutside extends React.Component<P> {
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
      return <WrappedComponent {...this.props} />
    }
  }

  WithClickOutside.displayName = `WithClickOutside(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`

  return WrappedComponent;
}

export default withClickOutside;