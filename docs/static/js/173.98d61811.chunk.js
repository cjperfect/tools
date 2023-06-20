"use strict";
(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[173],{

/***/ 4169:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

// This icon file is generated automatically.
var UpOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"
      }
    }]
  },
  "name": "up",
  "theme": "outlined"
};
/* harmony default export */ __webpack_exports__["Z"] = (UpOutlined);

/***/ }),

/***/ 78935:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ input_number; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/DownOutlined.js
var DownOutlined = __webpack_require__(52546);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons-svg/es/asn/UpOutlined.js
var asn_UpOutlined = __webpack_require__(4169);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(6321);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/UpOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var UpOutlined = function UpOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_UpOutlined/* default */.Z
  }));
};
UpOutlined.displayName = 'UpOutlined';
/* harmony default export */ var icons_UpOutlined = (/*#__PURE__*/react.forwardRef(UpOutlined));
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(46123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(49242);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(72846);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(16945);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/utils/supportUtil.js
function supportBigInt() {
  return typeof BigInt === 'function';
}
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/utils/numberUtil.js

/**
 * Format string number to readable number
 */
function trimNumber(numStr) {
  var str = numStr.trim();
  var negative = str.startsWith('-');
  if (negative) {
    str = str.slice(1);
  }
  str = str
  // Remove decimal 0. `1.000` => `1.`, `1.100` => `1.1`
  .replace(/(\.\d*[^0])0*$/, '$1')
  // Remove useless decimal. `1.` => `1`
  .replace(/\.0*$/, '')
  // Remove integer 0. `0001` => `1`, 000.1' => `.1`
  .replace(/^0+/, '');
  if (str.startsWith('.')) {
    str = "0".concat(str);
  }
  var trimStr = str || '0';
  var splitNumber = trimStr.split('.');
  var integerStr = splitNumber[0] || '0';
  var decimalStr = splitNumber[1] || '0';
  if (integerStr === '0' && decimalStr === '0') {
    negative = false;
  }
  var negativeStr = negative ? '-' : '';
  return {
    negative: negative,
    negativeStr: negativeStr,
    trimStr: trimStr,
    integerStr: integerStr,
    decimalStr: decimalStr,
    fullStr: "".concat(negativeStr).concat(trimStr)
  };
}
function isE(number) {
  var str = String(number);
  return !Number.isNaN(Number(str)) && str.includes('e');
}
/**
 * [Legacy] Convert 1e-9 to 0.000000001.
 * This may lose some precision if user really want 1e-9.
 */
function getNumberPrecision(number) {
  var numStr = String(number);
  if (isE(number)) {
    var precision = Number(numStr.slice(numStr.indexOf('e-') + 2));
    var decimalMatch = numStr.match(/\.(\d+)/);
    if (decimalMatch === null || decimalMatch === void 0 ? void 0 : decimalMatch[1]) {
      precision += decimalMatch[1].length;
    }
    return precision;
  }
  return numStr.includes('.') && validateNumber(numStr) ? numStr.length - numStr.indexOf('.') - 1 : 0;
}
/**
 * Convert number (includes scientific notation) to -xxx.yyy format
 */
function num2str(number) {
  var numStr = String(number);
  if (isE(number)) {
    if (number > Number.MAX_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MAX_SAFE_INTEGER);
    }
    if (number < Number.MIN_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MIN_SAFE_INTEGER);
    }
    numStr = number.toFixed(getNumberPrecision(numStr));
  }
  return trimNumber(numStr).fullStr;
}
function validateNumber(num) {
  if (typeof num === 'number') {
    return !Number.isNaN(num);
  }
  // Empty
  if (!num) {
    return false;
  }
  return (
    // Normal type: 11.28
    /^\s*-?\d+(\.\d+)?\s*$/.test(num) ||
    // Pre-number: 1.
    /^\s*-?\d+\.\s*$/.test(num) ||
    // Post-number: .1
    /^\s*-?\.\d+\s*$/.test(num)
  );
}
function getDecupleSteps(step) {
  var stepStr = typeof step === 'number' ? num2str(step) : trimNumber(step).fullStr;
  var hasPoint = stepStr.includes('.');
  if (!hasPoint) {
    return step + '0';
  }
  return trimNumber(stepStr.replace(/(\d)\.(\d)/g, '$1$2.')).fullStr;
}
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/utils/MiniDecimal.js


/* eslint-disable max-classes-per-file */


/**
 * We can remove this when IE not support anymore
 */
