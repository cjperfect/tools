"use strict";
(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[929],{

/***/ 4246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$y": function() { return /* binding */ CONFIG_EXAMPLE3; },
/* harmony export */   "D4": function() { return /* binding */ CONFIG_EXAMPLE1; },
/* harmony export */   "RK": function() { return /* binding */ CONFIG_EXAMPLE2; },
/* harmony export */   "f4": function() { return /* binding */ REQUIRED_RULES; }
/* harmony export */ });
/* unused harmony exports DEFAULT_SELECT_TEST_DATA, SELECT_DATA_TEMPLATE */
/* 存放一些常量 */var REQUIRED_RULES=[{required:true,message:"请输入"}];var CONFIG_EXAMPLE1="name\nage\nsex";var CONFIG_EXAMPLE2="name-姓名\nage-年龄\nsex-性别";var CONFIG_EXAMPLE3="姓名\n年龄\n性别";var DEFAULT_SELECT_TEST_DATA="0-女&1-男&2-保密";var SELECT_DATA_TEMPLATE="[\n  {\n    \"key\": \"js\",\n    \"value\": \"js\",\n    \"label\": \"\u524D\u7AEFjs\",\n    \"title\": \"\u524D\u7AEFjs\",\n    \"children\": [\n      {\n        \"key\": \"react\",\n        \"value\": \"react\",\n        \"title\": \"\u524D\u7AEFreact\",\n        \"label\": \"\u524D\u7AEFreact\"\n      }\n    ]\n  },\n  {\n    \"key\": \"css\",\n    \"value\": \"css\",\n    \"title\": \"\u524D\u7AEFcss\",\n    \"label\": \"\u524D\u7AEFcss\"\n  },\n  {\n    \"key\": \"html\",\n    \"value\": \"html\",\n    \"title\": \"\u524D\u7AEFhtml\",\n    \"label\": \"\u524D\u7AEFhtml\"\n  }\n]";// 下拉数据导入配置模板

/***/ }),

/***/ 9038:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ page_RandomType; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3433);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 22 modules
var es_form = __webpack_require__(2465);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(7919);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(9491);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var es = __webpack_require__(1293);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(4714);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(8138);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/colors.js
var colors = __webpack_require__(238);
;// CONCATENATED MODULE: ./node_modules/antd/es/badge/utils.js

// eslint-disable-next-line import/prefer-default-export
function isPresetColor(color) {
  return colors/* PresetColorTypes.includes */.Y.includes(color);
}
;// CONCATENATED MODULE: ./node_modules/antd/es/badge/Ribbon.js






var Ribbon = function Ribbon(_ref) {
  var _classNames;
  var className = _ref.className,
    customizePrefixCls = _ref.prefixCls,
    style = _ref.style,
    color = _ref.color,
    children = _ref.children,
    text = _ref.text,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'end' : _ref$placement;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('ribbon', customizePrefixCls);
  var colorInPreset = isPresetColor(color);
  var ribbonCls = classnames_default()(prefixCls, "".concat(prefixCls, "-placement-").concat(placement), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-color-").concat(color), colorInPreset), _classNames), className);
  var colorStyle = {};
  var cornerColorStyle = {};
  if (color && !colorInPreset) {
    colorStyle.background = color;
    cornerColorStyle.color = color;
  }
  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-wrapper")
  }, children, /*#__PURE__*/react.createElement("div", {
    className: ribbonCls,
    style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, colorStyle), style)
  }, /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-text")
  }, text), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-corner"),
    style: cornerColorStyle
  })));
};
/* harmony default export */ var badge_Ribbon = (Ribbon);
;// CONCATENATED MODULE: ./node_modules/antd/es/badge/SingleNumber.js




