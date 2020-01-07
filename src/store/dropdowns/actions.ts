import { createAction } from 'redux-actions';

export const ADD_DROPDOWN = 'ADD_MODAL';
export const REMOVE_DROPDOWN = 'REMOVE_DROPDOWN';
export const SHOW_DROPDOWN = 'SHOW_DROPDOWN';
export const HIDE_DROPDOWN = 'HIDE_DROPDOWN';
export const HIDE_ALL_DROPDOWNS = 'HIDE_ALL_DROPDOWNS';

export const addDropdown = createAction(ADD_DROPDOWN);
export const removeDropdown = createAction(REMOVE_DROPDOWN);
export const hideDropdown = createAction(HIDE_DROPDOWN);
export const showDropdown = createAction(SHOW_DROPDOWN);
export const hideAllDropdowns = createAction(HIDE_ALL_DROPDOWNS);
