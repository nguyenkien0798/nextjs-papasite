import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    throwAccessDenied?: boolean; // is true if you want to self handle access denied exception
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const createService = (
  baseURL?: string,
  contentType = 'application/json',
  authToken?: string
): AxiosInstance => {
  return interceptAuth(baseConfig(baseURL, contentType), authToken);
};

const baseConfig = (baseURL?: string, contentType = 'application/json') => {
  return {
    baseURL,
    headers: {
      'Accept-Language': 'en-US',
      'Content-Type': contentType,
    },
  };
};

const interceptAuth = (
  config: AxiosRequestConfig,
  authToken?: string
) => {
  const instance = axios.create(config);
  instance.interceptors.request.use((cf) => {
    const token = authToken
    if (token && cf?.headers) {
      cf.headers['Authorization'] = 'Bearer ' + token;
    }
    return cf;
  });

  return instance;
};

export const instance = createService(BASE_URL);
