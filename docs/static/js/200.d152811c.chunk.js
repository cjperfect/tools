(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[200],{

/***/ 32344:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var _ant_design_icons_svg_es_asn_DownOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83276);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66821);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({}, props), {}, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_DownOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
  }));
};
DownOutlined.displayName = 'DownOutlined';
/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(DownOutlined));

/***/ }),

/***/ 69356:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1413);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var _ant_design_icons_svg_es_asn_UpOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4169);
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66821);

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var UpOutlined = function UpOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({}, props), {}, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_UpOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
  }));
};
UpOutlined.displayName = 'UpOutlined';
/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UpOutlined));

/***/ }),

/***/ 35432:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ collapse; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(99906);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(46123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(93433);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var createSuper = __webpack_require__(54062);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(14903);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(59767);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var es = __webpack_require__(1293);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
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
var context = __webpack_require__(74714);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(53553);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(48138);
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

/***/ 94401:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ modal; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(93433);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js + 1 modules
var CheckCircleOutlined = __webpack_require__(28405);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js + 1 modules
var CloseCircleOutlined = __webpack_require__(53747);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js + 1 modules
var ExclamationCircleOutlined = __webpack_require__(14400);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js + 1 modules
var InfoCircleOutlined = __webpack_require__(74997);
// EXTERNAL MODULE: ./node_modules/rc-util/es/React/render.js
var React_render = __webpack_require__(20182);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 5 modules
var config_provider = __webpack_require__(76793);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(46123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useState.js
var useState = __webpack_require__(51114);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(59491);
// EXTERNAL MODULE: ./node_modules/antd/es/button/button.js + 2 modules
var button_button = __webpack_require__(62965);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/ActionButton.js






function isThenable(thing) {
  return !!(thing && !!thing.then);
}
var ActionButton = function ActionButton(props) {
  var clickedRef = react.useRef(false);
  var ref = react.useRef(null);
  var _useState = (0,useState/* default */.Z)(false),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var close = props.close;
  var onInternalClose = function onInternalClose() {
    close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
  };
  react.useEffect(function () {
    var timeoutId = null;
    if (props.autoFocus) {
      timeoutId = setTimeout(function () {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
      });
    }
    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  var handlePromiseOnOk = function handlePromiseOnOk(returnValueOfOnOk) {
    if (!isThenable(returnValueOfOnOk)) {
      return;
    }
    setLoading(true);
    returnValueOfOnOk.then(function () {
      setLoading(false, true);
      onInternalClose.apply(void 0, arguments);
      clickedRef.current = false;
    }, function (e) {
      // Emit error when catch promise reject
      // eslint-disable-next-line no-console
      console.error(e);
      // See: https://github.com/ant-design/ant-design/issues/6183
      setLoading(false, true);
      clickedRef.current = false;
    });
  };
  var onClick = function onClick(e) {
    var actionFn = props.actionFn;
    if (clickedRef.current) {
      return;
    }
    clickedRef.current = true;
    if (!actionFn) {
      onInternalClose();
      return;
    }
    var returnValueOfOnOk;
    if (props.emitEvent) {
      returnValueOfOnOk = actionFn(e);
      if (props.quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = false;
        onInternalClose(e);
        return;
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close);
      // https://github.com/ant-design/ant-design/issues/23358
      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();
      if (!returnValueOfOnOk) {
        onInternalClose();
        return;
      }
    }
    handlePromiseOnOk(returnValueOfOnOk);
  };
  var type = props.type,
    children = props.children,
    prefixCls = props.prefixCls,
    buttonProps = props.buttonProps;
  return /*#__PURE__*/react.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({}, (0,button_button/* convertLegacyProps */.n)(type), {
    onClick: onClick,
    loading: loading,
    prefixCls: prefixCls
  }, buttonProps, {
    ref: ref
  }), children);
};
/* harmony default export */ var _util_ActionButton = (ActionButton);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(53553);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(21079);
// EXTERNAL MODULE: ./node_modules/@rc-component/portal/es/index.js + 7 modules
var es = __webpack_require__(92647);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(49242);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useId.js



function getUseId() {
  // We need fully clone React function here to avoid webpack warning React 17 do not export `useId`
  var fullClone = (0,objectSpread2/* default */.Z)({}, react_namespaceObject);
  return fullClone.useId;
}
var uuid = 0;

/** @private Note only worked in develop env. Not work in production. */
function resetUuid() {
  if (false) {}
}
function useId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = react.useState('ssr-id'),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  var useOriginId = getUseId();
  var reactNativeId = useOriginId === null || useOriginId === void 0 ? void 0 : useOriginId();
  react.useEffect(function () {
    if (!useOriginId) {
      var nextId = uuid;
      uuid += 1;
      setInnerId("rc_unique_".concat(nextId));
    }
  }, []);

  // Developer passed id is single source of truth
  if (id) {
    return id;
  }

  // Test env always return mock id
  if (false) {}

  // Return react native id or inner id
  return reactNativeId || innerId;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/contains.js
var contains = __webpack_require__(47882);
// EXTERNAL MODULE: ./node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(19990);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 11 modules
var rc_motion_es = __webpack_require__(1293);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Mask.js





function Mask(props) {
  var prefixCls = props.prefixCls,
    style = props.style,
    visible = props.visible,
    maskProps = props.maskProps,
    motionName = props.motionName;
  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.Z, {
    key: "mask",
    visible: visible,
    motionName: motionName,
    leavedClassName: "".concat(prefixCls, "-mask-hidden")
  }, function (_ref, ref) {
    var motionClassName = _ref.className,
      motionStyle = _ref.style;
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      ref: ref,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), style),
      className: classnames_default()("".concat(prefixCls, "-mask"), motionClassName)
    }, maskProps));
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/util.js
// =============================== Motion ===============================
function getMotionName(prefixCls, transitionName, animationName) {
  var motionName = transitionName;
  if (!motionName && animationName) {
    motionName = "".concat(prefixCls, "-").concat(animationName);
  }
  return motionName;
}
// =============================== Offset ===============================
function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
}
function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/MemoChildren.js

/* harmony default export */ var MemoChildren = (/*#__PURE__*/react.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (_, _ref2) {
  var shouldUpdate = _ref2.shouldUpdate;
  return !shouldUpdate;
}));
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/Panel.js





