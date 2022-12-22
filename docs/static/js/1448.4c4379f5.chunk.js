"use strict";
(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[1448],{

/***/ 61448:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Adapter": function() { return /* binding */ Adapter; },
/* harmony export */   "CodeActionAdaptor": function() { return /* binding */ CodeActionAdaptor; },
/* harmony export */   "DefinitionAdapter": function() { return /* binding */ DefinitionAdapter; },
/* harmony export */   "DiagnosticsAdapter": function() { return /* binding */ DiagnosticsAdapter; },
/* harmony export */   "FormatAdapter": function() { return /* binding */ FormatAdapter; },
/* harmony export */   "FormatHelper": function() { return /* binding */ FormatHelper; },
/* harmony export */   "FormatOnTypeAdapter": function() { return /* binding */ FormatOnTypeAdapter; },
/* harmony export */   "InlayHintsAdapter": function() { return /* binding */ InlayHintsAdapter; },
/* harmony export */   "Kind": function() { return /* binding */ Kind; },
/* harmony export */   "LibFiles": function() { return /* binding */ LibFiles; },
/* harmony export */   "OccurrencesAdapter": function() { return /* binding */ OccurrencesAdapter; },
/* harmony export */   "OutlineAdapter": function() { return /* binding */ OutlineAdapter; },
/* harmony export */   "QuickInfoAdapter": function() { return /* binding */ QuickInfoAdapter; },
/* harmony export */   "ReferenceAdapter": function() { return /* binding */ ReferenceAdapter; },
/* harmony export */   "RenameAdapter": function() { return /* binding */ RenameAdapter; },
/* harmony export */   "SignatureHelpAdapter": function() { return /* binding */ SignatureHelpAdapter; },
/* harmony export */   "SuggestAdapter": function() { return /* binding */ SuggestAdapter; },
/* harmony export */   "WorkerManager": function() { return /* binding */ WorkerManager; },
/* harmony export */   "flattenDiagnosticMessageText": function() { return /* binding */ flattenDiagnosticMessageText; },
/* harmony export */   "getJavaScriptWorker": function() { return /* binding */ getJavaScriptWorker; },
/* harmony export */   "getTypeScriptWorker": function() { return /* binding */ getTypeScriptWorker; },
/* harmony export */   "setupJavaScript": function() { return /* binding */ setupJavaScript; },
/* harmony export */   "setupTypeScript": function() { return /* binding */ setupTypeScript; }
/* harmony export */ });
/* harmony import */ var D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1413);
/* harmony import */ var D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84506);
/* harmony import */ var D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97326);
/* harmony import */ var D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60136);
/* harmony import */ var D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27277);
/* harmony import */ var D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74165);
/* harmony import */ var D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15861);
/* harmony import */ var D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15671);
/* harmony import */ var D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43144);
/* harmony import */ var D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4942);
/* harmony import */ var D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37762);
/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3337);
/* harmony import */ var _monaco_contribution_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30533);











/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = function __defNormalProp(obj, key, value) {
  return key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: value
  }) : obj[key] = value;
};
var __copyProps = function __copyProps(to, from, except, desc) {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(__getOwnPropNames(from)),
      _step;
    try {
      var _loop = function _loop() {
        var key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: function get() {
            return from[key];
          },
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __reExport = function __reExport(target, mod, secondTarget) {
  return __copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default");
};
var __publicField = function __publicField(obj, key, value) {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/fillers/monaco-editor-core.ts
var monaco_editor_core_exports = {};
__reExport(monaco_editor_core_exports, _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_1__);


// src/language/typescript/workerManager.ts
var WorkerManager = /*#__PURE__*/function () {
  function WorkerManager(_modeId, _defaults) {
    var _this = this;
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, WorkerManager);
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "_configChangeListener", void 0);
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "_updateExtraLibsToken", void 0);
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "_extraLibsChangeListener", void 0);
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "_worker", void 0);
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "_client", void 0);
    this._modeId = _modeId;
    this._defaults = _defaults;
    this._worker = null;
    this._client = null;
    this._configChangeListener = this._defaults.onDidChange(function () {
      return _this._stopWorker();
    });
    this._updateExtraLibsToken = 0;
    this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(function () {
      return _this._updateExtraLibs();
    });
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(WorkerManager, [{
    key: "dispose",
    value: function dispose() {
      this._configChangeListener.dispose();
      this._extraLibsChangeListener.dispose();
      this._stopWorker();
    }
  }, {
    key: "_stopWorker",
    value: function _stopWorker() {
      if (this._worker) {
        this._worker.dispose();
        this._worker = null;
      }
      this._client = null;
    }
  }, {
    key: "_updateExtraLibs",
    value: function () {
      var _updateExtraLibs2 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee() {
        var myToken, proxy;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this._worker) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                myToken = ++this._updateExtraLibsToken;
                _context2.next = 5;
                return this._worker.getProxy();
              case 5:
                proxy = _context2.sent;
                if (!(this._updateExtraLibsToken !== myToken)) {
                  _context2.next = 8;
                  break;
                }
                return _context2.abrupt("return");
              case 8:
                proxy.updateExtraLibs(this._defaults.getExtraLibs());
              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this);
      }));
      function _updateExtraLibs() {
        return _updateExtraLibs2.apply(this, arguments);
      }
      return _updateExtraLibs;
    }()
  }, {
    key: "_getClient",
    value: function _getClient() {
      var _this2 = this;
      if (!this._client) {
        this._client = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee2() {
          return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee2$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _this2._worker = monaco_editor_core_exports.editor.createWebWorker({
                    moduleId: "vs/language/typescript/tsWorker",
                    label: _this2._modeId,
                    keepIdleModels: true,
                    createData: {
                      compilerOptions: _this2._defaults.getCompilerOptions(),
                      extraLibs: _this2._defaults.getExtraLibs(),
                      customWorkerPath: _this2._defaults.workerOptions.customWorkerPath,
                      inlayHintsOptions: _this2._defaults.inlayHintsOptions
                    }
                  });
                  if (!_this2._defaults.getEagerModelSync()) {
                    _context3.next = 5;
                    break;
                  }
                  _context3.next = 4;
                  return _this2._worker.withSyncedResources(monaco_editor_core_exports.editor.getModels().filter(function (model) {
                    return model.getLanguageId() === _this2._modeId;
                  }).map(function (model) {
                    return model.uri;
                  }));
                case 4:
                  return _context3.abrupt("return", _context3.sent);
                case 5:
                  _context3.next = 7;
                  return _this2._worker.getProxy();
                case 7:
                  return _context3.abrupt("return", _context3.sent);
                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee2);
        }))();
      }
      return this._client;
    }
  }, {
    key: "getLanguageServiceWorker",
    value: function () {
      var _getLanguageServiceWorker = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee3() {
        var client,
          _len,
          resources,
          _key,
          _args3 = arguments;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee3$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._getClient();
              case 2:
                client = _context4.sent;
                if (!this._worker) {
                  _context4.next = 7;
                  break;
                }
                for (_len = _args3.length, resources = new Array(_len), _key = 0; _key < _len; _key++) {
                  resources[_key] = _args3[_key];
                }
                _context4.next = 7;
                return this._worker.withSyncedResources(resources);
              case 7:
                return _context4.abrupt("return", client);
              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3, this);
      }));
      function getLanguageServiceWorker() {
        return _getLanguageServiceWorker.apply(this, arguments);
      }
      return getLanguageServiceWorker;
    }()
  }]);
  return WorkerManager;
}();

// src/language/typescript/languageFeatures.ts


