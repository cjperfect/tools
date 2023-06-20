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
