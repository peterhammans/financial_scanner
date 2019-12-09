import { createRoutine } from 'redux-saga-routines';

export const GET_SYMBOLS = `LISTING/GET_SYMBOLS`;

export const getSymbols = createRoutine(GET_SYMBOLS);
