/**
 * columns里面每一个对象的类型
 */
interface Column {
  dataIndex: string; // 字段名
  title: string; // 字段中文
  fixed?: boolean; // 是否固定
  width: number; // 宽度
  align: string; // 对齐方式
  ellipsis: boolean; // 单元格是否自动省略
  className?: string; // 列的类名
  randomType: string; // 生成测试数据的类型
  [extra: string]: any;
}

// type Column = {
//   [K in keyof T]: [K];
// };

/**
 * 一键生成按钮生成数据的类型
 */
interface ColumnInterface {
  variable: string; // 以什么变量存放生成的结果
  num: number; // 生成多少条测试数据
  columns: Column[]; // 所有列
}
