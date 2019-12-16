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

  border: none;
  border-radius: 3px;

  ${variant === 'primary' &&
  css`
      background: ${theme.colors.accent};
      color: ${theme.colors.light};
    `
  }
  ${variant === 'secondary' &&
  css`
      background: ${theme.colors.dark};
      color: ${theme.colors.light};
    `
  }
  ${size === 'large' &&
  css`
  padding: ${theme.spacings.md}px ${theme.spacings.xl}px;
  font-size: ${theme.typography.sizes.lg}px;
    `
  }
  ${size === 'normal' &&
  css`
      padding: ${theme.spacings.sm}px ${theme.spacings.lg}px;
      font-size: ${theme.typography.sizes.md}px;
    `
  }
  ${size === 'small' &&
  css`
    padding: ${theme.spacings.xs}px ${theme.spacings.md}px;
    font-size: ${theme.typography.sizes.sm}px;
    `
  }

  &:not([disabled]):hover {
    cursor: pointer;
  }
`;

export { button };
