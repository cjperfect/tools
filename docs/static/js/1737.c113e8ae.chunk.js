"use strict";
(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[1737],{

/***/ 41737:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conf": function() { return /* binding */ conf; },
/* harmony export */   "language": function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/azcli/azcli.ts
var conf = {
  comments: {
    lineComment: "#"
  }
};
var language = {
  defaultToken: "keyword",
  ignoreCase: true,
  tokenPostfix: ".azcli",
  str: /[^#\s]/,
  tokenizer: {
    root: [{
      include: "@comment"
    }, [/\s-+@str*\s*/, {
      cases: {
        "@eos": {
          token: "key.identifier",
          next: "@popall"
        },
        "@default": {
          token: "key.identifier",
          next: "@type"
        }
      }
    }], [/^-+@str*\s*/, {
      cases: {
        "@eos": {
          token: "key.identifier",
          next: "@popall"
        },
        "@default": {
          token: "key.identifier",
          next: "@type"
        }
      }
    }]],
    type: [{
      include: "@comment"
    }, [/-+@str*\s*/, {
      cases: {
        "@eos": {
          token: "key.identifier",
          next: "@popall"
        },
        "@default": "key.identifier"
      }
    }], [/@str+\s*/, {
      cases: {
        "@eos": {
          token: "string",
          next: "@popall"
        },
        "@default": "string"
      }
    }]],
    comment: [[/#.*$/, {
      cases: {
        "@eos": {
          token: "comment",
          next: "@popall"
        }
      }
    }]]
  }
};


/***/ })

}]);