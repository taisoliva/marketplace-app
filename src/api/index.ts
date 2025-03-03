import axios, { AxiosInstance } from "axios";

class HttpAdapter {
  public api: AxiosInstance;

  constructor() {
    this.api = this.initializeAPI();
  }

  initializeAPI() {
    const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      withCredentials: true,
    });

    return api;
  }
}

export { HttpAdapter };
