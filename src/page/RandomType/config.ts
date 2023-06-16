export const allRandomType: OptionType[] = [
  { key: "content", value: "content", label: "随机用户提供内容" },
  { key: "rangeNum", value: "rangeNum", label: "随机范围数" },
];

/**
 * 表单数据处理器
 */
export const formHandler = (type: string, ...args: any) => {
  switch (type) {
    case "content":
      // 随机用户提供内容
      return {
        content: args[0]?.split("\n").filter(Boolean), //
        contentOrigin: args[0], // 保留一份原始随机内容, 用于初始化回显
      };

    // 随机范围数
    case "rangeNum":
      console.log(args);
      return {};
  }
};
