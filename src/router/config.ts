import React, { lazy } from "react";

export type RouteType = {
	path: string; // 路径
	component: React.LazyExoticComponent<any>; // 组件
	exact: boolean; // 精准匹配
	auth: boolean; // 是否需要认证
};

const Columns = lazy(() => import(/* webpackChunkName: "Home" */ "../page/columns"));

export const routeConfig = [
	{
		path: "/columns",
		component: Columns,
		exact: true,
		auth: false,
	},
	{
		path: "/echarts",
		component: Columns,
		exact: true,
		auth: false,
	},
];