var NumberDecimal = /*#__PURE__*/function () {
  function NumberDecimal(value) {
    (0,classCallCheck/* default */.Z)(this, NumberDecimal);
    this.origin = '';
    this.number = void 0;
    this.empty = void 0;
    if (!value && value !== 0 || !String(value).trim()) {
      this.empty = true;
      return;
    }
    this.origin = String(value);
    this.number = Number(value);
  }
  (0,createClass/* default */.Z)(NumberDecimal, [{
    key: "negate",
    value: function negate() {
      return new NumberDecimal(-this.toNumber());
    }
  }, {
    key: "add",
    value: function add(value) {
      if (this.isInvalidate()) {
        return new NumberDecimal(value);
      }
      var target = Number(value);
      if (Number.isNaN(target)) {
        return this;
      }
      var number = this.number + target;
      // [Legacy] Back to safe integer
      if (number > Number.MAX_SAFE_INTEGER) {
        return new NumberDecimal(Number.MAX_SAFE_INTEGER);
      }
      if (number < Number.MIN_SAFE_INTEGER) {
        return new NumberDecimal(Number.MIN_SAFE_INTEGER);
      }
      var maxPrecision = Math.max(getNumberPrecision(this.number), getNumberPrecision(target));
      return new NumberDecimal(number.toFixed(maxPrecision));
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function isNaN() {
      return Number.isNaN(this.number);
    }
  }, {
    key: "isInvalidate",
    value: function isInvalidate() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function equals(target) {
      return this.toNumber() === (target === null || target === void 0 ? void 0 : target.toNumber());
    }
  }, {
    key: "lessEquals",
    value: function lessEquals(target) {
      return this.add(target.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      return this.number;
    }
  }, {
    key: "toString",
    value: function toString() {
      var safe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!safe) {
        return this.origin;
      }
      if (this.isInvalidate()) {
        return '';
      }
      return num2str(this.number);
    }
  }]);
  return NumberDecimal;
}();
var BigIntDecimal = /*#__PURE__*/function () {
  /** BigInt will convert `0009` to `9`. We need record the len of decimal */

  function BigIntDecimal(value) {
    (0,classCallCheck/* default */.Z)(this, BigIntDecimal);
    this.origin = '';
    this.negative = void 0;
    this.integer = void 0;
    this.decimal = void 0;
    this.decimalLen = void 0;
    this.empty = void 0;
    this.nan = void 0;
    if (!value && value !== 0 || !String(value).trim()) {
      this.empty = true;
      return;
    }
    this.origin = String(value);
    // Act like Number convert
    if (value === '-') {
      this.nan = true;
      return;
    }
    var mergedValue = value;
    // We need convert back to Number since it require `toFixed` to handle this
    if (isE(mergedValue)) {
      mergedValue = Number(mergedValue);
    }
    mergedValue = typeof mergedValue === 'string' ? mergedValue : num2str(mergedValue);
    if (validateNumber(mergedValue)) {
      var trimRet = trimNumber(mergedValue);
      this.negative = trimRet.negative;
      var numbers = trimRet.trimStr.split('.');
      this.integer = BigInt(numbers[0]);
      var decimalStr = numbers[1] || '0';
      this.decimal = BigInt(decimalStr);
      this.decimalLen = decimalStr.length;
    } else {
      this.nan = true;
    }
  }
  (0,createClass/* default */.Z)(BigIntDecimal, [{
    key: "getMark",
    value: function getMark() {
      return this.negative ? '-' : '';
    }
  }, {
    key: "getIntegerStr",
    value: function getIntegerStr() {
      return this.integer.toString();
    }
  }, {
    key: "getDecimalStr",
    value: function getDecimalStr() {
      return this.decimal.toString().padStart(this.decimalLen, '0');
    }
    /**
     * Align BigIntDecimal with same decimal length. e.g. 12.3 + 5 = 1230000
     * This is used for add function only.
     */
  }, {
    key: "alignDecimal",
    value: function alignDecimal(decimalLength) {
      var str = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(decimalLength, '0'));
      return BigInt(str);
    }
  }, {
    key: "negate",
    value: function negate() {
      var clone = new BigIntDecimal(this.toString());
      clone.negative = !clone.negative;
      return clone;
    }
  }, {
    key: "add",
    value: function add(value) {
      if (this.isInvalidate()) {
        return new BigIntDecimal(value);
      }
      var offset = new BigIntDecimal(value);
      if (offset.isInvalidate()) {
        return this;
      }
      var maxDecimalLength = Math.max(this.getDecimalStr().length, offset.getDecimalStr().length);
      var myAlignedDecimal = this.alignDecimal(maxDecimalLength);
      var offsetAlignedDecimal = offset.alignDecimal(maxDecimalLength);
      var valueStr = (myAlignedDecimal + offsetAlignedDecimal).toString();
      // We need fill string length back to `maxDecimalLength` to avoid parser failed
      var _trimNumber = trimNumber(valueStr),
        negativeStr = _trimNumber.negativeStr,
        trimStr = _trimNumber.trimStr;
      var hydrateValueStr = "".concat(negativeStr).concat(trimStr.padStart(maxDecimalLength + 1, '0'));
      return new BigIntDecimal("".concat(hydrateValueStr.slice(0, -maxDecimalLength), ".").concat(hydrateValueStr.slice(-maxDecimalLength)));
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function isNaN() {
      return this.nan;
    }
  }, {
    key: "isInvalidate",
    value: function isInvalidate() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function equals(target) {
      return this.toString() === (target === null || target === void 0 ? void 0 : target.toString());
    }
  }, {
    key: "lessEquals",
    value: function lessEquals(target) {
      return this.add(target.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      if (this.isNaN()) {
        return NaN;
      }
      return Number(this.toString());
    }
  }, {
    key: "toString",
    value: function toString() {
      var safe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!safe) {
        return this.origin;
      }
      if (this.isInvalidate()) {
        return '';
      }
      return trimNumber("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr;
    }
  }]);
  return BigIntDecimal;
}();
function getMiniDecimal(value) {
  // We use BigInt here.
  // Will fallback to Number if not support.
  if (supportBigInt()) {
    return new BigIntDecimal(value);
  }
  return new NumberDecimal(value);
}
/**
 * Align the logic of toFixed to around like 1.5 => 2.
 * If set `cutOnly`, will just remove the over decimal part.
 */
function toFixed(numStr, separatorStr, precision) {
  var cutOnly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (numStr === '') {
    return '';
  }
  var _trimNumber2 = trimNumber(numStr),
    negativeStr = _trimNumber2.negativeStr,
    integerStr = _trimNumber2.integerStr,
    decimalStr = _trimNumber2.decimalStr;
  var precisionDecimalStr = "".concat(separatorStr).concat(decimalStr);
  var numberWithoutDecimal = "".concat(negativeStr).concat(integerStr);
  if (precision >= 0) {
    // We will get last + 1 number to check if need advanced number
    var advancedNum = Number(decimalStr[precision]);
    if (advancedNum >= 5 && !cutOnly) {
      var advancedDecimal = getMiniDecimal(numStr).add("".concat(negativeStr, "0.").concat('0'.repeat(precision)).concat(10 - advancedNum));
      return toFixed(advancedDecimal.toString(), separatorStr, precision, cutOnly);
    }
    if (precision === 0) {
      return numberWithoutDecimal;
    }
    return "".concat(numberWithoutDecimal).concat(separatorStr).concat(decimalStr.padEnd(precision, '0').slice(0, precision));
  }
  if (precisionDecimalStr === '.0') {
    return numberWithoutDecimal;
  }
  return "".concat(numberWithoutDecimal).concat(precisionDecimalStr);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/isMobile.js
var isMobile = __webpack_require__(64394);
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/StepHandler.js


/* eslint-disable react/no-unknown-property */



/**
 * When click and hold on a button - the speed of auto changing the value.
 */
var STEP_INTERVAL = 200;
/**
 * When click and hold on a button - the delay before auto changing the value.
 */
var STEP_DELAY = 600;
function StepHandler(_ref) {
  var prefixCls = _ref.prefixCls,
    upNode = _ref.upNode,
    downNode = _ref.downNode,
    upDisabled = _ref.upDisabled,
    downDisabled = _ref.downDisabled,
    onStep = _ref.onStep;
  // ======================== Step ========================
  var stepTimeoutRef = react.useRef();
  var onStepRef = react.useRef();
  onStepRef.current = onStep;
  // We will interval update step when hold mouse down
  var onStepMouseDown = function onStepMouseDown(e, up) {
    e.preventDefault();
    onStepRef.current(up);
    // Loop step for interval
    function loopStep() {
      onStepRef.current(up);
      stepTimeoutRef.current = setTimeout(loopStep, STEP_INTERVAL);
    }
    // First time press will wait some time to trigger loop step update
    stepTimeoutRef.current = setTimeout(loopStep, STEP_DELAY);
  };
  var onStopStep = function onStopStep() {
    clearTimeout(stepTimeoutRef.current);
  };
  react.useEffect(function () {
    return onStopStep;
  }, []);
  // ======================= Render =======================
  if ((0,isMobile/* default */.Z)()) {
    return null;
  }
  var handlerClassName = "".concat(prefixCls, "-handler");
  var upClassName = classnames_default()(handlerClassName, "".concat(handlerClassName, "-up"), (0,defineProperty/* default */.Z)({}, "".concat(handlerClassName, "-up-disabled"), upDisabled));
  var downClassName = classnames_default()(handlerClassName, "".concat(handlerClassName, "-down"), (0,defineProperty/* default */.Z)({}, "".concat(handlerClassName, "-down-disabled"), downDisabled));
  var sharedHandlerProps = {
    unselectable: 'on',
    role: 'button',
    onMouseUp: onStopStep,
    onMouseLeave: onStopStep
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(handlerClassName, "-wrap")
  }, /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({}, sharedHandlerProps, {
    onMouseDown: function onMouseDown(e) {
      onStepMouseDown(e, true);
    },
    "aria-label": "Increase Value",
    "aria-disabled": upDisabled,
    className: upClassName
  }), upNode || /*#__PURE__*/react.createElement("span", {
    unselectable: "on",
    className: "".concat(prefixCls, "-handler-up-inner")
  })), /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({}, sharedHandlerProps, {
    onMouseDown: function onMouseDown(e) {
      onStepMouseDown(e, false);
    },
    "aria-label": "Decrease Value",
    "aria-disabled": downDisabled,
    className: downClassName
  }), downNode || /*#__PURE__*/react.createElement("span", {
    unselectable: "on",
    className: "".concat(prefixCls, "-handler-down-inner")
  })));
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(48240);
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/hooks/useCursor.js


/**
 * Keep input cursor in the correct position if possible.
 * Is this necessary since we have `formatter` which may mass the content?
 */
function useCursor(input, focused) {
  var selectionRef = (0,react.useRef)(null);
  function recordCursor() {
    // Record position
    try {
      var start = input.selectionStart,
        end = input.selectionEnd,
        value = input.value;
      var beforeTxt = value.substring(0, start);
      var afterTxt = value.substring(end);
      selectionRef.current = {
        start: start,
        end: end,
        value: value,
        beforeTxt: beforeTxt,
        afterTxt: afterTxt
      };
    } catch (e) {
      // Fix error in Chrome:
      // Failed to read the 'selectionStart' property from 'HTMLInputElement'
      // http://stackoverflow.com/q/21177489/3040605
    }
  }
  /**
   * Restore logic:
   *  1. back string same
   *  2. start string same
   */
  function restoreCursor() {
    if (input && selectionRef.current && focused) {
      try {
        var value = input.value;
        var _selectionRef$current = selectionRef.current,
          beforeTxt = _selectionRef$current.beforeTxt,
          afterTxt = _selectionRef$current.afterTxt,
          start = _selectionRef$current.start;
        var startPos = value.length;
        if (value.endsWith(afterTxt)) {
          startPos = value.length - selectionRef.current.afterTxt.length;
        } else if (value.startsWith(beforeTxt)) {
          startPos = beforeTxt.length;
        } else {
          var beforeLastChar = beforeTxt[start - 1];
          var newIndex = value.indexOf(beforeLastChar, start - 1);
          if (newIndex !== -1) {
            startPos = newIndex + 1;
          }
        }
        input.setSelectionRange(startPos, startPos);
      } catch (e) {
        (0,warning/* default */.ZP)(false, "Something warning of cursor restore. Please fire issue about this: ".concat(e.message));
      }
    }
  }
  return [recordCursor, restoreCursor];
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(95557);
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/hooks/useFrame.js


/**
 * Always trigger latest once when call multiple time
 */
/* harmony default export */ var useFrame = (function () {
  var idRef = (0,react.useRef)(0);
  var cleanUp = function cleanUp() {
    raf/* default.cancel */.Z.cancel(idRef.current);
  };
  (0,react.useEffect)(function () {
    return cleanUp;
  }, []);
  return function (callback) {
    cleanUp();
    idRef.current = (0,raf/* default */.Z)(function () {
      callback();
    });
  };
});
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/InputNumber.js





var _excluded = ["prefixCls", "className", "style", "min", "max", "step", "defaultValue", "value", "disabled", "readOnly", "upHandler", "downHandler", "keyboard", "controls", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep"];










/**
 * We support `stringMode` which need handle correct type when user call in onChange
 * format max or min value
 * 1. if isInvalid return null
 * 2. if precision is undefined, return decimal
 * 3. format with precision
 *    I. if max > 0, round down with precision. Example: max= 3.5, precision=0  afterFormat: 3
 *    II. if max < 0, round up with precision. Example: max= -3.5, precision=0  afterFormat: -4
 *    III. if min > 0, round up with precision. Example: min= 3.5, precision=0  afterFormat: 4
 *    IV. if min < 0, round down with precision. Example: max= -3.5, precision=0  afterFormat: -3
 */
var getDecimalValue = function getDecimalValue(stringMode, decimalValue) {
  if (stringMode || decimalValue.isEmpty()) {
    return decimalValue.toString();
  }
  return decimalValue.toNumber();
};
var getDecimalIfValidate = function getDecimalIfValidate(value) {
  var decimal = getMiniDecimal(value);
  return decimal.isInvalidate() ? null : decimal;
};
var InputNumber = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-input-number' : _props$prefixCls,
    className = props.className,
    style = props.style,
    min = props.min,
    max = props.max,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    defaultValue = props.defaultValue,
    value = props.value,
    disabled = props.disabled,
    readOnly = props.readOnly,
    upHandler = props.upHandler,
    downHandler = props.downHandler,
    keyboard = props.keyboard,
    _props$controls = props.controls,
    controls = _props$controls === void 0 ? true : _props$controls,
    stringMode = props.stringMode,
    parser = props.parser,
    formatter = props.formatter,
    precision = props.precision,
    decimalSeparator = props.decimalSeparator,
    onChange = props.onChange,
    onInput = props.onInput,
    onPressEnter = props.onPressEnter,
    onStep = props.onStep,
    inputProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var inputClassName = "".concat(prefixCls, "-input");
  var inputRef = react.useRef(null);
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    focus = _React$useState2[0],
    setFocus = _React$useState2[1];
  var userTypingRef = react.useRef(false);
  var compositionRef = react.useRef(false);
  var shiftKeyRef = react.useRef(false);
  // ============================ Value =============================
  // Real value control
  var _React$useState3 = react.useState(function () {
      return getMiniDecimal(value !== null && value !== void 0 ? value : defaultValue);
    }),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    decimalValue = _React$useState4[0],
    setDecimalValue = _React$useState4[1];
  function setUncontrolledDecimalValue(newDecimal) {
    if (value === undefined) {
      setDecimalValue(newDecimal);
    }
  }
  // ====================== Parser & Formatter ======================
  /**
   * `precision` is used for formatter & onChange.
   * It will auto generate by `value` & `step`.
   * But it will not block user typing.
   *
   * Note: Auto generate `precision` is used for legacy logic.
   * We should remove this since we already support high precision with BigInt.
   *
   * @param number  Provide which number should calculate precision
   * @param userTyping  Change by user typing
   */
  var getPrecision = react.useCallback(function (numStr, userTyping) {
    if (userTyping) {
      return undefined;
    }
    if (precision >= 0) {
      return precision;
    }
    return Math.max(getNumberPrecision(numStr), getNumberPrecision(step));
  }, [precision, step]);
  // >>> Parser
  var mergedParser = react.useCallback(function (num) {
    var numStr = String(num);
    if (parser) {
      return parser(numStr);
    }
    var parsedStr = numStr;
    if (decimalSeparator) {
      parsedStr = parsedStr.replace(decimalSeparator, '.');
    }
    // [Legacy] We still support auto convert `$ 123,456` to `123456`
    return parsedStr.replace(/[^\w.-]+/g, '');
  }, [parser, decimalSeparator]);
  // >>> Formatter
  var inputValueRef = react.useRef('');
  var mergedFormatter = react.useCallback(function (number, userTyping) {
    if (formatter) {
      return formatter(number, {
        userTyping: userTyping,
        input: String(inputValueRef.current)
      });
    }
    var str = typeof number === 'number' ? num2str(number) : number;
    // User typing will not auto format with precision directly
    if (!userTyping) {
      var mergedPrecision = getPrecision(str, userTyping);
      if (validateNumber(str) && (decimalSeparator || mergedPrecision >= 0)) {
        // Separator
        var separatorStr = decimalSeparator || '.';
        str = toFixed(str, separatorStr, mergedPrecision);
      }
    }
    return str;
  }, [formatter, getPrecision, decimalSeparator]);
  // ========================== InputValue ==========================
  /**
   * Input text value control
   *
   * User can not update input content directly. It update with follow rules by priority:
   *  1. controlled `value` changed
   *    * [SPECIAL] Typing like `1.` should not immediately convert to `1`
   *  2. User typing with format (not precision)
   *  3. Blur or Enter trigger revalidate
   */
  var _React$useState5 = react.useState(function () {
      var initValue = defaultValue !== null && defaultValue !== void 0 ? defaultValue : value;
      if (decimalValue.isInvalidate() && ['string', 'number'].includes((0,esm_typeof/* default */.Z)(initValue))) {
        return Number.isNaN(initValue) ? '' : initValue;
      }
      return mergedFormatter(decimalValue.toString(), false);
    }),
    _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
    inputValue = _React$useState6[0],
    setInternalInputValue = _React$useState6[1];
  inputValueRef.current = inputValue;
  // Should always be string
  function setInputValue(newValue, userTyping) {
    setInternalInputValue(mergedFormatter(
    // Invalidate number is sometime passed by external control, we should let it go
    // Otherwise is controlled by internal interactive logic which check by userTyping
    // You can ref 'show limited value when input is not focused' test for more info.
    newValue.isInvalidate() ? newValue.toString(false) : newValue.toString(!userTyping), userTyping));
  }
  // >>> Max & Min limit
  var maxDecimal = react.useMemo(function () {
    return getDecimalIfValidate(max);
  }, [max, precision]);
  var minDecimal = react.useMemo(function () {
    return getDecimalIfValidate(min);
  }, [min, precision]);
  var upDisabled = react.useMemo(function () {
    if (!maxDecimal || !decimalValue || decimalValue.isInvalidate()) {
      return false;
    }
    return maxDecimal.lessEquals(decimalValue);
  }, [maxDecimal, decimalValue]);
  var downDisabled = react.useMemo(function () {
    if (!minDecimal || !decimalValue || decimalValue.isInvalidate()) {
      return false;
    }
    return decimalValue.lessEquals(minDecimal);
  }, [minDecimal, decimalValue]);
  // Cursor controller
  var _useCursor = useCursor(inputRef.current, focus),
    _useCursor2 = (0,slicedToArray/* default */.Z)(_useCursor, 2),
    recordCursor = _useCursor2[0],
    restoreCursor = _useCursor2[1];
  // ============================= Data =============================
  /**
   * Find target value closet within range.
   * e.g. [11, 28]:
   *    3  => 11
   *    23 => 23
   *    99 => 28
   */
  var getRangeValue = function getRangeValue(target) {
    // target > max
    if (maxDecimal && !target.lessEquals(maxDecimal)) {
      return maxDecimal;
    }
    // target < min
    if (minDecimal && !minDecimal.lessEquals(target)) {
      return minDecimal;
    }
    return null;
  };
  /**
   * Check value is in [min, max] range
   */
  var isInRange = function isInRange(target) {
    return !getRangeValue(target);
  };
  /**
   * Trigger `onChange` if value validated and not equals of origin.
   * Return the value that re-align in range.
   */
  var triggerValueUpdate = function triggerValueUpdate(newValue, userTyping) {
    var updateValue = newValue;
    var isRangeValidate = isInRange(updateValue) || updateValue.isEmpty();
    // Skip align value when trigger value is empty.
    // We just trigger onChange(null)
    // This should not block user typing
    if (!updateValue.isEmpty() && !userTyping) {
      // Revert value in range if needed
      updateValue = getRangeValue(updateValue) || updateValue;
      isRangeValidate = true;
    }
    if (!readOnly && !disabled && isRangeValidate) {
      var numStr = updateValue.toString();
      var mergedPrecision = getPrecision(numStr, userTyping);
      if (mergedPrecision >= 0) {
        updateValue = getMiniDecimal(toFixed(numStr, '.', mergedPrecision));
        // When to fixed. The value may out of min & max range.
        // 4 in [0, 3.8] => 3.8 => 4 (toFixed)
        if (!isInRange(updateValue)) {
          updateValue = getMiniDecimal(toFixed(numStr, '.', mergedPrecision, true));
        }
      }
      // Trigger event
      if (!updateValue.equals(decimalValue)) {
        setUncontrolledDecimalValue(updateValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(updateValue.isEmpty() ? null : getDecimalValue(stringMode, updateValue));
        // Reformat input if value is not controlled
        if (value === undefined) {
          setInputValue(updateValue, userTyping);
        }
      }
      return updateValue;
    }
    return decimalValue;
  };
  // ========================== User Input ==========================
  var onNextPromise = useFrame();
  // >>> Collect input value
  var collectInputValue = function collectInputValue(inputStr) {
    recordCursor();
    // Update inputValue incase input can not parse as number
    setInternalInputValue(inputStr);
    // Parse number
    if (!compositionRef.current) {
      var finalValue = mergedParser(inputStr);
      var finalDecimal = getMiniDecimal(finalValue);
      if (!finalDecimal.isNaN()) {
        triggerValueUpdate(finalDecimal, true);
      }
    }
    // Trigger onInput later to let user customize value if they want do handle something after onChange
    onInput === null || onInput === void 0 ? void 0 : onInput(inputStr);
    // optimize for chinese input experience
    // https://github.com/ant-design/ant-design/issues/8196
    onNextPromise(function () {
      var nextInputStr = inputStr;
      if (!parser) {
        nextInputStr = inputStr.replace(/。/g, '.');
      }
      if (nextInputStr !== inputStr) {
        collectInputValue(nextInputStr);
      }
    });
  };
  // >>> Composition
  var onCompositionStart = function onCompositionStart() {
    compositionRef.current = true;
  };
  var onCompositionEnd = function onCompositionEnd() {
    compositionRef.current = false;
    collectInputValue(inputRef.current.value);
  };
  // >>> Input
  var onInternalInput = function onInternalInput(e) {
    collectInputValue(e.target.value);
  };
  // ============================= Step =============================
  var onInternalStep = function onInternalStep(up) {
    var _inputRef$current;
    // Ignore step since out of range
    if (up && upDisabled || !up && downDisabled) {
      return;
    }
    // Clear typing status since it may caused by up & down key.
    // We should sync with input value.
    userTypingRef.current = false;
    var stepDecimal = getMiniDecimal(shiftKeyRef.current ? getDecupleSteps(step) : step);
    if (!up) {
      stepDecimal = stepDecimal.negate();
    }
    var target = (decimalValue || getMiniDecimal(0)).add(stepDecimal.toString());
    var updatedValue = triggerValueUpdate(target, false);
    onStep === null || onStep === void 0 ? void 0 : onStep(getDecimalValue(stringMode, updatedValue), {
      offset: shiftKeyRef.current ? getDecupleSteps(step) : step,
      type: up ? 'up' : 'down'
    });
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  };
  // ============================ Flush =============================
  /**
   * Flush current input content to trigger value change & re-formatter input if needed
   */
  var flushInputValue = function flushInputValue(userTyping) {
    var parsedValue = getMiniDecimal(mergedParser(inputValue));
    var formatValue = parsedValue;
    if (!parsedValue.isNaN()) {
      // Only validate value or empty value can be re-fill to inputValue
      // Reassign the formatValue within ranged of trigger control
      formatValue = triggerValueUpdate(parsedValue, userTyping);
    } else {
      formatValue = decimalValue;
    }
    if (value !== undefined) {
      // Reset back with controlled value first
      setInputValue(decimalValue, false);
    } else if (!formatValue.isNaN()) {
      // Reset input back since no validate value
      setInputValue(formatValue, false);
    }
  };
  // Solve the issue of the event triggering sequence when entering numbers in chinese input (Safari)
  var onBeforeInput = function onBeforeInput() {
    userTypingRef.current = true;
  };
  var onKeyDown = function onKeyDown(event) {
    var which = event.which,
      shiftKey = event.shiftKey;
    userTypingRef.current = true;
    if (shiftKey) {
      shiftKeyRef.current = true;
    } else {
      shiftKeyRef.current = false;
    }
    if (which === KeyCode/* default.ENTER */.Z.ENTER) {
      if (!compositionRef.current) {
        userTypingRef.current = false;
      }
      flushInputValue(false);
      onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter(event);
    }
    if (keyboard === false) {
      return;
    }
    // Do step
    if (!compositionRef.current && [KeyCode/* default.UP */.Z.UP, KeyCode/* default.DOWN */.Z.DOWN].includes(which)) {
      onInternalStep(KeyCode/* default.UP */.Z.UP === which);
      event.preventDefault();
    }
  };
  var onKeyUp = function onKeyUp() {
    userTypingRef.current = false;
    shiftKeyRef.current = false;
  };
  // >>> Focus & Blur
  var onBlur = function onBlur() {
    flushInputValue(false);
    setFocus(false);
    userTypingRef.current = false;
  };
  // ========================== Controlled ==========================
  // Input by precision
  (0,useLayoutEffect/* useLayoutUpdateEffect */.o)(function () {
    if (!decimalValue.isInvalidate()) {
      setInputValue(decimalValue, false);
    }
  }, [precision]);
  // Input by value
  (0,useLayoutEffect/* useLayoutUpdateEffect */.o)(function () {
    var newValue = getMiniDecimal(value);
    setDecimalValue(newValue);
    var currentParsedValue = getMiniDecimal(mergedParser(inputValue));
    // When user typing from `1.2` to `1.`, we should not convert to `1` immediately.
    // But let it go if user set `formatter`
    if (!newValue.equals(currentParsedValue) || !userTypingRef.current || formatter) {
      // Update value as effect
      setInputValue(newValue, userTypingRef.current);
    }
  }, [value]);
  // ============================ Cursor ============================
  (0,useLayoutEffect/* useLayoutUpdateEffect */.o)(function () {
    if (formatter) {
      restoreCursor();
    }
  }, [inputValue]);
  // ============================ Render ============================
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(prefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-focused"), focus), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-readonly"), readOnly), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-not-a-number"), decimalValue.isNaN()), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-out-of-range"), !decimalValue.isInvalidate() && !isInRange(decimalValue)), _classNames)),
    style: style,
    onFocus: function onFocus() {
      setFocus(true);
    },
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    onCompositionStart: onCompositionStart,
    onCompositionEnd: onCompositionEnd,
    onBeforeInput: onBeforeInput
  }, controls && /*#__PURE__*/react.createElement(StepHandler, {
    prefixCls: prefixCls,
    upNode: upHandler,
    downNode: downHandler,
    upDisabled: upDisabled,
    downDisabled: downDisabled,
    onStep: onInternalStep
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(inputClassName, "-wrap")
  }, /*#__PURE__*/react.createElement("input", (0,esm_extends/* default */.Z)({
    autoComplete: "off",
    role: "spinbutton",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": decimalValue.isInvalidate() ? null : decimalValue.toString(),
    step: step
  }, inputProps, {
    ref: (0,es_ref/* composeRef */.sQ)(inputRef, ref),
    className: inputClassName,
    value: inputValue,
    onChange: onInternalInput,
    disabled: disabled,
    readOnly: readOnly
  }))));
});
InputNumber.displayName = 'InputNumber';
/* harmony default export */ var es_InputNumber = (InputNumber);
;// CONCATENATED MODULE: ./node_modules/rc-input-number/es/index.js

