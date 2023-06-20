(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[297],{

/***/ 60020:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_MinusCircleOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/MinusCircleOutlined.js
// This icon file is generated automatically.
var MinusCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }]
  },
  "name": "minus-circle",
  "theme": "outlined"
};
/* harmony default export */ var asn_MinusCircleOutlined = (MinusCircleOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 6 modules
var AntdIcon = __webpack_require__(66821);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/MinusCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var MinusCircleOutlined_MinusCircleOutlined = function MinusCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_MinusCircleOutlined
  }));
};
MinusCircleOutlined_MinusCircleOutlined.displayName = 'MinusCircleOutlined';
/* harmony default export */ var icons_MinusCircleOutlined = (/*#__PURE__*/react.forwardRef(MinusCircleOutlined_MinusCircleOutlined));

/***/ }),

/***/ 55768:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_PlusCircleOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/PlusCircleOutlined.js
// This icon file is generated automatically.
var PlusCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }]
  },
  "name": "plus-circle",
  "theme": "outlined"
};
/* harmony default export */ var asn_PlusCircleOutlined = (PlusCircleOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 6 modules
var AntdIcon = __webpack_require__(66821);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/PlusCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var PlusCircleOutlined_PlusCircleOutlined = function PlusCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_PlusCircleOutlined
  }));
};
PlusCircleOutlined_PlusCircleOutlined.displayName = 'PlusCircleOutlined';
/* harmony default export */ var icons_PlusCircleOutlined = (/*#__PURE__*/react.forwardRef(PlusCircleOutlined_PlusCircleOutlined));

/***/ }),

/***/ 56180:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ invariant; }
/* harmony export */ });
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (false) {}
  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }
    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
}

//# sourceMappingURL=invariant.esm.js.map

/***/ }),

/***/ 35903:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ shallowEqual; }
/* harmony export */ });
function shallowEqual(objA, objB, compare, compareContext) {
  var compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (compareResult !== void 0) {
    return !!compareResult;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}

//# sourceMappingURL=shallowequal.esm.js.map

/***/ }),

/***/ 25173:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.v7 = createHorizontalStrength;
exports.Kx = createVerticalStrength;
exports._t = createScrollingComponent;
exports.ZP = createScrollingComponentWithConsumer;
__webpack_unused_export__ = __webpack_unused_export__ = void 0;
var _react = _interopRequireWildcard(__webpack_require__(11608));
var _propTypes = _interopRequireDefault(__webpack_require__(75192));
var _reactDom = __webpack_require__(33573);
var _lodash = _interopRequireDefault(__webpack_require__(82061));
var _raf = _interopRequireDefault(__webpack_require__(44903));
var _reactDisplayName = _interopRequireDefault(__webpack_require__(6492));
var _reactDnd = __webpack_require__(7060);
var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(67861));
var _util = __webpack_require__(98630);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _extends() {
  _extends = Object.assign || function (target) {
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
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DEFAULT_BUFFER = 150;
function createHorizontalStrength(_buffer) {
  return function defaultHorizontalStrength(_ref, point) {
    var x = _ref.x,
      w = _ref.w,
      y = _ref.y,
      h = _ref.h;
    var buffer = Math.min(w / 2, _buffer);
    var inRange = point.x >= x && point.x <= x + w;
    var inBox = inRange && point.y >= y && point.y <= y + h;
    if (inBox) {
      if (point.x < x + buffer) {
        return (point.x - x - buffer) / buffer;
      }
      if (point.x > x + w - buffer) {
        return -(x + w - point.x - buffer) / buffer;
      }
    }
    return 0;
  };
}
function createVerticalStrength(_buffer) {
  return function defaultVerticalStrength(_ref2, point) {
    var y = _ref2.y,
      h = _ref2.h,
      x = _ref2.x,
      w = _ref2.w;
    var buffer = Math.min(h / 2, _buffer);
    var inRange = point.y >= y && point.y <= y + h;
    var inBox = inRange && point.x >= x && point.x <= x + w;
    if (inBox) {
      if (point.y < y + buffer) {
        return (point.y - y - buffer) / buffer;
      }
      if (point.y > y + h - buffer) {
        return -(y + h - point.y - buffer) / buffer;
      }
    }
    return 0;
  };
}
var defaultHorizontalStrength = createHorizontalStrength(DEFAULT_BUFFER);
__webpack_unused_export__ = defaultHorizontalStrength;
var defaultVerticalStrength = createVerticalStrength(DEFAULT_BUFFER);
__webpack_unused_export__ = defaultVerticalStrength;
function createScrollingComponent(WrappedComponent) {
  var ScrollingComponent = /*#__PURE__*/
  function (_Component) {
    _inherits(ScrollingComponent, _Component);

    // Update scaleX and scaleY every 100ms or so
    // and start scrolling if necessary
    function ScrollingComponent(props, ctx) {
      var _this;
      _classCallCheck(this, ScrollingComponent);
      _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollingComponent).call(this, props, ctx));
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateScrolling", (0, _lodash.default)(function (evt) {
        var _this$container$getBo = _this.container.getBoundingClientRect(),
          x = _this$container$getBo.left,
          y = _this$container$getBo.top,
          w = _this$container$getBo.width,
          h = _this$container$getBo.height;
        var box = {
          x: x,
          y: y,
          w: w,
          h: h
        };
        var coords = (0, _util.getCoords)(evt); // calculate strength

        var _this$props = _this.props,
          horizontalStrength = _this$props.horizontalStrength,
          verticalStrength = _this$props.verticalStrength;
        _this.scaleX = horizontalStrength(box, coords);
        _this.scaleY = verticalStrength(box, coords); // start scrolling if we need to

        if (!_this.frame && (_this.scaleX || _this.scaleY)) {
          _this.startScrolling();
        }
      }, 100, {
        trailing: false
      }));
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEvent", function (evt) {
        if (_this.dragging && !_this.attached) {
          _this.attach();
          _this.updateScrolling(evt);
        }
      });
      _this.wrappedInstance = _react.default.createRef();
      _this.scaleX = 0;
      _this.scaleY = 0;
      _this.frame = null;
      _this.attached = false;
      _this.dragging = false;
      return _this;
    }
    _createClass(ScrollingComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        // eslint-disable-next-line react/no-find-dom-node
        this.container = (0, _reactDom.findDOMNode)(this.wrappedInstance.current);
        if (this.container && typeof this.container.addEventListener === 'function') {
          this.container.addEventListener('dragover', this.handleEvent);
        } // touchmove events don't seem to work across siblings, so we unfortunately
        // have to attach the listeners to the body

        window.document.body.addEventListener('touchmove', this.handleEvent);
        var dragDropManager = this.props.dragDropManager;
        this.clearMonitorSubscription = dragDropManager.getMonitor().subscribeToStateChange(function () {
          return _this2.handleMonitorChange();
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.container && typeof this.container.removeEventListener === 'function') {
          this.container.removeEventListener('dragover', this.handleEvent);
        }
        window.document.body.removeEventListener('touchmove', this.handleEvent);
        this.clearMonitorSubscription();
        this.stopScrolling();
      }
    }, {
      key: "handleMonitorChange",
      value: function handleMonitorChange() {
        var dragDropManager = this.props.dragDropManager;
        var isDragging = dragDropManager.getMonitor().isDragging();
        if (!this.dragging && isDragging) {
          this.dragging = true;
        } else if (this.dragging && !isDragging) {
          this.dragging = false;
          this.stopScrolling();
        }
      }
    }, {
      key: "attach",
      value: function attach() {
        this.attached = true;
        window.document.body.addEventListener('dragover', this.updateScrolling);
        window.document.body.addEventListener('touchmove', this.updateScrolling);
      }
    }, {
      key: "detach",
      value: function detach() {
        this.attached = false;
        window.document.body.removeEventListener('dragover', this.updateScrolling);
        window.document.body.removeEventListener('touchmove', this.updateScrolling);
      }
    }, {
      key: "startScrolling",
      value: function startScrolling() {
        var _this3 = this;
        var i = 0;
        var tick = function tick() {
          var scaleX = _this3.scaleX,
            scaleY = _this3.scaleY,
            container = _this3.container;
          var _this3$props = _this3.props,
            strengthMultiplier = _this3$props.strengthMultiplier,
            onScrollChange = _this3$props.onScrollChange; // stop scrolling if there's nothing to do

          if (strengthMultiplier === 0 || scaleX + scaleY === 0) {
            _this3.stopScrolling();
            return;
          } // there's a bug in safari where it seems like we can't get
          // mousemove events from a container that also emits a scroll
          // event that same frame. So we double the strengthMultiplier and only adjust
          // the scroll position at 30fps

          i += 1;
          if (i % 2) {
            var scrollLeft = container.scrollLeft,
              scrollTop = container.scrollTop,
              scrollWidth = container.scrollWidth,
              scrollHeight = container.scrollHeight,
              clientWidth = container.clientWidth,
              clientHeight = container.clientHeight;
            var newLeft = scaleX ? container.scrollLeft = (0, _util.intBetween)(0, scrollWidth - clientWidth, scrollLeft + scaleX * strengthMultiplier) : scrollLeft;
            var newTop = scaleY ? container.scrollTop = (0, _util.intBetween)(0, scrollHeight - clientHeight, scrollTop + scaleY * strengthMultiplier) : scrollTop;
            onScrollChange(newLeft, newTop);
          }
          _this3.frame = (0, _raf.default)(tick);
        };
        tick();
      }
    }, {
      key: "stopScrolling",
      value: function stopScrolling() {
        this.detach();
        this.scaleX = 0;
        this.scaleY = 0;
        if (this.frame) {
          _raf.default.cancel(this.frame);
          this.frame = null;
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
          strengthMultiplier = _this$props2.strengthMultiplier,
          verticalStrength = _this$props2.verticalStrength,
          horizontalStrength = _this$props2.horizontalStrength,
          onScrollChange = _this$props2.onScrollChange,
          props = _objectWithoutProperties(_this$props2, ["strengthMultiplier", "verticalStrength", "horizontalStrength", "onScrollChange"]);
        return _react.default.createElement(WrappedComponent, _extends({
          ref: this.wrappedInstance
        }, props));
      }
    }]);
    return ScrollingComponent;
  }(_react.Component);
  _defineProperty(ScrollingComponent, "displayName", "Scrolling(".concat((0, _reactDisplayName.default)(WrappedComponent), ")"));
  _defineProperty(ScrollingComponent, "propTypes", {
    // eslint-disable-next-line react/forbid-prop-types
    dragDropManager: _propTypes.default.object.isRequired,
    onScrollChange: _propTypes.default.func,
    verticalStrength: _propTypes.default.func,
    horizontalStrength: _propTypes.default.func,
    strengthMultiplier: _propTypes.default.number
  });
  _defineProperty(ScrollingComponent, "defaultProps", {
    onScrollChange: _util.noop,
    verticalStrength: defaultVerticalStrength,
    horizontalStrength: defaultHorizontalStrength,
    strengthMultiplier: 30
  });
  return (0, _hoistNonReactStatics.default)(ScrollingComponent, WrappedComponent);
}
function createScrollingComponentWithConsumer(WrappedComponent) {
  var ScrollingComponent = createScrollingComponent(WrappedComponent);
  return function (props) {
    return _react.default.createElement(_reactDnd.DragDropContextConsumer, null, function (_ref3) {
      var dragDropManager = _ref3.dragDropManager;
      return dragDropManager === undefined ? null : _react.default.createElement(ScrollingComponent, _extends({}, props, {
        dragDropManager: dragDropManager
      }));
    });
  };
}

/***/ }),

/***/ 98630:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noop = noop;
exports.intBetween = intBetween;
exports.getCoords = getCoords;
function noop() {}
function intBetween(min, max, val) {
  return Math.floor(Math.min(max, Math.max(min, val)));
}
function getCoords(evt) {
  if (evt.type === 'touchmove') {
    return {
      x: evt.changedTouches[0].clientX,
      y: evt.changedTouches[0].clientY
    };
  }
  return {
    x: evt.clientX,
    y: evt.clientY
  };
}

/***/ }),

/***/ 3655:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/


var aa = __webpack_require__(11608),
  n = __webpack_require__(71843),
  r = __webpack_require__(21948);
function u(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa) throw Error(u(227));
function ba(a, b, c, d, e, f, g, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l);
  } catch (m) {
    this.onError(m);
  }
}
var da = !1,
  ea = null,
  fa = !1,
  ha = null,
  ia = {
    onError: function onError(a) {
      da = !0;
      ea = a;
    }
  };
function ja(a, b, c, d, e, f, g, h, k) {
  da = !1;
  ea = null;
  ba.apply(ia, arguments);
}
function ka(a, b, c, d, e, f, g, h, k) {
  ja.apply(this, arguments);
  if (da) {
    if (da) {
      var l = ea;
      da = !1;
      ea = null;
    } else throw Error(u(198));
    fa || (fa = !0, ha = l);
  }
}
var la = null,
  ma = null,
  na = null;
function oa(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = na(c);
  ka(d, b, void 0, a);
  a.currentTarget = null;
}
var pa = null,
  qa = {};
function ra() {
  if (pa) for (var a in qa) {
    var b = qa[a],
      c = pa.indexOf(a);
    if (!(-1 < c)) throw Error(u(96, a));
    if (!sa[c]) {
      if (!b.extractEvents) throw Error(u(97, a));
      sa[c] = b;
      c = b.eventTypes;
      for (var d in c) {
        var e = void 0;
        var f = c[d],
          g = b,
          h = d;
        if (ta.hasOwnProperty(h)) throw Error(u(99, h));
        ta[h] = f;
        var k = f.phasedRegistrationNames;
        if (k) {
          for (e in k) k.hasOwnProperty(e) && ua(k[e], g, h);
          e = !0;
        } else f.registrationName ? (ua(f.registrationName, g, h), e = !0) : e = !1;
        if (!e) throw Error(u(98, d, a));
      }
    }
  }
}
function ua(a, b, c) {
  if (va[a]) throw Error(u(100, a));
  va[a] = b;
  wa[a] = b.eventTypes[c].dependencies;
}
var sa = [],
  ta = {},
  va = {},
  wa = {};
function xa(a) {
  var b = !1,
    c;
  for (c in a) if (a.hasOwnProperty(c)) {
    var d = a[c];
    if (!qa.hasOwnProperty(c) || qa[c] !== d) {
      if (qa[c]) throw Error(u(102, c));
      qa[c] = d;
      b = !0;
    }
  }
  b && ra();
}
var ya = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
  za = null,
  Aa = null,
  Ba = null;
function Ca(a) {
  if (a = ma(a)) {
    if ("function" !== typeof za) throw Error(u(280));
    var b = a.stateNode;
    b && (b = la(b), za(a.stateNode, a.type, b));
  }
}
function Da(a) {
  Aa ? Ba ? Ba.push(a) : Ba = [a] : Aa = a;
}
function Ea() {
  if (Aa) {
    var a = Aa,
      b = Ba;
    Ba = Aa = null;
    Ca(a);
    if (b) for (a = 0; a < b.length; a++) Ca(b[a]);
  }
}
function Fa(a, b) {
  return a(b);
}
function Ga(a, b, c, d, e) {
  return a(b, c, d, e);
}
function Ha() {}
var Ia = Fa,
  Ja = !1,
  Ka = !1;
function La() {
  if (null !== Aa || null !== Ba) Ha(), Ea();
}
function Ma(a, b, c) {
  if (Ka) return a(b, c);
  Ka = !0;
  try {
    return Ia(a, b, c);
  } finally {
    Ka = !1, La();
  }
}
var Na = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Oa = Object.prototype.hasOwnProperty,
  Pa = {},
  Qa = {};
function Ra(a) {
  if (Oa.call(Qa, a)) return !0;
  if (Oa.call(Pa, a)) return !1;
  if (Na.test(a)) return Qa[a] = !0;
  Pa[a] = !0;
  return !1;
}
function Sa(a, b, c, d) {
  if (null !== c && 0 === c.type) return !1;
  switch (typeof b) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      if (d) return !1;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return !1;
  }
}
function Ta(a, b, c, d) {
  if (null === b || "undefined" === typeof b || Sa(a, b, c, d)) return !0;
  if (d) return !1;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;
    case 4:
      return !1 === b;
    case 5:
      return isNaN(b);
    case 6:
      return isNaN(b) || 1 > b;
  }
  return !1;
}
function v(a, b, c, d, e, f) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
}
var C = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
  C[a] = new v(a, 0, !1, a, null, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
  var b = a[0];
  C[b] = new v(b, 1, !1, a[1], null, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  C[a] = new v(a, 2, !1, a.toLowerCase(), null, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
  C[a] = new v(a, 2, !1, a, null, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
  C[a] = new v(a, 3, !1, a.toLowerCase(), null, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  C[a] = new v(a, 3, !0, a, null, !1);
});
["capture", "download"].forEach(function (a) {
  C[a] = new v(a, 4, !1, a, null, !1);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  C[a] = new v(a, 6, !1, a, null, !1);
});
["rowSpan", "start"].forEach(function (a) {
  C[a] = new v(a, 5, !1, a.toLowerCase(), null, !1);
});
var Ua = /[\-:]([a-z])/g;
function Va(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
  var b = a.replace(Ua, Va);
  C[b] = new v(b, 1, !1, a, null, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
  var b = a.replace(Ua, Va);
  C[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var b = a.replace(Ua, Va);
  C[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1);
});
["tabIndex", "crossOrigin"].forEach(function (a) {
  C[a] = new v(a, 1, !1, a.toLowerCase(), null, !1);
});
C.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0);
["src", "href", "action", "formAction"].forEach(function (a) {
  C[a] = new v(a, 1, !1, a.toLowerCase(), null, !0);
});
var Wa = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
Wa.hasOwnProperty("ReactCurrentDispatcher") || (Wa.ReactCurrentDispatcher = {
  current: null
});
Wa.hasOwnProperty("ReactCurrentBatchConfig") || (Wa.ReactCurrentBatchConfig = {
  suspense: null
});
function Xa(a, b, c, d) {
  var e = C.hasOwnProperty(b) ? C[b] : null;
  var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
  f || (Ta(b, c, e, d) && (c = null), d || null === e ? Ra(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var Ya = /^(.*)[\\\/]/,
  E = "function" === typeof Symbol && Symbol.for,
  Za = E ? Symbol.for("react.element") : 60103,
  $a = E ? Symbol.for("react.portal") : 60106,
  ab = E ? Symbol.for("react.fragment") : 60107,
  bb = E ? Symbol.for("react.strict_mode") : 60108,
  cb = E ? Symbol.for("react.profiler") : 60114,
  db = E ? Symbol.for("react.provider") : 60109,
  eb = E ? Symbol.for("react.context") : 60110,
  fb = E ? Symbol.for("react.concurrent_mode") : 60111,
  gb = E ? Symbol.for("react.forward_ref") : 60112,
  hb = E ? Symbol.for("react.suspense") : 60113,
  ib = E ? Symbol.for("react.suspense_list") : 60120,
  jb = E ? Symbol.for("react.memo") : 60115,
  kb = E ? Symbol.for("react.lazy") : 60116,
  lb = E ? Symbol.for("react.block") : 60121,
  mb = "function" === typeof Symbol && Symbol.iterator;
function nb(a) {
  if (null === a || "object" !== typeof a) return null;
  a = mb && a[mb] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
function ob(a) {
  if (-1 === a._status) {
    a._status = 0;
    var b = a._ctor;
    b = b();
    a._result = b;
    b.then(function (b) {
      0 === a._status && (b = b.default, a._status = 1, a._result = b);
    }, function (b) {
      0 === a._status && (a._status = 2, a._result = b);
    });
  }
}
function pb(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ab:
      return "Fragment";
    case $a:
      return "Portal";
    case cb:
      return "Profiler";
    case bb:
      return "StrictMode";
    case hb:
      return "Suspense";
    case ib:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case eb:
      return "Context.Consumer";
    case db:
      return "Context.Provider";
    case gb:
      var b = a.render;
      b = b.displayName || b.name || "";
      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");
    case jb:
      return pb(a.type);
    case lb:
      return pb(a.render);
    case kb:
      if (a = 1 === a._status ? a._result : null) return pb(a);
  }
  return null;
}
function qb(a) {
  var b = "";
  do {
    a: switch (a.tag) {
      case 3:
      case 4:
      case 6:
      case 7:
      case 10:
      case 9:
        var c = "";
        break a;
      default:
        var d = a._debugOwner,
          e = a._debugSource,
          f = pb(a.type);
        c = null;
        d && (c = pb(d.type));
        d = f;
        f = "";
        e ? f = " (at " + e.fileName.replace(Ya, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
        c = "\n    in " + (d || "Unknown") + f;
    }
    b += c;
    a = a.return;
  } while (a);
  return b;
}
function rb(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function sb(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function tb(a) {
  var b = sb(a) ? "checked" : "value",
    c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
    d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get,
      f = c.set;
    Object.defineProperty(a, b, {
      configurable: !0,
      get: function get() {
        return e.call(this);
      },
      set: function set(a) {
        d = "" + a;
        f.call(this, a);
      }
    });
    Object.defineProperty(a, b, {
      enumerable: c.enumerable
    });
    return {
      getValue: function getValue() {
        return d;
      },
      setValue: function setValue(a) {
        d = "" + a;
      },
      stopTracking: function stopTracking() {
        a._valueTracker = null;
        delete a[b];
      }
    };
  }
}
function xb(a) {
  a._valueTracker || (a._valueTracker = tb(a));
}
function yb(a) {
  if (!a) return !1;
  var b = a._valueTracker;
  if (!b) return !0;
  var c = b.getValue();
  var d = "";
  a && (d = sb(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), !0) : !1;
}
function zb(a, b) {
  var c = b.checked;
  return n({}, b, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != c ? c : a._wrapperState.initialChecked
  });
}
function Ab(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue,
    d = null != b.checked ? b.checked : b.defaultChecked;
  c = rb(null != b.value ? b.value : c);
  a._wrapperState = {
    initialChecked: d,
    initialValue: c,
    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
  };
}
function Bb(a, b) {
  b = b.checked;
  null != b && Xa(a, "checked", b, !1);
}
function Cb(a, b) {
  Bb(a, b);
  var c = rb(b.value),
    d = b.type;
  if (null != c) {
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
  } else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? Db(a, b.type, c) : b.hasOwnProperty("defaultValue") && Db(a, b.type, rb(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function Eb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function Db(a, b, c) {
  if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function Fb(a) {
  var b = "";
  aa.Children.forEach(a, function (a) {
    null != a && (b += a);
  });
  return b;
}
function Gb(a, b) {
  a = n({
    children: void 0
  }, b);
  if (b = Fb(b.children)) a.children = b;
  return a;
}
function Hb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
  } else {
    c = "" + rb(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = !0;
        d && (a[e].defaultSelected = !0);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = !0);
  }
}
function Ib(a, b) {
  if (null != b.dangerouslySetInnerHTML) throw Error(u(91));
  return n({}, b, {
    value: void 0,
    defaultValue: void 0,
    children: "" + a._wrapperState.initialValue
  });
}
function Jb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b) throw Error(u(92));
      if (Array.isArray(c)) {
        if (!(1 >= c.length)) throw Error(u(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = {
    initialValue: rb(c)
  };
}
function Kb(a, b) {
  var c = rb(b.value),
    d = rb(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function Lb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
var Mb = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg"
};
function Nb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ob(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? Nb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var Pb,
  Qb = function (a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function () {
        return a(b, c, d, e);
      });
    } : a;
  }(function (a, b) {
    if (a.namespaceURI !== Mb.svg || "innerHTML" in a) a.innerHTML = b;else {
      Pb = Pb || document.createElement("div");
      Pb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = Pb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
      for (; b.firstChild;) a.appendChild(b.firstChild);
    }
  });
function Rb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
function Sb(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Tb = {
    animationend: Sb("Animation", "AnimationEnd"),
    animationiteration: Sb("Animation", "AnimationIteration"),
    animationstart: Sb("Animation", "AnimationStart"),
    transitionend: Sb("Transition", "TransitionEnd")
  },
  Ub = {},
  Vb = {};
ya && (Vb = document.createElement("div").style, "AnimationEvent" in window || (delete Tb.animationend.animation, delete Tb.animationiteration.animation, delete Tb.animationstart.animation), "TransitionEvent" in window || delete Tb.transitionend.transition);
function Wb(a) {
  if (Ub[a]) return Ub[a];
  if (!Tb[a]) return a;
  var b = Tb[a],
    c;
  for (c in b) if (b.hasOwnProperty(c) && c in Vb) return Ub[a] = b[c];
  return a;
}
var Xb = Wb("animationend"),
  Yb = Wb("animationiteration"),
  Zb = Wb("animationstart"),
  $b = Wb("transitionend"),
  ac = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  bc = new ("function" === typeof WeakMap ? WeakMap : Map)();
function cc(a) {
  var b = bc.get(a);
  void 0 === b && (b = new Map(), bc.set(a, b));
  return b;
}
function dc(a) {
  var b = a,
    c = a;
  if (a.alternate) for (; b.return;) b = b.return;else {
    a = b;
    do b = a, 0 !== (b.effectTag & 1026) && (c = b.return), a = b.return; while (a);
  }
  return 3 === b.tag ? c : null;
}
function ec(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b) return b.dehydrated;
  }
  return null;
}
function fc(a) {
  if (dc(a) !== a) throw Error(u(188));
}
function gc(a) {
  var b = a.alternate;
  if (!b) {
    b = dc(a);
    if (null === b) throw Error(u(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b;;) {
    var e = c.return;
    if (null === e) break;
    var f = e.alternate;
    if (null === f) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f;) {
        if (f === c) return fc(e), a;
        if (f === d) return fc(e), b;
        f = f.sibling;
      }
      throw Error(u(188));
    }
    if (c.return !== d.return) c = e, d = f;else {
      for (var g = !1, h = e.child; h;) {
        if (h === c) {
          g = !0;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = !0;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h;) {
          if (h === c) {
            g = !0;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = !0;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g) throw Error(u(189));
      }
    }
    if (c.alternate !== d) throw Error(u(190));
  }
  if (3 !== c.tag) throw Error(u(188));
  return c.stateNode.current === c ? a : b;
}
function hc(a) {
  a = gc(a);
  if (!a) return null;
  for (var b = a;;) {
    if (5 === b.tag || 6 === b.tag) return b;
    if (b.child) b.child.return = b, b = b.child;else {
      if (b === a) break;
      for (; !b.sibling;) {
        if (!b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function ic(a, b) {
  if (null == b) throw Error(u(30));
  if (null == a) return b;
  if (Array.isArray(a)) {
    if (Array.isArray(b)) return a.push.apply(a, b), a;
    a.push(b);
    return a;
  }
  return Array.isArray(b) ? [a].concat(b) : [a, b];
}
function jc(a, b, c) {
  Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
}
var kc = null;
function lc(a) {
  if (a) {
    var b = a._dispatchListeners,
      c = a._dispatchInstances;
    if (Array.isArray(b)) for (var d = 0; d < b.length && !a.isPropagationStopped(); d++) oa(a, b[d], c[d]);else b && oa(a, b, c);
    a._dispatchListeners = null;
    a._dispatchInstances = null;
    a.isPersistent() || a.constructor.release(a);
  }
}
function mc(a) {
  null !== a && (kc = ic(kc, a));
  a = kc;
  kc = null;
  if (a) {
    jc(a, lc);
    if (kc) throw Error(u(95));
    if (fa) throw a = ha, fa = !1, ha = null, a;
  }
}
function nc(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
function oc(a) {
  if (!ya) return !1;
  a = "on" + a;
  var b = (a in document);
  b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);
  return b;
}
var pc = [];
function qc(a) {
  a.topLevelType = null;
  a.nativeEvent = null;
  a.targetInst = null;
  a.ancestors.length = 0;
  10 > pc.length && pc.push(a);
}
function rc(a, b, c, d) {
  if (pc.length) {
    var e = pc.pop();
    e.topLevelType = a;
    e.eventSystemFlags = d;
    e.nativeEvent = b;
    e.targetInst = c;
    return e;
  }
  return {
    topLevelType: a,
    eventSystemFlags: d,
    nativeEvent: b,
    targetInst: c,
    ancestors: []
  };
}
function sc(a) {
  var b = a.targetInst,
    c = b;
  do {
    if (!c) {
      a.ancestors.push(c);
      break;
    }
    var d = c;
    if (3 === d.tag) d = d.stateNode.containerInfo;else {
      for (; d.return;) d = d.return;
      d = 3 !== d.tag ? null : d.stateNode.containerInfo;
    }
    if (!d) break;
    b = c.tag;
    5 !== b && 6 !== b || a.ancestors.push(c);
    c = tc(d);
  } while (c);
  for (c = 0; c < a.ancestors.length; c++) {
    b = a.ancestors[c];
    var e = nc(a.nativeEvent);
    d = a.topLevelType;
    var f = a.nativeEvent,
      g = a.eventSystemFlags;
    0 === c && (g |= 64);
    for (var h = null, k = 0; k < sa.length; k++) {
      var l = sa[k];
      l && (l = l.extractEvents(d, b, f, e, g)) && (h = ic(h, l));
    }
    mc(h);
  }
}
function uc(a, b, c) {
  if (!c.has(a)) {
    switch (a) {
      case "scroll":
        vc(b, "scroll", !0);
        break;
      case "focus":
      case "blur":
        vc(b, "focus", !0);
        vc(b, "blur", !0);
        c.set("blur", null);
        c.set("focus", null);
        break;
      case "cancel":
      case "close":
        oc(a) && vc(b, a, !0);
        break;
      case "invalid":
      case "submit":
      case "reset":
        break;
      default:
        -1 === ac.indexOf(a) && F(a, b);
    }
    c.set(a, null);
  }
}
var wc,
  xc,
  yc,
  zc = !1,
  Ac = [],
  Bc = null,
  Cc = null,
  Dc = null,
  Ec = new Map(),
  Fc = new Map(),
  Gc = [],
  Hc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
  Ic = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a, b) {
  var c = cc(b);
  Hc.forEach(function (a) {
    uc(a, b, c);
  });
  Ic.forEach(function (a) {
    uc(a, b, c);
  });
}
function Kc(a, b, c, d, e) {
  return {
    blockedOn: a,
    topLevelType: b,
    eventSystemFlags: c | 32,
    nativeEvent: e,
    container: d
  };
}
function Lc(a, b) {
  switch (a) {
    case "focus":
    case "blur":
      Bc = null;
      break;
    case "dragenter":
    case "dragleave":
      Cc = null;
      break;
    case "mouseover":
    case "mouseout":
      Dc = null;
      break;
    case "pointerover":
    case "pointerout":
      Ec.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fc.delete(b.pointerId);
  }
}
function Mc(a, b, c, d, e, f) {
  if (null === a || a.nativeEvent !== f) return a = Kc(b, c, d, e, f), null !== b && (b = Nc(b), null !== b && xc(b)), a;
  a.eventSystemFlags |= d;
  return a;
}
function Oc(a, b, c, d, e) {
  switch (b) {
    case "focus":
      return Bc = Mc(Bc, a, b, c, d, e), !0;
    case "dragenter":
      return Cc = Mc(Cc, a, b, c, d, e), !0;
    case "mouseover":
      return Dc = Mc(Dc, a, b, c, d, e), !0;
    case "pointerover":
      var f = e.pointerId;
      Ec.set(f, Mc(Ec.get(f) || null, a, b, c, d, e));
      return !0;
    case "gotpointercapture":
      return f = e.pointerId, Fc.set(f, Mc(Fc.get(f) || null, a, b, c, d, e)), !0;
  }
  return !1;
}
function Pc(a) {
  var b = tc(a.target);
  if (null !== b) {
    var c = dc(b);
    if (null !== c) if (b = c.tag, 13 === b) {
      if (b = ec(c), null !== b) {
        a.blockedOn = b;
        r.unstable_runWithPriority(a.priority, function () {
          yc(c);
        });
        return;
      }
    } else if (3 === b && c.stateNode.hydrate) {
      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
      return;
    }
  }
  a.blockedOn = null;
}
function Qc(a) {
  if (null !== a.blockedOn) return !1;
  var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
  if (null !== b) {
    var c = Nc(b);
    null !== c && xc(c);
    a.blockedOn = b;
    return !1;
  }
  return !0;
}
function Sc(a, b, c) {
  Qc(a) && c.delete(b);
}
function Tc() {
  for (zc = !1; 0 < Ac.length;) {
    var a = Ac[0];
    if (null !== a.blockedOn) {
      a = Nc(a.blockedOn);
      null !== a && wc(a);
      break;
    }
    var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
    null !== b ? a.blockedOn = b : Ac.shift();
  }
  null !== Bc && Qc(Bc) && (Bc = null);
  null !== Cc && Qc(Cc) && (Cc = null);
  null !== Dc && Qc(Dc) && (Dc = null);
  Ec.forEach(Sc);
  Fc.forEach(Sc);
}
function Uc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, zc || (zc = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, Tc)));
}
function Vc(a) {
  function b(b) {
    return Uc(b, a);
  }
  if (0 < Ac.length) {
    Uc(Ac[0], a);
    for (var c = 1; c < Ac.length; c++) {
      var d = Ac[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Bc && Uc(Bc, a);
  null !== Cc && Uc(Cc, a);
  null !== Dc && Uc(Dc, a);
  Ec.forEach(b);
  Fc.forEach(b);
  for (c = 0; c < Gc.length; c++) d = Gc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Gc.length && (c = Gc[0], null === c.blockedOn);) Pc(c), null === c.blockedOn && Gc.shift();
}
var Wc = {},
  Yc = new Map(),
  Zc = new Map(),
  $c = ["abort", "abort", Xb, "animationEnd", Yb, "animationIteration", Zb, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", $b, "transitionEnd", "waiting", "waiting"];
function ad(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c],
      e = a[c + 1],
      f = "on" + (e[0].toUpperCase() + e.slice(1));
    f = {
      phasedRegistrationNames: {
        bubbled: f,
        captured: f + "Capture"
      },
      dependencies: [d],
      eventPriority: b
    };
    Zc.set(d, b);
    Yc.set(d, f);
    Wc[e] = f;
  }
}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
ad($c, 2);
for (var bd = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), cd = 0; cd < bd.length; cd++) Zc.set(bd[cd], 0);
var dd = r.unstable_UserBlockingPriority,
  ed = r.unstable_runWithPriority,
  fd = !0;
function F(a, b) {
  vc(b, a, !1);
}
function vc(a, b, c) {
  var d = Zc.get(b);
  switch (void 0 === d ? 2 : d) {
    case 0:
      d = gd.bind(null, b, 1, a);
      break;
    case 1:
      d = hd.bind(null, b, 1, a);
      break;
    default:
      d = id.bind(null, b, 1, a);
  }
  c ? a.addEventListener(b, d, !0) : a.addEventListener(b, d, !1);
}
function gd(a, b, c, d) {
  Ja || Ha();
  var e = id,
    f = Ja;
  Ja = !0;
  try {
    Ga(e, a, b, c, d);
  } finally {
    (Ja = f) || La();
  }
}
function hd(a, b, c, d) {
  ed(dd, id.bind(null, a, b, c, d));
}
function id(a, b, c, d) {
  if (fd) if (0 < Ac.length && -1 < Hc.indexOf(a)) a = Kc(null, a, b, c, d), Ac.push(a);else {
    var e = Rc(a, b, c, d);
    if (null === e) Lc(a, d);else if (-1 < Hc.indexOf(a)) a = Kc(e, a, b, c, d), Ac.push(a);else if (!Oc(e, a, b, c, d)) {
      Lc(a, d);
      a = rc(a, d, null, b);
      try {
        Ma(sc, a);
      } finally {
        qc(a);
      }
    }
  }
}
function Rc(a, b, c, d) {
  c = nc(d);
  c = tc(c);
  if (null !== c) {
    var e = dc(c);
    if (null === e) c = null;else {
      var f = e.tag;
      if (13 === f) {
        c = ec(e);
        if (null !== c) return c;
        c = null;
      } else if (3 === f) {
        if (e.stateNode.hydrate) return 3 === e.tag ? e.stateNode.containerInfo : null;
        c = null;
      } else e !== c && (c = null);
    }
  }
  a = rc(a, d, c, b);
  try {
    Ma(sc, a);
  } finally {
    qc(a);
  }
  return null;
}
var jd = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  kd = ["Webkit", "ms", "Moz", "O"];
Object.keys(jd).forEach(function (a) {
  kd.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    jd[b] = jd[a];
  });
});
function ld(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || jd.hasOwnProperty(a) && jd[a] ? ("" + b).trim() : b + "px";
}
function md(a, b) {
  a = a.style;
  for (var c in b) if (b.hasOwnProperty(c)) {
    var d = 0 === c.indexOf("--"),
      e = ld(c, b[c], d);
    "float" === c && (c = "cssFloat");
    d ? a.setProperty(c, e) : a[c] = e;
  }
}
var nd = n({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function od(a, b) {
  if (b) {
    if (nd[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(u(137, a, ""));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw Error(u(60));
      if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw Error(u(61));
    }
    if (null != b.style && "object" !== typeof b.style) throw Error(u(62, ""));
  }
}
function pd(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var qd = Mb.html;
function rd(a, b) {
  a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;
  var c = cc(a);
  b = wa[b];
  for (var d = 0; d < b.length; d++) uc(b[d], a, c);
}
function sd() {}
function td(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function ud(a) {
  for (; a && a.firstChild;) a = a.firstChild;
  return a;
}
function vd(a, b) {
  var c = ud(a);
  a = 0;
  for (var d; c;) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return {
        node: c,
        offset: b - a
      };
      a = d;
    }
    a: {
      for (; c;) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = ud(c);
  }
}
function wd(a, b) {
  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? wd(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}
function xd() {
  for (var a = window, b = td(); b instanceof a.HTMLIFrameElement;) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = !1;
    }
    if (c) a = b.contentWindow;else break;
    b = td(a.document);
  }
  return b;
}
function yd(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
var zd = "$",
  Ad = "/$",
  Bd = "$?",
  Cd = "$!",
  Dd = null,
  Ed = null;
function Fd(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return !1;
}
function Gd(a, b) {
  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Hd = "function" === typeof setTimeout ? setTimeout : void 0,
  Id = "function" === typeof clearTimeout ? clearTimeout : void 0;
function Jd(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b) break;
  }
  return a;
}
function Kd(a) {
  a = a.previousSibling;
  for (var b = 0; a;) {
    if (8 === a.nodeType) {
      var c = a.data;
      if (c === zd || c === Cd || c === Bd) {
        if (0 === b) return a;
        b--;
      } else c === Ad && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Ld = Math.random().toString(36).slice(2),
  Md = "__reactInternalInstance$" + Ld,
  Nd = "__reactEventHandlers$" + Ld,
  Od = "__reactContainere$" + Ld;
function tc(a) {
  var b = a[Md];
  if (b) return b;
  for (var c = a.parentNode; c;) {
    if (b = c[Od] || c[Md]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child) for (a = Kd(a); null !== a;) {
        if (c = a[Md]) return c;
        a = Kd(a);
      }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Nc(a) {
  a = a[Md] || a[Od];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function Pd(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(u(33));
}
function Qd(a) {
  return a[Nd] || null;
}
function Rd(a) {
  do a = a.return; while (a && 5 !== a.tag);
  return a ? a : null;
}
function Sd(a, b) {
  var c = a.stateNode;
  if (!c) return null;
  var d = la(c);
  if (!d) return null;
  c = d[b];
  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;
    default:
      a = !1;
  }
  if (a) return null;
  if (c && "function" !== typeof c) throw Error(u(231, b, typeof c));
  return c;
}
function Td(a, b, c) {
  if (b = Sd(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a);
}
function Ud(a) {
  if (a && a.dispatchConfig.phasedRegistrationNames) {
    for (var b = a._targetInst, c = []; b;) c.push(b), b = Rd(b);
    for (b = c.length; 0 < b--;) Td(c[b], "captured", a);
    for (b = 0; b < c.length; b++) Td(c[b], "bubbled", a);
  }
}
function Vd(a, b, c) {
  a && c && c.dispatchConfig.registrationName && (b = Sd(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a));
}
function Wd(a) {
  a && a.dispatchConfig.registrationName && Vd(a._targetInst, null, a);
}
function Xd(a) {
  jc(a, Ud);
}
var Yd = null,
  Zd = null,
  $d = null;
function ae() {
  if ($d) return $d;
  var a,
    b = Zd,
    c = b.length,
    d,
    e = "value" in Yd ? Yd.value : Yd.textContent,
    f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++);
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
  return $d = e.slice(a, 1 < d ? 1 - d : void 0);
}
function be() {
  return !0;
}
function ce() {
  return !1;
}
function G(a, b, c, d) {
  this.dispatchConfig = a;
  this._targetInst = b;
  this.nativeEvent = c;
  a = this.constructor.Interface;
  for (var e in a) a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);
  this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? be : ce;
  this.isPropagationStopped = ce;
  return this;
}
n(G.prototype, {
  preventDefault: function preventDefault() {
    this.defaultPrevented = !0;
    var a = this.nativeEvent;
    a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = be);
  },
  stopPropagation: function stopPropagation() {
    var a = this.nativeEvent;
    a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = be);
  },
  persist: function persist() {
    this.isPersistent = be;
  },
  isPersistent: ce,
  destructor: function destructor() {
    var a = this.constructor.Interface,
      b;
    for (b in a) this[b] = null;
    this.nativeEvent = this._targetInst = this.dispatchConfig = null;
    this.isPropagationStopped = this.isDefaultPrevented = ce;
    this._dispatchInstances = this._dispatchListeners = null;
  }
});
G.Interface = {
  type: null,
  target: null,
  currentTarget: function currentTarget() {
    return null;
  },
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function timeStamp(a) {
    return a.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};
G.extend = function (a) {
  function b() {}
  function c() {
    return d.apply(this, arguments);
  }
  var d = this;
  b.prototype = d.prototype;
  var e = new b();
  n(e, c.prototype);
  c.prototype = e;
  c.prototype.constructor = c;
  c.Interface = n({}, d.Interface, a);
  c.extend = d.extend;
  de(c);
  return c;
};
de(G);
function ee(a, b, c, d) {
  if (this.eventPool.length) {
    var e = this.eventPool.pop();
    this.call(e, a, b, c, d);
    return e;
  }
  return new this(a, b, c, d);
}
function fe(a) {
  if (!(a instanceof this)) throw Error(u(279));
  a.destructor();
  10 > this.eventPool.length && this.eventPool.push(a);
}
function de(a) {
  a.eventPool = [];
  a.getPooled = ee;
  a.release = fe;
}
var ge = G.extend({
    data: null
  }),
  he = G.extend({
    data: null
  }),
  ie = [9, 13, 27, 32],
  je = ya && "CompositionEvent" in window,
  ke = null;
ya && "documentMode" in document && (ke = document.documentMode);
var le = ya && "TextEvent" in window && !ke,
  me = ya && (!je || ke && 8 < ke && 11 >= ke),
  ne = String.fromCharCode(32),
  oe = {
    beforeInput: {
      phasedRegistrationNames: {
        bubbled: "onBeforeInput",
        captured: "onBeforeInputCapture"
      },
      dependencies: ["compositionend", "keypress", "textInput", "paste"]
    },
    compositionEnd: {
      phasedRegistrationNames: {
        bubbled: "onCompositionEnd",
        captured: "onCompositionEndCapture"
      },
      dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
    },
    compositionStart: {
      phasedRegistrationNames: {
        bubbled: "onCompositionStart",
        captured: "onCompositionStartCapture"
      },
      dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
    },
    compositionUpdate: {
      phasedRegistrationNames: {
        bubbled: "onCompositionUpdate",
        captured: "onCompositionUpdateCapture"
      },
      dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
    }
  },
  pe = !1;
function qe(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== ie.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "blur":
      return !0;
    default:
      return !1;
  }
}
function re(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var se = !1;
function te(a, b) {
  switch (a) {
    case "compositionend":
      return re(b);
    case "keypress":
      if (32 !== b.which) return null;
      pe = !0;
      return ne;
    case "textInput":
      return a = b.data, a === ne && pe ? null : a;
    default:
      return null;
  }
}
function ue(a, b) {
  if (se) return "compositionend" === a || !je && qe(a, b) ? (a = ae(), $d = Zd = Yd = null, se = !1, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return me && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var ve = {
    eventTypes: oe,
    extractEvents: function extractEvents(a, b, c, d) {
      var e;
      if (je) b: {
        switch (a) {
          case "compositionstart":
            var f = oe.compositionStart;
            break b;
          case "compositionend":
            f = oe.compositionEnd;
            break b;
          case "compositionupdate":
            f = oe.compositionUpdate;
            break b;
        }
        f = void 0;
      } else se ? qe(a, c) && (f = oe.compositionEnd) : "keydown" === a && 229 === c.keyCode && (f = oe.compositionStart);
      f ? (me && "ko" !== c.locale && (se || f !== oe.compositionStart ? f === oe.compositionEnd && se && (e = ae()) : (Yd = d, Zd = "value" in Yd ? Yd.value : Yd.textContent, se = !0)), f = ge.getPooled(f, b, c, d), e ? f.data = e : (e = re(c), null !== e && (f.data = e)), Xd(f), e = f) : e = null;
      (a = le ? te(a, c) : ue(a, c)) ? (b = he.getPooled(oe.beforeInput, b, c, d), b.data = a, Xd(b)) : b = null;
      return null === e ? b : null === b ? e : [e, b];
    }
  },
  we = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
function xe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!we[a.type] : "textarea" === b ? !0 : !1;
}
var ye = {
  change: {
    phasedRegistrationNames: {
      bubbled: "onChange",
      captured: "onChangeCapture"
    },
    dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
  }
};
function ze(a, b, c) {
  a = G.getPooled(ye.change, a, b, c);
  a.type = "change";
  Da(c);
  Xd(a);
  return a;
}
var Ae = null,
  Be = null;
function Ce(a) {
  mc(a);
}
function De(a) {
  var b = Pd(a);
  if (yb(b)) return a;
}
function Ee(a, b) {
  if ("change" === a) return b;
}
var Fe = !1;
ya && (Fe = oc("input") && (!document.documentMode || 9 < document.documentMode));
function Ge() {
  Ae && (Ae.detachEvent("onpropertychange", He), Be = Ae = null);
}
function He(a) {
  if ("value" === a.propertyName && De(Be)) if (a = ze(Be, a, nc(a)), Ja) mc(a);else {
    Ja = !0;
    try {
      Fa(Ce, a);
    } finally {
      Ja = !1, La();
    }
  }
}
function Ie(a, b, c) {
  "focus" === a ? (Ge(), Ae = b, Be = c, Ae.attachEvent("onpropertychange", He)) : "blur" === a && Ge();
}
function Je(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return De(Be);
}
function Ke(a, b) {
  if ("click" === a) return De(b);
}
function Le(a, b) {
  if ("input" === a || "change" === a) return De(b);
}
var Me = {
    eventTypes: ye,
    _isInputEventSupported: Fe,
    extractEvents: function extractEvents(a, b, c, d) {
      var e = b ? Pd(b) : window,
        f = e.nodeName && e.nodeName.toLowerCase();
      if ("select" === f || "input" === f && "file" === e.type) var g = Ee;else if (xe(e)) {
        if (Fe) g = Le;else {
          g = Je;
          var h = Ie;
        }
      } else (f = e.nodeName) && "input" === f.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (g = Ke);
      if (g && (g = g(a, b))) return ze(g, c, d);
      h && h(a, e, b);
      "blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && Db(e, "number", e.value);
    }
  },
  Ne = G.extend({
    view: null,
    detail: null
  }),
  Oe = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
function Pe(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Oe[a]) ? !!b[a] : !1;
}
function Qe() {
  return Pe;
}
var Re = 0,
  Se = 0,
  Te = !1,
  Ue = !1,
  Ve = Ne.extend({
    screenX: null,
    screenY: null,
    clientX: null,
    clientY: null,
    pageX: null,
    pageY: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    getModifierState: Qe,
    button: null,
    buttons: null,
    relatedTarget: function relatedTarget(a) {
      return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
    },
    movementX: function movementX(a) {
      if ("movementX" in a) return a.movementX;
      var b = Re;
      Re = a.screenX;
      return Te ? "mousemove" === a.type ? a.screenX - b : 0 : (Te = !0, 0);
    },
    movementY: function movementY(a) {
      if ("movementY" in a) return a.movementY;
      var b = Se;
      Se = a.screenY;
      return Ue ? "mousemove" === a.type ? a.screenY - b : 0 : (Ue = !0, 0);
    }
  }),
  We = Ve.extend({
    pointerId: null,
    width: null,
    height: null,
    pressure: null,
    tangentialPressure: null,
    tiltX: null,
    tiltY: null,
    twist: null,
    pointerType: null,
    isPrimary: null
  }),
  Xe = {
    mouseEnter: {
      registrationName: "onMouseEnter",
      dependencies: ["mouseout", "mouseover"]
    },
    mouseLeave: {
      registrationName: "onMouseLeave",
      dependencies: ["mouseout", "mouseover"]
    },
    pointerEnter: {
      registrationName: "onPointerEnter",
      dependencies: ["pointerout", "pointerover"]
    },
    pointerLeave: {
      registrationName: "onPointerLeave",
      dependencies: ["pointerout", "pointerover"]
    }
  },
  Ye = {
    eventTypes: Xe,
    extractEvents: function extractEvents(a, b, c, d, e) {
      var f = "mouseover" === a || "pointerover" === a,
        g = "mouseout" === a || "pointerout" === a;
      if (f && 0 === (e & 32) && (c.relatedTarget || c.fromElement) || !g && !f) return null;
      f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window;
      if (g) {
        if (g = b, b = (b = c.relatedTarget || c.toElement) ? tc(b) : null, null !== b) {
          var h = dc(b);
          if (b !== h || 5 !== b.tag && 6 !== b.tag) b = null;
        }
      } else g = null;
      if (g === b) return null;
      if ("mouseout" === a || "mouseover" === a) {
        var k = Ve;
        var l = Xe.mouseLeave;
        var m = Xe.mouseEnter;
        var p = "mouse";
      } else if ("pointerout" === a || "pointerover" === a) k = We, l = Xe.pointerLeave, m = Xe.pointerEnter, p = "pointer";
      a = null == g ? f : Pd(g);
      f = null == b ? f : Pd(b);
      l = k.getPooled(l, g, c, d);
      l.type = p + "leave";
      l.target = a;
      l.relatedTarget = f;
      c = k.getPooled(m, b, c, d);
      c.type = p + "enter";
      c.target = f;
      c.relatedTarget = a;
      d = g;
      p = b;
      if (d && p) a: {
        k = d;
        m = p;
        g = 0;
        for (a = k; a; a = Rd(a)) g++;
        a = 0;
        for (b = m; b; b = Rd(b)) a++;
        for (; 0 < g - a;) k = Rd(k), g--;
        for (; 0 < a - g;) m = Rd(m), a--;
        for (; g--;) {
          if (k === m || k === m.alternate) break a;
          k = Rd(k);
          m = Rd(m);
        }
        k = null;
      } else k = null;
      m = k;
      for (k = []; d && d !== m;) {
        g = d.alternate;
        if (null !== g && g === m) break;
        k.push(d);
        d = Rd(d);
      }
      for (d = []; p && p !== m;) {
        g = p.alternate;
        if (null !== g && g === m) break;
        d.push(p);
        p = Rd(p);
      }
      for (p = 0; p < k.length; p++) Vd(k[p], "bubbled", l);
      for (p = d.length; 0 < p--;) Vd(d[p], "captured", c);
      return 0 === (e & 64) ? [l] : [l, c];
    }
  };
function Ze(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var $e = "function" === typeof Object.is ? Object.is : Ze,
  af = Object.prototype.hasOwnProperty;
function bf(a, b) {
  if ($e(a, b)) return !0;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
  var c = Object.keys(a),
    d = Object.keys(b);
  if (c.length !== d.length) return !1;
  for (d = 0; d < c.length; d++) if (!af.call(b, c[d]) || !$e(a[c[d]], b[c[d]])) return !1;
  return !0;
}
var cf = ya && "documentMode" in document && 11 >= document.documentMode,
  df = {
    select: {
      phasedRegistrationNames: {
        bubbled: "onSelect",
        captured: "onSelectCapture"
      },
      dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
    }
  },
  ef = null,
  ff = null,
  gf = null,
  hf = !1;
function jf(a, b) {
  var c = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;
  if (hf || null == ef || ef !== td(c)) return null;
  c = ef;
  "selectionStart" in c && yd(c) ? c = {
    start: c.selectionStart,
    end: c.selectionEnd
  } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
    anchorNode: c.anchorNode,
    anchorOffset: c.anchorOffset,
    focusNode: c.focusNode,
    focusOffset: c.focusOffset
  });
  return gf && bf(gf, c) ? null : (gf = c, a = G.getPooled(df.select, ff, a, b), a.type = "select", a.target = ef, Xd(a), a);
}
var kf = {
    eventTypes: df,
    extractEvents: function extractEvents(a, b, c, d, e, f) {
      e = f || (d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument);
      if (!(f = !e)) {
        a: {
          e = cc(e);
          f = wa.onSelect;
          for (var g = 0; g < f.length; g++) if (!e.has(f[g])) {
            e = !1;
            break a;
          }
          e = !0;
        }
        f = !e;
      }
      if (f) return null;
      e = b ? Pd(b) : window;
      switch (a) {
        case "focus":
          if (xe(e) || "true" === e.contentEditable) ef = e, ff = b, gf = null;
          break;
        case "blur":
          gf = ff = ef = null;
          break;
        case "mousedown":
          hf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          return hf = !1, jf(c, d);
        case "selectionchange":
          if (cf) break;
        case "keydown":
        case "keyup":
          return jf(c, d);
      }
      return null;
    }
  },
  lf = G.extend({
    animationName: null,
    elapsedTime: null,
    pseudoElement: null
  }),
  mf = G.extend({
    clipboardData: function clipboardData(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
  }),
  nf = Ne.extend({
    relatedTarget: null
  });
function of(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
var pf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  qf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  rf = Ne.extend({
    key: function key(a) {
      if (a.key) {
        var b = pf[a.key] || a.key;
        if ("Unidentified" !== b) return b;
      }
      return "keypress" === a.type ? (a = of(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? qf[a.keyCode] || "Unidentified" : "";
    },
    location: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    repeat: null,
    locale: null,
    getModifierState: Qe,
    charCode: function charCode(a) {
      return "keypress" === a.type ? of(a) : 0;
    },
    keyCode: function keyCode(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    },
    which: function which(a) {
      return "keypress" === a.type ? of(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }
  }),
  sf = Ve.extend({
    dataTransfer: null
  }),
  tf = Ne.extend({
    touches: null,
    targetTouches: null,
    changedTouches: null,
    altKey: null,
    metaKey: null,
    ctrlKey: null,
    shiftKey: null,
    getModifierState: Qe
  }),
  uf = G.extend({
    propertyName: null,
    elapsedTime: null,
    pseudoElement: null
  }),
  vf = Ve.extend({
    deltaX: function deltaX(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function deltaY(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: null,
    deltaMode: null
  }),
  wf = {
    eventTypes: Wc,
    extractEvents: function extractEvents(a, b, c, d) {
      var e = Yc.get(a);
      if (!e) return null;
      switch (a) {
        case "keypress":
          if (0 === of(c)) return null;
        case "keydown":
        case "keyup":
          a = rf;
          break;
        case "blur":
        case "focus":
          a = nf;
          break;
        case "click":
          if (2 === c.button) return null;
        case "auxclick":
        case "dblclick":
        case "mousedown":
        case "mousemove":
        case "mouseup":
        case "mouseout":
        case "mouseover":
        case "contextmenu":
          a = Ve;
          break;
        case "drag":
        case "dragend":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "dragstart":
        case "drop":
          a = sf;
          break;
        case "touchcancel":
        case "touchend":
        case "touchmove":
        case "touchstart":
          a = tf;
          break;
        case Xb:
        case Yb:
        case Zb:
          a = lf;
          break;
        case $b:
          a = uf;
          break;
        case "scroll":
          a = Ne;
          break;
        case "wheel":
          a = vf;
          break;
        case "copy":
        case "cut":
        case "paste":
          a = mf;
          break;
        case "gotpointercapture":
        case "lostpointercapture":
        case "pointercancel":
        case "pointerdown":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "pointerup":
          a = We;
          break;
        default:
          a = G;
      }
      b = a.getPooled(e, b, c, d);
      Xd(b);
      return b;
    }
  };
if (pa) throw Error(u(101));
pa = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
ra();
var xf = Nc;
la = Qd;
ma = xf;
na = Pd;
xa({
  SimpleEventPlugin: wf,
  EnterLeaveEventPlugin: Ye,
  ChangeEventPlugin: Me,
  SelectEventPlugin: kf,
  BeforeInputEventPlugin: ve
});
var yf = [],
  zf = -1;
function H(a) {
  0 > zf || (a.current = yf[zf], yf[zf] = null, zf--);
}
function I(a, b) {
  zf++;
  yf[zf] = a.current;
  a.current = b;
}
var Af = {},
  J = {
    current: Af
  },
  K = {
    current: !1
  },
  Bf = Af;
function Cf(a, b) {
  var c = a.type.contextTypes;
  if (!c) return Af;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {},
    f;
  for (f in c) e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function L(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function Df() {
  H(K);
  H(J);
}
function Ef(a, b, c) {
  if (J.current !== Af) throw Error(u(168));
  I(J, b);
  I(K, c);
}
function Ff(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();
  for (var e in d) if (!(e in a)) throw Error(u(108, pb(b) || "Unknown", e));
  return n({}, c, {}, d);
}
function Gf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Af;
  Bf = J.current;
  I(J, a);
  I(K, K.current);
  return !0;
}
function Hf(a, b, c) {
  var d = a.stateNode;
  if (!d) throw Error(u(169));
  c ? (a = Ff(a, b, Bf), d.__reactInternalMemoizedMergedChildContext = a, H(K), H(J), I(J, a)) : H(K);
  I(K, c);
}
var If = r.unstable_runWithPriority,
  Jf = r.unstable_scheduleCallback,
  Kf = r.unstable_cancelCallback,
  Lf = r.unstable_requestPaint,
  Mf = r.unstable_now,
  Nf = r.unstable_getCurrentPriorityLevel,
  Of = r.unstable_ImmediatePriority,
  Pf = r.unstable_UserBlockingPriority,
  Qf = r.unstable_NormalPriority,
  Rf = r.unstable_LowPriority,
  Sf = r.unstable_IdlePriority,
  Tf = {},
  Uf = r.unstable_shouldYield,
  Vf = void 0 !== Lf ? Lf : function () {},
  Wf = null,
  Xf = null,
  Yf = !1,
  Zf = Mf(),
  $f = 1E4 > Zf ? Mf : function () {
    return Mf() - Zf;
  };
function ag() {
  switch (Nf()) {
    case Of:
      return 99;
    case Pf:
      return 98;
    case Qf:
      return 97;
    case Rf:
      return 96;
    case Sf:
      return 95;
    default:
      throw Error(u(332));
  }
}
function bg(a) {
  switch (a) {
    case 99:
      return Of;
    case 98:
      return Pf;
    case 97:
      return Qf;
    case 96:
      return Rf;
    case 95:
      return Sf;
    default:
      throw Error(u(332));
  }
}
function cg(a, b) {
  a = bg(a);
  return If(a, b);
}
function dg(a, b, c) {
  a = bg(a);
  return Jf(a, b, c);
}
function eg(a) {
  null === Wf ? (Wf = [a], Xf = Jf(Of, fg)) : Wf.push(a);
  return Tf;
}
function gg() {
  if (null !== Xf) {
    var a = Xf;
    Xf = null;
    Kf(a);
  }
  fg();
}
function fg() {
  if (!Yf && null !== Wf) {
    Yf = !0;
    var a = 0;
    try {
      var b = Wf;
      cg(99, function () {
        for (; a < b.length; a++) {
          var c = b[a];
          do c = c(!0); while (null !== c);
        }
      });
      Wf = null;
    } catch (c) {
      throw null !== Wf && (Wf = Wf.slice(a + 1)), Jf(Of, gg), c;
    } finally {
      Yf = !1;
    }
  }
}
function hg(a, b, c) {
  c /= 10;
  return 1073741821 - (((1073741821 - a + b / 10) / c | 0) + 1) * c;
}
function ig(a, b) {
  if (a && a.defaultProps) {
    b = n({}, b);
    a = a.defaultProps;
    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
  }
  return b;
}
var jg = {
    current: null
  },
  kg = null,
  lg = null,
  mg = null;
function ng() {
  mg = lg = kg = null;
}
function og(a) {
  var b = jg.current;
  H(jg);
  a.type._context._currentValue = b;
}
function pg(a, b) {
  for (; null !== a;) {
    var c = a.alternate;
    if (a.childExpirationTime < b) a.childExpirationTime = b, null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);else if (null !== c && c.childExpirationTime < b) c.childExpirationTime = b;else break;
    a = a.return;
  }
}
function qg(a, b) {
  kg = a;
  mg = lg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (a.expirationTime >= b && (rg = !0), a.firstContext = null);
}
function sg(a, b) {
  if (mg !== a && !1 !== b && 0 !== b) {
    if ("number" !== typeof b || 1073741823 === b) mg = a, b = 1073741823;
    b = {
      context: a,
      observedBits: b,
      next: null
    };
    if (null === lg) {
      if (null === kg) throw Error(u(308));
      lg = b;
      kg.dependencies = {
        expirationTime: 0,
        firstContext: b,
        responders: null
      };
    } else lg = lg.next = b;
  }
  return a._currentValue;
}
var tg = !1;
function ug(a) {
  a.updateQueue = {
    baseState: a.memoizedState,
    baseQueue: null,
    shared: {
      pending: null
    },
    effects: null
  };
}
function vg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = {
    baseState: a.baseState,
    baseQueue: a.baseQueue,
    shared: a.shared,
    effects: a.effects
  });
}
function wg(a, b) {
  a = {
    expirationTime: a,
    suspenseConfig: b,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
  return a.next = a;
}
function xg(a, b) {
  a = a.updateQueue;
  if (null !== a) {
    a = a.shared;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}
function yg(a, b) {
  var c = a.alternate;
  null !== c && vg(c, a);
  a = a.updateQueue;
  c = a.baseQueue;
  null === c ? (a.baseQueue = b.next = b, b.next = b) : (b.next = c.next, c.next = b);
}
function zg(a, b, c, d) {
  var e = a.updateQueue;
  tg = !1;
  var f = e.baseQueue,
    g = e.shared.pending;
  if (null !== g) {
    if (null !== f) {
      var h = f.next;
      f.next = g.next;
      g.next = h;
    }
    f = g;
    e.shared.pending = null;
    h = a.alternate;
    null !== h && (h = h.updateQueue, null !== h && (h.baseQueue = g));
  }
  if (null !== f) {
    h = f.next;
    var k = e.baseState,
      l = 0,
      m = null,
      p = null,
      x = null;
    if (null !== h) {
      var z = h;
      do {
        g = z.expirationTime;
        if (g < d) {
          var ca = {
            expirationTime: z.expirationTime,
            suspenseConfig: z.suspenseConfig,
            tag: z.tag,
            payload: z.payload,
            callback: z.callback,
            next: null
          };
          null === x ? (p = x = ca, m = k) : x = x.next = ca;
          g > l && (l = g);
        } else {
          null !== x && (x = x.next = {
            expirationTime: 1073741823,
            suspenseConfig: z.suspenseConfig,
            tag: z.tag,
            payload: z.payload,
            callback: z.callback,
            next: null
          });
          Ag(g, z.suspenseConfig);
          a: {
            var D = a,
              t = z;
            g = b;
            ca = c;
            switch (t.tag) {
              case 1:
                D = t.payload;
                if ("function" === typeof D) {
                  k = D.call(ca, k, g);
                  break a;
                }
                k = D;
                break a;
              case 3:
                D.effectTag = D.effectTag & -4097 | 64;
              case 0:
                D = t.payload;
                g = "function" === typeof D ? D.call(ca, k, g) : D;
                if (null === g || void 0 === g) break a;
                k = n({}, k, g);
                break a;
              case 2:
                tg = !0;
            }
          }
          null !== z.callback && (a.effectTag |= 32, g = e.effects, null === g ? e.effects = [z] : g.push(z));
        }
        z = z.next;
        if (null === z || z === h) if (g = e.shared.pending, null === g) break;else z = f.next = g.next, g.next = h, e.baseQueue = f = g, e.shared.pending = null;
      } while (1);
    }
    null === x ? m = k : x.next = p;
    e.baseState = m;
    e.baseQueue = x;
    Bg(l);
    a.expirationTime = l;
    a.memoizedState = k;
  }
}
function Cg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a) for (b = 0; b < a.length; b++) {
    var d = a[b],
      e = d.callback;
    if (null !== e) {
      d.callback = null;
      d = e;
      e = c;
      if ("function" !== typeof d) throw Error(u(191, d));
      d.call(e);
    }
  }
}
var Dg = Wa.ReactCurrentBatchConfig,
  Eg = new aa.Component().refs;
function Fg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : n({}, b, c);
  a.memoizedState = c;
  0 === a.expirationTime && (a.updateQueue.baseState = c);
}
var Jg = {
  isMounted: function isMounted(a) {
    return (a = a._reactInternalFiber) ? dc(a) === a : !1;
  },
  enqueueSetState: function enqueueSetState(a, b, c) {
    a = a._reactInternalFiber;
    var d = Gg(),
      e = Dg.suspense;
    d = Hg(d, a, e);
    e = wg(d, e);
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    xg(a, e);
    Ig(a, d);
  },
  enqueueReplaceState: function enqueueReplaceState(a, b, c) {
    a = a._reactInternalFiber;
    var d = Gg(),
      e = Dg.suspense;
    d = Hg(d, a, e);
    e = wg(d, e);
    e.tag = 1;
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    xg(a, e);
    Ig(a, d);
  },
  enqueueForceUpdate: function enqueueForceUpdate(a, b) {
    a = a._reactInternalFiber;
    var c = Gg(),
      d = Dg.suspense;
    c = Hg(c, a, d);
    d = wg(c, d);
    d.tag = 2;
    void 0 !== b && null !== b && (d.callback = b);
    xg(a, d);
    Ig(a, c);
  }
};
function Kg(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !bf(c, d) || !bf(e, f) : !0;
}
function Lg(a, b, c) {
  var d = !1,
    e = Af;
  var f = b.contextType;
  "object" === typeof f && null !== f ? f = sg(f) : (e = L(b) ? Bf : J.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Cf(a, e) : Af);
  b = new b(c, f);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Jg;
  a.stateNode = b;
  b._reactInternalFiber = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function Mg(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Jg.enqueueReplaceState(b, b.state, null);
}
function Ng(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Eg;
  ug(a);
  var f = b.contextType;
  "object" === typeof f && null !== f ? e.context = sg(f) : (f = L(b) ? Bf : J.current, e.context = Cf(a, f));
  zg(a, c, e, d);
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  "function" === typeof f && (Fg(a, b, f, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Jg.enqueueReplaceState(e, e.state, null), zg(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.effectTag |= 4);
}
var Og = Array.isArray;
function Pg(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag) throw Error(u(309));
        var d = c.stateNode;
      }
      if (!d) throw Error(u(147, a));
      var e = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;
      b = function b(a) {
        var b = d.refs;
        b === Eg && (b = d.refs = {});
        null === a ? delete b[e] : b[e] = a;
      };
      b._stringRef = e;
      return b;
    }
    if ("string" !== typeof a) throw Error(u(284));
    if (!c._owner) throw Error(u(290, a));
  }
  return a;
}
function Qg(a, b) {
  if ("textarea" !== a.type) throw Error(u(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, ""));
}
function Rg(a) {
  function b(b, c) {
    if (a) {
      var d = b.lastEffect;
      null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
      c.nextEffect = null;
      c.effectTag = 8;
    }
  }
  function c(c, d) {
    if (!a) return null;
    for (; null !== d;) b(c, d), d = d.sibling;
    return null;
  }
  function d(a, b) {
    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
    return a;
  }
  function e(a, b) {
    a = Sg(a, b);
    a.index = 0;
    a.sibling = null;
    return a;
  }
  function f(b, c, d) {
    b.index = d;
    if (!a) return c;
    d = b.alternate;
    if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;
    b.effectTag = 2;
    return c;
  }
  function g(b) {
    a && null === b.alternate && (b.effectTag = 2);
    return b;
  }
  function h(a, b, c, d) {
    if (null === b || 6 !== b.tag) return b = Tg(c, a.mode, d), b.return = a, b;
    b = e(b, c);
    b.return = a;
    return b;
  }
  function k(a, b, c, d) {
    if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Pg(a, b, c), d.return = a, d;
    d = Ug(c.type, c.key, c.props, null, a.mode, d);
    d.ref = Pg(a, b, c);
    d.return = a;
    return d;
  }
  function l(a, b, c, d) {
    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Vg(c, a.mode, d), b.return = a, b;
    b = e(b, c.children || []);
    b.return = a;
    return b;
  }
  function m(a, b, c, d, f) {
    if (null === b || 7 !== b.tag) return b = Wg(c, a.mode, d, f), b.return = a, b;
    b = e(b, c);
    b.return = a;
    return b;
  }
  function p(a, b, c) {
    if ("string" === typeof b || "number" === typeof b) return b = Tg("" + b, a.mode, c), b.return = a, b;
    if ("object" === typeof b && null !== b) {
      switch (b.$$typeof) {
        case Za:
          return c = Ug(b.type, b.key, b.props, null, a.mode, c), c.ref = Pg(a, null, b), c.return = a, c;
        case $a:
          return b = Vg(b, a.mode, c), b.return = a, b;
      }
      if (Og(b) || nb(b)) return b = Wg(b, a.mode, c, null), b.return = a, b;
      Qg(a, b);
    }
    return null;
  }
  function x(a, b, c, d) {
    var e = null !== b ? b.key : null;
    if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case Za:
          return c.key === e ? c.type === ab ? m(a, b, c.props.children, d, e) : k(a, b, c, d) : null;
        case $a:
          return c.key === e ? l(a, b, c, d) : null;
      }
      if (Og(c) || nb(c)) return null !== e ? null : m(a, b, c, d, null);
      Qg(a, c);
    }
    return null;
  }
  function z(a, b, c, d, e) {
    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
    if ("object" === typeof d && null !== d) {
      switch (d.$$typeof) {
        case Za:
          return a = a.get(null === d.key ? c : d.key) || null, d.type === ab ? m(b, a, d.props.children, e, d.key) : k(b, a, d, e);
        case $a:
          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
      }
      if (Og(d) || nb(d)) return a = a.get(c) || null, m(b, a, d, e, null);
      Qg(b, d);
    }
    return null;
  }
  function ca(e, g, h, k) {
    for (var l = null, t = null, m = g, y = g = 0, A = null; null !== m && y < h.length; y++) {
      m.index > y ? (A = m, m = null) : A = m.sibling;
      var q = x(e, m, h[y], k);
      if (null === q) {
        null === m && (m = A);
        break;
      }
      a && m && null === q.alternate && b(e, m);
      g = f(q, g, y);
      null === t ? l = q : t.sibling = q;
      t = q;
      m = A;
    }
    if (y === h.length) return c(e, m), l;
    if (null === m) {
      for (; y < h.length; y++) m = p(e, h[y], k), null !== m && (g = f(m, g, y), null === t ? l = m : t.sibling = m, t = m);
      return l;
    }
    for (m = d(e, m); y < h.length; y++) A = z(m, e, y, h[y], k), null !== A && (a && null !== A.alternate && m.delete(null === A.key ? y : A.key), g = f(A, g, y), null === t ? l = A : t.sibling = A, t = A);
    a && m.forEach(function (a) {
      return b(e, a);
    });
    return l;
  }
  function D(e, g, h, l) {
    var k = nb(h);
    if ("function" !== typeof k) throw Error(u(150));
    h = k.call(h);
    if (null == h) throw Error(u(151));
    for (var m = k = null, t = g, y = g = 0, A = null, q = h.next(); null !== t && !q.done; y++, q = h.next()) {
      t.index > y ? (A = t, t = null) : A = t.sibling;
      var D = x(e, t, q.value, l);
      if (null === D) {
        null === t && (t = A);
        break;
      }
      a && t && null === D.alternate && b(e, t);
      g = f(D, g, y);
      null === m ? k = D : m.sibling = D;
      m = D;
      t = A;
    }
    if (q.done) return c(e, t), k;
    if (null === t) {
      for (; !q.done; y++, q = h.next()) q = p(e, q.value, l), null !== q && (g = f(q, g, y), null === m ? k = q : m.sibling = q, m = q);
      return k;
    }
    for (t = d(e, t); !q.done; y++, q = h.next()) q = z(t, e, y, q.value, l), null !== q && (a && null !== q.alternate && t.delete(null === q.key ? y : q.key), g = f(q, g, y), null === m ? k = q : m.sibling = q, m = q);
    a && t.forEach(function (a) {
      return b(e, a);
    });
    return k;
  }
  return function (a, d, f, h) {
    var k = "object" === typeof f && null !== f && f.type === ab && null === f.key;
    k && (f = f.props.children);
    var l = "object" === typeof f && null !== f;
    if (l) switch (f.$$typeof) {
      case Za:
        a: {
          l = f.key;
          for (k = d; null !== k;) {
            if (k.key === l) {
              switch (k.tag) {
                case 7:
                  if (f.type === ab) {
                    c(a, k.sibling);
                    d = e(k, f.props.children);
                    d.return = a;
                    a = d;
                    break a;
                  }
                  break;
                default:
                  if (k.elementType === f.type) {
                    c(a, k.sibling);
                    d = e(k, f.props);
                    d.ref = Pg(a, k, f);
                    d.return = a;
                    a = d;
                    break a;
                  }
              }
              c(a, k);
              break;
            } else b(a, k);
            k = k.sibling;
          }
          f.type === ab ? (d = Wg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Ug(f.type, f.key, f.props, null, a.mode, h), h.ref = Pg(a, d, f), h.return = a, a = h);
        }
        return g(a);
      case $a:
        a: {
          for (k = f.key; null !== d;) {
            if (d.key === k) {
              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                c(a, d.sibling);
                d = e(d, f.children || []);
                d.return = a;
                a = d;
                break a;
              } else {
                c(a, d);
                break;
              }
            } else b(a, d);
            d = d.sibling;
          }
          d = Vg(f, a.mode, h);
          d.return = a;
          a = d;
        }
        return g(a);
    }
    if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Tg(f, a.mode, h), d.return = a, a = d), g(a);
    if (Og(f)) return ca(a, d, f, h);
    if (nb(f)) return D(a, d, f, h);
    l && Qg(a, f);
    if ("undefined" === typeof f && !k) switch (a.tag) {
      case 1:
      case 0:
        throw a = a.type, Error(u(152, a.displayName || a.name || "Component"));
    }
    return c(a, d);
  };
}
var Xg = Rg(!0),
  Yg = Rg(!1),
  Zg = {},
  $g = {
    current: Zg
  },
  ah = {
    current: Zg
  },
  bh = {
    current: Zg
  };
function ch(a) {
  if (a === Zg) throw Error(u(174));
  return a;
}
function dh(a, b) {
  I(bh, b);
  I(ah, a);
  I($g, Zg);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : Ob(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = Ob(b, a);
  }
  H($g);
  I($g, b);
}
function eh() {
  H($g);
  H(ah);
  H(bh);
}
function fh(a) {
  ch(bh.current);
  var b = ch($g.current);
  var c = Ob(b, a.type);
  b !== c && (I(ah, a), I($g, c));
}
function gh(a) {
  ah.current === a && (H($g), H(ah));
}
var M = {
  current: 0
};
function hh(a) {
  for (var b = a; null !== b;) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || c.data === Bd || c.data === Cd)) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.effectTag & 64)) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a) break;
    for (; null === b.sibling;) {
      if (null === b.return || b.return === a) return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
function ih(a, b) {
  return {
    responder: a,
    props: b
  };
}
var jh = Wa.ReactCurrentDispatcher,
  kh = Wa.ReactCurrentBatchConfig,
  lh = 0,
  N = null,
  O = null,
  P = null,
  mh = !1;
function Q() {
  throw Error(u(321));
}
function nh(a, b) {
  if (null === b) return !1;
  for (var c = 0; c < b.length && c < a.length; c++) if (!$e(a[c], b[c])) return !1;
  return !0;
}
function oh(a, b, c, d, e, f) {
  lh = f;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.expirationTime = 0;
  jh.current = null === a || null === a.memoizedState ? ph : qh;
  a = c(d, e);
  if (b.expirationTime === lh) {
    f = 0;
    do {
      b.expirationTime = 0;
      if (!(25 > f)) throw Error(u(301));
      f += 1;
      P = O = null;
      b.updateQueue = null;
      jh.current = rh;
      a = c(d, e);
    } while (b.expirationTime === lh);
  }
  jh.current = sh;
  b = null !== O && null !== O.next;
  lh = 0;
  P = O = N = null;
  mh = !1;
  if (b) throw Error(u(300));
  return a;
}
function th() {
  var a = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function uh() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = O.next;
  var b = null === P ? N.memoizedState : P.next;
  if (null !== b) P = b, O = a;else {
    if (null === a) throw Error(u(310));
    O = a;
    a = {
      memoizedState: O.memoizedState,
      baseState: O.baseState,
      baseQueue: O.baseQueue,
      queue: O.queue,
      next: null
    };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function vh(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function wh(a) {
  var b = uh(),
    c = b.queue;
  if (null === c) throw Error(u(311));
  c.lastRenderedReducer = a;
  var d = O,
    e = d.baseQueue,
    f = c.pending;
  if (null !== f) {
    if (null !== e) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (null !== e) {
    e = e.next;
    d = d.baseState;
    var h = g = f = null,
      k = e;
    do {
      var l = k.expirationTime;
      if (l < lh) {
        var m = {
          expirationTime: k.expirationTime,
          suspenseConfig: k.suspenseConfig,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        };
        null === h ? (g = h = m, f = d) : h = h.next = m;
        l > N.expirationTime && (N.expirationTime = l, Bg(l));
      } else null !== h && (h = h.next = {
        expirationTime: 1073741823,
        suspenseConfig: k.suspenseConfig,
        action: k.action,
        eagerReducer: k.eagerReducer,
        eagerState: k.eagerState,
        next: null
      }), Ag(l, k.suspenseConfig), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
      k = k.next;
    } while (null !== k && k !== e);
    null === h ? f = d : h.next = g;
    $e(d, b.memoizedState) || (rg = !0);
    b.memoizedState = d;
    b.baseState = f;
    b.baseQueue = h;
    c.lastRenderedState = d;
  }
  return [b.memoizedState, c.dispatch];
}
function xh(a) {
  var b = uh(),
    c = b.queue;
  if (null === c) throw Error(u(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch,
    e = c.pending,
    f = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do f = a(f, g.action), g = g.next; while (g !== e);
    $e(f, b.memoizedState) || (rg = !0);
    b.memoizedState = f;
    null === b.baseQueue && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function yh(a) {
  var b = th();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = {
    pending: null,
    dispatch: null,
    lastRenderedReducer: vh,
    lastRenderedState: a
  };
  a = a.dispatch = zh.bind(null, N, a);
  return [b.memoizedState, a];
}
function Ah(a, b, c, d) {
  a = {
    tag: a,
    create: b,
    destroy: c,
    deps: d,
    next: null
  };
  b = N.updateQueue;
  null === b ? (b = {
    lastEffect: null
  }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Bh() {
  return uh().memoizedState;
}
function Ch(a, b, c, d) {
  var e = th();
  N.effectTag |= a;
  e.memoizedState = Ah(1 | b, c, void 0, void 0 === d ? null : d);
}
function Dh(a, b, c, d) {
  var e = uh();
  d = void 0 === d ? null : d;
  var f = void 0;
  if (null !== O) {
    var g = O.memoizedState;
    f = g.destroy;
    if (null !== d && nh(d, g.deps)) {
      Ah(b, c, f, d);
      return;
    }
  }
  N.effectTag |= a;
  e.memoizedState = Ah(1 | b, c, f, d);
}
function Eh(a, b) {
  return Ch(516, 4, a, b);
}
function Fh(a, b) {
  return Dh(516, 4, a, b);
}
function Gh(a, b) {
  return Dh(4, 2, a, b);
}
function Hh(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function () {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
    b.current = null;
  };
}
function Ih(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return Dh(4, 2, Hh.bind(null, b, a), c);
}
function Jh() {}
function Kh(a, b) {
  th().memoizedState = [a, void 0 === b ? null : b];
  return a;
}
function Lh(a, b) {
  var c = uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && nh(b, d[1])) return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Mh(a, b) {
  var c = uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && nh(b, d[1])) return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Nh(a, b, c) {
  var d = ag();
  cg(98 > d ? 98 : d, function () {
    a(!0);
  });
  cg(97 < d ? 97 : d, function () {
    var d = kh.suspense;
    kh.suspense = void 0 === b ? null : b;
    try {
      a(!1), c();
    } finally {
      kh.suspense = d;
    }
  });
}
function zh(a, b, c) {
  var d = Gg(),
    e = Dg.suspense;
  d = Hg(d, a, e);
  e = {
    expirationTime: d,
    suspenseConfig: e,
    action: c,
    eagerReducer: null,
    eagerState: null,
    next: null
  };
  var f = b.pending;
  null === f ? e.next = e : (e.next = f.next, f.next = e);
  b.pending = e;
  f = a.alternate;
  if (a === N || null !== f && f === N) mh = !0, e.expirationTime = lh, N.expirationTime = lh;else {
    if (0 === a.expirationTime && (null === f || 0 === f.expirationTime) && (f = b.lastRenderedReducer, null !== f)) try {
      var g = b.lastRenderedState,
        h = f(g, c);
      e.eagerReducer = f;
      e.eagerState = h;
      if ($e(h, g)) return;
    } catch (k) {} finally {}
    Ig(a, d);
  }
}
var sh = {
    readContext: sg,
    useCallback: Q,
    useContext: Q,
    useEffect: Q,
    useImperativeHandle: Q,
    useLayoutEffect: Q,
    useMemo: Q,
    useReducer: Q,
    useRef: Q,
    useState: Q,
    useDebugValue: Q,
    useResponder: Q,
    useDeferredValue: Q,
    useTransition: Q
  },
  ph = {
    readContext: sg,
    useCallback: Kh,
    useContext: sg,
    useEffect: Eh,
    useImperativeHandle: function useImperativeHandle(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return Ch(4, 2, Hh.bind(null, b, a), c);
    },
    useLayoutEffect: function useLayoutEffect(a, b) {
      return Ch(4, 2, a, b);
    },
    useMemo: function useMemo(a, b) {
      var c = th();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    },
    useReducer: function useReducer(a, b, c) {
      var d = th();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = d.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: b
      };
      a = a.dispatch = zh.bind(null, N, a);
      return [d.memoizedState, a];
    },
    useRef: function useRef(a) {
      var b = th();
      a = {
        current: a
      };
      return b.memoizedState = a;
    },
    useState: yh,
    useDebugValue: Jh,
    useResponder: ih,
    useDeferredValue: function useDeferredValue(a, b) {
      var c = yh(a),
        d = c[0],
        e = c[1];
      Eh(function () {
        var c = kh.suspense;
        kh.suspense = void 0 === b ? null : b;
        try {
          e(a);
        } finally {
          kh.suspense = c;
        }
      }, [a, b]);
      return d;
    },
    useTransition: function useTransition(a) {
      var b = yh(!1),
        c = b[0];
      b = b[1];
      return [Kh(Nh.bind(null, b, a), [b, a]), c];
    }
  },
  qh = {
    readContext: sg,
    useCallback: Lh,
    useContext: sg,
    useEffect: Fh,
    useImperativeHandle: Ih,
    useLayoutEffect: Gh,
    useMemo: Mh,
    useReducer: wh,
    useRef: Bh,
    useState: function useState() {
      return wh(vh);
    },
    useDebugValue: Jh,
    useResponder: ih,
    useDeferredValue: function useDeferredValue(a, b) {
      var c = wh(vh),
        d = c[0],
        e = c[1];
      Fh(function () {
        var c = kh.suspense;
        kh.suspense = void 0 === b ? null : b;
        try {
          e(a);
        } finally {
          kh.suspense = c;
        }
      }, [a, b]);
      return d;
    },
    useTransition: function useTransition(a) {
      var b = wh(vh),
        c = b[0];
      b = b[1];
      return [Lh(Nh.bind(null, b, a), [b, a]), c];
    }
  },
  rh = {
    readContext: sg,
    useCallback: Lh,
    useContext: sg,
    useEffect: Fh,
    useImperativeHandle: Ih,
    useLayoutEffect: Gh,
    useMemo: Mh,
    useReducer: xh,
    useRef: Bh,
    useState: function useState() {
      return xh(vh);
    },
    useDebugValue: Jh,
    useResponder: ih,
    useDeferredValue: function useDeferredValue(a, b) {
      var c = xh(vh),
        d = c[0],
        e = c[1];
      Fh(function () {
        var c = kh.suspense;
        kh.suspense = void 0 === b ? null : b;
        try {
          e(a);
        } finally {
          kh.suspense = c;
        }
      }, [a, b]);
      return d;
    },
    useTransition: function useTransition(a) {
      var b = xh(vh),
        c = b[0];
      b = b[1];
      return [Lh(Nh.bind(null, b, a), [b, a]), c];
    }
  },
  Oh = null,
  Ph = null,
  Qh = !1;
function Rh(a, b) {
  var c = Sh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.effectTag = 8;
  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function Th(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, !0) : !1;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;
    case 13:
      return !1;
    default:
      return !1;
  }
}
function Uh(a) {
  if (Qh) {
    var b = Ph;
    if (b) {
      var c = b;
      if (!Th(a, b)) {
        b = Jd(c.nextSibling);
        if (!b || !Th(a, b)) {
          a.effectTag = a.effectTag & -1025 | 2;
          Qh = !1;
          Oh = a;
          return;
        }
        Rh(Oh, c);
      }
      Oh = a;
      Ph = Jd(b.firstChild);
    } else a.effectTag = a.effectTag & -1025 | 2, Qh = !1, Oh = a;
  }
}
function Vh(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
  Oh = a;
}
function Wh(a) {
  if (a !== Oh) return !1;
  if (!Qh) return Vh(a), Qh = !0, !1;
  var b = a.type;
  if (5 !== a.tag || "head" !== b && "body" !== b && !Gd(b, a.memoizedProps)) for (b = Ph; b;) Rh(a, b), b = Jd(b.nextSibling);
  Vh(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(u(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a;) {
        if (8 === a.nodeType) {
          var c = a.data;
          if (c === Ad) {
            if (0 === b) {
              Ph = Jd(a.nextSibling);
              break a;
            }
            b--;
          } else c !== zd && c !== Cd && c !== Bd || b++;
        }
        a = a.nextSibling;
      }
      Ph = null;
    }
  } else Ph = Oh ? Jd(a.stateNode.nextSibling) : null;
  return !0;
}
function Xh() {
  Ph = Oh = null;
  Qh = !1;
}
var Yh = Wa.ReactCurrentOwner,
  rg = !1;
function R(a, b, c, d) {
  b.child = null === a ? Yg(b, null, c, d) : Xg(b, a.child, c, d);
}
function Zh(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  qg(b, e);
  d = oh(a, b, c, d, f, e);
  if (null !== a && !rg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
  b.effectTag |= 1;
  R(a, b, d, e);
  return b.child;
}
function ai(a, b, c, d, e, f) {
  if (null === a) {
    var g = c.type;
    if ("function" === typeof g && !bi(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ci(a, b, g, d, e, f);
    a = Ug(c.type, null, d, null, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g = a.child;
  if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : bf, c(e, d) && a.ref === b.ref)) return $h(a, b, f);
  b.effectTag |= 1;
  a = Sg(g, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ci(a, b, c, d, e, f) {
  return null !== a && bf(a.memoizedProps, d) && a.ref === b.ref && (rg = !1, e < f) ? (b.expirationTime = a.expirationTime, $h(a, b, f)) : di(a, b, c, d, f);
}
function ei(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
}
function di(a, b, c, d, e) {
  var f = L(c) ? Bf : J.current;
  f = Cf(b, f);
  qg(b, e);
  c = oh(a, b, c, d, f, e);
  if (null !== a && !rg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
  b.effectTag |= 1;
  R(a, b, c, e);
  return b.child;
}
function fi(a, b, c, d, e) {
  if (L(c)) {
    var f = !0;
    Gf(b);
  } else f = !1;
  qg(b, e);
  if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Lg(b, c, d), Ng(b, c, d, e), d = !0;else if (null === a) {
    var g = b.stateNode,
      h = b.memoizedProps;
    g.props = h;
    var k = g.context,
      l = c.contextType;
    "object" === typeof l && null !== l ? l = sg(l) : (l = L(c) ? Bf : J.current, l = Cf(b, l));
    var m = c.getDerivedStateFromProps,
      p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
    p || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Mg(b, g, d, l);
    tg = !1;
    var x = b.memoizedState;
    g.state = x;
    zg(b, d, g, e);
    k = b.memoizedState;
    h !== d || x !== k || K.current || tg ? ("function" === typeof m && (Fg(b, c, m, d), k = b.memoizedState), (h = tg || Kg(b, c, h, d, x, k, l)) ? (p || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1);
  } else g = b.stateNode, vg(a, b), h = b.memoizedProps, g.props = b.type === b.elementType ? h : ig(b.type, h), k = g.context, l = c.contextType, "object" === typeof l && null !== l ? l = sg(l) : (l = L(c) ? Bf : J.current, l = Cf(b, l)), m = c.getDerivedStateFromProps, (p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Mg(b, g, d, l), tg = !1, k = b.memoizedState, g.state = k, zg(b, d, g, e), x = b.memoizedState, h !== d || k !== x || K.current || tg ? ("function" === typeof m && (Fg(b, c, m, d), x = b.memoizedState), (m = tg || Kg(b, c, h, d, k, x, l)) ? (p || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, l), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, l)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = l, d = m) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = !1);
  return gi(a, b, c, d, f, e);
}
function gi(a, b, c, d, e, f) {
  ei(a, b);
  var g = 0 !== (b.effectTag & 64);
  if (!d && !g) return e && Hf(b, c, !1), $h(a, b, f);
  d = b.stateNode;
  Yh.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.effectTag |= 1;
  null !== a && g ? (b.child = Xg(b, a.child, null, f), b.child = Xg(b, null, h, f)) : R(a, b, h, f);
  b.memoizedState = d.state;
  e && Hf(b, c, !0);
  return b.child;
}
function hi(a) {
  var b = a.stateNode;
  b.pendingContext ? Ef(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Ef(a, b.context, !1);
  dh(a, b.containerInfo);
}
var ii = {
  dehydrated: null,
  retryTime: 0
};
function ji(a, b, c) {
  var d = b.mode,
    e = b.pendingProps,
    f = M.current,
    g = !1,
    h;
  (h = 0 !== (b.effectTag & 64)) || (h = 0 !== (f & 2) && (null === a || null !== a.memoizedState));
  h ? (g = !0, b.effectTag &= -65) : null !== a && null === a.memoizedState || void 0 === e.fallback || !0 === e.unstable_avoidThisFallback || (f |= 1);
  I(M, f & 1);
  if (null === a) {
    void 0 !== e.fallback && Uh(b);
    if (g) {
      g = e.fallback;
      e = Wg(null, d, 0, null);
      e.return = b;
      if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) a.return = e, a = a.sibling;
      c = Wg(g, d, c, null);
      c.return = b;
      e.sibling = c;
      b.memoizedState = ii;
      b.child = e;
      return c;
    }
    d = e.children;
    b.memoizedState = null;
    return b.child = Yg(b, null, d, c);
  }
  if (null !== a.memoizedState) {
    a = a.child;
    d = a.sibling;
    if (g) {
      e = e.fallback;
      c = Sg(a, a.pendingProps);
      c.return = b;
      if (0 === (b.mode & 2) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== a.child)) for (c.child = g; null !== g;) g.return = c, g = g.sibling;
      d = Sg(d, e);
      d.return = b;
      c.sibling = d;
      c.childExpirationTime = 0;
      b.memoizedState = ii;
      b.child = c;
      return d;
    }
    c = Xg(b, a.child, e.children, c);
    b.memoizedState = null;
    return b.child = c;
  }
  a = a.child;
  if (g) {
    g = e.fallback;
    e = Wg(null, d, 0, null);
    e.return = b;
    e.child = a;
    null !== a && (a.return = e);
    if (0 === (b.mode & 2)) for (a = null !== b.memoizedState ? b.child.child : b.child, e.child = a; null !== a;) a.return = e, a = a.sibling;
    c = Wg(g, d, c, null);
    c.return = b;
    e.sibling = c;
    c.effectTag |= 2;
    e.childExpirationTime = 0;
    b.memoizedState = ii;
    b.child = e;
    return c;
  }
  b.memoizedState = null;
  return b.child = Xg(b, a, e.children, c);
}
function ki(a, b) {
  a.expirationTime < b && (a.expirationTime = b);
  var c = a.alternate;
  null !== c && c.expirationTime < b && (c.expirationTime = b);
  pg(a.return, b);
}
function li(a, b, c, d, e, f) {
  var g = a.memoizedState;
  null === g ? a.memoizedState = {
    isBackwards: b,
    rendering: null,
    renderingStartTime: 0,
    last: d,
    tail: c,
    tailExpiration: 0,
    tailMode: e,
    lastEffect: f
  } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f);
}
function mi(a, b, c) {
  var d = b.pendingProps,
    e = d.revealOrder,
    f = d.tail;
  R(a, b, d.children, c);
  d = M.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b.effectTag |= 64;else {
    if (null !== a && 0 !== (a.effectTag & 64)) a: for (a = b.child; null !== a;) {
      if (13 === a.tag) null !== a.memoizedState && ki(a, c);else if (19 === a.tag) ki(a, c);else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b) break a;
      for (; null === a.sibling;) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= 1;
  }
  I(M, d);
  if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
    case "forwards":
      c = b.child;
      for (e = null; null !== c;) a = c.alternate, null !== a && null === hh(a) && (e = c), c = c.sibling;
      c = e;
      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
      li(b, !1, e, c, f, b.lastEffect);
      break;
    case "backwards":
      c = null;
      e = b.child;
      for (b.child = null; null !== e;) {
        a = e.alternate;
        if (null !== a && null === hh(a)) {
          b.child = e;
          break;
        }
        a = e.sibling;
        e.sibling = c;
        c = e;
        e = a;
      }
      li(b, !0, c, null, f, b.lastEffect);
      break;
    case "together":
      li(b, !1, null, null, void 0, b.lastEffect);
      break;
    default:
      b.memoizedState = null;
  }
  return b.child;
}
function $h(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  var d = b.expirationTime;
  0 !== d && Bg(d);
  if (b.childExpirationTime < c) return null;
  if (null !== a && b.child !== a.child) throw Error(u(153));
  if (null !== b.child) {
    a = b.child;
    c = Sg(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Sg(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
var ni, oi, pi, qi;
ni = function ni(a, b) {
  for (var c = b.child; null !== c;) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;
    for (; null === c.sibling;) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
oi = function oi() {};
pi = function pi(a, b, c, d, e) {
  var f = a.memoizedProps;
  if (f !== d) {
    var g = b.stateNode;
    ch($g.current);
    a = null;
    switch (c) {
      case "input":
        f = zb(g, f);
        d = zb(g, d);
        a = [];
        break;
      case "option":
        f = Gb(g, f);
        d = Gb(g, d);
        a = [];
        break;
      case "select":
        f = n({}, f, {
          value: void 0
        });
        d = n({}, d, {
          value: void 0
        });
        a = [];
        break;
      case "textarea":
        f = Ib(g, f);
        d = Ib(g, d);
        a = [];
        break;
      default:
        "function" !== typeof f.onClick && "function" === typeof d.onClick && (g.onclick = sd);
    }
    od(c, d);
    var h, k;
    c = null;
    for (h in f) if (!d.hasOwnProperty(h) && f.hasOwnProperty(h) && null != f[h]) if ("style" === h) for (k in g = f[h], g) g.hasOwnProperty(k) && (c || (c = {}), c[k] = "");else "dangerouslySetInnerHTML" !== h && "children" !== h && "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (va.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null));
    for (h in d) {
      var l = d[h];
      g = null != f ? f[h] : void 0;
      if (d.hasOwnProperty(h) && l !== g && (null != l || null != g)) if ("style" === h) {
        if (g) {
          for (k in g) !g.hasOwnProperty(k) || l && l.hasOwnProperty(k) || (c || (c = {}), c[k] = "");
          for (k in l) l.hasOwnProperty(k) && g[k] !== l[k] && (c || (c = {}), c[k] = l[k]);
        } else c || (a || (a = []), a.push(h, c)), c = l;
      } else "dangerouslySetInnerHTML" === h ? (l = l ? l.__html : void 0, g = g ? g.__html : void 0, null != l && g !== l && (a = a || []).push(h, l)) : "children" === h ? g === l || "string" !== typeof l && "number" !== typeof l || (a = a || []).push(h, "" + l) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && (va.hasOwnProperty(h) ? (null != l && rd(e, h), a || g === l || (a = [])) : (a = a || []).push(h, l));
    }
    c && (a = a || []).push("style", c);
    e = a;
    if (b.updateQueue = e) b.effectTag |= 4;
  }
};
qi = function qi(a, b, c, d) {
  c !== d && (b.effectTag |= 4);
};
function ri(a, b) {
  switch (a.tailMode) {
    case "hidden":
      b = a.tail;
      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
      null === c ? a.tail = null : c.sibling = null;
      break;
    case "collapsed":
      c = a.tail;
      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}
function si(a, b, c) {
  var d = b.pendingProps;
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return L(b.type) && Df(), null;
    case 3:
      return eh(), H(K), H(J), c = b.stateNode, c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), null !== a && null !== a.child || !Wh(b) || (b.effectTag |= 4), oi(b), null;
    case 5:
      gh(b);
      c = ch(bh.current);
      var e = b.type;
      if (null !== a && null != b.stateNode) pi(a, b, e, d, c), a.ref !== b.ref && (b.effectTag |= 128);else {
        if (!d) {
          if (null === b.stateNode) throw Error(u(166));
          return null;
        }
        a = ch($g.current);
        if (Wh(b)) {
          d = b.stateNode;
          e = b.type;
          var f = b.memoizedProps;
          d[Md] = b;
          d[Nd] = f;
          switch (e) {
            case "iframe":
            case "object":
            case "embed":
              F("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < ac.length; a++) F(ac[a], d);
              break;
            case "source":
              F("error", d);
              break;
            case "img":
            case "image":
            case "link":
              F("error", d);
              F("load", d);
              break;
            case "form":
              F("reset", d);
              F("submit", d);
              break;
            case "details":
              F("toggle", d);
              break;
            case "input":
              Ab(d, f);
              F("invalid", d);
              rd(c, "onChange");
              break;
            case "select":
              d._wrapperState = {
                wasMultiple: !!f.multiple
              };
              F("invalid", d);
              rd(c, "onChange");
              break;
            case "textarea":
              Jb(d, f), F("invalid", d), rd(c, "onChange");
          }
          od(e, f);
          a = null;
          for (var g in f) if (f.hasOwnProperty(g)) {
            var h = f[g];
            "children" === g ? "string" === typeof h ? d.textContent !== h && (a = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (a = ["children", "" + h]) : va.hasOwnProperty(g) && null != h && rd(c, g);
          }
          switch (e) {
            case "input":
              xb(d);
              Eb(d, f, !0);
              break;
            case "textarea":
              xb(d);
              Lb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f.onClick && (d.onclick = sd);
          }
          c = a;
          b.updateQueue = c;
          null !== c && (b.effectTag |= 4);
        } else {
          g = 9 === c.nodeType ? c : c.ownerDocument;
          a === qd && (a = Nb(e));
          a === qd ? "script" === e ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(e, {
            is: d.is
          }) : (a = g.createElement(e), "select" === e && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, e);
          a[Md] = b;
          a[Nd] = d;
          ni(a, b, !1, !1);
          b.stateNode = a;
          g = pd(e, d);
          switch (e) {
            case "iframe":
            case "object":
            case "embed":
              F("load", a);
              h = d;
              break;
            case "video":
            case "audio":
              for (h = 0; h < ac.length; h++) F(ac[h], a);
              h = d;
              break;
            case "source":
              F("error", a);
              h = d;
              break;
            case "img":
            case "image":
            case "link":
              F("error", a);
              F("load", a);
              h = d;
              break;
            case "form":
              F("reset", a);
              F("submit", a);
              h = d;
              break;
            case "details":
              F("toggle", a);
              h = d;
              break;
            case "input":
              Ab(a, d);
              h = zb(a, d);
              F("invalid", a);
              rd(c, "onChange");
              break;
            case "option":
              h = Gb(a, d);
              break;
            case "select":
              a._wrapperState = {
                wasMultiple: !!d.multiple
              };
              h = n({}, d, {
                value: void 0
              });
              F("invalid", a);
              rd(c, "onChange");
              break;
            case "textarea":
              Jb(a, d);
              h = Ib(a, d);
              F("invalid", a);
              rd(c, "onChange");
              break;
            default:
              h = d;
          }
          od(e, h);
          var k = h;
          for (f in k) if (k.hasOwnProperty(f)) {
            var l = k[f];
            "style" === f ? md(a, l) : "dangerouslySetInnerHTML" === f ? (l = l ? l.__html : void 0, null != l && Qb(a, l)) : "children" === f ? "string" === typeof l ? ("textarea" !== e || "" !== l) && Rb(a, l) : "number" === typeof l && Rb(a, "" + l) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (va.hasOwnProperty(f) ? null != l && rd(c, f) : null != l && Xa(a, f, l, g));
          }
          switch (e) {
            case "input":
              xb(a);
              Eb(a, d, !1);
              break;
            case "textarea":
              xb(a);
              Lb(a);
              break;
            case "option":
              null != d.value && a.setAttribute("value", "" + rb(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              c = d.value;
              null != c ? Hb(a, !!d.multiple, c, !1) : null != d.defaultValue && Hb(a, !!d.multiple, d.defaultValue, !0);
              break;
            default:
              "function" === typeof h.onClick && (a.onclick = sd);
          }
          Fd(e, d) && (b.effectTag |= 4);
        }
        null !== b.ref && (b.effectTag |= 128);
      }
      return null;
    case 6:
      if (a && null != b.stateNode) qi(a, b, a.memoizedProps, d);else {
        if ("string" !== typeof d && null === b.stateNode) throw Error(u(166));
        c = ch(bh.current);
        ch($g.current);
        Wh(b) ? (c = b.stateNode, d = b.memoizedProps, c[Md] = b, c.nodeValue !== d && (b.effectTag |= 4)) : (c = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), c[Md] = b, b.stateNode = c);
      }
      return null;
    case 13:
      H(M);
      d = b.memoizedState;
      if (0 !== (b.effectTag & 64)) return b.expirationTime = c, b;
      c = null !== d;
      d = !1;
      null === a ? void 0 !== b.memoizedProps.fallback && Wh(b) : (e = a.memoizedState, d = null !== e, c || null === e || (e = a.child.sibling, null !== e && (f = b.firstEffect, null !== f ? (b.firstEffect = e, e.nextEffect = f) : (b.firstEffect = b.lastEffect = e, e.nextEffect = null), e.effectTag = 8)));
      if (c && !d && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (M.current & 1)) S === ti && (S = ui);else {
        if (S === ti || S === ui) S = vi;
        0 !== wi && null !== T && (xi(T, U), yi(T, wi));
      }
      if (c || d) b.effectTag |= 4;
      return null;
    case 4:
      return eh(), oi(b), null;
    case 10:
      return og(b), null;
    case 17:
      return L(b.type) && Df(), null;
    case 19:
      H(M);
      d = b.memoizedState;
      if (null === d) return null;
      e = 0 !== (b.effectTag & 64);
      f = d.rendering;
      if (null === f) {
        if (e) ri(d, !1);else {
          if (S !== ti || null !== a && 0 !== (a.effectTag & 64)) for (f = b.child; null !== f;) {
            a = hh(f);
            if (null !== a) {
              b.effectTag |= 64;
              ri(d, !1);
              e = a.updateQueue;
              null !== e && (b.updateQueue = e, b.effectTag |= 4);
              null === d.lastEffect && (b.firstEffect = null);
              b.lastEffect = d.lastEffect;
              for (d = b.child; null !== d;) e = d, f = c, e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, a = e.alternate, null === a ? (e.childExpirationTime = 0, e.expirationTime = f, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null) : (e.childExpirationTime = a.childExpirationTime, e.expirationTime = a.expirationTime, e.child = a.child, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, f = a.dependencies, e.dependencies = null === f ? null : {
                expirationTime: f.expirationTime,
                firstContext: f.firstContext,
                responders: f.responders
              }), d = d.sibling;
              I(M, M.current & 1 | 2);
              return b.child;
            }
            f = f.sibling;
          }
        }
      } else {
        if (!e) if (a = hh(f), null !== a) {
          if (b.effectTag |= 64, e = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.effectTag |= 4), ri(d, !0), null === d.tail && "hidden" === d.tailMode && !f.alternate) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
        } else 2 * $f() - d.renderingStartTime > d.tailExpiration && 1 < c && (b.effectTag |= 64, e = !0, ri(d, !1), b.expirationTime = b.childExpirationTime = c - 1);
        d.isBackwards ? (f.sibling = b.child, b.child = f) : (c = d.last, null !== c ? c.sibling = f : b.child = f, d.last = f);
      }
      return null !== d.tail ? (0 === d.tailExpiration && (d.tailExpiration = $f() + 500), c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = $f(), c.sibling = null, b = M.current, I(M, e ? b & 1 | 2 : b & 1), c) : null;
  }
  throw Error(u(156, b.tag));
}
function zi(a) {
  switch (a.tag) {
    case 1:
      L(a.type) && Df();
      var b = a.effectTag;
      return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
    case 3:
      eh();
      H(K);
      H(J);
      b = a.effectTag;
      if (0 !== (b & 64)) throw Error(u(285));
      a.effectTag = b & -4097 | 64;
      return a;
    case 5:
      return gh(a), null;
    case 13:
      return H(M), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
    case 19:
      return H(M), null;
    case 4:
      return eh(), null;
    case 10:
      return og(a), null;
    default:
      return null;
  }
}
function Ai(a, b) {
  return {
    value: a,
    source: b,
    stack: qb(b)
  };
}
var Bi = "function" === typeof WeakSet ? WeakSet : Set;
function Ci(a, b) {
  var c = b.source,
    d = b.stack;
  null === d && null !== c && (d = qb(c));
  null !== c && pb(c.type);
  b = b.value;
  null !== a && 1 === a.tag && pb(a.type);
  try {
    console.error(b);
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}
function Di(a, b) {
  try {
    b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
  } catch (c) {
    Ei(a, c);
  }
}
function Fi(a) {
  var b = a.ref;
  if (null !== b) if ("function" === typeof b) try {
    b(null);
  } catch (c) {
    Ei(a, c);
  } else b.current = null;
}
function Gi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.effectTag & 256 && null !== a) {
        var c = a.memoizedProps,
          d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : ig(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(u(163));
}
function Hi(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.destroy;
        c.destroy = void 0;
        void 0 !== d && d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Ii(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Ji(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      Ii(3, c);
      return;
    case 1:
      a = c.stateNode;
      if (c.effectTag & 4) if (null === b) a.componentDidMount();else {
        var d = c.elementType === c.type ? b.memoizedProps : ig(c.type, b.memoizedProps);
        a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
      }
      b = c.updateQueue;
      null !== b && Cg(c, b, a);
      return;
    case 3:
      b = c.updateQueue;
      if (null !== b) {
        a = null;
        if (null !== c.child) switch (c.child.tag) {
          case 5:
            a = c.child.stateNode;
            break;
          case 1:
            a = c.child.stateNode;
        }
        Cg(c, b, a);
      }
      return;
    case 5:
      a = c.stateNode;
      null === b && c.effectTag & 4 && Fd(c.type, c.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Vc(c))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
      return;
  }
  throw Error(u(163));
}
function Ki(a, b, c) {
  "function" === typeof Li && Li(b);
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (null !== a && (a = a.lastEffect, null !== a)) {
        var d = a.next;
        cg(97 < c ? 97 : c, function () {
          var a = d;
          do {
            var c = a.destroy;
            if (void 0 !== c) {
              var g = b;
              try {
                c();
              } catch (h) {
                Ei(g, h);
              }
            }
            a = a.next;
          } while (a !== d);
        });
      }
      break;
    case 1:
      Fi(b);
      c = b.stateNode;
      "function" === typeof c.componentWillUnmount && Di(b, c);
      break;
    case 5:
      Fi(b);
      break;
    case 4:
      Mi(a, b, c);
  }
}
function Ni(a) {
  var b = a.alternate;
  a.return = null;
  a.child = null;
  a.memoizedState = null;
  a.updateQueue = null;
  a.dependencies = null;
  a.alternate = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.pendingProps = null;
  a.memoizedProps = null;
  a.stateNode = null;
  null !== b && Ni(b);
}
function Oi(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Pi(a) {
  a: {
    for (var b = a.return; null !== b;) {
      if (Oi(b)) {
        var c = b;
        break a;
      }
      b = b.return;
    }
    throw Error(u(160));
  }
  b = c.stateNode;
  switch (c.tag) {
    case 5:
      var d = !1;
      break;
    case 3:
      b = b.containerInfo;
      d = !0;
      break;
    case 4:
      b = b.containerInfo;
      d = !0;
      break;
    default:
      throw Error(u(161));
  }
  c.effectTag & 16 && (Rb(b, ""), c.effectTag &= -17);
  a: b: for (c = a;;) {
    for (; null === c.sibling;) {
      if (null === c.return || Oi(c.return)) {
        c = null;
        break a;
      }
      c = c.return;
    }
    c.sibling.return = c.return;
    for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
      if (c.effectTag & 2) continue b;
      if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
    }
    if (!(c.effectTag & 2)) {
      c = c.stateNode;
      break a;
    }
  }
  d ? Qi(a, c, b) : Ri(a, c, b);
}
function Qi(a, b, c) {
  var d = a.tag,
    e = 5 === d || 6 === d;
  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = sd));else if (4 !== d && (a = a.child, null !== a)) for (Qi(a, b, c), a = a.sibling; null !== a;) Qi(a, b, c), a = a.sibling;
}
function Ri(a, b, c) {
  var d = a.tag,
    e = 5 === d || 6 === d;
  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (Ri(a, b, c), a = a.sibling; null !== a;) Ri(a, b, c), a = a.sibling;
}
function Mi(a, b, c) {
  for (var d = b, e = !1, f, g;;) {
    if (!e) {
      e = d.return;
      a: for (;;) {
        if (null === e) throw Error(u(160));
        f = e.stateNode;
        switch (e.tag) {
          case 5:
            g = !1;
            break a;
          case 3:
            f = f.containerInfo;
            g = !0;
            break a;
          case 4:
            f = f.containerInfo;
            g = !0;
            break a;
        }
        e = e.return;
      }
      e = !0;
    }
    if (5 === d.tag || 6 === d.tag) {
      a: for (var h = a, k = d, l = c, m = k;;) if (Ki(h, m, l), null !== m.child && 4 !== m.tag) m.child.return = m, m = m.child;else {
        if (m === k) break a;
        for (; null === m.sibling;) {
          if (null === m.return || m.return === k) break a;
          m = m.return;
        }
        m.sibling.return = m.return;
        m = m.sibling;
      }
      g ? (h = f, k = d.stateNode, 8 === h.nodeType ? h.parentNode.removeChild(k) : h.removeChild(k)) : f.removeChild(d.stateNode);
    } else if (4 === d.tag) {
      if (null !== d.child) {
        f = d.stateNode.containerInfo;
        g = !0;
        d.child.return = d;
        d = d.child;
        continue;
      }
    } else if (Ki(a, d, c), null !== d.child) {
      d.child.return = d;
      d = d.child;
      continue;
    }
    if (d === b) break;
    for (; null === d.sibling;) {
      if (null === d.return || d.return === b) return;
      d = d.return;
      4 === d.tag && (e = !1);
    }
    d.sibling.return = d.return;
    d = d.sibling;
  }
}
function Si(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      Hi(3, b);
      return;
    case 1:
      return;
    case 5:
      var c = b.stateNode;
      if (null != c) {
        var d = b.memoizedProps,
          e = null !== a ? a.memoizedProps : d;
        a = b.type;
        var f = b.updateQueue;
        b.updateQueue = null;
        if (null !== f) {
          c[Nd] = d;
          "input" === a && "radio" === d.type && null != d.name && Bb(c, d);
          pd(a, e);
          b = pd(a, d);
          for (e = 0; e < f.length; e += 2) {
            var g = f[e],
              h = f[e + 1];
            "style" === g ? md(c, h) : "dangerouslySetInnerHTML" === g ? Qb(c, h) : "children" === g ? Rb(c, h) : Xa(c, g, h, b);
          }
          switch (a) {
            case "input":
              Cb(c, d);
              break;
            case "textarea":
              Kb(c, d);
              break;
            case "select":
              b = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, a = d.value, null != a ? Hb(c, !!d.multiple, a, !1) : b !== !!d.multiple && (null != d.defaultValue ? Hb(c, !!d.multiple, d.defaultValue, !0) : Hb(c, !!d.multiple, d.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (null === b.stateNode) throw Error(u(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      b = b.stateNode;
      b.hydrate && (b.hydrate = !1, Vc(b.containerInfo));
      return;
    case 12:
      return;
    case 13:
      c = b;
      null === b.memoizedState ? d = !1 : (d = !0, c = b.child, Ti = $f());
      if (null !== c) a: for (a = c;;) {
        if (5 === a.tag) f = a.stateNode, d ? (f = f.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (f = a.stateNode, e = a.memoizedProps.style, e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null, f.style.display = ld("display", e));else if (6 === a.tag) a.stateNode.nodeValue = d ? "" : a.memoizedProps;else if (13 === a.tag && null !== a.memoizedState && null === a.memoizedState.dehydrated) {
          f = a.child.sibling;
          f.return = a;
          a = f;
          continue;
        } else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === c) break;
        for (; null === a.sibling;) {
          if (null === a.return || a.return === c) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      Ui(b);
      return;
    case 19:
      Ui(b);
      return;
    case 17:
      return;
  }
  throw Error(u(163));
}
function Ui(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Bi());
    b.forEach(function (b) {
      var d = Vi.bind(null, a, b);
      c.has(b) || (c.add(b), b.then(d, d));
    });
  }
}
var Wi = "function" === typeof WeakMap ? WeakMap : Map;
function Xi(a, b, c) {
  c = wg(c, null);
  c.tag = 3;
  c.payload = {
    element: null
  };
  var d = b.value;
  c.callback = function () {
    Yi || (Yi = !0, Zi = d);
    Ci(a, b);
  };
  return c;
}
function $i(a, b, c) {
  c = wg(c, null);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function () {
      Ci(a, b);
      return d(e);
    };
  }
  var f = a.stateNode;
  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
    "function" !== typeof d && (null === aj ? aj = new Set([this]) : aj.add(this), Ci(a, b));
    var c = b.stack;
    this.componentDidCatch(b.value, {
      componentStack: null !== c ? c : ""
    });
  });
  return c;
}
var bj = Math.ceil,
  cj = Wa.ReactCurrentDispatcher,
  dj = Wa.ReactCurrentOwner,
  V = 0,
  ej = 8,
  fj = 16,
  gj = 32,
  ti = 0,
  hj = 1,
  ij = 2,
  ui = 3,
  vi = 4,
  jj = 5,
  W = V,
  T = null,
  X = null,
  U = 0,
  S = ti,
  kj = null,
  lj = 1073741823,
  mj = 1073741823,
  nj = null,
  wi = 0,
  oj = !1,
  Ti = 0,
  pj = 500,
  Y = null,
  Yi = !1,
  Zi = null,
  aj = null,
  qj = !1,
  rj = null,
  sj = 90,
  tj = null,
  uj = 0,
  vj = null,
  wj = 0;
function Gg() {
  return (W & (fj | gj)) !== V ? 1073741821 - ($f() / 10 | 0) : 0 !== wj ? wj : wj = 1073741821 - ($f() / 10 | 0);
}
function Hg(a, b, c) {
  b = b.mode;
  if (0 === (b & 2)) return 1073741823;
  var d = ag();
  if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822;
  if ((W & fj) !== V) return U;
  if (null !== c) a = hg(a, c.timeoutMs | 0 || 5E3, 250);else switch (d) {
    case 99:
      a = 1073741823;
      break;
    case 98:
      a = hg(a, 150, 100);
      break;
    case 97:
    case 96:
      a = hg(a, 5E3, 250);
      break;
    case 95:
      a = 2;
      break;
    default:
      throw Error(u(326));
  }
  null !== T && a === U && --a;
  return a;
}
function Ig(a, b) {
  if (50 < uj) throw uj = 0, vj = null, Error(u(185));
  a = xj(a, b);
  if (null !== a) {
    var c = ag();
    1073741823 === b ? (W & ej) !== V && (W & (fj | gj)) === V ? yj(a) : (Z(a), W === V && gg()) : Z(a);
    (W & 4) === V || 98 !== c && 99 !== c || (null === tj ? tj = new Map([[a, b]]) : (c = tj.get(a), (void 0 === c || c > b) && tj.set(a, b)));
  }
}
function xj(a, b) {
  a.expirationTime < b && (a.expirationTime = b);
  var c = a.alternate;
  null !== c && c.expirationTime < b && (c.expirationTime = b);
  var d = a.return,
    e = null;
  if (null === d && 3 === a.tag) e = a.stateNode;else for (; null !== d;) {
    c = d.alternate;
    d.childExpirationTime < b && (d.childExpirationTime = b);
    null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);
    if (null === d.return && 3 === d.tag) {
      e = d.stateNode;
      break;
    }
    d = d.return;
  }
  null !== e && (T === e && (Bg(b), S === vi && xi(e, U)), yi(e, b));
  return e;
}
function zj(a) {
  var b = a.lastExpiredTime;
  if (0 !== b) return b;
  b = a.firstPendingTime;
  if (!Aj(a, b)) return b;
  var c = a.lastPingedTime;
  a = a.nextKnownPendingLevel;
  a = c > a ? c : a;
  return 2 >= a && b !== a ? 0 : a;
}
function Z(a) {
  if (0 !== a.lastExpiredTime) a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = eg(yj.bind(null, a));else {
    var b = zj(a),
      c = a.callbackNode;
    if (0 === b) null !== c && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);else {
      var d = Gg();
      1073741823 === b ? d = 99 : 1 === b || 2 === b ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);
      if (null !== c) {
        var e = a.callbackPriority;
        if (a.callbackExpirationTime === b && e >= d) return;
        c !== Tf && Kf(c);
      }
      a.callbackExpirationTime = b;
      a.callbackPriority = d;
      b = 1073741823 === b ? eg(yj.bind(null, a)) : dg(d, Bj.bind(null, a), {
        timeout: 10 * (1073741821 - b) - $f()
      });
      a.callbackNode = b;
    }
  }
}
function Bj(a, b) {
  wj = 0;
  if (b) return b = Gg(), Cj(a, b), Z(a), null;
  var c = zj(a);
  if (0 !== c) {
    b = a.callbackNode;
    if ((W & (fj | gj)) !== V) throw Error(u(327));
    Dj();
    a === T && c === U || Ej(a, c);
    if (null !== X) {
      var d = W;
      W |= fj;
      var e = Fj();
      do try {
        Gj();
        break;
      } catch (h) {
        Hj(a, h);
      } while (1);
      ng();
      W = d;
      cj.current = e;
      if (S === hj) throw b = kj, Ej(a, c), xi(a, c), Z(a), b;
      if (null === X) switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, d = S, T = null, d) {
        case ti:
        case hj:
          throw Error(u(345));
        case ij:
          Cj(a, 2 < c ? 2 : c);
          break;
        case ui:
          xi(a, c);
          d = a.lastSuspendedTime;
          c === d && (a.nextKnownPendingLevel = Ij(e));
          if (1073741823 === lj && (e = Ti + pj - $f(), 10 < e)) {
            if (oj) {
              var f = a.lastPingedTime;
              if (0 === f || f >= c) {
                a.lastPingedTime = c;
                Ej(a, c);
                break;
              }
            }
            f = zj(a);
            if (0 !== f && f !== c) break;
            if (0 !== d && d !== c) {
              a.lastPingedTime = d;
              break;
            }
            a.timeoutHandle = Hd(Jj.bind(null, a), e);
            break;
          }
          Jj(a);
          break;
        case vi:
          xi(a, c);
          d = a.lastSuspendedTime;
          c === d && (a.nextKnownPendingLevel = Ij(e));
          if (oj && (e = a.lastPingedTime, 0 === e || e >= c)) {
            a.lastPingedTime = c;
            Ej(a, c);
            break;
          }
          e = zj(a);
          if (0 !== e && e !== c) break;
          if (0 !== d && d !== c) {
            a.lastPingedTime = d;
            break;
          }
          1073741823 !== mj ? d = 10 * (1073741821 - mj) - $f() : 1073741823 === lj ? d = 0 : (d = 10 * (1073741821 - lj) - 5E3, e = $f(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * bj(d / 1960)) - d, c < d && (d = c));
          if (10 < d) {
            a.timeoutHandle = Hd(Jj.bind(null, a), d);
            break;
          }
          Jj(a);
          break;
        case jj:
          if (1073741823 !== lj && null !== nj) {
            f = lj;
            var g = nj;
            d = g.busyMinDurationMs | 0;
            0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = $f() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5E3)), d = f <= e ? 0 : e + d - f);
            if (10 < d) {
              xi(a, c);
              a.timeoutHandle = Hd(Jj.bind(null, a), d);
              break;
            }
          }
          Jj(a);
          break;
        default:
          throw Error(u(329));
      }
      Z(a);
      if (a.callbackNode === b) return Bj.bind(null, a);
    }
  }
  return null;
}
function yj(a) {
  var b = a.lastExpiredTime;
  b = 0 !== b ? b : 1073741823;
  if ((W & (fj | gj)) !== V) throw Error(u(327));
  Dj();
  a === T && b === U || Ej(a, b);
  if (null !== X) {
    var c = W;
    W |= fj;
    var d = Fj();
    do try {
      Kj();
      break;
    } catch (e) {
      Hj(a, e);
    } while (1);
    ng();
    W = c;
    cj.current = d;
    if (S === hj) throw c = kj, Ej(a, b), xi(a, b), Z(a), c;
    if (null !== X) throw Error(u(261));
    a.finishedWork = a.current.alternate;
    a.finishedExpirationTime = b;
    T = null;
    Jj(a);
    Z(a);
  }
  return null;
}
function Lj() {
  if (null !== tj) {
    var a = tj;
    tj = null;
    a.forEach(function (a, c) {
      Cj(c, a);
      Z(c);
    });
    gg();
  }
}
function Mj(a, b) {
  var c = W;
  W |= 1;
  try {
    return a(b);
  } finally {
    W = c, W === V && gg();
  }
}
function Nj(a, b) {
  var c = W;
  W &= -2;
  W |= ej;
  try {
    return a(b);
  } finally {
    W = c, W === V && gg();
  }
}
function Ej(a, b) {
  a.finishedWork = null;
  a.finishedExpirationTime = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Id(c));
  if (null !== X) for (c = X.return; null !== c;) {
    var d = c;
    switch (d.tag) {
      case 1:
        d = d.type.childContextTypes;
        null !== d && void 0 !== d && Df();
        break;
      case 3:
        eh();
        H(K);
        H(J);
        break;
      case 5:
        gh(d);
        break;
      case 4:
        eh();
        break;
      case 13:
        H(M);
        break;
      case 19:
        H(M);
        break;
      case 10:
        og(d);
    }
    c = c.return;
  }
  T = a;
  X = Sg(a.current, null);
  U = b;
  S = ti;
  kj = null;
  mj = lj = 1073741823;
  nj = null;
  wi = 0;
  oj = !1;
}
function Hj(a, b) {
  do {
    try {
      ng();
      jh.current = sh;
      if (mh) for (var c = N.memoizedState; null !== c;) {
        var d = c.queue;
        null !== d && (d.pending = null);
        c = c.next;
      }
      lh = 0;
      P = O = N = null;
      mh = !1;
      if (null === X || null === X.return) return S = hj, kj = b, X = null;
      a: {
        var e = a,
          f = X.return,
          g = X,
          h = b;
        b = U;
        g.effectTag |= 2048;
        g.firstEffect = g.lastEffect = null;
        if (null !== h && "object" === typeof h && "function" === typeof h.then) {
          var k = h;
          if (0 === (g.mode & 2)) {
            var l = g.alternate;
            l ? (g.updateQueue = l.updateQueue, g.memoizedState = l.memoizedState, g.expirationTime = l.expirationTime) : (g.updateQueue = null, g.memoizedState = null);
          }
          var m = 0 !== (M.current & 1),
            p = f;
          do {
            var x;
            if (x = 13 === p.tag) {
              var z = p.memoizedState;
              if (null !== z) x = null !== z.dehydrated ? !0 : !1;else {
                var ca = p.memoizedProps;
                x = void 0 === ca.fallback ? !1 : !0 !== ca.unstable_avoidThisFallback ? !0 : m ? !1 : !0;
              }
            }
            if (x) {
              var D = p.updateQueue;
              if (null === D) {
                var t = new Set();
                t.add(k);
                p.updateQueue = t;
              } else D.add(k);
              if (0 === (p.mode & 2)) {
                p.effectTag |= 64;
                g.effectTag &= -2981;
                if (1 === g.tag) if (null === g.alternate) g.tag = 17;else {
                  var y = wg(1073741823, null);
                  y.tag = 2;
                  xg(g, y);
                }
                g.expirationTime = 1073741823;
                break a;
              }
              h = void 0;
              g = b;
              var A = e.pingCache;
              null === A ? (A = e.pingCache = new Wi(), h = new Set(), A.set(k, h)) : (h = A.get(k), void 0 === h && (h = new Set(), A.set(k, h)));
              if (!h.has(g)) {
                h.add(g);
                var q = Oj.bind(null, e, k, g);
                k.then(q, q);
              }
              p.effectTag |= 4096;
              p.expirationTime = b;
              break a;
            }
            p = p.return;
          } while (null !== p);
          h = Error((pb(g.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + qb(g));
        }
        S !== jj && (S = ij);
        h = Ai(h, g);
        p = f;
        do {
          switch (p.tag) {
            case 3:
              k = h;
              p.effectTag |= 4096;
              p.expirationTime = b;
              var B = Xi(p, k, b);
              yg(p, B);
              break a;
            case 1:
              k = h;
              var w = p.type,
                ub = p.stateNode;
              if (0 === (p.effectTag & 64) && ("function" === typeof w.getDerivedStateFromError || null !== ub && "function" === typeof ub.componentDidCatch && (null === aj || !aj.has(ub)))) {
                p.effectTag |= 4096;
                p.expirationTime = b;
                var vb = $i(p, k, b);
                yg(p, vb);
                break a;
              }
          }
          p = p.return;
        } while (null !== p);
      }
      X = Pj(X);
    } catch (Xc) {
      b = Xc;
      continue;
    }
    break;
  } while (1);
}
function Fj() {
  var a = cj.current;
  cj.current = sh;
  return null === a ? sh : a;
}
function Ag(a, b) {
  a < lj && 2 < a && (lj = a);
  null !== b && a < mj && 2 < a && (mj = a, nj = b);
}
function Bg(a) {
  a > wi && (wi = a);
}
function Kj() {
  for (; null !== X;) X = Qj(X);
}
function Gj() {
  for (; null !== X && !Uf();) X = Qj(X);
}
function Qj(a) {
  var b = Rj(a.alternate, a, U);
  a.memoizedProps = a.pendingProps;
  null === b && (b = Pj(a));
  dj.current = null;
  return b;
}
function Pj(a) {
  X = a;
  do {
    var b = X.alternate;
    a = X.return;
    if (0 === (X.effectTag & 2048)) {
      b = si(b, X, U);
      if (1 === U || 1 !== X.childExpirationTime) {
        for (var c = 0, d = X.child; null !== d;) {
          var e = d.expirationTime,
            f = d.childExpirationTime;
          e > c && (c = e);
          f > c && (c = f);
          d = d.sibling;
        }
        X.childExpirationTime = c;
      }
      if (null !== b) return b;
      null !== a && 0 === (a.effectTag & 2048) && (null === a.firstEffect && (a.firstEffect = X.firstEffect), null !== X.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = X.firstEffect), a.lastEffect = X.lastEffect), 1 < X.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = X : a.firstEffect = X, a.lastEffect = X));
    } else {
      b = zi(X);
      if (null !== b) return b.effectTag &= 2047, b;
      null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
    }
    b = X.sibling;
    if (null !== b) return b;
    X = a;
  } while (null !== X);
  S === ti && (S = jj);
  return null;
}
function Ij(a) {
  var b = a.expirationTime;
  a = a.childExpirationTime;
  return b > a ? b : a;
}
function Jj(a) {
  var b = ag();
  cg(99, Sj.bind(null, a, b));
  return null;
}
function Sj(a, b) {
  do Dj(); while (null !== rj);
  if ((W & (fj | gj)) !== V) throw Error(u(327));
  var c = a.finishedWork,
    d = a.finishedExpirationTime;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedExpirationTime = 0;
  if (c === a.current) throw Error(u(177));
  a.callbackNode = null;
  a.callbackExpirationTime = 0;
  a.callbackPriority = 90;
  a.nextKnownPendingLevel = 0;
  var e = Ij(c);
  a.firstPendingTime = e;
  d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
  d <= a.lastPingedTime && (a.lastPingedTime = 0);
  d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
  a === T && (X = T = null, U = 0);
  1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;
  if (null !== e) {
    var f = W;
    W |= gj;
    dj.current = null;
    Dd = fd;
    var g = xd();
    if (yd(g)) {
      if ("selectionStart" in g) var h = {
        start: g.selectionStart,
        end: g.selectionEnd
      };else a: {
        h = (h = g.ownerDocument) && h.defaultView || window;
        var k = h.getSelection && h.getSelection();
        if (k && 0 !== k.rangeCount) {
          h = k.anchorNode;
          var l = k.anchorOffset,
            m = k.focusNode;
          k = k.focusOffset;
          try {
            h.nodeType, m.nodeType;
          } catch (wb) {
            h = null;
            break a;
          }
          var p = 0,
            x = -1,
            z = -1,
            ca = 0,
            D = 0,
            t = g,
            y = null;
          b: for (;;) {
            for (var A;;) {
              t !== h || 0 !== l && 3 !== t.nodeType || (x = p + l);
              t !== m || 0 !== k && 3 !== t.nodeType || (z = p + k);
              3 === t.nodeType && (p += t.nodeValue.length);
              if (null === (A = t.firstChild)) break;
              y = t;
              t = A;
            }
            for (;;) {
              if (t === g) break b;
              y === h && ++ca === l && (x = p);
              y === m && ++D === k && (z = p);
              if (null !== (A = t.nextSibling)) break;
              t = y;
              y = t.parentNode;
            }
            t = A;
          }
          h = -1 === x || -1 === z ? null : {
            start: x,
            end: z
          };
        } else h = null;
      }
      h = h || {
        start: 0,
        end: 0
      };
    } else h = null;
    Ed = {
      activeElementDetached: null,
      focusedElem: g,
      selectionRange: h
    };
    fd = !1;
    Y = e;
    do try {
      Tj();
    } catch (wb) {
      if (null === Y) throw Error(u(330));
      Ei(Y, wb);
      Y = Y.nextEffect;
    } while (null !== Y);
    Y = e;
    do try {
      for (g = a, h = b; null !== Y;) {
        var q = Y.effectTag;
        q & 16 && Rb(Y.stateNode, "");
        if (q & 128) {
          var B = Y.alternate;
          if (null !== B) {
            var w = B.ref;
            null !== w && ("function" === typeof w ? w(null) : w.current = null);
          }
        }
        switch (q & 1038) {
          case 2:
            Pi(Y);
            Y.effectTag &= -3;
            break;
          case 6:
            Pi(Y);
            Y.effectTag &= -3;
            Si(Y.alternate, Y);
            break;
          case 1024:
            Y.effectTag &= -1025;
            break;
          case 1028:
            Y.effectTag &= -1025;
            Si(Y.alternate, Y);
            break;
          case 4:
            Si(Y.alternate, Y);
            break;
          case 8:
            l = Y, Mi(g, l, h), Ni(l);
        }
        Y = Y.nextEffect;
      }
    } catch (wb) {
      if (null === Y) throw Error(u(330));
      Ei(Y, wb);
      Y = Y.nextEffect;
    } while (null !== Y);
    w = Ed;
    B = xd();
    q = w.focusedElem;
    h = w.selectionRange;
    if (B !== q && q && q.ownerDocument && wd(q.ownerDocument.documentElement, q)) {
      null !== h && yd(q) && (B = h.start, w = h.end, void 0 === w && (w = B), "selectionStart" in q ? (q.selectionStart = B, q.selectionEnd = Math.min(w, q.value.length)) : (w = (B = q.ownerDocument || document) && B.defaultView || window, w.getSelection && (w = w.getSelection(), l = q.textContent.length, g = Math.min(h.start, l), h = void 0 === h.end ? g : Math.min(h.end, l), !w.extend && g > h && (l = h, h = g, g = l), l = vd(q, g), m = vd(q, h), l && m && (1 !== w.rangeCount || w.anchorNode !== l.node || w.anchorOffset !== l.offset || w.focusNode !== m.node || w.focusOffset !== m.offset) && (B = B.createRange(), B.setStart(l.node, l.offset), w.removeAllRanges(), g > h ? (w.addRange(B), w.extend(m.node, m.offset)) : (B.setEnd(m.node, m.offset), w.addRange(B))))));
      B = [];
      for (w = q; w = w.parentNode;) 1 === w.nodeType && B.push({
        element: w,
        left: w.scrollLeft,
        top: w.scrollTop
      });
      "function" === typeof q.focus && q.focus();
      for (q = 0; q < B.length; q++) w = B[q], w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
    }
    fd = !!Dd;
    Ed = Dd = null;
    a.current = c;
    Y = e;
    do try {
      for (q = a; null !== Y;) {
        var ub = Y.effectTag;
        ub & 36 && Ji(q, Y.alternate, Y);
        if (ub & 128) {
          B = void 0;
          var vb = Y.ref;
          if (null !== vb) {
            var Xc = Y.stateNode;
            switch (Y.tag) {
              case 5:
                B = Xc;
                break;
              default:
                B = Xc;
            }
            "function" === typeof vb ? vb(B) : vb.current = B;
          }
        }
        Y = Y.nextEffect;
      }
    } catch (wb) {
      if (null === Y) throw Error(u(330));
      Ei(Y, wb);
      Y = Y.nextEffect;
    } while (null !== Y);
    Y = null;
    Vf();
    W = f;
  } else a.current = c;
  if (qj) qj = !1, rj = a, sj = b;else for (Y = e; null !== Y;) b = Y.nextEffect, Y.nextEffect = null, Y = b;
  b = a.firstPendingTime;
  0 === b && (aj = null);
  1073741823 === b ? a === vj ? uj++ : (uj = 0, vj = a) : uj = 0;
  "function" === typeof Uj && Uj(c.stateNode, d);
  Z(a);
  if (Yi) throw Yi = !1, a = Zi, Zi = null, a;
  if ((W & ej) !== V) return null;
  gg();
  return null;
}
function Tj() {
  for (; null !== Y;) {
    var a = Y.effectTag;
    0 !== (a & 256) && Gi(Y.alternate, Y);
    0 === (a & 512) || qj || (qj = !0, dg(97, function () {
      Dj();
      return null;
    }));
    Y = Y.nextEffect;
  }
}
function Dj() {
  if (90 !== sj) {
    var a = 97 < sj ? 97 : sj;
    sj = 90;
    return cg(a, Vj);
  }
}
function Vj() {
  if (null === rj) return !1;
  var a = rj;
  rj = null;
  if ((W & (fj | gj)) !== V) throw Error(u(331));
  var b = W;
  W |= gj;
  for (a = a.current.firstEffect; null !== a;) {
    try {
      var c = a;
      if (0 !== (c.effectTag & 512)) switch (c.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          Hi(5, c), Ii(5, c);
      }
    } catch (d) {
      if (null === a) throw Error(u(330));
      Ei(a, d);
    }
    c = a.nextEffect;
    a.nextEffect = null;
    a = c;
  }
  W = b;
  gg();
  return !0;
}
function Wj(a, b, c) {
  b = Ai(c, b);
  b = Xi(a, b, 1073741823);
  xg(a, b);
  a = xj(a, 1073741823);
  null !== a && Z(a);
}
function Ei(a, b) {
  if (3 === a.tag) Wj(a, a, b);else for (var c = a.return; null !== c;) {
    if (3 === c.tag) {
      Wj(c, a, b);
      break;
    } else if (1 === c.tag) {
      var d = c.stateNode;
      if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === aj || !aj.has(d))) {
        a = Ai(b, a);
        a = $i(c, a, 1073741823);
        xg(c, a);
        c = xj(c, 1073741823);
        null !== c && Z(c);
        break;
      }
    }
    c = c.return;
  }
}
function Oj(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  T === a && U === c ? S === vi || S === ui && 1073741823 === lj && $f() - Ti < pj ? Ej(a, U) : oj = !0 : Aj(a, c) && (b = a.lastPingedTime, 0 !== b && b < c || (a.lastPingedTime = c, Z(a)));
}
function Vi(a, b) {
  var c = a.stateNode;
  null !== c && c.delete(b);
  b = 0;
  0 === b && (b = Gg(), b = Hg(b, a, null));
  a = xj(a, b);
  null !== a && Z(a);
}
var Rj;
Rj = function Rj(a, b, c) {
  var d = b.expirationTime;
  if (null !== a) {
    var e = b.pendingProps;
    if (a.memoizedProps !== e || K.current) rg = !0;else {
      if (d < c) {
        rg = !1;
        switch (b.tag) {
          case 3:
            hi(b);
            Xh();
            break;
          case 5:
            fh(b);
            if (b.mode & 4 && 1 !== c && e.hidden) return b.expirationTime = b.childExpirationTime = 1, null;
            break;
          case 1:
            L(b.type) && Gf(b);
            break;
          case 4:
            dh(b, b.stateNode.containerInfo);
            break;
          case 10:
            d = b.memoizedProps.value;
            e = b.type._context;
            I(jg, e._currentValue);
            e._currentValue = d;
            break;
          case 13:
            if (null !== b.memoizedState) {
              d = b.child.childExpirationTime;
              if (0 !== d && d >= c) return ji(a, b, c);
              I(M, M.current & 1);
              b = $h(a, b, c);
              return null !== b ? b.sibling : null;
            }
            I(M, M.current & 1);
            break;
          case 19:
            d = b.childExpirationTime >= c;
            if (0 !== (a.effectTag & 64)) {
              if (d) return mi(a, b, c);
              b.effectTag |= 64;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null);
            I(M, M.current);
            if (!d) return null;
        }
        return $h(a, b, c);
      }
      rg = !1;
    }
  } else rg = !1;
  b.expirationTime = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
      a = b.pendingProps;
      e = Cf(b, J.current);
      qg(b, c);
      e = oh(null, b, d, a, e, c);
      b.effectTag |= 1;
      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (L(d)) {
          var f = !0;
          Gf(b);
        } else f = !1;
        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
        ug(b);
        var g = d.getDerivedStateFromProps;
        "function" === typeof g && Fg(b, d, g, a);
        e.updater = Jg;
        b.stateNode = e;
        e._reactInternalFiber = b;
        Ng(b, d, a, c);
        b = gi(null, b, d, !0, f, c);
      } else b.tag = 0, R(null, b, e, c), b = b.child;
      return b;
    case 16:
      a: {
        e = b.elementType;
        null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
        a = b.pendingProps;
        ob(e);
        if (1 !== e._status) throw e._result;
        e = e._result;
        b.type = e;
        f = b.tag = Xj(e);
        a = ig(e, a);
        switch (f) {
          case 0:
            b = di(null, b, e, a, c);
            break a;
          case 1:
            b = fi(null, b, e, a, c);
            break a;
          case 11:
            b = Zh(null, b, e, a, c);
            break a;
          case 14:
            b = ai(null, b, e, ig(e.type, a), d, c);
            break a;
        }
        throw Error(u(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), di(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), fi(a, b, d, e, c);
    case 3:
      hi(b);
      d = b.updateQueue;
      if (null === a || null === d) throw Error(u(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = null !== e ? e.element : null;
      vg(a, b);
      zg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e) Xh(), b = $h(a, b, c);else {
        if (e = b.stateNode.hydrate) Ph = Jd(b.stateNode.containerInfo.firstChild), Oh = b, e = Qh = !0;
        if (e) for (c = Yg(b, null, d, c), b.child = c; c;) c.effectTag = c.effectTag & -3 | 1024, c = c.sibling;else R(a, b, d, c), Xh();
        b = b.child;
      }
      return b;
    case 5:
      return fh(b), null === a && Uh(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Gd(d, e) ? g = null : null !== f && Gd(d, f) && (b.effectTag |= 16), ei(a, b), b.mode & 4 && 1 !== c && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (R(a, b, g, c), b = b.child), b;
    case 6:
      return null === a && Uh(b), null;
    case 13:
      return ji(a, b, c);
    case 4:
      return dh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Xg(b, null, d, c) : R(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), Zh(a, b, d, e, c);
    case 7:
      return R(a, b, b.pendingProps, c), b.child;
    case 8:
      return R(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return R(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        var h = b.type._context;
        I(jg, h._currentValue);
        h._currentValue = f;
        if (null !== g) if (h = g.value, f = $e(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
          if (g.children === e.children && !K.current) {
            b = $h(a, b, c);
            break a;
          }
        } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
          var k = h.dependencies;
          if (null !== k) {
            g = h.child;
            for (var l = k.firstContext; null !== l;) {
              if (l.context === d && 0 !== (l.observedBits & f)) {
                1 === h.tag && (l = wg(c, null), l.tag = 2, xg(h, l));
                h.expirationTime < c && (h.expirationTime = c);
                l = h.alternate;
                null !== l && l.expirationTime < c && (l.expirationTime = c);
                pg(h.return, c);
                k.expirationTime < c && (k.expirationTime = c);
                break;
              }
              l = l.next;
            }
          } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;
          if (null !== g) g.return = h;else for (g = h; null !== g;) {
            if (g === b) {
              g = null;
              break;
            }
            h = g.sibling;
            if (null !== h) {
              h.return = g.return;
              g = h;
              break;
            }
            g = g.return;
          }
          h = g;
        }
        R(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, qg(b, c), e = sg(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, R(a, b, d, c), b.child;
    case 14:
      return e = b.type, f = ig(e, b.pendingProps), f = ig(e.type, f), ai(a, b, e, f, d, c);
    case 15:
      return ci(a, b, b.type, b.pendingProps, d, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, L(d) ? (a = !0, Gf(b)) : a = !1, qg(b, c), Lg(b, d, e), Ng(b, d, e, c), gi(null, b, d, !0, a, c);
    case 19:
      return mi(a, b, c);
  }
  throw Error(u(156, b.tag));
};
var Uj = null,
  Li = null;
function Yj(a) {
  if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
  var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (b.isDisabled || !b.supportsFiber) return !0;
  try {
    var c = b.inject(a);
    Uj = function Uj(a) {
      try {
        b.onCommitFiberRoot(c, a, void 0, 64 === (a.current.effectTag & 64));
      } catch (e) {}
    };
    Li = function Li(a) {
      try {
        b.onCommitFiberUnmount(c, a);
      } catch (e) {}
    };
  } catch (d) {}
  return !0;
}
function Zj(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.effectTag = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childExpirationTime = this.expirationTime = 0;
  this.alternate = null;
}
function Sh(a, b, c, d) {
  return new Zj(a, b, c, d);
}
function bi(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Xj(a) {
  if ("function" === typeof a) return bi(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === gb) return 11;
    if (a === jb) return 14;
  }
  return 2;
}
function Sg(a, b) {
  var c = a.alternate;
  null === c ? (c = Sh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childExpirationTime = a.childExpirationTime;
  c.expirationTime = a.expirationTime;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : {
    expirationTime: b.expirationTime,
    firstContext: b.firstContext,
    responders: b.responders
  };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Ug(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if ("function" === typeof a) bi(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
    case ab:
      return Wg(c.children, e, f, b);
    case fb:
      g = 8;
      e |= 7;
      break;
    case bb:
      g = 8;
      e |= 1;
      break;
    case cb:
      return a = Sh(12, c, b, e | 8), a.elementType = cb, a.type = cb, a.expirationTime = f, a;
    case hb:
      return a = Sh(13, c, b, e), a.type = hb, a.elementType = hb, a.expirationTime = f, a;
    case ib:
      return a = Sh(19, c, b, e), a.elementType = ib, a.expirationTime = f, a;
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case db:
          g = 10;
          break a;
        case eb:
          g = 9;
          break a;
        case gb:
          g = 11;
          break a;
        case jb:
          g = 14;
          break a;
        case kb:
          g = 16;
          d = null;
          break a;
        case lb:
          g = 22;
          break a;
      }
      throw Error(u(130, null == a ? a : typeof a, ""));
  }
  b = Sh(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.expirationTime = f;
  return b;
}
function Wg(a, b, c, d) {
  a = Sh(7, a, d, b);
  a.expirationTime = c;
  return a;
}
function Tg(a, b, c) {
  a = Sh(6, a, null, b);
  a.expirationTime = c;
  return a;
}
function Vg(a, b, c) {
  b = Sh(4, null !== a.children ? a.children : [], a.key, b);
  b.expirationTime = c;
  b.stateNode = {
    containerInfo: a.containerInfo,
    pendingChildren: null,
    implementation: a.implementation
  };
  return b;
}
function ak(a, b, c) {
  this.tag = b;
  this.current = null;
  this.containerInfo = a;
  this.pingCache = this.pendingChildren = null;
  this.finishedExpirationTime = 0;
  this.finishedWork = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 90;
  this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
}
function Aj(a, b) {
  var c = a.firstSuspendedTime;
  a = a.lastSuspendedTime;
  return 0 !== c && c >= b && a <= b;
}
function xi(a, b) {
  var c = a.firstSuspendedTime,
    d = a.lastSuspendedTime;
  c < b && (a.firstSuspendedTime = b);
  if (d > b || 0 === c) a.lastSuspendedTime = b;
  b <= a.lastPingedTime && (a.lastPingedTime = 0);
  b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
}
function yi(a, b) {
  b > a.firstPendingTime && (a.firstPendingTime = b);
  var c = a.firstSuspendedTime;
  0 !== c && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
}
function Cj(a, b) {
  var c = a.lastExpiredTime;
  if (0 === c || c > b) a.lastExpiredTime = b;
}
function bk(a, b, c, d) {
  var e = b.current,
    f = Gg(),
    g = Dg.suspense;
  f = Hg(f, e, g);
  a: if (c) {
    c = c._reactInternalFiber;
    b: {
      if (dc(c) !== c || 1 !== c.tag) throw Error(u(170));
      var h = c;
      do {
        switch (h.tag) {
          case 3:
            h = h.stateNode.context;
            break b;
          case 1:
            if (L(h.type)) {
              h = h.stateNode.__reactInternalMemoizedMergedChildContext;
              break b;
            }
        }
        h = h.return;
      } while (null !== h);
      throw Error(u(171));
    }
    if (1 === c.tag) {
      var k = c.type;
      if (L(k)) {
        c = Ff(c, k, h);
        break a;
      }
    }
    c = h;
  } else c = Af;
  null === b.context ? b.context = c : b.pendingContext = c;
  b = wg(f, g);
  b.payload = {
    element: a
  };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  xg(e, b);
  Ig(e, f);
  return f;
}
function ck(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function dk(a, b) {
  a = a.memoizedState;
  null !== a && null !== a.dehydrated && a.retryTime < b && (a.retryTime = b);
}
function ek(a, b) {
  dk(a, b);
  (a = a.alternate) && dk(a, b);
}
function fk(a, b, c) {
  c = null != c && !0 === c.hydrate;
  var d = new ak(a, b, c),
    e = Sh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
  d.current = e;
  e.stateNode = d;
  ug(e);
  a[Od] = d.current;
  c && 0 !== b && Jc(a, 9 === a.nodeType ? a : a.ownerDocument);
  this._internalRoot = d;
}
fk.prototype.render = function (a) {
  bk(a, this._internalRoot, null, null);
};
fk.prototype.unmount = function () {
  var a = this._internalRoot,
    b = a.containerInfo;
  bk(null, a, null, function () {
    b[Od] = null;
  });
};
function gk(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function hk(a, b) {
  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
  if (!b) for (var c; c = a.lastChild;) a.removeChild(c);
  return new fk(a, 0, b ? {
    hydrate: !0
  } : void 0);
}
function ik(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f._internalRoot;
    if ("function" === typeof e) {
      var h = e;
      e = function e() {
        var a = ck(g);
        h.call(a);
      };
    }
    bk(b, g, a, e);
  } else {
    f = c._reactRootContainer = hk(c, d);
    g = f._internalRoot;
    if ("function" === typeof e) {
      var k = e;
      e = function e() {
        var a = ck(g);
        k.call(a);
      };
    }
    Nj(function () {
      bk(b, g, a, e);
    });
  }
  return ck(g);
}
function jk(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: $a,
    key: null == d ? null : "" + d,
    children: a,
    containerInfo: b,
    implementation: c
  };
}
wc = function wc(a) {
  if (13 === a.tag) {
    var b = hg(Gg(), 150, 100);
    Ig(a, b);
    ek(a, b);
  }
};
xc = function xc(a) {
  13 === a.tag && (Ig(a, 3), ek(a, 3));
};
yc = function yc(a) {
  if (13 === a.tag) {
    var b = Gg();
    b = Hg(b, a, null);
    Ig(a, b);
    ek(a, b);
  }
};
za = function za(a, b, c) {
  switch (b) {
    case "input":
      Cb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode;) c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Qd(d);
            if (!e) throw Error(u(90));
            yb(d);
            Cb(d, e);
          }
        }
      }
      break;
    case "textarea":
      Kb(a, c);
      break;
    case "select":
      b = c.value, null != b && Hb(a, !!c.multiple, b, !1);
  }
};
Fa = Mj;
Ga = function Ga(a, b, c, d, e) {
  var f = W;
  W |= 4;
  try {
    return cg(98, a.bind(null, b, c, d, e));
  } finally {
    W = f, W === V && gg();
  }
};
Ha = function Ha() {
  (W & (1 | fj | gj)) === V && (Lj(), Dj());
};
Ia = function Ia(a, b) {
  var c = W;
  W |= 2;
  try {
    return a(b);
  } finally {
    W = c, W === V && gg();
  }
};
function kk(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!gk(b)) throw Error(u(200));
  return jk(a, b, null, c);
}
var lk = {
  Events: [Nc, Pd, Qd, xa, ta, Xd, function (a) {
    jc(a, Wd);
  }, Da, Ea, id, mc, Dj, {
    current: !1
  }]
};
(function (a) {
  var b = a.findFiberByHostInstance;
  return Yj(n({}, a, {
    overrideHookState: null,
    overrideProps: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wa.ReactCurrentDispatcher,
    findHostInstanceByFiber: function findHostInstanceByFiber(a) {
      a = hc(a);
      return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: function findFiberByHostInstance(a) {
      return b ? b(a) : null;
    },
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null
  }));
})({
  findFiberByHostInstance: tc,
  bundleType: 0,
  version: "16.14.0",
  rendererPackageName: "react-dom"
});
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lk;
exports.createPortal = kk;
exports.findDOMNode = function (a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b = a._reactInternalFiber;
  if (void 0 === b) {
    if ("function" === typeof a.render) throw Error(u(188));
    throw Error(u(268, Object.keys(a)));
  }
  a = hc(b);
  a = null === a ? null : a.stateNode;
  return a;
};
exports.flushSync = function (a, b) {
  if ((W & (fj | gj)) !== V) throw Error(u(187));
  var c = W;
  W |= 1;
  try {
    return cg(99, a.bind(null, b));
  } finally {
    W = c, gg();
  }
};
exports.hydrate = function (a, b, c) {
  if (!gk(b)) throw Error(u(200));
  return ik(null, a, b, !0, c);
};
exports.render = function (a, b, c) {
  if (!gk(b)) throw Error(u(200));
  return ik(null, a, b, !1, c);
};
exports.unmountComponentAtNode = function (a) {
  if (!gk(a)) throw Error(u(40));
  return a._reactRootContainer ? (Nj(function () {
    ik(null, null, a, !1, function () {
      a._reactRootContainer = null;
      a[Od] = null;
    });
  }), !0) : !1;
};
exports.unstable_batchedUpdates = Mj;
exports.unstable_createPortal = function (a, b) {
  return kk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
};
exports.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
  if (!gk(c)) throw Error(u(200));
  if (null == a || void 0 === a._reactInternalFiber) throw Error(u(38));
  return ik(a, b, c, !1, d);
};
exports.version = "16.14.0";

/***/ }),

/***/ 33573:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}
if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(3655);
} else {}

/***/ }),

/***/ 34122:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var l = __webpack_require__(71843),
  n = "function" === typeof Symbol && Symbol.for,
  p = n ? Symbol.for("react.element") : 60103,
  q = n ? Symbol.for("react.portal") : 60106,
  r = n ? Symbol.for("react.fragment") : 60107,
  t = n ? Symbol.for("react.strict_mode") : 60108,
  u = n ? Symbol.for("react.profiler") : 60114,
  v = n ? Symbol.for("react.provider") : 60109,
  w = n ? Symbol.for("react.context") : 60110,
  x = n ? Symbol.for("react.forward_ref") : 60112,
  y = n ? Symbol.for("react.suspense") : 60113,
  z = n ? Symbol.for("react.memo") : 60115,
  A = n ? Symbol.for("react.lazy") : 60116,
  B = "function" === typeof Symbol && Symbol.iterator;
function C(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var D = {
    isMounted: function isMounted() {
      return !1;
    },
    enqueueForceUpdate: function enqueueForceUpdate() {},
    enqueueReplaceState: function enqueueReplaceState() {},
    enqueueSetState: function enqueueSetState() {}
  },
  E = {};
function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}
F.prototype.isReactComponent = {};
F.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(C(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
F.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function G() {}
G.prototype = F.prototype;
function H(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}
var I = H.prototype = new G();
I.constructor = H;
l(I, F.prototype);
I.isPureReactComponent = !0;
var J = {
    current: null
  },
  K = Object.prototype.hasOwnProperty,
  L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function M(a, b, c) {
  var e,
    d = {},
    g = null,
    k = null;
  if (null != b) for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
  var f = arguments.length - 2;
  if (1 === f) d.children = c;else if (1 < f) {
    for (var h = Array(f), m = 0; m < f; m++) h[m] = arguments[m + 2];
    d.children = h;
  }
  if (a && a.defaultProps) for (e in f = a.defaultProps, f) void 0 === d[e] && (d[e] = f[e]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: k,
    props: d,
    _owner: J.current
  };
}
function N(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}
function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}
function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}
var P = /\/+/g,
  Q = [];
function R(a, b, c, e) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = c;
    d.context = e;
    d.count = 0;
    return d;
  }
  return {
    result: a,
    keyPrefix: b,
    func: c,
    context: e,
    count: 0
  };
}
function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}
function T(a, b, c, e) {
  var d = typeof a;
  if ("undefined" === d || "boolean" === d) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (d) {
    case "string":
    case "number":
      g = !0;
      break;
    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }
  }
  if (g) return c(e, a, "" === b ? "." + U(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];
    var f = b + U(d, k);
    g += T(d, f, c, e);
  } else if (null === a || "object" !== typeof a ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) d = d.value, f = b + U(d, k++), g += T(d, f, c, e);else if ("object" === d) throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
  return g;
}
function V(a, b, c) {
  return null == a ? 0 : T(a, "", b, c);
}
function U(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}
function W(a, b) {
  a.func.call(a.context, b, a.count++);
}
function aa(a, b, c) {
  var e = a.result,
    d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? X(a, e, c, function (a) {
    return a;
  }) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
}
function X(a, b, c, e, d) {
  var g = "";
  null != c && (g = ("" + c).replace(P, "$&/") + "/");
  b = R(b, g, e, d);
  V(a, aa, b);
  S(b);
}
var Y = {
  current: null
};
function Z() {
  var a = Y.current;
  if (null === a) throw Error(C(321));
  return a;
}
var ba = {
  ReactCurrentDispatcher: Y,
  ReactCurrentBatchConfig: {
    suspense: null
  },
  ReactCurrentOwner: J,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: function map(a, b, c) {
    if (null == a) return a;
    var e = [];
    X(a, e, null, b, c);
    return e;
  },
  forEach: function forEach(a, b, c) {
    if (null == a) return a;
    b = R(null, null, b, c);
    V(a, W, b);
    S(b);
  },
  count: function count(a) {
    return V(a, function () {
      return null;
    }, null);
  },
  toArray: function toArray(a) {
    var b = [];
    X(a, b, null, function (a) {
      return a;
    });
    return b;
  },
  only: function only(a) {
    if (!O(a)) throw Error(C(143));
    return a;
  }
};
exports.Component = F;
exports.Fragment = r;
exports.Profiler = u;
exports.PureComponent = H;
exports.StrictMode = t;
exports.Suspense = y;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;
exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(C(267, a));
  var e = l({}, a.props),
    d = a.key,
    g = a.ref,
    k = a._owner;
  if (null != b) {
    void 0 !== b.ref && (g = b.ref, k = J.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var f = a.type.defaultProps;
    for (h in b) K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
  }
  var h = arguments.length - 2;
  if (1 === h) e.children = c;else if (1 < h) {
    f = Array(h);
    for (var m = 0; m < h; m++) f[m] = arguments[m + 2];
    e.children = f;
  }
  return {
    $$typeof: p,
    type: a.type,
    key: d,
    ref: g,
    props: e,
    _owner: k
  };
};
exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: w,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: v,
    _context: a
  };
  return a.Consumer = a;
};
exports.createElement = M;
exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};
exports.createRef = function () {
  return {
    current: null
  };
};
exports.forwardRef = function (a) {
  return {
    $$typeof: x,
    render: a
  };
};
exports.isValidElement = O;
exports.lazy = function (a) {
  return {
    $$typeof: A,
    _ctor: a,
    _status: -1,
    _result: null
  };
};
exports.memo = function (a, b) {
  return {
    $$typeof: z,
    type: a,
    compare: void 0 === b ? null : b
  };
};
exports.useCallback = function (a, b) {
  return Z().useCallback(a, b);
};
exports.useContext = function (a, b) {
  return Z().useContext(a, b);
};
exports.useDebugValue = function () {};
exports.useEffect = function (a, b) {
  return Z().useEffect(a, b);
};
exports.useImperativeHandle = function (a, b, c) {
  return Z().useImperativeHandle(a, b, c);
};
exports.useLayoutEffect = function (a, b) {
  return Z().useLayoutEffect(a, b);
};
exports.useMemo = function (a, b) {
  return Z().useMemo(a, b);
};
exports.useReducer = function (a, b, c) {
  return Z().useReducer(a, b, c);
};
exports.useRef = function (a) {
  return Z().useRef(a);
};
exports.useState = function (a) {
  return Z().useState(a);
};
exports.version = "16.14.0";

/***/ }),

/***/ 11608:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(34122);
} else {}

/***/ }),

/***/ 41808:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _f, g, h, k, l;
if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var p = null,
    q = null,
    t = function t() {
      if (null !== p) try {
        var a = exports.unstable_now();
        p(!0, a);
        p = null;
      } catch (b) {
        throw setTimeout(t, 0), b;
      }
    },
    u = Date.now();
  exports.unstable_now = function () {
    return Date.now() - u;
  };
  _f = function f(a) {
    null !== p ? setTimeout(_f, 0, a) : (p = a, setTimeout(t, 0));
  };
  g = function g(a, b) {
    q = setTimeout(a, b);
  };
  h = function h() {
    clearTimeout(q);
  };
  k = function k() {
    return !1;
  };
  l = exports.unstable_forceFrameRate = function () {};
} else {
  var w = window.performance,
    x = window.Date,
    y = window.setTimeout,
    z = window.clearTimeout;
  if ("undefined" !== typeof console) {
    var A = window.cancelAnimationFrame;
    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
    "function" !== typeof A && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
  }
  if ("object" === typeof w && "function" === typeof w.now) exports.unstable_now = function () {
    return w.now();
  };else {
    var B = x.now();
    exports.unstable_now = function () {
      return x.now() - B;
    };
  }
  var C = !1,
    D = null,
    E = -1,
    F = 5,
    G = 0;
  k = function k() {
    return exports.unstable_now() >= G;
  };
  l = function l() {};
  exports.unstable_forceFrameRate = function (a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : F = 0 < a ? Math.floor(1E3 / a) : 5;
  };
  var H = new MessageChannel(),
    I = H.port2;
  H.port1.onmessage = function () {
    if (null !== D) {
      var a = exports.unstable_now();
      G = a + F;
      try {
        D(!0, a) ? I.postMessage(null) : (C = !1, D = null);
      } catch (b) {
        throw I.postMessage(null), b;
      }
    } else C = !1;
  };
  _f = function _f(a) {
    D = a;
    C || (C = !0, I.postMessage(null));
  };
  g = function g(a, b) {
    E = y(function () {
      a(exports.unstable_now());
    }, b);
  };
  h = function h() {
    z(E);
    E = -1;
  };
}
function J(a, b) {
  var c = a.length;
  a.push(b);
  a: for (;;) {
    var d = c - 1 >>> 1,
      e = a[d];
    if (void 0 !== e && 0 < K(e, b)) a[d] = b, a[c] = e, c = d;else break a;
  }
}
function L(a) {
  a = a[0];
  return void 0 === a ? null : a;
}
function M(a) {
  var b = a[0];
  if (void 0 !== b) {
    var c = a.pop();
    if (c !== b) {
      a[0] = c;
      a: for (var d = 0, e = a.length; d < e;) {
        var m = 2 * (d + 1) - 1,
          n = a[m],
          v = m + 1,
          r = a[v];
        if (void 0 !== n && 0 > K(n, c)) void 0 !== r && 0 > K(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > K(r, c)) a[d] = r, a[v] = c, d = v;else break a;
      }
    }
    return b;
  }
  return null;
}
function K(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}
var N = [],
  O = [],
  P = 1,
  Q = null,
  R = 3,
  S = !1,
  T = !1,
  U = !1;
function V(a) {
  for (var b = L(O); null !== b;) {
    if (null === b.callback) M(O);else if (b.startTime <= a) M(O), b.sortIndex = b.expirationTime, J(N, b);else break;
    b = L(O);
  }
}
function W(a) {
  U = !1;
  V(a);
  if (!T) if (null !== L(N)) T = !0, _f(X);else {
    var b = L(O);
    null !== b && g(W, b.startTime - a);
  }
}
function X(a, b) {
  T = !1;
  U && (U = !1, h());
  S = !0;
  var c = R;
  try {
    V(b);
    for (Q = L(N); null !== Q && (!(Q.expirationTime > b) || a && !k());) {
      var d = Q.callback;
      if (null !== d) {
        Q.callback = null;
        R = Q.priorityLevel;
        var e = d(Q.expirationTime <= b);
        b = exports.unstable_now();
        "function" === typeof e ? Q.callback = e : Q === L(N) && M(N);
        V(b);
      } else M(N);
      Q = L(N);
    }
    if (null !== Q) var m = !0;else {
      var n = L(O);
      null !== n && g(W, n.startTime - b);
      m = !1;
    }
    return m;
  } finally {
    Q = null, R = c, S = !1;
  }
}
function Y(a) {
  switch (a) {
    case 1:
      return -1;
    case 2:
      return 250;
    case 5:
      return 1073741823;
    case 4:
      return 1E4;
    default:
      return 5E3;
  }
}
var Z = l;
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (a) {
  a.callback = null;
};
exports.unstable_continueExecution = function () {
  T || S || (T = !0, _f(X));
};
exports.unstable_getCurrentPriorityLevel = function () {
  return R;
};
exports.unstable_getFirstCallbackNode = function () {
  return L(N);
};
exports.unstable_next = function (a) {
  switch (R) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;
    default:
      b = R;
  }
  var c = R;
  R = b;
  try {
    return a();
  } finally {
    R = c;
  }
};
exports.unstable_pauseExecution = function () {};
exports.unstable_requestPaint = Z;
exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      a = 3;
  }
  var c = R;
  R = a;
  try {
    return b();
  } finally {
    R = c;
  }
};
exports.unstable_scheduleCallback = function (a, b, c) {
  var d = exports.unstable_now();
  if ("object" === typeof c && null !== c) {
    var e = c.delay;
    e = "number" === typeof e && 0 < e ? d + e : d;
    c = "number" === typeof c.timeout ? c.timeout : Y(a);
  } else c = Y(a), e = d;
  c = e + c;
  a = {
    id: P++,
    callback: b,
    priorityLevel: a,
    startTime: e,
    expirationTime: c,
    sortIndex: -1
  };
  e > d ? (a.sortIndex = e, J(O, a), null === L(N) && a === L(O) && (U ? h() : U = !0, g(W, e - d))) : (a.sortIndex = c, J(N, a), T || S || (T = !0, _f(X)));
  return a;
};
exports.unstable_shouldYield = function () {
  var a = exports.unstable_now();
  V(a);
  var b = L(N);
  return b !== Q && null !== Q && null !== b && null !== b.callback && b.startTime <= a && b.expirationTime < Q.expirationTime || k();
};
exports.unstable_wrapCallback = function (a) {
  var b = R;
  return function () {
    var c = R;
    R = b;
    try {
      return a.apply(this, arguments);
    } finally {
      R = c;
    }
  };
};

/***/ }),

/***/ 21948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(41808);
} else {}

/***/ }),

/***/ 23108:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  asyncTag = '[object AsyncFunction]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  nullTag = '[object Null]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  proxyTag = '[object Proxy]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]',
  undefinedTag = '[object Undefined]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
    result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
    result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
  funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
  Symbol = root.Symbol,
  Uint8Array = root.Uint8Array,
  propertyIsEnumerable = objectProto.propertyIsEnumerable,
  splice = arrayProto.splice,
  symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
  nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
  nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
  Map = getNative(root, 'Map'),
  Promise = getNative(root, 'Promise'),
  Set = getNative(root, 'Set'),
  WeakMap = getNative(root, 'WeakMap'),
  nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
  mapCtorString = toSource(Map),
  promiseCtorString = toSource(Promise),
  setCtorString = toSource(Set),
  weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
    size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
    length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
    result = data['delete'](key);
  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
    isArg = !isArr && isArguments(value),
    isBuff = !isArr && !isArg && isBuffer(value),
    isType = !isArr && !isArg && !isBuff && isTypedArray(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? baseTimes(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
    othIsArr = isArray(other),
    objTag = objIsArr ? arrayTag : getTag(object),
    othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
    othIsObj = othTag == objectTag,
    isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
      othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
        othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    arrLength = array.length,
    othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
    result = true,
    seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
      othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    objProps = getAllKeys(object),
    objLength = objProps.length,
    othProps = getAllKeys(other),
    othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
      othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
      othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
      Ctor = result == objectTag ? value.constructor : undefined,
      ctorString = Ctor ? toSource(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
module.exports = isEqual;

/***/ }),

/***/ 82061:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
  nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
      thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime,
      result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(),
      isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = throttle;

/***/ }),

/***/ 71843:
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/



/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }
    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}
module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};

/***/ }),

/***/ 3460:
/***/ (function(module) {

// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(this);

//# sourceMappingURL=performance-now.js.map

/***/ }),

/***/ 44903:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var now = __webpack_require__(3460),
  root = typeof window === 'undefined' ? __webpack_require__.g : window,
  vendors = ['moz', 'webkit'],
  suffix = 'AnimationFrame',
  raf = root['request' + suffix],
  caf = root['cancel' + suffix] || root['cancelRequest' + suffix];
for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
  var last = 0,
    id = 0,
    queue = [],
    frameDuration = 1000 / 60;
  raf = function raf(callback) {
    if (queue.length === 0) {
      var _now = now(),
        next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        var _loop = function _loop() {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        };
        for (var i = 0; i < cp.length; i++) {
          _loop();
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };
  caf = function caf(handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}
module.exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn);
};
module.exports.cancel = function () {
  caf.apply(root, arguments);
};
module.exports.polyfill = function (object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

/***/ }),

/***/ 6492:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getDisplayName;
function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}

/***/ }),

/***/ 31190:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": function() { return /* binding */ DndContext; },
  "W": function() { return /* binding */ createDndContext; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
;// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;
  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }
  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);
  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other

  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}
function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}
function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}
function kindOf(val) {
  var typeOfVal = typeof val;
  if (false) {}
  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */

  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }
    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */

  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */

  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }
    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */

  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }
    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */

  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.

  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = (/* unused pure expression or super */ null && (createStore));

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */

  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }
  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }
  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;
  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });
    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }
    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */

function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];
    if (false) {}
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;
  if (false) {}
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    if (false) { var warningMessage; }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */

function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }
  var boundActionCreators = {};
  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 0);
      };
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread(_objectSpread({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js
var INIT_COORDS = 'dnd-core/INIT_COORDS';
var BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
var PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
var HOVER = 'dnd-core/HOVER';
var DROP = 'dnd-core/DROP';
var END_DRAG = 'dnd-core/END_DRAG';
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/equality.js
var strictEquality = function strictEquality(a, b) {
  return a === b;
};
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */

function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */

function areArraysEqual(a, b) {
  var isEqual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : strictEquality;
  if (a.length !== b.length) {
    return false;
  }
  for (var i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }
  return true;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/dragOffset.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function dragOffset_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}


var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;
  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }
      return dragOffset_objectSpread(dragOffset_objectSpread({}, state), {}, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState;
    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/registry.js
var ADD_SOURCE = 'dnd-core/ADD_SOURCE';
var ADD_TARGET = 'dnd-core/ADD_TARGET';
var REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
var REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function registry_addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function registry_addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId: targetId
    }
  };
}
function registry_removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function registry_removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId: targetId
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/js_utils.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}

// cheap lodash replacements

/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */
function get(obj, path, defaultValue) {
  return path.split('.').reduce(function (a, c) {
    return a && a[c] ? a[c] : defaultValue || null;
  }, obj);
}
/**
 * drop-in replacement for _.without
 */

function without(items, item) {
  return items.filter(function (i) {
    return i !== item;
  });
}
/**
 * drop-in replacement for _.isString
 * @param input
 */

function isString(input) {
  return typeof input === 'string';
}
/**
 * drop-in replacement for _.isString
 * @param input
 */

function isObject(input) {
  return _typeof(input) === 'object';
}
/**
 * repalcement for _.xor
 * @param itemsA
 * @param itemsB
 */

function xor(itemsA, itemsB) {
  var map = new Map();
  var insertItem = function insertItem(item) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  map.forEach(function (count, key) {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */

function intersection(itemsA, itemsB) {
  return itemsA.filter(function (t) {
    return itemsB.indexOf(t) > -1;
  });
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/dragOperation.js
function dragOperation_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function dragOperation_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      dragOperation_ownKeys(Object(source), true).forEach(function (key) {
        dragOperation_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      dragOperation_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function dragOperation_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}



var dragOperation_initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function dragOperation_reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dragOperation_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;
  switch (action.type) {
    case BEGIN_DRAG:
      return dragOperation_objectSpread(dragOperation_objectSpread({}, state), {}, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case PUBLISH_DRAG_SOURCE:
      return dragOperation_objectSpread(dragOperation_objectSpread({}, state), {}, {
        isSourcePublic: true
      });
    case HOVER:
      return dragOperation_objectSpread(dragOperation_objectSpread({}, state), {}, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }
      return dragOperation_objectSpread(dragOperation_objectSpread({}, state), {}, {
        targetIds: without(state.targetIds, payload.targetId)
      });
    case DROP:
      return dragOperation_objectSpread(dragOperation_objectSpread({}, state), {}, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });
    case END_DRAG:
      return dragOperation_objectSpread(dragOperation_objectSpread({}, state), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/refCount.js

function refCount_reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/dirtiness.js

var NONE = [];
var ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */

function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }
  if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
    return true;
  }
  var commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/dirtyHandlerIds.js





function dirtyHandlerIds_reduce() {
  var _state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NONE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  var _action$payload = action.payload,
    _action$payload$targe = _action$payload.targetIds,
    targetIds = _action$payload$targe === void 0 ? [] : _action$payload$targe,
    _action$payload$prevT = _action$payload.prevTargetIds,
    prevTargetIds = _action$payload$prevT === void 0 ? [] : _action$payload$prevT;
  var result = xor(targetIds, prevTargetIds);
  var didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
  if (!didChange) {
    return NONE;
  } // Check the target ids at the innermost position. If they are valid, add them
  // to the result

  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  var innermostTargetId = targetIds[targetIds.length - 1];
  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }
    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }
  return result;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/stateId.js
function stateId_reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return state + 1;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/index.js
function reducers_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function reducers_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      reducers_ownKeys(Object(source), true).forEach(function (key) {
        reducers_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      reducers_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function reducers_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}






function reducers_reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    dirtyHandlerIds: dirtyHandlerIds_reduce(state.dirtyHandlerIds, {
      type: action.type,
      payload: reducers_objectSpread(reducers_objectSpread({}, action.payload), {}, {
        prevTargetIds: get(state, 'dragOperation.targetIds', [])
      })
    }),
    dragOffset: reduce(state.dragOffset, action),
    refCount: refCount_reduce(state.refCount, action),
    dragOperation: dragOperation_reduce(state.dragOperation, action),
    stateId: stateId_reduce(state.stateId)
  };
}
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(56180);
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/local/setClientOffset.js

function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/beginDrag.js




var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag() {
    var sourceIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      publishSource: true
    };
    var _options$publishSourc = options.publishSource,
      publishSource = _options$publishSourc === void 0 ? true : _options$publishSourc,
      clientOffset = options.clientOffset,
      getSourceClientOffset = options.getSourceClientOffset;
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry(); // Initialize the coordinates using the client offset

    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants(sourceIds, monitor, registry); // Get the draggable source

    var sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId === null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    } // Get the source client offset

    var sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset) {
        throw new Error('getSourceClientOffset must be defined');
      }
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
      sourceClientOffset = getSourceClientOffset(sourceId);
    } // Initialize the full coordinates

    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    var source = registry.getSource(sourceId);
    var item = source.beginDrag(monitor, sourceId);
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    var itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType: itemType,
        item: item,
        sourceId: sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants(sourceIds, monitor, registry) {
  (0,invariant_esm/* invariant */.k)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
  sourceIds.forEach(function (sourceId) {
    (0,invariant_esm/* invariant */.k)(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
  (0,invariant_esm/* invariant */.k)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}
function verifyItemIsObject(item) {
  (0,invariant_esm/* invariant */.k)(isObject(item), 'Item must be an object.');
}
function getDraggableSource(sourceIds, monitor) {
  var sourceId = null;
  for (var i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }
  return sourceId;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/publishDragSource.js

function createPublishDragSource(manager) {
  return function publishDragSource() {
    var monitor = manager.getMonitor();
    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }
  return Array.isArray(targetType) ? targetType.some(function (t) {
    return t === draggedItemType;
  }) : targetType === draggedItemType;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/hover.js



function createHover(manager) {
  return function hover(targetIdsArg) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      clientOffset = _ref.clientOffset;
    verifyTargetIdsIsArray(targetIdsArg);
    var targetIds = targetIdsArg.slice(0);
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    checkInvariants(targetIds, monitor, registry);
    var draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds: targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  (0,invariant_esm/* invariant */.k)(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}
function checkInvariants(targetIds, monitor, registry) {
  (0,invariant_esm/* invariant */.k)(monitor.isDragging(), 'Cannot call hover while not dragging.');
  (0,invariant_esm/* invariant */.k)(!monitor.didDrop(), 'Cannot call hover after drop.');
  for (var i = 0; i < targetIds.length; i++) {
    var targetId = targetIds[i];
    (0,invariant_esm/* invariant */.k)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
    var target = registry.getTarget(targetId);
    (0,invariant_esm/* invariant */.k)(target, 'Expected targetIds to be registered.');
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  // Remove those targetIds that don't match the targetType.  This
  // fixes shallow isOver which would only be non-shallow because of
  // non-matching targets.
  for (var i = targetIds.length - 1; i >= 0; i--) {
    var targetId = targetIds[i];
    var targetType = registry.getTargetType(targetId);
    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  // Finally call hover on all matching targets.
  targetIds.forEach(function (targetId) {
    var target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/drop.js
function drop_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function drop_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      drop_ownKeys(Object(source), true).forEach(function (key) {
        drop_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      drop_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function drop_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}



function createDrop(manager) {
  return function drop() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    drop_verifyInvariants(monitor);
    var targetIds = getDroppableTargets(monitor); // Multiple actions are dispatched here, which is why this doesn't return an action

    targetIds.forEach(function (targetId, index) {
      var dropResult = determineDropResult(targetId, index, registry, monitor);
      var action = {
        type: DROP,
        payload: {
          dropResult: drop_objectSpread(drop_objectSpread({}, options), dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}
function drop_verifyInvariants(monitor) {
  (0,invariant_esm/* invariant */.k)(monitor.isDragging(), 'Cannot call drop while not dragging.');
  (0,invariant_esm/* invariant */.k)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function determineDropResult(targetId, index, registry, monitor) {
  var target = registry.getTarget(targetId);
  var dropResult = target ? target.drop(monitor, targetId) : undefined;
  verifyDropResultType(dropResult);
  if (typeof dropResult === 'undefined') {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }
  return dropResult;
}
function verifyDropResultType(dropResult) {
  (0,invariant_esm/* invariant */.k)(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');
}
function getDroppableTargets(monitor) {
  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/endDrag.js


function createEndDrag(manager) {
  return function endDrag() {
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyIsDragging(monitor);
    var sourceId = monitor.getSourceId();
    if (sourceId != null) {
      var source = registry.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry.unpinSource();
    }
    return {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  (0,invariant_esm/* invariant */.k)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/index.js






function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/coords.js
/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */

function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */

function coords_getSourceClientOffset(state) {
  var clientOffset = state.clientOffset,
    initialClientOffset = state.initialClientOffset,
    initialSourceClientOffset = state.initialSourceClientOffset;
  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }
  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */

function coords_getDifferenceFromInitialOffset(state) {
  var clientOffset = state.clientOffset,
    initialClientOffset = state.initialClientOffset;
  if (!clientOffset || !initialClientOffset) {
    return null;
  }
  return subtract(clientOffset, initialClientOffset);
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/DragDropMonitorImpl.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}




var DragDropMonitorImpl = /*#__PURE__*/function () {
  function DragDropMonitorImpl(store, registry) {
    _classCallCheck(this, DragDropMonitorImpl);
    this.store = store;
    this.registry = registry;
  }
  _createClass(DragDropMonitorImpl, [{
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        handlerIds: undefined
      };
      var handlerIds = options.handlerIds;
      (0,invariant_esm/* invariant */.k)(typeof listener === 'function', 'listener must be a function.');
      (0,invariant_esm/* invariant */.k)(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
      var prevStateId = this.store.getState().stateId;
      var handleChange = function handleChange() {
        var state = _this.store.getState();
        var currentStateId = state.stateId;
        try {
          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
          if (!canSkipListener) {
            listener();
          }
        } finally {
          prevStateId = currentStateId;
        }
      };
      return this.store.subscribe(handleChange);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      var _this2 = this;
      (0,invariant_esm/* invariant */.k)(typeof listener === 'function', 'listener must be a function.');
      var previousState = this.store.getState().dragOffset;
      var handleChange = function handleChange() {
        var nextState = _this2.store.getState().dragOffset;
        if (nextState === previousState) {
          return;
        }
        previousState = nextState;
        listener();
      };
      return this.store.subscribe(handleChange);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      if (!sourceId) {
        return false;
      }
      var source = this.registry.getSource(sourceId);
      (0,invariant_esm/* invariant */.k)(source, 'Expected to find a valid source.');
      if (this.isDragging()) {
        return false;
      }
      return source.canDrag(this, sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      // undefined on initial render
      if (!targetId) {
        return false;
      }
      var target = this.registry.getTarget(targetId);
      (0,invariant_esm/* invariant */.k)(target, 'Expected to find a valid target.');
      if (!this.isDragging() || this.didDrop()) {
        return false;
      }
      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      return Boolean(this.getItemType());
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      // undefined on initial render
      if (!sourceId) {
        return false;
      }
      var source = this.registry.getSource(sourceId, true);
      (0,invariant_esm/* invariant */.k)(source, 'Expected to find a valid source.');
      if (!this.isDragging() || !this.isSourcePublic()) {
        return false;
      }
      var sourceType = this.registry.getSourceType(sourceId);
      var draggedItemType = this.getItemType();
      if (sourceType !== draggedItemType) {
        return false;
      }
      return source.isDragging(this, sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        shallow: false
      };

      // undefined on initial render
      if (!targetId) {
        return false;
      }
      var shallow = options.shallow;
      if (!this.isDragging()) {
        return false;
      }
      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      if (draggedItemType && !matchesType(targetType, draggedItemType)) {
        return false;
      }
      var targetIds = this.getTargetIds();
      if (!targetIds.length) {
        return false;
      }
      var index = targetIds.indexOf(targetId);
      if (shallow) {
        return index === targetIds.length - 1;
      } else {
        return index > -1;
      }
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return Boolean(this.store.getState().dragOperation.isSourcePublic);
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return coords_getSourceClientOffset(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return coords_getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    }
  }]);
  return DragDropMonitorImpl;
}();
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/getNextUniqueId.js
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/interfaces.js
var HandlerRole;
(function (HandlerRole) {
  HandlerRole["SOURCE"] = "SOURCE";
  HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/contracts.js
function contracts_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    contracts_typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    contracts_typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return contracts_typeof(obj);
}

function validateSourceContract(source) {
  (0,invariant_esm/* invariant */.k)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
  (0,invariant_esm/* invariant */.k)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
  (0,invariant_esm/* invariant */.k)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
  (0,invariant_esm/* invariant */.k)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
  (0,invariant_esm/* invariant */.k)(typeof target.hover === 'function', 'Expected hover to be a function.');
  (0,invariant_esm/* invariant */.k)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(function (t) {
      return validateType(t, false);
    });
    return;
  }
  (0,invariant_esm/* invariant */.k)(typeof type === 'string' || contracts_typeof(type) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/esm/makeRequestCall.mjs
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
/* globals self */var scope = typeof global !== 'undefined' ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    // We dispatch a timeout with a specified delay of 0 for engines that
    // can reliably accommodate that request. This will usually be snapped
    // to a 4 milisecond delay, but once we're flushing, there's no delay
    // between events.
    var timeoutHandle = setTimeout(handleTimer, 0);
    // However, since this timer gets frequently dropped in Firefox
    // workers, we enlist an interval handle that will try to fire
    // an event 20 times per second until it succeeds.
    var intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      // Whichever timer succeeds will cancel both timers and
      // execute the callback.
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
}
// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
  var toggle = 1;
  var observer = new BrowserMutationObserver(callback);
  var node = document.createTextNode('');
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
}
var makeRequestCall = typeof BrowserMutationObserver === 'function' ?
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
makeRequestCallFromMutationObserver :
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.
// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396
// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
makeRequestCallFromTimer;

//# sourceMappingURL=makeRequestCall.mjs.map
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/esm/AsapQueue.mjs



var AsapQueue = /*#__PURE__*/function () {
  function AsapQueue() {
    var _this = this;
    (0,classCallCheck/* default */.Z)(this, AsapQueue);
    this.queue = [];
    // We queue errors to ensure they are thrown in right order (FIFO).
    // Array-as-queue is good enough here, since we are just dealing with exceptions.
    this.pendingErrors = [];
    // Once a flush has been requested, no further calls to `requestFlush` are
    // necessary until the next `flush` completes.
    // @ts-ignore
    this.flushing = false;
    // The position of the next task to execute in the task queue. This is
    // preserved between calls to `flush` so that it can be resumed if
    // a task throws an exception.
    this.index = 0;
    // If a task schedules additional tasks recursively, the task queue can grow
    // unbounded. To prevent memory exhaustion, the task queue will periodically
    // truncate already-completed tasks.
    this.capacity = 1024;
    // The flush function processes all tasks that have been scheduled with
    // `rawAsap` unless and until one of those tasks throws an exception.
    // If a task throws an exception, `flush` ensures that its state will remain
    // consistent and will resume where it left off when called again.
    // However, `flush` does not make any arrangements to be called again if an
    // exception is thrown.
    this.flush = function () {
      var q = _this.queue;
      while (_this.index < q.length) {
        var currentIndex = _this.index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        _this.index++;
        q[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (_this.index > _this.capacity) {
          // Manually shift all values starting at the index back to the
          // beginning of the queue.
          for (var scan = 0, newLength = q.length - _this.index; scan < newLength; scan++) {
            q[scan] = q[scan + _this.index];
          }
          q.length -= _this.index;
          _this.index = 0;
        }
      }
      q.length = 0;
      _this.index = 0;
      _this.flushing = false;
    };
    // In a web browser, exceptions are not fatal. However, to avoid
    // slowing down the queue of pending tasks, we rethrow the error in a
    // lower priority turn.
    this.registerPendingError = function (err) {
      _this.pendingErrors.push(err);
      _this.requestErrorThrow();
    };
    // `requestFlush` requests that the high priority event queue be flushed as
    // soon as possible.
    // This is useful to prevent an error thrown in a task from stalling the event
    // queue if the exception handled by Node.js’s
    // `process.on("uncaughtException")` or by a domain.
    // `requestFlush` is implemented using a strategy based on data collected from
    // every available SauceLabs Selenium web driver worker at time of writing.
    // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
    this.requestFlush = makeRequestCall(this.flush);
    this.requestErrorThrow = makeRequestCallFromTimer(function () {
      // Throw first error
      if (_this.pendingErrors.length) {
        throw _this.pendingErrors.shift();
      }
    });
  }
  (0,createClass/* default */.Z)(AsapQueue, [{
    key: "enqueueTask",
    value:
    // Use the fastest means possible to execute a task in its own turn, with
    // priority over other events including IO, animation, reflow, and redraw
    // events in browsers.
    //
    // An exception thrown by a task will permanently interrupt the processing of
    // subsequent tasks. The higher level `asap` function ensures that if an
    // exception is thrown by a task, that the task queue will continue flushing as
    // soon as possible, but if you use `rawAsap` directly, you are responsible to
    // either ensure that no exceptions are thrown from your task, or to manually
    // call `rawAsap.requestFlush` if an exception is thrown.
    function enqueueTask(task) {
      var q = this.queue,
        requestFlush = this.requestFlush;
      if (!q.length) {
        requestFlush();
        this.flushing = true;
      }
      // Equivalent to push, but avoids a function call.
      q[q.length] = task;
    }
  }]);
  return AsapQueue;
}(); // The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html
// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.
// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }
// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.
// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }
// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.
// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.
// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// // its existence.
// rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer
// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

//# sourceMappingURL=AsapQueue.mjs.map
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/esm/RawTask.mjs


// `call`, just like a function.
var RawTask = /*#__PURE__*/function () {
  function RawTask(onError, release) {
    (0,classCallCheck/* default */.Z)(this, RawTask);
    this.onError = onError;
    this.release = release;
    this.task = null;
  }
  (0,createClass/* default */.Z)(RawTask, [{
    key: "call",
    value: function call() {
      try {
        this.task && this.task();
      } catch (error) {
        this.onError(error);
      } finally {
        this.task = null;
        this.release(this);
      }
    }
  }]);
  return RawTask;
}();

//# sourceMappingURL=RawTask.mjs.map
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/esm/TaskFactory.mjs



var TaskFactory = /*#__PURE__*/function () {
  function TaskFactory(onError) {
    (0,classCallCheck/* default */.Z)(this, TaskFactory);
    this.onError = onError;
    this.freeTasks = [];
  }
  (0,createClass/* default */.Z)(TaskFactory, [{
    key: "create",
    value: function create(task) {
      var tasks = this.freeTasks;
      var t1 = tasks.length ? tasks.pop() : new RawTask(this.onError, function (t) {
        return tasks[tasks.length] = t;
      });
      t1.task = task;
      return t1;
    }
  }]);
  return TaskFactory;
}();

//# sourceMappingURL=TaskFactory.mjs.map
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/esm/asap.mjs


var asapQueue = new AsapQueue();
var taskFactory = new TaskFactory(asapQueue.registerPendingError);
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}

//# sourceMappingURL=asap.mjs.map
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/esm/index.mjs





//# sourceMappingURL=index.mjs.map
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/HandlerRegistryImpl.js
function HandlerRegistryImpl_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function HandlerRegistryImpl_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function HandlerRegistryImpl_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) HandlerRegistryImpl_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) HandlerRegistryImpl_defineProperties(Constructor, staticProps);
  return Constructor;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}






function getNextHandlerId(role) {
  var id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return "S".concat(id);
    case HandlerRole.TARGET:
      return "T".concat(id);
    default:
      throw new Error("Unknown Handler Role: ".concat(role));
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case 'S':
      return HandlerRole.SOURCE;
    case 'T':
      return HandlerRole.TARGET;
    default:
      (0,invariant_esm/* invariant */.k)(false, "Cannot parse handler ID: ".concat(handlerId));
  }
}
function mapContainsValue(map, searchValue) {
  var entries = map.entries();
  var isDone = false;
  do {
    var _entries$next = entries.next(),
      done = _entries$next.done,
      _entries$next$value = _slicedToArray(_entries$next.value, 2),
      value = _entries$next$value[1];
    if (value === searchValue) {
      return true;
    }
    isDone = !!done;
  } while (!isDone);
  return false;
}
var HandlerRegistryImpl = /*#__PURE__*/function () {
  function HandlerRegistryImpl(store) {
    HandlerRegistryImpl_classCallCheck(this, HandlerRegistryImpl);
    this.types = new Map();
    this.dragSources = new Map();
    this.dropTargets = new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = store;
  }
  HandlerRegistryImpl_createClass(HandlerRegistryImpl, [{
    key: "addSource",
    value: function addSource(type, source) {
      validateType(type);
      validateSourceContract(source);
      var sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
      this.store.dispatch(registry_addSource(sourceId));
      return sourceId;
    }
  }, {
    key: "addTarget",
    value: function addTarget(type, target) {
      validateType(type, true);
      validateTargetContract(target);
      var targetId = this.addHandler(HandlerRole.TARGET, type, target);
      this.store.dispatch(registry_addTarget(targetId));
      return targetId;
    }
  }, {
    key: "containsHandler",
    value: function containsHandler(handler) {
      return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
  }, {
    key: "getSource",
    value: function getSource(sourceId) {
      var includePinned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      (0,invariant_esm/* invariant */.k)(this.isSourceId(sourceId), 'Expected a valid source ID.');
      var isPinned = includePinned && sourceId === this.pinnedSourceId;
      var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
      return source;
    }
  }, {
    key: "getTarget",
    value: function getTarget(targetId) {
      (0,invariant_esm/* invariant */.k)(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.dropTargets.get(targetId);
    }
  }, {
    key: "getSourceType",
    value: function getSourceType(sourceId) {
      (0,invariant_esm/* invariant */.k)(this.isSourceId(sourceId), 'Expected a valid source ID.');
      return this.types.get(sourceId);
    }
  }, {
    key: "getTargetType",
    value: function getTargetType(targetId) {
      (0,invariant_esm/* invariant */.k)(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.types.get(targetId);
    }
  }, {
    key: "isSourceId",
    value: function isSourceId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function isTargetId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.TARGET;
    }
  }, {
    key: "removeSource",
    value: function removeSource(sourceId) {
      var _this = this;
      (0,invariant_esm/* invariant */.k)(this.getSource(sourceId), 'Expected an existing source.');
      this.store.dispatch(registry_removeSource(sourceId));
      asap(function () {
        _this.dragSources.delete(sourceId);
        _this.types.delete(sourceId);
      });
    }
  }, {
    key: "removeTarget",
    value: function removeTarget(targetId) {
      (0,invariant_esm/* invariant */.k)(this.getTarget(targetId), 'Expected an existing target.');
      this.store.dispatch(registry_removeTarget(targetId));
      this.dropTargets.delete(targetId);
      this.types.delete(targetId);
    }
  }, {
    key: "pinSource",
    value: function pinSource(sourceId) {
      var source = this.getSource(sourceId);
      (0,invariant_esm/* invariant */.k)(source, 'Expected an existing source.');
      this.pinnedSourceId = sourceId;
      this.pinnedSource = source;
    }
  }, {
    key: "unpinSource",
    value: function unpinSource() {
      (0,invariant_esm/* invariant */.k)(this.pinnedSource, 'No source is pinned at the time.');
      this.pinnedSourceId = null;
      this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function addHandler(role, type, handler) {
      var id = getNextHandlerId(role);
      this.types.set(id, type);
      if (role === HandlerRole.SOURCE) {
        this.dragSources.set(id, handler);
      } else if (role === HandlerRole.TARGET) {
        this.dropTargets.set(id, handler);
      }
      return id;
    }
  }]);
  return HandlerRegistryImpl;
}();
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/DragDropManagerImpl.js
function DragDropManagerImpl_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function DragDropManagerImpl_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function DragDropManagerImpl_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) DragDropManagerImpl_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) DragDropManagerImpl_defineProperties(Constructor, staticProps);
  return Constructor;
}





function makeStoreInstance(debugMode) {
  // TODO: if we ever make a react-native version of this,
  // we'll need to consider how to pull off dev-tooling
  var reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
  return createStore(reducers_reduce, debugMode && reduxDevTools && reduxDevTools({
    name: 'dnd-core',
    instanceId: 'dnd-core'
  }));
}
var DragDropManagerImpl = /*#__PURE__*/function () {
  function DragDropManagerImpl() {
    var _this = this;
    var debugMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    DragDropManagerImpl_classCallCheck(this, DragDropManagerImpl);
    this.isSetUp = false;
    this.handleRefCountChange = function () {
      var shouldSetUp = _this.store.getState().refCount > 0;
      if (_this.backend) {
        if (shouldSetUp && !_this.isSetUp) {
          _this.backend.setup();
          _this.isSetUp = true;
        } else if (!shouldSetUp && _this.isSetUp) {
          _this.backend.teardown();
          _this.isSetUp = false;
        }
      }
    };
    var store = makeStoreInstance(debugMode);
    this.store = store;
    this.monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
    store.subscribe(this.handleRefCountChange);
  }
  DragDropManagerImpl_createClass(DragDropManagerImpl, [{
    key: "receiveBackend",
    value: function receiveBackend(backend) {
      this.backend = backend;
    }
  }, {
    key: "getMonitor",
    value: function getMonitor() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function getBackend() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function getRegistry() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function getActions() {
      /* eslint-disable-next-line @typescript-eslint/no-this-alias */
      var manager = this;
      var dispatch = this.store.dispatch;
      function bindActionCreator(actionCreator) {
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var action = actionCreator.apply(manager, args);
          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }
      var actions = createDragDropActions(this);
      return Object.keys(actions).reduce(function (boundActions, key) {
        var action = actions[key];
        boundActions[key] = bindActionCreator(action);
        return boundActions;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      this.store.dispatch(action);
    }
  }]);
  return DragDropManagerImpl;
}();
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/factories.js

function createDragDropManager(backendFactory, globalContext, backendOptions, debugMode) {
  var manager = new DragDropManagerImpl(debugMode);
  var backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/DndContext.js


/**
 * Create the React Context
 */

var DndContext = react.createContext({
  dragDropManager: undefined
});
/**
 * Creates the context object we're providing
 * @param backend
 * @param context
 */

function createDndContext(backend, context, options, debugMode) {
  return {
    dragDropManager: createDragDropManager(backend, context, options, debugMode)
  };
}

/***/ }),

/***/ 72382:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": function() { return /* binding */ DndProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var _DndContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31190);
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}



var refCount = 0;
/**
 * A React component that provides the React-DnD context
 */

var DndProvider = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, ["children"]);
  var _getDndContextValue = getDndContextValue(props),
    _getDndContextValue2 = _slicedToArray(_getDndContextValue, 2),
    manager = _getDndContextValue2[0],
    isGlobalInstance = _getDndContextValue2[1]; // memoized from props

  /**
   * If the global context was used to store the DND context
   * then where theres no more references to it we should
   * clean it up to avoid memory leaks
   */

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (isGlobalInstance) {
      refCount++;
    }
    return function () {
      if (isGlobalInstance) {
        refCount--;
        if (refCount === 0) {
          var context = getGlobalContext();
          context[instanceSymbol] = null;
        }
      }
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DndContext__WEBPACK_IMPORTED_MODULE_1__/* .DndContext.Provider */ .L.Provider, {
    value: manager
  }, children);
});
DndProvider.displayName = 'DndProvider';
function getDndContextValue(props) {
  if ('manager' in props) {
    var _manager = {
      dragDropManager: props.manager
    };
    return [_manager, false];
  }
  var manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  var isGlobalInstance = !props.context;
  return [manager, isGlobalInstance];
}
var instanceSymbol = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');
function createSingletonDndContext(backend) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getGlobalContext();
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var debugMode = arguments.length > 3 ? arguments[3] : undefined;
  var ctx = context;
  if (!ctx[instanceSymbol]) {
    ctx[instanceSymbol] = (0,_DndContext__WEBPACK_IMPORTED_MODULE_1__/* .createDndContext */ .W)(backend, context, options, debugMode);
  }
  return ctx[instanceSymbol];
}
function getGlobalContext() {
  return typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : window;
}

/***/ }),

/***/ 69803:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": function() { return /* binding */ DragSourceMonitorImpl; }
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56180);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl = /*#__PURE__*/function () {
  function DragSourceMonitorImpl(manager) {
    _classCallCheck(this, DragSourceMonitorImpl);
    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }
  _createClass(DragSourceMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(sourceId) {
      this.sourceId = sourceId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .k)(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      if (!this.sourceId) {
        return false;
      }
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .k)(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      return this.internalMonitor.isDraggingSource(sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId, options) {
      return this.internalMonitor.isOverTarget(targetId, options);
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      return this.internalMonitor.subscribeToOffsetChange(listener);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      return this.internalMonitor.canDragSource(sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      return this.internalMonitor.canDropOnTarget(targetId);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);
  return DragSourceMonitorImpl;
}();

/***/ }),

/***/ 10565:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": function() { return /* binding */ DropTargetMonitorImpl; }
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56180);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var isCallingCanDrop = false;
var DropTargetMonitorImpl = /*#__PURE__*/function () {
  function DropTargetMonitorImpl(manager) {
    _classCallCheck(this, DropTargetMonitorImpl);
    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }
  _createClass(DropTargetMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(targetId) {
      this.targetId = targetId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      // Cut out early if the target id has not been set. This should prevent errors
      // where the user has an older version of dnd-core like in
      // https://github.com/react-dnd/react-dnd/issues/1310
      if (!this.targetId) {
        return false;
      }
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .k)(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');
      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    }
  }, {
    key: "isOver",
    value: function isOver(options) {
      if (!this.targetId) {
        return false;
      }
      return this.internalMonitor.isOverTarget(this.targetId, options);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);
  return DropTargetMonitorImpl;
}();

/***/ }),

/***/ 78367:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": function() { return /* binding */ SourceConnector; }
/* harmony export */ });
/* harmony import */ var _wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27304);
/* harmony import */ var _utils_isRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26022);
/* harmony import */ var _react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35903);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}



var SourceConnector = /*#__PURE__*/function () {
  function SourceConnector(backend) {
    var _this = this;
    _classCallCheck(this, SourceConnector);
    this.hooks = (0,_wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_0__/* .wrapConnectorHooks */ .p)({
      dragSource: function dragSource(node, options) {
        _this.clearDragSource();
        _this.dragSourceOptions = options || null;
        if ((0,_utils_isRef__WEBPACK_IMPORTED_MODULE_1__/* .isRef */ .d)(node)) {
          _this.dragSourceRef = node;
        } else {
          _this.dragSourceNode = node;
        }
        _this.reconnectDragSource();
      },
      dragPreview: function dragPreview(node, options) {
        _this.clearDragPreview();
        _this.dragPreviewOptions = options || null;
        if ((0,_utils_isRef__WEBPACK_IMPORTED_MODULE_1__/* .isRef */ .d)(node)) {
          _this.dragPreviewRef = node;
        } else {
          _this.dragPreviewNode = node;
        }
        _this.reconnectDragPreview();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null; // The drag preview may either be attached via ref or connect function

    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }
  _createClass(SourceConnector, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (this.handlerId === newHandlerId) {
        return;
      }
      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      this.reconnectDragSource();
      this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function reconnectDragSource() {
      var dragSource = this.dragSource; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (didChange) {
        this.disconnectDragSource();
      }
      if (!this.handlerId) {
        return;
      }
      if (!dragSource) {
        this.lastConnectedDragSource = dragSource;
        return;
      }
      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragSource = dragSource;
        this.lastConnectedDragSourceOptions = this.dragSourceOptions;
        this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function reconnectDragPreview() {
      var dragPreview = this.dragPreview; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (didChange) {
        this.disconnectDragPreview();
      }
      if (!this.handlerId) {
        return;
      }
      if (!dragPreview) {
        this.lastConnectedDragPreview = dragPreview;
        return;
      }
      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragPreview = dragPreview;
        this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
        this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function didConnectedDragSourceChange() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function didConnectedDragPreviewChange() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function didDragSourceOptionsChange() {
      return !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_2__/* .shallowEqual */ .w)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function didDragPreviewOptionsChange() {
      return !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_2__/* .shallowEqual */ .w)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function disconnectDragSource() {
      if (this.dragSourceUnsubscribe) {
        this.dragSourceUnsubscribe();
        this.dragSourceUnsubscribe = undefined;
      }
    }
  }, {
    key: "disconnectDragPreview",
    value: function disconnectDragPreview() {
      if (this.dragPreviewUnsubscribe) {
        this.dragPreviewUnsubscribe();
        this.dragPreviewUnsubscribe = undefined;
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
      }
    }
  }, {
    key: "clearDragSource",
    value: function clearDragSource() {
      this.dragSourceNode = null;
      this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function clearDragPreview() {
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function get() {
      return this.dragSourceOptionsInternal;
    },
    set: function set(options) {
      this.dragSourceOptionsInternal = options;
    }
  }, {
    key: "dragPreviewOptions",
    get: function get() {
      return this.dragPreviewOptionsInternal;
    },
    set: function set(options) {
      this.dragPreviewOptionsInternal = options;
    }
  }, {
    key: "dragSource",
    get: function get() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function get() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }]);
  return SourceConnector;
}();

/***/ }),

/***/ 95481:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": function() { return /* binding */ TargetConnector; }
/* harmony export */ });
/* harmony import */ var _react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35903);
/* harmony import */ var _wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27304);
/* harmony import */ var _utils_isRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26022);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}



var TargetConnector = /*#__PURE__*/function () {
  function TargetConnector(backend) {
    var _this = this;
    _classCallCheck(this, TargetConnector);
    this.hooks = (0,_wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_0__/* .wrapConnectorHooks */ .p)({
      dropTarget: function dropTarget(node, options) {
        _this.clearDropTarget();
        _this.dropTargetOptions = options;
        if ((0,_utils_isRef__WEBPACK_IMPORTED_MODULE_1__/* .isRef */ .d)(node)) {
          _this.dropTargetRef = node;
        } else {
          _this.dropTargetNode = node;
        }
        _this.reconnect();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }
  _createClass(TargetConnector, [{
    key: "reconnect",
    value: function reconnect() {
      // if nothing has changed then don't resubscribe
      var didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      if (didChange) {
        this.disconnectDropTarget();
      }
      var dropTarget = this.dropTarget;
      if (!this.handlerId) {
        return;
      }
      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }
      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDropTarget = dropTarget;
        this.lastConnectedDropTargetOptions = this.dropTargetOptions;
        this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (newHandlerId === this.handlerId) {
        return;
      }
      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function didDropTargetChange() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function didOptionsChange() {
      return !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_2__/* .shallowEqual */ .w)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function disconnectDropTarget() {
      if (this.unsubscribeDropTarget) {
        this.unsubscribeDropTarget();
        this.unsubscribeDropTarget = undefined;
      }
    }
  }, {
    key: "clearDropTarget",
    value: function clearDropTarget() {
      this.dropTargetRef = null;
      this.dropTargetNode = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dropTarget;
    }
  }, {
    key: "dropTargetOptions",
    get: function get() {
      return this.dropTargetOptionsInternal;
    },
    set: function set(options) {
      this.dropTargetOptionsInternal = options;
    }
  }, {
    key: "dropTarget",
    get: function get() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }]);
  return TargetConnector;
}();

/***/ }),

/***/ 30294:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LB": function() { return /* reexport */ DndContext/* DndContext */.L; },
  "WG": function() { return /* reexport */ DndProvider/* DndProvider */.W; },
  "hw": function() { return /* reexport */ DragPreviewImage; },
  "LT": function() { return /* reexport */ DndContext/* createDndContext */.W; }
});

// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DndContext.js + 34 modules
var DndContext = __webpack_require__(31190);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DndProvider.js
var DndProvider = __webpack_require__(72382);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/DragPreviewImage.js

/*
 * A utility for rendering a drag preview image
 */

var DragPreviewImage = react.memo(function (_ref) {
  var connect = _ref.connect,
    src = _ref.src;
  react.useEffect(function () {
    if (typeof Image === 'undefined') return;
    var connected = false;
    var img = new Image();
    img.src = src;
    img.onload = function () {
      connect(img);
      connected = true;
    };
    return function () {
      if (connected) {
        connect(null);
      }
    };
  });
  return null;
});
DragPreviewImage.displayName = 'DragPreviewImage';
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/index.js




/***/ }),

/***/ 5641:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": function() { return /* binding */ registerTarget; },
/* harmony export */   "w": function() { return /* binding */ registerSource; }
/* harmony export */ });
function registerTarget(type, target, manager) {
  var registry = manager.getRegistry();
  var targetId = registry.addTarget(type, target);
  return [targetId, function () {
    return registry.removeTarget(targetId);
  }];
}
function registerSource(type, source, manager) {
  var registry = manager.getRegistry();
  var sourceId = registry.addSource(type, source);
  return [sourceId, function () {
    return registry.removeSource(sourceId);
  }];
}

/***/ }),

/***/ 27304:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": function() { return /* binding */ wrapConnectorHooks; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(56180);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/utils/cloneWithRef.js


function setRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else {
    ref.current = node;
  }
}
function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  (0,invariant_esm/* invariant */.k)(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');
  if (!previousRef) {
    // When there is no ref on the element, use the new ref directly
    return (0,react.cloneElement)(element, {
      ref: newRef
    });
  } else {
    return (0,react.cloneElement)(element, {
      ref: function ref(node) {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js


function throwIfCompositeComponentElement(element) {
  // Custom components can no longer be wrapped directly in React DnD 2.0
  // so that we don't need to depend on findDOMNode() from react-dom.
  if (typeof element.type === 'string') {
    return;
  }
  var displayName = element.type.displayName || element.type.name || 'the component';
  throw new Error('Only native element nodes can now be passed to React DnD connectors.' + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + 'drag source or a drop target itself.');
}
function wrapHookToRecognizeElement(hook) {
  return function () {
    var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    // When passed a node, call the hook straight away.
    if (!(0,react.isValidElement)(elementOrNode)) {
      var node = elementOrNode;
      hook(node, options); // return the node so it can be chained (e.g. when within callback refs
      // <div ref={node => connectDragSource(connectDropTarget(node))}/>

      return node;
    } // If passed a ReactElement, clone it and attach this function as a ref.
    // This helps us achieve a neat API where user doesn't even know that refs
    // are being used under the hood.

    var element = elementOrNode;
    throwIfCompositeComponentElement(element); // When no options are passed, use the hook directly

    var ref = options ? function (node) {
      return hook(node, options);
    } : hook;
    return cloneWithRef(element, ref);
  };
}
function wrapConnectorHooks(hooks) {
  var wrappedHooks = {};
  Object.keys(hooks).forEach(function (key) {
    var hook = hooks[key]; // ref objects should be passed straight through without wrapping

    if (key.endsWith('Ref')) {
      wrappedHooks[key] = hooks[key];
    } else {
      var wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = function () {
        return wrappedHook;
      };
    }
  });
  return wrappedHooks;
}

/***/ }),

/***/ 70781:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": function() { return /* binding */ DragLayer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var _react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35903);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67861);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56180);
/* harmony import */ var _common_DndContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31190);
/* harmony import */ var _utils_js_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66852);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55937);
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}







function DragLayer(collect) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .checkDecoratorArguments */ .U9)('DragLayer', 'collect[, options]', collect, options);
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer', collect);
  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)((0,_utils_js_utils__WEBPACK_IMPORTED_MODULE_4__/* .isPlainObject */ .PO)(options), 'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. ' + 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer', options);
  return function decorateLayer(DecoratedComponent) {
    var Decorated = DecoratedComponent;
    var _options$arePropsEqua = options.arePropsEqual,
      arePropsEqual = _options$arePropsEqua === void 0 ? _react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_5__/* .shallowEqual */ .w : _options$arePropsEqua;
    var displayName = Decorated.displayName || Decorated.name || 'Component';
    var DragLayerContainer = /** @class */
    function () {
      var DragLayerContainer = /*#__PURE__*/function (_React$Component) {
        _inherits(DragLayerContainer, _React$Component);
        var _super = _createSuper(DragLayerContainer);
        function DragLayerContainer() {
          var _this;
          _classCallCheck(this, DragLayerContainer);
          _this = _super.apply(this, arguments);
          _this.isCurrentlyMounted = false;
          _this.ref = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
          _this.handleChange = function () {
            if (!_this.isCurrentlyMounted) {
              return;
            }
            var nextState = _this.getCurrentState();
            if (!(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_5__/* .shallowEqual */ .w)(nextState, _this.state)) {
              _this.setState(nextState);
            }
          };
          return _this;
        }
        _createClass(DragLayerContainer, [{
          key: "getDecoratedComponentInstance",
          value: function getDecoratedComponentInstance() {
            (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(this.ref.current, 'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()');
            return this.ref.current;
          }
        }, {
          key: "shouldComponentUpdate",
          value: function shouldComponentUpdate(nextProps, nextState) {
            return !arePropsEqual(nextProps, this.props) || !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_5__/* .shallowEqual */ .w)(nextState, this.state);
          }
        }, {
          key: "componentDidMount",
          value: function componentDidMount() {
            this.isCurrentlyMounted = true;
            this.handleChange();
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.isCurrentlyMounted = false;
            if (this.unsubscribeFromOffsetChange) {
              this.unsubscribeFromOffsetChange();
              this.unsubscribeFromOffsetChange = undefined;
            }
            if (this.unsubscribeFromStateChange) {
              this.unsubscribeFromStateChange();
              this.unsubscribeFromStateChange = undefined;
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _this2 = this;
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_DndContext__WEBPACK_IMPORTED_MODULE_6__/* .DndContext.Consumer */ .L.Consumer, null, function (_ref) {
              var dragDropManager = _ref.dragDropManager;
              if (dragDropManager === undefined) {
                return null;
              }
              _this2.receiveDragDropManager(dragDropManager); // Let componentDidMount fire to initialize the collected state

              if (!_this2.isCurrentlyMounted) {
                return null;
              }
              return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Decorated, Object.assign({}, _this2.props, _this2.state, {
                ref: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .isRefable */ .J7)(Decorated) ? _this2.ref : null
              }));
            });
          }
        }, {
          key: "receiveDragDropManager",
          value: function receiveDragDropManager(dragDropManager) {
            if (this.manager !== undefined) {
              return;
            }
            this.manager = dragDropManager;
            (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_3__/* .invariant */ .k)(_typeof(dragDropManager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to render a DndProvider component in your top-level component. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
            var monitor = this.manager.getMonitor();
            this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
            this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);
          }
        }, {
          key: "getCurrentState",
          value: function getCurrentState() {
            if (!this.manager) {
              return {};
            }
            var monitor = this.manager.getMonitor();
            return collect(monitor, this.props);
          }
        }]);
        return DragLayerContainer;
      }(react__WEBPACK_IMPORTED_MODULE_0__.Component);
      DragLayerContainer.displayName = "DragLayer(".concat(displayName, ")");
      DragLayerContainer.DecoratedComponent = DecoratedComponent;
      return DragLayerContainer;
    }();
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(DragLayerContainer, DecoratedComponent);
  };
}

/***/ }),

/***/ 76014:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": function() { return /* binding */ DragSource; }
});

// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(56180);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/utils/js_utils.js
var js_utils = __webpack_require__(66852);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/decorators/utils.js
var utils = __webpack_require__(55937);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/decorators/decorateHandler.js + 1 modules
var decorateHandler = __webpack_require__(51107);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/registration.js
var registration = __webpack_require__(5641);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js
var DragSourceMonitorImpl = __webpack_require__(69803);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/SourceConnector.js
var SourceConnector = __webpack_require__(78367);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/utils/isValidType.js
var isValidType = __webpack_require__(29796);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/createSourceFactory.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}



var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
var REQUIRED_SPEC_METHODS = ['beginDrag'];
var SourceImpl = /*#__PURE__*/function () {
  function SourceImpl(spec, monitor, ref) {
    var _this = this;
    _classCallCheck(this, SourceImpl);
    this.props = null;
    this.beginDrag = function () {
      if (!_this.props) {
        return;
      }
      var item = _this.spec.beginDrag(_this.props, _this.monitor, _this.ref.current);
      if (false) {}
      return item;
    };
    this.spec = spec;
    this.monitor = monitor;
    this.ref = ref;
  }
  _createClass(SourceImpl, [{
    key: "receiveProps",
    value: function receiveProps(props) {
      this.props = props;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      if (!this.props) {
        return false;
      }
      if (!this.spec.canDrag) {
        return true;
      }
      return this.spec.canDrag(this.props, this.monitor);
    }
  }, {
    key: "isDragging",
    value: function isDragging(globalMonitor, sourceId) {
      if (!this.props) {
        return false;
      }
      if (!this.spec.isDragging) {
        return sourceId === globalMonitor.getSourceId();
      }
      return this.spec.isDragging(this.props, this.monitor);
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      if (!this.props) {
        return;
      }
      if (!this.spec.endDrag) {
        return;
      }
      this.spec.endDrag(this.props, this.monitor, (0,utils/* getDecoratedComponent */.Al)(this.ref));
    }
  }]);
  return SourceImpl;
}();
function createSourceFactory(spec) {
  Object.keys(spec).forEach(function (key) {
    (0,invariant_esm/* invariant */.k)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', ALLOWED_SPEC_METHODS.join(', '), key);
    (0,invariant_esm/* invariant */.k)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', key, key, spec[key]);
  });
  REQUIRED_SPEC_METHODS.forEach(function (key) {
    (0,invariant_esm/* invariant */.k)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', key, key, spec[key]);
  });
  return function createSource(monitor, ref) {
    return new SourceImpl(spec, monitor, ref);
  };
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/DragSource.js









/**
 * Decorates a component as a dragsource
 * @param type The dragsource type
 * @param spec The drag source specification
 * @param collect The props collector function
 * @param options DnD options
 */

function DragSource(type, spec, collect) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  (0,utils/* checkDecoratorArguments */.U9)('DragSource', 'type, spec, collect[, options]', type, spec, collect, options);
  var getType = type;
  if (typeof type !== 'function') {
    (0,invariant_esm/* invariant */.k)((0,isValidType/* isValidType */.m)(type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', type);
    getType = function getType() {
      return type;
    };
  }
  (0,invariant_esm/* invariant */.k)((0,js_utils/* isPlainObject */.PO)(spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', spec);
  var createSource = createSourceFactory(spec);
  (0,invariant_esm/* invariant */.k)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', collect);
  (0,invariant_esm/* invariant */.k)((0,js_utils/* isPlainObject */.PO)(options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', collect);
  return function decorateSource(DecoratedComponent) {
    return (0,decorateHandler/* decorateHandler */.K)({
      containerDisplayName: 'DragSource',
      createHandler: createSource,
      registerHandler: registration/* registerSource */.w,
      createConnector: function createConnector(backend) {
        return new SourceConnector/* SourceConnector */.x(backend);
      },
      createMonitor: function createMonitor(manager) {
        return new DragSourceMonitorImpl/* DragSourceMonitorImpl */.p(manager);
      },
      DecoratedComponent: DecoratedComponent,
      getType: getType,
      collect: collect,
      options: options
    });
  };
}

/***/ }),

/***/ 990:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": function() { return /* binding */ DropTarget; }
});

// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(56180);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/utils/js_utils.js
var js_utils = __webpack_require__(66852);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/registration.js
var registration = __webpack_require__(5641);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/utils/isValidType.js
var isValidType = __webpack_require__(29796);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/TargetConnector.js
var TargetConnector = __webpack_require__(95481);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js
var DropTargetMonitorImpl = __webpack_require__(10565);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/decorators/utils.js
var utils = __webpack_require__(55937);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/decorators/decorateHandler.js + 1 modules
var decorateHandler = __webpack_require__(51107);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/createTargetFactory.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}



var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];
var TargetImpl = /*#__PURE__*/function () {
  function TargetImpl(spec, monitor, ref) {
    _classCallCheck(this, TargetImpl);
    this.props = null;
    this.spec = spec;
    this.monitor = monitor;
    this.ref = ref;
  }
  _createClass(TargetImpl, [{
    key: "receiveProps",
    value: function receiveProps(props) {
      this.props = props;
    }
  }, {
    key: "receiveMonitor",
    value: function receiveMonitor(monitor) {
      this.monitor = monitor;
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      if (!this.spec.canDrop) {
        return true;
      }
      return this.spec.canDrop(this.props, this.monitor);
    }
  }, {
    key: "hover",
    value: function hover() {
      if (!this.spec.hover || !this.props) {
        return;
      }
      this.spec.hover(this.props, this.monitor, (0,utils/* getDecoratedComponent */.Al)(this.ref));
    }
  }, {
    key: "drop",
    value: function drop() {
      if (!this.spec.drop) {
        return undefined;
      }
      var dropResult = this.spec.drop(this.props, this.monitor, this.ref.current);
      if (false) {}
      return dropResult;
    }
  }]);
  return TargetImpl;
}();
function createTargetFactory(spec) {
  Object.keys(spec).forEach(function (key) {
    (0,invariant_esm/* invariant */.k)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', ALLOWED_SPEC_METHODS.join(', '), key);
    (0,invariant_esm/* invariant */.k)(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', key, key, spec[key]);
  });
  return function createTarget(monitor, ref) {
    return new TargetImpl(spec, monitor, ref);
  };
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/DropTarget.js









function DropTarget(type, spec, collect) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  (0,utils/* checkDecoratorArguments */.U9)('DropTarget', 'type, spec, collect[, options]', type, spec, collect, options);
  var getType = type;
  if (typeof type !== 'function') {
    (0,invariant_esm/* invariant */.k)((0,isValidType/* isValidType */.m)(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', type);
    getType = function getType() {
      return type;
    };
  }
  (0,invariant_esm/* invariant */.k)((0,js_utils/* isPlainObject */.PO)(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', spec);
  var createTarget = createTargetFactory(spec);
  (0,invariant_esm/* invariant */.k)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', collect);
  (0,invariant_esm/* invariant */.k)((0,js_utils/* isPlainObject */.PO)(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', collect);
  return function decorateTarget(DecoratedComponent) {
    return (0,decorateHandler/* decorateHandler */.K)({
      containerDisplayName: 'DropTarget',
      createHandler: createTarget,
      registerHandler: registration/* registerTarget */.n,
      createMonitor: function createMonitor(manager) {
        return new DropTargetMonitorImpl/* DropTargetMonitorImpl */.H(manager);
      },
      createConnector: function createConnector(backend) {
        return new TargetConnector/* TargetConnector */.Y(backend);
      },
      DecoratedComponent: DecoratedComponent,
      getType: getType,
      collect: collect,
      options: options
    });
  };
}

/***/ }),

/***/ 51107:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": function() { return /* binding */ decorateHandler; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js
var shallowequal_esm = __webpack_require__(35903);
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(56180);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(67861);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DndContext.js + 34 modules
var DndContext = __webpack_require__(31190);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/utils/js_utils.js
var js_utils = __webpack_require__(66852);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/disposables.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * Provides a set of static methods for creating Disposables.
 * @param {Function} action Action to run during the first call to dispose.
 * The action is guaranteed to be run at most once.
 */

var Disposable = /** @class */
function () {
  var Disposable = /*#__PURE__*/function () {
    function Disposable(action) {
      _classCallCheck(this, Disposable);
      this.isDisposed = false;
      this.action = (0,js_utils/* isFunction */.mf)(action) ? action : js_utils/* noop */.ZT;
    }
    /**
     * Validates whether the given object is a disposable
     * @param {Object} Object to test whether it has a dispose method
     * @returns {Boolean} true if a disposable object, else false.
     */

    _createClass(Disposable, [{
      key: "dispose",
      /** Performs the task of cleaning up resources. */
      value: function dispose() {
        if (!this.isDisposed) {
          this.action();
          this.isDisposed = true;
        }
      }
    }], [{
      key: "isDisposable",
      value: function isDisposable(d) {
        return Boolean(d && (0,js_utils/* isFunction */.mf)(d.dispose));
      }
    }, {
      key: "_fixup",
      value: function _fixup(result) {
        return Disposable.isDisposable(result) ? result : Disposable.empty;
      }
      /**
       * Creates a disposable object that invokes the specified action when disposed.
       * @param {Function} dispose Action to run during the first call to dispose.
       * The action is guaranteed to be run at most once.
       * @return {Disposable} The disposable object that runs the given action upon disposal.
       */
    }, {
      key: "create",
      value: function create(action) {
        return new Disposable(action);
      }
    }]);
    return Disposable;
  }();
  /**
   * Gets the disposable that does nothing when disposed.
   */

  Disposable.empty = {
    dispose: js_utils/* noop */.ZT
  };
  return Disposable;
}();

/**
 * Represents a group of disposable resources that are disposed together.
 * @constructor
 */

var CompositeDisposable = /*#__PURE__*/function () {
  function CompositeDisposable() {
    _classCallCheck(this, CompositeDisposable);
    this.isDisposed = false;
    for (var _len = arguments.length, disposables = new Array(_len), _key = 0; _key < _len; _key++) {
      disposables[_key] = arguments[_key];
    }
    this.disposables = disposables;
  }
  /**
   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
   * @param {Any} item Disposable to add.
   */

  _createClass(CompositeDisposable, [{
    key: "add",
    value: function add(item) {
      if (this.isDisposed) {
        item.dispose();
      } else {
        this.disposables.push(item);
      }
    }
    /**
     * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
     * @param {Any} item Disposable to remove.
     * @returns {Boolean} true if found; false otherwise.
     */
  }, {
    key: "remove",
    value: function remove(item) {
      var shouldDispose = false;
      if (!this.isDisposed) {
        var idx = this.disposables.indexOf(item);
        if (idx !== -1) {
          shouldDispose = true;
          this.disposables.splice(idx, 1);
          item.dispose();
        }
      }
      return shouldDispose;
    }
    /**
     *  Disposes all disposables in the group and removes them from the group but
     *  does not dispose the CompositeDisposable.
     */
  }, {
    key: "clear",
    value: function clear() {
      if (!this.isDisposed) {
        var len = this.disposables.length;
        var currentDisposables = new Array(len);
        for (var i = 0; i < len; i++) {
          currentDisposables[i] = this.disposables[i];
        }
        this.disposables = [];
        for (var _i = 0; _i < len; _i++) {
          currentDisposables[_i].dispose();
        }
      }
    }
    /**
     *  Disposes all disposables in the group and removes them from the group.
     */
  }, {
    key: "dispose",
    value: function dispose() {
      if (!this.isDisposed) {
        this.isDisposed = true;
        var len = this.disposables.length;
        var currentDisposables = new Array(len);
        for (var i = 0; i < len; i++) {
          currentDisposables[i] = this.disposables[i];
        }
        this.disposables = [];
        for (var _i2 = 0; _i2 < len; _i2++) {
          currentDisposables[_i2].dispose();
        }
      }
    }
  }]);
  return CompositeDisposable;
}();
/**
 * Represents a disposable resource whose underlying disposable resource can
 * be replaced by another disposable resource, causing automatic disposal of
 * the previous underlying disposable resource.
 */

var SerialDisposable = /*#__PURE__*/function () {
  function SerialDisposable() {
    _classCallCheck(this, SerialDisposable);
    this.isDisposed = false;
  }
  /**
   * Gets the underlying disposable.
   * @returns {Any} the underlying disposable.
   */

  _createClass(SerialDisposable, [{
    key: "getDisposable",
    value: function getDisposable() {
      return this.current;
    }
  }, {
    key: "setDisposable",
    value: function setDisposable(value) {
      var shouldDispose = this.isDisposed;
      if (!shouldDispose) {
        var old = this.current;
        this.current = value;
        if (old) {
          old.dispose();
        }
      }
      if (shouldDispose && value) {
        value.dispose();
      }
    }
    /** Performs the task of cleaning up resources. */
  }, {
    key: "dispose",
    value: function dispose() {
      if (!this.isDisposed) {
        this.isDisposed = true;
        var old = this.current;
        this.current = undefined;
        if (old) {
          old.dispose();
        }
      }
    }
  }]);
  return SerialDisposable;
}();
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/decorators/utils.js
var utils = __webpack_require__(55937);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/decorators/decorateHandler.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function decorateHandler_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function decorateHandler_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function decorateHandler_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) decorateHandler_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) decorateHandler_defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}








function decorateHandler(_ref) {
  var DecoratedComponent = _ref.DecoratedComponent,
    createHandler = _ref.createHandler,
    createMonitor = _ref.createMonitor,
    createConnector = _ref.createConnector,
    registerHandler = _ref.registerHandler,
    containerDisplayName = _ref.containerDisplayName,
    getType = _ref.getType,
    collect = _ref.collect,
    options = _ref.options;
  var _options$arePropsEqua = options.arePropsEqual,
    arePropsEqual = _options$arePropsEqua === void 0 ? shallowequal_esm/* shallowEqual */.w : _options$arePropsEqua;
  var Decorated = DecoratedComponent;
  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';
  var DragDropContainer = /** @class */
  function () {
    var DragDropContainer = /*#__PURE__*/function (_React$Component) {
      _inherits(DragDropContainer, _React$Component);
      var _super = _createSuper(DragDropContainer);
      function DragDropContainer(props) {
        var _this;
        decorateHandler_classCallCheck(this, DragDropContainer);
        _this = _super.call(this, props);
        _this.decoratedRef = react.createRef();
        _this.handleChange = function () {
          var nextState = _this.getCurrentState();
          if (!(0,shallowequal_esm/* shallowEqual */.w)(nextState, _this.state)) {
            _this.setState(nextState);
          }
        };
        _this.disposable = new SerialDisposable();
        _this.receiveProps(props);
        _this.dispose();
        return _this;
      }
      decorateHandler_createClass(DragDropContainer, [{
        key: "getHandlerId",
        value: function getHandlerId() {
          return this.handlerId;
        }
      }, {
        key: "getDecoratedComponentInstance",
        value: function getDecoratedComponentInstance() {
          (0,invariant_esm/* invariant */.k)(this.decoratedRef.current, 'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()');
          return this.decoratedRef.current;
        }
      }, {
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          return !arePropsEqual(nextProps, this.props) || !(0,shallowequal_esm/* shallowEqual */.w)(nextState, this.state);
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.disposable = new SerialDisposable();
          this.currentType = undefined;
          this.receiveProps(this.props);
          this.handleChange();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (!arePropsEqual(this.props, prevProps)) {
            this.receiveProps(this.props);
            this.handleChange();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.dispose();
        }
      }, {
        key: "receiveProps",
        value: function receiveProps(props) {
          if (!this.handler) {
            return;
          }
          this.handler.receiveProps(props);
          this.receiveType(getType(props));
        }
      }, {
        key: "receiveType",
        value: function receiveType(type) {
          if (!this.handlerMonitor || !this.manager || !this.handlerConnector) {
            return;
          }
          if (type === this.currentType) {
            return;
          }
          this.currentType = type;
          var _registerHandler = registerHandler(type, this.handler, this.manager),
            _registerHandler2 = _slicedToArray(_registerHandler, 2),
            handlerId = _registerHandler2[0],
            unregister = _registerHandler2[1];
          this.handlerId = handlerId;
          this.handlerMonitor.receiveHandlerId(handlerId);
          this.handlerConnector.receiveHandlerId(handlerId);
          var globalMonitor = this.manager.getMonitor();
          var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, {
            handlerIds: [handlerId]
          });
          this.disposable.setDisposable(new CompositeDisposable(new Disposable(unsubscribe), new Disposable(unregister)));
        }
      }, {
        key: "dispose",
        value: function dispose() {
          this.disposable.dispose();
          if (this.handlerConnector) {
            this.handlerConnector.receiveHandlerId(null);
          }
        }
      }, {
        key: "getCurrentState",
        value: function getCurrentState() {
          if (!this.handlerConnector) {
            return {};
          }
          var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor, this.props);
          if (false) {}
          return nextState;
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          return react.createElement(DndContext/* DndContext.Consumer */.L.Consumer, null, function (_ref2) {
            var dragDropManager = _ref2.dragDropManager;
            _this2.receiveDragDropManager(dragDropManager);
            if (typeof requestAnimationFrame !== 'undefined') {
              requestAnimationFrame(function () {
                var _this2$handlerConnect;
                return (_this2$handlerConnect = _this2.handlerConnector) === null || _this2$handlerConnect === void 0 ? void 0 : _this2$handlerConnect.reconnect();
              });
            }
            return react.createElement(Decorated, Object.assign({}, _this2.props, _this2.getCurrentState(), {
              // NOTE: if Decorated is a Function Component, decoratedRef will not be populated unless it's a refforwarding component.
              ref: (0,utils/* isRefable */.J7)(Decorated) ? _this2.decoratedRef : null
            }));
          });
        }
      }, {
        key: "receiveDragDropManager",
        value: function receiveDragDropManager(dragDropManager) {
          if (this.manager !== undefined) {
            return;
          }
          (0,invariant_esm/* invariant */.k)(dragDropManager !== undefined, 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to render a DndProvider component in your top-level component. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);
          if (dragDropManager === undefined) {
            return;
          }
          this.manager = dragDropManager;
          this.handlerMonitor = createMonitor(dragDropManager);
          this.handlerConnector = createConnector(dragDropManager.getBackend());
          this.handler = createHandler(this.handlerMonitor, this.decoratedRef);
        }
      }]);
      return DragDropContainer;
    }(react.Component);
    DragDropContainer.DecoratedComponent = DecoratedComponent;
    DragDropContainer.displayName = "".concat(containerDisplayName, "(").concat(displayName, ")");
    return DragDropContainer;
  }();
  return hoist_non_react_statics_cjs_default()(DragDropContainer, DecoratedComponent);
}

/***/ }),

/***/ 53693:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragLayer": function() { return /* reexport safe */ _DragLayer__WEBPACK_IMPORTED_MODULE_2__.r; },
/* harmony export */   "DragSource": function() { return /* reexport safe */ _DragSource__WEBPACK_IMPORTED_MODULE_0__.E; },
/* harmony export */   "DropTarget": function() { return /* reexport safe */ _DropTarget__WEBPACK_IMPORTED_MODULE_1__.G; }
/* harmony export */ });
/* harmony import */ var _DragSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76014);
/* harmony import */ var _DropTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(990);
/* harmony import */ var _DragLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70781);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40764);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_interfaces__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _interfaces__WEBPACK_IMPORTED_MODULE_3__) if(["default","DragSource","DropTarget","DragLayer"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _interfaces__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);





/***/ }),

/***/ 40764:
/***/ (function() {



/***/ }),

/***/ 55937:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Al": function() { return /* binding */ getDecoratedComponent; },
/* harmony export */   "J7": function() { return /* binding */ isRefable; },
/* harmony export */   "U9": function() { return /* binding */ checkDecoratorArguments; }
/* harmony export */ });
/* unused harmony exports isClassComponent, isRefForwardingComponent */
function getDecoratedComponent(instanceRef) {
  var currentRef = instanceRef.current;
  if (currentRef == null) {
    return null;
  } else if (currentRef.decoratedRef) {
    // go through the private field in decorateHandler to avoid the invariant hit
    return currentRef.decoratedRef.current;
  } else {
    return currentRef;
  }
}
function isClassComponent(Component) {
  return Component && Component.prototype && typeof Component.prototype.render === 'function';
}
function isRefForwardingComponent(C) {
  var _item$$$typeof;
  var item = C;
  return (item === null || item === void 0 ? void 0 : (_item$$$typeof = item.$$typeof) === null || _item$$$typeof === void 0 ? void 0 : _item$$$typeof.toString()) === 'Symbol(react.forward_ref)';
}
function isRefable(C) {
  return isClassComponent(C) || isRefForwardingComponent(C);
}
function checkDecoratorArguments(functionName, signature) {
  if (false) { var arg, i; }
}

/***/ }),

/***/ 25245:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c0": function() { return /* reexport */ useDrag; },
  "Nx": function() { return /* reexport */ useDragDropManager; },
  "f$": function() { return /* reexport */ useDragLayer; },
  "LW": function() { return /* reexport */ useDrop; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(56180);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js
 // suppress the useLayoutEffect warning on server side.

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
// EXTERNAL MODULE: ./node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js
var shallowequal_esm = __webpack_require__(35903);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useCollector.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



/**
 *
 * @param monitor The monitor to collect state from
 * @param collect The collecting function
 * @param onUpdate A method to invoke when updates occur
 */

function useCollector(monitor, collect, onUpdate) {
  var _useState = (0,react.useState)(function () {
      return collect(monitor);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    collected = _useState2[0],
    setCollected = _useState2[1];
  var updateCollected = (0,react.useCallback)(function () {
    var nextValue = collect(monitor);
    if (!(0,shallowequal_esm/* shallowEqual */.w)(collected, nextValue)) {
      setCollected(nextValue);
      if (onUpdate) {
        onUpdate();
      }
    }
  }, [collected, monitor, onUpdate]); // update the collected properties after the first render
  // and the components are attached to dnd-core

  useIsomorphicLayoutEffect(updateCollected, []);
  return [collected, updateCollected];
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js
function useMonitorOutput_slicedToArray(arr, i) {
  return useMonitorOutput_arrayWithHoles(arr) || useMonitorOutput_iterableToArrayLimit(arr, i) || useMonitorOutput_unsupportedIterableToArray(arr, i) || useMonitorOutput_nonIterableRest();
}
function useMonitorOutput_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function useMonitorOutput_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return useMonitorOutput_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useMonitorOutput_arrayLikeToArray(o, minLen);
}
function useMonitorOutput_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function useMonitorOutput_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function useMonitorOutput_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}


function useMonitorOutput(monitor, collect, onCollect) {
  var _useCollector = useCollector(monitor, collect, onCollect),
    _useCollector2 = useMonitorOutput_slicedToArray(_useCollector, 2),
    collected = _useCollector2[0],
    updateCollected = _useCollector2[1];
  useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
    var handlerId = monitor.getHandlerId();
    if (handlerId == null) {
      return undefined;
    }
    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [handlerId]
    });
  }, [monitor, updateCollected]);
  return collected;
}
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/registration.js
var registration = __webpack_require__(5641);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DndContext.js + 34 modules
var DndContext = __webpack_require__(31190);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDragDropManager.js



/**
 * A hook to retrieve the DragDropManager from Context
 */

function useDragDropManager() {
  var _useContext = (0,react.useContext)(DndContext/* DndContext */.L),
    dragDropManager = _useContext.dragDropManager;
  (0,invariant_esm/* invariant */.k)(dragDropManager != null, 'Expected drag drop context');
  return dragDropManager;
}
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js
var DragSourceMonitorImpl = __webpack_require__(69803);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/SourceConnector.js
var SourceConnector = __webpack_require__(78367);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/drag.js
function drag_slicedToArray(arr, i) {
  return drag_arrayWithHoles(arr) || drag_iterableToArrayLimit(arr, i) || drag_unsupportedIterableToArray(arr, i) || drag_nonIterableRest();
}
function drag_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function drag_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return drag_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return drag_arrayLikeToArray(o, minLen);
}
function drag_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function drag_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function drag_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}







function useDragSourceMonitor() {
  var manager = useDragDropManager();
  var monitor = (0,react.useMemo)(function () {
    return new DragSourceMonitorImpl/* DragSourceMonitorImpl */.p(manager);
  }, [manager]);
  var connector = (0,react.useMemo)(function () {
    return new SourceConnector/* SourceConnector */.x(manager.getBackend());
  }, [manager]);
  return [monitor, connector];
}
function useDragHandler(spec, monitor, connector) {
  var manager = useDragDropManager();
  var handler = (0,react.useMemo)(function () {
    return {
      beginDrag: function beginDrag() {
        var _spec$current = spec.current,
          begin = _spec$current.begin,
          item = _spec$current.item;
        if (begin) {
          var beginResult = begin(monitor);
          (0,invariant_esm/* invariant */.k)(beginResult == null || _typeof(beginResult) === 'object', 'dragSpec.begin() must either return an object, undefined, or null');
          return beginResult || item || {};
        }
        return item || {};
      },
      canDrag: function canDrag() {
        if (typeof spec.current.canDrag === 'boolean') {
          return spec.current.canDrag;
        } else if (typeof spec.current.canDrag === 'function') {
          return spec.current.canDrag(monitor);
        } else {
          return true;
        }
      },
      isDragging: function isDragging(globalMonitor, target) {
        var isDragging = spec.current.isDragging;
        return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
      },
      endDrag: function endDrag() {
        var end = spec.current.end;
        if (end) {
          end(monitor.getItem(), monitor);
        }
        connector.reconnect();
      }
    };
  }, []);
  useIsomorphicLayoutEffect(function registerHandler() {
    var _registerSource = (0,registration/* registerSource */.w)(spec.current.item.type, handler, manager),
      _registerSource2 = drag_slicedToArray(_registerSource, 2),
      handlerId = _registerSource2[0],
      unregister = _registerSource2[1];
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDrag.js
function useDrag_slicedToArray(arr, i) {
  return useDrag_arrayWithHoles(arr) || useDrag_iterableToArrayLimit(arr, i) || useDrag_unsupportedIterableToArray(arr, i) || useDrag_nonIterableRest();
}
function useDrag_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function useDrag_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return useDrag_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useDrag_arrayLikeToArray(o, minLen);
}
function useDrag_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function useDrag_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function useDrag_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}





/**
 * useDragSource hook
 * @param sourceSpec The drag source specification *
 */

function useDrag(spec) {
  var specRef = (0,react.useRef)(spec);
  specRef.current = spec; // TODO: wire options into createSourceConnector

  (0,invariant_esm/* invariant */.k)(spec.item != null, 'item must be defined');
  (0,invariant_esm/* invariant */.k)(spec.item.type != null, 'item type must be defined');
  var _useDragSourceMonitor = useDragSourceMonitor(),
    _useDragSourceMonitor2 = useDrag_slicedToArray(_useDragSourceMonitor, 2),
    monitor = _useDragSourceMonitor2[0],
    connector = _useDragSourceMonitor2[1];
  useDragHandler(specRef, monitor, connector);
  var result = useMonitorOutput(monitor, specRef.current.collect || function () {
    return {};
  }, function () {
    return connector.reconnect();
  });
  var connectDragSource = (0,react.useMemo)(function () {
    return connector.hooks.dragSource();
  }, [connector]);
  var connectDragPreview = (0,react.useMemo)(function () {
    return connector.hooks.dragPreview();
  }, [connector]);
  useIsomorphicLayoutEffect(function () {
    connector.dragSourceOptions = specRef.current.options || null;
    connector.reconnect();
  }, [connector]);
  useIsomorphicLayoutEffect(function () {
    connector.dragPreviewOptions = specRef.current.previewOptions || null;
    connector.reconnect();
  }, [connector]);
  return [result, connectDragSource, connectDragPreview];
}
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/TargetConnector.js
var TargetConnector = __webpack_require__(95481);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js
var DropTargetMonitorImpl = __webpack_require__(10565);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/drop.js
function drop_slicedToArray(arr, i) {
  return drop_arrayWithHoles(arr) || drop_iterableToArrayLimit(arr, i) || drop_unsupportedIterableToArray(arr, i) || drop_nonIterableRest();
}
function drop_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function drop_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return drop_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return drop_arrayLikeToArray(o, minLen);
}
function drop_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function drop_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function drop_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}






function useDropTargetMonitor() {
  var manager = useDragDropManager();
  var monitor = (0,react.useMemo)(function () {
    return new DropTargetMonitorImpl/* DropTargetMonitorImpl */.H(manager);
  }, [manager]);
  var connector = (0,react.useMemo)(function () {
    return new TargetConnector/* TargetConnector */.Y(manager.getBackend());
  }, [manager]);
  return [monitor, connector];
}
function useDropHandler(spec, monitor, connector) {
  var manager = useDragDropManager();
  var handler = (0,react.useMemo)(function () {
    return {
      canDrop: function canDrop() {
        var canDrop = spec.current.canDrop;
        return canDrop ? canDrop(monitor.getItem(), monitor) : true;
      },
      hover: function hover() {
        var hover = spec.current.hover;
        if (hover) {
          hover(monitor.getItem(), monitor);
        }
      },
      drop: function drop() {
        var drop = spec.current.drop;
        if (drop) {
          return drop(monitor.getItem(), monitor);
        }
      }
    };
  }, [monitor]);
  useIsomorphicLayoutEffect(function registerHandler() {
    var _registerTarget = (0,registration/* registerTarget */.n)(spec.current.accept, handler, manager),
      _registerTarget2 = drop_slicedToArray(_registerTarget, 2),
      handlerId = _registerTarget2[0],
      unregister = _registerTarget2[1];
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [monitor, connector]);
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDrop.js
function useDrop_slicedToArray(arr, i) {
  return useDrop_arrayWithHoles(arr) || useDrop_iterableToArrayLimit(arr, i) || useDrop_unsupportedIterableToArray(arr, i) || useDrop_nonIterableRest();
}
function useDrop_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function useDrop_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return useDrop_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useDrop_arrayLikeToArray(o, minLen);
}
function useDrop_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function useDrop_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function useDrop_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}





/**
 * useDropTarget Hook
 * @param spec The drop target specification
 */

function useDrop(spec) {
  var specRef = (0,react.useRef)(spec);
  specRef.current = spec;
  (0,invariant_esm/* invariant */.k)(spec.accept != null, 'accept must be defined');
  var _useDropTargetMonitor = useDropTargetMonitor(),
    _useDropTargetMonitor2 = useDrop_slicedToArray(_useDropTargetMonitor, 2),
    monitor = _useDropTargetMonitor2[0],
    connector = _useDropTargetMonitor2[1];
  useDropHandler(specRef, monitor, connector);
  var result = useMonitorOutput(monitor, specRef.current.collect || function () {
    return {};
  }, function () {
    return connector.reconnect();
  });
  var connectDropTarget = (0,react.useMemo)(function () {
    return connector.hooks.dropTarget();
  }, [connector]);
  useIsomorphicLayoutEffect(function () {
    connector.dropTargetOptions = spec.options || null;
    connector.reconnect();
  }, [spec.options]);
  return [result, connectDropTarget];
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDragLayer.js
function useDragLayer_slicedToArray(arr, i) {
  return useDragLayer_arrayWithHoles(arr) || useDragLayer_iterableToArrayLimit(arr, i) || useDragLayer_unsupportedIterableToArray(arr, i) || useDragLayer_nonIterableRest();
}
function useDragLayer_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function useDragLayer_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return useDragLayer_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useDragLayer_arrayLikeToArray(o, minLen);
}
function useDragLayer_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function useDragLayer_iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function useDragLayer_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



/**
 * useDragLayer Hook
 * @param collector The property collector
 */

function useDragLayer(collect) {
  var dragDropManager = useDragDropManager();
  var monitor = dragDropManager.getMonitor();
  var _useCollector = useCollector(monitor, collect),
    _useCollector2 = useDragLayer_slicedToArray(_useCollector, 2),
    collected = _useCollector2[0],
    updateCollected = _useCollector2[1];
  (0,react.useEffect)(function () {
    return monitor.subscribeToOffsetChange(updateCollected);
  });
  (0,react.useEffect)(function () {
    return monitor.subscribeToStateChange(updateCollected);
  });
  return collected;
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/index.js





/***/ }),

/***/ 7060:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DndContext": function() { return /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.LB; },
/* harmony export */   "DndProvider": function() { return /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.WG; },
/* harmony export */   "DragPreviewImage": function() { return /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.hw; },
/* harmony export */   "createDndContext": function() { return /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.LT; },
/* harmony export */   "useDrag": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.c0; },
/* harmony export */   "useDragDropManager": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.Nx; },
/* harmony export */   "useDragLayer": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.f$; },
/* harmony export */   "useDrop": function() { return /* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.LW; }
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30294);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87318);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _interfaces__WEBPACK_IMPORTED_MODULE_1__) if(["default","DndContext","DndProvider","DragPreviewImage","createDndContext"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _interfaces__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25245);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53693);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _decorators__WEBPACK_IMPORTED_MODULE_3__) if(["default","DndContext","DndProvider","DragPreviewImage","createDndContext","useDrag","useDragDropManager","useDragLayer","useDrop"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _decorators__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);





/***/ }),

/***/ 428:
/***/ (function() {



/***/ }),

/***/ 5835:
/***/ (function() {



/***/ }),

/***/ 87318:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _monitors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77381);
/* harmony import */ var _monitors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_monitors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _monitors__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _monitors__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _hooksApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5835);
/* harmony import */ var _hooksApi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hooksApi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hooksApi__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _hooksApi__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2617);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_options__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _options__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _options__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(428);
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_connectors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _connectors__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _connectors__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);





/***/ }),

/***/ 77381:
/***/ (function() {



/***/ }),

/***/ 2617:
/***/ (function() {



/***/ }),

/***/ 26022:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": function() { return /* binding */ isRef; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function isRef(obj) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    obj !== null && _typeof(obj) === 'object' && Object.prototype.hasOwnProperty.call(obj, 'current')
  );
}

/***/ }),

/***/ 29796:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* binding */ isValidType; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function isValidType(type, allowArray) {
  return typeof type === 'string' || _typeof(type) === 'symbol' || !!allowArray && Array.isArray(type) && type.every(function (t) {
    return isValidType(t, false);
  });
}

/***/ }),

/***/ 66852:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PO": function() { return /* binding */ isPlainObject; },
/* harmony export */   "ZT": function() { return /* binding */ noop; },
/* harmony export */   "mf": function() { return /* binding */ isFunction; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}

// cheap lodash replacements
function isFunction(input) {
  return typeof input === 'function';
}
function noop() {// noop
}
function isObjectLike(input) {
  return _typeof(input) === 'object' && input !== null;
}
function isPlainObject(input) {
  if (!isObjectLike(input)) {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  var proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}

/***/ }),

/***/ 12095:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "YI": function() { return /* binding */ addNodeUnderParent; },
  "ZP": function() { return /* binding */ index_esm; },
  "k": function() { return /* binding */ removeNodeAtPath; }
});

// UNUSED EXPORTS: SortableTreeWithoutDndContext, changeNodeAtPath, defaultGetNodeKey, defaultSearchMethod, find, getDepth, getDescendantCount, getFlatDataFromTree, getNodeAtPath, getTreeFromFlatData, getVisibleNodeCount, getVisibleNodeInfoAtIndex, insertNode, isDescendant, map, removeNode, toggleExpandedForAll, walk

// NAMESPACE OBJECT: ./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js
var NativeTypes_namespaceObject = {};
__webpack_require__.r(NativeTypes_namespaceObject);
__webpack_require__.d(NativeTypes_namespaceObject, {
  "FILE": function() { return FILE; },
  "TEXT": function() { return TEXT; },
  "URL": function() { return URL; }
});

// EXTERNAL MODULE: ./node_modules/frontend-collective-react-dnd-scrollzone/lib/index.js
var lib = __webpack_require__(25173);
// EXTERNAL MODULE: ./node_modules/lodash.isequal/index.js
var lodash_isequal = __webpack_require__(23108);
var lodash_isequal_default = /*#__PURE__*/__webpack_require__.n(lodash_isequal);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(75192);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/index.js
var esm = __webpack_require__(7060);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DndContext.js + 34 modules
var DndContext = __webpack_require__(31190);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DndProvider.js
var DndProvider = __webpack_require__(72382);
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/utils/js_utils.js
// cheap lodash replacements
function memoize(fn) {
  var result = null;
  var memoized = function memoized() {
    if (result == null) {
      result = fn();
    }
    return result;
  };
  return memoized;
}
/**
 * drop-in replacement for _.without
 */

function without(items, item) {
  return items.filter(function (i) {
    return i !== item;
  });
}
function union(itemsA, itemsB) {
  var set = new Set();
  var insertItem = function insertItem(item) {
    return set.add(item);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  set.forEach(function (key) {
    return result.push(key);
  });
  return result;
}
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/EnterLeaveCounter.js
function EnterLeaveCounter_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function EnterLeaveCounter_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var EnterLeaveCounter = /*#__PURE__*/function () {
  function EnterLeaveCounter(isNodeInDocument) {
    EnterLeaveCounter_classCallCheck(this, EnterLeaveCounter);
    this.entered = [];
    this.isNodeInDocument = isNodeInDocument;
  }
  EnterLeaveCounter_createClass(EnterLeaveCounter, [{
    key: "enter",
    value: function enter(enteringNode) {
      var _this = this;
      var previousLength = this.entered.length;
      var isNodeEntered = function isNodeEntered(node) {
        return _this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode));
      };
      this.entered = union(this.entered.filter(isNodeEntered), [enteringNode]);
      return previousLength === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function leave(leavingNode) {
      var previousLength = this.entered.length;
      this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
      return previousLength > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.entered = [];
    }
  }]);
  return EnterLeaveCounter;
}();
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/BrowserDetector.js

var isFirefox = memoize(function () {
  return /firefox/i.test(navigator.userAgent);
});
var isSafari = memoize(function () {
  return Boolean(window.safari);
});
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/MonotonicInterpolant.js
function MonotonicInterpolant_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function MonotonicInterpolant_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function MonotonicInterpolant_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) MonotonicInterpolant_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) MonotonicInterpolant_defineProperties(Constructor, staticProps);
  return Constructor;
}
var MonotonicInterpolant = /*#__PURE__*/function () {
  function MonotonicInterpolant(xs, ys) {
    MonotonicInterpolant_classCallCheck(this, MonotonicInterpolant);
    var length = xs.length; // Rearrange xs and ys so that xs is sorted

    var indexes = [];
    for (var i = 0; i < length; i++) {
      indexes.push(i);
    }
    indexes.sort(function (a, b) {
      return xs[a] < xs[b] ? -1 : 1;
    }); // Get consecutive differences and slopes

    var dys = [];
    var dxs = [];
    var ms = [];
    var dx;
    var dy;
    for (var _i = 0; _i < length - 1; _i++) {
      dx = xs[_i + 1] - xs[_i];
      dy = ys[_i + 1] - ys[_i];
      dxs.push(dx);
      dys.push(dy);
      ms.push(dy / dx);
    } // Get degree-1 coefficients

    var c1s = [ms[0]];
    for (var _i2 = 0; _i2 < dxs.length - 1; _i2++) {
      var m2 = ms[_i2];
      var mNext = ms[_i2 + 1];
      if (m2 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[_i2];
        var dxNext = dxs[_i2 + 1];
        var common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]); // Get degree-2 and degree-3 coefficients

    var c2s = [];
    var c3s = [];
    var m;
    for (var _i3 = 0; _i3 < c1s.length - 1; _i3++) {
      m = ms[_i3];
      var c1 = c1s[_i3];
      var invDx = 1 / dxs[_i3];
      var _common = c1 + c1s[_i3 + 1] - m - m;
      c2s.push((m - c1 - _common) * invDx);
      c3s.push(_common * invDx * invDx);
    }
    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }
  MonotonicInterpolant_createClass(MonotonicInterpolant, [{
    key: "interpolate",
    value: function interpolate(x) {
      var xs = this.xs,
        ys = this.ys,
        c1s = this.c1s,
        c2s = this.c2s,
        c3s = this.c3s; // The rightmost point in the dataset should give an exact result

      var i = xs.length - 1;
      if (x === xs[i]) {
        return ys[i];
      } // Search for the interval x is in, returning the corresponding y if x is one of the original xs

      var low = 0;
      var high = c3s.length - 1;
      var mid;
      while (low <= high) {
        mid = Math.floor(0.5 * (low + high));
        var xHere = xs[mid];
        if (xHere < x) {
          low = mid + 1;
        } else if (xHere > x) {
          high = mid - 1;
        } else {
          return ys[mid];
        }
      }
      i = Math.max(0, high); // Interpolate

      var diff = x - xs[i];
      var diffSq = diff * diff;
      return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
  }]);
  return MonotonicInterpolant;
}();
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/OffsetUtils.js


var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
  if (!el) {
    return null;
  }
  var _el$getBoundingClient = el.getBoundingClientRect(),
    top = _el$getBoundingClient.top,
    left = _el$getBoundingClient.left;
  return {
    x: left,
    y: top
  };
}
function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function isImageNode(node) {
  var _document$documentEle;
  return node.nodeName === 'IMG' && (isFirefox() || !((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight; // Work around @2x coordinate discrepancies in browsers

  if (isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }
  return {
    dragPreviewWidth: dragPreviewWidth,
    dragPreviewHeight: dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  // The browsers will use the image intrinsic size under different conditions.
  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
  var isImage = isImageNode(dragPreview);
  var dragPreviewNode = isImage ? sourceNode : dragPreview;
  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  var offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  var sourceWidth = sourceNode.offsetWidth,
    sourceHeight = sourceNode.offsetHeight;
  var anchorX = anchorPoint.anchorX,
    anchorY = anchorPoint.anchorY;
  var _getDragPreviewSize = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight),
    dragPreviewWidth = _getDragPreviewSize.dragPreviewWidth,
    dragPreviewHeight = _getDragPreviewSize.dragPreviewHeight;
  var calculateYOffset = function calculateYOffset() {
    var interpolantY = new MonotonicInterpolant([0, 0.5, 1], [
    // Dock to the top
    offsetFromDragPreview.y,
    // Align at the center
    offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
    // Dock to the bottom
    offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
    var y = interpolantY.interpolate(anchorY); // Work around Safari 8 positioning bug

    if (isSafari() && isImage) {
      // We'll have to wait for @3x to see if this is entirely correct
      y += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }
    return y;
  };
  var calculateXOffset = function calculateXOffset() {
    // Interpolate coordinates depending on anchor point
    // If you know a simpler way to do this, let me know
    var interpolantX = new MonotonicInterpolant([0, 0.5, 1], [
    // Dock to the left
    offsetFromDragPreview.x,
    // Align at the center
    offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
    // Dock to the right
    offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
    return interpolantX.interpolate(anchorX);
  }; // Force offsets if specified in the options.

  var offsetX = offsetPoint.offsetX,
    offsetY = offsetPoint.offsetY;
  var isManualOffsetX = offsetX === 0 || offsetX;
  var isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/NativeTypes.js
var FILE = '__NATIVE_FILE__';
var URL = '__NATIVE_URL__';
var TEXT = '__NATIVE_TEXT__';
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/getDataFromDataTransfer.js
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
    return resultSoFar || dataTransfer.getData(typeToTry);
  }, '');
  return result != null ? result : defaultValue;
}
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/nativeTypesConfig.js
var _nativeTypesConfig;
function nativeTypesConfig_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}


var nativeTypesConfig = (_nativeTypesConfig = {}, nativeTypesConfig_defineProperty(_nativeTypesConfig, FILE, {
  exposeProperties: {
    files: function files(dataTransfer) {
      return Array.prototype.slice.call(dataTransfer.files);
    },
    items: function items(dataTransfer) {
      return dataTransfer.items;
    }
  },
  matchesTypes: ['Files']
}), nativeTypesConfig_defineProperty(_nativeTypesConfig, URL, {
  exposeProperties: {
    urls: function urls(dataTransfer, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
    }
  },
  matchesTypes: ['Url', 'text/uri-list']
}), nativeTypesConfig_defineProperty(_nativeTypesConfig, TEXT, {
  exposeProperties: {
    text: function text(dataTransfer, matchesTypes) {
      return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
    }
  },
  matchesTypes: ['Text', 'text/plain']
}), _nativeTypesConfig);
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/NativeDragSource.js
function NativeDragSource_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function NativeDragSource_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function NativeDragSource_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) NativeDragSource_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) NativeDragSource_defineProperties(Constructor, staticProps);
  return Constructor;
}
var NativeDragSource = /*#__PURE__*/function () {
  function NativeDragSource(config) {
    NativeDragSource_classCallCheck(this, NativeDragSource);
    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }
  NativeDragSource_createClass(NativeDragSource, [{
    key: "initializeExposedProperties",
    value: function initializeExposedProperties() {
      var _this = this;
      Object.keys(this.config.exposeProperties).forEach(function (property) {
        Object.defineProperty(_this.item, property, {
          configurable: true,
          enumerable: true,
          get: function get() {
            // eslint-disable-next-line no-console
            console.warn("Browser doesn't allow reading \"".concat(property, "\" until the drop event."));
            return null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function loadDataTransfer(dataTransfer) {
      var _this2 = this;
      if (dataTransfer) {
        var newProperties = {};
        Object.keys(this.config.exposeProperties).forEach(function (property) {
          newProperties[property] = {
            value: _this2.config.exposeProperties[property](dataTransfer, _this2.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        });
        Object.defineProperties(this.item, newProperties);
      }
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      return true;
    }
  }, {
    key: "beginDrag",
    value: function beginDrag() {
      return this.item;
    }
  }, {
    key: "isDragging",
    value: function isDragging(monitor, handle) {
      return handle === monitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {// empty
    }
  }]);
  return NativeDragSource;
}();
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/NativeDragSources/index.js


function createNativeDragSource(type, dataTransfer) {
  var result = new NativeDragSource(nativeTypesConfig[type]);
  result.loadDataTransfer(dataTransfer);
  return result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }
  var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
    var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;
    return matchesTypes.some(function (t) {
      return dataTransferTypes.indexOf(t) > -1;
    });
  })[0] || null;
}
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/OptionsReader.js
function OptionsReader_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function OptionsReader_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function OptionsReader_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) OptionsReader_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) OptionsReader_defineProperties(Constructor, staticProps);
  return Constructor;
}
var OptionsReader = /*#__PURE__*/function () {
  function OptionsReader(globalContext) {
    OptionsReader_classCallCheck(this, OptionsReader);
    this.globalContext = globalContext;
  }
  OptionsReader_createClass(OptionsReader, [{
    key: "window",
    get: function get() {
      if (this.globalContext) {
        return this.globalContext;
      } else if (typeof window !== 'undefined') {
        return window;
      }
      return undefined;
    }
  }, {
    key: "document",
    get: function get() {
      if (this.window) {
        return this.window.document;
      }
      return undefined;
    }
  }]);
  return OptionsReader;
}();
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/HTML5BackendImpl.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        HTML5BackendImpl_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function HTML5BackendImpl_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function HTML5BackendImpl_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function HTML5BackendImpl_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function HTML5BackendImpl_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) HTML5BackendImpl_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) HTML5BackendImpl_defineProperties(Constructor, staticProps);
  return Constructor;
}






var HTML5BackendImpl = /*#__PURE__*/function () {
  function HTML5BackendImpl(manager, globalContext) {
    var _this = this;
    HTML5BackendImpl_classCallCheck(this, HTML5BackendImpl);
    this.sourcePreviewNodes = new Map();
    this.sourcePreviewNodeOptions = new Map();
    this.sourceNodes = new Map();
    this.sourceNodeOptions = new Map();
    this.dragStartSourceIds = null;
    this.dropTargetIds = [];
    this.dragEnterTargetIds = [];
    this.currentNativeSource = null;
    this.currentNativeHandle = null;
    this.currentDragSourceNode = null;
    this.altKeyPressed = false;
    this.mouseMoveTimeoutTimer = null;
    this.asyncEndDragFrameId = null;
    this.dragOverTargetIds = null;
    this.getSourceClientOffset = function (sourceId) {
      var source = _this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    };
    this.endDragNativeItem = function () {
      if (!_this.isDraggingNativeItem()) {
        return;
      }
      _this.actions.endDrag();
      if (_this.currentNativeHandle) {
        _this.registry.removeSource(_this.currentNativeHandle);
      }
      _this.currentNativeHandle = null;
      _this.currentNativeSource = null;
    };
    this.isNodeInDocument = function (node) {
      // Check the node either in the main document or in the current context
      return Boolean(node && _this.document && _this.document.body && document.body.contains(node));
    };
    this.endDragIfSourceWasRemovedFromDOM = function () {
      var node = _this.currentDragSourceNode;
      if (_this.isNodeInDocument(node)) {
        return;
      }
      if (_this.clearCurrentDragSourceNode()) {
        _this.actions.endDrag();
      }
    };
    this.handleTopDragStartCapture = function () {
      _this.clearCurrentDragSourceNode();
      _this.dragStartSourceIds = [];
    };
    this.handleTopDragStart = function (e) {
      if (e.defaultPrevented) {
        return;
      }
      var dragStartSourceIds = _this.dragStartSourceIds;
      _this.dragStartSourceIds = null;
      var clientOffset = getEventClientOffset(e); // Avoid crashing if we missed a drop event or our previous drag died

      if (_this.monitor.isDragging()) {
        _this.actions.endDrag();
      } // Don't publish the source just yet (see why below)

      _this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: _this.getSourceClientOffset,
        clientOffset: clientOffset
      });
      var dataTransfer = e.dataTransfer;
      var nativeType = matchNativeItemType(dataTransfer);
      if (_this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {
          // Use custom drag image if user specifies it.
          // If child drag source refuses drag but parent agrees,
          // use parent's node as drag image. Neither works in IE though.
          var sourceId = _this.monitor.getSourceId();
          var sourceNode = _this.sourceNodes.get(sourceId);
          var dragPreview = _this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            var _this$getCurrentSourc = _this.getCurrentSourcePreviewNodeOptions(),
              anchorX = _this$getCurrentSourc.anchorX,
              anchorY = _this$getCurrentSourc.anchorY,
              offsetX = _this$getCurrentSourc.offsetX,
              offsetY = _this$getCurrentSourc.offsetY;
            var anchorPoint = {
              anchorX: anchorX,
              anchorY: anchorY
            };
            var offsetPoint = {
              offsetX: offsetX,
              offsetY: offsetY
            };
            var dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          // Firefox won't drag without setting data
          dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData('application/json', {});
        } catch (err) {} // IE doesn't support MIME types in setData
        // Store drag source node so we can check whether
        // it is removed from DOM and trigger endDrag manually.

        _this.setCurrentDragSourceNode(e.target); // Now we are ready to publish the drag source.. or are we not?

        var _this$getCurrentSourc2 = _this.getCurrentSourcePreviewNodeOptions(),
          captureDraggingState = _this$getCurrentSourc2.captureDraggingState;
        if (!captureDraggingState) {
          // Usually we want to publish it in the next tick so that browser
          // is able to screenshot the current (not yet dragging) state.
          //
          // It also neatly avoids a situation where render() returns null
          // in the same tick for the source element, and browser freaks out.
          setTimeout(function () {
            return _this.actions.publishDragSource();
          }, 0);
        } else {
          // In some cases the user may want to override this behavior, e.g.
          // to work around IE not supporting custom drag previews.
          //
          // When using a custom drag layer, the only way to prevent
          // the default drag preview from drawing in IE is to screenshot
          // the dragging state in which the node itself has zero opacity
          // and height. In this case, though, returning null from render()
          // will abruptly end the dragging, which is not obvious.
          //
          // This is the reason such behavior is strictly opt-in.
          _this.actions.publishDragSource();
        }
      } else if (nativeType) {
        // A native item (such as URL) dragged from inside the document
        _this.beginDragNativeItem(nativeType);
      } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
        // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
        // Just let it drag. It's a native type (URL or text) and will be picked up in
        // dragenter handler.
        return;
      } else {
        // If by this time no drag source reacted, tell browser not to drag.
        e.preventDefault();
      }
    };
    this.handleTopDragEndCapture = function () {
      if (_this.clearCurrentDragSourceNode()) {
        // Firefox can dispatch this event in an infinite loop
        // if dragend handler does something like showing an alert.
        // Only proceed if we have not handled it already.
        _this.actions.endDrag();
      }
    };
    this.handleTopDragEnterCapture = function (e) {
      _this.dragEnterTargetIds = [];
      var isFirstEnter = _this.enterLeaveCounter.enter(e.target);
      if (!isFirstEnter || _this.monitor.isDragging()) {
        return;
      }
      var dataTransfer = e.dataTransfer;
      var nativeType = matchNativeItemType(dataTransfer);
      if (nativeType) {
        // A native item (such as file or URL) dragged from outside the document
        _this.beginDragNativeItem(nativeType, dataTransfer);
      }
    };
    this.handleTopDragEnter = function (e) {
      var dragEnterTargetIds = _this.dragEnterTargetIds;
      _this.dragEnterTargetIds = [];
      if (!_this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        return;
      }
      _this.altKeyPressed = e.altKey;
      if (!isFirefox()) {
        // Don't emit hover in `dragenter` on Firefox due to an edge case.
        // If the target changes position as the result of `dragenter`, Firefox
        // will still happily dispatch `dragover` despite target being no longer
        // there. The easy solution is to only fire `hover` in `dragover` on FF.
        _this.actions.hover(dragEnterTargetIds, {
          clientOffset: getEventClientOffset(e)
        });
      }
      var canDrop = dragEnterTargetIds.some(function (targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });
      if (canDrop) {
        // IE requires this to fire dragover events
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      }
    };
    this.handleTopDragOverCapture = function () {
      _this.dragOverTargetIds = [];
    };
    this.handleTopDragOver = function (e) {
      var dragOverTargetIds = _this.dragOverTargetIds;
      _this.dragOverTargetIds = [];
      if (!_this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        // Prevent default "drop and blow away the whole document" action.
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
        }
        return;
      }
      _this.altKeyPressed = e.altKey;
      _this.actions.hover(dragOverTargetIds || [], {
        clientOffset: getEventClientOffset(e)
      });
      var canDrop = (dragOverTargetIds || []).some(function (targetId) {
        return _this.monitor.canDropOnTarget(targetId);
      });
      if (canDrop) {
        // Show user-specified drop effect.
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = _this.getCurrentDropEffect();
        }
      } else if (_this.isDraggingNativeItem()) {
        // Don't show a nice cursor but still prevent default
        // "drop and blow away the whole document" action.
        e.preventDefault();
      } else {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
        }
      }
    };
    this.handleTopDragLeaveCapture = function (e) {
      if (_this.isDraggingNativeItem()) {
        e.preventDefault();
      }
      var isLastLeave = _this.enterLeaveCounter.leave(e.target);
      if (!isLastLeave) {
        return;
      }
      if (_this.isDraggingNativeItem()) {
        _this.endDragNativeItem();
      }
    };
    this.handleTopDropCapture = function (e) {
      _this.dropTargetIds = [];
      e.preventDefault();
      if (_this.isDraggingNativeItem()) {
        var _this$currentNativeSo;
        (_this$currentNativeSo = _this.currentNativeSource) === null || _this$currentNativeSo === void 0 ? void 0 : _this$currentNativeSo.loadDataTransfer(e.dataTransfer);
      }
      _this.enterLeaveCounter.reset();
    };
    this.handleTopDrop = function (e) {
      var dropTargetIds = _this.dropTargetIds;
      _this.dropTargetIds = [];
      _this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e)
      });
      _this.actions.drop({
        dropEffect: _this.getCurrentDropEffect()
      });
      if (_this.isDraggingNativeItem()) {
        _this.endDragNativeItem();
      } else {
        _this.endDragIfSourceWasRemovedFromDOM();
      }
    };
    this.handleSelectStart = function (e) {
      var target = e.target; // Only IE requires us to explicitly say
      // we want drag drop operation to start

      if (typeof target.dragDrop !== 'function') {
        return;
      } // Inputs and textareas should be selectable

      if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      } // For other targets, ask IE
      // to enable drag and drop

      e.preventDefault();
      target.dragDrop();
    };
    this.options = new OptionsReader(globalContext);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
  /**
   * Generate profiling statistics for the HTML5Backend.
   */

  HTML5BackendImpl_createClass(HTML5BackendImpl, [{
    key: "profile",
    value: function profile() {
      var _this$dragStartSource, _this$dragOverTargetI;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((_this$dragStartSource = this.dragStartSourceIds) === null || _this$dragStartSource === void 0 ? void 0 : _this$dragStartSource.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((_this$dragOverTargetI = this.dragOverTargetIds) === null || _this$dragOverTargetI === void 0 ? void 0 : _this$dragOverTargetI.length) || 0
      };
    } // public for test
  }, {
    key: "setup",
    value: function setup() {
      if (this.window === undefined) {
        return;
      }
      if (this.window.__isReactDndBackendSetUp) {
        throw new Error('Cannot have two HTML5 backends at the same time.');
      }
      this.window.__isReactDndBackendSetUp = true;
      this.addEventListeners(this.window);
    }
  }, {
    key: "teardown",
    value: function teardown() {
      if (this.window === undefined) {
        return;
      }
      this.window.__isReactDndBackendSetUp = false;
      this.removeEventListeners(this.window);
      this.clearCurrentDragSourceNode();
      if (this.asyncEndDragFrameId) {
        this.window.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function connectDragPreview(sourceId, node, options) {
      var _this2 = this;
      this.sourcePreviewNodeOptions.set(sourceId, options);
      this.sourcePreviewNodes.set(sourceId, node);
      return function () {
        _this2.sourcePreviewNodes.delete(sourceId);
        _this2.sourcePreviewNodeOptions.delete(sourceId);
      };
    }
  }, {
    key: "connectDragSource",
    value: function connectDragSource(sourceId, node, options) {
      var _this3 = this;
      this.sourceNodes.set(sourceId, node);
      this.sourceNodeOptions.set(sourceId, options);
      var handleDragStart = function handleDragStart(e) {
        return _this3.handleDragStart(e, sourceId);
      };
      var handleSelectStart = function handleSelectStart(e) {
        return _this3.handleSelectStart(e);
      };
      node.setAttribute('draggable', 'true');
      node.addEventListener('dragstart', handleDragStart);
      node.addEventListener('selectstart', handleSelectStart);
      return function () {
        _this3.sourceNodes.delete(sourceId);
        _this3.sourceNodeOptions.delete(sourceId);
        node.removeEventListener('dragstart', handleDragStart);
        node.removeEventListener('selectstart', handleSelectStart);
        node.setAttribute('draggable', 'false');
      };
    }
  }, {
    key: "connectDropTarget",
    value: function connectDropTarget(targetId, node) {
      var _this4 = this;
      var handleDragEnter = function handleDragEnter(e) {
        return _this4.handleDragEnter(e, targetId);
      };
      var handleDragOver = function handleDragOver(e) {
        return _this4.handleDragOver(e, targetId);
      };
      var handleDrop = function handleDrop(e) {
        return _this4.handleDrop(e, targetId);
      };
      node.addEventListener('dragenter', handleDragEnter);
      node.addEventListener('dragover', handleDragOver);
      node.addEventListener('drop', handleDrop);
      return function () {
        node.removeEventListener('dragenter', handleDragEnter);
        node.removeEventListener('dragover', handleDragOver);
        node.removeEventListener('drop', handleDrop);
      };
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(target) {
      // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
      if (!target.addEventListener) {
        return;
      }
      target.addEventListener('dragstart', this.handleTopDragStart);
      target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
      target.addEventListener('dragend', this.handleTopDragEndCapture, true);
      target.addEventListener('dragenter', this.handleTopDragEnter);
      target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
      target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
      target.addEventListener('dragover', this.handleTopDragOver);
      target.addEventListener('dragover', this.handleTopDragOverCapture, true);
      target.addEventListener('drop', this.handleTopDrop);
      target.addEventListener('drop', this.handleTopDropCapture, true);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners(target) {
      // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
      if (!target.removeEventListener) {
        return;
      }
      target.removeEventListener('dragstart', this.handleTopDragStart);
      target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
      target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
      target.removeEventListener('dragenter', this.handleTopDragEnter);
      target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
      target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
      target.removeEventListener('dragover', this.handleTopDragOver);
      target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
      target.removeEventListener('drop', this.handleTopDrop);
      target.removeEventListener('drop', this.handleTopDropCapture, true);
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function getCurrentSourceNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
      return _objectSpread({
        dropEffect: this.altKeyPressed ? 'copy' : 'move'
      }, sourceNodeOptions || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function getCurrentDropEffect() {
      if (this.isDraggingNativeItem()) {
        // It makes more sense to default to 'copy' for native resources
        return 'copy';
      }
      return this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function getCurrentSourcePreviewNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
      return _objectSpread({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: false
      }, sourcePreviewNodeOptions || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function isDraggingNativeItem() {
      var itemType = this.monitor.getItemType();
      return Object.keys(NativeTypes_namespaceObject).some(function (key) {
        return NativeTypes_namespaceObject[key] === itemType;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function beginDragNativeItem(type, dataTransfer) {
      this.clearCurrentDragSourceNode();
      this.currentNativeSource = createNativeDragSource(type, dataTransfer);
      this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
      this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function setCurrentDragSourceNode(node) {
      var _this5 = this;
      this.clearCurrentDragSourceNode();
      this.currentDragSourceNode = node; // A timeout of > 0 is necessary to resolve Firefox issue referenced
      // See:
      //   * https://github.com/react-dnd/react-dnd/pull/928
      //   * https://github.com/react-dnd/react-dnd/issues/869

      var MOUSE_MOVE_TIMEOUT = 1000; // Receiving a mouse event in the middle of a dragging operation
      // means it has ended and the drag source node disappeared from DOM,
      // so the browser didn't dispatch the dragend event.
      //
      // We need to wait before we start listening for mousemove events.
      // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
      // immediately in some browsers.
      //
      // See:
      //   * https://github.com/react-dnd/react-dnd/pull/928
      //   * https://github.com/react-dnd/react-dnd/issues/869
      //

      this.mouseMoveTimeoutTimer = setTimeout(function () {
        return _this5.window && _this5.window.addEventListener('mousemove', _this5.endDragIfSourceWasRemovedFromDOM, true);
      }, MOUSE_MOVE_TIMEOUT);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function clearCurrentDragSourceNode() {
      if (this.currentDragSourceNode) {
        this.currentDragSourceNode = null;
        if (this.window) {
          this.window.clearTimeout(this.mouseMoveTimeoutTimer || undefined);
          this.window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
        }
        this.mouseMoveTimeoutTimer = null;
        return true;
      }
      return false;
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(e, sourceId) {
      if (e.defaultPrevented) {
        return;
      }
      if (!this.dragStartSourceIds) {
        this.dragStartSourceIds = [];
      }
      this.dragStartSourceIds.unshift(sourceId);
    }
  }, {
    key: "handleDragEnter",
    value: function handleDragEnter(e, targetId) {
      this.dragEnterTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDragOver",
    value: function handleDragOver(e, targetId) {
      if (this.dragOverTargetIds === null) {
        this.dragOverTargetIds = [];
      }
      this.dragOverTargetIds.unshift(targetId);
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(e, targetId) {
      this.dropTargetIds.unshift(targetId);
    }
  }, {
    key: "window",
    get: function get() {
      return this.options.window;
    }
  }, {
    key: "document",
    get: function get() {
      return this.options.document;
    }
  }]);
  return HTML5BackendImpl;
}();
;// CONCATENATED MODULE: ./node_modules/react-dnd-html5-backend/dist/esm/index.js




var HTML5Backend = function createBackend(manager, context) {
  return new HTML5BackendImpl(manager, context);
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(82963);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(61120);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(97326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
  var prototype = Component.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }
  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component;
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
;// CONCATENATED MODULE: ./node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t,
    f,
    n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length;) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
/* harmony default export */ var clsx_m = (clsx);
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Grid/utils/calculateSizeAndPositionDataAndUpdateScrollOffset.js
/**
 * Helper method that determines when to recalculate row or column metadata.
 */
function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount,
    cellSize = _ref.cellSize,
    computeMetadataCallback = _ref.computeMetadataCallback,
    computeMetadataCallbackProps = _ref.computeMetadataCallbackProps,
    nextCellsCount = _ref.nextCellsCount,
    nextCellSize = _ref.nextCellSize,
    nextScrollToIndex = _ref.nextScrollToIndex,
    scrollToIndex = _ref.scrollToIndex,
    updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps); // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.

    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Grid/types.js


var bpfrpt_proptype_CellPosition =  true ? null : 0;
var bpfrpt_proptype_CellRendererParams =  true ? null : 0;
var bpfrpt_proptype_CellRenderer =  true ? null : 0;
var bpfrpt_proptype_CellCache =  true ? null : 0;
var bpfrpt_proptype_StyleCache =  true ? null : 0;
var bpfrpt_proptype_CellRangeRendererParams =  true ? null : 0;
var bpfrpt_proptype_CellRangeRenderer =  true ? null : 0;
var bpfrpt_proptype_CellSizeGetter =  true ? null : 0;
var bpfrpt_proptype_CellSize =  true ? null : 0;
var bpfrpt_proptype_NoContentRenderer =  true ? null : 0;
var bpfrpt_proptype_Scroll =  true ? null : 0;
var bpfrpt_proptype_ScrollbarPresenceChange =  true ? null : 0;
var bpfrpt_proptype_RenderedSection =  true ? null : 0;
var bpfrpt_proptype_OverscanIndicesGetterParams =  true ? null : 0;
var bpfrpt_proptype_OverscanIndices =  true ? null : 0;
var bpfrpt_proptype_OverscanIndicesGetter =  true ? null : 0;
var bpfrpt_proptype_Alignment =  true ? null : 0;
var bpfrpt_proptype_VisibleCellRange =  true ? null : 0;



















;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Grid/utils/CellSizeAndPositionManager.js




/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */
var CellSizeAndPositionManager = /*#__PURE__*/
function () {
  // Cache of size and position data for cells, mapped by cell index.
  // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
  // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
  // Used in deferred mode to track which cells have been queued for measurement.
  function CellSizeAndPositionManager(_ref) {
    var cellCount = _ref.cellCount,
      cellSizeGetter = _ref.cellSizeGetter,
      estimatedCellSize = _ref.estimatedCellSize;
    (0,classCallCheck/* default */.Z)(this, CellSizeAndPositionManager);
    (0,defineProperty/* default */.Z)(this, "_cellSizeAndPositionData", {});
    (0,defineProperty/* default */.Z)(this, "_lastMeasuredIndex", -1);
    (0,defineProperty/* default */.Z)(this, "_lastBatchedIndex", -1);
    (0,defineProperty/* default */.Z)(this, "_cellCount", void 0);
    (0,defineProperty/* default */.Z)(this, "_cellSizeGetter", void 0);
    (0,defineProperty/* default */.Z)(this, "_estimatedCellSize", void 0);
    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;
  }
  (0,createClass/* default */.Z)(CellSizeAndPositionManager, [{
    key: "areOffsetsAdjusted",
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: "configure",
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount,
        estimatedCellSize = _ref2.estimatedCellSize,
        cellSizeGetter = _ref2.cellSizeGetter;
      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
      this._cellSizeGetter = cellSizeGetter;
    }
  }, {
    key: "getCellCount",
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: "getEstimatedCellSize",
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: "getOffsetAdjustment",
    value: function getOffsetAdjustment() {
      return 0;
    }
    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */
  }, {
    key: "getSizeAndPositionOfCell",
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error("Requested index ".concat(index, " is outside of range 0..").concat(this._cellCount));
      }
      if (index > this._lastMeasuredIndex) {
        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
        var offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
          var size = this._cellSizeGetter({
            index: i
          }); // undefined or NaN probably means a logic error in the size getter.
          // null means we're using CellMeasurer and haven't yet measured a given index.

          if (size === undefined || isNaN(size)) {
            throw Error("Invalid size returned for cell ".concat(i, " of value ").concat(size));
          } else if (size === null) {
            this._cellSizeAndPositionData[i] = {
              offset: offset,
              size: 0
            };
            this._lastBatchedIndex = index;
          } else {
            this._cellSizeAndPositionData[i] = {
              offset: offset,
              size: size
            };
            offset += size;
            this._lastMeasuredIndex = index;
          }
        }
      }
      return this._cellSizeAndPositionData[index];
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredCell",
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }
    /**
     * Total size of all cells being measured.
     * This value will be completely estimated initially.
     * As cells are measured, the estimate will be updated.
     */
  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var totalSizeOfMeasuredCells = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
      var numUnmeasuredCells = this._cellCount - this._lastMeasuredIndex - 1;
      var totalSizeOfUnmeasuredCells = numUnmeasuredCells * this._estimatedCellSize;
      return totalSizeOfMeasuredCells + totalSizeOfUnmeasuredCells;
    }
    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */
  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
        align = _ref3$align === void 0 ? 'auto' : _ref3$align,
        containerSize = _ref3.containerSize,
        currentOffset = _ref3.currentOffset,
        targetIndex = _ref3.targetIndex;
      if (containerSize <= 0) {
        return 0;
      }
      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;
      var idealOffset;
      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;
        case 'end':
          idealOffset = minOffset;
          break;
        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;
        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }
      var totalSize = this.getTotalSize();
      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: "getVisibleCellRange",
    value: function getVisibleCellRange(params) {
      var containerSize = params.containerSize,
        offset = params.offset;
      var totalSize = this.getTotalSize();
      if (totalSize === 0) {
        return {};
      }
      var maxOffset = offset + containerSize;
      var start = this._findNearestCell(offset);
      var datum = this.getSizeAndPositionOfCell(start);
      offset = datum.offset + datum.size;
      var stop = start;
      while (offset < maxOffset && stop < this._cellCount - 1) {
        stop++;
        offset += this.getSizeAndPositionOfCell(stop).size;
      }
      return {
        start: start,
        stop: stop
      };
    }
    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */
  }, {
    key: "resetCell",
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }
  }, {
    key: "_binarySearch",
    value: function _binarySearch(high, low, offset) {
      while (low <= high) {
        var middle = low + Math.floor((high - low) / 2);
        var currentOffset = this.getSizeAndPositionOfCell(middle).offset;
        if (currentOffset === offset) {
          return middle;
        } else if (currentOffset < offset) {
          low = middle + 1;
        } else if (currentOffset > offset) {
          high = middle - 1;
        }
      }
      if (low > 0) {
        return low - 1;
      } else {
        return 0;
      }
    }
  }, {
    key: "_exponentialSearch",
    value: function _exponentialSearch(index, offset) {
      var interval = 1;
      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
        index += interval;
        interval *= 2;
      }
      return this._binarySearch(Math.min(index, this._cellCount - 1), Math.floor(index / 2), offset);
    }
    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */
  }, {
    key: "_findNearestCell",
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error("Invalid offset ".concat(offset, " specified"));
      } // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.

      offset = Math.max(0, offset);
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);
      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
        // If we've already measured cells within this range just use a binary search as it's faster.
        return this._binarySearch(lastMeasuredIndex, 0, offset);
      } else {
        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
        // The overall complexity for this approach is O(log n).
        return this._exponentialSearch(lastMeasuredIndex, offset);
      }
    }
  }]);
  return CellSizeAndPositionManager;
}();




;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Grid/utils/maxElementSize.js
var DEFAULT_MAX_ELEMENT_SIZE = 1500000;
var CHROME_MAX_ELEMENT_SIZE = 1.67771e7;
var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};
var isChrome = function isChrome() {
  return !!window.chrome;
};
var getMaxElementSize = function getMaxElementSize() {
  if (isBrowser()) {
    if (isChrome()) {
      return CHROME_MAX_ELEMENT_SIZE;
    }
  }
  return DEFAULT_MAX_ELEMENT_SIZE;
};
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Grid/utils/ScalingCellSizeAndPositionManager.js







/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */
var ScalingCellSizeAndPositionManager = /*#__PURE__*/
function () {
  function ScalingCellSizeAndPositionManager(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize,
      maxScrollSize = _ref$maxScrollSize === void 0 ? getMaxElementSize() : _ref$maxScrollSize,
      params = (0,objectWithoutProperties/* default */.Z)(_ref, ["maxScrollSize"]);
    (0,classCallCheck/* default */.Z)(this, ScalingCellSizeAndPositionManager);
    (0,defineProperty/* default */.Z)(this, "_cellSizeAndPositionManager", void 0);
    (0,defineProperty/* default */.Z)(this, "_maxScrollSize", void 0);

    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new CellSizeAndPositionManager(params);
    this._maxScrollSize = maxScrollSize;
  }
  (0,createClass/* default */.Z)(ScalingCellSizeAndPositionManager, [{
    key: "areOffsetsAdjusted",
    value: function areOffsetsAdjusted() {
      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    }
  }, {
    key: "configure",
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: "getCellCount",
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: "getEstimatedCellSize",
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }
    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scaled (safe) as well.
     */
  }, {
    key: "getOffsetAdjustment",
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize,
        offset = _ref2.offset;
      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      var offsetPercentage = this._getOffsetPercentage({
        containerSize: containerSize,
        offset: offset,
        totalSize: safeTotalSize
      });
      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: "getSizeAndPositionOfCell",
    value: function getSizeAndPositionOfCell(index) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredCell",
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }
    /** See CellSizeAndPositionManager#getTotalSize */
  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }
    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */
  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
        align = _ref3$align === void 0 ? 'auto' : _ref3$align,
        containerSize = _ref3.containerSize,
        currentOffset = _ref3.currentOffset,
        targetIndex = _ref3.targetIndex;
      currentOffset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: currentOffset
      });
      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align: align,
        containerSize: containerSize,
        currentOffset: currentOffset,
        targetIndex: targetIndex
      });
      return this._offsetToSafeOffset({
        containerSize: containerSize,
        offset: offset
      });
    }
    /** See CellSizeAndPositionManager#getVisibleCellRange */
  }, {
    key: "getVisibleCellRange",
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize,
        offset = _ref4.offset;
      offset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: offset
      });
      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize: containerSize,
        offset: offset
      });
    }
  }, {
    key: "resetCell",
    value: function resetCell(index) {
      this._cellSizeAndPositionManager.resetCell(index);
    }
  }, {
    key: "_getOffsetPercentage",
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize,
        offset = _ref5.offset,
        totalSize = _ref5.totalSize;
      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: "_offsetToSafeOffset",
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize,
        offset = _ref6.offset;
      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: totalSize
        });
        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: "_safeOffsetToOffset",
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize,
        offset = _ref7.offset;
      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: safeTotalSize
        });
        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);
  return ScalingCellSizeAndPositionManager;
}();




;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/utils/createCallbackMemoizer.js
/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var cachedIndices = {};
  return function (_ref) {
    var callback = _ref.callback,
      indices = _ref.indices;
    var keys = Object.keys(indices);
    var allInitialized = !requireAllKeys || keys.every(function (key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function (key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];
      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
    });
    cachedIndices = indices;
    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Grid/defaultOverscanIndicesGetter.js
var SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = 1;
var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
    overscanCellsCount = _ref.overscanCellsCount,
    scrollDirection = _ref.scrollDirection,
    startIndex = _ref.startIndex,
    stopIndex = _ref.stopIndex;
  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
  }
}


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Grid/utils/updateScrollIndexHelper.js

/**
 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
 */

function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize,
    cellSizeAndPositionManager = _ref.cellSizeAndPositionManager,
    previousCellsCount = _ref.previousCellsCount,
    previousCellSize = _ref.previousCellSize,
    previousScrollToAlignment = _ref.previousScrollToAlignment,
    previousScrollToIndex = _ref.previousScrollToIndex,
    previousSize = _ref.previousSize,
    scrollOffset = _ref.scrollOffset,
    scrollToAlignment = _ref.scrollToAlignment,
    scrollToIndex = _ref.scrollToIndex,
    size = _ref.size,
    sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero,
    updateScrollIndexCallback = _ref.updateScrollIndexCallback;
  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize; // If we have a new scroll target OR if height/row-height has changed,
  // We should ensure that the scroll target is visible.

  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex); // If we don't have a selected item but list size or number of children have decreased,
    // Make sure we aren't scrolled too far past the current content.
  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
    // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Grid/defaultCellRangeRenderer.js
/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */
function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache,
    cellRenderer = _ref.cellRenderer,
    columnSizeAndPositionManager = _ref.columnSizeAndPositionManager,
    columnStartIndex = _ref.columnStartIndex,
    columnStopIndex = _ref.columnStopIndex,
    deferredMeasurementCache = _ref.deferredMeasurementCache,
    horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment,
    isScrolling = _ref.isScrolling,
    isScrollingOptOut = _ref.isScrollingOptOut,
    parent = _ref.parent,
    rowSizeAndPositionManager = _ref.rowSizeAndPositionManager,
    rowStartIndex = _ref.rowStartIndex,
    rowStopIndex = _ref.rowStopIndex,
    styleCache = _ref.styleCache,
    verticalOffsetAdjustment = _ref.verticalOffsetAdjustment,
    visibleColumnIndices = _ref.visibleColumnIndices,
    visibleRowIndices = _ref.visibleRowIndices;
  var renderedCells = []; // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
  // User cannot scroll beyond these size limitations.
  // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
  // We should never cache styles for compressed offsets though as this can lead to bugs.
  // See issue #576 for more.

  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();
  var canCacheStyle = !isScrolling && !areOffsetsAdjusted;
  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);
    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = "".concat(rowIndex, "-").concat(columnIndex);
      var style = void 0; // Cache style objects so shallow-compare doesn't re-render unnecessarily.

      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        // In deferred mode, cells will be initially rendered before we know their size.
        // Don't interfere with CellMeasurer's measurements by setting an invalid size.
        if (deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
          // Position not-yet-measured cells at top/left 0,0,
          // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
          // Positioning them further to the right/bottom influences their measured size.
          style = {
            height: 'auto',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 'auto'
          };
        } else {
          style = {
            height: rowDatum.size,
            left: columnDatum.offset + horizontalOffsetAdjustment,
            position: 'absolute',
            top: rowDatum.offset + verticalOffsetAdjustment,
            width: columnDatum.size
          };
          styleCache[key] = style;
        }
      }
      var cellRendererParams = {
        columnIndex: columnIndex,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent,
        rowIndex: rowIndex,
        style: style
      };
      var renderedCell = void 0; // Avoid re-creating cells while scrolling.
      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
      // If a scroll is in progress- cache and reuse cells.
      // This cache will be thrown away once scrolling completes.
      // However if we are scaling scroll positions and sizes, we should also avoid caching.
      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
      // For more info refer to issue #395
      //
      // If isScrollingOptOut is specified, we always cache cells.
      // For more info refer to issue #1028

      if ((isScrollingOptOut || isScrolling) && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }
        renderedCell = cellCache[key]; // If the user is no longer scrolling, don't cache cells.
        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }
      if (renderedCell == null || renderedCell === false) {
        continue;
      }
      if (false) {}
      renderedCells.push(renderedCell);
    }
  }
  return renderedCells;
}
function warnAboutMissingStyle(parent, renderedCell) {
  if (false) {}
}

;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/canUseDOM.js
/* harmony default export */ var canUseDOM = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/scrollbarSize.js

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/utils/animationFrame.js
// Properly handle server-side rendering.
var win;
if (typeof window !== 'undefined') {
  win = window;
} else if (typeof self !== 'undefined') {
  win = self;
} else {
  win = {};
} // requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/

var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (callback) {
  return win.setTimeout(callback, 1000 / 60);
};
var cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function (id) {
  win.clearTimeout(id);
};
var raf = request;
var caf = cancel;
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/utils/requestAnimationTimeout.js

var bpfrpt_proptype_AnimationTimeoutId =  true ? null : 0;
var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return caf(frame.id);
};
/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */

var requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start; // wait for end of processing current event handler, because event handler may be long

  Promise.resolve().then(function () {
    start = Date.now();
  });
  var timeout = function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = raf(timeout);
    }
  };
  var frame = {
    id: raf(timeout)
  };
  return frame;
};


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Grid/Grid.js








var _class, _temp;
function Grid_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function Grid_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      Grid_ownKeys(source, true).forEach(function (key) {
        (0,defineProperty/* default */.Z)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Grid_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}











/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */

var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */

var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};
var renderNull = function renderNull() {
  return null;
};

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */
var Grid = (_temp = _class = /*#__PURE__*/
function (_React$PureComponent) {
  (0,inherits/* default */.Z)(Grid, _React$PureComponent);

  // Invokes onSectionRendered callback only when start/stop row or column indices change
  function Grid(props) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, Grid);
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (0,getPrototypeOf/* default */.Z)(Grid).call(this, props));
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onGridRenderedMemoizer", createCallbackMemoizer());
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onScrollMemoizer", createCallbackMemoizer(false));
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_deferredInvalidateColumnIndex", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_deferredInvalidateRowIndex", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_recomputeScrollLeftFlag", false);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_recomputeScrollTopFlag", false);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_horizontalScrollBarSize", 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_verticalScrollBarSize", 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_scrollbarPresenceChanged", false);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_scrollingContainer", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_childrenToDisplay", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_columnStartIndex", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_columnStopIndex", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_rowStartIndex", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_rowStopIndex", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_renderedColumnStartIndex", 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_renderedColumnStopIndex", 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_renderedRowStartIndex", 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_renderedRowStopIndex", 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_initialScrollTop", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_initialScrollLeft", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_disablePointerEventsTimeoutId", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_styleCache", {});
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_cellCache", {});
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_debounceScrollEndedCallback", function () {
      _this._disablePointerEventsTimeoutId = null; // isScrolling is used to determine if we reset styleCache

      _this.setState({
        isScrolling: false,
        needToResetStyleCache: false
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_invokeOnGridRenderedHelper", function () {
      var onSectionRendered = _this.props.onSectionRendered;
      _this._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: _this._columnStartIndex,
          columnOverscanStopIndex: _this._columnStopIndex,
          columnStartIndex: _this._renderedColumnStartIndex,
          columnStopIndex: _this._renderedColumnStopIndex,
          rowOverscanStartIndex: _this._rowStartIndex,
          rowOverscanStopIndex: _this._rowStopIndex,
          rowStartIndex: _this._renderedRowStartIndex,
          rowStopIndex: _this._renderedRowStopIndex
        }
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_setScrollingContainerRef", function (ref) {
      _this._scrollingContainer = ref;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onScroll", function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target === _this._scrollingContainer) {
        _this.handleScrollEvent(event.target);
      }
    });
    var columnSizeAndPositionManager = new ScalingCellSizeAndPositionManager({
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.columnWidth)(params);
      },
      estimatedCellSize: Grid._getEstimatedColumnSize(props)
    });
    var rowSizeAndPositionManager = new ScalingCellSizeAndPositionManager({
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.rowHeight)(params);
      },
      estimatedCellSize: Grid._getEstimatedRowSize(props)
    });
    _this.state = {
      instanceProps: {
        columnSizeAndPositionManager: columnSizeAndPositionManager,
        rowSizeAndPositionManager: rowSizeAndPositionManager,
        prevColumnWidth: props.columnWidth,
        prevRowHeight: props.rowHeight,
        prevColumnCount: props.columnCount,
        prevRowCount: props.rowCount,
        prevIsScrolling: props.isScrolling === true,
        prevScrollToColumn: props.scrollToColumn,
        prevScrollToRow: props.scrollToRow,
        scrollbarSize: 0,
        scrollbarSizeMeasured: false
      },
      isScrolling: false,
      scrollDirectionHorizontal: SCROLL_DIRECTION_FORWARD,
      scrollDirectionVertical: SCROLL_DIRECTION_FORWARD,
      scrollLeft: 0,
      scrollTop: 0,
      scrollPositionChangeReason: null,
      needToResetStyleCache: false
    };
    if (props.scrollToRow > 0) {
      _this._initialScrollTop = _this._getCalculatedScrollTop(props, _this.state);
    }
    if (props.scrollToColumn > 0) {
      _this._initialScrollLeft = _this._getCalculatedScrollLeft(props, _this.state);
    }
    return _this;
  }
  /**
   * Gets offsets for a given cell and alignment.
   */

  (0,createClass/* default */.Z)(Grid, [{
    key: "getOffsetForCell",
    value: function getOffsetForCell() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$alignment = _ref.alignment,
        alignment = _ref$alignment === void 0 ? this.props.scrollToAlignment : _ref$alignment,
        _ref$columnIndex = _ref.columnIndex,
        columnIndex = _ref$columnIndex === void 0 ? this.props.scrollToColumn : _ref$columnIndex,
        _ref$rowIndex = _ref.rowIndex,
        rowIndex = _ref$rowIndex === void 0 ? this.props.scrollToRow : _ref$rowIndex;
      var offsetProps = Grid_objectSpread({}, this.props, {
        scrollToAlignment: alignment,
        scrollToColumn: columnIndex,
        scrollToRow: rowIndex
      });
      return {
        scrollLeft: this._getCalculatedScrollLeft(offsetProps),
        scrollTop: this._getCalculatedScrollTop(offsetProps)
      };
    }
    /**
     * Gets estimated total rows' height.
     */
  }, {
    key: "getTotalRowsHeight",
    value: function getTotalRowsHeight() {
      return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
    }
    /**
     * Gets estimated total columns' width.
     */
  }, {
    key: "getTotalColumnsWidth",
    value: function getTotalColumnsWidth() {
      return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
    }
    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */
  }, {
    key: "handleScrollEvent",
    value: function handleScrollEvent(_ref2) {
      var _ref2$scrollLeft = _ref2.scrollLeft,
        scrollLeftParam = _ref2$scrollLeft === void 0 ? 0 : _ref2$scrollLeft,
        _ref2$scrollTop = _ref2.scrollTop,
        scrollTopParam = _ref2$scrollTop === void 0 ? 0 : _ref2$scrollTop;

      // On iOS, we can arrive at negative offsets by swiping past the start.
      // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
      if (scrollTopParam < 0) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll

      this._debounceScrollEnded();
      var _this$props = this.props,
        autoHeight = _this$props.autoHeight,
        autoWidth = _this$props.autoWidth,
        height = _this$props.height,
        width = _this$props.width;
      var instanceProps = this.state.instanceProps; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollbarSize = instanceProps.scrollbarSize;
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.

      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        // Don't change direction for an axis unless scroll offset has changed.
        var scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionHorizontal;
        var scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionVertical;
        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal: scrollDirectionHorizontal,
          scrollDirectionVertical: scrollDirectionVertical,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
        };
        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }
        if (!autoWidth) {
          newState.scrollLeft = scrollLeft;
        }
        newState.needToResetStyleCache = false;
        this.setState(newState);
      }
      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalColumnsWidth: totalColumnsWidth,
        totalRowsHeight: totalRowsHeight
      });
    }
    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.
  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref3) {
      var columnIndex = _ref3.columnIndex,
        rowIndex = _ref3.rowIndex;
      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }
    /**
     * Pre-measure all columns and rows in a Grid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */
  }, {
    key: "measureAllCells",
    value: function measureAllCells() {
      var _this$props2 = this.props,
        columnCount = _this$props2.columnCount,
        rowCount = _this$props2.rowCount;
      var instanceProps = this.state.instanceProps;
      instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }
    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */
  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref4$columnIndex = _ref4.columnIndex,
        columnIndex = _ref4$columnIndex === void 0 ? 0 : _ref4$columnIndex,
        _ref4$rowIndex = _ref4.rowIndex,
        rowIndex = _ref4$rowIndex === void 0 ? 0 : _ref4$rowIndex;
      var _this$props3 = this.props,
        scrollToColumn = _this$props3.scrollToColumn,
        scrollToRow = _this$props3.scrollToRow;
      var instanceProps = this.state.instanceProps;
      instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
      instanceProps.rowSizeAndPositionManager.resetCell(rowIndex); // Cell sizes may be determined by a function property.
      // In this case the cDU handler can't know if they changed.
      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.

      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === SCROLL_DIRECTION_FORWARD ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn);
      this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === SCROLL_DIRECTION_FORWARD ? rowIndex <= scrollToRow : rowIndex >= scrollToRow); // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.

      this._styleCache = {};
      this._cellCache = {};
      this.forceUpdate();
    }
    /**
     * Ensure column and row are visible.
     */
  }, {
    key: "scrollToCell",
    value: function scrollToCell(_ref5) {
      var columnIndex = _ref5.columnIndex,
        rowIndex = _ref5.rowIndex;
      var columnCount = this.props.columnCount;
      var props = this.props; // Don't adjust scroll offset for single-column grids (eg List, Table).
      // This can cause a funky scroll offset because of the vertical scrollbar width.

      if (columnCount > 1 && columnIndex !== undefined) {
        this._updateScrollLeftForScrollToColumn(Grid_objectSpread({}, props, {
          scrollToColumn: columnIndex
        }));
      }
      if (rowIndex !== undefined) {
        this._updateScrollTopForScrollToRow(Grid_objectSpread({}, props, {
          scrollToRow: rowIndex
        }));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
        getScrollbarSize = _this$props4.getScrollbarSize,
        height = _this$props4.height,
        scrollLeft = _this$props4.scrollLeft,
        scrollToColumn = _this$props4.scrollToColumn,
        scrollTop = _this$props4.scrollTop,
        scrollToRow = _this$props4.scrollToRow,
        width = _this$props4.width;
      var instanceProps = this.state.instanceProps; // Reset initial offsets to be ignored in browser

      this._initialScrollTop = 0;
      this._initialScrollLeft = 0; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize(); // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.

      if (!instanceProps.scrollbarSizeMeasured) {
        this.setState(function (prevState) {
          var stateUpdate = Grid_objectSpread({}, prevState, {
            needToResetStyleCache: false
          });
          stateUpdate.instanceProps.scrollbarSize = getScrollbarSize();
          stateUpdate.instanceProps.scrollbarSizeMeasured = true;
          return stateUpdate;
        });
      }
      if (typeof scrollLeft === 'number' && scrollLeft >= 0 || typeof scrollTop === 'number' && scrollTop >= 0) {
        var stateUpdate = Grid._getScrollToPositionStateUpdate({
          prevState: this.state,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
        if (stateUpdate) {
          stateUpdate.needToResetStyleCache = false;
          this.setState(stateUpdate);
        }
      } // refs don't work in `react-test-renderer`

      if (this._scrollingContainer) {
        // setting the ref's scrollLeft and scrollTop.
        // Somehow in MultiGrid the main grid doesn't trigger a update on mount.
        if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) {
          this._scrollingContainer.scrollLeft = this.state.scrollLeft;
        }
        if (this._scrollingContainer.scrollTop !== this.state.scrollTop) {
          this._scrollingContainer.scrollTop = this.state.scrollTop;
        }
      } // Don't update scroll offset if the size is 0; we don't render any cells in this case.
      // Setting a state may cause us to later thing we've updated the offce when we haven't.

      var sizeIsBiggerThanZero = height > 0 && width > 0;
      if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollLeftForScrollToColumn();
      }
      if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollTopForScrollToRow();
      } // Update onRowsRendered callback

      this._invokeOnGridRenderedHelper(); // Initialize onScroll callback

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
      });
      this._maybeCallOnScrollbarPresenceChange();
    }
    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;
      var _this$props5 = this.props,
        autoHeight = _this$props5.autoHeight,
        autoWidth = _this$props5.autoWidth,
        columnCount = _this$props5.columnCount,
        height = _this$props5.height,
        rowCount = _this$props5.rowCount,
        scrollToAlignment = _this$props5.scrollToAlignment,
        scrollToColumn = _this$props5.scrollToColumn,
        scrollToRow = _this$props5.scrollToRow,
        width = _this$props5.width;
      var _this$state = this.state,
        scrollLeft = _this$state.scrollLeft,
        scrollPositionChangeReason = _this$state.scrollPositionChangeReason,
        scrollTop = _this$state.scrollTop,
        instanceProps = _this$state.instanceProps; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize(); // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218

      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        // @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
        if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (!autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      } // Special case where the previous size was 0:
      // In this case we don't show any windowed cells at all.
      // So we should always recalculate offset afterwards.

      var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0; // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?

      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;
        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        updateScrollIndexHelper({
          cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
          }
        });
      }
      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;
        this._updateScrollTopForScrollToRow(this.props);
      } else {
        updateScrollIndexHelper({
          cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollTopForScrollToRow(_this2.props);
          }
        });
      } // Update onRowsRendered callback if start/stop indices have changed

      this._invokeOnGridRenderedHelper(); // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners

      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        this._invokeOnScrollMemoizer({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          totalColumnsWidth: totalColumnsWidth,
          totalRowsHeight: totalRowsHeight
        });
      }
      this._maybeCallOnScrollbarPresenceChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        cancelAnimationTimeout(this._disablePointerEventsTimeoutId);
      }
    }
    /**
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        autoContainerWidth = _this$props6.autoContainerWidth,
        autoHeight = _this$props6.autoHeight,
        autoWidth = _this$props6.autoWidth,
        className = _this$props6.className,
        containerProps = _this$props6.containerProps,
        containerRole = _this$props6.containerRole,
        containerStyle = _this$props6.containerStyle,
        height = _this$props6.height,
        id = _this$props6.id,
        noContentRenderer = _this$props6.noContentRenderer,
        role = _this$props6.role,
        style = _this$props6.style,
        tabIndex = _this$props6.tabIndex,
        width = _this$props6.width;
      var _this$state2 = this.state,
        instanceProps = _this$state2.instanceProps,
        needToResetStyleCache = _this$state2.needToResetStyleCache;
      var isScrolling = this._isScrolling();
      var gridStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        width: autoWidth ? 'auto' : width,
        WebkitOverflowScrolling: 'touch',
        willChange: 'transform'
      };
      if (needToResetStyleCache) {
        this._styleCache = {};
      } // calculate _styleCache here
      // if state.isScrolling (not from _isScrolling) then reset

      if (!this.state.isScrolling) {
        this._resetStyleCache();
      } // calculate children to render here

      this._calculateChildrenToRender(this.props, this.state);
      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize(); // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116

      var verticalScrollBarSize = totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
      if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
        this._horizontalScrollBarSize = horizontalScrollBarSize;
        this._verticalScrollBarSize = verticalScrollBarSize;
        this._scrollbarPresenceChanged = true;
      } // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23

      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
      var childrenToDisplay = this._childrenToDisplay;
      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;
      return react.createElement("div", (0,esm_extends/* default */.Z)({
        ref: this._setScrollingContainerRef
      }, containerProps, {
        "aria-label": this.props['aria-label'],
        "aria-readonly": this.props['aria-readonly'],
        className: clsx_m('ReactVirtualized__Grid', className),
        id: id,
        onScroll: this._onScroll,
        role: role,
        style: Grid_objectSpread({}, gridStyle, {}, style),
        tabIndex: tabIndex
      }), childrenToDisplay.length > 0 && react.createElement("div", {
        className: "ReactVirtualized__Grid__innerScrollContainer",
        role: containerRole,
        style: Grid_objectSpread({
          width: autoContainerWidth ? 'auto' : totalColumnsWidth,
          height: totalRowsHeight,
          maxWidth: totalColumnsWidth,
          maxHeight: totalRowsHeight,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          position: 'relative'
        }, containerStyle)
      }, childrenToDisplay), showNoContentRenderer && noContentRenderer());
    }
    /* ---------------------------- Helper methods ---------------------------- */
  }, {
    key: "_calculateChildrenToRender",
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer,
        cellRangeRenderer = props.cellRangeRenderer,
        columnCount = props.columnCount,
        deferredMeasurementCache = props.deferredMeasurementCache,
        height = props.height,
        overscanColumnCount = props.overscanColumnCount,
        overscanIndicesGetter = props.overscanIndicesGetter,
        overscanRowCount = props.overscanRowCount,
        rowCount = props.rowCount,
        width = props.width,
        isScrollingOptOut = props.isScrollingOptOut;
      var scrollDirectionHorizontal = state.scrollDirectionHorizontal,
        scrollDirectionVertical = state.scrollDirectionVertical,
        instanceProps = state.instanceProps;
      var scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop;
      var scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft;
      var isScrolling = this._isScrolling(props, state);
      this._childrenToDisplay = []; // Render only enough columns and rows to cover the visible area of the grid.

      if (height > 0 && width > 0) {
        var visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        var visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });
        var horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        }); // Store for _invokeOnGridRenderedHelper()

        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;
        var overscanColumnIndices = overscanIndicesGetter({
          direction: 'horizontal',
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: typeof visibleColumnIndices.start === 'number' ? visibleColumnIndices.start : 0,
          stopIndex: typeof visibleColumnIndices.stop === 'number' ? visibleColumnIndices.stop : -1
        });
        var overscanRowIndices = overscanIndicesGetter({
          direction: 'vertical',
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: typeof visibleRowIndices.start === 'number' ? visibleRowIndices.start : 0,
          stopIndex: typeof visibleRowIndices.stop === 'number' ? visibleRowIndices.stop : -1
        }); // Store for _invokeOnGridRenderedHelper()

        var columnStartIndex = overscanColumnIndices.overscanStartIndex;
        var columnStopIndex = overscanColumnIndices.overscanStopIndex;
        var rowStartIndex = overscanRowIndices.overscanStartIndex;
        var rowStopIndex = overscanRowIndices.overscanStopIndex; // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.

        if (deferredMeasurementCache) {
          // If rows have a dynamic height, scan the rows we are about to render.
          // If any have not yet been measured, then we need to render all columns initially,
          // Because the height of the row is equal to the tallest cell within that row,
          // (And so we can't know the height without measuring all column-cells first).
          if (!deferredMeasurementCache.hasFixedHeight()) {
            for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
              if (!deferredMeasurementCache.has(rowIndex, 0)) {
                columnStartIndex = 0;
                columnStopIndex = columnCount - 1;
                break;
              }
            }
          } // If columns have a dynamic width, scan the columns we are about to render.
          // If any have not yet been measured, then we need to render all rows initially,
          // Because the width of the column is equal to the widest cell within that column,
          // (And so we can't know the width without measuring all row-cells first).

          if (!deferredMeasurementCache.hasFixedWidth()) {
            for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
              if (!deferredMeasurementCache.has(0, columnIndex)) {
                rowStartIndex = 0;
                rowStopIndex = rowCount - 1;
                break;
              }
            }
          }
        }
        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer: cellRenderer,
          columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          columnStartIndex: columnStartIndex,
          columnStopIndex: columnStopIndex,
          deferredMeasurementCache: deferredMeasurementCache,
          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
          isScrolling: isScrolling,
          isScrollingOptOut: isScrollingOptOut,
          parent: this,
          rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          rowStartIndex: rowStartIndex,
          rowStopIndex: rowStopIndex,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment: verticalOffsetAdjustment,
          visibleColumnIndices: visibleColumnIndices,
          visibleRowIndices: visibleRowIndices
        }); // update the indices

        this._columnStartIndex = columnStartIndex;
        this._columnStopIndex = columnStopIndex;
        this._rowStartIndex = rowStartIndex;
        this._rowStopIndex = rowStopIndex;
      }
    }
    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Grid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */
  }, {
    key: "_debounceScrollEnded",
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
      if (this._disablePointerEventsTimeoutId) {
        cancelAnimationTimeout(this._disablePointerEventsTimeoutId);
      }
      this._disablePointerEventsTimeoutId = requestAnimationTimeout(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: "_handleInvalidatedGridSize",
    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number' && typeof this._deferredInvalidateRowIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;
        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;
        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
      }
    }
  }, {
    key: "_invokeOnScrollMemoizer",
    value: function _invokeOnScrollMemoizer(_ref6) {
      var _this3 = this;
      var scrollLeft = _ref6.scrollLeft,
        scrollTop = _ref6.scrollTop,
        totalColumnsWidth = _ref6.totalColumnsWidth,
        totalRowsHeight = _ref6.totalRowsHeight;
      this._onScrollMemoizer({
        callback: function callback(_ref7) {
          var scrollLeft = _ref7.scrollLeft,
            scrollTop = _ref7.scrollTop;
          var _this3$props = _this3.props,
            height = _this3$props.height,
            onScroll = _this3$props.onScroll,
            width = _this3$props.width;
          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: "_isScrolling",
    value: function _isScrolling() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      // If isScrolling is defined in props, use it to override the value in state
      // This is a performance optimization for WindowScroller + Grid
      return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
    }
  }, {
    key: "_maybeCallOnScrollbarPresenceChange",
    value: function _maybeCallOnScrollbarPresenceChange() {
      if (this._scrollbarPresenceChanged) {
        var onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;
        this._scrollbarPresenceChanged = false;
        onScrollbarPresenceChange({
          horizontal: this._horizontalScrollBarSize > 0,
          size: this.state.instanceProps.scrollbarSize,
          vertical: this._verticalScrollBarSize > 0
        });
      }
    }
  }, {
    key: "scrollToPosition",
    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */
    value: function scrollToPosition(_ref8) {
      var scrollLeft = _ref8.scrollLeft,
        scrollTop = _ref8.scrollTop;
      var stateUpdate = Grid._getScrollToPositionStateUpdate({
        prevState: this.state,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });
      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: "_getCalculatedScrollLeft",
    value: function _getCalculatedScrollLeft() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      return Grid._getCalculatedScrollLeft(props, state);
    }
  }, {
    key: "_updateScrollLeftForScrollToColumn",
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var stateUpdate = Grid._getScrollLeftForScrollToColumnStateUpdate(props, state);
      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: "_getCalculatedScrollTop",
    value: function _getCalculatedScrollTop() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      return Grid._getCalculatedScrollTop(props, state);
    }
  }, {
    key: "_resetStyleCache",
    value: function _resetStyleCache() {
      var styleCache = this._styleCache;
      var cellCache = this._cellCache;
      var isScrollingOptOut = this.props.isScrollingOptOut; // Reset cell and style caches once scrolling stops.
      // This makes Grid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      // Don't clear visible cells from cellCache if isScrollingOptOut is specified.
      // This keeps the cellCache to a resonable size.

      this._cellCache = {};
      this._styleCache = {}; // Copy over the visible cell styles so avoid unnecessary re-render.

      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = "".concat(rowIndex, "-").concat(columnIndex);
          this._styleCache[key] = styleCache[key];
          if (isScrollingOptOut) {
            this._cellCache[key] = cellCache[key];
          }
        }
      }
    }
  }, {
    key: "_updateScrollTopForScrollToRow",
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var stateUpdate = Grid._getScrollTopForScrollToRowStateUpdate(props, state);
      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = {};
      if (nextProps.columnCount === 0 && prevState.scrollLeft !== 0 || nextProps.rowCount === 0 && prevState.scrollTop !== 0) {
        newState.scrollLeft = 0;
        newState.scrollTop = 0; // only use scroll{Left,Top} from props if scrollTo{Column,Row} isn't specified
        // scrollTo{Column,Row} should override scroll{Left,Top}
      } else if (nextProps.scrollLeft !== prevState.scrollLeft && nextProps.scrollToColumn < 0 || nextProps.scrollTop !== prevState.scrollTop && nextProps.scrollToRow < 0) {
        Object.assign(newState, Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        }));
      }
      var instanceProps = prevState.instanceProps; // Initially we should not clearStyleCache

      newState.needToResetStyleCache = false;
      if (nextProps.columnWidth !== instanceProps.prevColumnWidth || nextProps.rowHeight !== instanceProps.prevRowHeight) {
        // Reset cache. set it to {} in render
        newState.needToResetStyleCache = true;
      }
      instanceProps.columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: Grid._getEstimatedColumnSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.columnWidth)
      });
      instanceProps.rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: Grid._getEstimatedRowSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.rowHeight)
      });
      if (instanceProps.prevColumnCount === 0 || instanceProps.prevRowCount === 0) {
        instanceProps.prevColumnCount = 0;
        instanceProps.prevRowCount = 0;
      } // If scrolling is controlled outside this component, clear cache when scrolling stops

      if (nextProps.autoHeight && nextProps.isScrolling === false && instanceProps.prevIsScrolling === true) {
        Object.assign(newState, {
          isScrolling: false
        });
      }
      var maybeStateA;
      var maybeStateB;
      calculateSizeAndPositionDataAndUpdateScrollOffset({
        cellCount: instanceProps.prevColumnCount,
        cellSize: typeof instanceProps.prevColumnWidth === 'number' ? instanceProps.prevColumnWidth : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: instanceProps.prevScrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateA = Grid._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
        }
      });
      calculateSizeAndPositionDataAndUpdateScrollOffset({
        cellCount: instanceProps.prevRowCount,
        cellSize: typeof instanceProps.prevRowHeight === 'number' ? instanceProps.prevRowHeight : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: instanceProps.prevScrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateB = Grid._getScrollTopForScrollToRowStateUpdate(nextProps, prevState);
        }
      });
      instanceProps.prevColumnCount = nextProps.columnCount;
      instanceProps.prevColumnWidth = nextProps.columnWidth;
      instanceProps.prevIsScrolling = nextProps.isScrolling === true;
      instanceProps.prevRowCount = nextProps.rowCount;
      instanceProps.prevRowHeight = nextProps.rowHeight;
      instanceProps.prevScrollToColumn = nextProps.scrollToColumn;
      instanceProps.prevScrollToRow = nextProps.scrollToRow; // getting scrollBarSize (moved from componentWillMount)

      instanceProps.scrollbarSize = nextProps.getScrollbarSize();
      if (instanceProps.scrollbarSize === undefined) {
        instanceProps.scrollbarSizeMeasured = false;
        instanceProps.scrollbarSize = 0;
      } else {
        instanceProps.scrollbarSizeMeasured = true;
      }
      newState.instanceProps = instanceProps;
      return Grid_objectSpread({}, newState, {}, maybeStateA, {}, maybeStateB);
    }
  }, {
    key: "_getEstimatedColumnSize",
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: "_getEstimatedRowSize",
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }
  }, {
    key: "_getScrollToPositionStateUpdate",
    /**
     * Get the updated state after scrolling to
     * scrollLeft and scrollTop
     */
    value: function _getScrollToPositionStateUpdate(_ref9) {
      var prevState = _ref9.prevState,
        scrollLeft = _ref9.scrollLeft,
        scrollTop = _ref9.scrollTop;
      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };
      if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_BACKWARD;
        newState.scrollLeft = scrollLeft;
      }
      if (typeof scrollTop === 'number' && scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > prevState.scrollTop ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_BACKWARD;
        newState.scrollTop = scrollTop;
      }
      if (typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== prevState.scrollTop) {
        return newState;
      }
      return {};
    }
  }, {
    key: "_wrapSizeGetter",
    value: function _wrapSizeGetter(value) {
      return typeof value === 'function' ? value : function () {
        return value;
      };
    }
  }, {
    key: "_getCalculatedScrollLeft",
    value: function _getCalculatedScrollLeft(nextProps, prevState) {
      var columnCount = nextProps.columnCount,
        height = nextProps.height,
        scrollToAlignment = nextProps.scrollToAlignment,
        scrollToColumn = nextProps.scrollToColumn,
        width = nextProps.width;
      var scrollLeft = prevState.scrollLeft,
        instanceProps = prevState.instanceProps;
      if (columnCount > 0) {
        var finalColumn = columnCount - 1;
        var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
        return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex: targetIndex
        });
      }
      return 0;
    }
  }, {
    key: "_getScrollLeftForScrollToColumnStateUpdate",
    value: function _getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState) {
      var scrollLeft = prevState.scrollLeft;
      var calculatedScrollLeft = Grid._getCalculatedScrollLeft(nextProps, prevState);
      if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: calculatedScrollLeft,
          scrollTop: -1
        });
      }
      return {};
    }
  }, {
    key: "_getCalculatedScrollTop",
    value: function _getCalculatedScrollTop(nextProps, prevState) {
      var height = nextProps.height,
        rowCount = nextProps.rowCount,
        scrollToAlignment = nextProps.scrollToAlignment,
        scrollToRow = nextProps.scrollToRow,
        width = nextProps.width;
      var scrollTop = prevState.scrollTop,
        instanceProps = prevState.instanceProps;
      if (rowCount > 0) {
        var finalRow = rowCount - 1;
        var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
        return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex: targetIndex
        });
      }
      return 0;
    }
  }, {
    key: "_getScrollTopForScrollToRowStateUpdate",
    value: function _getScrollTopForScrollToRowStateUpdate(nextProps, prevState) {
      var scrollTop = prevState.scrollTop;
      var calculatedScrollTop = Grid._getCalculatedScrollTop(nextProps, prevState);
      if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: -1,
          scrollTop: calculatedScrollTop
        });
      }
      return {};
    }
  }]);
  return Grid;
}(react.PureComponent), (0,defineProperty/* default */.Z)(_class, "propTypes",  true ? null : 0), _temp);
(0,defineProperty/* default */.Z)(Grid, "defaultProps", {
  'aria-label': 'grid',
  'aria-readonly': true,
  autoContainerWidth: false,
  autoHeight: false,
  autoWidth: false,
  cellRangeRenderer: defaultCellRangeRenderer,
  containerRole: 'rowgroup',
  containerStyle: {},
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize: scrollbarSize,
  noContentRenderer: renderNull,
  onScroll: function onScroll() {},
  onScrollbarPresenceChange: function onScrollbarPresenceChange() {},
  onSectionRendered: function onSectionRendered() {},
  overscanColumnCount: 0,
  overscanIndicesGetter: defaultOverscanIndicesGetter,
  overscanRowCount: 10,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  scrollToAlignment: 'auto',
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0,
  isScrollingOptOut: false
});
polyfill(Grid);
/* harmony default export */ var Grid_Grid = (Grid);















;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Grid/accessibilityOverscanIndicesGetter.js
var accessibilityOverscanIndicesGetter_SCROLL_DIRECTION_BACKWARD = (/* unused pure expression or super */ null && (-1));
var accessibilityOverscanIndicesGetter_SCROLL_DIRECTION_FORWARD = 1;
var accessibilityOverscanIndicesGetter_SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var accessibilityOverscanIndicesGetter_SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

function accessibilityOverscanIndicesGetter_defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
    overscanCellsCount = _ref.overscanCellsCount,
    scrollDirection = _ref.scrollDirection,
    startIndex = _ref.startIndex,
    stopIndex = _ref.stopIndex;
  // Make sure we render at least 1 cell extra before and after (except near boundaries)
  // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
  // For more info see issues #625
  overscanCellsCount = Math.max(1, overscanCellsCount);
  if (scrollDirection === accessibilityOverscanIndicesGetter_SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex - 1),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
  }
}


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Grid/index.js





















;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/ArrowKeyStepper/types.js
var bpfrpt_proptype_ScrollIndices =  true ? null : 0;


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/ArrowKeyStepper/ArrowKeyStepper.js







var ArrowKeyStepper_class, ArrowKeyStepper_temp;
function ArrowKeyStepper_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function ArrowKeyStepper_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ArrowKeyStepper_ownKeys(source, true).forEach(function (key) {
        (0,defineProperty/* default */.Z)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ArrowKeyStepper_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}


/**
 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
 */

var ArrowKeyStepper = (ArrowKeyStepper_temp = ArrowKeyStepper_class = /*#__PURE__*/
function (_React$PureComponent) {
  (0,inherits/* default */.Z)(ArrowKeyStepper, _React$PureComponent);
  function ArrowKeyStepper() {
    var _getPrototypeOf2;
    var _this;
    (0,classCallCheck/* default */.Z)(this, ArrowKeyStepper);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (_getPrototypeOf2 = (0,getPrototypeOf/* default */.Z)(ArrowKeyStepper)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      scrollToColumn: 0,
      scrollToRow: 0,
      instanceProps: {
        prevScrollToColumn: 0,
        prevScrollToRow: 0
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_columnStartIndex", 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_columnStopIndex", 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_rowStartIndex", 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_rowStopIndex", 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onKeyDown", function (event) {
      var _this$props = _this.props,
        columnCount = _this$props.columnCount,
        disabled = _this$props.disabled,
        mode = _this$props.mode,
        rowCount = _this$props.rowCount;
      if (disabled) {
        return;
      }
      var _this$_getScrollState = _this._getScrollState(),
        scrollToColumnPrevious = _this$_getScrollState.scrollToColumn,
        scrollToRowPrevious = _this$_getScrollState.scrollToRow;
      var _this$_getScrollState2 = _this._getScrollState(),
        scrollToColumn = _this$_getScrollState2.scrollToColumn,
        scrollToRow = _this$_getScrollState2.scrollToRow; // The above cases all prevent default event event behavior.
      // This is to keep the grid from scrolling after the snap-to update.

      switch (event.key) {
        case 'ArrowDown':
          scrollToRow = mode === 'cells' ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(_this._rowStopIndex + 1, rowCount - 1);
          break;
        case 'ArrowLeft':
          scrollToColumn = mode === 'cells' ? Math.max(scrollToColumn - 1, 0) : Math.max(_this._columnStartIndex - 1, 0);
          break;
        case 'ArrowRight':
          scrollToColumn = mode === 'cells' ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(_this._columnStopIndex + 1, columnCount - 1);
          break;
        case 'ArrowUp':
          scrollToRow = mode === 'cells' ? Math.max(scrollToRow - 1, 0) : Math.max(_this._rowStartIndex - 1, 0);
          break;
      }
      if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
        event.preventDefault();
        _this._updateScrollState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onSectionRendered", function (_ref) {
      var columnStartIndex = _ref.columnStartIndex,
        columnStopIndex = _ref.columnStopIndex,
        rowStartIndex = _ref.rowStartIndex,
        rowStopIndex = _ref.rowStopIndex;
      _this._columnStartIndex = columnStartIndex;
      _this._columnStopIndex = columnStopIndex;
      _this._rowStartIndex = rowStartIndex;
      _this._rowStopIndex = rowStopIndex;
    });
    return _this;
  }
  (0,createClass/* default */.Z)(ArrowKeyStepper, [{
    key: "setScrollIndexes",
    value: function setScrollIndexes(_ref2) {
      var scrollToColumn = _ref2.scrollToColumn,
        scrollToRow = _ref2.scrollToRow;
      this.setState({
        scrollToRow: scrollToRow,
        scrollToColumn: scrollToColumn
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        className = _this$props2.className,
        children = _this$props2.children;
      var _this$_getScrollState3 = this._getScrollState(),
        scrollToColumn = _this$_getScrollState3.scrollToColumn,
        scrollToRow = _this$_getScrollState3.scrollToRow;
      return react.createElement("div", {
        className: className,
        onKeyDown: this._onKeyDown
      }, children({
        onSectionRendered: this._onSectionRendered,
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow
      }));
    }
  }, {
    key: "_getScrollState",
    value: function _getScrollState() {
      return this.props.isControlled ? this.props : this.state;
    }
  }, {
    key: "_updateScrollState",
    value: function _updateScrollState(_ref3) {
      var scrollToColumn = _ref3.scrollToColumn,
        scrollToRow = _ref3.scrollToRow;
      var _this$props3 = this.props,
        isControlled = _this$props3.isControlled,
        onScrollToChange = _this$props3.onScrollToChange;
      if (typeof onScrollToChange === 'function') {
        onScrollToChange({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }
      if (!isControlled) {
        this.setState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isControlled) {
        return {};
      }
      if (nextProps.scrollToColumn !== prevState.instanceProps.prevScrollToColumn || nextProps.scrollToRow !== prevState.instanceProps.prevScrollToRow) {
        return ArrowKeyStepper_objectSpread({}, prevState, {
          scrollToColumn: nextProps.scrollToColumn,
          scrollToRow: nextProps.scrollToRow,
          instanceProps: {
            prevScrollToColumn: nextProps.scrollToColumn,
            prevScrollToRow: nextProps.scrollToRow
          }
        });
      }
      return {};
    }
  }]);
  return ArrowKeyStepper;
}(react.PureComponent), (0,defineProperty/* default */.Z)(ArrowKeyStepper_class, "propTypes",  true ? null : 0), ArrowKeyStepper_temp);
(0,defineProperty/* default */.Z)(ArrowKeyStepper, "defaultProps", {
  disabled: false,
  isControlled: false,
  mode: 'edges',
  scrollToColumn: 0,
  scrollToRow: 0
});
polyfill(ArrowKeyStepper);
/* harmony default export */ var ArrowKeyStepper_ArrowKeyStepper = ((/* unused pure expression or super */ null && (ArrowKeyStepper)));



;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/ArrowKeyStepper/index.js




;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/vendor/detectElementResize.js
/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 * 5) Added support for injecting custom window object
 **/
function createDetectElementResize(nonce, hostWindow) {
  // Check `document` and `window` in case of server-side rendering
  var _window;
  if (typeof hostWindow !== 'undefined') {
    _window = hostWindow;
  } else if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = __webpack_require__.g;
  }
  var attachEvent = typeof _window.document !== 'undefined' && _window.document.attachEvent;
  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };
      return function (fn) {
        return raf(fn);
      };
    }();
    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();
    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
        expand = triggers.firstElementChild,
        contract = triggers.lastElementChild,
        expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };
    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };
    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className && typeof e.target.className.indexOf === 'function' && e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }
      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };
    /* Detect CSS Animations support to detect element display/re-attach */

    var animation = false,
      keyframeprefix = '',
      animationstartevent = 'animationstart',
      domPrefixes = 'Webkit Moz O ms'.split(' '),
      startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
      pfx = '';
    {
      var elm = _window.document.createElement('fakeelement');
      if (elm.style.animationName !== undefined) {
        animation = true;
      }
      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }
    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }
  var createStyles = function createStyles(doc) {
    if (!doc.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
        head = doc.head || doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');
      style.id = 'detectElementResize';
      style.type = 'text/css';
      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }
      head.appendChild(style);
    }
  };
  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent('onresize', fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;
        var elementStyle = _window.getComputedStyle(element);
        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
        var resizeTriggersHtml = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
        if (window.trustedTypes) {
          var staticPolicy = trustedTypes.createPolicy('react-virtualized-auto-sizer', {
            createHTML: function createHTML() {
              return resizeTriggersHtml;
            }
          });
          element.__resizeTriggers__.innerHTML = staticPolicy.createHTML('');
        } else {
          element.__resizeTriggers__.innerHTML = resizeTriggersHtml;
        }
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);
        /* Listen for a css animation to detect element display/re-attach */

        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };
  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent('onresize', fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {// Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };
  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/AutoSizer/AutoSizer.js







var AutoSizer_class, AutoSizer_temp;
function AutoSizer_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function AutoSizer_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      AutoSizer_ownKeys(source, true).forEach(function (key) {
        (0,defineProperty/* default */.Z)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      AutoSizer_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}


var AutoSizer = (AutoSizer_temp = AutoSizer_class = /*#__PURE__*/
function (_React$Component) {
  (0,inherits/* default */.Z)(AutoSizer, _React$Component);
  function AutoSizer() {
    var _getPrototypeOf2;
    var _this;
    (0,classCallCheck/* default */.Z)(this, AutoSizer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (_getPrototypeOf2 = (0,getPrototypeOf/* default */.Z)(AutoSizer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_parentNode", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_autoSizer", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_window", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_detectElementResize", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onResize", function () {
      var _this$props = _this.props,
        disableHeight = _this$props.disableHeight,
        disableWidth = _this$props.disableWidth,
        onResize = _this$props.onResize;
      if (_this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.
        var height = _this._parentNode.offsetHeight || 0;
        var width = _this._parentNode.offsetWidth || 0;
        var win = _this._window || window;
        var style = win.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(style.paddingRight, 10) || 0;
        var paddingTop = parseInt(style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(style.paddingBottom, 10) || 0;
        var newHeight = height - paddingTop - paddingBottom;
        var newWidth = width - paddingLeft - paddingRight;
        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: height - paddingTop - paddingBottom,
            width: width - paddingLeft - paddingRight
          });
          onResize({
            height: height,
            width: width
          });
        }
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_setRef", function (autoSizer) {
      _this._autoSizer = autoSizer;
    });
    return _this;
  }
  (0,createClass/* default */.Z)(AutoSizer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var nonce = this.props.nonce;
      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode;
        this._window = this._autoSizer.parentNode.ownerDocument.defaultView; // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41

        this._detectElementResize = createDetectElementResize(nonce, this._window);
        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);
        this._onResize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        disableHeight = _this$props2.disableHeight,
        disableWidth = _this$props2.disableWidth,
        style = _this$props2.style;
      var _this$state = this.state,
        height = _this$state.height,
        width = _this$state.width; // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = {
        overflow: 'visible'
      };
      var childParams = {};
      if (!disableHeight) {
        outerStyle.height = 0;
        childParams.height = height;
      }
      if (!disableWidth) {
        outerStyle.width = 0;
        childParams.width = width;
      }
      /**
       * TODO: Avoid rendering children before the initial measurements have been collected.
       * At best this would just be wasting cycles.
       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
       * Note that if default width/height props were provided this would still work with SSR.
      if (
        height !== 0 &&
        width !== 0
      ) {
        child = children({ height, width })
      }
      */

      return react.createElement("div", {
        className: className,
        ref: this._setRef,
        style: AutoSizer_objectSpread({}, outerStyle, {}, style)
      }, children(childParams));
    }
  }]);
  return AutoSizer;
}(react.Component), (0,defineProperty/* default */.Z)(AutoSizer_class, "propTypes",  true ? null : 0), AutoSizer_temp);
(0,defineProperty/* default */.Z)(AutoSizer, "defaultProps", {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false,
  style: {}
});


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/AutoSizer/index.js


// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(1168);
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/CellMeasurer/types.js
var bpfrpt_proptype_CellMeasureCache =  true ? null : 0;


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurer.js







var CellMeasurer_class, CellMeasurer_temp;



/**
 * Wraps a cell and measures its rendered content.
 * Measurements are stored in a per-cell cache.
 * Cached-content is not be re-measured.
 */
var CellMeasurer_CellMeasurer = (CellMeasurer_temp = CellMeasurer_class = /*#__PURE__*/
function (_React$PureComponent) {
  (0,inherits/* default */.Z)(CellMeasurer, _React$PureComponent);
  function CellMeasurer() {
    var _getPrototypeOf2;
    var _this;
    (0,classCallCheck/* default */.Z)(this, CellMeasurer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (_getPrototypeOf2 = (0,getPrototypeOf/* default */.Z)(CellMeasurer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_child", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_measure", function () {
      var _this$props = _this.props,
        cache = _this$props.cache,
        _this$props$columnInd = _this$props.columnIndex,
        columnIndex = _this$props$columnInd === void 0 ? 0 : _this$props$columnInd,
        parent = _this$props.parent,
        _this$props$rowIndex = _this$props.rowIndex,
        rowIndex = _this$props$rowIndex === void 0 ? _this.props.index || 0 : _this$props$rowIndex;
      var _this$_getCellMeasure = _this._getCellMeasurements(),
        height = _this$_getCellMeasure.height,
        width = _this$_getCellMeasure.width;
      if (height !== cache.getHeight(rowIndex, columnIndex) || width !== cache.getWidth(rowIndex, columnIndex)) {
        cache.set(rowIndex, columnIndex, width, height);
        if (parent && typeof parent.recomputeGridSize === 'function') {
          parent.recomputeGridSize({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_registerChild", function (element) {
      if (element && !(element instanceof Element)) {
        console.warn('CellMeasurer registerChild expects to be passed Element or null');
      }
      _this._child = element;
      if (element) {
        _this._maybeMeasureCell();
      }
    });
    return _this;
  }
  (0,createClass/* default */.Z)(CellMeasurer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._maybeMeasureCell();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._maybeMeasureCell();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return typeof children === 'function' ? children({
        measure: this._measure,
        registerChild: this._registerChild
      }) : children;
    }
  }, {
    key: "_getCellMeasurements",
    value: function _getCellMeasurements() {
      var cache = this.props.cache;
      var node = this._child || (0,react_dom.findDOMNode)(this); // TODO Check for a bad combination of fixedWidth and missing numeric width or vice versa with height

      if (node && node.ownerDocument && node.ownerDocument.defaultView && node instanceof node.ownerDocument.defaultView.HTMLElement) {
        var styleWidth = node.style.width;
        var styleHeight = node.style.height; // If we are re-measuring a cell that has already been measured,
        // It will have a hard-coded width/height from the previous measurement.
        // The fact that we are measuring indicates this measurement is probably stale,
        // So explicitly clear it out (eg set to "auto") so we can recalculate.
        // See issue #593 for more info.
        // Even if we are measuring initially- if we're inside of a MultiGrid component,
        // Explicitly clear width/height before measuring to avoid being tainted by another Grid.
        // eg top/left Grid renders before bottom/right Grid
        // Since the CellMeasurerCache is shared between them this taints derived cell size values.

        if (!cache.hasFixedWidth()) {
          node.style.width = 'auto';
        }
        if (!cache.hasFixedHeight()) {
          node.style.height = 'auto';
        }
        var height = Math.ceil(node.offsetHeight);
        var width = Math.ceil(node.offsetWidth); // Reset after measuring to avoid breaking styles; see #660

        if (styleWidth) {
          node.style.width = styleWidth;
        }
        if (styleHeight) {
          node.style.height = styleHeight;
        }
        return {
          height: height,
          width: width
        };
      } else {
        return {
          height: 0,
          width: 0
        };
      }
    }
  }, {
    key: "_maybeMeasureCell",
    value: function _maybeMeasureCell() {
      var _this$props2 = this.props,
        cache = _this$props2.cache,
        _this$props2$columnIn = _this$props2.columnIndex,
        columnIndex = _this$props2$columnIn === void 0 ? 0 : _this$props2$columnIn,
        parent = _this$props2.parent,
        _this$props2$rowIndex = _this$props2.rowIndex,
        rowIndex = _this$props2$rowIndex === void 0 ? this.props.index || 0 : _this$props2$rowIndex;
      if (!cache.has(rowIndex, columnIndex)) {
        var _this$_getCellMeasure2 = this._getCellMeasurements(),
          height = _this$_getCellMeasure2.height,
          width = _this$_getCellMeasure2.width;
        cache.set(rowIndex, columnIndex, width, height); // If size has changed, let Grid know to re-render.

        if (parent && typeof parent.invalidateCellSizeAfterRender === 'function') {
          parent.invalidateCellSizeAfterRender({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    }
  }]);
  return CellMeasurer;
}(react.PureComponent), (0,defineProperty/* default */.Z)(CellMeasurer_class, "propTypes",  true ? null : 0), CellMeasurer_temp); // Used for DEV mode warning check

(0,defineProperty/* default */.Z)(CellMeasurer_CellMeasurer, "__internalCellMeasurerFlag", false);

if (false) {}


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/CellMeasurer/CellMeasurerCache.js



var DEFAULT_HEIGHT = 30;
var DEFAULT_WIDTH = 100; // Enables more intelligent mapping of a given column and row index to an item ID.
// This prevents a cell cache from being invalidated when its parent collection is modified.

/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCache = /*#__PURE__*/
(/* unused pure expression or super */ null && (function () {
  function CellMeasurerCache() {
    var _this = this;
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, CellMeasurerCache);
    _defineProperty(this, "_cellHeightCache", {});
    _defineProperty(this, "_cellWidthCache", {});
    _defineProperty(this, "_columnWidthCache", {});
    _defineProperty(this, "_rowHeightCache", {});
    _defineProperty(this, "_defaultHeight", void 0);
    _defineProperty(this, "_defaultWidth", void 0);
    _defineProperty(this, "_minHeight", void 0);
    _defineProperty(this, "_minWidth", void 0);
    _defineProperty(this, "_keyMapper", void 0);
    _defineProperty(this, "_hasFixedHeight", void 0);
    _defineProperty(this, "_hasFixedWidth", void 0);
    _defineProperty(this, "_columnCount", 0);
    _defineProperty(this, "_rowCount", 0);
    _defineProperty(this, "columnWidth", function (_ref) {
      var index = _ref.index;
      var key = _this._keyMapper(0, index);
      return _this._columnWidthCache[key] !== undefined ? _this._columnWidthCache[key] : _this._defaultWidth;
    });
    _defineProperty(this, "rowHeight", function (_ref2) {
      var index = _ref2.index;
      var key = _this._keyMapper(index, 0);
      return _this._rowHeightCache[key] !== undefined ? _this._rowHeightCache[key] : _this._defaultHeight;
    });
    var defaultHeight = params.defaultHeight,
      defaultWidth = params.defaultWidth,
      fixedHeight = params.fixedHeight,
      fixedWidth = params.fixedWidth,
      keyMapper = params.keyMapper,
      minHeight = params.minHeight,
      minWidth = params.minWidth;
    this._hasFixedHeight = fixedHeight === true;
    this._hasFixedWidth = fixedWidth === true;
    this._minHeight = minHeight || 0;
    this._minWidth = minWidth || 0;
    this._keyMapper = keyMapper || defaultKeyMapper;
    this._defaultHeight = Math.max(this._minHeight, typeof defaultHeight === 'number' ? defaultHeight : DEFAULT_HEIGHT);
    this._defaultWidth = Math.max(this._minWidth, typeof defaultWidth === 'number' ? defaultWidth : DEFAULT_WIDTH);
    if (false) {}
  }
  _createClass(CellMeasurerCache, [{
    key: "clear",
    value: function clear(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var key = this._keyMapper(rowIndex, columnIndex);
      delete this._cellHeightCache[key];
      delete this._cellWidthCache[key];
      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._cellHeightCache = {};
      this._cellWidthCache = {};
      this._columnWidthCache = {};
      this._rowHeightCache = {};
      this._rowCount = 0;
      this._columnCount = 0;
    }
  }, {
    key: "hasFixedHeight",
    value: function hasFixedHeight() {
      return this._hasFixedHeight;
    }
  }, {
    key: "hasFixedWidth",
    value: function hasFixedWidth() {
      return this._hasFixedWidth;
    }
  }, {
    key: "getHeight",
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (this._hasFixedHeight) {
        return this._defaultHeight;
      } else {
        var _key = this._keyMapper(rowIndex, columnIndex);
        return this._cellHeightCache[_key] !== undefined ? Math.max(this._minHeight, this._cellHeightCache[_key]) : this._defaultHeight;
      }
    }
  }, {
    key: "getWidth",
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (this._hasFixedWidth) {
        return this._defaultWidth;
      } else {
        var _key2 = this._keyMapper(rowIndex, columnIndex);
        return this._cellWidthCache[_key2] !== undefined ? Math.max(this._minWidth, this._cellWidthCache[_key2]) : this._defaultWidth;
      }
    }
  }, {
    key: "has",
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var key = this._keyMapper(rowIndex, columnIndex);
      return this._cellHeightCache[key] !== undefined;
    }
  }, {
    key: "set",
    value: function set(rowIndex, columnIndex, width, height) {
      var key = this._keyMapper(rowIndex, columnIndex);
      if (columnIndex >= this._columnCount) {
        this._columnCount = columnIndex + 1;
      }
      if (rowIndex >= this._rowCount) {
        this._rowCount = rowIndex + 1;
      } // Size is cached per cell so we don't have to re-measure if cells are re-ordered.

      this._cellHeightCache[key] = height;
      this._cellWidthCache[key] = width;
      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: "_updateCachedColumnAndRowSizes",
    value: function _updateCachedColumnAndRowSizes(rowIndex, columnIndex) {
      // :columnWidth and :rowHeight are derived based on all cells in a column/row.
      // Pre-cache these derived values for faster lookup later.
      // Reads are expected to occur more frequently than writes in this case.
      // Only update non-fixed dimensions though to avoid doing unnecessary work.
      if (!this._hasFixedWidth) {
        var columnWidth = 0;
        for (var i = 0; i < this._rowCount; i++) {
          columnWidth = Math.max(columnWidth, this.getWidth(i, columnIndex));
        }
        var columnKey = this._keyMapper(0, columnIndex);
        this._columnWidthCache[columnKey] = columnWidth;
      }
      if (!this._hasFixedHeight) {
        var rowHeight = 0;
        for (var _i = 0; _i < this._columnCount; _i++) {
          rowHeight = Math.max(rowHeight, this.getHeight(rowIndex, _i));
        }
        var rowKey = this._keyMapper(rowIndex, 0);
        this._rowHeightCache[rowKey] = rowHeight;
      }
    }
  }, {
    key: "defaultHeight",
    get: function get() {
      return this._defaultHeight;
    }
  }, {
    key: "defaultWidth",
    get: function get() {
      return this._defaultWidth;
    }
  }]);
  return CellMeasurerCache;
}()));

function defaultKeyMapper(rowIndex, columnIndex) {
  return "".concat(rowIndex, "-").concat(columnIndex);
}

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/CellMeasurer/index.js


/* harmony default export */ var es_CellMeasurer = ((/* unused pure expression or super */ null && (CellMeasurer)));

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Collection/CollectionView.js







function CollectionView_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function CollectionView_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      CollectionView_ownKeys(source, true).forEach(function (key) {
        (0,defineProperty/* default */.Z)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      CollectionView_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}





 // @TODO Merge Collection and CollectionView

/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */

var IS_SCROLLING_TIMEOUT = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */

var CollectionView_SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};
/**
 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
 */

var CollectionView = /*#__PURE__*/
function (_React$PureComponent) {
  (0,inherits/* default */.Z)(CollectionView, _React$PureComponent);

  // Invokes callbacks only when their values have changed.
  function CollectionView() {
    var _getPrototypeOf2;
    var _this;
    (0,classCallCheck/* default */.Z)(this, CollectionView);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (_getPrototypeOf2 = (0,getPrototypeOf/* default */.Z)(CollectionView)).call.apply(_getPrototypeOf2, [this].concat(args))); // If this component is being rendered server-side, getScrollbarSize() will return undefined.
    // We handle this case in componentDidMount()

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_calculateSizeAndPositionDataOnNextUpdate", false);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onSectionRenderedMemoizer", createCallbackMemoizer());
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onScrollMemoizer", createCallbackMemoizer(false));
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_invokeOnSectionRenderedHelper", function () {
      var _this$props = _this.props,
        cellLayoutManager = _this$props.cellLayoutManager,
        onSectionRendered = _this$props.onSectionRendered;
      _this._onSectionRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          indices: cellLayoutManager.getLastRenderedIndices()
        }
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_setScrollingContainerRef", function (ref) {
      _this._scrollingContainer = ref;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_updateScrollPositionForScrollToCell", function () {
      var _this$props2 = _this.props,
        cellLayoutManager = _this$props2.cellLayoutManager,
        height = _this$props2.height,
        scrollToAlignment = _this$props2.scrollToAlignment,
        scrollToCell = _this$props2.scrollToCell,
        width = _this$props2.width;
      var _this$state = _this.state,
        scrollLeft = _this$state.scrollLeft,
        scrollTop = _this$state.scrollTop;
      if (scrollToCell >= 0) {
        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
          align: scrollToAlignment,
          cellIndex: scrollToCell,
          height: height,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          width: width
        });
        if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) {
          _this._setScrollPosition(scrollPosition);
        }
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onScroll", function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target !== _this._scrollingContainer) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll

      _this._enablePointerEventsAfterDelay(); // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.

      var _this$props3 = _this.props,
        cellLayoutManager = _this$props3.cellLayoutManager,
        height = _this$props3.height,
        isScrollingChange = _this$props3.isScrollingChange,
        width = _this$props3.width;
      var scrollbarSize = _this._scrollbarSize;
      var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(),
        totalHeight = _cellLayoutManager$ge.height,
        totalWidth = _cellLayoutManager$ge.width;
      var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
      var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop)); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.

      if (_this.state.scrollLeft !== scrollLeft || _this.state.scrollTop !== scrollTop) {
        // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
        // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
        // All things considered, this seems to be the best current work around that I'm aware of.
        // For more information see https://github.com/bvaughn/react-virtualized/pull/124
        var scrollPositionChangeReason = event.cancelable ? CollectionView_SCROLL_POSITION_CHANGE_REASONS.OBSERVED : CollectionView_SCROLL_POSITION_CHANGE_REASONS.REQUESTED; // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)

        if (!_this.state.isScrolling) {
          isScrollingChange(true);
        }
        _this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollPositionChangeReason: scrollPositionChangeReason,
          scrollTop: scrollTop
        });
      }
      _this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalWidth: totalWidth,
        totalHeight: totalHeight
      });
    });
    _this._scrollbarSize = scrollbarSize();
    if (_this._scrollbarSize === undefined) {
      _this._scrollbarSizeMeasured = false;
      _this._scrollbarSize = 0;
    } else {
      _this._scrollbarSizeMeasured = true;
    }
    return _this;
  }
  /**
   * Forced recompute of cell sizes and positions.
   * This function should be called if cell sizes have changed but nothing else has.
   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
   */

  (0,createClass/* default */.Z)(CollectionView, [{
    key: "recomputeCellSizesAndPositions",
    value: function recomputeCellSizesAndPositions() {
      this._calculateSizeAndPositionDataOnNextUpdate = true;
      this.forceUpdate();
    }
    /* ---------------------------- Component lifecycle methods ---------------------------- */

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
        cellLayoutManager = _this$props4.cellLayoutManager,
        scrollLeft = _this$props4.scrollLeft,
        scrollToCell = _this$props4.scrollToCell,
        scrollTop = _this$props4.scrollTop; // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.

      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = scrollbarSize();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }
      if (scrollToCell >= 0) {
        this._updateScrollPositionForScrollToCell();
      } else if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
      } // Update onSectionRendered callback.

      this._invokeOnSectionRenderedHelper();
      var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(),
        totalHeight = _cellLayoutManager$ge2.height,
        totalWidth = _cellLayoutManager$ge2.width; // Initialize onScroll callback.

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalHeight: totalHeight,
        totalWidth: totalWidth
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props5 = this.props,
        height = _this$props5.height,
        scrollToAlignment = _this$props5.scrollToAlignment,
        scrollToCell = _this$props5.scrollToCell,
        width = _this$props5.width;
      var _this$state2 = this.state,
        scrollLeft = _this$state2.scrollLeft,
        scrollPositionChangeReason = _this$state2.scrollPositionChangeReason,
        scrollTop = _this$state2.scrollTop; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === CollectionView_SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }
        if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      } // Update scroll offsets if the current :scrollToCell values requires it

      if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) {
        this._updateScrollPositionForScrollToCell();
      } // Update onRowsRendered callback if start/stop indices have changed

      this._invokeOnSectionRenderedHelper();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        autoHeight = _this$props6.autoHeight,
        cellCount = _this$props6.cellCount,
        cellLayoutManager = _this$props6.cellLayoutManager,
        className = _this$props6.className,
        height = _this$props6.height,
        horizontalOverscanSize = _this$props6.horizontalOverscanSize,
        id = _this$props6.id,
        noContentRenderer = _this$props6.noContentRenderer,
        style = _this$props6.style,
        verticalOverscanSize = _this$props6.verticalOverscanSize,
        width = _this$props6.width;
      var _this$state3 = this.state,
        isScrolling = _this$state3.isScrolling,
        scrollLeft = _this$state3.scrollLeft,
        scrollTop = _this$state3.scrollTop; // Memoization reset

      if (this._lastRenderedCellCount !== cellCount || this._lastRenderedCellLayoutManager !== cellLayoutManager || this._calculateSizeAndPositionDataOnNextUpdate) {
        this._lastRenderedCellCount = cellCount;
        this._lastRenderedCellLayoutManager = cellLayoutManager;
        this._calculateSizeAndPositionDataOnNextUpdate = false;
        cellLayoutManager.calculateSizeAndPositionData();
      }
      var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(),
        totalHeight = _cellLayoutManager$ge3.height,
        totalWidth = _cellLayoutManager$ge3.width; // Safely expand the rendered area by the specified overscan amount

      var left = Math.max(0, scrollLeft - horizontalOverscanSize);
      var top = Math.max(0, scrollTop - verticalOverscanSize);
      var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
      var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);
      var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
        height: bottom - top,
        isScrolling: isScrolling,
        width: right - left,
        x: left,
        y: top
      }) : [];
      var collectionStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        WebkitOverflowScrolling: 'touch',
        width: width,
        willChange: 'transform'
      }; // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116

      var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0; // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23

      collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
      return react.createElement("div", {
        ref: this._setScrollingContainerRef,
        "aria-label": this.props['aria-label'],
        className: clsx_m('ReactVirtualized__Collection', className),
        id: id,
        onScroll: this._onScroll,
        role: "grid",
        style: CollectionView_objectSpread({}, collectionStyle, {}, style),
        tabIndex: 0
      }, cellCount > 0 && react.createElement("div", {
        className: "ReactVirtualized__Collection__innerScrollContainer",
        style: {
          height: totalHeight,
          maxHeight: totalHeight,
          maxWidth: totalWidth,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          width: totalWidth
        }
      }, childrenToDisplay), cellCount === 0 && noContentRenderer());
    }
    /* ---------------------------- Helper methods ---------------------------- */

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Collection.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */
  }, {
    key: "_enablePointerEventsAfterDelay",
    value: function _enablePointerEventsAfterDelay() {
      var _this2 = this;
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
      this._disablePointerEventsTimeoutId = setTimeout(function () {
        var isScrollingChange = _this2.props.isScrollingChange;
        isScrollingChange(false);
        _this2._disablePointerEventsTimeoutId = null;
        _this2.setState({
          isScrolling: false
        });
      }, IS_SCROLLING_TIMEOUT);
    }
  }, {
    key: "_invokeOnScrollMemoizer",
    value: function _invokeOnScrollMemoizer(_ref) {
      var _this3 = this;
      var scrollLeft = _ref.scrollLeft,
        scrollTop = _ref.scrollTop,
        totalHeight = _ref.totalHeight,
        totalWidth = _ref.totalWidth;
      this._onScrollMemoizer({
        callback: function callback(_ref2) {
          var scrollLeft = _ref2.scrollLeft,
            scrollTop = _ref2.scrollTop;
          var _this3$props = _this3.props,
            height = _this3$props.height,
            onScroll = _this3$props.onScroll,
            width = _this3$props.width;
          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: "_setScrollPosition",
    value: function _setScrollPosition(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
        scrollTop = _ref3.scrollTop;
      var newState = {
        scrollPositionChangeReason: CollectionView_SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };
      if (scrollLeft >= 0) {
        newState.scrollLeft = scrollLeft;
      }
      if (scrollTop >= 0) {
        newState.scrollTop = scrollTop;
      }
      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.cellCount === 0 && (prevState.scrollLeft !== 0 || prevState.scrollTop !== 0)) {
        return {
          scrollLeft: 0,
          scrollTop: 0,
          scrollPositionChangeReason: CollectionView_SCROLL_POSITION_CHANGE_REASONS.REQUESTED
        };
      } else if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null ? nextProps.scrollTop : prevState.scrollTop,
          scrollPositionChangeReason: CollectionView_SCROLL_POSITION_CHANGE_REASONS.REQUESTED
        };
      }
      return null;
    }
  }]);
  return CollectionView;
}(react.PureComponent);
(0,defineProperty/* default */.Z)(CollectionView, "defaultProps", {
  'aria-label': 'grid',
  horizontalOverscanSize: 0,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  onSectionRendered: function onSectionRendered() {
    return null;
  },
  scrollToAlignment: 'auto',
  scrollToCell: -1,
  style: {},
  verticalOverscanSize: 0
});
CollectionView.propTypes =  false ? 0 : {};
polyfill(CollectionView);
/* harmony default export */ var Collection_CollectionView = (CollectionView);
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Collection/types.js
var bpfrpt_proptype_Index =  true ? null : 0;
var bpfrpt_proptype_PositionInfo =  true ? null : 0;
var bpfrpt_proptype_ScrollPosition =  true ? null : 0;
var bpfrpt_proptype_SizeAndPositionInfo =  true ? null : 0;
var bpfrpt_proptype_SizeInfo =  true ? null : 0;






;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Collection/Section.js



/**
 * A section of the Window.
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * Sections have a fixed size and contain 0 to many cells (tracked by their indices).
 */
var Section = /*#__PURE__*/
function () {
  function Section(_ref) {
    var height = _ref.height,
      width = _ref.width,
      x = _ref.x,
      y = _ref.y;
    (0,classCallCheck/* default */.Z)(this, Section);
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this._indexMap = {};
    this._indices = [];
  }
  /** Add a cell to this section. */

  (0,createClass/* default */.Z)(Section, [{
    key: "addCellIndex",
    value: function addCellIndex(_ref2) {
      var index = _ref2.index;
      if (!this._indexMap[index]) {
        this._indexMap[index] = true;
        this._indices.push(index);
      }
    }
    /** Get all cell indices that have been added to this section. */
  }, {
    key: "getCellIndices",
    value: function getCellIndices() {
      return this._indices;
    }
    /** Intended for debugger/test purposes only */
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.x, ",").concat(this.y, " ").concat(this.width, "x").concat(this.height);
    }
  }]);
  return Section;
}();



;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Collection/SectionManager.js



/**
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * 
 */

var SECTION_SIZE = 100;

/**
 * Contains 0 to many Sections.
 * Grows (and adds Sections) dynamically as cells are registered.
 * Automatically adds cells to the appropriate Section(s).
 */
var SectionManager = /*#__PURE__*/
function () {
  function SectionManager() {
    var sectionSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SECTION_SIZE;
    (0,classCallCheck/* default */.Z)(this, SectionManager);
    this._sectionSize = sectionSize;
    this._cellMetadata = [];
    this._sections = {};
  }
  /**
   * Gets all cell indices contained in the specified region.
   * A region may encompass 1 or more Sections.
   */

  (0,createClass/* default */.Z)(SectionManager, [{
    key: "getCellIndices",
    value: function getCellIndices(_ref) {
      var height = _ref.height,
        width = _ref.width,
        x = _ref.x,
        y = _ref.y;
      var indices = {};
      this.getSections({
        height: height,
        width: width,
        x: x,
        y: y
      }).forEach(function (section) {
        return section.getCellIndices().forEach(function (index) {
          indices[index] = index;
        });
      }); // Object keys are strings; this function returns numbers

      return Object.keys(indices).map(function (index) {
        return indices[index];
      });
    }
    /** Get size and position information for the cell specified. */
  }, {
    key: "getCellMetadata",
    value: function getCellMetadata(_ref2) {
      var index = _ref2.index;
      return this._cellMetadata[index];
    }
    /** Get all Sections overlapping the specified region. */
  }, {
    key: "getSections",
    value: function getSections(_ref3) {
      var height = _ref3.height,
        width = _ref3.width,
        x = _ref3.x,
        y = _ref3.y;
      var sectionXStart = Math.floor(x / this._sectionSize);
      var sectionXStop = Math.floor((x + width - 1) / this._sectionSize);
      var sectionYStart = Math.floor(y / this._sectionSize);
      var sectionYStop = Math.floor((y + height - 1) / this._sectionSize);
      var sections = [];
      for (var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) {
        for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
          var key = "".concat(sectionX, ".").concat(sectionY);
          if (!this._sections[key]) {
            this._sections[key] = new Section({
              height: this._sectionSize,
              width: this._sectionSize,
              x: sectionX * this._sectionSize,
              y: sectionY * this._sectionSize
            });
          }
          sections.push(this._sections[key]);
        }
      }
      return sections;
    }
    /** Total number of Sections based on the currently registered cells. */
  }, {
    key: "getTotalSectionCount",
    value: function getTotalSectionCount() {
      return Object.keys(this._sections).length;
    }
    /** Intended for debugger/test purposes only */
  }, {
    key: "toString",
    value: function toString() {
      var _this = this;
      return Object.keys(this._sections).map(function (index) {
        return _this._sections[index].toString();
      });
    }
    /** Adds a cell to the appropriate Sections and registers it metadata for later retrievable. */
  }, {
    key: "registerCell",
    value: function registerCell(_ref4) {
      var cellMetadatum = _ref4.cellMetadatum,
        index = _ref4.index;
      this._cellMetadata[index] = cellMetadatum;
      this.getSections(cellMetadatum).forEach(function (section) {
        return section.addCellIndex({
          index: index
        });
      });
    }
  }]);
  return SectionManager;
}();



;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Collection/utils/calculateSizeAndPositionData.js

function calculateSizeAndPositionData_calculateSizeAndPositionData(_ref) {
  var cellCount = _ref.cellCount,
    cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter,
    sectionSize = _ref.sectionSize;
  var cellMetadata = [];
  var sectionManager = new SectionManager(sectionSize);
  var height = 0;
  var width = 0;
  for (var index = 0; index < cellCount; index++) {
    var cellMetadatum = cellSizeAndPositionGetter({
      index: index
    });
    if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) {
      throw Error("Invalid metadata returned for cell ".concat(index, ":\n        x:").concat(cellMetadatum.x, ", y:").concat(cellMetadatum.y, ", width:").concat(cellMetadatum.width, ", height:").concat(cellMetadatum.height));
    }
    height = Math.max(height, cellMetadatum.y + cellMetadatum.height);
    width = Math.max(width, cellMetadatum.x + cellMetadatum.width);
    cellMetadata[index] = cellMetadatum;
    sectionManager.registerCell({
      cellMetadatum: cellMetadatum,
      index: index
    });
  }
  return {
    cellMetadata: cellMetadata,
    height: height,
    sectionManager: sectionManager,
    width: width
  };
}
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/utils/getUpdatedOffsetForIndex.js
/**
 * Determines a new offset that ensures a certain cell is visible, given the current offset.
 * If the cell is already visible then the current offset will be returned.
 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
 *
 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
 * @param cellOffset Offset (x or y) position for cell
 * @param cellSize Size (width or height) of cell
 * @param containerSize Total size (width or height) of the container
 * @param currentOffset Container's current (x or y) offset
 * @return Offset to use to ensure the specified cell is visible
 */
function getUpdatedOffsetForIndex(_ref) {
  var _ref$align = _ref.align,
    align = _ref$align === void 0 ? 'auto' : _ref$align,
    cellOffset = _ref.cellOffset,
    cellSize = _ref.cellSize,
    containerSize = _ref.containerSize,
    currentOffset = _ref.currentOffset;
  var maxOffset = cellOffset;
  var minOffset = maxOffset - containerSize + cellSize;
  switch (align) {
    case 'start':
      return maxOffset;
    case 'end':
      return minOffset;
    case 'center':
      return maxOffset - (containerSize - cellSize) / 2;
    default:
      return Math.max(minOffset, Math.min(maxOffset, currentOffset));
  }
}
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Collection/Collection.js














/**
 * Renders scattered or non-linear data.
 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
 */
var Collection_Collection = /*#__PURE__*/
function (_React$PureComponent) {
  (0,inherits/* default */.Z)(Collection, _React$PureComponent);
  function Collection(props, context) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, Collection);
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (0,getPrototypeOf/* default */.Z)(Collection).call(this, props, context));
    _this._cellMetadata = [];
    _this._lastRenderedCellIndices = []; // Cell cache during scroll (for performance)

    _this._cellCache = [];
    _this._isScrollingChange = _this._isScrollingChange.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this._setCollectionViewRef = _this._setCollectionViewRef.bind((0,assertThisInitialized/* default */.Z)(_this));
    return _this;
  }
  (0,createClass/* default */.Z)(Collection, [{
    key: "forceUpdate",
    value: function forceUpdate() {
      if (this._collectionView !== undefined) {
        this._collectionView.forceUpdate();
      }
    }
    /** See Collection#recomputeCellSizesAndPositions */
  }, {
    key: "recomputeCellSizesAndPositions",
    value: function recomputeCellSizesAndPositions() {
      this._cellCache = [];
      this._collectionView.recomputeCellSizesAndPositions();
    }
    /** React lifecycle methods */
  }, {
    key: "render",
    value: function render() {
      var props = (0,esm_extends/* default */.Z)({}, this.props);
      return react.createElement(Collection_CollectionView, (0,esm_extends/* default */.Z)({
        cellLayoutManager: this,
        isScrollingChange: this._isScrollingChange,
        ref: this._setCollectionViewRef
      }, props));
    }
    /** CellLayoutManager interface */
  }, {
    key: "calculateSizeAndPositionData",
    value: function calculateSizeAndPositionData() {
      var _this$props = this.props,
        cellCount = _this$props.cellCount,
        cellSizeAndPositionGetter = _this$props.cellSizeAndPositionGetter,
        sectionSize = _this$props.sectionSize;
      var data = calculateSizeAndPositionData_calculateSizeAndPositionData({
        cellCount: cellCount,
        cellSizeAndPositionGetter: cellSizeAndPositionGetter,
        sectionSize: sectionSize
      });
      this._cellMetadata = data.cellMetadata;
      this._sectionManager = data.sectionManager;
      this._height = data.height;
      this._width = data.width;
    }
    /**
     * Returns the most recently rendered set of cell indices.
     */
  }, {
    key: "getLastRenderedIndices",
    value: function getLastRenderedIndices() {
      return this._lastRenderedCellIndices;
    }
    /**
     * Calculates the minimum amount of change from the current scroll position to ensure the specified cell is (fully) visible.
     */
  }, {
    key: "getScrollPositionForCell",
    value: function getScrollPositionForCell(_ref) {
      var align = _ref.align,
        cellIndex = _ref.cellIndex,
        height = _ref.height,
        scrollLeft = _ref.scrollLeft,
        scrollTop = _ref.scrollTop,
        width = _ref.width;
      var cellCount = this.props.cellCount;
      if (cellIndex >= 0 && cellIndex < cellCount) {
        var cellMetadata = this._cellMetadata[cellIndex];
        scrollLeft = getUpdatedOffsetForIndex({
          align: align,
          cellOffset: cellMetadata.x,
          cellSize: cellMetadata.width,
          containerSize: width,
          currentOffset: scrollLeft,
          targetIndex: cellIndex
        });
        scrollTop = getUpdatedOffsetForIndex({
          align: align,
          cellOffset: cellMetadata.y,
          cellSize: cellMetadata.height,
          containerSize: height,
          currentOffset: scrollTop,
          targetIndex: cellIndex
        });
      }
      return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      };
    }
  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      return {
        height: this._height,
        width: this._width
      };
    }
  }, {
    key: "cellRenderers",
    value: function cellRenderers(_ref2) {
      var _this2 = this;
      var height = _ref2.height,
        isScrolling = _ref2.isScrolling,
        width = _ref2.width,
        x = _ref2.x,
        y = _ref2.y;
      var _this$props2 = this.props,
        cellGroupRenderer = _this$props2.cellGroupRenderer,
        cellRenderer = _this$props2.cellRenderer; // Store for later calls to getLastRenderedIndices()

      this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
        height: height,
        width: width,
        x: x,
        y: y
      });
      return cellGroupRenderer({
        cellCache: this._cellCache,
        cellRenderer: cellRenderer,
        cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref3) {
          var index = _ref3.index;
          return _this2._sectionManager.getCellMetadata({
            index: index
          });
        },
        indices: this._lastRenderedCellIndices,
        isScrolling: isScrolling
      });
    }
  }, {
    key: "_isScrollingChange",
    value: function _isScrollingChange(isScrolling) {
      if (!isScrolling) {
        this._cellCache = [];
      }
    }
  }, {
    key: "_setCollectionViewRef",
    value: function _setCollectionViewRef(ref) {
      this._collectionView = ref;
    }
  }]);
  return Collection;
}(react.PureComponent);
(0,defineProperty/* default */.Z)(Collection_Collection, "defaultProps", {
  'aria-label': 'grid',
  cellGroupRenderer: defaultCellGroupRenderer
});

Collection_Collection.propTypes =  false ? 0 : {};
function defaultCellGroupRenderer(_ref4) {
  var cellCache = _ref4.cellCache,
    cellRenderer = _ref4.cellRenderer,
    cellSizeAndPositionGetter = _ref4.cellSizeAndPositionGetter,
    indices = _ref4.indices,
    isScrolling = _ref4.isScrolling;
  return indices.map(function (index) {
    var cellMetadata = cellSizeAndPositionGetter({
      index: index
    });
    var cellRendererProps = {
      index: index,
      isScrolling: isScrolling,
      key: index,
      style: {
        height: cellMetadata.height,
        left: cellMetadata.x,
        position: 'absolute',
        top: cellMetadata.y,
        width: cellMetadata.width
      }
    }; // Avoid re-creating cells while scrolling.
    // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
    // If a scroll is in progress- cache and reuse cells.
    // This cache will be thrown away once scrolling complets.

    if (isScrolling) {
      if (!(index in cellCache)) {
        cellCache[index] = cellRenderer(cellRendererProps);
      }
      return cellCache[index];
    } else {
      return cellRenderer(cellRendererProps);
    }
  }).filter(function (renderedCell) {
    return !!renderedCell;
  });
}


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Collection/index.js

/* harmony default export */ var es_Collection = ((/* unused pure expression or super */ null && (Collection)));

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/ColumnSizer/ColumnSizer.js








/**
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */

var ColumnSizer_ColumnSizer = /*#__PURE__*/
function (_React$PureComponent) {
  (0,inherits/* default */.Z)(ColumnSizer, _React$PureComponent);
  function ColumnSizer(props, context) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, ColumnSizer);
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (0,getPrototypeOf/* default */.Z)(ColumnSizer).call(this, props, context));
    _this._registerChild = _this._registerChild.bind((0,assertThisInitialized/* default */.Z)(_this));
    return _this;
  }
  (0,createClass/* default */.Z)(ColumnSizer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
        columnMaxWidth = _this$props.columnMaxWidth,
        columnMinWidth = _this$props.columnMinWidth,
        columnCount = _this$props.columnCount,
        width = _this$props.width;
      if (columnMaxWidth !== prevProps.columnMaxWidth || columnMinWidth !== prevProps.columnMinWidth || columnCount !== prevProps.columnCount || width !== prevProps.width) {
        if (this._registeredChild) {
          this._registeredChild.recomputeGridSize();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        children = _this$props2.children,
        columnMaxWidth = _this$props2.columnMaxWidth,
        columnMinWidth = _this$props2.columnMinWidth,
        columnCount = _this$props2.columnCount,
        width = _this$props2.width;
      var safeColumnMinWidth = columnMinWidth || 1;
      var safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width;
      var columnWidth = width / columnCount;
      columnWidth = Math.max(safeColumnMinWidth, columnWidth);
      columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
      columnWidth = Math.floor(columnWidth);
      var adjustedWidth = Math.min(width, columnWidth * columnCount);
      return children({
        adjustedWidth: adjustedWidth,
        columnWidth: columnWidth,
        getColumnWidth: function getColumnWidth() {
          return columnWidth;
        },
        registerChild: this._registerChild
      });
    }
  }, {
    key: "_registerChild",
    value: function _registerChild(child) {
      if (child && typeof child.recomputeGridSize !== 'function') {
        throw Error('Unexpected child type registered; only Grid/MultiGrid children are supported.');
      }
      this._registeredChild = child;
      if (this._registeredChild) {
        this._registeredChild.recomputeGridSize();
      }
    }
  }]);
  return ColumnSizer;
}(react.PureComponent);

ColumnSizer_ColumnSizer.propTypes =  false ? 0 : {};
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/ColumnSizer/index.js

/* harmony default export */ var es_ColumnSizer = ((/* unused pure expression or super */ null && (ColumnSizer)));

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(93433);
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/InfiniteLoader/InfiniteLoader.js











/**
 * Higher-order component that manages lazy-loading for "infinite" data.
 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
 */

var InfiniteLoader_InfiniteLoader = /*#__PURE__*/
function (_React$PureComponent) {
  (0,inherits/* default */.Z)(InfiniteLoader, _React$PureComponent);
  function InfiniteLoader(props, context) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, InfiniteLoader);
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (0,getPrototypeOf/* default */.Z)(InfiniteLoader).call(this, props, context));
    _this._loadMoreRowsMemoizer = createCallbackMemoizer();
    _this._onRowsRendered = _this._onRowsRendered.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this._registerChild = _this._registerChild.bind((0,assertThisInitialized/* default */.Z)(_this));
    return _this;
  }
  (0,createClass/* default */.Z)(InfiniteLoader, [{
    key: "resetLoadMoreRowsCache",
    value: function resetLoadMoreRowsCache(autoReload) {
      this._loadMoreRowsMemoizer = createCallbackMemoizer();
      if (autoReload) {
        this._doStuff(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        onRowsRendered: this._onRowsRendered,
        registerChild: this._registerChild
      });
    }
  }, {
    key: "_loadUnloadedRanges",
    value: function _loadUnloadedRanges(unloadedRanges) {
      var _this2 = this;
      var loadMoreRows = this.props.loadMoreRows;
      unloadedRanges.forEach(function (unloadedRange) {
        var promise = loadMoreRows(unloadedRange);
        if (promise) {
          promise.then(function () {
            // Refresh the visible rows if any of them have just been loaded.
            // Otherwise they will remain in their unloaded visual state.
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: unloadedRange.startIndex,
              stopIndex: unloadedRange.stopIndex
            })) {
              if (_this2._registeredChild) {
                forceUpdateReactVirtualizedComponent(_this2._registeredChild, _this2._lastRenderedStartIndex);
              }
            }
          });
        }
      });
    }
  }, {
    key: "_onRowsRendered",
    value: function _onRowsRendered(_ref) {
      var startIndex = _ref.startIndex,
        stopIndex = _ref.stopIndex;
      this._lastRenderedStartIndex = startIndex;
      this._lastRenderedStopIndex = stopIndex;
      this._doStuff(startIndex, stopIndex);
    }
  }, {
    key: "_doStuff",
    value: function _doStuff(startIndex, stopIndex) {
      var _ref2,
        _this3 = this;
      var _this$props = this.props,
        isRowLoaded = _this$props.isRowLoaded,
        minimumBatchSize = _this$props.minimumBatchSize,
        rowCount = _this$props.rowCount,
        threshold = _this$props.threshold;
      var unloadedRanges = scanForUnloadedRanges({
        isRowLoaded: isRowLoaded,
        minimumBatchSize: minimumBatchSize,
        rowCount: rowCount,
        startIndex: Math.max(0, startIndex - threshold),
        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
      }); // For memoize comparison

      var squashedUnloadedRanges = (_ref2 = []).concat.apply(_ref2, (0,toConsumableArray/* default */.Z)(unloadedRanges.map(function (_ref3) {
        var startIndex = _ref3.startIndex,
          stopIndex = _ref3.stopIndex;
        return [startIndex, stopIndex];
      })));
      this._loadMoreRowsMemoizer({
        callback: function callback() {
          _this3._loadUnloadedRanges(unloadedRanges);
        },
        indices: {
          squashedUnloadedRanges: squashedUnloadedRanges
        }
      });
    }
  }, {
    key: "_registerChild",
    value: function _registerChild(registeredChild) {
      this._registeredChild = registeredChild;
    }
  }]);
  return InfiniteLoader;
}(react.PureComponent);
/**
 * Determines if the specified start/stop range is visible based on the most recently rendered range.
 */

(0,defineProperty/* default */.Z)(InfiniteLoader_InfiniteLoader, "defaultProps", {
  minimumBatchSize: 10,
  rowCount: 0,
  threshold: 15
});

InfiniteLoader_InfiniteLoader.propTypes =  false ? 0 : {};
function isRangeVisible(_ref4) {
  var lastRenderedStartIndex = _ref4.lastRenderedStartIndex,
    lastRenderedStopIndex = _ref4.lastRenderedStopIndex,
    startIndex = _ref4.startIndex,
    stopIndex = _ref4.stopIndex;
  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}
/**
 * Returns all of the ranges within a larger range that contain unloaded rows.
 */

function scanForUnloadedRanges(_ref5) {
  var isRowLoaded = _ref5.isRowLoaded,
    minimumBatchSize = _ref5.minimumBatchSize,
    rowCount = _ref5.rowCount,
    startIndex = _ref5.startIndex,
    stopIndex = _ref5.stopIndex;
  var unloadedRanges = [];
  var rangeStartIndex = null;
  var rangeStopIndex = null;
  for (var index = startIndex; index <= stopIndex; index++) {
    var loaded = isRowLoaded({
      index: index
    });
    if (!loaded) {
      rangeStopIndex = index;
      if (rangeStartIndex === null) {
        rangeStartIndex = index;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push({
        startIndex: rangeStartIndex,
        stopIndex: rangeStopIndex
      });
      rangeStartIndex = rangeStopIndex = null;
    }
  } // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
  // Scan forward to try filling our :minimumBatchSize.

  if (rangeStopIndex !== null) {
    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);
    for (var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++) {
      if (!isRowLoaded({
        index: _index
      })) {
        rangeStopIndex = _index;
      } else {
        break;
      }
    }
    unloadedRanges.push({
      startIndex: rangeStartIndex,
      stopIndex: rangeStopIndex
    });
  } // Check to see if our first range ended prematurely.
  // In this case we should scan backwards to try filling our :minimumBatchSize.

  if (unloadedRanges.length) {
    var firstUnloadedRange = unloadedRanges[0];
    while (firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0) {
      var _index2 = firstUnloadedRange.startIndex - 1;
      if (!isRowLoaded({
        index: _index2
      })) {
        firstUnloadedRange.startIndex = _index2;
      } else {
        break;
      }
    }
  }
  return unloadedRanges;
}
/**
 * Since RV components use shallowCompare we need to force a render (even though props haven't changed).
 * However InfiniteLoader may wrap a Grid or it may wrap a Table or List.
 * In the first case the built-in React forceUpdate() method is sufficient to force a re-render,
 * But in the latter cases we need to use the RV-specific forceUpdateGrid() method.
 * Else the inner Grid will not be re-rendered and visuals may be stale.
 *
 * Additionally, while a Grid is scrolling the cells can be cached,
 * So it's important to invalidate that cache by recalculating sizes
 * before forcing a rerender.
 */

function forceUpdateReactVirtualizedComponent(component) {
  var currentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var recomputeSize = typeof component.recomputeGridSize === 'function' ? component.recomputeGridSize : component.recomputeRowHeights;
  if (recomputeSize) {
    recomputeSize.call(component, currentIndex);
  } else {
    component.forceUpdate();
  }
}
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/InfiniteLoader/index.js

/* harmony default export */ var es_InfiniteLoader = ((/* unused pure expression or super */ null && (InfiniteLoader)));

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/List/types.js

var bpfrpt_proptype_RowRendererParams =  true ? null : 0;
var bpfrpt_proptype_RowRenderer =  true ? null : 0;
var bpfrpt_proptype_RenderedRows =  true ? null : 0;
var types_bpfrpt_proptype_Scroll =  true ? null : 0;





;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/List/List.js








var List_class, List_temp;



/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */

var List = (List_temp = List_class = /*#__PURE__*/
function (_React$PureComponent) {
  (0,inherits/* default */.Z)(List, _React$PureComponent);
  function List() {
    var _getPrototypeOf2;
    var _this;
    (0,classCallCheck/* default */.Z)(this, List);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (_getPrototypeOf2 = (0,getPrototypeOf/* default */.Z)(List)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "Grid", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_cellRenderer", function (_ref) {
      var parent = _ref.parent,
        rowIndex = _ref.rowIndex,
        style = _ref.style,
        isScrolling = _ref.isScrolling,
        isVisible = _ref.isVisible,
        key = _ref.key;
      var rowRenderer = _this.props.rowRenderer; // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var widthDescriptor = Object.getOwnPropertyDescriptor(style, 'width');
      if (widthDescriptor && widthDescriptor.writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }
      return rowRenderer({
        index: rowIndex,
        style: style,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_setRef", function (ref) {
      _this.Grid = ref;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onScroll", function (_ref2) {
      var clientHeight = _ref2.clientHeight,
        scrollHeight = _ref2.scrollHeight,
        scrollTop = _ref2.scrollTop;
      var onScroll = _this.props.onScroll;
      onScroll({
        clientHeight: clientHeight,
        scrollHeight: scrollHeight,
        scrollTop: scrollTop
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onSectionRendered", function (_ref3) {
      var rowOverscanStartIndex = _ref3.rowOverscanStartIndex,
        rowOverscanStopIndex = _ref3.rowOverscanStopIndex,
        rowStartIndex = _ref3.rowStartIndex,
        rowStopIndex = _ref3.rowStopIndex;
      var onRowsRendered = _this.props.onRowsRendered;
      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    });
    return _this;
  }
  (0,createClass/* default */.Z)(List, [{
    key: "forceUpdateGrid",
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }
    /** See Grid#getOffsetForCell */
  }, {
    key: "getOffsetForRow",
    value: function getOffsetForRow(_ref4) {
      var alignment = _ref4.alignment,
        index = _ref4.index;
      if (this.Grid) {
        var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
            alignment: alignment,
            rowIndex: index,
            columnIndex: 0
          }),
          scrollTop = _this$Grid$getOffsetF.scrollTop;
        return scrollTop;
      }
      return 0;
    }
    /** CellMeasurer compatibility */
  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref5) {
      var columnIndex = _ref5.columnIndex,
        rowIndex = _ref5.rowIndex;
      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#measureAllCells */
  }, {
    key: "measureAllRows",
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }
    /** CellMeasurer compatibility */
  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref6$columnIndex = _ref6.columnIndex,
        columnIndex = _ref6$columnIndex === void 0 ? 0 : _ref6$columnIndex,
        _ref6$rowIndex = _ref6.rowIndex,
        rowIndex = _ref6$rowIndex === void 0 ? 0 : _ref6$rowIndex;
      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#recomputeGridSize */
  }, {
    key: "recomputeRowHeights",
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index,
          columnIndex: 0
        });
      }
    }
    /** See Grid#scrollToPosition */
  }, {
    key: "scrollToPosition",
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (this.Grid) {
        this.Grid.scrollToPosition({
          scrollTop: scrollTop
        });
      }
    }
    /** See Grid#scrollToCell */
  }, {
    key: "scrollToRow",
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        noRowsRenderer = _this$props.noRowsRenderer,
        scrollToIndex = _this$props.scrollToIndex,
        width = _this$props.width;
      var classNames = clsx_m('ReactVirtualized__List', className);
      return react.createElement(Grid_Grid, (0,esm_extends/* default */.Z)({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }]);
  return List;
}(react.PureComponent), (0,defineProperty/* default */.Z)(List_class, "propTypes",  true ? null : 0), List_temp);
(0,defineProperty/* default */.Z)(List, "defaultProps", {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll() {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {},
  overscanIndicesGetter: accessibilityOverscanIndicesGetter_defaultOverscanIndicesGetter,
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
});













;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/List/index.js




// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/vendor/binarySearchBounds.js
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/binary-search-bounds
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/
function _GEA(a, l, h, y) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
      x = a[m];
    if (x >= y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function _GEP(a, l, h, y, c) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
      x = a[m];
    if (c(x, y) >= 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function dispatchBsearchGE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}
function _GTA(a, l, h, y) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
      x = a[m];
    if (x > y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function _GTP(a, l, h, y, c) {
  var i = h + 1;
  while (l <= h) {
    var m = l + h >>> 1,
      x = a[m];
    if (c(x, y) > 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  return i;
}
function dispatchBsearchGT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}
function _LTA(a, l, h, y) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
      x = a[m];
    if (x < y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function _LTP(a, l, h, y, c) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
      x = a[m];
    if (c(x, y) < 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function dispatchBsearchLT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}
function _LEA(a, l, h, y) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
      x = a[m];
    if (x <= y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function _LEP(a, l, h, y, c) {
  var i = l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
      x = a[m];
    if (c(x, y) <= 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return i;
}
function dispatchBsearchLE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}
function _EQA(a, l, h, y) {
  l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
      x = a[m];
    if (x === y) {
      return m;
    } else if (x <= y) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
}
function _EQP(a, l, h, y, c) {
  l - 1;
  while (l <= h) {
    var m = l + h >>> 1,
      x = a[m];
    var p = c(x, y);
    if (p === 0) {
      return m;
    } else if (p <= 0) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }
  return -1;
}
function dispatchBsearchEQ(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _EQP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _EQA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}
/* harmony default export */ var binarySearchBounds = ({
  ge: dispatchBsearchGE,
  gt: dispatchBsearchGT,
  lt: dispatchBsearchLT,
  le: dispatchBsearchLE,
  eq: dispatchBsearchEQ
});
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/vendor/intervalTree.js
/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/interval-tree-1d
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax in an upstream dependency.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/

var NOT_FOUND = 0;
var SUCCESS = 1;
var EMPTY = 2;
function IntervalTreeNode(mid, left, right, leftPoints, rightPoints) {
  this.mid = mid;
  this.left = left;
  this.right = right;
  this.leftPoints = leftPoints;
  this.rightPoints = rightPoints;
  this.count = (left ? left.count : 0) + (right ? right.count : 0) + leftPoints.length;
}
var proto = IntervalTreeNode.prototype;
function copy(a, b) {
  a.mid = b.mid;
  a.left = b.left;
  a.right = b.right;
  a.leftPoints = b.leftPoints;
  a.rightPoints = b.rightPoints;
  a.count = b.count;
}
function rebuild(node, intervals) {
  var ntree = createIntervalTree(intervals);
  node.mid = ntree.mid;
  node.left = ntree.left;
  node.right = ntree.right;
  node.leftPoints = ntree.leftPoints;
  node.rightPoints = ntree.rightPoints;
  node.count = ntree.count;
}
function rebuildWithInterval(node, interval) {
  var intervals = node.intervals([]);
  intervals.push(interval);
  rebuild(node, intervals);
}
function rebuildWithoutInterval(node, interval) {
  var intervals = node.intervals([]);
  var idx = intervals.indexOf(interval);
  if (idx < 0) {
    return NOT_FOUND;
  }
  intervals.splice(idx, 1);
  rebuild(node, intervals);
  return SUCCESS;
}
proto.intervals = function (result) {
  result.push.apply(result, this.leftPoints);
  if (this.left) {
    this.left.intervals(result);
  }
  if (this.right) {
    this.right.intervals(result);
  }
  return result;
};
proto.insert = function (interval) {
  var weight = this.count - this.leftPoints.length;
  this.count += 1;
  if (interval[1] < this.mid) {
    if (this.left) {
      if (4 * (this.left.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.left.insert(interval);
      }
    } else {
      this.left = createIntervalTree([interval]);
    }
  } else if (interval[0] > this.mid) {
    if (this.right) {
      if (4 * (this.right.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.right.insert(interval);
      }
    } else {
      this.right = createIntervalTree([interval]);
    }
  } else {
    var l = binarySearchBounds.ge(this.leftPoints, interval, compareBegin);
    var r = binarySearchBounds.ge(this.rightPoints, interval, compareEnd);
    this.leftPoints.splice(l, 0, interval);
    this.rightPoints.splice(r, 0, interval);
  }
};
proto.remove = function (interval) {
  var weight = this.count - this.leftPoints;
  if (interval[1] < this.mid) {
    if (!this.left) {
      return NOT_FOUND;
    }
    var rw = this.right ? this.right.count : 0;
    if (4 * rw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }
    var r = this.left.remove(interval);
    if (r === EMPTY) {
      this.left = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }
    return r;
  } else if (interval[0] > this.mid) {
    if (!this.right) {
      return NOT_FOUND;
    }
    var lw = this.left ? this.left.count : 0;
    if (4 * lw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }
    var r = this.right.remove(interval);
    if (r === EMPTY) {
      this.right = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }
    return r;
  } else {
    if (this.count === 1) {
      if (this.leftPoints[0] === interval) {
        return EMPTY;
      } else {
        return NOT_FOUND;
      }
    }
    if (this.leftPoints.length === 1 && this.leftPoints[0] === interval) {
      if (this.left && this.right) {
        var p = this;
        var n = this.left;
        while (n.right) {
          p = n;
          n = n.right;
        }
        if (p === this) {
          n.right = this.right;
        } else {
          var l = this.left;
          var r = this.right;
          p.count -= n.count;
          p.right = n.left;
          n.left = l;
          n.right = r;
        }
        copy(this, n);
        this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
      } else if (this.left) {
        copy(this, this.left);
      } else {
        copy(this, this.right);
      }
      return SUCCESS;
    }
    for (var l = binarySearchBounds.ge(this.leftPoints, interval, compareBegin); l < this.leftPoints.length; ++l) {
      if (this.leftPoints[l][0] !== interval[0]) {
        break;
      }
      if (this.leftPoints[l] === interval) {
        this.count -= 1;
        this.leftPoints.splice(l, 1);
        for (var r = binarySearchBounds.ge(this.rightPoints, interval, compareEnd); r < this.rightPoints.length; ++r) {
          if (this.rightPoints[r][1] !== interval[1]) {
            break;
          } else if (this.rightPoints[r] === interval) {
            this.rightPoints.splice(r, 1);
            return SUCCESS;
          }
        }
      }
    }
    return NOT_FOUND;
  }
};
function reportLeftRange(arr, hi, cb) {
  for (var i = 0; i < arr.length && arr[i][0] <= hi; ++i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}
function reportRightRange(arr, lo, cb) {
  for (var i = arr.length - 1; i >= 0 && arr[i][1] >= lo; --i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}
function reportRange(arr, cb) {
  for (var i = 0; i < arr.length; ++i) {
    var r = cb(arr[i]);
    if (r) {
      return r;
    }
  }
}
proto.queryPoint = function (x, cb) {
  if (x < this.mid) {
    if (this.left) {
      var r = this.left.queryPoint(x, cb);
      if (r) {
        return r;
      }
    }
    return reportLeftRange(this.leftPoints, x, cb);
  } else if (x > this.mid) {
    if (this.right) {
      var r = this.right.queryPoint(x, cb);
      if (r) {
        return r;
      }
    }
    return reportRightRange(this.rightPoints, x, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};
proto.queryInterval = function (lo, hi, cb) {
  if (lo < this.mid && this.left) {
    var r = this.left.queryInterval(lo, hi, cb);
    if (r) {
      return r;
    }
  }
  if (hi > this.mid && this.right) {
    var r = this.right.queryInterval(lo, hi, cb);
    if (r) {
      return r;
    }
  }
  if (hi < this.mid) {
    return reportLeftRange(this.leftPoints, hi, cb);
  } else if (lo > this.mid) {
    return reportRightRange(this.rightPoints, lo, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};
function compareNumbers(a, b) {
  return a - b;
}
function compareBegin(a, b) {
  var d = a[0] - b[0];
  if (d) {
    return d;
  }
  return a[1] - b[1];
}
function compareEnd(a, b) {
  var d = a[1] - b[1];
  if (d) {
    return d;
  }
  return a[0] - b[0];
}
function createIntervalTree(intervals) {
  if (intervals.length === 0) {
    return null;
  }
  var pts = [];
  for (var i = 0; i < intervals.length; ++i) {
    pts.push(intervals[i][0], intervals[i][1]);
  }
  pts.sort(compareNumbers);
  var mid = pts[pts.length >> 1];
  var leftIntervals = [];
  var rightIntervals = [];
  var centerIntervals = [];
  for (var i = 0; i < intervals.length; ++i) {
    var s = intervals[i];
    if (s[1] < mid) {
      leftIntervals.push(s);
    } else if (mid < s[0]) {
      rightIntervals.push(s);
    } else {
      centerIntervals.push(s);
    }
  } //Split center intervals

  var leftPoints = centerIntervals;
  var rightPoints = centerIntervals.slice();
  leftPoints.sort(compareBegin);
  rightPoints.sort(compareEnd);
  return new IntervalTreeNode(mid, createIntervalTree(leftIntervals), createIntervalTree(rightIntervals), leftPoints, rightPoints);
} //User friendly wrapper that makes it possible to support empty trees

function IntervalTree(root) {
  this.root = root;
}
var tproto = IntervalTree.prototype;
tproto.insert = function (interval) {
  if (this.root) {
    this.root.insert(interval);
  } else {
    this.root = new IntervalTreeNode(interval[0], null, null, [interval], [interval]);
  }
};
tproto.remove = function (interval) {
  if (this.root) {
    var r = this.root.remove(interval);
    if (r === EMPTY) {
      this.root = null;
    }
    return r !== NOT_FOUND;
  }
  return false;
};
tproto.queryPoint = function (p, cb) {
  if (this.root) {
    return this.root.queryPoint(p, cb);
  }
};
tproto.queryInterval = function (lo, hi, cb) {
  if (lo <= hi && this.root) {
    return this.root.queryInterval(lo, hi, cb);
  }
};
Object.defineProperty(tproto, 'count', {
  get: function get() {
    if (this.root) {
      return this.root.count;
    }
    return 0;
  }
});
Object.defineProperty(tproto, 'intervals', {
  get: function get() {
    if (this.root) {
      return this.root.intervals([]);
    }
    return [];
  }
});
function createWrapper(intervals) {
  if (!intervals || intervals.length === 0) {
    return new IntervalTree(null);
  }
  return new IntervalTree(createIntervalTree(intervals));
}
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Masonry/PositionCache.js






// Position cache requirements:
//   O(log(n)) lookup of cells to render for a given viewport size
//   O(1) lookup of shortest measured column (so we know when to enter phase 1)
var PositionCache = /*#__PURE__*/
function () {
  function PositionCache() {
    (0,classCallCheck/* default */.Z)(this, PositionCache);
    (0,defineProperty/* default */.Z)(this, "_columnSizeMap", {});
    (0,defineProperty/* default */.Z)(this, "_intervalTree", createWrapper());
    (0,defineProperty/* default */.Z)(this, "_leftMap", {});
  }
  (0,createClass/* default */.Z)(PositionCache, [{
    key: "estimateTotalHeight",
    value: function estimateTotalHeight(cellCount, columnCount, defaultCellHeight) {
      var unmeasuredCellCount = cellCount - this.count;
      return this.tallestColumnSize + Math.ceil(unmeasuredCellCount / columnCount) * defaultCellHeight;
    } // Render all cells visible within the viewport range defined.
  }, {
    key: "range",
    value: function range(scrollTop, clientHeight, renderCallback) {
      var _this = this;
      this._intervalTree.queryInterval(scrollTop, scrollTop + clientHeight, function (_ref) {
        var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 3),
          top = _ref2[0],
          _ = _ref2[1],
          index = _ref2[2];
        return renderCallback(index, _this._leftMap[index], top);
      });
    }
  }, {
    key: "setPosition",
    value: function setPosition(index, left, top, height) {
      this._intervalTree.insert([top, top + height, index]);
      this._leftMap[index] = left;
      var columnSizeMap = this._columnSizeMap;
      var columnHeight = columnSizeMap[left];
      if (columnHeight === undefined) {
        columnSizeMap[left] = top + height;
      } else {
        columnSizeMap[left] = Math.max(columnHeight, top + height);
      }
    }
  }, {
    key: "count",
    get: function get() {
      return this._intervalTree.count;
    }
  }, {
    key: "shortestColumnSize",
    get: function get() {
      var columnSizeMap = this._columnSizeMap;
      var size = 0;
      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = size === 0 ? height : Math.min(size, height);
      }
      return size;
    }
  }, {
    key: "tallestColumnSize",
    get: function get() {
      var columnSizeMap = this._columnSizeMap;
      var size = 0;
      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = Math.max(size, height);
      }
      return size;
    }
  }]);
  return PositionCache;
}();

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Masonry/Masonry.js







var Masonry_class, Masonry_temp;
function Masonry_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function Masonry_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      Masonry_ownKeys(source, true).forEach(function (key) {
        (0,defineProperty/* default */.Z)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Masonry_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}





var emptyObject = {};
/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */

var Masonry_DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
/**
 * This component efficiently displays arbitrarily positioned cells using windowing techniques.
 * Cell position is determined by an injected `cellPositioner` property.
 * Windowing is vertical; this component does not support horizontal scrolling.
 *
 * Rendering occurs in two phases:
 * 1) First pass uses estimated cell sizes (provided by the cache) to determine how many cells to measure in a batch.
 *    Batch size is chosen using a fast, naive layout algorithm that stacks images in order until the viewport has been filled.
 *    After measurement is complete (componentDidMount or componentDidUpdate) this component evaluates positioned cells
 *    in order to determine if another measurement pass is required (eg if actual cell sizes were less than estimated sizes).
 *    All measurements are permanently cached (keyed by `keyMapper`) for performance purposes.
 * 2) Second pass uses the external `cellPositioner` to layout cells.
 *    At this time the positioner has access to cached size measurements for all cells.
 *    The positions it returns are cached by Masonry for fast access later.
 *    Phase one is repeated if the user scrolls beyond the current layout's bounds.
 *    If the layout is invalidated due to eg a resize, cached positions can be cleared using `recomputeCellPositions()`.
 *
 * Animation constraints:
 *   Simple animations are supported (eg translate/slide into place on initial reveal).
 *   More complex animations are not (eg flying from one position to another on resize).
 *
 * Layout constraints:
 *   This component supports multi-column layout.
 *   The height of each item may vary.
 *   The width of each item must not exceed the width of the column it is "in".
 *   The left position of all items within a column must align.
 *   (Items may not span multiple columns.)
 */

var Masonry_Masonry = (Masonry_temp = Masonry_class = /*#__PURE__*/
function (_React$PureComponent) {
  (0,inherits/* default */.Z)(Masonry, _React$PureComponent);
  function Masonry() {
    var _getPrototypeOf2;
    var _this;
    (0,classCallCheck/* default */.Z)(this, Masonry);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (_getPrototypeOf2 = (0,getPrototypeOf/* default */.Z)(Masonry)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      isScrolling: false,
      scrollTop: 0
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_debounceResetIsScrollingId", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_invalidateOnUpdateStartIndex", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_invalidateOnUpdateStopIndex", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_positionCache", new PositionCache());
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_startIndex", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_startIndexMemoized", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_stopIndex", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_stopIndexMemoized", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_debounceResetIsScrollingCallback", function () {
      _this.setState({
        isScrolling: false
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_setScrollingContainerRef", function (ref) {
      _this._scrollingContainer = ref;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onScroll", function (event) {
      var height = _this.props.height;
      var eventScrollTop = event.currentTarget.scrollTop; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollTop = Math.min(Math.max(0, _this._getEstimatedTotalHeight() - height), eventScrollTop); // On iOS, we can arrive at negative offsets by swiping past the start or end.
      // Avoid re-rendering in this case as it can cause problems; see #532 for more.

      if (eventScrollTop !== scrollTop) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll

      _this._debounceResetIsScrolling(); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.

      if (_this.state.scrollTop !== scrollTop) {
        _this.setState({
          isScrolling: true,
          scrollTop: scrollTop
        });
      }
    });
    return _this;
  }
  (0,createClass/* default */.Z)(Masonry, [{
    key: "clearCellPositions",
    value: function clearCellPositions() {
      this._positionCache = new PositionCache();
      this.forceUpdate();
    } // HACK This method signature was intended for Grid
  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref) {
      var index = _ref.rowIndex;
      if (this._invalidateOnUpdateStartIndex === null) {
        this._invalidateOnUpdateStartIndex = index;
        this._invalidateOnUpdateStopIndex = index;
      } else {
        this._invalidateOnUpdateStartIndex = Math.min(this._invalidateOnUpdateStartIndex, index);
        this._invalidateOnUpdateStopIndex = Math.max(this._invalidateOnUpdateStopIndex, index);
      }
    }
  }, {
    key: "recomputeCellPositions",
    value: function recomputeCellPositions() {
      var stopIndex = this._positionCache.count - 1;
      this._positionCache = new PositionCache();
      this._populatePositionCache(0, stopIndex);
      this.forceUpdate();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._checkInvalidateOnUpdate();
      this._invokeOnScrollCallback();
      this._invokeOnCellsRenderedCallback();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this._checkInvalidateOnUpdate();
      this._invokeOnScrollCallback();
      this._invokeOnCellsRenderedCallback();
      if (this.props.scrollTop !== prevProps.scrollTop) {
        this._debounceResetIsScrolling();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._debounceResetIsScrollingId) {
        cancelAnimationTimeout(this._debounceResetIsScrollingId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        autoHeight = _this$props.autoHeight,
        cellCount = _this$props.cellCount,
        cellMeasurerCache = _this$props.cellMeasurerCache,
        cellRenderer = _this$props.cellRenderer,
        className = _this$props.className,
        height = _this$props.height,
        id = _this$props.id,
        keyMapper = _this$props.keyMapper,
        overscanByPixels = _this$props.overscanByPixels,
        role = _this$props.role,
        style = _this$props.style,
        tabIndex = _this$props.tabIndex,
        width = _this$props.width,
        rowDirection = _this$props.rowDirection;
      var _this$state = this.state,
        isScrolling = _this$state.isScrolling,
        scrollTop = _this$state.scrollTop;
      var children = [];
      var estimateTotalHeight = this._getEstimatedTotalHeight();
      var shortestColumnSize = this._positionCache.shortestColumnSize;
      var measuredCellCount = this._positionCache.count;
      var startIndex = 0;
      var stopIndex;
      this._positionCache.range(Math.max(0, scrollTop - overscanByPixels), height + overscanByPixels * 2, function (index, left, top) {
        var _style;
        if (typeof stopIndex === 'undefined') {
          startIndex = index;
          stopIndex = index;
        } else {
          startIndex = Math.min(startIndex, index);
          stopIndex = Math.max(stopIndex, index);
        }
        children.push(cellRenderer({
          index: index,
          isScrolling: isScrolling,
          key: keyMapper(index),
          parent: _this2,
          style: (_style = {
            height: cellMeasurerCache.getHeight(index)
          }, (0,defineProperty/* default */.Z)(_style, rowDirection === 'ltr' ? 'left' : 'right', left), (0,defineProperty/* default */.Z)(_style, "position", 'absolute'), (0,defineProperty/* default */.Z)(_style, "top", top), (0,defineProperty/* default */.Z)(_style, "width", cellMeasurerCache.getWidth(index)), _style)
        }));
      }); // We need to measure additional cells for this layout

      if (shortestColumnSize < scrollTop + height + overscanByPixels && measuredCellCount < cellCount) {
        var batchSize = Math.min(cellCount - measuredCellCount, Math.ceil((scrollTop + height + overscanByPixels - shortestColumnSize) / cellMeasurerCache.defaultHeight * width / cellMeasurerCache.defaultWidth));
        for (var _index = measuredCellCount; _index < measuredCellCount + batchSize; _index++) {
          stopIndex = _index;
          children.push(cellRenderer({
            index: _index,
            isScrolling: isScrolling,
            key: keyMapper(_index),
            parent: this,
            style: {
              width: cellMeasurerCache.getWidth(_index)
            }
          }));
        }
      }
      this._startIndex = startIndex;
      this._stopIndex = stopIndex;
      return react.createElement("div", {
        ref: this._setScrollingContainerRef,
        "aria-label": this.props['aria-label'],
        className: clsx_m('ReactVirtualized__Masonry', className),
        id: id,
        onScroll: this._onScroll,
        role: role,
        style: Masonry_objectSpread({
          boxSizing: 'border-box',
          direction: 'ltr',
          height: autoHeight ? 'auto' : height,
          overflowX: 'hidden',
          overflowY: estimateTotalHeight < height ? 'hidden' : 'auto',
          position: 'relative',
          width: width,
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform'
        }, style),
        tabIndex: tabIndex
      }, react.createElement("div", {
        className: "ReactVirtualized__Masonry__innerScrollContainer",
        style: {
          width: '100%',
          height: estimateTotalHeight,
          maxWidth: '100%',
          maxHeight: estimateTotalHeight,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          position: 'relative'
        }
      }, children));
    }
  }, {
    key: "_checkInvalidateOnUpdate",
    value: function _checkInvalidateOnUpdate() {
      if (typeof this._invalidateOnUpdateStartIndex === 'number') {
        var startIndex = this._invalidateOnUpdateStartIndex;
        var stopIndex = this._invalidateOnUpdateStopIndex;
        this._invalidateOnUpdateStartIndex = null;
        this._invalidateOnUpdateStopIndex = null; // Query external layout logic for position of newly-measured cells

        this._populatePositionCache(startIndex, stopIndex);
        this.forceUpdate();
      }
    }
  }, {
    key: "_debounceResetIsScrolling",
    value: function _debounceResetIsScrolling() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
      if (this._debounceResetIsScrollingId) {
        cancelAnimationTimeout(this._debounceResetIsScrollingId);
      }
      this._debounceResetIsScrollingId = requestAnimationTimeout(this._debounceResetIsScrollingCallback, scrollingResetTimeInterval);
    }
  }, {
    key: "_getEstimatedTotalHeight",
    value: function _getEstimatedTotalHeight() {
      var _this$props2 = this.props,
        cellCount = _this$props2.cellCount,
        cellMeasurerCache = _this$props2.cellMeasurerCache,
        width = _this$props2.width;
      var estimatedColumnCount = Math.max(1, Math.floor(width / cellMeasurerCache.defaultWidth));
      return this._positionCache.estimateTotalHeight(cellCount, estimatedColumnCount, cellMeasurerCache.defaultHeight);
    }
  }, {
    key: "_invokeOnScrollCallback",
    value: function _invokeOnScrollCallback() {
      var _this$props3 = this.props,
        height = _this$props3.height,
        onScroll = _this$props3.onScroll;
      var scrollTop = this.state.scrollTop;
      if (this._onScrollMemoized !== scrollTop) {
        onScroll({
          clientHeight: height,
          scrollHeight: this._getEstimatedTotalHeight(),
          scrollTop: scrollTop
        });
        this._onScrollMemoized = scrollTop;
      }
    }
  }, {
    key: "_invokeOnCellsRenderedCallback",
    value: function _invokeOnCellsRenderedCallback() {
      if (this._startIndexMemoized !== this._startIndex || this._stopIndexMemoized !== this._stopIndex) {
        var onCellsRendered = this.props.onCellsRendered;
        onCellsRendered({
          startIndex: this._startIndex,
          stopIndex: this._stopIndex
        });
        this._startIndexMemoized = this._startIndex;
        this._stopIndexMemoized = this._stopIndex;
      }
    }
  }, {
    key: "_populatePositionCache",
    value: function _populatePositionCache(startIndex, stopIndex) {
      var _this$props4 = this.props,
        cellMeasurerCache = _this$props4.cellMeasurerCache,
        cellPositioner = _this$props4.cellPositioner;
      for (var _index2 = startIndex; _index2 <= stopIndex; _index2++) {
        var _cellPositioner = cellPositioner(_index2),
          left = _cellPositioner.left,
          top = _cellPositioner.top;
        this._positionCache.setPosition(_index2, left, top, cellMeasurerCache.getHeight(_index2));
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.scrollTop !== undefined && prevState.scrollTop !== nextProps.scrollTop) {
        return {
          isScrolling: true,
          scrollTop: nextProps.scrollTop
        };
      }
      return null;
    }
  }]);
  return Masonry;
}(react.PureComponent), (0,defineProperty/* default */.Z)(Masonry_class, "propTypes",  true ? null : 0), Masonry_temp);
(0,defineProperty/* default */.Z)(Masonry_Masonry, "defaultProps", {
  autoHeight: false,
  keyMapper: identity,
  onCellsRendered: noop,
  onScroll: noop,
  overscanByPixels: 20,
  role: 'grid',
  scrollingResetTimeInterval: Masonry_DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  style: emptyObject,
  tabIndex: 0,
  rowDirection: 'ltr'
});
function identity(value) {
  return value;
}
function noop() {}
var bpfrpt_proptype_CellMeasurerCache =  true ? null : 0;
polyfill(Masonry_Masonry);
/* harmony default export */ var es_Masonry_Masonry = ((/* unused pure expression or super */ null && (Masonry_Masonry)));
var bpfrpt_proptype_Positioner =  true ? null : 0;




;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Masonry/createCellPositioner.js
function createCellPositioner(_ref) {
  var cellMeasurerCache = _ref.cellMeasurerCache,
    columnCount = _ref.columnCount,
    columnWidth = _ref.columnWidth,
    _ref$spacer = _ref.spacer,
    spacer = _ref$spacer === void 0 ? 0 : _ref$spacer;
  var columnHeights;
  initOrResetDerivedValues();
  function cellPositioner(index) {
    // Find the shortest column and use it.
    var columnIndex = 0;
    for (var i = 1; i < columnHeights.length; i++) {
      if (columnHeights[i] < columnHeights[columnIndex]) {
        columnIndex = i;
      }
    }
    var left = columnIndex * (columnWidth + spacer);
    var top = columnHeights[columnIndex] || 0;
    columnHeights[columnIndex] = top + cellMeasurerCache.getHeight(index) + spacer;
    return {
      left: left,
      top: top
    };
  }
  function initOrResetDerivedValues() {
    // Track the height of each column.
    // Layout algorithm below always inserts into the shortest column.
    columnHeights = [];
    for (var i = 0; i < columnCount; i++) {
      columnHeights[i] = 0;
    }
  }
  function reset(params) {
    columnCount = params.columnCount;
    columnWidth = params.columnWidth;
    spacer = params.spacer;
    initOrResetDerivedValues();
  }
  cellPositioner.reset = reset;
  return cellPositioner;
}


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Masonry/index.js


/* harmony default export */ var es_Masonry = ((/* unused pure expression or super */ null && (Masonry)));

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/MultiGrid/CellMeasurerCacheDecorator.js





/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCacheDecorator = /*#__PURE__*/
function () {
  function CellMeasurerCacheDecorator() {
    var _this = this;
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0,classCallCheck/* default */.Z)(this, CellMeasurerCacheDecorator);
    (0,defineProperty/* default */.Z)(this, "_cellMeasurerCache", void 0);
    (0,defineProperty/* default */.Z)(this, "_columnIndexOffset", void 0);
    (0,defineProperty/* default */.Z)(this, "_rowIndexOffset", void 0);
    (0,defineProperty/* default */.Z)(this, "columnWidth", function (_ref) {
      var index = _ref.index;
      _this._cellMeasurerCache.columnWidth({
        index: index + _this._columnIndexOffset
      });
    });
    (0,defineProperty/* default */.Z)(this, "rowHeight", function (_ref2) {
      var index = _ref2.index;
      _this._cellMeasurerCache.rowHeight({
        index: index + _this._rowIndexOffset
      });
    });
    var cellMeasurerCache = params.cellMeasurerCache,
      _params$columnIndexOf = params.columnIndexOffset,
      columnIndexOffset = _params$columnIndexOf === void 0 ? 0 : _params$columnIndexOf,
      _params$rowIndexOffse = params.rowIndexOffset,
      rowIndexOffset = _params$rowIndexOffse === void 0 ? 0 : _params$rowIndexOffse;
    this._cellMeasurerCache = cellMeasurerCache;
    this._columnIndexOffset = columnIndexOffset;
    this._rowIndexOffset = rowIndexOffset;
  }
  (0,createClass/* default */.Z)(CellMeasurerCacheDecorator, [{
    key: "clear",
    value: function clear(rowIndex, columnIndex) {
      this._cellMeasurerCache.clear(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._cellMeasurerCache.clearAll();
    }
  }, {
    key: "hasFixedHeight",
    value: function hasFixedHeight() {
      return this._cellMeasurerCache.hasFixedHeight();
    }
  }, {
    key: "hasFixedWidth",
    value: function hasFixedWidth() {
      return this._cellMeasurerCache.hasFixedWidth();
    }
  }, {
    key: "getHeight",
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.getHeight(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "getWidth",
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.getWidth(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "has",
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.has(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "set",
    value: function set(rowIndex, columnIndex, width, height) {
      this._cellMeasurerCache.set(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset, width, height);
    }
  }, {
    key: "defaultHeight",
    get: function get() {
      return this._cellMeasurerCache.defaultHeight;
    }
  }, {
    key: "defaultWidth",
    get: function get() {
      return this._cellMeasurerCache.defaultWidth;
    }
  }]);
  return CellMeasurerCacheDecorator;
}();

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/MultiGrid/MultiGrid.js









function MultiGrid_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function MultiGrid_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      MultiGrid_ownKeys(source, true).forEach(function (key) {
        (0,defineProperty/* default */.Z)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      MultiGrid_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}





var SCROLLBAR_SIZE_BUFFER = 20;
/**
 * Renders 1, 2, or 4 Grids depending on configuration.
 * A main (body) Grid will always be rendered.
 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
 * If no sticky columns, only 1 sticky header Grid will be rendered.
 * If sticky columns, 2 sticky header Grids will be rendered.
 */

var MultiGrid_MultiGrid = /*#__PURE__*/
function (_React$PureComponent) {
  (0,inherits/* default */.Z)(MultiGrid, _React$PureComponent);
  function MultiGrid(props, context) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, MultiGrid);
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (0,getPrototypeOf/* default */.Z)(MultiGrid).call(this, props, context));
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      scrollLeft: 0,
      scrollTop: 0,
      scrollbarSize: 0,
      showHorizontalScrollbar: false,
      showVerticalScrollbar: false
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_deferredInvalidateColumnIndex", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_deferredInvalidateRowIndex", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_bottomLeftGridRef", function (ref) {
      _this._bottomLeftGrid = ref;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_bottomRightGridRef", function (ref) {
      _this._bottomRightGrid = ref;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_cellRendererBottomLeftGrid", function (_ref) {
      var rowIndex = _ref.rowIndex,
        rest = (0,objectWithoutProperties/* default */.Z)(_ref, ["rowIndex"]);
      var _this$props = _this.props,
        cellRenderer = _this$props.cellRenderer,
        fixedRowCount = _this$props.fixedRowCount,
        rowCount = _this$props.rowCount;
      if (rowIndex === rowCount - fixedRowCount) {
        return react.createElement("div", {
          key: rest.key,
          style: MultiGrid_objectSpread({}, rest.style, {
            height: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(MultiGrid_objectSpread({}, rest, {
          parent: (0,assertThisInitialized/* default */.Z)(_this),
          rowIndex: rowIndex + fixedRowCount
        }));
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_cellRendererBottomRightGrid", function (_ref2) {
      var columnIndex = _ref2.columnIndex,
        rowIndex = _ref2.rowIndex,
        rest = (0,objectWithoutProperties/* default */.Z)(_ref2, ["columnIndex", "rowIndex"]);
      var _this$props2 = _this.props,
        cellRenderer = _this$props2.cellRenderer,
        fixedColumnCount = _this$props2.fixedColumnCount,
        fixedRowCount = _this$props2.fixedRowCount;
      return cellRenderer(MultiGrid_objectSpread({}, rest, {
        columnIndex: columnIndex + fixedColumnCount,
        parent: (0,assertThisInitialized/* default */.Z)(_this),
        rowIndex: rowIndex + fixedRowCount
      }));
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_cellRendererTopRightGrid", function (_ref3) {
      var columnIndex = _ref3.columnIndex,
        rest = (0,objectWithoutProperties/* default */.Z)(_ref3, ["columnIndex"]);
      var _this$props3 = _this.props,
        cellRenderer = _this$props3.cellRenderer,
        columnCount = _this$props3.columnCount,
        fixedColumnCount = _this$props3.fixedColumnCount;
      if (columnIndex === columnCount - fixedColumnCount) {
        return react.createElement("div", {
          key: rest.key,
          style: MultiGrid_objectSpread({}, rest.style, {
            width: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(MultiGrid_objectSpread({}, rest, {
          columnIndex: columnIndex + fixedColumnCount,
          parent: (0,assertThisInitialized/* default */.Z)(_this)
        }));
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_columnWidthRightGrid", function (_ref4) {
      var index = _ref4.index;
      var _this$props4 = _this.props,
        columnCount = _this$props4.columnCount,
        fixedColumnCount = _this$props4.fixedColumnCount,
        columnWidth = _this$props4.columnWidth;
      var _this$state = _this.state,
        scrollbarSize = _this$state.scrollbarSize,
        showHorizontalScrollbar = _this$state.showHorizontalScrollbar; // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showHorizontalScrollbar && index === columnCount - fixedColumnCount) {
        return scrollbarSize;
      }
      return typeof columnWidth === 'function' ? columnWidth({
        index: index + fixedColumnCount
      }) : columnWidth;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onScroll", function (scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft,
        scrollTop = scrollInfo.scrollTop;
      _this.setState({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });
      var onScroll = _this.props.onScroll;
      if (onScroll) {
        onScroll(scrollInfo);
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onScrollbarPresenceChange", function (_ref5) {
      var horizontal = _ref5.horizontal,
        size = _ref5.size,
        vertical = _ref5.vertical;
      var _this$state2 = _this.state,
        showHorizontalScrollbar = _this$state2.showHorizontalScrollbar,
        showVerticalScrollbar = _this$state2.showVerticalScrollbar;
      if (horizontal !== showHorizontalScrollbar || vertical !== showVerticalScrollbar) {
        _this.setState({
          scrollbarSize: size,
          showHorizontalScrollbar: horizontal,
          showVerticalScrollbar: vertical
        });
        var onScrollbarPresenceChange = _this.props.onScrollbarPresenceChange;
        if (typeof onScrollbarPresenceChange === 'function') {
          onScrollbarPresenceChange({
            horizontal: horizontal,
            size: size,
            vertical: vertical
          });
        }
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onScrollLeft", function (scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft;
      _this._onScroll({
        scrollLeft: scrollLeft,
        scrollTop: _this.state.scrollTop
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onScrollTop", function (scrollInfo) {
      var scrollTop = scrollInfo.scrollTop;
      _this._onScroll({
        scrollTop: scrollTop,
        scrollLeft: _this.state.scrollLeft
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_rowHeightBottomGrid", function (_ref6) {
      var index = _ref6.index;
      var _this$props5 = _this.props,
        fixedRowCount = _this$props5.fixedRowCount,
        rowCount = _this$props5.rowCount,
        rowHeight = _this$props5.rowHeight;
      var _this$state3 = _this.state,
        scrollbarSize = _this$state3.scrollbarSize,
        showVerticalScrollbar = _this$state3.showVerticalScrollbar; // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showVerticalScrollbar && index === rowCount - fixedRowCount) {
        return scrollbarSize;
      }
      return typeof rowHeight === 'function' ? rowHeight({
        index: index + fixedRowCount
      }) : rowHeight;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_topLeftGridRef", function (ref) {
      _this._topLeftGrid = ref;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_topRightGridRef", function (ref) {
      _this._topRightGrid = ref;
    });
    var deferredMeasurementCache = props.deferredMeasurementCache,
      _fixedColumnCount = props.fixedColumnCount,
      _fixedRowCount = props.fixedRowCount;
    _this._maybeCalculateCachedStyles(true);
    if (deferredMeasurementCache) {
      _this._deferredMeasurementCacheBottomLeftGrid = _fixedRowCount > 0 ? new CellMeasurerCacheDecorator({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: 0,
        rowIndexOffset: _fixedRowCount
      }) : deferredMeasurementCache;
      _this._deferredMeasurementCacheBottomRightGrid = _fixedColumnCount > 0 || _fixedRowCount > 0 ? new CellMeasurerCacheDecorator({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: _fixedColumnCount,
        rowIndexOffset: _fixedRowCount
      }) : deferredMeasurementCache;
      _this._deferredMeasurementCacheTopRightGrid = _fixedColumnCount > 0 ? new CellMeasurerCacheDecorator({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: _fixedColumnCount,
        rowIndexOffset: 0
      }) : deferredMeasurementCache;
    }
    return _this;
  }
  (0,createClass/* default */.Z)(MultiGrid, [{
    key: "forceUpdateGrids",
    value: function forceUpdateGrids() {
      this._bottomLeftGrid && this._bottomLeftGrid.forceUpdate();
      this._bottomRightGrid && this._bottomRightGrid.forceUpdate();
      this._topLeftGrid && this._topLeftGrid.forceUpdate();
      this._topRightGrid && this._topRightGrid.forceUpdate();
    }
    /** See Grid#invalidateCellSizeAfterRender */
  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref7$columnIndex = _ref7.columnIndex,
        columnIndex = _ref7$columnIndex === void 0 ? 0 : _ref7$columnIndex,
        _ref7$rowIndex = _ref7.rowIndex,
        rowIndex = _ref7$rowIndex === void 0 ? 0 : _ref7$rowIndex;
      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }
    /** See Grid#measureAllCells */
  }, {
    key: "measureAllCells",
    value: function measureAllCells() {
      this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
      this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
      this._topLeftGrid && this._topLeftGrid.measureAllCells();
      this._topRightGrid && this._topRightGrid.measureAllCells();
    }
    /** See Grid#recomputeGridSize */
  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref8$columnIndex = _ref8.columnIndex,
        columnIndex = _ref8$columnIndex === void 0 ? 0 : _ref8$columnIndex,
        _ref8$rowIndex = _ref8.rowIndex,
        rowIndex = _ref8$rowIndex === void 0 ? 0 : _ref8$rowIndex;
      var _this$props6 = this.props,
        fixedColumnCount = _this$props6.fixedColumnCount,
        fixedRowCount = _this$props6.fixedRowCount;
      var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
      var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);
      this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: adjustedRowIndex
      });
      this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: adjustedRowIndex
      });
      this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: rowIndex
      });
      this._topRightGrid && this._topRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: rowIndex
      });
      this._leftGridWidth = null;
      this._topGridHeight = null;
      this._maybeCalculateCachedStyles(true);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
        scrollLeft = _this$props7.scrollLeft,
        scrollTop = _this$props7.scrollTop;
      if (scrollLeft > 0 || scrollTop > 0) {
        var newState = {};
        if (scrollLeft > 0) {
          newState.scrollLeft = scrollLeft;
        }
        if (scrollTop > 0) {
          newState.scrollTop = scrollTop;
        }
        this.setState(newState);
      }
      this._handleInvalidatedGridSize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._handleInvalidatedGridSize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
        onScroll = _this$props8.onScroll,
        onSectionRendered = _this$props8.onSectionRendered,
        onScrollbarPresenceChange = _this$props8.onScrollbarPresenceChange,
        scrollLeftProp = _this$props8.scrollLeft,
        scrollToColumn = _this$props8.scrollToColumn,
        scrollTopProp = _this$props8.scrollTop,
        scrollToRow = _this$props8.scrollToRow,
        rest = (0,objectWithoutProperties/* default */.Z)(_this$props8, ["onScroll", "onSectionRendered", "onScrollbarPresenceChange", "scrollLeft", "scrollToColumn", "scrollTop", "scrollToRow"]);
      this._prepareForRender(); // Don't render any of our Grids if there are no cells.
      // This mirrors what Grid does,
      // And prevents us from recording inaccurage measurements when used with CellMeasurer.

      if (this.props.width === 0 || this.props.height === 0) {
        return null;
      } // scrollTop and scrollLeft props are explicitly filtered out and ignored

      var _this$state4 = this.state,
        scrollLeft = _this$state4.scrollLeft,
        scrollTop = _this$state4.scrollTop;
      return react.createElement("div", {
        style: this._containerOuterStyle
      }, react.createElement("div", {
        style: this._containerTopStyle
      }, this._renderTopLeftGrid(rest), this._renderTopRightGrid(MultiGrid_objectSpread({}, rest, {
        onScroll: onScroll,
        scrollLeft: scrollLeft
      }))), react.createElement("div", {
        style: this._containerBottomStyle
      }, this._renderBottomLeftGrid(MultiGrid_objectSpread({}, rest, {
        onScroll: onScroll,
        scrollTop: scrollTop
      })), this._renderBottomRightGrid(MultiGrid_objectSpread({}, rest, {
        onScroll: onScroll,
        onSectionRendered: onSectionRendered,
        scrollLeft: scrollLeft,
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow,
        scrollTop: scrollTop
      }))));
    }
  }, {
    key: "_getBottomGridHeight",
    value: function _getBottomGridHeight(props) {
      var height = props.height;
      var topGridHeight = this._getTopGridHeight(props);
      return height - topGridHeight;
    }
  }, {
    key: "_getLeftGridWidth",
    value: function _getLeftGridWidth(props) {
      var fixedColumnCount = props.fixedColumnCount,
        columnWidth = props.columnWidth;
      if (this._leftGridWidth == null) {
        if (typeof columnWidth === 'function') {
          var leftGridWidth = 0;
          for (var index = 0; index < fixedColumnCount; index++) {
            leftGridWidth += columnWidth({
              index: index
            });
          }
          this._leftGridWidth = leftGridWidth;
        } else {
          this._leftGridWidth = columnWidth * fixedColumnCount;
        }
      }
      return this._leftGridWidth;
    }
  }, {
    key: "_getRightGridWidth",
    value: function _getRightGridWidth(props) {
      var width = props.width;
      var leftGridWidth = this._getLeftGridWidth(props);
      return width - leftGridWidth;
    }
  }, {
    key: "_getTopGridHeight",
    value: function _getTopGridHeight(props) {
      var fixedRowCount = props.fixedRowCount,
        rowHeight = props.rowHeight;
      if (this._topGridHeight == null) {
        if (typeof rowHeight === 'function') {
          var topGridHeight = 0;
          for (var index = 0; index < fixedRowCount; index++) {
            topGridHeight += rowHeight({
              index: index
            });
          }
          this._topGridHeight = topGridHeight;
        } else {
          this._topGridHeight = rowHeight * fixedRowCount;
        }
      }
      return this._topGridHeight;
    }
  }, {
    key: "_handleInvalidatedGridSize",
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;
        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;
        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
        this.forceUpdate();
      }
    }
    /**
     * Avoid recreating inline styles each render; this bypasses Grid's shallowCompare.
     * This method recalculates styles only when specific props change.
     */
  }, {
    key: "_maybeCalculateCachedStyles",
    value: function _maybeCalculateCachedStyles(resetAll) {
      var _this$props9 = this.props,
        columnWidth = _this$props9.columnWidth,
        enableFixedColumnScroll = _this$props9.enableFixedColumnScroll,
        enableFixedRowScroll = _this$props9.enableFixedRowScroll,
        height = _this$props9.height,
        fixedColumnCount = _this$props9.fixedColumnCount,
        fixedRowCount = _this$props9.fixedRowCount,
        rowHeight = _this$props9.rowHeight,
        style = _this$props9.style,
        styleBottomLeftGrid = _this$props9.styleBottomLeftGrid,
        styleBottomRightGrid = _this$props9.styleBottomRightGrid,
        styleTopLeftGrid = _this$props9.styleTopLeftGrid,
        styleTopRightGrid = _this$props9.styleTopRightGrid,
        width = _this$props9.width;
      var sizeChange = resetAll || height !== this._lastRenderedHeight || width !== this._lastRenderedWidth;
      var leftSizeChange = resetAll || columnWidth !== this._lastRenderedColumnWidth || fixedColumnCount !== this._lastRenderedFixedColumnCount;
      var topSizeChange = resetAll || fixedRowCount !== this._lastRenderedFixedRowCount || rowHeight !== this._lastRenderedRowHeight;
      if (resetAll || sizeChange || style !== this._lastRenderedStyle) {
        this._containerOuterStyle = MultiGrid_objectSpread({
          height: height,
          overflow: 'visible',
          // Let :focus outline show through
          width: width
        }, style);
      }
      if (resetAll || sizeChange || topSizeChange) {
        this._containerTopStyle = {
          height: this._getTopGridHeight(this.props),
          position: 'relative',
          width: width
        };
        this._containerBottomStyle = {
          height: height - this._getTopGridHeight(this.props),
          overflow: 'visible',
          // Let :focus outline show through
          position: 'relative',
          width: width
        };
      }
      if (resetAll || styleBottomLeftGrid !== this._lastRenderedStyleBottomLeftGrid) {
        this._bottomLeftGridStyle = MultiGrid_objectSpread({
          left: 0,
          overflowX: 'hidden',
          overflowY: enableFixedColumnScroll ? 'auto' : 'hidden',
          position: 'absolute'
        }, styleBottomLeftGrid);
      }
      if (resetAll || leftSizeChange || styleBottomRightGrid !== this._lastRenderedStyleBottomRightGrid) {
        this._bottomRightGridStyle = MultiGrid_objectSpread({
          left: this._getLeftGridWidth(this.props),
          position: 'absolute'
        }, styleBottomRightGrid);
      }
      if (resetAll || styleTopLeftGrid !== this._lastRenderedStyleTopLeftGrid) {
        this._topLeftGridStyle = MultiGrid_objectSpread({
          left: 0,
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopLeftGrid);
      }
      if (resetAll || leftSizeChange || styleTopRightGrid !== this._lastRenderedStyleTopRightGrid) {
        this._topRightGridStyle = MultiGrid_objectSpread({
          left: this._getLeftGridWidth(this.props),
          overflowX: enableFixedRowScroll ? 'auto' : 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopRightGrid);
      }
      this._lastRenderedColumnWidth = columnWidth;
      this._lastRenderedFixedColumnCount = fixedColumnCount;
      this._lastRenderedFixedRowCount = fixedRowCount;
      this._lastRenderedHeight = height;
      this._lastRenderedRowHeight = rowHeight;
      this._lastRenderedStyle = style;
      this._lastRenderedStyleBottomLeftGrid = styleBottomLeftGrid;
      this._lastRenderedStyleBottomRightGrid = styleBottomRightGrid;
      this._lastRenderedStyleTopLeftGrid = styleTopLeftGrid;
      this._lastRenderedStyleTopRightGrid = styleTopRightGrid;
      this._lastRenderedWidth = width;
    }
  }, {
    key: "_prepareForRender",
    value: function _prepareForRender() {
      if (this._lastRenderedColumnWidth !== this.props.columnWidth || this._lastRenderedFixedColumnCount !== this.props.fixedColumnCount) {
        this._leftGridWidth = null;
      }
      if (this._lastRenderedFixedRowCount !== this.props.fixedRowCount || this._lastRenderedRowHeight !== this.props.rowHeight) {
        this._topGridHeight = null;
      }
      this._maybeCalculateCachedStyles();
      this._lastRenderedColumnWidth = this.props.columnWidth;
      this._lastRenderedFixedColumnCount = this.props.fixedColumnCount;
      this._lastRenderedFixedRowCount = this.props.fixedRowCount;
      this._lastRenderedRowHeight = this.props.rowHeight;
    }
  }, {
    key: "_renderBottomLeftGrid",
    value: function _renderBottomLeftGrid(props) {
      var enableFixedColumnScroll = props.enableFixedColumnScroll,
        fixedColumnCount = props.fixedColumnCount,
        fixedRowCount = props.fixedRowCount,
        rowCount = props.rowCount,
        hideBottomLeftGridScrollbar = props.hideBottomLeftGridScrollbar;
      var showVerticalScrollbar = this.state.showVerticalScrollbar;
      if (!fixedColumnCount) {
        return null;
      }
      var additionalRowCount = showVerticalScrollbar ? 1 : 0,
        height = this._getBottomGridHeight(props),
        width = this._getLeftGridWidth(props),
        scrollbarSize = this.state.showVerticalScrollbar ? this.state.scrollbarSize : 0,
        gridWidth = hideBottomLeftGridScrollbar ? width + scrollbarSize : width;
      var bottomLeftGrid = react.createElement(Grid_Grid, (0,esm_extends/* default */.Z)({}, props, {
        cellRenderer: this._cellRendererBottomLeftGrid,
        className: this.props.classNameBottomLeftGrid,
        columnCount: fixedColumnCount,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomLeftGrid,
        height: height,
        onScroll: enableFixedColumnScroll ? this._onScrollTop : undefined,
        ref: this._bottomLeftGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount) + additionalRowCount,
        rowHeight: this._rowHeightBottomGrid,
        style: this._bottomLeftGridStyle,
        tabIndex: null,
        width: gridWidth
      }));
      if (hideBottomLeftGridScrollbar) {
        return react.createElement("div", {
          className: "BottomLeftGrid_ScrollWrapper",
          style: MultiGrid_objectSpread({}, this._bottomLeftGridStyle, {
            height: height,
            width: width,
            overflowY: 'hidden'
          })
        }, bottomLeftGrid);
      }
      return bottomLeftGrid;
    }
  }, {
    key: "_renderBottomRightGrid",
    value: function _renderBottomRightGrid(props) {
      var columnCount = props.columnCount,
        fixedColumnCount = props.fixedColumnCount,
        fixedRowCount = props.fixedRowCount,
        rowCount = props.rowCount,
        scrollToColumn = props.scrollToColumn,
        scrollToRow = props.scrollToRow;
      return react.createElement(Grid_Grid, (0,esm_extends/* default */.Z)({}, props, {
        cellRenderer: this._cellRendererBottomRightGrid,
        className: this.props.classNameBottomRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount),
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomRightGrid,
        height: this._getBottomGridHeight(props),
        onScroll: this._onScroll,
        onScrollbarPresenceChange: this._onScrollbarPresenceChange,
        ref: this._bottomRightGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount),
        rowHeight: this._rowHeightBottomGrid,
        scrollToColumn: scrollToColumn - fixedColumnCount,
        scrollToRow: scrollToRow - fixedRowCount,
        style: this._bottomRightGridStyle,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: "_renderTopLeftGrid",
    value: function _renderTopLeftGrid(props) {
      var fixedColumnCount = props.fixedColumnCount,
        fixedRowCount = props.fixedRowCount;
      if (!fixedColumnCount || !fixedRowCount) {
        return null;
      }
      return react.createElement(Grid_Grid, (0,esm_extends/* default */.Z)({}, props, {
        className: this.props.classNameTopLeftGrid,
        columnCount: fixedColumnCount,
        height: this._getTopGridHeight(props),
        ref: this._topLeftGridRef,
        rowCount: fixedRowCount,
        style: this._topLeftGridStyle,
        tabIndex: null,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: "_renderTopRightGrid",
    value: function _renderTopRightGrid(props) {
      var columnCount = props.columnCount,
        enableFixedRowScroll = props.enableFixedRowScroll,
        fixedColumnCount = props.fixedColumnCount,
        fixedRowCount = props.fixedRowCount,
        scrollLeft = props.scrollLeft,
        hideTopRightGridScrollbar = props.hideTopRightGridScrollbar;
      var _this$state5 = this.state,
        showHorizontalScrollbar = _this$state5.showHorizontalScrollbar,
        scrollbarSize = _this$state5.scrollbarSize;
      if (!fixedRowCount) {
        return null;
      }
      var additionalColumnCount = showHorizontalScrollbar ? 1 : 0,
        height = this._getTopGridHeight(props),
        width = this._getRightGridWidth(props),
        additionalHeight = showHorizontalScrollbar ? scrollbarSize : 0;
      var gridHeight = height,
        style = this._topRightGridStyle;
      if (hideTopRightGridScrollbar) {
        gridHeight = height + additionalHeight;
        style = MultiGrid_objectSpread({}, this._topRightGridStyle, {
          left: 0
        });
      }
      var topRightGrid = react.createElement(Grid_Grid, (0,esm_extends/* default */.Z)({}, props, {
        cellRenderer: this._cellRendererTopRightGrid,
        className: this.props.classNameTopRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount) + additionalColumnCount,
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheTopRightGrid,
        height: gridHeight,
        onScroll: enableFixedRowScroll ? this._onScrollLeft : undefined,
        ref: this._topRightGridRef,
        rowCount: fixedRowCount,
        scrollLeft: scrollLeft,
        style: style,
        tabIndex: null,
        width: width
      }));
      if (hideTopRightGridScrollbar) {
        return react.createElement("div", {
          className: "TopRightGrid_ScrollWrapper",
          style: MultiGrid_objectSpread({}, this._topRightGridStyle, {
            height: height,
            width: width,
            overflowX: 'hidden'
          })
        }, topRightGrid);
      }
      return topRightGrid;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null && nextProps.scrollLeft >= 0 ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null && nextProps.scrollTop >= 0 ? nextProps.scrollTop : prevState.scrollTop
        };
      }
      return null;
    }
  }]);
  return MultiGrid;
}(react.PureComponent);
(0,defineProperty/* default */.Z)(MultiGrid_MultiGrid, "defaultProps", {
  classNameBottomLeftGrid: '',
  classNameBottomRightGrid: '',
  classNameTopLeftGrid: '',
  classNameTopRightGrid: '',
  enableFixedColumnScroll: false,
  enableFixedRowScroll: false,
  fixedColumnCount: 0,
  fixedRowCount: 0,
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  styleBottomLeftGrid: {},
  styleBottomRightGrid: {},
  styleTopLeftGrid: {},
  styleTopRightGrid: {},
  hideTopRightGridScrollbar: false,
  hideBottomLeftGridScrollbar: false
});
MultiGrid_MultiGrid.propTypes =  false ? 0 : {};
polyfill(MultiGrid_MultiGrid);
/* harmony default export */ var es_MultiGrid_MultiGrid = ((/* unused pure expression or super */ null && (MultiGrid_MultiGrid)));
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/MultiGrid/index.js

/* harmony default export */ var es_MultiGrid = ((/* unused pure expression or super */ null && (MultiGrid)));

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/ScrollSync/ScrollSync.js








/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */

var ScrollSync_ScrollSync = /*#__PURE__*/
function (_React$PureComponent) {
  (0,inherits/* default */.Z)(ScrollSync, _React$PureComponent);
  function ScrollSync(props, context) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, ScrollSync);
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (0,getPrototypeOf/* default */.Z)(ScrollSync).call(this, props, context));
    _this.state = {
      clientHeight: 0,
      clientWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      scrollWidth: 0
    };
    _this._onScroll = _this._onScroll.bind((0,assertThisInitialized/* default */.Z)(_this));
    return _this;
  }
  (0,createClass/* default */.Z)(ScrollSync, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state = this.state,
        clientHeight = _this$state.clientHeight,
        clientWidth = _this$state.clientWidth,
        scrollHeight = _this$state.scrollHeight,
        scrollLeft = _this$state.scrollLeft,
        scrollTop = _this$state.scrollTop,
        scrollWidth = _this$state.scrollWidth;
      return children({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        onScroll: this._onScroll,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }, {
    key: "_onScroll",
    value: function _onScroll(_ref) {
      var clientHeight = _ref.clientHeight,
        clientWidth = _ref.clientWidth,
        scrollHeight = _ref.scrollHeight,
        scrollLeft = _ref.scrollLeft,
        scrollTop = _ref.scrollTop,
        scrollWidth = _ref.scrollWidth;
      this.setState({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }]);
  return ScrollSync;
}(react.PureComponent);

ScrollSync_ScrollSync.propTypes =  false ? 0 : {};
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/ScrollSync/index.js

/* harmony default export */ var es_ScrollSync = ((/* unused pure expression or super */ null && (ScrollSync)));

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/types.js
var bpfrpt_proptype_CellDataGetterParams =  true ? null : 0;
var types_bpfrpt_proptype_CellRendererParams =  true ? null : 0;
var bpfrpt_proptype_HeaderRowRendererParams =  true ? null : 0;
var bpfrpt_proptype_HeaderRendererParams =  true ? null : 0;
var types_bpfrpt_proptype_RowRendererParams =  true ? null : 0;






;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/defaultCellDataGetter.js
/**
 * Default accessor for returning a cell value for a given attribute.
 * This function expects to operate on either a vanilla Object or an Immutable Map.
 * You should override the column's cellDataGetter if your data is some other type of object.
 */
function defaultCellDataGetter(_ref) {
  var dataKey = _ref.dataKey,
    rowData = _ref.rowData;
  if (typeof rowData.get === 'function') {
    return rowData.get(dataKey);
  } else {
    return rowData[dataKey];
  }
}

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/defaultCellRenderer.js
/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */
function defaultCellRenderer(_ref) {
  var cellData = _ref.cellData;
  if (cellData == null) {
    return '';
  } else {
    return String(cellData);
  }
}

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/defaultHeaderRowRenderer.js

function defaultHeaderRowRenderer(_ref) {
  var className = _ref.className,
    columns = _ref.columns,
    style = _ref.style;
  return react.createElement("div", {
    className: className,
    role: "row",
    style: style
  }, columns);
}
defaultHeaderRowRenderer.propTypes =  true ? null : 0;


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/SortDirection.js
var SortDirection = {
  /**
   * Sort items in ascending order.
   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
   */
  ASC: 'ASC',
  /**
   * Sort items in descending order.
   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
   */
  DESC: 'DESC'
};
/* harmony default export */ var Table_SortDirection = (SortDirection);
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/SortIndicator.js




/**
 * Displayed beside a header to indicate that a Table is currently sorted by this column.
 */

function SortIndicator(_ref) {
  var sortDirection = _ref.sortDirection;
  var classNames = clsx_m('ReactVirtualized__Table__sortableHeaderIcon', {
    'ReactVirtualized__Table__sortableHeaderIcon--ASC': sortDirection === Table_SortDirection.ASC,
    'ReactVirtualized__Table__sortableHeaderIcon--DESC': sortDirection === Table_SortDirection.DESC
  });
  return react.createElement("svg", {
    className: classNames,
    width: 18,
    height: 18,
    viewBox: "0 0 24 24"
  }, sortDirection === Table_SortDirection.ASC ? react.createElement("path", {
    d: "M7 14l5-5 5 5z"
  }) : react.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }), react.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
}
SortIndicator.propTypes =  false ? 0 : {};
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/defaultHeaderRenderer.js



/**
 * Default table header renderer.
 */
function defaultHeaderRenderer(_ref) {
  var dataKey = _ref.dataKey,
    label = _ref.label,
    sortBy = _ref.sortBy,
    sortDirection = _ref.sortDirection;
  var showSortIndicator = sortBy === dataKey;
  var children = [react.createElement("span", {
    className: "ReactVirtualized__Table__headerTruncatedText",
    key: "label",
    title: typeof label === 'string' ? label : null
  }, label)];
  if (showSortIndicator) {
    children.push(react.createElement(SortIndicator, {
      key: "SortIndicator",
      sortDirection: sortDirection
    }));
  }
  return children;
}
defaultHeaderRenderer.propTypes =  true ? null : 0;


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/defaultRowRenderer.js



/**
 * Default row renderer for Table.
 */
function defaultRowRenderer(_ref) {
  var className = _ref.className,
    columns = _ref.columns,
    index = _ref.index,
    key = _ref.key,
    onRowClick = _ref.onRowClick,
    onRowDoubleClick = _ref.onRowDoubleClick,
    onRowMouseOut = _ref.onRowMouseOut,
    onRowMouseOver = _ref.onRowMouseOver,
    onRowRightClick = _ref.onRowRightClick,
    rowData = _ref.rowData,
    style = _ref.style;
  var a11yProps = {
    'aria-rowindex': index + 1
  };
  if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;
    if (onRowClick) {
      a11yProps.onClick = function (event) {
        return onRowClick({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }
    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = function (event) {
        return onRowDoubleClick({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }
    if (onRowMouseOut) {
      a11yProps.onMouseOut = function (event) {
        return onRowMouseOut({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }
    if (onRowMouseOver) {
      a11yProps.onMouseOver = function (event) {
        return onRowMouseOver({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }
    if (onRowRightClick) {
      a11yProps.onContextMenu = function (event) {
        return onRowRightClick({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }
  }
  return react.createElement("div", (0,esm_extends/* default */.Z)({}, a11yProps, {
    className: className,
    key: key,
    role: "row",
    style: style
  }), columns);
}
defaultRowRenderer.propTypes =  true ? null : 0;


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/Column.js











/**
 * Describes the header and cell contents of a table column.
 */

var Column = /*#__PURE__*/
function (_React$Component) {
  (0,inherits/* default */.Z)(Column, _React$Component);
  function Column() {
    (0,classCallCheck/* default */.Z)(this, Column);
    return (0,possibleConstructorReturn/* default */.Z)(this, (0,getPrototypeOf/* default */.Z)(Column).apply(this, arguments));
  }
  return Column;
}(react.Component);
(0,defineProperty/* default */.Z)(Column, "defaultProps", {
  cellDataGetter: defaultCellDataGetter,
  cellRenderer: defaultCellRenderer,
  defaultSortDirection: Table_SortDirection.ASC,
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer: defaultHeaderRenderer,
  style: {}
});

Column.propTypes =  false ? 0 : {};
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/Table.js








function Table_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function Table_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      Table_ownKeys(source, true).forEach(function (key) {
        (0,defineProperty/* default */.Z)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Table_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}









/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */

var Table_Table = /*#__PURE__*/
function (_React$PureComponent) {
  (0,inherits/* default */.Z)(Table, _React$PureComponent);
  function Table(props) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, Table);
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (0,getPrototypeOf/* default */.Z)(Table).call(this, props));
    _this.state = {
      scrollbarWidth: 0
    };
    _this._createColumn = _this._createColumn.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this._createRow = _this._createRow.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this._onScroll = _this._onScroll.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this._onSectionRendered = _this._onSectionRendered.bind((0,assertThisInitialized/* default */.Z)(_this));
    _this._setRef = _this._setRef.bind((0,assertThisInitialized/* default */.Z)(_this));
    return _this;
  }
  (0,createClass/* default */.Z)(Table, [{
    key: "forceUpdateGrid",
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }
    /** See Grid#getOffsetForCell */
  }, {
    key: "getOffsetForRow",
    value: function getOffsetForRow(_ref) {
      var alignment = _ref.alignment,
        index = _ref.index;
      if (this.Grid) {
        var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
            alignment: alignment,
            rowIndex: index
          }),
          scrollTop = _this$Grid$getOffsetF.scrollTop;
        return scrollTop;
      }
      return 0;
    }
    /** CellMeasurer compatibility */
  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref2) {
      var columnIndex = _ref2.columnIndex,
        rowIndex = _ref2.rowIndex;
      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#measureAllCells */
  }, {
    key: "measureAllRows",
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }
    /** CellMeasurer compatibility */
  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$columnIndex = _ref3.columnIndex,
        columnIndex = _ref3$columnIndex === void 0 ? 0 : _ref3$columnIndex,
        _ref3$rowIndex = _ref3.rowIndex,
        rowIndex = _ref3$rowIndex === void 0 ? 0 : _ref3$rowIndex;
      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#recomputeGridSize */
  }, {
    key: "recomputeRowHeights",
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index
        });
      }
    }
    /** See Grid#scrollToPosition */
  }, {
    key: "scrollToPosition",
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (this.Grid) {
        this.Grid.scrollToPosition({
          scrollTop: scrollTop
        });
      }
    }
    /** See Grid#scrollToCell */
  }, {
    key: "scrollToRow",
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: "getScrollbarWidth",
    value: function getScrollbarWidth() {
      if (this.Grid) {
        var _Grid = (0,react_dom.findDOMNode)(this.Grid);
        var clientWidth = _Grid.clientWidth || 0;
        var offsetWidth = _Grid.offsetWidth || 0;
        return offsetWidth - clientWidth;
      }
      return 0;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setScrollbarWidth();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._setScrollbarWidth();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        disableHeader = _this$props.disableHeader,
        gridClassName = _this$props.gridClassName,
        gridStyle = _this$props.gridStyle,
        headerHeight = _this$props.headerHeight,
        headerRowRenderer = _this$props.headerRowRenderer,
        height = _this$props.height,
        id = _this$props.id,
        noRowsRenderer = _this$props.noRowsRenderer,
        rowClassName = _this$props.rowClassName,
        rowStyle = _this$props.rowStyle,
        scrollToIndex = _this$props.scrollToIndex,
        style = _this$props.style,
        width = _this$props.width;
      var scrollbarWidth = this.state.scrollbarWidth;
      var availableRowsHeight = disableHeader ? height : height - headerHeight;
      var rowClass = typeof rowClassName === 'function' ? rowClassName({
        index: -1
      }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({
        index: -1
      }) : rowStyle; // Precompute and cache column styles before rendering rows and columns to speed things up

      this._cachedColumnStyles = [];
      react.Children.toArray(children).forEach(function (column, index) {
        var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);
        _this2._cachedColumnStyles[index] = Table_objectSpread({
          overflow: 'hidden'
        }, flexStyles);
      }); // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
      // This is done because Grid is a pure component and won't update unless its properties or state has changed.
      // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.

      return react.createElement("div", {
        "aria-label": this.props['aria-label'],
        "aria-labelledby": this.props['aria-labelledby'],
        "aria-colcount": react.Children.toArray(children).length,
        "aria-rowcount": this.props.rowCount,
        className: clsx_m('ReactVirtualized__Table', className),
        id: id,
        role: "grid",
        style: style
      }, !disableHeader && headerRowRenderer({
        className: clsx_m('ReactVirtualized__Table__headerRow', rowClass),
        columns: this._getHeaderColumns(),
        style: Table_objectSpread({
          height: headerHeight,
          overflow: 'hidden',
          paddingRight: scrollbarWidth,
          width: width
        }, rowStyleObject)
      }), react.createElement(Grid_Grid, (0,esm_extends/* default */.Z)({}, this.props, {
        "aria-readonly": null,
        autoContainerWidth: true,
        className: clsx_m('ReactVirtualized__Table__Grid', gridClassName),
        cellRenderer: this._createRow,
        columnWidth: width,
        columnCount: 1,
        height: availableRowsHeight,
        id: undefined,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        role: "rowgroup",
        scrollbarWidth: scrollbarWidth,
        scrollToRow: scrollToIndex,
        style: Table_objectSpread({}, gridStyle, {
          overflowX: 'hidden'
        })
      })));
    }
  }, {
    key: "_createColumn",
    value: function _createColumn(_ref4) {
      var column = _ref4.column,
        columnIndex = _ref4.columnIndex,
        isScrolling = _ref4.isScrolling,
        parent = _ref4.parent,
        rowData = _ref4.rowData,
        rowIndex = _ref4.rowIndex;
      var onColumnClick = this.props.onColumnClick;
      var _column$props = column.props,
        cellDataGetter = _column$props.cellDataGetter,
        cellRenderer = _column$props.cellRenderer,
        className = _column$props.className,
        columnData = _column$props.columnData,
        dataKey = _column$props.dataKey,
        id = _column$props.id;
      var cellData = cellDataGetter({
        columnData: columnData,
        dataKey: dataKey,
        rowData: rowData
      });
      var renderedCell = cellRenderer({
        cellData: cellData,
        columnData: columnData,
        columnIndex: columnIndex,
        dataKey: dataKey,
        isScrolling: isScrolling,
        parent: parent,
        rowData: rowData,
        rowIndex: rowIndex
      });
      var onClick = function onClick(event) {
        onColumnClick && onColumnClick({
          columnData: columnData,
          dataKey: dataKey,
          event: event
        });
      };
      var style = this._cachedColumnStyles[columnIndex];
      var title = typeof renderedCell === 'string' ? renderedCell : null; // Avoid using object-spread syntax with multiple objects here,
      // Since it results in an extra method call to 'babel-runtime/helpers/extends'
      // See PR https://github.com/bvaughn/react-virtualized/pull/942

      return react.createElement("div", {
        "aria-colindex": columnIndex + 1,
        "aria-describedby": id,
        className: clsx_m('ReactVirtualized__Table__rowColumn', className),
        key: 'Row' + rowIndex + '-' + 'Col' + columnIndex,
        onClick: onClick,
        role: "gridcell",
        style: style,
        title: title
      }, renderedCell);
    }
  }, {
    key: "_createHeader",
    value: function _createHeader(_ref5) {
      var column = _ref5.column,
        index = _ref5.index;
      var _this$props2 = this.props,
        headerClassName = _this$props2.headerClassName,
        headerStyle = _this$props2.headerStyle,
        onHeaderClick = _this$props2.onHeaderClick,
        sort = _this$props2.sort,
        sortBy = _this$props2.sortBy,
        sortDirection = _this$props2.sortDirection;
      var _column$props2 = column.props,
        columnData = _column$props2.columnData,
        dataKey = _column$props2.dataKey,
        defaultSortDirection = _column$props2.defaultSortDirection,
        disableSort = _column$props2.disableSort,
        headerRenderer = _column$props2.headerRenderer,
        id = _column$props2.id,
        label = _column$props2.label;
      var sortEnabled = !disableSort && sort;
      var classNames = clsx_m('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
        ReactVirtualized__Table__sortableHeaderColumn: sortEnabled
      });
      var style = this._getFlexStyleForColumn(column, Table_objectSpread({}, headerStyle, {}, column.props.headerStyle));
      var renderedHeader = headerRenderer({
        columnData: columnData,
        dataKey: dataKey,
        disableSort: disableSort,
        label: label,
        sortBy: sortBy,
        sortDirection: sortDirection
      });
      var headerOnClick, headerOnKeyDown, headerTabIndex, headerAriaSort, headerAriaLabel;
      if (sortEnabled || onHeaderClick) {
        // If this is a sortable header, clicking it should update the table data's sorting.
        var isFirstTimeSort = sortBy !== dataKey; // If this is the firstTime sort of this column, use the column default sort order.
        // Otherwise, invert the direction of the sort.

        var newSortDirection = isFirstTimeSort ? defaultSortDirection : sortDirection === Table_SortDirection.DESC ? Table_SortDirection.ASC : Table_SortDirection.DESC;
        var onClick = function onClick(event) {
          sortEnabled && sort({
            defaultSortDirection: defaultSortDirection,
            event: event,
            sortBy: dataKey,
            sortDirection: newSortDirection
          });
          onHeaderClick && onHeaderClick({
            columnData: columnData,
            dataKey: dataKey,
            event: event
          });
        };
        var onKeyDown = function onKeyDown(event) {
          if (event.key === 'Enter' || event.key === ' ') {
            onClick(event);
          }
        };
        headerAriaLabel = column.props['aria-label'] || label || dataKey;
        headerAriaSort = 'none';
        headerTabIndex = 0;
        headerOnClick = onClick;
        headerOnKeyDown = onKeyDown;
      }
      if (sortBy === dataKey) {
        headerAriaSort = sortDirection === Table_SortDirection.ASC ? 'ascending' : 'descending';
      } // Avoid using object-spread syntax with multiple objects here,
      // Since it results in an extra method call to 'babel-runtime/helpers/extends'
      // See PR https://github.com/bvaughn/react-virtualized/pull/942

      return react.createElement("div", {
        "aria-label": headerAriaLabel,
        "aria-sort": headerAriaSort,
        className: classNames,
        id: id,
        key: 'Header-Col' + index,
        onClick: headerOnClick,
        onKeyDown: headerOnKeyDown,
        role: "columnheader",
        style: style,
        tabIndex: headerTabIndex
      }, renderedHeader);
    }
  }, {
    key: "_createRow",
    value: function _createRow(_ref6) {
      var _this3 = this;
      var index = _ref6.rowIndex,
        isScrolling = _ref6.isScrolling,
        key = _ref6.key,
        parent = _ref6.parent,
        style = _ref6.style;
      var _this$props3 = this.props,
        children = _this$props3.children,
        onRowClick = _this$props3.onRowClick,
        onRowDoubleClick = _this$props3.onRowDoubleClick,
        onRowRightClick = _this$props3.onRowRightClick,
        onRowMouseOver = _this$props3.onRowMouseOver,
        onRowMouseOut = _this$props3.onRowMouseOut,
        rowClassName = _this$props3.rowClassName,
        rowGetter = _this$props3.rowGetter,
        rowRenderer = _this$props3.rowRenderer,
        rowStyle = _this$props3.rowStyle;
      var scrollbarWidth = this.state.scrollbarWidth;
      var rowClass = typeof rowClassName === 'function' ? rowClassName({
        index: index
      }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({
        index: index
      }) : rowStyle;
      var rowData = rowGetter({
        index: index
      });
      var columns = react.Children.toArray(children).map(function (column, columnIndex) {
        return _this3._createColumn({
          column: column,
          columnIndex: columnIndex,
          isScrolling: isScrolling,
          parent: parent,
          rowData: rowData,
          rowIndex: index,
          scrollbarWidth: scrollbarWidth
        });
      });
      var className = clsx_m('ReactVirtualized__Table__row', rowClass);
      var flattenedStyle = Table_objectSpread({}, style, {
        height: this._getRowHeight(index),
        overflow: 'hidden',
        paddingRight: scrollbarWidth
      }, rowStyleObject);
      return rowRenderer({
        className: className,
        columns: columns,
        index: index,
        isScrolling: isScrolling,
        key: key,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowRightClick: onRowRightClick,
        onRowMouseOver: onRowMouseOver,
        onRowMouseOut: onRowMouseOut,
        rowData: rowData,
        style: flattenedStyle
      });
    }
    /**
     * Determines the flex-shrink, flex-grow, and width values for a cell (header or column).
     */
  }, {
    key: "_getFlexStyleForColumn",
    value: function _getFlexStyleForColumn(column) {
      var customStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var flexValue = "".concat(column.props.flexGrow, " ").concat(column.props.flexShrink, " ").concat(column.props.width, "px");
      var style = Table_objectSpread({}, customStyle, {
        flex: flexValue,
        msFlex: flexValue,
        WebkitFlex: flexValue
      });
      if (column.props.maxWidth) {
        style.maxWidth = column.props.maxWidth;
      }
      if (column.props.minWidth) {
        style.minWidth = column.props.minWidth;
      }
      return style;
    }
  }, {
    key: "_getHeaderColumns",
    value: function _getHeaderColumns() {
      var _this4 = this;
      var _this$props4 = this.props,
        children = _this$props4.children,
        disableHeader = _this$props4.disableHeader;
      var items = disableHeader ? [] : react.Children.toArray(children);
      return items.map(function (column, index) {
        return _this4._createHeader({
          column: column,
          index: index
        });
      });
    }
  }, {
    key: "_getRowHeight",
    value: function _getRowHeight(rowIndex) {
      var rowHeight = this.props.rowHeight;
      return typeof rowHeight === 'function' ? rowHeight({
        index: rowIndex
      }) : rowHeight;
    }
  }, {
    key: "_onScroll",
    value: function _onScroll(_ref7) {
      var clientHeight = _ref7.clientHeight,
        scrollHeight = _ref7.scrollHeight,
        scrollTop = _ref7.scrollTop;
      var onScroll = this.props.onScroll;
      onScroll({
        clientHeight: clientHeight,
        scrollHeight: scrollHeight,
        scrollTop: scrollTop
      });
    }
  }, {
    key: "_onSectionRendered",
    value: function _onSectionRendered(_ref8) {
      var rowOverscanStartIndex = _ref8.rowOverscanStartIndex,
        rowOverscanStopIndex = _ref8.rowOverscanStopIndex,
        rowStartIndex = _ref8.rowStartIndex,
        rowStopIndex = _ref8.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;
      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }, {
    key: "_setRef",
    value: function _setRef(ref) {
      this.Grid = ref;
    }
  }, {
    key: "_setScrollbarWidth",
    value: function _setScrollbarWidth() {
      var scrollbarWidth = this.getScrollbarWidth();
      this.setState({
        scrollbarWidth: scrollbarWidth
      });
    }
  }]);
  return Table;
}(react.PureComponent);
(0,defineProperty/* default */.Z)(Table_Table, "defaultProps", {
  disableHeader: false,
  estimatedRowSize: 30,
  headerHeight: 0,
  headerStyle: {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanIndicesGetter: accessibilityOverscanIndicesGetter_defaultOverscanIndicesGetter,
  overscanRowCount: 10,
  rowRenderer: defaultRowRenderer,
  headerRowRenderer: defaultHeaderRowRenderer,
  rowStyle: {},
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
});

Table_Table.propTypes =  false ? 0 : {};

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/Table/index.js










/* harmony default export */ var es_Table = ((/* unused pure expression or super */ null && (Table)));

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js

var mountedInstances = [];
var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;
function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;
    if (document.body && originalBodyPointerEvents != null) {
      document.body.style.pointerEvents = originalBodyPointerEvents;
    }
    originalBodyPointerEvents = null;
  }
}
function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(function (instance) {
    return instance.__resetIsScrolling();
  });
}
function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    cancelAnimationTimeout(disablePointerEventsTimeoutId);
  }
  var maximumTimeout = 0;
  mountedInstances.forEach(function (instance) {
    maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
  });
  disablePointerEventsTimeoutId = requestAnimationTimeout(enablePointerEventsAfterDelayCallback, maximumTimeout);
}
function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null && document.body) {
    originalBodyPointerEvents = document.body.style.pointerEvents;
    document.body.style.pointerEvents = 'none';
  }
  enablePointerEventsAfterDelay();
  mountedInstances.forEach(function (instance) {
    if (instance.props.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent();
    }
  });
}
function registerScrollListener(component, element) {
  if (!mountedInstances.some(function (instance) {
    return instance.props.scrollElement === element;
  })) {
    element.addEventListener('scroll', onScrollWindow);
  }
  mountedInstances.push(component);
}
function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(function (instance) {
    return instance !== component;
  });
  if (!mountedInstances.length) {
    element.removeEventListener('scroll', onScrollWindow);
    if (disablePointerEventsTimeoutId) {
      cancelAnimationTimeout(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/WindowScroller/utils/dimensions.js
/**
 * Gets the dimensions of the element, accounting for API differences between
 * `window` and other DOM elements.
 */
// TODO Move this into WindowScroller and import from there
var isWindow = function isWindow(element) {
  return element === window;
};
var getBoundingBox = function getBoundingBox(element) {
  return element.getBoundingClientRect();
};
function getDimensions(scrollElement, props) {
  if (!scrollElement) {
    return {
      height: props.serverHeight,
      width: props.serverWidth
    };
  } else if (isWindow(scrollElement)) {
    var _window = window,
      innerHeight = _window.innerHeight,
      innerWidth = _window.innerWidth;
    return {
      height: typeof innerHeight === 'number' ? innerHeight : 0,
      width: typeof innerWidth === 'number' ? innerWidth : 0
    };
  } else {
    return getBoundingBox(scrollElement);
  }
}
/**
 * Gets the vertical and horizontal position of an element within its scroll container.
 * Elements that have been “scrolled past” return negative values.
 * Handles edge-case where a user is navigating back (history) from an already-scrolled page.
 * In this case the body’s top or left position will be a negative number and this element’s top or left will be increased (by that amount).
 */

function getPositionOffset(element, container) {
  if (isWindow(container) && document.documentElement) {
    var containerElement = document.documentElement;
    var elementRect = getBoundingBox(element);
    var containerRect = getBoundingBox(containerElement);
    return {
      top: elementRect.top - containerRect.top,
      left: elementRect.left - containerRect.left
    };
  } else {
    var scrollOffset = getScrollOffset(container);
    var _elementRect = getBoundingBox(element);
    var _containerRect = getBoundingBox(container);
    return {
      top: _elementRect.top + scrollOffset.top - _containerRect.top,
      left: _elementRect.left + scrollOffset.left - _containerRect.left
    };
  }
}
/**
 * Gets the vertical and horizontal scroll amount of the element, accounting for IE compatibility
 * and API differences between `window` and other DOM elements.
 */

function getScrollOffset(element) {
  if (isWindow(element) && document.documentElement) {
    return {
      top: 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop,
      left: 'scrollX' in window ? window.scrollX : document.documentElement.scrollLeft
    };
  } else {
    return {
      top: element.scrollTop,
      left: element.scrollLeft
    };
  }
}
;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/WindowScroller/WindowScroller.js







var WindowScroller_class, WindowScroller_temp;
function WindowScroller_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function WindowScroller_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      WindowScroller_ownKeys(source, true).forEach(function (key) {
        (0,defineProperty/* default */.Z)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      WindowScroller_ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}






/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var WindowScroller_IS_SCROLLING_TIMEOUT = 150;
var getWindow = function getWindow() {
  return typeof window !== 'undefined' ? window : undefined;
};
var WindowScroller_WindowScroller = (WindowScroller_temp = WindowScroller_class = /*#__PURE__*/
function (_React$PureComponent) {
  (0,inherits/* default */.Z)(WindowScroller, _React$PureComponent);
  function WindowScroller() {
    var _getPrototypeOf2;
    var _this;
    (0,classCallCheck/* default */.Z)(this, WindowScroller);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,possibleConstructorReturn/* default */.Z)(this, (_getPrototypeOf2 = (0,getPrototypeOf/* default */.Z)(WindowScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_window", getWindow());
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_isMounted", false);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_positionFromTop", 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_positionFromLeft", 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_detectElementResize", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_child", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", WindowScroller_objectSpread({}, getDimensions(_this.props.scrollElement, _this.props), {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    }));
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_registerChild", function (element) {
      if (element && !(element instanceof Element)) {
        console.warn('WindowScroller registerChild expects to be passed Element or null');
      }
      _this._child = element;
      _this.updatePosition();
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onChildScroll", function (_ref) {
      var scrollTop = _ref.scrollTop;
      if (_this.state.scrollTop === scrollTop) {
        return;
      }
      var scrollElement = _this.props.scrollElement;
      if (scrollElement) {
        if (typeof scrollElement.scrollTo === 'function') {
          scrollElement.scrollTo(0, scrollTop + _this._positionFromTop);
        } else {
          scrollElement.scrollTop = scrollTop + _this._positionFromTop;
        }
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_registerResizeListener", function (element) {
      if (element === window) {
        window.addEventListener('resize', _this._onResize, false);
      } else {
        _this._detectElementResize.addResizeListener(element, _this._onResize);
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_unregisterResizeListener", function (element) {
      if (element === window) {
        window.removeEventListener('resize', _this._onResize, false);
      } else if (element) {
        _this._detectElementResize.removeResizeListener(element, _this._onResize);
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "_onResize", function () {
      _this.updatePosition();
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "__handleWindowScrollEvent", function () {
      if (!_this._isMounted) {
        return;
      }
      var onScroll = _this.props.onScroll;
      var scrollElement = _this.props.scrollElement;
      if (scrollElement) {
        var scrollOffset = getScrollOffset(scrollElement);
        var scrollLeft = Math.max(0, scrollOffset.left - _this._positionFromLeft);
        var scrollTop = Math.max(0, scrollOffset.top - _this._positionFromTop);
        _this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
        onScroll({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "__resetIsScrolling", function () {
      _this.setState({
        isScrolling: false
      });
    });
    return _this;
  }
  (0,createClass/* default */.Z)(WindowScroller, [{
    key: "updatePosition",
    value: function updatePosition() {
      var scrollElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.scrollElement;
      var onResize = this.props.onResize;
      var _this$state = this.state,
        height = _this$state.height,
        width = _this$state.width;
      var thisNode = this._child || react_dom.findDOMNode(this);
      if (thisNode instanceof Element && scrollElement) {
        var offset = getPositionOffset(thisNode, scrollElement);
        this._positionFromTop = offset.top;
        this._positionFromLeft = offset.left;
      }
      var dimensions = getDimensions(scrollElement, this.props);
      if (height !== dimensions.height || width !== dimensions.width) {
        this.setState({
          height: dimensions.height,
          width: dimensions.width
        });
        onResize({
          height: dimensions.height,
          width: dimensions.width
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var scrollElement = this.props.scrollElement;
      this._detectElementResize = createDetectElementResize();
      this.updatePosition(scrollElement);
      if (scrollElement) {
        registerScrollListener(this, scrollElement);
        this._registerResizeListener(scrollElement);
      }
      this._isMounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var scrollElement = this.props.scrollElement;
      var prevScrollElement = prevProps.scrollElement;
      if (prevScrollElement !== scrollElement && prevScrollElement != null && scrollElement != null) {
        this.updatePosition(scrollElement);
        unregisterScrollListener(this, prevScrollElement);
        registerScrollListener(this, scrollElement);
        this._unregisterResizeListener(prevScrollElement);
        this._registerResizeListener(scrollElement);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var scrollElement = this.props.scrollElement;
      if (scrollElement) {
        unregisterScrollListener(this, scrollElement);
        this._unregisterResizeListener(scrollElement);
      }
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state2 = this.state,
        isScrolling = _this$state2.isScrolling,
        scrollTop = _this$state2.scrollTop,
        scrollLeft = _this$state2.scrollLeft,
        height = _this$state2.height,
        width = _this$state2.width;
      return children({
        onChildScroll: this._onChildScroll,
        registerChild: this._registerChild,
        height: height,
        isScrolling: isScrolling,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        width: width
      });
    }
  }]);
  return WindowScroller;
}(react.PureComponent), (0,defineProperty/* default */.Z)(WindowScroller_class, "propTypes",  true ? null : 0), WindowScroller_temp);
(0,defineProperty/* default */.Z)(WindowScroller_WindowScroller, "defaultProps", {
  onResize: function onResize() {},
  onScroll: function onScroll() {},
  scrollingResetTimeInterval: WindowScroller_IS_SCROLLING_TIMEOUT,
  scrollElement: getWindow(),
  serverHeight: 0,
  serverWidth: 0
});


;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/WindowScroller/index.js

/* harmony default export */ var es_WindowScroller = ((/* unused pure expression or super */ null && (WindowScroller)));

;// CONCATENATED MODULE: ./node_modules/react-virtualized/dist/es/index.js













;// CONCATENATED MODULE: ./node_modules/react-sortable-tree/dist/index.esm.js








function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function index_esm_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function index_esm_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function index_esm_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) index_esm_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) index_esm_defineProperties(Constructor, staticProps);
  return Constructor;
}
function index_esm_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function (target) {
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
function index_esm_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      index_esm_ownKeys(Object(source), true).forEach(function (key) {
        index_esm_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      index_esm_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
    return arr2;
  }
}
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function index_esm_componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}
function index_esm_componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}
function index_esm_componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
index_esm_componentWillMount.__suppressDeprecationWarning = true;
index_esm_componentWillReceiveProps.__suppressDeprecationWarning = true;
index_esm_componentWillUpdate.__suppressDeprecationWarning = true;
function index_esm_polyfill(Component) {
  var prototype = Component.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }
  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = index_esm_componentWillMount;
    prototype.componentWillReceiveProps = index_esm_componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }
    prototype.componentWillUpdate = index_esm_componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component;
}

/**
 * Performs a depth-first traversal over all of the node descendants,
 * incrementing currentIndex by 1 for each
 */
function getNodeDataAtTreeIndexOrNextIndex(_ref) {
  var targetIndex = _ref.targetIndex,
    node = _ref.node,
    currentIndex = _ref.currentIndex,
    getNodeKey = _ref.getNodeKey,
    _ref$path = _ref.path,
    path = _ref$path === void 0 ? [] : _ref$path,
    _ref$lowerSiblingCoun = _ref.lowerSiblingCounts,
    lowerSiblingCounts = _ref$lowerSiblingCoun === void 0 ? [] : _ref$lowerSiblingCoun,
    _ref$ignoreCollapsed = _ref.ignoreCollapsed,
    ignoreCollapsed = _ref$ignoreCollapsed === void 0 ? true : _ref$ignoreCollapsed,
    _ref$isPseudoRoot = _ref.isPseudoRoot,
    isPseudoRoot = _ref$isPseudoRoot === void 0 ? false : _ref$isPseudoRoot;
  // The pseudo-root is not considered in the path
  var selfPath = !isPseudoRoot ? [].concat(_toConsumableArray(path), [getNodeKey({
    node: node,
    treeIndex: currentIndex
  })]) : []; // Return target node when found

  if (currentIndex === targetIndex) {
    return {
      node: node,
      lowerSiblingCounts: lowerSiblingCounts,
      path: selfPath
    };
  } // Add one and continue for nodes with no children or hidden children

  if (!node.children || ignoreCollapsed && node.expanded !== true) {
    return {
      nextIndex: currentIndex + 1
    };
  } // Iterate over each child and their descendants and return the
  // target node if childIndex reaches the targetIndex

  var childIndex = currentIndex + 1;
  var childCount = node.children.length;
  for (var i = 0; i < childCount; i += 1) {
    var result = getNodeDataAtTreeIndexOrNextIndex({
      ignoreCollapsed: ignoreCollapsed,
      getNodeKey: getNodeKey,
      targetIndex: targetIndex,
      node: node.children[i],
      currentIndex: childIndex,
      lowerSiblingCounts: [].concat(_toConsumableArray(lowerSiblingCounts), [childCount - i - 1]),
      path: selfPath
    });
    if (result.node) {
      return result;
    }
    childIndex = result.nextIndex;
  } // If the target node is not found, return the farthest traversed index

  return {
    nextIndex: childIndex
  };
}
function getDescendantCount(_ref2) {
  var node = _ref2.node,
    _ref2$ignoreCollapsed = _ref2.ignoreCollapsed,
    ignoreCollapsed = _ref2$ignoreCollapsed === void 0 ? true : _ref2$ignoreCollapsed;
  return getNodeDataAtTreeIndexOrNextIndex({
    getNodeKey: function getNodeKey() {},
    ignoreCollapsed: ignoreCollapsed,
    node: node,
    currentIndex: 0,
    targetIndex: -1
  }).nextIndex - 1;
}
/**
 * Walk all descendants of the given node, depth-first
 *
 * @param {Object} args - Function parameters
 * @param {function} args.callback - Function to call on each node
 * @param {function} args.getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean} args.ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 * @param {boolean=} args.isPseudoRoot - If true, this node has no real data, and only serves
 *                                        as the parent of all the nodes in the tree
 * @param {Object} args.node - A tree node
 * @param {Object=} args.parentNode - The parent node of `node`
 * @param {number} args.currentIndex - The treeIndex of `node`
 * @param {number[]|string[]} args.path - Array of keys leading up to node to be changed
 * @param {number[]} args.lowerSiblingCounts - An array containing the count of siblings beneath the
 *                                             previous nodes in this path
 *
 * @return {number|false} nextIndex - Index of the next sibling of `node`,
 *                                    or false if the walk should be terminated
 */

function walkDescendants(_ref3) {
  var callback = _ref3.callback,
    getNodeKey = _ref3.getNodeKey,
    ignoreCollapsed = _ref3.ignoreCollapsed,
    _ref3$isPseudoRoot = _ref3.isPseudoRoot,
    isPseudoRoot = _ref3$isPseudoRoot === void 0 ? false : _ref3$isPseudoRoot,
    node = _ref3.node,
    _ref3$parentNode = _ref3.parentNode,
    parentNode = _ref3$parentNode === void 0 ? null : _ref3$parentNode,
    currentIndex = _ref3.currentIndex,
    _ref3$path = _ref3.path,
    path = _ref3$path === void 0 ? [] : _ref3$path,
    _ref3$lowerSiblingCou = _ref3.lowerSiblingCounts,
    lowerSiblingCounts = _ref3$lowerSiblingCou === void 0 ? [] : _ref3$lowerSiblingCou;
  // The pseudo-root is not considered in the path
  var selfPath = isPseudoRoot ? [] : [].concat(_toConsumableArray(path), [getNodeKey({
    node: node,
    treeIndex: currentIndex
  })]);
  var selfInfo = isPseudoRoot ? null : {
    node: node,
    parentNode: parentNode,
    path: selfPath,
    lowerSiblingCounts: lowerSiblingCounts,
    treeIndex: currentIndex
  };
  if (!isPseudoRoot) {
    var callbackResult = callback(selfInfo); // Cut walk short if the callback returned false

    if (callbackResult === false) {
      return false;
    }
  } // Return self on nodes with no children or hidden children

  if (!node.children || node.expanded !== true && ignoreCollapsed && !isPseudoRoot) {
    return currentIndex;
  } // Get all descendants

  var childIndex = currentIndex;
  var childCount = node.children.length;
  if (typeof node.children !== 'function') {
    for (var i = 0; i < childCount; i += 1) {
      childIndex = walkDescendants({
        callback: callback,
        getNodeKey: getNodeKey,
        ignoreCollapsed: ignoreCollapsed,
        node: node.children[i],
        parentNode: isPseudoRoot ? null : node,
        currentIndex: childIndex + 1,
        lowerSiblingCounts: [].concat(_toConsumableArray(lowerSiblingCounts), [childCount - i - 1]),
        path: selfPath
      }); // Cut walk short if the callback returned false

      if (childIndex === false) {
        return false;
      }
    }
  }
  return childIndex;
}
/**
 * Perform a change on the given node and all its descendants, traversing the tree depth-first
 *
 * @param {Object} args - Function parameters
 * @param {function} args.callback - Function to call on each node
 * @param {function} args.getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean} args.ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 * @param {boolean=} args.isPseudoRoot - If true, this node has no real data, and only serves
 *                                        as the parent of all the nodes in the tree
 * @param {Object} args.node - A tree node
 * @param {Object=} args.parentNode - The parent node of `node`
 * @param {number} args.currentIndex - The treeIndex of `node`
 * @param {number[]|string[]} args.path - Array of keys leading up to node to be changed
 * @param {number[]} args.lowerSiblingCounts - An array containing the count of siblings beneath the
 *                                             previous nodes in this path
 *
 * @return {number|false} nextIndex - Index of the next sibling of `node`,
 *                                    or false if the walk should be terminated
 */

function mapDescendants(_ref4) {
  var callback = _ref4.callback,
    getNodeKey = _ref4.getNodeKey,
    ignoreCollapsed = _ref4.ignoreCollapsed,
    _ref4$isPseudoRoot = _ref4.isPseudoRoot,
    isPseudoRoot = _ref4$isPseudoRoot === void 0 ? false : _ref4$isPseudoRoot,
    node = _ref4.node,
    _ref4$parentNode = _ref4.parentNode,
    parentNode = _ref4$parentNode === void 0 ? null : _ref4$parentNode,
    currentIndex = _ref4.currentIndex,
    _ref4$path = _ref4.path,
    path = _ref4$path === void 0 ? [] : _ref4$path,
    _ref4$lowerSiblingCou = _ref4.lowerSiblingCounts,
    lowerSiblingCounts = _ref4$lowerSiblingCou === void 0 ? [] : _ref4$lowerSiblingCou;
  var nextNode = _objectSpread2({}, node); // The pseudo-root is not considered in the path

  var selfPath = isPseudoRoot ? [] : [].concat(_toConsumableArray(path), [getNodeKey({
    node: nextNode,
    treeIndex: currentIndex
  })]);
  var selfInfo = {
    node: nextNode,
    parentNode: parentNode,
    path: selfPath,
    lowerSiblingCounts: lowerSiblingCounts,
    treeIndex: currentIndex
  }; // Return self on nodes with no children or hidden children

  if (!nextNode.children || nextNode.expanded !== true && ignoreCollapsed && !isPseudoRoot) {
    return {
      treeIndex: currentIndex,
      node: callback(selfInfo)
    };
  } // Get all descendants

  var childIndex = currentIndex;
  var childCount = nextNode.children.length;
  if (typeof nextNode.children !== 'function') {
    nextNode.children = nextNode.children.map(function (child, i) {
      var mapResult = mapDescendants({
        callback: callback,
        getNodeKey: getNodeKey,
        ignoreCollapsed: ignoreCollapsed,
        node: child,
        parentNode: isPseudoRoot ? null : nextNode,
        currentIndex: childIndex + 1,
        lowerSiblingCounts: [].concat(_toConsumableArray(lowerSiblingCounts), [childCount - i - 1]),
        path: selfPath
      });
      childIndex = mapResult.treeIndex;
      return mapResult.node;
    });
  }
  return {
    node: callback(selfInfo),
    treeIndex: childIndex
  };
}
/**
 * Count all the visible (expanded) descendants in the tree data.
 *
 * @param {!Object[]} treeData - Tree data
 *
 * @return {number} count
 */

function getVisibleNodeCount(_ref5) {
  var treeData = _ref5.treeData;
  var traverse = function traverse(node) {
    if (!node.children || node.expanded !== true || typeof node.children === 'function') {
      return 1;
    }
    return 1 + node.children.reduce(function (total, currentNode) {
      return total + traverse(currentNode);
    }, 0);
  };
  return treeData.reduce(function (total, currentNode) {
    return total + traverse(currentNode);
  }, 0);
}
/**
 * Get the <targetIndex>th visible node in the tree data.
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!number} targetIndex - The index of the node to search for
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 *
 * @return {{
 *      node: Object,
 *      path: []string|[]number,
 *      lowerSiblingCounts: []number
 *  }|null} node - The node at targetIndex, or null if not found
 */

function getVisibleNodeInfoAtIndex(_ref6) {
  var treeData = _ref6.treeData,
    targetIndex = _ref6.index,
    getNodeKey = _ref6.getNodeKey;
  if (!treeData || treeData.length < 1) {
    return null;
  } // Call the tree traversal with a pseudo-root node

  var result = getNodeDataAtTreeIndexOrNextIndex({
    targetIndex: targetIndex,
    getNodeKey: getNodeKey,
    node: {
      children: treeData,
      expanded: true
    },
    currentIndex: -1,
    path: [],
    lowerSiblingCounts: [],
    isPseudoRoot: true
  });
  if (result.node) {
    return result;
  }
  return null;
}
/**
 * Walk descendants depth-first and call a callback on each
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {function} callback - Function to call on each node
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return void
 */

function walk(_ref7) {
  var treeData = _ref7.treeData,
    getNodeKey = _ref7.getNodeKey,
    callback = _ref7.callback,
    _ref7$ignoreCollapsed = _ref7.ignoreCollapsed,
    ignoreCollapsed = _ref7$ignoreCollapsed === void 0 ? true : _ref7$ignoreCollapsed;
  if (!treeData || treeData.length < 1) {
    return;
  }
  walkDescendants({
    callback: callback,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    isPseudoRoot: true,
    node: {
      children: treeData
    },
    currentIndex: -1,
    path: [],
    lowerSiblingCounts: []
  });
}
/**
 * Perform a depth-first transversal of the descendants and
 *  make a change to every node in the tree
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {function} callback - Function to call on each node
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object[]} changedTreeData - The changed tree data
 */

function map(_ref8) {
  var treeData = _ref8.treeData,
    getNodeKey = _ref8.getNodeKey,
    callback = _ref8.callback,
    _ref8$ignoreCollapsed = _ref8.ignoreCollapsed,
    ignoreCollapsed = _ref8$ignoreCollapsed === void 0 ? true : _ref8$ignoreCollapsed;
  if (!treeData || treeData.length < 1) {
    return [];
  }
  return mapDescendants({
    callback: callback,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    isPseudoRoot: true,
    node: {
      children: treeData
    },
    currentIndex: -1,
    path: [],
    lowerSiblingCounts: []
  }).node.children;
}
/**
 * Expand or close every node in the tree
 *
 * @param {!Object[]} treeData - Tree data
 * @param {?boolean} expanded - Whether the node is expanded or not
 *
 * @return {Object[]} changedTreeData - The changed tree data
 */

function toggleExpandedForAll(_ref9) {
  var treeData = _ref9.treeData,
    _ref9$expanded = _ref9.expanded,
    expanded = _ref9$expanded === void 0 ? true : _ref9$expanded;
  return map({
    treeData: treeData,
    callback: function callback(_ref10) {
      var node = _ref10.node;
      return _objectSpread2(_objectSpread2({}, node), {}, {
        expanded: expanded
      });
    },
    getNodeKey: function getNodeKey(_ref11) {
      var treeIndex = _ref11.treeIndex;
      return treeIndex;
    },
    ignoreCollapsed: false
  });
}
/**
 * Replaces node at path with object, or callback-defined object
 *
 * @param {!Object[]} treeData
 * @param {number[]|string[]} path - Array of keys leading up to node to be changed
 * @param {function|any} newNode - Node to replace the node at the path with, or a function producing the new node
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object[]} changedTreeData - The changed tree data
 */

function changeNodeAtPath(_ref12) {
  var treeData = _ref12.treeData,
    path = _ref12.path,
    newNode = _ref12.newNode,
    getNodeKey = _ref12.getNodeKey,
    _ref12$ignoreCollapse = _ref12.ignoreCollapsed,
    ignoreCollapsed = _ref12$ignoreCollapse === void 0 ? true : _ref12$ignoreCollapse;
  var RESULT_MISS = 'RESULT_MISS';
  var traverse = function traverse(_ref13) {
    var _ref13$isPseudoRoot = _ref13.isPseudoRoot,
      isPseudoRoot = _ref13$isPseudoRoot === void 0 ? false : _ref13$isPseudoRoot,
      node = _ref13.node,
      currentTreeIndex = _ref13.currentTreeIndex,
      pathIndex = _ref13.pathIndex;
    if (!isPseudoRoot && getNodeKey({
      node: node,
      treeIndex: currentTreeIndex
    }) !== path[pathIndex]) {
      return RESULT_MISS;
    }
    if (pathIndex >= path.length - 1) {
      // If this is the final location in the path, return its changed form
      return typeof newNode === 'function' ? newNode({
        node: node,
        treeIndex: currentTreeIndex
      }) : newNode;
    }
    if (!node.children) {
      // If this node is part of the path, but has no children, return the unchanged node
      throw new Error('Path referenced children of node with no children.');
    }
    var nextTreeIndex = currentTreeIndex + 1;
    for (var i = 0; i < node.children.length; i += 1) {
      var _result = traverse({
        node: node.children[i],
        currentTreeIndex: nextTreeIndex,
        pathIndex: pathIndex + 1
      }); // If the result went down the correct path

      if (_result !== RESULT_MISS) {
        if (_result) {
          // If the result was truthy (in this case, an object),
          //  pass it to the next level of recursion up
          return _objectSpread2(_objectSpread2({}, node), {}, {
            children: [].concat(_toConsumableArray(node.children.slice(0, i)), [_result], _toConsumableArray(node.children.slice(i + 1)))
          });
        } // If the result was falsy (returned from the newNode function), then
        //  delete the node from the array.

        return _objectSpread2(_objectSpread2({}, node), {}, {
          children: [].concat(_toConsumableArray(node.children.slice(0, i)), _toConsumableArray(node.children.slice(i + 1)))
        });
      }
      nextTreeIndex += 1 + getDescendantCount({
        node: node.children[i],
        ignoreCollapsed: ignoreCollapsed
      });
    }
    return RESULT_MISS;
  }; // Use a pseudo-root node in the beginning traversal

  var result = traverse({
    node: {
      children: treeData
    },
    currentTreeIndex: -1,
    pathIndex: -1,
    isPseudoRoot: true
  });
  if (result === RESULT_MISS) {
    throw new Error('No node found at the given path.');
  }
  return result.children;
}
/**
 * Removes the node at the specified path and returns the resulting treeData.
 *
 * @param {!Object[]} treeData
 * @param {number[]|string[]} path - Array of keys leading up to node to be deleted
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object[]} changedTreeData - The tree data with the node removed
 */

function removeNodeAtPath(_ref14) {
  var treeData = _ref14.treeData,
    path = _ref14.path,
    getNodeKey = _ref14.getNodeKey,
    _ref14$ignoreCollapse = _ref14.ignoreCollapsed,
    ignoreCollapsed = _ref14$ignoreCollapse === void 0 ? true : _ref14$ignoreCollapse;
  return changeNodeAtPath({
    treeData: treeData,
    path: path,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    newNode: null // Delete the node
  });
}
/**
 * Removes the node at the specified path and returns the resulting treeData.
 *
 * @param {!Object[]} treeData
 * @param {number[]|string[]} path - Array of keys leading up to node to be deleted
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object} result
 * @return {Object[]} result.treeData - The tree data with the node removed
 * @return {Object} result.node - The node that was removed
 * @return {number} result.treeIndex - The previous treeIndex of the removed node
 */

function removeNode(_ref15) {
  var treeData = _ref15.treeData,
    path = _ref15.path,
    getNodeKey = _ref15.getNodeKey,
    _ref15$ignoreCollapse = _ref15.ignoreCollapsed,
    ignoreCollapsed = _ref15$ignoreCollapse === void 0 ? true : _ref15$ignoreCollapse;
  var removedNode = null;
  var removedTreeIndex = null;
  var nextTreeData = changeNodeAtPath({
    treeData: treeData,
    path: path,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    newNode: function newNode(_ref16) {
      var node = _ref16.node,
        treeIndex = _ref16.treeIndex;
      // Store the target node and delete it from the tree
      removedNode = node;
      removedTreeIndex = treeIndex;
      return null;
    }
  });
  return {
    treeData: nextTreeData,
    node: removedNode,
    treeIndex: removedTreeIndex
  };
}
/**
 * Gets the node at the specified path
 *
 * @param {!Object[]} treeData
 * @param {number[]|string[]} path - Array of keys leading up to node to be deleted
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object|null} nodeInfo - The node info at the given path, or null if not found
 */

function getNodeAtPath(_ref17) {
  var treeData = _ref17.treeData,
    path = _ref17.path,
    getNodeKey = _ref17.getNodeKey,
    _ref17$ignoreCollapse = _ref17.ignoreCollapsed,
    ignoreCollapsed = _ref17$ignoreCollapse === void 0 ? true : _ref17$ignoreCollapse;
  var foundNodeInfo = null;
  try {
    changeNodeAtPath({
      treeData: treeData,
      path: path,
      getNodeKey: getNodeKey,
      ignoreCollapsed: ignoreCollapsed,
      newNode: function newNode(_ref18) {
        var node = _ref18.node,
          treeIndex = _ref18.treeIndex;
        foundNodeInfo = {
          node: node,
          treeIndex: treeIndex
        };
        return node;
      }
    });
  } catch (err) {// Ignore the error -- the null return will be explanation enough
  }
  return foundNodeInfo;
}
/**
 * Adds the node to the specified parent and returns the resulting treeData.
 *
 * @param {!Object[]} treeData
 * @param {!Object} newNode - The node to insert
 * @param {number|string} parentKey - The key of the to-be parentNode of the node
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 * @param {boolean=} expandParent - If true, expands the parentNode specified by parentPath
 * @param {boolean=} addAsFirstChild - If true, adds new node as first child of tree
 *
 * @return {Object} result
 * @return {Object[]} result.treeData - The updated tree data
 * @return {number} result.treeIndex - The tree index at which the node was inserted
 */

function addNodeUnderParent(_ref19) {
  var treeData = _ref19.treeData,
    newNode = _ref19.newNode,
    _ref19$parentKey = _ref19.parentKey,
    parentKey = _ref19$parentKey === void 0 ? null : _ref19$parentKey,
    getNodeKey = _ref19.getNodeKey,
    _ref19$ignoreCollapse = _ref19.ignoreCollapsed,
    ignoreCollapsed = _ref19$ignoreCollapse === void 0 ? true : _ref19$ignoreCollapse,
    _ref19$expandParent = _ref19.expandParent,
    expandParent = _ref19$expandParent === void 0 ? false : _ref19$expandParent,
    _ref19$addAsFirstChil = _ref19.addAsFirstChild,
    addAsFirstChild = _ref19$addAsFirstChil === void 0 ? false : _ref19$addAsFirstChil;
  if (parentKey === null) {
    return addAsFirstChild ? {
      treeData: [newNode].concat(_toConsumableArray(treeData || [])),
      treeIndex: 0
    } : {
      treeData: [].concat(_toConsumableArray(treeData || []), [newNode]),
      treeIndex: (treeData || []).length
    };
  }
  var insertedTreeIndex = null;
  var hasBeenAdded = false;
  var changedTreeData = map({
    treeData: treeData,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    callback: function callback(_ref20) {
      var node = _ref20.node,
        treeIndex = _ref20.treeIndex,
        path = _ref20.path;
      var key = path ? path[path.length - 1] : null; // Return nodes that are not the parent as-is

      if (hasBeenAdded || key !== parentKey) {
        return node;
      }
      hasBeenAdded = true;
      var parentNode = _objectSpread2({}, node);
      if (expandParent) {
        parentNode.expanded = true;
      } // If no children exist yet, just add the single newNode

      if (!parentNode.children) {
        insertedTreeIndex = treeIndex + 1;
        return _objectSpread2(_objectSpread2({}, parentNode), {}, {
          children: [newNode]
        });
      }
      if (typeof parentNode.children === 'function') {
        throw new Error('Cannot add to children defined by a function');
      }
      var nextTreeIndex = treeIndex + 1;
      for (var i = 0; i < parentNode.children.length; i += 1) {
        nextTreeIndex += 1 + getDescendantCount({
          node: parentNode.children[i],
          ignoreCollapsed: ignoreCollapsed
        });
      }
      insertedTreeIndex = nextTreeIndex;
      var children = addAsFirstChild ? [newNode].concat(_toConsumableArray(parentNode.children)) : [].concat(_toConsumableArray(parentNode.children), [newNode]);
      return _objectSpread2(_objectSpread2({}, parentNode), {}, {
        children: children
      });
    }
  });
  if (!hasBeenAdded) {
    throw new Error('No node found with the given key.');
  }
  return {
    treeData: changedTreeData,
    treeIndex: insertedTreeIndex
  };
}
function addNodeAtDepthAndIndex(_ref21) {
  var targetDepth = _ref21.targetDepth,
    minimumTreeIndex = _ref21.minimumTreeIndex,
    newNode = _ref21.newNode,
    ignoreCollapsed = _ref21.ignoreCollapsed,
    expandParent = _ref21.expandParent,
    _ref21$isPseudoRoot = _ref21.isPseudoRoot,
    isPseudoRoot = _ref21$isPseudoRoot === void 0 ? false : _ref21$isPseudoRoot,
    isLastChild = _ref21.isLastChild,
    node = _ref21.node,
    currentIndex = _ref21.currentIndex,
    currentDepth = _ref21.currentDepth,
    getNodeKey = _ref21.getNodeKey,
    _ref21$path = _ref21.path,
    path = _ref21$path === void 0 ? [] : _ref21$path;
  var selfPath = function selfPath(n) {
    return isPseudoRoot ? [] : [].concat(_toConsumableArray(path), [getNodeKey({
      node: n,
      treeIndex: currentIndex
    })]);
  }; // If the current position is the only possible place to add, add it

  if (currentIndex >= minimumTreeIndex - 1 || isLastChild && !(node.children && node.children.length)) {
    if (typeof node.children === 'function') {
      throw new Error('Cannot add to children defined by a function');
    } else {
      var extraNodeProps = expandParent ? {
        expanded: true
      } : {};
      var _nextNode = _objectSpread2(_objectSpread2(_objectSpread2({}, node), extraNodeProps), {}, {
        children: node.children ? [newNode].concat(_toConsumableArray(node.children)) : [newNode]
      });
      return {
        node: _nextNode,
        nextIndex: currentIndex + 2,
        insertedTreeIndex: currentIndex + 1,
        parentPath: selfPath(_nextNode),
        parentNode: isPseudoRoot ? null : _nextNode
      };
    }
  } // If this is the target depth for the insertion,
  // i.e., where the newNode can be added to the current node's children

  if (currentDepth >= targetDepth - 1) {
    // Skip over nodes with no children or hidden children
    if (!node.children || typeof node.children === 'function' || node.expanded !== true && ignoreCollapsed && !isPseudoRoot) {
      return {
        node: node,
        nextIndex: currentIndex + 1
      };
    } // Scan over the children to see if there's a place among them that fulfills
    // the minimumTreeIndex requirement

    var _childIndex = currentIndex + 1;
    var _insertedTreeIndex = null;
    var insertIndex = null;
    for (var i = 0; i < node.children.length; i += 1) {
      // If a valid location is found, mark it as the insertion location and
      // break out of the loop
      if (_childIndex >= minimumTreeIndex) {
        _insertedTreeIndex = _childIndex;
        insertIndex = i;
        break;
      } // Increment the index by the child itself plus the number of descendants it has

      _childIndex += 1 + getDescendantCount({
        node: node.children[i],
        ignoreCollapsed: ignoreCollapsed
      });
    } // If no valid indices to add the node were found

    if (insertIndex === null) {
      // If the last position in this node's children is less than the minimum index
      // and there are more children on the level of this node, return without insertion
      if (_childIndex < minimumTreeIndex && !isLastChild) {
        return {
          node: node,
          nextIndex: _childIndex
        };
      } // Use the last position in the children array to insert the newNode

      _insertedTreeIndex = _childIndex;
      insertIndex = node.children.length;
    } // Insert the newNode at the insertIndex

    var _nextNode2 = _objectSpread2(_objectSpread2({}, node), {}, {
      children: [].concat(_toConsumableArray(node.children.slice(0, insertIndex)), [newNode], _toConsumableArray(node.children.slice(insertIndex)))
    }); // Return node with successful insert result

    return {
      node: _nextNode2,
      nextIndex: _childIndex,
      insertedTreeIndex: _insertedTreeIndex,
      parentPath: selfPath(_nextNode2),
      parentNode: isPseudoRoot ? null : _nextNode2
    };
  } // Skip over nodes with no children or hidden children

  if (!node.children || typeof node.children === 'function' || node.expanded !== true && ignoreCollapsed && !isPseudoRoot) {
    return {
      node: node,
      nextIndex: currentIndex + 1
    };
  } // Get all descendants

  var insertedTreeIndex = null;
  var pathFragment = null;
  var parentNode = null;
  var childIndex = currentIndex + 1;
  var newChildren = node.children;
  if (typeof newChildren !== 'function') {
    newChildren = newChildren.map(function (child, i) {
      if (insertedTreeIndex !== null) {
        return child;
      }
      var mapResult = addNodeAtDepthAndIndex({
        targetDepth: targetDepth,
        minimumTreeIndex: minimumTreeIndex,
        newNode: newNode,
        ignoreCollapsed: ignoreCollapsed,
        expandParent: expandParent,
        isLastChild: isLastChild && i === newChildren.length - 1,
        node: child,
        currentIndex: childIndex,
        currentDepth: currentDepth + 1,
        getNodeKey: getNodeKey,
        path: [] // Cannot determine the parent path until the children have been processed
      });

      if ('insertedTreeIndex' in mapResult) {
        insertedTreeIndex = mapResult.insertedTreeIndex;
        parentNode = mapResult.parentNode;
        pathFragment = mapResult.parentPath;
      }
      childIndex = mapResult.nextIndex;
      return mapResult.node;
    });
  }
  var nextNode = _objectSpread2(_objectSpread2({}, node), {}, {
    children: newChildren
  });
  var result = {
    node: nextNode,
    nextIndex: childIndex
  };
  if (insertedTreeIndex !== null) {
    result.insertedTreeIndex = insertedTreeIndex;
    result.parentPath = [].concat(_toConsumableArray(selfPath(nextNode)), _toConsumableArray(pathFragment));
    result.parentNode = parentNode;
  }
  return result;
}
/**
 * Insert a node into the tree at the given depth, after the minimum index
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!number} depth - The depth to insert the node at (the first level of the array being depth 0)
 * @param {!number} minimumTreeIndex - The lowest possible treeIndex to insert the node at
 * @param {!Object} newNode - The node to insert into the tree
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 * @param {boolean=} expandParent - If true, expands the parent of the inserted node
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 *
 * @return {Object} result
 * @return {Object[]} result.treeData - The tree data with the node added
 * @return {number} result.treeIndex - The tree index at which the node was inserted
 * @return {number[]|string[]} result.path - Array of keys leading to the node location after insertion
 * @return {Object} result.parentNode - The parent node of the inserted node
 */

function insertNode(_ref22) {
  var treeData = _ref22.treeData,
    targetDepth = _ref22.depth,
    minimumTreeIndex = _ref22.minimumTreeIndex,
    newNode = _ref22.newNode,
    _ref22$getNodeKey = _ref22.getNodeKey,
    getNodeKey = _ref22$getNodeKey === void 0 ? function () {} : _ref22$getNodeKey,
    _ref22$ignoreCollapse = _ref22.ignoreCollapsed,
    ignoreCollapsed = _ref22$ignoreCollapse === void 0 ? true : _ref22$ignoreCollapse,
    _ref22$expandParent = _ref22.expandParent,
    expandParent = _ref22$expandParent === void 0 ? false : _ref22$expandParent;
  if (!treeData && targetDepth === 0) {
    return {
      treeData: [newNode],
      treeIndex: 0,
      path: [getNodeKey({
        node: newNode,
        treeIndex: 0
      })],
      parentNode: null
    };
  }
  var insertResult = addNodeAtDepthAndIndex({
    targetDepth: targetDepth,
    minimumTreeIndex: minimumTreeIndex,
    newNode: newNode,
    ignoreCollapsed: ignoreCollapsed,
    expandParent: expandParent,
    getNodeKey: getNodeKey,
    isPseudoRoot: true,
    isLastChild: true,
    node: {
      children: treeData
    },
    currentIndex: -1,
    currentDepth: -1
  });
  if (!('insertedTreeIndex' in insertResult)) {
    throw new Error('No suitable position found to insert.');
  }
  var treeIndex = insertResult.insertedTreeIndex;
  return {
    treeData: insertResult.node.children,
    treeIndex: treeIndex,
    path: [].concat(_toConsumableArray(insertResult.parentPath), [getNodeKey({
      node: newNode,
      treeIndex: treeIndex
    })]),
    parentNode: insertResult.parentNode
  };
}
/**
 * Get tree data flattened.
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {{
 *      node: Object,
 *      path: []string|[]number,
 *      lowerSiblingCounts: []number
 *  }}[] nodes - The node array
 */

function getFlatDataFromTree(_ref23) {
  var treeData = _ref23.treeData,
    getNodeKey = _ref23.getNodeKey,
    _ref23$ignoreCollapse = _ref23.ignoreCollapsed,
    ignoreCollapsed = _ref23$ignoreCollapse === void 0 ? true : _ref23$ignoreCollapse;
  if (!treeData || treeData.length < 1) {
    return [];
  }
  var flattened = [];
  walk({
    treeData: treeData,
    getNodeKey: getNodeKey,
    ignoreCollapsed: ignoreCollapsed,
    callback: function callback(nodeInfo) {
      flattened.push(nodeInfo);
    }
  });
  return flattened;
}
/**
 * Generate a tree structure from flat data.
 *
 * @param {!Object[]} flatData
 * @param {!function=} getKey - Function to get the key from the nodeData
 * @param {!function=} getParentKey - Function to get the parent key from the nodeData
 * @param {string|number=} rootKey - The value returned by `getParentKey` that corresponds to the root node.
 *                                  For example, if your nodes have id 1-99, you might use rootKey = 0
 *
 * @return {Object[]} treeData - The flat data represented as a tree
 */

function getTreeFromFlatData(_ref24) {
  var flatData = _ref24.flatData,
    _ref24$getKey = _ref24.getKey,
    getKey = _ref24$getKey === void 0 ? function (node) {
      return node.id;
    } : _ref24$getKey,
    _ref24$getParentKey = _ref24.getParentKey,
    getParentKey = _ref24$getParentKey === void 0 ? function (node) {
      return node.parentId;
    } : _ref24$getParentKey,
    _ref24$rootKey = _ref24.rootKey,
    rootKey = _ref24$rootKey === void 0 ? '0' : _ref24$rootKey;
  if (!flatData) {
    return [];
  }
  var childrenToParents = {};
  flatData.forEach(function (child) {
    var parentKey = getParentKey(child);
    if (parentKey in childrenToParents) {
      childrenToParents[parentKey].push(child);
    } else {
      childrenToParents[parentKey] = [child];
    }
  });
  if (!(rootKey in childrenToParents)) {
    return [];
  }
  var trav = function trav(parent) {
    var parentKey = getKey(parent);
    if (parentKey in childrenToParents) {
      return _objectSpread2(_objectSpread2({}, parent), {}, {
        children: childrenToParents[parentKey].map(function (child) {
          return trav(child);
        })
      });
    }
    return _objectSpread2({}, parent);
  };
  return childrenToParents[rootKey].map(function (child) {
    return trav(child);
  });
}
/**
 * Check if a node is a descendant of another node.
 *
 * @param {!Object} older - Potential ancestor of younger node
 * @param {!Object} younger - Potential descendant of older node
 *
 * @return {boolean}
 */

function isDescendant(older, younger) {
  return !!older.children && typeof older.children !== 'function' && older.children.some(function (child) {
    return child === younger || isDescendant(child, younger);
  });
}
/**
 * Get the maximum depth of the children (the depth of the root node is 0).
 *
 * @param {!Object} node - Node in the tree
 * @param {?number} depth - The current depth
 *
 * @return {number} maxDepth - The deepest depth in the tree
 */

function getDepth(node) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!node.children) {
    return depth;
  }
  if (typeof node.children === 'function') {
    return depth + 1;
  }
  return node.children.reduce(function (deepest, child) {
    return Math.max(deepest, getDepth(child, depth + 1));
  }, depth);
}
/**
 * Find nodes matching a search query in the tree,
 *
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {!Object[]} treeData - Tree data
 * @param {?string|number} searchQuery - Function returning a boolean to indicate whether the node is a match or not
 * @param {!function} searchMethod - Function returning a boolean to indicate whether the node is a match or not
 * @param {?number} searchFocusOffset - The offset of the match to focus on
 *                                      (e.g., 0 focuses on the first match, 1 on the second)
 * @param {boolean=} expandAllMatchPaths - If true, expands the paths to any matched node
 * @param {boolean=} expandFocusMatchPaths - If true, expands the path to the focused node
 *
 * @return {Object[]} matches - An array of objects containing the matching `node`s, their `path`s and `treeIndex`s
 * @return {Object[]} treeData - The original tree data with all relevant nodes expanded.
 *                               If expandAllMatchPaths and expandFocusMatchPaths are both false,
 *                               it will be the same as the original tree data.
 */

function find(_ref25) {
  var getNodeKey = _ref25.getNodeKey,
    treeData = _ref25.treeData,
    searchQuery = _ref25.searchQuery,
    searchMethod = _ref25.searchMethod,
    searchFocusOffset = _ref25.searchFocusOffset,
    _ref25$expandAllMatch = _ref25.expandAllMatchPaths,
    expandAllMatchPaths = _ref25$expandAllMatch === void 0 ? false : _ref25$expandAllMatch,
    _ref25$expandFocusMat = _ref25.expandFocusMatchPaths,
    expandFocusMatchPaths = _ref25$expandFocusMat === void 0 ? true : _ref25$expandFocusMat;
  var matchCount = 0;
  var trav = function trav(_ref26) {
    var _ref26$isPseudoRoot = _ref26.isPseudoRoot,
      isPseudoRoot = _ref26$isPseudoRoot === void 0 ? false : _ref26$isPseudoRoot,
      node = _ref26.node,
      currentIndex = _ref26.currentIndex,
      _ref26$path = _ref26.path,
      path = _ref26$path === void 0 ? [] : _ref26$path;
    var matches = [];
    var isSelfMatch = false;
    var hasFocusMatch = false; // The pseudo-root is not considered in the path

    var selfPath = isPseudoRoot ? [] : [].concat(_toConsumableArray(path), [getNodeKey({
      node: node,
      treeIndex: currentIndex
    })]);
    var extraInfo = isPseudoRoot ? null : {
      path: selfPath,
      treeIndex: currentIndex
    }; // Nodes with with children that aren't lazy

    var hasChildren = node.children && typeof node.children !== 'function' && node.children.length > 0; // Examine the current node to see if it is a match

    if (!isPseudoRoot && searchMethod(_objectSpread2(_objectSpread2({}, extraInfo), {}, {
      node: node,
      searchQuery: searchQuery
    }))) {
      if (matchCount === searchFocusOffset) {
        hasFocusMatch = true;
      } // Keep track of the number of matching nodes, so we know when the searchFocusOffset
      //  is reached

      matchCount += 1; // We cannot add this node to the matches right away, as it may be changed
      //  during the search of the descendants. The entire node is used in
      //  comparisons between nodes inside the `matches` and `treeData` results
      //  of this method (`find`)

      isSelfMatch = true;
    }
    var childIndex = currentIndex;
    var newNode = _objectSpread2({}, node);
    if (hasChildren) {
      // Get all descendants
      newNode.children = newNode.children.map(function (child) {
        var mapResult = trav({
          node: child,
          currentIndex: childIndex + 1,
          path: selfPath
        }); // Ignore hidden nodes by only advancing the index counter to the returned treeIndex
        // if the child is expanded.
        //
        // The child could have been expanded from the start,
        // or expanded due to a matching node being found in its descendants

        if (mapResult.node.expanded) {
          childIndex = mapResult.treeIndex;
        } else {
          childIndex += 1;
        }
        if (mapResult.matches.length > 0 || mapResult.hasFocusMatch) {
          matches = [].concat(_toConsumableArray(matches), _toConsumableArray(mapResult.matches));
          if (mapResult.hasFocusMatch) {
            hasFocusMatch = true;
          } // Expand the current node if it has descendants matching the search
          // and the settings are set to do so.

          if (expandAllMatchPaths && mapResult.matches.length > 0 || (expandAllMatchPaths || expandFocusMatchPaths) && mapResult.hasFocusMatch) {
            newNode.expanded = true;
          }
        }
        return mapResult.node;
      });
    } // Cannot assign a treeIndex to hidden nodes

    if (!isPseudoRoot && !newNode.expanded) {
      matches = matches.map(function (match) {
        return _objectSpread2(_objectSpread2({}, match), {}, {
          treeIndex: null
        });
      });
    } // Add this node to the matches if it fits the search criteria.
    // This is performed at the last minute so newNode can be sent in its final form.

    if (isSelfMatch) {
      matches = [_objectSpread2(_objectSpread2({}, extraInfo), {}, {
        node: newNode
      })].concat(_toConsumableArray(matches));
    }
    return {
      node: matches.length > 0 ? newNode : node,
      matches: matches,
      hasFocusMatch: hasFocusMatch,
      treeIndex: childIndex
    };
  };
  var result = trav({
    node: {
      children: treeData
    },
    isPseudoRoot: true,
    currentIndex: -1
  });
  return {
    matches: result.matches,
    treeData: result.node.children
  };
}

// very simple className utility for creating a classname string...
// Falsy arguments are ignored:
//
// const active = true
// const className = classnames(
//    "class1",
//    !active && "class2",
//    active && "class3"
// ); // returns -> class1 class3";
//
function classnames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  // Use Boolean constructor as a filter callback
  // Allows for loose type truthy/falsey checks
  // Boolean("") === false;
  // Boolean(false) === false;
  // Boolean(undefined) === false;
  // Boolean(null) === false;
  // Boolean(0) === false;
  // Boolean("classname") === true;
  return classes.filter(Boolean).join(' ');
}
function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  return function () {
    var Super = _getPrototypeOf(Derived),
      result;
    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
var NodeRendererDefault = /*#__PURE__*/
function (_Component) {
  _inherits(NodeRendererDefault, _Component);
  var _super = _createSuper(NodeRendererDefault);
  function NodeRendererDefault() {
    index_esm_classCallCheck(this, NodeRendererDefault);
    return _super.apply(this, arguments);
  }
  index_esm_createClass(NodeRendererDefault, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        scaffoldBlockPxWidth = _this$props.scaffoldBlockPxWidth,
        toggleChildrenVisibility = _this$props.toggleChildrenVisibility,
        connectDragPreview = _this$props.connectDragPreview,
        connectDragSource = _this$props.connectDragSource,
        isDragging = _this$props.isDragging,
        canDrop = _this$props.canDrop,
        canDrag = _this$props.canDrag,
        node = _this$props.node,
        title = _this$props.title,
        subtitle = _this$props.subtitle,
        draggedNode = _this$props.draggedNode,
        path = _this$props.path,
        treeIndex = _this$props.treeIndex,
        isSearchMatch = _this$props.isSearchMatch,
        isSearchFocus = _this$props.isSearchFocus,
        buttons = _this$props.buttons,
        className = _this$props.className,
        style = _this$props.style,
        didDrop = _this$props.didDrop,
        treeId = _this$props.treeId,
        isOver = _this$props.isOver,
        parentNode = _this$props.parentNode,
        rowDirection = _this$props.rowDirection,
        otherProps = _objectWithoutProperties(_this$props, ["scaffoldBlockPxWidth", "toggleChildrenVisibility", "connectDragPreview", "connectDragSource", "isDragging", "canDrop", "canDrag", "node", "title", "subtitle", "draggedNode", "path", "treeIndex", "isSearchMatch", "isSearchFocus", "buttons", "className", "style", "didDrop", "treeId", "isOver", "parentNode", "rowDirection"]);
      var nodeTitle = title || node.title;
      var nodeSubtitle = subtitle || node.subtitle;
      var rowDirectionClass = rowDirection === 'rtl' ? 'rst__rtl' : null;
      var handle;
      if (canDrag) {
        if (typeof node.children === 'function' && node.expanded) {
          // Show a loading symbol on the handle when the children are expanded
          //  and yet still defined by a function (a callback to fetch the children)
          handle = react.createElement("div", {
            className: "rst__loadingHandle"
          }, react.createElement("div", {
            className: "rst__loadingCircle"
          }, _toConsumableArray(new Array(12)).map(function (_, index) {
            return react.createElement("div", {
              // eslint-disable-next-line react/no-array-index-key
              key: index,
              className: classnames('rst__loadingCirclePoint', rowDirectionClass)
            });
          })));
        } else {
          // Show the handle used to initiate a drag-and-drop
          handle = connectDragSource(react.createElement("div", {
            className: "rst__moveHandle"
          }), {
            dropEffect: 'copy'
          });
        }
      }
      var isDraggedDescendant = draggedNode && isDescendant(draggedNode, node);
      var isLandingPadActive = !didDrop && isDragging;
      var buttonStyle = {
        left: -0.5 * scaffoldBlockPxWidth
      };
      if (rowDirection === 'rtl') {
        buttonStyle = {
          right: -0.5 * scaffoldBlockPxWidth
        };
      }
      return react.createElement("div", _extends({
        style: {
          height: '100%'
        }
      }, otherProps), toggleChildrenVisibility && node.children && (node.children.length > 0 || typeof node.children === 'function') && react.createElement("div", null, react.createElement("button", {
        type: "button",
        "aria-label": node.expanded ? 'Collapse' : 'Expand',
        className: classnames(node.expanded ? 'rst__collapseButton' : 'rst__expandButton', rowDirectionClass),
        style: buttonStyle,
        onClick: function onClick() {
          return toggleChildrenVisibility({
            node: node,
            path: path,
            treeIndex: treeIndex
          });
        }
      }), node.expanded && !isDragging && react.createElement("div", {
        style: {
          width: scaffoldBlockPxWidth
        },
        className: classnames('rst__lineChildren', rowDirectionClass)
      })), react.createElement("div", {
        className: classnames('rst__rowWrapper', rowDirectionClass)
      }, connectDragPreview(react.createElement("div", {
        className: classnames('rst__row', isLandingPadActive && 'rst__rowLandingPad', isLandingPadActive && !canDrop && 'rst__rowCancelPad', isSearchMatch && 'rst__rowSearchMatch', isSearchFocus && 'rst__rowSearchFocus', rowDirectionClass, className),
        style: _objectSpread2({
          opacity: isDraggedDescendant ? 0.5 : 1
        }, style)
      }, handle, react.createElement("div", {
        className: classnames('rst__rowContents', !canDrag && 'rst__rowContentsDragDisabled', rowDirectionClass)
      }, react.createElement("div", {
        className: classnames('rst__rowLabel', rowDirectionClass)
      }, react.createElement("span", {
        className: classnames('rst__rowTitle', node.subtitle && 'rst__rowTitleWithSubtitle')
      }, typeof nodeTitle === 'function' ? nodeTitle({
        node: node,
        path: path,
        treeIndex: treeIndex
      }) : nodeTitle), nodeSubtitle && react.createElement("span", {
        className: "rst__rowSubtitle"
      }, typeof nodeSubtitle === 'function' ? nodeSubtitle({
        node: node,
        path: path,
        treeIndex: treeIndex
      }) : nodeSubtitle)), react.createElement("div", {
        className: "rst__rowToolbar"
      }, buttons.map(function (btn, index) {
        return react.createElement("div", {
          key: index // eslint-disable-line react/no-array-index-key
          ,

          className: "rst__toolbarButton"
        }, btn);
      })))))));
    }
  }]);
  return NodeRendererDefault;
}(react.Component);
NodeRendererDefault.defaultProps = {
  isSearchMatch: false,
  isSearchFocus: false,
  canDrag: false,
  toggleChildrenVisibility: null,
  buttons: [],
  className: '',
  style: {},
  parentNode: null,
  draggedNode: null,
  canDrop: false,
  title: null,
  subtitle: null,
  rowDirection: 'ltr'
};
NodeRendererDefault.propTypes = {
  node: prop_types_default().shape({}).isRequired,
  title: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).node]),
  subtitle: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).node]),
  path: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])).isRequired,
  treeIndex: (prop_types_default()).number.isRequired,
  treeId: (prop_types_default()).string.isRequired,
  isSearchMatch: (prop_types_default()).bool,
  isSearchFocus: (prop_types_default()).bool,
  canDrag: (prop_types_default()).bool,
  scaffoldBlockPxWidth: (prop_types_default()).number.isRequired,
  toggleChildrenVisibility: (prop_types_default()).func,
  buttons: prop_types_default().arrayOf((prop_types_default()).node),
  className: (prop_types_default()).string,
  style: prop_types_default().shape({}),
  // Drag and drop API functions
  // Drag source
  connectDragPreview: (prop_types_default()).func.isRequired,
  connectDragSource: (prop_types_default()).func.isRequired,
  parentNode: prop_types_default().shape({}),
  // Needed for dndManager
  isDragging: (prop_types_default()).bool.isRequired,
  didDrop: (prop_types_default()).bool.isRequired,
  draggedNode: prop_types_default().shape({}),
  // Drop target
  isOver: (prop_types_default()).bool.isRequired,
  canDrop: (prop_types_default()).bool,
  // rtl support
  rowDirection: (prop_types_default()).string
};
var PlaceholderRendererDefault = function PlaceholderRendererDefault(_ref) {
  var isOver = _ref.isOver,
    canDrop = _ref.canDrop;
  return react.createElement("div", {
    className: classnames('rst__placeholder', canDrop && 'rst__placeholderLandingPad', canDrop && !isOver && 'rst__placeholderCancelPad')
  });
};
PlaceholderRendererDefault.defaultProps = {
  isOver: false,
  canDrop: false
};
PlaceholderRendererDefault.propTypes = {
  isOver: (prop_types_default()).bool,
  canDrop: (prop_types_default()).bool
};
function _createSuper$1(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  return function () {
    var Super = _getPrototypeOf(Derived),
      result;
    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
var TreeNode = /*#__PURE__*/
function (_Component) {
  _inherits(TreeNode, _Component);
  var _super = _createSuper$1(TreeNode);
  function TreeNode() {
    index_esm_classCallCheck(this, TreeNode);
    return _super.apply(this, arguments);
  }
  index_esm_createClass(TreeNode, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        listIndex = _this$props.listIndex,
        swapFrom = _this$props.swapFrom,
        swapLength = _this$props.swapLength,
        swapDepth = _this$props.swapDepth,
        scaffoldBlockPxWidth = _this$props.scaffoldBlockPxWidth,
        lowerSiblingCounts = _this$props.lowerSiblingCounts,
        connectDropTarget = _this$props.connectDropTarget,
        isOver = _this$props.isOver,
        draggedNode = _this$props.draggedNode,
        canDrop = _this$props.canDrop,
        treeIndex = _this$props.treeIndex,
        treeId = _this$props.treeId,
        getPrevRow = _this$props.getPrevRow,
        node = _this$props.node,
        path = _this$props.path,
        rowDirection = _this$props.rowDirection,
        otherProps = _objectWithoutProperties(_this$props, ["children", "listIndex", "swapFrom", "swapLength", "swapDepth", "scaffoldBlockPxWidth", "lowerSiblingCounts", "connectDropTarget", "isOver", "draggedNode", "canDrop", "treeIndex", "treeId", "getPrevRow", "node", "path", "rowDirection"]);
      var rowDirectionClass = rowDirection === 'rtl' ? 'rst__rtl' : null; // Construct the scaffold representing the structure of the tree

      var scaffoldBlockCount = lowerSiblingCounts.length;
      var scaffold = [];
      lowerSiblingCounts.forEach(function (lowerSiblingCount, i) {
        var lineClass = '';
        if (lowerSiblingCount > 0) {
          // At this level in the tree, the nodes had sibling nodes further down
          if (listIndex === 0) {
            // Top-left corner of the tree
            // +-----+
            // |     |
            // |  +--+
            // |  |  |
            // +--+--+
            lineClass = 'rst__lineHalfHorizontalRight rst__lineHalfVerticalBottom';
          } else if (i === scaffoldBlockCount - 1) {
            // Last scaffold block in the row, right before the row content
            // +--+--+
            // |  |  |
            // |  +--+
            // |  |  |
            // +--+--+
            lineClass = 'rst__lineHalfHorizontalRight rst__lineFullVertical';
          } else {
            // Simply connecting the line extending down to the next sibling on this level
            // +--+--+
            // |  |  |
            // |  |  |
            // |  |  |
            // +--+--+
            lineClass = 'rst__lineFullVertical';
          }
        } else if (listIndex === 0) {
          // Top-left corner of the tree, but has no siblings
          // +-----+
          // |     |
          // |  +--+
          // |     |
          // +-----+
          lineClass = 'rst__lineHalfHorizontalRight';
        } else if (i === scaffoldBlockCount - 1) {
          // The last or only node in this level of the tree
          // +--+--+
          // |  |  |
          // |  +--+
          // |     |
          // +-----+
          lineClass = 'rst__lineHalfVerticalTop rst__lineHalfHorizontalRight';
        }
        scaffold.push(react.createElement("div", {
          key: "pre_".concat(1 + i),
          style: {
            width: scaffoldBlockPxWidth
          },
          className: classnames('rst__lineBlock', lineClass, rowDirectionClass)
        }));
        if (treeIndex !== listIndex && i === swapDepth) {
          // This row has been shifted, and is at the depth of
          // the line pointing to the new destination
          var highlightLineClass = '';
          if (listIndex === swapFrom + swapLength - 1) {
            // This block is on the bottom (target) line
            // This block points at the target block (where the row will go when released)
            highlightLineClass = 'rst__highlightBottomLeftCorner';
          } else if (treeIndex === swapFrom) {
            // This block is on the top (source) line
            highlightLineClass = 'rst__highlightTopLeftCorner';
          } else {
            // This block is between the bottom and top
            highlightLineClass = 'rst__highlightLineVertical';
          }
          var _style;
          if (rowDirection === 'rtl') {
            _style = {
              width: scaffoldBlockPxWidth,
              right: scaffoldBlockPxWidth * i
            };
          } else {
            // Default ltr
            _style = {
              width: scaffoldBlockPxWidth,
              left: scaffoldBlockPxWidth * i
            };
          }
          scaffold.push(react.createElement("div", {
            // eslint-disable-next-line react/no-array-index-key
            key: i,
            style: _style,
            className: classnames('rst__absoluteLineBlock', highlightLineClass, rowDirectionClass)
          }));
        }
      });
      var style;
      if (rowDirection === 'rtl') {
        style = {
          right: scaffoldBlockPxWidth * scaffoldBlockCount
        };
      } else {
        // Default ltr
        style = {
          left: scaffoldBlockPxWidth * scaffoldBlockCount
        };
      }
      return connectDropTarget(react.createElement("div", _extends({}, otherProps, {
        className: classnames('rst__node', rowDirectionClass)
      }), scaffold, react.createElement("div", {
        className: "rst__nodeContent",
        style: style
      }, react.Children.map(children, function (child) {
        return (0,react.cloneElement)(child, {
          isOver: isOver,
          canDrop: canDrop,
          draggedNode: draggedNode
        });
      }))));
    }
  }]);
  return TreeNode;
}(react.Component);
TreeNode.defaultProps = {
  swapFrom: null,
  swapDepth: null,
  swapLength: null,
  canDrop: false,
  draggedNode: null,
  rowDirection: 'ltr'
};
TreeNode.propTypes = {
  treeIndex: (prop_types_default()).number.isRequired,
  treeId: (prop_types_default()).string.isRequired,
  swapFrom: (prop_types_default()).number,
  swapDepth: (prop_types_default()).number,
  swapLength: (prop_types_default()).number,
  scaffoldBlockPxWidth: (prop_types_default()).number.isRequired,
  lowerSiblingCounts: prop_types_default().arrayOf((prop_types_default()).number).isRequired,
  listIndex: (prop_types_default()).number.isRequired,
  children: (prop_types_default()).node.isRequired,
  // Drop target
  connectDropTarget: (prop_types_default()).func.isRequired,
  isOver: (prop_types_default()).bool.isRequired,
  canDrop: (prop_types_default()).bool,
  draggedNode: prop_types_default().shape({}),
  // used in dndManager
  getPrevRow: (prop_types_default()).func.isRequired,
  node: prop_types_default().shape({}).isRequired,
  path: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])).isRequired,
  // rtl support
  rowDirection: (prop_types_default()).string
};
function _createSuper$2(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  return function () {
    var Super = _getPrototypeOf(Derived),
      result;
    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
var TreePlaceholder = /*#__PURE__*/
function (_Component) {
  _inherits(TreePlaceholder, _Component);
  var _super = _createSuper$2(TreePlaceholder);
  function TreePlaceholder() {
    index_esm_classCallCheck(this, TreePlaceholder);
    return _super.apply(this, arguments);
  }
  index_esm_createClass(TreePlaceholder, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        connectDropTarget = _this$props.connectDropTarget,
        treeId = _this$props.treeId,
        drop = _this$props.drop,
        otherProps = _objectWithoutProperties(_this$props, ["children", "connectDropTarget", "treeId", "drop"]);
      return connectDropTarget(react.createElement("div", null, react.Children.map(children, function (child) {
        return (0,react.cloneElement)(child, _objectSpread2({}, otherProps));
      })));
    }
  }]);
  return TreePlaceholder;
}(react.Component);
TreePlaceholder.defaultProps = {
  canDrop: false,
  draggedNode: null
};
TreePlaceholder.propTypes = {
  children: (prop_types_default()).node.isRequired,
  // Drop target
  connectDropTarget: (prop_types_default()).func.isRequired,
  isOver: (prop_types_default()).bool.isRequired,
  canDrop: (prop_types_default()).bool,
  draggedNode: prop_types_default().shape({}),
  treeId: (prop_types_default()).string.isRequired,
  drop: (prop_types_default()).func.isRequired
};
function defaultGetNodeKey(_ref) {
  var treeIndex = _ref.treeIndex;
  return treeIndex;
} // Cheap hack to get the text of a react object

function getReactElementText(parent) {
  if (typeof parent === 'string') {
    return parent;
  }
  if (parent === null || _typeof(parent) !== 'object' || !parent.props || !parent.props.children || typeof parent.props.children !== 'string' && _typeof(parent.props.children) !== 'object') {
    return '';
  }
  if (typeof parent.props.children === 'string') {
    return parent.props.children;
  }
  return parent.props.children.map(function (child) {
    return getReactElementText(child);
  }).join('');
} // Search for a query string inside a node property

function stringSearch(key, searchQuery, node, path, treeIndex) {
  if (typeof node[key] === 'function') {
    // Search within text after calling its function to generate the text
    return String(node[key]({
      node: node,
      path: path,
      treeIndex: treeIndex
    })).indexOf(searchQuery) > -1;
  }
  if (_typeof(node[key]) === 'object') {
    // Search within text inside react elements
    return getReactElementText(node[key]).indexOf(searchQuery) > -1;
  } // Search within string

  return node[key] && String(node[key]).indexOf(searchQuery) > -1;
}
function defaultSearchMethod(_ref2) {
  var node = _ref2.node,
    path = _ref2.path,
    treeIndex = _ref2.treeIndex,
    searchQuery = _ref2.searchQuery;
  return stringSearch('title', searchQuery, node, path, treeIndex) || stringSearch('subtitle', searchQuery, node, path, treeIndex);
}
var index_esm_memoize = function memoize(f) {
  var savedArgsArray = [];
  var savedKeysArray = [];
  var savedResult = null;
  return function (args) {
    var keysArray = Object.keys(args).sort();
    var argsArray = keysArray.map(function (key) {
      return args[key];
    }); // If the arguments for the last insert operation are different than this time,
    // recalculate the result

    if (argsArray.length !== savedArgsArray.length || argsArray.some(function (arg, index) {
      return arg !== savedArgsArray[index];
    }) || keysArray.some(function (key, index) {
      return key !== savedKeysArray[index];
    })) {
      savedArgsArray = argsArray;
      savedKeysArray = keysArray;
      savedResult = f(args);
    }
    return savedResult;
  };
};
var memoizedInsertNode = index_esm_memoize(insertNode);
var memoizedGetFlatDataFromTree = index_esm_memoize(getFlatDataFromTree);
var memoizedGetDescendantCount = index_esm_memoize(getDescendantCount);
var DndManager = /*#__PURE__*/
function () {
  function DndManager(treeRef) {
    index_esm_classCallCheck(this, DndManager);
    this.treeRef = treeRef;
  }
  index_esm_createClass(DndManager, [{
    key: "getTargetDepth",
    value: function getTargetDepth(dropTargetProps, monitor, component) {
      var dropTargetDepth = 0;
      var rowAbove = dropTargetProps.getPrevRow();
      if (rowAbove) {
        var path = rowAbove.path;
        var aboveNodeCannotHaveChildren = !this.treeRef.canNodeHaveChildren(rowAbove.node);
        if (aboveNodeCannotHaveChildren) {
          path = path.slice(0, path.length - 1);
        } // Limit the length of the path to the deepest possible

        dropTargetDepth = Math.min(path.length, dropTargetProps.path.length);
      }
      var blocksOffset;
      var dragSourceInitialDepth = (monitor.getItem().path || []).length; // When adding node from external source

      if (monitor.getItem().treeId !== this.treeId) {
        // Ignore the tree depth of the source, if it had any to begin with
        dragSourceInitialDepth = 0;
        if (component) {
          var relativePosition = (0,react_dom.findDOMNode)(component).getBoundingClientRect(); // eslint-disable-line react/no-find-dom-node

          var leftShift = monitor.getSourceClientOffset().x - relativePosition.left;
          blocksOffset = Math.round(leftShift / dropTargetProps.scaffoldBlockPxWidth);
        } else {
          blocksOffset = dropTargetProps.path.length;
        }
      } else {
        // handle row direction support
        var direction = dropTargetProps.rowDirection === 'rtl' ? -1 : 1;
        blocksOffset = Math.round(direction * monitor.getDifferenceFromInitialOffset().x / dropTargetProps.scaffoldBlockPxWidth);
      }
      var targetDepth = Math.min(dropTargetDepth, Math.max(0, dragSourceInitialDepth + blocksOffset - 1)); // If a maxDepth is defined, constrain the target depth

      if (typeof this.maxDepth !== 'undefined' && this.maxDepth !== null) {
        var draggedNode = monitor.getItem().node;
        var draggedChildDepth = getDepth(draggedNode);
        targetDepth = Math.max(0, Math.min(targetDepth, this.maxDepth - draggedChildDepth - 1));
      }
      return targetDepth;
    }
  }, {
    key: "canDrop",
    value: function canDrop(dropTargetProps, monitor) {
      if (!monitor.isOver()) {
        return false;
      }
      var rowAbove = dropTargetProps.getPrevRow();
      var abovePath = rowAbove ? rowAbove.path : [];
      var aboveNode = rowAbove ? rowAbove.node : {};
      var targetDepth = this.getTargetDepth(dropTargetProps, monitor, null); // Cannot drop if we're adding to the children of the row above and
      //  the row above is a function

      if (targetDepth >= abovePath.length && typeof aboveNode.children === 'function') {
        return false;
      }
      if (typeof this.customCanDrop === 'function') {
        var _monitor$getItem = monitor.getItem(),
          node = _monitor$getItem.node;
        var addedResult = memoizedInsertNode({
          treeData: this.treeData,
          newNode: node,
          depth: targetDepth,
          getNodeKey: this.getNodeKey,
          minimumTreeIndex: dropTargetProps.listIndex,
          expandParent: true
        });
        return this.customCanDrop({
          node: node,
          prevPath: monitor.getItem().path,
          prevParent: monitor.getItem().parentNode,
          prevTreeIndex: monitor.getItem().treeIndex,
          // Equals -1 when dragged from external tree
          nextPath: addedResult.path,
          nextParent: addedResult.parentNode,
          nextTreeIndex: addedResult.treeIndex
        });
      }
      return true;
    }
  }, {
    key: "wrapSource",
    value: function wrapSource(el) {
      var _this = this;
      var nodeDragSource = {
        beginDrag: function beginDrag(props) {
          _this.startDrag(props);
          return {
            node: props.node,
            parentNode: props.parentNode,
            path: props.path,
            treeIndex: props.treeIndex,
            treeId: props.treeId
          };
        },
        endDrag: function endDrag(props, monitor) {
          _this.endDrag(monitor.getDropResult());
        },
        isDragging: function isDragging(props, monitor) {
          var dropTargetNode = monitor.getItem().node;
          var draggedNode = props.node;
          return draggedNode === dropTargetNode;
        }
      };
      function nodeDragSourcePropInjection(connect, monitor) {
        return {
          connectDragSource: connect.dragSource(),
          connectDragPreview: connect.dragPreview(),
          isDragging: monitor.isDragging(),
          didDrop: monitor.didDrop()
        };
      }
      return (0,esm.DragSource)(this.dndType, nodeDragSource, nodeDragSourcePropInjection)(el);
    }
  }, {
    key: "wrapTarget",
    value: function wrapTarget(el) {
      var _this2 = this;
      var nodeDropTarget = {
        drop: function drop(dropTargetProps, monitor, component) {
          var result = {
            node: monitor.getItem().node,
            path: monitor.getItem().path,
            treeIndex: monitor.getItem().treeIndex,
            treeId: _this2.treeId,
            minimumTreeIndex: dropTargetProps.treeIndex,
            depth: _this2.getTargetDepth(dropTargetProps, monitor, component)
          };
          _this2.drop(result);
          return result;
        },
        hover: function hover(dropTargetProps, monitor, component) {
          var targetDepth = _this2.getTargetDepth(dropTargetProps, monitor, component);
          var draggedNode = monitor.getItem().node;
          var needsRedraw =
          // Redraw if hovered above different nodes
          dropTargetProps.node !== draggedNode ||
          // Or hovered above the same node but at a different depth
          targetDepth !== dropTargetProps.path.length - 1;
          if (!needsRedraw) {
            return;
          } // throttle `dragHover` work to available animation frames

          cancelAnimationFrame(_this2.rafId);
          _this2.rafId = requestAnimationFrame(function () {
            _this2.dragHover({
              node: draggedNode,
              path: monitor.getItem().path,
              minimumTreeIndex: dropTargetProps.listIndex,
              depth: targetDepth
            });
          });
        },
        canDrop: this.canDrop.bind(this)
      };
      function nodeDropTargetPropInjection(connect, monitor) {
        var dragged = monitor.getItem();
        return {
          connectDropTarget: connect.dropTarget(),
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
          draggedNode: dragged ? dragged.node : null
        };
      }
      return (0,esm.DropTarget)(this.dndType, nodeDropTarget, nodeDropTargetPropInjection)(el);
    }
  }, {
    key: "wrapPlaceholder",
    value: function wrapPlaceholder(el) {
      var _this3 = this;
      var placeholderDropTarget = {
        drop: function drop(dropTargetProps, monitor) {
          var _monitor$getItem2 = monitor.getItem(),
            node = _monitor$getItem2.node,
            path = _monitor$getItem2.path,
            treeIndex = _monitor$getItem2.treeIndex;
          var result = {
            node: node,
            path: path,
            treeIndex: treeIndex,
            treeId: _this3.treeId,
            minimumTreeIndex: 0,
            depth: 0
          };
          _this3.drop(result);
          return result;
        }
      };
      function placeholderPropInjection(connect, monitor) {
        var dragged = monitor.getItem();
        return {
          connectDropTarget: connect.dropTarget(),
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
          draggedNode: dragged ? dragged.node : null
        };
      }
      return (0,esm.DropTarget)(this.dndType, placeholderDropTarget, placeholderPropInjection)(el);
    }
  }, {
    key: "startDrag",
    get: function get() {
      return this.treeRef.startDrag;
    }
  }, {
    key: "dragHover",
    get: function get() {
      return this.treeRef.dragHover;
    }
  }, {
    key: "endDrag",
    get: function get() {
      return this.treeRef.endDrag;
    }
  }, {
    key: "drop",
    get: function get() {
      return this.treeRef.drop;
    }
  }, {
    key: "treeId",
    get: function get() {
      return this.treeRef.treeId;
    }
  }, {
    key: "dndType",
    get: function get() {
      return this.treeRef.dndType;
    }
  }, {
    key: "treeData",
    get: function get() {
      return this.treeRef.state.draggingTreeData || this.treeRef.props.treeData;
    }
  }, {
    key: "getNodeKey",
    get: function get() {
      return this.treeRef.props.getNodeKey;
    }
  }, {
    key: "customCanDrop",
    get: function get() {
      return this.treeRef.props.canDrop;
    }
  }, {
    key: "maxDepth",
    get: function get() {
      return this.treeRef.props.maxDepth;
    }
  }]);
  return DndManager;
}();

/* eslint-disable import/prefer-default-export */
function slideRows(rows, fromIndex, toIndex) {
  var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var rowsWithoutMoved = [].concat(_toConsumableArray(rows.slice(0, fromIndex)), _toConsumableArray(rows.slice(fromIndex + count)));
  return [].concat(_toConsumableArray(rowsWithoutMoved.slice(0, toIndex)), _toConsumableArray(rows.slice(fromIndex, fromIndex + count)), _toConsumableArray(rowsWithoutMoved.slice(toIndex)));
}
function _createSuper$3(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  return function () {
    var Super = _getPrototypeOf(Derived),
      result;
    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
var treeIdCounter = 1;
var mergeTheme = function mergeTheme(props) {
  var merged = _objectSpread2(_objectSpread2({}, props), {}, {
    style: _objectSpread2(_objectSpread2({}, props.theme.style), props.style),
    innerStyle: _objectSpread2(_objectSpread2({}, props.theme.innerStyle), props.innerStyle),
    reactVirtualizedListProps: _objectSpread2(_objectSpread2({}, props.theme.reactVirtualizedListProps), props.reactVirtualizedListProps)
  });
  var overridableDefaults = {
    nodeContentRenderer: NodeRendererDefault,
    placeholderRenderer: PlaceholderRendererDefault,
    rowHeight: 62,
    scaffoldBlockPxWidth: 44,
    slideRegionSize: 100,
    treeNodeRenderer: TreeNode
  };
  Object.keys(overridableDefaults).forEach(function (propKey) {
    // If prop has been specified, do not change it
    // If prop is specified in theme, use the theme setting
    // If all else fails, fall back to the default
    if (props[propKey] === null) {
      merged[propKey] = typeof props.theme[propKey] !== 'undefined' ? props.theme[propKey] : overridableDefaults[propKey];
    }
  });
  return merged;
};
var ReactSortableTree = /*#__PURE__*/
function (_Component) {
  _inherits(ReactSortableTree, _Component);
  var _super = _createSuper$3(ReactSortableTree);
  function ReactSortableTree(props) {
    var _this;
    index_esm_classCallCheck(this, ReactSortableTree);
    _this = _super.call(this, props);
    var _mergeTheme = mergeTheme(props),
      dndType = _mergeTheme.dndType,
      nodeContentRenderer = _mergeTheme.nodeContentRenderer,
      treeNodeRenderer = _mergeTheme.treeNodeRenderer,
      isVirtualized = _mergeTheme.isVirtualized,
      slideRegionSize = _mergeTheme.slideRegionSize;
    _this.dndManager = new DndManager(_assertThisInitialized(_this)); // Wrapping classes for use with react-dnd

    _this.treeId = "rst__".concat(treeIdCounter);
    treeIdCounter += 1;
    _this.dndType = dndType || _this.treeId;
    _this.nodeContentRenderer = _this.dndManager.wrapSource(nodeContentRenderer);
    _this.treePlaceholderRenderer = _this.dndManager.wrapPlaceholder(TreePlaceholder);
    _this.treeNodeRenderer = _this.dndManager.wrapTarget(treeNodeRenderer); // Prepare scroll-on-drag options for this list

    if (isVirtualized) {
      _this.scrollZoneVirtualList = (lib/* createScrollingComponent */._t || lib/* default */.ZP)(List);
      _this.vStrength = (0,lib/* createVerticalStrength */.Kx)(slideRegionSize);
      _this.hStrength = (0,lib/* createHorizontalStrength */.v7)(slideRegionSize);
    }
    _this.state = {
      draggingTreeData: null,
      draggedNode: null,
      draggedMinimumTreeIndex: null,
      draggedDepth: null,
      searchMatches: [],
      searchFocusTreeIndex: null,
      dragging: false,
      // props that need to be used in gDSFP or static functions will be stored here
      instanceProps: {
        treeData: [],
        ignoreOneTreeUpdate: false,
        searchQuery: null,
        searchFocusOffset: null
      }
    };
    _this.toggleChildrenVisibility = _this.toggleChildrenVisibility.bind(_assertThisInitialized(_this));
    _this.moveNode = _this.moveNode.bind(_assertThisInitialized(_this));
    _this.startDrag = _this.startDrag.bind(_assertThisInitialized(_this));
    _this.dragHover = _this.dragHover.bind(_assertThisInitialized(_this));
    _this.endDrag = _this.endDrag.bind(_assertThisInitialized(_this));
    _this.drop = _this.drop.bind(_assertThisInitialized(_this));
    _this.handleDndMonitorChange = _this.handleDndMonitorChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  index_esm_createClass(ReactSortableTree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      ReactSortableTree.loadLazyChildren(this.props, this.state);
      var stateUpdate = ReactSortableTree.search(this.props, this.state, true, true, false);
      this.setState(stateUpdate); // Hook into react-dnd state changes to detect when the drag ends
      // TODO: This is very brittle, so it needs to be replaced if react-dnd
      // offers a more official way to detect when a drag ends

      this.clearMonitorSubscription = this.props.dragDropManager.getMonitor().subscribeToStateChange(this.handleDndMonitorChange);
    }
  }, {
    key: "componentDidUpdate",
    // listen to dragging
    value: function componentDidUpdate(prevProps, prevState) {
      // if it is not the same then call the onDragStateChanged
      if (this.state.dragging !== prevState.dragging) {
        if (this.props.onDragStateChanged) {
          this.props.onDragStateChanged({
            isDragging: this.state.dragging,
            draggedNode: this.state.draggedNode
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearMonitorSubscription();
    }
  }, {
    key: "getRows",
    value: function getRows(treeData) {
      return memoizedGetFlatDataFromTree({
        ignoreCollapsed: true,
        getNodeKey: this.props.getNodeKey,
        treeData: treeData
      });
    }
  }, {
    key: "handleDndMonitorChange",
    value: function handleDndMonitorChange() {
      var monitor = this.props.dragDropManager.getMonitor(); // If the drag ends and the tree is still in a mid-drag state,
      // it means that the drag was canceled or the dragSource dropped
      // elsewhere, and we should reset the state of this tree

      if (!monitor.isDragging() && this.state.draggingTreeData) {
        this.endDrag();
      }
    }
  }, {
    key: "toggleChildrenVisibility",
    value: function toggleChildrenVisibility(_ref) {
      var targetNode = _ref.node,
        path = _ref.path;
      var instanceProps = this.state.instanceProps;
      var treeData = changeNodeAtPath({
        treeData: instanceProps.treeData,
        path: path,
        newNode: function newNode(_ref2) {
          var node = _ref2.node;
          return _objectSpread2(_objectSpread2({}, node), {}, {
            expanded: !node.expanded
          });
        },
        getNodeKey: this.props.getNodeKey
      });
      this.props.onChange(treeData);
      this.props.onVisibilityToggle({
        treeData: treeData,
        node: targetNode,
        expanded: !targetNode.expanded,
        path: path
      });
    }
  }, {
    key: "moveNode",
    value: function moveNode(_ref3) {
      var node = _ref3.node,
        prevPath = _ref3.path,
        prevTreeIndex = _ref3.treeIndex,
        depth = _ref3.depth,
        minimumTreeIndex = _ref3.minimumTreeIndex;
      var _insertNode = insertNode({
          treeData: this.state.draggingTreeData,
          newNode: node,
          depth: depth,
          minimumTreeIndex: minimumTreeIndex,
          expandParent: true,
          getNodeKey: this.props.getNodeKey
        }),
        treeData = _insertNode.treeData,
        treeIndex = _insertNode.treeIndex,
        path = _insertNode.path,
        nextParentNode = _insertNode.parentNode;
      this.props.onChange(treeData);
      this.props.onMoveNode({
        treeData: treeData,
        node: node,
        treeIndex: treeIndex,
        path: path,
        nextPath: path,
        nextTreeIndex: treeIndex,
        prevPath: prevPath,
        prevTreeIndex: prevTreeIndex,
        nextParentNode: nextParentNode
      });
    } // returns the new state after search
  }, {
    key: "startDrag",
    value: function startDrag(_ref4) {
      var _this2 = this;
      var path = _ref4.path;
      this.setState(function (prevState) {
        var _removeNode = removeNode({
            treeData: prevState.instanceProps.treeData,
            path: path,
            getNodeKey: _this2.props.getNodeKey
          }),
          draggingTreeData = _removeNode.treeData,
          draggedNode = _removeNode.node,
          draggedMinimumTreeIndex = _removeNode.treeIndex;
        return {
          draggingTreeData: draggingTreeData,
          draggedNode: draggedNode,
          draggedDepth: path.length - 1,
          draggedMinimumTreeIndex: draggedMinimumTreeIndex,
          dragging: true
        };
      });
    }
  }, {
    key: "dragHover",
    value: function dragHover(_ref5) {
      var _this3 = this;
      var draggedNode = _ref5.node,
        draggedDepth = _ref5.depth,
        draggedMinimumTreeIndex = _ref5.minimumTreeIndex;

      // Ignore this hover if it is at the same position as the last hover
      if (this.state.draggedDepth === draggedDepth && this.state.draggedMinimumTreeIndex === draggedMinimumTreeIndex) {
        return;
      }
      this.setState(function (_ref6) {
        var draggingTreeData = _ref6.draggingTreeData,
          instanceProps = _ref6.instanceProps;
        // Fall back to the tree data if something is being dragged in from
        //  an external element
        var newDraggingTreeData = draggingTreeData || instanceProps.treeData;
        var addedResult = memoizedInsertNode({
          treeData: newDraggingTreeData,
          newNode: draggedNode,
          depth: draggedDepth,
          minimumTreeIndex: draggedMinimumTreeIndex,
          expandParent: true,
          getNodeKey: _this3.props.getNodeKey
        });
        var rows = _this3.getRows(addedResult.treeData);
        var expandedParentPath = rows[addedResult.treeIndex].path;
        return {
          draggedNode: draggedNode,
          draggedDepth: draggedDepth,
          draggedMinimumTreeIndex: draggedMinimumTreeIndex,
          draggingTreeData: changeNodeAtPath({
            treeData: newDraggingTreeData,
            path: expandedParentPath.slice(0, -1),
            newNode: function newNode(_ref7) {
              var node = _ref7.node;
              return _objectSpread2(_objectSpread2({}, node), {}, {
                expanded: true
              });
            },
            getNodeKey: _this3.props.getNodeKey
          }),
          // reset the scroll focus so it doesn't jump back
          // to a search result while dragging
          searchFocusTreeIndex: null,
          dragging: true
        };
      });
    }
  }, {
    key: "endDrag",
    value: function endDrag(dropResult) {
      var _this4 = this;
      var instanceProps = this.state.instanceProps;
      var resetTree = function resetTree() {
        return _this4.setState({
          draggingTreeData: null,
          draggedNode: null,
          draggedMinimumTreeIndex: null,
          draggedDepth: null,
          dragging: false
        });
      }; // Drop was cancelled

      if (!dropResult) {
        resetTree();
      } else if (dropResult.treeId !== this.treeId) {
        // The node was dropped in an external drop target or tree
        var node = dropResult.node,
          path = dropResult.path,
          treeIndex = dropResult.treeIndex;
        var shouldCopy = this.props.shouldCopyOnOutsideDrop;
        if (typeof shouldCopy === 'function') {
          shouldCopy = shouldCopy({
            node: node,
            prevTreeIndex: treeIndex,
            prevPath: path
          });
        }
        var treeData = this.state.draggingTreeData || instanceProps.treeData; // If copying is enabled, a drop outside leaves behind a copy in the
        //  source tree

        if (shouldCopy) {
          treeData = changeNodeAtPath({
            treeData: instanceProps.treeData,
            // use treeData unaltered by the drag operation
            path: path,
            newNode: function newNode(_ref8) {
              var copyNode = _ref8.node;
              return _objectSpread2({}, copyNode);
            },
            // create a shallow copy of the node
            getNodeKey: this.props.getNodeKey
          });
        }
        this.props.onChange(treeData);
        this.props.onMoveNode({
          treeData: treeData,
          node: node,
          treeIndex: null,
          path: null,
          nextPath: null,
          nextTreeIndex: null,
          prevPath: path,
          prevTreeIndex: treeIndex
        });
      }
    }
  }, {
    key: "drop",
    value: function drop(dropResult) {
      this.moveNode(dropResult);
    }
  }, {
    key: "canNodeHaveChildren",
    value: function canNodeHaveChildren(node) {
      var canNodeHaveChildren = this.props.canNodeHaveChildren;
      if (canNodeHaveChildren) {
        return canNodeHaveChildren(node);
      }
      return true;
    } // Load any children in the tree that are given by a function
    // calls the onChange callback on the new treeData
  }, {
    key: "renderRow",
    value: function renderRow(row, _ref9) {
      var listIndex = _ref9.listIndex,
        style = _ref9.style,
        getPrevRow = _ref9.getPrevRow,
        matchKeys = _ref9.matchKeys,
        swapFrom = _ref9.swapFrom,
        swapDepth = _ref9.swapDepth,
        swapLength = _ref9.swapLength;
      var node = row.node,
        parentNode = row.parentNode,
        path = row.path,
        lowerSiblingCounts = row.lowerSiblingCounts,
        treeIndex = row.treeIndex;
      var _mergeTheme2 = mergeTheme(this.props),
        canDrag = _mergeTheme2.canDrag,
        generateNodeProps = _mergeTheme2.generateNodeProps,
        scaffoldBlockPxWidth = _mergeTheme2.scaffoldBlockPxWidth,
        searchFocusOffset = _mergeTheme2.searchFocusOffset,
        rowDirection = _mergeTheme2.rowDirection;
      var TreeNodeRenderer = this.treeNodeRenderer;
      var NodeContentRenderer = this.nodeContentRenderer;
      var nodeKey = path[path.length - 1];
      var isSearchMatch = (nodeKey in matchKeys);
      var isSearchFocus = isSearchMatch && matchKeys[nodeKey] === searchFocusOffset;
      var callbackParams = {
        node: node,
        parentNode: parentNode,
        path: path,
        lowerSiblingCounts: lowerSiblingCounts,
        treeIndex: treeIndex,
        isSearchMatch: isSearchMatch,
        isSearchFocus: isSearchFocus
      };
      var nodeProps = !generateNodeProps ? {} : generateNodeProps(callbackParams);
      var rowCanDrag = typeof canDrag !== 'function' ? canDrag : canDrag(callbackParams);
      var sharedProps = {
        treeIndex: treeIndex,
        scaffoldBlockPxWidth: scaffoldBlockPxWidth,
        node: node,
        path: path,
        treeId: this.treeId,
        rowDirection: rowDirection
      };
      return react.createElement(TreeNodeRenderer, _extends({
        style: style,
        key: nodeKey,
        listIndex: listIndex,
        getPrevRow: getPrevRow,
        lowerSiblingCounts: lowerSiblingCounts,
        swapFrom: swapFrom,
        swapLength: swapLength,
        swapDepth: swapDepth
      }, sharedProps), react.createElement(NodeContentRenderer, _extends({
        parentNode: parentNode,
        isSearchMatch: isSearchMatch,
        isSearchFocus: isSearchFocus,
        canDrag: rowCanDrag,
        toggleChildrenVisibility: this.toggleChildrenVisibility
      }, sharedProps, nodeProps)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var _mergeTheme3 = mergeTheme(this.props),
        dragDropManager = _mergeTheme3.dragDropManager,
        style = _mergeTheme3.style,
        className = _mergeTheme3.className,
        innerStyle = _mergeTheme3.innerStyle,
        rowHeight = _mergeTheme3.rowHeight,
        isVirtualized = _mergeTheme3.isVirtualized,
        placeholderRenderer = _mergeTheme3.placeholderRenderer,
        reactVirtualizedListProps = _mergeTheme3.reactVirtualizedListProps,
        getNodeKey = _mergeTheme3.getNodeKey,
        rowDirection = _mergeTheme3.rowDirection;
      var _this$state = this.state,
        searchMatches = _this$state.searchMatches,
        searchFocusTreeIndex = _this$state.searchFocusTreeIndex,
        draggedNode = _this$state.draggedNode,
        draggedDepth = _this$state.draggedDepth,
        draggedMinimumTreeIndex = _this$state.draggedMinimumTreeIndex,
        instanceProps = _this$state.instanceProps;
      var treeData = this.state.draggingTreeData || instanceProps.treeData;
      var rowDirectionClass = rowDirection === 'rtl' ? 'rst__rtl' : null;
      var rows;
      var swapFrom = null;
      var swapLength = null;
      if (draggedNode && draggedMinimumTreeIndex !== null) {
        var addedResult = memoizedInsertNode({
          treeData: treeData,
          newNode: draggedNode,
          depth: draggedDepth,
          minimumTreeIndex: draggedMinimumTreeIndex,
          expandParent: true,
          getNodeKey: getNodeKey
        });
        var swapTo = draggedMinimumTreeIndex;
        swapFrom = addedResult.treeIndex;
        swapLength = 1 + memoizedGetDescendantCount({
          node: draggedNode
        });
        rows = slideRows(this.getRows(addedResult.treeData), swapFrom, swapTo, swapLength);
      } else {
        rows = this.getRows(treeData);
      } // Get indices for rows that match the search conditions

      var matchKeys = {};
      searchMatches.forEach(function (_ref10, i) {
        var path = _ref10.path;
        matchKeys[path[path.length - 1]] = i;
      }); // Seek to the focused search result if there is one specified

      var scrollToInfo = searchFocusTreeIndex !== null ? {
        scrollToIndex: searchFocusTreeIndex
      } : {};
      var containerStyle = style;
      var list;
      if (rows.length < 1) {
        var Placeholder = this.treePlaceholderRenderer;
        var PlaceholderContent = placeholderRenderer;
        list = react.createElement(Placeholder, {
          treeId: this.treeId,
          drop: this.drop
        }, react.createElement(PlaceholderContent, null));
      } else if (isVirtualized) {
        containerStyle = _objectSpread2({
          height: '100%'
        }, containerStyle);
        var ScrollZoneVirtualList = this.scrollZoneVirtualList; // Render list with react-virtualized

        list = react.createElement(AutoSizer, null, function (_ref11) {
          var height = _ref11.height,
            width = _ref11.width;
          return react.createElement(ScrollZoneVirtualList, _extends({}, scrollToInfo, {
            dragDropManager: dragDropManager,
            verticalStrength: _this5.vStrength,
            horizontalStrength: _this5.hStrength,
            speed: 30,
            scrollToAlignment: "start",
            className: "rst__virtualScrollOverride",
            width: width,
            onScroll: function onScroll(_ref12) {
              var scrollTop = _ref12.scrollTop;
              _this5.scrollTop = scrollTop;
            },
            height: height,
            style: innerStyle,
            rowCount: rows.length,
            estimatedRowSize: typeof rowHeight !== 'function' ? rowHeight : undefined,
            rowHeight: typeof rowHeight !== 'function' ? rowHeight : function (_ref13) {
              var index = _ref13.index;
              return rowHeight({
                index: index,
                treeIndex: index,
                node: rows[index].node,
                path: rows[index].path
              });
            },
            rowRenderer: function rowRenderer(_ref14) {
              var index = _ref14.index,
                rowStyle = _ref14.style;
              return _this5.renderRow(rows[index], {
                listIndex: index,
                style: rowStyle,
                getPrevRow: function getPrevRow() {
                  return rows[index - 1] || null;
                },
                matchKeys: matchKeys,
                swapFrom: swapFrom,
                swapDepth: draggedDepth,
                swapLength: swapLength
              });
            }
          }, reactVirtualizedListProps));
        });
      } else {
        // Render list without react-virtualized
        list = rows.map(function (row, index) {
          return _this5.renderRow(row, {
            listIndex: index,
            style: {
              height: typeof rowHeight !== 'function' ? rowHeight : rowHeight({
                index: index,
                treeIndex: index,
                node: row.node,
                path: row.path
              })
            },
            getPrevRow: function getPrevRow() {
              return rows[index - 1] || null;
            },
            matchKeys: matchKeys,
            swapFrom: swapFrom,
            swapDepth: draggedDepth,
            swapLength: swapLength
          });
        });
      }
      return react.createElement("div", {
        className: classnames('rst__tree', className, rowDirectionClass),
        style: containerStyle
      }, list);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var instanceProps = prevState.instanceProps;
      var newState = {};
      var isTreeDataEqual = lodash_isequal_default()(instanceProps.treeData, nextProps.treeData); // make sure we have the most recent version of treeData

      instanceProps.treeData = nextProps.treeData;
      if (!isTreeDataEqual) {
        if (instanceProps.ignoreOneTreeUpdate) {
          instanceProps.ignoreOneTreeUpdate = false;
        } else {
          newState.searchFocusTreeIndex = null;
          ReactSortableTree.loadLazyChildren(nextProps, prevState);
          Object.assign(newState, ReactSortableTree.search(nextProps, prevState, false, false, false));
        }
        newState.draggingTreeData = null;
        newState.draggedNode = null;
        newState.draggedMinimumTreeIndex = null;
        newState.draggedDepth = null;
        newState.dragging = false;
      } else if (!lodash_isequal_default()(instanceProps.searchQuery, nextProps.searchQuery)) {
        Object.assign(newState, ReactSortableTree.search(nextProps, prevState, true, true, false));
      } else if (instanceProps.searchFocusOffset !== nextProps.searchFocusOffset) {
        Object.assign(newState, ReactSortableTree.search(nextProps, prevState, true, true, true));
      }
      instanceProps.searchQuery = nextProps.searchQuery;
      instanceProps.searchFocusOffset = nextProps.searchFocusOffset;
      newState.instanceProps = _objectSpread2(_objectSpread2({}, instanceProps), newState.instanceProps);
      return newState;
    }
  }, {
    key: "search",
    value: function search(props, state, seekIndex, expand, singleSearch) {
      var onChange = props.onChange,
        getNodeKey = props.getNodeKey,
        searchFinishCallback = props.searchFinishCallback,
        searchQuery = props.searchQuery,
        searchMethod = props.searchMethod,
        searchFocusOffset = props.searchFocusOffset,
        onlyExpandSearchedNodes = props.onlyExpandSearchedNodes;
      var instanceProps = state.instanceProps; // Skip search if no conditions are specified

      if (!searchQuery && !searchMethod) {
        if (searchFinishCallback) {
          searchFinishCallback([]);
        }
        return {
          searchMatches: []
        };
      }
      var newState = {
        instanceProps: {}
      }; // if onlyExpandSearchedNodes collapse the tree and search

      var _find = find({
          getNodeKey: getNodeKey,
          treeData: onlyExpandSearchedNodes ? toggleExpandedForAll({
            treeData: instanceProps.treeData,
            expanded: false
          }) : instanceProps.treeData,
          searchQuery: searchQuery,
          searchMethod: searchMethod || defaultSearchMethod,
          searchFocusOffset: searchFocusOffset,
          expandAllMatchPaths: expand && !singleSearch,
          expandFocusMatchPaths: !!expand
        }),
        expandedTreeData = _find.treeData,
        searchMatches = _find.matches; // Update the tree with data leaving all paths leading to matching nodes open

      if (expand) {
        newState.instanceProps.ignoreOneTreeUpdate = true; // Prevents infinite loop

        onChange(expandedTreeData);
      }
      if (searchFinishCallback) {
        searchFinishCallback(searchMatches);
      }
      var searchFocusTreeIndex = null;
      if (seekIndex && searchFocusOffset !== null && searchFocusOffset < searchMatches.length) {
        searchFocusTreeIndex = searchMatches[searchFocusOffset].treeIndex;
      }
      newState.searchMatches = searchMatches;
      newState.searchFocusTreeIndex = searchFocusTreeIndex;
      return newState;
    }
  }, {
    key: "loadLazyChildren",
    value: function loadLazyChildren(props, state) {
      var instanceProps = state.instanceProps;
      walk({
        treeData: instanceProps.treeData,
        getNodeKey: props.getNodeKey,
        callback: function callback(_ref15) {
          var node = _ref15.node,
            path = _ref15.path,
            lowerSiblingCounts = _ref15.lowerSiblingCounts,
            treeIndex = _ref15.treeIndex;

          // If the node has children defined by a function, and is either expanded
          //  or set to load even before expansion, run the function.
          if (node.children && typeof node.children === 'function' && (node.expanded || props.loadCollapsedLazyChildren)) {
            // Call the children fetching function
            node.children({
              node: node,
              path: path,
              lowerSiblingCounts: lowerSiblingCounts,
              treeIndex: treeIndex,
              // Provide a helper to append the new data when it is received
              done: function done(childrenArray) {
                return props.onChange(changeNodeAtPath({
                  treeData: instanceProps.treeData,
                  path: path,
                  newNode: function newNode(_ref16) {
                    var oldNode = _ref16.node;
                    return (
                      // Only replace the old node if it's the one we set off to find children
                      //  for in the first place
                      oldNode === node ? _objectSpread2(_objectSpread2({}, oldNode), {}, {
                        children: childrenArray
                      }) : oldNode
                    );
                  },
                  getNodeKey: props.getNodeKey
                }));
              }
            });
          }
        }
      });
    }
  }]);
  return ReactSortableTree;
}(react.Component);
ReactSortableTree.propTypes = {
  dragDropManager: prop_types_default().shape({
    getMonitor: (prop_types_default()).func
  }).isRequired,
  // Tree data in the following format:
  // [{title: 'main', subtitle: 'sub'}, { title: 'value2', expanded: true, children: [{ title: 'value3') }] }]
  // `title` is the primary label for the node
  // `subtitle` is a secondary label for the node
  // `expanded` shows children of the node if true, or hides them if false. Defaults to false.
  // `children` is an array of child nodes belonging to the node.
  treeData: prop_types_default().arrayOf((prop_types_default()).object).isRequired,
  // Style applied to the container wrapping the tree (style defaults to {height: '100%'})
  style: prop_types_default().shape({}),
  // Class name for the container wrapping the tree
  className: (prop_types_default()).string,
  // Style applied to the inner, scrollable container (for padding, etc.)
  innerStyle: prop_types_default().shape({}),
  // Used by react-virtualized
  // Either a fixed row height (number) or a function that returns the
  // height of a row given its index: `({ index: number }): number`
  rowHeight: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).func]),
  // Size in px of the region near the edges that initiates scrolling on dragover
  slideRegionSize: (prop_types_default()).number,
  // Custom properties to hand to the react-virtualized list
  // https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md#prop-types
  reactVirtualizedListProps: prop_types_default().shape({}),
  // The width of the blocks containing the lines representing the structure of the tree.
  scaffoldBlockPxWidth: (prop_types_default()).number,
  // Maximum depth nodes can be inserted at. Defaults to infinite.
  maxDepth: (prop_types_default()).number,
  // The method used to search nodes.
  // Defaults to a function that uses the `searchQuery` string to search for nodes with
  // matching `title` or `subtitle` values.
  // NOTE: Changing `searchMethod` will not update the search, but changing the `searchQuery` will.
  searchMethod: (prop_types_default()).func,
  // Used by the `searchMethod` to highlight and scroll to matched nodes.
  // Should be a string for the default `searchMethod`, but can be anything when using a custom search.
  searchQuery: (prop_types_default()).any,
  // eslint-disable-line react/forbid-prop-types
  // Outline the <`searchFocusOffset`>th node and scroll to it.
  searchFocusOffset: (prop_types_default()).number,
  // Get the nodes that match the search criteria. Used for counting total matches, etc.
  searchFinishCallback: (prop_types_default()).func,
  // Generate an object with additional props to be passed to the node renderer.
  // Use this for adding buttons via the `buttons` key,
  // or additional `style` / `className` settings.
  generateNodeProps: (prop_types_default()).func,
  // Set to false to disable virtualization.
  // NOTE: Auto-scrolling while dragging, and scrolling to the `searchFocusOffset` will be disabled.
  isVirtualized: (prop_types_default()).bool,
  treeNodeRenderer: (prop_types_default()).func,
  // Override the default component for rendering nodes (but keep the scaffolding generator)
  // This is an advanced option for complete customization of the appearance.
  // It is best to copy the component in `node-renderer-default.js` to use as a base, and customize as needed.
  nodeContentRenderer: (prop_types_default()).func,
  // Override the default component for rendering an empty tree
  // This is an advanced option for complete customization of the appearance.
  // It is best to copy the component in `placeholder-renderer-default.js` to use as a base,
  // and customize as needed.
  placeholderRenderer: (prop_types_default()).func,
  theme: prop_types_default().shape({
    style: prop_types_default().shape({}),
    innerStyle: prop_types_default().shape({}),
    reactVirtualizedListProps: prop_types_default().shape({}),
    scaffoldBlockPxWidth: (prop_types_default()).number,
    slideRegionSize: (prop_types_default()).number,
    rowHeight: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).func]),
    treeNodeRenderer: (prop_types_default()).func,
    nodeContentRenderer: (prop_types_default()).func,
    placeholderRenderer: (prop_types_default()).func
  }),
  // Determine the unique key used to identify each node and
  // generate the `path` array passed in callbacks.
  // By default, returns the index in the tree (omitting hidden nodes).
  getNodeKey: (prop_types_default()).func,
  // Called whenever tree data changed.
  // Just like with React input elements, you have to update your
  // own component's data to see the changes reflected.
  onChange: (prop_types_default()).func.isRequired,
  // Called after node move operation.
  onMoveNode: (prop_types_default()).func,
  // Determine whether a node can be dragged. Set to false to disable dragging on all nodes.
  canDrag: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).bool]),
  // Determine whether a node can be dropped based on its path and parents'.
  canDrop: (prop_types_default()).func,
  // Determine whether a node can have children
  canNodeHaveChildren: (prop_types_default()).func,
  // When true, or a callback returning true, dropping nodes to react-dnd
  // drop targets outside of this tree will not remove them from this tree
  shouldCopyOnOutsideDrop: prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).bool]),
  // Called after children nodes collapsed or expanded.
  onVisibilityToggle: (prop_types_default()).func,
  dndType: (prop_types_default()).string,
  // Called to track between dropped and dragging
  onDragStateChanged: (prop_types_default()).func,
  // Specify that nodes that do not match search will be collapsed
  onlyExpandSearchedNodes: (prop_types_default()).bool,
  // rtl support
  rowDirection: (prop_types_default()).string
};
ReactSortableTree.defaultProps = {
  canDrag: true,
  canDrop: null,
  canNodeHaveChildren: function canNodeHaveChildren() {
    return true;
  },
  className: '',
  dndType: null,
  generateNodeProps: null,
  getNodeKey: defaultGetNodeKey,
  innerStyle: {},
  isVirtualized: true,
  maxDepth: null,
  treeNodeRenderer: null,
  nodeContentRenderer: null,
  onMoveNode: function onMoveNode() {},
  onVisibilityToggle: function onVisibilityToggle() {},
  placeholderRenderer: null,
  reactVirtualizedListProps: {},
  rowHeight: null,
  scaffoldBlockPxWidth: null,
  searchFinishCallback: null,
  searchFocusOffset: null,
  searchMethod: null,
  searchQuery: null,
  shouldCopyOnOutsideDrop: false,
  slideRegionSize: null,
  style: {},
  theme: {},
  onDragStateChanged: function onDragStateChanged() {},
  onlyExpandSearchedNodes: false,
  rowDirection: 'ltr'
};
index_esm_polyfill(ReactSortableTree);
var SortableTreeWithoutDndContext = function SortableTreeWithoutDndContext(props) {
  return react.createElement(DndContext/* DndContext.Consumer */.L.Consumer, null, function (_ref17) {
    var dragDropManager = _ref17.dragDropManager;
    return dragDropManager === undefined ? null : react.createElement(ReactSortableTree, _extends({}, props, {
      dragDropManager: dragDropManager
    }));
  });
};
var SortableTree = function SortableTree(props) {
  return react.createElement(DndProvider/* DndProvider */.W, {
    backend: HTML5Backend
  }, react.createElement(SortableTreeWithoutDndContext, props));
}; // Export the tree component without the react-dnd DragDropContext,

/* harmony default export */ var index_esm = (SortableTree);


/***/ }),

/***/ 60491:
/***/ (function() {

"use strict";
// extracted by mini-css-extract-plugin


/***/ })

}]);