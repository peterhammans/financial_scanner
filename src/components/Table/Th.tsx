import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as styles from './Table.styles';
import { Responsive, Spacings } from "src/design-system/types";
import { ViewportProps } from "src/containers/Viewport/Viewport";
import { isTabletUp } from "src/design-system/theme";
import { withViewport } from "src/containers/Viewport";

interface RequiredProps extends ViewportProps {
  children: React.ReactNode;
}

interface DefaultProps {
  textAlign: 'left' | 'right' | 'center';
  padding: Responsive<Spacings>;
  noBorder: boolean;
}

export type ThProps = RequiredProps & DefaultProps;

const Th: React.FC<ThProps> & { defaultProps: DefaultProps } = ({
  children,
  textAlign,
  padding,
  noBorder,
  viewportWidth,
  ...outerProps
}) => (
  <React.Fragment>
    {
      isTabletUp(viewportWidth) && (
        <th {...outerProps} css={styles.th({ textAlign, padding, noBorder })}>
          {children}
        </th>
      )
    }
  </React.Fragment>
);

Th.defaultProps = {
  textAlign: 'left',
  padding: 'md',
  noBorder: false
}

export default withViewport()(Th);
