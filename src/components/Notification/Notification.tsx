/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import ReactDOM from 'react-dom';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FaTimes } from 'react-icons/fa';
import * as styles from './Notification.styles';
import { Responsive, Spacings, Colors } from 'src/design-system/types';
import { Text } from 'src/components/Text';
import { Icon } from '../Icon';
import { Box } from '../Box';

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
  padding: Responsive<Spacings>;
  marginBottom?: Responsive<Spacings>;
  onDismiss?(): void;
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
    const { onDismiss, children, variant, padding, marginBottom } = this.props;
    const styleProps = {
      variant,
      padding,
      marginBottom
    };

    return ReactDOM.createPortal(
      <div css={styles.notification(styleProps)}>
        <Box>
          <Text color={colorMap[variant]}>{children}</Text>
          {onDismiss && (
            <Box grow={0} width="auto">
              <Icon
                color={colorMap[variant]}
                render={() => <FaTimes />}
                onClick={onDismiss}
              />
            </Box>
          )}
        </Box>
      </div>,
      this.el
    );
  }
}

export default Notification;
