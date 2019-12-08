import React from 'react';

import { default as MuiPopper, PopperProps } from "@material-ui/core/Popper";

interface Props extends PopperProps {
  onClickOut?(): void;
}

class Popper extends React.Component<Props> {
  popperRef = React.createRef<HTMLDivElement>();

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e: MouseEvent) => {
    const { onClickOut } = this.props;
    if(onClickOut) onClickOut();
  }

  render() {
    const { onClickOut, open, ...outerProps } = this.props;

    return open && (
      <div ref={this.popperRef}>
        <MuiPopper open={open} {...outerProps} />
      </div>
    );
  }
}

export default Popper;
