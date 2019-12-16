/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import ReactDOM from 'react-dom';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';

import { AppState } from 'src/store/types';
import { modalsActions } from 'src/store/modals';

import * as styles from './Modal.styles';

interface RequiredProps {
  name: string;
  children: React.ReactNode | ((data: { hide: () => void }) => React.ReactNode);
  modals: {
    [name: string]: boolean;
  };
  addModal: (name: string) => void;
  removeModal: (name: string) => void;
  showModal: (name: string) => void;
  hideModal: (name: string) => void;
}

interface DefaultProps {
  button: (data: { show: () => void; active: boolean }) => React.ReactNode;
}

export type ModalProps = RequiredProps & DefaultProps;

class Modal extends React.PureComponent<ModalProps> {
  static defaultProps: DefaultProps = {
    button: () => ''
  };

  el: HTMLDivElement;

  constructor(props: ModalProps) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const modalRoot = document.getElementById('modal-root');
    const { addModal, name } = this.props;
    if (modalRoot) {
      modalRoot.appendChild(this.el);
    }
    addModal(name);
  }

  componentWillUnmount() {
    const modalRoot = document.getElementById('modal-root');
    const { removeModal, name } = this.props;
    if (modalRoot) {
      modalRoot.removeChild(this.el);
    }
    removeModal(name);
  }

  show = () => {
    const { showModal, name } = this.props;
    showModal(name);
  };

  hide = () => {
    const { hideModal, name } = this.props;
    hideModal(name);
  };

  stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  render() {
    const { button, children, modals, name } = this.props;

    const modal = ReactDOM.createPortal(
      <div css={styles.container()} onClick={this.hide}>
        <div css={styles.modal()} onClick={this.stopPropagation}>
          {typeof children === 'function' ? children({ hide: this.hide }) : children}
        </div>
      </div>,
      this.el
    );

    return (
      <>
        {button({ show: this.show, active: !!modals[name] })}
        {modals[name] && modal}
      </>
    );
  }
}

const mapStateToProps = (state: AppState): Pick<ModalProps, 'modals'> => ({
  modals: state.modals
});

export { Modal as UnwrappedModal };

export default connect(
  mapStateToProps,
  modalsActions
)(Modal);
