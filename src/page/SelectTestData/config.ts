import Mock from "mockjs";
import { operateRandomType } from "utils";

export interface FieldInteface {
  field: string;
  type: string;
}

export const INITIAL_DATA: FieldInteface[] = [
  { field: "name", type: "cname" },
  { field: "email", type: "email" },
];

// importConfig表单的接口
export interface FormInterface {
  allField: FieldInteface[];
}

/**
 * 获取当前的配置
 */
export const getCurrentConfig = (): FieldInteface[] => {
  return JSON.parse(localStorage.treeTestData || "[]");
};

/**
 * 处理用户自定义数据类型
 */
export const handleDiyData = (storage: any, type: string, random: any) => {
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

/**
 * 生成一个节点, 并配置好测试数据
 */
export const createNode = () => {
  const allConfig = getCurrentConfig();
  const random = Mock.Random;
  const node: any = {};

  const storage = operateRandomType.get(); // 获取所有用户自定义的数据类型

  allConfig.forEach(item => {
    const { type, field } = item;
    // type 为用户选的类型， 分为自定义数据类型和自带数据类型

    if (random[type]) {
      // 处理mock自带的数据类型
      node[field] = random[type]();
    } else {
      // 处理自定义数据类型
      node[field] = handleDiyData(storage, type, random);
    }
  });

  return node;
};
