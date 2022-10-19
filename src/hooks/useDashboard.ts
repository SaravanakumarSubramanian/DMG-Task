import {useDispatch, useSelector} from 'react-redux';
import {
  getDashboardData,
  getIsLoading,
  getDashboardError,
} from 'src/redux/dashoard/selectors';
import {DashboardPayloadType} from 'src/redux/dashoard/types';
import {requestArticles} from 'src/redux/dashoard/action';

/**
 * @type for useDashboard hook
 */
export interface UseDashboardReturn {
  isLoading: boolean;
  data: any;
  error: string;
  fetchDashboard(payload: DashboardPayloadType): void;
}

/**
 * 
 * @returns useDashboard hook
 */
export const useDashboard = (): UseDashboardReturn => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const data = useSelector(getDashboardData);
  const error = useSelector(getDashboardError);
  const fetchDashboard = (payload: DashboardPayloadType) => {
    dispatch(requestArticles(payload));
  };
  return {
    isLoading,
    data,
    error,
    fetchDashboard,
  };
};
