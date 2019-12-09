import React from "react";
import useStyles from "./Table.styles";
import { useTheme } from 'react-jss';
import { withViewport } from "src/containers/Viewport";
import { ViewportProps } from 'src/containers/Viewport/Viewport';
import { isTabletUp } from "src/design-system/theme";

interface RequiredProps extends ViewportProps {
  children: React.ReactNode;
  summary: string;
}

export type TableProps = RequiredProps;

const Table: React.FC<TableProps> = ({
  children,
  viewportWidth,
  ...outerProps
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return isTabletUp(viewportWidth) ? (
      <table {...outerProps} className={classes.table}>
        {children}
      </table>
    ) : (
      <div>
        {children}
      </div>
    );
};

export default withViewport()(Table);
