import axios, {AxiosError} from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { dashboardPayload } from 'src/shared/MockData';
import {
    requestDashboardApi,
} from 'src/services/DashboardService';

describe('Test dashboard Widget services', () => {
  const mock = new MockAdapter(axios);
  afterEach(() => {
    mock.reset();
  });
  it('test getToken when response code is 200', () => {
    mock.onGet().reply(200, {
      result:true,
    });

    return requestDashboardApi(dashboardPayload).then(response => {
      console.log(`response: ${JSON.stringify(response)}`)
      expect(response).toBeInstanceOf(Object)
    });
  });
  it('test getToken when response code is 500', () => {
    mock.onGet().reply(500, {
      error: 'Something Went Wrong',
    });

    return requestDashboardApi(dashboardPayload).catch((error: unknown) => {
      const errorReponse = error as AxiosError;
      expect(errorReponse.response?.status).toEqual(500);
    });
  });
});