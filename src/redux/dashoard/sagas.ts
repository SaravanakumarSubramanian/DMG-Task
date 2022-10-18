import {all, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosError} from 'axios';
import {DashboardSuccessPayloadType, RequestDashboardType} from './types';
import {requestArticlesFailed,requestArticlesSuccess} from './action';
import {REQUEST_ARTICLES} from './actionType';
import {requestDashboardApi} from 'src/services/DashboardService';

export function* fetchDashboardData(action: RequestDashboardType) {
  console.log(`saga fetchHome ${JSON.stringify(action.payload)}`);

  try {
    const payload: DashboardSuccessPayloadType = yield call(
      requestDashboardApi,
      action.payload,
    );
    yield put(requestArticlesSuccess({dashboardData: payload.dashboardData.response}));
  } catch (error) {
    const errorResponse: AxiosError = error as AxiosError;
    if (errorResponse.response) {
      const errorMessage: {message: string} = errorResponse.response.data;
      yield put(requestArticlesFailed({error: errorMessage.message}));
    }
  }
}

function* dashboardSaga() {
  yield all([takeLatest(REQUEST_ARTICLES, fetchDashboardData)]);
}

export default dashboardSaga;
