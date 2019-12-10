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
  | "backgroundColor"
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
      direction,
      wrap,
      grow,
      backgroundColor,
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
      flexDirection: direction,
      flexWrap: wrap,
      flexGrow: grow,
      backgroundColor: theme.colors[backgroundColor],
      ...outerProps
    })
  })
);

export default useStyles;
