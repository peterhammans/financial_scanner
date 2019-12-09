import React from "react";
import useStyles from "./Table.styles";
import { useTheme } from 'react-jss';
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
  const theme = useTheme();
  const classes = useStyles({ textAlign, noBorder, padding, theme });

  return isTabletUp(viewportWidth) ? (
    <td {...outerProps} className={classes.td}>
      {children}
    </td>
  ) : (
    <div className={classes.tdMobile}>
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
