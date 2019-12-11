import { css } from "@emotion/core";
import * as mixins from 'src/design-system/mixins';
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

const box = ({
  alignItems,
  justifyContent,
  width,
  direction,
  wrap,
  grow,
  backgroundColor,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft
}: StyleProps) => (
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

  ${mixins.spacings({
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  })(theme)}
`;

export { box };
