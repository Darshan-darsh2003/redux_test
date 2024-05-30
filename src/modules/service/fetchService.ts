import axios from "axios";
import { BASE_URL, ROUTES } from "../../utils/utils";

export interface GetDataProps {
  endpoint: keyof typeof ROUTES;
}

export class FetchDataService {
  async getData({ endpoint }: GetDataProps): Promise<any> {
    try {
      const url = `${BASE_URL}${ROUTES[endpoint]}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
}