var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none'
};
var Panel = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    title = props.title,
    ariaId = props.ariaId,
    footer = props.footer,
    closable = props.closable,
    closeIcon = props.closeIcon,
    onClose = props.onClose,
    children = props.children,
    bodyStyle = props.bodyStyle,
    bodyProps = props.bodyProps,
    modalRender = props.modalRender,
    onMouseDown = props.onMouseDown,
    onMouseUp = props.onMouseUp,
    holderRef = props.holderRef,
    visible = props.visible,
    forceRender = props.forceRender,
    width = props.width,
    height = props.height;
  // ================================= Refs =================================
  var sentinelStartRef = (0,react.useRef)();
  var sentinelEndRef = (0,react.useRef)();
  react.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        var _sentinelStartRef$cur;
        (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 ? void 0 : _sentinelStartRef$cur.focus();
      },
      changeActive: function changeActive(next) {
        var _document = document,
          activeElement = _document.activeElement;
        if (next && activeElement === sentinelEndRef.current) {
          sentinelStartRef.current.focus();
        } else if (!next && activeElement === sentinelStartRef.current) {
          sentinelEndRef.current.focus();
        }
      }
    };
  });
  // ================================ Style =================================
  var contentStyle = {};
  if (width !== undefined) {
    contentStyle.width = width;
  }
  if (height !== undefined) {
    contentStyle.height = height;
  }
  // ================================ Render ================================
  var footerNode;
  if (footer) {
    footerNode = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }
  var headerNode;
  if (title) {
    headerNode = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-header")
    }, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-title"),
      id: ariaId
    }, title));
  }
  var closer;
  if (closable) {
    closer = /*#__PURE__*/react.createElement("button", {
      type: "button",
      onClick: onClose,
      "aria-label": "Close",
      className: "".concat(prefixCls, "-close")
    }, closeIcon || /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-close-x")
    }));
  }
  var content = /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-content")
  }, closer, headerNode, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: "".concat(prefixCls, "-body"),
    style: bodyStyle
  }, bodyProps), children), footerNode);
  return /*#__PURE__*/react.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": title ? ariaId : null,
    "aria-modal": "true",
    ref: holderRef,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), contentStyle),
    className: classnames_default()(prefixCls, className),
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp
  }, /*#__PURE__*/react.createElement("div", {
    tabIndex: 0,
    ref: sentinelStartRef,
    style: sentinelStyle,
    "aria-hidden": "true"
  }), /*#__PURE__*/react.createElement(MemoChildren, {
    shouldUpdate: visible || forceRender
  }, modalRender ? modalRender(content) : content), /*#__PURE__*/react.createElement("div", {
    tabIndex: 0,
    ref: sentinelEndRef,
    style: sentinelStyle,
    "aria-hidden": "true"
  }));
});
if (false) {}
/* harmony default export */ var Content_Panel = (Panel);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/index.js









var Content = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    title = props.title,
    style = props.style,
    className = props.className,
    visible = props.visible,
    forceRender = props.forceRender,
    destroyOnClose = props.destroyOnClose,
    motionName = props.motionName,
    ariaId = props.ariaId,
    onVisibleChanged = props.onVisibleChanged,
    mousePosition = props.mousePosition;
  var dialogRef = (0,react.useRef)();
  // ============================= Style ==============================
  var _React$useState = react.useState(),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    transformOrigin = _React$useState2[0],
    setTransformOrigin = _React$useState2[1];
  var contentStyle = {};
  if (transformOrigin) {
    contentStyle.transformOrigin = transformOrigin;
  }
  function onPrepare() {
    var elementOffset = offset(dialogRef.current);
    setTransformOrigin(mousePosition ? "".concat(mousePosition.x - elementOffset.left, "px ").concat(mousePosition.y - elementOffset.top, "px") : '');
  }
  // ============================= Render =============================
  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.Z, {
    visible: visible,
    onVisibleChanged: onVisibleChanged,
    onAppearPrepare: onPrepare,
    onEnterPrepare: onPrepare,
    forceRender: forceRender,
    motionName: motionName,
    removeOnLeave: destroyOnClose,
    ref: dialogRef
  }, function (_ref, motionRef) {
    var motionClassName = _ref.className,
      motionStyle = _ref.style;
    return /*#__PURE__*/react.createElement(Content_Panel, (0,esm_extends/* default */.Z)({}, props, {
      ref: ref,
      title: title,
      ariaId: ariaId,
      prefixCls: prefixCls,
      holderRef: motionRef,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), style), contentStyle),
      className: classnames_default()(className, motionClassName)
    }));
  });
});
Content.displayName = 'Content';
/* harmony default export */ var Dialog_Content = (Content);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/index.js













