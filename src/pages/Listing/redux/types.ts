import { CompanySymbol, Traded, Err } from "src/types";

export interface SymbolStats {
  symbol: CompanySymbol;
  avgPosition: number;
  volatility: number;
  currentTrend: number;
  currentSell: number;
  currentBuy: number;
  traded?: Traded;
}

export interface ListingsState {
  symbols: {
    list: SymbolStats[];
    loading: boolean;
    error: Err | null;
  }
}