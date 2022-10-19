import {renderHook, RenderHookResult, act} from '@testing-library/react-hooks';
import {useSelector, useDispatch} from 'react-redux';
import {useDashboard, UseDashboardReturn} from '../useDashboard';
import {REQUEST_ARTICLES} from 'src/redux/dashoard/actionType';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('#useDashboard', () => {
  let result: RenderHookResult<undefined, UseDashboardReturn>;

  const dashboardMock = {
    dashboardData: [],
    error: "",
    isLoading: false,
  };

  const dispatchMock = jest.fn();

  const dashboardDataMock = jest.fn().mockReturnValueOnce(dashboardMock);

  beforeAll(() => {
    (useSelector as jest.Mock).mockImplementationOnce(dashboardDataMock);
    (useDispatch as jest.Mock).mockReturnValueOnce(dispatchMock);

    result = renderHook<undefined, UseDashboardReturn>(() => useDashboard());
  });

  afterAll(() => {
    jest.clearAllMocks();
    result.unmount();
  });

  describe('#select ordersList', () => {
    it('should return ordersList', () => {
      const {
        result: {
          current: {data},
        },
      } = result;

      expect(data).toBe(dashboardMock);
    });
  });

  describe('#fetchDashboardt', () => {
    it('should call dispatch with fetch action', () => {
      const {
        result: {
          current: {fetchDashboard},
        },
      } = result;

      act(() => {
        fetchDashboard({page:0});
      });

      expect(dispatchMock).toHaveBeenCalled();
      expect(dispatchMock).toHaveBeenCalledWith({
        payload: [],
        type: REQUEST_ARTICLES,
      });
    });
  });
});
