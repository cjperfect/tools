export const codeSnippetMap: { [extra: string]: string } = {
  randomNum: `/**
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
  idReg: `/*
* @Description: 身份证号验证
* @param {String} val 需要验证的号码
* 这里只检查身份证号码是否符合规范，包括长度，类型。
* 身份证号码规范：身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
*/
function checkCardNo(val) {
  var reg = /(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/;
  return reg.test(val)
}`,

  searchParams: `function request(params){
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
  cssEllipsis: `/* 单行 */
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
  diyHook: `/* 自定义hooks */
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
`,
  randomStr: `Math.random().toString(36).substr(2)`,
  randomArray: `let list = ["chenjiang", 1, 3, 5, "jiangchen"]
let res = list.sort(() => Math.random() - 0.5)
console.log(res)`,
  randomColor: `// 随机生成rbg值
function rgb() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  return rgb;
}

// 随机生成16进制颜色
function color16() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}`,
  tablerender: `const [dataSource, setDataSource] = useState([]);
const dataSourceRef = useRef([]);

useEffect(() => {
  dataSourceRef.current = dataSource;
}, [dataSource]);

const columns = [
  {
    dataIndex: "name",
    title: "姓名",
    render(val, text) {
      // 如果不使用useEffect, 无论外面怎么setDataSource，render里面永远是第一次的值
      // console.log(dataSource)

      console.log(dataSourceRef.current); // 就可以获取最新的了
    }
  }
];
`,
  tableop: `// 表格只有一条数据的时候不能删除，新增按钮永远在最后一条身上
const columns = [
  {
    title: "操作",
    key: "op",
    width: 120,
    fixed: "",
    render(val, record, index) {
      return (
        <span className="port-operate-column">
          {dataSourceRef.current.length > 1 ? (
            <i
              className="iconfont icon-btn-delete"
              onClick={() => {
                removeFunc(record.id);
              }}
            ></i>
          ) : null}
          {index === dataSourceRef.current.length - 1 ? (
            <i
              className="iconfont icon-btn-plus"
              onClick={() => {
                addFunc();
              }}
            ></i>
          ) : null}
        </span>
      );
    }
  }
];
  `,
  tobase64: `function convertImgToBase64(url, callback, outputFormat) {
  let canvas = document.createElement("CANVAS"),
    ctx = canvas.getContext("2d"),
    img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function () {
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL(outputFormat || "image/png");
    callback.call(this, dataURL);
    canvas = null;
  };
  img.src = url;
  document.body.append(img);
}

const url = "test.png";
convertImgToBase64(url, function (base64Img) {
  //转化后的base64
  console.log(base64Img);
});
  `,
};
