import { createReducer } from 'src/store/utils';

import _mapValues from 'lodash/mapValues';
import _omit from 'lodash/omit';

import {
  ADD_MODAL,
  HIDE_ALL_MODALS,
  HIDE_MODAL,
  REMOVE_MODAL,
  SHOW_MODAL
} from './actions';

import { ModalsState } from './types';

const initialState: ModalsState = {};

const addModal = (state: ModalsState, { payload }: { payload: string }): ModalsState => ({
  ...state,
  [payload]: false
});

const removeModal = (state: ModalsState, { payload }: { payload: string }): ModalsState => _omit(state, payload);

const showModal = (state: ModalsState, { payload }: { payload: string }): ModalsState => ({
  ...state,
  [payload]: true
});

const hideModal = (state: ModalsState, { payload }: { payload: string }): ModalsState => ({
  ...state,
  [payload]: false
});

const hideAllModals = (state: ModalsState): ModalsState => _mapValues(state, () => false);

export const modalsReducer = createReducer(initialState, {
  [ADD_MODAL]: addModal,
  [REMOVE_MODAL]: removeModal,
  [SHOW_MODAL]: showModal,
  [HIDE_MODAL]: hideModal,
  [HIDE_ALL_MODALS]: hideAllModals
});
