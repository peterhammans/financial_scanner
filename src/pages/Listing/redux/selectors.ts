import { AppState } from "src/store/types";

export const selectSymbolsList = (state: AppState) => state.listings.symbols.list;