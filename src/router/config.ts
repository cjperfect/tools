import React, { lazy } from "react";

export type RouteType = {
  path: string; // 路径
  component: React.LazyExoticComponent<any>; // 组件
  exact: boolean; // 精准匹配
  auth: boolean; // 是否需要认证
};

const GenerateColumns = lazy(() => import(/* webpackChunkName: "Home" */ "../page/GenerateColumns"));
const Echarts = lazy(() => import(/* webpackChunkName: "Echarts" */ "../page/echarts"));

export const routeConfig = [
  {
    path: "/generate-columns",
    component: GenerateColumns,
    exact: true,
    auth: false
  },
  {
    path: "/echarts",
    component: Echarts,
    exact: true,
    auth: false
  }
];
