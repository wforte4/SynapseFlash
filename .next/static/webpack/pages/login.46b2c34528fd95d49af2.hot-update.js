webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/postAction */ \"./store/actions/postAction.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n\n\n\nvar _jsxFileName = \"/Users/williamforte/Canvas/SynapseFlash/pages/login.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction Login() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    email: '',\n    password: ''\n  }),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n\n  var handleType = function handleType(e) {\n    e.persist();\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.name, e.target.value)));\n  };\n\n  var submitForm = function submitForm(e) {\n    e.preventDefault();\n    dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_5__[\"loginAttempt\"])(inputs.email, inputs.password));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    id: \"body\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1350566342\", [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat]]]),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n      id: \"bgbody\",\n      src: \"/mainbg.png\",\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1350566342\", [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat]]])\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submitForm,\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1350566342\", [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat]]]),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        name: \"email\",\n        value: inputs.email,\n        onChange: handleType,\n        placeholder: \"Email Address\",\n        required: true,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1350566342\", [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        name: \"password\",\n        value: inputs.password,\n        onChange: handleType,\n        placeholder: \"Password\",\n        required: true,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1350566342\", [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"1350566342\", [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat]]]),\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      id: \"1350566342\",\n      dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat],\n      children: \"form.__jsx-style-dynamic-selector{width:350px;height:450px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:white;border-radius:3px;box-shadow:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat, \";}#body.__jsx-style-dynamic-selector{float:left;width:100%;height:100%;position:relative;}#bgbody.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;width:100%;height:100%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtZm9ydGUvQ2FudmFzL1N5bmFwc2VGbGFzaC9wYWdlcy9sb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3dCLEFBR2lDLEFBV0QsQUFNTyxXQUxQLENBWEUsTUFpQkwsSUFMSSxHQVhNLENBaUJULFFBTFMsQ0FNUCxRQWpCSCxHQWtCSSxLQWpCSCxDQVdiLE1BT21DLEVBakJBLHVHQWtCbkMsRUFqQnFCLGlCQUNDLGtCQUNzQix3Q0FDNUMiLCJmaWxlIjoiL1VzZXJzL3dpbGxpYW1mb3J0ZS9DYW52YXMvU3luYXBzZUZsYXNoL3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgbG9naW5BdHRlbXB0IH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvcG9zdEFjdGlvblwiXG5pbXBvcnQgVGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiXG5cblxuZnVuY3Rpb24gTG9naW4oKSB7XG5cbiAgICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH0pXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgICBjb25zdCBoYW5kbGVUeXBlID0gKGUpID0+IHtcbiAgICAgICAgZS5wZXJzaXN0KClcbiAgICAgICAgc2V0SW5wdXRzKHtcbiAgICAgICAgICAgIC4uLmlucHV0cyxcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXRGb3JtID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGRpc3BhdGNoKGxvZ2luQXR0ZW1wdChpbnB1dHMuZW1haWwsIGlucHV0cy5wYXNzd29yZCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cImJvZHlcIj5cbiAgICAgICAgICAgIDxpbWcgaWQ9XCJiZ2JvZHlcIiBzcmM9XCIvbWFpbmJnLnBuZ1wiLz5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRGb3JtfT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUeXBlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwgQWRkcmVzcydcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVR5cGV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHtUaGVtZS5zaC5tYXR9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNiZ2JvZHkge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luIl19 */\\n/*@ sourceURL=/Users/williamforte/Canvas/SynapseFlash/pages/login.js */\")\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Login, \"wYRAMCrvae4SkFLKkLSriKVOKns=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"]];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/M2I2OSJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImlucHV0cyIsInNldElucHV0cyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVUeXBlIiwiZSIsInBlcnNpc3QiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJsb2dpbkF0dGVtcHQiLCJUaGVtZSIsInNoIiwibWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFFZUMsc0RBQVEsQ0FBQztBQUNqQ0MsU0FBSyxFQUFFLEVBRDBCO0FBRWpDQyxZQUFRLEVBQUU7QUFGdUIsR0FBRCxDQUZ2QjtBQUFBLE1BRU5DLE1BRk07QUFBQSxNQUVFQyxTQUZGOztBQU1iLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCQSxLQUFDLENBQUNDLE9BQUY7QUFDQUwsYUFBUyxpQ0FDRkQsTUFERSx5SkFFSkssQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBRkwsRUFFWUgsQ0FBQyxDQUFDRSxNQUFGLENBQVNFLEtBRnJCLEdBQVQ7QUFJSCxHQU5EOztBQVFBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNMLENBQUQsRUFBTztBQUN0QkEsS0FBQyxDQUFDTSxjQUFGO0FBQ0FULFlBQVEsQ0FBQ1UsOEVBQVksQ0FBQ1osTUFBTSxDQUFDRixLQUFSLEVBQWVFLE1BQU0sQ0FBQ0QsUUFBdEIsQ0FBYixDQUFSO0FBQ0gsR0FIRDs7QUFLQSxzQkFDSTtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQUEsZ0dBNkIwQmMscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQTdCbkM7QUFBQSw0QkFDSTtBQUFLLFFBQUUsRUFBQyxRQUFSO0FBQWlCLFNBQUcsRUFBQyxhQUFyQjtBQUFBLGtHQTRCc0JGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0E1Qi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTSxjQUFRLEVBQUVMLFVBQWhCO0FBQUEsa0dBMkJzQkcscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQTNCL0I7QUFBQSw4QkFDSTtBQUNJLFlBQUksRUFBQyxPQURUO0FBRUksYUFBSyxFQUFFZixNQUFNLENBQUNGLEtBRmxCO0FBR0ksZ0JBQVEsRUFBRU0sVUFIZDtBQUlJLG1CQUFXLEVBQUMsZUFKaEI7QUFLSSxnQkFBUSxNQUxaO0FBQUEsb0dBMEJrQlMscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQTFCM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFRSTtBQUNJLFlBQUksRUFBQyxVQURUO0FBRUksYUFBSyxFQUFFZixNQUFNLENBQUNELFFBRmxCO0FBR0ksZ0JBQVEsRUFBRUssVUFIZDtBQUlJLG1CQUFXLEVBQUMsVUFKaEI7QUFLSSxnQkFBUSxNQUxaO0FBQUEsb0dBbUJrQlMscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQW5CM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosZUFlSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUEsb0dBWWtCRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBWjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBLGdCQTZCMEJGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0E3Qm5DO0FBQUEsK1FBNkIwQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQTdCbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlESDs7R0F0RVFuQixLO1VBTVlPLHVEOzs7S0FOWlAsSztBQXdFTUEsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IGxvZ2luQXR0ZW1wdCB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3Bvc3RBY3Rpb25cIlxuaW1wb3J0IFRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIlxuXG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuXG4gICAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJydcbiAgICB9KVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gICAgY29uc3QgaGFuZGxlVHlwZSA9IChlKSA9PiB7XG4gICAgICAgIGUucGVyc2lzdCgpXG4gICAgICAgIHNldElucHV0cyh7XG4gICAgICAgICAgICAuLi5pbnB1dHMsXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBkaXNwYXRjaChsb2dpbkF0dGVtcHQoaW5wdXRzLmVtYWlsLCBpbnB1dHMucGFzc3dvcmQpKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJib2R5XCI+XG4gICAgICAgICAgICA8aW1nIGlkPVwiYmdib2R5XCIgc3JjPVwiL21haW5iZy5wbmdcIi8+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsIEFkZHJlc3MnXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUeXBlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICR7VGhlbWUuc2gubWF0fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2JvZHkge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjYmdib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

})