import {
  REQUEST_ARTICLES,
  REQUEST_ARTICLES_ERROR,
  REQUEST_ARTICLES_SUCCESS,
} from './actionType';

export interface DashboardPayloadType {
  page: number;
}

export interface DashboardSuccessPayloadType {
  dashboardData: any;
}

export interface DashboardFailedPayloadtype {
  error: string;
}

export interface DashboardState {
  dashboardData: [];
  error: string;
  isLoading: boolean;
}

export type RequestDashboardType = {
  type: typeof REQUEST_ARTICLES;
  payload: DashboardPayloadType;
};

export type DashboardSuccessType = {
  type: typeof REQUEST_ARTICLES_SUCCESS;
  payload: DashboardSuccessPayloadType;
};

export type DashboardFailedType = {
  type: typeof REQUEST_ARTICLES_ERROR;
  payload: DashboardFailedPayloadtype;
};

export type DashboardActions = RequestDashboardType | DashboardSuccessType | DashboardFailedType;
