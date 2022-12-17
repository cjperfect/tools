import React, { lazy } from "react";

export type RouteType = {
	path: string; // 路径
	component: React.LazyExoticComponent<any>; // 组件
	exact: boolean; // 精准匹配
	auth: boolean; // 是否需要认证
};

const Home = lazy(() => import(/* webpackChunkName: "Home" */ "../page/home"));

export const routeConfig = [
	{
		path: "/home",
		component: Home,
		exact: true,
		auth: false,
	},
];
