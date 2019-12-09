import { createReducer } from 'src/store/utils';

import {
  getSymbols
} from './actions';
import { State, SymbolStats } from './types';
import { Err } from 'src/types';

const initialState: State = {
  symbols: {
    list: [],
    loading: false,
    error: null
  }
};

const getSymbolsRequest = (state: State): State => ({
  ...state,
  symbols: {
    ...state.symbols,
    loading: true
  }
});

const getSymbolsSuccess = (
  state: State,
  { payload: { items } }: { payload: { items: SymbolStats[] } }
): State => ({
  ...state,
  symbols: {
    ...state.symbols,
    list: items,
    error: null
  }
});

const getSymbolsFailure = (
  state: State,
  { payload: { error } }: { payload: { error: Err } }
): State => ({
  ...state,
  symbols: {
    ...state.symbols,
    error
  }
});

const getSymbolsFullfill = (state: State): State => ({
  ...state,
  symbols: {
    ...state.symbols,
    loading: false
  }
});

const listingReducer = createReducer(initialState, {
  [getSymbols.REQUEST]: getSymbolsRequest,
  [getSymbols.SUCCESS]: getSymbolsSuccess,
  [getSymbols.FAILURE]: getSymbolsFailure,
  [getSymbols.FULFILL]: getSymbolsFullfill
});

export default listingReducer;