/* harmony default export */ var es = (es_InputNumber);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(74714);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98438);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(21631);
// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var form_context = __webpack_require__(4431);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(45531);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(48138);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/statusUtils.js
var statusUtils = __webpack_require__(55681);
;// CONCATENATED MODULE: ./node_modules/antd/es/input-number/index.js




var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};













var input_number_InputNumber = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var size = react.useContext(SizeContext/* default */.Z);
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    focused = _React$useState2[0],
    setFocus = _React$useState2[1];
  var inputRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return inputRef.current;
  });
  var className = props.className,
    customizeSize = props.size,
    customDisabled = props.disabled,
    customizePrefixCls = props.prefixCls,
    addonBefore = props.addonBefore,
    addonAfter = props.addonAfter,
    prefix = props.prefix,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    readOnly = props.readOnly,
    customStatus = props.status,
    controls = props.controls,
    others = __rest(props, ["className", "size", "disabled", "prefixCls", "addonBefore", "addonAfter", "prefix", "bordered", "readOnly", "status", "controls"]);
  var prefixCls = getPrefixCls('input-number', customizePrefixCls);
  var _useCompactItemContex = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction),
    compactSize = _useCompactItemContex.compactSize,
    compactItemClassnames = _useCompactItemContex.compactItemClassnames;
  var upIcon = /*#__PURE__*/react.createElement(icons_UpOutlined, {
    className: "".concat(prefixCls, "-handler-up-inner")
  });
  var downIcon = /*#__PURE__*/react.createElement(DownOutlined/* default */.Z, {
    className: "".concat(prefixCls, "-handler-down-inner")
  });
  var controlsTemp = typeof controls === 'boolean' ? controls : undefined;
  if ((0,esm_typeof/* default */.Z)(controls) === 'object') {
    upIcon = typeof controls.upIcon === 'undefined' ? upIcon : /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-handler-up-inner")
    }, controls.upIcon);
    downIcon = typeof controls.downIcon === 'undefined' ? downIcon : /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-handler-down-inner")
    }, controls.downIcon);
  }
  var _useContext = (0,react.useContext)(form_context/* FormItemInputContext */.aM),
    hasFeedback = _useContext.hasFeedback,
    contextStatus = _useContext.status,
    isFormItemInput = _useContext.isFormItemInput,
    feedbackIcon = _useContext.feedbackIcon;
  var mergedStatus = (0,statusUtils/* getMergedStatus */.F)(contextStatus, customStatus);
  var mergeSize = compactSize || customizeSize || size;
  // ===================== Disabled =====================
  var disabled = react.useContext(DisabledContext/* default */.Z);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  var inputNumberClass = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-lg"), mergeSize === 'large'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-sm"), mergeSize === 'small'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-borderless"), !bordered), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-in-form-item"), isFormItemInput), _classNames), (0,statusUtils/* getStatusClassNames */.Z)(prefixCls, mergedStatus), compactItemClassnames, className);
  var element = /*#__PURE__*/react.createElement(es, (0,esm_extends/* default */.Z)({
    ref: inputRef,
    disabled: mergedDisabled,
    className: inputNumberClass,
    upHandler: upIcon,
    downHandler: downIcon,
    prefixCls: prefixCls,
    readOnly: readOnly,
    controls: controlsTemp
  }, others));
  if (prefix != null || hasFeedback) {
    var _classNames2;
    var affixWrapperCls = classnames_default()("".concat(prefixCls, "-affix-wrapper"), (0,statusUtils/* getStatusClassNames */.Z)("".concat(prefixCls, "-affix-wrapper"), mergedStatus, hasFeedback), (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-affix-wrapper-focused"), focused), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-affix-wrapper-disabled"), props.disabled), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), size === 'small'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), size === 'large'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-affix-wrapper-readonly"), readOnly), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), (0,defineProperty/* default */.Z)(_classNames2, "".concat(className), !(addonBefore || addonAfter) && className), _classNames2));
    element = /*#__PURE__*/react.createElement("div", {
      className: affixWrapperCls,
      style: props.style,
      onMouseUp: function onMouseUp() {
        return inputRef.current.focus();
      }
    }, prefix && /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-prefix")
    }, prefix), (0,reactNode/* cloneElement */.Tm)(element, {
      style: null,
      value: props.value,
      onFocus: function onFocus(event) {
        var _a;
        setFocus(true);
        (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, event);
      },
      onBlur: function onBlur(event) {
        var _a;
        setFocus(false);
        (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, event);
      }
    }), hasFeedback && /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-suffix")
    }, feedbackIcon));
  }
  if (addonBefore != null || addonAfter != null) {
    var _classNames4;
    var wrapperClassName = "".concat(prefixCls, "-group");
    var addonClassName = "".concat(wrapperClassName, "-addon");
    var addonBeforeNode = addonBefore ? /*#__PURE__*/react.createElement("div", {
      className: addonClassName
    }, addonBefore) : null;
    var addonAfterNode = addonAfter ? /*#__PURE__*/react.createElement("div", {
      className: addonClassName
    }, addonAfter) : null;
    var mergedWrapperClassName = classnames_default()("".concat(prefixCls, "-wrapper"), wrapperClassName, (0,defineProperty/* default */.Z)({}, "".concat(wrapperClassName, "-rtl"), direction === 'rtl'));
    var mergedGroupClassName = classnames_default()("".concat(prefixCls, "-group-wrapper"), (_classNames4 = {}, (0,defineProperty/* default */.Z)(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), (0,defineProperty/* default */.Z)(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), (0,defineProperty/* default */.Z)(_classNames4, "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), _classNames4), (0,statusUtils/* getStatusClassNames */.Z)("".concat(prefixCls, "-group-wrapper"), mergedStatus, hasFeedback), className);
    element = /*#__PURE__*/react.createElement("div", {
      className: mergedGroupClassName,
      style: props.style
    }, /*#__PURE__*/react.createElement("div", {
      className: mergedWrapperClassName
    }, addonBeforeNode && /*#__PURE__*/react.createElement(Compact/* NoCompactStyle */.BR, null, /*#__PURE__*/react.createElement(form_context/* NoFormStyle */.Ux, {
      status: true,
      override: true
    }, addonBeforeNode)), (0,reactNode/* cloneElement */.Tm)(element, {
      style: null,
      disabled: mergedDisabled
    }), addonAfterNode && /*#__PURE__*/react.createElement(Compact/* NoCompactStyle */.BR, null, /*#__PURE__*/react.createElement(form_context/* NoFormStyle */.Ux, {
      status: true,
      override: true
    }, addonAfterNode))));
  }
  return element;
});
/* harmony default export */ var input_number = (input_number_InputNumber);

/***/ }),

