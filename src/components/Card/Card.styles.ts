import { css } from "@emotion/core";
import * as mixins from "src/design-system/mixins";
import { CardProps } from "./Card";
import { Theme } from "src/design-system/types";

type StyleProps = Pick<
  CardProps,
  | "marginRight"
  | "marginBottom"
  | "marginLeft"
  | "padding"
  | "backgroundColor"
  | "fullWidth"
  | "noShadow"
>;

const container = ({
  backgroundColor,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  fullWidth,
  noShadow
}: StyleProps) => (
  theme: Theme
) => css`
  background-color: ${theme.colors[backgroundColor]};
  ${fullWidth && css`width: 100%`};
  ${noShadow && css`boxShadow: ${mixins.boxShadow()}`};

  ${mixins.spacings({
    marginRight,
    marginBottom,
    marginLeft,
    padding
  })(theme)}
`;

export { container };
