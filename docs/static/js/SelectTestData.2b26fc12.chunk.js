"use strict";
(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[110],{

/***/ 93887:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9362);
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16017);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46417);
var CodeEditor=function CodeEditor(props){var value=props.value,_props$language=props.language,language=_props$language===void 0?"javascript":_props$language;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{showLineNumbers:true,startingLineNumber:1,language:language,style:react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,wrapLines:true,customStyle:{fontSize:16},children:value});};/* harmony default export */ __webpack_exports__["Z"] = (CodeEditor);

/***/ }),

/***/ 54246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$y": function() { return /* binding */ CONFIG_EXAMPLE3; },
/* harmony export */   "D4": function() { return /* binding */ CONFIG_EXAMPLE1; },
/* harmony export */   "Kt": function() { return /* binding */ RANDOM_TYPE_ARR; },
/* harmony export */   "RK": function() { return /* binding */ CONFIG_EXAMPLE2; },
/* harmony export */   "f4": function() { return /* binding */ REQUIRED_RULES; }
/* harmony export */ });
/* unused harmony exports DEFAULT_SELECT_TEST_DATA, SELECT_DATA_TEMPLATE */
/* 存放一些常量 */var REQUIRED_RULES=[{required:true,message:"请输入"}];var CONFIG_EXAMPLE1="name\nage\nsex";var CONFIG_EXAMPLE2="name-姓名\nage-年龄\nsex-性别";var CONFIG_EXAMPLE3="姓名\n年龄\n性别";var DEFAULT_SELECT_TEST_DATA="0-女&1-男&2-保密";var SELECT_DATA_TEMPLATE="[\n  {\n    \"key\": \"js\",\n    \"value\": \"js\",\n    \"label\": \"\u524D\u7AEFjs\",\n    \"title\": \"\u524D\u7AEFjs\",\n    \"children\": [\n      {\n        \"key\": \"react\",\n        \"value\": \"react\",\n        \"title\": \"\u524D\u7AEFreact\",\n        \"label\": \"\u524D\u7AEFreact\"\n      }\n    ]\n  },\n  {\n    \"key\": \"css\",\n    \"value\": \"css\",\n    \"title\": \"\u524D\u7AEFcss\",\n    \"label\": \"\u524D\u7AEFcss\"\n  },\n  {\n    \"key\": \"html\",\n    \"value\": \"html\",\n    \"title\": \"\u524D\u7AEFhtml\",\n    \"label\": \"\u524D\u7AEFhtml\"\n  }\n]";// 下拉数据导入配置模板
/* 随机类型 */var RANDOM_TYPE_ARR=[{label:"内置随机类型",options:[{key:"ctitle",value:"ctitle",label:"标题"},{key:"cname",value:"cname",label:"名字"},{key:"date",value:"date",label:"日期"},{key:"time",value:"time",label:"时间"},{key:"datetime",value:"datetime",label:"日期时间"},{key:"cparagraph",value:"cparagraph",label:"长文本"},{key:"city",value:"city",label:"城市"},{key:"province",value:"province",label:"省份"},{key:"zip",value:"zip",label:"邮政编码"},{key:"email",value:"email",label:"邮箱"},{key:"string",value:"string",label:"字符串"},{key:"url",value:"url",label:"URL"},{key:"ip",value:"ip",label:"IP"}]}];

/***/ }),

