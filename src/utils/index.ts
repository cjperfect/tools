/* 从storage获取用户自定义类型 */
export const operateRandomType = {
  get() {
    return JSON.parse(localStorage.diyTypeArr || "{}");
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
