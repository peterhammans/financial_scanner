export type Without<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type CompanySymbol = 'AMD' | 'MA';

export interface Traded {
  boughtAt: number;
  quantity: number;
}

export interface SymbolStats {
  symbol: CompanySymbol;
  avgPosition: number;
  volatility: number;
  currentTrend: number;
  currentSell: number;
  currentBuy: number;
  traded?: Traded;
}