/***/ 96240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ page_SelectTestData; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(93433);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(59491);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(7919);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(98276);
;// CONCATENATED MODULE: ./src/page/SelectTestData/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(92229);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CopyOutlined.js + 1 modules
var CopyOutlined = __webpack_require__(66407);
// EXTERNAL MODULE: ./src/components/CodeEditor/index.tsx
var CodeEditor = __webpack_require__(93887);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/PlusCircleOutlined.js + 1 modules
var PlusCircleOutlined = __webpack_require__(55768);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MinusCircleOutlined.js + 1 modules
var MinusCircleOutlined = __webpack_require__(60020);
// EXTERNAL MODULE: ./node_modules/react-sortable-tree/dist/index.esm.js + 83 modules
var index_esm = __webpack_require__(12095);
// EXTERNAL MODULE: ./node_modules/mockjs/dist/mock.js
var mock = __webpack_require__(31325);
var mock_default = /*#__PURE__*/__webpack_require__.n(mock);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(21114);
;// CONCATENATED MODULE: ./src/page/SelectTestData/config.ts
var INITIAL_DATA=[{field:"name",type:"cname"},{field:"email",type:"email"}];// importConfig表单的接口
/**
 * 获取当前的配置
 */var getCurrentConfig=function getCurrentConfig(){return JSON.parse(localStorage.treeTestData||"[]");};/**
 * 处理用户自定义数据类型
 */var handleDiyData=function handleDiyData(storage,type,random){var _storage$type=storage[type],diyType=_storage$type.type,_storage$type$params=_storage$type.params,params=_storage$type$params===void 0?{}:_storage$type$params;switch(diyType){case"content":// 随机用户提供内容
return random.pick(params.pickArr);case"rangeNum":// 在范围内随机数
return random.integer(params.minNum,params.maxNum);default:break;}};/**
 * 生成一个节点, 并配置好测试数据
 */var createNode=function createNode(){var allConfig=getCurrentConfig();var random=(mock_default()).Random;var node={};var storage=utils/* operateRandomType.get */.t.get();// 获取所有用户自定义的数据类型
allConfig.forEach(function(item){var type=item.type,field=item.field;// type 为用户选的类型， 分为自定义数据类型和自带数据类型
if(random[type]){// 处理mock自带的数据类型
node[field]=random[type]();}else{// 处理自定义数据类型
node[field]=handleDiyData(storage,type,random);}});return node;};
// EXTERNAL MODULE: ./node_modules/react-sortable-tree/style.css
var style = __webpack_require__(60491);
;// CONCATENATED MODULE: ./src/page/SelectTestData/components/DraggableTree/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(46417);
;// CONCATENATED MODULE: ./src/page/SelectTestData/components/DraggableTree/index.tsx
var DraggableTree=function DraggableTree(props){var data=props.data,_onChange=props.onChange;var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),treeData=_useState2[0],setTreeData=_useState2[1];// 数据源
(0,react.useEffect)(function(){setTreeData(data);},[data]);/**
   * 添加子节点
   * @param rowInfo 当前节点信息
   */var addNode=function addNode(rowInfo){var NEW_NODE=createNode();/**
     * addNodeUnderParent 组件里面带的工具方法
     */var newTree=(0,index_esm/* addNodeUnderParent */.YI)({treeData:treeData,newNode:NEW_NODE,expandParent:true,parentKey:rowInfo?rowInfo.treeIndex:undefined,getNodeKey:function getNodeKey(_ref){var treeIndex=_ref.treeIndex;return treeIndex;}});_onChange(newTree.treeData);setTreeData(newTree.treeData);};/**
   * 删除当前节点
   * @param rowInfo 当前节点信息
   */var removeNode=function removeNode(rowInfo){var path=rowInfo.path;/**
     * removeNodeAtPath 组件里面带的工具方法
     */var newTree=(0,index_esm/* removeNodeAtPath */.k)({treeData:treeData,path:path,getNodeKey:function getNodeKey(_ref2){var treeIndex=_ref2.treeIndex;return treeIndex;}});_onChange(newTree);setTreeData(newTree);};/**
   * 添加顶层节点
   */var addTopNode=function addTopNode(){var data=[].concat((0,toConsumableArray/* default */.Z)(treeData),[createNode()]);_onChange(data);setTreeData(data);};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"draggable-tree-com",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{onClick:addTopNode,children:"\u6DFB\u52A0\u8282\u70B9"}),treeData.length?/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* default */.ZP,{isVirtualized:false,treeData:treeData,onChange:function onChange(data){setTreeData(data);_onChange(data);},generateNodeProps:function generateNodeProps(rowInfo){var node=rowInfo.node;return{title:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"field-wrap",children:"\u8282\u70B9"},node.value+node.title),buttons:[/*#__PURE__*/(0,jsx_runtime.jsx)(PlusCircleOutlined/* default */.Z,{onClick:function onClick(){addNode(rowInfo);}}),/*#__PURE__*/(0,jsx_runtime.jsx)(MinusCircleOutlined/* default */.Z,{onClick:function onClick(){removeNode(rowInfo);}})]};}}):/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z,{description:"\u914D\u7F6E\u5DF2\u66F4\u65B0, \u8BF7\u91CD\u65B0\u751F\u6210\u8282\u70B9"})]});};/* harmony default export */ var components_DraggableTree = (DraggableTree);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 22 modules
