import React from "react";
import useStyles from "./Table.styles";
import { useTheme } from 'react-jss';

interface RequiredProps {
  children: React.ReactNode;
}

interface DefaultProps {
  noBorder: boolean;
}

export type TrProps = RequiredProps & DefaultProps;

const Tr: React.FC<TrProps> & { defaultProps: DefaultProps } = ({
  children,
  noBorder,
  ...outerProps
}) => (
  <tr {...outerProps}>
    {
      React.Children.toArray(children).map((child) => {
        return React.cloneElement(child as React.ReactElement, { noBorder });
      })
    }
  </tr>
);

export default Tr;
