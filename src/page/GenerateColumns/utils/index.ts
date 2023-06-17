import Mock from "mockjs";
import { operateRandomType } from "utils";

/**
 * 处理用户自定义数据类型
 */
const handleDiyData = (storage: any, type: string, random: any) => {
  const { type: diyType, params = {} } = storage[type];

  switch (diyType) {
    case "content":
      // 随机用户提供内容
      return random.pick(params.pickArr);
    case "rangeNum":
      // 在范围内随机数
      return random.integer(params.minNum, params.maxNum);
    default:
      break;
  }
};

export const generateColumns = (values: ColumnInterface) => {
  const { num, hasId, columns = [] } = values;

  const newColumns = columns.map((curr: Column) => {
    const { align, className, dataIndex, ellipsis, fixed, title, width } = curr;
    const obj: any = {};
    if (className) obj.className = className;
    if (fixed) obj.fixed = fixed;

    return Object.assign(obj, {
      dataIndex,
      title,
      ellipsis,
      width,
      align,
    });
  });

  const random = Mock.Random;

  const storage = operateRandomType.get(); // 获取所有用户自定义的数据类型

  const data = [];
  for (let i = 1; i <= num; i++) {
    const temp: any = {};
    if (hasId) {
      temp["id"] = random.id();
    }

    columns.forEach((column: any) => {
      const { randomType, dataIndex } = column;
      // randomType 为用户选的随机类型， 分为自定义数据类型和自带数据类型
      if (storage[randomType]) {
        // 自定义数据类型
        temp[dataIndex] = handleDiyData(storage, randomType, random);
      } else {
        // 处理mock数据类型
        temp[dataIndex] = random[randomType]();
      }
    });
    data.push(temp);
  }

  return {
    data,
    columns,
    dataText: `${JSON.stringify(data, null, 2)}`,
    columnsText: `${JSON.stringify(newColumns, null, 2)}`,
  };
};
