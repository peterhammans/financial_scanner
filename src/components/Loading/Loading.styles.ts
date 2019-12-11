import { css, keyframes } from '@emotion/core';
import { LoadingProps, LoadingSize } from "./Loading";
import { Theme } from "src/design-system/types";

type StyleProps = Pick<
  LoadingProps,
  'size' | 'color'
>;

const sizeMap: Record<LoadingSize, number> = {
  small: 20,
  normal: 50,
  big: 80
}

const pulse = (size: LoadingSize) => (theme: Theme) => keyframes`
  0% {
    will-change: opacity;
    top: ${(sizeMap[size] / 2) - 4}px;
    left: ${(sizeMap[size] / 2) - 4}px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    will-change: unset;
    top: 0;
    left: 0;
    width: ${sizeMap[size] - 8}px;
    height: ${sizeMap[size] - 8}px;
    opacity: 0
  }
`

const container = ({ size, color }: StyleProps) => (theme: Theme) => css`
  height: ${sizeMap[size]}px;
  width: ${sizeMap[size]}px;
  display: inline-block;
  position: relative;

  div {
    position: absolute;
    border: 4px solid ${theme.colors[color]};
    opacity: 1;
    border-radius: 50%;
    animation: ${pulse(size)(theme)} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    
    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;

export {
  container
};
