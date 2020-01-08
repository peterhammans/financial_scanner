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
  onClick?(): void;
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
  viewportWidth,
  onClick
}) => {
  const styleProps = {
    marginLeft,
    marginRight,
    marginBottom,
    clickable: !!onClick
  };
  const theme = useTheme<Theme>();
  const sizePx = `${getResponsiveSize(viewportWidth, size)(theme)}px`;
  const iconProps = {
    ...(onClick && { onClick })
  };

  return (
    <IconContext.Provider value={{ color: theme.colors[color], size: sizePx }}>
      <span css={styles.icon(styleProps)} {...iconProps}>
        {render()}
      </span>
    </IconContext.Provider>
  );
};

Icon.defaultProps = {
  color: 'dark',
  size: 'md'
};

export default withViewport()(Icon);