// src/language/typescript/lib/lib.index.ts
var libFileSet = {};
libFileSet["lib.d.ts"] = true;
libFileSet["lib.dom.d.ts"] = true;
libFileSet["lib.dom.iterable.d.ts"] = true;
libFileSet["lib.es2015.collection.d.ts"] = true;
libFileSet["lib.es2015.core.d.ts"] = true;
libFileSet["lib.es2015.d.ts"] = true;
libFileSet["lib.es2015.generator.d.ts"] = true;
libFileSet["lib.es2015.iterable.d.ts"] = true;
libFileSet["lib.es2015.promise.d.ts"] = true;
libFileSet["lib.es2015.proxy.d.ts"] = true;
libFileSet["lib.es2015.reflect.d.ts"] = true;
libFileSet["lib.es2015.symbol.d.ts"] = true;
libFileSet["lib.es2015.symbol.wellknown.d.ts"] = true;
libFileSet["lib.es2016.array.include.d.ts"] = true;
libFileSet["lib.es2016.d.ts"] = true;
libFileSet["lib.es2016.full.d.ts"] = true;
libFileSet["lib.es2017.d.ts"] = true;
libFileSet["lib.es2017.full.d.ts"] = true;
libFileSet["lib.es2017.intl.d.ts"] = true;
libFileSet["lib.es2017.object.d.ts"] = true;
libFileSet["lib.es2017.sharedmemory.d.ts"] = true;
libFileSet["lib.es2017.string.d.ts"] = true;
libFileSet["lib.es2017.typedarrays.d.ts"] = true;
libFileSet["lib.es2018.asyncgenerator.d.ts"] = true;
libFileSet["lib.es2018.asynciterable.d.ts"] = true;
libFileSet["lib.es2018.d.ts"] = true;
libFileSet["lib.es2018.full.d.ts"] = true;
libFileSet["lib.es2018.intl.d.ts"] = true;
libFileSet["lib.es2018.promise.d.ts"] = true;
libFileSet["lib.es2018.regexp.d.ts"] = true;
libFileSet["lib.es2019.array.d.ts"] = true;
libFileSet["lib.es2019.d.ts"] = true;
libFileSet["lib.es2019.full.d.ts"] = true;
libFileSet["lib.es2019.object.d.ts"] = true;
libFileSet["lib.es2019.string.d.ts"] = true;
libFileSet["lib.es2019.symbol.d.ts"] = true;
libFileSet["lib.es2020.bigint.d.ts"] = true;
libFileSet["lib.es2020.d.ts"] = true;
libFileSet["lib.es2020.full.d.ts"] = true;
libFileSet["lib.es2020.intl.d.ts"] = true;
libFileSet["lib.es2020.promise.d.ts"] = true;
libFileSet["lib.es2020.sharedmemory.d.ts"] = true;
libFileSet["lib.es2020.string.d.ts"] = true;
libFileSet["lib.es2020.symbol.wellknown.d.ts"] = true;
libFileSet["lib.es2021.d.ts"] = true;
libFileSet["lib.es2021.full.d.ts"] = true;
libFileSet["lib.es2021.intl.d.ts"] = true;
libFileSet["lib.es2021.promise.d.ts"] = true;
libFileSet["lib.es2021.string.d.ts"] = true;
libFileSet["lib.es2021.weakref.d.ts"] = true;
libFileSet["lib.es5.d.ts"] = true;
libFileSet["lib.es6.d.ts"] = true;
libFileSet["lib.esnext.d.ts"] = true;
libFileSet["lib.esnext.full.d.ts"] = true;
libFileSet["lib.esnext.intl.d.ts"] = true;
libFileSet["lib.esnext.promise.d.ts"] = true;
libFileSet["lib.esnext.string.d.ts"] = true;
libFileSet["lib.esnext.weakref.d.ts"] = true;
libFileSet["lib.scripthost.d.ts"] = true;
libFileSet["lib.webworker.d.ts"] = true;
libFileSet["lib.webworker.importscripts.d.ts"] = true;
libFileSet["lib.webworker.iterable.d.ts"] = true;

