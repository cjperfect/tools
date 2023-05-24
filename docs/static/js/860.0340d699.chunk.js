(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[860],{

/***/ 640:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7313);
/* harmony import */ var _styleChecker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5401);



/* harmony default export */ __webpack_exports__["Z"] = (function () {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_React$useState, 2),
    flexible = _React$useState2[0],
    setFlexible = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    setFlexible((0,_styleChecker__WEBPACK_IMPORTED_MODULE_2__/* .detectFlexGapSupported */ .fk)());
  }, []);
  return flexible;
});

/***/ }),

/***/ 5681:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": function() { return /* binding */ getMergedStatus; },
/* harmony export */   "Z": function() { return /* binding */ getStatusClassNames; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4942);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6123);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6927);



var InputStatuses = (0,_type__WEBPACK_IMPORTED_MODULE_1__/* .tuple */ .b)('warning', 'error', '');
function getStatusClassNames(prefixCls, status, hasFeedback) {
  var _classNames;
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()((_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-status-success"), status === 'success'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-status-warning"), status === 'warning'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-status-error"), status === 'error'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-status-validating"), status === 'validating'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-has-feedback"), hasFeedback), _classNames));
}
var getMergedStatus = function getMergedStatus(contextStatus, customStatus) {
  return customStatus || contextStatus;
};

/***/ }),

/***/ 5401:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fk": function() { return /* binding */ detectFlexGapSupported; },
/* harmony export */   "jD": function() { return /* binding */ canUseDocElement; }
/* harmony export */ });
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3233);


var canUseDocElement = function canUseDocElement() {
  return (0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)() && window.document.documentElement;
};

var flexGapSupported;
var detectFlexGapSupported = function detectFlexGapSupported() {
  if (!canUseDocElement()) {
    return false;
  }
  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  }
  // create flex container with row-gap set
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';
  // create two, elements inside it
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));
  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
  document.body.removeChild(flex);
  return flexGapSupported;
};

/***/ }),

/***/ 6479:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ wave; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(170);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(6945);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(4714);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5557);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/raf.js

var id = 0;
var ids = {};
// Support call raf with delay specified frame
function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;
  function internalCallback() {
    restFrames -= 1;
    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = (0,raf/* default */.Z)(internalCallback);
    }
  }
  ids[myId] = (0,raf/* default */.Z)(internalCallback);
  return myId;
}
wrapperRaf.cancel = function cancel(pid) {
  if (pid === undefined) return;
  raf/* default.cancel */.Z.cancel(ids[pid]);
  delete ids[pid];
};
wrapperRaf.ids = ids; // export this for test usage
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(8138);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave.js











var styleForPseudo;
// Where el is the DOM element you'd like to test for visibility
function isHidden(element) {
  if (false) {}
  return !element || element.offsetParent === null || element.hidden;
}
function getValidateContainer(nodeRoot) {
  if (nodeRoot instanceof Document) {
    return nodeRoot.body;
  }
  return Array.from(nodeRoot.childNodes).find(function (ele) {
    return (ele === null || ele === void 0 ? void 0 : ele.nodeType) === Node.ELEMENT_NODE;
  });
}
function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
var Wave = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Wave, _React$Component);
  var _super = (0,createSuper/* default */.Z)(Wave);
  function Wave() {
    var _this;
    (0,classCallCheck/* default */.Z)(this, Wave);
    _this = _super.apply(this, arguments);
    _this.containerRef = /*#__PURE__*/react.createRef();
    _this.animationStart = false;
    _this.destroyed = false;
    _this.onClick = function (node, waveColor) {
      var _a, _b;
      var _this$props = _this.props,
        insertExtraNode = _this$props.insertExtraNode,
        disabled = _this$props.disabled;
      if (disabled || !node || isHidden(node) || node.className.includes('-leave')) {
        return;
      }
      _this.extraNode = document.createElement('div');
      var _assertThisInitialize = (0,assertThisInitialized/* default */.Z)(_this),
        extraNode = _assertThisInitialize.extraNode;
      var getPrefixCls = _this.context.getPrefixCls;
      extraNode.className = "".concat(getPrefixCls(''), "-click-animating-node");
      var attributeName = _this.getAttributeName();
      node.setAttribute(attributeName, 'true');
      // Not white or transparent or grey
      if (waveColor && waveColor !== '#fff' && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && waveColor !== 'rgba(255, 255, 255, 1)' && isNotGrey(waveColor) && !/rgba\((?:\d*, ){3}0\)/.test(waveColor) &&
      // any transparent rgba color
      waveColor !== 'transparent') {
        extraNode.style.borderColor = waveColor;
        var nodeRoot = ((_a = node.getRootNode) === null || _a === void 0 ? void 0 : _a.call(node)) || node.ownerDocument;
        var nodeBody = (_b = getValidateContainer(nodeRoot)) !== null && _b !== void 0 ? _b : nodeRoot;
        styleForPseudo = (0,dynamicCSS/* updateCSS */.hq)("\n      [".concat(getPrefixCls(''), "-click-animating-without-extra-node='true']::after, .").concat(getPrefixCls(''), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(waveColor, ";\n      }"), 'antd-wave', {
          csp: _this.csp,
          attachTo: nodeBody
        });
      }
      if (insertExtraNode) {
        node.appendChild(extraNode);
      }
      ['transition', 'animation'].forEach(function (name) {
        node.addEventListener("".concat(name, "start"), _this.onTransitionStart);
        node.addEventListener("".concat(name, "end"), _this.onTransitionEnd);
      });
    };
    _this.onTransitionStart = function (e) {
      if (_this.destroyed) {
        return;
      }
      var node = _this.containerRef.current;
      if (!e || e.target !== node || _this.animationStart) {
        return;
      }
      _this.resetEffect(node);
    };
    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }
      _this.resetEffect(e.target);
    };
    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.includes('disabled')) {
        return;
      }
      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }
        _this.resetEffect(node);
        // Get wave color from target
        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') ||
        // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);
        wrapperRaf.cancel(_this.animationStartId);
        _this.animationStart = true;
        // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.
        _this.animationStartId = wrapperRaf(function () {
          _this.animationStart = false;
        }, 10);
      };
      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };
    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      if (! /*#__PURE__*/react.isValidElement(children)) return children;
      var ref = _this.containerRef;
      if ((0,es_ref/* supportRef */.Yr)(children)) {
        ref = (0,es_ref/* composeRef */.sQ)(children.ref, _this.containerRef);
      }
      return (0,reactNode/* cloneElement */.Tm)(children, {
        ref: ref
      });
    };
    return _this;
  }
  (0,createClass/* default */.Z)(Wave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.destroyed = false;
      var node = this.containerRef.current;
      if (!node || node.nodeType !== 1) {
        return;
      }
      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }
      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }
      this.destroyed = true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var getPrefixCls = this.context.getPrefixCls;
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? "".concat(getPrefixCls(''), "-click-animating") : "".concat(getPrefixCls(''), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      var _this2 = this;
      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }
      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466
      if (styleForPseudo) {
        styleForPseudo.innerHTML = '';
      }
      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }
      ['transition', 'animation'].forEach(function (name) {
        node.removeEventListener("".concat(name, "start"), _this2.onTransitionStart);
        node.removeEventListener("".concat(name, "end"), _this2.onTransitionEnd);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.C, null, this.renderWave);
    }
  }]);
  return Wave;
}(react.Component);
Wave.contextType = context/* ConfigContext */.E_;
/* harmony default export */ var wave = (Wave);

/***/ }),

/***/ 2965:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": function() { return /* binding */ convertLegacyProps; },
  "Z": function() { return /* binding */ button_button; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(205);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(4714);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(8438);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(1631);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(5531);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(8138);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__(6927);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/wave.js + 1 modules
var wave = __webpack_require__(6479);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/button-group.js


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var GroupSizeContext = /*#__PURE__*/react.createContext(undefined);
var ButtonGroup = function ButtonGroup(props) {
  var _classNames;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var customizePrefixCls = props.prefixCls,
    size = props.size,
    className = props.className,
    others = __rest(props, ["prefixCls", "size", "className"]);
  var prefixCls = getPrefixCls('btn-group', customizePrefixCls);
  // large => lg
  // small => sm
  var sizeCls = '';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    case 'middle':
    case undefined:
      break;
    default:
       false ? 0 : void 0;
  }
  var classes = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/react.createElement(GroupSizeContext.Provider, {
    value: size
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, others, {
    className: classes
  })));
};
/* harmony default export */ var button_group = (ButtonGroup);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(4470);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var es = __webpack_require__(1293);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/LoadingIcon.js



var getCollapsedWidth = function getCollapsedWidth() {
  return {
    width: 0,
    opacity: 0,
    transform: 'scale(0)'
  };
};
var getRealWidth = function getRealWidth(node) {
  return {
    width: node.scrollWidth,
    opacity: 1,
    transform: 'scale(1)'
  };
};
var LoadingIcon = function LoadingIcon(_ref) {
  var prefixCls = _ref.prefixCls,
    loading = _ref.loading,
    existIcon = _ref.existIcon;
  var visible = !!loading;
  if (existIcon) {
    return /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-loading-icon")
    }, /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null));
  }
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    visible: visible,
    // We do not really use this motionName
    motionName: "".concat(prefixCls, "-loading-icon-motion"),
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, function (_ref2, ref) {
    var className = _ref2.className,
      style = _ref2.style;
    return /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-loading-icon"),
      style: style,
      ref: ref
    }, /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
      className: className
    }));
  });
};
/* harmony default export */ var button_LoadingIcon = (LoadingIcon);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/button.js




var button_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/button-has-type */













var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
  return typeof str === 'string';
}
function isUnBorderedButtonType(type) {
  return type === 'text' || type === 'link';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child === null || child === undefined) {
    return;
  }
  var SPACE = needInserted ? ' ' : '';
  // strictNullChecks oops.
  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return (0,reactNode/* cloneElement */.Tm)(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }
  if (typeof child === 'string') {
    return isTwoCNChar(child) ? /*#__PURE__*/react.createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/react.createElement("span", null, child);
  }
  if ((0,reactNode/* isFragment */.M2)(child)) {
    return /*#__PURE__*/react.createElement("span", null, child);
  }
  return child;
}
function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  react.Children.forEach(children, function (child) {
    var type = (0,esm_typeof/* default */.Z)(child);
    var isCurrentChildPure = type === 'string' || type === 'number';
    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  // Pass to React.Children.map to auto fill key
  return react.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
}
var ButtonTypes = (0,type/* tuple */.b)('default', 'primary', 'ghost', 'dashed', 'link', 'text');
var ButtonShapes = (0,type/* tuple */.b)('default', 'circle', 'round');
var ButtonHTMLTypes = (0,type/* tuple */.b)('submit', 'button', 'reset');
function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }
  return {
    type: type
  };
}
var InternalButton = function InternalButton(props, ref) {
  var _classNames;
  var _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    customizePrefixCls = props.prefixCls,
    _props$type = props.type,
    type = _props$type === void 0 ? 'default' : _props$type,
    danger = props.danger,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'default' : _props$shape,
    customizeSize = props.size,
    customDisabled = props.disabled,
    className = props.className,
    children = props.children,
    icon = props.icon,
    _props$ghost = props.ghost,
    ghost = _props$ghost === void 0 ? false : _props$ghost,
    _props$block = props.block,
    block = _props$block === void 0 ? false : _props$block,
    _props$htmlType = props.htmlType,
    htmlType = _props$htmlType === void 0 ? 'button' : _props$htmlType,
    rest = button_rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "disabled", "className", "children", "icon", "ghost", "block", "htmlType"]);
  var size = react.useContext(SizeContext/* default */.Z);
  // ===================== Disabled =====================
  var disabled = react.useContext(DisabledContext/* default */.Z);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  var groupSize = react.useContext(GroupSizeContext);
  var _React$useState = react.useState(!!loading),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    innerLoading = _React$useState2[0],
    setLoading = _React$useState2[1];
  var _React$useState3 = react.useState(false),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    hasTwoCNChar = _React$useState4[0],
    setHasTwoCNChar = _React$useState4[1];
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    autoInsertSpaceInButton = _React$useContext.autoInsertSpaceInButton,
    direction = _React$useContext.direction;
  var buttonRef = ref || /*#__PURE__*/react.createRef();
  var isNeedInserted = function isNeedInserted() {
    return react.Children.count(children) === 1 && !icon && !isUnBorderedButtonType(type);
  };
  var fixTwoCNChar = function fixTwoCNChar() {
    // Fix for HOC usage like <FormatMessage />
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }
    var buttonText = buttonRef.current.textContent;
    if (isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  };
  // =============== Update Loading ===============
  var loadingOrDelay = typeof loading === 'boolean' ? loading : (loading === null || loading === void 0 ? void 0 : loading.delay) || true;
  react.useEffect(function () {
    var delayTimer = null;
    if (typeof loadingOrDelay === 'number') {
      delayTimer = window.setTimeout(function () {
        delayTimer = null;
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }
    return function () {
      if (delayTimer) {
        // in order to not perform a React state update on an unmounted component
        // and clear timer after 'loadingOrDelay' updated.
        window.clearTimeout(delayTimer);
        delayTimer = null;
      }
    };
  }, [loadingOrDelay]);
  react.useEffect(fixTwoCNChar, [buttonRef]);
  var handleClick = function handleClick(e) {
    var onClick = props.onClick;
    // https://github.com/ant-design/ant-design/issues/30207
    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
   false ? 0 : void 0;
   false ? 0 : void 0;
  var prefixCls = getPrefixCls('btn', customizePrefixCls);
  var autoInsertSpace = autoInsertSpaceInButton !== false;
  var _useCompactItemContex = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction),
    compactSize = _useCompactItemContex.compactSize,
    compactItemClassnames = _useCompactItemContex.compactItemClassnames;
  var sizeClassNameMap = {
    large: 'lg',
    small: 'sm',
    middle: undefined
  };
  var sizeFullname = compactSize || groupSize || customizeSize || size;
  var sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || '' : '';
  var iconType = innerLoading ? 'loading' : icon;
  var linkButtonRestProps = (0,omit/* default */.Z)(rest, ['navigate']);
  var classes = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(shape), shape !== 'default' && shape), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(type), type), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && !!iconType), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-background-ghost"), ghost && !isUnBorderedButtonType(type)), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-loading"), innerLoading), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace && !innerLoading), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-block"), block), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-dangerous"), !!danger), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), linkButtonRestProps.href !== undefined && mergedDisabled), _classNames), compactItemClassnames, className);
  var iconNode = icon && !innerLoading ? icon : /*#__PURE__*/react.createElement(button_LoadingIcon, {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!innerLoading
  });
  var kids = children || children === 0 ? spaceChildren(children, isNeedInserted() && autoInsertSpace) : null;
  if (linkButtonRestProps.href !== undefined) {
    return /*#__PURE__*/react.createElement("a", (0,esm_extends/* default */.Z)({}, linkButtonRestProps, {
      className: classes,
      onClick: handleClick,
      ref: buttonRef
    }), iconNode, kids);
  }
  var buttonNode = /*#__PURE__*/react.createElement("button", (0,esm_extends/* default */.Z)({}, rest, {
    type: htmlType,
    className: classes,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: buttonRef
  }), iconNode, kids);
  if (isUnBorderedButtonType(type)) {
    return buttonNode;
  }
  return /*#__PURE__*/react.createElement(wave/* default */.Z, {
    disabled: !!innerLoading
  }, buttonNode);
};
var Button = /*#__PURE__*/react.forwardRef(InternalButton);
if (false) {}
Button.Group = button_group;
Button.__ANT_BUTTON = true;
/* harmony default export */ var button_button = (Button);

/***/ }),

/***/ 9491:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2965);

/* harmony default export */ __webpack_exports__["Z"] = (_button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 5432:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ collapse; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(9906);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3433);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(4903);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(9767);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var es = __webpack_require__(1293);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
;// CONCATENATED MODULE: ./node_modules/rc-collapse/es/PanelContent.js



/* eslint-disable no-underscore-dangle */

/* eslint-disable react/prop-types */


var PanelContent = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classnames;
  var prefixCls = props.prefixCls,
    forceRender = props.forceRender,
    className = props.className,
    style = props.style,
    children = props.children,
    isActive = props.isActive,
    role = props.role;
  var _React$useState = react.useState(isActive || forceRender),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    rendered = _React$useState2[0],
    setRendered = _React$useState2[1];
  react.useEffect(function () {
    if (forceRender || isActive) {
      setRendered(true);
    }
  }, [forceRender, isActive]);
  if (!rendered) {
    return null;
  }
  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    className: classnames_default()("".concat(prefixCls, "-content"), (_classnames = {}, (0,defineProperty/* default */.Z)(_classnames, "".concat(prefixCls, "-content-active"), isActive), (0,defineProperty/* default */.Z)(_classnames, "".concat(prefixCls, "-content-inactive"), !isActive), _classnames), className),
    style: style,
    role: role
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-content-box")
  }, children));
});
PanelContent.displayName = 'PanelContent';
/* harmony default export */ var es_PanelContent = (PanelContent);
;// CONCATENATED MODULE: ./node_modules/rc-collapse/es/Panel.js







var _excluded = ["className", "id", "style", "prefixCls", "headerClass", "children", "isActive", "destroyInactivePanel", "accordion", "forceRender", "openMotion", "extra", "collapsible"];

/* eslint-disable react/prop-types */





var CollapsePanel = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(CollapsePanel, _React$Component);
  var _super = (0,createSuper/* default */.Z)(CollapsePanel);
  function CollapsePanel() {
    var _this;
    (0,classCallCheck/* default */.Z)(this, CollapsePanel);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.onItemClick = function () {
      var _this$props = _this.props,
        onItemClick = _this$props.onItemClick,
        panelKey = _this$props.panelKey;
      if (typeof onItemClick === 'function') {
        onItemClick(panelKey);
      }
    };
    _this.handleKeyPress = function (e) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
        _this.onItemClick();
      }
    };
    _this.renderIcon = function () {
      var _this$props2 = _this.props,
        showArrow = _this$props2.showArrow,
        expandIcon = _this$props2.expandIcon,
        prefixCls = _this$props2.prefixCls,
        collapsible = _this$props2.collapsible;
      if (!showArrow) {
        return null;
      }
      var iconNode = typeof expandIcon === 'function' ? expandIcon(_this.props) : /*#__PURE__*/react.createElement("i", {
        className: "arrow"
      });
      return iconNode && /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-expand-icon"),
        onClick: collapsible === 'header' || collapsible === 'icon' ? _this.onItemClick : null
      }, iconNode);
    };
    _this.renderTitle = function () {
      var _this$props3 = _this.props,
        header = _this$props3.header,
        prefixCls = _this$props3.prefixCls,
        collapsible = _this$props3.collapsible;
      return /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-header-text"),
        onClick: collapsible === 'header' ? _this.onItemClick : null
      }, header);
    };
    return _this;
  }
  (0,createClass/* default */.Z)(CollapsePanel, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !shallowequal_default()(this.props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _classNames2;
      var _this$props4 = this.props,
        className = _this$props4.className,
        id = _this$props4.id,
        style = _this$props4.style,
        prefixCls = _this$props4.prefixCls,
        headerClass = _this$props4.headerClass,
        children = _this$props4.children,
        isActive = _this$props4.isActive,
        destroyInactivePanel = _this$props4.destroyInactivePanel,
        accordion = _this$props4.accordion,
        forceRender = _this$props4.forceRender,
        openMotion = _this$props4.openMotion,
        extra = _this$props4.extra,
        collapsible = _this$props4.collapsible,
        rest = (0,objectWithoutProperties/* default */.Z)(_this$props4, _excluded);
      var disabled = collapsible === 'disabled';
      var collapsibleHeader = collapsible === 'header';
      var collapsibleIcon = collapsible === 'icon';
      var itemCls = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-item"), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-item-active"), isActive), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-item-disabled"), disabled), _classNames), className);
      var headerCls = classnames_default()("".concat(prefixCls, "-header"), (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, headerClass, headerClass), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-header-collapsible-only"), collapsibleHeader), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-icon-collapsible-only"), collapsibleIcon), _classNames2));
      /** header 节点属性 */

      var headerProps = {
        className: headerCls,
        'aria-expanded': isActive,
        'aria-disabled': disabled,
        onKeyPress: this.handleKeyPress
      };
      if (!collapsibleHeader && !collapsibleIcon) {
        headerProps.onClick = this.onItemClick;
        headerProps.role = accordion ? 'tab' : 'button';
        headerProps.tabIndex = disabled ? -1 : 0;
      }
      var ifExtraExist = extra !== null && extra !== undefined && typeof extra !== 'boolean'; // https://github.com/ant-design/ant-design/pull/37419#issuecomment-1238812797

      delete rest.header;
      delete rest.panelKey;
      delete rest.onItemClick;
      delete rest.showArrow;
      delete rest.expandIcon;
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, rest, {
        className: itemCls,
        style: style,
        id: id
      }), /*#__PURE__*/react.createElement("div", headerProps, this.renderIcon(), this.renderTitle(), ifExtraExist && /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra)), /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({
        visible: isActive,
        leavedClassName: "".concat(prefixCls, "-content-hidden")
      }, openMotion, {
        forceRender: forceRender,
        removeOnLeave: destroyInactivePanel
      }), function (_ref, ref) {
        var motionClassName = _ref.className,
          motionStyle = _ref.style;
        return /*#__PURE__*/react.createElement(es_PanelContent, {
          ref: ref,
          prefixCls: prefixCls,
          className: motionClassName,
          style: motionStyle,
          isActive: isActive,
          forceRender: forceRender,
          role: accordion ? 'tabpanel' : null
        }, children);
      }));
    }
  }]);
  return CollapsePanel;
}(react.Component);
CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  onItemClick: function onItemClick() {},
  headerClass: '',
  forceRender: false
};
/* harmony default export */ var Panel = (CollapsePanel);
;// CONCATENATED MODULE: ./node_modules/rc-collapse/es/Collapse.js








/* eslint-disable react/prop-types */





function getActiveKeysArray(activeKey) {
  var currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    var activeKeyType = (0,esm_typeof/* default */.Z)(currentActiveKey);
    currentActiveKey = activeKeyType === 'number' || activeKeyType === 'string' ? [currentActiveKey] : [];
  }
  return currentActiveKey.map(function (key) {
    return String(key);
  });
}
var Collapse = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Collapse, _React$Component);
  var _super = (0,createSuper/* default */.Z)(Collapse);
  function Collapse(_props) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, Collapse);
    _this = _super.call(this, _props);
    _this.onClickItem = function (key) {
      var activeKey = _this.state.activeKey;
      if (_this.props.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = (0,toConsumableArray/* default */.Z)(activeKey);
        var index = activeKey.indexOf(key);
        var isActive = index > -1;
        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }
      _this.setActiveKey(activeKey);
    };
    _this.getNewChild = function (child, index) {
      if (!child) return null;
      var activeKey = _this.state.activeKey;
      var _this$props = _this.props,
        prefixCls = _this$props.prefixCls,
        openMotion = _this$props.openMotion,
        accordion = _this$props.accordion,
        rootDestroyInactivePanel = _this$props.destroyInactivePanel,
        expandIcon = _this$props.expandIcon,
        collapsible = _this$props.collapsible; // If there is no key provide, use the panel order as default key

      var key = child.key || String(index);
      var _child$props = child.props,
        header = _child$props.header,
        headerClass = _child$props.headerClass,
        destroyInactivePanel = _child$props.destroyInactivePanel,
        childCollapsible = _child$props.collapsible;
      var isActive = false;
      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }
      var mergeCollapsible = childCollapsible !== null && childCollapsible !== void 0 ? childCollapsible : collapsible;
      var props = {
        key: key,
        panelKey: key,
        header: header,
        headerClass: headerClass,
        isActive: isActive,
        prefixCls: prefixCls,
        destroyInactivePanel: destroyInactivePanel !== null && destroyInactivePanel !== void 0 ? destroyInactivePanel : rootDestroyInactivePanel,
        openMotion: openMotion,
        accordion: accordion,
        children: child.props.children,
        onItemClick: mergeCollapsible === 'disabled' ? null : _this.onClickItem,
        expandIcon: expandIcon,
        collapsible: mergeCollapsible
      }; // https://github.com/ant-design/ant-design/issues/20479

      if (typeof child.type === 'string') {
        return child;
      }
      Object.keys(props).forEach(function (propName) {
        if (typeof props[propName] === 'undefined') {
          delete props[propName];
        }
      });
      return /*#__PURE__*/react.cloneElement(child, props);
    };
    _this.getItems = function () {
      var children = _this.props.children;
      return (0,toArray/* default */.Z)(children).map(_this.getNewChild);
    };
    _this.setActiveKey = function (activeKey) {
      if (!('activeKey' in _this.props)) {
        _this.setState({
          activeKey: activeKey
        });
      }
      _this.props.onChange(_this.props.accordion ? activeKey[0] : activeKey);
    };
    var _activeKey = _props.activeKey,
      defaultActiveKey = _props.defaultActiveKey;
    var currentActiveKey = defaultActiveKey;
    if ('activeKey' in _props) {
      currentActiveKey = _activeKey;
    }
    _this.state = {
      activeKey: getActiveKeysArray(currentActiveKey)
    };
    return _this;
  }
  (0,createClass/* default */.Z)(Collapse, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowequal_default()(this.props, nextProps) || !shallowequal_default()(this.state, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;
      var _this$props2 = this.props,
        prefixCls = _this$props2.prefixCls,
        className = _this$props2.className,
        style = _this$props2.style,
        accordion = _this$props2.accordion;
      var collapseClassName = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, prefixCls, true), (0,defineProperty/* default */.Z)(_classNames, className, !!className), _classNames));
      return /*#__PURE__*/react.createElement("div", {
        className: collapseClassName,
        style: style,
        role: accordion ? 'tablist' : null
      }, this.getItems());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var newState = {};
      if ('activeKey' in nextProps) {
        newState.activeKey = getActiveKeysArray(nextProps.activeKey);
      }
      return newState;
    }
  }]);
  return Collapse;
}(react.Component);
Collapse.defaultProps = {
  prefixCls: 'rc-collapse',
  onChange: function onChange() {},
  accordion: false,
  destroyInactivePanel: false
};
Collapse.Panel = Panel;
/* harmony default export */ var es_Collapse = (Collapse);
;// CONCATENATED MODULE: ./node_modules/rc-collapse/es/index.js

/* harmony default export */ var rc_collapse_es = (es_Collapse);
var es_Panel = es_Collapse.Panel;

// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(205);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(4714);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(3553);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(8138);
;// CONCATENATED MODULE: ./node_modules/antd/es/collapse/CollapsePanel.js







var CollapsePanel_CollapsePanel = function CollapsePanel(props) {
   false ? 0 : void 0;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$showArrow = props.showArrow,
    showArrow = _props$showArrow === void 0 ? true : _props$showArrow;
  var prefixCls = getPrefixCls('collapse', customizePrefixCls);
  var collapsePanelClassName = classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-no-arrow"), !showArrow), className);
  return /*#__PURE__*/react.createElement(rc_collapse_es.Panel, (0,esm_extends/* default */.Z)({}, props, {
    prefixCls: prefixCls,
    className: collapsePanelClassName
  }));
};
/* harmony default export */ var collapse_CollapsePanel = (CollapsePanel_CollapsePanel);
;// CONCATENATED MODULE: ./node_modules/antd/es/collapse/Collapse.js













var Collapse_Collapse = function Collapse(props) {
  var _classNames;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    ghost = props.ghost,
    _props$expandIconPosi = props.expandIconPosition,
    expandIconPosition = _props$expandIconPosi === void 0 ? 'start' : _props$expandIconPosi;
  var prefixCls = getPrefixCls('collapse', customizePrefixCls);
  // Warning if use legacy type `expandIconPosition`
   false ? 0 : void 0;
  // Align with logic position
  var mergedExpandIconPosition = react.useMemo(function () {
    if (expandIconPosition === 'left') {
      return 'start';
    }
    return expandIconPosition === 'right' ? 'end' : expandIconPosition;
  }, [expandIconPosition]);
  var renderExpandIcon = function renderExpandIcon() {
    var panelProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var expandIcon = props.expandIcon;
    var icon = expandIcon ? expandIcon(panelProps) : /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, {
      rotate: panelProps.isActive ? 90 : undefined
    });
    return (0,reactNode/* cloneElement */.Tm)(icon, function () {
      return {
        className: classnames_default()(icon.props.className, "".concat(prefixCls, "-arrow"))
      };
    });
  };
  var collapseClassName = classnames_default()("".concat(prefixCls, "-icon-position-").concat(mergedExpandIconPosition), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-borderless"), !bordered), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-ghost"), !!ghost), _classNames), className);
  var openMotion = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, motion/* default */.ZP), {
    motionAppear: false,
    leavedClassName: "".concat(prefixCls, "-content-hidden")
  });
  var getItems = function getItems() {
    var children = props.children;
    return (0,toArray/* default */.Z)(children).map(function (child, index) {
      var _a;
      if ((_a = child.props) === null || _a === void 0 ? void 0 : _a.disabled) {
        var key = child.key || String(index);
        var _child$props = child.props,
          disabled = _child$props.disabled,
          collapsible = _child$props.collapsible;
        var childProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, (0,omit/* default */.Z)(child.props, ['disabled'])), {
          key: key,
          collapsible: collapsible !== null && collapsible !== void 0 ? collapsible : disabled ? 'disabled' : undefined
        });
        return (0,reactNode/* cloneElement */.Tm)(child, childProps);
      }
      return child;
    });
  };
  return /*#__PURE__*/react.createElement(rc_collapse_es, (0,esm_extends/* default */.Z)({
    openMotion: openMotion
  }, props, {
    expandIcon: renderExpandIcon,
    prefixCls: prefixCls,
    className: collapseClassName
  }), getItems());
};
Collapse_Collapse.Panel = collapse_CollapsePanel;
/* harmony default export */ var collapse_Collapse = (Collapse_Collapse);
;// CONCATENATED MODULE: ./node_modules/antd/es/collapse/index.js

/* harmony default export */ var collapse = (collapse_Collapse);

/***/ }),

/***/ 8438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": function() { return /* binding */ DisabledContextProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7313);

var DisabledContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);
var DisabledContextProvider = function DisabledContextProvider(_ref) {
  var children = _ref.children,
    disabled = _ref.disabled;
  var originDisabled = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DisabledContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DisabledContext.Provider, {
    value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
  }, children);
};
/* harmony default export */ __webpack_exports__["Z"] = (DisabledContext);

/***/ }),

/***/ 1631:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": function() { return /* binding */ SizeContextProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7313);

var SizeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
var SizeContextProvider = function SizeContextProvider(_ref) {
  var children = _ref.children,
    size = _ref.size;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SizeContext.Consumer, null, function (originSize) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  });
};
/* harmony default export */ __webpack_exports__["Z"] = (SizeContext);

/***/ }),

/***/ 6793:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ config_provider; },
  "w6": function() { return /* binding */ globalConfig; }
});

// UNUSED EXPORTS: ConfigConsumer, ConfigContext, configConsumerProps, defaultIconPrefixCls, defaultPrefixCls

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/Context.js
var Context = __webpack_require__(8397);
// EXTERNAL MODULE: ./node_modules/rc-field-form/es/index.js + 18 modules
var es = __webpack_require__(3529);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__(727);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/locale.js
var modal_locale = __webpack_require__(3400);
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/context.js
var context = __webpack_require__(1769);
;// CONCATENATED MODULE: ./node_modules/antd/es/locale-provider/index.js





var ANT_MARK = 'internalMark';
var LocaleProvider = function LocaleProvider(props) {
  var _props$locale = props.locale,
    locale = _props$locale === void 0 ? {} : _props$locale,
    children = props.children,
    _ANT_MARK__ = props._ANT_MARK__;
  if (false) {}
  react.useEffect(function () {
    (0,modal_locale/* changeConfirmLocale */.f)(locale && locale.Modal);
    return function () {
      (0,modal_locale/* changeConfirmLocale */.f)();
    };
  }, [locale]);
  var getMemoizedContextValue = react.useMemo(function () {
    return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, locale), {
      exist: true
    });
  }, [locale]);
  return /*#__PURE__*/react.createElement(context/* default.Provider */.Z.Provider, {
    value: getMemoizedContextValue
  }, children);
};
/* harmony default export */ var locale_provider = (LocaleProvider);
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__(3267);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/default.js + 5 modules
var locale_default = __webpack_require__(1165);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(7919);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js + 1 modules
var CheckCircleOutlined = __webpack_require__(8405);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js + 1 modules
var CloseCircleOutlined = __webpack_require__(3747);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(1079);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js + 1 modules
var ExclamationCircleOutlined = __webpack_require__(4400);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js + 1 modules
var InfoCircleOutlined = __webpack_require__(4997);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-notification/es/index.js + 1 modules
var rc_notification_es = __webpack_require__(3133);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/rc-notification/es/useNotification.js
var es_useNotification = __webpack_require__(3028);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__(4714);
;// CONCATENATED MODULE: ./node_modules/antd/es/notification/hooks/useNotification.js





function createUseNotification(getNotificationInstance, getRCNoticeProps) {
  var useNotification = function useNotification() {
    // We can only get content by render
    var getPrefixCls;
    // We create a proxy to handle delay created instance
    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };
    var _useRCNotification = (0,es_useNotification/* default */.Z)(proxy),
      _useRCNotification2 = (0,slicedToArray/* default */.Z)(_useRCNotification, 2),
      hookNotify = _useRCNotification2[0],
      holder = _useRCNotification2[1];
    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('notification', customizePrefixCls);
      getNotificationInstance((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, args), {
        prefixCls: mergedPrefixCls
      }), function (_ref) {
        var prefixCls = _ref.prefixCls,
          instance = _ref.instance;
        innerInstance = instance;
        hookNotify(getRCNoticeProps(args, prefixCls));
      });
    }
    // Fill functions
    var hookApiRef = react.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error'].forEach(function (type) {
      hookApiRef.current[type] = function (args) {
        return hookApiRef.current.open((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, args), {
          type: type
        }));
      };
    });
    return [hookApiRef.current, /*#__PURE__*/react.createElement(config_provider_context/* ConfigConsumer */.C, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };
  return useNotification;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/notification/index.js



var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};










var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPrefixCls = '';
var defaultPlacement = 'topRight';
var defaultGetContainer;
var defaultCloseIcon;
var rtl = false;
var maxCount;
function setNotificationConfig(options) {
  var duration = options.duration,
    placement = options.placement,
    bottom = options.bottom,
    top = options.top,
    getContainer = options.getContainer,
    closeIcon = options.closeIcon,
    prefixCls = options.prefixCls;
  if (prefixCls !== undefined) {
    defaultPrefixCls = prefixCls;
  }
  if (duration !== undefined) {
    defaultDuration = duration;
  }
  if (placement !== undefined) {
    defaultPlacement = placement;
  } else if (options.rtl) {
    defaultPlacement = 'topLeft';
  }
  if (bottom !== undefined) {
    defaultBottom = bottom;
  }
  if (top !== undefined) {
    defaultTop = top;
  }
  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }
  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }
  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
  }
}
function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
  var style;
  switch (placement) {
    case 'top':
      style = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top: top,
        bottom: 'auto'
      };
      break;
    case 'topLeft':
      style = {
        left: 0,
        top: top,
        bottom: 'auto'
      };
      break;
    case 'topRight':
      style = {
        right: 0,
        top: top,
        bottom: 'auto'
      };
      break;
    case 'bottom':
      style = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top: 'auto',
        bottom: bottom
      };
      break;
    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
  }
  return style;
}
function getNotificationInstance(args, callback) {
  var _args$placement = args.placement,
    placement = _args$placement === void 0 ? defaultPlacement : _args$placement,
    top = args.top,
    bottom = args.bottom,
    _args$getContainer = args.getContainer,
    getContainer = _args$getContainer === void 0 ? defaultGetContainer : _args$getContainer,
    customizePrefixCls = args.prefixCls;
  var _globalConfig = globalConfig(),
    getPrefixCls = _globalConfig.getPrefixCls,
    getIconPrefixCls = _globalConfig.getIconPrefixCls;
  var prefixCls = getPrefixCls('notification', customizePrefixCls || defaultPrefixCls);
  var iconPrefixCls = getIconPrefixCls();
  var cacheKey = "".concat(prefixCls, "-").concat(placement);
  var cacheInstance = notificationInstance[cacheKey];
  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(function (instance) {
      callback({
        prefixCls: "".concat(prefixCls, "-notice"),
        iconPrefixCls: iconPrefixCls,
        instance: instance
      });
    });
    return;
  }
  var notificationClass = classnames_default()("".concat(prefixCls, "-").concat(placement), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), rtl === true));
  notificationInstance[cacheKey] = new Promise(function (resolve) {
    rc_notification_es/* default.newInstance */.Z.newInstance({
      prefixCls: prefixCls,
      className: notificationClass,
      style: getPlacementStyle(placement, top, bottom),
      getContainer: getContainer,
      maxCount: maxCount
    }, function (notification) {
      resolve(notification);
      callback({
        prefixCls: "".concat(prefixCls, "-notice"),
        iconPrefixCls: iconPrefixCls,
        instance: notification
      });
    });
  });
}
var typeToIcon = {
  success: CheckCircleOutlined/* default */.Z,
  info: InfoCircleOutlined/* default */.Z,
  error: CloseCircleOutlined/* default */.Z,
  warning: ExclamationCircleOutlined/* default */.Z
};
function getRCNoticeProps(args, prefixCls, iconPrefixCls) {
  var durationArg = args.duration,
    icon = args.icon,
    type = args.type,
    description = args.description,
    message = args.message,
    btn = args.btn,
    onClose = args.onClose,
    onClick = args.onClick,
    key = args.key,
    style = args.style,
    className = args.className,
    _args$closeIcon = args.closeIcon,
    closeIcon = _args$closeIcon === void 0 ? defaultCloseIcon : _args$closeIcon,
    props = args.props;
  var duration = durationArg === undefined ? defaultDuration : durationArg;
  var iconNode = null;
  if (icon) {
    iconNode = /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, args.icon);
  } else if (type) {
    iconNode = /*#__PURE__*/react.createElement(typeToIcon[type] || null, {
      className: "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(type)
    });
  }
  var closeIconToRender = /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
    className: "".concat(prefixCls, "-close-icon")
  }));
  var autoMarginTag = !description && iconNode ? /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-message-single-line-auto-margin")
  }) : null;
  return {
    content: /*#__PURE__*/react.createElement(config_provider, {
      iconPrefixCls: iconPrefixCls
    }, /*#__PURE__*/react.createElement("div", {
      className: iconNode ? "".concat(prefixCls, "-with-icon") : '',
      role: "alert"
    }, iconNode, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, autoMarginTag, message), /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, description), btn ? /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-btn")
    }, btn) : null)),
    duration: duration,
    closable: true,
    closeIcon: closeIconToRender,
    onClose: onClose,
    onClick: onClick,
    key: key,
    style: style || {},
    className: classnames_default()(className, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-").concat(type), !!type)),
    props: props
  };
}
function notice(args) {
  getNotificationInstance(args, function (_ref) {
    var prefixCls = _ref.prefixCls,
      iconPrefixCls = _ref.iconPrefixCls,
      instance = _ref.instance;
    instance.notice(getRCNoticeProps(args, prefixCls, iconPrefixCls));
  });
}
var api = {
  open: notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.removeNotice(key);
      });
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.destroy();
      });
      delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
    });
  }
};

['success', 'info', 'warning', 'error'].forEach(function (type) {
  api[type] = function (args) {
    return api.open((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, args), {
      type: type
    }));
  };
});
api.warn = api.warning;
api.useNotification = createUseNotification(getNotificationInstance, getRCNoticeProps);
/** @internal test Only function. Not work on production */
var getInstance = function getInstance(cacheKey) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return",  false ? 0 : null);
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
};
/* harmony default export */ var notification = (api);
// EXTERNAL MODULE: ./node_modules/@ant-design/colors/dist/index.esm.js
var index_esm = __webpack_require__(7819);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/conversion.js
var conversion = __webpack_require__(2144);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var css_color_names = __webpack_require__(4929);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/format-input.js
var format_input = __webpack_require__(6144);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/util.js
var util = __webpack_require__(3777);
;// CONCATENATED MODULE: ./node_modules/@ctrl/tinycolor/dist/module/index.js




var TinyColor = /** @class */function () {
  function TinyColor(color, opts) {
    if (color === void 0) {
      color = '';
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a;
    // If input is already a tinycolor, return itself
    if (color instanceof TinyColor) {
      // eslint-disable-next-line no-constructor-return
      return color;
    }
    if (typeof color === 'number') {
      color = (0,conversion/* numberInputToObject */.Yt)(color);
    }
    this.originalInput = color;
    var rgb = (0,format_input/* inputToRGB */.uA)(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
    this.gradientType = opts.gradientType;
    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor.prototype.isDark = function () {
    return this.getBrightness() < 128;
  };
  TinyColor.prototype.isLight = function () {
    return !this.isDark();
  };
  /**
   * Returns the perceived brightness of the color, from 0-255.
   */
  TinyColor.prototype.getBrightness = function () {
    // http://www.w3.org/TR/AERT#color-contrast
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  };
  /**
   * Returns the perceived luminance of a color, from 0-1.
   */
  TinyColor.prototype.getLuminance = function () {
    // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    var rgb = this.toRgb();
    var R;
    var G;
    var B;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R = RsRGB / 12.92;
    } else {
      // eslint-disable-next-line prefer-exponentiation-operator
      R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G = GsRGB / 12.92;
    } else {
      // eslint-disable-next-line prefer-exponentiation-operator
      G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B = BsRGB / 12.92;
    } else {
      // eslint-disable-next-line prefer-exponentiation-operator
      B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };
  /**
   * Returns the alpha value of a color, from 0-1.
   */
  TinyColor.prototype.getAlpha = function () {
    return this.a;
  };
  /**
   * Sets the alpha value on the current color.
   *
   * @param alpha - The new alpha value. The accepted range is 0-1.
   */
  TinyColor.prototype.setAlpha = function (alpha) {
    this.a = (0,util/* boundAlpha */.Yq)(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  /**
   * Returns whether the color is monochrome.
   */
  TinyColor.prototype.isMonochrome = function () {
    var s = this.toHsl().s;
    return s === 0;
  };
  /**
   * Returns the object as a HSVA object.
   */
  TinyColor.prototype.toHsv = function () {
    var hsv = (0,conversion/* rgbToHsv */.py)(this.r, this.g, this.b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this.a
    };
  };
  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */
  TinyColor.prototype.toHsvString = function () {
    var hsv = (0,conversion/* rgbToHsv */.py)(this.r, this.g, this.b);
    var h = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
  };
  /**
   * Returns the object as a HSLA object.
   */
  TinyColor.prototype.toHsl = function () {
    var hsl = (0,conversion/* rgbToHsl */.lC)(this.r, this.g, this.b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this.a
    };
  };
  /**
   * Returns the hsla values interpolated into a string with the following format:
   * "hsla(xxx, xxx, xxx, xx)".
   */
  TinyColor.prototype.toHslString = function () {
    var hsl = (0,conversion/* rgbToHsl */.lC)(this.r, this.g, this.b);
    var h = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
  };
  /**
   * Returns the hex value of the color.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  TinyColor.prototype.toHex = function (allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return (0,conversion/* rgbToHex */.vq)(this.r, this.g, this.b, allow3Char);
  };
  /**
   * Returns the hex value of the color -with a # prefixed.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  TinyColor.prototype.toHexString = function (allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return '#' + this.toHex(allow3Char);
  };
  /**
   * Returns the hex 8 value of the color.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  TinyColor.prototype.toHex8 = function (allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return (0,conversion/* rgbaToHex */.s)(this.r, this.g, this.b, this.a, allow4Char);
  };
  /**
   * Returns the hex 8 value of the color -with a # prefixed.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  TinyColor.prototype.toHex8String = function (allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return '#' + this.toHex8(allow4Char);
  };
  /**
   * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
   * @param allowShortChar will shorten hex value to 3 or 4 char if possible
   */
  TinyColor.prototype.toHexShortString = function (allowShortChar) {
    if (allowShortChar === void 0) {
      allowShortChar = false;
    }
    return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
  };
  /**
   * Returns the object as a RGBA object.
   */
  TinyColor.prototype.toRgb = function () {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  /**
   * Returns the RGBA values interpolated into a string with the following format:
   * "RGBA(xxx, xxx, xxx, xx)".
   */
  TinyColor.prototype.toRgbString = function () {
    var r = Math.round(this.r);
    var g = Math.round(this.g);
    var b = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
  };
  /**
   * Returns the object as a RGBA object.
   */
  TinyColor.prototype.toPercentageRgb = function () {
    var fmt = function fmt(x) {
      return "".concat(Math.round((0,util/* bound01 */.sh)(x, 255) * 100), "%");
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  /**
   * Returns the RGBA relative values interpolated into a string
   */
  TinyColor.prototype.toPercentageRgbString = function () {
    var rnd = function rnd(x) {
      return Math.round((0,util/* bound01 */.sh)(x, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };
  /**
   * The 'real' name of the color -if there is one.
   */
  TinyColor.prototype.toName = function () {
    if (this.a === 0) {
      return 'transparent';
    }
    if (this.a < 1) {
      return false;
    }
    var hex = '#' + (0,conversion/* rgbToHex */.vq)(this.r, this.g, this.b, false);
    for (var _i = 0, _a = Object.entries(css_color_names/* names */.R); _i < _a.length; _i++) {
      var _b = _a[_i],
        key = _b[0],
        value = _b[1];
      if (hex === value) {
        return key;
      }
    }
    return false;
  };
  TinyColor.prototype.toString = function (format) {
    var formatSet = Boolean(format);
    format = format !== null && format !== void 0 ? format : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
    if (needsAlphaFormat) {
      // Special case for "transparent", all other non-alpha formats
      // will return rgba when there is transparency.
      if (format === 'name' && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === 'rgb') {
      formattedString = this.toRgbString();
    }
    if (format === 'prgb') {
      formattedString = this.toPercentageRgbString();
    }
    if (format === 'hex' || format === 'hex6') {
      formattedString = this.toHexString();
    }
    if (format === 'hex3') {
      formattedString = this.toHexString(true);
    }
    if (format === 'hex4') {
      formattedString = this.toHex8String(true);
    }
    if (format === 'hex8') {
      formattedString = this.toHex8String();
    }
    if (format === 'name') {
      formattedString = this.toName();
    }
    if (format === 'hsl') {
      formattedString = this.toHslString();
    }
    if (format === 'hsv') {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor.prototype.toNumber = function () {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor.prototype.clone = function () {
    return new TinyColor(this.toString());
  };
  /**
   * Lighten the color a given amount. Providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.lighten = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = (0,util/* clamp01 */.V2)(hsl.l);
    return new TinyColor(hsl);
  };
  /**
   * Brighten the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.brighten = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor(rgb);
  };
  /**
   * Darken the color a given amount, from 0 to 100.
   * Providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.darken = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = (0,util/* clamp01 */.V2)(hsl.l);
    return new TinyColor(hsl);
  };
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.tint = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix('white', amount);
  };
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.shade = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix('black', amount);
  };
  /**
   * Desaturate the color a given amount, from 0 to 100.
   * Providing 100 will is the same as calling greyscale
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.desaturate = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = (0,util/* clamp01 */.V2)(hsl.s);
    return new TinyColor(hsl);
  };
  /**
   * Saturate the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.saturate = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = (0,util/* clamp01 */.V2)(hsl.s);
    return new TinyColor(hsl);
  };
  /**
   * Completely desaturates a color into greyscale.
   * Same as calling `desaturate(100)`
   */
  TinyColor.prototype.greyscale = function () {
    return this.desaturate(100);
  };
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */
  TinyColor.prototype.spin = function (amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor(hsl);
  };
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  TinyColor.prototype.mix = function (color, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor(color).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return new TinyColor(rgba);
  };
  TinyColor.prototype.analogous = function (results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor(hsl));
    }
    return ret;
  };
  /**
   * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
   */
  TinyColor.prototype.complement = function () {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor(hsl);
  };
  TinyColor.prototype.monochromatic = function (results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h = hsv.h;
    var s = hsv.s;
    var v = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor({
        h: h,
        s: s,
        v: v
      }));
      v = (v + modification) % 1;
    }
    return res;
  };
  TinyColor.prototype.splitcomplement = function () {
    var hsl = this.toHsl();
    var h = hsl.h;
    return [this, new TinyColor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), new TinyColor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  };
  /**
   * Compute how the color would appear on a background
   */
  TinyColor.prototype.onBackground = function (background) {
    var fg = this.toRgb();
    var bg = new TinyColor(background).toRgb();
    var alpha = fg.a + bg.a * (1 - fg.a);
    return new TinyColor({
      r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
      g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
      b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
      a: alpha
    });
  };
  /**
   * Alias for `polyad(3)`
   */
  TinyColor.prototype.triad = function () {
    return this.polyad(3);
  };
  /**
   * Alias for `polyad(4)`
   */
  TinyColor.prototype.tetrad = function () {
    return this.polyad(4);
  };
  /**
   * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
   * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
   */
  TinyColor.prototype.polyad = function (n) {
    var hsl = this.toHsl();
    var h = hsl.h;
    var result = [this];
    var increment = 360 / n;
    for (var i = 1; i < n; i++) {
      result.push(new TinyColor({
        h: (h + i * increment) % 360,
        s: hsl.s,
        l: hsl.l
      }));
    }
    return result;
  };
  /**
   * compare color vs current color
   */
  TinyColor.prototype.equals = function (color) {
    return this.toRgbString() === new TinyColor(color).toRgbString();
  };
  return TinyColor;
}();

// kept for backwards compatability with v1
function tinycolor(color, opts) {
  if (color === void 0) {
    color = '';
  }
  if (opts === void 0) {
    opts = {};
  }
  return new TinyColor(color, opts);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(3233);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(170);
;// CONCATENATED MODULE: ./node_modules/antd/es/config-provider/cssVariables.js
/* eslint-disable import/prefer-default-export, prefer-destructuring */





var dynamicStyleMark = "-ant-".concat(Date.now(), "-").concat(Math.random());
function getStyle(globalPrefixCls, theme) {
  var variables = {};
  var formatColor = function formatColor(color, updater) {
    var clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  var fillColor = function fillColor(colorVal, type) {
    var baseColor = new TinyColor(colorVal);
    var colorPalettes = (0,index_esm/* generate */.R_)(baseColor.toRgbString());
    variables["".concat(type, "-color")] = formatColor(baseColor);
    variables["".concat(type, "-color-disabled")] = colorPalettes[1];
    variables["".concat(type, "-color-hover")] = colorPalettes[4];
    variables["".concat(type, "-color-active")] = colorPalettes[6];
    variables["".concat(type, "-color-outline")] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables["".concat(type, "-color-deprecated-bg")] = colorPalettes[0];
    variables["".concat(type, "-color-deprecated-border")] = colorPalettes[2];
  };
  // ================ Primary Color ================
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, 'primary');
    var primaryColor = new TinyColor(theme.primaryColor);
    var primaryColors = (0,index_esm/* generate */.R_)(primaryColor.toRgbString());
    // Legacy - We should use semantic naming standard
    primaryColors.forEach(function (color, index) {
      variables["primary-".concat(index + 1)] = color;
    });
    // Deprecated
    variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, function (c) {
      return c.lighten(35);
    });
    variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, function (c) {
      return c.lighten(20);
    });
    variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, function (c) {
      return c.tint(20);
    });
    variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, function (c) {
      return c.tint(50);
    });
    variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, function (c) {
      return c.setAlpha(c.getAlpha() * 0.12);
    });
    var primaryActiveColor = new TinyColor(primaryColors[0]);
    variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, function (c) {
      return c.setAlpha(c.getAlpha() * 0.3);
    });
    variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, function (c) {
      return c.darken(2);
    });
  }
  // ================ Success Color ================
  if (theme.successColor) {
    fillColor(theme.successColor, 'success');
  }
  // ================ Warning Color ================
  if (theme.warningColor) {
    fillColor(theme.warningColor, 'warning');
  }
  // ================= Error Color =================
  if (theme.errorColor) {
    fillColor(theme.errorColor, 'error');
  }
  // ================= Info Color ==================
  if (theme.infoColor) {
    fillColor(theme.infoColor, 'info');
  }
  // Convert to css variables
  var cssList = Object.keys(variables).map(function (key) {
    return "--".concat(globalPrefixCls, "-").concat(key, ": ").concat(variables[key], ";");
  });
  return "\n  :root {\n    ".concat(cssList.join('\n'), "\n  }\n  ").trim();
}
function registerTheme(globalPrefixCls, theme) {
  var style = getStyle(globalPrefixCls, theme);
  if ((0,canUseDom/* default */.Z)()) {
    (0,dynamicCSS/* updateCSS */.hq)(style, "".concat(dynamicStyleMark, "-dynamic-theme"));
  } else {
     false ? 0 : void 0;
  }
}
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(8438);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(1631);
;// CONCATENATED MODULE: ./node_modules/antd/es/config-provider/index.js















var configConsumerProps = (/* unused pure expression or super */ null && (['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader']));
// These props is used by `useContext` directly in sub component
var PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'pagination', 'form'];
var config_provider_defaultPrefixCls = 'ant';
var defaultIconPrefixCls = 'anticon';
var globalPrefixCls;
var globalIconPrefixCls;
function getGlobalPrefixCls() {
  return globalPrefixCls || config_provider_defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || defaultIconPrefixCls;
}
var setGlobalConfig = function setGlobalConfig(_ref) {
  var prefixCls = _ref.prefixCls,
    iconPrefixCls = _ref.iconPrefixCls,
    theme = _ref.theme;
  if (prefixCls !== undefined) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== undefined) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if (theme) {
    registerTheme(getGlobalPrefixCls(), theme);
  }
};
var globalConfig = function globalConfig() {
  return {
    getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? "".concat(getGlobalPrefixCls(), "-").concat(suffixCls) : getGlobalPrefixCls();
    },
    getIconPrefixCls: getGlobalIconPrefixCls,
    getRootPrefixCls: function getRootPrefixCls(rootPrefixCls, customizePrefixCls) {
      // Customize rootPrefixCls is first priority
      if (rootPrefixCls) {
        return rootPrefixCls;
      }
      // If Global prefixCls provided, use this
      if (globalPrefixCls) {
        return globalPrefixCls;
      }
      // [Legacy] If customize prefixCls provided, we cut it to get the prefixCls
      if (customizePrefixCls && customizePrefixCls.includes('-')) {
        return customizePrefixCls.replace(/^(.*)-[^-]*$/, '$1');
      }
      // Fallback to default prefixCls
      return getGlobalPrefixCls();
    }
  };
};
var ProviderChildren = function ProviderChildren(props) {
  var _a, _b;
  var children = props.children,
    csp = props.csp,
    autoInsertSpaceInButton = props.autoInsertSpaceInButton,
    form = props.form,
    locale = props.locale,
    componentSize = props.componentSize,
    direction = props.direction,
    space = props.space,
    virtual = props.virtual,
    dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
    legacyLocale = props.legacyLocale,
    parentContext = props.parentContext,
    iconPrefixCls = props.iconPrefixCls,
    componentDisabled = props.componentDisabled;
  var getPrefixCls = react.useCallback(function (suffixCls, customizePrefixCls) {
    var prefixCls = props.prefixCls;
    if (customizePrefixCls) return customizePrefixCls;
    var mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  var config = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, parentContext), {
    csp: csp,
    autoInsertSpaceInButton: autoInsertSpaceInButton,
    locale: locale || legacyLocale,
    direction: direction,
    space: space,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    getPrefixCls: getPrefixCls
  });
  // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.
  PASSED_PROPS.forEach(function (propName) {
    var propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  // https://github.com/ant-design/ant-design/issues/27617
  var memoedConfig = (0,useMemo/* default */.Z)(function () {
    return config;
  }, config, function (prevConfig, currentConfig) {
    var prevKeys = Object.keys(prevConfig);
    var currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(function (key) {
      return prevConfig[key] !== currentConfig[key];
    });
  });
  var memoIconContextValue = react.useMemo(function () {
    return {
      prefixCls: iconPrefixCls,
      csp: csp
    };
  }, [iconPrefixCls, csp]);
  var childNode = children;
  // Additional Form provider
  var validateMessages = {};
  if (locale) {
    validateMessages = ((_a = locale.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || ((_b = locale_default/* default.Form */.Z.Form) === null || _b === void 0 ? void 0 : _b.defaultValidateMessages) || {};
  }
  if (form && form.validateMessages) {
    validateMessages = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, validateMessages), form.validateMessages);
  }
  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/react.createElement(es/* FormProvider */.RV, {
      validateMessages: validateMessages
    }, children);
  }
  if (locale) {
    childNode = /*#__PURE__*/react.createElement(locale_provider, {
      locale: locale,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = /*#__PURE__*/react.createElement(Context/* default.Provider */.Z.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /*#__PURE__*/react.createElement(SizeContext/* SizeContextProvider */.q, {
      size: componentSize
    }, childNode);
  }
  if (componentDisabled !== undefined) {
    childNode = /*#__PURE__*/react.createElement(DisabledContext/* DisabledContextProvider */.n, {
      disabled: componentDisabled
    }, childNode);
  }
  return /*#__PURE__*/react.createElement(config_provider_context/* ConfigContext.Provider */.E_.Provider, {
    value: memoedConfig
  }, childNode);
};
var ConfigProvider = function ConfigProvider(props) {
  react.useEffect(function () {
    if (props.direction) {
      message/* default.config */.ZP.config({
        rtl: props.direction === 'rtl'
      });
      notification.config({
        rtl: props.direction === 'rtl'
      });
    }
  }, [props.direction]);
  return /*#__PURE__*/react.createElement(LocaleReceiver/* default */.Z, null, function (_, __, legacyLocale) {
    return /*#__PURE__*/react.createElement(config_provider_context/* ConfigConsumer */.C, null, function (context) {
      return /*#__PURE__*/react.createElement(ProviderChildren, (0,esm_extends/* default */.Z)({
        parentContext: context,
        legacyLocale: legacyLocale
      }, props));
    });
  });
};
/** @private internal Usage. do not use in your production */
ConfigProvider.ConfigContext = config_provider_context/* ConfigContext */.E_;
ConfigProvider.SizeContext = SizeContext/* default */.Z;
ConfigProvider.config = setGlobalConfig;
/* harmony default export */ var config_provider = (ConfigProvider);

/***/ }),

/***/ 4431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RV": function() { return /* binding */ FormProvider; },
/* harmony export */   "Rk": function() { return /* binding */ FormItemPrefixContext; },
/* harmony export */   "Ux": function() { return /* binding */ NoFormStyle; },
/* harmony export */   "aM": function() { return /* binding */ FormItemInputContext; },
/* harmony export */   "q3": function() { return /* binding */ FormContext; },
/* harmony export */   "qI": function() { return /* binding */ NoStyleItemContext; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);
/* harmony import */ var rc_field_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3529);
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(205);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7313);





var FormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext({
  labelAlign: 'right',
  vertical: false,
  itemRef: function itemRef() {}
});
var NoStyleItemContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);
var FormProvider = function FormProvider(props) {
  var providerProps = (0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, ['prefixCls']);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(rc_field_form__WEBPACK_IMPORTED_MODULE_0__/* .FormProvider */ .RV, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, providerProps));
};
var FormItemPrefixContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext({
  prefixCls: ''
});
var FormItemInputContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext({});
var NoFormStyle = function NoFormStyle(_ref) {
  var children = _ref.children,
    status = _ref.status,
    override = _ref.override;
  var formItemInputContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FormItemInputContext);
  var newFormItemInputContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var newContext = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, formItemInputContext);
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};

/***/ }),

/***/ 2465:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_form; }
});

// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var context = __webpack_require__(4431);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3433);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var es = __webpack_require__(1293);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__(4714);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(3553);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/hooks/useDebounce.js


function useDebounce(value) {
  var _React$useState = react.useState(value),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    cacheValue = _React$useState2[0],
    setCacheValue = _React$useState2[1];
  react.useEffect(function () {
    var timeout = setTimeout(function () {
      setCacheValue(value);
    }, value.length ? 0 : 10);
    return function () {
      clearTimeout(timeout);
    };
  }, [value]);
  return cacheValue;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/form/ErrorList.js










var EMPTY_LIST = [];
function toErrorEntity(error, errorStatus, prefix) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return {
    key: typeof error === 'string' ? error : "".concat(prefix, "-").concat(index),
    error: error,
    errorStatus: errorStatus
  };
}
function ErrorList(_ref) {
  var help = _ref.help,
    helpStatus = _ref.helpStatus,
    _ref$errors = _ref.errors,
    errors = _ref$errors === void 0 ? EMPTY_LIST : _ref$errors,
    _ref$warnings = _ref.warnings,
    warnings = _ref$warnings === void 0 ? EMPTY_LIST : _ref$warnings,
    rootClassName = _ref.className,
    fieldId = _ref.fieldId,
    onVisibleChanged = _ref.onVisibleChanged;
  var _React$useContext = react.useContext(context/* FormItemPrefixContext */.Rk),
    prefixCls = _React$useContext.prefixCls;
  var _React$useContext2 = react.useContext(config_provider_context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext2.getPrefixCls;
  var baseClassName = "".concat(prefixCls, "-item-explain");
  var rootPrefixCls = getPrefixCls();
  // We have to debounce here again since somewhere use ErrorList directly still need no shaking
  // ref: https://github.com/ant-design/ant-design/issues/36336
  var debounceErrors = useDebounce(errors);
  var debounceWarnings = useDebounce(warnings);
  var fullKeyList = react.useMemo(function () {
    if (help !== undefined && help !== null) {
      return [toErrorEntity(help, helpStatus, 'help')];
    }
    return [].concat((0,toConsumableArray/* default */.Z)(debounceErrors.map(function (error, index) {
      return toErrorEntity(error, 'error', 'error', index);
    })), (0,toConsumableArray/* default */.Z)(debounceWarnings.map(function (warning, index) {
      return toErrorEntity(warning, 'warning', 'warning', index);
    })));
  }, [help, helpStatus, debounceErrors, debounceWarnings]);
  var helpProps = {};
  if (fieldId) {
    helpProps.id = "".concat(fieldId, "_help");
  }
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    motionDeadline: motion/* default.motionDeadline */.ZP.motionDeadline,
    motionName: "".concat(rootPrefixCls, "-show-help"),
    visible: !!fullKeyList.length,
    onVisibleChanged: onVisibleChanged
  }, function (holderProps) {
    var holderClassName = holderProps.className,
      holderStyle = holderProps.style;
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, helpProps, {
      className: classnames_default()(baseClassName, holderClassName, rootClassName),
      style: holderStyle,
      role: "alert"
    }), /*#__PURE__*/react.createElement(es/* CSSMotionList */.V, (0,esm_extends/* default */.Z)({
      keys: fullKeyList
    }, motion/* default */.ZP, {
      motionName: "".concat(rootPrefixCls, "-show-help-item"),
      component: false
    }), function (itemProps) {
      var key = itemProps.key,
        error = itemProps.error,
        errorStatus = itemProps.errorStatus,
        itemClassName = itemProps.className,
        itemStyle = itemProps.style;
      return /*#__PURE__*/react.createElement("div", {
        key: key,
        className: classnames_default()(itemClassName, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-").concat(errorStatus), errorStatus)),
        style: itemStyle
      }, error);
    }));
  });
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/rc-field-form/es/index.js + 18 modules
var rc_field_form_es = __webpack_require__(3529);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(8438);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(1631);
;// CONCATENATED MODULE: ./node_modules/compute-scroll-into-view/dist/index.mjs
function t(t) {
  return "object" == typeof t && null != t && 1 === t.nodeType;
}
function e(t, e) {
  return (!e || "hidden" !== t) && "visible" !== t && "clip" !== t;
}
function n(t, n) {
  if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
    var r = getComputedStyle(t, null);
    return e(r.overflowY, n) || e(r.overflowX, n) || function (t) {
      var e = function (t) {
        if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
        try {
          return t.ownerDocument.defaultView.frameElement;
        } catch (t) {
          return null;
        }
      }(t);
      return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
    }(t);
  }
  return !1;
}
function r(t, e, n, r, i, o, l, d) {
  return o < t && l > e || o > t && l < e ? 0 : o <= t && d <= n || l >= e && d >= n ? o - t - r : l > e && d < n || o < t && d > n ? l - e + i : 0;
}
var i = function i(e, _i) {
  var o = window,
    l = _i.scrollMode,
    d = _i.block,
    f = _i.inline,
    h = _i.boundary,
    u = _i.skipOverflowHiddenElements,
    s = "function" == typeof h ? h : function (t) {
      return t !== h;
    };
  if (!t(e)) throw new TypeError("Invalid target");
  for (var a, c, g = document.scrollingElement || document.documentElement, p = [], m = e; t(m) && s(m);) {
    if ((m = null == (c = (a = m).parentElement) ? a.getRootNode().host || null : c) === g) {
      p.push(m);
      break;
    }
    null != m && m === document.body && n(m) && !n(document.documentElement) || null != m && n(m, u) && p.push(m);
  }
  for (var w = o.visualViewport ? o.visualViewport.width : innerWidth, v = o.visualViewport ? o.visualViewport.height : innerHeight, W = window.scrollX || pageXOffset, H = window.scrollY || pageYOffset, b = e.getBoundingClientRect(), y = b.height, E = b.width, M = b.top, V = b.right, x = b.bottom, I = b.left, C = "start" === d || "nearest" === d ? M : "end" === d ? x : M + y / 2, R = "center" === f ? I + E / 2 : "end" === f ? V : I, T = [], k = 0; k < p.length; k++) {
    var B = p[k],
      D = B.getBoundingClientRect(),
      O = D.height,
      X = D.width,
      Y = D.top,
      L = D.right,
      S = D.bottom,
      j = D.left;
    if ("if-needed" === l && M >= 0 && I >= 0 && x <= v && V <= w && M >= Y && x <= S && I >= j && V <= L) return T;
    var N = getComputedStyle(B),
      q = parseInt(N.borderLeftWidth, 10),
      z = parseInt(N.borderTopWidth, 10),
      A = parseInt(N.borderRightWidth, 10),
      F = parseInt(N.borderBottomWidth, 10),
      G = 0,
      J = 0,
      K = "offsetWidth" in B ? B.offsetWidth - B.clientWidth - q - A : 0,
      P = "offsetHeight" in B ? B.offsetHeight - B.clientHeight - z - F : 0,
      Q = "offsetWidth" in B ? 0 === B.offsetWidth ? 0 : X / B.offsetWidth : 0,
      U = "offsetHeight" in B ? 0 === B.offsetHeight ? 0 : O / B.offsetHeight : 0;
    if (g === B) G = "start" === d ? C : "end" === d ? C - v : "nearest" === d ? r(H, H + v, v, z, F, H + C, H + C + y, y) : C - v / 2, J = "start" === f ? R : "center" === f ? R - w / 2 : "end" === f ? R - w : r(W, W + w, w, q, A, W + R, W + R + E, E), G = Math.max(0, G + H), J = Math.max(0, J + W);else {
      G = "start" === d ? C - Y - z : "end" === d ? C - S + F + P : "nearest" === d ? r(Y, S, O, z, F + P, C, C + y, y) : C - (Y + O / 2) + P / 2, J = "start" === f ? R - j - q : "center" === f ? R - (j + X / 2) + K / 2 : "end" === f ? R - L + A + K : r(j, L, X, q, A + K, R, R + E, E);
      var Z = B.scrollLeft,
        $ = B.scrollTop;
      C += $ - (G = Math.max(0, Math.min($ + G / U, B.scrollHeight - O / U + P))), R += Z - (J = Math.max(0, Math.min(Z + J / Q, B.scrollWidth - X / Q + K)));
    }
    T.push({
      el: B,
      top: G,
      left: J
    });
  }
  return T;
};

//# sourceMappingURL=index.mjs.map
;// CONCATENATED MODULE: ./node_modules/scroll-into-view-if-needed/es/index.js

function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }
  var canSmoothScroll = ('scrollBehavior' in document.body.style);
  actions.forEach(function (_ref) {
    var el = _ref.el,
      top = _ref.top,
      left = _ref.left;
    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}
function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }
  if (isOptionsObject(options)) {
    return options;
  }
  return {
    block: 'start',
    inline: 'nearest'
  };
}
function scrollIntoView(target, options) {
  var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);
  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(isTargetAttached ? i(target, options) : []);
  }
  if (!isTargetAttached) {
    return;
  }
  var computeOptions = getOptions(options);
  return defaultBehavior(i(target, computeOptions), computeOptions.behavior);
}
/* harmony default export */ var scroll_into_view_if_needed_es = (scrollIntoView);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/util.js
// form item name black list.  in form ,you can use form.id get the form item element.
// use object hasOwnProperty will get better performance if black list is longer.
var formItemNameBlackList = ['parentNode'];
// default form item id prefix.
var defaultItemNamePrefixCls = 'form_item';
function toArray(candidate) {
  if (candidate === undefined || candidate === false) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}
function getFieldId(namePath, formName) {
  if (!namePath.length) return undefined;
  var mergedId = namePath.join('_');
  if (formName) {
    return "".concat(formName, "_").concat(mergedId);
  }
  var isIllegalName = formItemNameBlackList.includes(mergedId);
  return isIllegalName ? "".concat(defaultItemNamePrefixCls, "_").concat(mergedId) : mergedId;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/form/hooks/useForm.js






function toNamePathStr(name) {
  var namePath = toArray(name);
  return namePath.join('_');
}
function useForm(form) {
  var _useRcForm = (0,rc_field_form_es/* useForm */.cI)(),
    _useRcForm2 = (0,slicedToArray/* default */.Z)(_useRcForm, 1),
    rcForm = _useRcForm2[0];
  var itemsRef = react.useRef({});
  var wrapForm = react.useMemo(function () {
    return form !== null && form !== void 0 ? form : (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, rcForm), {
      __INTERNAL__: {
        itemRef: function itemRef(name) {
          return function (node) {
            var namePathStr = toNamePathStr(name);
            if (node) {
              itemsRef.current[namePathStr] = node;
            } else {
              delete itemsRef.current[namePathStr];
            }
          };
        }
      },
      scrollToField: function scrollToField(name) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var namePath = toArray(name);
        var fieldId = getFieldId(namePath, wrapForm.__INTERNAL__.name);
        var node = fieldId ? document.getElementById(fieldId) : null;
        if (node) {
          scroll_into_view_if_needed_es(node, (0,esm_extends/* default */.Z)({
            scrollMode: 'if-needed',
            block: 'nearest'
          }, options));
        }
      },
      getFieldInstance: function getFieldInstance(name) {
        var namePathStr = toNamePathStr(name);
        return itemsRef.current[namePathStr];
      }
    });
  }, [form, rcForm]);
  return [wrapForm];
}
;// CONCATENATED MODULE: ./node_modules/antd/es/form/Form.js




var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









var InternalForm = function InternalForm(props, ref) {
  var _classNames;
  var contextSize = react.useContext(SizeContext/* default */.Z);
  var contextDisabled = react.useContext(DisabledContext/* default */.Z);
  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction,
    contextForm = _React$useContext.form;
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$size = props.size,
    size = _props$size === void 0 ? contextSize : _props$size,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? contextDisabled : _props$disabled,
    form = props.form,
    colon = props.colon,
    labelAlign = props.labelAlign,
    labelWrap = props.labelWrap,
    labelCol = props.labelCol,
    wrapperCol = props.wrapperCol,
    hideRequiredMark = props.hideRequiredMark,
    _props$layout = props.layout,
    layout = _props$layout === void 0 ? 'horizontal' : _props$layout,
    scrollToFirstError = props.scrollToFirstError,
    requiredMark = props.requiredMark,
    onFinishFailed = props.onFinishFailed,
    name = props.name,
    restFormProps = __rest(props, ["prefixCls", "className", "size", "disabled", "form", "colon", "labelAlign", "labelWrap", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "requiredMark", "onFinishFailed", "name"]);
  var mergedRequiredMark = (0,react.useMemo)(function () {
    if (requiredMark !== undefined) {
      return requiredMark;
    }
    if (contextForm && contextForm.requiredMark !== undefined) {
      return contextForm.requiredMark;
    }
    if (hideRequiredMark) {
      return false;
    }
    return true;
  }, [hideRequiredMark, requiredMark, contextForm]);
  var mergedColon = colon !== null && colon !== void 0 ? colon : contextForm === null || contextForm === void 0 ? void 0 : contextForm.colon;
  var prefixCls = getPrefixCls('form', customizePrefixCls);
  var formClassName = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(layout), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-hide-required-mark"), mergedRequiredMark === false), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(size), size), _classNames), className);
  var _useForm = useForm(form),
    _useForm2 = (0,slicedToArray/* default */.Z)(_useForm, 1),
    wrapForm = _useForm2[0];
  var __INTERNAL__ = wrapForm.__INTERNAL__;
  __INTERNAL__.name = name;
  var formContextValue = (0,react.useMemo)(function () {
    return {
      name: name,
      labelAlign: labelAlign,
      labelCol: labelCol,
      labelWrap: labelWrap,
      wrapperCol: wrapperCol,
      vertical: layout === 'vertical',
      colon: mergedColon,
      requiredMark: mergedRequiredMark,
      itemRef: __INTERNAL__.itemRef,
      form: wrapForm
    };
  }, [name, labelAlign, labelCol, wrapperCol, layout, mergedColon, mergedRequiredMark, wrapForm]);
  react.useImperativeHandle(ref, function () {
    return wrapForm;
  });
  var onInternalFinishFailed = function onInternalFinishFailed(errorInfo) {
    onFinishFailed === null || onFinishFailed === void 0 ? void 0 : onFinishFailed(errorInfo);
    var defaultScrollToFirstError = {
      block: 'nearest'
    };
    if (scrollToFirstError && errorInfo.errorFields.length) {
      if ((0,esm_typeof/* default */.Z)(scrollToFirstError) === 'object') {
        defaultScrollToFirstError = scrollToFirstError;
      }
      wrapForm.scrollToField(errorInfo.errorFields[0].name, defaultScrollToFirstError);
    }
  };
  return /*#__PURE__*/react.createElement(DisabledContext/* DisabledContextProvider */.n, {
    disabled: disabled
  }, /*#__PURE__*/react.createElement(SizeContext/* SizeContextProvider */.q, {
    size: size
  }, /*#__PURE__*/react.createElement(context/* FormContext.Provider */.q3.Provider, {
    value: formContextValue
  }, /*#__PURE__*/react.createElement(rc_field_form_es/* default */.ZP, (0,esm_extends/* default */.Z)({
    id: name
  }, restFormProps, {
    name: name,
    onFinishFailed: onInternalFinishFailed,
    form: wrapForm,
    className: formClassName
  })))));
};
var Form = /*#__PURE__*/react.forwardRef(InternalForm);

/* harmony default export */ var form_Form = (Form);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useState.js
var useState = __webpack_require__(1114);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var ref = __webpack_require__(6945);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/hooks/useFormItemStatus.js



var useFormItemStatus = function useFormItemStatus() {
  var _useContext = (0,react.useContext)(context/* FormItemInputContext */.aM),
    status = _useContext.status;
   false ? 0 : void 0;
  return {
    status: status
  };
};
/* harmony default export */ var hooks_useFormItemStatus = (useFormItemStatus);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(8138);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__(6927);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5557);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/hooks/useFrameState.js




function useFrameState(defaultValue) {
  var _React$useState = react.useState(defaultValue),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  var frameRef = (0,react.useRef)(null);
  var batchRef = (0,react.useRef)([]);
  var destroyRef = (0,react.useRef)(false);
  react.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
      raf/* default.cancel */.Z.cancel(frameRef.current);
      frameRef.current = null;
    };
  }, []);
  function setFrameValue(updater) {
    if (destroyRef.current) {
      return;
    }
    if (frameRef.current === null) {
      batchRef.current = [];
      frameRef.current = (0,raf/* default */.Z)(function () {
        frameRef.current = null;
        setValue(function (prevValue) {
          var current = prevValue;
          batchRef.current.forEach(function (func) {
            current = func(current);
          });
          return current;
        });
      });
    }
    batchRef.current.push(updater);
  }
  return [value, setFrameValue];
}
;// CONCATENATED MODULE: ./node_modules/antd/es/form/hooks/useItemRef.js




function useItemRef() {
  var _React$useContext = react.useContext(context/* FormContext */.q3),
    itemRef = _React$useContext.itemRef;
  var cacheRef = react.useRef({});
  function getRef(name, children) {
    var childrenRef = children && (0,esm_typeof/* default */.Z)(children) === 'object' && children.ref;
    var nameStr = name.join('_');
    if (cacheRef.current.name !== nameStr || cacheRef.current.originRef !== childrenRef) {
      cacheRef.current.name = nameStr;
      cacheRef.current.originRef = childrenRef;
      cacheRef.current.ref = (0,ref/* composeRef */.sQ)(itemRef(name), childrenRef);
    }
    return cacheRef.current.ref;
  }
  return getRef;
}
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(3390);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(9403);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(5602);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(4470);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(2846);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(205);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/hooks/useFlexGapSupport.js
var useFlexGapSupport = __webpack_require__(640);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/responsiveObserve.js


var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
var subscribers = new Map();
var subUid = -1;
var screens = {};
var responsiveObserve = {
  matchHandlers: {},
  dispatch: function dispatch(pointMap) {
    screens = pointMap;
    subscribers.forEach(function (func) {
      return func(screens);
    });
    return subscribers.size >= 1;
  },
  subscribe: function subscribe(func) {
    if (!subscribers.size) this.register();
    subUid += 1;
    subscribers.set(subUid, func);
    func(screens);
    return subUid;
  },
  unsubscribe: function unsubscribe(token) {
    subscribers["delete"](token);
    if (!subscribers.size) this.unregister();
  },
  unregister: function unregister() {
    var _this = this;
    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];
      var handler = _this.matchHandlers[matchMediaQuery];
      handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
    });
    subscribers.clear();
  },
  register: function register() {
    var _this2 = this;
    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];
      var listener = function listener(_ref) {
        var matches = _ref.matches;
        _this2.dispatch((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, screens), (0,defineProperty/* default */.Z)({}, screen, matches)));
      };
      var mql = window.matchMedia(matchMediaQuery);
      mql.addListener(listener);
      _this2.matchHandlers[matchMediaQuery] = {
        mql: mql,
        listener: listener
      };
      listener(mql);
    });
  }
};
/* harmony default export */ var _util_responsiveObserve = (responsiveObserve);
;// CONCATENATED MODULE: ./node_modules/antd/es/grid/RowContext.js

var RowContext = /*#__PURE__*/(0,react.createContext)({});
/* harmony default export */ var grid_RowContext = (RowContext);
;// CONCATENATED MODULE: ./node_modules/antd/es/grid/row.js




var row_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







var RowAligns = (0,type/* tuple */.b)('top', 'middle', 'bottom', 'stretch');
var RowJustify = (0,type/* tuple */.b)('start', 'end', 'center', 'space-around', 'space-between', 'space-evenly');
function useMergePropByScreen(oriProp, screen) {
  var _React$useState = react.useState(typeof oriProp === 'string' ? oriProp : ''),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    prop = _React$useState2[0],
    setProp = _React$useState2[1];
  var clacMergeAlignOrJustify = function clacMergeAlignOrJustify() {
    if (typeof oriProp === 'string') {
      setProp(oriProp);
    }
    if ((0,esm_typeof/* default */.Z)(oriProp) !== 'object') {
      return;
    }
    for (var i = 0; i < responsiveArray.length; i++) {
      var breakpoint = responsiveArray[i];
      // if do not match, do nothing
      if (!screen[breakpoint]) continue;
      var curVal = oriProp[breakpoint];
      if (curVal !== undefined) {
        setProp(curVal);
        return;
      }
    }
  };
  react.useEffect(function () {
    clacMergeAlignOrJustify();
  }, [JSON.stringify(oriProp), screen]);
  return prop;
}
var Row = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    justify = props.justify,
    align = props.align,
    className = props.className,
    style = props.style,
    children = props.children,
    _props$gutter = props.gutter,
    gutter = _props$gutter === void 0 ? 0 : _props$gutter,
    wrap = props.wrap,
    others = row_rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);
  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var _React$useState3 = react.useState({
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true
    }),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    screens = _React$useState4[0],
    setScreens = _React$useState4[1];
  // to save screens info when responsiveObserve callback had been call
  var _React$useState5 = react.useState({
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false
    }),
    _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
    curScreens = _React$useState6[0],
    setCurScreens = _React$useState6[1];
  // ================================== calc reponsive data ==================================
  var mergeAlign = useMergePropByScreen(align, curScreens);
  var mergeJustify = useMergePropByScreen(justify, curScreens);
  var supportFlexGap = (0,useFlexGapSupport/* default */.Z)();
  var gutterRef = react.useRef(gutter);
  // ================================== Effect ==================================
  react.useEffect(function () {
    var token = _util_responsiveObserve.subscribe(function (screen) {
      setCurScreens(screen);
      var currentGutter = gutterRef.current || 0;
      if (!Array.isArray(currentGutter) && (0,esm_typeof/* default */.Z)(currentGutter) === 'object' || Array.isArray(currentGutter) && ((0,esm_typeof/* default */.Z)(currentGutter[0]) === 'object' || (0,esm_typeof/* default */.Z)(currentGutter[1]) === 'object')) {
        setScreens(screen);
      }
    });
    return function () {
      return _util_responsiveObserve.unsubscribe(token);
    };
  }, []);
  // ================================== Render ==================================
  var getGutter = function getGutter() {
    var results = [undefined, undefined];
    var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
    normalizedGutter.forEach(function (g, index) {
      if ((0,esm_typeof/* default */.Z)(g) === 'object') {
        for (var i = 0; i < responsiveArray.length; i++) {
          var breakpoint = responsiveArray[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g;
      }
    });
    return results;
  };
  var prefixCls = getPrefixCls('row', customizePrefixCls);
  var gutters = getGutter();
  var classes = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-no-wrap"), wrap === false), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(mergeJustify), mergeJustify), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(mergeAlign), mergeAlign), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  // Add gutter related style
  var rowStyle = {};
  var horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
  var verticalGutter = gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined;
  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }
  if (supportFlexGap) {
    // Set gap direct if flex gap support
    var _gutters = (0,slicedToArray/* default */.Z)(gutters, 2);
    rowStyle.rowGap = _gutters[1];
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  }
  // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
  // So we deconstruct "gutters" variable here.
  var _gutters2 = (0,slicedToArray/* default */.Z)(gutters, 2),
    gutterH = _gutters2[0],
    gutterV = _gutters2[1];
  var rowContext = react.useMemo(function () {
    return {
      gutter: [gutterH, gutterV],
      wrap: wrap,
      supportFlexGap: supportFlexGap
    };
  }, [gutterH, gutterV, wrap, supportFlexGap]);
  return /*#__PURE__*/react.createElement(grid_RowContext.Provider, {
    value: rowContext
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, others, {
    className: classes,
    style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, rowStyle), style),
    ref: ref
  }), children));
});
if (false) {}
/* harmony default export */ var row = (Row);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/QuestionCircleOutlined.js
// This icon file is generated automatically.
var QuestionCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
      }
    }]
  },
  "name": "question-circle",
  "theme": "outlined"
};
/* harmony default export */ var asn_QuestionCircleOutlined = (QuestionCircleOutlined);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(6321);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/QuestionCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var QuestionCircleOutlined_QuestionCircleOutlined = function QuestionCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_QuestionCircleOutlined
  }));
};
QuestionCircleOutlined_QuestionCircleOutlined.displayName = 'QuestionCircleOutlined';
/* harmony default export */ var icons_QuestionCircleOutlined = (/*#__PURE__*/react.forwardRef(QuestionCircleOutlined_QuestionCircleOutlined));
;// CONCATENATED MODULE: ./node_modules/antd/es/grid/col.js



var col_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function parseFlex(flex) {
  if (typeof flex === 'number') {
    return "".concat(flex, " ").concat(flex, " auto");
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }
  return flex;
}
var sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var Col = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;
  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var _React$useContext2 = react.useContext(grid_RowContext),
    gutter = _React$useContext2.gutter,
    wrap = _React$useContext2.wrap,
    supportFlexGap = _React$useContext2.supportFlexGap;
  var customizePrefixCls = props.prefixCls,
    span = props.span,
    order = props.order,
    offset = props.offset,
    push = props.push,
    pull = props.pull,
    className = props.className,
    children = props.children,
    flex = props.flex,
    style = props.style,
    others = col_rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);
  var prefixCls = getPrefixCls('col', customizePrefixCls);
  var sizeClassObj = {};
  sizes.forEach(function (size) {
    var _extends2;
    var sizeProps = {};
    var propSize = props[size];
    if (typeof propSize === 'number') {
      sizeProps.span = propSize;
    } else if ((0,esm_typeof/* default */.Z)(propSize) === 'object') {
      sizeProps = propSize || {};
    }
    delete others[size];
    sizeClassObj = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, sizeClassObj), (_extends2 = {}, (0,defineProperty/* default */.Z)(_extends2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), (0,defineProperty/* default */.Z)(_extends2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), (0,defineProperty/* default */.Z)(_extends2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), (0,defineProperty/* default */.Z)(_extends2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), (0,defineProperty/* default */.Z)(_extends2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), (0,defineProperty/* default */.Z)(_extends2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _extends2));
  });
  var classes = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-order-").concat(order), order), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-push-").concat(push), push), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
  var mergedStyle = {};
  // Horizontal gutter use padding
  if (gutter && gutter[0] > 0) {
    var horizontalGutter = gutter[0] / 2;
    mergedStyle.paddingLeft = horizontalGutter;
    mergedStyle.paddingRight = horizontalGutter;
  }
  // Vertical gutter use padding when gap not support
  if (gutter && gutter[1] > 0 && !supportFlexGap) {
    var verticalGutter = gutter[1] / 2;
    mergedStyle.paddingTop = verticalGutter;
    mergedStyle.paddingBottom = verticalGutter;
  }
  if (flex) {
    mergedStyle.flex = parseFlex(flex);
    // Hack for Firefox to avoid size issue
    // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
    if (wrap === false && !mergedStyle.minWidth) {
      mergedStyle.minWidth = 0;
    }
  }
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, others, {
    style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, mergedStyle), style),
    className: classes,
    ref: ref
  }), children);
});
if (false) {}
/* harmony default export */ var col = (Col);
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__(3267);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/default.js + 5 modules
var locale_default = __webpack_require__(1165);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 5 modules
var es_tooltip = __webpack_require__(3084);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/FormItemLabel.js




var FormItemLabel_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








function toTooltipProps(tooltip) {
  if (!tooltip) {
    return null;
  }
  if ((0,esm_typeof/* default */.Z)(tooltip) === 'object' && ! /*#__PURE__*/react.isValidElement(tooltip)) {
    return tooltip;
  }
  return {
    title: tooltip
  };
}
var FormItemLabel = function FormItemLabel(_ref) {
  var prefixCls = _ref.prefixCls,
    label = _ref.label,
    htmlFor = _ref.htmlFor,
    labelCol = _ref.labelCol,
    labelAlign = _ref.labelAlign,
    colon = _ref.colon,
    required = _ref.required,
    requiredMark = _ref.requiredMark,
    tooltip = _ref.tooltip;
  var _useLocaleReceiver = (0,LocaleReceiver/* useLocaleReceiver */.E)('Form'),
    _useLocaleReceiver2 = (0,slicedToArray/* default */.Z)(_useLocaleReceiver, 1),
    formLocale = _useLocaleReceiver2[0];
  if (!label) return null;
  return /*#__PURE__*/react.createElement(context/* FormContext.Consumer */.q3.Consumer, {
    key: "label"
  }, function (_ref2) {
    var _classNames2;
    var vertical = _ref2.vertical,
      contextLabelAlign = _ref2.labelAlign,
      contextLabelCol = _ref2.labelCol,
      labelWrap = _ref2.labelWrap,
      contextColon = _ref2.colon;
    var _a;
    var mergedLabelCol = labelCol || contextLabelCol || {};
    var mergedLabelAlign = labelAlign || contextLabelAlign;
    var labelClsBasic = "".concat(prefixCls, "-item-label");
    var labelColClassName = classnames_default()(labelClsBasic, mergedLabelAlign === 'left' && "".concat(labelClsBasic, "-left"), mergedLabelCol.className, (0,defineProperty/* default */.Z)({}, "".concat(labelClsBasic, "-wrap"), !!labelWrap));
    var labelChildren = label;
    // Keep label is original where there should have no colon
    var computedColon = colon === true || contextColon !== false && colon !== false;
    var haveColon = computedColon && !vertical;
    // Remove duplicated user input colon
    if (haveColon && typeof label === 'string' && label.trim() !== '') {
      labelChildren = label.replace(/[:|：]\s*$/, '');
    }
    // Tooltip
    var tooltipProps = toTooltipProps(tooltip);
    if (tooltipProps) {
      var _tooltipProps$icon = tooltipProps.icon,
        icon = _tooltipProps$icon === void 0 ? /*#__PURE__*/react.createElement(icons_QuestionCircleOutlined, null) : _tooltipProps$icon,
        restTooltipProps = FormItemLabel_rest(tooltipProps, ["icon"]);
      var tooltipNode = /*#__PURE__*/react.createElement(es_tooltip/* default */.Z, (0,esm_extends/* default */.Z)({}, restTooltipProps), /*#__PURE__*/react.cloneElement(icon, {
        className: "".concat(prefixCls, "-item-tooltip"),
        title: ''
      }));
      labelChildren = /*#__PURE__*/react.createElement(react.Fragment, null, labelChildren, tooltipNode);
    }
    // Add required mark if optional
    if (requiredMark === 'optional' && !required) {
      labelChildren = /*#__PURE__*/react.createElement(react.Fragment, null, labelChildren, /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-item-optional"),
        title: ""
      }, (formLocale === null || formLocale === void 0 ? void 0 : formLocale.optional) || ((_a = locale_default/* default.Form */.Z.Form) === null || _a === void 0 ? void 0 : _a.optional)));
    }
    var labelClassName = classnames_default()((_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-required"), required), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-required-mark-optional"), requiredMark === 'optional'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-no-colon"), !computedColon), _classNames2));
    return /*#__PURE__*/react.createElement(col, (0,esm_extends/* default */.Z)({}, mergedLabelCol, {
      className: labelColClassName
    }), /*#__PURE__*/react.createElement("label", {
      htmlFor: htmlFor,
      className: labelClassName,
      title: typeof label === 'string' ? label : ''
    }, labelChildren));
  });
};
/* harmony default export */ var form_FormItemLabel = (FormItemLabel);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/FormItemInput.js






var FormItemInput = function FormItemInput(props) {
  var prefixCls = props.prefixCls,
    status = props.status,
    wrapperCol = props.wrapperCol,
    children = props.children,
    errors = props.errors,
    warnings = props.warnings,
    formItemRender = props._internalItemRender,
    extra = props.extra,
    help = props.help,
    fieldId = props.fieldId,
    marginBottom = props.marginBottom,
    onErrorVisibleChanged = props.onErrorVisibleChanged;
  var baseClassName = "".concat(prefixCls, "-item");
  var formContext = react.useContext(context/* FormContext */.q3);
  var mergedWrapperCol = wrapperCol || formContext.wrapperCol || {};
  var className = classnames_default()("".concat(baseClassName, "-control"), mergedWrapperCol.className);
  // Pass to sub FormItem should not with col info
  var subFormContext = react.useMemo(function () {
    return (0,esm_extends/* default */.Z)({}, formContext);
  }, [formContext]);
  delete subFormContext.labelCol;
  delete subFormContext.wrapperCol;
  var inputDom = /*#__PURE__*/react.createElement("div", {
    className: "".concat(baseClassName, "-control-input")
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(baseClassName, "-control-input-content")
  }, children));
  var formItemContext = react.useMemo(function () {
    return {
      prefixCls: prefixCls,
      status: status
    };
  }, [prefixCls, status]);
  var errorListDom = marginBottom !== null || errors.length || warnings.length ? /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'nowrap'
    }
  }, /*#__PURE__*/react.createElement(context/* FormItemPrefixContext.Provider */.Rk.Provider, {
    value: formItemContext
  }, /*#__PURE__*/react.createElement(ErrorList, {
    fieldId: fieldId,
    errors: errors,
    warnings: warnings,
    help: help,
    helpStatus: status,
    className: "".concat(baseClassName, "-explain-connected"),
    onVisibleChanged: onErrorVisibleChanged
  })), !!marginBottom && /*#__PURE__*/react.createElement("div", {
    style: {
      width: 0,
      height: marginBottom
    }
  })) : null;
  var extraProps = {};
  if (fieldId) {
    extraProps.id = "".concat(fieldId, "_extra");
  }
  // If extra = 0, && will goes wrong
  // 0&&error -> 0
  var extraDom = extra ? /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, extraProps, {
    className: "".concat(baseClassName, "-extra")
  }), extra) : null;
  var dom = formItemRender && formItemRender.mark === 'pro_table_render' && formItemRender.render ? formItemRender.render(props, {
    input: inputDom,
    errorList: errorListDom,
    extra: extraDom
  }) : /*#__PURE__*/react.createElement(react.Fragment, null, inputDom, errorListDom, extraDom);
  return /*#__PURE__*/react.createElement(context/* FormContext.Provider */.q3.Provider, {
    value: subFormContext
  }, /*#__PURE__*/react.createElement(col, (0,esm_extends/* default */.Z)({}, mergedWrapperCol, {
    className: className
  }), dom));
};
/* harmony default export */ var form_FormItemInput = (FormItemInput);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/FormItem/ItemHolder.js



var ItemHolder_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};













var iconMap = {
  success: CheckCircleFilled/* default */.Z,
  warning: ExclamationCircleFilled/* default */.Z,
  error: CloseCircleFilled/* default */.Z,
  validating: LoadingOutlined/* default */.Z
};
function ItemHolder(props) {
  var _itemClassName;
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    help = props.help,
    errors = props.errors,
    warnings = props.warnings,
    validateStatus = props.validateStatus,
    meta = props.meta,
    hasFeedback = props.hasFeedback,
    hidden = props.hidden,
    children = props.children,
    fieldId = props.fieldId,
    isRequired = props.isRequired,
    onSubItemMetaChange = props.onSubItemMetaChange,
    restProps = ItemHolder_rest(props, ["prefixCls", "className", "style", "help", "errors", "warnings", "validateStatus", "meta", "hasFeedback", "hidden", "children", "fieldId", "isRequired", "onSubItemMetaChange"]);
  var itemPrefixCls = "".concat(prefixCls, "-item");
  var _React$useContext = react.useContext(context/* FormContext */.q3),
    requiredMark = _React$useContext.requiredMark;
  // ======================== Margin ========================
  var itemRef = react.useRef(null);
  var debounceErrors = useDebounce(errors);
  var debounceWarnings = useDebounce(warnings);
  var hasHelp = help !== undefined && help !== null;
  var hasError = !!(hasHelp || errors.length || warnings.length);
  var _React$useState = react.useState(null),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    marginBottom = _React$useState2[0],
    setMarginBottom = _React$useState2[1];
  (0,useLayoutEffect/* default */.Z)(function () {
    if (hasError && itemRef.current) {
      var itemStyle = getComputedStyle(itemRef.current);
      setMarginBottom(parseInt(itemStyle.marginBottom, 10));
    }
  }, [hasError]);
  var onErrorVisibleChanged = function onErrorVisibleChanged(nextVisible) {
    if (!nextVisible) {
      setMarginBottom(null);
    }
  };
  // ======================== Status ========================
  var mergedValidateStatus = '';
  if (validateStatus !== undefined) {
    mergedValidateStatus = validateStatus;
  } else if (meta.validating) {
    mergedValidateStatus = 'validating';
  } else if (debounceErrors.length) {
    mergedValidateStatus = 'error';
  } else if (debounceWarnings.length) {
    mergedValidateStatus = 'warning';
  } else if (meta.touched) {
    mergedValidateStatus = 'success';
  }
  var formItemStatusContext = react.useMemo(function () {
    var feedbackIcon;
    if (hasFeedback) {
      var IconNode = mergedValidateStatus && iconMap[mergedValidateStatus];
      feedbackIcon = IconNode ? /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(itemPrefixCls, "-feedback-icon"), "".concat(itemPrefixCls, "-feedback-icon-").concat(mergedValidateStatus))
      }, /*#__PURE__*/react.createElement(IconNode, null)) : null;
    }
    return {
      status: mergedValidateStatus,
      hasFeedback: hasFeedback,
      feedbackIcon: feedbackIcon,
      isFormItemInput: true
    };
  }, [mergedValidateStatus, hasFeedback]);
  // ======================== Render ========================
  var itemClassName = (_itemClassName = {}, (0,defineProperty/* default */.Z)(_itemClassName, itemPrefixCls, true), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-with-help"), hasHelp || debounceErrors.length || debounceWarnings.length), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(className), !!className), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-has-feedback"), mergedValidateStatus && hasFeedback), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-has-success"), mergedValidateStatus === 'success'), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-has-warning"), mergedValidateStatus === 'warning'), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-has-error"), mergedValidateStatus === 'error'), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-is-validating"), mergedValidateStatus === 'validating'), (0,defineProperty/* default */.Z)(_itemClassName, "".concat(itemPrefixCls, "-hidden"), hidden), _itemClassName);
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(itemClassName),
    style: style,
    ref: itemRef
  }, /*#__PURE__*/react.createElement(row, (0,esm_extends/* default */.Z)({
    className: "".concat(itemPrefixCls, "-row")
  }, (0,omit/* default */.Z)(restProps, ['_internalItemRender', 'colon', 'dependencies', 'extra', 'fieldKey', 'getValueFromEvent', 'getValueProps', 'htmlFor', 'id', 'initialValue', 'isListField', 'label', 'labelAlign', 'labelCol', 'labelWrap', 'messageVariables', 'name', 'normalize', 'noStyle', 'preserve', 'required', 'requiredMark', 'rules', 'shouldUpdate', 'trigger', 'tooltip', 'validateFirst', 'validateTrigger', 'valuePropName', 'wrapperCol'])), /*#__PURE__*/react.createElement(form_FormItemLabel, (0,esm_extends/* default */.Z)({
    htmlFor: fieldId,
    required: isRequired,
    requiredMark: requiredMark
  }, props, {
    prefixCls: prefixCls
  })), /*#__PURE__*/react.createElement(form_FormItemInput, (0,esm_extends/* default */.Z)({}, props, meta, {
    errors: debounceErrors,
    warnings: debounceWarnings,
    prefixCls: prefixCls,
    status: mergedValidateStatus,
    help: help,
    marginBottom: marginBottom,
    onErrorVisibleChanged: onErrorVisibleChanged
  }), /*#__PURE__*/react.createElement(context/* NoStyleItemContext.Provider */.qI.Provider, {
    value: onSubItemMetaChange
  }, /*#__PURE__*/react.createElement(context/* FormItemInputContext.Provider */.aM.Provider, {
    value: formItemStatusContext
  }, children)))), !!marginBottom && /*#__PURE__*/react.createElement("div", {
    className: "".concat(itemPrefixCls, "-margin-offset"),
    style: {
      marginBottom: -marginBottom
    }
  }));
}
;// CONCATENATED MODULE: ./node_modules/antd/es/form/FormItem/index.js



















var NAME_SPLIT = '__SPLIT__';
var ValidateStatuses = (0,type/* tuple */.b)('success', 'warning', 'error', 'validating', '');
var MemoInput = /*#__PURE__*/react.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (prev, next) {
  return prev.value === next.value && prev.update === next.update && prev.childProps.length === next.childProps.length && prev.childProps.every(function (value, index) {
    return value === next.childProps[index];
  });
});
function hasValidName(name) {
  if (name === null) {
     false ? 0 : void 0;
  }
  return !(name === undefined || name === null);
}
function genEmptyMeta() {
  return {
    errors: [],
    warnings: [],
    touched: false,
    validating: false,
    name: []
  };
}
function InternalFormItem(props) {
  var name = props.name,
    noStyle = props.noStyle,
    dependencies = props.dependencies,
    customizePrefixCls = props.prefixCls,
    shouldUpdate = props.shouldUpdate,
    rules = props.rules,
    children = props.children,
    required = props.required,
    label = props.label,
    messageVariables = props.messageVariables,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? 'onChange' : _props$trigger,
    validateTrigger = props.validateTrigger,
    hidden = props.hidden;
  var _useContext = (0,react.useContext)(config_provider_context/* ConfigContext */.E_),
    getPrefixCls = _useContext.getPrefixCls;
  var _useContext2 = (0,react.useContext)(context/* FormContext */.q3),
    formName = _useContext2.name;
  var isRenderProps = typeof children === 'function';
  var notifyParentMetaChange = (0,react.useContext)(context/* NoStyleItemContext */.qI);
  var _useContext3 = (0,react.useContext)(rc_field_form_es/* FieldContext */.zb),
    contextValidateTrigger = _useContext3.validateTrigger;
  var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : contextValidateTrigger;
  var hasName = hasValidName(name);
  var prefixCls = getPrefixCls('form', customizePrefixCls);
  // ========================= MISC =========================
  // Get `noStyle` required info
  var listContext = react.useContext(rc_field_form_es/* ListContext */.ZM);
  var fieldKeyPathRef = react.useRef();
  // ======================== Errors ========================
  // >>>>> Collect sub field errors
  var _useFrameState = useFrameState({}),
    _useFrameState2 = (0,slicedToArray/* default */.Z)(_useFrameState, 2),
    subFieldErrors = _useFrameState2[0],
    setSubFieldErrors = _useFrameState2[1];
  // >>>>> Current field errors
  var _useState = (0,useState/* default */.Z)(function () {
      return genEmptyMeta();
    }),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    meta = _useState2[0],
    setMeta = _useState2[1];
  var onMetaChange = function onMetaChange(nextMeta) {
    // This keyInfo is not correct when field is removed
    // Since origin keyManager no longer keep the origin key anymore
    // Which means we need cache origin one and reuse when removed
    var keyInfo = listContext === null || listContext === void 0 ? void 0 : listContext.getKey(nextMeta.name);
    // Destroy will reset all the meta
    setMeta(nextMeta.destroy ? genEmptyMeta() : nextMeta, true);
    // Bump to parent since noStyle
    if (noStyle && notifyParentMetaChange) {
      var namePath = nextMeta.name;
      if (!nextMeta.destroy) {
        if (keyInfo !== undefined) {
          var _keyInfo = (0,slicedToArray/* default */.Z)(keyInfo, 2),
            fieldKey = _keyInfo[0],
            restPath = _keyInfo[1];
          namePath = [fieldKey].concat((0,toConsumableArray/* default */.Z)(restPath));
          fieldKeyPathRef.current = namePath;
        }
      } else {
        // Use origin cache data
        namePath = fieldKeyPathRef.current || namePath;
      }
      notifyParentMetaChange(nextMeta, namePath);
    }
  };
  // >>>>> Collect noStyle Field error to the top FormItem
  var onSubItemMetaChange = function onSubItemMetaChange(subMeta, uniqueKeys) {
    // Only `noStyle` sub item will trigger
    setSubFieldErrors(function (prevSubFieldErrors) {
      var clone = (0,esm_extends/* default */.Z)({}, prevSubFieldErrors);
      // name: ['user', 1] + key: [4] = ['user', 4]
      var mergedNamePath = [].concat((0,toConsumableArray/* default */.Z)(subMeta.name.slice(0, -1)), (0,toConsumableArray/* default */.Z)(uniqueKeys));
      var mergedNameKey = mergedNamePath.join(NAME_SPLIT);
      if (subMeta.destroy) {
        // Remove
        delete clone[mergedNameKey];
      } else {
        // Update
        clone[mergedNameKey] = subMeta;
      }
      return clone;
    });
  };
  // >>>>> Get merged errors
  var _React$useMemo = react.useMemo(function () {
      var errorList = (0,toConsumableArray/* default */.Z)(meta.errors);
      var warningList = (0,toConsumableArray/* default */.Z)(meta.warnings);
      Object.values(subFieldErrors).forEach(function (subFieldError) {
        errorList.push.apply(errorList, (0,toConsumableArray/* default */.Z)(subFieldError.errors || []));
        warningList.push.apply(warningList, (0,toConsumableArray/* default */.Z)(subFieldError.warnings || []));
      });
      return [errorList, warningList];
    }, [subFieldErrors, meta.errors, meta.warnings]),
    _React$useMemo2 = (0,slicedToArray/* default */.Z)(_React$useMemo, 2),
    mergedErrors = _React$useMemo2[0],
    mergedWarnings = _React$useMemo2[1];
  // ===================== Children Ref =====================
  var getItemRef = useItemRef();
  // ======================== Render ========================
  function renderLayout(baseChildren, fieldId, isRequired) {
    if (noStyle && !hidden) {
      return baseChildren;
    }
    return /*#__PURE__*/react.createElement(ItemHolder, (0,esm_extends/* default */.Z)({
      key: "row"
    }, props, {
      prefixCls: prefixCls,
      fieldId: fieldId,
      isRequired: isRequired,
      errors: mergedErrors,
      warnings: mergedWarnings,
      meta: meta,
      onSubItemMetaChange: onSubItemMetaChange
    }), baseChildren);
  }
  if (!hasName && !isRenderProps && !dependencies) {
    return renderLayout(children);
  }
  var variables = {};
  if (typeof label === 'string') {
    variables.label = label;
  } else if (name) {
    variables.label = String(name);
  }
  if (messageVariables) {
    variables = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, variables), messageVariables);
  }
  // >>>>> With Field
  return /*#__PURE__*/react.createElement(rc_field_form_es/* Field */.gN, (0,esm_extends/* default */.Z)({}, props, {
    messageVariables: variables,
    trigger: trigger,
    validateTrigger: mergedValidateTrigger,
    onMetaChange: onMetaChange
  }), function (control, renderMeta, context) {
    var mergedName = toArray(name).length && renderMeta ? renderMeta.name : [];
    var fieldId = getFieldId(mergedName, formName);
    var isRequired = required !== undefined ? required : !!(rules && rules.some(function (rule) {
      if (rule && (0,esm_typeof/* default */.Z)(rule) === 'object' && rule.required && !rule.warningOnly) {
        return true;
      }
      if (typeof rule === 'function') {
        var ruleEntity = rule(context);
        return ruleEntity && ruleEntity.required && !ruleEntity.warningOnly;
      }
      return false;
    }));
    // ======================= Children =======================
    var mergedControl = (0,esm_extends/* default */.Z)({}, control);
    var childNode = null;
     false ? 0 : void 0;
    if (Array.isArray(children) && hasName) {
       false ? 0 : void 0;
      childNode = children;
    } else if (isRenderProps && (!(shouldUpdate || dependencies) || hasName)) {
       false ? 0 : void 0;
       false ? 0 : void 0;
    } else if (dependencies && !isRenderProps && !hasName) {
       false ? 0 : void 0;
    } else if ((0,reactNode/* isValidElement */.l$)(children)) {
       false ? 0 : void 0;
      var childProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, children.props), mergedControl);
      if (!childProps.id) {
        childProps.id = fieldId;
      }
      if (props.help || mergedErrors.length > 0 || mergedWarnings.length > 0 || props.extra) {
        var describedbyArr = [];
        if (props.help || mergedErrors.length > 0) {
          describedbyArr.push("".concat(fieldId, "_help"));
        }
        if (props.extra) {
          describedbyArr.push("".concat(fieldId, "_extra"));
        }
        childProps['aria-describedby'] = describedbyArr.join(' ');
      }
      if (mergedErrors.length > 0) {
        childProps['aria-invalid'] = 'true';
      }
      if (isRequired) {
        childProps['aria-required'] = 'true';
      }
      if ((0,ref/* supportRef */.Yr)(children)) {
        childProps.ref = getItemRef(mergedName, children);
      }
      // We should keep user origin event handler
      var triggers = new Set([].concat((0,toConsumableArray/* default */.Z)(toArray(trigger)), (0,toConsumableArray/* default */.Z)(toArray(mergedValidateTrigger))));
      triggers.forEach(function (eventName) {
        childProps[eventName] = function () {
          var _a2, _c2;
          var _a, _b, _c;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          (_a = mergedControl[eventName]) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [mergedControl].concat(args));
          (_c = (_b = children.props)[eventName]) === null || _c === void 0 ? void 0 : (_c2 = _c).call.apply(_c2, [_b].concat(args));
        };
      });
      // List of props that need to be watched for changes -> if changes are detected in MemoInput -> rerender
      var watchingChildProps = [childProps['aria-required'], childProps['aria-invalid'], childProps['aria-describedby']];
      childNode = /*#__PURE__*/react.createElement(MemoInput, {
        value: mergedControl[props.valuePropName || 'value'],
        update: children,
        childProps: watchingChildProps
      }, (0,reactNode/* cloneElement */.Tm)(children, childProps));
    } else if (isRenderProps && (shouldUpdate || dependencies) && !hasName) {
      childNode = children(context);
    } else {
       false ? 0 : void 0;
      childNode = children;
    }
    return renderLayout(childNode, fieldId, isRequired);
  });
}
var FormItem = InternalFormItem;
FormItem.useStatus = hooks_useFormItemStatus;
/* harmony default export */ var form_FormItem = (FormItem);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/FormList.js

var FormList_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var FormList = function FormList(_a) {
  var customizePrefixCls = _a.prefixCls,
    children = _a.children,
    props = FormList_rest(_a, ["prefixCls", "children"]);
   false ? 0 : void 0;
  var _React$useContext = react.useContext(config_provider_context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('form', customizePrefixCls);
  var contextValue = react.useMemo(function () {
    return {
      prefixCls: prefixCls,
      status: 'error'
    };
  }, [prefixCls]);
  return /*#__PURE__*/react.createElement(rc_field_form_es/* List */.aV, (0,esm_extends/* default */.Z)({}, props), function (fields, operation, meta) {
    return /*#__PURE__*/react.createElement(context/* FormItemPrefixContext.Provider */.Rk.Provider, {
      value: contextValue
    }, children(fields.map(function (field) {
      return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, field), {
        fieldKey: field.key
      });
    }), operation, {
      errors: meta.errors,
      warnings: meta.warnings
    }));
  });
};
/* harmony default export */ var form_FormList = (FormList);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/hooks/useFormInstance.js


function useFormInstance() {
  var _useContext = (0,react.useContext)(context/* FormContext */.q3),
    form = _useContext.form;
  return form;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/form/index.js







var es_form_Form = form_Form;
es_form_Form.Item = form_FormItem;
es_form_Form.List = form_FormList;
es_form_Form.ErrorList = ErrorList;
es_form_Form.useForm = useForm;
es_form_Form.useFormInstance = useFormInstance;
es_form_Form.useWatch = rc_field_form_es/* useWatch */.qo;
es_form_Form.Provider = context/* FormProvider */.RV;
es_form_Form.create = function () {
   false ? 0 : void 0;
};
/* harmony default export */ var es_form = (es_form_Form);

/***/ }),

/***/ 8482:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ input; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(4714);
// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var form_context = __webpack_require__(4431);
;// CONCATENATED MODULE: ./node_modules/antd/es/input/Group.js







var Group = function Group(props) {
  var _classNames;
  var _useContext = (0,react.useContext)(context/* ConfigContext */.E_),
    getPrefixCls = _useContext.getPrefixCls,
    direction = _useContext.direction;
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className;
  var prefixCls = getPrefixCls('input-group', customizePrefixCls);
  var cls = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-lg"), props.size === 'large'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-sm"), props.size === 'small'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-compact"), props.compact), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  var formItemContext = (0,react.useContext)(form_context/* FormItemInputContext */.aM);
  var groupFormItemContext = (0,react.useMemo)(function () {
    return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, formItemContext), {
      isFormItemInput: false
    });
  }, [formItemContext]);
  return /*#__PURE__*/react.createElement("span", {
    className: cls,
    style: props.style,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onFocus: props.onFocus,
    onBlur: props.onBlur
  }, /*#__PURE__*/react.createElement(form_context/* FormItemInputContext.Provider */.aM.Provider, {
    value: groupFormItemContext
  }, props.children));
};
/* harmony default export */ var input_Group = (Group);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(9403);
;// CONCATENATED MODULE: ./node_modules/rc-input/es/utils/commonUtils.js
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  var event = e;
  if (e.type === 'click') {
    // Clone a new target for event.
    // Avoid the following usage, the setQuery method gets the original value.
    //
    // const [query, setQuery] = React.useState('');
    // <Input
    //   allowClear
    //   value={query}
    //   onChange={(e)=> {
    //     setQuery((prevStatus) => e.target.value);
    //   }}
    // />
    var currentTarget = target.cloneNode(true); // click clear icon

    event = Object.create(e, {
      target: {
        value: currentTarget
      },
      currentTarget: {
        value: currentTarget
      }
    });
    currentTarget.value = '';
    onChange(event);
    return;
  } // Trigger by composition event, this means we need force change the input value

  if (targetValue !== undefined) {
    event = Object.create(e, {
      target: {
        value: target
      },
      currentTarget: {
        value: target
      }
    });
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}
function triggerFocus(element, option) {
  if (!element) return;
  element.focus(option); // Selection content

  var _ref = option || {},
    cursor = _ref.cursor;
  if (cursor) {
    var len = element.value.length;
    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;
      case 'end':
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return String(value);
}
;// CONCATENATED MODULE: ./node_modules/rc-input/es/BaseInput.js





var BaseInput = function BaseInput(props) {
  var inputElement = props.inputElement,
    prefixCls = props.prefixCls,
    prefix = props.prefix,
    suffix = props.suffix,
    addonBefore = props.addonBefore,
    addonAfter = props.addonAfter,
    className = props.className,
    style = props.style,
    affixWrapperClassName = props.affixWrapperClassName,
    groupClassName = props.groupClassName,
    wrapperClassName = props.wrapperClassName,
    disabled = props.disabled,
    readOnly = props.readOnly,
    focused = props.focused,
    triggerFocus = props.triggerFocus,
    allowClear = props.allowClear,
    value = props.value,
    handleReset = props.handleReset,
    hidden = props.hidden;
  var containerRef = (0,react.useRef)(null);
  var onInputClick = function onInputClick(e) {
    var _containerRef$current;
    if ((_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(e.target)) {
      triggerFocus === null || triggerFocus === void 0 ? void 0 : triggerFocus();
    }
  }; // ================== Clear Icon ================== //

  var getClearIcon = function getClearIcon() {
    var _classNames;
    if (!allowClear) {
      return null;
    }
    var needClear = !disabled && !readOnly && value;
    var clearIconCls = "".concat(prefixCls, "-clear-icon");
    var iconNode = (0,esm_typeof/* default */.Z)(allowClear) === 'object' && allowClear !== null && allowClear !== void 0 && allowClear.clearIcon ? allowClear.clearIcon : '✖';
    return /*#__PURE__*/react.createElement("span", {
      onClick: handleReset // Do not trigger onBlur when clear input
      // https://github.com/ant-design/ant-design/issues/31200
      ,

      onMouseDown: function onMouseDown(e) {
        return e.preventDefault();
      },
      className: classnames_default()(clearIconCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(clearIconCls, "-hidden"), !needClear), (0,defineProperty/* default */.Z)(_classNames, "".concat(clearIconCls, "-has-suffix"), !!suffix), _classNames)),
      role: "button",
      tabIndex: -1
    }, iconNode);
  };
  var element = /*#__PURE__*/(0,react.cloneElement)(inputElement, {
    value: value,
    hidden: hidden
  }); // ================== Prefix & Suffix ================== //

  if (hasPrefixSuffix(props)) {
    var _classNames2;
    var affixWrapperPrefixCls = "".concat(prefixCls, "-affix-wrapper");
    var affixWrapperCls = classnames_default()(affixWrapperPrefixCls, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(affixWrapperPrefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames2, "".concat(affixWrapperPrefixCls, "-focused"), focused), (0,defineProperty/* default */.Z)(_classNames2, "".concat(affixWrapperPrefixCls, "-readonly"), readOnly), (0,defineProperty/* default */.Z)(_classNames2, "".concat(affixWrapperPrefixCls, "-input-with-clear-btn"), suffix && allowClear && value), _classNames2), !hasAddon(props) && className, affixWrapperClassName);
    var suffixNode = (suffix || allowClear) && /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-suffix")
    }, getClearIcon(), suffix);
    element = /*#__PURE__*/react.createElement("span", {
      className: affixWrapperCls,
      style: style,
      hidden: !hasAddon(props) && hidden,
      onClick: onInputClick,
      ref: containerRef
    }, prefix && /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-prefix")
    }, prefix), /*#__PURE__*/(0,react.cloneElement)(inputElement, {
      style: null,
      value: value,
      hidden: null
    }), suffixNode);
  } // ================== Addon ================== //

  if (hasAddon(props)) {
    var wrapperCls = "".concat(prefixCls, "-group");
    var addonCls = "".concat(wrapperCls, "-addon");
    var mergedWrapperClassName = classnames_default()("".concat(prefixCls, "-wrapper"), wrapperCls, wrapperClassName);
    var mergedGroupClassName = classnames_default()("".concat(prefixCls, "-group-wrapper"), className, groupClassName); // Need another wrapper for changing display:table to display:inline-block
    // and put style prop in wrapper

    return /*#__PURE__*/react.createElement("span", {
      className: mergedGroupClassName,
      style: style,
      hidden: hidden
    }, /*#__PURE__*/react.createElement("span", {
      className: mergedWrapperClassName
    }, addonBefore && /*#__PURE__*/react.createElement("span", {
      className: addonCls
    }, addonBefore), /*#__PURE__*/(0,react.cloneElement)(element, {
      style: null,
      hidden: null
    }), addonAfter && /*#__PURE__*/react.createElement("span", {
      className: addonCls
    }, addonAfter)));
  }
  return element;
};
/* harmony default export */ var es_BaseInput = (BaseInput);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3433);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(205);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(288);
;// CONCATENATED MODULE: ./node_modules/rc-input/es/Input.js






var _excluded = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "type", "inputClassName"];






var Input = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var autoComplete = props.autoComplete,
    onChange = props.onChange,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onPressEnter = props.onPressEnter,
    onKeyDown = props.onKeyDown,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-input' : _props$prefixCls,
    disabled = props.disabled,
    htmlSize = props.htmlSize,
    className = props.className,
    maxLength = props.maxLength,
    suffix = props.suffix,
    showCount = props.showCount,
    _props$type = props.type,
    type = _props$type === void 0 ? 'text' : _props$type,
    inputClassName = props.inputClassName,
    rest = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var _useMergedState = (0,useMergedState/* default */.Z)(props.defaultValue, {
      value: props.value
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    value = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  var inputRef = (0,react.useRef)(null);
  var focus = function focus(option) {
    if (inputRef.current) {
      triggerFocus(inputRef.current, option);
    }
  };
  (0,react.useImperativeHandle)(ref, function () {
    return {
      focus: focus,
      blur: function blur() {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.blur();
      },
      setSelectionRange: function setSelectionRange(start, end, direction) {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.setSelectionRange(start, end, direction);
      },
      select: function select() {
        var _inputRef$current3;
        (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.select();
      },
      input: inputRef.current
    };
  });
  (0,react.useEffect)(function () {
    setFocused(function (prev) {
      return prev && disabled ? false : prev;
    });
  }, [disabled]);
  var handleChange = function handleChange(e) {
    if (props.value === undefined) {
      setValue(e.target.value);
    }
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (onPressEnter && e.key === 'Enter') {
      onPressEnter(e);
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  };
  var handleFocus = function handleFocus(e) {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  var handleBlur = function handleBlur(e) {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  var handleReset = function handleReset(e) {
    setValue('');
    focus();
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };
  var getInputElement = function getInputElement() {
    // Fix https://fb.me/react-unknown-prop
    var otherProps = (0,omit/* default */.Z)(props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear',
    // Input elements must be either controlled or uncontrolled,
    // specify either the value prop, or the defaultValue prop, but not both.
    'defaultValue', 'showCount', 'affixWrapperClassName', 'groupClassName', 'inputClassName', 'wrapperClassName', 'htmlSize']);
    return /*#__PURE__*/react.createElement("input", (0,esm_extends/* default */.Z)({
      autoComplete: autoComplete
    }, otherProps, {
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      className: classnames_default()(prefixCls, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), disabled), inputClassName, !hasAddon(props) && !hasPrefixSuffix(props) && className),
      ref: inputRef,
      size: htmlSize,
      type: type
    }));
  };
  var getSuffix = function getSuffix() {
    // Max length value
    var hasMaxLength = Number(maxLength) > 0;
    if (suffix || showCount) {
      var val = fixControlledValue(value);
      var valueLength = (0,toConsumableArray/* default */.Z)(val).length;
      var dataCount = (0,esm_typeof/* default */.Z)(showCount) === 'object' ? showCount.formatter({
        value: val,
        count: valueLength,
        maxLength: maxLength
      }) : "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : '');
      return /*#__PURE__*/react.createElement(react.Fragment, null, !!showCount && /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(prefixCls, "-show-count-suffix"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-show-count-has-suffix"), !!suffix))
      }, dataCount), suffix);
    }
    return null;
  };
  return /*#__PURE__*/react.createElement(es_BaseInput, (0,esm_extends/* default */.Z)({}, rest, {
    prefixCls: prefixCls,
    className: className,
    inputElement: getInputElement(),
    handleReset: handleReset,
    value: fixControlledValue(value),
    focused: focused,
    triggerFocus: focus,
    suffix: getSuffix(),
    disabled: disabled
  }));
});
/* harmony default export */ var es_Input = (Input);
;// CONCATENATED MODULE: ./node_modules/rc-input/es/index.js



/* harmony default export */ var es = (es_Input);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(6945);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(8438);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(1631);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(5531);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/statusUtils.js
var statusUtils = __webpack_require__(5681);
;// CONCATENATED MODULE: ./node_modules/antd/es/input/hooks/useRemovePasswordTimeout.js

function useRemovePasswordTimeout(inputRef, triggerOnMount) {
  var removePasswordTimeoutRef = (0,react.useRef)([]);
  var removePasswordTimeout = function removePasswordTimeout() {
    removePasswordTimeoutRef.current.push(setTimeout(function () {
      var _a, _b, _c, _d;
      if (((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) && ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.input.getAttribute('type')) === 'password' && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.input.hasAttribute('value'))) {
        (_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.input.removeAttribute('value');
      }
    }));
  };
  (0,react.useEffect)(function () {
    if (triggerOnMount) {
      removePasswordTimeout();
    }
    return function () {
      return removePasswordTimeoutRef.current.forEach(function (timer) {
        if (timer) {
          clearTimeout(timer);
        }
      });
    };
  }, []);
  return removePasswordTimeout;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/input/utils.js
// eslint-disable-next-line import/prefer-default-export
function utils_hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
;// CONCATENATED MODULE: ./node_modules/antd/es/input/Input.js



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};














function Input_fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return String(value);
}
function Input_resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  var event = e;
  if (e.type === 'click') {
    // Clone a new target for event.
    // Avoid the following usage, the setQuery method gets the original value.
    //
    // const [query, setQuery] = React.useState('');
    // <Input
    //   allowClear
    //   value={query}
    //   onChange={(e)=> {
    //     setQuery((prevStatus) => e.target.value);
    //   }}
    // />
    var currentTarget = target.cloneNode(true);
    // click clear icon
    event = Object.create(e, {
      target: {
        value: currentTarget
      },
      currentTarget: {
        value: currentTarget
      }
    });
    currentTarget.value = '';
    onChange(event);
    return;
  }
  // Trigger by composition event, this means we need force change the input value
  if (targetValue !== undefined) {
    event = Object.create(e, {
      target: {
        value: target
      },
      currentTarget: {
        value: target
      }
    });
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}
function Input_triggerFocus(element, option) {
  if (!element) {
    return;
  }
  element.focus(option);
  // Selection content
  var _ref = option || {},
    cursor = _ref.cursor;
  if (cursor) {
    var len = element.value.length;
    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;
      case 'end':
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
        break;
    }
  }
}
var Input_Input = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var _classNames, _classNames2, _classNames4;
  var customizePrefixCls = props.prefixCls,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    customStatus = props.status,
    customSize = props.size,
    customDisabled = props.disabled,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    suffix = props.suffix,
    allowClear = props.allowClear,
    addonAfter = props.addonAfter,
    addonBefore = props.addonBefore,
    className = props.className,
    onChange = props.onChange,
    rest = __rest(props, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "onChange"]);
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction,
    input = _React$useContext.input;
  var prefixCls = getPrefixCls('input', customizePrefixCls);
  var inputRef = (0,react.useRef)(null);
  // ===================== Compact Item =====================
  var _useCompactItemContex = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction),
    compactSize = _useCompactItemContex.compactSize,
    compactItemClassnames = _useCompactItemContex.compactItemClassnames;
  // ===================== Size =====================
  var size = react.useContext(SizeContext/* default */.Z);
  var mergedSize = compactSize || customSize || size;
  // ===================== Disabled =====================
  var disabled = react.useContext(DisabledContext/* default */.Z);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  // ===================== Status =====================
  var _useContext = (0,react.useContext)(form_context/* FormItemInputContext */.aM),
    contextStatus = _useContext.status,
    hasFeedback = _useContext.hasFeedback,
    feedbackIcon = _useContext.feedbackIcon;
  var mergedStatus = (0,statusUtils/* getMergedStatus */.F)(contextStatus, customStatus);
  // ===================== Focus warning =====================
  var inputHasPrefixSuffix = utils_hasPrefixSuffix(props) || !!hasFeedback;
  var prevHasPrefixSuffix = (0,react.useRef)(inputHasPrefixSuffix);
  (0,react.useEffect)(function () {
    var _a;
    if (inputHasPrefixSuffix && !prevHasPrefixSuffix.current) {
       false ? 0 : void 0;
    }
    prevHasPrefixSuffix.current = inputHasPrefixSuffix;
  }, [inputHasPrefixSuffix]);
  // ===================== Remove Password value =====================
  var removePasswordTimeout = useRemovePasswordTimeout(inputRef, true);
  var handleBlur = function handleBlur(e) {
    removePasswordTimeout();
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  var handleFocus = function handleFocus(e) {
    removePasswordTimeout();
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  var handleChange = function handleChange(e) {
    removePasswordTimeout();
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };
  var suffixNode = (hasFeedback || suffix) && /*#__PURE__*/react.createElement(react.Fragment, null, suffix, hasFeedback && feedbackIcon);
  // Allow clear
  var mergedAllowClear;
  if ((0,esm_typeof/* default */.Z)(allowClear) === 'object' && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null)
    };
  }
  return /*#__PURE__*/react.createElement(es, (0,esm_extends/* default */.Z)({
    ref: (0,es_ref/* composeRef */.sQ)(ref, inputRef),
    prefixCls: prefixCls,
    autoComplete: input === null || input === void 0 ? void 0 : input.autoComplete
  }, rest, {
    disabled: mergedDisabled || undefined,
    onBlur: handleBlur,
    onFocus: handleFocus,
    suffix: suffixNode,
    allowClear: mergedAllowClear,
    className: classnames_default()(className, compactItemClassnames),
    onChange: handleChange,
    addonAfter: addonAfter && /*#__PURE__*/react.createElement(Compact/* NoCompactStyle */.BR, null, /*#__PURE__*/react.createElement(form_context/* NoFormStyle */.Ux, {
      override: true,
      status: true
    }, addonAfter)),
    addonBefore: addonBefore && /*#__PURE__*/react.createElement(Compact/* NoCompactStyle */.BR, null, /*#__PURE__*/react.createElement(form_context/* NoFormStyle */.Ux, {
      override: true,
      status: true
    }, addonBefore)),
    inputClassName: classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-lg"), mergedSize === 'large'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames), !inputHasPrefixSuffix && (0,statusUtils/* getStatusClassNames */.Z)(prefixCls, mergedStatus)),
    affixWrapperClassName: classnames_default()((_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), mergedSize === 'small'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), mergedSize === 'large'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), _classNames2), (0,statusUtils/* getStatusClassNames */.Z)("".concat(prefixCls, "-affix-wrapper"), mergedStatus, hasFeedback)),
    wrapperClassName: classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-group-rtl"), direction === 'rtl')),
    groupClassName: classnames_default()((_classNames4 = {}, (0,defineProperty/* default */.Z)(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), mergedSize === 'small'), (0,defineProperty/* default */.Z)(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), mergedSize === 'large'), (0,defineProperty/* default */.Z)(_classNames4, "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), _classNames4), (0,statusUtils/* getStatusClassNames */.Z)("".concat(prefixCls, "-group-wrapper"), mergedStatus, hasFeedback))
  }));
});
/* harmony default export */ var input_Input = (Input_Input);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/EyeInvisibleOutlined.js
// This icon file is generated automatically.
var EyeInvisibleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"
      }
    }]
  },
  "name": "eye-invisible",
  "theme": "outlined"
};
/* harmony default export */ var asn_EyeInvisibleOutlined = (EyeInvisibleOutlined);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(6321);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/EyeInvisibleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var EyeInvisibleOutlined_EyeInvisibleOutlined = function EyeInvisibleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_EyeInvisibleOutlined
  }));
};
EyeInvisibleOutlined_EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined';
/* harmony default export */ var icons_EyeInvisibleOutlined = (/*#__PURE__*/react.forwardRef(EyeInvisibleOutlined_EyeInvisibleOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/EyeOutlined.js
// This icon file is generated automatically.
var EyeOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
      }
    }]
  },
  "name": "eye",
  "theme": "outlined"
};
/* harmony default export */ var asn_EyeOutlined = (EyeOutlined);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/EyeOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var EyeOutlined_EyeOutlined = function EyeOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_EyeOutlined
  }));
};
EyeOutlined_EyeOutlined.displayName = 'EyeOutlined';
/* harmony default export */ var icons_EyeOutlined = (/*#__PURE__*/react.forwardRef(EyeOutlined_EyeOutlined));
;// CONCATENATED MODULE: ./node_modules/antd/es/input/Password.js




var Password_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var defaultIconRender = function defaultIconRender(visible) {
  return visible ? /*#__PURE__*/react.createElement(icons_EyeOutlined, null) : /*#__PURE__*/react.createElement(icons_EyeInvisibleOutlined, null);
};
var ActionMap = {
  click: 'onClick',
  hover: 'onMouseOver'
};
var Password = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _props$visibilityTogg = props.visibilityToggle,
    visibilityToggle = _props$visibilityTogg === void 0 ? true : _props$visibilityTogg;
  var visibilityControlled = (0,esm_typeof/* default */.Z)(visibilityToggle) === 'object' && visibilityToggle.visible !== undefined;
  var _useState = (0,react.useState)(function () {
      return visibilityControlled ? visibilityToggle.visible : false;
    }),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var inputRef = (0,react.useRef)(null);
  react.useEffect(function () {
    if (visibilityControlled) {
      setVisible(visibilityToggle.visible);
    }
  }, [visibilityControlled, visibilityToggle]);
  // Remove Password value
  var removePasswordTimeout = useRemovePasswordTimeout(inputRef);
  var onVisibleChange = function onVisibleChange() {
    var disabled = props.disabled;
    if (disabled) {
      return;
    }
    if (visible) {
      removePasswordTimeout();
    }
    setVisible(function (prevState) {
      var _a;
      var newState = !prevState;
      if ((0,esm_typeof/* default */.Z)(visibilityToggle) === 'object') {
        (_a = visibilityToggle.onVisibleChange) === null || _a === void 0 ? void 0 : _a.call(visibilityToggle, newState);
      }
      return newState;
    });
  };
  var getIcon = function getIcon(prefixCls) {
    var _iconProps;
    var _props$action = props.action,
      action = _props$action === void 0 ? 'click' : _props$action,
      _props$iconRender = props.iconRender,
      iconRender = _props$iconRender === void 0 ? defaultIconRender : _props$iconRender;
    var iconTrigger = ActionMap[action] || '';
    var icon = iconRender(visible);
    var iconProps = (_iconProps = {}, (0,defineProperty/* default */.Z)(_iconProps, iconTrigger, onVisibleChange), (0,defineProperty/* default */.Z)(_iconProps, "className", "".concat(prefixCls, "-icon")), (0,defineProperty/* default */.Z)(_iconProps, "key", 'passwordIcon'), (0,defineProperty/* default */.Z)(_iconProps, "onMouseDown", function onMouseDown(e) {
      // Prevent focused state lost
      // https://github.com/ant-design/ant-design/issues/15173
      e.preventDefault();
    }), (0,defineProperty/* default */.Z)(_iconProps, "onMouseUp", function onMouseUp(e) {
      // Prevent caret position change
      // https://github.com/ant-design/ant-design/issues/23524
      e.preventDefault();
    }), _iconProps);
    return /*#__PURE__*/react.cloneElement( /*#__PURE__*/react.isValidElement(icon) ? icon : /*#__PURE__*/react.createElement("span", null, icon), iconProps);
  };
  var renderPassword = function renderPassword(_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var className = props.className,
      customizePrefixCls = props.prefixCls,
      customizeInputPrefixCls = props.inputPrefixCls,
      size = props.size,
      restProps = Password_rest(props, ["className", "prefixCls", "inputPrefixCls", "size"]);
    var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    var prefixCls = getPrefixCls('input-password', customizePrefixCls);
    var suffixIcon = visibilityToggle && getIcon(prefixCls);
    var inputClassName = classnames_default()(prefixCls, className, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-").concat(size), !!size));
    var omittedProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, (0,omit/* default */.Z)(restProps, ['suffix', 'iconRender', 'visibilityToggle'])), {
      type: visible ? 'text' : 'password',
      className: inputClassName,
      prefixCls: inputPrefixCls,
      suffix: suffixIcon
    });
    if (size) {
      omittedProps.size = size;
    }
    return /*#__PURE__*/react.createElement(input_Input, (0,esm_extends/* default */.Z)({
      ref: (0,es_ref/* composeRef */.sQ)(ref, inputRef)
    }, omittedProps));
  };
  return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.C, null, renderPassword);
});
if (false) {}
/* harmony default export */ var input_Password = (Password);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(1067);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(9491);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(8138);
;// CONCATENATED MODULE: ./node_modules/antd/es/input/Search.js


var Search_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var Search = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    customizeInputPrefixCls = props.inputPrefixCls,
    className = props.className,
    customizeSize = props.size,
    suffix = props.suffix,
    _props$enterButton = props.enterButton,
    enterButton = _props$enterButton === void 0 ? false : _props$enterButton,
    addonAfter = props.addonAfter,
    loading = props.loading,
    disabled = props.disabled,
    customOnSearch = props.onSearch,
    customOnChange = props.onChange,
    onCompositionStart = props.onCompositionStart,
    onCompositionEnd = props.onCompositionEnd,
    restProps = Search_rest(props, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]);
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var contextSize = react.useContext(SizeContext/* default */.Z);
  var composedRef = react.useRef(false);
  var prefixCls = getPrefixCls('input-search', customizePrefixCls);
  var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
  var _useCompactItemContex = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction),
    compactSize = _useCompactItemContex.compactSize;
  var size = compactSize || customizeSize || contextSize;
  var inputRef = react.useRef(null);
  var onChange = function onChange(e) {
    if (e && e.target && e.type === 'click' && customOnSearch) {
      customOnSearch(e.target.value, e);
    }
    if (customOnChange) {
      customOnChange(e);
    }
  };
  var onMouseDown = function onMouseDown(e) {
    var _a;
    if (document.activeElement === ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input)) {
      e.preventDefault();
    }
  };
  var onSearch = function onSearch(e) {
    var _a, _b;
    if (customOnSearch) {
      customOnSearch((_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.value, e);
    }
  };
  var onPressEnter = function onPressEnter(e) {
    if (composedRef.current || loading) {
      return;
    }
    onSearch(e);
  };
  var searchIcon = typeof enterButton === 'boolean' ? /*#__PURE__*/react.createElement(SearchOutlined/* default */.Z, null) : null;
  var btnClassName = "".concat(prefixCls, "-button");
  var button;
  var enterButtonAsElement = enterButton || {};
  var isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;
  if (isAntdButton || enterButtonAsElement.type === 'button') {
    button = (0,reactNode/* cloneElement */.Tm)(enterButtonAsElement, (0,esm_extends/* default */.Z)({
      onMouseDown: onMouseDown,
      onClick: function onClick(e) {
        var _a, _b;
        (_b = (_a = enterButtonAsElement === null || enterButtonAsElement === void 0 ? void 0 : enterButtonAsElement.props) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        onSearch(e);
      },
      key: 'enterButton'
    }, isAntdButton ? {
      className: btnClassName,
      size: size
    } : {}));
  } else {
    button = /*#__PURE__*/react.createElement(es_button/* default */.Z, {
      className: btnClassName,
      type: enterButton ? 'primary' : undefined,
      size: size,
      disabled: disabled,
      key: "enterButton",
      onMouseDown: onMouseDown,
      onClick: onSearch,
      loading: loading,
      icon: searchIcon
    }, enterButton);
  }
  if (addonAfter) {
    button = [button, (0,reactNode/* cloneElement */.Tm)(addonAfter, {
      key: 'addonAfter'
    })];
  }
  var cls = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(size), !!size), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-with-button"), !!enterButton), _classNames), className);
  var handleOnCompositionStart = function handleOnCompositionStart(e) {
    composedRef.current = true;
    onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
  };
  var handleOnCompositionEnd = function handleOnCompositionEnd(e) {
    composedRef.current = false;
    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
  };
  return /*#__PURE__*/react.createElement(input_Input, (0,esm_extends/* default */.Z)({
    ref: (0,es_ref/* composeRef */.sQ)(inputRef, ref),
    onPressEnter: onPressEnter
  }, restProps, {
    size: size,
    onCompositionStart: handleOnCompositionStart,
    onCompositionEnd: handleOnCompositionEnd,
    prefixCls: inputPrefixCls,
    addonAfter: button,
    suffix: suffix,
    onChange: onChange,
    className: cls,
    disabled: disabled
  }));
});
if (false) {}
/* harmony default export */ var input_Search = (Search);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 4 modules
var rc_resize_observer_es = __webpack_require__(5172);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(2846);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5557);
;// CONCATENATED MODULE: ./node_modules/rc-textarea/es/calculateNodeHeight.js
// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n";
var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'font-variant', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing', 'word-break'];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  var style = window.getComputedStyle(node);
  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
  var sizingStyle = SIZING_STYLE.map(function (name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(';');
  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tab-index', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    document.body.appendChild(hiddenTextarea);
  }
  // Fix wrap="off" issue
  // https://github.com/ant-design/ant-design/issues/6577
  if (uiTextNode.getAttribute('wrap')) {
    hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
  } else {
    hiddenTextarea.removeAttribute('wrap');
  }
  // Copy all CSS properties that have an impact on the height of the content in
  // the textbox
  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
    paddingSize = _calculateNodeStyling.paddingSize,
    borderSize = _calculateNodeStyling.borderSize,
    boxSizing = _calculateNodeStyling.boxSizing,
    sizingStyle = _calculateNodeStyling.sizingStyle;
  // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content
  hiddenTextarea.setAttribute('style', "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
  var minHeight = undefined;
  var maxHeight = undefined;
  var overflowY;
  var height = hiddenTextarea.scrollHeight;
  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height += borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = ' ';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? '' : 'hidden';
      height = Math.min(maxHeight, height);
    }
  }
  var style = {
    height: height,
    overflowY: overflowY,
    resize: 'none'
  };
  if (minHeight) {
    style.minHeight = minHeight;
  }
  if (maxHeight) {
    style.maxHeight = maxHeight;
  }
  return style;
}
;// CONCATENATED MODULE: ./node_modules/rc-textarea/es/ResizableTextArea.js






var ResizableTextArea_excluded = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"];







var RESIZE_START = 0;
var RESIZE_MEASURING = 1;
var RESIZE_STABLE = 2;
var ResizableTextArea = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-textarea' : _props$prefixCls,
    onPressEnter = props.onPressEnter,
    defaultValue = props.defaultValue,
    value = props.value,
    autoSize = props.autoSize,
    onResize = props.onResize,
    className = props.className,
    style = props.style,
    disabled = props.disabled,
    onChange = props.onChange,
    onInternalAutoSize = props.onInternalAutoSize,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, ResizableTextArea_excluded);
  // =============================== Value ================================
  var _useMergedState = (0,useMergedState/* default */.Z)(defaultValue, {
      value: value,
      postState: function postState(val) {
        return val !== null && val !== void 0 ? val : '';
      }
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setMergedValue = _useMergedState2[1];
  var onInternalChange = function onInternalChange(event) {
    setMergedValue(event.target.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
  };
  // ================================ Ref =================================
  var textareaRef = react.useRef();
  react.useImperativeHandle(ref, function () {
    return {
      textArea: textareaRef.current
    };
  });
  // ============================== AutoSize ==============================
  var _React$useMemo = react.useMemo(function () {
      if (autoSize && (0,esm_typeof/* default */.Z)(autoSize) === 'object') {
        return [autoSize.minRows, autoSize.maxRows];
      }
      return [];
    }, [autoSize]),
    _React$useMemo2 = (0,slicedToArray/* default */.Z)(_React$useMemo, 2),
    minRows = _React$useMemo2[0],
    maxRows = _React$useMemo2[1];
  var needAutoSize = !!autoSize;
  // =============================== Scroll ===============================
  // https://github.com/ant-design/ant-design/issues/21870
  var fixFirefoxAutoScroll = function fixFirefoxAutoScroll() {
    try {
      // FF has bug with jump of scroll to top. We force back here.
      if (document.activeElement === textareaRef.current) {
        var _textareaRef$current = textareaRef.current,
          selectionStart = _textareaRef$current.selectionStart,
          selectionEnd = _textareaRef$current.selectionEnd,
          scrollTop = _textareaRef$current.scrollTop;
        // Fix Safari bug which not rollback when break line
        // This makes Chinese IME can't input. Do not fix this
        // const { value: tmpValue } = textareaRef.current;
        // textareaRef.current.value = '';
        // textareaRef.current.value = tmpValue;
        textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
        textareaRef.current.scrollTop = scrollTop;
      }
    } catch (e) {
      // Fix error in Chrome:
      // Failed to read the 'selectionStart' property from 'HTMLInputElement'
      // http://stackoverflow.com/q/21177489/3040605
    }
  };
  // =============================== Resize ===============================
  var _React$useState = react.useState(RESIZE_STABLE),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    resizeState = _React$useState2[0],
    setResizeState = _React$useState2[1];
  var _React$useState3 = react.useState(),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    autoSizeStyle = _React$useState4[0],
    setAutoSizeStyle = _React$useState4[1];
  var startResize = function startResize() {
    setResizeState(RESIZE_START);
    if (false) {}
  };
  // Change to trigger resize measure
  (0,useLayoutEffect/* default */.Z)(function () {
    if (needAutoSize) {
      startResize();
    }
  }, [value, minRows, maxRows, needAutoSize]);
  (0,useLayoutEffect/* default */.Z)(function () {
    if (resizeState === RESIZE_START) {
      setResizeState(RESIZE_MEASURING);
    } else if (resizeState === RESIZE_MEASURING) {
      var textareaStyles = calculateAutoSizeStyle(textareaRef.current, false, minRows, maxRows);
      // Safari has bug that text will keep break line on text cut when it's prev is break line.
      // ZombieJ: This not often happen. So we just skip it.
      // const { selectionStart, selectionEnd, scrollTop } = textareaRef.current;
      // const { value: tmpValue } = textareaRef.current;
      // textareaRef.current.value = '';
      // textareaRef.current.value = tmpValue;
      // if (document.activeElement === textareaRef.current) {
      //   textareaRef.current.scrollTop = scrollTop;
      //   textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
      // }
      setResizeState(RESIZE_STABLE);
      setAutoSizeStyle(textareaStyles);
    } else {
      fixFirefoxAutoScroll();
    }
  }, [resizeState]);
  // We lock resize trigger by raf to avoid Safari warning
  var resizeRafRef = react.useRef();
  var cleanRaf = function cleanRaf() {
    raf/* default.cancel */.Z.cancel(resizeRafRef.current);
  };
  var onInternalResize = function onInternalResize(size) {
    if (resizeState === RESIZE_STABLE) {
      onResize === null || onResize === void 0 ? void 0 : onResize(size);
      if (autoSize) {
        cleanRaf();
        resizeRafRef.current = (0,raf/* default */.Z)(function () {
          startResize();
        });
      }
    }
  };
  react.useEffect(function () {
    return cleanRaf;
  }, []);
  // =============================== Render ===============================
  var mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
  var mergedStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), mergedAutoSizeStyle);
  if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
    mergedStyle.overflowY = 'hidden';
    mergedStyle.overflowX = 'hidden';
  }
  return /*#__PURE__*/react.createElement(rc_resize_observer_es/* default */.Z, {
    onResize: onInternalResize,
    disabled: !(autoSize || onResize)
  }, /*#__PURE__*/react.createElement("textarea", (0,esm_extends/* default */.Z)({}, restProps, {
    ref: textareaRef,
    style: mergedStyle,
    className: classnames_default()(prefixCls, className, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), disabled)),
    disabled: disabled,
    value: mergedValue,
    onChange: onInternalChange
  })));
});
/* harmony default export */ var es_ResizableTextArea = (ResizableTextArea);
;// CONCATENATED MODULE: ./node_modules/rc-textarea/es/index.js







var TextArea = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(TextArea, _React$Component);
  var _super = (0,createSuper/* default */.Z)(TextArea);
  function TextArea(props) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, TextArea);
    _this = _super.call(this, props);
    _this.resizableTextArea = void 0;
    _this.focus = function () {
      _this.resizableTextArea.textArea.focus();
    };
    _this.saveTextArea = function (resizableTextArea) {
      _this.resizableTextArea = resizableTextArea;
    };
    _this.handleChange = function (e) {
      var onChange = _this.props.onChange;
      _this.setValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };
    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
        onPressEnter = _this$props.onPressEnter,
        onKeyDown = _this$props.onKeyDown;
      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    };
    var value = typeof props.value === 'undefined' || props.value === null ? props.defaultValue : props.value;
    _this.state = {
      value: value
    };
    return _this;
  }
  (0,createClass/* default */.Z)(TextArea, [{
    key: "setValue",
    value: function setValue(value, callback) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        }, callback);
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.resizableTextArea.textArea.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(es_ResizableTextArea, (0,esm_extends/* default */.Z)({}, this.props, {
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        ref: this.saveTextArea
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }
      return null;
    }
  }]);
  return TextArea;
}(react.Component);

/* harmony default export */ var rc_textarea_es = (TextArea);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__(6927);
;// CONCATENATED MODULE: ./node_modules/antd/es/input/ClearableLabeledInput.js












var ClearableInputType = (0,type/* tuple */.b)('text', 'input');
function ClearableLabeledInput_hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
var ClearableLabeledInput = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(ClearableLabeledInput, _React$Component);
  var _super = (0,createSuper/* default */.Z)(ClearableLabeledInput);
  function ClearableLabeledInput() {
    (0,classCallCheck/* default */.Z)(this, ClearableLabeledInput);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.Z)(ClearableLabeledInput, [{
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      var _classNames;
      var _this$props = this.props,
        value = _this$props.value,
        disabled = _this$props.disabled,
        readOnly = _this$props.readOnly,
        handleReset = _this$props.handleReset,
        suffix = _this$props.suffix;
      var needClear = !disabled && !readOnly && value;
      var className = "".concat(prefixCls, "-clear-icon");
      return /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, {
        onClick: handleReset,
        // Do not trigger onBlur when clear input
        // https://github.com/ant-design/ant-design/issues/31200
        onMouseDown: function onMouseDown(e) {
          return e.preventDefault();
        },
        className: classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(className, "-hidden"), !needClear), (0,defineProperty/* default */.Z)(_classNames, "".concat(className, "-has-suffix"), !!suffix), _classNames), className),
        role: "button"
      });
    }
  }, {
    key: "renderTextAreaWithClearIcon",
    value: function renderTextAreaWithClearIcon(prefixCls, element, statusContext) {
      var _classNames2;
      var _this$props2 = this.props,
        value = _this$props2.value,
        allowClear = _this$props2.allowClear,
        className = _this$props2.className,
        style = _this$props2.style,
        direction = _this$props2.direction,
        bordered = _this$props2.bordered,
        hidden = _this$props2.hidden,
        customStatus = _this$props2.status;
      var contextStatus = statusContext.status,
        hasFeedback = statusContext.hasFeedback;
      if (!allowClear) {
        return (0,reactNode/* cloneElement */.Tm)(element, {
          value: value
        });
      }
      var affixWrapperCls = classnames_default()("".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"), (0,statusUtils/* getStatusClassNames */.Z)("".concat(prefixCls, "-affix-wrapper"), (0,statusUtils/* getMergedStatus */.F)(contextStatus, customStatus), hasFeedback), (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), (0,defineProperty/* default */.Z)(_classNames2, "".concat(className), !ClearableLabeledInput_hasAddon(this.props) && className), _classNames2));
      return /*#__PURE__*/react.createElement("span", {
        className: affixWrapperCls,
        style: style,
        hidden: hidden
      }, (0,reactNode/* cloneElement */.Tm)(element, {
        style: null,
        value: value
      }), this.renderClearIcon(prefixCls));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      return /*#__PURE__*/react.createElement(form_context/* FormItemInputContext.Consumer */.aM.Consumer, null, function (statusContext) {
        var _this$props3 = _this.props,
          prefixCls = _this$props3.prefixCls,
          inputType = _this$props3.inputType,
          element = _this$props3.element;
        if (inputType === ClearableInputType[0]) {
          return _this.renderTextAreaWithClearIcon(prefixCls, element, statusContext);
        }
      });
    }
  }]);
  return ClearableLabeledInput;
}(react.Component);
/* harmony default export */ var input_ClearableLabeledInput = (ClearableLabeledInput);
;// CONCATENATED MODULE: ./node_modules/antd/es/input/TextArea.js





var TextArea_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












function fixEmojiLength(value, maxLength) {
  return (0,toConsumableArray/* default */.Z)(value || '').slice(0, maxLength).join('');
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  var newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    // 光标在尾部，直接截断
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if ((0,toConsumableArray/* default */.Z)(preValue || '').length < triggerValue.length && (0,toConsumableArray/* default */.Z)(triggerValue || '').length > maxLength) {
    // 光标在中间，如果最后的值超过最大值，则采用原先的值
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
var TextArea_TextArea = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var _classNames;
  var customizePrefixCls = _a.prefixCls,
    _a$bordered = _a.bordered,
    bordered = _a$bordered === void 0 ? true : _a$bordered,
    _a$showCount = _a.showCount,
    showCount = _a$showCount === void 0 ? false : _a$showCount,
    maxLength = _a.maxLength,
    className = _a.className,
    style = _a.style,
    customizeSize = _a.size,
    customDisabled = _a.disabled,
    onCompositionStart = _a.onCompositionStart,
    onCompositionEnd = _a.onCompositionEnd,
    onChange = _a.onChange,
    customStatus = _a.status,
    props = TextArea_rest(_a, ["prefixCls", "bordered", "showCount", "maxLength", "className", "style", "size", "disabled", "onCompositionStart", "onCompositionEnd", "onChange", "status"]);
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var size = react.useContext(SizeContext/* default */.Z);
  // ===================== Disabled =====================
  var disabled = react.useContext(DisabledContext/* default */.Z);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  var _React$useContext2 = react.useContext(form_context/* FormItemInputContext */.aM),
    contextStatus = _React$useContext2.status,
    hasFeedback = _React$useContext2.hasFeedback,
    isFormItemInput = _React$useContext2.isFormItemInput,
    feedbackIcon = _React$useContext2.feedbackIcon;
  var mergedStatus = (0,statusUtils/* getMergedStatus */.F)(contextStatus, customStatus);
  var innerRef = react.useRef(null);
  var clearableInputRef = react.useRef(null);
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    compositing = _React$useState2[0],
    setCompositing = _React$useState2[1];
  var oldCompositionValueRef = react.useRef();
  var oldSelectionStartRef = react.useRef(0);
  var _useMergedState = (0,useMergedState/* default */.Z)(props.defaultValue, {
      value: props.value
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    value = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var hidden = props.hidden;
  var handleSetValue = function handleSetValue(val, callback) {
    if (props.value === undefined) {
      setValue(val);
      callback === null || callback === void 0 ? void 0 : callback();
    }
  };
  // =========================== Value Update ===========================
  // Max length value
  var hasMaxLength = Number(maxLength) > 0;
  var onInternalCompositionStart = function onInternalCompositionStart(e) {
    setCompositing(true);
    // 拼音输入前保存一份旧值
    oldCompositionValueRef.current = value;
    // 保存旧的光标位置
    oldSelectionStartRef.current = e.currentTarget.selectionStart;
    onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
  };
  var onInternalCompositionEnd = function onInternalCompositionEnd(e) {
    var _a;
    setCompositing(false);
    var triggerValue = e.currentTarget.value;
    if (hasMaxLength) {
      var isCursorInEnd = oldSelectionStartRef.current >= maxLength + 1 || oldSelectionStartRef.current === ((_a = oldCompositionValueRef.current) === null || _a === void 0 ? void 0 : _a.length);
      triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.current, triggerValue, maxLength);
    }
    // Patch composition onChange when value changed
    if (triggerValue !== value) {
      handleSetValue(triggerValue);
      Input_resolveOnChange(e.currentTarget, e, onChange, triggerValue);
    }
    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
  };
  var handleChange = function handleChange(e) {
    var triggerValue = e.target.value;
    if (!compositing && hasMaxLength) {
      // 1. 复制粘贴超过maxlength的情况 2.未超过maxlength的情况
      var isCursorInEnd = e.target.selectionStart >= maxLength + 1 || e.target.selectionStart === triggerValue.length || !e.target.selectionStart;
      triggerValue = setTriggerValue(isCursorInEnd, value, triggerValue, maxLength);
    }
    handleSetValue(triggerValue);
    Input_resolveOnChange(e.currentTarget, e, onChange, triggerValue);
  };
  // ============================== Reset ===============================
  var handleReset = function handleReset(e) {
    var _a, _b, _c;
    handleSetValue('');
    (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    Input_resolveOnChange((_c = (_b = innerRef.current) === null || _b === void 0 ? void 0 : _b.resizableTextArea) === null || _c === void 0 ? void 0 : _c.textArea, e, onChange);
  };
  var prefixCls = getPrefixCls('input', customizePrefixCls);
  react.useImperativeHandle(ref, function () {
    var _a;
    return {
      resizableTextArea: (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea,
      focus: function focus(option) {
        var _a, _b;
        Input_triggerFocus((_b = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, option);
      },
      blur: function blur() {
        var _a;
        return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
  });
  var textArea = /*#__PURE__*/react.createElement(rc_textarea_es, (0,esm_extends/* default */.Z)({}, (0,omit/* default */.Z)(props, ['allowClear']), {
    disabled: mergedDisabled,
    className: classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-borderless"), !bordered), (0,defineProperty/* default */.Z)(_classNames, className, className && !showCount), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-sm"), size === 'small' || customizeSize === 'small'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-lg"), size === 'large' || customizeSize === 'large'), _classNames), (0,statusUtils/* getStatusClassNames */.Z)(prefixCls, mergedStatus)),
    style: showCount ? {
      resize: style === null || style === void 0 ? void 0 : style.resize
    } : style,
    prefixCls: prefixCls,
    onCompositionStart: onInternalCompositionStart,
    onChange: handleChange,
    onCompositionEnd: onInternalCompositionEnd,
    ref: innerRef
  }));
  var val = Input_fixControlledValue(value);
  if (!compositing && hasMaxLength && (props.value === null || props.value === undefined)) {
    // fix #27612 将value转为数组进行截取，解决 '😂'.length === 2 等emoji表情导致的截取乱码的问题
    val = fixEmojiLength(val, maxLength);
  }
  // TextArea
  var textareaNode = /*#__PURE__*/react.createElement(input_ClearableLabeledInput, (0,esm_extends/* default */.Z)({
    disabled: mergedDisabled
  }, props, {
    prefixCls: prefixCls,
    direction: direction,
    inputType: "text",
    value: val,
    element: textArea,
    handleReset: handleReset,
    ref: clearableInputRef,
    bordered: bordered,
    status: customStatus,
    style: showCount ? undefined : style
  }));
  // Only show text area wrapper when needed
  if (showCount || hasFeedback) {
    var _classNames2;
    var valueLength = (0,toConsumableArray/* default */.Z)(val).length;
    var dataCount = '';
    if ((0,esm_typeof/* default */.Z)(showCount) === 'object') {
      dataCount = showCount.formatter({
        value: val,
        count: valueLength,
        maxLength: maxLength
      });
    } else {
      dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : '');
    }
    return /*#__PURE__*/react.createElement("div", {
      hidden: hidden,
      className: classnames_default()("".concat(prefixCls, "-textarea"), (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-textarea-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-textarea-show-count"), showCount), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-textarea-in-form-item"), isFormItemInput), _classNames2), (0,statusUtils/* getStatusClassNames */.Z)("".concat(prefixCls, "-textarea"), mergedStatus, hasFeedback), className),
      style: style,
      "data-count": dataCount
    }, textareaNode, hasFeedback && /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-textarea-suffix")
    }, feedbackIcon));
  }
  return textareaNode;
});
/* harmony default export */ var input_TextArea = (TextArea_TextArea);
;// CONCATENATED MODULE: ./node_modules/antd/es/input/index.js





var es_input_Input = input_Input;
es_input_Input.Group = input_Group;
es_input_Input.Search = input_Search;
es_input_Input.TextArea = input_TextArea;
es_input_Input.Password = input_Password;
/* harmony default export */ var input = (es_input_Input);

/***/ }),

/***/ 3267:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ locale_provider_LocaleReceiver; },
  "E": function() { return /* binding */ useLocaleReceiver; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/context.js
var context = __webpack_require__(1769);
// EXTERNAL MODULE: ./node_modules/antd/es/locale/default.js + 5 modules
var locale_default = __webpack_require__(1165);
;// CONCATENATED MODULE: ./node_modules/antd/es/locale-provider/default.js

/* harmony default export */ var locale_provider_default = (locale_default/* default */.Z);
;// CONCATENATED MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js




var LocaleReceiver = function LocaleReceiver(props) {
  var _props$componentName = props.componentName,
    componentName = _props$componentName === void 0 ? 'global' : _props$componentName,
    defaultLocale = props.defaultLocale,
    children = props.children;
  var antLocale = react.useContext(context/* default */.Z);
  var getLocale = react.useMemo(function () {
    var _a;
    var locale = defaultLocale || locale_provider_default[componentName];
    var localeFromContext = (_a = antLocale === null || antLocale === void 0 ? void 0 : antLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, locale instanceof Function ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  var getLocaleCode = react.useMemo(function () {
    var localeCode = antLocale && antLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if (antLocale && antLocale.exist && !localeCode) {
      return locale_provider_default.locale;
    }
    return localeCode;
  }, [antLocale]);
  return children(getLocale, getLocaleCode, antLocale);
};
/* harmony default export */ var locale_provider_LocaleReceiver = (LocaleReceiver);
var useLocaleReceiver = function useLocaleReceiver(componentName, defaultLocale) {
  var antLocale = react.useContext(context/* default */.Z);
  var getLocale = react.useMemo(function () {
    var _a;
    var locale = defaultLocale || locale_provider_default[componentName];
    var localeFromContext = (_a = antLocale === null || antLocale === void 0 ? void 0 : antLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  return [getLocale];
};

/***/ }),

/***/ 1769:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7313);

var LocaleContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* harmony default export */ __webpack_exports__["Z"] = (LocaleContext);

/***/ }),

/***/ 1165:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ locale_default; }
});

;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/locale/en_US.js
/* harmony default export */ var en_US = ({
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: 'Page',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
  page_size: 'Page Size'
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
;// CONCATENATED MODULE: ./node_modules/rc-picker/es/locale/en_US.js
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'OK',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
/* harmony default export */ var locale_en_US = (locale);
;// CONCATENATED MODULE: ./node_modules/antd/es/time-picker/locale/en_US.js
var en_US_locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
/* harmony default export */ var time_picker_locale_en_US = (en_US_locale);
;// CONCATENATED MODULE: ./node_modules/antd/es/date-picker/locale/en_US.js



// Merge into a locale object
var locale_en_US_locale = {
  lang: (0,esm_extends/* default */.Z)({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, locale_en_US),
  timePickerLocale: (0,esm_extends/* default */.Z)({}, time_picker_locale_en_US)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ var date_picker_locale_en_US = (locale_en_US_locale);
;// CONCATENATED MODULE: ./node_modules/antd/es/calendar/locale/en_US.js

/* harmony default export */ var calendar_locale_en_US = (date_picker_locale_en_US);
;// CONCATENATED MODULE: ./node_modules/antd/es/locale/default.js
/* eslint-disable no-template-curly-in-string */




var typeTemplate = '${label} is not a valid ${type}';
var localeValues = {
  locale: 'en',
  Pagination: en_US,
  DatePicker: date_picker_locale_en_US,
  TimePicker: time_picker_locale_en_US,
  Calendar: calendar_locale_en_US,
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    filterCheckall: 'Select all items',
    filterSearchPlaceholder: 'Search in filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      "default": 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      "enum": '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  }
};
/* harmony default export */ var locale_default = (localeValues);

/***/ }),

/***/ 7919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Df": function() { return /* binding */ attachTypeApi; },
  "ZP": function() { return /* binding */ message; },
  "S$": function() { return /* binding */ getKeyThenIncreaseKey; },
  "z$": function() { return /* binding */ typeList; }
});

// UNUSED EXPORTS: getInstance

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(3390);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(9403);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(5602);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/InfoCircleFilled.js
// This icon file is generated automatically.
var InfoCircleFilled = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      }
    }]
  },
  "name": "info-circle",
  "theme": "filled"
};
/* harmony default export */ var asn_InfoCircleFilled = (InfoCircleFilled);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(6321);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var InfoCircleFilled_InfoCircleFilled = function InfoCircleFilled(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_InfoCircleFilled
  }));
};
InfoCircleFilled_InfoCircleFilled.displayName = 'InfoCircleFilled';
/* harmony default export */ var icons_InfoCircleFilled = (/*#__PURE__*/react.forwardRef(InfoCircleFilled_InfoCircleFilled));
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(4470);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-notification/es/index.js + 1 modules
var es = __webpack_require__(3133);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 5 modules
var config_provider = __webpack_require__(6793);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/rc-notification/es/useNotification.js
var useNotification = __webpack_require__(3028);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(4714);
;// CONCATENATED MODULE: ./node_modules/antd/es/message/hooks/useMessage.js






function createUseMessage(getRcNotificationInstance, getRCNoticeProps) {
  var useMessage = function useMessage() {
    // We can only get content by render
    var getPrefixCls;
    var getPopupContainer;
    // We create a proxy to handle delay created instance
    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };
    var _useRCNotification = (0,useNotification/* default */.Z)(proxy),
      _useRCNotification2 = (0,slicedToArray/* default */.Z)(_useRCNotification, 2),
      hookNotify = _useRCNotification2[0],
      holder = _useRCNotification2[1];
    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('message', customizePrefixCls);
      var rootPrefixCls = getPrefixCls();
      var target = args.key || getKeyThenIncreaseKey();
      var closePromise = new Promise(function (resolve) {
        var callback = function callback() {
          if (typeof args.onClose === 'function') {
            args.onClose();
          }
          return resolve(true);
        };
        getRcNotificationInstance((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, args), {
          prefixCls: mergedPrefixCls,
          rootPrefixCls: rootPrefixCls,
          getPopupContainer: getPopupContainer
        }), function (_ref) {
          var prefixCls = _ref.prefixCls,
            instance = _ref.instance;
          innerInstance = instance;
          hookNotify(getRCNoticeProps((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, args), {
            key: target,
            onClose: callback
          }), prefixCls));
        });
      });
      var result = function result() {
        if (innerInstance) {
          innerInstance.removeNotice(target);
        }
      };
      result.then = function (filled, rejected) {
        return closePromise.then(filled, rejected);
      };
      result.promise = closePromise;
      return result;
    }
    // Fill functions
    var hookApiRef = react.useRef({});
    hookApiRef.current.open = notify;
    typeList.forEach(function (type) {
      return attachTypeApi(hookApiRef.current, type);
    });
    return [hookApiRef.current, /*#__PURE__*/react.createElement(context/* ConfigConsumer */.C, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      getPopupContainer = context.getPopupContainer;
      return holder;
    })];
  };
  return useMessage;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/message/index.js












var messageInstance;
var defaultDuration = 3;
var defaultTop;
var key = 1;
var localPrefixCls = '';
var transitionName = 'move-up';
var hasTransitionName = false;
var getContainer;
var maxCount;
var rtl = false;
function getKeyThenIncreaseKey() {
  return key++;
}
function setMessageConfig(options) {
  if (options.top !== undefined) {
    defaultTop = options.top;
    messageInstance = null; // delete messageInstance for new defaultTop
  }

  if (options.duration !== undefined) {
    defaultDuration = options.duration;
  }
  if (options.prefixCls !== undefined) {
    localPrefixCls = options.prefixCls;
  }
  if (options.getContainer !== undefined) {
    getContainer = options.getContainer;
    messageInstance = null; // delete messageInstance for new getContainer
  }

  if (options.transitionName !== undefined) {
    transitionName = options.transitionName;
    messageInstance = null; // delete messageInstance for new transitionName
    hasTransitionName = true;
  }
  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
    messageInstance = null;
  }
  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}
function getRCNotificationInstance(args, callback) {
  var customizePrefixCls = args.prefixCls,
    getContextPopupContainer = args.getPopupContainer;
  var _globalConfig = (0,config_provider/* globalConfig */.w6)(),
    getPrefixCls = _globalConfig.getPrefixCls,
    getRootPrefixCls = _globalConfig.getRootPrefixCls,
    getIconPrefixCls = _globalConfig.getIconPrefixCls;
  var prefixCls = getPrefixCls('message', customizePrefixCls || localPrefixCls);
  var rootPrefixCls = getRootPrefixCls(args.rootPrefixCls, prefixCls);
  var iconPrefixCls = getIconPrefixCls();
  if (messageInstance) {
    callback({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls,
      iconPrefixCls: iconPrefixCls,
      instance: messageInstance
    });
    return;
  }
  var instanceConfig = {
    prefixCls: prefixCls,
    transitionName: hasTransitionName ? transitionName : "".concat(rootPrefixCls, "-").concat(transitionName),
    style: {
      top: defaultTop
    },
    getContainer: getContainer || getContextPopupContainer,
    maxCount: maxCount
  };
  es/* default.newInstance */.Z.newInstance(instanceConfig, function (instance) {
    if (messageInstance) {
      callback({
        prefixCls: prefixCls,
        rootPrefixCls: rootPrefixCls,
        iconPrefixCls: iconPrefixCls,
        instance: messageInstance
      });
      return;
    }
    messageInstance = instance;
    if (false) {}
    callback({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls,
      iconPrefixCls: iconPrefixCls,
      instance: instance
    });
  });
}
var typeToIcon = {
  info: icons_InfoCircleFilled,
  success: CheckCircleFilled/* default */.Z,
  error: CloseCircleFilled/* default */.Z,
  warning: ExclamationCircleFilled/* default */.Z,
  loading: LoadingOutlined/* default */.Z
};
var typeList = Object.keys(typeToIcon);
function getRCNoticeProps(args, prefixCls, iconPrefixCls) {
  var _classNames;
  var duration = args.duration !== undefined ? args.duration : defaultDuration;
  var IconComponent = typeToIcon[args.type];
  var messageClass = classnames_default()("".concat(prefixCls, "-custom-content"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), rtl === true), _classNames));
  return {
    key: args.key,
    duration: duration,
    style: args.style || {},
    className: args.className,
    content: /*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
      iconPrefixCls: iconPrefixCls
    }, /*#__PURE__*/react.createElement("div", {
      className: messageClass
    }, args.icon || IconComponent && /*#__PURE__*/react.createElement(IconComponent, null), /*#__PURE__*/react.createElement("span", null, args.content))),
    onClose: args.onClose,
    onClick: args.onClick
  };
}
function notice(args) {
  var target = args.key || getKeyThenIncreaseKey();
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }
      return resolve(true);
    };
    getRCNotificationInstance(args, function (_ref) {
      var prefixCls = _ref.prefixCls,
        iconPrefixCls = _ref.iconPrefixCls,
        instance = _ref.instance;
      instance.notice(getRCNoticeProps((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, args), {
        key: target,
        onClose: callback
      }), prefixCls, iconPrefixCls));
    });
  });
  var result = function result() {
    var _a;
    if (messageInstance) {
      messageInstance.removeNotice(target);
      (_a = args.onClose) === null || _a === void 0 ? void 0 : _a.call(args);
    }
  };
  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };
  result.promise = closePromise;
  return result;
}
function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}
var api = {
  open: notice,
  config: setMessageConfig,
  destroy: function destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        var _messageInstance = messageInstance,
          removeNotice = _messageInstance.removeNotice;
        removeNotice(messageKey);
      } else {
        var _messageInstance2 = messageInstance,
          destroy = _messageInstance2.destroy;
        destroy();
        messageInstance = null;
      }
    }
  }
};
function attachTypeApi(originalApi, type) {
  originalApi[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return originalApi.open((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, content), {
        type: type
      }));
    }
    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }
    return originalApi.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
}
typeList.forEach(function (type) {
  return attachTypeApi(api, type);
});
api.warn = api.warning;
api.useMessage = createUseMessage(getRCNotificationInstance, getRCNoticeProps);
/** @internal test Only function. Not work on production */
var getInstance = function getInstance() {
  return  false ? 0 : null;
};
/* harmony default export */ var message = (api);

/***/ }),

/***/ 3400:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ getConfirmLocale; },
/* harmony export */   "f": function() { return /* binding */ changeConfirmLocale; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7462);
/* harmony import */ var _locale_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1165);


var runtimeLocale = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, _locale_default__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Modal */ .Z.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, _locale_default__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Modal */ .Z.Modal);
  }
}
function getConfirmLocale() {
  return runtimeLocale;
}

/***/ }),

/***/ 5531:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BR": function() { return /* binding */ NoCompactStyle; },
/* harmony export */   "ri": function() { return /* binding */ useCompactItemContext; }
/* harmony export */ });
/* unused harmony export SpaceCompactItemContext */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7462);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4942);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6123);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4903);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7313);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4714);


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var SpaceCompactItemContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createContext(null);
var useCompactItemContext = function useCompactItemContext(prefixCls, direction) {
  var compactItemContext = react__WEBPACK_IMPORTED_MODULE_2__.useContext(SpaceCompactItemContext);
  var compactItemClassnames = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    var _classNames;
    if (!compactItemContext) return '';
    var compactDirection = compactItemContext.compactDirection,
      isFirstItem = compactItemContext.isFirstItem,
      isLastItem = compactItemContext.isLastItem;
    var separator = compactDirection === 'vertical' ? '-vertical-' : '-';
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()((_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-compact").concat(separator, "item"), true), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-compact").concat(separator, "first-item"), isFirstItem), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-compact").concat(separator, "last-item"), isLastItem), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_classNames, "".concat(prefixCls, "-compact").concat(separator, "item-rtl"), direction === 'rtl'), _classNames));
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames: compactItemClassnames
  };
};
var NoCompactStyle = function NoCompactStyle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
var CompactItem = function CompactItem(_a) {
  var children = _a.children,
    otherProps = __rest(_a, ["children"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(SpaceCompactItemContext.Provider, {
    value: otherProps
  }, children);
};
var Compact = function Compact(props) {
  var _classNames2;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_4__/* .ConfigContext */ .E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    directionConfig = _React$useContext.direction;
  var _props$size = props.size,
    size = _props$size === void 0 ? 'middle' : _props$size,
    direction = props.direction,
    block = props.block,
    customizePrefixCls = props.prefixCls,
    className = props.className,
    children = props.children,
    restProps = __rest(props, ["size", "direction", "block", "prefixCls", "className", "children"]);
  var prefixCls = getPrefixCls('space-compact', customizePrefixCls);
  var clx = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, (_classNames2 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_classNames2, "".concat(prefixCls, "-rtl"), directionConfig === 'rtl'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_classNames2, "".concat(prefixCls, "-block"), block), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_classNames2, "".concat(prefixCls, "-vertical"), direction === 'vertical'), _classNames2), className);
  var compactItemContext = react__WEBPACK_IMPORTED_MODULE_2__.useContext(SpaceCompactItemContext);
  var childNodes = (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(children);
  var nodes = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    return childNodes.map(function (child, i) {
      var key = child && child.key || "".concat(prefixCls, "-item-").concat(i);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CompactItem, {
        key: key,
        compactSize: size,
        compactDirection: direction,
        isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
        isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
      }, child);
    });
  }, [size, childNodes, compactItemContext]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
    className: clx
  }, restProps), nodes);
};
/* harmony default export */ __webpack_exports__["ZP"] = (Compact);

/***/ }),

/***/ 4393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ tabs; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(1079);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(3756);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
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
var classnames = __webpack_require__(6123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/rc-util/es/isMobile.js
var isMobile = __webpack_require__(4394);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(288);
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
var toConsumableArray = __webpack_require__(3433);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 4 modules
var rc_resize_observer_es = __webpack_require__(5172);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(9978);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5557);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(6945);
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
var useLayoutEffect = __webpack_require__(2846);
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
var rc_trigger_es = __webpack_require__(3549);
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
var KeyCode = __webpack_require__(9242);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/focus.js
var Dom_focus = __webpack_require__(2221);
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
var rc_menu_es = __webpack_require__(4224);
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
var warning = __webpack_require__(8240);
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
var context = __webpack_require__(4714);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(1631);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(3553);
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
var toArray = __webpack_require__(4903);
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

/***/ }),

/***/ 8405:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_CheckCircleOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CheckCircleOutlined.js
// This icon file is generated automatically.
var CheckCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }]
  },
  "name": "check-circle",
  "theme": "outlined"
};
/* harmony default export */ var asn_CheckCircleOutlined = (CheckCircleOutlined);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(6321);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var CheckCircleOutlined_CheckCircleOutlined = function CheckCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CheckCircleOutlined
  }));
};
CheckCircleOutlined_CheckCircleOutlined.displayName = 'CheckCircleOutlined';
/* harmony default export */ var icons_CheckCircleOutlined = (/*#__PURE__*/react.forwardRef(CheckCircleOutlined_CheckCircleOutlined));

/***/ }),

/***/ 3747:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_CloseCircleOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CloseCircleOutlined.js
// This icon file is generated automatically.
var CloseCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }]
  },
  "name": "close-circle",
  "theme": "outlined"
};
/* harmony default export */ var asn_CloseCircleOutlined = (CloseCircleOutlined);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(6321);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var CloseCircleOutlined_CloseCircleOutlined = function CloseCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CloseCircleOutlined
  }));
};
CloseCircleOutlined_CloseCircleOutlined.displayName = 'CloseCircleOutlined';
/* harmony default export */ var icons_CloseCircleOutlined = (/*#__PURE__*/react.forwardRef(CloseCircleOutlined_CloseCircleOutlined));

/***/ }),

/***/ 1079:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_CloseOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js
// This icon file is generated automatically.
var CloseOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
      }
    }]
  },
  "name": "close",
  "theme": "outlined"
};
/* harmony default export */ var asn_CloseOutlined = (CloseOutlined);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(6321);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var CloseOutlined_CloseOutlined = function CloseOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CloseOutlined
  }));
};
CloseOutlined_CloseOutlined.displayName = 'CloseOutlined';
/* harmony default export */ var icons_CloseOutlined = (/*#__PURE__*/react.forwardRef(CloseOutlined_CloseOutlined));

/***/ }),

/***/ 4400:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_ExclamationCircleOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ExclamationCircleOutlined.js
// This icon file is generated automatically.
var ExclamationCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"
      }
    }]
  },
  "name": "exclamation-circle",
  "theme": "outlined"
};
/* harmony default export */ var asn_ExclamationCircleOutlined = (ExclamationCircleOutlined);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(6321);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var ExclamationCircleOutlined_ExclamationCircleOutlined = function ExclamationCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_ExclamationCircleOutlined
  }));
};
ExclamationCircleOutlined_ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';
/* harmony default export */ var icons_ExclamationCircleOutlined = (/*#__PURE__*/react.forwardRef(ExclamationCircleOutlined_ExclamationCircleOutlined));

/***/ }),

/***/ 4997:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_InfoCircleOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/InfoCircleOutlined.js
// This icon file is generated automatically.
var InfoCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
      }
    }]
  },
  "name": "info-circle",
  "theme": "outlined"
};
/* harmony default export */ var asn_InfoCircleOutlined = (InfoCircleOutlined);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(6321);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var InfoCircleOutlined_InfoCircleOutlined = function InfoCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_InfoCircleOutlined
  }));
};
InfoCircleOutlined_InfoCircleOutlined.displayName = 'InfoCircleOutlined';
/* harmony default export */ var icons_InfoCircleOutlined = (/*#__PURE__*/react.forwardRef(InfoCircleOutlined_InfoCircleOutlined));

/***/ }),

/***/ 4470:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_LoadingOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/LoadingOutlined.js
// This icon file is generated automatically.
var LoadingOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "0 0 1024 1024",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
      }
    }]
  },
  "name": "loading",
  "theme": "outlined"
};
/* harmony default export */ var asn_LoadingOutlined = (LoadingOutlined);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(6321);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var LoadingOutlined_LoadingOutlined = function LoadingOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_LoadingOutlined
  }));
};
LoadingOutlined_LoadingOutlined.displayName = 'LoadingOutlined';
/* harmony default export */ var icons_LoadingOutlined = (/*#__PURE__*/react.forwardRef(LoadingOutlined_LoadingOutlined));

/***/ }),

/***/ 1067:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_SearchOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/SearchOutlined.js
// This icon file is generated automatically.
var SearchOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
      }
    }]
  },
  "name": "search",
  "theme": "outlined"
};
/* harmony default export */ var asn_SearchOutlined = (SearchOutlined);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(6321);
;// CONCATENATED MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/SearchOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var SearchOutlined_SearchOutlined = function SearchOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_SearchOutlined
  }));
};
SearchOutlined_SearchOutlined.displayName = 'SearchOutlined';
/* harmony default export */ var icons_SearchOutlined = (/*#__PURE__*/react.forwardRef(SearchOutlined_SearchOutlined));

/***/ }),

/***/ 1325:
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/
      var installedModules = {};

      /******/ // The require function
      /******/
      function __nested_webpack_require_554__(moduleId) {
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) /******/return installedModules[moduleId].exports;

        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
          /******/exports: {},
          /******/id: moduleId,
          /******/loaded: false
          /******/
        };

        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_554__);

        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;

        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
      }

      /******/ // expose the modules object (__webpack_modules__)
      /******/
      __nested_webpack_require_554__.m = modules;

      /******/ // expose the module cache
      /******/
      __nested_webpack_require_554__.c = installedModules;

      /******/ // __webpack_public_path__
      /******/
      __nested_webpack_require_554__.p = "";

      /******/ // Load entry module and return exports
      /******/
      return __nested_webpack_require_554__(0);
      /******/
    }
    /************************************************************************/
    /******/([/* 0 */
    /***/function (module, exports, __nested_webpack_require_1970__) {
      /* global require, module, window */
      var Handler = __nested_webpack_require_1970__(1);
      var Util = __nested_webpack_require_1970__(3);
      var Random = __nested_webpack_require_1970__(5);
      var RE = __nested_webpack_require_1970__(20);
      var toJSONSchema = __nested_webpack_require_1970__(23);
      var valid = __nested_webpack_require_1970__(25);
      var XHR;
      if (typeof window !== 'undefined') XHR = __nested_webpack_require_1970__(27);

      /*!
          Mock - 模拟请求 & 模拟数据
          https://github.com/nuysoft/Mock
          墨智 mozhi.gyy@taobao.com nuysoft@gmail.com
      */
      var Mock = {
        Handler: Handler,
        Random: Random,
        Util: Util,
        XHR: XHR,
        RE: RE,
        toJSONSchema: toJSONSchema,
        valid: valid,
        heredoc: Util.heredoc,
        setup: function setup(settings) {
          return XHR.setup(settings);
        },
        _mocked: {}
      };
      Mock.version = '1.0.1-beta3';

      // 避免循环依赖
      if (XHR) XHR.Mock = Mock;

      /*
          * Mock.mock( template )
          * Mock.mock( function() )
          * Mock.mock( rurl, template )
          * Mock.mock( rurl, function(options) )
          * Mock.mock( rurl, rtype, template )
          * Mock.mock( rurl, rtype, function(options) )
      	    根据数据模板生成模拟数据。
      */
      Mock.mock = function (rurl, rtype, template) {
        // Mock.mock(template)
        if (arguments.length === 1) {
          return Handler.gen(rurl);
        }
        // Mock.mock(rurl, template)
        if (arguments.length === 2) {
          template = rtype;
          rtype = undefined;
        }
        // 拦截 XHR
        if (XHR) window.XMLHttpRequest = XHR;
        Mock._mocked[rurl + (rtype || '')] = {
          rurl: rurl,
          rtype: rtype,
          template: template
        };
        return Mock;
      };
      module.exports = Mock;

      /***/
    }, /* 1 */
    /***/function (module, exports, __nested_webpack_require_3880__) {
      /* 
          ## Handler
      	    处理数据模板。
          
          * Handler.gen( template, name?, context? )
      	        入口方法。
      	    * Data Template Definition, DTD
              
              处理数据模板定义。
      	        * Handler.array( options )
              * Handler.object( options )
              * Handler.number( options )
              * Handler.boolean( options )
              * Handler.string( options )
              * Handler.function( options )
              * Handler.regexp( options )
              
              处理路径（相对和绝对）。
      	        * Handler.getValueByKeyPath( key, options )
      	    * Data Placeholder Definition, DPD
      	        处理数据占位符定义
      	        * Handler.placeholder( placeholder, context, templateContext, options )
      	*/

      var Constant = __nested_webpack_require_3880__(2);
      var Util = __nested_webpack_require_3880__(3);
      var Parser = __nested_webpack_require_3880__(4);
      var Random = __nested_webpack_require_3880__(5);
      var RE = __nested_webpack_require_3880__(20);
      var Handler = {
        extend: Util.extend
      };

      /*
          template        属性值（即数据模板）
          name            属性名
          context         数据上下文，生成后的数据
          templateContext 模板上下文，
      	    Handle.gen(template, name, options)
          context
              currentContext, templateCurrentContext, 
              path, templatePath
              root, templateRoot
      */
      Handler.gen = function (template, name, context) {
        /* jshint -W041 */
        name = name == undefined ? '' : name + '';
        context = context || {};
        context = {
          // 当前访问路径，只有属性名，不包括生成规则
          path: context.path || [Constant.GUID],
          templatePath: context.templatePath || [Constant.GUID++],
          // 最终属性值的上下文
          currentContext: context.currentContext,
          // 属性值模板的上下文
          templateCurrentContext: context.templateCurrentContext || template,
          // 最终值的根
          root: context.root || context.currentContext,
          // 模板的根
          templateRoot: context.templateRoot || context.templateCurrentContext || template
        };
        // console.log('path:', context.path.join('.'), template)

        var rule = Parser.parse(name);
        var type = Util.type(template);
        var data;
        if (Handler[type]) {
          data = Handler[type]({
            // 属性值类型
            type: type,
            // 属性值模板
            template: template,
            // 属性名 + 生成规则
            name: name,
            // 属性名
            parsedName: name ? name.replace(Constant.RE_KEY, '$1') : name,
            // 解析后的生成规则
            rule: rule,
            // 相关上下文
            context: context
          });
          if (!context.root) context.root = data;
          return data;
        }
        return template;
      };
      Handler.extend({
        array: function array(options) {
          var result = [],
            i,
            ii;

          // 'name|1': []
          // 'name|count': []
          // 'name|min-max': []
          if (options.template.length === 0) return result;

          // 'arr': [{ 'email': '@EMAIL' }, { 'email': '@EMAIL' }]
          if (!options.rule.parameters) {
            for (i = 0; i < options.template.length; i++) {
              options.context.path.push(i);
              options.context.templatePath.push(i);
              result.push(Handler.gen(options.template[i], i, {
                path: options.context.path,
                templatePath: options.context.templatePath,
                currentContext: result,
                templateCurrentContext: options.template,
                root: options.context.root || result,
                templateRoot: options.context.templateRoot || options.template
              }));
              options.context.path.pop();
              options.context.templatePath.pop();
            }
          } else {
            // 'method|1': ['GET', 'POST', 'HEAD', 'DELETE']
            if (options.rule.min === 1 && options.rule.max === undefined) {
              // fix #17
              options.context.path.push(options.name);
              options.context.templatePath.push(options.name);
              result = Random.pick(Handler.gen(options.template, undefined, {
                path: options.context.path,
                templatePath: options.context.templatePath,
                currentContext: result,
                templateCurrentContext: options.template,
                root: options.context.root || result,
                templateRoot: options.context.templateRoot || options.template
              }));
              options.context.path.pop();
              options.context.templatePath.pop();
            } else {
              // 'data|+1': [{}, {}]
              if (options.rule.parameters[2]) {
                options.template.__order_index = options.template.__order_index || 0;
                options.context.path.push(options.name);
                options.context.templatePath.push(options.name);
                result = Handler.gen(options.template, undefined, {
                  path: options.context.path,
                  templatePath: options.context.templatePath,
                  currentContext: result,
                  templateCurrentContext: options.template,
                  root: options.context.root || result,
                  templateRoot: options.context.templateRoot || options.template
                })[options.template.__order_index % options.template.length];
                options.template.__order_index += +options.rule.parameters[2];
                options.context.path.pop();
                options.context.templatePath.pop();
              } else {
                // 'data|1-10': [{}]
                for (i = 0; i < options.rule.count; i++) {
                  // 'data|1-10': [{}, {}]
                  for (ii = 0; ii < options.template.length; ii++) {
                    options.context.path.push(result.length);
                    options.context.templatePath.push(ii);
                    result.push(Handler.gen(options.template[ii], result.length, {
                      path: options.context.path,
                      templatePath: options.context.templatePath,
                      currentContext: result,
                      templateCurrentContext: options.template,
                      root: options.context.root || result,
                      templateRoot: options.context.templateRoot || options.template
                    }));
                    options.context.path.pop();
                    options.context.templatePath.pop();
                  }
                }
              }
            }
          }
          return result;
        },
        object: function object(options) {
          var result = {},
            keys,
            fnKeys,
            key,
            parsedKey,
            inc,
            i;

          // 'obj|min-max': {}
          /* jshint -W041 */
          if (options.rule.min != undefined) {
            keys = Util.keys(options.template);
            keys = Random.shuffle(keys);
            keys = keys.slice(0, options.rule.count);
            for (i = 0; i < keys.length; i++) {
              key = keys[i];
              parsedKey = key.replace(Constant.RE_KEY, '$1');
              options.context.path.push(parsedKey);
              options.context.templatePath.push(key);
              result[parsedKey] = Handler.gen(options.template[key], key, {
                path: options.context.path,
                templatePath: options.context.templatePath,
                currentContext: result,
                templateCurrentContext: options.template,
                root: options.context.root || result,
                templateRoot: options.context.templateRoot || options.template
              });
              options.context.path.pop();
              options.context.templatePath.pop();
            }
          } else {
            // 'obj': {}
            keys = [];
            fnKeys = []; // #25 改变了非函数属性的顺序，查找起来不方便
            for (key in options.template) {
              (typeof options.template[key] === 'function' ? fnKeys : keys).push(key);
            }
            keys = keys.concat(fnKeys);

            /*
                会改变非函数属性的顺序
                keys = Util.keys(options.template)
                keys.sort(function(a, b) {
                    var afn = typeof options.template[a] === 'function'
                    var bfn = typeof options.template[b] === 'function'
                    if (afn === bfn) return 0
                    if (afn && !bfn) return 1
                    if (!afn && bfn) return -1
                })
            */

            for (i = 0; i < keys.length; i++) {
              key = keys[i];
              parsedKey = key.replace(Constant.RE_KEY, '$1');
              options.context.path.push(parsedKey);
              options.context.templatePath.push(key);
              result[parsedKey] = Handler.gen(options.template[key], key, {
                path: options.context.path,
                templatePath: options.context.templatePath,
                currentContext: result,
                templateCurrentContext: options.template,
                root: options.context.root || result,
                templateRoot: options.context.templateRoot || options.template
              });
              options.context.path.pop();
              options.context.templatePath.pop();
              // 'id|+1': 1
              inc = key.match(Constant.RE_KEY);
              if (inc && inc[2] && Util.type(options.template[key]) === 'number') {
                options.template[key] += parseInt(inc[2], 10);
              }
            }
          }
          return result;
        },
        number: function number(options) {
          var result, parts;
          if (options.rule.decimal) {
            // float
            options.template += '';
            parts = options.template.split('.');
            // 'float1|.1-10': 10,
            // 'float2|1-100.1-10': 1,
            // 'float3|999.1-10': 1,
            // 'float4|.3-10': 123.123,
            parts[0] = options.rule.range ? options.rule.count : parts[0];
            parts[1] = (parts[1] || '').slice(0, options.rule.dcount);
            while (parts[1].length < options.rule.dcount) {
              parts[1] +=
              // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
              parts[1].length < options.rule.dcount - 1 ? Random.character('number') : Random.character('123456789');
            }
            result = parseFloat(parts.join('.'), 10);
          } else {
            // integer
            // 'grade1|1-100': 1,
            result = options.rule.range && !options.rule.parameters[2] ? options.rule.count : options.template;
          }
          return result;
        },
        boolean: function boolean(options) {
          var result;
          // 'prop|multiple': false, 当前值是相反值的概率倍数
          // 'prop|probability-probability': false, 当前值与相反值的概率
          result = options.rule.parameters ? Random.bool(options.rule.min, options.rule.max, options.template) : options.template;
          return result;
        },
        string: function string(options) {
          var result = '',
            i,
            placeholders,
            ph,
            phed;
          if (options.template.length) {
            //  'foo': '★',
            /* jshint -W041 */
            if (options.rule.count == undefined) {
              result += options.template;
            }

            // 'star|1-5': '★',
            for (i = 0; i < options.rule.count; i++) {
              result += options.template;
            }
            // 'email|1-10': '@EMAIL, ',
            placeholders = result.match(Constant.RE_PLACEHOLDER) || []; // A-Z_0-9 > \w_
            for (i = 0; i < placeholders.length; i++) {
              ph = placeholders[i];

              // 遇到转义斜杠，不需要解析占位符
              if (/^\\/.test(ph)) {
                placeholders.splice(i--, 1);
                continue;
              }
              phed = Handler.placeholder(ph, options.context.currentContext, options.context.templateCurrentContext, options);

              // 只有一个占位符，并且没有其他字符
              if (placeholders.length === 1 && ph === result && typeof phed !== typeof result) {
                // 
                result = phed;
                break;
                if (Util.isNumeric(phed)) {
                  result = parseFloat(phed, 10);
                  break;
                }
                if (/^(true|false)$/.test(phed)) {
                  result = phed === 'true' ? true : phed === 'false' ? false : phed; // 已经是布尔值
                  break;
                }
              }
              result = result.replace(ph, phed);
            }
          } else {
            // 'ASCII|1-10': '',
            // 'ASCII': '',
            result = options.rule.range ? Random.string(options.rule.count) : options.template;
          }
          return result;
        },
        'function': function _function(options) {
          // ( context, options )
          return options.template.call(options.context.currentContext, options);
        },
        'regexp': function regexp(options) {
          var source = '';

          // 'name': /regexp/,
          /* jshint -W041 */
          if (options.rule.count == undefined) {
            source += options.template.source; // regexp.source
          }

          // 'name|1-5': /regexp/,
          for (var i = 0; i < options.rule.count; i++) {
            source += options.template.source;
          }
          return RE.Handler.gen(RE.Parser.parse(source));
        }
      });
      Handler.extend({
        _all: function _all() {
          var re = {};
          for (var key in Random) re[key.toLowerCase()] = key;
          return re;
        },
        // 处理占位符，转换为最终值
        placeholder: function placeholder(_placeholder, obj, templateContext, options) {
          // console.log(options.context.path)
          // 1 key, 2 params
          Constant.RE_PLACEHOLDER.exec('');
          var parts = Constant.RE_PLACEHOLDER.exec(_placeholder),
            key = parts && parts[1],
            lkey = key && key.toLowerCase(),
            okey = this._all()[lkey],
            params = parts && parts[2] || '';
          var pathParts = this.splitPathToArray(key);

          // 解析占位符的参数
          try {
            // 1. 尝试保持参数的类型
            /*
                #24 [Window Firefox 30.0 引用 占位符 抛错](https://github.com/nuysoft/Mock/issues/24)
                [BX9056: 各浏览器下 window.eval 方法的执行上下文存在差异](http://www.w3help.org/zh-cn/causes/BX9056)
                应该属于 Window Firefox 30.0 的 BUG
            */
            /* jshint -W061 */
            params = eval('(function(){ return [].splice.call(arguments, 0 ) })(' + params + ')');
          } catch (error) {
            // 2. 如果失败，只能解析为字符串
            // console.error(error)
            // if (error instanceof ReferenceError) params = parts[2].split(/,\s*/);
            // else throw error
            params = parts[2].split(/,\s*/);
          }

          // 占位符优先引用数据模板中的属性
          if (obj && key in obj) return obj[key];

          // @index @key
          // if (Constant.RE_INDEX.test(key)) return +options.name
          // if (Constant.RE_KEY.test(key)) return options.name

          // 绝对路径 or 相对路径
          if (key.charAt(0) === '/' || pathParts.length > 1) return this.getValueByKeyPath(key, options);

          // 递归引用数据模板中的属性
          if (templateContext && typeof templateContext === 'object' && key in templateContext && _placeholder !== templateContext[key] // fix #15 避免自己依赖自己
          ) {
            // 先计算被引用的属性值
            templateContext[key] = Handler.gen(templateContext[key], key, {
              currentContext: obj,
              templateCurrentContext: templateContext
            });
            return templateContext[key];
          }

          // 如果未找到，则原样返回
          if (!(key in Random) && !(lkey in Random) && !(okey in Random)) return _placeholder;

          // 递归解析参数中的占位符
          for (var i = 0; i < params.length; i++) {
            Constant.RE_PLACEHOLDER.exec('');
            if (Constant.RE_PLACEHOLDER.test(params[i])) {
              params[i] = Handler.placeholder(params[i], obj, templateContext, options);
            }
          }
          var handle = Random[key] || Random[lkey] || Random[okey];
          switch (Util.type(handle)) {
            case 'array':
              // 自动从数组中取一个，例如 @areas
              return Random.pick(handle);
            case 'function':
              // 执行占位符方法（大多数情况）
              handle.options = options;
              var re = handle.apply(Random, params);
              if (re === undefined) re = ''; // 因为是在字符串中，所以默认为空字符串。
              delete handle.options;
              return re;
          }
        },
        getValueByKeyPath: function getValueByKeyPath(key, options) {
          var originalKey = key;
          var keyPathParts = this.splitPathToArray(key);
          var absolutePathParts = [];

          // 绝对路径
          if (key.charAt(0) === '/') {
            absolutePathParts = [options.context.path[0]].concat(this.normalizePath(keyPathParts));
          } else {
            // 相对路径
            if (keyPathParts.length > 1) {
              absolutePathParts = options.context.path.slice(0);
              absolutePathParts.pop();
              absolutePathParts = this.normalizePath(absolutePathParts.concat(keyPathParts));
            }
          }
          try {
            key = keyPathParts[keyPathParts.length - 1];
            var currentContext = options.context.root;
            var templateCurrentContext = options.context.templateRoot;
            for (var i = 1; i < absolutePathParts.length - 1; i++) {
              currentContext = currentContext[absolutePathParts[i]];
              templateCurrentContext = templateCurrentContext[absolutePathParts[i]];
            }
            // 引用的值已经计算好
            if (currentContext && key in currentContext) return currentContext[key];

            // 尚未计算，递归引用数据模板中的属性
            if (templateCurrentContext && typeof templateCurrentContext === 'object' && key in templateCurrentContext && originalKey !== templateCurrentContext[key] // fix #15 避免自己依赖自己
            ) {
              // 先计算被引用的属性值
              templateCurrentContext[key] = Handler.gen(templateCurrentContext[key], key, {
                currentContext: currentContext,
                templateCurrentContext: templateCurrentContext
              });
              return templateCurrentContext[key];
            }
          } catch (err) {}
          return '@' + keyPathParts.join('/');
        },
        // https://github.com/kissyteam/kissy/blob/master/src/path/src/path.js
        normalizePath: function normalizePath(pathParts) {
          var newPathParts = [];
          for (var i = 0; i < pathParts.length; i++) {
            switch (pathParts[i]) {
              case '..':
                newPathParts.pop();
                break;
              case '.':
                break;
              default:
                newPathParts.push(pathParts[i]);
            }
          }
          return newPathParts;
        },
        splitPathToArray: function splitPathToArray(path) {
          var parts = path.split(/\/+/);
          if (!parts[parts.length - 1]) parts = parts.slice(0, -1);
          if (!parts[0]) parts = parts.slice(1);
          return parts;
        }
      });
      module.exports = Handler;

      /***/
    }, /* 2 */
    /***/function (module, exports) {
      /*
          ## Constant
      	    常量集合。
       */
      /*
          RE_KEY
              'name|min-max': value
              'name|count': value
              'name|min-max.dmin-dmax': value
              'name|min-max.dcount': value
              'name|count.dmin-dmax': value
              'name|count.dcount': value
              'name|+step': value
      	        1 name, 2 step, 3 range [ min, max ], 4 drange [ dmin, dmax ]
      	    RE_PLACEHOLDER
              placeholder(*)
      	    [正则查看工具](http://www.regexper.com/)
      	    #26 生成规则 支持 负数，例如 number|-100-100
      */
      module.exports = {
        GUID: 1,
        RE_KEY: /(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,
        RE_RANGE: /([\+\-]?\d+)-?([\+\-]?\d+)?/,
        RE_PLACEHOLDER: /\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g
        // /\\*@([^@#%&()\?\s\/\.]+)(?:\((.*?)\))?/g
        // RE_INDEX: /^index$/,
        // RE_KEY: /^key$/
      };

      /***/
    }, /* 3 */
    /***/function (module, exports) {
      /*
          ## Utilities
      */
      var Util = {};
      Util.extend = function extend() {
        var target = arguments[0] || {},
          i = 1,
          length = arguments.length,
          options,
          name,
          src,
          copy,
          clone;
        if (length === 1) {
          target = this;
          i = 0;
        }
        for (; i < length; i++) {
          options = arguments[i];
          if (!options) continue;
          for (name in options) {
            src = target[name];
            copy = options[name];
            if (target === copy) continue;
            if (copy === undefined) continue;
            if (Util.isArray(copy) || Util.isObject(copy)) {
              if (Util.isArray(copy)) clone = src && Util.isArray(src) ? src : [];
              if (Util.isObject(copy)) clone = src && Util.isObject(src) ? src : {};
              target[name] = Util.extend(clone, copy);
            } else {
              target[name] = copy;
            }
          }
        }
        return target;
      };
      Util.each = function each(obj, iterator, context) {
        var i, key;
        if (this.type(obj) === 'number') {
          for (i = 0; i < obj; i++) {
            iterator(i, i);
          }
        } else if (obj.length === +obj.length) {
          for (i = 0; i < obj.length; i++) {
            if (iterator.call(context, obj[i], i, obj) === false) break;
          }
        } else {
          for (key in obj) {
            if (iterator.call(context, obj[key], key, obj) === false) break;
          }
        }
      };
      Util.type = function type(obj) {
        return obj === null || obj === undefined ? String(obj) : Object.prototype.toString.call(obj).match(/\[object (\w+)\]/)[1].toLowerCase();
      };
      Util.each('String Object Array RegExp Function'.split(' '), function (value) {
        Util['is' + value] = function (obj) {
          return Util.type(obj) === value.toLowerCase();
        };
      });
      Util.isObjectOrArray = function (value) {
        return Util.isObject(value) || Util.isArray(value);
      };
      Util.isNumeric = function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
      };
      Util.keys = function (obj) {
        var keys = [];
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) keys.push(key);
        }
        return keys;
      };
      Util.values = function (obj) {
        var values = [];
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) values.push(obj[key]);
        }
        return values;
      };

      /*
          ### Mock.heredoc(fn)
      	    * Mock.heredoc(fn)
      	    以直观、安全的方式书写（多行）HTML 模板。
      	    **使用示例**如下所示：
      	        var tpl = Mock.heredoc(function() {
                  /*!
              {{email}}{{age}}
              <!-- Mock { 
                  email: '@EMAIL',
                  age: '@INT(1,100)'
              } -->
                  *\/
              })
          
          **相关阅读**
          * [Creating multiline strings in JavaScript](http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript)、
      */
      Util.heredoc = function heredoc(fn) {
        // 1. 移除起始的 function(){ /*!
        // 2. 移除末尾的 */ }
        // 3. 移除起始和末尾的空格
        return fn.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '').replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, ''); // .trim()
      };

      Util.noop = function () {};
      module.exports = Util;

      /***/
    }, /* 4 */
    /***/function (module, exports, __nested_webpack_require_28114__) {
      /*
      	## Parser
      		解析数据模板（属性名部分）。
      		* Parser.parse( name )
      		
      		```json
      		{
      			parameters: [ name, inc, range, decimal ],
      			rnage: [ min , max ],
      				min: min,
      			max: max,
      			count : count,
      				decimal: decimal,
      			dmin: dmin,
      			dmax: dmax,
      			dcount: dcount
      		}
      		```
       */

      var Constant = __nested_webpack_require_28114__(2);
      var Random = __nested_webpack_require_28114__(5);

      /* jshint -W041 */
      module.exports = {
        parse: function parse(name) {
          name = name == undefined ? '' : name + '';
          var parameters = (name || '').match(Constant.RE_KEY);
          var range = parameters && parameters[3] && parameters[3].match(Constant.RE_RANGE);
          var min = range && range[1] && parseInt(range[1], 10); // || 1
          var max = range && range[2] && parseInt(range[2], 10); // || 1
          // repeat || min-max || 1
          // var count = range ? !range[2] && parseInt(range[1], 10) || Random.integer(min, max) : 1
          var count = range ? !range[2] ? parseInt(range[1], 10) : Random.integer(min, max) : undefined;
          var decimal = parameters && parameters[4] && parameters[4].match(Constant.RE_RANGE);
          var dmin = decimal && decimal[1] && parseInt(decimal[1], 10); // || 0,
          var dmax = decimal && decimal[2] && parseInt(decimal[2], 10); // || 0,
          // int || dmin-dmax || 0
          var dcount = decimal ? !decimal[2] && parseInt(decimal[1], 10) || Random.integer(dmin, dmax) : undefined;
          var result = {
            // 1 name, 2 inc, 3 range, 4 decimal
            parameters: parameters,
            // 1 min, 2 max
            range: range,
            min: min,
            max: max,
            // min-max
            count: count,
            // 是否有 decimal
            decimal: decimal,
            dmin: dmin,
            dmax: dmax,
            // dmin-dimax
            dcount: dcount
          };
          for (var r in result) {
            if (result[r] != undefined) return result;
          }
          return {};
        }
      };

      /***/
    }, /* 5 */
    /***/function (module, exports, __nested_webpack_require_30341__) {
      /*
          ## Mock.Random
          
          工具类，用于生成各种随机数据。
      */

      var Util = __nested_webpack_require_30341__(3);
      var Random = {
        extend: Util.extend
      };
      Random.extend(__nested_webpack_require_30341__(6));
      Random.extend(__nested_webpack_require_30341__(7));
      Random.extend(__nested_webpack_require_30341__(8));
      Random.extend(__nested_webpack_require_30341__(10));
      Random.extend(__nested_webpack_require_30341__(13));
      Random.extend(__nested_webpack_require_30341__(15));
      Random.extend(__nested_webpack_require_30341__(16));
      Random.extend(__nested_webpack_require_30341__(17));
      Random.extend(__nested_webpack_require_30341__(14));
      Random.extend(__nested_webpack_require_30341__(19));
      module.exports = Random;

      /***/
    }, /* 6 */
    /***/function (module, exports) {
      /*
          ## Basics
      */
      module.exports = {
        // 返回一个随机的布尔值。
        boolean: function boolean(min, max, cur) {
          if (cur !== undefined) {
            min = typeof min !== 'undefined' && !isNaN(min) ? parseInt(min, 10) : 1;
            max = typeof max !== 'undefined' && !isNaN(max) ? parseInt(max, 10) : 1;
            return Math.random() > 1.0 / (min + max) * min ? !cur : cur;
          }
          return Math.random() >= 0.5;
        },
        bool: function bool(min, max, cur) {
          return this.boolean(min, max, cur);
        },
        // 返回一个随机的自然数（大于等于 0 的整数）。
        natural: function natural(min, max) {
          min = typeof min !== 'undefined' ? parseInt(min, 10) : 0;
          max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992; // 2^53
          return Math.round(Math.random() * (max - min)) + min;
        },
        // 返回一个随机的整数。
        integer: function integer(min, max) {
          min = typeof min !== 'undefined' ? parseInt(min, 10) : -9007199254740992;
          max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992; // 2^53
          return Math.round(Math.random() * (max - min)) + min;
        },
        int: function int(min, max) {
          return this.integer(min, max);
        },
        // 返回一个随机的浮点数。
        float: function float(min, max, dmin, dmax) {
          dmin = dmin === undefined ? 0 : dmin;
          dmin = Math.max(Math.min(dmin, 17), 0);
          dmax = dmax === undefined ? 17 : dmax;
          dmax = Math.max(Math.min(dmax, 17), 0);
          var ret = this.integer(min, max) + '.';
          for (var i = 0, dcount = this.natural(dmin, dmax); i < dcount; i++) {
            ret +=
            // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
            i < dcount - 1 ? this.character('number') : this.character('123456789');
          }
          return parseFloat(ret, 10);
        },
        // 返回一个随机字符。
        character: function character(pool) {
          var pools = {
            lower: 'abcdefghijklmnopqrstuvwxyz',
            upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            number: '0123456789',
            symbol: '!@#$%^&*()[]'
          };
          pools.alpha = pools.lower + pools.upper;
          pools['undefined'] = pools.lower + pools.upper + pools.number + pools.symbol;
          pool = pools[('' + pool).toLowerCase()] || pool;
          return pool.charAt(this.natural(0, pool.length - 1));
        },
        char: function char(pool) {
          return this.character(pool);
        },
        // 返回一个随机字符串。
        string: function string(pool, min, max) {
          var len;
          switch (arguments.length) {
            case 0:
              // ()
              len = this.natural(3, 7);
              break;
            case 1:
              // ( length )
              len = pool;
              pool = undefined;
              break;
            case 2:
              // ( pool, length )
              if (typeof arguments[0] === 'string') {
                len = min;
              } else {
                // ( min, max )
                len = this.natural(pool, min);
                pool = undefined;
              }
              break;
            case 3:
              len = this.natural(min, max);
              break;
          }
          var text = '';
          for (var i = 0; i < len; i++) {
            text += this.character(pool);
          }
          return text;
        },
        str: function str( /*pool, min, max*/
        ) {
          return this.string.apply(this, arguments);
        },
        // 返回一个整型数组。
        range: function range(start, stop, step) {
          // range( stop )
          if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
          }
          // range( start, stop )
          step = arguments[2] || 1;
          start = +start;
          stop = +stop;
          step = +step;
          var len = Math.max(Math.ceil((stop - start) / step), 0);
          var idx = 0;
          var range = new Array(len);
          while (idx < len) {
            range[idx++] = start;
            start += step;
          }
          return range;
        }
      };

      /***/
    }, /* 7 */
    /***/function (module, exports) {
      /*
          ## Date
      */
      var patternLetters = {
        yyyy: 'getFullYear',
        yy: function yy(date) {
          return ('' + date.getFullYear()).slice(2);
        },
        y: 'yy',
        MM: function MM(date) {
          var m = date.getMonth() + 1;
          return m < 10 ? '0' + m : m;
        },
        M: function M(date) {
          return date.getMonth() + 1;
        },
        dd: function dd(date) {
          var d = date.getDate();
          return d < 10 ? '0' + d : d;
        },
        d: 'getDate',
        HH: function HH(date) {
          var h = date.getHours();
          return h < 10 ? '0' + h : h;
        },
        H: 'getHours',
        hh: function hh(date) {
          var h = date.getHours() % 12;
          return h < 10 ? '0' + h : h;
        },
        h: function h(date) {
          return date.getHours() % 12;
        },
        mm: function mm(date) {
          var m = date.getMinutes();
          return m < 10 ? '0' + m : m;
        },
        m: 'getMinutes',
        ss: function ss(date) {
          var s = date.getSeconds();
          return s < 10 ? '0' + s : s;
        },
        s: 'getSeconds',
        SS: function SS(date) {
          var ms = date.getMilliseconds();
          return ms < 10 && '00' + ms || ms < 100 && '0' + ms || ms;
        },
        S: 'getMilliseconds',
        A: function A(date) {
          return date.getHours() < 12 ? 'AM' : 'PM';
        },
        a: function a(date) {
          return date.getHours() < 12 ? 'am' : 'pm';
        },
        T: 'getTime'
      };
      module.exports = {
        // 日期占位符集合。
        _patternLetters: patternLetters,
        // 日期占位符正则。
        _rformat: new RegExp(function () {
          var re = [];
          for (var i in patternLetters) re.push(i);
          return '(' + re.join('|') + ')';
        }(), 'g'),
        // 格式化日期。
        _formatDate: function _formatDate(date, format) {
          return format.replace(this._rformat, function creatNewSubString($0, flag) {
            return typeof patternLetters[flag] === 'function' ? patternLetters[flag](date) : patternLetters[flag] in patternLetters ? creatNewSubString($0, patternLetters[flag]) : date[patternLetters[flag]]();
          });
        },
        // 生成一个随机的 Date 对象。
        _randomDate: function _randomDate(min, max) {
          // min, max
          min = min === undefined ? new Date(0) : min;
          max = max === undefined ? new Date() : max;
          return new Date(Math.random() * (max.getTime() - min.getTime()));
        },
        // 返回一个随机的日期字符串。
        date: function date(format) {
          format = format || 'yyyy-MM-dd';
          return this._formatDate(this._randomDate(), format);
        },
        // 返回一个随机的时间字符串。
        time: function time(format) {
          format = format || 'HH:mm:ss';
          return this._formatDate(this._randomDate(), format);
        },
        // 返回一个随机的日期和时间字符串。
        datetime: function datetime(format) {
          format = format || 'yyyy-MM-dd HH:mm:ss';
          return this._formatDate(this._randomDate(), format);
        },
        // 返回当前的日期和时间字符串。
        now: function now(unit, format) {
          // now(unit) now(format)
          if (arguments.length === 1) {
            // now(format)
            if (!/year|month|day|hour|minute|second|week/.test(unit)) {
              format = unit;
              unit = '';
            }
          }
          unit = (unit || '').toLowerCase();
          format = format || 'yyyy-MM-dd HH:mm:ss';
          var date = new Date();

          /* jshint -W086 */
          // 参考自 http://momentjs.cn/docs/#/manipulating/start-of/
          switch (unit) {
            case 'year':
              date.setMonth(0);
            case 'month':
              date.setDate(1);
            case 'week':
            case 'day':
              date.setHours(0);
            case 'hour':
              date.setMinutes(0);
            case 'minute':
              date.setSeconds(0);
            case 'second':
              date.setMilliseconds(0);
          }
          switch (unit) {
            case 'week':
              date.setDate(date.getDate() - date.getDay());
          }
          return this._formatDate(date, format);
        }
      };

      /***/
    }, /* 8 */
    /***/function (module, exports, __nested_webpack_require_39715__) {
      /* WEBPACK VAR INJECTION */(function (module) {
        /* global document  */
        /*
            ## Image
        */
        module.exports = {
          // 常见的广告宽高
          _adSize: ['300x250', '250x250', '240x400', '336x280', '180x150', '720x300', '468x60', '234x60', '88x31', '120x90', '120x60', '120x240', '125x125', '728x90', '160x600', '120x600', '300x600'],
          // 常见的屏幕宽高
          _screenSize: ['320x200', '320x240', '640x480', '800x480', '800x480', '1024x600', '1024x768', '1280x800', '1440x900', '1920x1200', '2560x1600'],
          // 常见的视频宽高
          _videoSize: ['720x480', '768x576', '1280x720', '1920x1080'],
          /*
              生成一个随机的图片地址。
               替代图片源
                  http://fpoimg.com/
              参考自 
                  http://rensanning.iteye.com/blog/1933310
                  http://code.tutsplus.com/articles/the-top-8-placeholders-for-web-designers--net-19485
          */
          image: function image(size, background, foreground, format, text) {
            // Random.image( size, background, foreground, text )
            if (arguments.length === 4) {
              text = format;
              format = undefined;
            }
            // Random.image( size, background, text )
            if (arguments.length === 3) {
              text = foreground;
              foreground = undefined;
            }
            // Random.image()
            if (!size) size = this.pick(this._adSize);
            if (background && ~background.indexOf('#')) background = background.slice(1);
            if (foreground && ~foreground.indexOf('#')) foreground = foreground.slice(1);

            // http://dummyimage.com/600x400/cc00cc/470047.png&text=hello
            return 'http://dummyimage.com/' + size + (background ? '/' + background : '') + (foreground ? '/' + foreground : '') + (format ? '.' + format : '') + (text ? '&text=' + text : '');
          },
          img: function img() {
            return this.image.apply(this, arguments);
          },
          /*
              BrandColors
              http://brandcolors.net/
              A collection of major brand color codes curated by Galen Gidman.
              大牌公司的颜色集合
               // 获取品牌和颜色
              $('h2').each(function(index, item){
                  item = $(item)
                  console.log('\'' + item.text() + '\'', ':', '\'' + item.next().text() + '\'', ',')
              })
          */
          _brandColors: {
            '4ormat': '#fb0a2a',
            '500px': '#02adea',
            'About.me (blue)': '#00405d',
            'About.me (yellow)': '#ffcc33',
            'Addvocate': '#ff6138',
            'Adobe': '#ff0000',
            'Aim': '#fcd20b',
            'Amazon': '#e47911',
            'Android': '#a4c639',
            'Angie\'s List': '#7fbb00',
            'AOL': '#0060a3',
            'Atlassian': '#003366',
            'Behance': '#053eff',
            'Big Cartel': '#97b538',
            'bitly': '#ee6123',
            'Blogger': '#fc4f08',
            'Boeing': '#0039a6',
            'Booking.com': '#003580',
            'Carbonmade': '#613854',
            'Cheddar': '#ff7243',
            'Code School': '#3d4944',
            'Delicious': '#205cc0',
            'Dell': '#3287c1',
            'Designmoo': '#e54a4f',
            'Deviantart': '#4e6252',
            'Designer News': '#2d72da',
            'Devour': '#fd0001',
            'DEWALT': '#febd17',
            'Disqus (blue)': '#59a3fc',
            'Disqus (orange)': '#db7132',
            'Dribbble': '#ea4c89',
            'Dropbox': '#3d9ae8',
            'Drupal': '#0c76ab',
            'Dunked': '#2a323a',
            'eBay': '#89c507',
            'Ember': '#f05e1b',
            'Engadget': '#00bdf6',
            'Envato': '#528036',
            'Etsy': '#eb6d20',
            'Evernote': '#5ba525',
            'Fab.com': '#dd0017',
            'Facebook': '#3b5998',
            'Firefox': '#e66000',
            'Flickr (blue)': '#0063dc',
            'Flickr (pink)': '#ff0084',
            'Forrst': '#5b9a68',
            'Foursquare': '#25a0ca',
            'Garmin': '#007cc3',
            'GetGlue': '#2d75a2',
            'Gimmebar': '#f70078',
            'GitHub': '#171515',
            'Google Blue': '#0140ca',
            'Google Green': '#16a61e',
            'Google Red': '#dd1812',
            'Google Yellow': '#fcca03',
            'Google+': '#dd4b39',
            'Grooveshark': '#f77f00',
            'Groupon': '#82b548',
            'Hacker News': '#ff6600',
            'HelloWallet': '#0085ca',
            'Heroku (light)': '#c7c5e6',
            'Heroku (dark)': '#6567a5',
            'HootSuite': '#003366',
            'Houzz': '#73ba37',
            'HTML5': '#ec6231',
            'IKEA': '#ffcc33',
            'IMDb': '#f3ce13',
            'Instagram': '#3f729b',
            'Intel': '#0071c5',
            'Intuit': '#365ebf',
            'Kickstarter': '#76cc1e',
            'kippt': '#e03500',
            'Kodery': '#00af81',
            'LastFM': '#c3000d',
            'LinkedIn': '#0e76a8',
            'Livestream': '#cf0005',
            'Lumo': '#576396',
            'Mixpanel': '#a086d3',
            'Meetup': '#e51937',
            'Nokia': '#183693',
            'NVIDIA': '#76b900',
            'Opera': '#cc0f16',
            'Path': '#e41f11',
            'PayPal (dark)': '#1e477a',
            'PayPal (light)': '#3b7bbf',
            'Pinboard': '#0000e6',
            'Pinterest': '#c8232c',
            'PlayStation': '#665cbe',
            'Pocket': '#ee4056',
            'Prezi': '#318bff',
            'Pusha': '#0f71b4',
            'Quora': '#a82400',
            'QUOTE.fm': '#66ceff',
            'Rdio': '#008fd5',
            'Readability': '#9c0000',
            'Red Hat': '#cc0000',
            'Resource': '#7eb400',
            'Rockpack': '#0ba6ab',
            'Roon': '#62b0d9',
            'RSS': '#ee802f',
            'Salesforce': '#1798c1',
            'Samsung': '#0c4da2',
            'Shopify': '#96bf48',
            'Skype': '#00aff0',
            'Snagajob': '#f47a20',
            'Softonic': '#008ace',
            'SoundCloud': '#ff7700',
            'Space Box': '#f86960',
            'Spotify': '#81b71a',
            'Sprint': '#fee100',
            'Squarespace': '#121212',
            'StackOverflow': '#ef8236',
            'Staples': '#cc0000',
            'Status Chart': '#d7584f',
            'Stripe': '#008cdd',
            'StudyBlue': '#00afe1',
            'StumbleUpon': '#f74425',
            'T-Mobile': '#ea0a8e',
            'Technorati': '#40a800',
            'The Next Web': '#ef4423',
            'Treehouse': '#5cb868',
            'Trulia': '#5eab1f',
            'Tumblr': '#34526f',
            'Twitch.tv': '#6441a5',
            'Twitter': '#00acee',
            'TYPO3': '#ff8700',
            'Ubuntu': '#dd4814',
            'Ustream': '#3388ff',
            'Verizon': '#ef1d1d',
            'Vimeo': '#86c9ef',
            'Vine': '#00a478',
            'Virb': '#06afd8',
            'Virgin Media': '#cc0000',
            'Wooga': '#5b009c',
            'WordPress (blue)': '#21759b',
            'WordPress (orange)': '#d54e21',
            'WordPress (grey)': '#464646',
            'Wunderlist': '#2b88d9',
            'XBOX': '#9bc848',
            'XING': '#126567',
            'Yahoo!': '#720e9e',
            'Yandex': '#ffcc00',
            'Yelp': '#c41200',
            'YouTube': '#c4302b',
            'Zalongo': '#5498dc',
            'Zendesk': '#78a300',
            'Zerply': '#9dcc7a',
            'Zootool': '#5e8b1d'
          },
          _brandNames: function _brandNames() {
            var brands = [];
            for (var b in this._brandColors) {
              brands.push(b);
            }
            return brands;
          },
          /*
              生成一段随机的 Base64 图片编码。
               https://github.com/imsky/holder
              Holder renders image placeholders entirely on the client side.
               dataImageHolder: function(size) {
                  return 'holder.js/' + size
              },
          */
          dataImage: function dataImage(size, text) {
            var canvas;
            if (typeof document !== 'undefined') {
              canvas = document.createElement('canvas');
            } else {
              /*
                  https://github.com/Automattic/node-canvas
                      npm install canvas --save
                  安装问题：
                  * http://stackoverflow.com/questions/22953206/gulp-issues-with-cario-install-command-not-found-when-trying-to-installing-canva
                  * https://github.com/Automattic/node-canvas/issues/415
                  * https://github.com/Automattic/node-canvas/wiki/_pages
                   PS：node-canvas 的安装过程实在是太繁琐了，所以不放入 package.json 的 dependencies。
               */
              var Canvas = module.require('canvas');
              canvas = new Canvas();
            }
            var ctx = canvas && canvas.getContext && canvas.getContext("2d");
            if (!canvas || !ctx) return '';
            if (!size) size = this.pick(this._adSize);
            text = text !== undefined ? text : size;
            size = size.split('x');
            var width = parseInt(size[0], 10),
              height = parseInt(size[1], 10),
              background = this._brandColors[this.pick(this._brandNames())],
              foreground = '#FFF',
              text_height = 14,
              font = 'sans-serif';
            canvas.width = width;
            canvas.height = height;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = background;
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = foreground;
            ctx.font = 'bold ' + text_height + 'px ' + font;
            ctx.fillText(text, width / 2, height / 2, width);
            return canvas.toDataURL('image/png');
          }
        };
        /* WEBPACK VAR INJECTION */
      }).call(exports, __nested_webpack_require_39715__(9)(module));

      /***/
    }, /* 9 */
    /***/function (module, exports) {
      module.exports = function (module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function () {};
          module.paths = [];
          // module.parent = undefined by default
          module.children = [];
          module.webpackPolyfill = 1;
        }
        return module;
      };

      /***/
    }, /* 10 */
    /***/function (module, exports, __nested_webpack_require_50301__) {
      /*
          ## Color
      	    http://llllll.li/randomColor/
              A color generator for JavaScript.
              randomColor generates attractive colors by default. More specifically, randomColor produces bright colors with a reasonably high saturation. This makes randomColor particularly useful for data visualizations and generative art.
      	    http://randomcolour.com/
              var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
              bg_colour = "#" + ("000000" + bg_colour).slice(-6);
              document.bgColor = bg_colour;
          
          http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
              Creating random colors is actually more difficult than it seems. The randomness itself is easy, but aesthetically pleasing randomness is more difficult.
              https://github.com/devongovett/color-generator
      	    http://www.paulirish.com/2009/random-hex-color-code-snippets/
              Random Hex Color Code Generator in JavaScript
      	    http://chancejs.com/#color
              chance.color()
              // => '#79c157'
              chance.color({format: 'hex'})
              // => '#d67118'
              chance.color({format: 'shorthex'})
              // => '#60f'
              chance.color({format: 'rgb'})
              // => 'rgb(110,52,164)'
      	    http://tool.c7sky.com/webcolor
              网页设计常用色彩搭配表
          
          https://github.com/One-com/one-color
              An OO-based JavaScript color parser/computation toolkit with support for RGB, HSV, HSL, CMYK, and alpha channels.
              API 很赞
      	    https://github.com/harthur/color
              JavaScript color conversion and manipulation library
      	    https://github.com/leaverou/css-colors
              Share & convert CSS colors
          http://leaverou.github.io/css-colors/#slategray
              Type a CSS color keyword, #hex, hsl(), rgba(), whatever:
      	    色调 hue
              http://baike.baidu.com/view/23368.htm
              色调指的是一幅画中画面色彩的总体倾向，是大的色彩效果。
          饱和度 saturation
              http://baike.baidu.com/view/189644.htm
              饱和度是指色彩的鲜艳程度，也称色彩的纯度。饱和度取决于该色中含色成分和消色成分（灰色）的比例。含色成分越大，饱和度越大；消色成分越大，饱和度越小。
          亮度 brightness
              http://baike.baidu.com/view/34773.htm
              亮度是指发光体（反光体）表面发光（反光）强弱的物理量。
          照度 luminosity
              物体被照亮的程度,采用单位面积所接受的光通量来表示,表示单位为勒[克斯](Lux,lx) ,即 1m / m2 。
      	    http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
              var letters = '0123456789ABCDEF'.split('')
              var color = '#'
              for (var i = 0; i < 6; i++) {
                  color += letters[Math.floor(Math.random() * 16)]
              }
              return color
          
              // 随机生成一个无脑的颜色，格式为 '#RRGGBB'。
              // _brainlessColor()
              var color = Math.floor(
                  Math.random() *
                  (16 * 16 * 16 * 16 * 16 * 16 - 1)
              ).toString(16)
              color = "#" + ("000000" + color).slice(-6)
              return color.toUpperCase()
      */

      var Convert = __nested_webpack_require_50301__(11);
      var DICT = __nested_webpack_require_50301__(12);
      module.exports = {
        // 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
        color: function color(name) {
          if (name || DICT[name]) return DICT[name].nicer;
          return this.hex();
        },
        // #DAC0DE
        hex: function hex() {
          var hsv = this._goldenRatioColor();
          var rgb = Convert.hsv2rgb(hsv);
          var hex = Convert.rgb2hex(rgb[0], rgb[1], rgb[2]);
          return hex;
        },
        // rgb(128,255,255)
        rgb: function rgb() {
          var hsv = this._goldenRatioColor();
          var rgb = Convert.hsv2rgb(hsv);
          return 'rgb(' + parseInt(rgb[0], 10) + ', ' + parseInt(rgb[1], 10) + ', ' + parseInt(rgb[2], 10) + ')';
        },
        // rgba(128,255,255,0.3)
        rgba: function rgba() {
          var hsv = this._goldenRatioColor();
          var rgb = Convert.hsv2rgb(hsv);
          return 'rgba(' + parseInt(rgb[0], 10) + ', ' + parseInt(rgb[1], 10) + ', ' + parseInt(rgb[2], 10) + ', ' + Math.random().toFixed(2) + ')';
        },
        // hsl(300,80%,90%)
        hsl: function hsl() {
          var hsv = this._goldenRatioColor();
          var hsl = Convert.hsv2hsl(hsv);
          return 'hsl(' + parseInt(hsl[0], 10) + ', ' + parseInt(hsl[1], 10) + ', ' + parseInt(hsl[2], 10) + ')';
        },
        // http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
        // https://github.com/devongovett/color-generator/blob/master/index.js
        // 随机生成一个有吸引力的颜色。
        _goldenRatioColor: function _goldenRatioColor(saturation, value) {
          this._goldenRatio = 0.618033988749895;
          this._hue = this._hue || Math.random();
          this._hue += this._goldenRatio;
          this._hue %= 1;
          if (typeof saturation !== "number") saturation = 0.5;
          if (typeof value !== "number") value = 0.95;
          return [this._hue * 360, saturation * 100, value * 100];
        }
      };

      /***/
    }, /* 11 */
    /***/function (module, exports) {
      /*
          ## Color Convert
      	    http://blog.csdn.net/idfaya/article/details/6770414
              颜色空间RGB与HSV(HSL)的转换
      */
      // https://github.com/harthur/color-convert/blob/master/conversions.js
      module.exports = {
        rgb2hsl: function rgb2hsl(rgb) {
          var r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255,
            min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            delta = max - min,
            h,
            s,
            l;
          if (max == min) h = 0;else if (r == max) h = (g - b) / delta;else if (g == max) h = 2 + (b - r) / delta;else if (b == max) h = 4 + (r - g) / delta;
          h = Math.min(h * 60, 360);
          if (h < 0) h += 360;
          l = (min + max) / 2;
          if (max == min) s = 0;else if (l <= 0.5) s = delta / (max + min);else s = delta / (2 - max - min);
          return [h, s * 100, l * 100];
        },
        rgb2hsv: function rgb2hsv(rgb) {
          var r = rgb[0],
            g = rgb[1],
            b = rgb[2],
            min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            delta = max - min,
            h,
            s,
            v;
          if (max === 0) s = 0;else s = delta / max * 1000 / 10;
          if (max == min) h = 0;else if (r == max) h = (g - b) / delta;else if (g == max) h = 2 + (b - r) / delta;else if (b == max) h = 4 + (r - g) / delta;
          h = Math.min(h * 60, 360);
          if (h < 0) h += 360;
          v = max / 255 * 1000 / 10;
          return [h, s, v];
        },
        hsl2rgb: function hsl2rgb(hsl) {
          var h = hsl[0] / 360,
            s = hsl[1] / 100,
            l = hsl[2] / 100,
            t1,
            t2,
            t3,
            rgb,
            val;
          if (s === 0) {
            val = l * 255;
            return [val, val, val];
          }
          if (l < 0.5) t2 = l * (1 + s);else t2 = l + s - l * s;
          t1 = 2 * l - t2;
          rgb = [0, 0, 0];
          for (var i = 0; i < 3; i++) {
            t3 = h + 1 / 3 * -(i - 1);
            if (t3 < 0) t3++;
            if (t3 > 1) t3--;
            if (6 * t3 < 1) val = t1 + (t2 - t1) * 6 * t3;else if (2 * t3 < 1) val = t2;else if (3 * t3 < 2) val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;else val = t1;
            rgb[i] = val * 255;
          }
          return rgb;
        },
        hsl2hsv: function hsl2hsv(hsl) {
          var h = hsl[0],
            s = hsl[1] / 100,
            l = hsl[2] / 100,
            sv,
            v;
          l *= 2;
          s *= l <= 1 ? l : 2 - l;
          v = (l + s) / 2;
          sv = 2 * s / (l + s);
          return [h, sv * 100, v * 100];
        },
        hsv2rgb: function hsv2rgb(hsv) {
          var h = hsv[0] / 60;
          var s = hsv[1] / 100;
          var v = hsv[2] / 100;
          var hi = Math.floor(h) % 6;
          var f = h - Math.floor(h);
          var p = 255 * v * (1 - s);
          var q = 255 * v * (1 - s * f);
          var t = 255 * v * (1 - s * (1 - f));
          v = 255 * v;
          switch (hi) {
            case 0:
              return [v, t, p];
            case 1:
              return [q, v, p];
            case 2:
              return [p, v, t];
            case 3:
              return [p, q, v];
            case 4:
              return [t, p, v];
            case 5:
              return [v, p, q];
          }
        },
        hsv2hsl: function hsv2hsl(hsv) {
          var h = hsv[0],
            s = hsv[1] / 100,
            v = hsv[2] / 100,
            sl,
            l;
          l = (2 - s) * v;
          sl = s * v;
          sl /= l <= 1 ? l : 2 - l;
          l /= 2;
          return [h, sl * 100, l * 100];
        },
        // http://www.140byt.es/keywords/color
        rgb2hex: function rgb2hex(a,
        // red, as a number from 0 to 255
        b,
        // green, as a number from 0 to 255
        c // blue, as a number from 0 to 255
        ) {
          return "#" + ((256 + a << 8 | b) << 8 | c).toString(16).slice(1);
        },
        hex2rgb: function hex2rgb(a // take a "#xxxxxx" hex string,
        ) {
          a = '0x' + a.slice(1).replace(a.length > 4 ? a : /./g, '$&$&') | 0;
          return [a >> 16, a >> 8 & 255, a & 255];
        }
      };

      /***/
    }, /* 12 */
    /***/function (module, exports) {
      /*
          ## Color 字典数据
      	    字典数据来源 [A nicer color palette for the web](http://clrs.cc/)
      */
      module.exports = {
        // name value nicer
        navy: {
          value: '#000080',
          nicer: '#001F3F'
        },
        blue: {
          value: '#0000ff',
          nicer: '#0074D9'
        },
        aqua: {
          value: '#00ffff',
          nicer: '#7FDBFF'
        },
        teal: {
          value: '#008080',
          nicer: '#39CCCC'
        },
        olive: {
          value: '#008000',
          nicer: '#3D9970'
        },
        green: {
          value: '#008000',
          nicer: '#2ECC40'
        },
        lime: {
          value: '#00ff00',
          nicer: '#01FF70'
        },
        yellow: {
          value: '#ffff00',
          nicer: '#FFDC00'
        },
        orange: {
          value: '#ffa500',
          nicer: '#FF851B'
        },
        red: {
          value: '#ff0000',
          nicer: '#FF4136'
        },
        maroon: {
          value: '#800000',
          nicer: '#85144B'
        },
        fuchsia: {
          value: '#ff00ff',
          nicer: '#F012BE'
        },
        purple: {
          value: '#800080',
          nicer: '#B10DC9'
        },
        silver: {
          value: '#c0c0c0',
          nicer: '#DDDDDD'
        },
        gray: {
          value: '#808080',
          nicer: '#AAAAAA'
        },
        black: {
          value: '#000000',
          nicer: '#111111'
        },
        white: {
          value: '#FFFFFF',
          nicer: '#FFFFFF'
        }
      };

      /***/
    }, /* 13 */
    /***/function (module, exports, __nested_webpack_require_61583__) {
      /*
          ## Text
      	    http://www.lipsum.com/
      */
      var Basic = __nested_webpack_require_61583__(6);
      var Helper = __nested_webpack_require_61583__(14);
      function range(defaultMin, defaultMax, min, max) {
        return min === undefined ? Basic.natural(defaultMin, defaultMax) :
        // ()
        max === undefined ? min :
        // ( len )
        Basic.natural(parseInt(min, 10), parseInt(max, 10)); // ( min, max )
      }

      module.exports = {
        // 随机生成一段文本。
        paragraph: function paragraph(min, max) {
          var len = range(3, 7, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.sentence());
          }
          return result.join(' ');
        },
        // 
        cparagraph: function cparagraph(min, max) {
          var len = range(3, 7, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.csentence());
          }
          return result.join('');
        },
        // 随机生成一个句子，第一个单词的首字母大写。
        sentence: function sentence(min, max) {
          var len = range(12, 18, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.word());
          }
          return Helper.capitalize(result.join(' ')) + '.';
        },
        // 随机生成一个中文句子。
        csentence: function csentence(min, max) {
          var len = range(12, 18, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.cword());
          }
          return result.join('') + '。';
        },
        // 随机生成一个单词。
        word: function word(min, max) {
          var len = range(3, 10, min, max);
          var result = '';
          for (var i = 0; i < len; i++) {
            result += Basic.character('lower');
          }
          return result;
        },
        // 随机生成一个或多个汉字。
        cword: function cword(pool, min, max) {
          // 最常用的 500 个汉字 http://baike.baidu.com/view/568436.htm
          var DICT_KANZI = '的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞';
          var len;
          switch (arguments.length) {
            case 0:
              // ()
              pool = DICT_KANZI;
              len = 1;
              break;
            case 1:
              // ( pool )
              if (typeof arguments[0] === 'string') {
                len = 1;
              } else {
                // ( length )
                len = pool;
                pool = DICT_KANZI;
              }
              break;
            case 2:
              // ( pool, length )
              if (typeof arguments[0] === 'string') {
                len = min;
              } else {
                // ( min, max )
                len = this.natural(pool, min);
                pool = DICT_KANZI;
              }
              break;
            case 3:
              len = this.natural(min, max);
              break;
          }
          var result = '';
          for (var i = 0; i < len; i++) {
            result += pool.charAt(this.natural(0, pool.length - 1));
          }
          return result;
        },
        // 随机生成一句标题，其中每个单词的首字母大写。
        title: function title(min, max) {
          var len = range(3, 7, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.capitalize(this.word()));
          }
          return result.join(' ');
        },
        // 随机生成一句中文标题。
        ctitle: function ctitle(min, max) {
          var len = range(3, 7, min, max);
          var result = [];
          for (var i = 0; i < len; i++) {
            result.push(this.cword());
          }
          return result.join('');
        }
      };

      /***/
    }, /* 14 */
    /***/function (module, exports, __nested_webpack_require_65867__) {
      /*
          ## Helpers
      */

      var Util = __nested_webpack_require_65867__(3);
      module.exports = {
        // 把字符串的第一个字母转换为大写。
        capitalize: function capitalize(word) {
          return (word + '').charAt(0).toUpperCase() + (word + '').substr(1);
        },
        // 把字符串转换为大写。
        upper: function upper(str) {
          return (str + '').toUpperCase();
        },
        // 把字符串转换为小写。
        lower: function lower(str) {
          return (str + '').toLowerCase();
        },
        // 从数组中随机选取一个元素，并返回。
        pick: function pick(arr, min, max) {
          // pick( item1, item2 ... )
          if (!Util.isArray(arr)) {
            arr = [].slice.call(arguments);
            min = 1;
            max = 1;
          } else {
            // pick( [ item1, item2 ... ] )
            if (min === undefined) min = 1;

            // pick( [ item1, item2 ... ], count )
            if (max === undefined) max = min;
          }
          if (min === 1 && max === 1) return arr[this.natural(0, arr.length - 1)];

          // pick( [ item1, item2 ... ], min, max )
          return this.shuffle(arr, min, max);

          // 通过参数个数判断方法签名，扩展性太差！#90
          // switch (arguments.length) {
          // 	case 1:
          // 		// pick( [ item1, item2 ... ] )
          // 		return arr[this.natural(0, arr.length - 1)]
          // 	case 2:
          // 		// pick( [ item1, item2 ... ], count )
          // 		max = min
          // 			/* falls through */
          // 	case 3:
          // 		// pick( [ item1, item2 ... ], min, max )
          // 		return this.shuffle(arr, min, max)
          // }
        },

        /*
            打乱数组中元素的顺序，并返回。
            Given an array, scramble the order and return it.
        	    其他的实现思路：
                // https://code.google.com/p/jslibs/wiki/JavascriptTips
                result = result.sort(function() {
                    return Math.random() - 0.5
                })
        */
        shuffle: function shuffle(arr, min, max) {
          arr = arr || [];
          var old = arr.slice(0),
            result = [],
            index = 0,
            length = old.length;
          for (var i = 0; i < length; i++) {
            index = this.natural(0, old.length - 1);
            result.push(old[index]);
            old.splice(index, 1);
          }
          switch (arguments.length) {
            case 0:
            case 1:
              return result;
            case 2:
              max = min;
            /* falls through */
            case 3:
              min = parseInt(min, 10);
              max = parseInt(max, 10);
              return result.slice(0, this.natural(min, max));
          }
        },
        /*
            * Random.order(item, item)
            * Random.order([item, item ...])
        	    顺序获取数组中的元素
        	    [JSON导入数组支持数组数据录入](https://github.com/thx/RAP/issues/22)
        	    不支持单独调用！
        */
        order: function order(array) {
          order.cache = order.cache || {};
          if (arguments.length > 1) array = [].slice.call(arguments, 0);

          // options.context.path/templatePath
          var options = order.options;
          var templatePath = options.context.templatePath.join('.');
          var cache = order.cache[templatePath] = order.cache[templatePath] || {
            index: 0,
            array: array
          };
          return cache.array[cache.index++ % cache.array.length];
        }
      };

      /***/
    }, /* 15 */
    /***/function (module, exports) {
      /*
          ## Name
      	    [Beyond the Top 1000 Names](http://www.ssa.gov/oact/babynames/limits.html)
      */
      module.exports = {
        // 随机生成一个常见的英文名。
        first: function first() {
          var names = [
          // male
          "James", "John", "Robert", "Michael", "William", "David", "Richard", "Charles", "Joseph", "Thomas", "Christopher", "Daniel", "Paul", "Mark", "Donald", "George", "Kenneth", "Steven", "Edward", "Brian", "Ronald", "Anthony", "Kevin", "Jason", "Matthew", "Gary", "Timothy", "Jose", "Larry", "Jeffrey", "Frank", "Scott", "Eric"].concat([
          // female
          "Mary", "Patricia", "Linda", "Barbara", "Elizabeth", "Jennifer", "Maria", "Susan", "Margaret", "Dorothy", "Lisa", "Nancy", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Michelle", "Laura", "Sarah", "Kimberly", "Deborah", "Jessica", "Shirley", "Cynthia", "Angela", "Melissa", "Brenda", "Amy", "Anna"]);
          return this.pick(names);
          // or this.capitalize(this.word())
        },

        // 随机生成一个常见的英文姓。
        last: function last() {
          var names = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen"];
          return this.pick(names);
          // or this.capitalize(this.word())
        },

        // 随机生成一个常见的英文姓名。
        name: function name(middle) {
          return this.first() + ' ' + (middle ? this.first() + ' ' : '') + this.last();
        },
        /*
            随机生成一个常见的中文姓。
            [世界常用姓氏排行](http://baike.baidu.com/view/1719115.htm)
            [玄派网 - 网络小说创作辅助平台](http://xuanpai.sinaapp.com/)
         */
        cfirst: function cfirst() {
          var names = ('王 李 张 刘 陈 杨 赵 黄 周 吴 ' + '徐 孙 胡 朱 高 林 何 郭 马 罗 ' + '梁 宋 郑 谢 韩 唐 冯 于 董 萧 ' + '程 曹 袁 邓 许 傅 沈 曾 彭 吕 ' + '苏 卢 蒋 蔡 贾 丁 魏 薛 叶 阎 ' + '余 潘 杜 戴 夏 锺 汪 田 任 姜 ' + '范 方 石 姚 谭 廖 邹 熊 金 陆 ' + '郝 孔 白 崔 康 毛 邱 秦 江 史 ' + '顾 侯 邵 孟 龙 万 段 雷 钱 汤 ' + '尹 黎 易 常 武 乔 贺 赖 龚 文').split(' ');
          return this.pick(names);
        },
        /*
            随机生成一个常见的中文名。
            [中国最常见名字前50名_三九算命网](http://www.name999.net/xingming/xingshi/20131004/48.html)
         */
        clast: function clast() {
          var names = ('伟 芳 娜 秀英 敏 静 丽 强 磊 军 ' + '洋 勇 艳 杰 娟 涛 明 超 秀兰 霞 ' + '平 刚 桂英').split(' ');
          return this.pick(names);
        },
        // 随机生成一个常见的中文姓名。
        cname: function cname() {
          return this.cfirst() + this.clast();
        }
      };

      /***/
    }, /* 16 */
    /***/function (module, exports) {
      /*
          ## Web
      */
      module.exports = {
        /*
            随机生成一个 URL。
             [URL 规范](http://www.w3.org/Addressing/URL/url-spec.txt)
                http                    Hypertext Transfer Protocol 
                ftp                     File Transfer protocol 
                gopher                  The Gopher protocol 
                mailto                  Electronic mail address 
                mid                     Message identifiers for electronic mail 
                cid                     Content identifiers for MIME body part 
                news                    Usenet news 
                nntp                    Usenet news for local NNTP access only 
                prospero                Access using the prospero protocols 
                telnet rlogin tn3270    Reference to interactive sessions
                wais                    Wide Area Information Servers 
        */
        url: function url(protocol, host) {
          return (protocol || this.protocol()) + '://' + (
          // protocol?
          host || this.domain()) +
          // host?
          '/' + this.word();
        },
        // 随机生成一个 URL 协议。
        protocol: function protocol() {
          return this.pick(
          // 协议簇
          'http ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais'.split(' '));
        },
        // 随机生成一个域名。
        domain: function domain(tld) {
          return this.word() + '.' + (tld || this.tld());
        },
        /*
            随机生成一个顶级域名。
            国际顶级域名 international top-level domain-names, iTLDs
            国家顶级域名 national top-level domainnames, nTLDs
            [域名后缀大全](http://www.163ns.com/zixun/post/4417.html)
        */
        tld: function tld() {
          // Top Level Domain
          return this.pick((
          // 域名后缀
          'com net org edu gov int mil cn ' +
          // 国内域名
          'com.cn net.cn gov.cn org.cn ' +
          // 中文国内域名
          '中国 中国互联.公司 中国互联.网络 ' +
          // 新国际域名
          'tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ' +
          // 世界各国域名后缀
          'ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw').split(' '));
        },
        // 随机生成一个邮件地址。
        email: function email(domain) {
          return this.character('lower') + '.' + this.word() + '@' + (domain || this.word() + '.' + this.tld());
          // return this.character('lower') + '.' + this.last().toLowerCase() + '@' + this.last().toLowerCase() + '.' + this.tld()
          // return this.word() + '@' + (domain || this.domain())
        },

        // 随机生成一个 IP 地址。
        ip: function ip() {
          return this.natural(0, 255) + '.' + this.natural(0, 255) + '.' + this.natural(0, 255) + '.' + this.natural(0, 255);
        }
      };

      /***/
    }, /* 17 */
    /***/function (module, exports, __nested_webpack_require_75685__) {
      /*
          ## Address
      */

      var DICT = __nested_webpack_require_75685__(18);
      var REGION = ['东北', '华北', '华东', '华中', '华南', '西南', '西北'];
      module.exports = {
        // 随机生成一个大区。
        region: function region() {
          return this.pick(REGION);
        },
        // 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
        province: function province() {
          return this.pick(DICT).name;
        },
        // 随机生成一个（中国）市。
        city: function city(prefix) {
          var province = this.pick(DICT);
          var city = this.pick(province.children);
          return prefix ? [province.name, city.name].join(' ') : city.name;
        },
        // 随机生成一个（中国）县。
        county: function county(prefix) {
          var province = this.pick(DICT);
          var city = this.pick(province.children);
          var county = this.pick(city.children) || {
            name: '-'
          };
          return prefix ? [province.name, city.name, county.name].join(' ') : county.name;
        },
        // 随机生成一个邮政编码（六位数字）。
        zip: function zip(len) {
          var zip = '';
          for (var i = 0; i < (len || 6); i++) zip += this.natural(0, 9);
          return zip;
        }

        // address: function() {},
        // phone: function() {},
        // areacode: function() {},
        // street: function() {},
        // street_suffixes: function() {},
        // street_suffix: function() {},
        // states: function() {},
        // state: function() {},
      };

      /***/
    }, /* 18 */
    /***/function (module, exports) {
      /*
          ## Address 字典数据
      	    字典数据来源 http://www.atatech.org/articles/30028?rnd=254259856
      	    国标 省（市）级行政区划码表
      	    华北   北京市 天津市 河北省 山西省 内蒙古自治区
          东北   辽宁省 吉林省 黑龙江省
          华东   上海市 江苏省 浙江省 安徽省 福建省 江西省 山东省
          华南   广东省 广西壮族自治区 海南省
          华中   河南省 湖北省 湖南省
          西南   重庆市 四川省 贵州省 云南省 西藏自治区
          西北   陕西省 甘肃省 青海省 宁夏回族自治区 新疆维吾尔自治区
          港澳台 香港特别行政区 澳门特别行政区 台湾省
          
          **排序**
          
          ```js
          var map = {}
          _.each(_.keys(REGIONS),function(id){
            map[id] = REGIONS[ID]
          })
          JSON.stringify(map)
          ```
      */
      var DICT = {
        "110000": "北京",
        "110100": "北京市",
        "110101": "东城区",
        "110102": "西城区",
        "110105": "朝阳区",
        "110106": "丰台区",
        "110107": "石景山区",
        "110108": "海淀区",
        "110109": "门头沟区",
        "110111": "房山区",
        "110112": "通州区",
        "110113": "顺义区",
        "110114": "昌平区",
        "110115": "大兴区",
        "110116": "怀柔区",
        "110117": "平谷区",
        "110228": "密云县",
        "110229": "延庆县",
        "110230": "其它区",
        "120000": "天津",
        "120100": "天津市",
        "120101": "和平区",
        "120102": "河东区",
        "120103": "河西区",
        "120104": "南开区",
        "120105": "河北区",
        "120106": "红桥区",
        "120110": "东丽区",
        "120111": "西青区",
        "120112": "津南区",
        "120113": "北辰区",
        "120114": "武清区",
        "120115": "宝坻区",
        "120116": "滨海新区",
        "120221": "宁河县",
        "120223": "静海县",
        "120225": "蓟县",
        "120226": "其它区",
        "130000": "河北省",
        "130100": "石家庄市",
        "130102": "长安区",
        "130103": "桥东区",
        "130104": "桥西区",
        "130105": "新华区",
        "130107": "井陉矿区",
        "130108": "裕华区",
        "130121": "井陉县",
        "130123": "正定县",
        "130124": "栾城县",
        "130125": "行唐县",
        "130126": "灵寿县",
        "130127": "高邑县",
        "130128": "深泽县",
        "130129": "赞皇县",
        "130130": "无极县",
        "130131": "平山县",
        "130132": "元氏县",
        "130133": "赵县",
        "130181": "辛集市",
        "130182": "藁城市",
        "130183": "晋州市",
        "130184": "新乐市",
        "130185": "鹿泉市",
        "130186": "其它区",
        "130200": "唐山市",
        "130202": "路南区",
        "130203": "路北区",
        "130204": "古冶区",
        "130205": "开平区",
        "130207": "丰南区",
        "130208": "丰润区",
        "130223": "滦县",
        "130224": "滦南县",
        "130225": "乐亭县",
        "130227": "迁西县",
        "130229": "玉田县",
        "130230": "曹妃甸区",
        "130281": "遵化市",
        "130283": "迁安市",
        "130284": "其它区",
        "130300": "秦皇岛市",
        "130302": "海港区",
        "130303": "山海关区",
        "130304": "北戴河区",
        "130321": "青龙满族自治县",
        "130322": "昌黎县",
        "130323": "抚宁县",
        "130324": "卢龙县",
        "130398": "其它区",
        "130400": "邯郸市",
        "130402": "邯山区",
        "130403": "丛台区",
        "130404": "复兴区",
        "130406": "峰峰矿区",
        "130421": "邯郸县",
        "130423": "临漳县",
        "130424": "成安县",
        "130425": "大名县",
        "130426": "涉县",
        "130427": "磁县",
        "130428": "肥乡县",
        "130429": "永年县",
        "130430": "邱县",
        "130431": "鸡泽县",
        "130432": "广平县",
        "130433": "馆陶县",
        "130434": "魏县",
        "130435": "曲周县",
        "130481": "武安市",
        "130482": "其它区",
        "130500": "邢台市",
        "130502": "桥东区",
        "130503": "桥西区",
        "130521": "邢台县",
        "130522": "临城县",
        "130523": "内丘县",
        "130524": "柏乡县",
        "130525": "隆尧县",
        "130526": "任县",
        "130527": "南和县",
        "130528": "宁晋县",
        "130529": "巨鹿县",
        "130530": "新河县",
        "130531": "广宗县",
        "130532": "平乡县",
        "130533": "威县",
        "130534": "清河县",
        "130535": "临西县",
        "130581": "南宫市",
        "130582": "沙河市",
        "130583": "其它区",
        "130600": "保定市",
        "130602": "新市区",
        "130603": "北市区",
        "130604": "南市区",
        "130621": "满城县",
        "130622": "清苑县",
        "130623": "涞水县",
        "130624": "阜平县",
        "130625": "徐水县",
        "130626": "定兴县",
        "130627": "唐县",
        "130628": "高阳县",
        "130629": "容城县",
        "130630": "涞源县",
        "130631": "望都县",
        "130632": "安新县",
        "130633": "易县",
        "130634": "曲阳县",
        "130635": "蠡县",
        "130636": "顺平县",
        "130637": "博野县",
        "130638": "雄县",
        "130681": "涿州市",
        "130682": "定州市",
        "130683": "安国市",
        "130684": "高碑店市",
        "130699": "其它区",
        "130700": "张家口市",
        "130702": "桥东区",
        "130703": "桥西区",
        "130705": "宣化区",
        "130706": "下花园区",
        "130721": "宣化县",
        "130722": "张北县",
        "130723": "康保县",
        "130724": "沽源县",
        "130725": "尚义县",
        "130726": "蔚县",
        "130727": "阳原县",
        "130728": "怀安县",
        "130729": "万全县",
        "130730": "怀来县",
        "130731": "涿鹿县",
        "130732": "赤城县",
        "130733": "崇礼县",
        "130734": "其它区",
        "130800": "承德市",
        "130802": "双桥区",
        "130803": "双滦区",
        "130804": "鹰手营子矿区",
        "130821": "承德县",
        "130822": "兴隆县",
        "130823": "平泉县",
        "130824": "滦平县",
        "130825": "隆化县",
        "130826": "丰宁满族自治县",
        "130827": "宽城满族自治县",
        "130828": "围场满族蒙古族自治县",
        "130829": "其它区",
        "130900": "沧州市",
        "130902": "新华区",
        "130903": "运河区",
        "130921": "沧县",
        "130922": "青县",
        "130923": "东光县",
        "130924": "海兴县",
        "130925": "盐山县",
        "130926": "肃宁县",
        "130927": "南皮县",
        "130928": "吴桥县",
        "130929": "献县",
        "130930": "孟村回族自治县",
        "130981": "泊头市",
        "130982": "任丘市",
        "130983": "黄骅市",
        "130984": "河间市",
        "130985": "其它区",
        "131000": "廊坊市",
        "131002": "安次区",
        "131003": "广阳区",
        "131022": "固安县",
        "131023": "永清县",
        "131024": "香河县",
        "131025": "大城县",
        "131026": "文安县",
        "131028": "大厂回族自治县",
        "131081": "霸州市",
        "131082": "三河市",
        "131083": "其它区",
        "131100": "衡水市",
        "131102": "桃城区",
        "131121": "枣强县",
        "131122": "武邑县",
        "131123": "武强县",
        "131124": "饶阳县",
        "131125": "安平县",
        "131126": "故城县",
        "131127": "景县",
        "131128": "阜城县",
        "131181": "冀州市",
        "131182": "深州市",
        "131183": "其它区",
        "140000": "山西省",
        "140100": "太原市",
        "140105": "小店区",
        "140106": "迎泽区",
        "140107": "杏花岭区",
        "140108": "尖草坪区",
        "140109": "万柏林区",
        "140110": "晋源区",
        "140121": "清徐县",
        "140122": "阳曲县",
        "140123": "娄烦县",
        "140181": "古交市",
        "140182": "其它区",
        "140200": "大同市",
        "140202": "城区",
        "140203": "矿区",
        "140211": "南郊区",
        "140212": "新荣区",
        "140221": "阳高县",
        "140222": "天镇县",
        "140223": "广灵县",
        "140224": "灵丘县",
        "140225": "浑源县",
        "140226": "左云县",
        "140227": "大同县",
        "140228": "其它区",
        "140300": "阳泉市",
        "140302": "城区",
        "140303": "矿区",
        "140311": "郊区",
        "140321": "平定县",
        "140322": "盂县",
        "140323": "其它区",
        "140400": "长治市",
        "140421": "长治县",
        "140423": "襄垣县",
        "140424": "屯留县",
        "140425": "平顺县",
        "140426": "黎城县",
        "140427": "壶关县",
        "140428": "长子县",
        "140429": "武乡县",
        "140430": "沁县",
        "140431": "沁源县",
        "140481": "潞城市",
        "140482": "城区",
        "140483": "郊区",
        "140485": "其它区",
        "140500": "晋城市",
        "140502": "城区",
        "140521": "沁水县",
        "140522": "阳城县",
        "140524": "陵川县",
        "140525": "泽州县",
        "140581": "高平市",
        "140582": "其它区",
        "140600": "朔州市",
        "140602": "朔城区",
        "140603": "平鲁区",
        "140621": "山阴县",
        "140622": "应县",
        "140623": "右玉县",
        "140624": "怀仁县",
        "140625": "其它区",
        "140700": "晋中市",
        "140702": "榆次区",
        "140721": "榆社县",
        "140722": "左权县",
        "140723": "和顺县",
        "140724": "昔阳县",
        "140725": "寿阳县",
        "140726": "太谷县",
        "140727": "祁县",
        "140728": "平遥县",
        "140729": "灵石县",
        "140781": "介休市",
        "140782": "其它区",
        "140800": "运城市",
        "140802": "盐湖区",
        "140821": "临猗县",
        "140822": "万荣县",
        "140823": "闻喜县",
        "140824": "稷山县",
        "140825": "新绛县",
        "140826": "绛县",
        "140827": "垣曲县",
        "140828": "夏县",
        "140829": "平陆县",
        "140830": "芮城县",
        "140881": "永济市",
        "140882": "河津市",
        "140883": "其它区",
        "140900": "忻州市",
        "140902": "忻府区",
        "140921": "定襄县",
        "140922": "五台县",
        "140923": "代县",
        "140924": "繁峙县",
        "140925": "宁武县",
        "140926": "静乐县",
        "140927": "神池县",
        "140928": "五寨县",
        "140929": "岢岚县",
        "140930": "河曲县",
        "140931": "保德县",
        "140932": "偏关县",
        "140981": "原平市",
        "140982": "其它区",
        "141000": "临汾市",
        "141002": "尧都区",
        "141021": "曲沃县",
        "141022": "翼城县",
        "141023": "襄汾县",
        "141024": "洪洞县",
        "141025": "古县",
        "141026": "安泽县",
        "141027": "浮山县",
        "141028": "吉县",
        "141029": "乡宁县",
        "141030": "大宁县",
        "141031": "隰县",
        "141032": "永和县",
        "141033": "蒲县",
        "141034": "汾西县",
        "141081": "侯马市",
        "141082": "霍州市",
        "141083": "其它区",
        "141100": "吕梁市",
        "141102": "离石区",
        "141121": "文水县",
        "141122": "交城县",
        "141123": "兴县",
        "141124": "临县",
        "141125": "柳林县",
        "141126": "石楼县",
        "141127": "岚县",
        "141128": "方山县",
        "141129": "中阳县",
        "141130": "交口县",
        "141181": "孝义市",
        "141182": "汾阳市",
        "141183": "其它区",
        "150000": "内蒙古自治区",
        "150100": "呼和浩特市",
        "150102": "新城区",
        "150103": "回民区",
        "150104": "玉泉区",
        "150105": "赛罕区",
        "150121": "土默特左旗",
        "150122": "托克托县",
        "150123": "和林格尔县",
        "150124": "清水河县",
        "150125": "武川县",
        "150126": "其它区",
        "150200": "包头市",
        "150202": "东河区",
        "150203": "昆都仑区",
        "150204": "青山区",
        "150205": "石拐区",
        "150206": "白云鄂博矿区",
        "150207": "九原区",
        "150221": "土默特右旗",
        "150222": "固阳县",
        "150223": "达尔罕茂明安联合旗",
        "150224": "其它区",
        "150300": "乌海市",
        "150302": "海勃湾区",
        "150303": "海南区",
        "150304": "乌达区",
        "150305": "其它区",
        "150400": "赤峰市",
        "150402": "红山区",
        "150403": "元宝山区",
        "150404": "松山区",
        "150421": "阿鲁科尔沁旗",
        "150422": "巴林左旗",
        "150423": "巴林右旗",
        "150424": "林西县",
        "150425": "克什克腾旗",
        "150426": "翁牛特旗",
        "150428": "喀喇沁旗",
        "150429": "宁城县",
        "150430": "敖汉旗",
        "150431": "其它区",
        "150500": "通辽市",
        "150502": "科尔沁区",
        "150521": "科尔沁左翼中旗",
        "150522": "科尔沁左翼后旗",
        "150523": "开鲁县",
        "150524": "库伦旗",
        "150525": "奈曼旗",
        "150526": "扎鲁特旗",
        "150581": "霍林郭勒市",
        "150582": "其它区",
        "150600": "鄂尔多斯市",
        "150602": "东胜区",
        "150621": "达拉特旗",
        "150622": "准格尔旗",
        "150623": "鄂托克前旗",
        "150624": "鄂托克旗",
        "150625": "杭锦旗",
        "150626": "乌审旗",
        "150627": "伊金霍洛旗",
        "150628": "其它区",
        "150700": "呼伦贝尔市",
        "150702": "海拉尔区",
        "150703": "扎赉诺尔区",
        "150721": "阿荣旗",
        "150722": "莫力达瓦达斡尔族自治旗",
        "150723": "鄂伦春自治旗",
        "150724": "鄂温克族自治旗",
        "150725": "陈巴尔虎旗",
        "150726": "新巴尔虎左旗",
        "150727": "新巴尔虎右旗",
        "150781": "满洲里市",
        "150782": "牙克石市",
        "150783": "扎兰屯市",
        "150784": "额尔古纳市",
        "150785": "根河市",
        "150786": "其它区",
        "150800": "巴彦淖尔市",
        "150802": "临河区",
        "150821": "五原县",
        "150822": "磴口县",
        "150823": "乌拉特前旗",
        "150824": "乌拉特中旗",
        "150825": "乌拉特后旗",
        "150826": "杭锦后旗",
        "150827": "其它区",
        "150900": "乌兰察布市",
        "150902": "集宁区",
        "150921": "卓资县",
        "150922": "化德县",
        "150923": "商都县",
        "150924": "兴和县",
        "150925": "凉城县",
        "150926": "察哈尔右翼前旗",
        "150927": "察哈尔右翼中旗",
        "150928": "察哈尔右翼后旗",
        "150929": "四子王旗",
        "150981": "丰镇市",
        "150982": "其它区",
        "152200": "兴安盟",
        "152201": "乌兰浩特市",
        "152202": "阿尔山市",
        "152221": "科尔沁右翼前旗",
        "152222": "科尔沁右翼中旗",
        "152223": "扎赉特旗",
        "152224": "突泉县",
        "152225": "其它区",
        "152500": "锡林郭勒盟",
        "152501": "二连浩特市",
        "152502": "锡林浩特市",
        "152522": "阿巴嘎旗",
        "152523": "苏尼特左旗",
        "152524": "苏尼特右旗",
        "152525": "东乌珠穆沁旗",
        "152526": "西乌珠穆沁旗",
        "152527": "太仆寺旗",
        "152528": "镶黄旗",
        "152529": "正镶白旗",
        "152530": "正蓝旗",
        "152531": "多伦县",
        "152532": "其它区",
        "152900": "阿拉善盟",
        "152921": "阿拉善左旗",
        "152922": "阿拉善右旗",
        "152923": "额济纳旗",
        "152924": "其它区",
        "210000": "辽宁省",
        "210100": "沈阳市",
        "210102": "和平区",
        "210103": "沈河区",
        "210104": "大东区",
        "210105": "皇姑区",
        "210106": "铁西区",
        "210111": "苏家屯区",
        "210112": "东陵区",
        "210113": "新城子区",
        "210114": "于洪区",
        "210122": "辽中县",
        "210123": "康平县",
        "210124": "法库县",
        "210181": "新民市",
        "210184": "沈北新区",
        "210185": "其它区",
        "210200": "大连市",
        "210202": "中山区",
        "210203": "西岗区",
        "210204": "沙河口区",
        "210211": "甘井子区",
        "210212": "旅顺口区",
        "210213": "金州区",
        "210224": "长海县",
        "210281": "瓦房店市",
        "210282": "普兰店市",
        "210283": "庄河市",
        "210298": "其它区",
        "210300": "鞍山市",
        "210302": "铁东区",
        "210303": "铁西区",
        "210304": "立山区",
        "210311": "千山区",
        "210321": "台安县",
        "210323": "岫岩满族自治县",
        "210381": "海城市",
        "210382": "其它区",
        "210400": "抚顺市",
        "210402": "新抚区",
        "210403": "东洲区",
        "210404": "望花区",
        "210411": "顺城区",
        "210421": "抚顺县",
        "210422": "新宾满族自治县",
        "210423": "清原满族自治县",
        "210424": "其它区",
        "210500": "本溪市",
        "210502": "平山区",
        "210503": "溪湖区",
        "210504": "明山区",
        "210505": "南芬区",
        "210521": "本溪满族自治县",
        "210522": "桓仁满族自治县",
        "210523": "其它区",
        "210600": "丹东市",
        "210602": "元宝区",
        "210603": "振兴区",
        "210604": "振安区",
        "210624": "宽甸满族自治县",
        "210681": "东港市",
        "210682": "凤城市",
        "210683": "其它区",
        "210700": "锦州市",
        "210702": "古塔区",
        "210703": "凌河区",
        "210711": "太和区",
        "210726": "黑山县",
        "210727": "义县",
        "210781": "凌海市",
        "210782": "北镇市",
        "210783": "其它区",
        "210800": "营口市",
        "210802": "站前区",
        "210803": "西市区",
        "210804": "鲅鱼圈区",
        "210811": "老边区",
        "210881": "盖州市",
        "210882": "大石桥市",
        "210883": "其它区",
        "210900": "阜新市",
        "210902": "海州区",
        "210903": "新邱区",
        "210904": "太平区",
        "210905": "清河门区",
        "210911": "细河区",
        "210921": "阜新蒙古族自治县",
        "210922": "彰武县",
        "210923": "其它区",
        "211000": "辽阳市",
        "211002": "白塔区",
        "211003": "文圣区",
        "211004": "宏伟区",
        "211005": "弓长岭区",
        "211011": "太子河区",
        "211021": "辽阳县",
        "211081": "灯塔市",
        "211082": "其它区",
        "211100": "盘锦市",
        "211102": "双台子区",
        "211103": "兴隆台区",
        "211121": "大洼县",
        "211122": "盘山县",
        "211123": "其它区",
        "211200": "铁岭市",
        "211202": "银州区",
        "211204": "清河区",
        "211221": "铁岭县",
        "211223": "西丰县",
        "211224": "昌图县",
        "211281": "调兵山市",
        "211282": "开原市",
        "211283": "其它区",
        "211300": "朝阳市",
        "211302": "双塔区",
        "211303": "龙城区",
        "211321": "朝阳县",
        "211322": "建平县",
        "211324": "喀喇沁左翼蒙古族自治县",
        "211381": "北票市",
        "211382": "凌源市",
        "211383": "其它区",
        "211400": "葫芦岛市",
        "211402": "连山区",
        "211403": "龙港区",
        "211404": "南票区",
        "211421": "绥中县",
        "211422": "建昌县",
        "211481": "兴城市",
        "211482": "其它区",
        "220000": "吉林省",
        "220100": "长春市",
        "220102": "南关区",
        "220103": "宽城区",
        "220104": "朝阳区",
        "220105": "二道区",
        "220106": "绿园区",
        "220112": "双阳区",
        "220122": "农安县",
        "220181": "九台市",
        "220182": "榆树市",
        "220183": "德惠市",
        "220188": "其它区",
        "220200": "吉林市",
        "220202": "昌邑区",
        "220203": "龙潭区",
        "220204": "船营区",
        "220211": "丰满区",
        "220221": "永吉县",
        "220281": "蛟河市",
        "220282": "桦甸市",
        "220283": "舒兰市",
        "220284": "磐石市",
        "220285": "其它区",
        "220300": "四平市",
        "220302": "铁西区",
        "220303": "铁东区",
        "220322": "梨树县",
        "220323": "伊通满族自治县",
        "220381": "公主岭市",
        "220382": "双辽市",
        "220383": "其它区",
        "220400": "辽源市",
        "220402": "龙山区",
        "220403": "西安区",
        "220421": "东丰县",
        "220422": "东辽县",
        "220423": "其它区",
        "220500": "通化市",
        "220502": "东昌区",
        "220503": "二道江区",
        "220521": "通化县",
        "220523": "辉南县",
        "220524": "柳河县",
        "220581": "梅河口市",
        "220582": "集安市",
        "220583": "其它区",
        "220600": "白山市",
        "220602": "浑江区",
        "220621": "抚松县",
        "220622": "靖宇县",
        "220623": "长白朝鲜族自治县",
        "220625": "江源区",
        "220681": "临江市",
        "220682": "其它区",
        "220700": "松原市",
        "220702": "宁江区",
        "220721": "前郭尔罗斯蒙古族自治县",
        "220722": "长岭县",
        "220723": "乾安县",
        "220724": "扶余市",
        "220725": "其它区",
        "220800": "白城市",
        "220802": "洮北区",
        "220821": "镇赉县",
        "220822": "通榆县",
        "220881": "洮南市",
        "220882": "大安市",
        "220883": "其它区",
        "222400": "延边朝鲜族自治州",
        "222401": "延吉市",
        "222402": "图们市",
        "222403": "敦化市",
        "222404": "珲春市",
        "222405": "龙井市",
        "222406": "和龙市",
        "222424": "汪清县",
        "222426": "安图县",
        "222427": "其它区",
        "230000": "黑龙江省",
        "230100": "哈尔滨市",
        "230102": "道里区",
        "230103": "南岗区",
        "230104": "道外区",
        "230106": "香坊区",
        "230108": "平房区",
        "230109": "松北区",
        "230111": "呼兰区",
        "230123": "依兰县",
        "230124": "方正县",
        "230125": "宾县",
        "230126": "巴彦县",
        "230127": "木兰县",
        "230128": "通河县",
        "230129": "延寿县",
        "230181": "阿城区",
        "230182": "双城市",
        "230183": "尚志市",
        "230184": "五常市",
        "230186": "其它区",
        "230200": "齐齐哈尔市",
        "230202": "龙沙区",
        "230203": "建华区",
        "230204": "铁锋区",
        "230205": "昂昂溪区",
        "230206": "富拉尔基区",
        "230207": "碾子山区",
        "230208": "梅里斯达斡尔族区",
        "230221": "龙江县",
        "230223": "依安县",
        "230224": "泰来县",
        "230225": "甘南县",
        "230227": "富裕县",
        "230229": "克山县",
        "230230": "克东县",
        "230231": "拜泉县",
        "230281": "讷河市",
        "230282": "其它区",
        "230300": "鸡西市",
        "230302": "鸡冠区",
        "230303": "恒山区",
        "230304": "滴道区",
        "230305": "梨树区",
        "230306": "城子河区",
        "230307": "麻山区",
        "230321": "鸡东县",
        "230381": "虎林市",
        "230382": "密山市",
        "230383": "其它区",
        "230400": "鹤岗市",
        "230402": "向阳区",
        "230403": "工农区",
        "230404": "南山区",
        "230405": "兴安区",
        "230406": "东山区",
        "230407": "兴山区",
        "230421": "萝北县",
        "230422": "绥滨县",
        "230423": "其它区",
        "230500": "双鸭山市",
        "230502": "尖山区",
        "230503": "岭东区",
        "230505": "四方台区",
        "230506": "宝山区",
        "230521": "集贤县",
        "230522": "友谊县",
        "230523": "宝清县",
        "230524": "饶河县",
        "230525": "其它区",
        "230600": "大庆市",
        "230602": "萨尔图区",
        "230603": "龙凤区",
        "230604": "让胡路区",
        "230605": "红岗区",
        "230606": "大同区",
        "230621": "肇州县",
        "230622": "肇源县",
        "230623": "林甸县",
        "230624": "杜尔伯特蒙古族自治县",
        "230625": "其它区",
        "230700": "伊春市",
        "230702": "伊春区",
        "230703": "南岔区",
        "230704": "友好区",
        "230705": "西林区",
        "230706": "翠峦区",
        "230707": "新青区",
        "230708": "美溪区",
        "230709": "金山屯区",
        "230710": "五营区",
        "230711": "乌马河区",
        "230712": "汤旺河区",
        "230713": "带岭区",
        "230714": "乌伊岭区",
        "230715": "红星区",
        "230716": "上甘岭区",
        "230722": "嘉荫县",
        "230781": "铁力市",
        "230782": "其它区",
        "230800": "佳木斯市",
        "230803": "向阳区",
        "230804": "前进区",
        "230805": "东风区",
        "230811": "郊区",
        "230822": "桦南县",
        "230826": "桦川县",
        "230828": "汤原县",
        "230833": "抚远县",
        "230881": "同江市",
        "230882": "富锦市",
        "230883": "其它区",
        "230900": "七台河市",
        "230902": "新兴区",
        "230903": "桃山区",
        "230904": "茄子河区",
        "230921": "勃利县",
        "230922": "其它区",
        "231000": "牡丹江市",
        "231002": "东安区",
        "231003": "阳明区",
        "231004": "爱民区",
        "231005": "西安区",
        "231024": "东宁县",
        "231025": "林口县",
        "231081": "绥芬河市",
        "231083": "海林市",
        "231084": "宁安市",
        "231085": "穆棱市",
        "231086": "其它区",
        "231100": "黑河市",
        "231102": "爱辉区",
        "231121": "嫩江县",
        "231123": "逊克县",
        "231124": "孙吴县",
        "231181": "北安市",
        "231182": "五大连池市",
        "231183": "其它区",
        "231200": "绥化市",
        "231202": "北林区",
        "231221": "望奎县",
        "231222": "兰西县",
        "231223": "青冈县",
        "231224": "庆安县",
        "231225": "明水县",
        "231226": "绥棱县",
        "231281": "安达市",
        "231282": "肇东市",
        "231283": "海伦市",
        "231284": "其它区",
        "232700": "大兴安岭地区",
        "232702": "松岭区",
        "232703": "新林区",
        "232704": "呼中区",
        "232721": "呼玛县",
        "232722": "塔河县",
        "232723": "漠河县",
        "232724": "加格达奇区",
        "232725": "其它区",
        "310000": "上海",
        "310100": "上海市",
        "310101": "黄浦区",
        "310104": "徐汇区",
        "310105": "长宁区",
        "310106": "静安区",
        "310107": "普陀区",
        "310108": "闸北区",
        "310109": "虹口区",
        "310110": "杨浦区",
        "310112": "闵行区",
        "310113": "宝山区",
        "310114": "嘉定区",
        "310115": "浦东新区",
        "310116": "金山区",
        "310117": "松江区",
        "310118": "青浦区",
        "310120": "奉贤区",
        "310230": "崇明县",
        "310231": "其它区",
        "320000": "江苏省",
        "320100": "南京市",
        "320102": "玄武区",
        "320104": "秦淮区",
        "320105": "建邺区",
        "320106": "鼓楼区",
        "320111": "浦口区",
        "320113": "栖霞区",
        "320114": "雨花台区",
        "320115": "江宁区",
        "320116": "六合区",
        "320124": "溧水区",
        "320125": "高淳区",
        "320126": "其它区",
        "320200": "无锡市",
        "320202": "崇安区",
        "320203": "南长区",
        "320204": "北塘区",
        "320205": "锡山区",
        "320206": "惠山区",
        "320211": "滨湖区",
        "320281": "江阴市",
        "320282": "宜兴市",
        "320297": "其它区",
        "320300": "徐州市",
        "320302": "鼓楼区",
        "320303": "云龙区",
        "320305": "贾汪区",
        "320311": "泉山区",
        "320321": "丰县",
        "320322": "沛县",
        "320323": "铜山区",
        "320324": "睢宁县",
        "320381": "新沂市",
        "320382": "邳州市",
        "320383": "其它区",
        "320400": "常州市",
        "320402": "天宁区",
        "320404": "钟楼区",
        "320405": "戚墅堰区",
        "320411": "新北区",
        "320412": "武进区",
        "320481": "溧阳市",
        "320482": "金坛市",
        "320483": "其它区",
        "320500": "苏州市",
        "320505": "虎丘区",
        "320506": "吴中区",
        "320507": "相城区",
        "320508": "姑苏区",
        "320581": "常熟市",
        "320582": "张家港市",
        "320583": "昆山市",
        "320584": "吴江区",
        "320585": "太仓市",
        "320596": "其它区",
        "320600": "南通市",
        "320602": "崇川区",
        "320611": "港闸区",
        "320612": "通州区",
        "320621": "海安县",
        "320623": "如东县",
        "320681": "启东市",
        "320682": "如皋市",
        "320684": "海门市",
        "320694": "其它区",
        "320700": "连云港市",
        "320703": "连云区",
        "320705": "新浦区",
        "320706": "海州区",
        "320721": "赣榆县",
        "320722": "东海县",
        "320723": "灌云县",
        "320724": "灌南县",
        "320725": "其它区",
        "320800": "淮安市",
        "320802": "清河区",
        "320803": "淮安区",
        "320804": "淮阴区",
        "320811": "清浦区",
        "320826": "涟水县",
        "320829": "洪泽县",
        "320830": "盱眙县",
        "320831": "金湖县",
        "320832": "其它区",
        "320900": "盐城市",
        "320902": "亭湖区",
        "320903": "盐都区",
        "320921": "响水县",
        "320922": "滨海县",
        "320923": "阜宁县",
        "320924": "射阳县",
        "320925": "建湖县",
        "320981": "东台市",
        "320982": "大丰市",
        "320983": "其它区",
        "321000": "扬州市",
        "321002": "广陵区",
        "321003": "邗江区",
        "321023": "宝应县",
        "321081": "仪征市",
        "321084": "高邮市",
        "321088": "江都区",
        "321093": "其它区",
        "321100": "镇江市",
        "321102": "京口区",
        "321111": "润州区",
        "321112": "丹徒区",
        "321181": "丹阳市",
        "321182": "扬中市",
        "321183": "句容市",
        "321184": "其它区",
        "321200": "泰州市",
        "321202": "海陵区",
        "321203": "高港区",
        "321281": "兴化市",
        "321282": "靖江市",
        "321283": "泰兴市",
        "321284": "姜堰区",
        "321285": "其它区",
        "321300": "宿迁市",
        "321302": "宿城区",
        "321311": "宿豫区",
        "321322": "沭阳县",
        "321323": "泗阳县",
        "321324": "泗洪县",
        "321325": "其它区",
        "330000": "浙江省",
        "330100": "杭州市",
        "330102": "上城区",
        "330103": "下城区",
        "330104": "江干区",
        "330105": "拱墅区",
        "330106": "西湖区",
        "330108": "滨江区",
        "330109": "萧山区",
        "330110": "余杭区",
        "330122": "桐庐县",
        "330127": "淳安县",
        "330182": "建德市",
        "330183": "富阳市",
        "330185": "临安市",
        "330186": "其它区",
        "330200": "宁波市",
        "330203": "海曙区",
        "330204": "江东区",
        "330205": "江北区",
        "330206": "北仑区",
        "330211": "镇海区",
        "330212": "鄞州区",
        "330225": "象山县",
        "330226": "宁海县",
        "330281": "余姚市",
        "330282": "慈溪市",
        "330283": "奉化市",
        "330284": "其它区",
        "330300": "温州市",
        "330302": "鹿城区",
        "330303": "龙湾区",
        "330304": "瓯海区",
        "330322": "洞头县",
        "330324": "永嘉县",
        "330326": "平阳县",
        "330327": "苍南县",
        "330328": "文成县",
        "330329": "泰顺县",
        "330381": "瑞安市",
        "330382": "乐清市",
        "330383": "其它区",
        "330400": "嘉兴市",
        "330402": "南湖区",
        "330411": "秀洲区",
        "330421": "嘉善县",
        "330424": "海盐县",
        "330481": "海宁市",
        "330482": "平湖市",
        "330483": "桐乡市",
        "330484": "其它区",
        "330500": "湖州市",
        "330502": "吴兴区",
        "330503": "南浔区",
        "330521": "德清县",
        "330522": "长兴县",
        "330523": "安吉县",
        "330524": "其它区",
        "330600": "绍兴市",
        "330602": "越城区",
        "330621": "绍兴县",
        "330624": "新昌县",
        "330681": "诸暨市",
        "330682": "上虞市",
        "330683": "嵊州市",
        "330684": "其它区",
        "330700": "金华市",
        "330702": "婺城区",
        "330703": "金东区",
        "330723": "武义县",
        "330726": "浦江县",
        "330727": "磐安县",
        "330781": "兰溪市",
        "330782": "义乌市",
        "330783": "东阳市",
        "330784": "永康市",
        "330785": "其它区",
        "330800": "衢州市",
        "330802": "柯城区",
        "330803": "衢江区",
        "330822": "常山县",
        "330824": "开化县",
        "330825": "龙游县",
        "330881": "江山市",
        "330882": "其它区",
        "330900": "舟山市",
        "330902": "定海区",
        "330903": "普陀区",
        "330921": "岱山县",
        "330922": "嵊泗县",
        "330923": "其它区",
        "331000": "台州市",
        "331002": "椒江区",
        "331003": "黄岩区",
        "331004": "路桥区",
        "331021": "玉环县",
        "331022": "三门县",
        "331023": "天台县",
        "331024": "仙居县",
        "331081": "温岭市",
        "331082": "临海市",
        "331083": "其它区",
        "331100": "丽水市",
        "331102": "莲都区",
        "331121": "青田县",
        "331122": "缙云县",
        "331123": "遂昌县",
        "331124": "松阳县",
        "331125": "云和县",
        "331126": "庆元县",
        "331127": "景宁畲族自治县",
        "331181": "龙泉市",
        "331182": "其它区",
        "340000": "安徽省",
        "340100": "合肥市",
        "340102": "瑶海区",
        "340103": "庐阳区",
        "340104": "蜀山区",
        "340111": "包河区",
        "340121": "长丰县",
        "340122": "肥东县",
        "340123": "肥西县",
        "340192": "其它区",
        "340200": "芜湖市",
        "340202": "镜湖区",
        "340203": "弋江区",
        "340207": "鸠江区",
        "340208": "三山区",
        "340221": "芜湖县",
        "340222": "繁昌县",
        "340223": "南陵县",
        "340224": "其它区",
        "340300": "蚌埠市",
        "340302": "龙子湖区",
        "340303": "蚌山区",
        "340304": "禹会区",
        "340311": "淮上区",
        "340321": "怀远县",
        "340322": "五河县",
        "340323": "固镇县",
        "340324": "其它区",
        "340400": "淮南市",
        "340402": "大通区",
        "340403": "田家庵区",
        "340404": "谢家集区",
        "340405": "八公山区",
        "340406": "潘集区",
        "340421": "凤台县",
        "340422": "其它区",
        "340500": "马鞍山市",
        "340503": "花山区",
        "340504": "雨山区",
        "340506": "博望区",
        "340521": "当涂县",
        "340522": "其它区",
        "340600": "淮北市",
        "340602": "杜集区",
        "340603": "相山区",
        "340604": "烈山区",
        "340621": "濉溪县",
        "340622": "其它区",
        "340700": "铜陵市",
        "340702": "铜官山区",
        "340703": "狮子山区",
        "340711": "郊区",
        "340721": "铜陵县",
        "340722": "其它区",
        "340800": "安庆市",
        "340802": "迎江区",
        "340803": "大观区",
        "340811": "宜秀区",
        "340822": "怀宁县",
        "340823": "枞阳县",
        "340824": "潜山县",
        "340825": "太湖县",
        "340826": "宿松县",
        "340827": "望江县",
        "340828": "岳西县",
        "340881": "桐城市",
        "340882": "其它区",
        "341000": "黄山市",
        "341002": "屯溪区",
        "341003": "黄山区",
        "341004": "徽州区",
        "341021": "歙县",
        "341022": "休宁县",
        "341023": "黟县",
        "341024": "祁门县",
        "341025": "其它区",
        "341100": "滁州市",
        "341102": "琅琊区",
        "341103": "南谯区",
        "341122": "来安县",
        "341124": "全椒县",
        "341125": "定远县",
        "341126": "凤阳县",
        "341181": "天长市",
        "341182": "明光市",
        "341183": "其它区",
        "341200": "阜阳市",
        "341202": "颍州区",
        "341203": "颍东区",
        "341204": "颍泉区",
        "341221": "临泉县",
        "341222": "太和县",
        "341225": "阜南县",
        "341226": "颍上县",
        "341282": "界首市",
        "341283": "其它区",
        "341300": "宿州市",
        "341302": "埇桥区",
        "341321": "砀山县",
        "341322": "萧县",
        "341323": "灵璧县",
        "341324": "泗县",
        "341325": "其它区",
        "341400": "巢湖市",
        "341421": "庐江县",
        "341422": "无为县",
        "341423": "含山县",
        "341424": "和县",
        "341500": "六安市",
        "341502": "金安区",
        "341503": "裕安区",
        "341521": "寿县",
        "341522": "霍邱县",
        "341523": "舒城县",
        "341524": "金寨县",
        "341525": "霍山县",
        "341526": "其它区",
        "341600": "亳州市",
        "341602": "谯城区",
        "341621": "涡阳县",
        "341622": "蒙城县",
        "341623": "利辛县",
        "341624": "其它区",
        "341700": "池州市",
        "341702": "贵池区",
        "341721": "东至县",
        "341722": "石台县",
        "341723": "青阳县",
        "341724": "其它区",
        "341800": "宣城市",
        "341802": "宣州区",
        "341821": "郎溪县",
        "341822": "广德县",
        "341823": "泾县",
        "341824": "绩溪县",
        "341825": "旌德县",
        "341881": "宁国市",
        "341882": "其它区",
        "350000": "福建省",
        "350100": "福州市",
        "350102": "鼓楼区",
        "350103": "台江区",
        "350104": "仓山区",
        "350105": "马尾区",
        "350111": "晋安区",
        "350121": "闽侯县",
        "350122": "连江县",
        "350123": "罗源县",
        "350124": "闽清县",
        "350125": "永泰县",
        "350128": "平潭县",
        "350181": "福清市",
        "350182": "长乐市",
        "350183": "其它区",
        "350200": "厦门市",
        "350203": "思明区",
        "350205": "海沧区",
        "350206": "湖里区",
        "350211": "集美区",
        "350212": "同安区",
        "350213": "翔安区",
        "350214": "其它区",
        "350300": "莆田市",
        "350302": "城厢区",
        "350303": "涵江区",
        "350304": "荔城区",
        "350305": "秀屿区",
        "350322": "仙游县",
        "350323": "其它区",
        "350400": "三明市",
        "350402": "梅列区",
        "350403": "三元区",
        "350421": "明溪县",
        "350423": "清流县",
        "350424": "宁化县",
        "350425": "大田县",
        "350426": "尤溪县",
        "350427": "沙县",
        "350428": "将乐县",
        "350429": "泰宁县",
        "350430": "建宁县",
        "350481": "永安市",
        "350482": "其它区",
        "350500": "泉州市",
        "350502": "鲤城区",
        "350503": "丰泽区",
        "350504": "洛江区",
        "350505": "泉港区",
        "350521": "惠安县",
        "350524": "安溪县",
        "350525": "永春县",
        "350526": "德化县",
        "350527": "金门县",
        "350581": "石狮市",
        "350582": "晋江市",
        "350583": "南安市",
        "350584": "其它区",
        "350600": "漳州市",
        "350602": "芗城区",
        "350603": "龙文区",
        "350622": "云霄县",
        "350623": "漳浦县",
        "350624": "诏安县",
        "350625": "长泰县",
        "350626": "东山县",
        "350627": "南靖县",
        "350628": "平和县",
        "350629": "华安县",
        "350681": "龙海市",
        "350682": "其它区",
        "350700": "南平市",
        "350702": "延平区",
        "350721": "顺昌县",
        "350722": "浦城县",
        "350723": "光泽县",
        "350724": "松溪县",
        "350725": "政和县",
        "350781": "邵武市",
        "350782": "武夷山市",
        "350783": "建瓯市",
        "350784": "建阳市",
        "350785": "其它区",
        "350800": "龙岩市",
        "350802": "新罗区",
        "350821": "长汀县",
        "350822": "永定县",
        "350823": "上杭县",
        "350824": "武平县",
        "350825": "连城县",
        "350881": "漳平市",
        "350882": "其它区",
        "350900": "宁德市",
        "350902": "蕉城区",
        "350921": "霞浦县",
        "350922": "古田县",
        "350923": "屏南县",
        "350924": "寿宁县",
        "350925": "周宁县",
        "350926": "柘荣县",
        "350981": "福安市",
        "350982": "福鼎市",
        "350983": "其它区",
        "360000": "江西省",
        "360100": "南昌市",
        "360102": "东湖区",
        "360103": "西湖区",
        "360104": "青云谱区",
        "360105": "湾里区",
        "360111": "青山湖区",
        "360121": "南昌县",
        "360122": "新建县",
        "360123": "安义县",
        "360124": "进贤县",
        "360128": "其它区",
        "360200": "景德镇市",
        "360202": "昌江区",
        "360203": "珠山区",
        "360222": "浮梁县",
        "360281": "乐平市",
        "360282": "其它区",
        "360300": "萍乡市",
        "360302": "安源区",
        "360313": "湘东区",
        "360321": "莲花县",
        "360322": "上栗县",
        "360323": "芦溪县",
        "360324": "其它区",
        "360400": "九江市",
        "360402": "庐山区",
        "360403": "浔阳区",
        "360421": "九江县",
        "360423": "武宁县",
        "360424": "修水县",
        "360425": "永修县",
        "360426": "德安县",
        "360427": "星子县",
        "360428": "都昌县",
        "360429": "湖口县",
        "360430": "彭泽县",
        "360481": "瑞昌市",
        "360482": "其它区",
        "360483": "共青城市",
        "360500": "新余市",
        "360502": "渝水区",
        "360521": "分宜县",
        "360522": "其它区",
        "360600": "鹰潭市",
        "360602": "月湖区",
        "360622": "余江县",
        "360681": "贵溪市",
        "360682": "其它区",
        "360700": "赣州市",
        "360702": "章贡区",
        "360721": "赣县",
        "360722": "信丰县",
        "360723": "大余县",
        "360724": "上犹县",
        "360725": "崇义县",
        "360726": "安远县",
        "360727": "龙南县",
        "360728": "定南县",
        "360729": "全南县",
        "360730": "宁都县",
        "360731": "于都县",
        "360732": "兴国县",
        "360733": "会昌县",
        "360734": "寻乌县",
        "360735": "石城县",
        "360781": "瑞金市",
        "360782": "南康市",
        "360783": "其它区",
        "360800": "吉安市",
        "360802": "吉州区",
        "360803": "青原区",
        "360821": "吉安县",
        "360822": "吉水县",
        "360823": "峡江县",
        "360824": "新干县",
        "360825": "永丰县",
        "360826": "泰和县",
        "360827": "遂川县",
        "360828": "万安县",
        "360829": "安福县",
        "360830": "永新县",
        "360881": "井冈山市",
        "360882": "其它区",
        "360900": "宜春市",
        "360902": "袁州区",
        "360921": "奉新县",
        "360922": "万载县",
        "360923": "上高县",
        "360924": "宜丰县",
        "360925": "靖安县",
        "360926": "铜鼓县",
        "360981": "丰城市",
        "360982": "樟树市",
        "360983": "高安市",
        "360984": "其它区",
        "361000": "抚州市",
        "361002": "临川区",
        "361021": "南城县",
        "361022": "黎川县",
        "361023": "南丰县",
        "361024": "崇仁县",
        "361025": "乐安县",
        "361026": "宜黄县",
        "361027": "金溪县",
        "361028": "资溪县",
        "361029": "东乡县",
        "361030": "广昌县",
        "361031": "其它区",
        "361100": "上饶市",
        "361102": "信州区",
        "361121": "上饶县",
        "361122": "广丰县",
        "361123": "玉山县",
        "361124": "铅山县",
        "361125": "横峰县",
        "361126": "弋阳县",
        "361127": "余干县",
        "361128": "鄱阳县",
        "361129": "万年县",
        "361130": "婺源县",
        "361181": "德兴市",
        "361182": "其它区",
        "370000": "山东省",
        "370100": "济南市",
        "370102": "历下区",
        "370103": "市中区",
        "370104": "槐荫区",
        "370105": "天桥区",
        "370112": "历城区",
        "370113": "长清区",
        "370124": "平阴县",
        "370125": "济阳县",
        "370126": "商河县",
        "370181": "章丘市",
        "370182": "其它区",
        "370200": "青岛市",
        "370202": "市南区",
        "370203": "市北区",
        "370211": "黄岛区",
        "370212": "崂山区",
        "370213": "李沧区",
        "370214": "城阳区",
        "370281": "胶州市",
        "370282": "即墨市",
        "370283": "平度市",
        "370285": "莱西市",
        "370286": "其它区",
        "370300": "淄博市",
        "370302": "淄川区",
        "370303": "张店区",
        "370304": "博山区",
        "370305": "临淄区",
        "370306": "周村区",
        "370321": "桓台县",
        "370322": "高青县",
        "370323": "沂源县",
        "370324": "其它区",
        "370400": "枣庄市",
        "370402": "市中区",
        "370403": "薛城区",
        "370404": "峄城区",
        "370405": "台儿庄区",
        "370406": "山亭区",
        "370481": "滕州市",
        "370482": "其它区",
        "370500": "东营市",
        "370502": "东营区",
        "370503": "河口区",
        "370521": "垦利县",
        "370522": "利津县",
        "370523": "广饶县",
        "370591": "其它区",
        "370600": "烟台市",
        "370602": "芝罘区",
        "370611": "福山区",
        "370612": "牟平区",
        "370613": "莱山区",
        "370634": "长岛县",
        "370681": "龙口市",
        "370682": "莱阳市",
        "370683": "莱州市",
        "370684": "蓬莱市",
        "370685": "招远市",
        "370686": "栖霞市",
        "370687": "海阳市",
        "370688": "其它区",
        "370700": "潍坊市",
        "370702": "潍城区",
        "370703": "寒亭区",
        "370704": "坊子区",
        "370705": "奎文区",
        "370724": "临朐县",
        "370725": "昌乐县",
        "370781": "青州市",
        "370782": "诸城市",
        "370783": "寿光市",
        "370784": "安丘市",
        "370785": "高密市",
        "370786": "昌邑市",
        "370787": "其它区",
        "370800": "济宁市",
        "370802": "市中区",
        "370811": "任城区",
        "370826": "微山县",
        "370827": "鱼台县",
        "370828": "金乡县",
        "370829": "嘉祥县",
        "370830": "汶上县",
        "370831": "泗水县",
        "370832": "梁山县",
        "370881": "曲阜市",
        "370882": "兖州市",
        "370883": "邹城市",
        "370884": "其它区",
        "370900": "泰安市",
        "370902": "泰山区",
        "370903": "岱岳区",
        "370921": "宁阳县",
        "370923": "东平县",
        "370982": "新泰市",
        "370983": "肥城市",
        "370984": "其它区",
        "371000": "威海市",
        "371002": "环翠区",
        "371081": "文登市",
        "371082": "荣成市",
        "371083": "乳山市",
        "371084": "其它区",
        "371100": "日照市",
        "371102": "东港区",
        "371103": "岚山区",
        "371121": "五莲县",
        "371122": "莒县",
        "371123": "其它区",
        "371200": "莱芜市",
        "371202": "莱城区",
        "371203": "钢城区",
        "371204": "其它区",
        "371300": "临沂市",
        "371302": "兰山区",
        "371311": "罗庄区",
        "371312": "河东区",
        "371321": "沂南县",
        "371322": "郯城县",
        "371323": "沂水县",
        "371324": "苍山县",
        "371325": "费县",
        "371326": "平邑县",
        "371327": "莒南县",
        "371328": "蒙阴县",
        "371329": "临沭县",
        "371330": "其它区",
        "371400": "德州市",
        "371402": "德城区",
        "371421": "陵县",
        "371422": "宁津县",
        "371423": "庆云县",
        "371424": "临邑县",
        "371425": "齐河县",
        "371426": "平原县",
        "371427": "夏津县",
        "371428": "武城县",
        "371481": "乐陵市",
        "371482": "禹城市",
        "371483": "其它区",
        "371500": "聊城市",
        "371502": "东昌府区",
        "371521": "阳谷县",
        "371522": "莘县",
        "371523": "茌平县",
        "371524": "东阿县",
        "371525": "冠县",
        "371526": "高唐县",
        "371581": "临清市",
        "371582": "其它区",
        "371600": "滨州市",
        "371602": "滨城区",
        "371621": "惠民县",
        "371622": "阳信县",
        "371623": "无棣县",
        "371624": "沾化县",
        "371625": "博兴县",
        "371626": "邹平县",
        "371627": "其它区",
        "371700": "菏泽市",
        "371702": "牡丹区",
        "371721": "曹县",
        "371722": "单县",
        "371723": "成武县",
        "371724": "巨野县",
        "371725": "郓城县",
        "371726": "鄄城县",
        "371727": "定陶县",
        "371728": "东明县",
        "371729": "其它区",
        "410000": "河南省",
        "410100": "郑州市",
        "410102": "中原区",
        "410103": "二七区",
        "410104": "管城回族区",
        "410105": "金水区",
        "410106": "上街区",
        "410108": "惠济区",
        "410122": "中牟县",
        "410181": "巩义市",
        "410182": "荥阳市",
        "410183": "新密市",
        "410184": "新郑市",
        "410185": "登封市",
        "410188": "其它区",
        "410200": "开封市",
        "410202": "龙亭区",
        "410203": "顺河回族区",
        "410204": "鼓楼区",
        "410205": "禹王台区",
        "410211": "金明区",
        "410221": "杞县",
        "410222": "通许县",
        "410223": "尉氏县",
        "410224": "开封县",
        "410225": "兰考县",
        "410226": "其它区",
        "410300": "洛阳市",
        "410302": "老城区",
        "410303": "西工区",
        "410304": "瀍河回族区",
        "410305": "涧西区",
        "410306": "吉利区",
        "410307": "洛龙区",
        "410322": "孟津县",
        "410323": "新安县",
        "410324": "栾川县",
        "410325": "嵩县",
        "410326": "汝阳县",
        "410327": "宜阳县",
        "410328": "洛宁县",
        "410329": "伊川县",
        "410381": "偃师市",
        "410400": "平顶山市",
        "410402": "新华区",
        "410403": "卫东区",
        "410404": "石龙区",
        "410411": "湛河区",
        "410421": "宝丰县",
        "410422": "叶县",
        "410423": "鲁山县",
        "410425": "郏县",
        "410481": "舞钢市",
        "410482": "汝州市",
        "410483": "其它区",
        "410500": "安阳市",
        "410502": "文峰区",
        "410503": "北关区",
        "410505": "殷都区",
        "410506": "龙安区",
        "410522": "安阳县",
        "410523": "汤阴县",
        "410526": "滑县",
        "410527": "内黄县",
        "410581": "林州市",
        "410582": "其它区",
        "410600": "鹤壁市",
        "410602": "鹤山区",
        "410603": "山城区",
        "410611": "淇滨区",
        "410621": "浚县",
        "410622": "淇县",
        "410623": "其它区",
        "410700": "新乡市",
        "410702": "红旗区",
        "410703": "卫滨区",
        "410704": "凤泉区",
        "410711": "牧野区",
        "410721": "新乡县",
        "410724": "获嘉县",
        "410725": "原阳县",
        "410726": "延津县",
        "410727": "封丘县",
        "410728": "长垣县",
        "410781": "卫辉市",
        "410782": "辉县市",
        "410783": "其它区",
        "410800": "焦作市",
        "410802": "解放区",
        "410803": "中站区",
        "410804": "马村区",
        "410811": "山阳区",
        "410821": "修武县",
        "410822": "博爱县",
        "410823": "武陟县",
        "410825": "温县",
        "410881": "济源市",
        "410882": "沁阳市",
        "410883": "孟州市",
        "410884": "其它区",
        "410900": "濮阳市",
        "410902": "华龙区",
        "410922": "清丰县",
        "410923": "南乐县",
        "410926": "范县",
        "410927": "台前县",
        "410928": "濮阳县",
        "410929": "其它区",
        "411000": "许昌市",
        "411002": "魏都区",
        "411023": "许昌县",
        "411024": "鄢陵县",
        "411025": "襄城县",
        "411081": "禹州市",
        "411082": "长葛市",
        "411083": "其它区",
        "411100": "漯河市",
        "411102": "源汇区",
        "411103": "郾城区",
        "411104": "召陵区",
        "411121": "舞阳县",
        "411122": "临颍县",
        "411123": "其它区",
        "411200": "三门峡市",
        "411202": "湖滨区",
        "411221": "渑池县",
        "411222": "陕县",
        "411224": "卢氏县",
        "411281": "义马市",
        "411282": "灵宝市",
        "411283": "其它区",
        "411300": "南阳市",
        "411302": "宛城区",
        "411303": "卧龙区",
        "411321": "南召县",
        "411322": "方城县",
        "411323": "西峡县",
        "411324": "镇平县",
        "411325": "内乡县",
        "411326": "淅川县",
        "411327": "社旗县",
        "411328": "唐河县",
        "411329": "新野县",
        "411330": "桐柏县",
        "411381": "邓州市",
        "411382": "其它区",
        "411400": "商丘市",
        "411402": "梁园区",
        "411403": "睢阳区",
        "411421": "民权县",
        "411422": "睢县",
        "411423": "宁陵县",
        "411424": "柘城县",
        "411425": "虞城县",
        "411426": "夏邑县",
        "411481": "永城市",
        "411482": "其它区",
        "411500": "信阳市",
        "411502": "浉河区",
        "411503": "平桥区",
        "411521": "罗山县",
        "411522": "光山县",
        "411523": "新县",
        "411524": "商城县",
        "411525": "固始县",
        "411526": "潢川县",
        "411527": "淮滨县",
        "411528": "息县",
        "411529": "其它区",
        "411600": "周口市",
        "411602": "川汇区",
        "411621": "扶沟县",
        "411622": "西华县",
        "411623": "商水县",
        "411624": "沈丘县",
        "411625": "郸城县",
        "411626": "淮阳县",
        "411627": "太康县",
        "411628": "鹿邑县",
        "411681": "项城市",
        "411682": "其它区",
        "411700": "驻马店市",
        "411702": "驿城区",
        "411721": "西平县",
        "411722": "上蔡县",
        "411723": "平舆县",
        "411724": "正阳县",
        "411725": "确山县",
        "411726": "泌阳县",
        "411727": "汝南县",
        "411728": "遂平县",
        "411729": "新蔡县",
        "411730": "其它区",
        "420000": "湖北省",
        "420100": "武汉市",
        "420102": "江岸区",
        "420103": "江汉区",
        "420104": "硚口区",
        "420105": "汉阳区",
        "420106": "武昌区",
        "420107": "青山区",
        "420111": "洪山区",
        "420112": "东西湖区",
        "420113": "汉南区",
        "420114": "蔡甸区",
        "420115": "江夏区",
        "420116": "黄陂区",
        "420117": "新洲区",
        "420118": "其它区",
        "420200": "黄石市",
        "420202": "黄石港区",
        "420203": "西塞山区",
        "420204": "下陆区",
        "420205": "铁山区",
        "420222": "阳新县",
        "420281": "大冶市",
        "420282": "其它区",
        "420300": "十堰市",
        "420302": "茅箭区",
        "420303": "张湾区",
        "420321": "郧县",
        "420322": "郧西县",
        "420323": "竹山县",
        "420324": "竹溪县",
        "420325": "房县",
        "420381": "丹江口市",
        "420383": "其它区",
        "420500": "宜昌市",
        "420502": "西陵区",
        "420503": "伍家岗区",
        "420504": "点军区",
        "420505": "猇亭区",
        "420506": "夷陵区",
        "420525": "远安县",
        "420526": "兴山县",
        "420527": "秭归县",
        "420528": "长阳土家族自治县",
        "420529": "五峰土家族自治县",
        "420581": "宜都市",
        "420582": "当阳市",
        "420583": "枝江市",
        "420584": "其它区",
        "420600": "襄阳市",
        "420602": "襄城区",
        "420606": "樊城区",
        "420607": "襄州区",
        "420624": "南漳县",
        "420625": "谷城县",
        "420626": "保康县",
        "420682": "老河口市",
        "420683": "枣阳市",
        "420684": "宜城市",
        "420685": "其它区",
        "420700": "鄂州市",
        "420702": "梁子湖区",
        "420703": "华容区",
        "420704": "鄂城区",
        "420705": "其它区",
        "420800": "荆门市",
        "420802": "东宝区",
        "420804": "掇刀区",
        "420821": "京山县",
        "420822": "沙洋县",
        "420881": "钟祥市",
        "420882": "其它区",
        "420900": "孝感市",
        "420902": "孝南区",
        "420921": "孝昌县",
        "420922": "大悟县",
        "420923": "云梦县",
        "420981": "应城市",
        "420982": "安陆市",
        "420984": "汉川市",
        "420985": "其它区",
        "421000": "荆州市",
        "421002": "沙市区",
        "421003": "荆州区",
        "421022": "公安县",
        "421023": "监利县",
        "421024": "江陵县",
        "421081": "石首市",
        "421083": "洪湖市",
        "421087": "松滋市",
        "421088": "其它区",
        "421100": "黄冈市",
        "421102": "黄州区",
        "421121": "团风县",
        "421122": "红安县",
        "421123": "罗田县",
        "421124": "英山县",
        "421125": "浠水县",
        "421126": "蕲春县",
        "421127": "黄梅县",
        "421181": "麻城市",
        "421182": "武穴市",
        "421183": "其它区",
        "421200": "咸宁市",
        "421202": "咸安区",
        "421221": "嘉鱼县",
        "421222": "通城县",
        "421223": "崇阳县",
        "421224": "通山县",
        "421281": "赤壁市",
        "421283": "其它区",
        "421300": "随州市",
        "421302": "曾都区",
        "421321": "随县",
        "421381": "广水市",
        "421382": "其它区",
        "422800": "恩施土家族苗族自治州",
        "422801": "恩施市",
        "422802": "利川市",
        "422822": "建始县",
        "422823": "巴东县",
        "422825": "宣恩县",
        "422826": "咸丰县",
        "422827": "来凤县",
        "422828": "鹤峰县",
        "422829": "其它区",
        "429004": "仙桃市",
        "429005": "潜江市",
        "429006": "天门市",
        "429021": "神农架林区",
        "430000": "湖南省",
        "430100": "长沙市",
        "430102": "芙蓉区",
        "430103": "天心区",
        "430104": "岳麓区",
        "430105": "开福区",
        "430111": "雨花区",
        "430121": "长沙县",
        "430122": "望城区",
        "430124": "宁乡县",
        "430181": "浏阳市",
        "430182": "其它区",
        "430200": "株洲市",
        "430202": "荷塘区",
        "430203": "芦淞区",
        "430204": "石峰区",
        "430211": "天元区",
        "430221": "株洲县",
        "430223": "攸县",
        "430224": "茶陵县",
        "430225": "炎陵县",
        "430281": "醴陵市",
        "430282": "其它区",
        "430300": "湘潭市",
        "430302": "雨湖区",
        "430304": "岳塘区",
        "430321": "湘潭县",
        "430381": "湘乡市",
        "430382": "韶山市",
        "430383": "其它区",
        "430400": "衡阳市",
        "430405": "珠晖区",
        "430406": "雁峰区",
        "430407": "石鼓区",
        "430408": "蒸湘区",
        "430412": "南岳区",
        "430421": "衡阳县",
        "430422": "衡南县",
        "430423": "衡山县",
        "430424": "衡东县",
        "430426": "祁东县",
        "430481": "耒阳市",
        "430482": "常宁市",
        "430483": "其它区",
        "430500": "邵阳市",
        "430502": "双清区",
        "430503": "大祥区",
        "430511": "北塔区",
        "430521": "邵东县",
        "430522": "新邵县",
        "430523": "邵阳县",
        "430524": "隆回县",
        "430525": "洞口县",
        "430527": "绥宁县",
        "430528": "新宁县",
        "430529": "城步苗族自治县",
        "430581": "武冈市",
        "430582": "其它区",
        "430600": "岳阳市",
        "430602": "岳阳楼区",
        "430603": "云溪区",
        "430611": "君山区",
        "430621": "岳阳县",
        "430623": "华容县",
        "430624": "湘阴县",
        "430626": "平江县",
        "430681": "汨罗市",
        "430682": "临湘市",
        "430683": "其它区",
        "430700": "常德市",
        "430702": "武陵区",
        "430703": "鼎城区",
        "430721": "安乡县",
        "430722": "汉寿县",
        "430723": "澧县",
        "430724": "临澧县",
        "430725": "桃源县",
        "430726": "石门县",
        "430781": "津市市",
        "430782": "其它区",
        "430800": "张家界市",
        "430802": "永定区",
        "430811": "武陵源区",
        "430821": "慈利县",
        "430822": "桑植县",
        "430823": "其它区",
        "430900": "益阳市",
        "430902": "资阳区",
        "430903": "赫山区",
        "430921": "南县",
        "430922": "桃江县",
        "430923": "安化县",
        "430981": "沅江市",
        "430982": "其它区",
        "431000": "郴州市",
        "431002": "北湖区",
        "431003": "苏仙区",
        "431021": "桂阳县",
        "431022": "宜章县",
        "431023": "永兴县",
        "431024": "嘉禾县",
        "431025": "临武县",
        "431026": "汝城县",
        "431027": "桂东县",
        "431028": "安仁县",
        "431081": "资兴市",
        "431082": "其它区",
        "431100": "永州市",
        "431102": "零陵区",
        "431103": "冷水滩区",
        "431121": "祁阳县",
        "431122": "东安县",
        "431123": "双牌县",
        "431124": "道县",
        "431125": "江永县",
        "431126": "宁远县",
        "431127": "蓝山县",
        "431128": "新田县",
        "431129": "江华瑶族自治县",
        "431130": "其它区",
        "431200": "怀化市",
        "431202": "鹤城区",
        "431221": "中方县",
        "431222": "沅陵县",
        "431223": "辰溪县",
        "431224": "溆浦县",
        "431225": "会同县",
        "431226": "麻阳苗族自治县",
        "431227": "新晃侗族自治县",
        "431228": "芷江侗族自治县",
        "431229": "靖州苗族侗族自治县",
        "431230": "通道侗族自治县",
        "431281": "洪江市",
        "431282": "其它区",
        "431300": "娄底市",
        "431302": "娄星区",
        "431321": "双峰县",
        "431322": "新化县",
        "431381": "冷水江市",
        "431382": "涟源市",
        "431383": "其它区",
        "433100": "湘西土家族苗族自治州",
        "433101": "吉首市",
        "433122": "泸溪县",
        "433123": "凤凰县",
        "433124": "花垣县",
        "433125": "保靖县",
        "433126": "古丈县",
        "433127": "永顺县",
        "433130": "龙山县",
        "433131": "其它区",
        "440000": "广东省",
        "440100": "广州市",
        "440103": "荔湾区",
        "440104": "越秀区",
        "440105": "海珠区",
        "440106": "天河区",
        "440111": "白云区",
        "440112": "黄埔区",
        "440113": "番禺区",
        "440114": "花都区",
        "440115": "南沙区",
        "440116": "萝岗区",
        "440183": "增城市",
        "440184": "从化市",
        "440189": "其它区",
        "440200": "韶关市",
        "440203": "武江区",
        "440204": "浈江区",
        "440205": "曲江区",
        "440222": "始兴县",
        "440224": "仁化县",
        "440229": "翁源县",
        "440232": "乳源瑶族自治县",
        "440233": "新丰县",
        "440281": "乐昌市",
        "440282": "南雄市",
        "440283": "其它区",
        "440300": "深圳市",
        "440303": "罗湖区",
        "440304": "福田区",
        "440305": "南山区",
        "440306": "宝安区",
        "440307": "龙岗区",
        "440308": "盐田区",
        "440309": "其它区",
        "440320": "光明新区",
        "440321": "坪山新区",
        "440322": "大鹏新区",
        "440323": "龙华新区",
        "440400": "珠海市",
        "440402": "香洲区",
        "440403": "斗门区",
        "440404": "金湾区",
        "440488": "其它区",
        "440500": "汕头市",
        "440507": "龙湖区",
        "440511": "金平区",
        "440512": "濠江区",
        "440513": "潮阳区",
        "440514": "潮南区",
        "440515": "澄海区",
        "440523": "南澳县",
        "440524": "其它区",
        "440600": "佛山市",
        "440604": "禅城区",
        "440605": "南海区",
        "440606": "顺德区",
        "440607": "三水区",
        "440608": "高明区",
        "440609": "其它区",
        "440700": "江门市",
        "440703": "蓬江区",
        "440704": "江海区",
        "440705": "新会区",
        "440781": "台山市",
        "440783": "开平市",
        "440784": "鹤山市",
        "440785": "恩平市",
        "440786": "其它区",
        "440800": "湛江市",
        "440802": "赤坎区",
        "440803": "霞山区",
        "440804": "坡头区",
        "440811": "麻章区",
        "440823": "遂溪县",
        "440825": "徐闻县",
        "440881": "廉江市",
        "440882": "雷州市",
        "440883": "吴川市",
        "440884": "其它区",
        "440900": "茂名市",
        "440902": "茂南区",
        "440903": "茂港区",
        "440923": "电白县",
        "440981": "高州市",
        "440982": "化州市",
        "440983": "信宜市",
        "440984": "其它区",
        "441200": "肇庆市",
        "441202": "端州区",
        "441203": "鼎湖区",
        "441223": "广宁县",
        "441224": "怀集县",
        "441225": "封开县",
        "441226": "德庆县",
        "441283": "高要市",
        "441284": "四会市",
        "441285": "其它区",
        "441300": "惠州市",
        "441302": "惠城区",
        "441303": "惠阳区",
        "441322": "博罗县",
        "441323": "惠东县",
        "441324": "龙门县",
        "441325": "其它区",
        "441400": "梅州市",
        "441402": "梅江区",
        "441421": "梅县",
        "441422": "大埔县",
        "441423": "丰顺县",
        "441424": "五华县",
        "441426": "平远县",
        "441427": "蕉岭县",
        "441481": "兴宁市",
        "441482": "其它区",
        "441500": "汕尾市",
        "441502": "城区",
        "441521": "海丰县",
        "441523": "陆河县",
        "441581": "陆丰市",
        "441582": "其它区",
        "441600": "河源市",
        "441602": "源城区",
        "441621": "紫金县",
        "441622": "龙川县",
        "441623": "连平县",
        "441624": "和平县",
        "441625": "东源县",
        "441626": "其它区",
        "441700": "阳江市",
        "441702": "江城区",
        "441721": "阳西县",
        "441723": "阳东县",
        "441781": "阳春市",
        "441782": "其它区",
        "441800": "清远市",
        "441802": "清城区",
        "441821": "佛冈县",
        "441823": "阳山县",
        "441825": "连山壮族瑶族自治县",
        "441826": "连南瑶族自治县",
        "441827": "清新区",
        "441881": "英德市",
        "441882": "连州市",
        "441883": "其它区",
        "441900": "东莞市",
        "442000": "中山市",
        "442101": "东沙群岛",
        "445100": "潮州市",
        "445102": "湘桥区",
        "445121": "潮安区",
        "445122": "饶平县",
        "445186": "其它区",
        "445200": "揭阳市",
        "445202": "榕城区",
        "445221": "揭东区",
        "445222": "揭西县",
        "445224": "惠来县",
        "445281": "普宁市",
        "445285": "其它区",
        "445300": "云浮市",
        "445302": "云城区",
        "445321": "新兴县",
        "445322": "郁南县",
        "445323": "云安县",
        "445381": "罗定市",
        "445382": "其它区",
        "450000": "广西壮族自治区",
        "450100": "南宁市",
        "450102": "兴宁区",
        "450103": "青秀区",
        "450105": "江南区",
        "450107": "西乡塘区",
        "450108": "良庆区",
        "450109": "邕宁区",
        "450122": "武鸣县",
        "450123": "隆安县",
        "450124": "马山县",
        "450125": "上林县",
        "450126": "宾阳县",
        "450127": "横县",
        "450128": "其它区",
        "450200": "柳州市",
        "450202": "城中区",
        "450203": "鱼峰区",
        "450204": "柳南区",
        "450205": "柳北区",
        "450221": "柳江县",
        "450222": "柳城县",
        "450223": "鹿寨县",
        "450224": "融安县",
        "450225": "融水苗族自治县",
        "450226": "三江侗族自治县",
        "450227": "其它区",
        "450300": "桂林市",
        "450302": "秀峰区",
        "450303": "叠彩区",
        "450304": "象山区",
        "450305": "七星区",
        "450311": "雁山区",
        "450321": "阳朔县",
        "450322": "临桂区",
        "450323": "灵川县",
        "450324": "全州县",
        "450325": "兴安县",
        "450326": "永福县",
        "450327": "灌阳县",
        "450328": "龙胜各族自治县",
        "450329": "资源县",
        "450330": "平乐县",
        "450331": "荔浦县",
        "450332": "恭城瑶族自治县",
        "450333": "其它区",
        "450400": "梧州市",
        "450403": "万秀区",
        "450405": "长洲区",
        "450406": "龙圩区",
        "450421": "苍梧县",
        "450422": "藤县",
        "450423": "蒙山县",
        "450481": "岑溪市",
        "450482": "其它区",
        "450500": "北海市",
        "450502": "海城区",
        "450503": "银海区",
        "450512": "铁山港区",
        "450521": "合浦县",
        "450522": "其它区",
        "450600": "防城港市",
        "450602": "港口区",
        "450603": "防城区",
        "450621": "上思县",
        "450681": "东兴市",
        "450682": "其它区",
        "450700": "钦州市",
        "450702": "钦南区",
        "450703": "钦北区",
        "450721": "灵山县",
        "450722": "浦北县",
        "450723": "其它区",
        "450800": "贵港市",
        "450802": "港北区",
        "450803": "港南区",
        "450804": "覃塘区",
        "450821": "平南县",
        "450881": "桂平市",
        "450882": "其它区",
        "450900": "玉林市",
        "450902": "玉州区",
        "450903": "福绵区",
        "450921": "容县",
        "450922": "陆川县",
        "450923": "博白县",
        "450924": "兴业县",
        "450981": "北流市",
        "450982": "其它区",
        "451000": "百色市",
        "451002": "右江区",
        "451021": "田阳县",
        "451022": "田东县",
        "451023": "平果县",
        "451024": "德保县",
        "451025": "靖西县",
        "451026": "那坡县",
        "451027": "凌云县",
        "451028": "乐业县",
        "451029": "田林县",
        "451030": "西林县",
        "451031": "隆林各族自治县",
        "451032": "其它区",
        "451100": "贺州市",
        "451102": "八步区",
        "451119": "平桂管理区",
        "451121": "昭平县",
        "451122": "钟山县",
        "451123": "富川瑶族自治县",
        "451124": "其它区",
        "451200": "河池市",
        "451202": "金城江区",
        "451221": "南丹县",
        "451222": "天峨县",
        "451223": "凤山县",
        "451224": "东兰县",
        "451225": "罗城仫佬族自治县",
        "451226": "环江毛南族自治县",
        "451227": "巴马瑶族自治县",
        "451228": "都安瑶族自治县",
        "451229": "大化瑶族自治县",
        "451281": "宜州市",
        "451282": "其它区",
        "451300": "来宾市",
        "451302": "兴宾区",
        "451321": "忻城县",
        "451322": "象州县",
        "451323": "武宣县",
        "451324": "金秀瑶族自治县",
        "451381": "合山市",
        "451382": "其它区",
        "451400": "崇左市",
        "451402": "江州区",
        "451421": "扶绥县",
        "451422": "宁明县",
        "451423": "龙州县",
        "451424": "大新县",
        "451425": "天等县",
        "451481": "凭祥市",
        "451482": "其它区",
        "460000": "海南省",
        "460100": "海口市",
        "460105": "秀英区",
        "460106": "龙华区",
        "460107": "琼山区",
        "460108": "美兰区",
        "460109": "其它区",
        "460200": "三亚市",
        "460300": "三沙市",
        "460321": "西沙群岛",
        "460322": "南沙群岛",
        "460323": "中沙群岛的岛礁及其海域",
        "469001": "五指山市",
        "469002": "琼海市",
        "469003": "儋州市",
        "469005": "文昌市",
        "469006": "万宁市",
        "469007": "东方市",
        "469025": "定安县",
        "469026": "屯昌县",
        "469027": "澄迈县",
        "469028": "临高县",
        "469030": "白沙黎族自治县",
        "469031": "昌江黎族自治县",
        "469033": "乐东黎族自治县",
        "469034": "陵水黎族自治县",
        "469035": "保亭黎族苗族自治县",
        "469036": "琼中黎族苗族自治县",
        "471005": "其它区",
        "500000": "重庆",
        "500100": "重庆市",
        "500101": "万州区",
        "500102": "涪陵区",
        "500103": "渝中区",
        "500104": "大渡口区",
        "500105": "江北区",
        "500106": "沙坪坝区",
        "500107": "九龙坡区",
        "500108": "南岸区",
        "500109": "北碚区",
        "500110": "万盛区",
        "500111": "双桥区",
        "500112": "渝北区",
        "500113": "巴南区",
        "500114": "黔江区",
        "500115": "长寿区",
        "500222": "綦江区",
        "500223": "潼南县",
        "500224": "铜梁县",
        "500225": "大足区",
        "500226": "荣昌县",
        "500227": "璧山县",
        "500228": "梁平县",
        "500229": "城口县",
        "500230": "丰都县",
        "500231": "垫江县",
        "500232": "武隆县",
        "500233": "忠县",
        "500234": "开县",
        "500235": "云阳县",
        "500236": "奉节县",
        "500237": "巫山县",
        "500238": "巫溪县",
        "500240": "石柱土家族自治县",
        "500241": "秀山土家族苗族自治县",
        "500242": "酉阳土家族苗族自治县",
        "500243": "彭水苗族土家族自治县",
        "500381": "江津区",
        "500382": "合川区",
        "500383": "永川区",
        "500384": "南川区",
        "500385": "其它区",
        "510000": "四川省",
        "510100": "成都市",
        "510104": "锦江区",
        "510105": "青羊区",
        "510106": "金牛区",
        "510107": "武侯区",
        "510108": "成华区",
        "510112": "龙泉驿区",
        "510113": "青白江区",
        "510114": "新都区",
        "510115": "温江区",
        "510121": "金堂县",
        "510122": "双流县",
        "510124": "郫县",
        "510129": "大邑县",
        "510131": "蒲江县",
        "510132": "新津县",
        "510181": "都江堰市",
        "510182": "彭州市",
        "510183": "邛崃市",
        "510184": "崇州市",
        "510185": "其它区",
        "510300": "自贡市",
        "510302": "自流井区",
        "510303": "贡井区",
        "510304": "大安区",
        "510311": "沿滩区",
        "510321": "荣县",
        "510322": "富顺县",
        "510323": "其它区",
        "510400": "攀枝花市",
        "510402": "东区",
        "510403": "西区",
        "510411": "仁和区",
        "510421": "米易县",
        "510422": "盐边县",
        "510423": "其它区",
        "510500": "泸州市",
        "510502": "江阳区",
        "510503": "纳溪区",
        "510504": "龙马潭区",
        "510521": "泸县",
        "510522": "合江县",
        "510524": "叙永县",
        "510525": "古蔺县",
        "510526": "其它区",
        "510600": "德阳市",
        "510603": "旌阳区",
        "510623": "中江县",
        "510626": "罗江县",
        "510681": "广汉市",
        "510682": "什邡市",
        "510683": "绵竹市",
        "510684": "其它区",
        "510700": "绵阳市",
        "510703": "涪城区",
        "510704": "游仙区",
        "510722": "三台县",
        "510723": "盐亭县",
        "510724": "安县",
        "510725": "梓潼县",
        "510726": "北川羌族自治县",
        "510727": "平武县",
        "510781": "江油市",
        "510782": "其它区",
        "510800": "广元市",
        "510802": "利州区",
        "510811": "昭化区",
        "510812": "朝天区",
        "510821": "旺苍县",
        "510822": "青川县",
        "510823": "剑阁县",
        "510824": "苍溪县",
        "510825": "其它区",
        "510900": "遂宁市",
        "510903": "船山区",
        "510904": "安居区",
        "510921": "蓬溪县",
        "510922": "射洪县",
        "510923": "大英县",
        "510924": "其它区",
        "511000": "内江市",
        "511002": "市中区",
        "511011": "东兴区",
        "511024": "威远县",
        "511025": "资中县",
        "511028": "隆昌县",
        "511029": "其它区",
        "511100": "乐山市",
        "511102": "市中区",
        "511111": "沙湾区",
        "511112": "五通桥区",
        "511113": "金口河区",
        "511123": "犍为县",
        "511124": "井研县",
        "511126": "夹江县",
        "511129": "沐川县",
        "511132": "峨边彝族自治县",
        "511133": "马边彝族自治县",
        "511181": "峨眉山市",
        "511182": "其它区",
        "511300": "南充市",
        "511302": "顺庆区",
        "511303": "高坪区",
        "511304": "嘉陵区",
        "511321": "南部县",
        "511322": "营山县",
        "511323": "蓬安县",
        "511324": "仪陇县",
        "511325": "西充县",
        "511381": "阆中市",
        "511382": "其它区",
        "511400": "眉山市",
        "511402": "东坡区",
        "511421": "仁寿县",
        "511422": "彭山县",
        "511423": "洪雅县",
        "511424": "丹棱县",
        "511425": "青神县",
        "511426": "其它区",
        "511500": "宜宾市",
        "511502": "翠屏区",
        "511521": "宜宾县",
        "511522": "南溪区",
        "511523": "江安县",
        "511524": "长宁县",
        "511525": "高县",
        "511526": "珙县",
        "511527": "筠连县",
        "511528": "兴文县",
        "511529": "屏山县",
        "511530": "其它区",
        "511600": "广安市",
        "511602": "广安区",
        "511603": "前锋区",
        "511621": "岳池县",
        "511622": "武胜县",
        "511623": "邻水县",
        "511681": "华蓥市",
        "511683": "其它区",
        "511700": "达州市",
        "511702": "通川区",
        "511721": "达川区",
        "511722": "宣汉县",
        "511723": "开江县",
        "511724": "大竹县",
        "511725": "渠县",
        "511781": "万源市",
        "511782": "其它区",
        "511800": "雅安市",
        "511802": "雨城区",
        "511821": "名山区",
        "511822": "荥经县",
        "511823": "汉源县",
        "511824": "石棉县",
        "511825": "天全县",
        "511826": "芦山县",
        "511827": "宝兴县",
        "511828": "其它区",
        "511900": "巴中市",
        "511902": "巴州区",
        "511903": "恩阳区",
        "511921": "通江县",
        "511922": "南江县",
        "511923": "平昌县",
        "511924": "其它区",
        "512000": "资阳市",
        "512002": "雁江区",
        "512021": "安岳县",
        "512022": "乐至县",
        "512081": "简阳市",
        "512082": "其它区",
        "513200": "阿坝藏族羌族自治州",
        "513221": "汶川县",
        "513222": "理县",
        "513223": "茂县",
        "513224": "松潘县",
        "513225": "九寨沟县",
        "513226": "金川县",
        "513227": "小金县",
        "513228": "黑水县",
        "513229": "马尔康县",
        "513230": "壤塘县",
        "513231": "阿坝县",
        "513232": "若尔盖县",
        "513233": "红原县",
        "513234": "其它区",
        "513300": "甘孜藏族自治州",
        "513321": "康定县",
        "513322": "泸定县",
        "513323": "丹巴县",
        "513324": "九龙县",
        "513325": "雅江县",
        "513326": "道孚县",
        "513327": "炉霍县",
        "513328": "甘孜县",
        "513329": "新龙县",
        "513330": "德格县",
        "513331": "白玉县",
        "513332": "石渠县",
        "513333": "色达县",
        "513334": "理塘县",
        "513335": "巴塘县",
        "513336": "乡城县",
        "513337": "稻城县",
        "513338": "得荣县",
        "513339": "其它区",
        "513400": "凉山彝族自治州",
        "513401": "西昌市",
        "513422": "木里藏族自治县",
        "513423": "盐源县",
        "513424": "德昌县",
        "513425": "会理县",
        "513426": "会东县",
        "513427": "宁南县",
        "513428": "普格县",
        "513429": "布拖县",
        "513430": "金阳县",
        "513431": "昭觉县",
        "513432": "喜德县",
        "513433": "冕宁县",
        "513434": "越西县",
        "513435": "甘洛县",
        "513436": "美姑县",
        "513437": "雷波县",
        "513438": "其它区",
        "520000": "贵州省",
        "520100": "贵阳市",
        "520102": "南明区",
        "520103": "云岩区",
        "520111": "花溪区",
        "520112": "乌当区",
        "520113": "白云区",
        "520121": "开阳县",
        "520122": "息烽县",
        "520123": "修文县",
        "520151": "观山湖区",
        "520181": "清镇市",
        "520182": "其它区",
        "520200": "六盘水市",
        "520201": "钟山区",
        "520203": "六枝特区",
        "520221": "水城县",
        "520222": "盘县",
        "520223": "其它区",
        "520300": "遵义市",
        "520302": "红花岗区",
        "520303": "汇川区",
        "520321": "遵义县",
        "520322": "桐梓县",
        "520323": "绥阳县",
        "520324": "正安县",
        "520325": "道真仡佬族苗族自治县",
        "520326": "务川仡佬族苗族自治县",
        "520327": "凤冈县",
        "520328": "湄潭县",
        "520329": "余庆县",
        "520330": "习水县",
        "520381": "赤水市",
        "520382": "仁怀市",
        "520383": "其它区",
        "520400": "安顺市",
        "520402": "西秀区",
        "520421": "平坝县",
        "520422": "普定县",
        "520423": "镇宁布依族苗族自治县",
        "520424": "关岭布依族苗族自治县",
        "520425": "紫云苗族布依族自治县",
        "520426": "其它区",
        "522200": "铜仁市",
        "522201": "碧江区",
        "522222": "江口县",
        "522223": "玉屏侗族自治县",
        "522224": "石阡县",
        "522225": "思南县",
        "522226": "印江土家族苗族自治县",
        "522227": "德江县",
        "522228": "沿河土家族自治县",
        "522229": "松桃苗族自治县",
        "522230": "万山区",
        "522231": "其它区",
        "522300": "黔西南布依族苗族自治州",
        "522301": "兴义市",
        "522322": "兴仁县",
        "522323": "普安县",
        "522324": "晴隆县",
        "522325": "贞丰县",
        "522326": "望谟县",
        "522327": "册亨县",
        "522328": "安龙县",
        "522329": "其它区",
        "522400": "毕节市",
        "522401": "七星关区",
        "522422": "大方县",
        "522423": "黔西县",
        "522424": "金沙县",
        "522425": "织金县",
        "522426": "纳雍县",
        "522427": "威宁彝族回族苗族自治县",
        "522428": "赫章县",
        "522429": "其它区",
        "522600": "黔东南苗族侗族自治州",
        "522601": "凯里市",
        "522622": "黄平县",
        "522623": "施秉县",
        "522624": "三穗县",
        "522625": "镇远县",
        "522626": "岑巩县",
        "522627": "天柱县",
        "522628": "锦屏县",
        "522629": "剑河县",
        "522630": "台江县",
        "522631": "黎平县",
        "522632": "榕江县",
        "522633": "从江县",
        "522634": "雷山县",
        "522635": "麻江县",
        "522636": "丹寨县",
        "522637": "其它区",
        "522700": "黔南布依族苗族自治州",
        "522701": "都匀市",
        "522702": "福泉市",
        "522722": "荔波县",
        "522723": "贵定县",
        "522725": "瓮安县",
        "522726": "独山县",
        "522727": "平塘县",
        "522728": "罗甸县",
        "522729": "长顺县",
        "522730": "龙里县",
        "522731": "惠水县",
        "522732": "三都水族自治县",
        "522733": "其它区",
        "530000": "云南省",
        "530100": "昆明市",
        "530102": "五华区",
        "530103": "盘龙区",
        "530111": "官渡区",
        "530112": "西山区",
        "530113": "东川区",
        "530121": "呈贡区",
        "530122": "晋宁县",
        "530124": "富民县",
        "530125": "宜良县",
        "530126": "石林彝族自治县",
        "530127": "嵩明县",
        "530128": "禄劝彝族苗族自治县",
        "530129": "寻甸回族彝族自治县",
        "530181": "安宁市",
        "530182": "其它区",
        "530300": "曲靖市",
        "530302": "麒麟区",
        "530321": "马龙县",
        "530322": "陆良县",
        "530323": "师宗县",
        "530324": "罗平县",
        "530325": "富源县",
        "530326": "会泽县",
        "530328": "沾益县",
        "530381": "宣威市",
        "530382": "其它区",
        "530400": "玉溪市",
        "530402": "红塔区",
        "530421": "江川县",
        "530422": "澄江县",
        "530423": "通海县",
        "530424": "华宁县",
        "530425": "易门县",
        "530426": "峨山彝族自治县",
        "530427": "新平彝族傣族自治县",
        "530428": "元江哈尼族彝族傣族自治县",
        "530429": "其它区",
        "530500": "保山市",
        "530502": "隆阳区",
        "530521": "施甸县",
        "530522": "腾冲县",
        "530523": "龙陵县",
        "530524": "昌宁县",
        "530525": "其它区",
        "530600": "昭通市",
        "530602": "昭阳区",
        "530621": "鲁甸县",
        "530622": "巧家县",
        "530623": "盐津县",
        "530624": "大关县",
        "530625": "永善县",
        "530626": "绥江县",
        "530627": "镇雄县",
        "530628": "彝良县",
        "530629": "威信县",
        "530630": "水富县",
        "530631": "其它区",
        "530700": "丽江市",
        "530702": "古城区",
        "530721": "玉龙纳西族自治县",
        "530722": "永胜县",
        "530723": "华坪县",
        "530724": "宁蒗彝族自治县",
        "530725": "其它区",
        "530800": "普洱市",
        "530802": "思茅区",
        "530821": "宁洱哈尼族彝族自治县",
        "530822": "墨江哈尼族自治县",
        "530823": "景东彝族自治县",
        "530824": "景谷傣族彝族自治县",
        "530825": "镇沅彝族哈尼族拉祜族自治县",
        "530826": "江城哈尼族彝族自治县",
        "530827": "孟连傣族拉祜族佤族自治县",
        "530828": "澜沧拉祜族自治县",
        "530829": "西盟佤族自治县",
        "530830": "其它区",
        "530900": "临沧市",
        "530902": "临翔区",
        "530921": "凤庆县",
        "530922": "云县",
        "530923": "永德县",
        "530924": "镇康县",
        "530925": "双江拉祜族佤族布朗族傣族自治县",
        "530926": "耿马傣族佤族自治县",
        "530927": "沧源佤族自治县",
        "530928": "其它区",
        "532300": "楚雄彝族自治州",
        "532301": "楚雄市",
        "532322": "双柏县",
        "532323": "牟定县",
        "532324": "南华县",
        "532325": "姚安县",
        "532326": "大姚县",
        "532327": "永仁县",
        "532328": "元谋县",
        "532329": "武定县",
        "532331": "禄丰县",
        "532332": "其它区",
        "532500": "红河哈尼族彝族自治州",
        "532501": "个旧市",
        "532502": "开远市",
        "532522": "蒙自市",
        "532523": "屏边苗族自治县",
        "532524": "建水县",
        "532525": "石屏县",
        "532526": "弥勒市",
        "532527": "泸西县",
        "532528": "元阳县",
        "532529": "红河县",
        "532530": "金平苗族瑶族傣族自治县",
        "532531": "绿春县",
        "532532": "河口瑶族自治县",
        "532533": "其它区",
        "532600": "文山壮族苗族自治州",
        "532621": "文山市",
        "532622": "砚山县",
        "532623": "西畴县",
        "532624": "麻栗坡县",
        "532625": "马关县",
        "532626": "丘北县",
        "532627": "广南县",
        "532628": "富宁县",
        "532629": "其它区",
        "532800": "西双版纳傣族自治州",
        "532801": "景洪市",
        "532822": "勐海县",
        "532823": "勐腊县",
        "532824": "其它区",
        "532900": "大理白族自治州",
        "532901": "大理市",
        "532922": "漾濞彝族自治县",
        "532923": "祥云县",
        "532924": "宾川县",
        "532925": "弥渡县",
        "532926": "南涧彝族自治县",
        "532927": "巍山彝族回族自治县",
        "532928": "永平县",
        "532929": "云龙县",
        "532930": "洱源县",
        "532931": "剑川县",
        "532932": "鹤庆县",
        "532933": "其它区",
        "533100": "德宏傣族景颇族自治州",
        "533102": "瑞丽市",
        "533103": "芒市",
        "533122": "梁河县",
        "533123": "盈江县",
        "533124": "陇川县",
        "533125": "其它区",
        "533300": "怒江傈僳族自治州",
        "533321": "泸水县",
        "533323": "福贡县",
        "533324": "贡山独龙族怒族自治县",
        "533325": "兰坪白族普米族自治县",
        "533326": "其它区",
        "533400": "迪庆藏族自治州",
        "533421": "香格里拉县",
        "533422": "德钦县",
        "533423": "维西傈僳族自治县",
        "533424": "其它区",
        "540000": "西藏自治区",
        "540100": "拉萨市",
        "540102": "城关区",
        "540121": "林周县",
        "540122": "当雄县",
        "540123": "尼木县",
        "540124": "曲水县",
        "540125": "堆龙德庆县",
        "540126": "达孜县",
        "540127": "墨竹工卡县",
        "540128": "其它区",
        "542100": "昌都地区",
        "542121": "昌都县",
        "542122": "江达县",
        "542123": "贡觉县",
        "542124": "类乌齐县",
        "542125": "丁青县",
        "542126": "察雅县",
        "542127": "八宿县",
        "542128": "左贡县",
        "542129": "芒康县",
        "542132": "洛隆县",
        "542133": "边坝县",
        "542134": "其它区",
        "542200": "山南地区",
        "542221": "乃东县",
        "542222": "扎囊县",
        "542223": "贡嘎县",
        "542224": "桑日县",
        "542225": "琼结县",
        "542226": "曲松县",
        "542227": "措美县",
        "542228": "洛扎县",
        "542229": "加查县",
        "542231": "隆子县",
        "542232": "错那县",
        "542233": "浪卡子县",
        "542234": "其它区",
        "542300": "日喀则地区",
        "542301": "日喀则市",
        "542322": "南木林县",
        "542323": "江孜县",
        "542324": "定日县",
        "542325": "萨迦县",
        "542326": "拉孜县",
        "542327": "昂仁县",
        "542328": "谢通门县",
        "542329": "白朗县",
        "542330": "仁布县",
        "542331": "康马县",
        "542332": "定结县",
        "542333": "仲巴县",
        "542334": "亚东县",
        "542335": "吉隆县",
        "542336": "聂拉木县",
        "542337": "萨嘎县",
        "542338": "岗巴县",
        "542339": "其它区",
        "542400": "那曲地区",
        "542421": "那曲县",
        "542422": "嘉黎县",
        "542423": "比如县",
        "542424": "聂荣县",
        "542425": "安多县",
        "542426": "申扎县",
        "542427": "索县",
        "542428": "班戈县",
        "542429": "巴青县",
        "542430": "尼玛县",
        "542431": "其它区",
        "542432": "双湖县",
        "542500": "阿里地区",
        "542521": "普兰县",
        "542522": "札达县",
        "542523": "噶尔县",
        "542524": "日土县",
        "542525": "革吉县",
        "542526": "改则县",
        "542527": "措勤县",
        "542528": "其它区",
        "542600": "林芝地区",
        "542621": "林芝县",
        "542622": "工布江达县",
        "542623": "米林县",
        "542624": "墨脱县",
        "542625": "波密县",
        "542626": "察隅县",
        "542627": "朗县",
        "542628": "其它区",
        "610000": "陕西省",
        "610100": "西安市",
        "610102": "新城区",
        "610103": "碑林区",
        "610104": "莲湖区",
        "610111": "灞桥区",
        "610112": "未央区",
        "610113": "雁塔区",
        "610114": "阎良区",
        "610115": "临潼区",
        "610116": "长安区",
        "610122": "蓝田县",
        "610124": "周至县",
        "610125": "户县",
        "610126": "高陵县",
        "610127": "其它区",
        "610200": "铜川市",
        "610202": "王益区",
        "610203": "印台区",
        "610204": "耀州区",
        "610222": "宜君县",
        "610223": "其它区",
        "610300": "宝鸡市",
        "610302": "渭滨区",
        "610303": "金台区",
        "610304": "陈仓区",
        "610322": "凤翔县",
        "610323": "岐山县",
        "610324": "扶风县",
        "610326": "眉县",
        "610327": "陇县",
        "610328": "千阳县",
        "610329": "麟游县",
        "610330": "凤县",
        "610331": "太白县",
        "610332": "其它区",
        "610400": "咸阳市",
        "610402": "秦都区",
        "610403": "杨陵区",
        "610404": "渭城区",
        "610422": "三原县",
        "610423": "泾阳县",
        "610424": "乾县",
        "610425": "礼泉县",
        "610426": "永寿县",
        "610427": "彬县",
        "610428": "长武县",
        "610429": "旬邑县",
        "610430": "淳化县",
        "610431": "武功县",
        "610481": "兴平市",
        "610482": "其它区",
        "610500": "渭南市",
        "610502": "临渭区",
        "610521": "华县",
        "610522": "潼关县",
        "610523": "大荔县",
        "610524": "合阳县",
        "610525": "澄城县",
        "610526": "蒲城县",
        "610527": "白水县",
        "610528": "富平县",
        "610581": "韩城市",
        "610582": "华阴市",
        "610583": "其它区",
        "610600": "延安市",
        "610602": "宝塔区",
        "610621": "延长县",
        "610622": "延川县",
        "610623": "子长县",
        "610624": "安塞县",
        "610625": "志丹县",
        "610626": "吴起县",
        "610627": "甘泉县",
        "610628": "富县",
        "610629": "洛川县",
        "610630": "宜川县",
        "610631": "黄龙县",
        "610632": "黄陵县",
        "610633": "其它区",
        "610700": "汉中市",
        "610702": "汉台区",
        "610721": "南郑县",
        "610722": "城固县",
        "610723": "洋县",
        "610724": "西乡县",
        "610725": "勉县",
        "610726": "宁强县",
        "610727": "略阳县",
        "610728": "镇巴县",
        "610729": "留坝县",
        "610730": "佛坪县",
        "610731": "其它区",
        "610800": "榆林市",
        "610802": "榆阳区",
        "610821": "神木县",
        "610822": "府谷县",
        "610823": "横山县",
        "610824": "靖边县",
        "610825": "定边县",
        "610826": "绥德县",
        "610827": "米脂县",
        "610828": "佳县",
        "610829": "吴堡县",
        "610830": "清涧县",
        "610831": "子洲县",
        "610832": "其它区",
        "610900": "安康市",
        "610902": "汉滨区",
        "610921": "汉阴县",
        "610922": "石泉县",
        "610923": "宁陕县",
        "610924": "紫阳县",
        "610925": "岚皋县",
        "610926": "平利县",
        "610927": "镇坪县",
        "610928": "旬阳县",
        "610929": "白河县",
        "610930": "其它区",
        "611000": "商洛市",
        "611002": "商州区",
        "611021": "洛南县",
        "611022": "丹凤县",
        "611023": "商南县",
        "611024": "山阳县",
        "611025": "镇安县",
        "611026": "柞水县",
        "611027": "其它区",
        "620000": "甘肃省",
        "620100": "兰州市",
        "620102": "城关区",
        "620103": "七里河区",
        "620104": "西固区",
        "620105": "安宁区",
        "620111": "红古区",
        "620121": "永登县",
        "620122": "皋兰县",
        "620123": "榆中县",
        "620124": "其它区",
        "620200": "嘉峪关市",
        "620300": "金昌市",
        "620302": "金川区",
        "620321": "永昌县",
        "620322": "其它区",
        "620400": "白银市",
        "620402": "白银区",
        "620403": "平川区",
        "620421": "靖远县",
        "620422": "会宁县",
        "620423": "景泰县",
        "620424": "其它区",
        "620500": "天水市",
        "620502": "秦州区",
        "620503": "麦积区",
        "620521": "清水县",
        "620522": "秦安县",
        "620523": "甘谷县",
        "620524": "武山县",
        "620525": "张家川回族自治县",
        "620526": "其它区",
        "620600": "武威市",
        "620602": "凉州区",
        "620621": "民勤县",
        "620622": "古浪县",
        "620623": "天祝藏族自治县",
        "620624": "其它区",
        "620700": "张掖市",
        "620702": "甘州区",
        "620721": "肃南裕固族自治县",
        "620722": "民乐县",
        "620723": "临泽县",
        "620724": "高台县",
        "620725": "山丹县",
        "620726": "其它区",
        "620800": "平凉市",
        "620802": "崆峒区",
        "620821": "泾川县",
        "620822": "灵台县",
        "620823": "崇信县",
        "620824": "华亭县",
        "620825": "庄浪县",
        "620826": "静宁县",
        "620827": "其它区",
        "620900": "酒泉市",
        "620902": "肃州区",
        "620921": "金塔县",
        "620922": "瓜州县",
        "620923": "肃北蒙古族自治县",
        "620924": "阿克塞哈萨克族自治县",
        "620981": "玉门市",
        "620982": "敦煌市",
        "620983": "其它区",
        "621000": "庆阳市",
        "621002": "西峰区",
        "621021": "庆城县",
        "621022": "环县",
        "621023": "华池县",
        "621024": "合水县",
        "621025": "正宁县",
        "621026": "宁县",
        "621027": "镇原县",
        "621028": "其它区",
        "621100": "定西市",
        "621102": "安定区",
        "621121": "通渭县",
        "621122": "陇西县",
        "621123": "渭源县",
        "621124": "临洮县",
        "621125": "漳县",
        "621126": "岷县",
        "621127": "其它区",
        "621200": "陇南市",
        "621202": "武都区",
        "621221": "成县",
        "621222": "文县",
        "621223": "宕昌县",
        "621224": "康县",
        "621225": "西和县",
        "621226": "礼县",
        "621227": "徽县",
        "621228": "两当县",
        "621229": "其它区",
        "622900": "临夏回族自治州",
        "622901": "临夏市",
        "622921": "临夏县",
        "622922": "康乐县",
        "622923": "永靖县",
        "622924": "广河县",
        "622925": "和政县",
        "622926": "东乡族自治县",
        "622927": "积石山保安族东乡族撒拉族自治县",
        "622928": "其它区",
        "623000": "甘南藏族自治州",
        "623001": "合作市",
        "623021": "临潭县",
        "623022": "卓尼县",
        "623023": "舟曲县",
        "623024": "迭部县",
        "623025": "玛曲县",
        "623026": "碌曲县",
        "623027": "夏河县",
        "623028": "其它区",
        "630000": "青海省",
        "630100": "西宁市",
        "630102": "城东区",
        "630103": "城中区",
        "630104": "城西区",
        "630105": "城北区",
        "630121": "大通回族土族自治县",
        "630122": "湟中县",
        "630123": "湟源县",
        "630124": "其它区",
        "632100": "海东市",
        "632121": "平安县",
        "632122": "民和回族土族自治县",
        "632123": "乐都区",
        "632126": "互助土族自治县",
        "632127": "化隆回族自治县",
        "632128": "循化撒拉族自治县",
        "632129": "其它区",
        "632200": "海北藏族自治州",
        "632221": "门源回族自治县",
        "632222": "祁连县",
        "632223": "海晏县",
        "632224": "刚察县",
        "632225": "其它区",
        "632300": "黄南藏族自治州",
        "632321": "同仁县",
        "632322": "尖扎县",
        "632323": "泽库县",
        "632324": "河南蒙古族自治县",
        "632325": "其它区",
        "632500": "海南藏族自治州",
        "632521": "共和县",
        "632522": "同德县",
        "632523": "贵德县",
        "632524": "兴海县",
        "632525": "贵南县",
        "632526": "其它区",
        "632600": "果洛藏族自治州",
        "632621": "玛沁县",
        "632622": "班玛县",
        "632623": "甘德县",
        "632624": "达日县",
        "632625": "久治县",
        "632626": "玛多县",
        "632627": "其它区",
        "632700": "玉树藏族自治州",
        "632721": "玉树市",
        "632722": "杂多县",
        "632723": "称多县",
        "632724": "治多县",
        "632725": "囊谦县",
        "632726": "曲麻莱县",
        "632727": "其它区",
        "632800": "海西蒙古族藏族自治州",
        "632801": "格尔木市",
        "632802": "德令哈市",
        "632821": "乌兰县",
        "632822": "都兰县",
        "632823": "天峻县",
        "632824": "其它区",
        "640000": "宁夏回族自治区",
        "640100": "银川市",
        "640104": "兴庆区",
        "640105": "西夏区",
        "640106": "金凤区",
        "640121": "永宁县",
        "640122": "贺兰县",
        "640181": "灵武市",
        "640182": "其它区",
        "640200": "石嘴山市",
        "640202": "大武口区",
        "640205": "惠农区",
        "640221": "平罗县",
        "640222": "其它区",
        "640300": "吴忠市",
        "640302": "利通区",
        "640303": "红寺堡区",
        "640323": "盐池县",
        "640324": "同心县",
        "640381": "青铜峡市",
        "640382": "其它区",
        "640400": "固原市",
        "640402": "原州区",
        "640422": "西吉县",
        "640423": "隆德县",
        "640424": "泾源县",
        "640425": "彭阳县",
        "640426": "其它区",
        "640500": "中卫市",
        "640502": "沙坡头区",
        "640521": "中宁县",
        "640522": "海原县",
        "640523": "其它区",
        "650000": "新疆维吾尔自治区",
        "650100": "乌鲁木齐市",
        "650102": "天山区",
        "650103": "沙依巴克区",
        "650104": "新市区",
        "650105": "水磨沟区",
        "650106": "头屯河区",
        "650107": "达坂城区",
        "650109": "米东区",
        "650121": "乌鲁木齐县",
        "650122": "其它区",
        "650200": "克拉玛依市",
        "650202": "独山子区",
        "650203": "克拉玛依区",
        "650204": "白碱滩区",
        "650205": "乌尔禾区",
        "650206": "其它区",
        "652100": "吐鲁番地区",
        "652101": "吐鲁番市",
        "652122": "鄯善县",
        "652123": "托克逊县",
        "652124": "其它区",
        "652200": "哈密地区",
        "652201": "哈密市",
        "652222": "巴里坤哈萨克自治县",
        "652223": "伊吾县",
        "652224": "其它区",
        "652300": "昌吉回族自治州",
        "652301": "昌吉市",
        "652302": "阜康市",
        "652323": "呼图壁县",
        "652324": "玛纳斯县",
        "652325": "奇台县",
        "652327": "吉木萨尔县",
        "652328": "木垒哈萨克自治县",
        "652329": "其它区",
        "652700": "博尔塔拉蒙古自治州",
        "652701": "博乐市",
        "652702": "阿拉山口市",
        "652722": "精河县",
        "652723": "温泉县",
        "652724": "其它区",
        "652800": "巴音郭楞蒙古自治州",
        "652801": "库尔勒市",
        "652822": "轮台县",
        "652823": "尉犁县",
        "652824": "若羌县",
        "652825": "且末县",
        "652826": "焉耆回族自治县",
        "652827": "和静县",
        "652828": "和硕县",
        "652829": "博湖县",
        "652830": "其它区",
        "652900": "阿克苏地区",
        "652901": "阿克苏市",
        "652922": "温宿县",
        "652923": "库车县",
        "652924": "沙雅县",
        "652925": "新和县",
        "652926": "拜城县",
        "652927": "乌什县",
        "652928": "阿瓦提县",
        "652929": "柯坪县",
        "652930": "其它区",
        "653000": "克孜勒苏柯尔克孜自治州",
        "653001": "阿图什市",
        "653022": "阿克陶县",
        "653023": "阿合奇县",
        "653024": "乌恰县",
        "653025": "其它区",
        "653100": "喀什地区",
        "653101": "喀什市",
        "653121": "疏附县",
        "653122": "疏勒县",
        "653123": "英吉沙县",
        "653124": "泽普县",
        "653125": "莎车县",
        "653126": "叶城县",
        "653127": "麦盖提县",
        "653128": "岳普湖县",
        "653129": "伽师县",
        "653130": "巴楚县",
        "653131": "塔什库尔干塔吉克自治县",
        "653132": "其它区",
        "653200": "和田地区",
        "653201": "和田市",
        "653221": "和田县",
        "653222": "墨玉县",
        "653223": "皮山县",
        "653224": "洛浦县",
        "653225": "策勒县",
        "653226": "于田县",
        "653227": "民丰县",
        "653228": "其它区",
        "654000": "伊犁哈萨克自治州",
        "654002": "伊宁市",
        "654003": "奎屯市",
        "654021": "伊宁县",
        "654022": "察布查尔锡伯自治县",
        "654023": "霍城县",
        "654024": "巩留县",
        "654025": "新源县",
        "654026": "昭苏县",
        "654027": "特克斯县",
        "654028": "尼勒克县",
        "654029": "其它区",
        "654200": "塔城地区",
        "654201": "塔城市",
        "654202": "乌苏市",
        "654221": "额敏县",
        "654223": "沙湾县",
        "654224": "托里县",
        "654225": "裕民县",
        "654226": "和布克赛尔蒙古自治县",
        "654227": "其它区",
        "654300": "阿勒泰地区",
        "654301": "阿勒泰市",
        "654321": "布尔津县",
        "654322": "富蕴县",
        "654323": "福海县",
        "654324": "哈巴河县",
        "654325": "青河县",
        "654326": "吉木乃县",
        "654327": "其它区",
        "659001": "石河子市",
        "659002": "阿拉尔市",
        "659003": "图木舒克市",
        "659004": "五家渠市",
        "710000": "台湾",
        "710100": "台北市",
        "710101": "中正区",
        "710102": "大同区",
        "710103": "中山区",
        "710104": "松山区",
        "710105": "大安区",
        "710106": "万华区",
        "710107": "信义区",
        "710108": "士林区",
        "710109": "北投区",
        "710110": "内湖区",
        "710111": "南港区",
        "710112": "文山区",
        "710113": "其它区",
        "710200": "高雄市",
        "710201": "新兴区",
        "710202": "前金区",
        "710203": "芩雅区",
        "710204": "盐埕区",
        "710205": "鼓山区",
        "710206": "旗津区",
        "710207": "前镇区",
        "710208": "三民区",
        "710209": "左营区",
        "710210": "楠梓区",
        "710211": "小港区",
        "710212": "其它区",
        "710241": "苓雅区",
        "710242": "仁武区",
        "710243": "大社区",
        "710244": "冈山区",
        "710245": "路竹区",
        "710246": "阿莲区",
        "710247": "田寮区",
        "710248": "燕巢区",
        "710249": "桥头区",
        "710250": "梓官区",
        "710251": "弥陀区",
        "710252": "永安区",
        "710253": "湖内区",
        "710254": "凤山区",
        "710255": "大寮区",
        "710256": "林园区",
        "710257": "鸟松区",
        "710258": "大树区",
        "710259": "旗山区",
        "710260": "美浓区",
        "710261": "六龟区",
        "710262": "内门区",
        "710263": "杉林区",
        "710264": "甲仙区",
        "710265": "桃源区",
        "710266": "那玛夏区",
        "710267": "茂林区",
        "710268": "茄萣区",
        "710300": "台南市",
        "710301": "中西区",
        "710302": "东区",
        "710303": "南区",
        "710304": "北区",
        "710305": "安平区",
        "710306": "安南区",
        "710307": "其它区",
        "710339": "永康区",
        "710340": "归仁区",
        "710341": "新化区",
        "710342": "左镇区",
        "710343": "玉井区",
        "710344": "楠西区",
        "710345": "南化区",
        "710346": "仁德区",
        "710347": "关庙区",
        "710348": "龙崎区",
        "710349": "官田区",
        "710350": "麻豆区",
        "710351": "佳里区",
        "710352": "西港区",
        "710353": "七股区",
        "710354": "将军区",
        "710355": "学甲区",
        "710356": "北门区",
        "710357": "新营区",
        "710358": "后壁区",
        "710359": "白河区",
        "710360": "东山区",
        "710361": "六甲区",
        "710362": "下营区",
        "710363": "柳营区",
        "710364": "盐水区",
        "710365": "善化区",
        "710366": "大内区",
        "710367": "山上区",
        "710368": "新市区",
        "710369": "安定区",
        "710400": "台中市",
        "710401": "中区",
        "710402": "东区",
        "710403": "南区",
        "710404": "西区",
        "710405": "北区",
        "710406": "北屯区",
        "710407": "西屯区",
        "710408": "南屯区",
        "710409": "其它区",
        "710431": "太平区",
        "710432": "大里区",
        "710433": "雾峰区",
        "710434": "乌日区",
        "710435": "丰原区",
        "710436": "后里区",
        "710437": "石冈区",
        "710438": "东势区",
        "710439": "和平区",
        "710440": "新社区",
        "710441": "潭子区",
        "710442": "大雅区",
        "710443": "神冈区",
        "710444": "大肚区",
        "710445": "沙鹿区",
        "710446": "龙井区",
        "710447": "梧栖区",
        "710448": "清水区",
        "710449": "大甲区",
        "710450": "外埔区",
        "710451": "大安区",
        "710500": "金门县",
        "710507": "金沙镇",
        "710508": "金湖镇",
        "710509": "金宁乡",
        "710510": "金城镇",
        "710511": "烈屿乡",
        "710512": "乌坵乡",
        "710600": "南投县",
        "710614": "南投市",
        "710615": "中寮乡",
        "710616": "草屯镇",
        "710617": "国姓乡",
        "710618": "埔里镇",
        "710619": "仁爱乡",
        "710620": "名间乡",
        "710621": "集集镇",
        "710622": "水里乡",
        "710623": "鱼池乡",
        "710624": "信义乡",
        "710625": "竹山镇",
        "710626": "鹿谷乡",
        "710700": "基隆市",
        "710701": "仁爱区",
        "710702": "信义区",
        "710703": "中正区",
        "710704": "中山区",
        "710705": "安乐区",
        "710706": "暖暖区",
        "710707": "七堵区",
        "710708": "其它区",
        "710800": "新竹市",
        "710801": "东区",
        "710802": "北区",
        "710803": "香山区",
        "710804": "其它区",
        "710900": "嘉义市",
        "710901": "东区",
        "710902": "西区",
        "710903": "其它区",
        "711100": "新北市",
        "711130": "万里区",
        "711131": "金山区",
        "711132": "板桥区",
        "711133": "汐止区",
        "711134": "深坑区",
        "711135": "石碇区",
        "711136": "瑞芳区",
        "711137": "平溪区",
        "711138": "双溪区",
        "711139": "贡寮区",
        "711140": "新店区",
        "711141": "坪林区",
        "711142": "乌来区",
        "711143": "永和区",
        "711144": "中和区",
        "711145": "土城区",
        "711146": "三峡区",
        "711147": "树林区",
        "711148": "莺歌区",
        "711149": "三重区",
        "711150": "新庄区",
        "711151": "泰山区",
        "711152": "林口区",
        "711153": "芦洲区",
        "711154": "五股区",
        "711155": "八里区",
        "711156": "淡水区",
        "711157": "三芝区",
        "711158": "石门区",
        "711200": "宜兰县",
        "711214": "宜兰市",
        "711215": "头城镇",
        "711216": "礁溪乡",
        "711217": "壮围乡",
        "711218": "员山乡",
        "711219": "罗东镇",
        "711220": "三星乡",
        "711221": "大同乡",
        "711222": "五结乡",
        "711223": "冬山乡",
        "711224": "苏澳镇",
        "711225": "南澳乡",
        "711226": "钓鱼台",
        "711300": "新竹县",
        "711314": "竹北市",
        "711315": "湖口乡",
        "711316": "新丰乡",
        "711317": "新埔镇",
        "711318": "关西镇",
        "711319": "芎林乡",
        "711320": "宝山乡",
        "711321": "竹东镇",
        "711322": "五峰乡",
        "711323": "横山乡",
        "711324": "尖石乡",
        "711325": "北埔乡",
        "711326": "峨眉乡",
        "711400": "桃园县",
        "711414": "中坜市",
        "711415": "平镇市",
        "711416": "龙潭乡",
        "711417": "杨梅市",
        "711418": "新屋乡",
        "711419": "观音乡",
        "711420": "桃园市",
        "711421": "龟山乡",
        "711422": "八德市",
        "711423": "大溪镇",
        "711424": "复兴乡",
        "711425": "大园乡",
        "711426": "芦竹乡",
        "711500": "苗栗县",
        "711519": "竹南镇",
        "711520": "头份镇",
        "711521": "三湾乡",
        "711522": "南庄乡",
        "711523": "狮潭乡",
        "711524": "后龙镇",
        "711525": "通霄镇",
        "711526": "苑里镇",
        "711527": "苗栗市",
        "711528": "造桥乡",
        "711529": "头屋乡",
        "711530": "公馆乡",
        "711531": "大湖乡",
        "711532": "泰安乡",
        "711533": "铜锣乡",
        "711534": "三义乡",
        "711535": "西湖乡",
        "711536": "卓兰镇",
        "711700": "彰化县",
        "711727": "彰化市",
        "711728": "芬园乡",
        "711729": "花坛乡",
        "711730": "秀水乡",
        "711731": "鹿港镇",
        "711732": "福兴乡",
        "711733": "线西乡",
        "711734": "和美镇",
        "711735": "伸港乡",
        "711736": "员林镇",
        "711737": "社头乡",
        "711738": "永靖乡",
        "711739": "埔心乡",
        "711740": "溪湖镇",
        "711741": "大村乡",
        "711742": "埔盐乡",
        "711743": "田中镇",
        "711744": "北斗镇",
        "711745": "田尾乡",
        "711746": "埤头乡",
        "711747": "溪州乡",
        "711748": "竹塘乡",
        "711749": "二林镇",
        "711750": "大城乡",
        "711751": "芳苑乡",
        "711752": "二水乡",
        "711900": "嘉义县",
        "711919": "番路乡",
        "711920": "梅山乡",
        "711921": "竹崎乡",
        "711922": "阿里山乡",
        "711923": "中埔乡",
        "711924": "大埔乡",
        "711925": "水上乡",
        "711926": "鹿草乡",
        "711927": "太保市",
        "711928": "朴子市",
        "711929": "东石乡",
        "711930": "六脚乡",
        "711931": "新港乡",
        "711932": "民雄乡",
        "711933": "大林镇",
        "711934": "溪口乡",
        "711935": "义竹乡",
        "711936": "布袋镇",
        "712100": "云林县",
        "712121": "斗南镇",
        "712122": "大埤乡",
        "712123": "虎尾镇",
        "712124": "土库镇",
        "712125": "褒忠乡",
        "712126": "东势乡",
        "712127": "台西乡",
        "712128": "仑背乡",
        "712129": "麦寮乡",
        "712130": "斗六市",
        "712131": "林内乡",
        "712132": "古坑乡",
        "712133": "莿桐乡",
        "712134": "西螺镇",
        "712135": "二仑乡",
        "712136": "北港镇",
        "712137": "水林乡",
        "712138": "口湖乡",
        "712139": "四湖乡",
        "712140": "元长乡",
        "712400": "屏东县",
        "712434": "屏东市",
        "712435": "三地门乡",
        "712436": "雾台乡",
        "712437": "玛家乡",
        "712438": "九如乡",
        "712439": "里港乡",
        "712440": "高树乡",
        "712441": "盐埔乡",
        "712442": "长治乡",
        "712443": "麟洛乡",
        "712444": "竹田乡",
        "712445": "内埔乡",
        "712446": "万丹乡",
        "712447": "潮州镇",
        "712448": "泰武乡",
        "712449": "来义乡",
        "712450": "万峦乡",
        "712451": "崁顶乡",
        "712452": "新埤乡",
        "712453": "南州乡",
        "712454": "林边乡",
        "712455": "东港镇",
        "712456": "琉球乡",
        "712457": "佳冬乡",
        "712458": "新园乡",
        "712459": "枋寮乡",
        "712460": "枋山乡",
        "712461": "春日乡",
        "712462": "狮子乡",
        "712463": "车城乡",
        "712464": "牡丹乡",
        "712465": "恒春镇",
        "712466": "满州乡",
        "712500": "台东县",
        "712517": "台东市",
        "712518": "绿岛乡",
        "712519": "兰屿乡",
        "712520": "延平乡",
        "712521": "卑南乡",
        "712522": "鹿野乡",
        "712523": "关山镇",
        "712524": "海端乡",
        "712525": "池上乡",
        "712526": "东河乡",
        "712527": "成功镇",
        "712528": "长滨乡",
        "712529": "金峰乡",
        "712530": "大武乡",
        "712531": "达仁乡",
        "712532": "太麻里乡",
        "712600": "花莲县",
        "712615": "花莲市",
        "712616": "新城乡",
        "712617": "太鲁阁",
        "712618": "秀林乡",
        "712619": "吉安乡",
        "712620": "寿丰乡",
        "712621": "凤林镇",
        "712622": "光复乡",
        "712623": "丰滨乡",
        "712624": "瑞穗乡",
        "712625": "万荣乡",
        "712626": "玉里镇",
        "712627": "卓溪乡",
        "712628": "富里乡",
        "712700": "澎湖县",
        "712707": "马公市",
        "712708": "西屿乡",
        "712709": "望安乡",
        "712710": "七美乡",
        "712711": "白沙乡",
        "712712": "湖西乡",
        "712800": "连江县",
        "712805": "南竿乡",
        "712806": "北竿乡",
        "712807": "莒光乡",
        "712808": "东引乡",
        "810000": "香港特别行政区",
        "810100": "香港岛",
        "810101": "中西区",
        "810102": "湾仔",
        "810103": "东区",
        "810104": "南区",
        "810200": "九龙",
        "810201": "九龙城区",
        "810202": "油尖旺区",
        "810203": "深水埗区",
        "810204": "黄大仙区",
        "810205": "观塘区",
        "810300": "新界",
        "810301": "北区",
        "810302": "大埔区",
        "810303": "沙田区",
        "810304": "西贡区",
        "810305": "元朗区",
        "810306": "屯门区",
        "810307": "荃湾区",
        "810308": "葵青区",
        "810309": "离岛区",
        "820000": "澳门特别行政区",
        "820100": "澳门半岛",
        "820200": "离岛",
        "990000": "海外",
        "990100": "海外"
      };

      // id pid/parentId name children
      function tree(list) {
        var mapped = {};
        for (var i = 0, item; i < list.length; i++) {
          item = list[i];
          if (!item || !item.id) continue;
          mapped[item.id] = item;
        }
        var result = [];
        for (var ii = 0; ii < list.length; ii++) {
          item = list[ii];
          if (!item) continue;
          /* jshint -W041 */
          if (item.pid == undefined && item.parentId == undefined) {
            result.push(item);
            continue;
          }
          var parent = mapped[item.pid] || mapped[item.parentId];
          if (!parent) continue;
          if (!parent.children) parent.children = [];
          parent.children.push(item);
        }
        return result;
      }
      var DICT_FIXED = function () {
        var fixed = [];
        for (var id in DICT) {
          var pid = id.slice(2, 6) === '0000' ? undefined : id.slice(4, 6) == '00' ? id.slice(0, 2) + '0000' : id.slice(0, 4) + '00';
          fixed.push({
            id: id,
            pid: pid,
            name: DICT[id]
          });
        }
        return tree(fixed);
      }();
      module.exports = DICT_FIXED;

      /***/
    }, /* 19 */
    /***/function (module, exports, __nested_webpack_require_180151__) {
      /*
          ## Miscellaneous
      */
      var DICT = __nested_webpack_require_180151__(18);
      module.exports = {
        // Dice
        d4: function d4() {
          return this.natural(1, 4);
        },
        d6: function d6() {
          return this.natural(1, 6);
        },
        d8: function d8() {
          return this.natural(1, 8);
        },
        d12: function d12() {
          return this.natural(1, 12);
        },
        d20: function d20() {
          return this.natural(1, 20);
        },
        d100: function d100() {
          return this.natural(1, 100);
        },
        /*
            随机生成一个 GUID。
        	    http://www.broofa.com/2008/09/javascript-uuid-function/
            [UUID 规范](http://www.ietf.org/rfc/rfc4122.txt)
                UUIDs (Universally Unique IDentifier)
                GUIDs (Globally Unique IDentifier)
                The formal definition of the UUID string representation is provided by the following ABNF [7]:
                    UUID                   = time-low "-" time-mid "-"
                                           time-high-and-version "-"
                                           clock-seq-and-reserved
                                           clock-seq-low "-" node
                    time-low               = 4hexOctet
                    time-mid               = 2hexOctet
                    time-high-and-version  = 2hexOctet
                    clock-seq-and-reserved = hexOctet
                    clock-seq-low          = hexOctet
                    node                   = 6hexOctet
                    hexOctet               = hexDigit hexDigit
                    hexDigit =
                        "0" / "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" /
                        "a" / "b" / "c" / "d" / "e" / "f" /
                        "A" / "B" / "C" / "D" / "E" / "F"
            
            https://github.com/victorquinn/chancejs/blob/develop/chance.js#L1349
        */
        guid: function guid() {
          var pool = "abcdefABCDEF1234567890",
            guid = this.string(pool, 8) + '-' + this.string(pool, 4) + '-' + this.string(pool, 4) + '-' + this.string(pool, 4) + '-' + this.string(pool, 12);
          return guid;
        },
        uuid: function uuid() {
          return this.guid();
        },
        /*
            随机生成一个 18 位身份证。
        	    [身份证](http://baike.baidu.com/view/1697.htm#4)
                地址码 6 + 出生日期码 8 + 顺序码 3 + 校验码 1
            [《中华人民共和国行政区划代码》国家标准(GB/T2260)](http://zhidao.baidu.com/question/1954561.html)
        */
        id: function id() {
          var id,
            sum = 0,
            rank = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"],
            last = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
          id = this.pick(DICT).id + this.date('yyyyMMdd') + this.string('number', 3);
          for (var i = 0; i < id.length; i++) {
            sum += id[i] * rank[i];
          }
          id += last[sum % 11];
          return id;
        },
        /*
            生成一个全局的自增整数。
            类似自增主键（auto increment primary key）。
        */
        increment: function () {
          var key = 0;
          return function (step) {
            return key += +step || 1; // step?
          };
        }(),

        inc: function inc(step) {
          return this.increment(step);
        }
      };

      /***/
    }, /* 20 */
    /***/function (module, exports, __nested_webpack_require_183657__) {
      var Parser = __nested_webpack_require_183657__(21);
      var Handler = __nested_webpack_require_183657__(22);
      module.exports = {
        Parser: Parser,
        Handler: Handler
      };

      /***/
    }, /* 21 */
    /***/function (module, exports) {
      // https://github.com/nuysoft/regexp
      // forked from https://github.com/ForbesLindesay/regexp

      function parse(n) {
        if ("string" != typeof n) {
          var l = new TypeError("The regexp to parse must be represented as a string.");
          throw l;
        }
        return index = 1, cgs = {}, parser.parse(n);
      }
      function Token(n) {
        this.type = n, this.offset = Token.offset(), this.text = Token.text();
      }
      function Alternate(n, l) {
        Token.call(this, "alternate"), this.left = n, this.right = l;
      }
      function Match(n) {
        Token.call(this, "match"), this.body = n.filter(Boolean);
      }
      function Group(n, l) {
        Token.call(this, n), this.body = l;
      }
      function CaptureGroup(n) {
        Group.call(this, "capture-group"), this.index = cgs[this.offset] || (cgs[this.offset] = index++), this.body = n;
      }
      function Quantified(n, l) {
        Token.call(this, "quantified"), this.body = n, this.quantifier = l;
      }
      function Quantifier(n, l) {
        Token.call(this, "quantifier"), this.min = n, this.max = l, this.greedy = !0;
      }
      function CharSet(n, l) {
        Token.call(this, "charset"), this.invert = n, this.body = l;
      }
      function CharacterRange(n, l) {
        Token.call(this, "range"), this.start = n, this.end = l;
      }
      function Literal(n) {
        Token.call(this, "literal"), this.body = n, this.escaped = this.body != this.text;
      }
      function Unicode(n) {
        Token.call(this, "unicode"), this.code = n.toUpperCase();
      }
      function Hex(n) {
        Token.call(this, "hex"), this.code = n.toUpperCase();
      }
      function Octal(n) {
        Token.call(this, "octal"), this.code = n.toUpperCase();
      }
      function BackReference(n) {
        Token.call(this, "back-reference"), this.code = n.toUpperCase();
      }
      function ControlCharacter(n) {
        Token.call(this, "control-character"), this.code = n.toUpperCase();
      }
      var parser = function () {
          function n(n, l) {
            function u() {
              this.constructor = n;
            }
            u.prototype = l.prototype, n.prototype = new u();
          }
          function l(n, l, u, t, r) {
            function e(n, l) {
              function u(n) {
                function l(n) {
                  return n.charCodeAt(0).toString(16).toUpperCase();
                }
                return n.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (n) {
                  return "\\x0" + l(n);
                }).replace(/[\x10-\x1F\x80-\xFF]/g, function (n) {
                  return "\\x" + l(n);
                }).replace(/[\u0180-\u0FFF]/g, function (n) {
                  return "\\u0" + l(n);
                }).replace(/[\u1080-\uFFFF]/g, function (n) {
                  return "\\u" + l(n);
                });
              }
              var t, r;
              switch (n.length) {
                case 0:
                  t = "end of input";
                  break;
                case 1:
                  t = n[0];
                  break;
                default:
                  t = n.slice(0, -1).join(", ") + " or " + n[n.length - 1];
              }
              return r = l ? '"' + u(l) + '"' : "end of input", "Expected " + t + " but " + r + " found.";
            }
            this.expected = n, this.found = l, this.offset = u, this.line = t, this.column = r, this.name = "SyntaxError", this.message = e(n, l);
          }
          function u(n) {
            function u() {
              return n.substring(Lt, qt);
            }
            function t() {
              return Lt;
            }
            function r(l) {
              function u(l, u, t) {
                var r, e;
                for (r = u; t > r; r++) e = n.charAt(r), "\n" === e ? (l.seenCR || l.line++, l.column = 1, l.seenCR = !1) : "\r" === e || "\u2028" === e || "\u2029" === e ? (l.line++, l.column = 1, l.seenCR = !0) : (l.column++, l.seenCR = !1);
              }
              return Mt !== l && (Mt > l && (Mt = 0, Dt = {
                line: 1,
                column: 1,
                seenCR: !1
              }), u(Dt, Mt, l), Mt = l), Dt;
            }
            function e(n) {
              Ht > qt || (qt > Ht && (Ht = qt, Ot = []), Ot.push(n));
            }
            function o(n) {
              var l = 0;
              for (n.sort(); l < n.length;) n[l - 1] === n[l] ? n.splice(l, 1) : l++;
            }
            function c() {
              var l, u, t, r, o;
              return l = qt, u = i(), null !== u ? (t = qt, 124 === n.charCodeAt(qt) ? (r = fl, qt++) : (r = null, 0 === Wt && e(sl)), null !== r ? (o = c(), null !== o ? (r = [r, o], t = r) : (qt = t, t = il)) : (qt = t, t = il), null === t && (t = al), null !== t ? (Lt = l, u = hl(u, t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function i() {
              var n, l, u, t, r;
              if (n = qt, l = f(), null === l && (l = al), null !== l) {
                if (u = qt, Wt++, t = d(), Wt--, null === t ? u = al : (qt = u, u = il), null !== u) {
                  for (t = [], r = h(), null === r && (r = a()); null !== r;) t.push(r), r = h(), null === r && (r = a());
                  null !== t ? (r = s(), null === r && (r = al), null !== r ? (Lt = n, l = dl(l, t, r), null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il);
                } else qt = n, n = il;
              } else qt = n, n = il;
              return n;
            }
            function a() {
              var n;
              return n = x(), null === n && (n = Q(), null === n && (n = B())), n;
            }
            function f() {
              var l, u;
              return l = qt, 94 === n.charCodeAt(qt) ? (u = pl, qt++) : (u = null, 0 === Wt && e(vl)), null !== u && (Lt = l, u = wl()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function s() {
              var l, u;
              return l = qt, 36 === n.charCodeAt(qt) ? (u = Al, qt++) : (u = null, 0 === Wt && e(Cl)), null !== u && (Lt = l, u = gl()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function h() {
              var n, l, u;
              return n = qt, l = a(), null !== l ? (u = d(), null !== u ? (Lt = n, l = bl(l, u), null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il), n;
            }
            function d() {
              var n, l, u;
              return Wt++, n = qt, l = p(), null !== l ? (u = k(), null === u && (u = al), null !== u ? (Lt = n, l = Tl(l, u), null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il), Wt--, null === n && (l = null, 0 === Wt && e(kl)), n;
            }
            function p() {
              var n;
              return n = v(), null === n && (n = w(), null === n && (n = A(), null === n && (n = C(), null === n && (n = g(), null === n && (n = b()))))), n;
            }
            function v() {
              var l, u, t, r, o, c;
              return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)), null !== u ? (t = T(), null !== t ? (44 === n.charCodeAt(qt) ? (r = ml, qt++) : (r = null, 0 === Wt && e(Rl)), null !== r ? (o = T(), null !== o ? (125 === n.charCodeAt(qt) ? (c = Fl, qt++) : (c = null, 0 === Wt && e(Ql)), null !== c ? (Lt = l, u = Sl(t, o), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function w() {
              var l, u, t, r;
              return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)), null !== u ? (t = T(), null !== t ? (n.substr(qt, 2) === Ul ? (r = Ul, qt += 2) : (r = null, 0 === Wt && e(El)), null !== r ? (Lt = l, u = Gl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function A() {
              var l, u, t, r;
              return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)), null !== u ? (t = T(), null !== t ? (125 === n.charCodeAt(qt) ? (r = Fl, qt++) : (r = null, 0 === Wt && e(Ql)), null !== r ? (Lt = l, u = Bl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function C() {
              var l, u;
              return l = qt, 43 === n.charCodeAt(qt) ? (u = jl, qt++) : (u = null, 0 === Wt && e($l)), null !== u && (Lt = l, u = ql()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function g() {
              var l, u;
              return l = qt, 42 === n.charCodeAt(qt) ? (u = Ll, qt++) : (u = null, 0 === Wt && e(Ml)), null !== u && (Lt = l, u = Dl()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function b() {
              var l, u;
              return l = qt, 63 === n.charCodeAt(qt) ? (u = Hl, qt++) : (u = null, 0 === Wt && e(Ol)), null !== u && (Lt = l, u = Wl()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function k() {
              var l;
              return 63 === n.charCodeAt(qt) ? (l = Hl, qt++) : (l = null, 0 === Wt && e(Ol)), l;
            }
            function T() {
              var l, u, t;
              if (l = qt, u = [], zl.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(Il)), null !== t) for (; null !== t;) u.push(t), zl.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(Il));else u = il;
              return null !== u && (Lt = l, u = Jl(u)), null === u ? (qt = l, l = u) : l = u, l;
            }
            function x() {
              var l, u, t, r;
              return l = qt, 40 === n.charCodeAt(qt) ? (u = Kl, qt++) : (u = null, 0 === Wt && e(Nl)), null !== u ? (t = R(), null === t && (t = F(), null === t && (t = m(), null === t && (t = y()))), null !== t ? (41 === n.charCodeAt(qt) ? (r = Pl, qt++) : (r = null, 0 === Wt && e(Vl)), null !== r ? (Lt = l, u = Xl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function y() {
              var n, l;
              return n = qt, l = c(), null !== l && (Lt = n, l = Yl(l)), null === l ? (qt = n, n = l) : n = l, n;
            }
            function m() {
              var l, u, t;
              return l = qt, n.substr(qt, 2) === Zl ? (u = Zl, qt += 2) : (u = null, 0 === Wt && e(_l)), null !== u ? (t = c(), null !== t ? (Lt = l, u = nu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function R() {
              var l, u, t;
              return l = qt, n.substr(qt, 2) === lu ? (u = lu, qt += 2) : (u = null, 0 === Wt && e(uu)), null !== u ? (t = c(), null !== t ? (Lt = l, u = tu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function F() {
              var l, u, t;
              return l = qt, n.substr(qt, 2) === ru ? (u = ru, qt += 2) : (u = null, 0 === Wt && e(eu)), null !== u ? (t = c(), null !== t ? (Lt = l, u = ou(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function Q() {
              var l, u, t, r, o;
              if (Wt++, l = qt, 91 === n.charCodeAt(qt) ? (u = iu, qt++) : (u = null, 0 === Wt && e(au)), null !== u) {
                if (94 === n.charCodeAt(qt) ? (t = pl, qt++) : (t = null, 0 === Wt && e(vl)), null === t && (t = al), null !== t) {
                  for (r = [], o = S(), null === o && (o = U()); null !== o;) r.push(o), o = S(), null === o && (o = U());
                  null !== r ? (93 === n.charCodeAt(qt) ? (o = fu, qt++) : (o = null, 0 === Wt && e(su)), null !== o ? (Lt = l, u = hu(t, r), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il);
                } else qt = l, l = il;
              } else qt = l, l = il;
              return Wt--, null === l && (u = null, 0 === Wt && e(cu)), l;
            }
            function S() {
              var l, u, t, r;
              return Wt++, l = qt, u = U(), null !== u ? (45 === n.charCodeAt(qt) ? (t = pu, qt++) : (t = null, 0 === Wt && e(vu)), null !== t ? (r = U(), null !== r ? (Lt = l, u = wu(u, r), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), Wt--, null === l && (u = null, 0 === Wt && e(du)), l;
            }
            function U() {
              var n, l;
              return Wt++, n = G(), null === n && (n = E()), Wt--, null === n && (l = null, 0 === Wt && e(Au)), n;
            }
            function E() {
              var l, u;
              return l = qt, Cu.test(n.charAt(qt)) ? (u = n.charAt(qt), qt++) : (u = null, 0 === Wt && e(gu)), null !== u && (Lt = l, u = bu(u)), null === u ? (qt = l, l = u) : l = u, l;
            }
            function G() {
              var n;
              return n = L(), null === n && (n = Y(), null === n && (n = H(), null === n && (n = O(), null === n && (n = W(), null === n && (n = z(), null === n && (n = I(), null === n && (n = J(), null === n && (n = K(), null === n && (n = N(), null === n && (n = P(), null === n && (n = V(), null === n && (n = X(), null === n && (n = _(), null === n && (n = nl(), null === n && (n = ll(), null === n && (n = ul(), null === n && (n = tl()))))))))))))))))), n;
            }
            function B() {
              var n;
              return n = j(), null === n && (n = q(), null === n && (n = $())), n;
            }
            function j() {
              var l, u;
              return l = qt, 46 === n.charCodeAt(qt) ? (u = ku, qt++) : (u = null, 0 === Wt && e(Tu)), null !== u && (Lt = l, u = xu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function $() {
              var l, u;
              return Wt++, l = qt, mu.test(n.charAt(qt)) ? (u = n.charAt(qt), qt++) : (u = null, 0 === Wt && e(Ru)), null !== u && (Lt = l, u = bu(u)), null === u ? (qt = l, l = u) : l = u, Wt--, null === l && (u = null, 0 === Wt && e(yu)), l;
            }
            function q() {
              var n;
              return n = M(), null === n && (n = D(), null === n && (n = Y(), null === n && (n = H(), null === n && (n = O(), null === n && (n = W(), null === n && (n = z(), null === n && (n = I(), null === n && (n = J(), null === n && (n = K(), null === n && (n = N(), null === n && (n = P(), null === n && (n = V(), null === n && (n = X(), null === n && (n = Z(), null === n && (n = _(), null === n && (n = nl(), null === n && (n = ll(), null === n && (n = ul(), null === n && (n = tl()))))))))))))))))))), n;
            }
            function L() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Fu ? (u = Fu, qt += 2) : (u = null, 0 === Wt && e(Qu)), null !== u && (Lt = l, u = Su()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function M() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Fu ? (u = Fu, qt += 2) : (u = null, 0 === Wt && e(Qu)), null !== u && (Lt = l, u = Uu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function D() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Eu ? (u = Eu, qt += 2) : (u = null, 0 === Wt && e(Gu)), null !== u && (Lt = l, u = Bu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function H() {
              var l, u;
              return l = qt, n.substr(qt, 2) === ju ? (u = ju, qt += 2) : (u = null, 0 === Wt && e($u)), null !== u && (Lt = l, u = qu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function O() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Lu ? (u = Lu, qt += 2) : (u = null, 0 === Wt && e(Mu)), null !== u && (Lt = l, u = Du()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function W() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Hu ? (u = Hu, qt += 2) : (u = null, 0 === Wt && e(Ou)), null !== u && (Lt = l, u = Wu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function z() {
              var l, u;
              return l = qt, n.substr(qt, 2) === zu ? (u = zu, qt += 2) : (u = null, 0 === Wt && e(Iu)), null !== u && (Lt = l, u = Ju()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function I() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Ku ? (u = Ku, qt += 2) : (u = null, 0 === Wt && e(Nu)), null !== u && (Lt = l, u = Pu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function J() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Vu ? (u = Vu, qt += 2) : (u = null, 0 === Wt && e(Xu)), null !== u && (Lt = l, u = Yu()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function K() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Zu ? (u = Zu, qt += 2) : (u = null, 0 === Wt && e(_u)), null !== u && (Lt = l, u = nt()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function N() {
              var l, u;
              return l = qt, n.substr(qt, 2) === lt ? (u = lt, qt += 2) : (u = null, 0 === Wt && e(ut)), null !== u && (Lt = l, u = tt()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function P() {
              var l, u;
              return l = qt, n.substr(qt, 2) === rt ? (u = rt, qt += 2) : (u = null, 0 === Wt && e(et)), null !== u && (Lt = l, u = ot()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function V() {
              var l, u;
              return l = qt, n.substr(qt, 2) === ct ? (u = ct, qt += 2) : (u = null, 0 === Wt && e(it)), null !== u && (Lt = l, u = at()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function X() {
              var l, u;
              return l = qt, n.substr(qt, 2) === ft ? (u = ft, qt += 2) : (u = null, 0 === Wt && e(st)), null !== u && (Lt = l, u = ht()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function Y() {
              var l, u, t;
              return l = qt, n.substr(qt, 2) === dt ? (u = dt, qt += 2) : (u = null, 0 === Wt && e(pt)), null !== u ? (n.length > qt ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(vt)), null !== t ? (Lt = l, u = wt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function Z() {
              var l, u, t;
              return l = qt, 92 === n.charCodeAt(qt) ? (u = At, qt++) : (u = null, 0 === Wt && e(Ct)), null !== u ? (gt.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(bt)), null !== t ? (Lt = l, u = kt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            function _() {
              var l, u, t, r;
              if (l = qt, n.substr(qt, 2) === Tt ? (u = Tt, qt += 2) : (u = null, 0 === Wt && e(xt)), null !== u) {
                if (t = [], yt.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(mt)), null !== r) for (; null !== r;) t.push(r), yt.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(mt));else t = il;
                null !== t ? (Lt = l, u = Rt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il);
              } else qt = l, l = il;
              return l;
            }
            function nl() {
              var l, u, t, r;
              if (l = qt, n.substr(qt, 2) === Ft ? (u = Ft, qt += 2) : (u = null, 0 === Wt && e(Qt)), null !== u) {
                if (t = [], St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut)), null !== r) for (; null !== r;) t.push(r), St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut));else t = il;
                null !== t ? (Lt = l, u = Et(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il);
              } else qt = l, l = il;
              return l;
            }
            function ll() {
              var l, u, t, r;
              if (l = qt, n.substr(qt, 2) === Gt ? (u = Gt, qt += 2) : (u = null, 0 === Wt && e(Bt)), null !== u) {
                if (t = [], St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut)), null !== r) for (; null !== r;) t.push(r), St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut));else t = il;
                null !== t ? (Lt = l, u = jt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il);
              } else qt = l, l = il;
              return l;
            }
            function ul() {
              var l, u;
              return l = qt, n.substr(qt, 2) === Tt ? (u = Tt, qt += 2) : (u = null, 0 === Wt && e(xt)), null !== u && (Lt = l, u = $t()), null === u ? (qt = l, l = u) : l = u, l;
            }
            function tl() {
              var l, u, t;
              return l = qt, 92 === n.charCodeAt(qt) ? (u = At, qt++) : (u = null, 0 === Wt && e(Ct)), null !== u ? (n.length > qt ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(vt)), null !== t ? (Lt = l, u = bu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il), l;
            }
            var rl,
              el = arguments.length > 1 ? arguments[1] : {},
              ol = {
                regexp: c
              },
              cl = c,
              il = null,
              al = "",
              fl = "|",
              sl = '"|"',
              hl = function hl(n, l) {
                return l ? new Alternate(n, l[1]) : n;
              },
              dl = function dl(n, l, u) {
                return new Match([n].concat(l).concat([u]));
              },
              pl = "^",
              vl = '"^"',
              wl = function wl() {
                return new Token("start");
              },
              Al = "$",
              Cl = '"$"',
              gl = function gl() {
                return new Token("end");
              },
              bl = function bl(n, l) {
                return new Quantified(n, l);
              },
              kl = "Quantifier",
              Tl = function Tl(n, l) {
                return l && (n.greedy = !1), n;
              },
              xl = "{",
              yl = '"{"',
              ml = ",",
              Rl = '","',
              Fl = "}",
              Ql = '"}"',
              Sl = function Sl(n, l) {
                return new Quantifier(n, l);
              },
              Ul = ",}",
              El = '",}"',
              Gl = function Gl(n) {
                return new Quantifier(n, 1 / 0);
              },
              Bl = function Bl(n) {
                return new Quantifier(n, n);
              },
              jl = "+",
              $l = '"+"',
              ql = function ql() {
                return new Quantifier(1, 1 / 0);
              },
              Ll = "*",
              Ml = '"*"',
              Dl = function Dl() {
                return new Quantifier(0, 1 / 0);
              },
              Hl = "?",
              Ol = '"?"',
              Wl = function Wl() {
                return new Quantifier(0, 1);
              },
              zl = /^[0-9]/,
              Il = "[0-9]",
              Jl = function Jl(n) {
                return +n.join("");
              },
              Kl = "(",
              Nl = '"("',
              Pl = ")",
              Vl = '")"',
              Xl = function Xl(n) {
                return n;
              },
              Yl = function Yl(n) {
                return new CaptureGroup(n);
              },
              Zl = "?:",
              _l = '"?:"',
              nu = function nu(n) {
                return new Group("non-capture-group", n);
              },
              lu = "?=",
              uu = '"?="',
              tu = function tu(n) {
                return new Group("positive-lookahead", n);
              },
              ru = "?!",
              eu = '"?!"',
              ou = function ou(n) {
                return new Group("negative-lookahead", n);
              },
              cu = "CharacterSet",
              iu = "[",
              au = '"["',
              fu = "]",
              su = '"]"',
              hu = function hu(n, l) {
                return new CharSet(!!n, l);
              },
              du = "CharacterRange",
              pu = "-",
              vu = '"-"',
              wu = function wu(n, l) {
                return new CharacterRange(n, l);
              },
              Au = "Character",
              Cu = /^[^\\\]]/,
              gu = "[^\\\\\\]]",
              bu = function bu(n) {
                return new Literal(n);
              },
              ku = ".",
              Tu = '"."',
              xu = function xu() {
                return new Token("any-character");
              },
              yu = "Literal",
              mu = /^[^|\\\/.[()?+*$\^]/,
              Ru = "[^|\\\\\\/.[()?+*$\\^]",
              Fu = "\\b",
              Qu = '"\\\\b"',
              Su = function Su() {
                return new Token("backspace");
              },
              Uu = function Uu() {
                return new Token("word-boundary");
              },
              Eu = "\\B",
              Gu = '"\\\\B"',
              Bu = function Bu() {
                return new Token("non-word-boundary");
              },
              ju = "\\d",
              $u = '"\\\\d"',
              qu = function qu() {
                return new Token("digit");
              },
              Lu = "\\D",
              Mu = '"\\\\D"',
              Du = function Du() {
                return new Token("non-digit");
              },
              Hu = "\\f",
              Ou = '"\\\\f"',
              Wu = function Wu() {
                return new Token("form-feed");
              },
              zu = "\\n",
              Iu = '"\\\\n"',
              Ju = function Ju() {
                return new Token("line-feed");
              },
              Ku = "\\r",
              Nu = '"\\\\r"',
              Pu = function Pu() {
                return new Token("carriage-return");
              },
              Vu = "\\s",
              Xu = '"\\\\s"',
              Yu = function Yu() {
                return new Token("white-space");
              },
              Zu = "\\S",
              _u = '"\\\\S"',
              nt = function nt() {
                return new Token("non-white-space");
              },
              lt = "\\t",
              ut = '"\\\\t"',
              tt = function tt() {
                return new Token("tab");
              },
              rt = "\\v",
              et = '"\\\\v"',
              ot = function ot() {
                return new Token("vertical-tab");
              },
              ct = "\\w",
              it = '"\\\\w"',
              at = function at() {
                return new Token("word");
              },
              ft = "\\W",
              st = '"\\\\W"',
              ht = function ht() {
                return new Token("non-word");
              },
              dt = "\\c",
              pt = '"\\\\c"',
              vt = "any character",
              wt = function wt(n) {
                return new ControlCharacter(n);
              },
              At = "\\",
              Ct = '"\\\\"',
              gt = /^[1-9]/,
              bt = "[1-9]",
              kt = function kt(n) {
                return new BackReference(n);
              },
              Tt = "\\0",
              xt = '"\\\\0"',
              yt = /^[0-7]/,
              mt = "[0-7]",
              Rt = function Rt(n) {
                return new Octal(n.join(""));
              },
              Ft = "\\x",
              Qt = '"\\\\x"',
              St = /^[0-9a-fA-F]/,
              Ut = "[0-9a-fA-F]",
              Et = function Et(n) {
                return new Hex(n.join(""));
              },
              Gt = "\\u",
              Bt = "\"\\\\u\"",
              jt = function jt(n) {
                return new Unicode(n.join(""));
              },
              $t = function $t() {
                return new Token("null-character");
              },
              qt = 0,
              Lt = 0,
              Mt = 0,
              Dt = {
                line: 1,
                column: 1,
                seenCR: !1
              },
              Ht = 0,
              Ot = [],
              Wt = 0;
            if ("startRule" in el) {
              if (!(el.startRule in ol)) throw new Error("Can't start parsing from rule \"" + el.startRule + '".');
              cl = ol[el.startRule];
            }
            if (Token.offset = t, Token.text = u, rl = cl(), null !== rl && qt === n.length) return rl;
            throw o(Ot), Lt = Math.max(qt, Ht), new l(Ot, Lt < n.length ? n.charAt(Lt) : null, Lt, r(Lt).line, r(Lt).column);
          }
          return n(l, Error), {
            SyntaxError: l,
            parse: u
          };
        }(),
        index = 1,
        cgs = {};
      module.exports = parser;

      /***/
    }, /* 22 */
    /***/function (module, exports, __nested_webpack_require_213478__) {
      /*
          ## RegExp Handler
      	    https://github.com/ForbesLindesay/regexp
          https://github.com/dmajda/pegjs
          http://www.regexper.com/
      	    每个节点的结构
              {
                  type: '',
                  offset: number,
                  text: '',
                  body: {},
                  escaped: true/false
              }
      	    type 可选值
              alternate             |         选择
              match                 匹配
              capture-group         ()        捕获组
              non-capture-group     (?:...)   非捕获组
              positive-lookahead    (?=p)     零宽正向先行断言
              negative-lookahead    (?!p)     零宽负向先行断言
              quantified            a*        重复节点
              quantifier            *         量词
              charset               []        字符集
              range                 {m, n}    范围
              literal               a         直接量字符
              unicode               \uxxxx    Unicode
              hex                   \x        十六进制
              octal                 八进制
              back-reference        \n        反向引用
              control-character     \cX       控制字符
      	        // Token
              start               ^       开头
              end                 $       结尾
              any-character       .       任意字符
              backspace           [\b]    退格直接量
              word-boundary       \b      单词边界
              non-word-boundary   \B      非单词边界
              digit               \d      ASCII 数字，[0-9]
              non-digit           \D      非 ASCII 数字，[^0-9]
              form-feed           \f      换页符
              line-feed           \n      换行符
              carriage-return     \r      回车符
              white-space         \s      空白符
              non-white-space     \S      非空白符
              tab                 \t      制表符
              vertical-tab        \v      垂直制表符
              word                \w      ASCII 字符，[a-zA-Z0-9]
              non-word            \W      非 ASCII 字符，[^a-zA-Z0-9]
              null-character      \o      NUL 字符
       */

      var Util = __nested_webpack_require_213478__(3);
      var Random = __nested_webpack_require_213478__(5);
      /*
          
      */
      var Handler = {
        extend: Util.extend
      };

      // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_code_chart
      /*var ASCII_CONTROL_CODE_CHART = {
          '@': ['\u0000'],
          A: ['\u0001'],
          B: ['\u0002'],
          C: ['\u0003'],
          D: ['\u0004'],
          E: ['\u0005'],
          F: ['\u0006'],
          G: ['\u0007', '\a'],
          H: ['\u0008', '\b'],
          I: ['\u0009', '\t'],
          J: ['\u000A', '\n'],
          K: ['\u000B', '\v'],
          L: ['\u000C', '\f'],
          M: ['\u000D', '\r'],
          N: ['\u000E'],
          O: ['\u000F'],
          P: ['\u0010'],
          Q: ['\u0011'],
          R: ['\u0012'],
          S: ['\u0013'],
          T: ['\u0014'],
          U: ['\u0015'],
          V: ['\u0016'],
          W: ['\u0017'],
          X: ['\u0018'],
          Y: ['\u0019'],
          Z: ['\u001A'],
          '[': ['\u001B', '\e'],
          '\\': ['\u001C'],
          ']': ['\u001D'],
          '^': ['\u001E'],
          '_': ['\u001F']
      }*/

      // ASCII printable code chart
      // var LOWER = 'abcdefghijklmnopqrstuvwxyz'
      // var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      // var NUMBER = '0123456789'
      // var SYMBOL = ' !"#$%&\'()*+,-./' + ':;<=>?@' + '[\\]^_`' + '{|}~'
      var LOWER = ascii(97, 122);
      var UPPER = ascii(65, 90);
      var NUMBER = ascii(48, 57);
      var OTHER = ascii(32, 47) + ascii(58, 64) + ascii(91, 96) + ascii(123, 126); // 排除 95 _ ascii(91, 94) + ascii(96, 96)
      var PRINTABLE = ascii(32, 126);
      var SPACE = " \f\n\r\t\x0B\xA0\u2028\u2029";
      var CHARACTER_CLASSES = {
        '\\w': LOWER + UPPER + NUMBER + '_',
        // ascii(95, 95)
        '\\W': OTHER.replace('_', ''),
        '\\s': SPACE,
        '\\S': function () {
          var result = PRINTABLE;
          for (var i = 0; i < SPACE.length; i++) {
            result = result.replace(SPACE[i], '');
          }
          return result;
        }(),
        '\\d': NUMBER,
        '\\D': LOWER + UPPER + OTHER
      };
      function ascii(from, to) {
        var result = '';
        for (var i = from; i <= to; i++) {
          result += String.fromCharCode(i);
        }
        return result;
      }

      // var ast = RegExpParser.parse(regexp.source)
      Handler.gen = function (node, result, cache) {
        cache = cache || {
          guid: 1
        };
        return Handler[node.type] ? Handler[node.type](node, result, cache) : Handler.token(node, result, cache);
      };
      Handler.extend({
        /* jshint unused:false */
        token: function token(node, result, cache) {
          switch (node.type) {
            case 'start':
            case 'end':
              return '';
            case 'any-character':
              return Random.character();
            case 'backspace':
              return '';
            case 'word-boundary':
              // TODO
              return '';
            case 'non-word-boundary':
              // TODO
              break;
            case 'digit':
              return Random.pick(NUMBER.split(''));
            case 'non-digit':
              return Random.pick((LOWER + UPPER + OTHER).split(''));
            case 'form-feed':
              break;
            case 'line-feed':
              return node.body || node.text;
            case 'carriage-return':
              break;
            case 'white-space':
              return Random.pick(SPACE.split(''));
            case 'non-white-space':
              return Random.pick((LOWER + UPPER + NUMBER).split(''));
            case 'tab':
              break;
            case 'vertical-tab':
              break;
            case 'word':
              // \w [a-zA-Z0-9]
              return Random.pick((LOWER + UPPER + NUMBER).split(''));
            case 'non-word':
              // \W [^a-zA-Z0-9]
              return Random.pick(OTHER.replace('_', '').split(''));
            case 'null-character':
              break;
          }
          return node.body || node.text;
        },
        /*
            {
                type: 'alternate',
                offset: 0,
                text: '',
                left: {
                    boyd: []
                },
                right: {
                    boyd: []
                }
            }
        */
        alternate: function alternate(node, result, cache) {
          // node.left/right {}
          return this.gen(Random.boolean() ? node.left : node.right, result, cache);
        },
        /*
            {
                type: 'match',
                offset: 0,
                text: '',
                body: []
            }
        */
        match: function match(node, result, cache) {
          result = '';
          // node.body []
          for (var i = 0; i < node.body.length; i++) {
            result += this.gen(node.body[i], result, cache);
          }
          return result;
        },
        // ()
        'capture-group': function captureGroup(node, result, cache) {
          // node.body {}
          result = this.gen(node.body, result, cache);
          cache[cache.guid++] = result;
          return result;
        },
        // (?:...)
        'non-capture-group': function nonCaptureGroup(node, result, cache) {
          // node.body {}
          return this.gen(node.body, result, cache);
        },
        // (?=p)
        'positive-lookahead': function positiveLookahead(node, result, cache) {
          // node.body
          return this.gen(node.body, result, cache);
        },
        // (?!p)
        'negative-lookahead': function negativeLookahead(node, result, cache) {
          // node.body
          return '';
        },
        /*
            {
                type: 'quantified',
                offset: 3,
                text: 'c*',
                body: {
                    type: 'literal',
                    offset: 3,
                    text: 'c',
                    body: 'c',
                    escaped: false
                },
                quantifier: {
                    type: 'quantifier',
                    offset: 4,
                    text: '*',
                    min: 0,
                    max: Infinity,
                    greedy: true
                }
            }
        */
        quantified: function quantified(node, result, cache) {
          result = '';
          // node.quantifier {}
          var count = this.quantifier(node.quantifier);
          // node.body {}
          for (var i = 0; i < count; i++) {
            result += this.gen(node.body, result, cache);
          }
          return result;
        },
        /*
            quantifier: {
                type: 'quantifier',
                offset: 4,
                text: '*',
                min: 0,
                max: Infinity,
                greedy: true
            }
        */
        quantifier: function quantifier(node, result, cache) {
          var min = Math.max(node.min, 0);
          var max = isFinite(node.max) ? node.max : min + Random.integer(3, 7);
          return Random.integer(min, max);
        },
        /*
            
        */
        charset: function charset(node, result, cache) {
          // node.invert
          if (node.invert) return this['invert-charset'](node, result, cache);

          // node.body []
          var literal = Random.pick(node.body);
          return this.gen(literal, result, cache);
        },
        'invert-charset': function invertCharset(node, result, cache) {
          var pool = PRINTABLE;
          for (var i = 0, item; i < node.body.length; i++) {
            item = node.body[i];
            switch (item.type) {
              case 'literal':
                pool = pool.replace(item.body, '');
                break;
              case 'range':
                var min = this.gen(item.start, result, cache).charCodeAt();
                var max = this.gen(item.end, result, cache).charCodeAt();
                for (var ii = min; ii <= max; ii++) {
                  pool = pool.replace(String.fromCharCode(ii), '');
                }
              /* falls through */
              default:
                var characters = CHARACTER_CLASSES[item.text];
                if (characters) {
                  for (var iii = 0; iii <= characters.length; iii++) {
                    pool = pool.replace(characters[iii], '');
                  }
                }
            }
          }
          return Random.pick(pool.split(''));
        },
        range: function range(node, result, cache) {
          // node.start, node.end
          var min = this.gen(node.start, result, cache).charCodeAt();
          var max = this.gen(node.end, result, cache).charCodeAt();
          return String.fromCharCode(Random.integer(min, max));
        },
        literal: function literal(node, result, cache) {
          return node.escaped ? node.body : node.text;
        },
        // Unicode \u
        unicode: function unicode(node, result, cache) {
          return String.fromCharCode(parseInt(node.code, 16));
        },
        // 十六进制 \xFF
        hex: function hex(node, result, cache) {
          return String.fromCharCode(parseInt(node.code, 16));
        },
        // 八进制 \0
        octal: function octal(node, result, cache) {
          return String.fromCharCode(parseInt(node.code, 8));
        },
        // 反向引用
        'back-reference': function backReference(node, result, cache) {
          return cache[node.code] || '';
        },
        /*
            http://en.wikipedia.org/wiki/C0_and_C1_control_codes
        */
        CONTROL_CHARACTER_MAP: function () {
          var CONTROL_CHARACTER = '@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _'.split(' ');
          var CONTROL_CHARACTER_UNICODE = "\0 \x01 \x02 \x03 \x04 \x05 \x06 \x07 \b \t \n \x0B \f \r \x0E \x0F \x10 \x11 \x12 \x13 \x14 \x15 \x16 \x17 \x18 \x19 \x1A \x1B \x1C \x1D \x1E \x1F".split(' ');
          var map = {};
          for (var i = 0; i < CONTROL_CHARACTER.length; i++) {
            map[CONTROL_CHARACTER[i]] = CONTROL_CHARACTER_UNICODE[i];
          }
          return map;
        }(),
        'control-character': function controlCharacter(node, result, cache) {
          return this.CONTROL_CHARACTER_MAP[node.code];
        }
      });
      module.exports = Handler;

      /***/
    }, /* 23 */
    /***/function (module, exports, __nested_webpack_require_226177__) {
      module.exports = __nested_webpack_require_226177__(24);

      /***/
    }, /* 24 */
    /***/function (module, exports, __nested_webpack_require_226313__) {
      /*
          ## toJSONSchema
      	    把 Mock.js 风格的数据模板转换成 JSON Schema。
      	    > [JSON Schema](http://json-schema.org/)
       */
      var Constant = __nested_webpack_require_226313__(2);
      var Util = __nested_webpack_require_226313__(3);
      var Parser = __nested_webpack_require_226313__(4);
      function toJSONSchema(template, name, path /* Internal Use Only */) {
        // type rule properties items
        path = path || [];
        var result = {
          name: typeof name === 'string' ? name.replace(Constant.RE_KEY, '$1') : name,
          template: template,
          type: Util.type(template),
          // 可能不准确，例如 { 'name|1': [{}, {} ...] }
          rule: Parser.parse(name)
        };
        result.path = path.slice(0);
        result.path.push(name === undefined ? 'ROOT' : result.name);
        switch (result.type) {
          case 'array':
            result.items = [];
            Util.each(template, function (value, index) {
              result.items.push(toJSONSchema(value, index, result.path));
            });
            break;
          case 'object':
            result.properties = [];
            Util.each(template, function (value, name) {
              result.properties.push(toJSONSchema(value, name, result.path));
            });
            break;
        }
        return result;
      }
      module.exports = toJSONSchema;

      /***/
    }, /* 25 */
    /***/function (module, exports, __nested_webpack_require_227753__) {
      module.exports = __nested_webpack_require_227753__(26);

      /***/
    }, /* 26 */
    /***/function (module, exports, __nested_webpack_require_227889__) {
      /*
          ## valid(template, data)
      	    校验真实数据 data 是否与数据模板 template 匹配。
          
          实现思路：
          1. 解析规则。
              先把数据模板 template 解析为更方便机器解析的 JSON-Schame
              name               属性名 
              type               属性值类型
              template           属性值模板
              properties         对象属性数组
              items              数组元素数组
              rule               属性值生成规则
          2. 递归验证规则。
              然后用 JSON-Schema 校验真实数据，校验项包括属性名、值类型、值、值生成规则。
      	    提示信息 
          https://github.com/fge/json-schema-validator/blob/master/src/main/resources/com/github/fge/jsonschema/validator/validation.properties
          [JSON-Schama validator](http://json-schema-validator.herokuapp.com/)
          [Regexp Demo](http://demos.forbeslindesay.co.uk/regexp/)
      */
      var Constant = __nested_webpack_require_227889__(2);
      var Util = __nested_webpack_require_227889__(3);
      var toJSONSchema = __nested_webpack_require_227889__(23);
      function valid(template, data) {
        var schema = toJSONSchema(template);
        var result = Diff.diff(schema, data);
        for (var i = 0; i < result.length; i++) {
          // console.log(template, data)
          // console.warn(Assert.message(result[i]))
        }
        return result;
      }

      /*
          ## name
              有生成规则：比较解析后的 name
              无生成规则：直接比较
          ## type
              无类型转换：直接比较
              有类型转换：先试着解析 template，然后再检查？
          ## value vs. template
              基本类型
                  无生成规则：直接比较
                  有生成规则：
                      number
                          min-max.dmin-dmax
                          min-max.dcount
                          count.dmin-dmax
                          count.dcount
                          +step
                          整数部分
                          小数部分
                      boolean 
                      string  
                          min-max
                          count
          ## properties
              对象
                  有生成规则：检测期望的属性个数，继续递归
                  无生成规则：检测全部的属性个数，继续递归
          ## items
              数组
                  有生成规则：
                      `'name|1': [{}, {} ...]`            其中之一，继续递归
                      `'name|+1': [{}, {} ...]`           顺序检测，继续递归
                      `'name|min-max': [{}, {} ...]`      检测个数，继续递归
                      `'name|count': [{}, {} ...]`        检测个数，继续递归
                  无生成规则：检测全部的元素个数，继续递归
      */
      var Diff = {
        diff: function diff(schema, data, name /* Internal Use Only */) {
          var result = [];

          // 先检测名称 name 和类型 type，如果匹配，才有必要继续检测
          if (this.name(schema, data, name, result) && this.type(schema, data, name, result)) {
            this.value(schema, data, name, result);
            this.properties(schema, data, name, result);
            this.items(schema, data, name, result);
          }
          return result;
        },
        /* jshint unused:false */
        name: function name(schema, data, _name, result) {
          var length = result.length;
          Assert.equal('name', schema.path, _name + '', schema.name + '', result);
          return result.length === length;
        },
        type: function type(schema, data, name, result) {
          var length = result.length;
          switch (schema.type) {
            case 'string':
              // 跳过含有『占位符』的属性值，因为『占位符』返回值的类型可能和模板不一致，例如 '@int' 会返回一个整形值
              if (schema.template.match(Constant.RE_PLACEHOLDER)) return true;
              break;
            case 'array':
              if (schema.rule.parameters) {
                // name|count: array
                if (schema.rule.min !== undefined && schema.rule.max === undefined) {
                  // 跳过 name|1: array，因为最终值的类型（很可能）不是数组，也不一定与 `array` 中的类型一致
                  if (schema.rule.count === 1) return true;
                }
                // 跳过 name|+inc: array
                if (schema.rule.parameters[2]) return true;
              }
              break;
            case 'function':
              // 跳过 `'name': function`，因为函数可以返回任何类型的值。
              return true;
          }
          Assert.equal('type', schema.path, Util.type(data), schema.type, result);
          return result.length === length;
        },
        value: function value(schema, data, name, result) {
          var length = result.length;
          var rule = schema.rule;
          var templateType = schema.type;
          if (templateType === 'object' || templateType === 'array' || templateType === 'function') return true;

          // 无生成规则
          if (!rule.parameters) {
            switch (templateType) {
              case 'regexp':
                Assert.match('value', schema.path, data, schema.template, result);
                return result.length === length;
              case 'string':
                // 同样跳过含有『占位符』的属性值，因为『占位符』的返回值会通常会与模板不一致
                if (schema.template.match(Constant.RE_PLACEHOLDER)) return result.length === length;
                break;
            }
            Assert.equal('value', schema.path, data, schema.template, result);
            return result.length === length;
          }

          // 有生成规则
          var actualRepeatCount;
          switch (templateType) {
            case 'number':
              var parts = (data + '').split('.');
              parts[0] = +parts[0];

              // 整数部分
              // |min-max
              if (rule.min !== undefined && rule.max !== undefined) {
                Assert.greaterThanOrEqualTo('value', schema.path, parts[0], Math.min(rule.min, rule.max), result);
                // , 'numeric instance is lower than the required minimum (minimum: {expected}, found: {actual})')
                Assert.lessThanOrEqualTo('value', schema.path, parts[0], Math.max(rule.min, rule.max), result);
              }
              // |count
              if (rule.min !== undefined && rule.max === undefined) {
                Assert.equal('value', schema.path, parts[0], rule.min, result, '[value] ' + name);
              }

              // 小数部分
              if (rule.decimal) {
                // |dmin-dmax
                if (rule.dmin !== undefined && rule.dmax !== undefined) {
                  Assert.greaterThanOrEqualTo('value', schema.path, parts[1].length, rule.dmin, result);
                  Assert.lessThanOrEqualTo('value', schema.path, parts[1].length, rule.dmax, result);
                }
                // |dcount
                if (rule.dmin !== undefined && rule.dmax === undefined) {
                  Assert.equal('value', schema.path, parts[1].length, rule.dmin, result);
                }
              }
              break;
            case 'boolean':
              break;
            case 'string':
              // 'aaa'.match(/a/g)
              actualRepeatCount = data.match(new RegExp(schema.template, 'g'));
              actualRepeatCount = actualRepeatCount ? actualRepeatCount.length : 0;

              // |min-max
              if (rule.min !== undefined && rule.max !== undefined) {
                Assert.greaterThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.min, result);
                Assert.lessThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.max, result);
              }
              // |count
              if (rule.min !== undefined && rule.max === undefined) {
                Assert.equal('repeat count', schema.path, actualRepeatCount, rule.min, result);
              }
              break;
            case 'regexp':
              actualRepeatCount = data.match(new RegExp(schema.template.source.replace(/^\^|\$$/g, ''), 'g'));
              actualRepeatCount = actualRepeatCount ? actualRepeatCount.length : 0;

              // |min-max
              if (rule.min !== undefined && rule.max !== undefined) {
                Assert.greaterThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.min, result);
                Assert.lessThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.max, result);
              }
              // |count
              if (rule.min !== undefined && rule.max === undefined) {
                Assert.equal('repeat count', schema.path, actualRepeatCount, rule.min, result);
              }
              break;
          }
          return result.length === length;
        },
        properties: function properties(schema, data, name, result) {
          var length = result.length;
          var rule = schema.rule;
          var keys = Util.keys(data);
          if (!schema.properties) return;

          // 无生成规则
          if (!schema.rule.parameters) {
            Assert.equal('properties length', schema.path, keys.length, schema.properties.length, result);
          } else {
            // 有生成规则
            // |min-max
            if (rule.min !== undefined && rule.max !== undefined) {
              Assert.greaterThanOrEqualTo('properties length', schema.path, keys.length, Math.min(rule.min, rule.max), result);
              Assert.lessThanOrEqualTo('properties length', schema.path, keys.length, Math.max(rule.min, rule.max), result);
            }
            // |count
            if (rule.min !== undefined && rule.max === undefined) {
              // |1, |>1
              if (rule.count !== 1) Assert.equal('properties length', schema.path, keys.length, rule.min, result);
            }
          }
          if (result.length !== length) return false;
          for (var i = 0; i < keys.length; i++) {
            result.push.apply(result, this.diff(function () {
              var property;
              Util.each(schema.properties, function (item /*, index*/) {
                if (item.name === keys[i]) property = item;
              });
              return property || schema.properties[i];
            }(), data[keys[i]], keys[i]));
          }
          return result.length === length;
        },
        items: function items(schema, data, name, result) {
          var length = result.length;
          if (!schema.items) return;
          var rule = schema.rule;

          // 无生成规则
          if (!schema.rule.parameters) {
            Assert.equal('items length', schema.path, data.length, schema.items.length, result);
          } else {
            // 有生成规则
            // |min-max
            if (rule.min !== undefined && rule.max !== undefined) {
              Assert.greaterThanOrEqualTo('items', schema.path, data.length, Math.min(rule.min, rule.max) * schema.items.length, result, '[{utype}] array is too short: {path} must have at least {expected} elements but instance has {actual} elements');
              Assert.lessThanOrEqualTo('items', schema.path, data.length, Math.max(rule.min, rule.max) * schema.items.length, result, '[{utype}] array is too long: {path} must have at most {expected} elements but instance has {actual} elements');
            }
            // |count
            if (rule.min !== undefined && rule.max === undefined) {
              // |1, |>1
              if (rule.count === 1) return result.length === length;else Assert.equal('items length', schema.path, data.length, rule.min * schema.items.length, result);
            }
            // |+inc
            if (rule.parameters[2]) return result.length === length;
          }
          if (result.length !== length) return false;
          for (var i = 0; i < data.length; i++) {
            result.push.apply(result, this.diff(schema.items[i % schema.items.length], data[i], i % schema.items.length));
          }
          return result.length === length;
        }
      };

      /*
          完善、友好的提示信息
          
          Equal, not equal to, greater than, less than, greater than or equal to, less than or equal to
          路径 验证类型 描述 
      	    Expect path.name is less than or equal to expected, but path.name is actual.
      	    Expect path.name is less than or equal to expected, but path.name is actual.
          Expect path.name is greater than or equal to expected, but path.name is actual.
      	*/
      var Assert = {
        message: function message(item) {
          return (item.message || '[{utype}] Expect {path}\'{ltype} {action} {expected}, but is {actual}').replace('{utype}', item.type.toUpperCase()).replace('{ltype}', item.type.toLowerCase()).replace('{path}', Util.isArray(item.path) && item.path.join('.') || item.path).replace('{action}', item.action).replace('{expected}', item.expected).replace('{actual}', item.actual);
        },
        equal: function equal(type, path, actual, expected, result, message) {
          if (actual === expected) return true;
          switch (type) {
            case 'type':
              // 正则模板 === 字符串最终值
              if (expected === 'regexp' && actual === 'string') return true;
              break;
          }
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is equal to',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        // actual matches expected
        match: function match(type, path, actual, expected, result, message) {
          if (expected.test(actual)) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'matches',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        notEqual: function notEqual(type, path, actual, expected, result, message) {
          if (actual !== expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is not equal to',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        greaterThan: function greaterThan(type, path, actual, expected, result, message) {
          if (actual > expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is greater than',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        lessThan: function lessThan(type, path, actual, expected, result, message) {
          if (actual < expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is less to',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        greaterThanOrEqualTo: function greaterThanOrEqualTo(type, path, actual, expected, result, message) {
          if (actual >= expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is greater than or equal to',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        },
        lessThanOrEqualTo: function lessThanOrEqualTo(type, path, actual, expected, result, message) {
          if (actual <= expected) return true;
          var item = {
            path: path,
            type: type,
            actual: actual,
            expected: expected,
            action: 'is less than or equal to',
            message: message
          };
          item.message = Assert.message(item);
          result.push(item);
          return false;
        }
      };
      valid.Diff = Diff;
      valid.Assert = Assert;
      module.exports = valid;

      /***/
    }, /* 27 */
    /***/function (module, exports, __nested_webpack_require_244023__) {
      module.exports = __nested_webpack_require_244023__(28);

      /***/
    }, /* 28 */
    /***/function (module, exports, __nested_webpack_require_244159__) {
      /* global window, document, location, Event, setTimeout */
      /*
          ## MockXMLHttpRequest
      	    期望的功能：
          1. 完整地覆盖原生 XHR 的行为
          2. 完整地模拟原生 XHR 的行为
          3. 在发起请求时，自动检测是否需要拦截
          4. 如果不必拦截，则执行原生 XHR 的行为
          5. 如果需要拦截，则执行虚拟 XHR 的行为
          6. 兼容 XMLHttpRequest 和 ActiveXObject
              new window.XMLHttpRequest()
              new window.ActiveXObject("Microsoft.XMLHTTP")
      	    关键方法的逻辑：
          * new   此时尚无法确定是否需要拦截，所以创建原生 XHR 对象是必须的。
          * open  此时可以取到 URL，可以决定是否进行拦截。
          * send  此时已经确定了请求方式。
      	    规范：
          http://xhr.spec.whatwg.org/
          http://www.w3.org/TR/XMLHttpRequest2/
      	    参考实现：
          https://github.com/philikon/MockHttpRequest/blob/master/lib/mock.js
          https://github.com/trek/FakeXMLHttpRequest/blob/master/fake_xml_http_request.js
          https://github.com/ilinsky/xmlhttprequest/blob/master/XMLHttpRequest.js
          https://github.com/firebug/firebug-lite/blob/master/content/lite/xhr.js
          https://github.com/thx/RAP/blob/master/lab/rap.plugin.xinglie.js
      	    **需不需要全面重写 XMLHttpRequest？**
              http://xhr.spec.whatwg.org/#interface-xmlhttprequest
              关键属性 readyState、status、statusText、response、responseText、responseXML 是 readonly，所以，试图通过修改这些状态，来模拟响应是不可行的。
              因此，唯一的办法是模拟整个 XMLHttpRequest，就像 jQuery 对事件模型的封装。
      	    // Event handlers
          onloadstart         loadstart
          onprogress          progress
          onabort             abort
          onerror             error
          onload              load
          ontimeout           timeout
          onloadend           loadend
          onreadystatechange  readystatechange
       */

      var Util = __nested_webpack_require_244159__(3);

      // 备份原生 XMLHttpRequest
      window._XMLHttpRequest = window.XMLHttpRequest;
      window._ActiveXObject = window.ActiveXObject;

      /*
          PhantomJS
          TypeError: '[object EventConstructor]' is not a constructor (evaluating 'new Event("readystatechange")')
      	    https://github.com/bluerail/twitter-bootstrap-rails-confirm/issues/18
          https://github.com/ariya/phantomjs/issues/11289
      */
      try {
        new window.Event('custom');
      } catch (exception) {
        window.Event = function (type, bubbles, cancelable, detail) {
          var event = document.createEvent('CustomEvent'); // MUST be 'CustomEvent'
          event.initCustomEvent(type, bubbles, cancelable, detail);
          return event;
        };
      }
      var XHR_STATES = {
        // The object has been constructed.
        UNSENT: 0,
        // The open() method has been successfully invoked.
        OPENED: 1,
        // All redirects (if any) have been followed and all HTTP headers of the response have been received.
        HEADERS_RECEIVED: 2,
        // The response's body is being received.
        LOADING: 3,
        // The data transfer has been completed or something went wrong during the transfer (e.g. infinite redirects).
        DONE: 4
      };
      var XHR_EVENTS = 'readystatechange loadstart progress abort error load timeout loadend'.split(' ');
      var XHR_REQUEST_PROPERTIES = 'timeout withCredentials'.split(' ');
      var XHR_RESPONSE_PROPERTIES = 'readyState responseURL status statusText responseType response responseText responseXML'.split(' ');

      // https://github.com/trek/FakeXMLHttpRequest/blob/master/fake_xml_http_request.js#L32
      var HTTP_STATUS_CODES = {
        100: "Continue",
        101: "Switching Protocols",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        300: "Multiple Choice",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Request Entity Too Large",
        414: "Request-URI Too Long",
        415: "Unsupported Media Type",
        416: "Requested Range Not Satisfiable",
        417: "Expectation Failed",
        422: "Unprocessable Entity",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported"
      };

      /*
          MockXMLHttpRequest
      */

      function MockXMLHttpRequest() {
        // 初始化 custom 对象，用于存储自定义属性
        this.custom = {
          events: {},
          requestHeaders: {},
          responseHeaders: {}
        };
      }
      MockXMLHttpRequest._settings = {
        timeout: '10-100'
        /*
            timeout: 50,
            timeout: '10-100',
         */
      };

      MockXMLHttpRequest.setup = function (settings) {
        Util.extend(MockXMLHttpRequest._settings, settings);
        return MockXMLHttpRequest._settings;
      };
      Util.extend(MockXMLHttpRequest, XHR_STATES);
      Util.extend(MockXMLHttpRequest.prototype, XHR_STATES);

      // 标记当前对象为 MockXMLHttpRequest
      MockXMLHttpRequest.prototype.mock = true;

      // 是否拦截 Ajax 请求
      MockXMLHttpRequest.prototype.match = false;

      // 初始化 Request 相关的属性和方法
      Util.extend(MockXMLHttpRequest.prototype, {
        // https://xhr.spec.whatwg.org/#the-open()-method
        // Sets the request method, request URL, and synchronous flag.
        open: function open(method, url, async, username, password) {
          var that = this;
          Util.extend(this.custom, {
            method: method,
            url: url,
            async: typeof async === 'boolean' ? async : true,
            username: username,
            password: password,
            options: {
              url: url,
              type: method
            }
          });
          this.custom.timeout = function (timeout) {
            if (typeof timeout === 'number') return timeout;
            if (typeof timeout === 'string' && !~timeout.indexOf('-')) return parseInt(timeout, 10);
            if (typeof timeout === 'string' && ~timeout.indexOf('-')) {
              var tmp = timeout.split('-');
              var min = parseInt(tmp[0], 10);
              var max = parseInt(tmp[1], 10);
              return Math.round(Math.random() * (max - min)) + min;
            }
          }(MockXMLHttpRequest._settings.timeout);

          // 查找与请求参数匹配的数据模板
          var item = find(this.custom.options);
          function handle(event) {
            // 同步属性 NativeXMLHttpRequest => MockXMLHttpRequest
            for (var i = 0; i < XHR_RESPONSE_PROPERTIES.length; i++) {
              try {
                that[XHR_RESPONSE_PROPERTIES[i]] = xhr[XHR_RESPONSE_PROPERTIES[i]];
              } catch (e) {}
            }
            // 触发 MockXMLHttpRequest 上的同名事件
            that.dispatchEvent(new Event(event.type /*, false, false, that*/));
          }

          // 如果未找到匹配的数据模板，则采用原生 XHR 发送请求。
          if (!item) {
            // 创建原生 XHR 对象，调用原生 open()，监听所有原生事件
            var xhr = createNativeXMLHttpRequest();
            this.custom.xhr = xhr;

            // 初始化所有事件，用于监听原生 XHR 对象的事件
            for (var i = 0; i < XHR_EVENTS.length; i++) {
              xhr.addEventListener(XHR_EVENTS[i], handle);
            }

            // xhr.open()
            if (username) xhr.open(method, url, async, username, password);else xhr.open(method, url, async);

            // 同步属性 MockXMLHttpRequest => NativeXMLHttpRequest
            for (var j = 0; j < XHR_REQUEST_PROPERTIES.length; j++) {
              try {
                xhr[XHR_REQUEST_PROPERTIES[j]] = that[XHR_REQUEST_PROPERTIES[j]];
              } catch (e) {}
            }
            return;
          }

          // 找到了匹配的数据模板，开始拦截 XHR 请求
          this.match = true;
          this.custom.template = item;
          this.readyState = MockXMLHttpRequest.OPENED;
          this.dispatchEvent(new Event('readystatechange' /*, false, false, this*/));
        },

        // https://xhr.spec.whatwg.org/#the-setrequestheader()-method
        // Combines a header in author request headers.
        setRequestHeader: function setRequestHeader(name, value) {
          // 原生 XHR
          if (!this.match) {
            this.custom.xhr.setRequestHeader(name, value);
            return;
          }

          // 拦截 XHR
          var requestHeaders = this.custom.requestHeaders;
          if (requestHeaders[name]) requestHeaders[name] += ',' + value;else requestHeaders[name] = value;
        },
        timeout: 0,
        withCredentials: false,
        upload: {},
        // https://xhr.spec.whatwg.org/#the-send()-method
        // Initiates the request.
        send: function send(data) {
          var that = this;
          this.custom.options.body = data;

          // 原生 XHR
          if (!this.match) {
            this.custom.xhr.send(data);
            return;
          }

          // 拦截 XHR

          // X-Requested-With header
          this.setRequestHeader('X-Requested-With', 'MockXMLHttpRequest');

          // loadstart The fetch initiates.
          this.dispatchEvent(new Event('loadstart' /*, false, false, this*/));

          if (this.custom.async) setTimeout(done, this.custom.timeout); // 异步
          else done(); // 同步

          function done() {
            that.readyState = MockXMLHttpRequest.HEADERS_RECEIVED;
            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/));
            that.readyState = MockXMLHttpRequest.LOADING;
            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/));

            that.status = 200;
            that.statusText = HTTP_STATUS_CODES[200];

            // fix #92 #93 by @qddegtya
            that.response = that.responseText = JSON.stringify(convert(that.custom.template, that.custom.options), null, 4);
            that.readyState = MockXMLHttpRequest.DONE;
            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/));
            that.dispatchEvent(new Event('load' /*, false, false, that*/));
            that.dispatchEvent(new Event('loadend' /*, false, false, that*/));
          }
        },

        // https://xhr.spec.whatwg.org/#the-abort()-method
        // Cancels any network activity.
        abort: function abort() {
          // 原生 XHR
          if (!this.match) {
            this.custom.xhr.abort();
            return;
          }

          // 拦截 XHR
          this.readyState = MockXMLHttpRequest.UNSENT;
          this.dispatchEvent(new Event('abort', false, false, this));
          this.dispatchEvent(new Event('error', false, false, this));
        }
      });

      // 初始化 Response 相关的属性和方法
      Util.extend(MockXMLHttpRequest.prototype, {
        responseURL: '',
        status: MockXMLHttpRequest.UNSENT,
        statusText: '',
        // https://xhr.spec.whatwg.org/#the-getresponseheader()-method
        getResponseHeader: function getResponseHeader(name) {
          // 原生 XHR
          if (!this.match) {
            return this.custom.xhr.getResponseHeader(name);
          }

          // 拦截 XHR
          return this.custom.responseHeaders[name.toLowerCase()];
        },
        // https://xhr.spec.whatwg.org/#the-getallresponseheaders()-method
        // http://www.utf8-chartable.de/
        getAllResponseHeaders: function getAllResponseHeaders() {
          // 原生 XHR
          if (!this.match) {
            return this.custom.xhr.getAllResponseHeaders();
          }

          // 拦截 XHR
          var responseHeaders = this.custom.responseHeaders;
          var headers = '';
          for (var h in responseHeaders) {
            if (!responseHeaders.hasOwnProperty(h)) continue;
            headers += h + ': ' + responseHeaders[h] + '\r\n';
          }
          return headers;
        },
        overrideMimeType: function overrideMimeType( /*mime*/) {},
        responseType: '',
        // '', 'text', 'arraybuffer', 'blob', 'document', 'json'
        response: null,
        responseText: '',
        responseXML: null
      });

      // EventTarget
      Util.extend(MockXMLHttpRequest.prototype, {
        addEventListener: function addEventListener(type, handle) {
          var events = this.custom.events;
          if (!events[type]) events[type] = [];
          events[type].push(handle);
        },
        removeEventListener: function removeEventListener(type, handle) {
          var handles = this.custom.events[type] || [];
          for (var i = 0; i < handles.length; i++) {
            if (handles[i] === handle) {
              handles.splice(i--, 1);
            }
          }
        },
        dispatchEvent: function dispatchEvent(event) {
          var handles = this.custom.events[event.type] || [];
          for (var i = 0; i < handles.length; i++) {
            handles[i].call(this, event);
          }
          var ontype = 'on' + event.type;
          if (this[ontype]) this[ontype](event);
        }
      });

      // Inspired by jQuery
      function createNativeXMLHttpRequest() {
        var isLocal = function () {
          var rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
          var rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/;
          var ajaxLocation = location.href;
          var ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
          return rlocalProtocol.test(ajaxLocParts[1]);
        }();
        return window.ActiveXObject ? !isLocal && createStandardXHR() || createActiveXHR() : createStandardXHR();
        function createStandardXHR() {
          try {
            return new window._XMLHttpRequest();
          } catch (e) {}
        }
        function createActiveXHR() {
          try {
            return new window._ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {}
        }
      }

      // 查找与请求参数匹配的数据模板：URL，Type
      function find(options) {
        for (var sUrlType in MockXMLHttpRequest.Mock._mocked) {
          var item = MockXMLHttpRequest.Mock._mocked[sUrlType];
          if ((!item.rurl || match(item.rurl, options.url)) && (!item.rtype || match(item.rtype, options.type.toLowerCase()))) {
            // console.log('[mock]', options.url, '>', item.rurl)
            return item;
          }
        }
        function match(expected, actual) {
          if (Util.type(expected) === 'string') {
            return expected === actual;
          }
          if (Util.type(expected) === 'regexp') {
            return expected.test(actual);
          }
        }
      }

      // 数据模板 ＝> 响应数据
      function convert(item, options) {
        return Util.isFunction(item.template) ? item.template(options) : MockXMLHttpRequest.Mock.mock(item.template);
      }
      module.exports = MockXMLHttpRequest;

      /***/
    }
    /******/])
  );
});

;

/***/ }),

/***/ 3529:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gN": function() { return /* reexport */ es_Field; },
  "zb": function() { return /* reexport */ FieldContext; },
  "RV": function() { return /* reexport */ FormProvider; },
  "aV": function() { return /* reexport */ es_List; },
  "ZM": function() { return /* reexport */ es_ListContext; },
  "ZP": function() { return /* binding */ es; },
  "cI": function() { return /* reexport */ es_useForm; },
  "qo": function() { return /* reexport */ es_useWatch; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3433);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(4903);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(8240);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/FieldContext.js


var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var warningFunc = function warningFunc() {
  (0,warning/* default */.ZP)(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};
var Context = /*#__PURE__*/react.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldValue: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});
/* harmony default export */ var FieldContext = (Context);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/typeUtil.js
function typeUtil_toArray(value) {
  if (value === undefined || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(4165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
;// CONCATENATED MODULE: ./node_modules/async-validator/dist-web/index.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var dist_web_warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && ({"NODE_ENV":"production","PUBLIC_URL":".","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}) && "production" !== 'production' && 0 && 0) {}
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i = 0;
  var len = args.length;
  if (typeof template === 'function') {
    return template.apply(null, args);
  }
  if (typeof template === 'string') {
    var str = template.replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}
function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors || []);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function (a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}
var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);
  function AsyncValidationError(errors, fields) {
    var _this;
    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function (e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(function (key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined);
}
function getValue(value, path) {
  var v = value;
  for (var i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v;
    }
    v = v[path[i]];
  }
  return v;
}
function complementError(rule, source) {
  return function (oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
var required$1 = function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

var whitespace = function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};

// https://github.com/kevva/url-regex/blob/master/index.js
var urlReg;
var getUrlRegex = function getUrlRegex() {
  if (urlReg) {
    return urlReg;
  }
  var word = '[a-fA-F\\d:]';
  var b = function b(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : '';
  };
  var v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
  var v6seg = '[a-fA-F\\d]{1,4}';
  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim(); // Pre-compile only the exact regexes because adding a global flag make regexes stateful

  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");
  var ip = function ip(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", 'g');
  };
  ip.v4 = function (options) {
    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), 'g');
  };
  ip.v6 = function (options) {
    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), 'g');
  };
  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = '(?:\\S+(?::\\S*)?@)?';
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = '(?::\\d{2,5})?';
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", 'i');
  return urlReg;
};

/* eslint max-len:0 */

var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === 'string' && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern$2.hex);
  }
};
var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required$1(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
var range = function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type

  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
var ENUM$1 = 'enum';
var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
  }
};
var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
var rules = {
  required: required$1,
  whitespace: whitespace,
  type: type$1,
  range: range,
  "enum": enumerable$1,
  pattern: pattern$1
};
var string = function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'string');
    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
};
var method = function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var number = function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === '') {
      value = undefined;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var _boolean = function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var regexp = function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var integer = function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var floatFn = function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var array = function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'array');
    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var object = function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var ENUM = 'enum';
var enumerable = function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var pattern = function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var date = function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'date')) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
};
var required = function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
};
var type = function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var any = function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
};
var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable,
  pattern: pattern,
  date: date,
  url: type,
  hex: type,
  email: type,
  required: required,
  any: any
};
function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

var Schema = /*#__PURE__*/function () {
  // ========================= Static =========================
  // ======================== Instance ========================
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  var _proto = Schema.prototype;
  _proto.define = function define(rules) {
    var _this = this;
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    Object.keys(rules).forEach(function (name) {
      var item = rules[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };
  _proto.messages = function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  };
  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc() {};
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }
      return Promise.resolve(source);
    }
    function complete(results) {
      var errors = [];
      var fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        } // Fill validator. Skip if nothing need to validate

        rule.validator = _this2.getValidationMethod(rule);
        if (!rule.validator) {
          return;
        }
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        var errorList = Array.isArray(e) ? e : [e];
        if (!options.suppressWarning && errorList.length) {
          Schema.warning('async-validator:', errorList);
        }
        if (errorList.length && rule.message !== undefined) {
          errorList = [].concat(rule.message);
        } // Fill error info

        var filledErrors = errorList.map(complementError(rule, source));
        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }
        if (!deep) {
          doIt(filledErrors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }
            return doIt(filledErrors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            Object.keys(data.value).map(function (key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }
          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function (field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];
            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error == null ? void 0 : console.error(error); // rethrow to report error

          if (!options.suppressValidatorError) {
            setTimeout(function () {
              throw error;
            }, 0);
          }
          cb(error.message);
        }
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    }, source);
  };
  _proto.getType = function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  };
  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }
    return validators[this.getType(rule)] || undefined;
  };
  return Schema;
}();
Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  validators[type] = validator;
};
Schema.warning = dist_web_warning;
Schema.messages = messages;
Schema.validators = validators;

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/messages.js
var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/utils/get.js
function get(entity, path) {
  var current = entity;
  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[path[i]];
  }
  return current;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js
var esm_toArray = __webpack_require__(4506);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/utils/set.js




function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  var _paths = (0,esm_toArray/* default */.Z)(paths),
    path = _paths[0],
    restPath = _paths.slice(1);
  var clone;
  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = (0,toConsumableArray/* default */.Z)(entity);
  } else {
    clone = (0,objectSpread2/* default */.Z)({}, entity);
  }

  // Delete prop if `removeIfUndefined` and value is undefined
  if (removeIfUndefined && value === undefined && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // Do nothing if `removeIfUndefined` and parent object not exist
  if (paths.length && removeIfUndefined && value === undefined && !get(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/cloneDeep.js

function cloneDeep(val) {
  if (Array.isArray(val)) {
    return cloneArrayDeep(val);
  } else if ((0,esm_typeof/* default */.Z)(val) === 'object' && val !== null) {
    return cloneObjectDeep(val);
  }
  return val;
}
function cloneObjectDeep(val) {
  if (Object.getPrototypeOf(val) === Object.prototype) {
    var res = {};
    for (var key in val) {
      res[key] = cloneDeep(val[key]);
    }
    return res;
  }
  return val;
}
function cloneArrayDeep(val) {
  return val.map(function (item) {
    return cloneDeep(item);
  });
}
/* harmony default export */ var utils_cloneDeep = (cloneDeep);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/valueUtil.js







/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like `a.b.c` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */
function getNamePath(path) {
  return typeUtil_toArray(path);
}
function valueUtil_getValue(store, namePath) {
  var value = get(store, namePath);
  return value;
}
function setValue(store, namePath, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var newStore = set(store, namePath, value, removeIfUndefined);
  return newStore;
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function (namePath) {
    var value = valueUtil_getValue(store, namePath);
    newStore = setValue(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  return namePathList && namePathList.some(function (path) {
    return matchNamePath(path, namePath);
  });
}
function isObject(obj) {
  return (0,esm_typeof/* default */.Z)(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
/**
 * Copy values into store and return a new values object
 * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
 */
function internalSetValues(store, values) {
  var newStore = Array.isArray(store) ? (0,toConsumableArray/* default */.Z)(store) : (0,objectSpread2/* default */.Z)({}, store);
  if (!values) {
    return newStore;
  }
  Object.keys(values).forEach(function (key) {
    var prevValue = newStore[key];
    var value = values[key];
    // If both are object (but target is not array), we use recursion to set deep value
    var recursive = isObject(prevValue) && isObject(value);
    newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : utils_cloneDeep(value); // Clone deep for arrays
  });

  return newStore;
}
function setValues(store) {
  for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restValues[_key - 1] = arguments[_key];
  }
  return restValues.reduce(function (current, newStore) {
    return internalSetValues(current, newStore);
  }, store);
}
function matchNamePath(namePath, changedNamePath) {
  if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
    return false;
  }
  return namePath.every(function (nameUnit, i) {
    return changedNamePath[i] === nameUnit;
  });
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }
  if (!source && target || source && !target) {
    return false;
  }
  if (!source || !target || (0,esm_typeof/* default */.Z)(source) !== 'object' || (0,esm_typeof/* default */.Z)(target) !== 'object') {
    return false;
  }
  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys = new Set([].concat(sourceKeys, targetKeys));
  return (0,toConsumableArray/* default */.Z)(keys).every(function (key) {
    var sourceValue = source[key];
    var targetValue = target[key];
    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }
    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];
  if (event && event.target && (0,esm_typeof/* default */.Z)(event.target) === 'object' && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}
/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */
function valueUtil_move(array, moveIndex, toIndex) {
  var length = array.length;
  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }
  var item = array[moveIndex];
  var diff = moveIndex - toIndex;
  if (diff > 0) {
    // move left
    return [].concat((0,toConsumableArray/* default */.Z)(array.slice(0, toIndex)), [item], (0,toConsumableArray/* default */.Z)(array.slice(toIndex, moveIndex)), (0,toConsumableArray/* default */.Z)(array.slice(moveIndex + 1, length)));
  }
  if (diff < 0) {
    // move right
    return [].concat((0,toConsumableArray/* default */.Z)(array.slice(0, moveIndex)), (0,toConsumableArray/* default */.Z)(array.slice(moveIndex + 1, toIndex + 1)), [item], (0,toConsumableArray/* default */.Z)(array.slice(toIndex + 1, length)));
  }
  return array;
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/validateUtil.js










// Remove incorrect original ts define
var AsyncValidator = Schema;
/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */
function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, function (str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}
var CODE_LOGIC_ERROR = 'CODE_LOGIC_ERROR';
function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */
function _validateRule() {
  _validateRule = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2(name, value, rule, options, messageVariables) {
    var cloneRule, originValidator, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cloneRule = (0,objectSpread2/* default */.Z)({}, rule); // Bug of `async-validator`
          // https://github.com/react-component/field-form/issues/316
          // https://github.com/react-component/field-form/issues/313
          delete cloneRule.ruleIndex;
          if (cloneRule.validator) {
            originValidator = cloneRule.validator;
            cloneRule.validator = function () {
              try {
                return originValidator.apply(void 0, arguments);
              } catch (error) {
                console.error(error);
                return Promise.reject(CODE_LOGIC_ERROR);
              }
            };
          }
          // We should special handle array validate
          subRuleField = null;
          if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
            subRuleField = cloneRule.defaultField;
            delete cloneRule.defaultField;
          }
          validator = new AsyncValidator((0,defineProperty/* default */.Z)({}, name, [cloneRule]));
          messages = setValues({}, defaultValidateMessages, options.validateMessages);
          validator.messages(messages);
          result = [];
          _context2.prev = 9;
          _context2.next = 12;
          return Promise.resolve(validator.validate((0,defineProperty/* default */.Z)({}, name, value), (0,objectSpread2/* default */.Z)({}, options)));
        case 12:
          _context2.next = 17;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](9);
          if (_context2.t0.errors) {
            result = _context2.t0.errors.map(function (_ref4, index) {
              var message = _ref4.message;
              var mergedMessage = message === CODE_LOGIC_ERROR ? messages.default : message;
              return /*#__PURE__*/react.isValidElement(mergedMessage) ? /*#__PURE__*/
              // Wrap ReactNode with `key`
              react.cloneElement(mergedMessage, {
                key: "error_".concat(index)
              }) : mergedMessage;
            });
          }
        case 17:
          if (!(!result.length && subRuleField)) {
            _context2.next = 22;
            break;
          }
          _context2.next = 20;
          return Promise.all(value.map(function (subValue, i) {
            return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
          }));
        case 20:
          subResults = _context2.sent;
          return _context2.abrupt("return", subResults.reduce(function (prev, errors) {
            return [].concat((0,toConsumableArray/* default */.Z)(prev), (0,toConsumableArray/* default */.Z)(errors));
          }, []));
        case 22:
          // Replace message with variables
          kv = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rule), {}, {
            name: name,
            enum: (rule.enum || []).join(', ')
          }, messageVariables);
          fillVariableResult = result.map(function (error) {
            if (typeof error === 'string') {
              return replaceMessage(error, kv);
            }
            return error;
          });
          return _context2.abrupt("return", fillVariableResult);
        case 25:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[9, 14]]);
  }));
  return _validateRule.apply(this, arguments);
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var name = namePath.join('.');
  // Fill rule with context
  var filledRules = rules.map(function (currentRule, ruleIndex) {
    var originValidatorFunc = currentRule.validator;
    var cloneRule = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, currentRule), {}, {
      ruleIndex: ruleIndex
    });
    // Replace validator if needed
    if (originValidatorFunc) {
      cloneRule.validator = function (rule, val, callback) {
        var hasPromise = false;
        // Wrap callback only accept when promise not provided
        var wrappedCallback = function wrappedCallback() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          // Wait a tick to make sure return type is a promise
          Promise.resolve().then(function () {
            (0,warning/* default */.ZP)(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');
            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        };
        // Get promise
        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';
        /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */
        (0,warning/* default */.ZP)(hasPromise, '`callback` is deprecated. Please return a promise instead.');
        if (hasPromise) {
          promise.then(function () {
            callback();
          }).catch(function (err) {
            callback(err || ' ');
          });
        }
      };
    }
    return cloneRule;
  }).sort(function (_ref, _ref2) {
    var w1 = _ref.warningOnly,
      i1 = _ref.ruleIndex;
    var w2 = _ref2.warningOnly,
      i2 = _ref2.ruleIndex;
    if (!!w1 === !!w2) {
      // Let keep origin order
      return i1 - i2;
    }
    if (w1) {
      return 1;
    }
    return -1;
  });
  // Do validate rules
  var summaryPromise;
  if (validateFirst === true) {
    // >>>>> Validate by serialization
    summaryPromise = new Promise( /*#__PURE__*/function () {
      var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(resolve, reject) {
        var i, rule, errors;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              i = 0;
            case 1:
              if (!(i < filledRules.length)) {
                _context.next = 12;
                break;
              }
              rule = filledRules[i];
              _context.next = 5;
              return validateRule(name, value, rule, options, messageVariables);
            case 5:
              errors = _context.sent;
              if (!errors.length) {
                _context.next = 9;
                break;
              }
              reject([{
                errors: errors,
                rule: rule
              }]);
              return _context.abrupt("return");
            case 9:
              i += 1;
              _context.next = 1;
              break;
            case 12:
              /* eslint-enable */
              resolve([]);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());
  } else {
    // >>>>> Validate by parallel
    var rulePromises = filledRules.map(function (rule) {
      return validateRule(name, value, rule, options, messageVariables).then(function (errors) {
        return {
          errors: errors,
          rule: rule
        };
      });
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
      // Always change to rejection for Field to catch
      return Promise.reject(errors);
    });
  }
  // Internal catch error to avoid console error log.
  summaryPromise.catch(function (e) {
    return e;
  });
  return summaryPromise;
}
function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}
function _finishOnAllFailed() {
  _finishOnAllFailed = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee3(rulePromises) {
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
            var _ref5;
            var errors = (_ref5 = []).concat.apply(_ref5, (0,toConsumableArray/* default */.Z)(errorsList));
            return errors;
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}
function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}
function _finishOnFirstFailed() {
  _finishOnFirstFailed = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee4(rulePromises) {
    var count;
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          count = 0;
          return _context4.abrupt("return", new Promise(function (resolve) {
            rulePromises.forEach(function (promise) {
              promise.then(function (ruleError) {
                if (ruleError.errors.length) {
                  resolve([ruleError]);
                }
                count += 1;
                if (count === rulePromises.length) {
                  resolve([]);
                }
              });
            });
          }));
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/Field.js










var _excluded = ["name"];







var EMPTY_ERRORS = [];
function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(prev, next, 'source' in info ? {
      source: info.source
    } : {});
  }
  return prevValue !== nextValue;
}
// We use Class instead of Hooks here since it will cost much code by using Hooks.
var Field = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Field, _React$Component);
  var _super = (0,createSuper/* default */.Z)(Field);
  /**
   * Follow state should not management in State since it will async update by React.
   * This makes first render of form can not get correct state value.
   */

  /**
   * Mark when touched & validated. Currently only used for `dependencies`.
   * Note that we do not think field with `initialValue` is dirty
   * but this will be by `isFieldDirty` func.
   */

  // ============================== Subscriptions ==============================
  function Field(props) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, Field);
    _this = _super.call(this, props);
    // Register on init
    _this.state = {
      resetCount: 0
    };
    _this.cancelRegisterFunc = null;
    _this.mounted = false;
    _this.touched = false;
    _this.dirty = false;
    _this.validatePromise = null;
    _this.prevValidating = void 0;
    _this.errors = EMPTY_ERRORS;
    _this.warnings = EMPTY_ERRORS;
    _this.cancelRegister = function () {
      var _this$props = _this.props,
        preserve = _this$props.preserve,
        isListField = _this$props.isListField,
        name = _this$props.name;
      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
      }
      _this.cancelRegisterFunc = null;
    };
    _this.getNamePath = function () {
      var _this$props2 = _this.props,
        name = _this$props2.name,
        fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName,
        prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== undefined ? [].concat((0,toConsumableArray/* default */.Z)(prefixName), (0,toConsumableArray/* default */.Z)(name)) : [];
    };
    _this.getRules = function () {
      var _this$props3 = _this.props,
        _this$props3$rules = _this$props3.rules,
        rules = _this$props3$rules === void 0 ? [] : _this$props3$rules,
        fieldContext = _this$props3.fieldContext;
      return rules.map(function (rule) {
        if (typeof rule === 'function') {
          return rule(fieldContext);
        }
        return rule;
      });
    };
    _this.refresh = function () {
      if (!_this.mounted) return;
      /**
       * Clean up current node.
       */
      _this.setState(function (_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    };
    _this.triggerMetaEvent = function (destroy) {
      var onMetaChange = _this.props.onMetaChange;
      onMetaChange === null || onMetaChange === void 0 ? void 0 : onMetaChange((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.getMeta()), {}, {
        destroy: destroy
      }));
    };
    _this.onStoreChange = function (prevStore, namePathList, info) {
      var _this$props4 = _this.props,
        shouldUpdate = _this$props4.shouldUpdate,
        _this$props4$dependen = _this$props4.dependencies,
        dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen,
        onReset = _this$props4.onReset;
      var store = info.store;
      var namePath = _this.getNamePath();
      var prevValue = _this.getValue(prevStore);
      var curValue = _this.getValue(store);
      var namePathMatch = namePathList && containsNamePath(namePathList, namePath);
      // `setFieldsValue` is a quick access to update related status
      if (info.type === 'valueUpdate' && info.source === 'external' && prevValue !== curValue) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;
        _this.triggerMetaEvent();
      }
      switch (info.type) {
        case 'reset':
          if (!namePathList || namePathMatch) {
            // Clean up state
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = null;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;
            _this.triggerMetaEvent();
            onReset === null || onReset === void 0 ? void 0 : onReset();
            _this.refresh();
            return;
          }
          break;
        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case 'remove':
          {
            if (shouldUpdate) {
              _this.reRender();
              return;
            }
            break;
          }
        case 'setField':
          {
            if (namePathMatch) {
              var data = info.data;
              if ('touched' in data) {
                _this.touched = data.touched;
              }
              if ('validating' in data && !('originRCField' in data)) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }
              if ('errors' in data) {
                _this.errors = data.errors || EMPTY_ERRORS;
              }
              if ('warnings' in data) {
                _this.warnings = data.warnings || EMPTY_ERRORS;
              }
              _this.dirty = true;
              _this.triggerMetaEvent();
              _this.reRender();
              return;
            }
            // Handle update by `setField` with `shouldUpdate`
            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();
              return;
            }
            break;
          }
        case 'dependenciesUpdate':
          {
            /**
             * Trigger when marked `dependencies` updated. Related fields will all update
             */
            var dependencyList = dependencies.map(getNamePath);
            // No need for `namePathMath` check and `shouldUpdate` check, since `valueUpdate` will be
            // emitted earlier and they will work there
            // If set it may cause unnecessary twice rerendering
            if (dependencyList.some(function (dependency) {
              return containsNamePath(info.relatedFields, dependency);
            })) {
              _this.reRender();
              return;
            }
            break;
          }
        default:
          // 1. If `namePath` exists in `namePathList`, means it's related value and should update
          //      For example <List name="list"><Field name={['list', 0]}></List>
          //      If `namePathList` is [['list']] (List value update), Field should be updated
          //      If `namePathList` is [['list', 0]] (Field value update), List shouldn't be updated
          // 2.
          //   2.1 If `dependencies` is set, `name` is not set and `shouldUpdate` is not set,
          //       don't use `shouldUpdate`. `dependencies` is view as a shortcut if `shouldUpdate`
          //       is not provided
          //   2.2 If `shouldUpdate` provided, use customize logic to update the field
          //       else to check if value changed
          if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();
            return;
          }
          break;
      }
      if (shouldUpdate === true) {
        _this.reRender();
      }
    };
    _this.validateRules = function (options) {
      // We should fixed namePath & value to avoid developer change then by form function
      var namePath = _this.getNamePath();
      var currentValue = _this.getValue();
      // Force change to async to avoid rule OOD under renderProps field
      var rootPromise = Promise.resolve().then(function () {
        if (!_this.mounted) {
          return [];
        }
        var _this$props5 = _this.props,
          _this$props5$validate = _this$props5.validateFirst,
          validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate,
          messageVariables = _this$props5.messageVariables;
        var _ref2 = options || {},
          triggerName = _ref2.triggerName;
        var filteredRules = _this.getRules();
        if (triggerName) {
          filteredRules = filteredRules.filter(function (rule) {
            return rule;
          }).filter(function (rule) {
            var validateTrigger = rule.validateTrigger;
            if (!validateTrigger) {
              return true;
            }
            var triggerList = typeUtil_toArray(validateTrigger);
            return triggerList.includes(triggerName);
          });
        }
        var promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
        promise.catch(function (e) {
          return e;
        }).then(function () {
          var ruleErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EMPTY_ERRORS;
          if (_this.validatePromise === rootPromise) {
            var _ruleErrors$forEach;
            _this.validatePromise = null;
            // Get errors & warnings
            var nextErrors = [];
            var nextWarnings = [];
            (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function (_ref3) {
              var warningOnly = _ref3.rule.warningOnly,
                _ref3$errors = _ref3.errors,
                errors = _ref3$errors === void 0 ? EMPTY_ERRORS : _ref3$errors;
              if (warningOnly) {
                nextWarnings.push.apply(nextWarnings, (0,toConsumableArray/* default */.Z)(errors));
              } else {
                nextErrors.push.apply(nextErrors, (0,toConsumableArray/* default */.Z)(errors));
              }
            });
            _this.errors = nextErrors;
            _this.warnings = nextWarnings;
            _this.triggerMetaEvent();
            _this.reRender();
          }
        });
        return promise;
      });
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = EMPTY_ERRORS;
      _this.warnings = EMPTY_ERRORS;
      _this.triggerMetaEvent();
      // Force trigger re-render since we need sync renderProps with new meta
      _this.reRender();
      return rootPromise;
    };
    _this.isFieldValidating = function () {
      return !!_this.validatePromise;
    };
    _this.isFieldTouched = function () {
      return _this.touched;
    };
    _this.isFieldDirty = function () {
      // Touched or validate or has initialValue
      if (_this.dirty || _this.props.initialValue !== undefined) {
        return true;
      }
      // Form set initialValue
      var fieldContext = _this.props.fieldContext;
      var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK),
        getInitialValue = _fieldContext$getInte.getInitialValue;
      if (getInitialValue(_this.getNamePath()) !== undefined) {
        return true;
      }
      return false;
    };
    _this.getErrors = function () {
      return _this.errors;
    };
    _this.getWarnings = function () {
      return _this.warnings;
    };
    _this.isListField = function () {
      return _this.props.isListField;
    };
    _this.isList = function () {
      return _this.props.isList;
    };
    _this.isPreserve = function () {
      return _this.props.preserve;
    };
    _this.getMeta = function () {
      // Make error & validating in cache to save perf
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        warnings: _this.warnings,
        name: _this.getNamePath()
      };
      return meta;
    };
    _this.getOnlyChild = function (children) {
      // Support render props
      if (typeof children === 'function') {
        var meta = _this.getMeta();
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.getOnlyChild(children(_this.getControlled(), meta, _this.props.fieldContext))), {}, {
          isFunction: true
        });
      }
      // Filed element only
      var childList = (0,toArray/* default */.Z)(children);
      if (childList.length !== 1 || ! /*#__PURE__*/react.isValidElement(childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }
      return {
        child: childList[0],
        isFunction: false
      };
    };
    _this.getValue = function (store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;
      var namePath = _this.getNamePath();
      return valueUtil_getValue(store || getFieldsValue(true), namePath);
    };
    _this.getControlled = function () {
      var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props6 = _this.props,
        trigger = _this$props6.trigger,
        validateTrigger = _this$props6.validateTrigger,
        getValueFromEvent = _this$props6.getValueFromEvent,
        normalize = _this$props6.normalize,
        valuePropName = _this$props6.valuePropName,
        getValueProps = _this$props6.getValueProps,
        fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : fieldContext.validateTrigger;
      var namePath = _this.getNamePath();
      var getInternalHooks = fieldContext.getInternalHooks,
        getFieldsValue = fieldContext.getFieldsValue;
      var _getInternalHooks = getInternalHooks(HOOK_MARK),
        dispatch = _getInternalHooks.dispatch;
      var value = _this.getValue();
      var mergedGetValueProps = getValueProps || function (val) {
        return (0,defineProperty/* default */.Z)({}, valuePropName, val);
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var originTriggerFunc = childProps[trigger];
      var control = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, childProps), mergedGetValueProps(value));
      // Add trigger
      control[trigger] = function () {
        // Mark as touched
        _this.touched = true;
        _this.dirty = true;
        _this.triggerMetaEvent();
        var newValue;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
        }
        if (normalize) {
          newValue = normalize(newValue, value, getFieldsValue(true));
        }
        dispatch({
          type: 'updateValue',
          namePath: namePath,
          value: newValue
        });
        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      };
      // Add validateTrigger
      var validateTriggerList = typeUtil_toArray(mergedValidateTrigger || []);
      validateTriggerList.forEach(function (triggerName) {
        // Wrap additional function of component, so that we can get latest value from store
        var originTrigger = control[triggerName];
        control[triggerName] = function () {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          }
          // Always use latest rules
          var rules = _this.props.rules;
          if (rules && rules.length) {
            // We dispatch validate to root,
            // since it will update related data with other field with same name
            dispatch({
              type: 'validateField',
              namePath: namePath,
              triggerName: triggerName
            });
          }
        };
      });
      return control;
    };
    if (props.fieldContext) {
      var getInternalHooks = props.fieldContext.getInternalHooks;
      var _getInternalHooks2 = getInternalHooks(HOOK_MARK),
        initEntityValue = _getInternalHooks2.initEntityValue;
      initEntityValue((0,assertThisInitialized/* default */.Z)(_this));
    }
    return _this;
  }
  (0,createClass/* default */.Z)(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
        shouldUpdate = _this$props7.shouldUpdate,
        fieldContext = _this$props7.fieldContext;
      this.mounted = true;
      // Register on init
      if (fieldContext) {
        var getInternalHooks = fieldContext.getInternalHooks;
        var _getInternalHooks3 = getInternalHooks(HOOK_MARK),
          registerField = _getInternalHooks3.registerField;
        this.cancelRegisterFunc = registerField(this);
      }
      // One more render for component in case fields not ready
      if (shouldUpdate === true) {
        this.reRender();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRegister();
      this.triggerMetaEvent(true);
      this.mounted = false;
    }
  }, {
    key: "reRender",
    value: function reRender() {
      if (!this.mounted) return;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var resetCount = this.state.resetCount;
      var children = this.props.children;
      var _this$getOnlyChild = this.getOnlyChild(children),
        child = _this$getOnlyChild.child,
        isFunction = _this$getOnlyChild.isFunction;
      // Not need to `cloneElement` since user can handle this in render function self
      var returnChildNode;
      if (isFunction) {
        returnChildNode = child;
      } else if ( /*#__PURE__*/react.isValidElement(child)) {
        returnChildNode = /*#__PURE__*/react.cloneElement(child, this.getControlled(child.props));
      } else {
        (0,warning/* default */.ZP)(!child, '`children` of Field is not validate ReactElement.');
        returnChildNode = child;
      }
      return /*#__PURE__*/react.createElement(react.Fragment, {
        key: resetCount
      }, returnChildNode);
    }
  }]);
  return Field;
}(react.Component);
Field.contextType = FieldContext;
Field.defaultProps = {
  trigger: 'onChange',
  valuePropName: 'value'
};
function WrapperField(_ref5) {
  var name = _ref5.name,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref5, _excluded);
  var fieldContext = react.useContext(FieldContext);
  var namePath = name !== undefined ? getNamePath(name) : undefined;
  var key = 'keep';
  if (!restProps.isListField) {
    key = "_".concat((namePath || []).join('_'));
  }
  // Warning if it's a directly list field.
  // We can still support multiple level field preserve.
  if (false) {}
  return /*#__PURE__*/react.createElement(Field, (0,esm_extends/* default */.Z)({
    key: key,
    name: namePath
  }, restProps, {
    fieldContext: fieldContext
  }));
}
/* harmony default export */ var es_Field = (WrapperField);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/ListContext.js

var ListContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var es_ListContext = (ListContext);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/List.js








var List = function List(_ref) {
  var name = _ref.name,
    initialValue = _ref.initialValue,
    children = _ref.children,
    rules = _ref.rules,
    validateTrigger = _ref.validateTrigger;
  var context = react.useContext(FieldContext);
  var keyRef = react.useRef({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current;
  var prefixName = react.useMemo(function () {
    var parentPrefixName = getNamePath(context.prefixName) || [];
    return [].concat((0,toConsumableArray/* default */.Z)(parentPrefixName), (0,toConsumableArray/* default */.Z)(getNamePath(name)));
  }, [context.prefixName, name]);
  var fieldContext = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, context), {}, {
      prefixName: prefixName
    });
  }, [context, prefixName]);
  // List context
  var listContext = react.useMemo(function () {
    return {
      getKey: function getKey(namePath) {
        var len = prefixName.length;
        var pathName = namePath[len];
        return [keyManager.keys[pathName], namePath.slice(len + 1)];
      }
    };
  }, [prefixName]);
  // User should not pass `children` as other type.
  if (typeof children !== 'function') {
    (0,warning/* default */.ZP)(false, 'Form.List only accepts function as children.');
    return null;
  }
  var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
    var source = _ref2.source;
    if (source === 'internal') {
      return false;
    }
    return prevValue !== nextValue;
  };
  return /*#__PURE__*/react.createElement(es_ListContext.Provider, {
    value: listContext
  }, /*#__PURE__*/react.createElement(FieldContext.Provider, {
    value: fieldContext
  }, /*#__PURE__*/react.createElement(es_Field, {
    name: [],
    shouldUpdate: shouldUpdate,
    rules: rules,
    validateTrigger: validateTrigger,
    initialValue: initialValue,
    isList: true
  }, function (_ref3, meta) {
    var _ref3$value = _ref3.value,
      value = _ref3$value === void 0 ? [] : _ref3$value,
      onChange = _ref3.onChange;
    var getFieldValue = context.getFieldValue;
    var getNewValue = function getNewValue() {
      var values = getFieldValue(prefixName || []);
      return values || [];
    };
    /**
     * Always get latest value in case user update fields by `form` api.
     */
    var operations = {
      add: function add(defaultValue, index) {
        // Mapping keys
        var newValue = getNewValue();
        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [].concat((0,toConsumableArray/* default */.Z)(keyManager.keys.slice(0, index)), [keyManager.id], (0,toConsumableArray/* default */.Z)(keyManager.keys.slice(index)));
          onChange([].concat((0,toConsumableArray/* default */.Z)(newValue.slice(0, index)), [defaultValue], (0,toConsumableArray/* default */.Z)(newValue.slice(index))));
        } else {
          if (false) {}
          keyManager.keys = [].concat((0,toConsumableArray/* default */.Z)(keyManager.keys), [keyManager.id]);
          onChange([].concat((0,toConsumableArray/* default */.Z)(newValue), [defaultValue]));
        }
        keyManager.id += 1;
      },
      remove: function remove(index) {
        var newValue = getNewValue();
        var indexSet = new Set(Array.isArray(index) ? index : [index]);
        if (indexSet.size <= 0) {
          return;
        }
        keyManager.keys = keyManager.keys.filter(function (_, keysIndex) {
          return !indexSet.has(keysIndex);
        });
        // Trigger store change
        onChange(newValue.filter(function (_, valueIndex) {
          return !indexSet.has(valueIndex);
        }));
      },
      move: function move(from, to) {
        if (from === to) {
          return;
        }
        var newValue = getNewValue();
        // Do not handle out of range
        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }
        keyManager.keys = valueUtil_move(keyManager.keys, from, to);
        // Trigger store change
        onChange(valueUtil_move(newValue, from, to));
      }
    };
    var listValue = value || [];
    if (!Array.isArray(listValue)) {
      listValue = [];
      if (false) {}
    }
    return children(listValue.map(function (__, index) {
      var key = keyManager.keys[index];
      if (key === undefined) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }
      return {
        name: index,
        key: key,
        isListField: true
      };
    }), operations, meta);
  })));
};
/* harmony default export */ var es_List = (List);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/asyncUtil.js
function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise(function (resolve, reject) {
    promiseList.forEach(function (promise, index) {
      promise.catch(function (e) {
        hasError = true;
        return e;
      }).then(function (result) {
        count -= 1;
        results[index] = result;
        if (count > 0) {
          return;
        }
        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/NameMap.js





var SPLIT = '__@field_split__';
/**
 * Convert name path into string to fast the fetch speed of Map.
 */
function normalize(namePath) {
  return namePath.map(function (cell) {
    return "".concat((0,esm_typeof/* default */.Z)(cell), ":").concat(cell);
  })
  // Magic split
  .join(SPLIT);
}
/**
 * NameMap like a `Map` but accepts `string[]` as key.
 */
var NameMap = /*#__PURE__*/function () {
  function NameMap() {
    (0,classCallCheck/* default */.Z)(this, NameMap);
    this.kvs = new Map();
  }
  (0,createClass/* default */.Z)(NameMap, [{
    key: "set",
    value: function set(key, value) {
      this.kvs.set(normalize(key), value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.kvs.get(normalize(key));
    }
  }, {
    key: "update",
    value: function update(key, updater) {
      var origin = this.get(key);
      var next = updater(origin);
      if (!next) {
        this.delete(key);
      } else {
        this.set(key, next);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.kvs.delete(normalize(key));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function map(callback) {
      return (0,toConsumableArray/* default */.Z)(this.kvs.entries()).map(function (_ref) {
        var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        var cells = key.split(SPLIT);
        return callback({
          key: cells.map(function (cell) {
            var _cell$match = cell.match(/^([^:]*):(.*)$/),
              _cell$match2 = (0,slicedToArray/* default */.Z)(_cell$match, 3),
              type = _cell$match2[1],
              unit = _cell$match2[2];
            return type === 'number' ? Number(unit) : unit;
          }),
          value: value
        });
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};
      this.map(function (_ref3) {
        var key = _ref3.key,
          value = _ref3.value;
        json[key.join('.')] = value;
        return null;
      });
      return json;
    }
  }]);
  return NameMap;
}();
/* harmony default export */ var utils_NameMap = (NameMap);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/useForm.js






var useForm_excluded = ["name", "errors"];








var FormStore = /*#__PURE__*/(0,createClass/* default */.Z)(function FormStore(forceRootUpdate) {
  var _this = this;
  (0,classCallCheck/* default */.Z)(this, FormStore);
  this.formHooked = false;
  this.forceRootUpdate = void 0;
  this.subscribable = true;
  this.store = {};
  this.fieldEntities = [];
  this.initialValues = {};
  this.callbacks = {};
  this.validateMessages = null;
  this.preserve = null;
  this.lastValidatePromise = null;
  this.getForm = function () {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldWarning: _this.getFieldWarning,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldValue: _this.setFieldValue,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      _init: true,
      getInternalHooks: _this.getInternalHooks
    };
  };
  this.getInternalHooks = function (key) {
    if (key === HOOK_MARK) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        destroyForm: _this.destroyForm,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve,
        getInitialValue: _this.getInitialValue,
        registerWatch: _this.registerWatch
      };
    }
    (0,warning/* default */.ZP)(false, '`getInternalHooks` is internal usage. Should not call directly.');
    return null;
  };
  this.useSubscribe = function (subscribable) {
    _this.subscribable = subscribable;
  };
  this.prevWithoutPreserves = null;
  this.setInitialValues = function (initialValues, init) {
    _this.initialValues = initialValues || {};
    if (init) {
      var _this$prevWithoutPres;
      var nextStore = setValues({}, initialValues, _this.store);
      // We will take consider prev form unmount fields.
      // When the field is not `preserve`, we need fill this with initialValues instead of store.
      // eslint-disable-next-line array-callback-return
      (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 ? void 0 : _this$prevWithoutPres.map(function (_ref) {
        var namePath = _ref.key;
        nextStore = setValue(nextStore, namePath, valueUtil_getValue(initialValues, namePath));
      });
      _this.prevWithoutPreserves = null;
      _this.updateStore(nextStore);
    }
  };
  this.destroyForm = function () {
    var prevWithoutPreserves = new utils_NameMap();
    _this.getFieldEntities(true).forEach(function (entity) {
      if (!_this.isMergedPreserve(entity.isPreserve())) {
        prevWithoutPreserves.set(entity.getNamePath(), true);
      }
    });
    _this.prevWithoutPreserves = prevWithoutPreserves;
  };
  this.getInitialValue = function (namePath) {
    var initValue = valueUtil_getValue(_this.initialValues, namePath);
    // Not cloneDeep when without `namePath`
    return namePath.length ? utils_cloneDeep(initValue) : initValue;
  };
  this.setCallbacks = function (callbacks) {
    _this.callbacks = callbacks;
  };
  this.setValidateMessages = function (validateMessages) {
    _this.validateMessages = validateMessages;
  };
  this.setPreserve = function (preserve) {
    _this.preserve = preserve;
  };
  this.watchList = [];
  this.registerWatch = function (callback) {
    _this.watchList.push(callback);
    return function () {
      _this.watchList = _this.watchList.filter(function (fn) {
        return fn !== callback;
      });
    };
  };
  this.notifyWatch = function () {
    var namePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    // No need to cost perf when nothing need to watch
    if (_this.watchList.length) {
      var values = _this.getFieldsValue();
      _this.watchList.forEach(function (callback) {
        callback(values, namePath);
      });
    }
  };
  this.timeoutId = null;
  this.warningUnhooked = function () {
    if (false) {}
  };
  this.updateStore = function (nextStore) {
    _this.store = nextStore;
  };
  this.getFieldEntities = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (!pure) {
      return _this.fieldEntities;
    }
    return _this.fieldEntities.filter(function (field) {
      return field.getNamePath().length;
    });
  };
  this.getFieldsMap = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var cache = new utils_NameMap();
    _this.getFieldEntities(pure).forEach(function (field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });
    return cache;
  };
  this.getFieldEntitiesForNamePathList = function (nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }
    var cache = _this.getFieldsMap(true);
    return nameList.map(function (name) {
      var namePath = getNamePath(name);
      return cache.get(namePath) || {
        INVALIDATE_NAME_PATH: getNamePath(name)
      };
    });
  };
  this.getFieldsValue = function (nameList, filterFunc) {
    _this.warningUnhooked();
    if (nameList === true && !filterFunc) {
      return _this.store;
    }
    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(nameList) ? nameList : null);
    var filteredNameList = [];
    fieldEntities.forEach(function (entity) {
      var _entity$isListField;
      var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();
      // Ignore when it's a list item and not specific the namePath,
      // since parent field is already take in count
      if (!nameList && ((_entity$isListField = entity.isListField) === null || _entity$isListField === void 0 ? void 0 : _entity$isListField.call(entity))) {
        return;
      }
      if (!filterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = 'getMeta' in entity ? entity.getMeta() : null;
        if (filterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
  };
  this.getFieldValue = function (name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    return valueUtil_getValue(_this.store, namePath);
  };
  this.getFieldsError = function (nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
    return fieldEntities.map(function (entity, index) {
      if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
          warnings: entity.getWarnings()
        };
      }
      return {
        name: getNamePath(nameList[index]),
        errors: [],
        warnings: []
      };
    });
  };
  this.getFieldError = function (name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.errors;
  };
  this.getFieldWarning = function (name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.warnings;
  };
  this.isFieldsTouched = function () {
    _this.warningUnhooked();
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var arg0 = args[0],
      arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;
    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }
    var fieldEntities = _this.getFieldEntities(true);
    var isFieldTouched = function isFieldTouched(field) {
      return field.isFieldTouched();
    };
    // ===== Will get fully compare when not config namePathList =====
    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
    }
    // Generate a nest tree for validate
    var map = new utils_NameMap();
    namePathList.forEach(function (shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function (field) {
      var fieldNamePath = field.getNamePath();
      // Find matched entity and put into list
      namePathList.forEach(function (shortNamePath) {
        if (shortNamePath.every(function (nameUnit, i) {
          return fieldNamePath[i] === nameUnit;
        })) {
          map.update(shortNamePath, function (list) {
            return [].concat((0,toConsumableArray/* default */.Z)(list), [field]);
          });
        }
      });
    });
    // Check if NameMap value is touched
    var isNamePathListTouched = function isNamePathListTouched(entities) {
      return entities.some(isFieldTouched);
    };
    var namePathListEntities = map.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  };
  this.isFieldTouched = function (name) {
    _this.warningUnhooked();
    return _this.isFieldsTouched([name]);
  };
  this.isFieldsValidating = function (nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntities();
    if (!nameList) {
      return fieldEntities.some(function (testField) {
        return testField.isFieldValidating();
      });
    }
    var namePathList = nameList.map(getNamePath);
    return fieldEntities.some(function (testField) {
      var fieldNamePath = testField.getNamePath();
      return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  };
  this.isFieldValidating = function (name) {
    _this.warningUnhooked();
    return _this.isFieldsValidating([name]);
  };
  this.resetWithFieldInitialValue = function () {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // Create cache
    var cache = new utils_NameMap();
    var fieldEntities = _this.getFieldEntities(true);
    fieldEntities.forEach(function (field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath();
      // Record only if has `initialValue`
      if (initialValue !== undefined) {
        var records = cache.get(namePath) || new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    });
    // Reset
    var resetWithFields = function resetWithFields(entities) {
      entities.forEach(function (field) {
        var initialValue = field.props.initialValue;
        if (initialValue !== undefined) {
          var namePath = field.getNamePath();
          var formInitialValue = _this.getInitialValue(namePath);
          if (formInitialValue !== undefined) {
            // Warning if conflict with form initialValues and do not modify value
            (0,warning/* default */.ZP)(false, "Form already set 'initialValues' with path '".concat(namePath.join('.'), "'. Field can not overwrite it."));
          } else {
            var records = cache.get(namePath);
            if (records && records.size > 1) {
              // Warning if multiple field set `initialValue`and do not modify value
              (0,warning/* default */.ZP)(false, "Multiple Field with path '".concat(namePath.join('.'), "' set 'initialValue'. Can not decide which one to pick."));
            } else if (records) {
              var originValue = _this.getFieldValue(namePath);
              // Set `initialValue`
              if (!info.skipExist || originValue === undefined) {
                _this.updateStore(setValue(_this.store, namePath, (0,toConsumableArray/* default */.Z)(records)[0].value));
              }
            }
          }
        }
      });
    };
    var requiredFieldEntities;
    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function (namePath) {
        var records = cache.get(namePath);
        if (records) {
          var _requiredFieldEntitie;
          (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, (0,toConsumableArray/* default */.Z)((0,toConsumableArray/* default */.Z)(records).map(function (r) {
            return r.entity;
          })));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }
    resetWithFields(requiredFieldEntities);
  };
  this.resetFields = function (nameList) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (!nameList) {
      _this.updateStore(setValues({}, _this.initialValues));
      _this.resetWithFieldInitialValue();
      _this.notifyObservers(prevStore, null, {
        type: 'reset'
      });
      _this.notifyWatch();
      return;
    }
    // Reset by `nameList`
    var namePathList = nameList.map(getNamePath);
    namePathList.forEach(function (namePath) {
      var initialValue = _this.getInitialValue(namePath);
      _this.updateStore(setValue(_this.store, namePath, initialValue));
    });
    _this.resetWithFieldInitialValue({
      namePathList: namePathList
    });
    _this.notifyObservers(prevStore, namePathList, {
      type: 'reset'
    });
    _this.notifyWatch(namePathList);
  };
  this.setFields = function (fields) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    var namePathList = [];
    fields.forEach(function (fieldData) {
      var name = fieldData.name,
        errors = fieldData.errors,
        data = (0,objectWithoutProperties/* default */.Z)(fieldData, useForm_excluded);
      var namePath = getNamePath(name);
      namePathList.push(namePath);
      // Value
      if ('value' in data) {
        _this.updateStore(setValue(_this.store, namePath, data.value));
      }
      _this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData
      });
    });
    _this.notifyWatch(namePathList);
  };
  this.getFields = function () {
    var entities = _this.getFieldEntities(true);
    var fields = entities.map(function (field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();
      var fieldData = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, meta), {}, {
        name: namePath,
        value: _this.getFieldValue(namePath)
      });
      Object.defineProperty(fieldData, 'originRCField', {
        value: true
      });
      return fieldData;
    });
    return fields;
  };
  this.initEntityValue = function (entity) {
    var initialValue = entity.props.initialValue;
    if (initialValue !== undefined) {
      var namePath = entity.getNamePath();
      var prevValue = valueUtil_getValue(_this.store, namePath);
      if (prevValue === undefined) {
        _this.updateStore(setValue(_this.store, namePath, initialValue));
      }
    }
  };
  this.isMergedPreserve = function (fieldPreserve) {
    var mergedPreserve = fieldPreserve !== undefined ? fieldPreserve : _this.preserve;
    return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
  };
  this.registerField = function (entity) {
    _this.fieldEntities.push(entity);
    var namePath = entity.getNamePath();
    _this.notifyWatch([namePath]);
    // Set initial values
    if (entity.props.initialValue !== undefined) {
      var prevStore = _this.store;
      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });
      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: 'valueUpdate',
        source: 'internal'
      });
    }
    // un-register field callback
    return function (isListField, preserve) {
      var subNamePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      _this.fieldEntities = _this.fieldEntities.filter(function (item) {
        return item !== entity;
      });
      // Clean up store value if not preserve
      if (!_this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
        var defaultValue = isListField ? undefined : _this.getInitialValue(namePath);
        if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function (field) {
          return (
            // Only reset when no namePath exist
            !matchNamePath(field.getNamePath(), namePath)
          );
        })) {
          var _prevStore = _this.store;
          _this.updateStore(setValue(_prevStore, namePath, defaultValue, true));
          // Notify that field is unmount
          _this.notifyObservers(_prevStore, [namePath], {
            type: 'remove'
          });
          // Dependencies update
          _this.triggerDependenciesUpdate(_prevStore, namePath);
        }
      }
      _this.notifyWatch([namePath]);
    };
  };
  this.dispatch = function (action) {
    switch (action.type) {
      case 'updateValue':
        {
          var namePath = action.namePath,
            value = action.value;
          _this.updateValue(namePath, value);
          break;
        }
      case 'validateField':
        {
          var _namePath = action.namePath,
            triggerName = action.triggerName;
          _this.validateFields([_namePath], {
            triggerName: triggerName
          });
          break;
        }
      default:
      // Currently we don't have other action. Do nothing.
    }
  };

  this.notifyObservers = function (prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, info), {}, {
        store: _this.getFieldsValue(true)
      });
      _this.getFieldEntities().forEach(function (_ref3) {
        var onStoreChange = _ref3.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  };
  this.triggerDependenciesUpdate = function (prevStore, namePath) {
    var childrenFields = _this.getDependencyChildrenFields(namePath);
    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }
    _this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath].concat((0,toConsumableArray/* default */.Z)(childrenFields))
    });
    return childrenFields;
  };
  this.updateValue = function (name, value) {
    var namePath = getNamePath(name);
    var prevStore = _this.store;
    _this.updateStore(setValue(_this.store, namePath, value));
    _this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal'
    });
    _this.notifyWatch([namePath]);
    // Dependencies update
    var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath);
    // trigger callback function
    var onValuesChange = _this.callbacks.onValuesChange;
    if (onValuesChange) {
      var changedValues = cloneByNamePathList(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }
    _this.triggerOnFieldsChange([namePath].concat((0,toConsumableArray/* default */.Z)(childrenFields)));
  };
  this.setFieldsValue = function (store) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (store) {
      var nextStore = setValues(_this.store, store);
      _this.updateStore(nextStore);
    }
    _this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external'
    });
    _this.notifyWatch();
  };
  this.setFieldValue = function (name, value) {
    _this.setFields([{
      name: name,
      value: value
    }]);
  };
  this.getDependencyChildrenFields = function (rootNamePath) {
    var children = new Set();
    var childrenFields = [];
    var dependencies2fields = new utils_NameMap();
    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */
    _this.getFieldEntities().forEach(function (field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function (dependency) {
        var dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, function () {
          var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
          fields.add(field);
          return fields;
        });
      });
    });
    var fillChildren = function fillChildren(namePath) {
      var fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(function (field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();
          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };
    fillChildren(rootNamePath);
    return childrenFields;
  };
  this.triggerOnFieldsChange = function (namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;
    if (onFieldsChange) {
      var fields = _this.getFields();
      /**
       * Fill errors since `fields` may be replaced by controlled fields
       */
      if (filedErrors) {
        var cache = new utils_NameMap();
        filedErrors.forEach(function (_ref4) {
          var name = _ref4.name,
            errors = _ref4.errors;
          cache.set(name, errors);
        });
        fields.forEach(function (field) {
          // eslint-disable-next-line no-param-reassign
          field.errors = cache.get(field.name) || field.errors;
        });
      }
      var changedFields = fields.filter(function (_ref5) {
        var fieldName = _ref5.name;
        return containsNamePath(namePathList, fieldName);
      });
      onFieldsChange(changedFields, fields);
    }
  };
  this.validateFields = function (nameList, options) {
    _this.warningUnhooked();
    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(getNamePath) : [];
    // Collect result in promise list
    var promiseList = [];
    _this.getFieldEntities(true).forEach(function (field) {
      // Add field if not provide `nameList`
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }
      /**
       * Recursive validate if configured.
       * TODO: perf improvement @zombieJ
       */
      if ((options === null || options === void 0 ? void 0 : options.recursive) && provideNameList) {
        var namePath = field.getNamePath();
        if (
        // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        namePath.every(function (nameUnit, i) {
          return nameList[i] === nameUnit || nameList[i] === undefined;
        })) {
          namePathList.push(namePath);
        }
      }
      // Skip if without rule
      if (!field.props.rules || !field.props.rules.length) {
        return;
      }
      var fieldNamePath = field.getNamePath();
      // Add field validate rule in to promise list
      if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
        var promise = field.validateRules((0,objectSpread2/* default */.Z)({
          validateMessages: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultValidateMessages), _this.validateMessages)
        }, options));
        // Wrap promise with field
        promiseList.push(promise.then(function () {
          return {
            name: fieldNamePath,
            errors: [],
            warnings: []
          };
        }).catch(function (ruleErrors) {
          var _ruleErrors$forEach;
          var mergedErrors = [];
          var mergedWarnings = [];
          (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function (_ref6) {
            var warningOnly = _ref6.rule.warningOnly,
              errors = _ref6.errors;
            if (warningOnly) {
              mergedWarnings.push.apply(mergedWarnings, (0,toConsumableArray/* default */.Z)(errors));
            } else {
              mergedErrors.push.apply(mergedErrors, (0,toConsumableArray/* default */.Z)(errors));
            }
          });
          if (mergedErrors.length) {
            return Promise.reject({
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }
          return {
            name: fieldNamePath,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    });
    var summaryPromise = allPromiseFinish(promiseList);
    _this.lastValidatePromise = summaryPromise;
    // Notify fields with rule that validate has finished and need update
    summaryPromise.catch(function (results) {
      return results;
    }).then(function (results) {
      var resultNamePathList = results.map(function (_ref7) {
        var name = _ref7.name;
        return name;
      });
      _this.notifyObservers(_this.store, resultNamePathList, {
        type: 'validateFinish'
      });
      _this.triggerOnFieldsChange(resultNamePathList, results);
    });
    var returnPromise = summaryPromise.then(function () {
      if (_this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(_this.getFieldsValue(namePathList));
      }
      return Promise.reject([]);
    }).catch(function (results) {
      var errorList = results.filter(function (result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: _this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: _this.lastValidatePromise !== summaryPromise
      });
    });
    // Do not throw in console
    returnPromise.catch(function (e) {
      return e;
    });
    return returnPromise;
  };
  this.submit = function () {
    _this.warningUnhooked();
    _this.validateFields().then(function (values) {
      var onFinish = _this.callbacks.onFinish;
      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          // Should print error if user `onFinish` callback failed
          console.error(err);
        }
      }
    }).catch(function (e) {
      var onFinishFailed = _this.callbacks.onFinishFailed;
      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  };
  this.forceRootUpdate = forceRootUpdate;
});
function useForm(form) {
  var formRef = react.useRef();
  var _React$useState = react.useState({}),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    forceUpdate = _React$useState2[1];
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      var forceReRender = function forceReRender() {
        forceUpdate({});
      };
      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
/* harmony default export */ var es_useForm = (useForm);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/FormContext.js



var FormContext = /*#__PURE__*/react.createContext({
  triggerFormChange: function triggerFormChange() {},
  triggerFormFinish: function triggerFormFinish() {},
  registerForm: function registerForm() {},
  unregisterForm: function unregisterForm() {}
});
var FormProvider = function FormProvider(_ref) {
  var validateMessages = _ref.validateMessages,
    onFormChange = _ref.onFormChange,
    onFormFinish = _ref.onFormFinish,
    children = _ref.children;
  var formContext = react.useContext(FormContext);
  var formsRef = react.useRef({});
  return /*#__PURE__*/react.createElement(FormContext.Provider, {
    value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext), {}, {
      validateMessages: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext.validateMessages), validateMessages),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function triggerFormChange(name, changedFields) {
        if (onFormChange) {
          onFormChange(name, {
            changedFields: changedFields,
            forms: formsRef.current
          });
        }
        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: function triggerFormFinish(name, values) {
        if (onFormFinish) {
          onFormFinish(name, {
            values: values,
            forms: formsRef.current
          });
        }
        formContext.triggerFormFinish(name, values);
      },
      registerForm: function registerForm(name, form) {
        if (name) {
          formsRef.current = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formsRef.current), {}, (0,defineProperty/* default */.Z)({}, name, form));
        }
        formContext.registerForm(name, form);
      },
      unregisterForm: function unregisterForm(name) {
        var newForms = (0,objectSpread2/* default */.Z)({}, formsRef.current);
        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    })
  }, children);
};

/* harmony default export */ var es_FormContext = (FormContext);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/Form.js




var Form_excluded = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"];





var Form = function Form(_ref, ref) {
  var name = _ref.name,
    initialValues = _ref.initialValues,
    fields = _ref.fields,
    form = _ref.form,
    preserve = _ref.preserve,
    children = _ref.children,
    _ref$component = _ref.component,
    Component = _ref$component === void 0 ? 'form' : _ref$component,
    validateMessages = _ref.validateMessages,
    _ref$validateTrigger = _ref.validateTrigger,
    validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
    onValuesChange = _ref.onValuesChange,
    _onFieldsChange = _ref.onFieldsChange,
    _onFinish = _ref.onFinish,
    onFinishFailed = _ref.onFinishFailed,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, Form_excluded);
  var formContext = react.useContext(es_FormContext);
  // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider
  var _useForm = es_useForm(form),
    _useForm2 = (0,slicedToArray/* default */.Z)(_useForm, 1),
    formInstance = _useForm2[0];
  var _formInstance$getInte = formInstance.getInternalHooks(HOOK_MARK),
    useSubscribe = _formInstance$getInte.useSubscribe,
    setInitialValues = _formInstance$getInte.setInitialValues,
    setCallbacks = _formInstance$getInte.setCallbacks,
    setValidateMessages = _formInstance$getInte.setValidateMessages,
    setPreserve = _formInstance$getInte.setPreserve,
    destroyForm = _formInstance$getInte.destroyForm;
  // Pass ref with form instance
  react.useImperativeHandle(ref, function () {
    return formInstance;
  });
  // Register form into Context
  react.useEffect(function () {
    formContext.registerForm(name, formInstance);
    return function () {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]);
  // Pass props to store
  setValidateMessages((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext.validateMessages), validateMessages));
  setCallbacks({
    onValuesChange: onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);
      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }
        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);
      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed: onFinishFailed
  });
  setPreserve(preserve);
  // Set initial value, init store value when first mount
  var mountRef = react.useRef(null);
  setInitialValues(initialValues, !mountRef.current);
  if (!mountRef.current) {
    mountRef.current = true;
  }
  react.useEffect(function () {
    return destroyForm;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  // Prepare children by `children` type
  var childrenNode;
  var childrenRenderProps = typeof children === 'function';
  if (childrenRenderProps) {
    var values = formInstance.getFieldsValue(true);
    childrenNode = children(values, formInstance);
  } else {
    childrenNode = children;
  }
  // Not use subscribe when using render props
  useSubscribe(!childrenRenderProps);
  // Listen if fields provided. We use ref to save prev data here to avoid additional render
  var prevFieldsRef = react.useRef();
  react.useEffect(function () {
    if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }
    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  var formContextValue = react.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formInstance), {}, {
      validateTrigger: validateTrigger
    });
  }, [formInstance, validateTrigger]);
  var wrapperNode = /*#__PURE__*/react.createElement(FieldContext.Provider, {
    value: formContextValue
  }, childrenNode);
  if (Component === false) {
    return wrapperNode;
  }
  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, restProps, {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: function onReset(event) {
      var _restProps$onReset;
      event.preventDefault();
      formInstance.resetFields();
      (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 ? void 0 : _restProps$onReset.call(restProps, event);
    }
  }), wrapperNode);
};
/* harmony default export */ var es_Form = (Form);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/useWatch.js






function stringify(value) {
  try {
    return JSON.stringify(value);
  } catch (err) {
    return Math.random();
  }
}
var useWatchWarning =  false ? 0 : function () {};
function useWatch() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var _args$ = args[0],
    dependencies = _args$ === void 0 ? [] : _args$,
    form = args[1];
  var _useState = (0,react.useState)(),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var valueStr = (0,react.useMemo)(function () {
    return stringify(value);
  }, [value]);
  var valueStrRef = (0,react.useRef)(valueStr);
  valueStrRef.current = valueStr;
  var fieldContext = (0,react.useContext)(FieldContext);
  var formInstance = form || fieldContext;
  var isValidForm = formInstance && formInstance._init;
  // Warning if not exist form instance
  if (false) {}
  var namePath = getNamePath(dependencies);
  var namePathRef = (0,react.useRef)(namePath);
  namePathRef.current = namePath;
  useWatchWarning(namePath);
  (0,react.useEffect)(function () {
    // Skip if not exist form instance
    if (!isValidForm) {
      return;
    }
    var getFieldsValue = formInstance.getFieldsValue,
      getInternalHooks = formInstance.getInternalHooks;
    var _getInternalHooks = getInternalHooks(HOOK_MARK),
      registerWatch = _getInternalHooks.registerWatch;
    var cancelRegister = registerWatch(function (store) {
      var newValue = valueUtil_getValue(store, namePathRef.current);
      var nextValueStr = stringify(newValue);
      // Compare stringify in case it's nest object
      if (valueStrRef.current !== nextValueStr) {
        valueStrRef.current = nextValueStr;
        setValue(newValue);
      }
    });
    // TODO: We can improve this perf in future
    var initialValue = valueUtil_getValue(getFieldsValue(), namePathRef.current);
    setValue(initialValue);
    return cancelRegister;
  },
  // We do not need re-register since namePath content is the same
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isValidForm]);
  return value;
}
/* harmony default export */ var es_useWatch = (useWatch);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/index.js









var InternalForm = /*#__PURE__*/react.forwardRef(es_Form);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = es_Field;
RefForm.List = es_List;
RefForm.useForm = es_useForm;
RefForm.useWatch = es_useWatch;

/* harmony default export */ var es = (RefForm);

/***/ }),

/***/ 7636:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Notice; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7462);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4942);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5671);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3144);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8557);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7313);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1168);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6123);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);










var Notice = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(Notice, _Component);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(Notice);
  function Notice() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(this, Notice);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.closeTimer = null;
    _this.close = function (e) {
      if (e) {
        e.stopPropagation();
      }
      _this.clearCloseTimer();
      var _this$props = _this.props,
        onClose = _this$props.onClose,
        noticeKey = _this$props.noticeKey;
      if (onClose) {
        onClose(noticeKey);
      }
    };
    _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = window.setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    };
    _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    };
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.duration !== prevProps.duration || this.props.updateMark !== prevProps.updateMark ||
      // Visible again need reset timer
      this.props.visible !== prevProps.visible && this.props.visible) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "restartCloseTimer",
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        prefixCls = _this$props2.prefixCls,
        className = _this$props2.className,
        closable = _this$props2.closable,
        closeIcon = _this$props2.closeIcon,
        style = _this$props2.style,
        onClick = _this$props2.onClick,
        children = _this$props2.children,
        holder = _this$props2.holder;
      var componentClass = "".concat(prefixCls, "-notice");
      var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (acc, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          acc[key] = _this2.props[key];
        }
        return acc;
      }, {});
      var node = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(componentClass, className, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({}, "".concat(componentClass, "-closable"), closable)),
        style: style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: onClick
      }, dataOrAriaAttributeProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat(componentClass, "-content")
      }, children), closable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(componentClass, "-close")
      }, closeIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "".concat(componentClass, "-close-x")
      })) : null);
      if (holder) {
        return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(node, holder);
      }
      return node;
    }
  }]);
  return Notice;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
Notice.defaultProps = {
  onClose: function onClose() {},
  duration: 1.5
};


/***/ }),

/***/ 3133:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ rc_notification_es; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
// EXTERNAL MODULE: ./node_modules/rc-util/es/React/render.js
var render = __webpack_require__(182);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var es = __webpack_require__(1293);
// EXTERNAL MODULE: ./node_modules/rc-notification/es/Notice.js
var Notice = __webpack_require__(7636);
// EXTERNAL MODULE: ./node_modules/rc-notification/es/useNotification.js
var es_useNotification = __webpack_require__(3028);
;// CONCATENATED MODULE: ./node_modules/rc-notification/es/Notification.js







var _excluded = ["getContainer"];







var seed = 0;
var now = Date.now();
function getUuid() {
  var id = seed;
  seed += 1;
  return "rcNotification_".concat(now, "_").concat(id);
}
var Notification = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(Notification, _Component);
  var _super = (0,createSuper/* default */.Z)(Notification);
  function Notification() {
    var _this;
    (0,classCallCheck/* default */.Z)(this, Notification);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      notices: []
    };
    _this.hookRefs = new Map();
    _this.add = function (originNotice, holderCallback) {
      var _originNotice$key;
      var key = (_originNotice$key = originNotice.key) !== null && _originNotice$key !== void 0 ? _originNotice$key : getUuid();
      var notice = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, originNotice), {}, {
        key: key
      });
      var maxCount = _this.props.maxCount;
      _this.setState(function (previousState) {
        var notices = previousState.notices;
        var noticeIndex = notices.map(function (v) {
          return v.notice.key;
        }).indexOf(key);
        var updatedNotices = notices.concat();
        if (noticeIndex !== -1) {
          updatedNotices.splice(noticeIndex, 1, {
            notice: notice,
            holderCallback: holderCallback
          });
        } else {
          if (maxCount && notices.length >= maxCount) {
            // XXX, use key of first item to update new added (let React to move exsiting
            // instead of remove and mount). Same key was used before for both a) external
            // manual control and b) internal react 'key' prop , which is not that good.
            // eslint-disable-next-line no-param-reassign
            // zombieJ: Not know why use `updateKey`. This makes Notice infinite loop in jest.
            // Change to `updateMark` for compare instead.
            // https://github.com/react-component/notification/commit/32299e6be396f94040bfa82517eea940db947ece
            notice.key = updatedNotices[0].notice.key;
            notice.updateMark = getUuid();
            // zombieJ: That's why. User may close by key directly.
            // We need record this but not re-render to avoid upper issue
            // https://github.com/react-component/notification/issues/129
            notice.userPassKey = key;
            updatedNotices.shift();
          }
          updatedNotices.push({
            notice: notice,
            holderCallback: holderCallback
          });
        }
        return {
          notices: updatedNotices
        };
      });
    };
    _this.remove = function (removeKey) {
      _this.setState(function (_ref) {
        var notices = _ref.notices;
        return {
          notices: notices.filter(function (_ref2) {
            var _ref2$notice = _ref2.notice,
              key = _ref2$notice.key,
              userPassKey = _ref2$notice.userPassKey;
            var mergedKey = userPassKey !== null && userPassKey !== void 0 ? userPassKey : key;
            return mergedKey !== removeKey;
          })
        };
      });
    };
    _this.noticePropsMap = {};
    return _this;
  }
  (0,createClass/* default */.Z)(Notification, [{
    key: "getTransitionName",
    value: function getTransitionName() {
      var _this$props = this.props,
        prefixCls = _this$props.prefixCls,
        animation = _this$props.animation;
      var transitionName = this.props.transitionName;
      if (!transitionName && animation) {
        transitionName = "".concat(prefixCls, "-").concat(animation);
      }
      return transitionName;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var notices = this.state.notices;
      var _this$props2 = this.props,
        prefixCls = _this$props2.prefixCls,
        className = _this$props2.className,
        closeIcon = _this$props2.closeIcon,
        style = _this$props2.style;
      var noticeKeys = [];
      notices.forEach(function (_ref3, index) {
        var notice = _ref3.notice,
          holderCallback = _ref3.holderCallback;
        var updateMark = index === notices.length - 1 ? notice.updateMark : undefined;
        var key = notice.key,
          userPassKey = notice.userPassKey;
        var noticeProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
          prefixCls: prefixCls,
          closeIcon: closeIcon
        }, notice), notice.props), {}, {
          key: key,
          noticeKey: userPassKey || key,
          updateMark: updateMark,
          onClose: function onClose(noticeKey) {
            var _notice$onClose;
            _this2.remove(noticeKey);
            (_notice$onClose = notice.onClose) === null || _notice$onClose === void 0 ? void 0 : _notice$onClose.call(notice);
          },
          onClick: notice.onClick,
          children: notice.content
        });
        // Give to motion
        noticeKeys.push(key);
        _this2.noticePropsMap[key] = {
          props: noticeProps,
          holderCallback: holderCallback
        };
      });
      return /*#__PURE__*/react.createElement("div", {
        className: classnames_default()(prefixCls, className),
        style: style
      }, /*#__PURE__*/react.createElement(es/* CSSMotionList */.V, {
        keys: noticeKeys,
        motionName: this.getTransitionName(),
        onVisibleChanged: function onVisibleChanged(changedVisible, _ref4) {
          var key = _ref4.key;
          if (!changedVisible) {
            delete _this2.noticePropsMap[key];
          }
        }
      }, function (_ref5) {
        var key = _ref5.key,
          motionClassName = _ref5.className,
          motionStyle = _ref5.style,
          visible = _ref5.visible;
        var _this2$noticePropsMap = _this2.noticePropsMap[key],
          noticeProps = _this2$noticePropsMap.props,
          holderCallback = _this2$noticePropsMap.holderCallback;
        if (holderCallback) {
          return /*#__PURE__*/react.createElement("div", {
            key: key,
            className: classnames_default()(motionClassName, "".concat(prefixCls, "-hook-holder")),
            style: (0,objectSpread2/* default */.Z)({}, motionStyle),
            ref: function ref(div) {
              if (typeof key === 'undefined') {
                return;
              }
              if (div) {
                _this2.hookRefs.set(key, div);
                holderCallback(div, noticeProps);
              } else {
                _this2.hookRefs.delete(key);
              }
            }
          });
        }
        return /*#__PURE__*/react.createElement(Notice/* default */.Z, (0,esm_extends/* default */.Z)({}, noticeProps, {
          className: classnames_default()(motionClassName, noticeProps === null || noticeProps === void 0 ? void 0 : noticeProps.className),
          style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), noticeProps === null || noticeProps === void 0 ? void 0 : noticeProps.style),
          visible: visible
        }));
      }));
    }
  }]);
  return Notification;
}(react.Component);
Notification.newInstance = void 0;
Notification.defaultProps = {
  prefixCls: 'rc-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
};
Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref6 = properties || {},
    getContainer = _ref6.getContainer,
    props = (0,objectWithoutProperties/* default */.Z)(_ref6, _excluded);
  var div = document.createElement('div');
  if (getContainer) {
    var root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }
  var called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice: function notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notification.remove(key);
      },
      component: notification,
      destroy: function destroy() {
        (0,render/* unmount */.v)(div);
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
      },
      // Hooks
      useNotification: function useNotification() {
        return (0,es_useNotification/* default */.Z)(notification);
      }
    });
  }
  // Only used for test case usage
  if (false) {}
  (0,render/* render */.s)( /*#__PURE__*/react.createElement(Notification, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref
  })), div);
};
/* harmony default export */ var es_Notification = (Notification);
;// CONCATENATED MODULE: ./node_modules/rc-notification/es/index.js

/* harmony default export */ var rc_notification_es = (es_Notification);

/***/ }),

/***/ 3028:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useNotification; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3433);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7313);
/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7636);





function useNotification(notificationInstance) {
  var createdRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
    _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_React$useState, 2),
    elements = _React$useState2[0],
    setElements = _React$useState2[1];
  function notify(noticeProps) {
    var firstMount = true;
    notificationInstance.add(noticeProps, function (div, props) {
      var key = props.key;
      if (div && (!createdRef.current[key] || firstMount)) {
        var noticeEle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Notice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, props, {
          holder: div
        }));
        createdRef.current[key] = noticeEle;
        setElements(function (originElements) {
          var index = originElements.findIndex(function (ele) {
            return ele.key === props.key;
          });
          if (index === -1) {
            return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(originElements), [noticeEle]);
          }
          var cloneList = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(originElements);
          cloneList[index] = noticeEle;
          return cloneList;
        });
      }
      firstMount = false;
    });
  }
  return [notify, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements)];
}

/***/ }),

/***/ 182:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
var react_dom__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": function() { return /* binding */ render; },
/* harmony export */   "v": function() { return /* binding */ unmount; }
/* harmony export */ });
/* unused harmony exports _r, _u */
/* harmony import */ var _babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4165);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5861);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1002);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1413);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1168);





// Let compiler not to search module usage
var fullClone = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, /*#__PURE__*/ (react_dom__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react_dom__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react_dom__WEBPACK_IMPORTED_MODULE_0__, 2))));
var version = fullClone.version,
  reactRender = fullClone.render,
  unmountComponentAtNode = fullClone.unmountComponentAtNode;
var createRoot;
try {
  var mainVersion = Number((version || '').split('.')[0]);
  if (mainVersion >= 18) {
    createRoot = fullClone.createRoot;
  }
} catch (e) {
  // Do nothing;
}
function toggleWarning(skip) {
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === 'object') {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}
var MARK = '__rc_react_root__';

// ========================== Render ==========================

function modernRender(node, container) {
  toggleWarning(true);
  var root = container[MARK] || createRoot(container);
  toggleWarning(false);
  root.render(node);
  container[MARK] = root;
}
function legacyRender(node, container) {
  reactRender(node, container);
}

/** @private Test usage. Not work in prod */
function _r(node, container) {
  if (false) {}
}
function render(node, container) {
  if (createRoot) {
    modernRender(node, container);
    return;
  }
  legacyRender(node, container);
}

// ========================= Unmount ==========================
function modernUnmount(_x) {
  return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
  _modernUnmount = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().mark(function _callee(container) {
    return (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", Promise.resolve().then(function () {
            var _container$MARK;
            (_container$MARK = container[MARK]) === null || _container$MARK === void 0 ? void 0 : _container$MARK.unmount();
            delete container[MARK];
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
  unmountComponentAtNode(container);
}

/** @private Test usage. Not work in prod */
function _u(container) {
  if (false) {}
}
function unmount(_x2) {
  return _unmount.apply(this, arguments);
}
function _unmount() {
  _unmount = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().mark(function _callee2(container) {
    return (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(createRoot !== undefined)) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return", modernUnmount(container));
        case 2:
          legacyUnmount(container);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _unmount.apply(this, arguments);
}

/***/ }),

/***/ 9767:
/***/ (function(module) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
};

/***/ }),

/***/ 4506:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _toArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3878);
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9199);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(181);
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5267);




function _toArray(arr) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(arr) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
}

/***/ })

}]);