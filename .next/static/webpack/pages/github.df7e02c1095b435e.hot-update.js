"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/github",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var cambiosDeRuta = function(url) {\n            return console.log(url);\n        };\n        router.events.on('routeChangeStart', cambiosDeRuta);\n        return function() {\n            router.events.off('routeChangeStart', cambiosDeRuta);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sebastian\\\\Desktop\\\\Desarrollo e Informatica\\\\proyectos personales\\\\next-porfolio-sebastian\\\\components\\\\Layout.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-4 border\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sebastian\\\\Desktop\\\\Desarrollo e Informatica\\\\proyectos personales\\\\next-porfolio-sebastian\\\\components\\\\Layout.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"\\xa9 Sebastian Caffree Portafolio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sebastian\\\\Desktop\\\\Desarrollo e Informatica\\\\proyectos personales\\\\next-porfolio-sebastian\\\\components\\\\Layout.js\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"2019-\",\n                                new Date().getFullYear(),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Sebastian\\\\Desktop\\\\Desarrollo e Informatica\\\\proyectos personales\\\\next-porfolio-sebastian\\\\components\\\\Layout.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Sebastian\\\\Desktop\\\\Desarrollo e Informatica\\\\proyectos personales\\\\next-porfolio-sebastian\\\\components\\\\Layout.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sebastian\\\\Desktop\\\\Desarrollo e Informatica\\\\proyectos personales\\\\next-porfolio-sebastian\\\\components\\\\Layout.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBQ0k7QUFDTTs7O0FBRXZDLEdBQUssQ0FBQ0csTUFBTSxHQUFHLFFBQVEsUUFBVSxDQUFDO1FBQWhCQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3RCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHSCxzREFBUztJQUV4QkQsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNiLEdBQUssQ0FBQ0ssYUFBYSxHQUFHQyxRQUFRLENBQVJBLEdBQUc7WUFBSUMsTUFBTSxDQUFOQSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRzs7UUFFNUNGLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBa0IsbUJBQUVMLGFBQWE7UUFFbEQsTUFBTSxDQUFDLFFBQVEsR0FBRixDQUFDO1lBQ1ZELE1BQU0sQ0FBQ0ssTUFBTSxDQUFDRSxHQUFHLENBQUMsQ0FBa0IsbUJBQUVOLGFBQWE7UUFDdkQsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNOzt3RkFFR04sK0NBQU07Ozs7O3dGQUNOYSxDQUFJO2dCQUFDQyxTQUFTLEVBQUMsQ0FBdUI7MEJBQ2xDVixRQUFROzs7Ozs7d0ZBRVpXLENBQU07Z0JBQUNELFNBQVMsRUFBQyxDQUFvQjtzR0FDakNFLENBQUc7b0JBQUNGLFNBQVMsRUFBQyxDQUFlOztvR0FDekJHLENBQUU7c0NBQUMsQ0FBbUM7Ozs7OztvR0FDdENDLENBQUM7O2dDQUFDLENBQUs7Z0NBQUMsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLFdBQVc7Z0NBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkQsQ0FBQztHQTdCS2pCLE1BQU07O1FBQ09ELGtEQUFTOzs7S0FEdEJDLE1BQU07QUErQlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbWJpb3NEZVJ1dGEgPSB1cmwgPT4gY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGNhbWJpb3NEZVJ1dGEpXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgY2FtYmlvc0RlUnV0YSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdjb250YWluZXIgcHktNCBib3JkZXInPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSdiZy1kYXJrIHRleHQtbGlnaHQnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPiZjb3B5OyBTZWJhc3RpYW4gQ2FmZnJlZSBQb3J0YWZvbGlvPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD4yMDE5LXtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIk5hdmJhciIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwiY2FtYmlvc0RlUnV0YSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJvbiIsIm9mZiIsIm1haW4iLCJjbGFzc05hbWUiLCJmb290ZXIiLCJkaXYiLCJoMSIsInAiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});