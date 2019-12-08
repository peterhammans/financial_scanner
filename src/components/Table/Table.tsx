import React from "react";
import useStyles from "./Table.styles";
import { useTheme } from 'react-jss';

interface RequiredProps {
  children: React.ReactNode;
  summary: string;
}

export type TableProps = RequiredProps;

const Table: React.FC<TableProps> = ({
  children,
  ...outerProps
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <table {...outerProps} className={classes.table}>
      {children}
    </table>
  );
};

export default Table;