var es_form = __webpack_require__(82465);
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 6 modules
var drawer = __webpack_require__(97258);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 19 modules
var input = __webpack_require__(58482);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 48 modules
var es_select = __webpack_require__(29740);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(45705);
// EXTERNAL MODULE: ./src/config/constant.ts
var constant = __webpack_require__(54246);
;// CONCATENATED MODULE: ./src/page/SelectTestData/components/ImportConfig/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/page/SelectTestData/components/ImportConfig/index.tsx
/* 新增字段，模态框 */var ImportConfigModal=function ImportConfigModal(props){var visible=props.visible,onCancel=props.onCancel,onSubmit=props.onSubmit;var _Form$useForm=es_form/* default.useForm */.Z.useForm(),_Form$useForm2=(0,slicedToArray/* default */.Z)(_Form$useForm,1),form=_Form$useForm2[0];var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),options=_useState2[0],setOptions=_useState2[1];// 设置随机类型下拉框数据
(0,react.useEffect)(function(){// 设置随机类型下拉框数据
setOptions([{label:"自定义随机类型",options:utils/* operateRandomType.changeOption */.t.changeOption()}].concat((0,toConsumableArray/* default */.Z)(constant/* RANDOM_TYPE_ARR */.Kt)));},[]);/**
   * 校验是否有相同的字段
   */var validateCommon=function validateCommon(fields){var map={};for(var i=0;i<fields.length;i++){var field=fields[i].field;if(!map[field])map[field]=0;if(++map[field]>1){message/* default.warn */.ZP.warn("\u5B57\u6BB5[".concat(field,"]\u91CD\u590D\u4E86"));return false;}}return true;};/**
   * 表单提交事件
   * @param values 表单收集的值
   * @returns
   */var onFinish=function onFinish(values){var _values$allField=values.allField,allField=_values$allField===void 0?[]:_values$allField;if(!allField.length){return message/* default.error */.ZP.error("至少需要一个字段");}if(validateCommon(allField)){// 检验通过了, 存在本地
localStorage.treeTestData=JSON.stringify(allField);onSubmit===null||onSubmit===void 0?void 0:onSubmit(allField);}};return/*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z,{title:"\u914D\u7F6E\u5B57\u6BB5",width:600,open:visible,onClose:onCancel,className:"select-tree-data-modal",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z,{form:form,onFinish:onFinish,layout:"horizontal",initialValues:{allField:INITIAL_DATA},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.List */.Z.List,{name:"allField",children:function children(fields,_ref){var add=_ref.add,remove=_ref.remove;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",className:"add-btn",onClick:function onClick(){add({type:"string"});},children:"\u65B0\u589E"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"random-type-list",children:fields.map(function(field){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"field-container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u5B57\u6BB5",rules:constant/* REQUIRED_RULES */.f4,name:[field.name,"field"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z,{placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{className:"random-type",label:"随机值",rules:constant/* REQUIRED_RULES */.f4,name:[field.name,"type"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z,{style:{width:180},options:options,onClick:function onClick(e){e.stopPropagation();},placeholder:"\u8BF7\u9009\u62E9",showSearch:true,filterOption:function filterOption(input,option){var _option$label;return((_option$label=option===null||option===void 0?void 0:option.label)!==null&&_option$label!==void 0?_option$label:"").toLowerCase().includes(input.toLowerCase());}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(MinusCircleOutlined/* default */.Z,{onClick:function onClick(){remove(field.name);}})]},field.key);})})]});}}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z,{size:"large",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",htmlType:"submit",style:{width:120},children:"\u786E\u8BA4"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{htmlType:"reset",children:"\u91CD\u7F6E"})]})})]})});};/* harmony default export */ var ImportConfig = (ImportConfigModal);
;// CONCATENATED MODULE: ./src/page/SelectTestData/index.tsx
var SelectTestData_INITIAL_DATA=[{name:"陈江",email:"123465@qq.com",children:[{name:"张三",email:"66666@qq.com"}]},{name:"李四",email:"999999@qq.com"}];var SelectTestData=function SelectTestData(props){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),code=_useState2[0],setCode=_useState2[1];// 生成的代码
var _useState3=(0,react.useState)(SelectTestData_INITIAL_DATA),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),treeData=_useState4[0],setTreeData=_useState4[1];var _useState5=(0,react.useState)(false),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),visible=_useState6[0],setVisible=_useState6[1];// 导入配置
/**
   * 导入配置弹窗关闭
   */var onCancel=function onCancel(){setVisible(false);};/* 
    根据导入的导入配置生成折叠面板(也就是表格的columns)
  */var importSubmit=function importSubmit(value){setTreeData([]);setVisible(false);};return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"select-test-data",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"condition",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:"title",children:"\u914D\u7F6E"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"control",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{onClick:function onClick(){setVisible(true);},children:"\u914D\u7F6E\u5B57\u6BB5"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",onClick:function onClick(){setCode(JSON.stringify(treeData,function(key,value){if(typeof value==="boolean"||Array.isArray(value)&&!value.length){return undefined;}return value;},2));},children:"\u751F\u6210\u4EE3\u7801"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ImportConfig,{visible:visible,onCancel:onCancel,onSubmit:importSubmit}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_DraggableTree,{data:treeData,onChange:function onChange(data){setTreeData((0,toConsumableArray/* default */.Z)(data));}})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"code",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:"title",children:"\u751F\u6210\u6570\u636E"}),code?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"code-content",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(CopyOutlined/* default */.Z,{}),onClick:function onClick(){if(!code)return message/* default.info */.ZP.info("没有啥要复制的");copy_to_clipboard_default()(code);message/* default.success */.ZP.success("已复制到剪切板");},children:"\u590D\u5236"}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeEditor/* default */.Z,{value:code,language:"javascript"})]}):/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z,{description:"\u6682\u65E0\u6570\u636E"})]})]})});};/* harmony default export */ var page_SelectTestData = (SelectTestData);

/***/ }),

/***/ 21114:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ operateRandomType; }
/* harmony export */ });
/* 从storage获取用户自定义类型 */var operateRandomType={get:function get(){return JSON.parse(localStorage.diyTypeArr||"{}");},set:function set(val){localStorage.diyTypeArr=val;},/* 改变成下拉框option形式 */changeOption:function changeOption(){var data=[];var current=this.get();for(var key in current){data.push({key:key,value:key,label:key});}return data;}};

/***/ })

}]);