function UnitNumber(_ref) {
  var prefixCls = _ref.prefixCls,
    value = _ref.value,
    current = _ref.current,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? 0 : _ref$offset;
  var style;
  if (offset) {
    style = {
      position: 'absolute',
      top: "".concat(offset, "00%"),
      left: 0
    };
  }
  return /*#__PURE__*/react.createElement("span", {
    style: style,
    className: classnames_default()("".concat(prefixCls, "-only-unit"), {
      current: current
    })
  }, value);
}
function getOffset(start, end, unit) {
  var index = start;
  var offset = 0;
  while ((index + 10) % 10 !== end) {
    index += unit;
    offset += unit;
  }
  return offset;
}
function SingleNumber(props) {
  var prefixCls = props.prefixCls,
    originCount = props.count,
    originValue = props.value;
  var value = Number(originValue);
  var count = Math.abs(originCount);
  var _React$useState = react.useState(value),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    prevValue = _React$useState2[0],
    setPrevValue = _React$useState2[1];
  var _React$useState3 = react.useState(count),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    prevCount = _React$useState4[0],
    setPrevCount = _React$useState4[1];
  // ============================= Events =============================
  var onTransitionEnd = function onTransitionEnd() {
    setPrevValue(value);
    setPrevCount(count);
  };
  // Fallback if transition event not support
  react.useEffect(function () {
    var timeout = setTimeout(function () {
      onTransitionEnd();
    }, 1000);
    return function () {
      clearTimeout(timeout);
    };
  }, [value]);
  // ============================= Render =============================
  // Render unit list
  var unitNodes;
  var offsetStyle;
  if (prevValue === value || Number.isNaN(value) || Number.isNaN(prevValue)) {
    // Nothing to change
    unitNodes = [/*#__PURE__*/react.createElement(UnitNumber, (0,esm_extends/* default */.Z)({}, props, {
      key: value,
      current: true
    }))];
    offsetStyle = {
      transition: 'none'
    };
  } else {
    unitNodes = [];
    // Fill basic number units
    var end = value + 10;
    var unitNumberList = [];
    for (var index = value; index <= end; index += 1) {
      unitNumberList.push(index);
    }
    // Fill with number unit nodes
    var prevIndex = unitNumberList.findIndex(function (n) {
      return n % 10 === prevValue;
    });
    unitNodes = unitNumberList.map(function (n, index) {
      var singleUnit = n % 10;
      return /*#__PURE__*/react.createElement(UnitNumber, (0,esm_extends/* default */.Z)({}, props, {
        key: n,
        value: singleUnit,
        offset: index - prevIndex,
        current: index === prevIndex
      }));
    });
    // Calculate container offset value
    var unit = prevCount < count ? 1 : -1;
    offsetStyle = {
      transform: "translateY(".concat(-getOffset(prevValue, value, unit), "00%)")
    };
  }
  return /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-only"),
    style: offsetStyle,
    onTransitionEnd: onTransitionEnd
  }, unitNodes);
}
;// CONCATENATED MODULE: ./node_modules/antd/es/badge/ScrollNumber.js

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var ScrollNumber = function ScrollNumber(_a) {
  var customizePrefixCls = _a.prefixCls,
    count = _a.count,
    className = _a.className,
    motionClassName = _a.motionClassName,
    style = _a.style,
    title = _a.title,
    show = _a.show,
    _a$component = _a.component,
    component = _a$component === void 0 ? 'sup' : _a$component,
    children = _a.children,
    restProps = __rest(_a, ["prefixCls", "count", "className", "motionClassName", "style", "title", "show", "component", "children"]);
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('scroll-number', customizePrefixCls);
  // ============================ Render ============================
  var newProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, restProps), {
    'data-show': show,
    style: style,
    className: classnames_default()(prefixCls, className, motionClassName),
    title: title
  });
  // Only integer need motion
  var numberNodes = count;
  if (count && Number(count) % 1 === 0) {
    var numberList = String(count).split('');
    numberNodes = numberList.map(function (num, i) {
      return /*#__PURE__*/react.createElement(SingleNumber, {
        prefixCls: prefixCls,
        count: Number(count),
        value: num,
        // eslint-disable-next-line react/no-array-index-key
        key: numberList.length - i
      });
    });
  }
  // allow specify the border
  // mock border-color by box-shadow for compatible with old usage:
  // <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />
  if (style && style.borderColor) {
    newProps.style = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, style), {
      boxShadow: "0 0 0 1px ".concat(style.borderColor, " inset")
    });
  }
  if (children) {
    return (0,reactNode/* cloneElement */.Tm)(children, function (oriProps) {
      return {
        className: classnames_default()("".concat(prefixCls, "-custom-component"), oriProps === null || oriProps === void 0 ? void 0 : oriProps.className, motionClassName)
      };
    });
  }
  return /*#__PURE__*/react.createElement(component, newProps, numberNodes);
};
/* harmony default export */ var badge_ScrollNumber = (ScrollNumber);
;// CONCATENATED MODULE: ./node_modules/antd/es/badge/index.js



