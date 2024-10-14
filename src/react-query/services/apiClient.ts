import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (): Promise<T[]> => {
    const response = await apiInstance.get<T[]>(this.endpoint);
    return response.data;
  };

  post = async (data: T): Promise<T> => {
    const response = await apiInstance.post<T>(this.endpoint, data);
    return response.data;
  };
}

export default APIClient;
