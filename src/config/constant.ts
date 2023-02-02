/* 存放一些常量 */

export const REQUIRED_RULES = [{ required: true, message: "请输入" }];

export const CONFIG_EXAMPLE: string = "name:姓名,age:年龄,sex:性别";
export const CONFIG_EXAMPLE2: string = "name,age,sex";

export type Field = {
  [extra: string]: any;
};

/**
 * 默认添加的字段信息
 */
export const DEFAULT_ADD_FIELD: Field = {
  dataIndex: "username",
  title: "用户名",
  width: 150,
  fixed: false,
  align: "left",
  ellipsis: true,
  className: undefined,
  randomType: "cname",
};

/* 随机类型 */
export const RANDOM_TYPE_ARR: Options[] = [
  {
    label: "内置随机类型",
    options: [
      {
        key: "ctitle",
        value: "ctitle",
        label: "标题",
      },
      {
        key: "natural",
        value: "natural",
        label: "自然数(正数)",
      },
      {
        key: "integer",
        value: "integer",
        label: "整数(正负)",
      },
      {
        key: "float",
        value: "float",
        label: "浮点数（两位小数）",
      },
      {
        key: "cname",
        value: "cname",
        label: "名字",
      },
      {
        key: "date",
        value: "date",
        label: "日期",
      },
      {
        key: "time",
        value: "time",
        label: "时间",
      },
      {
        key: "datetime",
        value: "datetime",
        label: "日期时间",
      },
      {
        key: "cparagraph",
        value: "cparagraph",
        label: "长文本",
      },
      {
        key: "sex",
        value: "sex",
        label: "性别",
      },
      {
        key: "city",
        value: "city",
        label: "城市",
      },
      {
        key: "province",
        value: "province",
        label: "省份",
      },
      {
        key: "zip",
        value: "zip",
        label: "邮政编码",
      },
      {
        key: "email",
        value: "email",
        label: "邮箱",
      },
      {
        key: "string",
        value: "string",
        label: "字符串",
      },
      {
        key: "url",
        value: "url",
        label: "URL",
      },
      {
        key: "ip",
        value: "ip",
        label: "IP",
      },
      {
        key: "",
        value: "",
        label: "空数据",
      },
    ],
  },
];
