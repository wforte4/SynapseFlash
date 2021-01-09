webpackHotUpdate_N_E("pages/admin",{

/***/ "./services/apiservice.js":
/*!********************************!*\
  !*** ./services/apiservice.js ***!
  \********************************/
/*! exports provided: createProfile, loginRequest, forgotPassword, changePassword, submitContact, patchUser, getAllUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProfile\", function() { return createProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequest\", function() { return loginRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forgotPassword\", function() { return forgotPassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changePassword\", function() { return changePassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitContact\", function() { return submitContact; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"patchUser\", function() { return patchUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllUsers\", function() { return getAllUsers; });\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _restservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restservice */ \"./services/restservice.js\");\n\n\n\n\n\n\nvar cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_3__[\"Cookies\"]();\nfunction createProfile(_x) {\n  return _createProfile.apply(this, arguments);\n}\n\nfunction _createProfile() {\n  _createProfile = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {\n    var newUser;\n    return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(_restservice__WEBPACK_IMPORTED_MODULE_5__[\"baseConfig\"].baseURL + '/users', {\n              method: 'POST',\n              headers: {\n                \"Content-type\": \"application/json\"\n              },\n              body: JSON.stringify(data)\n            }).then(function (response) {\n              return response.json();\n            }).then(function (data) {\n              return data;\n            })[\"catch\"](function (error) {\n              console.log('Request failed', error);\n            });\n\n          case 2:\n            newUser = _context.sent;\n\n            if (!newUser) {\n              _context.next = 5;\n              break;\n            }\n\n            return _context.abrupt(\"return\", newUser);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _createProfile.apply(this, arguments);\n}\n\nfunction loginRequest(_x2, _x3) {\n  return _loginRequest.apply(this, arguments);\n}\n\nfunction _loginRequest() {\n  _loginRequest = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email, password) {\n    var newLogin;\n    return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch(_restservice__WEBPACK_IMPORTED_MODULE_5__[\"baseConfig\"].baseURL + '/auth', {\n              method: 'POST',\n              headers: {\n                \"Content-type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                \"email\": email,\n                \"password\": password\n              })\n            }).then(function (response) {\n              if (response.status == 400) return response.status;\n              return response.json();\n            }).then(function (data) {\n              return data;\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 2:\n            newLogin = _context2.sent;\n            return _context2.abrupt(\"return\", newLogin);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _loginRequest.apply(this, arguments);\n}\n\nfunction forgotPassword(_x4) {\n  return _forgotPassword.apply(this, arguments);\n}\n\nfunction _forgotPassword() {\n  _forgotPassword = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(email) {\n    var newLogin;\n    return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return fetch(_restservice__WEBPACK_IMPORTED_MODULE_5__[\"baseConfig\"].baseURL + '/users/forgotpass/' + email, {\n              method: 'GET',\n              headers: {\n                \"Content-type\": \"application/json\"\n              }\n            }).then(function (response) {\n              return response.json();\n            }).then(function (data) {\n              return data;\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 2:\n            newLogin = _context3.sent;\n\n            if (!newLogin) {\n              _context3.next = 5;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", newLogin);\n\n          case 5:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _forgotPassword.apply(this, arguments);\n}\n\nfunction changePassword(_x5, _x6) {\n  return _changePassword.apply(this, arguments);\n}\n\nfunction _changePassword() {\n  _changePassword = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(token, newPassword) {\n    var newLogin;\n    return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return fetch(_restservice__WEBPACK_IMPORTED_MODULE_5__[\"baseConfig\"].baseURL + '/users/changepassword/' + newPassword, {\n              method: 'GET',\n              headers: {\n                \"Content-type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(token)\n              }\n            }).then(function (response) {\n              return response.json();\n            }).then(function (data) {\n              return data;\n            })[\"catch\"](function (error) {\n              return error;\n            });\n\n          case 2:\n            newLogin = _context4.sent;\n\n            if (!newLogin) {\n              _context4.next = 5;\n              break;\n            }\n\n            return _context4.abrupt(\"return\", newLogin);\n\n          case 5:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _changePassword.apply(this, arguments);\n}\n\nfunction submitContact(_x7, _x8, _x9, _x10) {\n  return _submitContact.apply(this, arguments);\n}\n\nfunction _submitContact() {\n  _submitContact = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(name, message, email, cellphone) {\n    var newfetch;\n    return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return fetch(_restservice__WEBPACK_IMPORTED_MODULE_5__[\"baseConfig\"].baseURL + '/contact', {\n              method: 'POST',\n              headers: {\n                \"Content-type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                \"name\": name,\n                \"message\": message,\n                \"cellphone\": cellphone,\n                \"email\": email\n              })\n            }).then(function (res) {\n              return res.status;\n            })[\"catch\"](function (error) {\n              console.log('Request failed', error);\n            });\n\n          case 2:\n            newfetch = _context5.sent;\n\n            if (!newfetch) {\n              _context5.next = 7;\n              break;\n            }\n\n            return _context5.abrupt(\"return\", newfetch);\n\n          case 7:\n            return _context5.abrupt(\"return\", 404);\n\n          case 8:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _submitContact.apply(this, arguments);\n}\n\nfunction patchUser(_x11, _x12, _x13) {\n  return _patchUser.apply(this, arguments);\n}\n\nfunction _patchUser() {\n  _patchUser = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(userId, token, userData) {\n    var newfetch;\n    return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            _context6.next = 2;\n            return fetch(_restservice__WEBPACK_IMPORTED_MODULE_5__[\"baseConfig\"].baseURL + '/users/' + userId, {\n              method: 'PATCH',\n              headers: {\n                \"Content-type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(token)\n              },\n              body: JSON.stringify({\n                userData: userData\n              })\n            }).then(function (res) {\n              return res.ok ? res : Promise.reject(res);\n            }).then(function (res) {\n              return res.json();\n            })[\"catch\"](function (error) {\n              console.log('Request failed', error);\n            });\n\n          case 2:\n            newfetch = _context6.sent;\n\n            if (!newfetch) {\n              _context6.next = 7;\n              break;\n            }\n\n            return _context6.abrupt(\"return\", newfetch);\n\n          case 7:\n            return _context6.abrupt(\"return\", 404);\n\n          case 8:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n  return _patchUser.apply(this, arguments);\n}\n\nfunction getAllUsers(_x14, _x15) {\n  return _getAllUsers.apply(this, arguments);\n}\n\nfunction _getAllUsers() {\n  _getAllUsers = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(token, limit) {\n    var allUsers;\n    return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {\n      while (1) {\n        switch (_context7.prev = _context7.next) {\n          case 0:\n            _context7.next = 2;\n            return fetch(_restservice__WEBPACK_IMPORTED_MODULE_5__[\"baseConfig\"].baseURL + '/users', {\n              method: 'GET',\n              headers: {\n                \"Content-type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(token)\n              },\n              query: JSON.stringify({\n                \"limit\": limit\n              })\n            }).then(function (res) {\n              if (res.ok) return res;else {\n                return res.status;\n              }\n            }).then(function (res) {\n              console.log(res);\n              if (typeof res === typeof Number) return res;else {\n                return res;\n              }\n            }).then(function (data) {\n              return data;\n            });\n\n          case 2:\n            allUsers = _context7.sent;\n\n            if (!allUsers) {\n              _context7.next = 5;\n              break;\n            }\n\n            return _context7.abrupt(\"return\", allUsers);\n\n          case 5:\n          case \"end\":\n            return _context7.stop();\n        }\n      }\n    }, _callee7);\n  }));\n  return _getAllUsers.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXBpc2VydmljZS5qcz8yMzQzIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJDb29raWVzIiwiY3JlYXRlUHJvZmlsZSIsImRhdGEiLCJmZXRjaCIsImJhc2VDb25maWciLCJiYXNlVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm5ld1VzZXIiLCJsb2dpblJlcXVlc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwic3RhdHVzIiwibmV3TG9naW4iLCJmb3Jnb3RQYXNzd29yZCIsImNoYW5nZVBhc3N3b3JkIiwidG9rZW4iLCJuZXdQYXNzd29yZCIsInN1Ym1pdENvbnRhY3QiLCJuYW1lIiwibWVzc2FnZSIsImNlbGxwaG9uZSIsInJlcyIsIm5ld2ZldGNoIiwicGF0Y2hVc2VyIiwidXNlcklkIiwidXNlckRhdGEiLCJvayIsIlByb21pc2UiLCJyZWplY3QiLCJnZXRBbGxVc2VycyIsImxpbWl0IiwicXVlcnkiLCJOdW1iZXIiLCJhbGxVc2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsSUFBSUMsb0RBQUosRUFBaEI7QUFFTyxTQUFlQyxhQUF0QjtBQUFBO0FBQUE7Ozs0U0FBTyxpQkFBNkJDLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRW1CQyxLQUFLLENBQUNDLHVEQUFVLENBQUNDLE9BQVgsR0FBcUIsUUFBdEIsRUFBZ0M7QUFDdkRDLG9CQUFNLEVBQUUsTUFEK0M7QUFFdkRDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0I7QUFEWCxlQUY4QztBQUt2REMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLElBQWY7QUFMaUQsYUFBaEMsQ0FBTCxDQU9yQlMsSUFQcUIsQ0FPaEIsVUFBU0MsUUFBVCxFQUFtQjtBQUNyQixxQkFBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDSCxhQVRxQixFQVVyQkYsSUFWcUIsQ0FVaEIsVUFBU1QsSUFBVCxFQUFlO0FBQ2pCLHFCQUFPQSxJQUFQO0FBQ0gsYUFacUIsV0FhZixVQUFTWSxLQUFULEVBQWdCO0FBQ25CQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLEtBQTlCO0FBQ0gsYUFmcUIsQ0FGbkI7O0FBQUE7QUFFR0csbUJBRkg7O0FBQUEsaUJBa0JBQSxPQWxCQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FrQmdCQSxPQWxCaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQXFCQSxTQUFlQyxZQUF0QjtBQUFBO0FBQUE7OzsyU0FBTyxrQkFBNEJDLEtBQTVCLEVBQW1DQyxRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVvQmpCLEtBQUssQ0FBQ0MsdURBQVUsQ0FBQ0MsT0FBWCxHQUFxQixPQUF0QixFQUErQjtBQUN2REMsb0JBQU0sRUFBRSxNQUQrQztBQUV2REMscUJBQU8sRUFBRTtBQUNMLGdDQUFnQjtBQURYLGVBRjhDO0FBS3ZEQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQix5QkFBU1MsS0FEUTtBQUVqQiw0QkFBWUM7QUFGSyxlQUFmO0FBTGlELGFBQS9CLENBQUwsQ0FVdEJULElBVnNCLENBVWpCLFVBQVNDLFFBQVQsRUFBbUI7QUFDckIsa0JBQUdBLFFBQVEsQ0FBQ1MsTUFBVCxJQUFtQixHQUF0QixFQUEyQixPQUFPVCxRQUFRLENBQUNTLE1BQWhCO0FBQzNCLHFCQUFPVCxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNILGFBYnNCLEVBY3RCRixJQWRzQixDQWNqQixVQUFTVCxJQUFULEVBQWU7QUFDakIscUJBQU9BLElBQVA7QUFDSCxhQWhCc0IsV0FpQmhCLFVBQVNZLEtBQVQsRUFBZ0I7QUFDbkIscUJBQU9BLEtBQVA7QUFDSCxhQW5Cc0IsQ0FGcEI7O0FBQUE7QUFFR1Esb0JBRkg7QUFBQSw4Q0FzQklBLFFBdEJKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUF5QkEsU0FBZUMsY0FBdEI7QUFBQTtBQUFBOzs7NlNBQU8sa0JBQThCSixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVvQmhCLEtBQUssQ0FBQ0MsdURBQVUsQ0FBQ0MsT0FBWCxHQUFxQixvQkFBckIsR0FBNENjLEtBQTdDLEVBQW9EO0FBQzVFYixvQkFBTSxFQUFFLEtBRG9FO0FBRTVFQyxxQkFBTyxFQUFFO0FBQ0wsZ0NBQWdCO0FBRFg7QUFGbUUsYUFBcEQsQ0FBTCxDQU10QkksSUFOc0IsQ0FNakIsVUFBU0MsUUFBVCxFQUFtQjtBQUNyQixxQkFBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDSCxhQVJzQixFQVN0QkYsSUFUc0IsQ0FTakIsVUFBU1QsSUFBVCxFQUFlO0FBQ2pCLHFCQUFPQSxJQUFQO0FBQ0gsYUFYc0IsV0FZaEIsVUFBU1ksS0FBVCxFQUFnQjtBQUNuQixxQkFBT0EsS0FBUDtBQUNILGFBZHNCLENBRnBCOztBQUFBO0FBRUdRLG9CQUZIOztBQUFBLGlCQWlCQUEsUUFqQkE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOENBa0JRQSxRQWxCUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBc0JBLFNBQWVFLGNBQXRCO0FBQUE7QUFBQTs7OzZTQUFPLGtCQUE4QkMsS0FBOUIsRUFBcUNDLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRW9CdkIsS0FBSyxDQUFDQyx1REFBVSxDQUFDQyxPQUFYLEdBQXFCLHdCQUFyQixHQUFnRHFCLFdBQWpELEVBQThEO0FBQ3RGcEIsb0JBQU0sRUFBRSxLQUQ4RTtBQUV0RkMscUJBQU8sRUFBRTtBQUNMLGdDQUFnQixrQkFEWDtBQUVMLGtEQUEyQmtCLEtBQTNCO0FBRks7QUFGNkUsYUFBOUQsQ0FBTCxDQU90QmQsSUFQc0IsQ0FPakIsVUFBU0MsUUFBVCxFQUFtQjtBQUNyQixxQkFBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDSCxhQVRzQixFQVV0QkYsSUFWc0IsQ0FVakIsVUFBU1QsSUFBVCxFQUFlO0FBQ2pCLHFCQUFPQSxJQUFQO0FBQ0gsYUFac0IsV0FhaEIsVUFBU1ksS0FBVCxFQUFnQjtBQUNuQixxQkFBT0EsS0FBUDtBQUNILGFBZnNCLENBRnBCOztBQUFBO0FBRUdRLG9CQUZIOztBQUFBLGlCQWtCQUEsUUFsQkE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOENBbUJRQSxRQW5CUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBdUJBLFNBQWVLLGFBQXRCO0FBQUE7QUFBQTs7OzRTQUFPLGtCQUE2QkMsSUFBN0IsRUFBbUNDLE9BQW5DLEVBQTRDVixLQUE1QyxFQUFtRFcsU0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFb0IzQixLQUFLLENBQUNDLHVEQUFVLENBQUNDLE9BQVgsR0FBcUIsVUFBdEIsRUFBa0M7QUFDMURDLG9CQUFNLEVBQUUsTUFEa0Q7QUFFMURDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0I7QUFEWCxlQUZpRDtBQUsxREMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakIsd0JBQVFrQixJQURTO0FBRWpCLDJCQUFXQyxPQUZNO0FBR2pCLDZCQUFhQyxTQUhJO0FBSWpCLHlCQUFTWDtBQUpRLGVBQWY7QUFMb0QsYUFBbEMsQ0FBTCxDQVl0QlIsSUFac0IsQ0FZakIsVUFBU29CLEdBQVQsRUFBYztBQUNoQixxQkFBT0EsR0FBRyxDQUFDVixNQUFYO0FBQ0gsYUFkc0IsV0FlaEIsVUFBU1AsS0FBVCxFQUFnQjtBQUNuQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixLQUE5QjtBQUNILGFBakJzQixDQUZwQjs7QUFBQTtBQUVHa0Isb0JBRkg7O0FBQUEsaUJBcUJBQSxRQXJCQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FzQlFBLFFBdEJSOztBQUFBO0FBQUEsOENBd0JRLEdBeEJSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUE0QkEsU0FBZUMsU0FBdEI7QUFBQTtBQUFBOzs7d1NBQU8sa0JBQXlCQyxNQUF6QixFQUFpQ1QsS0FBakMsRUFBd0NVLFFBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRW9CaEMsS0FBSyxDQUFDQyx1REFBVSxDQUFDQyxPQUFYLEdBQXFCLFNBQXJCLEdBQWlDNkIsTUFBbEMsRUFBMEM7QUFDbEU1QixvQkFBTSxFQUFFLE9BRDBEO0FBRWxFQyxxQkFBTyxFQUFFO0FBQ0wsZ0NBQWdCLGtCQURYO0FBRUwsa0RBQTJCa0IsS0FBM0I7QUFGSyxlQUZ5RDtBQU1sRWpCLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUV5Qix3QkFBUSxFQUFSQTtBQUFGLGVBQWY7QUFONEQsYUFBMUMsQ0FBTCxDQVF0QnhCLElBUnNCLENBUWpCLFVBQUFvQixHQUFHO0FBQUEscUJBQUtBLEdBQUcsQ0FBQ0ssRUFBSixHQUFTTCxHQUFULEdBQWNNLE9BQU8sQ0FBQ0MsTUFBUixDQUFlUCxHQUFmLENBQW5CO0FBQUEsYUFSYyxFQVN0QnBCLElBVHNCLENBU2pCLFVBQUFvQixHQUFHO0FBQUEscUJBQUlBLEdBQUcsQ0FBQ2xCLElBQUosRUFBSjtBQUFBLGFBVGMsV0FVaEIsVUFBU0MsS0FBVCxFQUFnQjtBQUNuQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCRixLQUE5QjtBQUNILGFBWnNCLENBRnBCOztBQUFBO0FBRUdrQixvQkFGSDs7QUFBQSxpQkFnQkFBLFFBaEJBO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQWlCUUEsUUFqQlI7O0FBQUE7QUFBQSw4Q0FtQlEsR0FuQlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQXVCQSxTQUFlTyxXQUF0QjtBQUFBO0FBQUE7OzswU0FBTyxrQkFBMkJkLEtBQTNCLEVBQWtDZSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVvQnJDLEtBQUssQ0FBQ0MsdURBQVUsQ0FBQ0MsT0FBWCxHQUFxQixRQUF0QixFQUFnQztBQUN4REMsb0JBQU0sRUFBRSxLQURnRDtBQUV4REMscUJBQU8sRUFBRTtBQUNMLGdDQUFnQixrQkFEWDtBQUVMLGtEQUEyQmtCLEtBQTNCO0FBRkssZUFGK0M7QUFNeERnQixtQkFBSyxFQUFFaEMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbEIseUJBQVM4QjtBQURTLGVBQWY7QUFOaUQsYUFBaEMsQ0FBTCxDQVV0QjdCLElBVnNCLENBVWpCLFVBQUFvQixHQUFHLEVBQUk7QUFDVCxrQkFBR0EsR0FBRyxDQUFDSyxFQUFQLEVBQVcsT0FBT0wsR0FBUCxDQUFYLEtBQ0s7QUFDRCx1QkFBT0EsR0FBRyxDQUFDVixNQUFYO0FBQ0g7QUFDSixhQWZzQixFQWdCdEJWLElBaEJzQixDQWdCakIsVUFBQW9CLEdBQUcsRUFBSTtBQUNUaEIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZZSxHQUFaO0FBQ0Esa0JBQUcsT0FBT0EsR0FBUCxLQUFlLE9BQU9XLE1BQXpCLEVBQWlDLE9BQU9YLEdBQVAsQ0FBakMsS0FDSztBQUNELHVCQUFPQSxHQUFQO0FBQ0g7QUFDSixhQXRCc0IsRUF1QnRCcEIsSUF2QnNCLENBdUJqQixVQUFTVCxJQUFULEVBQWU7QUFDakIscUJBQU9BLElBQVA7QUFDSCxhQXpCc0IsQ0FGcEI7O0FBQUE7QUFFR3lDLG9CQUZIOztBQUFBLGlCQTRCQUEsUUE1QkE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOENBNkJRQSxRQTdCUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6Ii4vc2VydmljZXMvYXBpc2VydmljZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgand0X2RlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCB7IGJhc2VDb25maWcgfSBmcm9tICcuL3Jlc3RzZXJ2aWNlJztcblxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9maWxlKGRhdGEpIHtcbiAgICAvLyBSZXF1ZXN0IGRhdGEgdG8gcG9zdCB0byBjcmVhdGVwcm9maWxlIHJvdXRlIG9uIHJlc3QgYXBpXG4gICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IGZldGNoKGJhc2VDb25maWcuYmFzZVVSTCArICcvdXNlcnMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0IGZhaWxlZCcsIGVycm9yKTtcbiAgICB9KTtcbiAgICBpZihuZXdVc2VyKSByZXR1cm4gbmV3VXNlclxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW5SZXF1ZXN0KGVtYWlsLCBwYXNzd29yZCkge1xuICAgIC8vIE5ldyBMb2dpbiBEYXRhIHJlcXVlc3RcbiAgICBjb25zdCBuZXdMb2dpbiA9IGF3YWl0IGZldGNoKGJhc2VDb25maWcuYmFzZVVSTCArICcvYXV0aCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwiZW1haWxcIjogZW1haWwsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IHBhc3N3b3JkXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gNDAwKSByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0xvZ2luXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmb3Jnb3RQYXNzd29yZChlbWFpbCkge1xuICAgIC8vIE5ldyBMb2dpbiBEYXRhIHJlcXVlc3RcbiAgICBjb25zdCBuZXdMb2dpbiA9IGF3YWl0IGZldGNoKGJhc2VDb25maWcuYmFzZVVSTCArICcvdXNlcnMvZm9yZ290cGFzcy8nICsgZW1haWwsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3JcbiAgICB9KTtcbiAgICBpZihuZXdMb2dpbikge1xuICAgICAgICByZXR1cm4gbmV3TG9naW5cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGFuZ2VQYXNzd29yZCh0b2tlbiwgbmV3UGFzc3dvcmQpIHtcbiAgICAvLyBOZXcgTG9naW4gRGF0YSByZXF1ZXN0XG4gICAgY29uc3QgbmV3TG9naW4gPSBhd2FpdCBmZXRjaChiYXNlQ29uZmlnLmJhc2VVUkwgKyAnL3VzZXJzL2NoYW5nZXBhc3N3b3JkLycgKyBuZXdQYXNzd29yZCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICB9XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBlcnJvclxuICAgIH0pO1xuICAgIGlmKG5ld0xvZ2luKSB7XG4gICAgICAgIHJldHVybiBuZXdMb2dpblxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdENvbnRhY3QobmFtZSwgbWVzc2FnZSwgZW1haWwsIGNlbGxwaG9uZSkge1xuICAgIC8vIFJlcXVlc3QgZGF0YSB0byBwb3N0IHRvIGNyZWF0ZXByb2ZpbGUgcm91dGUgb24gcmVzdCBhcGlcbiAgICBjb25zdCBuZXdmZXRjaCA9IGF3YWl0IGZldGNoKGJhc2VDb25maWcuYmFzZVVSTCArICcvY29udGFjdCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgXCJtZXNzYWdlXCI6IG1lc3NhZ2UsXG4gICAgICAgICAgICBcImNlbGxwaG9uZVwiOiBjZWxscGhvbmUsXG4gICAgICAgICAgICBcImVtYWlsXCI6IGVtYWlsXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXNcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnUmVxdWVzdCBmYWlsZWQnLCBlcnJvcik7XG4gICAgfSk7XG5cbiAgICBpZihuZXdmZXRjaCkge1xuICAgICAgICByZXR1cm4gbmV3ZmV0Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gNDA0XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF0Y2hVc2VyKHVzZXJJZCwgdG9rZW4sIHVzZXJEYXRhKSB7XG4gICAgLy8gUmVxdWVzdCBkYXRhIHRvIHBvc3QgdG8gY3JlYXRlcHJvZmlsZSByb3V0ZSBvbiByZXN0IGFwaVxuICAgIGNvbnN0IG5ld2ZldGNoID0gYXdhaXQgZmV0Y2goYmFzZUNvbmZpZy5iYXNlVVJMICsgJy91c2Vycy8nICsgdXNlcklkLCB7XG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyRGF0YSB9KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzID0+IChyZXMub2sgPyByZXM6IFByb21pc2UucmVqZWN0KHJlcykpKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnUmVxdWVzdCBmYWlsZWQnLCBlcnJvcik7XG4gICAgfSk7XG5cbiAgICBpZihuZXdmZXRjaCkge1xuICAgICAgICByZXR1cm4gbmV3ZmV0Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gNDA0XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVXNlcnModG9rZW4sIGxpbWl0KSB7XG4gICAgLy8gTmV3IExvZ2luIERhdGEgcmVxdWVzdFxuICAgIGNvbnN0IGFsbFVzZXJzID0gYXdhaXQgZmV0Y2goYmFzZUNvbmZpZy5iYXNlVVJMICsgJy91c2VycycsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgcXVlcnk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwibGltaXRcIjogbGltaXRcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmKHJlcy5vaykgcmV0dXJuIHJlc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgaWYodHlwZW9mIHJlcyA9PT0gdHlwZW9mIE51bWJlcikgcmV0dXJuIHJlc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gICAgaWYoYWxsVXNlcnMpIHtcbiAgICAgICAgcmV0dXJuIGFsbFVzZXJzXG4gICAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/apiservice.js\n");

/***/ })

})