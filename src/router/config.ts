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
const GenerateColumns = lazy(() => import(/* webpackChunkName: "GenerateColumns" */ "../page/GenerateColumns"));

// 生成下拉框测试数据
const SelectTestData = lazy(() => import(/* webpackChunkName: "SelectTestData" */ "../page/SelectTestData"));

// 自定义随机类型
const RandomType = lazy(() => import(/* webpackChunkName: "RandomType" */ "../page/RandomType"));

export const routeConfig = [
  {
    path: "/",
    component: GenerateColumns,
    exact: true,
  },
  {
    path: "/randomType",
    component: RandomType,
    exact: true,
  },
  {
    path: "/selectData",
    component: SelectTestData,
    exact: true,
  },
];
