import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as styles from './Table.styles';
import { Responsive, Spacings } from "src/design-system/types";
import { withViewport } from "src/containers/Viewport";
import { ViewportProps } from "src/containers/Viewport/Viewport";
import { isTabletUp } from "src/design-system/theme";

interface RequiredProps extends ViewportProps {
  children: React.ReactNode;
}

interface DefaultProps {
  textAlign: 'left' | 'right' | 'center';
  padding: Responsive<Spacings>;
  noBorder: boolean;
}

export type TdProps = RequiredProps & DefaultProps;

const Td: React.FC<TdProps> & { defaultProps: DefaultProps } = ({
  children,
  textAlign,
  padding,
  noBorder,
  viewportWidth,
  ...outerProps
}) => {
  return isTabletUp(viewportWidth) ? (
    <td {...outerProps} css={styles.td({ textAlign, padding, noBorder })}>
      {children}
    </td>
  ) : (
    <div css={styles.tdMobile(padding)}>
      {children}
    </div>
  )
};

Td.defaultProps = {
  textAlign: 'left',
  padding: 'md',
  noBorder: false
}

export default withViewport()(Td);
