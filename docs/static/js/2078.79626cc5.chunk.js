"use strict";
(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[2078],{

/***/ 82078:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conf": function() { return /* binding */ conf; },
/* harmony export */   "language": function() { return /* binding */ language; }
/* harmony export */ });
/* harmony import */ var C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37762);
/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3337);

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
var __copyProps = function __copyProps(to, from, except, desc) {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(__getOwnPropNames(from)),
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

// src/fillers/monaco-editor-core.ts
var monaco_editor_core_exports = {};
__reExport(monaco_editor_core_exports, _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_1__);


// src/basic-languages/liquid/liquid.ts
var EMPTY_ELEMENTS = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"];
var conf = {
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
  brackets: [["<!--", "-->"], ["<", ">"], ["{{", "}}"], ["{%", "%}"], ["{", "}"], ["(", ")"]],
  autoClosingPairs: [{
    open: "{",
    close: "}"
  }, {
    open: "%",
    close: "%"
  }, {
    open: "[",
    close: "]"
  }, {
    open: "(",
    close: ")"
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }],
  surroundingPairs: [{
    open: "<",
    close: ">"
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }],
  onEnterRules: [{
    beforeText: new RegExp("<(?!(?:".concat(EMPTY_ELEMENTS.join("|"), "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$"), "i"),
    afterText: /^<\/(\w[\w\d]*)\s*>$/i,
    action: {
      indentAction: monaco_editor_core_exports.languages.IndentAction.IndentOutdent
    }
  }, {
    beforeText: new RegExp("<(?!(?:".concat(EMPTY_ELEMENTS.join("|"), "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$"), "i"),
    action: {
      indentAction: monaco_editor_core_exports.languages.IndentAction.Indent
    }
  }]
};
var language = {
  defaultToken: "",
  tokenPostfix: "",
  builtinTags: ["if", "else", "elseif", "endif", "render", "assign", "capture", "endcapture", "case", "endcase", "comment", "endcomment", "cycle", "decrement", "for", "endfor", "include", "increment", "layout", "raw", "endraw", "render", "tablerow", "endtablerow", "unless", "endunless"],
  builtinFilters: ["abs", "append", "at_least", "at_most", "capitalize", "ceil", "compact", "date", "default", "divided_by", "downcase", "escape", "escape_once", "first", "floor", "join", "json", "last", "lstrip", "map", "minus", "modulo", "newline_to_br", "plus", "prepend", "remove", "remove_first", "replace", "replace_first", "reverse", "round", "rstrip", "size", "slice", "sort", "sort_natural", "split", "strip", "strip_html", "strip_newlines", "times", "truncate", "truncatewords", "uniq", "upcase", "url_decode", "url_encode", "where"],
  constants: ["true", "false"],
  operators: ["==", "!=", ">", "<", ">=", "<="],
  symbol: /[=><!]+/,
  identifier: /[a-zA-Z_][\w]*/,
  tokenizer: {
    root: [[/\{\%\s*comment\s*\%\}/, "comment.start.liquid", "@comment"], [/\{\{/, {
      token: "@rematch",
      switchTo: "@liquidState.root"
    }], [/\{\%/, {
      token: "@rematch",
      switchTo: "@liquidState.root"
    }], [/(<)([\w\-]+)(\/>)/, ["delimiter.html", "tag.html", "delimiter.html"]], [/(<)([:\w]+)/, ["delimiter.html", {
      token: "tag.html",
      next: "@otherTag"
    }]], [/(<\/)([\w\-]+)/, ["delimiter.html", {
      token: "tag.html",
      next: "@otherTag"
    }]], [/</, "delimiter.html"], [/\{/, "delimiter.html"], [/[^<{]+/]],
    comment: [[/\{\%\s*endcomment\s*\%\}/, "comment.end.liquid", "@pop"], [/./, "comment.content.liquid"]],
    otherTag: [[/\{\{/, {
      token: "@rematch",
      switchTo: "@liquidState.otherTag"
    }], [/\{\%/, {
      token: "@rematch",
      switchTo: "@liquidState.otherTag"
    }], [/\/?>/, "delimiter.html", "@pop"], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/[ \t\r\n]+/]],
    liquidState: [[/\{\{/, "delimiter.output.liquid"], [/\}\}/, {
      token: "delimiter.output.liquid",
      switchTo: "@$S2.$S3"
    }], [/\{\%/, "delimiter.tag.liquid"], [/raw\s*\%\}/, "delimiter.tag.liquid", "@liquidRaw"], [/\%\}/, {
      token: "delimiter.tag.liquid",
      switchTo: "@$S2.$S3"
    }], {
      include: "liquidRoot"
    }],
    liquidRaw: [[/^(?!\{\%\s*endraw\s*\%\}).+/], [/\{\%/, "delimiter.tag.liquid"], [/@identifier/], [/\%\}/, {
      token: "delimiter.tag.liquid",
      next: "@root"
    }]],
    liquidRoot: [[/\d+(\.\d+)?/, "number.liquid"], [/"[^"]*"/, "string.liquid"], [/'[^']*'/, "string.liquid"], [/\s+/], [/@symbol/, {
      cases: {
        "@operators": "operator.liquid",
        "@default": ""
      }
    }], [/\./], [/@identifier/, {
      cases: {
        "@constants": "keyword.liquid",
        "@builtinFilters": "predefined.liquid",
        "@builtinTags": "predefined.liquid",
        "@default": "variable.liquid"
      }
    }], [/[^}|%]/, "variable.liquid"]]
  }
};


/***/ })

}]);