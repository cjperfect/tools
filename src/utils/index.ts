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
      align
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
        } else if (randomType === "float") {
          // 两位小数的浮点数
          temp[dataIndex] = random[randomType](0, 100, 2, 2);
        } else if (randomType === "") {
          // 空字符串
          temp[dataIndex] = "";
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
    dataText: `const dataSource = ${JSON.stringify(data, null, 2)}`,
    columnsText: `const ${variable} = ${JSON.stringify(newColumns, null, 2)}`
  };
};

// 保存配置到localstorage
export const saveConfigToStorage = (val: any) => {
  let data = [];
  const obj = { config: val };
  if (!localStorage.myConfig) {
    data = [obj];
  } else {
    data = [...JSON.parse(localStorage.myConfig), obj];
  }
  localStorage.myConfig = JSON.stringify(data);
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
  changeOption(): OptionsType[] {
    const data = [];
    const current = this.get();
    for (let key in current) {
      data.push({
        key,
        value: key,
        label: key
      });
    }
    return data;
  }
};
