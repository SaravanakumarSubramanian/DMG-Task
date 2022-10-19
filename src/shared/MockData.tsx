
import configureStore from 'redux-mock-store';
import { DashboardPayloadType } from 'src/redux/dashoard/types';

const mockStore = configureStore();
export const MockedStore = mockStore({
  articleDashboard: {
    dashboardData: [],
    error: '',
    isLoading: false,
  },
});

export const dashboardPayload:DashboardPayloadType={page:0}