var badge_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









var Badge = function Badge(_a) {
  var _classNames, _classNames2;
  var customizePrefixCls = _a.prefixCls,
    customizeScrollNumberPrefixCls = _a.scrollNumberPrefixCls,
    children = _a.children,
    status = _a.status,
    text = _a.text,
    color = _a.color,
    _a$count = _a.count,
    count = _a$count === void 0 ? null : _a$count,
    _a$overflowCount = _a.overflowCount,
    overflowCount = _a$overflowCount === void 0 ? 99 : _a$overflowCount,
    _a$dot = _a.dot,
    dot = _a$dot === void 0 ? false : _a$dot,
    _a$size = _a.size,
    size = _a$size === void 0 ? 'default' : _a$size,
    title = _a.title,
    offset = _a.offset,
    style = _a.style,
    className = _a.className,
    _a$showZero = _a.showZero,
    showZero = _a$showZero === void 0 ? false : _a$showZero,
    restProps = badge_rest(_a, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color", "count", "overflowCount", "dot", "size", "title", "offset", "style", "className", "showZero"]);
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('badge', customizePrefixCls);
  // ================================ Misc ================================
  var numberedDisplayCount = count > overflowCount ? "".concat(overflowCount, "+") : count;
  var isZero = numberedDisplayCount === '0' || numberedDisplayCount === 0;
  var ignoreCount = count === null || isZero && !showZero;
  var hasStatus = (status !== null && status !== undefined || color !== null && color !== undefined) && ignoreCount;
  var showAsDot = dot && !isZero;
  var mergedCount = showAsDot ? '' : numberedDisplayCount;
  var isHidden = (0,react.useMemo)(function () {
    var isEmpty = mergedCount === null || mergedCount === undefined || mergedCount === '';
    return (isEmpty || isZero && !showZero) && !showAsDot;
  }, [mergedCount, isZero, showZero, showAsDot]);
  // Count should be cache in case hidden change it
  var countRef = (0,react.useRef)(count);
  if (!isHidden) {
    countRef.current = count;
  }
  var livingCount = countRef.current;
  // We need cache count since remove motion should not change count display
  var displayCountRef = (0,react.useRef)(mergedCount);
  if (!isHidden) {
    displayCountRef.current = mergedCount;
  }
  var displayCount = displayCountRef.current;
  // We will cache the dot status to avoid shaking on leaved motion
  var isDotRef = (0,react.useRef)(showAsDot);
  if (!isHidden) {
    isDotRef.current = showAsDot;
  }
  // =============================== Styles ===============================
  var mergedStyle = (0,react.useMemo)(function () {
    if (!offset) {
      return (0,esm_extends/* default */.Z)({}, style);
    }
    var offsetStyle = {
      marginTop: offset[1]
    };
    if (direction === 'rtl') {
      offsetStyle.left = parseInt(offset[0], 10);
    } else {
      offsetStyle.right = -parseInt(offset[0], 10);
    }
    return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, offsetStyle), style);
  }, [direction, offset, style]);
  // =============================== Render ===============================
  // >>> Title
  var titleNode = title !== null && title !== void 0 ? title : typeof livingCount === 'string' || typeof livingCount === 'number' ? livingCount : undefined;
  // >>> Status Text
  var statusTextNode = isHidden || !text ? null : /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-status-text")
  }, text);
  // >>> Display Component
  var displayNode = !livingCount || (0,esm_typeof/* default */.Z)(livingCount) !== 'object' ? undefined : (0,reactNode/* cloneElement */.Tm)(livingCount, function (oriProps) {
    return {
      style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, mergedStyle), oriProps.style)
    };
  });
  // Shared styles
  var statusCls = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-status-dot"), hasStatus), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-status-").concat(status), !!status), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-status-").concat(color), isPresetColor(color)), _classNames));
  var statusStyle = {};
  if (color && !isPresetColor(color)) {
    statusStyle.background = color;
  }
  var badgeClassName = classnames_default()(prefixCls, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-status"), hasStatus), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-not-a-wrapper"), !children), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2), className);
  // <Badge status="success" />
  if (!children && hasStatus) {
    var statusTextColor = mergedStyle.color;
    return /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({}, restProps, {
      className: badgeClassName,
      style: mergedStyle
    }), /*#__PURE__*/react.createElement("span", {
      className: statusCls,
      style: statusStyle
    }), text && /*#__PURE__*/react.createElement("span", {
      style: {
        color: statusTextColor
      },
      className: "".concat(prefixCls, "-status-text")
    }, text));
  }
  // <Badge status="success" count={<Icon type="xxx" />}></Badge>
  return /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({}, restProps, {
    className: badgeClassName
  }), children, /*#__PURE__*/react.createElement(es/* default */.Z, {
    visible: !isHidden,
    motionName: "".concat(prefixCls, "-zoom"),
    motionAppear: false,
    motionDeadline: 1000
  }, function (_ref) {
    var _classNames3;
    var motionClassName = _ref.className;
    var scrollNumberPrefixCls = getPrefixCls('scroll-number', customizeScrollNumberPrefixCls);
    var isDot = isDotRef.current;
    var scrollNumberCls = classnames_default()((_classNames3 = {}, (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-dot"), isDot), (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-count"), !isDot), (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-count-sm"), size === 'small'), (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-multiple-words"), !isDot && displayCount && displayCount.toString().length > 1), (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-status-").concat(status), !!status), (0,defineProperty/* default */.Z)(_classNames3, "".concat(prefixCls, "-status-").concat(color), isPresetColor(color)), _classNames3));
    var scrollNumberStyle = (0,esm_extends/* default */.Z)({}, mergedStyle);
    if (color && !isPresetColor(color)) {
      scrollNumberStyle = scrollNumberStyle || {};
      scrollNumberStyle.background = color;
    }
    return /*#__PURE__*/react.createElement(badge_ScrollNumber, {
      prefixCls: scrollNumberPrefixCls,
      show: !isHidden,
      motionClassName: motionClassName,
      className: scrollNumberCls,
      count: displayCount,
      title: titleNode,
      style: scrollNumberStyle,
      key: "scrollNumber"
    }, displayNode);
  }), statusTextNode);
};
Badge.Ribbon = badge_Ribbon;
/* harmony default export */ var badge = (Badge);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(205);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(1631);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Element.js




