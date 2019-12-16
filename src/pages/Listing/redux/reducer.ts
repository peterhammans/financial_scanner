import { createReducer } from 'src/store/utils';

import {
  getSymbols
} from './actions';
import { ListingsState, SymbolStats } from './types';
import { Err } from 'src/types';

const initialListingsState: ListingsState = {
  symbols: {
    list: [],
    loading: false,
    error: null
  }
};

const getSymbolsRequest = (state: ListingsState): ListingsState => ({
  ...state,
  symbols: {
    ...state.symbols,
    loading: true
  }
});

const getSymbolsSuccess = (
  state: ListingsState,
  { payload: { items } }: { payload: { items: SymbolStats[] } }
): ListingsState => ({
  ...state,
  symbols: {
    ...state.symbols,
    list: items,
    error: null
  }
});

const getSymbolsFailure = (
  state: ListingsState,
  { payload: { error } }: { payload: { error: Err } }
): ListingsState => ({
  ...state,
  symbols: {
    ...state.symbols,
    error
  }
});

const getSymbolsFullfill = (state: ListingsState): ListingsState => ({
  ...state,
  symbols: {
    ...state.symbols,
    loading: false
  }
});

const listingReducer = createReducer(initialListingsState, {
  [getSymbols.REQUEST]: getSymbolsRequest,
  [getSymbols.SUCCESS]: getSymbolsSuccess,
  [getSymbols.FAILURE]: getSymbolsFailure,
  [getSymbols.FULFILL]: getSymbolsFullfill
});

export default listingReducer;
