
import {combineReducers} from 'redux';
import dashboardReducer from 'src/redux/dashoard/reducer';

export const RESET_STORE = 'RESET_STORE';

const rootReducer = combineReducers({
  articleDashboard: dashboardReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type Selector<T> = (state: AppState) => T;

export default rootReducer;
