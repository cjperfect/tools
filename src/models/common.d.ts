/* 已导入配置的接口 */
interface ConfigType {
  config: string;
}

/* 代码片段里面按钮的接口 */
interface SnippetType {
  type: string; // 什么代码
  btnText: string; // 按钮文字
  language?: string; // 什么编程语言
}

/* 下拉框里面option */
interface OptionType {
  key: string;
  value: string;
  label: string;
  title?: string;
}

/* 下拉框所有options */
interface Options {
  label: string;
  options: OptionType[];
}

// 常用网站
interface Website {
  title: string;
  url: string;
  icon?: any;
}

declare module "react-sortable-tree";
