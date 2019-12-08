import * as mixins from "src/design-system/mixins";
import { TextProps } from "./Text";
import { createUseStyles, Styles } from "react-jss";
import { Theme } from "src/design-system/types";

type StyleProps = Pick<
  TextProps,
  "color" | "marginRight" | "marginBottom" | "marginLeft" | "fontSize"
>;

type StyleClassNames = "text";

const useStyles = createUseStyles<Theme, StyleClassNames>(
  (theme: Theme): Styles<StyleClassNames> => ({
    text: ({
      marginRight,
      marginBottom,
      marginLeft,
      fontSize,
      color
    }: StyleProps) => ({
      ...mixins.spacings(theme)({
        marginRight,
        marginBottom,
        marginLeft
      }),
      ...mixins.responsive(theme)(theme.typography.sizes, { fontSize }),
      color: theme.colors[color]
    })
  })
);

export default useStyles;
