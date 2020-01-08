import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { IconContext } from 'react-icons';
import { useTheme } from 'emotion-theming';
import * as styles from './Icon.styles';
import {
  Colors,
  Sizes,
  Responsive,
  Theme,
  Spacings
} from 'src/design-system/types';
import { withViewport } from 'src/containers/Viewport';
import { getResponsiveSize } from 'src/design-system/theme';

interface RequiredProps {
  render(): React.ReactNode;
  viewportWidth: number;
}

interface DefaultProps {
  color: Colors;
  size: Responsive<Sizes>;
  marginLeft?: Responsive<Spacings>;
  marginRight?: Responsive<Spacings>;
  marginBottom?: Responsive<Spacings>;
}

export type IconProps = RequiredProps & DefaultProps;

const Icon: React.FC<IconProps> & { defaultProps: DefaultProps } = ({
  render,
  color,
  size,
  marginLeft,
  marginRight,
  marginBottom,
  viewportWidth
}) => {
  const styleProps = {
    marginLeft,
    marginRight,
    marginBottom
  };
  const theme = useTheme<Theme>();
  const sizePx = `${getResponsiveSize(viewportWidth, size)(theme)}px`;

  return (
    <IconContext.Provider value={{ color, size: sizePx }}>
      <span css={styles.icon(styleProps)}>{render()}</span>
    </IconContext.Provider>
  );
};

Icon.defaultProps = {
  color: 'dark',
  size: 'md'
};

export default withViewport()(Icon);
