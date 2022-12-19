import Mock from "mockjs";

export const myJSONStringify = (obj: object[]) => {};

export const generateColumns = (values: ColumnInterface) => {
  const { variable, num, columns = [] } = values;

  const newColumns = columns.map((curr: Column, index) => {
    const { align, className, dataIndex, ellipsis, fixed, title, width } = curr;
    const obj: any = {
      dataIndex,
      title,
      ellipsis,
      width,
      align,
      render(value: any) {
        return value || "- -";
      }
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
      } else {
        temp[dataIndex] = random[randomType]();
      }
    });
    data.push(temp);
  }

  // let str = `[`;
  // newColumns.forEach((item, index) => {
  //   str += "\n\t{";
  //   for (let key in item) {
  //     if (typeof item[key] === "function") {
  //       str += `\n\t\t${item[key]},`;
  //     } else {
  //       str += `\n\t\t${key}: "${item[key]}",`;
  //     }
  //   }

  //   str += "\n\t},\n";
  // });
  // str += "]";

  // let str = JSON.stringify(
  //   newColumns,
  //   (key, value) => {
  //     if (typeof value === "function") {
  //       return `${value}`;
  //     }
  //     return value;
  //   },
  //   2
  // );

  return {
    data,
    columns,
    dataText: `const ${variable} = ${JSON.stringify(data, null, 2)}`,
    columnsText: `const ${variable} = ${JSON.stringify(newColumns, null, 2)}`
  };
};
