/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import ReactDOM from 'react-dom';
/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as styles from './Notification.styles';
import { Responsive, Spacings } from 'src/design-system/types';
import { Colors } from '../../design-system/types';
import { Text } from 'src/components/Text';

type Variant = 'success' | 'error' | 'warning' | 'info';

const colorMap: Record<Variant, Colors> = {
  error: 'error',
  warning: 'warning',
  success: 'success',
  info: 'info'
};

interface NotificationState {
  open: boolean;
}

interface RequiredProps {
  children: React.ReactNode;
  variant: Variant;
}

interface DefaultProps {
  dismissable: boolean;
  padding: Responsive<Spacings>;
  marginBottom?: Responsive<Spacings>;
  onClose?(): void;
}

export type NotificationProps = RequiredProps & DefaultProps;

class Notification extends React.Component<
  NotificationProps,
  NotificationState
> {
  state = {
    open: true
  };

  static defaultProps: DefaultProps = {
    dismissable: true,
    padding: 'sm'
  };

  el: HTMLDivElement;

  constructor(props: NotificationProps) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const notificationsRoot = document.getElementById('notifications-root');
    if (notificationsRoot) {
      notificationsRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    const notificationsRoot = document.getElementById('notifications-root');
    if (notificationsRoot) {
      notificationsRoot.removeChild(this.el);
    }
  }

  show = () => {
    this.setState({
      open: true
    });
  };

  hide = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const {
      dismissable,
      children,
      variant,
      padding,
      marginBottom
    } = this.props;
    const styleProps = {
      variant,
      padding,
      marginBottom
    };

    return ReactDOM.createPortal(
      <div css={styles.notification(styleProps)}>
        <Text color={colorMap[variant]}>{children}</Text>
      </div>,
      this.el
    );
  }
}

export default Notification;
