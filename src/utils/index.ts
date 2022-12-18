import Mock from "mockjs";

const randomTypeMap: any = {
  date: "date",
  name: "cname",
  dateTime: "datetime",
  paragraph: "paragraph"
};

export const generateColumns = (values: ColumnInterface) => {
  const { variable, num, columns = [] } = values;

  const newColumns = columns.map((curr: Column, index) => {
    const { align, className, dataIndex, ellipsis, fixed, title, width } = curr;
    const obj: any = {
      dataIndex,
      title,
      ellipsis,
      width,
      align
    };
    if (className) obj.className = className;
    if (fixed) obj.fixed = fixed;

    return obj;
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
      }
      temp[dataIndex] = random[randomType]();
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
