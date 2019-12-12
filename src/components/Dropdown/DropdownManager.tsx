import React from 'react';
import { Manager, ManagerProps } from 'react-popper';

interface DefaultProps {
  containerRef?: React.RefObject<any>;
  onClickOutside?: () => {};
}

type DropdownManagerProps = DefaultProps & ManagerProps;

class DropdownManager extends React.Component<DropdownManagerProps> {

  render() {
    return <Manager {...this.props} />;
  }
};

export default DropdownManager;