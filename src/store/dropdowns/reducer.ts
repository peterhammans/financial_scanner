import { createReducer } from 'src/store/utils';

import _mapValues from 'lodash/mapValues';
import _omit from 'lodash/omit';

import {
  ADD_DROPDOWN,
  HIDE_ALL_DROPDOWNS,
  HIDE_DROPDOWN,
  REMOVE_DROPDOWN,
  SHOW_DROPDOWN
} from './actions';

import { DropdownsState } from './types';

const initialState: DropdownsState = {};

const addDropdown = (
  state: DropdownsState,
  { payload }: { payload: string }
): DropdownsState => ({
  ...state,
  [payload]: false
});

const removeDropdown = (
  state: DropdownsState,
  { payload }: { payload: string }
): DropdownsState => _omit(state, payload);

const showDropdown = (
  state: DropdownsState,
  { payload }: { payload: string }
): DropdownsState => ({
  ...state,
  [payload]: true
});

const hideDropdown = (
  state: DropdownsState,
  { payload }: { payload: string }
): DropdownsState => ({
  ...state,
  [payload]: false
});

const hideAllDropdowns = (state: DropdownsState): DropdownsState =>
  _mapValues(state, () => false);

export const dropdownsReducer = createReducer(initialState, {
  [ADD_DROPDOWN]: addDropdown,
  [REMOVE_DROPDOWN]: removeDropdown,
  [SHOW_DROPDOWN]: showDropdown,
  [HIDE_DROPDOWN]: hideDropdown,
  [HIDE_ALL_DROPDOWNS]: hideAllDropdowns
});
