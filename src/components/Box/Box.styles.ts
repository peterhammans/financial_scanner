import * as mixins from "src/design-system/mixins";
import { BoxProps } from "./Box";
import { createUseStyles, Styles } from "react-jss";
import { Theme } from "src/design-system/types";

type StyleProps = Pick<
  BoxProps,
  | "marginTop"
  | "marginRight"
  | "marginBottom"
  | "marginLeft"
  | "margin"
  | "paddingTop"
  | "paddingRight"
  | "paddingBottom"
  | "paddingLeft"
  | "padding"
  | "width"
  | "wrap"
  | "grow"
  | "direction"
  | "justifyContent"
  | "alignItems"
>;

type StyleClassNames = "box";

const useStyles = createUseStyles<Theme, StyleClassNames>(
  (theme: Theme): Styles<StyleClassNames> => ({
    box: ({
      width,
      wrap,
      grow,
      direction,
      justifyContent,
      alignItems,
      ...outerProps
    }: StyleProps) => ({
      ...mixins.spacings(theme)({ ...outerProps }),
      display: "flex",
      ...outerProps
    })
  })
);

export default useStyles;
