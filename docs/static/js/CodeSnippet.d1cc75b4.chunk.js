"use strict";
(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[6072],{

/***/ 93887:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var react_monaco_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85526);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46417);
var CodeEditor=function CodeEditor(props){var value=props.value,_props$height=props.height,height=_props$height===void 0?460:_props$height,_props$language=props.language,language=_props$language===void 0?"javascript":_props$language,onChange=props.onChange;var editorRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();var options={selectOnLineNumbers:true,fontSize:14,formatOnPaste:true,automaticLayout:true,formatOnType:true,minimap:{enabled:false}};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(editorRef.current){editorRef.current.setValue(value);editorRef.current.getAction("editor.action.formatDocument").run();//自动格式化代码
editorRef.current.setValue(editorRef.current.getValue());//再次设置
}},[value]);var editorDidMountHandle=function editorDidMountHandle(editor){editorRef.current=editor;};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_monaco_editor__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,{height:height,language:language,theme:"vs-dark"// value={value}
,options:options,onChange:onChange,editorDidMount:editorDidMountHandle});};/* harmony default export */ __webpack_exports__["Z"] = (CodeEditor);

/***/ }),

/***/ 64559:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ page_CodeSnippet; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./src/components/CodeEditor/index.tsx
var CodeEditor = __webpack_require__(93887);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(59491);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(76063);
;// CONCATENATED MODULE: ./src/config/codeSnippet.ts
var codeSnippetMap={randomNum:"\n/**\n * \u751F\u6210\u4E00\u4E2A\u8303\u56F4\u5185\u7684\u968F\u673A\u6570\n */\nconst getRandom = (min, max) => {\n  // \u9996\u5148\u6211\u4EEC\u83B7\u53D6\u4E00\u4E2A[0,1)\u7684\u6D6E\u70B9\u6570\n  const floatRandom = Math.random();\n\n  // \u7136\u540E\u8BA1\u7B97\u51FA\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C\u4E4B\u95F4\u7684\u8303\u56F4, \u52A01\u662F\u4E3A\u4E86\u53EF\u4EE5\u7B49\u4E8Emax\n  const difference = max - min + 1;\n\n  // \u751F\u6210[0,difference]\u4E4B\u95F4\u7684\u968F\u673A\u6570, \u5411\u4E0B\u53D6\u6574\n  const random = Math.floor(difference * floatRandom);\n\n  // \u8FD4\u56DE[min, difference + min] => [min, max]\n  const randomWithinRange = random + min;\n\n  return randomWithinRange;\n};\n\nconsole.log(getRandom(7, 9));  \n\n// \u7B80\u5199\nconst getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;\n",idReg:"\n/*\n* @Description: \u8EAB\u4EFD\u8BC1\u53F7\u9A8C\u8BC1\n* @param {String} val \u9700\u8981\u9A8C\u8BC1\u7684\u53F7\u7801\n* \u8FD9\u91CC\u53EA\u68C0\u67E5\u8EAB\u4EFD\u8BC1\u53F7\u7801\u662F\u5426\u7B26\u5408\u89C4\u8303\uFF0C\u5305\u62EC\u957F\u5EA6\uFF0C\u7C7B\u578B\u3002\n* \u8EAB\u4EFD\u8BC1\u53F7\u7801\u89C4\u8303\uFF1A\u8EAB\u4EFD\u8BC1\u53F7\u7801\u4E3A15\u4F4D\u6216\u800518\u4F4D\uFF0C15\u4F4D\u65F6\u5168\u4E3A\u6570\u5B57\uFF0C18\u4F4D\u524D17\u4F4D\u4E3A\u6570\u5B57\uFF0C\u6700\u540E\u4E00\u4F4D\u662F\u6821\u9A8C\u4F4D\uFF0C\u53EF\u80FD\u4E3A\u6570\u5B57\u6216\u5B57\u7B26X\n*/\nfunction checkCardNo(val) {\n  var reg = /(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/;\n  return reg.test(val)\n}\n"};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/FormOutlined.js
// This icon file is generated automatically.
var FormOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"
      }
    }]
  },
  "name": "form",
  "theme": "outlined"
};
/* harmony default export */ var asn_FormOutlined = (FormOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(17469);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/FormOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var FormOutlined_FormOutlined = function FormOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_FormOutlined
  }));
};
FormOutlined_FormOutlined.displayName = 'FormOutlined';
/* harmony default export */ var icons_FormOutlined = (/*#__PURE__*/react.forwardRef(FormOutlined_FormOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CopyOutlined.js + 1 modules
var CopyOutlined = __webpack_require__(66407);
// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(92229);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
;// CONCATENATED MODULE: ./src/page/CodeSnippet/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(46417);
;// CONCATENATED MODULE: ./src/page/CodeSnippet/index.tsx
/* 生成代码片段 */var snippetArr=[{type:"randomNum",btnText:"生成一个范围内的随机数"},{type:"idReg",btnText:"身份证号验证"}];var CodeSnippet=function CodeSnippet(props){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),code=_useState2[0],setCode=_useState2[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"code-snippet",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"snippet-type",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"title",children:"\u4EE3\u7801\u7247\u6BB5\u7C7B\u578B"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container",children:snippetArr.map(function(_ref){var type=_ref.type,btnText=_ref.btnText;return/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(icons_FormOutlined,{}),onClick:function onClick(e){setCode(codeSnippetMap[type]||"console.log(\"chenjiang\")");},children:btnText},type);})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"code-result",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"title",children:"\u751F\u6210\u7ED3\u679C"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"btn-group",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(CopyOutlined/* default */.Z,{}),onClick:function onClick(){if(!code)return message/* default.info */.ZP.info("没有啥要复制的");copy_to_clipboard_default()(code);message/* default.success */.ZP.success("已复制到剪切板");},children:"\u590D\u5236"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeEditor/* default */.Z,{value:code,language:"javascript"})]})]});};/* harmony default export */ var page_CodeSnippet = (CodeSnippet);

/***/ })

}]);