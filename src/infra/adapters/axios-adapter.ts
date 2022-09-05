import { HttpAdapter } from "@shared/adapters/contracts/http-adapter";
import axios from "axios";

export default class AxiosAdapter implements HttpAdapter {
  async get(url: string, config?: any): Promise<any> {
    const axiosAnimes = await axios.get(url);
    return axiosAnimes.data.results;
  }
  
}