function Dialog(props) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-dialog' : _props$prefixCls,
    zIndex = props.zIndex,
    _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    _props$keyboard = props.keyboard,
    keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
    _props$focusTriggerAf = props.focusTriggerAfterClose,
    focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
    wrapStyle = props.wrapStyle,
    wrapClassName = props.wrapClassName,
    wrapProps = props.wrapProps,
    onClose = props.onClose,
    afterClose = props.afterClose,
    transitionName = props.transitionName,
    animation = props.animation,
    _props$closable = props.closable,
    closable = _props$closable === void 0 ? true : _props$closable,
    _props$mask = props.mask,
    mask = _props$mask === void 0 ? true : _props$mask,
    maskTransitionName = props.maskTransitionName,
    maskAnimation = props.maskAnimation,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    maskStyle = props.maskStyle,
    maskProps = props.maskProps,
    rootClassName = props.rootClassName;
  var lastOutSideActiveElementRef = (0,react.useRef)();
  var wrapperRef = (0,react.useRef)();
  var contentRef = (0,react.useRef)();
  var _React$useState = react.useState(visible),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    animatedVisible = _React$useState2[0],
    setAnimatedVisible = _React$useState2[1];
  // ========================== Init ==========================
  var ariaId = useId();
  function saveLastOutSideActiveElementRef() {
    if (!(0,contains/* default */.Z)(wrapperRef.current, document.activeElement)) {
      lastOutSideActiveElementRef.current = document.activeElement;
    }
  }
  function focusDialogContent() {
    if (!(0,contains/* default */.Z)(wrapperRef.current, document.activeElement)) {
      var _contentRef$current;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.focus();
    }
  }
  // ========================= Events =========================
  function onDialogVisibleChanged(newVisible) {
    // Try to focus
    if (newVisible) {
      focusDialogContent();
    } else {
      // Clean up scroll bar & focus back
      setAnimatedVisible(false);
      if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
        try {
          lastOutSideActiveElementRef.current.focus({
            preventScroll: true
          });
        } catch (e) {
          // Do nothing
        }
        lastOutSideActiveElementRef.current = null;
      }
      // Trigger afterClose only when change visible from true to false
      if (animatedVisible) {
        afterClose === null || afterClose === void 0 ? void 0 : afterClose();
      }
    }
  }
  function onInternalClose(e) {
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
  }
  // >>> Content
  var contentClickRef = (0,react.useRef)(false);
  var contentTimeoutRef = (0,react.useRef)();
  // We need record content click incase content popup out of dialog
  var onContentMouseDown = function onContentMouseDown() {
    clearTimeout(contentTimeoutRef.current);
    contentClickRef.current = true;
  };
  var onContentMouseUp = function onContentMouseUp() {
    contentTimeoutRef.current = setTimeout(function () {
      contentClickRef.current = false;
    });
  };
  // >>> Wrapper
  // Close only when element not on dialog
  var onWrapperClick = null;
  if (maskClosable) {
    onWrapperClick = function onWrapperClick(e) {
      if (contentClickRef.current) {
        contentClickRef.current = false;
      } else if (wrapperRef.current === e.target) {
        onInternalClose(e);
      }
    };
  }
  function onWrapperKeyDown(e) {
    if (keyboard && e.keyCode === KeyCode/* default.ESC */.Z.ESC) {
      e.stopPropagation();
      onInternalClose(e);
      return;
    }
    // keep focus inside dialog
    if (visible) {
      if (e.keyCode === KeyCode/* default.TAB */.Z.TAB) {
        contentRef.current.changeActive(!e.shiftKey);
      }
    }
  }
  // ========================= Effect =========================
  (0,react.useEffect)(function () {
    if (visible) {
      setAnimatedVisible(true);
      saveLastOutSideActiveElementRef();
    }
  }, [visible]);
  // Remove direct should also check the scroll bar update
  (0,react.useEffect)(function () {
    return function () {
      clearTimeout(contentTimeoutRef.current);
    };
  }, []);
  // ========================= Render =========================
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-root"), rootClassName)
  }, (0,pickAttrs/* default */.Z)(props, {
    data: true
  })), /*#__PURE__*/react.createElement(Mask, {
    prefixCls: prefixCls,
    visible: mask && visible,
    motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
    style: (0,objectSpread2/* default */.Z)({
      zIndex: zIndex
    }, maskStyle),
    maskProps: maskProps
  }), /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    tabIndex: -1,
    onKeyDown: onWrapperKeyDown,
    className: classnames_default()("".concat(prefixCls, "-wrap"), wrapClassName),
    ref: wrapperRef,
    onClick: onWrapperClick,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      zIndex: zIndex
    }, wrapStyle), {}, {
      display: !animatedVisible ? 'none' : null
    })
  }, wrapProps), /*#__PURE__*/react.createElement(Dialog_Content, (0,esm_extends/* default */.Z)({}, props, {
    onMouseDown: onContentMouseDown,
    onMouseUp: onContentMouseUp,
    ref: contentRef,
    closable: closable,
    ariaId: ariaId,
    prefixCls: prefixCls,
    visible: visible && animatedVisible,
    onClose: onInternalClose,
    onVisibleChanged: onDialogVisibleChanged,
    motionName: getMotionName(prefixCls, transitionName, animation)
  }))));
}
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/DialogWrap.js





// fix issue #10656
/*
 * getContainer remarks
 * Custom container should not be return, because in the Portal component, it will remove the
 * return container element here, if the custom container is the only child of it's component,
 * like issue #10656, It will has a conflict with removeChild method in react-dom.
 * So here should add a child (div element) to custom container.
 * */
var DialogWrap = function DialogWrap(props) {
  var visible = props.visible,
    getContainer = props.getContainer,
    forceRender = props.forceRender,
    _props$destroyOnClose = props.destroyOnClose,
    destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose,
    _afterClose = props.afterClose;
  var _React$useState = react.useState(visible),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    animatedVisible = _React$useState2[0],
    setAnimatedVisible = _React$useState2[1];
  react.useEffect(function () {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);
  // // 渲染在当前 dom 里；
  // if (getContainer === false) {
  //   return (
  //     <Dialog
  //       {...props}
  //       getOpenCount={() => 2} // 不对 body 做任何操作。。
  //     />
  //   );
  // }
  // Destroy on close will remove wrapped div
  if (!forceRender && destroyOnClose && !animatedVisible) {
    return null;
  }
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    open: visible || forceRender || animatedVisible,
    autoDestroy: false,
    getContainer: getContainer,
    autoLock: visible || animatedVisible
  }, /*#__PURE__*/react.createElement(Dialog, (0,esm_extends/* default */.Z)({}, props, {
    destroyOnClose: destroyOnClose,
    afterClose: function afterClose() {
      _afterClose === null || _afterClose === void 0 ? void 0 : _afterClose();
      setAnimatedVisible(false);
    }
  })));
};
DialogWrap.displayName = 'Dialog';
/* harmony default export */ var es_DialogWrap = (DialogWrap);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/index.js



/* harmony default export */ var rc_dialog_es = (es_DialogWrap);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(74714);
// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var form_context = __webpack_require__(4431);
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__(3267);
// EXTERNAL MODULE: ./node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(45531);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/styleChecker.js
var styleChecker = __webpack_require__(65401);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/locale.js
var locale = __webpack_require__(63400);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/Modal.js


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};














