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

export interface State {
  symbols: {
    list: SymbolStats[];
    loading: boolean;
    error: Err | null;
  }
}