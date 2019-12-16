import { createAction } from 'redux-actions';

export const ADD_MODAL = 'ADD_MODAL';
export const REMOVE_MODAL = 'REMOVE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const HIDE_ALL_MODALS = 'HIDE_ALL_MODALS';

export const addModal = createAction(ADD_MODAL);
export const removeModal = createAction(REMOVE_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const showModal = createAction(SHOW_MODAL);
export const hideAllModals = createAction(HIDE_ALL_MODALS);