var mousePosition;
// ref: https://github.com/ant-design/ant-design/issues/15795
var getClickPosition = function getClickPosition(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  setTimeout(function () {
    mousePosition = null;
  }, 100);
};
// 只有点击事件支持从鼠标位置动画展开
if ((0,styleChecker/* canUseDocElement */.jD)()) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}
var Modal = function Modal(props) {
  var _classNames;
  var _a;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getContextPopupContainer = _React$useContext.getPopupContainer,
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var handleCancel = function handleCancel(e) {
    var onCancel = props.onCancel;
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
  };
  var handleOk = function handleOk(e) {
    var onOk = props.onOk;
    onOk === null || onOk === void 0 ? void 0 : onOk(e);
  };
   false ? 0 : void 0;
  var customizePrefixCls = props.prefixCls,
    footer = props.footer,
    visible = props.visible,
    _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    wrapClassName = props.wrapClassName,
    centered = props.centered,
    getContainer = props.getContainer,
    closeIcon = props.closeIcon,
    _props$focusTriggerAf = props.focusTriggerAfterClose,
    focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
    _props$width = props.width,
    width = _props$width === void 0 ? 520 : _props$width,
    restProps = __rest(props, ["prefixCls", "footer", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose", "width"]);
  var prefixCls = getPrefixCls('modal', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var defaultFooter = /*#__PURE__*/react.createElement(LocaleReceiver/* default */.Z, {
    componentName: "Modal",
    defaultLocale: (0,locale/* getConfirmLocale */.A)()
  }, function (contextLocale) {
    var okText = props.okText,
      _props$okType = props.okType,
      okType = _props$okType === void 0 ? 'primary' : _props$okType,
      cancelText = props.cancelText,
      _props$confirmLoading = props.confirmLoading,
      confirmLoading = _props$confirmLoading === void 0 ? false : _props$confirmLoading;
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({
      onClick: handleCancel
    }, props.cancelButtonProps), cancelText || contextLocale.cancelText), /*#__PURE__*/react.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({}, (0,button_button/* convertLegacyProps */.n)(okType), {
      loading: confirmLoading,
      onClick: handleOk
    }, props.okButtonProps), okText !== null && okText !== void 0 ? okText : contextLocale.okText));
  });
  var closeIconToRender = /*#__PURE__*/react.createElement("span", {
    className: "".concat(prefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
    className: "".concat(prefixCls, "-close-icon")
  }));
  var wrapClassNameExtended = classnames_default()(wrapClassName, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-centered"), !!centered), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrap-rtl"), direction === 'rtl'), _classNames));
  return /*#__PURE__*/react.createElement(Compact/* NoCompactStyle */.BR, null, /*#__PURE__*/react.createElement(form_context/* NoFormStyle */.Ux, {
    status: true,
    override: true
  }, /*#__PURE__*/react.createElement(rc_dialog_es, (0,esm_extends/* default */.Z)({
    width: width
  }, restProps, {
    getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
    prefixCls: prefixCls,
    wrapClassName: wrapClassNameExtended,
    footer: footer === undefined ? defaultFooter : footer,
    visible: open || visible,
    mousePosition: (_a = restProps.mousePosition) !== null && _a !== void 0 ? _a : mousePosition,
    onClose: handleCancel,
    closeIcon: closeIconToRender,
    focusTriggerAfterClose: focusTriggerAfterClose,
    transitionName: (0,motion/* getTransitionName */.mL)(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: (0,motion/* getTransitionName */.mL)(rootPrefixCls, 'fade', props.maskTransitionName)
  }))));
};
/* harmony default export */ var modal_Modal = (Modal);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/ConfirmDialog.js








var ConfirmDialog = function ConfirmDialog(props) {
  var icon = props.icon,
    onCancel = props.onCancel,
    onOk = props.onOk,
    close = props.close,
    zIndex = props.zIndex,
    afterClose = props.afterClose,
    visible = props.visible,
    open = props.open,
    keyboard = props.keyboard,
    centered = props.centered,
    getContainer = props.getContainer,
    maskStyle = props.maskStyle,
    okText = props.okText,
    okButtonProps = props.okButtonProps,
    cancelText = props.cancelText,
    cancelButtonProps = props.cancelButtonProps,
    direction = props.direction,
    prefixCls = props.prefixCls,
    wrapClassName = props.wrapClassName,
    rootPrefixCls = props.rootPrefixCls,
    iconPrefixCls = props.iconPrefixCls,
    bodyStyle = props.bodyStyle,
    _props$closable = props.closable,
    closable = _props$closable === void 0 ? false : _props$closable,
    closeIcon = props.closeIcon,
    modalRender = props.modalRender,
    focusTriggerAfterClose = props.focusTriggerAfterClose;
  if (false) {}
  // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon
  var okType = props.okType || 'primary';
  var contentPrefixCls = "".concat(prefixCls, "-confirm");
  // 默认为 true，保持向下兼容
  var okCancel = 'okCancel' in props ? props.okCancel : true;
  var width = props.width || 416;
  var style = props.style || {};
  var mask = props.mask === undefined ? true : props.mask;
  // 默认为 false，保持旧版默认行为
  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  var classString = classnames_default()(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(props.type), (0,defineProperty/* default */.Z)({}, "".concat(contentPrefixCls, "-rtl"), direction === 'rtl'), props.className);
  var cancelButton = okCancel && /*#__PURE__*/react.createElement(_util_ActionButton, {
    actionFn: onCancel,
    close: close,
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps,
    prefixCls: "".concat(rootPrefixCls, "-btn")
  }, cancelText);
  return /*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
    prefixCls: rootPrefixCls,
    iconPrefixCls: iconPrefixCls,
    direction: direction
  }, /*#__PURE__*/react.createElement(modal_Modal, {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(contentPrefixCls, "-centered"), !!props.centered), wrapClassName),
    onCancel: function onCancel() {
      return close === null || close === void 0 ? void 0 : close({
        triggerCancel: true
      });
    },
    open: open || visible,
    title: "",
    footer: "",
    transitionName: (0,motion/* getTransitionName */.mL)(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: (0,motion/* getTransitionName */.mL)(rootPrefixCls, 'fade', props.maskTransitionName),
    mask: mask,
    maskClosable: maskClosable,
    maskStyle: maskStyle,
    style: style,
    bodyStyle: bodyStyle,
    width: width,
    zIndex: zIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer,
    closable: closable,
    closeIcon: closeIcon,
    modalRender: modalRender,
    focusTriggerAfterClose: focusTriggerAfterClose
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(contentPrefixCls, "-body-wrapper")
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(contentPrefixCls, "-body")
  }, icon, props.title === undefined ? null : /*#__PURE__*/react.createElement("span", {
    className: "".concat(contentPrefixCls, "-title")
  }, props.title), /*#__PURE__*/react.createElement("div", {
    className: "".concat(contentPrefixCls, "-content")
  }, props.content)), /*#__PURE__*/react.createElement("div", {
    className: "".concat(contentPrefixCls, "-btns")
  }, cancelButton, /*#__PURE__*/react.createElement(_util_ActionButton, {
    type: okType,
    actionFn: onOk,
    close: close,
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps,
    prefixCls: "".concat(rootPrefixCls, "-btn")
  }, okText)))));
};
/* harmony default export */ var modal_ConfirmDialog = (ConfirmDialog);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/destroyFns.js
var destroyFns = [];
/* harmony default export */ var modal_destroyFns = (destroyFns);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/confirm.js


