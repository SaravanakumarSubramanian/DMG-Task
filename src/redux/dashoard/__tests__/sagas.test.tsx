import {testSaga} from 'redux-saga-test-plan';
import dashboardSaga, { fetchDashboardData } from '../sagas';
import {requestArticlesSuccess,requestArticlesFailed} from '../action';
import { REQUEST_ARTICLES} from '../actionType';
import {requestDashboardApi} from 'src/services/DashboardService';
import { DashboardSuccessPayloadType, DashboardPayloadType, RequestDashboardType} from '../types';
import {takeLatest} from 'redux-saga/effects';

const requestObject: DashboardPayloadType = {
  page:0
};

const requestAction: RequestDashboardType = {
  type: REQUEST_ARTICLES,
  payload: requestObject,
};

const reposnseObject = {
  dashboardData: []
};

const sucessResponseObject: DashboardSuccessPayloadType = {
  dashboardData: []
};

describe('test dashboardSaga watcher saga', () => {
  it('fire on FETCH_DASHBOARD_REQUEST', () => {
    testSaga(dashboardSaga)
      .next()
      .all([
        takeLatest(REQUEST_ARTICLES, fetchDashboardData),
      ])
      .finish()
      .isDone();
  });
});

describe('Test dashboardSaga saga', () => {
  it('fire on requestDashboardApi', () => {
    testSaga(fetchDashboardData, requestAction)
      .next()
      .call(requestDashboardApi, requestObject)
      .next(reposnseObject)
      .put(requestArticlesSuccess(sucessResponseObject))
      .finish()
      .isDone();
  });
});

describe('test requestDashboardApi watcher error', () => {
  const error = new Error('Something Went Wrong In Service');
  it('fire on requestDashboardApi', () => {
    testSaga(fetchDashboardData, requestAction)
      .next()
      .throw(error)
      .put(requestArticlesFailed({error: error.message}))
      .finish()
      .isDone();
  });
});
