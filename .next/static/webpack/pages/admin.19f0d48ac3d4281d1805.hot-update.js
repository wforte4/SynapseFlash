webpackHotUpdate_N_E("pages/admin",{

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/postAction */ \"./store/actions/postAction.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n\n\n\n\nvar _jsxFileName = \"/home/wforte/canvas/SynapseFlash/pages/admin.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Admin(_ref) {\n  _s();\n\n  var _this = this;\n\n  var user = _ref.user,\n      auth = _ref.auth;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      allusers = _useSelector.allusers;\n\n  console.log(user);\n  console.log(auth);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (auth) {\n      dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_4__[\"getAllUsersAdmin\"])(auth.accessToken, 50));\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1218926310\", [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey]]]) + \" \" + 'admin',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1218926310\", [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey]]]),\n      children: \"All Users\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1218926310\", [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey]]]) + \" \" + 'labels',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1218926310\", [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey]]]),\n        children: \"First Name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1218926310\", [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey]]]),\n        children: \"Last Name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1218926310\", [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey]]]),\n        children: \"Email\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h3\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1218926310\", [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey]]]),\n        children: \"Permission Level\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1218926310\", [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey]]]) + \" \" + 'allUsers',\n      children: allusers && allusers.map(function (user, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1218926310\", [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey]]]) + \" \" + 'singleUser',\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1218926310\", [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey]]]) + \" \" + 'rightborder',\n            children: user.firstName\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1218926310\", [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey]]]) + \" \" + 'rightborder',\n            children: user.lastName\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1218926310\", [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey]]]) + \" \" + 'rightborder',\n            children: user.email\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h2\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([[\"1218926310\", [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey]]]),\n            children: user.permissionLevel\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 29\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"1218926310\",\n      dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey],\n      children: \".rightborder.__jsx-style-dynamic-selector{border-right:1px solid white;}.labels.__jsx-style-dynamic-selector{float:left;width:90%;padding:10px 5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column no-wrap;-ms-flex-flow:column no-wrap;flex-flow:column no-wrap;}.labels.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:10px 0;font:18px 'Montserrat';width:25%;text-align:center;}.allUsers.__jsx-style-dynamic-selector{float:left;width:90%;margin:10px 5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.singleUser.__jsx-style-dynamic-selector{float:left;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:8px 0;padding:4px 0;border-radius:2px;box-shadow:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sh.grey, \";-webkit-flex-flow:column no-wrap;-ms-flex-flow:column no-wrap;flex-flow:column no-wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.singleUser.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{padding:10px;margin:0;font:14px 'Roboto';color:white;width:25%;text-align:center;overflow:hidden;}h1.__jsx-style-dynamic-selector{float:left;padding:10px;margin:20px;font:32px 'Montserrat';}.admin.__jsx-style-dynamic-selector{float:left;margin:60px 0;width:100%;height:100%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dmb3J0ZS9jYW52YXMvU3luYXBzZUZsYXNoL3BhZ2VzL2FkbWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDd0IsQUFHa0QsQUFHbEIsQUFPRyxBQU1ILEFBUUEsQUFXRSxBQVNGLEFBTUEsV0E5Q0QsQUFhQSxBQVFDLEFBb0JFLEFBTUMsRUFmTCxDQXpCYyxPQU5QLEFBYUQsQ0FRRixBQVdNLEVBU1AsQ0FNRCxJQW5EZixPQWtCaUIsQUE0QlUsQUFNWCxDQS9DQyxBQU1ILElBMEJFLE1BekJNLENBeUN0QixLQWZjLE1BU2QsSUFSc0IsRUExQnRCLGdCQTJCb0IsZUFkSCxDQWVqQixZQWRrQixDQVJRLENBYkcsWUFzQlAsa0JBQ3NCLHdDQUNmLE9BVkssVUFibEMsc0VBd0IrQixtQ0FWL0Isc0VBV0EiLCJmaWxlIjoiL2hvbWUvd2ZvcnRlL2NhbnZhcy9TeW5hcHNlRmxhc2gvcGFnZXMvYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBbGxVc2Vyc0FkbWluIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuXG5mdW5jdGlvbiBBZG1pbih7dXNlciwgYXV0aH0pIHtcblxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGNvbnN0IHthbGx1c2Vyc30gID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdClcbiAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgIGNvbnNvbGUubG9nKGF1dGgpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoYXV0aCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goZ2V0QWxsVXNlcnNBZG1pbihhdXRoLmFjY2Vzc1Rva2VuLCA1MCkpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRtaW4nPlxuICAgICAgICAgICAgPGgxPkFsbCBVc2VyczwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFiZWxzJz5cbiAgICAgICAgICAgICAgICA8aDM+Rmlyc3QgTmFtZTwvaDM+XG4gICAgICAgICAgICAgICAgPGgzPkxhc3QgTmFtZTwvaDM+XG4gICAgICAgICAgICAgICAgPGgzPkVtYWlsPC9oMz5cbiAgICAgICAgICAgICAgICA8aDM+UGVybWlzc2lvbiBMZXZlbDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGxVc2Vycyc+XG4gICAgICAgICAgICAgICAge2FsbHVzZXJzICYmIGFsbHVzZXJzLm1hcCgodXNlciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT0nc2luZ2xlVXNlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncmlnaHRib3JkZXInPnt1c2VyLmZpcnN0TmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3JpZ2h0Ym9yZGVyJz57dXNlci5sYXN0TmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3JpZ2h0Ym9yZGVyJz57dXNlci5lbWFpbH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXNlci5wZXJtaXNzaW9uTGV2ZWx9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucmlnaHRib3JkZXIge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxhYmVscyB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDUlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBuby13cmFwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGFiZWxzIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE4cHggJ01vbnRzZXJyYXQnO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbGxVc2VycyB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggNSU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNpbmdsZVVzZXIge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICR7VGhlbWUuc2guZ3JleX07XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vLXdyYXA7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNpbmdsZVVzZXIgaDIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDMycHggJ01vbnRzZXJyYXQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWRtaW4ge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA2MHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbkFkbWluLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKGN0eCkgPT4ge1xuICAgIGlmKGN0eC5hdXRoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGN0eC5hdXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZihjdHgucmVzKSB7XG4gICAgICAgICAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHtcbiAgICAgICAgICAgICAgTG9jYXRpb246IGAvZXJyb3I/ZXJyb3JNZXNzYWdlPSR7NDAxfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjdHgucmVzLmVuZCgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtzdGF0dXM6ICdhdXRoJ31cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW4iXX0= */\\n/*@ sourceURL=/home/wforte/canvas/SynapseFlash/pages/admin.js */\")\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Admin, \"voQg4xLbHhJqPSBSTW8+Knx4+DU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"]];\n});\n\n_c = Admin;\n\nAdmin.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    return _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (ctx.auth) {\n              console.log(ctx.auth);\n            } else {\n              if (ctx.res) {\n                ctx.res.writeHead(302, {\n                  Location: \"/error?errorMessage=\".concat(401)\n                });\n                ctx.res.end();\n              }\n            }\n\n            return _context.abrupt(\"return\", {\n              status: 'auth'\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Admin);\n\nvar _c;\n\n$RefreshReg$(_c, \"Admin\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4uanM/MjEzZSJdLCJuYW1lcyI6WyJBZG1pbiIsInVzZXIiLCJhdXRoIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiYWxsdXNlcnMiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiZ2V0QWxsVXNlcnNBZG1pbiIsImFjY2Vzc1Rva2VuIiwiVGhlbWUiLCJzaCIsImdyZXkiLCJtYXAiLCJpIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBlcm1pc3Npb25MZXZlbCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQWJDLElBQWEsUUFBYkEsSUFBYTtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUV6QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUZ5QixxQkFHTEMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUhOO0FBQUEsTUFHbEJDLFFBSGtCLGdCQUdsQkEsUUFIa0I7O0FBSXpCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsSUFBWjtBQUNBUSxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjtBQUNBUyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFHVCxJQUFILEVBQVM7QUFDTEMsY0FBUSxDQUFDUyxrRkFBZ0IsQ0FBQ1YsSUFBSSxDQUFDVyxXQUFOLEVBQW1CLEVBQW5CLENBQWpCLENBQVI7QUFDSDtBQUNKLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxzQkFDSTtBQUFBLGdHQW9EMEJDLHFE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QUFWbUIsNkNBV2I7QUFBQ0Msb0JBQU0sRUFBRTtBQUFULGFBWGE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY2U3QixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FkbWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWxsVXNlcnNBZG1pbiB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvcG9zdEFjdGlvbidcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcblxuZnVuY3Rpb24gQWRtaW4oe3VzZXIsIGF1dGh9KSB7XG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgICBjb25zdCB7YWxsdXNlcnN9ICA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpXG4gICAgY29uc29sZS5sb2codXNlcilcbiAgICBjb25zb2xlLmxvZyhhdXRoKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKGF1dGgpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGdldEFsbFVzZXJzQWRtaW4oYXV0aC5hY2Nlc3NUb2tlbiwgNTApKVxuICAgICAgICB9XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FkbWluJz5cbiAgICAgICAgICAgIDxoMT5BbGwgVXNlcnM8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhYmVscyc+XG4gICAgICAgICAgICAgICAgPGgzPkZpcnN0IE5hbWU8L2gzPlxuICAgICAgICAgICAgICAgIDxoMz5MYXN0IE5hbWU8L2gzPlxuICAgICAgICAgICAgICAgIDxoMz5FbWFpbDwvaDM+XG4gICAgICAgICAgICAgICAgPGgzPlBlcm1pc3Npb24gTGV2ZWw8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxsVXNlcnMnPlxuICAgICAgICAgICAgICAgIHthbGx1c2VycyAmJiBhbGx1c2Vycy5tYXAoKHVzZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9J3NpbmdsZVVzZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3JpZ2h0Ym9yZGVyJz57dXNlci5maXJzdE5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdyaWdodGJvcmRlcic+e3VzZXIubGFzdE5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdyaWdodGJvcmRlcic+e3VzZXIuZW1haWx9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3VzZXIucGVybWlzc2lvbkxldmVsfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnJpZ2h0Ym9yZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sYWJlbHMge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1JTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm8td3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxhYmVscyBoMyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICBmb250OiAxOHB4ICdNb250c2VycmF0JztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWxsVXNlcnMge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDUlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zaW5nbGVVc2VyIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAke1RoZW1lLnNoLmdyZXl9O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBuby13cmFwO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zaW5nbGVVc2VyIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250OiAxNHB4ICdSb2JvdG8nO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250OiAzMnB4ICdNb250c2VycmF0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFkbWluIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNjBweCAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5BZG1pbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyhjdHgpID0+IHtcbiAgICBpZihjdHguYXV0aCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjdHguYXV0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYoY3R4LnJlcykge1xuICAgICAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7XG4gICAgICAgICAgICAgIExvY2F0aW9uOiBgL2Vycm9yP2Vycm9yTWVzc2FnZT0kezQwMX1gXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY3R4LnJlcy5lbmQoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7c3RhdHVzOiAnYXV0aCd9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin.js\n");

/***/ })

})