var Element = function Element(props) {
  var _classNames, _classNames2;
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    size = props.size,
    shape = props.shape;
  var sizeCls = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
  var shapeCls = classnames_default()((_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-circle"), shape === 'circle'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-square"), shape === 'square'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-round"), shape === 'round'), _classNames2));
  var sizeStyle = react.useMemo(function () {
    return typeof size === 'number' ? {
      width: size,
      height: size,
      lineHeight: "".concat(size, "px")
    } : {};
  }, [size]);
  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(prefixCls, sizeCls, shapeCls, className),
    style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, sizeStyle), style)
  });
};
/* harmony default export */ var skeleton_Element = (Element);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Avatar.js







var SkeletonAvatar = function SkeletonAvatar(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    active = props.active,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'circle' : _props$shape,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var otherProps = (0,omit/* default */.Z)(props, ['prefixCls', 'className']);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-active"), active), className);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, (0,esm_extends/* default */.Z)({
    prefixCls: "".concat(prefixCls, "-avatar"),
    shape: shape,
    size: size
  }, otherProps)));
};
/* harmony default export */ var Avatar = (SkeletonAvatar);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Button.js







var SkeletonButton = function SkeletonButton(props) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    active = props.active,
    _props$block = props.block,
    block = _props$block === void 0 ? false : _props$block,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var otherProps = (0,omit/* default */.Z)(props, ['prefixCls']);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-active"), active), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-block"), block), _classNames), className);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, (0,esm_extends/* default */.Z)({
    prefixCls: "".concat(prefixCls, "-button"),
    size: size
  }, otherProps)));
};
/* harmony default export */ var Button = (SkeletonButton);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DotChartOutlined.js
// This icon file is generated automatically.
var DotChartOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"
      }
    }]
  },
  "name": "dot-chart",
  "theme": "outlined"
};
/* harmony default export */ var asn_DotChartOutlined = (DotChartOutlined);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(6321);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/DotChartOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var DotChartOutlined_DotChartOutlined = function DotChartOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_DotChartOutlined
  }));
};
DotChartOutlined_DotChartOutlined.displayName = 'DotChartOutlined';
/* harmony default export */ var icons_DotChartOutlined = (/*#__PURE__*/react.forwardRef(DotChartOutlined_DotChartOutlined));
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Node.js





