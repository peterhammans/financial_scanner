import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FaTimes } from 'react-icons/fa';
import * as styles from './Alert.styles';
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

interface RequiredProps {
  children: React.ReactNode;
  variant: Variant;
}

interface DefaultProps {
  padding: Responsive<Spacings>;
  marginBottom?: Responsive<Spacings>;
  onDismiss?(): void;
}

export type AlertProps = RequiredProps & DefaultProps;

class Alert extends React.Component<AlertProps> {
  static defaultProps: DefaultProps = {
    padding: 'sm'
  };

  render() {
    const { onDismiss, children, variant, padding, marginBottom } = this.props;
    const styleProps = {
      variant,
      padding,
      marginBottom
    };

    return (
      <div css={styles.alert(styleProps)}>
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
      </div>
    );
  }
}

export default Alert;
