import axios from "axios";
import { BASE_URL, ENDPOINTS } from "../../utils/utils";

export interface GetDataProps {
  endpoint: keyof typeof ENDPOINTS;
}

export class FetchDataService {
  async getData({ endpoint }: GetDataProps): Promise<any> {
    try {
      const url = `${BASE_URL}${ENDPOINTS[endpoint]}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
}
