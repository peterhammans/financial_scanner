import React from "react";
import useStyles from "./Table.styles";
import { useTheme } from 'react-jss';
import { Responsive, Spacings } from "src/design-system/types";

interface RequiredProps {
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
  ...outerProps
}) => {
  const theme = useTheme();
  const classes = useStyles({ textAlign, noBorder, padding, theme });

  return (
    <td {...outerProps} className={classes.td}>
      {children}
    </td>
  );
};

Td.defaultProps = {
  textAlign: 'left',
  padding: 'md',
  noBorder: false
}

export default Td;
