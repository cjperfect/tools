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
  randomType: "cname"
};

/* 随机类型 */
export const RANDOM_TYPE_ARR = [
  {
    key: "integer",
    value: "integer",
    label: "整数"
  },
  {
    key: "cname",
    value: "cname",
    label: "名字"
  },
  {
    key: "datetime",
    value: "datetime",
    label: "日期时间"
  },
  {
    key: "date",
    value: "date",
    label: "日期"
  },
  {
    key: "csentence",
    value: "csentence",
    label: "一段话"
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