var confirm_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











var defaultRootPrefixCls = '';
function getRootPrefixCls() {
  return defaultRootPrefixCls;
}
function confirm_confirm(config) {
  var container = document.createDocumentFragment();
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  var currentConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, config), {
    close: close,
    open: true
  });
  var timeoutId;
  function destroy() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });
    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, [function () {}].concat((0,toConsumableArray/* default */.Z)(args.slice(1))));
    }
    for (var i = 0; i < modal_destroyFns.length; i++) {
      var fn = modal_destroyFns[i];
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      if (fn === close) {
        modal_destroyFns.splice(i, 1);
        break;
      }
    }
    (0,React_render/* unmount */.v)(container);
  }
  function render(_a) {
    var okText = _a.okText,
      cancelText = _a.cancelText,
      customizePrefixCls = _a.prefixCls,
      props = confirm_rest(_a, ["okText", "cancelText", "prefixCls"]);
    clearTimeout(timeoutId);
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */
    timeoutId = setTimeout(function () {
      var runtimeLocale = (0,locale/* getConfirmLocale */.A)();
      var _globalConfig = (0,config_provider/* globalConfig */.w6)(),
        getPrefixCls = _globalConfig.getPrefixCls,
        getIconPrefixCls = _globalConfig.getIconPrefixCls;
      // because Modal.config  set rootPrefixCls, which is different from other components
      var rootPrefixCls = getPrefixCls(undefined, getRootPrefixCls());
      var prefixCls = customizePrefixCls || "".concat(rootPrefixCls, "-modal");
      var iconPrefixCls = getIconPrefixCls();
      (0,React_render/* render */.s)( /*#__PURE__*/react.createElement(modal_ConfirmDialog, (0,esm_extends/* default */.Z)({}, props, {
        prefixCls: prefixCls,
        rootPrefixCls: rootPrefixCls,
        iconPrefixCls: iconPrefixCls,
        okText: okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText),
        cancelText: cancelText || runtimeLocale.cancelText
      })), container);
    });
  }
  function close() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    currentConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, currentConfig), {
      open: false,
      afterClose: function afterClose() {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }
        destroy.apply(_this, args);
      }
    });
    // Legacy support
    if (currentConfig.visible) {
      delete currentConfig.visible;
    }
    render(currentConfig);
  }
  function update(configUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, currentConfig), configUpdate);
    }
    render(currentConfig);
  }
  render(currentConfig);
  modal_destroyFns.push(close);
  return {
    destroy: close,
    update: update
  };
}
function withWarn(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(ExclamationCircleOutlined/* default */.Z, null),
    okCancel: false
  }, props), {
    type: 'warning'
  });
}
function withInfo(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(InfoCircleOutlined/* default */.Z, null),
    okCancel: false
  }, props), {
    type: 'info'
  });
}
function withSuccess(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(CheckCircleOutlined/* default */.Z, null),
    okCancel: false
  }, props), {
    type: 'success'
  });
}
function withError(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(CloseCircleOutlined/* default */.Z, null),
    okCancel: false
  }, props), {
    type: 'error'
  });
}
function withConfirm(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react.createElement(ExclamationCircleOutlined/* default */.Z, null),
    okCancel: true
  }, props), {
    type: 'confirm'
  });
}
function modalGlobalConfig(_ref) {
  var rootPrefixCls = _ref.rootPrefixCls;
   false ? 0 : void 0;
  defaultRootPrefixCls = rootPrefixCls;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/hooks/usePatchElement.js



function usePatchElement() {
  var _React$useState = react.useState([]),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    elements = _React$useState2[0],
    setElements = _React$useState2[1];
  var patchElement = react.useCallback(function (element) {
    // append a new element to elements (and create a new ref)
    setElements(function (originElements) {
      return [].concat((0,toConsumableArray/* default */.Z)(originElements), [element]);
    });
    // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect
    return function () {
      setElements(function (originElements) {
        return originElements.filter(function (ele) {
          return ele !== element;
        });
      });
    };
  }, []);
  return [elements, patchElement];
}
// EXTERNAL MODULE: ./node_modules/antd/es/locale/default.js + 5 modules
var locale_default = __webpack_require__(11165);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/useModal/HookModal.js








var HookModal = function HookModal(_ref, ref) {
  var afterClose = _ref.afterClose,
    config = _ref.config;
  var _React$useState = react.useState(true),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react.useState(config),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    innerConfig = _React$useState4[0],
    setInnerConfig = _React$useState4[1];
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    direction = _React$useContext.direction,
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('modal');
  var rootPrefixCls = getPrefixCls();
  var close = function close() {
    setOpen(false);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });
    if (innerConfig.onCancel && triggerCancel) {
      innerConfig.onCancel.apply(innerConfig, [function () {}].concat((0,toConsumableArray/* default */.Z)(args.slice(1))));
    }
  };
  react.useImperativeHandle(ref, function () {
    return {
      destroy: close,
      update: function update(newConfig) {
        setInnerConfig(function (originConfig) {
          return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, originConfig), newConfig);
        });
      }
    };
  });
  return /*#__PURE__*/react.createElement(LocaleReceiver/* default */.Z, {
    componentName: "Modal",
    defaultLocale: locale_default/* default.Modal */.Z.Modal
  }, function (contextLocale) {
    return /*#__PURE__*/react.createElement(modal_ConfirmDialog, (0,esm_extends/* default */.Z)({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls
    }, innerConfig, {
      close: close,
      open: open,
      afterClose: afterClose,
      okText: innerConfig.okText || (innerConfig.okCancel ? contextLocale.okText : contextLocale.justOkText),
      direction: direction,
      cancelText: innerConfig.cancelText || contextLocale.cancelText
    }));
  });
};
/* harmony default export */ var useModal_HookModal = (/*#__PURE__*/react.forwardRef(HookModal));
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/useModal/index.js






