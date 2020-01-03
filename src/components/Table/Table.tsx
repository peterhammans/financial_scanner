import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as styles from './Table.styles';
import { withViewport } from 'src/containers/Viewport';
import { isTabletUp } from 'src/design-system/theme';

interface RequiredProps {
  children: React.ReactNode;
  summary: string;
  viewportWidth: number;
}

export type TableProps = RequiredProps;

const Table: React.FC<TableProps> = ({
  children,
  viewportWidth,
  ...outerProps
}) => {
  return isTabletUp(viewportWidth) ? (
    <table {...outerProps} css={styles.table()}>
      {children}
    </table>
  ) : (
    <div>{children}</div>
  );
};

export default withViewport()(Table);
