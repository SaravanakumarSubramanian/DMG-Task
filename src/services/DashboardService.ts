import {BASE_URL, BASE_ENDPOINT, ARTICLE_SEARCH,API_KEY, QUERY_KEYWORD} from 'src/services/ApiConstants';
import {getApiRequest} from 'src/services/RestService';
import { DashboardPayloadType, DashboardSuccessPayloadType} from 'src/redux/dashoard/types';

/**
 * 
 * @param body page number
 * @returns api response
 */
export const requestDashboardApi = async (body: DashboardPayloadType) => {
  try {
    console.log(
      `dashboardService url: ${BASE_URL}${BASE_ENDPOINT}${ARTICLE_SEARCH} body: ${JSON.stringify(
        body,
      )} `,
    );
    const response: string = await getApiRequest(`${BASE_URL}${BASE_ENDPOINT}${ARTICLE_SEARCH}?api-key=${API_KEY}&q=${QUERY_KEYWORD}&page=${body.page}`);
    console.log(
      `response: ${JSON.stringify(response)}`,
    );
    const responseData: DashboardSuccessPayloadType = {dashboardData: response};
    return responseData;
  } catch (error) {
    console.log(`error: ${error}`);
    throw error;
  }
};