var useModal_uuid = 0;
var ElementsHolder = /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(function (_props, ref) {
  var _usePatchElement = usePatchElement(),
    _usePatchElement2 = (0,slicedToArray/* default */.Z)(_usePatchElement, 2),
    elements = _usePatchElement2[0],
    patchElement = _usePatchElement2[1];
  react.useImperativeHandle(ref, function () {
    return {
      patchElement: patchElement
    };
  }, []);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return /*#__PURE__*/react.createElement(react.Fragment, null, elements);
}));
function useModal() {
  var holderRef = react.useRef(null);
  // ========================== Effect ==========================
  var _React$useState = react.useState([]),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    actionQueue = _React$useState2[0],
    setActionQueue = _React$useState2[1];
  react.useEffect(function () {
    if (actionQueue.length) {
      var cloneQueue = (0,toConsumableArray/* default */.Z)(actionQueue);
      cloneQueue.forEach(function (action) {
        action();
      });
      setActionQueue([]);
    }
  }, [actionQueue]);
  // =========================== Hook ===========================
  var getConfirmFunc = react.useCallback(function (withFunc) {
    return function hookConfirm(config) {
      var _a;
      useModal_uuid += 1;
      var modalRef = /*#__PURE__*/react.createRef();
      var closeFunc;
      var modal = /*#__PURE__*/react.createElement(useModal_HookModal, {
        key: "modal-".concat(useModal_uuid),
        config: withFunc(config),
        ref: modalRef,
        afterClose: function afterClose() {
          closeFunc === null || closeFunc === void 0 ? void 0 : closeFunc();
        }
      });
      closeFunc = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.patchElement(modal);
      return {
        destroy: function destroy() {
          function destroyAction() {
            var _a;
            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
          }
          if (modalRef.current) {
            destroyAction();
          } else {
            setActionQueue(function (prev) {
              return [].concat((0,toConsumableArray/* default */.Z)(prev), [destroyAction]);
            });
          }
        },
        update: function update(newConfig) {
          function updateAction() {
            var _a;
            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.update(newConfig);
          }
          if (modalRef.current) {
            updateAction();
          } else {
            setActionQueue(function (prev) {
              return [].concat((0,toConsumableArray/* default */.Z)(prev), [updateAction]);
            });
          }
        }
      };
    };
  }, []);
  var fns = react.useMemo(function () {
    return {
      info: getConfirmFunc(withInfo),
      success: getConfirmFunc(withSuccess),
      error: getConfirmFunc(withError),
      warning: getConfirmFunc(withWarn),
      confirm: getConfirmFunc(withConfirm)
    };
  }, []);
  // eslint-disable-next-line react/jsx-key
  return [fns, /*#__PURE__*/react.createElement(ElementsHolder, {
    ref: holderRef
  })];
}
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/index.js




function modalWarn(props) {
  return confirm_confirm(withWarn(props));
}
var es_modal_Modal = modal_Modal;
es_modal_Modal.useModal = useModal;
es_modal_Modal.info = function infoFn(props) {
  return confirm_confirm(withInfo(props));
};
es_modal_Modal.success = function successFn(props) {
  return confirm_confirm(withSuccess(props));
};
es_modal_Modal.error = function errorFn(props) {
  return confirm_confirm(withError(props));
};
es_modal_Modal.warning = modalWarn;
es_modal_Modal.warn = modalWarn;
es_modal_Modal.confirm = function confirmFn(props) {
  return confirm_confirm(withConfirm(props));
};
es_modal_Modal.destroyAll = function destroyAllFn() {
  while (modal_destroyFns.length) {
    var close = modal_destroyFns.pop();
    if (close) {
      close();
    }
  }
};
es_modal_Modal.config = modalGlobalConfig;
/* harmony default export */ var modal = (es_modal_Modal);

/***/ }),

/***/ 62214:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ es_radio; }
});

