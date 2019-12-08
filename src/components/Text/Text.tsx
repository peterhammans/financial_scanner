import React from "react";
import { Responsive, Sizes, Spacings, Colors } from "src/design-system/types";
import useStyles from "./Text.styles";
import { useTheme } from 'react-jss';

type TagName = 'span' | 'p' | 'div';

interface RequiredProps {
  children: React.ReactNode;
}

interface DefaultProps {
  tagName: TagName;
  color: Colors;
  fontSize: Responsive<Sizes>;
  marginRight?: Responsive<Spacings>;
  marginBottom?: Responsive<Spacings>;
  marginLeft?: Responsive<Spacings>;
}

export type TextProps = RequiredProps & DefaultProps;

const Text: React.FC<TextProps> & { defaultProps: DefaultProps } = ({
  children,
  tagName,
  color,
  marginRight,
  marginBottom,
  marginLeft,
  fontSize,
  ...outerProps
}) => {
  const theme = useTheme();
  const classes = useStyles({
    color,
    marginBottom,
    marginRight,
    marginLeft,
    fontSize,
    theme
  });

  const Component = tagName;

  return (
    <Component {...outerProps} className={classes.text}>
      {children}
    </Component>
  );
};

Text.defaultProps = {
  tagName: "p",
  color: "dark",
  fontSize: "md"
};

export default Text;
