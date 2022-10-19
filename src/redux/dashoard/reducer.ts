import {
  REQUEST_ARTICLES,
  REQUEST_ARTICLES_ERROR,
  REQUEST_ARTICLES_SUCCESS,
} from './actionType';
import {
  DashboardActions,
  DashboardState
} from './types';

const initialDashboardState: DashboardState = {
  dashboardData: [],
  error: '',
  isLoading: false,
};

export default (state = initialDashboardState, action: DashboardActions) => {
  switch (action.type) {
    case REQUEST_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dashboardData:[...state.dashboardData,...action.payload.dashboardData.docs],
        error: '',
      };
    case REQUEST_ARTICLES_ERROR:
      
      return {...state, error: action.payload.error, dashboardData: state.dashboardData, isLoading: false};
    case REQUEST_ARTICLES:
      return {...state, isLoading: true, error: ''};
    case "persist/REHYDRATE":
      console.log('state.REHYDRATE',action.payload)
      return {
        isLoading: false,
        dashboardData: action.payload.articleDashboard.dashboardData,
        error: '',
      };
    default:
      return state;
  }
};