/***/ 64393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ tabs; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(21079);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(53756);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js
// This icon file is generated automatically.
var PlusOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "defs",
      "attrs": {},
      "children": [{
        "tag": "style",
        "attrs": {}
      }]
    }, {
      "tag": "path",
      "attrs": {
        "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"
      }
    }]
  },
  "name": "plus",
  "theme": "outlined"
};
/* harmony default export */ var asn_PlusOutlined = (PlusOutlined);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(6321);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/PlusOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var PlusOutlined_PlusOutlined = function PlusOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_PlusOutlined
  }));
};
PlusOutlined_PlusOutlined.displayName = 'PlusOutlined';
/* harmony default export */ var icons_PlusOutlined = (/*#__PURE__*/react.forwardRef(PlusOutlined_PlusOutlined));
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(46123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isMobile.js
var isMobile = __webpack_require__(64394);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(10288);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var es = __webpack_require__(1293);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabContext.js

/* harmony default export */ var TabContext = (/*#__PURE__*/(0,react.createContext)(null));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabPanelList/TabPane.js


var TabPane = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var prefixCls = _ref.prefixCls,
    className = _ref.className,
    style = _ref.style,
    id = _ref.id,
    active = _ref.active,
    tabKey = _ref.tabKey,
    children = _ref.children;
  return /*#__PURE__*/react.createElement("div", {
    id: id && "".concat(id, "-panel-").concat(tabKey),
    role: "tabpanel",
    tabIndex: active ? 0 : -1,
    "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
    "aria-hidden": !active,
    style: style,
    className: classnames_default()(prefixCls, active && "".concat(prefixCls, "-active"), className),
    ref: ref
  }, children);
});
if (false) {}
/* harmony default export */ var TabPanelList_TabPane = (TabPane);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabPanelList/index.js




var _excluded = ["key", "forceRender", "style", "className"];





function TabPanelList(_ref) {
  var id = _ref.id,
    activeKey = _ref.activeKey,
    animated = _ref.animated,
    tabPosition = _ref.tabPosition,
    destroyInactiveTabPane = _ref.destroyInactiveTabPane;
  var _React$useContext = react.useContext(TabContext),
    prefixCls = _React$useContext.prefixCls,
    tabs = _React$useContext.tabs;
  var tabPaneAnimated = animated.tabPane;
  var tabPanePrefixCls = "".concat(prefixCls, "-tabpane");
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-content-holder"))
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-content-animated"), tabPaneAnimated))
  }, tabs.map(function (_ref2) {
    var key = _ref2.key,
      forceRender = _ref2.forceRender,
      paneStyle = _ref2.style,
      paneClassName = _ref2.className,
      restTabProps = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded);
    var active = key === activeKey;
    return /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({
      key: key,
      visible: active,
      forceRender: forceRender,
      removeOnLeave: !!destroyInactiveTabPane,
      leavedClassName: "".concat(tabPanePrefixCls, "-hidden")
    }, animated.tabPaneMotion), function (_ref3, ref) {
      var motionStyle = _ref3.style,
        motionClassName = _ref3.className;
      return /*#__PURE__*/react.createElement(TabPanelList_TabPane, (0,esm_extends/* default */.Z)({}, restTabProps, {
        prefixCls: tabPanePrefixCls,
        id: id,
        tabKey: key,
        animated: tabPaneAnimated,
        active: active,
        style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, paneStyle), motionStyle),
        className: classnames_default()(paneClassName, motionClassName),
        ref: ref
      }));
    });
  })));
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(93433);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 4 modules
var rc_resize_observer_es = __webpack_require__(25172);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(29978);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(95557);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(16945);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useOffsets.js


var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
  return (0,react.useMemo)(function () {
    var _tabs$;
    var map = new Map();
    var lastOffset = tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE;
    var rightOffset = lastOffset.left + lastOffset.width;
    for (var i = 0; i < tabs.length; i += 1) {
      var key = tabs[i].key;
      var data = tabSizes.get(key);

      // Reuse last one when not exist yet
      if (!data) {
        var _tabs;
        data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE;
      }
      var entity = map.get(key) || (0,objectSpread2/* default */.Z)({}, data);

      // Right
      entity.right = rightOffset - entity.left - entity.width;

      // Update entity
      map.set(key, entity);
    }
    return map;
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), tabSizes, holderScrollWidth]);
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useSyncState.js


function useSyncState(defaultState, onChange) {
  var stateRef = react.useRef(defaultState);
  var _React$useState = react.useState({}),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    forceUpdate = _React$useState2[1];
  function setState(updater) {
    var newValue = typeof updater === 'function' ? updater(stateRef.current) : updater;
    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }
    stateRef.current = newValue;
    forceUpdate({});
  }
  return [stateRef.current, setState];
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useTouchMove.js



var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);

