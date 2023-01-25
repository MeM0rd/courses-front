import axios, { AxiosInstance } from 'axios';
import { API_URL } from '@/config';

export default function createApiInstance(): AxiosInstance {
  const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    withCredentials: true,
    params: {},
  });

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 404) {
        if (process && process.env.VUE_ENV === 'server') {
          return Promise.reject({ code: error.response.status });
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
