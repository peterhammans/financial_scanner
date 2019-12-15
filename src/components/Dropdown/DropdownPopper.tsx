import React from 'react';
import { Popper, PopperProps } from 'react-popper';
import withClickOutside, { WithClickOutsideProps } from 'src/containers/ClickOutside/withClickOutside';

type DropdownPopperProps = WithClickOutsideProps & PopperProps;

class DropdownPopper extends React.Component<DropdownPopperProps> {
  render() {
    const { onClickOutside, containerRef, ...outerProps } = this.props;
    return <Popper {...outerProps} />;
  }
};

export default withClickOutside(DropdownPopper);