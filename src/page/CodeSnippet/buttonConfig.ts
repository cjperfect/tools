export const snippetConfig: { [extra: string]: SnippetType[] } = {
  // type和codeSnippet的key对应即可
  javascript: [
    { type: "randomNum", btnText: "生成一个范围内的随机数" },
    { type: "randomStr", btnText: "生成随机字符串" },
    { type: "randomArray", btnText: "随机打乱数组" },
    { type: "randomColor", btnText: "生成随机颜色" },
    { type: "idReg", btnText: "身份证号验证" },
    { type: "searchParams", btnText: "查询请求模板(缓存查询条件)" },
  ],
  css: [{ type: "cssEllipsis", btnText: "CSS超出部分省略号", language: "css" }],
  react: [
    { type: "diyHook", btnText: "自定义hook(是否第一次渲染)" },
    { type: "tablerender", btnText: "antd table render获取不到最新useState" },
    { type: "tableop", btnText: "antd table操作列有删除和添加按钮" },
  ],
};
