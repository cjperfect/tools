export const codeSnippetMap: { [extra: string]: string } = {
  randomNum: `
/**
 * 生成一个范围内的随机数
 */
const getRandom = (min, max) => {
  // 首先我们获取一个[0,1)的浮点数
  const floatRandom = Math.random();

  // 然后计算出最大值和最小值之间的范围, 加1是为了可以等于max
  const difference = max - min + 1;

  // 生成[0,difference]之间的随机数, 向下取整
  const random = Math.floor(difference * floatRandom);

  // 返回[min, difference + min] => [min, max]
  const randomWithinRange = random + min;

  return randomWithinRange;
};

console.log(getRandom(7, 9));  

// 简写
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
`,
  idReg: `
/*
* @Description: 身份证号验证
* @param {String} val 需要验证的号码
* 这里只检查身份证号码是否符合规范，包括长度，类型。
* 身份证号码规范：身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
*/
function checkCardNo(val) {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(val)
}
`
};
