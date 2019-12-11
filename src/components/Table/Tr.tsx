import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as styles from './Table.styles';
import { withViewport } from "src/containers/Viewport";
import { ViewportProps } from "src/containers/Viewport/Viewport";
import { isTabletUp } from "../../design-system/theme";
import { Card } from "src/components/Card";

interface RequiredProps extends ViewportProps {
  children: React.ReactNode;
}

interface DefaultProps {
  noBorder: boolean;
}

export type TrProps = RequiredProps & DefaultProps;

const Tr: React.FC<TrProps> & { defaultProps: DefaultProps } = ({
  children,
  noBorder,
  viewportWidth,
  ...outerProps
}) => {
  return isTabletUp(viewportWidth) ? (
    <tr {...outerProps}>
      {
        React.Children.toArray(children).map((child) => {
          return React.cloneElement(child as React.ReactElement, { noBorder });
        })
      }
    </tr>
  ) : (
    <div css={styles.trMobile(noBorder)}>
      <Card noShadow>
        {children}
      </Card>
    </div>
  )
};

Tr.defaultProps = {
  noBorder: false
};

export default withViewport()(Tr);
