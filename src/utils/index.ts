import Mock from "mockjs";

export const generateColumns = (values: ColumnInterface) => {
  const { variable, num, columns = [] } = values;

  const newColumns = columns.map((curr: Column, index) => {
    const { align, className, dataIndex, ellipsis, fixed, title, width } = curr;
    const obj: any = {};
    if (className) obj.className = className;
    if (fixed) obj.fixed = fixed;

    return Object.assign(obj, {
      dataIndex,
      title,
      ellipsis,
      width,
      align
    });
  });

  const random = Mock.Random;

  const data = [];
  for (let i = 1; i <= num; i++) {
    const temp: any = { id: i };
    columns.forEach((column: any) => {
      const { randomType, dataIndex } = column;
      if (randomType === "sex") {
        // 性别
        temp[dataIndex] = random.pick(["男", "女"]);
      } else {
        temp[dataIndex] = random[randomType]();
      }
    });
    data.push(temp);
  }

  return {
    data,
    columns,
    dataText: `const ${variable} = ${JSON.stringify(data, null, 2)}`,
    columnsText: `const ${variable} = ${JSON.stringify(newColumns, null, 2)}`
  };
};
