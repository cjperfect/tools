import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "antd";
import { showMessage } from "./status";

export interface IResponse {
  msg: string;
  data: any;
  code: number | string;
}

interface RequestConfigInterface extends AxiosRequestConfig {
  headers: any;
  mask?: boolean; // 是否显示请求加载动画
}

const $ajax = async (
  url = "",
  params = {},
  method = "get",
  config: { [extra: string]: any } = {}
): Promise<IResponse> => {
  const http: AxiosInstance = axios.create({
    baseURL: "",
    timeout: 30000,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  http.interceptors.request.use(
    (config: RequestConfigInterface) => {
      const token = localStorage.getItem("Authorization") || "chenjiang_token";
      if (token) {
        config.headers.Authorization = token;
      }

      return config;
    },
    (err: any) => {
      // 对请求错误做些什么
      return Promise.reject(err);
    }
  );

  http.interceptors.response.use(
    (res: AxiosResponse) => {
      if (res.status === 200) {
        return res;
      } else {
        message.error(showMessage(res.status));
        return res;
      }
    },
    (err: any) => {
      // 超出 2xx 范围的状态码都会触发该函数。
      const { response } = err;
      if (response) {
        message.error(err.message);
        return Promise.reject(response.data);
      } else {
        message.error("网络连接异常,请稍后再试!");
      }
    }
  );

  const res_1 = await http.request({
    method,
    url,
    data: { ...(params || {}) },
    ...config,
    headers: {
      ...(config.headers || {}),
    },
  });

  return {
    msg: res_1.data?.msg || "请求成功",
    data: res_1.data,
    code: res_1.status,
  };
};

export default $ajax;