// ================================= Hook =================================
function useTouchMove(ref, onOffset) {
  var _useState = (0,react.useState)(),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    touchPosition = _useState2[0],
    setTouchPosition = _useState2[1];
  var _useState3 = (0,react.useState)(0),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    lastTimestamp = _useState4[0],
    setLastTimestamp = _useState4[1];
  var _useState5 = (0,react.useState)(0),
    _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
    lastTimeDiff = _useState6[0],
    setLastTimeDiff = _useState6[1];
  var _useState7 = (0,react.useState)(),
    _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
    lastOffset = _useState8[0],
    setLastOffset = _useState8[1];
  var motionRef = (0,react.useRef)();

  // ========================= Events =========================
  // >>> Touch events
  function onTouchStart(e) {
    var _e$touches$ = e.touches[0],
      screenX = _e$touches$.screenX,
      screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    window.clearInterval(motionRef.current);
  }
  function onTouchMove(e) {
    if (!touchPosition) return;
    e.preventDefault();
    var _e$touches$2 = e.touches[0],
      screenX = _e$touches$2.screenX,
      screenY = _e$touches$2.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var offsetX = screenX - touchPosition.x;
    var offsetY = screenY - touchPosition.y;
    onOffset(offsetX, offsetY);
    var now = Date.now();
    setLastTimestamp(now);
    setLastTimeDiff(now - lastTimestamp);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }
  function onTouchEnd() {
    if (!touchPosition) return;
    setTouchPosition(null);
    setLastOffset(null);

    // Swipe if needed
    if (lastOffset) {
      var distanceX = lastOffset.x / lastTimeDiff;
      var distanceY = lastOffset.y / lastTimeDiff;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY);

      // Skip swipe if low distance
      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionRef.current = window.setInterval(function () {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          window.clearInterval(motionRef.current);
          return;
        }
        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  }

  // >>> Wheel event
  var lastWheelDirectionRef = (0,react.useRef)();
  function onWheel(e) {
    var deltaX = e.deltaX,
      deltaY = e.deltaY;

    // Convert both to x & y since wheel only happened on PC
    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);
    if (absX === absY) {
      mixed = lastWheelDirectionRef.current === 'x' ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.current = 'x';
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.current = 'y';
    }
    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  }

  // ========================= Effect =========================
  var touchEventsRef = (0,react.useRef)(null);
  touchEventsRef.current = {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onWheel: onWheel
  };
  react.useEffect(function () {
    function onProxyTouchStart(e) {
      touchEventsRef.current.onTouchStart(e);
    }
    function onProxyTouchMove(e) {
      touchEventsRef.current.onTouchMove(e);
    }
    function onProxyTouchEnd(e) {
      touchEventsRef.current.onTouchEnd(e);
    }
    function onProxyWheel(e) {
      touchEventsRef.current.onWheel(e);
    }
    document.addEventListener('touchmove', onProxyTouchMove, {
      passive: false
    });
    document.addEventListener('touchend', onProxyTouchEnd, {
      passive: false
    });

    // No need to clean up since element removed
    ref.current.addEventListener('touchstart', onProxyTouchStart, {
      passive: false
    });
    ref.current.addEventListener('wheel', onProxyWheel);
    return function () {
      document.removeEventListener('touchmove', onProxyTouchMove);
      document.removeEventListener('touchend', onProxyTouchEnd);
    };
  }, []);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(72846);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useUpdate.js




/**
 * Help to merge callback with `useLayoutEffect`.
 * One time will only trigger once.
 */
function useUpdate(callback) {
  var _useState = (0,react.useState)(0),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var effectRef = (0,react.useRef)(0);
  var callbackRef = (0,react.useRef)();
  callbackRef.current = callback;

  // Trigger on `useLayoutEffect`
  (0,useLayoutEffect/* useLayoutUpdateEffect */.o)(function () {
    var _callbackRef$current;
    (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef);
  }, [count]);

  // Trigger to update count
  return function () {
    if (effectRef.current !== count) {
      return;
    }
    effectRef.current += 1;
    setCount(effectRef.current);
  };
}
function useUpdateState(defaultState) {
  var batchRef = (0,react.useRef)([]);
  var _useState3 = (0,react.useState)({}),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    forceUpdate = _useState4[1];
  var state = (0,react.useRef)(typeof defaultState === 'function' ? defaultState() : defaultState);
  var flushUpdate = useUpdate(function () {
    var current = state.current;
    batchRef.current.forEach(function (callback) {
      current = callback(current);
    });
    batchRef.current = [];
    state.current = current;
    forceUpdate({});
  });
  function updater(callback) {
    batchRef.current.push(callback);
    flushUpdate();
  }
  return [state.current, updater];
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useVisibleRange.js

var useVisibleRange_DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function useVisibleRange(tabOffsets, visibleTabContentValue, transform, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, _ref) {
  var tabs = _ref.tabs,
    tabPosition = _ref.tabPosition,
    rtl = _ref.rtl;
  var charUnit;
  var position;
  var transformSize;
  if (['top', 'bottom'].includes(tabPosition)) {
    charUnit = 'width';
    position = rtl ? 'right' : 'left';
    transformSize = Math.abs(transform);
  } else {
    charUnit = 'height';
    position = 'top';
    transformSize = -transform;
  }
  return (0,react.useMemo)(function () {
    if (!tabs.length) {
      return [0, 0];
    }
    var len = tabs.length;
    var endIndex = len;
    for (var i = 0; i < len; i += 1) {
      var offset = tabOffsets.get(tabs[i].key) || useVisibleRange_DEFAULT_SIZE;
      if (offset[position] + offset[charUnit] > transformSize + visibleTabContentValue) {
        endIndex = i - 1;
        break;
      }
    }
    var startIndex = 0;
    for (var _i = len - 1; _i >= 0; _i -= 1) {
      var _offset = tabOffsets.get(tabs[_i].key) || useVisibleRange_DEFAULT_SIZE;
      if (_offset[position] < transformSize) {
        startIndex = _i + 1;
        break;
      }
    }
    return [startIndex, endIndex];
  }, [tabOffsets, visibleTabContentValue, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, transformSize, tabPosition, tabs.map(function (tab) {
    return tab.key;
  }).join('_'), rtl]);
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/util.js
/**
 * We trade Map as deps which may change with same value but different ref object.
 * We should make it as hash for deps
 * */
function stringify(obj) {
  var tgt;
  if (obj instanceof Map) {
    tgt = {};
    obj.forEach(function (v, k) {
      tgt[k] = v;
    });
  } else {
    tgt = obj;
  }
  return JSON.stringify(tgt);
}
var RC_TABS_DOUBLE_QUOTE = 'TABS_DQ';
function genDataNodeKey(key) {
  return String(key).replace(/"/g, RC_TABS_DOUBLE_QUOTE);
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/AddButton.js

function AddButton(_ref, ref) {
  var prefixCls = _ref.prefixCls,
    editable = _ref.editable,
    locale = _ref.locale,
    style = _ref.style;
  if (!editable || editable.showAdd === false) {
    return null;
  }
  return /*#__PURE__*/react.createElement("button", {
    ref: ref,
    type: "button",
    className: "".concat(prefixCls, "-nav-add"),
    style: style,
    "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || 'Add tab',
    onClick: function onClick(event) {
      editable.onEdit('add', {
        event: event
      });
    }
  }, editable.addIcon || '+');
}
/* harmony default export */ var TabNavList_AddButton = (/*#__PURE__*/react.forwardRef(AddButton));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/ExtraContent.js


var ExtraContent = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var position = _ref.position,
    prefixCls = _ref.prefixCls,
    extra = _ref.extra;
  if (!extra) return null;
  var content;

  // Parse extra
  var assertExtra = {};
  if ((0,esm_typeof/* default */.Z)(extra) === 'object' && ! /*#__PURE__*/react.isValidElement(extra)) {
    assertExtra = extra;
  } else {
    assertExtra.right = extra;
  }
  if (position === 'right') {
    content = assertExtra.right;
  }
  if (position === 'left') {
    content = assertExtra.left;
  }
  return content ? /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-extra-content"),
    ref: ref
  }, content) : null;
});
if (false) {}
/* harmony default export */ var TabNavList_ExtraContent = (ExtraContent);
// EXTERNAL MODULE: ./node_modules/rc-trigger/es/index.js + 16 modules
var rc_trigger_es = __webpack_require__(43549);
;// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topCenter: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomCenter: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  }
};
/* harmony default export */ var es_placements = (placements);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(49242);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/focus.js
var Dom_focus = __webpack_require__(52221);
;// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/hooks/useAccessibility.js




var ESC = KeyCode/* default.ESC */.Z.ESC,
  TAB = KeyCode/* default.TAB */.Z.TAB;
function useAccessibility(_ref) {
  var visible = _ref.visible,
    setTriggerVisible = _ref.setTriggerVisible,
    triggerRef = _ref.triggerRef,
    onVisibleChange = _ref.onVisibleChange,
    autoFocus = _ref.autoFocus;
  var focusMenuRef = react.useRef(false);
  var handleCloseMenuAndReturnFocus = function handleCloseMenuAndReturnFocus() {
    if (visible && triggerRef.current) {
      var _triggerRef$current, _triggerRef$current$t, _triggerRef$current$t2, _triggerRef$current$t3;
      (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : (_triggerRef$current$t = _triggerRef$current.triggerRef) === null || _triggerRef$current$t === void 0 ? void 0 : (_triggerRef$current$t2 = _triggerRef$current$t.current) === null || _triggerRef$current$t2 === void 0 ? void 0 : (_triggerRef$current$t3 = _triggerRef$current$t2.focus) === null || _triggerRef$current$t3 === void 0 ? void 0 : _triggerRef$current$t3.call(_triggerRef$current$t2);
      setTriggerVisible(false);
      if (typeof onVisibleChange === 'function') {
        onVisibleChange(false);
      }
    }
  };
  var focusMenu = function focusMenu() {
    var _triggerRef$current2, _triggerRef$current2$, _triggerRef$current2$2, _triggerRef$current2$3;
    var elements = (0,Dom_focus/* getFocusNodeList */.tS)((_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : (_triggerRef$current2$ = _triggerRef$current2.popupRef) === null || _triggerRef$current2$ === void 0 ? void 0 : (_triggerRef$current2$2 = _triggerRef$current2$.current) === null || _triggerRef$current2$2 === void 0 ? void 0 : (_triggerRef$current2$3 = _triggerRef$current2$2.getElement) === null || _triggerRef$current2$3 === void 0 ? void 0 : _triggerRef$current2$3.call(_triggerRef$current2$2));
    var firstElement = elements[0];
    if (firstElement === null || firstElement === void 0 ? void 0 : firstElement.focus) {
      firstElement.focus();
      focusMenuRef.current = true;
      return true;
    }
    return false;
  };
  var handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case ESC:
        handleCloseMenuAndReturnFocus();
        break;
      case TAB:
        {
          var focusResult = false;
          if (!focusMenuRef.current) {
            focusResult = focusMenu();
          }
          if (focusResult) {
            event.preventDefault();
          } else {
            handleCloseMenuAndReturnFocus();
          }
          break;
        }
    }
  };
  react.useEffect(function () {
    if (visible) {
      window.addEventListener('keydown', handleKeyDown);
      if (autoFocus) {
        // FIXME: hack with raf
        (0,raf/* default */.Z)(focusMenu, 3);
      }
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
        focusMenuRef.current = false;
      };
    }
    return function () {
      focusMenuRef.current = false;
    };
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps
}
;// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/Dropdown.js




var Dropdown_excluded = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus"];





function Dropdown(props, ref) {
  var _props$arrow = props.arrow,
    arrow = _props$arrow === void 0 ? false : _props$arrow,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-dropdown' : _props$prefixCls,
    transitionName = props.transitionName,
    animation = props.animation,
    align = props.align,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement,
    _props$placements = props.placements,
    placements = _props$placements === void 0 ? es_placements : _props$placements,
    getPopupContainer = props.getPopupContainer,
    showAction = props.showAction,
    hideAction = props.hideAction,
    overlayClassName = props.overlayClassName,
    overlayStyle = props.overlayStyle,
    visible = props.visible,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
    autoFocus = props.autoFocus,
    otherProps = (0,objectWithoutProperties/* default */.Z)(props, Dropdown_excluded);
  var _React$useState = react.useState(),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    triggerVisible = _React$useState2[0],
    setTriggerVisible = _React$useState2[1];
  var mergedVisible = 'visible' in props ? visible : triggerVisible;
  var triggerRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return triggerRef.current;
  });
  useAccessibility({
    visible: mergedVisible,
    setTriggerVisible: setTriggerVisible,
    triggerRef: triggerRef,
    onVisibleChange: props.onVisibleChange,
    autoFocus: autoFocus
  });
  var getOverlayElement = function getOverlayElement() {
    var overlay = props.overlay;
    var overlayElement;
    if (typeof overlay === 'function') {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }
    return overlayElement;
  };
  var onClick = function onClick(e) {
    var onOverlayClick = props.onOverlayClick;
    setTriggerVisible(false);
    if (onOverlayClick) {
      onOverlayClick(e);
    }
  };
  var onVisibleChange = function onVisibleChange(newVisible) {
    var onVisibleChangeProp = props.onVisibleChange;
    setTriggerVisible(newVisible);
    if (typeof onVisibleChangeProp === 'function') {
      onVisibleChangeProp(newVisible);
    }
  };
  var getMenuElement = function getMenuElement() {
    var overlayElement = getOverlayElement();
    return /*#__PURE__*/react.createElement(react.Fragment, null, arrow && /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-arrow")
    }), overlayElement);
  };
  var getMenuElementOrLambda = function getMenuElementOrLambda() {
    var overlay = props.overlay;
    if (typeof overlay === 'function') {
      return getMenuElement;
    }
    return getMenuElement();
  };
  var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger() {
    var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,
      alignPoint = props.alignPoint;
    if ('minOverlayWidthMatchTrigger' in props) {
      return minOverlayWidthMatchTrigger;
    }
    return !alignPoint;
  };
  var getOpenClassName = function getOpenClassName() {
    var openClassName = props.openClassName;
    if (openClassName !== undefined) {
      return openClassName;
    }
    return "".concat(prefixCls, "-open");
  };
  var renderChildren = function renderChildren() {
    var children = props.children;
    var childrenProps = children.props ? children.props : {};
    var childClassName = classnames_default()(childrenProps.className, getOpenClassName());
    return mergedVisible && children ? /*#__PURE__*/react.cloneElement(children, {
      className: childClassName
    }) : children;
  };
  var triggerHideAction = hideAction;
  if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
    triggerHideAction = ['click'];
  }
  return /*#__PURE__*/react.createElement(rc_trigger_es/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    builtinPlacements: placements
  }, otherProps), {}, {
    prefixCls: prefixCls,
    ref: triggerRef,
    popupClassName: classnames_default()(overlayClassName, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-show-arrow"), arrow)),
    popupStyle: overlayStyle,
    action: trigger,
    showAction: showAction,
    hideAction: triggerHideAction || [],
    popupPlacement: placement,
    popupAlign: align,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupVisible: mergedVisible,
    stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',
    popup: getMenuElementOrLambda(),
    onPopupVisibleChange: onVisibleChange,
    onPopupClick: onClick,
    getPopupContainer: getPopupContainer
  }), renderChildren());
}
/* harmony default export */ var es_Dropdown = (/*#__PURE__*/react.forwardRef(Dropdown));
;// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/index.js

/* harmony default export */ var rc_dropdown_es = (es_Dropdown);
// EXTERNAL MODULE: ./node_modules/rc-menu/es/index.js + 24 modules
var rc_menu_es = __webpack_require__(74224);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/OperationNode.js









