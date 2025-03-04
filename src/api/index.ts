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

    api.interceptors.response.use(
      (response) => {
        if (response.data.access_token) {
          document.cookie = `auth=${response.data.access_token}; path=/; secure; HttpOnly; samesite=strict`;
        }
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return api;
  }
}

export { HttpAdapter };