// src/language/typescript/languageFeatures.ts
function flattenDiagnosticMessageText(diag, newLine) {
  var indent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (typeof diag === "string") {
    return diag;
  } else if (diag === void 0) {
    return "";
  }
  var result = "";
  if (indent) {
    result += newLine;
    for (var i = 0; i < indent; i++) {
      result += "  ";
    }
  }
  result += diag.messageText;
  indent++;
  if (diag.next) {
    var _iterator2 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(diag.next),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var kid = _step2.value;
        result += flattenDiagnosticMessageText(kid, newLine, indent);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  return result;
}
function displayPartsToString(displayParts) {
  if (displayParts) {
    return displayParts.map(function (displayPart) {
      return displayPart.text;
    }).join("");
  }
  return "";
}
var Adapter = /*#__PURE__*/function () {
  function Adapter(_worker) {
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, Adapter);
    this._worker = _worker;
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(Adapter, [{
    key: "_textSpanToRange",
    value: function _textSpanToRange(model, span) {
      var p1 = model.getPositionAt(span.start);
      var p2 = model.getPositionAt(span.start + span.length);
      var startLineNumber = p1.lineNumber,
        startColumn = p1.column;
      var endLineNumber = p2.lineNumber,
        endColumn = p2.column;
      return {
        startLineNumber: startLineNumber,
        startColumn: startColumn,
        endLineNumber: endLineNumber,
        endColumn: endColumn
      };
    }
  }]);
  return Adapter;
}();
var LibFiles = /*#__PURE__*/function () {
  function LibFiles(_worker) {
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, LibFiles);
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "_libFiles", void 0);
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "_hasFetchedLibFiles", void 0);
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(this, "_fetchLibFilesPromise", void 0);
    this._worker = _worker;
    this._libFiles = {};
    this._hasFetchedLibFiles = false;
    this._fetchLibFilesPromise = null;
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(LibFiles, [{
    key: "isLibFile",
    value: function isLibFile(uri) {
      if (!uri) {
        return false;
      }
      if (uri.path.indexOf("/lib.") === 0) {
        return !!libFileSet[uri.path.slice(1)];
      }
      return false;
    }
  }, {
    key: "getOrCreateModel",
    value: function getOrCreateModel(fileName) {
      var uri = monaco_editor_core_exports.Uri.parse(fileName);
      var model = monaco_editor_core_exports.editor.getModel(uri);
      if (model) {
        return model;
      }
      if (this.isLibFile(uri) && this._hasFetchedLibFiles) {
        return monaco_editor_core_exports.editor.createModel(this._libFiles[uri.path.slice(1)], "typescript", uri);
      }
      var matchedLibFile = _monaco_contribution_js__WEBPACK_IMPORTED_MODULE_7__.typescriptDefaults.getExtraLibs()[fileName];
      if (matchedLibFile) {
        return monaco_editor_core_exports.editor.createModel(matchedLibFile.content, "typescript", uri);
      }
      return null;
    }
  }, {
    key: "_containsLibFile",
    value: function _containsLibFile(uris) {
      var _iterator3 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(uris),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var uri = _step3.value;
          if (this.isLibFile(uri)) {
            return true;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return false;
    }
  }, {
    key: "fetchLibFilesIfNecessary",
    value: function () {
      var _fetchLibFilesIfNecessary = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee4(uris) {
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee4$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this._containsLibFile(uris)) {
                  _context5.next = 2;
                  break;
                }
                return _context5.abrupt("return");
              case 2:
                _context5.next = 4;
                return this._fetchLibFiles();
              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee4, this);
      }));
      function fetchLibFilesIfNecessary(_x) {
        return _fetchLibFilesIfNecessary.apply(this, arguments);
      }
      return fetchLibFilesIfNecessary;
    }()
  }, {
    key: "_fetchLibFiles",
    value: function _fetchLibFiles() {
      var _this3 = this;
      if (!this._fetchLibFilesPromise) {
        this._fetchLibFilesPromise = this._worker().then(function (w) {
          return w.getLibFiles();
        }).then(function (libFiles) {
          _this3._hasFetchedLibFiles = true;
          _this3._libFiles = libFiles;
        });
      }
      return this._fetchLibFilesPromise;
    }
  }]);
  return LibFiles;
}();
var DiagnosticsAdapter = /*#__PURE__*/function (_Adapter) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(DiagnosticsAdapter, _Adapter);
  var _super = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(DiagnosticsAdapter);
  function DiagnosticsAdapter(_libFiles, _defaults, _selector, worker) {
    var _this4;
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, DiagnosticsAdapter);
    _this4 = _super.call(this, worker);
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(_this4), "_disposables", []);
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(_this4), "_listener", /* @__PURE__ */Object.create(null));
    _this4._libFiles = _libFiles;
    _this4._defaults = _defaults;
    _this4._selector = _selector;
    var onModelAdd = function onModelAdd(model) {
      if (model.getLanguageId() !== _selector) {
        return;
      }
      var maybeValidate = function maybeValidate() {
        var _this4$_defaults$getD = _this4._defaults.getDiagnosticsOptions(),
          onlyVisible = _this4$_defaults$getD.onlyVisible;
        if (onlyVisible) {
          if (model.isAttachedToEditor()) {
            _this4._doValidate(model);
          }
        } else {
          _this4._doValidate(model);
        }
      };
      var handle;
      var changeSubscription = model.onDidChangeContent(function () {
        clearTimeout(handle);
        handle = window.setTimeout(maybeValidate, 500);
      });
      var visibleSubscription = model.onDidChangeAttached(function () {
        var _this4$_defaults$getD2 = _this4._defaults.getDiagnosticsOptions(),
          onlyVisible = _this4$_defaults$getD2.onlyVisible;
        if (onlyVisible) {
          if (model.isAttachedToEditor()) {
            maybeValidate();
          } else {
            monaco_editor_core_exports.editor.setModelMarkers(model, _this4._selector, []);
          }
        }
      });
      _this4._listener[model.uri.toString()] = {
        dispose: function dispose() {
          changeSubscription.dispose();
          visibleSubscription.dispose();
          clearTimeout(handle);
        }
      };
      maybeValidate();
    };
    var onModelRemoved = function onModelRemoved(model) {
      monaco_editor_core_exports.editor.setModelMarkers(model, _this4._selector, []);
      var key = model.uri.toString();
      if (_this4._listener[key]) {
        _this4._listener[key].dispose();
        delete _this4._listener[key];
      }
    };
    _this4._disposables.push(monaco_editor_core_exports.editor.onDidCreateModel(function (model) {
      return onModelAdd(model);
    }));
    _this4._disposables.push(monaco_editor_core_exports.editor.onWillDisposeModel(onModelRemoved));
    _this4._disposables.push(monaco_editor_core_exports.editor.onDidChangeModelLanguage(function (event) {
      onModelRemoved(event.model);
      onModelAdd(event.model);
    }));
    _this4._disposables.push({
      dispose: function dispose() {
        var _iterator4 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(monaco_editor_core_exports.editor.getModels()),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var model = _step4.value;
            onModelRemoved(model);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    });
    var recomputeDiagostics = function recomputeDiagostics() {
      var _iterator5 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(monaco_editor_core_exports.editor.getModels()),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var model = _step5.value;
          onModelRemoved(model);
          onModelAdd(model);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    };
    _this4._disposables.push(_this4._defaults.onDidChange(recomputeDiagostics));
    _this4._disposables.push(_this4._defaults.onDidExtraLibsChange(recomputeDiagostics));
    monaco_editor_core_exports.editor.getModels().forEach(function (model) {
      return onModelAdd(model);
    });
    return _this4;
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(DiagnosticsAdapter, [{
    key: "dispose",
    value: function dispose() {
      this._disposables.forEach(function (d) {
        return d && d.dispose();
      });
      this._disposables = [];
    }
  }, {
    key: "_doValidate",
    value: function () {
      var _doValidate2 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee5(model) {
        var _this5 = this;
        var worker, promises, _this$_defaults$getDi, noSyntaxValidation, noSemanticValidation, noSuggestionDiagnostics, allDiagnostics, diagnostics, relatedUris;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee5$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._worker(model.uri);
              case 2:
                worker = _context6.sent;
                if (!model.isDisposed()) {
                  _context6.next = 5;
                  break;
                }
                return _context6.abrupt("return");
              case 5:
                promises = [];
                _this$_defaults$getDi = this._defaults.getDiagnosticsOptions(), noSyntaxValidation = _this$_defaults$getDi.noSyntaxValidation, noSemanticValidation = _this$_defaults$getDi.noSemanticValidation, noSuggestionDiagnostics = _this$_defaults$getDi.noSuggestionDiagnostics;
                if (!noSyntaxValidation) {
                  promises.push(worker.getSyntacticDiagnostics(model.uri.toString()));
                }
                if (!noSemanticValidation) {
                  promises.push(worker.getSemanticDiagnostics(model.uri.toString()));
                }
                if (!noSuggestionDiagnostics) {
                  promises.push(worker.getSuggestionDiagnostics(model.uri.toString()));
                }
                _context6.next = 12;
                return Promise.all(promises);
              case 12:
                allDiagnostics = _context6.sent;
                if (!(!allDiagnostics || model.isDisposed())) {
                  _context6.next = 15;
                  break;
                }
                return _context6.abrupt("return");
              case 15:
                diagnostics = allDiagnostics.reduce(function (p, c) {
                  return c.concat(p);
                }, []).filter(function (d) {
                  return (_this5._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(d.code) === -1;
                });
                relatedUris = diagnostics.map(function (d) {
                  return d.relatedInformation || [];
                }).reduce(function (p, c) {
                  return c.concat(p);
                }, []).map(function (relatedInformation) {
                  return relatedInformation.file ? monaco_editor_core_exports.Uri.parse(relatedInformation.file.fileName) : null;
                });
                _context6.next = 19;
                return this._libFiles.fetchLibFilesIfNecessary(relatedUris);
              case 19:
                if (!model.isDisposed()) {
                  _context6.next = 21;
                  break;
                }
                return _context6.abrupt("return");
              case 21:
                monaco_editor_core_exports.editor.setModelMarkers(model, this._selector, diagnostics.map(function (d) {
                  return _this5._convertDiagnostics(model, d);
                }));
              case 22:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee5, this);
      }));
      function _doValidate(_x2) {
        return _doValidate2.apply(this, arguments);
      }
      return _doValidate;
    }()
  }, {
    key: "_convertDiagnostics",
    value: function _convertDiagnostics(model, diag) {
      var diagStart = diag.start || 0;
      var diagLength = diag.length || 1;
      var _model$getPositionAt = model.getPositionAt(diagStart),
        startLineNumber = _model$getPositionAt.lineNumber,
        startColumn = _model$getPositionAt.column;
      var _model$getPositionAt2 = model.getPositionAt(diagStart + diagLength),
        endLineNumber = _model$getPositionAt2.lineNumber,
        endColumn = _model$getPositionAt2.column;
      var tags = [];
      if (diag.reportsUnnecessary) {
        tags.push(monaco_editor_core_exports.MarkerTag.Unnecessary);
      }
      if (diag.reportsDeprecated) {
        tags.push(monaco_editor_core_exports.MarkerTag.Deprecated);
      }
      return {
        severity: this._tsDiagnosticCategoryToMarkerSeverity(diag.category),
        startLineNumber: startLineNumber,
        startColumn: startColumn,
        endLineNumber: endLineNumber,
        endColumn: endColumn,
        message: flattenDiagnosticMessageText(diag.messageText, "\n"),
        code: diag.code.toString(),
        tags: tags,
        relatedInformation: this._convertRelatedInformation(model, diag.relatedInformation)
      };
    }
  }, {
    key: "_convertRelatedInformation",
    value: function _convertRelatedInformation(model, relatedInformation) {
      var _this6 = this;
      if (!relatedInformation) {
        return [];
      }
      var result = [];
      relatedInformation.forEach(function (info) {
        var relatedResource = model;
        if (info.file) {
          relatedResource = _this6._libFiles.getOrCreateModel(info.file.fileName);
        }
        if (!relatedResource) {
          return;
        }
        var infoStart = info.start || 0;
        var infoLength = info.length || 1;
        var _relatedResource$getP = relatedResource.getPositionAt(infoStart),
          startLineNumber = _relatedResource$getP.lineNumber,
          startColumn = _relatedResource$getP.column;
        var _relatedResource$getP2 = relatedResource.getPositionAt(infoStart + infoLength),
          endLineNumber = _relatedResource$getP2.lineNumber,
          endColumn = _relatedResource$getP2.column;
        result.push({
          resource: relatedResource.uri,
          startLineNumber: startLineNumber,
          startColumn: startColumn,
          endLineNumber: endLineNumber,
          endColumn: endColumn,
          message: flattenDiagnosticMessageText(info.messageText, "\n")
        });
      });
      return result;
    }
  }, {
    key: "_tsDiagnosticCategoryToMarkerSeverity",
    value: function _tsDiagnosticCategoryToMarkerSeverity(category) {
      switch (category) {
        case 1 /* Error */:
          return monaco_editor_core_exports.MarkerSeverity.Error;
        case 3 /* Message */:
          return monaco_editor_core_exports.MarkerSeverity.Info;
        case 0 /* Warning */:
          return monaco_editor_core_exports.MarkerSeverity.Warning;
        case 2 /* Suggestion */:
          return monaco_editor_core_exports.MarkerSeverity.Hint;
      }
      return monaco_editor_core_exports.MarkerSeverity.Info;
    }
  }]);
  return DiagnosticsAdapter;
}(Adapter);
var SuggestAdapter = /*#__PURE__*/function (_Adapter2) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(SuggestAdapter, _Adapter2);
  var _super2 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(SuggestAdapter);
  function SuggestAdapter() {
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, SuggestAdapter);
    return _super2.apply(this, arguments);
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(SuggestAdapter, [{
    key: "triggerCharacters",
    get: function get() {
      return ["."];
    }
  }, {
    key: "provideCompletionItems",
    value: function () {
      var _provideCompletionItems = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee6(model, position, _context, token) {
        var wordInfo, wordRange, resource, offset, worker, info, suggestions;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee6$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                wordInfo = model.getWordUntilPosition(position);
                wordRange = new monaco_editor_core_exports.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
                resource = model.uri;
                offset = model.getOffsetAt(position);
                _context7.next = 6;
                return this._worker(resource);
              case 6:
                worker = _context7.sent;
                if (!model.isDisposed()) {
                  _context7.next = 9;
                  break;
                }
                return _context7.abrupt("return");
              case 9:
                _context7.next = 11;
                return worker.getCompletionsAtPosition(resource.toString(), offset);
              case 11:
                info = _context7.sent;
                if (!(!info || model.isDisposed())) {
                  _context7.next = 14;
                  break;
                }
                return _context7.abrupt("return");
              case 14:
                suggestions = info.entries.map(function (entry) {
                  var _entry$kindModifiers;
                  var range = wordRange;
                  if (entry.replacementSpan) {
                    var p1 = model.getPositionAt(entry.replacementSpan.start);
                    var p2 = model.getPositionAt(entry.replacementSpan.start + entry.replacementSpan.length);
                    range = new monaco_editor_core_exports.Range(p1.lineNumber, p1.column, p2.lineNumber, p2.column);
                  }
                  var tags = [];
                  if (((_entry$kindModifiers = entry.kindModifiers) === null || _entry$kindModifiers === void 0 ? void 0 : _entry$kindModifiers.indexOf("deprecated")) !== -1) {
                    tags.push(monaco_editor_core_exports.languages.CompletionItemTag.Deprecated);
                  }
                  return {
                    uri: resource,
                    position: position,
                    offset: offset,
                    range: range,
                    label: entry.name,
                    insertText: entry.name,
                    sortText: entry.sortText,
                    kind: SuggestAdapter.convertKind(entry.kind),
                    tags: tags
                  };
                });
                return _context7.abrupt("return", {
                  suggestions: suggestions
                });
              case 16:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee6, this);
      }));
      function provideCompletionItems(_x3, _x4, _x5, _x6) {
        return _provideCompletionItems.apply(this, arguments);
      }
      return provideCompletionItems;
    }()
  }, {
    key: "resolveCompletionItem",
    value: function () {
      var _resolveCompletionItem = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee7(item, token) {
        var myItem, resource, position, offset, worker, details;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee7$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                myItem = item;
                resource = myItem.uri;
                position = myItem.position;
                offset = myItem.offset;
                _context8.next = 6;
                return this._worker(resource);
              case 6:
                worker = _context8.sent;
                _context8.next = 9;
                return worker.getCompletionEntryDetails(resource.toString(), offset, myItem.label);
              case 9:
                details = _context8.sent;
                if (details) {
                  _context8.next = 12;
                  break;
                }
                return _context8.abrupt("return", myItem);
              case 12:
                return _context8.abrupt("return", {
                  uri: resource,
                  position: position,
                  label: details.name,
                  kind: SuggestAdapter.convertKind(details.kind),
                  detail: displayPartsToString(details.displayParts),
                  documentation: {
                    value: SuggestAdapter.createDocumentationString(details)
                  }
                });
              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee7, this);
      }));
      function resolveCompletionItem(_x7, _x8) {
        return _resolveCompletionItem.apply(this, arguments);
      }
      return resolveCompletionItem;
    }()
  }], [{
    key: "convertKind",
    value: function convertKind(kind) {
      switch (kind) {
        case Kind.primitiveType:
        case Kind.keyword:
          return monaco_editor_core_exports.languages.CompletionItemKind.Keyword;
        case Kind.variable:
        case Kind.localVariable:
          return monaco_editor_core_exports.languages.CompletionItemKind.Variable;
        case Kind.memberVariable:
        case Kind.memberGetAccessor:
        case Kind.memberSetAccessor:
          return monaco_editor_core_exports.languages.CompletionItemKind.Field;
        case Kind.function:
        case Kind.memberFunction:
        case Kind.constructSignature:
        case Kind.callSignature:
        case Kind.indexSignature:
          return monaco_editor_core_exports.languages.CompletionItemKind.Function;
        case Kind.enum:
          return monaco_editor_core_exports.languages.CompletionItemKind.Enum;
        case Kind.module:
          return monaco_editor_core_exports.languages.CompletionItemKind.Module;
        case Kind.class:
          return monaco_editor_core_exports.languages.CompletionItemKind.Class;
        case Kind.interface:
          return monaco_editor_core_exports.languages.CompletionItemKind.Interface;
        case Kind.warning:
          return monaco_editor_core_exports.languages.CompletionItemKind.File;
      }
      return monaco_editor_core_exports.languages.CompletionItemKind.Property;
    }
  }, {
    key: "createDocumentationString",
    value: function createDocumentationString(details) {
      var documentationString = displayPartsToString(details.documentation);
      if (details.tags) {
        var _iterator6 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(details.tags),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var tag = _step6.value;
            documentationString += "\n\n".concat(tagToString(tag));
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
      return documentationString;
    }
  }]);
  return SuggestAdapter;
}(Adapter);
function tagToString(tag) {
  var tagLabel = "*@".concat(tag.name, "*");
  if (tag.name === "param" && tag.text) {
    var _tag$text = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(tag.text),
      paramName = _tag$text[0],
      rest = _tag$text.slice(1);
    tagLabel += "`".concat(paramName.text, "`");
    if (rest.length > 0) tagLabel += " \u2014 ".concat(rest.map(function (r) {
      return r.text;
    }).join(" "));
  } else if (Array.isArray(tag.text)) {
    tagLabel += " \u2014 ".concat(tag.text.map(function (r) {
      return r.text;
    }).join(" "));
  } else if (tag.text) {
    tagLabel += " \u2014 ".concat(tag.text);
  }
  return tagLabel;
}
var SignatureHelpAdapter = /*#__PURE__*/function (_Adapter3) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(SignatureHelpAdapter, _Adapter3);
  var _super3 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(SignatureHelpAdapter);
  function SignatureHelpAdapter() {
    var _this7;
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, SignatureHelpAdapter);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this7 = _super3.call.apply(_super3, [this].concat(args));
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(_this7), "signatureHelpTriggerCharacters", ["(", ","]);
    return _this7;
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(SignatureHelpAdapter, [{
    key: "provideSignatureHelp",
    value: function () {
      var _provideSignatureHelp = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee8(model, position, token, context) {
        var resource, offset, worker, info, ret;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee8$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                resource = model.uri;
                offset = model.getOffsetAt(position);
                _context9.next = 4;
                return this._worker(resource);
              case 4:
                worker = _context9.sent;
                if (!model.isDisposed()) {
                  _context9.next = 7;
                  break;
                }
                return _context9.abrupt("return");
              case 7:
                _context9.next = 9;
                return worker.getSignatureHelpItems(resource.toString(), offset, {
                  triggerReason: SignatureHelpAdapter._toSignatureHelpTriggerReason(context)
                });
              case 9:
                info = _context9.sent;
                if (!(!info || model.isDisposed())) {
                  _context9.next = 12;
                  break;
                }
                return _context9.abrupt("return");
              case 12:
                ret = {
                  activeSignature: info.selectedItemIndex,
                  activeParameter: info.argumentIndex,
                  signatures: []
                };
                info.items.forEach(function (item) {
                  var signature = {
                    label: "",
                    parameters: []
                  };
                  signature.documentation = {
                    value: displayPartsToString(item.documentation)
                  };
                  signature.label += displayPartsToString(item.prefixDisplayParts);
                  item.parameters.forEach(function (p, i, a) {
                    var label = displayPartsToString(p.displayParts);
                    var parameter = {
                      label: label,
                      documentation: {
                        value: displayPartsToString(p.documentation)
                      }
                    };
                    signature.label += label;
                    signature.parameters.push(parameter);
                    if (i < a.length - 1) {
                      signature.label += displayPartsToString(item.separatorDisplayParts);
                    }
                  });
                  signature.label += displayPartsToString(item.suffixDisplayParts);
                  ret.signatures.push(signature);
                });
                return _context9.abrupt("return", {
                  value: ret,
                  dispose: function dispose() {}
                });
              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee8, this);
      }));
      function provideSignatureHelp(_x9, _x10, _x11, _x12) {
        return _provideSignatureHelp.apply(this, arguments);
      }
      return provideSignatureHelp;
    }()
  }], [{
    key: "_toSignatureHelpTriggerReason",
    value: function _toSignatureHelpTriggerReason(context) {
      switch (context.triggerKind) {
        case monaco_editor_core_exports.languages.SignatureHelpTriggerKind.TriggerCharacter:
          if (context.triggerCharacter) {
            if (context.isRetrigger) {
              return {
                kind: "retrigger",
                triggerCharacter: context.triggerCharacter
              };
            } else {
              return {
                kind: "characterTyped",
                triggerCharacter: context.triggerCharacter
              };
            }
          } else {
            return {
              kind: "invoked"
            };
          }
        case monaco_editor_core_exports.languages.SignatureHelpTriggerKind.ContentChange:
          return context.isRetrigger ? {
            kind: "retrigger"
          } : {
            kind: "invoked"
          };
        case monaco_editor_core_exports.languages.SignatureHelpTriggerKind.Invoke:
        default:
          return {
            kind: "invoked"
          };
      }
    }
  }]);
  return SignatureHelpAdapter;
}(Adapter);
var QuickInfoAdapter = /*#__PURE__*/function (_Adapter4) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(QuickInfoAdapter, _Adapter4);
  var _super4 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(QuickInfoAdapter);
  function QuickInfoAdapter() {
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, QuickInfoAdapter);
    return _super4.apply(this, arguments);
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(QuickInfoAdapter, [{
    key: "provideHover",
    value: function () {
      var _provideHover = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee9(model, position, token) {
        var resource, offset, worker, info, documentation, tags, contents;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee9$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                resource = model.uri;
                offset = model.getOffsetAt(position);
                _context10.next = 4;
                return this._worker(resource);
              case 4:
                worker = _context10.sent;
                if (!model.isDisposed()) {
                  _context10.next = 7;
                  break;
                }
                return _context10.abrupt("return");
              case 7:
                _context10.next = 9;
                return worker.getQuickInfoAtPosition(resource.toString(), offset);
              case 9:
                info = _context10.sent;
                if (!(!info || model.isDisposed())) {
                  _context10.next = 12;
                  break;
                }
                return _context10.abrupt("return");
              case 12:
                documentation = displayPartsToString(info.documentation);
                tags = info.tags ? info.tags.map(function (tag) {
                  return tagToString(tag);
                }).join("  \n\n") : "";
                contents = displayPartsToString(info.displayParts);
                return _context10.abrupt("return", {
                  range: this._textSpanToRange(model, info.textSpan),
                  contents: [{
                    value: "```typescript\n" + contents + "\n```\n"
                  }, {
                    value: documentation + (tags ? "\n\n" + tags : "")
                  }]
                });
              case 16:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee9, this);
      }));
      function provideHover(_x13, _x14, _x15) {
        return _provideHover.apply(this, arguments);
      }
      return provideHover;
    }()
  }]);
  return QuickInfoAdapter;
}(Adapter);
var OccurrencesAdapter = /*#__PURE__*/function (_Adapter5) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(OccurrencesAdapter, _Adapter5);
  var _super5 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(OccurrencesAdapter);
  function OccurrencesAdapter() {
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, OccurrencesAdapter);
    return _super5.apply(this, arguments);
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(OccurrencesAdapter, [{
    key: "provideDocumentHighlights",
    value: function () {
      var _provideDocumentHighlights = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee10(model, position, token) {
        var _this8 = this;
        var resource, offset, worker, entries;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee10$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                resource = model.uri;
                offset = model.getOffsetAt(position);
                _context11.next = 4;
                return this._worker(resource);
              case 4:
                worker = _context11.sent;
                if (!model.isDisposed()) {
                  _context11.next = 7;
                  break;
                }
                return _context11.abrupt("return");
              case 7:
                _context11.next = 9;
                return worker.getOccurrencesAtPosition(resource.toString(), offset);
              case 9:
                entries = _context11.sent;
                if (!(!entries || model.isDisposed())) {
                  _context11.next = 12;
                  break;
                }
                return _context11.abrupt("return");
              case 12:
                return _context11.abrupt("return", entries.map(function (entry) {
                  return {
                    range: _this8._textSpanToRange(model, entry.textSpan),
                    kind: entry.isWriteAccess ? monaco_editor_core_exports.languages.DocumentHighlightKind.Write : monaco_editor_core_exports.languages.DocumentHighlightKind.Text
                  };
                }));
              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee10, this);
      }));
      function provideDocumentHighlights(_x16, _x17, _x18) {
        return _provideDocumentHighlights.apply(this, arguments);
      }
      return provideDocumentHighlights;
    }()
  }]);
  return OccurrencesAdapter;
}(Adapter);
var DefinitionAdapter = /*#__PURE__*/function (_Adapter6) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(DefinitionAdapter, _Adapter6);
  var _super6 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(DefinitionAdapter);
  function DefinitionAdapter(_libFiles, worker) {
    var _this9;
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, DefinitionAdapter);
    _this9 = _super6.call(this, worker);
    _this9._libFiles = _libFiles;
    return _this9;
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(DefinitionAdapter, [{
    key: "provideDefinition",
    value: function () {
      var _provideDefinition = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee11(model, position, token) {
        var resource, offset, worker, entries, result, _iterator7, _step7, entry, refModel;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee11$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                resource = model.uri;
                offset = model.getOffsetAt(position);
                _context12.next = 4;
                return this._worker(resource);
              case 4:
                worker = _context12.sent;
                if (!model.isDisposed()) {
                  _context12.next = 7;
                  break;
                }
                return _context12.abrupt("return");
              case 7:
                _context12.next = 9;
                return worker.getDefinitionAtPosition(resource.toString(), offset);
              case 9:
                entries = _context12.sent;
                if (!(!entries || model.isDisposed())) {
                  _context12.next = 12;
                  break;
                }
                return _context12.abrupt("return");
              case 12:
                _context12.next = 14;
                return this._libFiles.fetchLibFilesIfNecessary(entries.map(function (entry) {
                  return monaco_editor_core_exports.Uri.parse(entry.fileName);
                }));
              case 14:
                if (!model.isDisposed()) {
                  _context12.next = 16;
                  break;
                }
                return _context12.abrupt("return");
              case 16:
                result = [];
                _iterator7 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(entries);
                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    entry = _step7.value;
                    refModel = this._libFiles.getOrCreateModel(entry.fileName);
                    if (refModel) {
                      result.push({
                        uri: refModel.uri,
                        range: this._textSpanToRange(refModel, entry.textSpan)
                      });
                    }
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
                return _context12.abrupt("return", result);
              case 20:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee11, this);
      }));
      function provideDefinition(_x19, _x20, _x21) {
        return _provideDefinition.apply(this, arguments);
      }
      return provideDefinition;
    }()
  }]);
  return DefinitionAdapter;
}(Adapter);
var ReferenceAdapter = /*#__PURE__*/function (_Adapter7) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(ReferenceAdapter, _Adapter7);
  var _super7 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(ReferenceAdapter);
  function ReferenceAdapter(_libFiles, worker) {
    var _this10;
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, ReferenceAdapter);
    _this10 = _super7.call(this, worker);
    _this10._libFiles = _libFiles;
    return _this10;
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(ReferenceAdapter, [{
    key: "provideReferences",
    value: function () {
      var _provideReferences = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee12(model, position, context, token) {
        var resource, offset, worker, entries, result, _iterator8, _step8, entry, refModel;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee12$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                resource = model.uri;
                offset = model.getOffsetAt(position);
                _context13.next = 4;
                return this._worker(resource);
              case 4:
                worker = _context13.sent;
                if (!model.isDisposed()) {
                  _context13.next = 7;
                  break;
                }
                return _context13.abrupt("return");
              case 7:
                _context13.next = 9;
                return worker.getReferencesAtPosition(resource.toString(), offset);
              case 9:
                entries = _context13.sent;
                if (!(!entries || model.isDisposed())) {
                  _context13.next = 12;
                  break;
                }
                return _context13.abrupt("return");
              case 12:
                _context13.next = 14;
                return this._libFiles.fetchLibFilesIfNecessary(entries.map(function (entry) {
                  return monaco_editor_core_exports.Uri.parse(entry.fileName);
                }));
              case 14:
                if (!model.isDisposed()) {
                  _context13.next = 16;
                  break;
                }
                return _context13.abrupt("return");
              case 16:
                result = [];
                _iterator8 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(entries);
                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    entry = _step8.value;
                    refModel = this._libFiles.getOrCreateModel(entry.fileName);
                    if (refModel) {
                      result.push({
                        uri: refModel.uri,
                        range: this._textSpanToRange(refModel, entry.textSpan)
                      });
                    }
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
                return _context13.abrupt("return", result);
              case 20:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee12, this);
      }));
      function provideReferences(_x22, _x23, _x24, _x25) {
        return _provideReferences.apply(this, arguments);
      }
      return provideReferences;
    }()
  }]);
  return ReferenceAdapter;
}(Adapter);
var OutlineAdapter = /*#__PURE__*/function (_Adapter8) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(OutlineAdapter, _Adapter8);
  var _super8 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(OutlineAdapter);
  function OutlineAdapter() {
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, OutlineAdapter);
    return _super8.apply(this, arguments);
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(OutlineAdapter, [{
    key: "provideDocumentSymbols",
    value: function () {
      var _provideDocumentSymbols = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee13(model, token) {
        var _this11 = this;
        var resource, worker, items, convert, result;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee13$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                resource = model.uri;
                _context14.next = 3;
                return this._worker(resource);
              case 3:
                worker = _context14.sent;
                if (!model.isDisposed()) {
                  _context14.next = 6;
                  break;
                }
                return _context14.abrupt("return");
              case 6:
                _context14.next = 8;
                return worker.getNavigationBarItems(resource.toString());
              case 8:
                items = _context14.sent;
                if (!(!items || model.isDisposed())) {
                  _context14.next = 11;
                  break;
                }
                return _context14.abrupt("return");
              case 11:
                convert = function convert(bucket, item, containerLabel) {
                  var result2 = {
                    name: item.text,
                    detail: "",
                    kind: outlineTypeTable[item.kind] || monaco_editor_core_exports.languages.SymbolKind.Variable,
                    range: _this11._textSpanToRange(model, item.spans[0]),
                    selectionRange: _this11._textSpanToRange(model, item.spans[0]),
                    tags: []
                  };
                  if (containerLabel) result2.containerName = containerLabel;
                  if (item.childItems && item.childItems.length > 0) {
                    var _iterator9 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(item.childItems),
                      _step9;
                    try {
                      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                        var child = _step9.value;
                        convert(bucket, child, result2.name);
                      }
                    } catch (err) {
                      _iterator9.e(err);
                    } finally {
                      _iterator9.f();
                    }
                  }
                  bucket.push(result2);
                };
                result = [];
                items.forEach(function (item) {
                  return convert(result, item);
                });
                return _context14.abrupt("return", result);
              case 15:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee13, this);
      }));
      function provideDocumentSymbols(_x26, _x27) {
        return _provideDocumentSymbols.apply(this, arguments);
      }
      return provideDocumentSymbols;
    }()
  }]);
  return OutlineAdapter;
}(Adapter);
var Kind = /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(function Kind() {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, Kind);
});
__publicField(Kind, "unknown", "");
__publicField(Kind, "keyword", "keyword");
__publicField(Kind, "script", "script");
__publicField(Kind, "module", "module");
__publicField(Kind, "class", "class");
__publicField(Kind, "interface", "interface");
__publicField(Kind, "type", "type");
__publicField(Kind, "enum", "enum");
__publicField(Kind, "variable", "var");
__publicField(Kind, "localVariable", "local var");
__publicField(Kind, "function", "function");
__publicField(Kind, "localFunction", "local function");
__publicField(Kind, "memberFunction", "method");
__publicField(Kind, "memberGetAccessor", "getter");
__publicField(Kind, "memberSetAccessor", "setter");
__publicField(Kind, "memberVariable", "property");
__publicField(Kind, "constructorImplementation", "constructor");
__publicField(Kind, "callSignature", "call");
__publicField(Kind, "indexSignature", "index");
__publicField(Kind, "constructSignature", "construct");
__publicField(Kind, "parameter", "parameter");
__publicField(Kind, "typeParameter", "type parameter");
__publicField(Kind, "primitiveType", "primitive type");
__publicField(Kind, "label", "label");
__publicField(Kind, "alias", "alias");
__publicField(Kind, "const", "const");
__publicField(Kind, "let", "let");
__publicField(Kind, "warning", "warning");
var outlineTypeTable = /* @__PURE__ */Object.create(null);
outlineTypeTable[Kind.module] = monaco_editor_core_exports.languages.SymbolKind.Module;
outlineTypeTable[Kind.class] = monaco_editor_core_exports.languages.SymbolKind.Class;
outlineTypeTable[Kind.enum] = monaco_editor_core_exports.languages.SymbolKind.Enum;
outlineTypeTable[Kind.interface] = monaco_editor_core_exports.languages.SymbolKind.Interface;
outlineTypeTable[Kind.memberFunction] = monaco_editor_core_exports.languages.SymbolKind.Method;
outlineTypeTable[Kind.memberVariable] = monaco_editor_core_exports.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberGetAccessor] = monaco_editor_core_exports.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberSetAccessor] = monaco_editor_core_exports.languages.SymbolKind.Property;
outlineTypeTable[Kind.variable] = monaco_editor_core_exports.languages.SymbolKind.Variable;
outlineTypeTable[Kind.const] = monaco_editor_core_exports.languages.SymbolKind.Variable;
outlineTypeTable[Kind.localVariable] = monaco_editor_core_exports.languages.SymbolKind.Variable;
outlineTypeTable[Kind.variable] = monaco_editor_core_exports.languages.SymbolKind.Variable;
outlineTypeTable[Kind.function] = monaco_editor_core_exports.languages.SymbolKind.Function;
outlineTypeTable[Kind.localFunction] = monaco_editor_core_exports.languages.SymbolKind.Function;
var FormatHelper = /*#__PURE__*/function (_Adapter9) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(FormatHelper, _Adapter9);
  var _super9 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(FormatHelper);
  function FormatHelper() {
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, FormatHelper);
    return _super9.apply(this, arguments);
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(FormatHelper, [{
    key: "_convertTextChanges",
    value: function _convertTextChanges(model, change) {
      return {
        text: change.newText,
        range: this._textSpanToRange(model, change.span)
      };
    }
  }], [{
    key: "_convertOptions",
    value: function _convertOptions(options) {
      return {
        ConvertTabsToSpaces: options.insertSpaces,
        TabSize: options.tabSize,
        IndentSize: options.tabSize,
        IndentStyle: 2 /* Smart */,
        NewLineCharacter: "\n",
        InsertSpaceAfterCommaDelimiter: true,
        InsertSpaceAfterSemicolonInForStatements: true,
        InsertSpaceBeforeAndAfterBinaryOperators: true,
        InsertSpaceAfterKeywordsInControlFlowStatements: true,
        InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
        InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
        PlaceOpenBraceOnNewLineForControlBlocks: false,
        PlaceOpenBraceOnNewLineForFunctions: false
      };
    }
  }]);
  return FormatHelper;
}(Adapter);
var FormatAdapter = /*#__PURE__*/function (_FormatHelper) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(FormatAdapter, _FormatHelper);
  var _super10 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(FormatAdapter);
  function FormatAdapter() {
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, FormatAdapter);
    return _super10.apply(this, arguments);
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(FormatAdapter, [{
    key: "provideDocumentRangeFormattingEdits",
    value: function () {
      var _provideDocumentRangeFormattingEdits = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee14(model, range, options, token) {
        var _this12 = this;
        var resource, startOffset, endOffset, worker, edits;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee14$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                resource = model.uri;
                startOffset = model.getOffsetAt({
                  lineNumber: range.startLineNumber,
                  column: range.startColumn
                });
                endOffset = model.getOffsetAt({
                  lineNumber: range.endLineNumber,
                  column: range.endColumn
                });
                _context15.next = 5;
                return this._worker(resource);
              case 5:
                worker = _context15.sent;
                if (!model.isDisposed()) {
                  _context15.next = 8;
                  break;
                }
                return _context15.abrupt("return");
              case 8:
                _context15.next = 10;
                return worker.getFormattingEditsForRange(resource.toString(), startOffset, endOffset, FormatHelper._convertOptions(options));
              case 10:
                edits = _context15.sent;
                if (!(!edits || model.isDisposed())) {
                  _context15.next = 13;
                  break;
                }
                return _context15.abrupt("return");
              case 13:
                return _context15.abrupt("return", edits.map(function (edit) {
                  return _this12._convertTextChanges(model, edit);
                }));
              case 14:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee14, this);
      }));
      function provideDocumentRangeFormattingEdits(_x28, _x29, _x30, _x31) {
        return _provideDocumentRangeFormattingEdits.apply(this, arguments);
      }
      return provideDocumentRangeFormattingEdits;
    }()
  }]);
  return FormatAdapter;
}(FormatHelper);
var FormatOnTypeAdapter = /*#__PURE__*/function (_FormatHelper2) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(FormatOnTypeAdapter, _FormatHelper2);
  var _super11 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(FormatOnTypeAdapter);
  function FormatOnTypeAdapter() {
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, FormatOnTypeAdapter);
    return _super11.apply(this, arguments);
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(FormatOnTypeAdapter, [{
    key: "autoFormatTriggerCharacters",
    get: function get() {
      return [";", "}", "\n"];
    }
  }, {
    key: "provideOnTypeFormattingEdits",
    value: function () {
      var _provideOnTypeFormattingEdits = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee15(model, position, ch, options, token) {
        var _this13 = this;
        var resource, offset, worker, edits;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee15$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                resource = model.uri;
                offset = model.getOffsetAt(position);
                _context16.next = 4;
                return this._worker(resource);
              case 4:
                worker = _context16.sent;
                if (!model.isDisposed()) {
                  _context16.next = 7;
                  break;
                }
                return _context16.abrupt("return");
              case 7:
                _context16.next = 9;
                return worker.getFormattingEditsAfterKeystroke(resource.toString(), offset, ch, FormatHelper._convertOptions(options));
              case 9:
                edits = _context16.sent;
                if (!(!edits || model.isDisposed())) {
                  _context16.next = 12;
                  break;
                }
                return _context16.abrupt("return");
              case 12:
                return _context16.abrupt("return", edits.map(function (edit) {
                  return _this13._convertTextChanges(model, edit);
                }));
              case 13:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee15, this);
      }));
      function provideOnTypeFormattingEdits(_x32, _x33, _x34, _x35, _x36) {
        return _provideOnTypeFormattingEdits.apply(this, arguments);
      }
      return provideOnTypeFormattingEdits;
    }()
  }]);
  return FormatOnTypeAdapter;
}(FormatHelper);
var CodeActionAdaptor = /*#__PURE__*/function (_FormatHelper3) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(CodeActionAdaptor, _FormatHelper3);
  var _super12 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(CodeActionAdaptor);
  function CodeActionAdaptor() {
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, CodeActionAdaptor);
    return _super12.apply(this, arguments);
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(CodeActionAdaptor, [{
    key: "provideCodeActions",
    value: function () {
      var _provideCodeActions = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee16(model, range, context, token) {
        var _this14 = this;
        var resource, start, end, formatOptions, errorCodes, worker, codeFixes, actions;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee16$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                resource = model.uri;
                start = model.getOffsetAt({
                  lineNumber: range.startLineNumber,
                  column: range.startColumn
                });
                end = model.getOffsetAt({
                  lineNumber: range.endLineNumber,
                  column: range.endColumn
                });
                formatOptions = FormatHelper._convertOptions(model.getOptions());
                errorCodes = context.markers.filter(function (m) {
                  return m.code;
                }).map(function (m) {
                  return m.code;
                }).map(Number);
                _context17.next = 7;
                return this._worker(resource);
              case 7:
                worker = _context17.sent;
                if (!model.isDisposed()) {
                  _context17.next = 10;
                  break;
                }
                return _context17.abrupt("return");
              case 10:
                _context17.next = 12;
                return worker.getCodeFixesAtPosition(resource.toString(), start, end, errorCodes, formatOptions);
              case 12:
                codeFixes = _context17.sent;
                if (!(!codeFixes || model.isDisposed())) {
                  _context17.next = 15;
                  break;
                }
                return _context17.abrupt("return", {
                  actions: [],
                  dispose: function dispose() {}
                });
              case 15:
                actions = codeFixes.filter(function (fix) {
                  return fix.changes.filter(function (change) {
                    return change.isNewFile;
                  }).length === 0;
                }).map(function (fix) {
                  return _this14._tsCodeFixActionToMonacoCodeAction(model, context, fix);
                });
                return _context17.abrupt("return", {
                  actions: actions,
                  dispose: function dispose() {}
                });
              case 17:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee16, this);
      }));
      function provideCodeActions(_x37, _x38, _x39, _x40) {
        return _provideCodeActions.apply(this, arguments);
      }
      return provideCodeActions;
    }()
  }, {
    key: "_tsCodeFixActionToMonacoCodeAction",
    value: function _tsCodeFixActionToMonacoCodeAction(model, context, codeFix) {
      var edits = [];
      var _iterator10 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(codeFix.changes),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var change = _step10.value;
          var _iterator11 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(change.textChanges),
            _step11;
          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var textChange = _step11.value;
              edits.push({
                resource: model.uri,
                versionId: void 0,
                textEdit: {
                  range: this._textSpanToRange(model, textChange.span),
                  text: textChange.newText
                }
              });
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      var action = {
        title: codeFix.description,
        edit: {
          edits: edits
        },
        diagnostics: context.markers,
        kind: "quickfix"
      };
      return action;
    }
  }]);
  return CodeActionAdaptor;
}(FormatHelper);
var RenameAdapter = /*#__PURE__*/function (_Adapter10) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(RenameAdapter, _Adapter10);
  var _super13 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(RenameAdapter);
  function RenameAdapter(_libFiles, worker) {
    var _this15;
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, RenameAdapter);
    _this15 = _super13.call(this, worker);
    _this15._libFiles = _libFiles;
    return _this15;
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(RenameAdapter, [{
    key: "provideRenameEdits",
    value: function () {
      var _provideRenameEdits = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee17(model, position, newName, token) {
        var resource, fileName, offset, worker, renameInfo, renameLocations, edits, _iterator12, _step12, renameLocation, model2;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee17$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                resource = model.uri;
                fileName = resource.toString();
                offset = model.getOffsetAt(position);
                _context18.next = 5;
                return this._worker(resource);
              case 5:
                worker = _context18.sent;
                if (!model.isDisposed()) {
                  _context18.next = 8;
                  break;
                }
                return _context18.abrupt("return");
              case 8:
                _context18.next = 10;
                return worker.getRenameInfo(fileName, offset, {
                  allowRenameOfImportPath: false
                });
              case 10:
                renameInfo = _context18.sent;
                if (!(renameInfo.canRename === false)) {
                  _context18.next = 13;
                  break;
                }
                return _context18.abrupt("return", {
                  edits: [],
                  rejectReason: renameInfo.localizedErrorMessage
                });
              case 13:
                if (!(renameInfo.fileToRename !== void 0)) {
                  _context18.next = 15;
                  break;
                }
                throw new Error("Renaming files is not supported.");
              case 15:
                _context18.next = 17;
                return worker.findRenameLocations(fileName, offset, false, false, false);
              case 17:
                renameLocations = _context18.sent;
                if (!(!renameLocations || model.isDisposed())) {
                  _context18.next = 20;
                  break;
                }
                return _context18.abrupt("return");
              case 20:
                edits = [];
                _iterator12 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(renameLocations);
                _context18.prev = 22;
                _iterator12.s();
              case 24:
                if ((_step12 = _iterator12.n()).done) {
                  _context18.next = 34;
                  break;
                }
                renameLocation = _step12.value;
                model2 = this._libFiles.getOrCreateModel(renameLocation.fileName);
                if (!model2) {
                  _context18.next = 31;
                  break;
                }
                edits.push({
                  resource: model2.uri,
                  versionId: void 0,
                  textEdit: {
                    range: this._textSpanToRange(model2, renameLocation.textSpan),
                    text: newName
                  }
                });
                _context18.next = 32;
                break;
              case 31:
                throw new Error("Unknown file ".concat(renameLocation.fileName, "."));
              case 32:
                _context18.next = 24;
                break;
              case 34:
                _context18.next = 39;
                break;
              case 36:
                _context18.prev = 36;
                _context18.t0 = _context18["catch"](22);
                _iterator12.e(_context18.t0);
              case 39:
                _context18.prev = 39;
                _iterator12.f();
                return _context18.finish(39);
              case 42:
                return _context18.abrupt("return", {
                  edits: edits
                });
              case 43:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee17, this, [[22, 36, 39, 42]]);
      }));
      function provideRenameEdits(_x41, _x42, _x43, _x44) {
        return _provideRenameEdits.apply(this, arguments);
      }
      return provideRenameEdits;
    }()
  }]);
  return RenameAdapter;
}(Adapter);
var InlayHintsAdapter = /*#__PURE__*/function (_Adapter11) {
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(InlayHintsAdapter, _Adapter11);
  var _super14 = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(InlayHintsAdapter);
  function InlayHintsAdapter() {
    (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(this, InlayHintsAdapter);
    return _super14.apply(this, arguments);
  }
  (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(InlayHintsAdapter, [{
    key: "provideInlayHints",
    value: function () {
      var _provideInlayHints = (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/(0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().mark(function _callee18(model, range, token) {
        var _this16 = this;
        var resource, fileName, start, end, worker, tsHints, hints;
        return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)().wrap(function _callee18$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                resource = model.uri;
                fileName = resource.toString();
                start = model.getOffsetAt({
                  lineNumber: range.startLineNumber,
                  column: range.startColumn
                });
                end = model.getOffsetAt({
                  lineNumber: range.endLineNumber,
                  column: range.endColumn
                });
                _context19.next = 6;
                return this._worker(resource);
              case 6:
                worker = _context19.sent;
                if (!model.isDisposed()) {
                  _context19.next = 9;
                  break;
                }
                return _context19.abrupt("return", null);
              case 9:
                _context19.next = 11;
                return worker.provideInlayHints(fileName, start, end);
              case 11:
                tsHints = _context19.sent;
                hints = tsHints.map(function (hint) {
                  return (0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)((0,D_Desktop_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)({}, hint), {}, {
                    label: hint.text,
                    position: model.getPositionAt(hint.position),
                    kind: _this16._convertHintKind(hint.kind)
                  });
                });
                return _context19.abrupt("return", {
                  hints: hints,
                  dispose: function dispose() {}
                });
              case 14:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee18, this);
      }));
      function provideInlayHints(_x45, _x46, _x47) {
        return _provideInlayHints.apply(this, arguments);
      }
      return provideInlayHints;
    }()
  }, {
    key: "_convertHintKind",
    value: function _convertHintKind(kind) {
      switch (kind) {
        case "Parameter":
          return monaco_editor_core_exports.languages.InlayHintKind.Parameter;
        case "Type":
          return monaco_editor_core_exports.languages.InlayHintKind.Type;
        default:
          return monaco_editor_core_exports.languages.InlayHintKind.Type;
      }
    }
  }]);
  return InlayHintsAdapter;
}(Adapter);

// src/language/typescript/tsMode.ts
var javaScriptWorker;
var typeScriptWorker;
function setupTypeScript(defaults) {
  typeScriptWorker = setupMode(defaults, "typescript");
}
function setupJavaScript(defaults) {
  javaScriptWorker = setupMode(defaults, "javascript");
}
function getJavaScriptWorker() {
  return new Promise(function (resolve, reject) {
    if (!javaScriptWorker) {
      return reject("JavaScript not registered!");
    }
    resolve(javaScriptWorker);
  });
}
function getTypeScriptWorker() {
  return new Promise(function (resolve, reject) {
    if (!typeScriptWorker) {
      return reject("TypeScript not registered!");
    }
    resolve(typeScriptWorker);
  });
}
function setupMode(defaults, modeId) {
  var client = new WorkerManager(modeId, defaults);
  var worker = function worker() {
    return client.getLanguageServiceWorker.apply(client, arguments);
  };
  var libFiles = new LibFiles(worker);
  monaco_editor_core_exports.languages.registerCompletionItemProvider(modeId, new SuggestAdapter(worker));
  monaco_editor_core_exports.languages.registerSignatureHelpProvider(modeId, new SignatureHelpAdapter(worker));
  monaco_editor_core_exports.languages.registerHoverProvider(modeId, new QuickInfoAdapter(worker));
  monaco_editor_core_exports.languages.registerDocumentHighlightProvider(modeId, new OccurrencesAdapter(worker));
  monaco_editor_core_exports.languages.registerDefinitionProvider(modeId, new DefinitionAdapter(libFiles, worker));
  monaco_editor_core_exports.languages.registerReferenceProvider(modeId, new ReferenceAdapter(libFiles, worker));
  monaco_editor_core_exports.languages.registerDocumentSymbolProvider(modeId, new OutlineAdapter(worker));
  monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(modeId, new FormatAdapter(worker));
  monaco_editor_core_exports.languages.registerOnTypeFormattingEditProvider(modeId, new FormatOnTypeAdapter(worker));
  monaco_editor_core_exports.languages.registerCodeActionProvider(modeId, new CodeActionAdaptor(worker));
  monaco_editor_core_exports.languages.registerRenameProvider(modeId, new RenameAdapter(libFiles, worker));
  monaco_editor_core_exports.languages.registerInlayHintsProvider(modeId, new InlayHintsAdapter(worker));
  new DiagnosticsAdapter(libFiles, defaults, modeId, worker);
  return worker;
}


/***/ })

}]);