function OperationNode(_ref, ref) {
  var prefixCls = _ref.prefixCls,
    id = _ref.id,
    tabs = _ref.tabs,
    locale = _ref.locale,
    mobile = _ref.mobile,
    _ref$moreIcon = _ref.moreIcon,
    moreIcon = _ref$moreIcon === void 0 ? 'More' : _ref$moreIcon,
    moreTransitionName = _ref.moreTransitionName,
    style = _ref.style,
    className = _ref.className,
    editable = _ref.editable,
    tabBarGutter = _ref.tabBarGutter,
    rtl = _ref.rtl,
    removeAriaLabel = _ref.removeAriaLabel,
    onTabClick = _ref.onTabClick,
    getPopupContainer = _ref.getPopupContainer,
    popupClassName = _ref.popupClassName;
  // ======================== Dropdown ========================
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    selectedKey = _useState4[0],
    setSelectedKey = _useState4[1];
  var popupId = "".concat(id, "-more-popup");
  var dropdownPrefix = "".concat(prefixCls, "-dropdown");
  var selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
  var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
  function onRemoveTab(event, key) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key: key,
      event: event
    });
  }
  var menu = /*#__PURE__*/react.createElement(rc_menu_es/* default */.ZP, {
    onClick: function onClick(_ref2) {
      var key = _ref2.key,
        domEvent = _ref2.domEvent;
      onTabClick(key, domEvent);
      setOpen(false);
    },
    prefixCls: "".concat(dropdownPrefix, "-menu"),
    id: popupId,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": selectedItemId,
    selectedKeys: [selectedKey],
    "aria-label": dropdownAriaLabel !== undefined ? dropdownAriaLabel : 'expanded dropdown'
  }, tabs.map(function (tab) {
    var removable = editable && tab.closable !== false && !tab.disabled;
    return /*#__PURE__*/react.createElement(rc_menu_es/* MenuItem */.sN, {
      key: tab.key,
      id: "".concat(popupId, "-").concat(tab.key),
      role: "option",
      "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
      disabled: tab.disabled
    }, /*#__PURE__*/react.createElement("span", null, tab.label), removable && /*#__PURE__*/react.createElement("button", {
      type: "button",
      "aria-label": removeAriaLabel || 'remove',
      tabIndex: 0,
      className: "".concat(dropdownPrefix, "-menu-item-remove"),
      onClick: function onClick(e) {
        e.stopPropagation();
        onRemoveTab(e, tab.key);
      }
    }, tab.closeIcon || editable.removeIcon || '×'));
  }));
  function selectOffset(offset) {
    var enabledTabs = tabs.filter(function (tab) {
      return !tab.disabled;
    });
    var selectedIndex = enabledTabs.findIndex(function (tab) {
      return tab.key === selectedKey;
    }) || 0;
    var len = enabledTabs.length;
    for (var i = 0; i < len; i += 1) {
      selectedIndex = (selectedIndex + offset + len) % len;
      var tab = enabledTabs[selectedIndex];
      if (!tab.disabled) {
        setSelectedKey(tab.key);
        return;
      }
    }
  }
  function onKeyDown(e) {
    var which = e.which;
    if (!open) {
      if ([KeyCode/* default.DOWN */.Z.DOWN, KeyCode/* default.SPACE */.Z.SPACE, KeyCode/* default.ENTER */.Z.ENTER].includes(which)) {
        setOpen(true);
        e.preventDefault();
      }
      return;
    }
    switch (which) {
      case KeyCode/* default.UP */.Z.UP:
        selectOffset(-1);
        e.preventDefault();
        break;
      case KeyCode/* default.DOWN */.Z.DOWN:
        selectOffset(1);
        e.preventDefault();
        break;
      case KeyCode/* default.ESC */.Z.ESC:
        setOpen(false);
        break;
      case KeyCode/* default.SPACE */.Z.SPACE:
      case KeyCode/* default.ENTER */.Z.ENTER:
        if (selectedKey !== null) onTabClick(selectedKey, e);
        break;
    }
  }

  // ========================= Effect =========================
  (0,react.useEffect)(function () {
    // We use query element here to avoid React strict warning
    var ele = document.getElementById(selectedItemId);
    if (ele && ele.scrollIntoView) {
      ele.scrollIntoView(false);
    }
  }, [selectedKey]);
  (0,react.useEffect)(function () {
    if (!open) {
      setSelectedKey(null);
    }
  }, [open]);

  // ========================= Render =========================
  var moreStyle = (0,defineProperty/* default */.Z)({}, rtl ? 'marginRight' : 'marginLeft', tabBarGutter);
  if (!tabs.length) {
    moreStyle.visibility = 'hidden';
    moreStyle.order = 1;
  }
  var overlayClassName = classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(dropdownPrefix, "-rtl"), rtl));
  var moreNode = mobile ? null : /*#__PURE__*/react.createElement(rc_dropdown_es, {
    prefixCls: dropdownPrefix,
    overlay: menu,
    trigger: ['hover'],
    visible: tabs.length ? open : false,
    transitionName: moreTransitionName,
    onVisibleChange: setOpen,
    overlayClassName: classnames_default()(overlayClassName, popupClassName),
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer: getPopupContainer
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "".concat(prefixCls, "-nav-more"),
    style: moreStyle,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": popupId,
    id: "".concat(id, "-more"),
    "aria-expanded": open,
    onKeyDown: onKeyDown
  }, moreIcon));
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-nav-operations"), className),
    style: style,
    ref: ref
  }, moreNode, /*#__PURE__*/react.createElement(TabNavList_AddButton, {
    prefixCls: prefixCls,
    locale: locale,
    editable: editable
  }));
}
/* harmony default export */ var TabNavList_OperationNode = (/*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(OperationNode), function (_, next) {
  return (
    // https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    next.tabMoving
  );
}));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/TabNode.js





function TabNode(_ref) {
  var _classNames;
  var prefixCls = _ref.prefixCls,
    id = _ref.id,
    active = _ref.active,
    _ref$tab = _ref.tab,
    key = _ref$tab.key,
    label = _ref$tab.label,
    disabled = _ref$tab.disabled,
    closeIcon = _ref$tab.closeIcon,
    closable = _ref.closable,
    renderWrapper = _ref.renderWrapper,
    removeAriaLabel = _ref.removeAriaLabel,
    editable = _ref.editable,
    onClick = _ref.onClick,
    onFocus = _ref.onFocus,
    style = _ref.style;
  var tabPrefix = "".concat(prefixCls, "-tab");
  var removable = editable && closable !== false && !disabled;
  function onInternalClick(e) {
    if (disabled) {
      return;
    }
    onClick(e);
  }
  function onRemoveTab(event) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key: key,
      event: event
    });
  }
  var node = /*#__PURE__*/react.createElement("div", {
    key: key
    // ref={ref}
    ,

    "data-node-key": genDataNodeKey(key),
    className: classnames_default()(tabPrefix, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(tabPrefix, "-with-remove"), removable), (0,defineProperty/* default */.Z)(_classNames, "".concat(tabPrefix, "-active"), active), (0,defineProperty/* default */.Z)(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
    style: style,
    onClick: onInternalClick
  }, /*#__PURE__*/react.createElement("div", {
    role: "tab",
    "aria-selected": active,
    id: id && "".concat(id, "-tab-").concat(key),
    className: "".concat(tabPrefix, "-btn"),
    "aria-controls": id && "".concat(id, "-panel-").concat(key),
    "aria-disabled": disabled,
    tabIndex: disabled ? null : 0,
    onClick: function onClick(e) {
      e.stopPropagation();
      onInternalClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      if ([KeyCode/* default.SPACE */.Z.SPACE, KeyCode/* default.ENTER */.Z.ENTER].includes(e.which)) {
        e.preventDefault();
        onInternalClick(e);
      }
    },
    onFocus: onFocus
  }, label), removable && /*#__PURE__*/react.createElement("button", {
    type: "button",
    "aria-label": removeAriaLabel || 'remove',
    tabIndex: 0,
    className: "".concat(tabPrefix, "-remove"),
    onClick: function onClick(e) {
      e.stopPropagation();
      onRemoveTab(e);
    }
  }, closeIcon || editable.removeIcon || '×'));
  return renderWrapper ? renderWrapper(node) : node;
}
/* harmony default export */ var TabNavList_TabNode = (TabNode);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/index.js























var getSize = function getSize(refObj) {
  var _ref = refObj.current || {},
    _ref$offsetWidth = _ref.offsetWidth,
    offsetWidth = _ref$offsetWidth === void 0 ? 0 : _ref$offsetWidth,
    _ref$offsetHeight = _ref.offsetHeight,
    offsetHeight = _ref$offsetHeight === void 0 ? 0 : _ref$offsetHeight;
  return [offsetWidth, offsetHeight];
};

/**
 * Convert `SizeInfo` to unit value. Such as [123, 456] with `top` position get `123`
 */
var getUnitValue = function getUnitValue(size, tabPositionTopOrBottom) {
  return size[tabPositionTopOrBottom ? 0 : 1];
};
function TabNavList(props, ref) {
  var _classNames;
  var _React$useContext = react.useContext(TabContext),
    prefixCls = _React$useContext.prefixCls,
    tabs = _React$useContext.tabs;
  var className = props.className,
    style = props.style,
    id = props.id,
    animated = props.animated,
    activeKey = props.activeKey,
    rtl = props.rtl,
    extra = props.extra,
    editable = props.editable,
    locale = props.locale,
    tabPosition = props.tabPosition,
    tabBarGutter = props.tabBarGutter,
    children = props.children,
    onTabClick = props.onTabClick,
    onTabScroll = props.onTabScroll;
  var containerRef = (0,react.useRef)();
  var extraLeftRef = (0,react.useRef)();
  var extraRightRef = (0,react.useRef)();
  var tabsWrapperRef = (0,react.useRef)();
  var tabListRef = (0,react.useRef)();
  var operationsRef = (0,react.useRef)();
  var innerAddButtonRef = (0,react.useRef)();
  // const [getBtnRef, removeBtnRef] = useRefs<HTMLDivElement>();

  var tabPositionTopOrBottom = tabPosition === 'top' || tabPosition === 'bottom';
  var _useSyncState = useSyncState(0, function (next, prev) {
      if (tabPositionTopOrBottom && onTabScroll) {
        onTabScroll({
          direction: next > prev ? 'left' : 'right'
        });
      }
    }),
    _useSyncState2 = (0,slicedToArray/* default */.Z)(_useSyncState, 2),
    transformLeft = _useSyncState2[0],
    setTransformLeft = _useSyncState2[1];
  var _useSyncState3 = useSyncState(0, function (next, prev) {
      if (!tabPositionTopOrBottom && onTabScroll) {
        onTabScroll({
          direction: next > prev ? 'top' : 'bottom'
        });
      }
    }),
    _useSyncState4 = (0,slicedToArray/* default */.Z)(_useSyncState3, 2),
    transformTop = _useSyncState4[0],
    setTransformTop = _useSyncState4[1];
  var _useState = (0,react.useState)([0, 0]),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    containerExcludeExtraSize = _useState2[0],
    setContainerExcludeExtraSize = _useState2[1];
  var _useState3 = (0,react.useState)([0, 0]),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    tabContentSize = _useState4[0],
    setTabContentSize = _useState4[1];
  var _useState5 = (0,react.useState)([0, 0]),
    _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
    addSize = _useState6[0],
    setAddSize = _useState6[1];
  var _useState7 = (0,react.useState)([0, 0]),
    _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
    operationSize = _useState8[0],
    setOperationSize = _useState8[1];
  var _useUpdateState = useUpdateState(new Map()),
    _useUpdateState2 = (0,slicedToArray/* default */.Z)(_useUpdateState, 2),
    tabSizes = _useUpdateState2[0],
    setTabSizes = _useUpdateState2[1];
  var tabOffsets = useOffsets(tabs, tabSizes, tabContentSize[0]);

  // ========================== Unit =========================
  var containerExcludeExtraSizeValue = getUnitValue(containerExcludeExtraSize, tabPositionTopOrBottom);
  var tabContentSizeValue = getUnitValue(tabContentSize, tabPositionTopOrBottom);
  var addSizeValue = getUnitValue(addSize, tabPositionTopOrBottom);
  var operationSizeValue = getUnitValue(operationSize, tabPositionTopOrBottom);
  var needScroll = containerExcludeExtraSizeValue < tabContentSizeValue + addSizeValue;
  var visibleTabContentValue = needScroll ? containerExcludeExtraSizeValue - operationSizeValue : containerExcludeExtraSizeValue - addSizeValue;

  // ========================== Util =========================
  var operationsHiddenClassName = "".concat(prefixCls, "-nav-operations-hidden");
  var transformMin = 0;
  var transformMax = 0;
  if (!tabPositionTopOrBottom) {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  } else if (rtl) {
    transformMin = 0;
    transformMax = Math.max(0, tabContentSizeValue - visibleTabContentValue);
  } else {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  }
  function alignInRange(value) {
    if (value < transformMin) {
      return transformMin;
    }
    if (value > transformMax) {
      return transformMax;
    }
    return value;
  }

  // ========================= Mobile ========================
  var touchMovingRef = (0,react.useRef)();
  var _useState9 = (0,react.useState)(),
    _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
    lockAnimation = _useState10[0],
    setLockAnimation = _useState10[1];
  function doLockAnimation() {
    setLockAnimation(Date.now());
  }
  function clearTouchMoving() {
    window.clearTimeout(touchMovingRef.current);
  }
  useTouchMove(tabsWrapperRef, function (offsetX, offsetY) {
    function doMove(setState, offset) {
      setState(function (value) {
        var newValue = alignInRange(value + offset);
        return newValue;
      });
    }

    // Skip scroll if place is enough
    if (!needScroll) {
      return false;
    }
    if (tabPositionTopOrBottom) {
      doMove(setTransformLeft, offsetX);
    } else {
      doMove(setTransformTop, offsetY);
    }
    clearTouchMoving();
    doLockAnimation();
    return true;
  });
  (0,react.useEffect)(function () {
    clearTouchMoving();
    if (lockAnimation) {
      touchMovingRef.current = window.setTimeout(function () {
        setLockAnimation(0);
      }, 100);
    }
    return clearTouchMoving;
  }, [lockAnimation]);

  // ===================== Visible Range =====================
  // Render tab node & collect tab offset
  var _useVisibleRange = useVisibleRange(tabOffsets,
    // Container
    visibleTabContentValue,
    // Transform
    tabPositionTopOrBottom ? transformLeft : transformTop,
    // Tabs
    tabContentSizeValue,
    // Add
    addSizeValue,
    // Operation
    operationSizeValue, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      tabs: tabs
    })),
    _useVisibleRange2 = (0,slicedToArray/* default */.Z)(_useVisibleRange, 2),
    visibleStart = _useVisibleRange2[0],
    visibleEnd = _useVisibleRange2[1];

  // ========================= Scroll ========================
  var scrollToTab = (0,useEvent/* default */.Z)(function () {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeKey;
    var tabOffset = tabOffsets.get(key) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (tabPositionTopOrBottom) {
      // ============ Align with top & bottom ============
      var newTransform = transformLeft;

      // RTL
      if (rtl) {
        if (tabOffset.right < transformLeft) {
          newTransform = tabOffset.right;
        } else if (tabOffset.right + tabOffset.width > transformLeft + visibleTabContentValue) {
          newTransform = tabOffset.right + tabOffset.width - visibleTabContentValue;
        }
      }
      // LTR
      else if (tabOffset.left < -transformLeft) {
        newTransform = -tabOffset.left;
      } else if (tabOffset.left + tabOffset.width > -transformLeft + visibleTabContentValue) {
        newTransform = -(tabOffset.left + tabOffset.width - visibleTabContentValue);
      }
      setTransformTop(0);
      setTransformLeft(alignInRange(newTransform));
    } else {
      // ============ Align with left & right ============
      var _newTransform = transformTop;
      if (tabOffset.top < -transformTop) {
        _newTransform = -tabOffset.top;
      } else if (tabOffset.top + tabOffset.height > -transformTop + visibleTabContentValue) {
        _newTransform = -(tabOffset.top + tabOffset.height - visibleTabContentValue);
      }
      setTransformLeft(0);
      setTransformTop(alignInRange(_newTransform));
    }
  });

  // ========================== Tab ==========================
  var tabNodeStyle = {};
  if (tabPosition === 'top' || tabPosition === 'bottom') {
    tabNodeStyle[rtl ? 'marginRight' : 'marginLeft'] = tabBarGutter;
  } else {
    tabNodeStyle.marginTop = tabBarGutter;
  }
  var tabNodes = tabs.map(function (tab, i) {
    var key = tab.key;
    return /*#__PURE__*/react.createElement(TabNavList_TabNode, {
      id: id,
      prefixCls: prefixCls,
      key: key,
      tab: tab
      /* first node should not have margin left */,
      style: i === 0 ? undefined : tabNodeStyle,
      closable: tab.closable,
      editable: editable,
      active: key === activeKey,
      renderWrapper: children,
      removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
      onClick: function onClick(e) {
        onTabClick(key, e);
      },
      onFocus: function onFocus() {
        scrollToTab(key);
        doLockAnimation();
        if (!tabsWrapperRef.current) {
          return;
        }
        // Focus element will make scrollLeft change which we should reset back
        if (!rtl) {
          tabsWrapperRef.current.scrollLeft = 0;
        }
        tabsWrapperRef.current.scrollTop = 0;
      }
    });
  });

  // Update buttons records
  var updateTabSizes = function updateTabSizes() {
    return setTabSizes(function () {
      var newSizes = new Map();
      tabs.forEach(function (_ref2) {
        var _tabListRef$current;
        var key = _ref2.key;
        var btnNode = (_tabListRef$current = tabListRef.current) === null || _tabListRef$current === void 0 ? void 0 : _tabListRef$current.querySelector("[data-node-key=\"".concat(genDataNodeKey(key), "\"]"));
        if (btnNode) {
          newSizes.set(key, {
            width: btnNode.offsetWidth,
            height: btnNode.offsetHeight,
            left: btnNode.offsetLeft,
            top: btnNode.offsetTop
          });
        }
      });
      return newSizes;
    });
  };
  (0,react.useEffect)(function () {
    updateTabSizes();
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_')]);
  var onListHolderResize = useUpdate(function () {
    // Update wrapper records
    var containerSize = getSize(containerRef);
    var extraLeftSize = getSize(extraLeftRef);
    var extraRightSize = getSize(extraRightRef);
    setContainerExcludeExtraSize([containerSize[0] - extraLeftSize[0] - extraRightSize[0], containerSize[1] - extraLeftSize[1] - extraRightSize[1]]);
    var newAddSize = getSize(innerAddButtonRef);
    setAddSize(newAddSize);
    var newOperationSize = getSize(operationsRef);
    setOperationSize(newOperationSize);

    // Which includes add button size
    var tabContentFullSize = getSize(tabListRef);
    setTabContentSize([tabContentFullSize[0] - newAddSize[0], tabContentFullSize[1] - newAddSize[1]]);

    // Update buttons records
    updateTabSizes();
  });

  // ======================== Dropdown =======================
  var startHiddenTabs = tabs.slice(0, visibleStart);
  var endHiddenTabs = tabs.slice(visibleEnd + 1);
  var hiddenTabs = [].concat((0,toConsumableArray/* default */.Z)(startHiddenTabs), (0,toConsumableArray/* default */.Z)(endHiddenTabs));

  // =================== Link & Operations ===================
  var _useState11 = (0,react.useState)(),
    _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
    inkStyle = _useState12[0],
    setInkStyle = _useState12[1];
  var activeTabOffset = tabOffsets.get(activeKey);

  // Delay set ink style to avoid remove tab blink
  var inkBarRafRef = (0,react.useRef)();
  function cleanInkBarRaf() {
    raf/* default.cancel */.Z.cancel(inkBarRafRef.current);
  }
  (0,react.useEffect)(function () {
    var newInkStyle = {};
    if (activeTabOffset) {
      if (tabPositionTopOrBottom) {
        if (rtl) {
          newInkStyle.right = activeTabOffset.right;
        } else {
          newInkStyle.left = activeTabOffset.left;
        }
        newInkStyle.width = activeTabOffset.width;
      } else {
        newInkStyle.top = activeTabOffset.top;
        newInkStyle.height = activeTabOffset.height;
      }
    }
    cleanInkBarRaf();
    inkBarRafRef.current = (0,raf/* default */.Z)(function () {
      setInkStyle(newInkStyle);
    });
    return cleanInkBarRaf;
  }, [activeTabOffset, tabPositionTopOrBottom, rtl]);

  // ========================= Effect ========================
  (0,react.useEffect)(function () {
    scrollToTab();
    // eslint-disable-next-line
  }, [activeKey, transformMin, transformMax, stringify(activeTabOffset), stringify(tabOffsets), tabPositionTopOrBottom]);

  // Should recalculate when rtl changed
  (0,react.useEffect)(function () {
    onListHolderResize();
    // eslint-disable-next-line
  }, [rtl]);

  // ========================= Render ========================
  var hasDropdown = !!hiddenTabs.length;
  var wrapPrefix = "".concat(prefixCls, "-nav-wrap");
  var pingLeft;
  var pingRight;
  var pingTop;
  var pingBottom;
  if (tabPositionTopOrBottom) {
    if (rtl) {
      pingRight = transformLeft > 0;
      pingLeft = transformLeft !== transformMax;
    } else {
      pingLeft = transformLeft < 0;
      pingRight = transformLeft !== transformMin;
    }
  } else {
    pingTop = transformTop < 0;
    pingBottom = transformTop !== transformMin;
  }
  return /*#__PURE__*/react.createElement(rc_resize_observer_es/* default */.Z, {
    onResize: onListHolderResize
  }, /*#__PURE__*/react.createElement("div", {
    ref: (0,es_ref/* useComposeRef */.x1)(ref, containerRef),
    role: "tablist",
    className: classnames_default()("".concat(prefixCls, "-nav"), className),
    style: style,
    onKeyDown: function onKeyDown() {
      // No need animation when use keyboard
      doLockAnimation();
    }
  }, /*#__PURE__*/react.createElement(TabNavList_ExtraContent, {
    ref: extraLeftRef,
    position: "left",
    extra: extra,
    prefixCls: prefixCls
  }), /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(wrapPrefix, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(wrapPrefix, "-ping-left"), pingLeft), (0,defineProperty/* default */.Z)(_classNames, "".concat(wrapPrefix, "-ping-right"), pingRight), (0,defineProperty/* default */.Z)(_classNames, "".concat(wrapPrefix, "-ping-top"), pingTop), (0,defineProperty/* default */.Z)(_classNames, "".concat(wrapPrefix, "-ping-bottom"), pingBottom), _classNames)),
    ref: tabsWrapperRef
  }, /*#__PURE__*/react.createElement(rc_resize_observer_es/* default */.Z, {
    onResize: onListHolderResize
  }, /*#__PURE__*/react.createElement("div", {
    ref: tabListRef,
    className: "".concat(prefixCls, "-nav-list"),
    style: {
      transform: "translate(".concat(transformLeft, "px, ").concat(transformTop, "px)"),
      transition: lockAnimation ? 'none' : undefined
    }
  }, tabNodes, /*#__PURE__*/react.createElement(TabNavList_AddButton, {
    ref: innerAddButtonRef,
    prefixCls: prefixCls,
    locale: locale,
    editable: editable,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, tabNodes.length === 0 ? undefined : tabNodeStyle), {}, {
      visibility: hasDropdown ? 'hidden' : null
    })
  }), /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-ink-bar"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-ink-bar-animated"), animated.inkBar)),
    style: inkStyle
  })))), /*#__PURE__*/react.createElement(TabNavList_OperationNode, (0,esm_extends/* default */.Z)({}, props, {
    removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
    ref: operationsRef,
    prefixCls: prefixCls,
    tabs: hiddenTabs,
    className: !hasDropdown && operationsHiddenClassName,
    tabMoving: !!lockAnimation
  })), /*#__PURE__*/react.createElement(TabNavList_ExtraContent, {
    ref: extraRightRef,
    position: "right",
    extra: extra,
    prefixCls: prefixCls
  })));
  /* eslint-enable */
}

