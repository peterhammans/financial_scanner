import { all, fork } from 'redux-saga/effects';
import listingSaga from 'src/pages/Listing/redux/sagas';

const rootSaga = function* root() {
  yield all([
    fork(listingSaga)
  ]);
};

export default rootSaga;
