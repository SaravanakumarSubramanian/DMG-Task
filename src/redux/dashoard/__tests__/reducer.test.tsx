import {requestArticles,requestArticlesFailed,requestArticlesSuccess} from '../action';
import dashboardReducer from '../reducer';
import {DashboardState} from '../types';

describe('dashboardReducer', () => {
  let initialState: DashboardState;
  beforeEach(() => {
    initialState = {
      dashboardData:[],
      error: '',
      isLoading: false,
    };
  });

  test('requestArticlesFailed', () => {
    const nextState = dashboardReducer(
      initialState,
      requestArticles({page:0}),
    );
    expect(nextState.isLoading).toBeTruthy();
  });

  test('requestArticlesFailedSuccess', () => {
    const nextState = dashboardReducer(
      initialState,
      requestArticlesSuccess({
        dashboardData:[]
      })
    );
    expect(nextState.isLoading).toBeFalsy();
  });
  
  test('requestArticlesFailed', () => {
    const errorMock = 'some-error';
    const nextState = dashboardReducer(
      initialState,
      requestArticlesFailed({error: errorMock}),
    );
    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.error).toEqual(errorMock);
  });
});