var SkeletonNode = function SkeletonNode(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    active = props.active,
    children = props.children;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-active"), active), className);
  var content = children !== null && children !== void 0 ? children : /*#__PURE__*/react.createElement(icons_DotChartOutlined, null);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-image"), className),
    style: style
  }, content));
};
/* harmony default export */ var Node = (SkeletonNode);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Image.js




var path = 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z';
var SkeletonImage = function SkeletonImage(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    active = props.active;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-active"), active), className);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-image"), className),
    style: style
  }, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: "".concat(prefixCls, "-image-svg")
  }, /*#__PURE__*/react.createElement("path", {
    d: path,
    className: "".concat(prefixCls, "-image-path")
  }))));
};
/* harmony default export */ var Image = (SkeletonImage);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Input.js







var SkeletonInput = function SkeletonInput(props) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    active = props.active,
    block = props.block,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var otherProps = (0,omit/* default */.Z)(props, ['prefixCls']);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-active"), active), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-block"), block), _classNames), className);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, (0,esm_extends/* default */.Z)({
    prefixCls: "".concat(prefixCls, "-input"),
    size: size
  }, otherProps)));
};
/* harmony default export */ var Input = (SkeletonInput);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Paragraph.js



var Paragraph = function Paragraph(props) {
  var getWidth = function getWidth(index) {
    var width = props.width,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? 2 : _props$rows;
    if (Array.isArray(width)) {
      return width[index];
    }
    // last paragraph
    if (rows - 1 === index) {
      return width;
    }
    return undefined;
  };
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    rows = props.rows;
  var rowList = (0,toConsumableArray/* default */.Z)(Array(rows)).map(function (_, index) {
    return /*#__PURE__*/(
      // eslint-disable-next-line react/no-array-index-key
      react.createElement("li", {
        key: index,
        style: {
          width: getWidth(index)
        }
      })
    );
  });
  return /*#__PURE__*/react.createElement("ul", {
    className: classnames_default()(prefixCls, className),
    style: style
  }, rowList);
};
/* harmony default export */ var skeleton_Paragraph = (Paragraph);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Title.js

/* eslint-disable jsx-a11y/heading-has-content */


var Title = function Title(_ref) {
  var prefixCls = _ref.prefixCls,
    className = _ref.className,
    width = _ref.width,
    style = _ref.style;
  return /*#__PURE__*/react.createElement("h3", {
    className: classnames_default()(prefixCls, className),
    style: (0,esm_extends/* default */.Z)({
      width: width
    }, style)
  });
};
/* harmony default export */ var skeleton_Title = (Title);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Skeleton.js














