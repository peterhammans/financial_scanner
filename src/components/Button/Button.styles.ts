import { css } from "@emotion/core";
import * as mixins from "src/design-system/mixins";
import { ButtonProps } from "./Button";
import { Theme } from "src/design-system/types";

type StyleProps = Pick<
  ButtonProps,
  | "marginRight"
  | "marginBottom"
  | "marginLeft"
  | "variant"
  | "size"
  >;

const button = ({ marginRight, marginBottom, marginLeft, variant, size }: StyleProps) => (
  theme: Theme
) => css`
  ${mixins.spacings({
    marginRight,
    marginBottom,
    marginLeft,
  })(theme)}
`;

export { button };