/* harmony default export */ var es_TabNavList = (/*#__PURE__*/react.forwardRef(TabNavList));
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/TabNavList/Wrapper.js



var Wrapper_excluded = ["renderTabBar"],
  _excluded2 = ["label", "key"];
// zombieJ: To compatible with `renderTabBar` usage.





// We have to create a TabNavList components.
function TabNavListWrapper(_ref) {
  var renderTabBar = _ref.renderTabBar,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, Wrapper_excluded);
  var _React$useContext = react.useContext(TabContext),
    tabs = _React$useContext.tabs;
  if (renderTabBar) {
    var tabNavBarProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, restProps), {}, {
      // Legacy support. We do not use this actually
      panes: tabs.map(function (_ref2) {
        var label = _ref2.label,
          key = _ref2.key,
          restTabProps = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded2);
        return /*#__PURE__*/react.createElement(TabPanelList_TabPane, (0,esm_extends/* default */.Z)({
          tab: label,
          key: key,
          tabKey: key
        }, restTabProps));
      })
    });
    return renderTabBar(tabNavBarProps, es_TabNavList);
  }
  return /*#__PURE__*/react.createElement(es_TabNavList, restProps);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(48240);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/hooks/useAnimateConfig.js



function useAnimateConfig() {
  var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    inkBar: true,
    tabPane: false
  };
  var mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: false
    };
  } else {
    mergedAnimated = (0,objectSpread2/* default */.Z)({
      inkBar: true
    }, (0,esm_typeof/* default */.Z)(animated) === 'object' ? animated : {});
  }

  // Enable tabPane animation if provide motion
  if (mergedAnimated.tabPaneMotion && mergedAnimated.tabPane === undefined) {
    mergedAnimated.tabPane = true;
  }
  if (!mergedAnimated.tabPaneMotion && mergedAnimated.tabPane) {
    if (false) {}
    mergedAnimated.tabPane = false;
  }
  return mergedAnimated;
}
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/Tabs.js