function getComponentProps(prop) {
  if (prop && (0,esm_typeof/* default */.Z)(prop) === 'object') {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }
  return {
    size: 'large',
    shape: 'circle'
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  var basicProps = {};
  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  }
  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
var Skeleton = function Skeleton(props) {
  var customizePrefixCls = props.prefixCls,
    loading = props.loading,
    className = props.className,
    style = props.style,
    children = props.children,
    _props$avatar = props.avatar,
    avatar = _props$avatar === void 0 ? false : _props$avatar,
    _props$title = props.title,
    title = _props$title === void 0 ? true : _props$title,
    _props$paragraph = props.paragraph,
    paragraph = _props$paragraph === void 0 ? true : _props$paragraph,
    active = props.active,
    round = props.round;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  if (loading || !('loading' in props)) {
    var _classNames;
    var hasAvatar = !!avatar;
    var hasTitle = !!title;
    var hasParagraph = !!paragraph;
    // Avatar
    var avatarNode;
    if (hasAvatar) {
      var avatarProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
        prefixCls: "".concat(prefixCls, "-avatar")
      }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
      // We direct use SkeletonElement as avatar in skeleton internal.
      avatarNode = /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, /*#__PURE__*/react.createElement(skeleton_Element, (0,esm_extends/* default */.Z)({}, avatarProps)));
    }
    var contentNode;
    if (hasTitle || hasParagraph) {
      // Title
      var $title;
      if (hasTitle) {
        var titleProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
          prefixCls: "".concat(prefixCls, "-title")
        }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
        $title = /*#__PURE__*/react.createElement(skeleton_Title, (0,esm_extends/* default */.Z)({}, titleProps));
      }
      // Paragraph
      var paragraphNode;
      if (hasParagraph) {
        var paragraphProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
          prefixCls: "".concat(prefixCls, "-paragraph")
        }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
        paragraphNode = /*#__PURE__*/react.createElement(skeleton_Paragraph, (0,esm_extends/* default */.Z)({}, paragraphProps));
      }
      contentNode = /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, $title, paragraphNode);
    }
    var cls = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-with-avatar"), hasAvatar), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-active"), active), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-round"), round), _classNames), className);
    return /*#__PURE__*/react.createElement("div", {
      className: cls,
      style: style
    }, avatarNode, contentNode);
  }
  return typeof children !== 'undefined' ? children : null;
};
Skeleton.Button = Button;
Skeleton.Avatar = Avatar;
Skeleton.Input = Input;
Skeleton.Image = Image;
Skeleton.Node = Node;
/* harmony default export */ var skeleton_Skeleton = (Skeleton);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/index.js

/* harmony default export */ var skeleton = (skeleton_Skeleton);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 27 modules
var es_tabs = __webpack_require__(4393);
;// CONCATENATED MODULE: ./node_modules/antd/es/card/Grid.js


var Grid_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var Grid = function Grid(_a) {
  var prefixCls = _a.prefixCls,
    className = _a.className,
    _a$hoverable = _a.hoverable,
    hoverable = _a$hoverable === void 0 ? true : _a$hoverable,
    props = Grid_rest(_a, ["prefixCls", "className", "hoverable"]);
  return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.C, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('card', prefixCls);
    var classString = classnames_default()("".concat(prefix, "-grid"), className, (0,defineProperty/* default */.Z)({}, "".concat(prefix, "-grid-hoverable"), hoverable));
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, props, {
      className: classString
    }));
  });
};
/* harmony default export */ var card_Grid = (Grid);
;// CONCATENATED MODULE: ./node_modules/antd/es/card/Card.js


var Card_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








