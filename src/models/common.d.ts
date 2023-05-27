/* 已导入配置的接口 */
interface ConfigType {
  config: string;
}

/* 下拉框里面option */
interface OptionType {
  key: string;
  value: string;
  label: string;
}

/* 下拉框所有options */
interface Options {
  label: string;
  options: OptionType[];
}

interface RandomType {
  name: string;
  type: string;
  content: string;
  contentOrigin?: string;
}
