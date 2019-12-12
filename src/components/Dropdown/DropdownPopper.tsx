import React from 'react';
import { Popper, PopperProps } from 'react-popper';

interface DefaultProps {
  containerRef?: React.RefObject<any>;
  onClickOutside?: () => void;
}

type DropdownPopperProps = DefaultProps & PopperProps;

class DropdownPopper extends React.Component<DropdownPopperProps> {
  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick = (e: MouseEvent) => {
    const { containerRef, onClickOutside } = this.props;
    if (onClickOutside && containerRef && !containerRef.current.contains(e.target as Node)) {
      onClickOutside();
    }
  }

  render() {
    const { onClickOutside, containerRef, ...outerProps } = this.props;
    return <Popper {...outerProps} />;
  }
};

export default DropdownPopper;