var Tabs_excluded = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName"];
// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role










/**
 * Should added antd:
 * - type
 *
 * Removed:
 * - onNextClick
 * - onPrevClick
 * - keyboard
 */

// Used for accessibility
var uuid = 0;
function Tabs(_ref, ref) {
  var _classNames;
  var id = _ref.id,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-tabs' : _ref$prefixCls,
    className = _ref.className,
    items = _ref.items,
    direction = _ref.direction,
    activeKey = _ref.activeKey,
    defaultActiveKey = _ref.defaultActiveKey,
    editable = _ref.editable,
    animated = _ref.animated,
    _ref$tabPosition = _ref.tabPosition,
    tabPosition = _ref$tabPosition === void 0 ? 'top' : _ref$tabPosition,
    tabBarGutter = _ref.tabBarGutter,
    tabBarStyle = _ref.tabBarStyle,
    tabBarExtraContent = _ref.tabBarExtraContent,
    locale = _ref.locale,
    moreIcon = _ref.moreIcon,
    moreTransitionName = _ref.moreTransitionName,
    destroyInactiveTabPane = _ref.destroyInactiveTabPane,
    renderTabBar = _ref.renderTabBar,
    onChange = _ref.onChange,
    onTabClick = _ref.onTabClick,
    onTabScroll = _ref.onTabScroll,
    getPopupContainer = _ref.getPopupContainer,
    popupClassName = _ref.popupClassName,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, Tabs_excluded);
  var tabs = react.useMemo(function () {
    return (items || []).filter(function (item) {
      return item && (0,esm_typeof/* default */.Z)(item) === 'object' && 'key' in item;
    });
  }, [items]);
  var rtl = direction === 'rtl';
  var mergedAnimated = useAnimateConfig(animated);

  // ======================== Mobile ========================
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    mobile = _useState2[0],
    setMobile = _useState2[1];
  (0,react.useEffect)(function () {
    // Only update on the client side
    setMobile((0,isMobile/* default */.Z)());
  }, []);

  // ====================== Active Key ======================
  var _useMergedState = (0,useMergedState/* default */.Z)(function () {
      var _tabs$;
      return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
    }, {
      value: activeKey,
      defaultValue: defaultActiveKey
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    mergedActiveKey = _useMergedState2[0],
    setMergedActiveKey = _useMergedState2[1];
  var _useState3 = (0,react.useState)(function () {
      return tabs.findIndex(function (tab) {
        return tab.key === mergedActiveKey;
      });
    }),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    activeIndex = _useState4[0],
    setActiveIndex = _useState4[1];

  // Reset active key if not exist anymore
  (0,react.useEffect)(function () {
    var newActiveIndex = tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });
    if (newActiveIndex === -1) {
      var _tabs$newActiveIndex;
      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0 ? void 0 : _tabs$newActiveIndex.key);
    }
    setActiveIndex(newActiveIndex);
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), mergedActiveKey, activeIndex]);

  // ===================== Accessibility ====================
  var _useMergedState3 = (0,useMergedState/* default */.Z)(null, {
      value: id
    }),
    _useMergedState4 = (0,slicedToArray/* default */.Z)(_useMergedState3, 2),
    mergedId = _useMergedState4[0],
    setMergedId = _useMergedState4[1];

  // Async generate id to avoid ssr mapping failed
  (0,react.useEffect)(function () {
    if (!id) {
      setMergedId("rc-tabs-".concat( false ? 0 : uuid));
      uuid += 1;
    }
  }, []);

  // ======================== Events ========================
  function onInternalTabClick(key, e) {
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(key, e);
    var isActiveChanged = key !== mergedActiveKey;
    setMergedActiveKey(key);
    if (isActiveChanged) {
      onChange === null || onChange === void 0 ? void 0 : onChange(key);
    }
  }

  // ======================== Render ========================
  var sharedProps = {
    id: mergedId,
    activeKey: mergedActiveKey,
    animated: mergedAnimated,
    tabPosition: tabPosition,
    rtl: rtl,
    mobile: mobile
  };
  var tabNavBar;
  var tabNavBarProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, sharedProps), {}, {
    editable: editable,
    locale: locale,
    moreIcon: moreIcon,
    moreTransitionName: moreTransitionName,
    tabBarGutter: tabBarGutter,
    onTabClick: onInternalTabClick,
    onTabScroll: onTabScroll,
    extra: tabBarExtraContent,
    style: tabBarStyle,
    panes: null,
    getPopupContainer: getPopupContainer,
    popupClassName: popupClassName
  });
  return /*#__PURE__*/react.createElement(TabContext.Provider, {
    value: {
      tabs: tabs,
      prefixCls: prefixCls
    }
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    ref: ref,
    id: id,
    className: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(tabPosition), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-mobile"), mobile), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-editable"), editable), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), rtl), _classNames), className)
  }, restProps), tabNavBar, /*#__PURE__*/react.createElement(TabNavListWrapper, (0,esm_extends/* default */.Z)({}, tabNavBarProps, {
    renderTabBar: renderTabBar
  })), /*#__PURE__*/react.createElement(TabPanelList, (0,esm_extends/* default */.Z)({
    destroyInactiveTabPane: destroyInactiveTabPane
  }, sharedProps, {
    animated: mergedAnimated
  }))));
}
var ForwardTabs = /*#__PURE__*/react.forwardRef(Tabs);
if (false) {}
/* harmony default export */ var es_Tabs = (ForwardTabs);
;// CONCATENATED MODULE: ./node_modules/rc-tabs/es/index.js

/* harmony default export */ var rc_tabs_es = (es_Tabs);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(74714);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(21631);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(53553);
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/hooks/useAnimateConfig.js



var useAnimateConfig_motion = {
  motionAppear: false,
  motionEnter: true,
  motionLeave: true
};
function useAnimateConfig_useAnimateConfig(prefixCls) {
  var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    inkBar: true,
    tabPane: false
  };
  var mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: true
    };
  } else {
    mergedAnimated = (0,esm_extends/* default */.Z)({
      inkBar: true
    }, (0,esm_typeof/* default */.Z)(animated) === 'object' ? animated : {});
  }
  if (mergedAnimated.tabPane) {
    mergedAnimated.tabPaneMotion = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, useAnimateConfig_motion), {
      motionName: (0,motion/* getTransitionName */.mL)(prefixCls, 'switch')
    });
  }
  return mergedAnimated;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(14903);
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/hooks/useLegacyItems.js

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



function filter(items) {
  return items.filter(function (item) {
    return item;
  });
}
function useLegacyItems(items, children) {
  if (items) {
    return items;
  }
   false ? 0 : void 0;
  var childrenItems = (0,toArray/* default */.Z)(children).map(function (node) {
    if ( /*#__PURE__*/react.isValidElement(node)) {
      var key = node.key,
        props = node.props;
      var _a = props || {},
        tab = _a.tab,
        restProps = __rest(_a, ["tab"]);
      var item = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
        key: String(key)
      }, restProps), {
        label: tab
      });
      return item;
    }
    return null;
  });
  return filter(childrenItems);
}
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/TabPane.js
var TabPane_TabPane = function TabPane() {
  return null;
};
if (false) {}
/* harmony default export */ var tabs_TabPane = (TabPane_TabPane);
;// CONCATENATED MODULE: ./node_modules/antd/es/tabs/index.js


var tabs_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












function tabs_Tabs(_a) {
  var type = _a.type,
    className = _a.className,
    propSize = _a.size,
    _onEdit = _a.onEdit,
    hideAdd = _a.hideAdd,
    centered = _a.centered,
    addIcon = _a.addIcon,
    children = _a.children,
    items = _a.items,
    animated = _a.animated,
    props = tabs_rest(_a, ["type", "className", "size", "onEdit", "hideAdd", "centered", "addIcon", "children", "items", "animated"]);
  var customizePrefixCls = props.prefixCls,
    _props$moreIcon = props.moreIcon,
    moreIcon = _props$moreIcon === void 0 ? /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.Z, null) : _props$moreIcon;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction,
    getPopupContainer = _React$useContext.getPopupContainer;
  var prefixCls = getPrefixCls('tabs', customizePrefixCls);
  var editable;
  if (type === 'editable-card') {
    editable = {
      onEdit: function onEdit(editType, _ref) {
        var key = _ref.key,
          event = _ref.event;
        _onEdit === null || _onEdit === void 0 ? void 0 : _onEdit(editType === 'add' ? event : key, editType);
      },
      removeIcon: /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, null),
      addIcon: addIcon || /*#__PURE__*/react.createElement(icons_PlusOutlined, null),
      showAdd: hideAdd !== true
    };
  }
  var rootPrefixCls = getPrefixCls();
   false ? 0 : void 0;
  var mergedItems = useLegacyItems(items, children);
  var mergedAnimated = useAnimateConfig_useAnimateConfig(prefixCls, animated);
  return /*#__PURE__*/react.createElement(SizeContext/* default.Consumer */.Z.Consumer, null, function (contextSize) {
    var _classNames;
    var size = propSize !== undefined ? propSize : contextSize;
    return /*#__PURE__*/react.createElement(rc_tabs_es, (0,esm_extends/* default */.Z)({
      direction: direction,
      getPopupContainer: getPopupContainer,
      moreTransitionName: "".concat(rootPrefixCls, "-slide-up")
    }, props, {
      items: mergedItems,
      className: classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(size), size), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-card"), ['card', 'editable-card'].includes(type)), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-editable-card"), type === 'editable-card'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-centered"), centered), _classNames), className),
      editable: editable,
      moreIcon: moreIcon,
      prefixCls: prefixCls,
      animated: mergedAnimated
    }));
  });
}
tabs_Tabs.TabPane = tabs_TabPane;
/* harmony default export */ var tabs = (tabs_Tabs);

/***/ })

}]);