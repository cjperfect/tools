interface Params {
  content?: string;
  minNum?: number;
  maxNum?: number;
}

export const allRandomType: OptionType[] = [
  { key: "content", value: "content", label: "随机用户提供内容" },
  { key: "rangeNum", value: "rangeNum", label: "随机范围整数" },
];

/**
 * 表单数据处理器
 */
export const formHandler = (type: string, args: Params) => {
  switch (type) {
    case "content":
      // 随机用户提供内容
      return {
        content: args.content,
        pickArr: args.content ? args.content?.split("\n").filter(Boolean) : [], //
      };

    // 随机范围数
    case "rangeNum":
      const minNum = args.minNum || 0;
      const maxNum = args.maxNum || 0;
      return {
        minNum: Math.min(minNum, maxNum),
        maxNum: Math.max(minNum, maxNum),
      };
  }
};
