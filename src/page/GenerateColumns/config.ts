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
    ],
  },
];

export type Field = {
  [extra: string]: any;
};

/**
 * 默认添加的字段信息
 */
export const DEFAULT_ADD_FIELD: Field = {
  dataIndex: "username",
  title: "用户名",
  width: 180,
  fixed: false,
  align: "left",
  ellipsis: true,
  className: undefined,
  randomType: "cname",
};
