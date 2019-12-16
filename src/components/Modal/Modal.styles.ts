import { css } from '@emotion/core';
import { ModalProps } from "./Modal";
import { Theme } from "src/design-system/types";

const container = () => (theme: Theme) => css`
  position: fixed;
  opacity: 0.5;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${theme.colors.dark};
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const modal = () => (theme: Theme) => css`
  padding: ${theme.spacings["3xl"]}px;
  max-width: 700px;
`;

export {
  modal,
  container
};
