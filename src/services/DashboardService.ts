import {BASE_URL, BASE_ENDPOINT, ARTICLE_SEARCH,API_KEY} from 'src/services/ApiConstants';
import {getApiRequest} from 'src/services/RestService';
import { DashboardPayloadType, DashboardSuccessPayloadType} from 'src/redux/dashoard/types';

export const requestDashboardApi = async (body: DashboardPayloadType) => {
  try {
    console.log(
      `dashboardService url: ${BASE_URL}${BASE_ENDPOINT}${BASE_ENDPOINT} body: ${JSON.stringify(
        body,
      )} `,
    );
    const response: string = await getApiRequest(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=pdiRET3l7Osnyk7IHvSPl0ziiWFCFly1&q=Science&page=${body.page}`);
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
