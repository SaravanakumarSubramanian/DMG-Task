import {all, fork} from 'redux-saga/effects';
import dashboardSaga from './dashoard/sagas';

export function* rootSaga() {
  yield all([fork(dashboardSaga)]);
}
