export const snippetConfig: { [extra: string]: SnippetType[] } = {
  // type和config/codeSnippet的key对应即可
  javascript: [
    { type: "randomNum", btnText: "生成一个范围内的随机数" },
    { type: "idReg", btnText: "身份证号验证" },
    { type: "searchParams", btnText: "查询请求模板(缓存查询条件)" },
    { type: "tsGlobal", btnText: "TS全局声明类型", language: "typescript" }
  ],
  css: [{ type: "cssEllipsis", btnText: "CSS超出部分省略号", language: "css" }],
  react: [{ type: "diyHook", btnText: "自定义hook(是否第一次渲染)" }]
};
