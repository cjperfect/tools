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
  var reg = /(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/;
  return reg.test(val)
}`,

  searchParams: `
function request(params){
  const newParams = {
    ...oldSearchParams,
    pageNum: pagination.current,
    pageSize: pagination.pageSize,
    ...params
  };


  if(code === '200'){
    pagination.total = parseInt(data.total);
    pagination.current = newParams.pageNum;
    pagination.pageSize = newParams.pageSize;
  
    return {
      pagination,
      oldSearchParams: newParams
    }
  }
}
`,
  tsGlobal: `
// common.d.ts文件

// interface全局访问
interface OptionType {
  key: string;
  value: string;
  label: string;
}

// 下面就是声明全局type
type TestType1 = {good: string}
declare type TestType2 = {good: string}


// 声明全局type第二种方式
export {}; // 如果不是*.d.ts文件可能还需要导出
declare global {
  type TestType = {
    good: string;
  };

  namespace GD {
    type GDTestType = { GDGood: string };
  }
}
`,
  cssEllipsis: `
/* 单行 */
.box{
  /* 超出的文本隐藏 */
  overflow: hidden; 
  /* 溢出用省略号显示 */
  text-overflow: ellipsis; 
  /* 溢出不换行 */
  white-space: nowrap; 
}

/* 多行 */
.box1{
  overflow: hidden;
  text-overflow: ellipsis;
  /* 作为弹性伸缩盒子模型显示。*/
  display:-webkit-box; 
  /* 设置伸缩盒子的子元素排列方式--从上到下垂直排列 */
  -webkit-box-orient:vertical; 
  /* 显示的行 */
  -webkit-line-clamp:2; 
}
`,
  diyHook: `
/* 自定义hooks */
import { useEffect, useRef } from "react";

/**
 * 是否是第一次渲染
 */
export const useIsFirstRender = () => {
  const isFirstRenderRef = useRef(true);

  if (isFirstRenderRef.current) {
    isFirstRenderRef.current = false;
    return true;
  }

  return isFirstRenderRef.current;
};

/**
 * 更新状态的副作用, 不包含第一次渲染
 * @param {*} callback 回调函数
 * @param {*} deps 依赖
 */
export const useUpdateEffect = (callback, deps) => {
  const isFirstRender = useIsFirstRender();

  useEffect(() => {
    if (!isFirstRender) {
      // 不是第一次渲染的时候调用此函数
      return callback();
    }

    // eslint-disable-next-line
  }, deps);
};
`
};
