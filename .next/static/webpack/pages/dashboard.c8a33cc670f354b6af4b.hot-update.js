webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./services/thoughtservice.js":
/*!************************************!*\
  !*** ./services/thoughtservice.js ***!
  \************************************/
/*! exports provided: uploadThought, getThoughts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadThought\", function() { return uploadThought; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getThoughts\", function() { return getThoughts; });\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _services_restservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/restservice */ \"./services/restservice.js\");\n\n\n\n\nfunction uploadThought(_x, _x2, _x3, _x4) {\n  return _uploadThought.apply(this, arguments);\n}\n\nfunction _uploadThought() {\n  _uploadThought = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(thought, user, mindset, auth) {\n    var newThought;\n    return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(auth); // New Login Data request\n\n            _context.next = 3;\n            return fetch(_services_restservice__WEBPACK_IMPORTED_MODULE_3__[\"baseConfig\"].thoughtURL, {\n              method: 'POST',\n              headers: {\n                \"Content-type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(auth.accessToken)\n              },\n              body: JSON.stringify({\n                \"thought\": thought,\n                \"user\": user,\n                \"mindset\": mindset\n              })\n            }).then(function (response) {\n              return response.json();\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 3:\n            newThought = _context.sent;\n\n            if (!newThought) {\n              _context.next = 6;\n              break;\n            }\n\n            return _context.abrupt(\"return\", newThought);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _uploadThought.apply(this, arguments);\n}\n\nfunction getThoughts(_x5, _x6) {\n  return _getThoughts.apply(this, arguments);\n}\n\nfunction _getThoughts() {\n  _getThoughts = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, auth) {\n    var getThought;\n    return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch(_services_restservice__WEBPACK_IMPORTED_MODULE_3__[\"baseConfig\"].thoughtURL + 'getbyemail/' + email, {\n              method: 'GET',\n              headers: {\n                \"Content-type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(auth.accessToken)\n              }\n            }).then(function (response) {\n              return response.json();\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 2:\n            getThought = _context2.sent;\n\n            if (!getThought) {\n              _context2.next = 5;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", getThought);\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getThoughts.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvdGhvdWdodHNlcnZpY2UuanM/MjU4NCJdLCJuYW1lcyI6WyJ1cGxvYWRUaG91Z2h0IiwidGhvdWdodCIsInVzZXIiLCJtaW5kc2V0IiwiYXV0aCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImJhc2VDb25maWciLCJ0aG91Z2h0VVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImFjY2Vzc1Rva2VuIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJuZXdUaG91Z2h0IiwiZ2V0VGhvdWdodHMiLCJlbWFpbCIsImdldFRob3VnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sU0FBZUEsYUFBdEI7QUFBQTtBQUFBOzs7NFNBQU8saUJBQTZCQyxPQUE3QixFQUFzQ0MsSUFBdEMsRUFBNENDLE9BQTVDLEVBQXFEQyxJQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSEMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBREcsQ0FFSDs7QUFGRztBQUFBLG1CQUdzQkcsS0FBSyxDQUFDQyxnRUFBVSxDQUFDQyxVQUFaLEVBQXdCO0FBQ2xEQyxvQkFBTSxFQUFFLE1BRDBDO0FBRWxEQyxxQkFBTyxFQUFFO0FBQ0wsZ0NBQWdCLGtCQURYO0FBRUwsa0RBQTJCUCxJQUFJLENBQUNRLFdBQWhDO0FBRkssZUFGeUM7QUFNbERDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCLDJCQUFXZCxPQURNO0FBRWpCLHdCQUFRQyxJQUZTO0FBR2pCLDJCQUFXQztBQUhNLGVBQWY7QUFONEMsYUFBeEIsQ0FBTCxDQVl4QmEsSUFad0IsQ0FZbkIsVUFBU0MsUUFBVCxFQUFtQjtBQUNyQixxQkFBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDSCxhQWR3QixXQWVsQixVQUFTQyxLQUFULEVBQWdCO0FBQ25CLHFCQUFPQSxLQUFQO0FBQ0gsYUFqQndCLENBSHRCOztBQUFBO0FBR0dDLHNCQUhIOztBQUFBLGlCQXFCQUEsVUFyQkE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBc0JRQSxVQXRCUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBMkJBLFNBQWVDLFdBQXRCO0FBQUE7QUFBQTs7OzBTQUFPLGtCQUEyQkMsS0FBM0IsRUFBa0NsQixJQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVzQkcsS0FBSyxDQUFDQyxnRUFBVSxDQUFDQyxVQUFYLEdBQXdCLGFBQXhCLEdBQXdDYSxLQUF6QyxFQUFnRDtBQUMxRVosb0JBQU0sRUFBRSxLQURrRTtBQUUxRUMscUJBQU8sRUFBRTtBQUNMLGdDQUFnQixrQkFEWDtBQUVMLGtEQUEyQlAsSUFBSSxDQUFDUSxXQUFoQztBQUZLO0FBRmlFLGFBQWhELENBQUwsQ0FPeEJJLElBUHdCLENBT25CLFVBQVNDLFFBQVQsRUFBbUI7QUFDckIscUJBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0gsYUFUd0IsV0FVbEIsVUFBU0MsS0FBVCxFQUFnQjtBQUNuQixxQkFBT0EsS0FBUDtBQUNILGFBWndCLENBRnRCOztBQUFBO0FBRUdJLHNCQUZIOztBQUFBLGlCQWVBQSxVQWZBO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQWdCUUEsVUFoQlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiIuL3NlcnZpY2VzL3Rob3VnaHRzZXJ2aWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGJhc2VDb25maWcgfSBmcm9tICcuLi9zZXJ2aWNlcy9yZXN0c2VydmljZSdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZFRob3VnaHQodGhvdWdodCwgdXNlciwgbWluZHNldCwgYXV0aCkge1xuICAgIGNvbnNvbGUubG9nKGF1dGgpXG4gICAgLy8gTmV3IExvZ2luIERhdGEgcmVxdWVzdFxuICAgIGNvbnN0IG5ld1Rob3VnaHQgPSBhd2FpdCBmZXRjaChiYXNlQ29uZmlnLnRob3VnaHRVUkwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHthdXRoLmFjY2Vzc1Rva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgXCJ0aG91Z2h0XCI6IHRob3VnaHQsXG4gICAgICAgICAgICBcInVzZXJcIjogdXNlcixcbiAgICAgICAgICAgIFwibWluZHNldFwiOiBtaW5kc2V0LFxuICAgICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3JcbiAgICB9KTtcbiAgICBpZihuZXdUaG91Z2h0KSB7XG4gICAgICAgIHJldHVybiBuZXdUaG91Z2h0XG4gICAgfVxuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUaG91Z2h0cyhlbWFpbCwgYXV0aCkge1xuICAgIC8vIE5ldyBMb2dpbiBEYXRhIHJlcXVlc3RcbiAgICBjb25zdCBnZXRUaG91Z2h0ID0gYXdhaXQgZmV0Y2goYmFzZUNvbmZpZy50aG91Z2h0VVJMICsgJ2dldGJ5ZW1haWwvJyArIGVtYWlsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHthdXRoLmFjY2Vzc1Rva2VufWBcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3JcbiAgICB9KTtcbiAgICBpZihnZXRUaG91Z2h0KSB7XG4gICAgICAgIHJldHVybiBnZXRUaG91Z2h0XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/thoughtservice.js\n");

/***/ })

})