// UNUSED EXPORTS: Button, Group

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(46123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(10288);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(74714);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(21631);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/getDataOrAriaProps.js
function getDataOrAriaProps(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if ((key.startsWith('data-') || key.startsWith('aria-') || key === 'role') && !key.startsWith('data-__')) {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/antd/es/radio/context.js

var RadioGroupContext = /*#__PURE__*/react.createContext(null);
var RadioGroupContextProvider = RadioGroupContext.Provider;
/* harmony default export */ var radio_context = (RadioGroupContext);
var RadioOptionTypeContext = /*#__PURE__*/react.createContext(null);
var RadioOptionTypeContextProvider = RadioOptionTypeContext.Provider;
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var createSuper = __webpack_require__(54062);
;// CONCATENATED MODULE: ./node_modules/rc-checkbox/es/index.js








// eslint-disable-next-line import/no-extraneous-dependencies


var Checkbox = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(Checkbox, _Component);
  var _super = (0,createSuper/* default */.Z)(Checkbox);
  function Checkbox(props) {
    var _this;
    (0,classCallCheck/* default */.Z)(this, Checkbox);
    _this = _super.call(this, props);
    _this.handleChange = function (e) {
      var _this$props = _this.props,
        disabled = _this$props.disabled,
        onChange = _this$props.onChange;
      if (disabled) {
        return;
      }
      if (!('checked' in _this.props)) {
        _this.setState({
          checked: e.target.checked
        });
      }
      if (onChange) {
        onChange({
          target: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.props), {}, {
            checked: e.target.checked
          }),
          stopPropagation: function stopPropagation() {
            e.stopPropagation();
          },
          preventDefault: function preventDefault() {
            e.preventDefault();
          },
          nativeEvent: e.nativeEvent
        });
      }
    };
    _this.saveInput = function (node) {
      _this.input = node;
    };
    var checked = 'checked' in props ? props.checked : props.defaultChecked;
    _this.state = {
      checked: checked
    };
    return _this;
  }
  (0,createClass/* default */.Z)(Checkbox, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;
      var _this$props2 = this.props,
        prefixCls = _this$props2.prefixCls,
        className = _this$props2.className,
        style = _this$props2.style,
        name = _this$props2.name,
        id = _this$props2.id,
        type = _this$props2.type,
        disabled = _this$props2.disabled,
        readOnly = _this$props2.readOnly,
        tabIndex = _this$props2.tabIndex,
        onClick = _this$props2.onClick,
        onFocus = _this$props2.onFocus,
        onBlur = _this$props2.onBlur,
        onKeyDown = _this$props2.onKeyDown,
        onKeyPress = _this$props2.onKeyPress,
        onKeyUp = _this$props2.onKeyUp,
        autoFocus = _this$props2.autoFocus,
        value = _this$props2.value,
        required = _this$props2.required,
        others = (0,objectWithoutProperties/* default */.Z)(_this$props2, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]);
      var globalProps = Object.keys(others).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
          // eslint-disable-next-line no-param-reassign
          prev[key] = others[key];
        }
        return prev;
      }, {});
      var checked = this.state.checked;
      var classString = classnames_default()(prefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-checked"), checked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      return /*#__PURE__*/react.createElement("span", {
        className: classString,
        style: style
      }, /*#__PURE__*/react.createElement("input", (0,esm_extends/* default */.Z)({
        name: name,
        id: id,
        type: type,
        required: required,
        readOnly: readOnly,
        disabled: disabled,
        tabIndex: tabIndex,
        className: "".concat(prefixCls, "-input"),
        checked: !!checked,
        onClick: onClick,
        onFocus: onFocus,
        onBlur: onBlur,
        onKeyUp: onKeyUp,
        onKeyDown: onKeyDown,
        onKeyPress: onKeyPress,
        onChange: this.handleChange,
        autoFocus: autoFocus,
        ref: this.saveInput,
        value: value
      }, globalProps)), /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-inner")
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if ('checked' in props) {
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, state), {}, {
          checked: props.checked
        });
      }
      return null;
    }
  }]);
  return Checkbox;
}(react.Component);
Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {}
};
/* harmony default export */ var es = (Checkbox);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(16945);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98438);
// EXTERNAL MODULE: ./node_modules/antd/es/form/context.js
var form_context = __webpack_require__(4431);
;// CONCATENATED MODULE: ./node_modules/antd/es/radio/radio.js


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var InternalRadio = function InternalRadio(props, ref) {
  var _classNames;
  var groupContext = react.useContext(radio_context);
  var radioOptionTypeContext = react.useContext(RadioOptionTypeContext);
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var innerRef = react.useRef();
  var mergedRef = (0,es_ref/* composeRef */.sQ)(ref, innerRef);
  var _useContext = (0,react.useContext)(form_context/* FormItemInputContext */.aM),
    isFormItemInput = _useContext.isFormItemInput;
   false ? 0 : void 0;
  var onChange = function onChange(e) {
    var _a, _b;
    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
    (_b = groupContext === null || groupContext === void 0 ? void 0 : groupContext.onChange) === null || _b === void 0 ? void 0 : _b.call(groupContext, e);
  };
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    children = props.children,
    style = props.style,
    customDisabled = props.disabled,
    restProps = __rest(props, ["prefixCls", "className", "children", "style", "disabled"]);
  var radioPrefixCls = getPrefixCls('radio', customizePrefixCls);
  var prefixCls = ((groupContext === null || groupContext === void 0 ? void 0 : groupContext.optionType) || radioOptionTypeContext) === 'button' ? "".concat(radioPrefixCls, "-button") : radioPrefixCls;
  var radioProps = (0,esm_extends/* default */.Z)({}, restProps);
  // ===================== Disabled =====================
  var disabled = react.useContext(DisabledContext/* default */.Z);
  radioProps.disabled = customDisabled || disabled;
  if (groupContext) {
    radioProps.name = groupContext.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === groupContext.value;
    radioProps.disabled = radioProps.disabled || groupContext.disabled;
  }
  var wrapperClassString = classnames_default()("".concat(prefixCls, "-wrapper"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrapper-checked"), radioProps.checked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrapper-disabled"), radioProps.disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrapper-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrapper-in-form-item"), isFormItemInput), _classNames), className);
  return /*#__PURE__*/(
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    react.createElement("label", {
      className: wrapperClassString,
      style: style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave
    }, /*#__PURE__*/react.createElement(es, (0,esm_extends/* default */.Z)({}, radioProps, {
      type: "radio",
      prefixCls: prefixCls,
      ref: mergedRef
    })), children !== undefined ? /*#__PURE__*/react.createElement("span", null, children) : null)
  );
};
var Radio = /*#__PURE__*/react.forwardRef(InternalRadio);
if (false) {}
/* harmony default export */ var radio_radio = (Radio);
;// CONCATENATED MODULE: ./node_modules/antd/es/radio/group.js











var RadioGroup = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var size = react.useContext(SizeContext/* default */.Z);
  var _useMergedState = (0,useMergedState/* default */.Z)(props.defaultValue, {
      value: props.value
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    value = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var onRadioChange = function onRadioChange(ev) {
    var lastValue = value;
    var val = ev.target.value;
    if (!('value' in props)) {
      setValue(val);
    }
    var onChange = props.onChange;
    if (onChange && val !== lastValue) {
      onChange(ev);
    }
  };
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    options = props.options,
    _props$buttonStyle = props.buttonStyle,
    buttonStyle = _props$buttonStyle === void 0 ? 'outline' : _props$buttonStyle,
    disabled = props.disabled,
    children = props.children,
    customizeSize = props.size,
    style = props.style,
    id = props.id,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onFocus = props.onFocus,
    onBlur = props.onBlur;
  var prefixCls = getPrefixCls('radio', customizePrefixCls);
  var groupPrefixCls = "".concat(prefixCls, "-group");
  var childrenToRender = children;
  // 如果存在 options, 优先使用
  if (options && options.length > 0) {
    childrenToRender = options.map(function (option) {
      if (typeof option === 'string' || typeof option === 'number') {
        // 此处类型自动推导为 string
        return /*#__PURE__*/react.createElement(radio_radio, {
          key: option.toString(),
          prefixCls: prefixCls,
          disabled: disabled,
          value: option,
          checked: value === option
        }, option);
      }
      // 此处类型自动推导为 { label: string value: string }
      return /*#__PURE__*/react.createElement(radio_radio, {
        key: "radio-group-value-options-".concat(option.value),
        prefixCls: prefixCls,
        disabled: option.disabled || disabled,
        value: option.value,
        checked: value === option.value,
        style: option.style
      }, option.label);
    });
  }
  var mergedSize = customizeSize || size;
  var classString = classnames_default()(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(groupPrefixCls, "-").concat(mergedSize), mergedSize), (0,defineProperty/* default */.Z)(_classNames, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, getDataOrAriaProps(props), {
    className: classString,
    style: style,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onFocus: onFocus,
    onBlur: onBlur,
    id: id,
    ref: ref
  }), /*#__PURE__*/react.createElement(RadioGroupContextProvider, {
    value: {
      onChange: onRadioChange,
      value: value,
      disabled: props.disabled,
      name: props.name,
      optionType: props.optionType
    }
  }, childrenToRender));
});
/* harmony default export */ var group = (/*#__PURE__*/react.memo(RadioGroup));
;// CONCATENATED MODULE: ./node_modules/antd/es/radio/radioButton.js

