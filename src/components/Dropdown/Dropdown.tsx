import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import {
  Manager,
  Reference,
  ReferenceChildrenProps,
  PopperChildrenProps
} from 'react-popper';
import { Colors, Responsive, Spacings } from 'src/design-system/types';
import DropdownPopper from './DropdownPopper';
import * as styles from './Dropdown.styles';
import { AppState } from 'src/store/types';
import { connect } from 'react-redux';

import { dropdownsActions } from 'src/store/dropdowns';

export interface DropdownChildrenProps extends ReferenceChildrenProps {
  show(): void;
  hide(): void;
  open: boolean;
}

export type PlacementProps =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top-end'
  | 'right-start'
  | 'right-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end';

interface RequiredProps {
  button: (props: DropdownChildrenProps) => JSX.Element;
  children: React.ReactNode;
  name: string;
  dropdowns: {
    [name: string]: boolean;
  };
  addDropdown: (name: string) => void;
  removeDropdown: (name: string) => void;
  showDropdown: (name: string) => void;
  hideDropdown: (name: string) => void;
}

interface DefaultProps {
  backgroundColor: Colors;
  noShadow: boolean;
  padding: Responsive<Spacings>;
  placement: PlacementProps;
}

export type DropdownProps = RequiredProps & DefaultProps;

class Dropdown extends React.PureComponent<DropdownProps> {
  static defaultProps: DefaultProps = {
    padding: 'sm',
    backgroundColor: 'dark',
    noShadow: false,
    placement: 'bottom'
  };

  containerRef: any = React.createRef<HTMLSpanElement>();

  show = () => {
    const { showDropdown, name } = this.props;
    showDropdown(name);
  };

  hide = () => {
    const { hideDropdown, name } = this.props;
    hideDropdown(name);
  };

  render() {
    const {
      children,
      button,
      backgroundColor,
      noShadow,
      padding,
      placement,
      name,
      dropdowns
    } = this.props;

    return (
      <span ref={this.containerRef}>
        <Manager>
          <Reference>
            {(props: ReferenceChildrenProps) =>
              button({
                ...props,
                show: this.show,
                hide: this.hide,
                open: dropdowns[name]
              })
            }
          </Reference>
          <DropdownPopper
            onClickOutside={this.hide}
            containerRef={this.containerRef}
            placement={placement}
          >
            {({ placement, ref, style, arrowProps }: PopperChildrenProps) => {
              return (
                <>
                  {dropdowns[name]!! && (
                    <div
                      ref={ref}
                      style={style}
                      data-placement={placement}
                      css={styles.dropdown({
                        backgroundColor,
                        noShadow,
                        padding
                      })}
                    >
                      {children}
                      <span
                        ref={arrowProps.ref}
                        style={arrowProps.style}
                        css={styles.arrow({
                          color: backgroundColor,
                          placement
                        })}
                      />
                    </div>
                  )}
                </>
              );
            }}
          </DropdownPopper>
        </Manager>
      </span>
    );
  }
}

const mapStateToProps = (
  state: AppState
): Pick<DropdownProps, 'dropdowns'> => ({
  dropdowns: state.dropdowns
});

export { Dropdown as UnwrappedDropdown };

export default connect(mapStateToProps, dropdownsActions)(Dropdown);
