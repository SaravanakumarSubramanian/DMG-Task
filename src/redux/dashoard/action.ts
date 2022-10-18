import {
  DashboardPayloadType,
  RequestDashboardType,

  DashboardSuccessPayloadType,
  DashboardSuccessType,

  DashboardFailedPayloadtype,
  DashboardFailedType,
} from './types';
import {
  REQUEST_ARTICLES,
  REQUEST_ARTICLES_ERROR,
  REQUEST_ARTICLES_SUCCESS,
} from './actionType';

export const requestArticles = (payload: DashboardPayloadType): RequestDashboardType => {
  return {
    type: REQUEST_ARTICLES,
    payload,
  };
};

export const requestArticlesSuccess = (
  payload: DashboardSuccessPayloadType,
): DashboardSuccessType => {
  return {
    type: REQUEST_ARTICLES_SUCCESS,
    payload,
  };
};

export const requestArticlesFailed = (
  payload: DashboardFailedPayloadtype,
): DashboardFailedType => {
  return {
    type: REQUEST_ARTICLES_ERROR,
    payload,
  };
};

export const dashboardActions = {
  requestArticles,
  requestArticlesSuccess,
  requestArticlesFailed,
};
