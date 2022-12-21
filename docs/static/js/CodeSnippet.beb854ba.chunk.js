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
var codeSnippetMap={commonTable:"import { CommonTable, setPagination } from \"ta-biz\";\nimport { Modal } from \"antd\";\nimport { withRoleTableBotton } from \"yss-biz\";\n\nconst bindState = [\"pagination\"];\n\nfunction TestExample(props) {\n//\u8868\u683C\u5185\u6309\u94AE\nconst ButtonTableType = (item) => {\n    return [\n    {\n        name: \"\u7F16\u8F91\",\n        roule: true,\n        func: (e, item) => {}\n    },\n    {\n        name: \"\u5220\u9664\",\n        roule: true,\n        func: (item, v) => {\n        Modal[\"confirm\"]({\n            title: \"\u662F\u5426\u8981\u5220\u9664\u6570\u636E\uFF1F\",\n            content: \"\u662F\u5426\u8981\u5220\u9664\u6570\u636E\uFF1F\",\n            onOk() {},\n            onCancel() {}\n        });\n        }\n    }\n    ];\n};\n\nconst columns = [\n    {\n    title: \"\u5E8F\u53F7\",\n    dataIndex: \"key\",\n    align: \"center\",\n    key: \"key\",\n    width: 80,\n    ellipsis: true\n    },\n    {\n    title: \"\u64CD\u4F5C\",\n    key: \"operation\",\n    width: 250,\n    align: \"left\",\n    fixed: \"right\",\n    render: (row) => {\n        return withRoleTableBotton(ButtonTableType(row))(row);\n    }\n    }\n];\n\n/**\u7FFB\u9875\u5668\u64CD\u4F5C**/\nconst changePagination = (reqPage, reqPageSize) => {};\n\nconst pagination = setPagination(\n    props,\n    \"pagination\",\n    changePagination,\n    changeSync\n);\n\nreturn (\n    <CommonTable\n    dataSource={[]}\n    columns={columns}\n    rowKey={\"id\"}\n    resizable={false}\n    colDraggable={false}\n    rowSelection={rowSelection}\n    pagination={pagination}\n    />\n);\n}",addMenu:"\n/**\n * @date 2020/6/12\n * \u6253\u5F00\u65B0\u9875\u7B7E\n * @param url    \u65B0\u6253\u5F00\u6807\u7B7E\u9875\u7684\u5730\u5740-\u5FC5\u987B\n * @param title  \u65B0\u6253\u5F00\u6807\u7B7E\u9875\u7684\u6807\u9898-\u5FC5\u987B\n */\nexport function addMenu(\n  url,\n  title,\n  menuCode, //\u83DC\u5355code\u7801\n  routeParams = {}, //\u53C2\u6570\n  refresh = true, //\u518D\u6B21\u6253\u5F00\u5237\u65B0\u754C\u9762\n  bool = false\n) {\n  let dev = process.env.NODE_ENV === \"development\";\n\n  if (!dev && !bool) {\n    const type = \"addTab\";\n    bizUtils.postFatherMessage(type, url, menuCode, title, routeParams, refresh);\n  } else {\n    // \u672C\u5730\u73AF\u5883\n\n    if (!this) return message.warn(\"\u672C\u5730\u73AF\u5883\u8DF3\u8F6C\u4F7F\u7528: addMenu.call(props.history, menuAddress, menuName, menuCode)\");\n    const path = url.split(\"#\")[1];\n    this.push({\n      pathname: path,\n      state: routeParams\n    });\n  }\n}",searchForm:"\nimport { SearchForm } from \"yss-biz\";\n\nfunction TestExample(props) {\n  // \u5904\u7406\u67E5\u8BE2\n  const handleSearch = (values) => {\n    // asyncHttpGetFundHugeRedeem(values);\n  };\n\n  // \u67E5\u8BE2\u6846\n  const formItems = [\n    {\n      name: \"fundCodes\",\n      label: \"\u4EA7\u54C1\u540D\u79F0\",\n      type: \"Select\",\n      options: allPrdCodes || [],\n      props: {\n        placeholder: \"\u591A\u9009\uFF0C\u9ED8\u8BA4\u67E5\u8BE2\u6240\u6709\",\n        mode: \"multiple\"\n      }\n    }\n  ];\n  return (\n    <SearchForm\n      labelSize=\"6em\"\n      itemSize=\"230px\"\n      lineOf={4}\n      formItem={formItems}\n      handleSearch={handleSearch}\n    />\n  );\n}\n\n\n// asnyc\u6587\u4EF6---\u5206\u9875\u67E5\u8BE2\n  async httpGetFundHugeRedeem(state, params, { getState }) {\n    const pagination = state.get(\"pagination\").toJS();\n    const searchParams = state.get(\"searchParams\").toJS();\n    const newParams = {\n      ...searchParams,\n      pageNum: pagination.current,\n      pageSize: pagination.pageSize,\n      ...params\n    };\n    const res = await getFundHugeRedeem(newParams);\n    const { code, data } = res;\n    if (code === \"200\" && data) {\n      pagination.total = parseInt(data.total);\n      pagination.current = newParams.pageNum;\n      pagination.pageSize = newParams.pageSize;\n\n      return getState().merge({\n        pagination,\n        searchParams: newParams,\n        dataSource: data.list || []\n      });\n    }\n  }\n"};
;// CONCATENATED MODULE: ./src/page/CodeSnippet/index.less
// extracted by mini-css-extract-plugin

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
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(46417);
;// CONCATENATED MODULE: ./src/page/CodeSnippet/index.tsx
/* 生成代码片段 */var snippetArr=[{type:"commonTable",btnText:"CommonTable代码片段"},{type:"searchForm",btnText:"searchForm代码片段"},{type:"addMenu",btnText:"addMenu代码片段"}];var CodeSnippet=function CodeSnippet(props){var _useState=(0,react.useState)("chenjiang"),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),code=_useState2[0],setCode=_useState2[1];return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"code-snippet",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"snippet-type",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"title",children:"\u4EE3\u7801\u7247\u6BB5\u7C7B\u578B"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container",children:snippetArr.map(function(_ref){var type=_ref.type,btnText=_ref.btnText;return/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(icons_FormOutlined,{}),onClick:function onClick(e){setCode(codeSnippetMap[type]||"chenjiang");},children:btnText});})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"code-result",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{className:"title",children:"\u751F\u6210\u7ED3\u679C"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(CopyOutlined/* default */.Z,{}),style:{marginLeft:"auto",display:"block",marginRight:20},onClick:function onClick(){if(!code)return message/* default.info */.ZP.info("没有啥要复制的");copy_to_clipboard_default()(code);message/* default.success */.ZP.success("已复制到剪切板");},children:"\u590D\u5236"}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeEditor/* default */.Z,{value:code,language:"javascript"})]})]});};/* harmony default export */ var page_CodeSnippet = (CodeSnippet);

/***/ })

}]);