var radioButton_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var RadioButton = function RadioButton(props, ref) {
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var customizePrefixCls = props.prefixCls,
    radioProps = radioButton_rest(props, ["prefixCls"]);
  var prefixCls = getPrefixCls('radio', customizePrefixCls);
  return /*#__PURE__*/react.createElement(RadioOptionTypeContextProvider, {
    value: "button"
  }, /*#__PURE__*/react.createElement(radio_radio, (0,esm_extends/* default */.Z)({
    prefixCls: prefixCls
  }, radioProps, {
    type: "radio",
    ref: ref
  })));
};
/* harmony default export */ var radioButton = (/*#__PURE__*/react.forwardRef(RadioButton));
;// CONCATENATED MODULE: ./node_modules/antd/es/radio/index.js




var radio_Radio = radio_radio;
radio_Radio.Button = radioButton;
radio_Radio.Group = group;
radio_Radio.__ANT_RADIO = true;
/* harmony default export */ var es_radio = (radio_Radio);

/***/ }),

/***/ 86345:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es_switch; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/antd/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(34470);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(46123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(10288);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(49242);
;// CONCATENATED MODULE: ./node_modules/rc-switch/es/index.js







var Switch = react.forwardRef(function (_ref, ref) {
  var _classNames;
  var _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-switch' : _ref$prefixCls,
    className = _ref.className,
    checked = _ref.checked,
    defaultChecked = _ref.defaultChecked,
    disabled = _ref.disabled,
    loadingIcon = _ref.loadingIcon,
    checkedChildren = _ref.checkedChildren,
    unCheckedChildren = _ref.unCheckedChildren,
    onClick = _ref.onClick,
    onChange = _ref.onChange,
    onKeyDown = _ref.onKeyDown,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"]);
  var _useMergedState = (0,useMergedState/* default */.Z)(false, {
      value: checked,
      defaultValue: defaultChecked
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    innerChecked = _useMergedState2[0],
    setInnerChecked = _useMergedState2[1];
  function triggerChange(newChecked, event) {
    var mergedChecked = innerChecked;
    if (!disabled) {
      mergedChecked = newChecked;
      setInnerChecked(mergedChecked);
      onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);
    }
    return mergedChecked;
  }
  function onInternalKeyDown(e) {
    if (e.which === KeyCode/* default.LEFT */.Z.LEFT) {
      triggerChange(false, e);
    } else if (e.which === KeyCode/* default.RIGHT */.Z.RIGHT) {
      triggerChange(true, e);
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  }
  function onInternalClick(e) {
    var ret = triggerChange(!innerChecked, e); // [Legacy] trigger onClick with value

    onClick === null || onClick === void 0 ? void 0 : onClick(ret, e);
  }
  var switchClassName = classnames_default()(prefixCls, className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-checked"), innerChecked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
  return react.createElement("button", Object.assign({}, restProps, {
    type: "button",
    role: "switch",
    "aria-checked": innerChecked,
    disabled: disabled,
    className: switchClassName,
    ref: ref,
    onKeyDown: onInternalKeyDown,
    onClick: onInternalClick
  }), loadingIcon, react.createElement("span", {
    className: "".concat(prefixCls, "-inner")
  }, innerChecked ? checkedChildren : unCheckedChildren));
});
Switch.displayName = 'Switch';
/* harmony default export */ var es = (Switch);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(74714);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(98438);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(21631);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/wave.js + 1 modules
var wave = __webpack_require__(46479);
;// CONCATENATED MODULE: ./node_modules/antd/es/switch/index.js


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









var switch_Switch = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var _classNames;
  var customizePrefixCls = _a.prefixCls,
    customizeSize = _a.size,
    customDisabled = _a.disabled,
    loading = _a.loading,
    _a$className = _a.className,
    className = _a$className === void 0 ? '' : _a$className,
    props = __rest(_a, ["prefixCls", "size", "disabled", "loading", "className"]);
   false ? 0 : void 0;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var size = react.useContext(SizeContext/* default */.Z);
  // ===================== Disabled =====================
  var disabled = react.useContext(DisabledContext/* default */.Z);
  var mergedDisabled = (customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled) || loading;
  var prefixCls = getPrefixCls('switch', customizePrefixCls);
  var loadingIcon = /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-handle")
  }, loading && /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
    className: "".concat(prefixCls, "-loading-icon")
  }));
  var classes = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-small"), (customizeSize || size) === 'small'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-loading"), loading), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/react.createElement(wave/* default */.Z, {
    insertExtraNode: true
  }, /*#__PURE__*/react.createElement(es, (0,esm_extends/* default */.Z)({}, props, {
    prefixCls: prefixCls,
    className: classes,
    disabled: mergedDisabled,
    ref: ref,
    loadingIcon: loadingIcon
  })));
});
switch_Switch.__ANT_SWITCH = true;
if (false) {}
/* harmony default export */ var es_switch = (switch_Switch);

/***/ }),

/***/ 59767:
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

/***/ })

}]);