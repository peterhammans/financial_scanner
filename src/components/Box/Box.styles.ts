import * as mixins from "src/design-system/mixins";
import { BoxProps } from "./Box";
import { createUseStyles, Styles } from 'react-jss';
import { Theme } from "src/design-system/types";

type StyleProps = Pick<
  BoxProps,
  "marginRight"
  | "marginBottom"
  | "marginLeft"
  | "paddingTop"
  | "paddingRight"
  | "paddingBottom"
  | "paddingLeft"
  | "padding"
>;

type StyleClassNames = 'box';

const useStyles = createUseStyles<Theme, StyleClassNames>(
  (theme: Theme): Styles<StyleClassNames> => ({
    box: (props: StyleProps) => ({
      ...mixins.spacings(theme)({ ...props })
    })
  })
);

export default useStyles;
