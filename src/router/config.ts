import React, { lazy } from "react";

export type RouteType = {
  path: string; // 路径
  component: React.LazyExoticComponent<any>; // 组件
  exact: boolean; // 精准匹配
};

/* 
Webpack通过增加内联注释来告诉运行时，该有怎样的行为。通过向import中添加注释，我们可以执行诸如命名chunk或选择不同模式之类的操作。
webpack在打包的时候，对异步引入的库代码（lodash）进行代码分割时（需要配置webpack的SplitChunkPlugin插件），为分割后的代码块取得名字
*/
// 生成表格columns
const GenerateColumns = lazy(() => import(/* webpackChunkName: "Home" */ "../page/GenerateColumns"));

// 代码片段
const CodeSnippet = lazy(() => import(/* webpackChunkName: "CodeSnippet" */ "../page/CodeSnippet"));

// 常用网站
const UseWebsites = lazy(() => import(/* webpackChunkName: "Websites" */ "../page/UseWebsites"));

export const routeConfig = [
  {
    path: "/",
    component: GenerateColumns,
    exact: true,
  },
  {
    path: "/code-snippet",
    component: CodeSnippet,
    exact: true,
  },
  {
    path: "/websites",
    component: UseWebsites,
    exact: true,
  },
];
