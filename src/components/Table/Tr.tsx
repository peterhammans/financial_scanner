import React from "react";
import useStyles from "./Table.styles";
import { useTheme } from 'react-jss';
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
  const theme = useTheme();
  const classes = useStyles({ noBorder, theme });

  return isTabletUp(viewportWidth) ? (
    <tr {...outerProps}>
      {
        React.Children.toArray(children).map((child) => {
          return React.cloneElement(child as React.ReactElement, { noBorder });
        })
      }
    </tr>
  ) : (
    <div className={classes.trMobile}>
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
