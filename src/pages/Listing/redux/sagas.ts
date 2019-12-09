import { Action } from 'redux-actions';
import { put, takeLatest } from 'redux-saga/effects';

import { getSymbols } from './actions';
import { SagaCallbacks } from 'src/types';

export function* getSymbolsSaga({ payload }: Action<SagaCallbacks>) {
  try {
    // yield call(customersService.notifyCustomers, payload);
    if (payload.success) payload.success();
  } catch (error) {
    yield put(getSymbols.failure(error.message));
    if (payload.failure) payload.failure();
  } finally {
    yield put(getSymbols.fulfill());
    if (payload.fulfill) payload.fulfill();
  }
}

export default function* watch() {
  yield takeLatest(getSymbols.REQUEST, getSymbolsSaga);
}
