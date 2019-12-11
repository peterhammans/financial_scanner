import * as React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Colors } from "src/design-system/types";
import * as styles from './Loading.styles';

export type LoadingSize = 'small' | 'normal' | 'big';

interface DefaultProps {
  size: LoadingSize;
  color: Colors;
}

export type LoadingProps = DefaultProps;

const Loading: React.FC<LoadingProps> & { defaultProps: DefaultProps } = ({
  size,
  color,
  ...outerProps
}) => {

  return (
    <div {...outerProps} css={styles.container({ size, color })}>
      <div />
      <div />
    </div>
  );
};

Loading.defaultProps = {
  size: 'normal',
  color: 'accent'
};

export default Loading;
