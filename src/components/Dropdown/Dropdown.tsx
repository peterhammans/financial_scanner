import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Manager, Reference, ReferenceChildrenProps, PopperChildrenProps } from 'react-popper';
import { Colors, Responsive, Spacings } from 'src/design-system/types';
import DropdownPopper from './DropdownPopper';
import * as styles from './Dropdown.styles';

export interface DropdownChildrenProps extends ReferenceChildrenProps {
  setOpen(open: boolean): void;
  open: boolean;
}

export type PlacementProps = 'top' | 'right' | 'bottom' | 'left' | 'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end';

interface DropdownState {
  open: boolean;
}

interface RequiredProps {
  button: (props: DropdownChildrenProps) => JSX.Element;
  children: React.ReactNode;
}

interface DefaultProps {
  backgroundColor: Colors;
  noShadow: boolean;
  padding: Responsive<Spacings>;
  placement: PlacementProps;
}

export type DropdownProps = RequiredProps & DefaultProps;

class Dropdown extends React.Component<DropdownProps, DropdownState> {
  static defaultProps = {
    padding: 'sm',
    backgroundColor: 'dark',
    noShadow: false,
    placement: 'bottom'
  }

  state = {
    open: false
  }

  containerRef: any = React.createRef<HTMLSpanElement>();

  setOpen = (open: boolean) => {
    this.setState({
      open
    })
  }

  render() {
    const { open } = this.state;
    const { children, button, backgroundColor, noShadow, padding, placement } = this.props;

    return (
      <span ref={this.containerRef}>
        <Manager>
          <Reference>
            {(props: ReferenceChildrenProps) => button({ ...props, setOpen: this.setOpen, open })}
          </Reference>
          <DropdownPopper
            onClickOutside={() => { this.setOpen(false) }}
            containerRef={this.containerRef}
            placement={placement}
          >
            {({ placement, ref, style, arrowProps }: PopperChildrenProps) => {
              return open && (
                <div ref={ref} style={style} data-placement={placement} css={styles.dropdown({ backgroundColor, noShadow, padding })}>
                  {children}
                  <span ref={arrowProps.ref} style={arrowProps.style} css={styles.arrow({ color: backgroundColor, placement })} />
                </div>
              )
            }}
          </DropdownPopper>
        </Manager>
      </span>
    )
  }
};

export default Dropdown;