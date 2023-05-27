/* 存放一些常量 */

export const REQUIRED_RULES = [{ required: true, message: "请输入" }];

export const CONFIG_EXAMPLE1: string = "name\nage\nsex";
export const CONFIG_EXAMPLE2: string = "name-姓名\nage-年龄\nsex-性别";
export const CONFIG_EXAMPLE3: string = "姓名\n年龄\n性别";
export const DEFAULT_SELECT_TEST_DATA: string = "0-女&1-男&2-保密";
export const SELECT_DATA_TEMPLATE: string = `[
  {
    "key": "js",
    "value": "js",
    "label": "前端js",
    "title": "前端js",
    "children": [
      {
        "key": "react",
        "value": "react",
        "title": "前端react",
        "label": "前端react"
      }
    ]
  },
  {
    "key": "css",
    "value": "css",
    "title": "前端css",
    "label": "前端css"
  },
  {
    "key": "html",
    "value": "html",
    "title": "前端html",
    "label": "前端html"
  }
]`; // 下拉数据导入配置模板
