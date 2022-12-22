/* 存放一些常量 */

export const REQUIRED_RULES = [{ required: true, message: "请输入" }];

export const CONFIG_EXAMPLE = [
  {
    dataIndex: "name",
    title: "姓名",
    ellipsis: true,
    width: 150,
    align: "left"
  },
  {
    dataIndex: "date",
    title: "日期",
    ellipsis: true,
    width: 150,
    align: "left"
  }
];

export type Field = {
  [extra: string]: any;
};

/**
 * 默认添加的字段信息
 */
export const DEFAULT_ADD_FIELD: Field = {
  dataIndex: "fundCode",
  title: "产品名称",
  width: 150,
  fixed: false,
  align: "left",
  ellipsis: true,
  className: undefined,
  randomType: "ctitle"
};

/* 随机类型 */
export const RANDOM_TYPE_ARR = [
  {
    key: "ctitle",
    value: "ctitle",
    label: "标题"
  },
  {
    key: "natural",
    value: "natural",
    label: "整数"
  },
  {
    key: "float",
    value: "float",
    label: "浮点数（两位小数）"
  },
  {
    key: "cname",
    value: "cname",
    label: "名字"
  },
  {
    key: "date",
    value: "date",
    label: "日期"
  },
  {
    key: "time",
    value: "time",
    label: "时间"
  },
  {
    key: "datetime",
    value: "datetime",
    label: "日期时间"
  },
  {
    key: "cparagraph",
    value: "cparagraph",
    label: "长文本"
  },
  {
    key: "sex",
    value: "sex",
    label: "性别"
  },
  {
    value: "province",
    label: "城市"
  }
];
