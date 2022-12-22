/* 已导入配置的接口 */
interface ConfigType {
  config: string;
  id: string;
}

/* 代码片段里面按钮的接口 */
interface SnippetType {
  type: string; // 什么代码
  btnText: string; // 按钮文字
}