function getAction(actions) {
  var actionList = actions.map(function (action, index) {
    return /*#__PURE__*/(
      // eslint-disable-next-line react/no-array-index-key
      react.createElement("li", {
        style: {
          width: "".concat(100 / actions.length, "%")
        },
        key: "action-".concat(index)
      }, /*#__PURE__*/react.createElement("span", null, action))
    );
  });
  return actionList;
}
var Card = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _extends2, _classNames;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var size = react.useContext(SizeContext/* default */.Z);
  var onTabChange = function onTabChange(key) {
    var _a;
    (_a = props.onTabChange) === null || _a === void 0 ? void 0 : _a.call(props, key);
  };
  var isContainGrid = function isContainGrid() {
    var containGrid;
    react.Children.forEach(props.children, function (element) {
      if (element && element.type && element.type === card_Grid) {
        containGrid = true;
      }
    });
    return containGrid;
  };
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    extra = props.extra,
    _props$headStyle = props.headStyle,
    headStyle = _props$headStyle === void 0 ? {} : _props$headStyle,
    _props$bodyStyle = props.bodyStyle,
    bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle,
    title = props.title,
    loading = props.loading,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    customizeSize = props.size,
    type = props.type,
    cover = props.cover,
    actions = props.actions,
    tabList = props.tabList,
    children = props.children,
    activeTabKey = props.activeTabKey,
    defaultActiveTabKey = props.defaultActiveTabKey,
    tabBarExtraContent = props.tabBarExtraContent,
    hoverable = props.hoverable,
    _props$tabProps = props.tabProps,
    tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
    others = Card_rest(props, ["prefixCls", "className", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps"]);
  var prefixCls = getPrefixCls('card', customizePrefixCls);
  var loadingBlock = /*#__PURE__*/react.createElement(skeleton, {
    loading: true,
    active: true,
    paragraph: {
      rows: 4
    },
    title: false
  }, children);
  var hasActiveTabKey = activeTabKey !== undefined;
  var extraProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, tabProps), (_extends2 = {}, (0,defineProperty/* default */.Z)(_extends2, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), (0,defineProperty/* default */.Z)(_extends2, "tabBarExtraContent", tabBarExtraContent), _extends2));
  var head;
  var tabs = tabList && tabList.length ? /*#__PURE__*/react.createElement(es_tabs/* default */.Z, (0,esm_extends/* default */.Z)({
    size: "large"
  }, extraProps, {
    className: "".concat(prefixCls, "-head-tabs"),
    onChange: onTabChange,
    items: tabList.map(function (item) {
      var _a;
      return {
        label: item.tab,
        key: item.key,
        disabled: (_a = item.disabled) !== null && _a !== void 0 ? _a : false
      };
    })
  })) : null;
  if (title || extra || tabs) {
    head = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-head"),
      style: headStyle
    }, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-head-wrapper")
    }, title && /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-head-title")
    }, title), extra && /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-extra")
    }, extra)), tabs);
  }
  var coverDom = cover ? /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-cover")
  }, cover) : null;
  var body = /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-body"),
    style: bodyStyle
  }, loading ? loadingBlock : children);
  var actionDom = actions && actions.length ? /*#__PURE__*/react.createElement("ul", {
    className: "".concat(prefixCls, "-actions")
  }, getAction(actions)) : null;
  var divProps = (0,omit/* default */.Z)(others, ['onTabChange']);
  var mergedSize = customizeSize || size;
  var classString = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-loading"), loading), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-bordered"), bordered), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-hoverable"), hoverable), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-contain-grid"), isContainGrid()), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-contain-tabs"), tabList && tabList.length), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-type-").concat(type), !!type), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    ref: ref
  }, divProps, {
    className: classString
  }), head, coverDom, body, actionDom);
});
/* harmony default export */ var card_Card = (Card);
;// CONCATENATED MODULE: ./node_modules/antd/es/card/Meta.js

var Meta_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var Meta = function Meta(props) {
  return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.C, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      avatar = props.avatar,
      title = props.title,
      description = props.description,
      others = Meta_rest(props, ["prefixCls", "className", "avatar", "title", "description"]);
    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var classString = classnames_default()("".concat(prefixCls, "-meta"), className);
    var avatarDom = avatar ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-meta-avatar")
    }, avatar) : null;
    var titleDom = title ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-meta-title")
    }, title) : null;
    var descriptionDom = description ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-meta-description")
    }, description) : null;
    var MetaDetail = titleDom || descriptionDom ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-meta-detail")
    }, titleDom, descriptionDom) : null;
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, others, {
      className: classString
    }), avatarDom, MetaDetail);
  });
};
/* harmony default export */ var card_Meta = (Meta);
;// CONCATENATED MODULE: ./node_modules/antd/es/card/index.js



