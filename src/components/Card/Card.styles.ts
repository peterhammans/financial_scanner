import * as mixins from "src/design-system/mixins";
import { CardProps } from "./Card";
import { Theme } from "src/design-system/types";
import { createUseStyles, Styles } from "react-jss";

type StyleProps = Pick<
  CardProps,
  | "marginRight"
  | "marginBottom"
  | "marginLeft"
  | "padding"
  | "backgroundColor"
  | "noShadow"
>;

type StyleClassNames = "card";

const useStyles = createUseStyles<Theme, StyleClassNames>(
  (theme: Theme): Styles<StyleClassNames> => ({
    card: ({
      backgroundColor,
      marginRight,
      marginBottom,
      marginLeft,
      padding,
      noShadow
    }: StyleProps) => ({
      ...mixins.spacings(theme)({
        marginRight,
        marginBottom,
        marginLeft,
        padding
      }),
      borderRadius: "2px",
      backgroundColor: theme.colors[backgroundColor],
      display: "flex",
      flexDirection: "column",
      ...(!noShadow && { boxShadow: mixins.boxShadow() })
    })
  })
);

export default useStyles;
