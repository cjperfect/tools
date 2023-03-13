import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

type RequestType = AxiosRequestConfig & { [extra: string]: any };

type Result<T> = {
  code: number | string;
  msg: string;
  result: T;
};

const $ajax = (url = "", params = {}, method = "get", config: { [extra: string]: any } = {}) => {
  const http: AxiosInstance & { [extra: string]: any } = axios.create({
    baseURL: "/",
    timeout: 30000,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  http.interceptors.request.use(
    (config: RequestType): any => {
      return config;
    },
    (err: any) => {
      return Promise.reject(err);
    }
  );

  http.interceptors.response.use(
    (res: AxiosResponse) => {
      return res;
    },
    (err: any) => {
      return Promise.reject(err);
    }
  );

  return http.request({
    method,
    url,
    data: { ...(params || {}) },
    ...config,
    headers: {
      ...(config.headers || {}),
    },
  });
};

export default $ajax;