var es_card_Card = card_Card;
es_card_Card.Grid = card_Grid;
es_card_Card.Meta = card_Meta;
/* harmony default export */ var card = (es_card_Card);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 19 modules
var input = __webpack_require__(8482);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 48 modules
var es_select = __webpack_require__(9740);
// EXTERNAL MODULE: ./src/config/constant.ts
var constant = __webpack_require__(4246);
;// CONCATENATED MODULE: ./src/page/RandomType/config.ts
var allRandomType=[{key:"content",value:"content",label:"随机用户提供内容"}//   { key: "rangeNum", value: "rangeNum", label: "随机范围数" },
];
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(2425);
;// CONCATENATED MODULE: ./src/page/RandomType/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(6417);
;// CONCATENATED MODULE: ./src/page/RandomType/index.tsx
var RandomType=function RandomType(props){var _Form$useForm=es_form/* default.useForm */.Z.useForm(),_Form$useForm2=(0,slicedToArray/* default */.Z)(_Form$useForm,1),form=_Form$useForm2[0];var _useState=(0,react.useState)([{}]),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),randomState=_useState2[0],setRadomState=_useState2[1];/**
   * 初始化表单
   */var init=function init(){var typeMap=utils/* operateRandomType.get */.t.get();var state=[];for(var k in typeMap){var _ref=typeMap[k]||{},name=_ref.name,type=_ref.type,contentOrigin=_ref.contentOrigin;state.push({name:name,type:type,content:contentOrigin});}setRadomState(state);form.setFieldValue("randomList",state.length?state:[{}]);};(0,react.useEffect)(function(){message/* default.warn */.ZP.warn("填写完记得保存哦");init();// eslint-disable-next-line
},[]);/* 保存 */var onFinish=function onFinish(values){var randomList=values.randomList;var newTypes=randomList.reduce(function(prev,_ref2){var name=_ref2.name,content=_ref2.content,type=_ref2.type;var obj={name:name,type:type,content:content===null||content===void 0?void 0:content.split("\n").filter(Boolean),contentOrigin:content};prev[name]=obj;return prev;},{});utils/* operateRandomType.set */.t.set(JSON.stringify(newTypes));message/* default.success */.ZP.success("保存成功");};var onFinishFailed=function onFinishFailed(){return message/* default.error */.ZP.error("有必填项没填");};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"random-type-container",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z,{form:form,onFinish:onFinish,layout:"horizontal",onFinishFailed:onFinishFailed,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{className:"submit-btn",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",htmlType:"submit",children:"\u4FDD\u5B58"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.List */.Z.List,{name:"randomList",children:function children(fields,_ref3){var add=_ref3.add,remove=_ref3.remove;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",onClick:function onClick(){add({type:"content"});},children:"\u65B0\u589E\u968F\u673A\u7C7B\u578B"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"random-type-list",children:fields.map(function(field){return/*#__PURE__*/(0,jsx_runtime.jsx)(badge.Ribbon,{color:"red",text:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"delete-btn",onClick:function onClick(e){e.stopPropagation();var newState=(0,toConsumableArray/* default */.Z)(randomState);newState.splice(field.name,1);remove(field.name);},children:"\u5220\u9664"}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(card,{title:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u540D\u79F0",rules:constant/* REQUIRED_RULES */.f4,name:[field.name,"name"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z,{placeholder:"\u59D3\u540D",onClick:function onClick(e){e.stopPropagation();}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u7C7B\u578B",rules:constant/* REQUIRED_RULES */.f4,name:[field.name,"type"],initialValue:"content",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z,{options:allRandomType})})]}),size:"small",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"随机值：",rules:constant/* REQUIRED_RULES */.f4,name:[field.name,"content"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default.TextArea */.Z.TextArea,{placeholder:"\u8F93\u5165\u683C\u5F0F\u5982\u4E0B\uFF1A\r\u5F20\u4E09\r\u674E\u56DB\r\u738B\u4E94",autoSize:{minRows:5,maxRows:5}})})})},field.key);})})]});}})]})});};/* harmony default export */ var page_RandomType = (RandomType);

/***/ }),

/***/ 2425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": function() { return /* binding */ operateRandomType; }
/* harmony export */ });
/* 从storage获取用户自定义类型 */var operateRandomType={get:function get(){return JSON.parse(localStorage.diyTypeArr||"{}");},set:function set(val){localStorage.diyTypeArr=val;},/* 改变成下拉框option形式 */changeOption:function changeOption(){var data=[];var current=this.get();for(var key in current){data.push({key:key,value:key,label:key});}return data;}};

/***/ })

}]);