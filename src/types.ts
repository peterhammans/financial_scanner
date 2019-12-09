export type Without<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type Err = Error;

export type CompanySymbol = 'AMD' | 'MA';

export interface Traded {
  boughtAt: number;
  quantity: number;
}

export interface SagaCallbacks {
  success?(): void;
  failure?(): void;
  fulfill?(): void;
}