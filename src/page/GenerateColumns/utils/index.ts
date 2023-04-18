import Mock from "mockjs";

export const generateColumns = (values: ColumnInterface) => {
  const { variable, num, columns = [] } = values;

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

  const diyRandomTypeByStorage = operateRandomType.get();

  const data = [];
  for (let i = 1; i <= num; i++) {
    const temp: any = { id: random.id() };
    columns.forEach((column: any) => {
      const { randomType, dataIndex } = column;
      if (diyRandomTypeByStorage[randomType]) {
        /* 处理自定义类型 */
        temp[dataIndex] = random.pick(diyRandomTypeByStorage[randomType]);
      } else {
        /* 处理mockjs自带的类型 */

        if (randomType === "sex") {
          // 性别
          temp[dataIndex] = random.pick(["男", "女"]);
        } else if (randomType === "natural") {
          // 自然数, 正整数
          temp[dataIndex] = random[randomType](0, 10000);
        } else if (randomType === "integer") {
          // 整数, 正负整数
          temp[dataIndex] = random[randomType](-100, 100);
        } else if (randomType === "float") {
          // 两位小数的浮点数
          temp[dataIndex] = random[randomType](0, 100, 2, 2);
        } else if (randomType === "") {
          // 空字符串
          temp[dataIndex] = "";
        } else if (randomType === "url") {
          // url
          temp[dataIndex] = random[randomType]("http");
        } else if (randomType === "ctitle") {
          temp[dataIndex] = random[randomType](8, 15);
        } else {
          temp[dataIndex] = random[randomType]();
        }
      }
    });
    data.push(temp);
  }

  return {
    data,
    columns,
    dataText: `const ${variable} = ${JSON.stringify(data, null, 2)}`,
    columnsText: `const columns = ${JSON.stringify(newColumns, null, 2)}`,
  };
};

/* 从storage获取用户自定义类型 */
export const operateRandomType = {
  get() {
    return localStorage.diyTypeArr ? JSON.parse(localStorage.diyTypeArr || "{}") : {};
  },
  set(val: any) {
    localStorage.diyTypeArr = val;
  },
  /* 改变成下拉框option形式 */
  changeOption(): OptionType[] {
    const data = [];
    const current = this.get();
    for (let key in current) {
      data.push({
        key,
        value: key,
        label: key,
      });
    }
    return data;
  },
};
