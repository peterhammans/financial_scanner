import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Responsive, Spacings, Colors } from 'src/design-system/types';
import * as styles from './Box.styles';

interface RequiredProps {
  children: React.ReactNode;
}

interface DefaultProps {
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent: 'flex-start' | 'center' | 'flex-end';
  alignItems: 'flex-start' | 'center' | 'flex-end';
  width: string;
  height: string;
  backgroundColor: Colors;
  column?: Responsive<number>;
  guttering?: Responsive<Spacings>;
  grow?: number;
  marginTop?: Responsive<Spacings>;
  marginRight?: Responsive<Spacings>;
  marginBottom?: Responsive<Spacings>;
  marginLeft?: Responsive<Spacings>;
  margin?: Responsive<Spacings>;
  paddingTop?: Responsive<Spacings>;
  paddingRight?: Responsive<Spacings>;
  paddingBottom?: Responsive<Spacings>;
  paddingLeft?: Responsive<Spacings>;
  padding?: Responsive<Spacings>;
}

export type BoxProps = RequiredProps & DefaultProps;

const Box: React.FC<BoxProps> & { defaultProps: DefaultProps } = (
  props: BoxProps
) => {
  const {
    children,
    marginRight,
    marginBottom,
    marginLeft,
    margin,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    padding,
    justifyContent,
    alignItems,
    grow,
    width,
    height,
    wrap,
    direction,
    guttering,
    backgroundColor,
    column,
    ...outerProps
  } = props;

  return (
    <div {...outerProps} css={styles.box(props)}>
      {React.Children.map(children, child => {
        if (
          !React.isValidElement(child) ||
          child.type === 'Box' ||
          (typeof child.type !== 'string' && child.type.name === 'Box')
        ) {
          return child;
        }
        return <div css={styles.innerBox(props)}>{child}</div>;
      })}
    </div>
  );
};

Box.displayName = 'Box';

Box.defaultProps = {
  direction: 'row',
  wrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  height: 'auto',
  backgroundColor: 'transparent'
};

export default Box;
