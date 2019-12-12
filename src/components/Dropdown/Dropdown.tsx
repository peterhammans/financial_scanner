import React from 'react';
import withClickOutside, { WithClickOutsideProps } from '../../containers/ClickOutside/withClickOutside';

export interface ManagerProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

interface RequiredProps extends WithClickOutsideProps {
  children: (props: ManagerProps) => React.ReactNode;
}

export type DropdownProps = RequiredProps;

class Dropdown extends React.Component<DropdownProps> {
  state = {
    isOpen: false
  }

  toggleOpen = () => {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen
    })
  }

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <React.Fragment>
        {children({
          isOpen,
          toggleOpen: this.toggleOpen
        })}
      </React.Fragment>
    )
  }
};

export default withClickOutside(Dropdown);