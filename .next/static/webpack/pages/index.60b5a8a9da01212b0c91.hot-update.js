webpackHotUpdate_N_E("pages/index",{

/***/ "./store/actions/postAction.js":
/*!*************************************!*\
  !*** ./store/actions/postAction.js ***!
  \*************************************/
/*! exports provided: fetchProjects, loginAttempt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProjects\", function() { return fetchProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAttempt\", function() { return loginAttempt; });\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n/* harmony import */ var _services_projectservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/projectservice */ \"./services/projectservice.js\");\n/* harmony import */ var _services_apiservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/apiservice */ \"./services/apiservice.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"../../node_modules/jwt-decode/lib/index.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n\n\n\n\n\n\n\n\nvar cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_7__[\"Cookies\"]();\nvar fetchProjects = function fetchProjects() {\n  return /*#__PURE__*/function () {\n    var _ref = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {\n      var res;\n      return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_services_projectservice__WEBPACK_IMPORTED_MODULE_3__[\"getProjects\"])(50);\n\n            case 2:\n              res = _context.sent;\n              console.log(res);\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_2__[\"GET_PROJECTS\"],\n                payload: res\n              });\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar loginAttempt = function loginAttempt(email, password) {\n  return /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {\n      var res, decoded;\n      return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return Object(_services_apiservice__WEBPACK_IMPORTED_MODULE_4__[\"loginRequest\"])(email, password);\n\n            case 2:\n              res = _context2.sent;\n              cookies.set('user', res);\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_2__[\"AUTH\"],\n                payload: res\n              });\n              decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(res.accessToken);\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_2__[\"LOGIN\"],\n                payload: decoded\n              });\n              _context2.next = 9;\n              return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');\n\n            case 9:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uLmpzPzRiZTEiXSwibmFtZXMiOlsiY29va2llcyIsIkNvb2tpZXMiLCJmZXRjaFByb2plY3RzIiwiZGlzcGF0Y2giLCJnZXRQcm9qZWN0cyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwibG9naW5BdHRlbXB0IiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luUmVxdWVzdCIsInNldCIsImRlY29kZWQiLCJqd3RfZGVjb2RlIiwiYWNjZXNzVG9rZW4iLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLElBQUlDLG9EQUFKLEVBQWhCO0FBRU8sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBO0FBQUEsd1NBQU0saUJBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDYkMsNEVBQVcsQ0FBQyxFQUFELENBREU7O0FBQUE7QUFDekJDLGlCQUR5QjtBQUUvQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FGLHNCQUFRLENBQUM7QUFDTEssb0JBQUksRUFBRUMsbURBREQ7QUFFTEMsdUJBQU8sRUFBRUw7QUFGSixlQUFELENBQVI7O0FBSCtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF0QjtBQVNBLElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBUUMsUUFBUjtBQUFBO0FBQUEseVNBQXFCLGtCQUFNVixRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzNCVyx5RUFBWSxDQUFDRixLQUFELEVBQVFDLFFBQVIsQ0FEZTs7QUFBQTtBQUN2Q1IsaUJBRHVDO0FBRTdDTCxxQkFBTyxDQUFDZSxHQUFSLENBQVksTUFBWixFQUFvQlYsR0FBcEI7QUFDQUYsc0JBQVEsQ0FBQztBQUNMSyxvQkFBSSxFQUFFQywyQ0FERDtBQUVMQyx1QkFBTyxFQUFFTDtBQUZKLGVBQUQsQ0FBUjtBQUlNVyxxQkFQdUMsR0FPN0JDLGlEQUFVLENBQUNaLEdBQUcsQ0FBQ2EsV0FBTCxDQVBtQjtBQVE3Q2Ysc0JBQVEsQ0FBQztBQUNMSyxvQkFBSSxFQUFFQyw0Q0FERDtBQUVMQyx1QkFBTyxFQUFFTTtBQUZKLGVBQUQsQ0FBUjtBQVI2QztBQUFBLHFCQVl2Q0csa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVosQ0FadUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBckI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFyQiIsImZpbGUiOiIuL3N0b3JlL2FjdGlvbnMvcG9zdEFjdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHsgZ2V0UHJvamVjdHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9qZWN0c2VydmljZSdcbmltcG9ydCB7IGxvZ2luUmVxdWVzdCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaXNlcnZpY2UnXG5pbXBvcnQgand0X2RlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5cbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0cyA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRQcm9qZWN0cyg1MClcbiAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfUFJPSkVDVFMsXG4gICAgICAgIHBheWxvYWQ6IHJlc1xuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBsb2dpbkF0dGVtcHQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgbG9naW5SZXF1ZXN0KGVtYWlsLCBwYXNzd29yZClcbiAgICBjb29raWVzLnNldCgndXNlcicsIHJlcylcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IHR5cGVzLkFVVEgsXG4gICAgICAgIHBheWxvYWQ6IHJlc1xuICAgIH0pXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dF9kZWNvZGUocmVzLmFjY2Vzc1Rva2VuKVxuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogdHlwZXMuTE9HSU4sXG4gICAgICAgIHBheWxvYWQ6IGRlY29kZWRcbiAgICB9KVxuICAgIGF3YWl0IFJvdXRlci5wdXNoKCcvJylcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/actions/postAction.js\n");

/***/ })

})