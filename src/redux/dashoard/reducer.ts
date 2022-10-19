import {
  REQUEST_ARTICLES,
  REQUEST_ARTICLES_ERROR,
  REQUEST_ARTICLES_SUCCESS,
} from './actionType';
import {
  DashboardActions,
  DashboardState
} from './types';

// initial state
const initialDashboardState: DashboardState = {
  dashboardData: [],
  error: '',
  isLoading: false,
};
// Dashboard reducer
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
      if(action.payload){
        return {
          isLoading: false,
          dashboardData: action.payload.articleDashboard.dashboardData,
          error: '',
        };
      }else{
        return state;
      }

    default:
      return state;
  }
};
