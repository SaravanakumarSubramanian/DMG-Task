import {AppState, Selector} from 'src/redux/rootReducer';

export const getIsLoading: Selector<boolean> = (state: AppState) =>
  state.articleDashboard.isLoading;

export const getDashboardData: Selector<string> = (state: AppState) =>
  state.articleDashboard.dashboardData;

export const getDashboardError: Selector<string> = (state: AppState) =>
  state.articleDashboard.error;
