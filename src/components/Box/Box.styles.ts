import margin from 'polished/lib/shorthands/margin';
import * as mixins from 'src/design-system/mixins';
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
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      padding,
      paddingRight,
      paddingTop,
      paddingBottom,
      paddingLeft,
      ...outerProps
    }: StyleProps) => ({
      ...mixins.spacings(theme)({
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        padding,
        paddingRight,
        paddingTop,
        paddingBottom,
        paddingLeft
      }),
      display: "flex",
      boxSizing: 'border-box',
      ...outerProps
    })
  })
);

export default useStyles;
