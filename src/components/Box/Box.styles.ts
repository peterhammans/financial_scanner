import { css, keyframes } from "@emotion/core";
import { BoxProps } from "./Box";
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

const container = ({ alignItems, justifyContent, width, direction, wrap, grow, backgroundColor }: StyleProps) => (
  theme: Theme
) => css`
  display: flex;
  box-sizing: border-box;
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  flex-grow: ${grow};
  background-color: ${theme.colors[backgroundColor]};
  width: ${width};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export { container };
