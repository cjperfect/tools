export const requiredRules = [{ required: true, message: "请输入" }];

export const CONFIG_EXAMPLE = [
  {
    dataIndex: "name",
    title: "姓名",
    ellipsis: true,
    width: 150,
    align: "left"
  },
  {
    dataIndex: "age",
    title: "年龄",
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
  randomType: "cname",
  defaultValue: "- -"
};
