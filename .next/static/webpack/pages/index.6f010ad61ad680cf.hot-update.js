"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"skills\": function() { return /* binding */ skills; },\n/* harmony export */   \"experience\": function() { return /* binding */ experience; },\n/* harmony export */   \"projects\": function() { return /* binding */ projects; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar skills = [\n    {\n        skill: 'Javascript',\n        percentage: 90\n    },\n    {\n        skill: 'HTML',\n        percentage: 100\n    },\n    {\n        skill: 'CSS',\n        percentage: 100\n    },\n    {\n        skill: 'Bootstrap',\n        percentage: 80\n    },\n    {\n        skill: 'React',\n        percentage: 95\n    },\n    {\n        skill: 'GIT',\n        percentage: 80\n    },\n    {\n        skill: 'Next.js',\n        percentage: 80\n    },\n    {\n        skill: 'SASS',\n        percentage: 70\n    },\n    {\n        skill: 'Gulp',\n        percentage: 60\n    },\n    {\n        skill: 'SQL',\n        percentage: 80\n    }, \n];\nvar experience = [\n    {\n        workplace: 'HYC Hardware SAS',\n        from: 2019,\n        to: 2021,\n        desc: 'Soporte T\\xe9cnico/Etiquetado e impresoras HyC Hardware SAS| Septiembre 2019 a Junio 2021',\n        tasks: [\n            'Capacitaci\\xf3n remota y presencial a clientes sobre software propio de la empresa EasyManagement e EasyPOS.',\n            'Instalaci\\xf3n de equipos tales como: impresoras, lectores de barras, All in One, PCs .',\n            'Resoluci\\xf3n de Problemas v\\xeda Remota Manejo de impresoras de etiquetas y rollos t\\xe9rmicos. Software: Zebra designer 2 y 3.',\n            'Manejo intermedio de SQL y MySql para consultas y reportes de base de datos'\n        ]\n    },\n    {\n        workplace: 'Love My Car',\n        from: 2021,\n        to: ' Actualidad',\n        desc: 'Desarrollador Web React.Js - Next.Js',\n        tasks: [\n            'Desarrollo de m\\xfaltiples funcionalidades de la aplicaci\\xf3n orientadas al dise\\xf1o y funcionalidady eficiente de la misma.',\n            'Maquetado visual de las ventanas'\n        ]\n    }\n];\nvar projects = [\n    {\n        title: 'Frontend Store',\n        desc: 'Lenguajes Usados: HTML y CSS',\n        img: 'frontendstore.png',\n        src: 'https://frontendstoreapp.netlify.app/'\n    },\n    {\n        title: 'Web Personal',\n        desc: 'Lenguajes Usados: HTML y CSS',\n        img: 'personalweb.png',\n        src: 'https://personalwebwhite.netlify.app/'\n    },\n    {\n        title: 'Blog acerca del Caf\\xe9',\n        desc: 'Lenguajes Usados: HTML,CSS y Javascript',\n        img: 'blogcafe.png',\n        src: 'https://blogacercadelcafe.netlify.app/'\n    },\n    {\n        title: 'Bienes Raices',\n        desc: 'Lenguajes y Tecnologias Usadas: HTML, SASS, Javascript, PHP, SQL. Frameworks: MySQL Workbench, TablePLus, Laragon, Apache',\n        img: 'bienesraices.png',\n        src: 'https://biened-raicesvisual.netlify.app/'\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxHQUFLLENBQUNBLE1BQU0sR0FBRyxDQUFDO0lBQ25CLENBQUM7UUFDR0MsS0FBSyxFQUFFLENBQVk7UUFDbkJDLFVBQVUsRUFBRSxFQUFFO0lBQ2xCLENBQUM7SUFDRCxDQUFDO1FBQ0dELEtBQUssRUFBRSxDQUFNO1FBQ2JDLFVBQVUsRUFBRSxHQUFHO0lBQ25CLENBQUM7SUFDRCxDQUFDO1FBQ0dELEtBQUssRUFBRSxDQUFLO1FBQ1pDLFVBQVUsRUFBRSxHQUFHO0lBQ25CLENBQUM7SUFDRCxDQUFDO1FBQ0dELEtBQUssRUFBRSxDQUFXO1FBQ2xCQyxVQUFVLEVBQUUsRUFBRTtJQUNsQixDQUFDO0lBQ0QsQ0FBQztRQUNHRCxLQUFLLEVBQUUsQ0FBTztRQUNkQyxVQUFVLEVBQUUsRUFBRTtJQUNsQixDQUFDO0lBQ0QsQ0FBQztRQUNHRCxLQUFLLEVBQUUsQ0FBSztRQUNaQyxVQUFVLEVBQUUsRUFBRTtJQUNsQixDQUFDO0lBQ0QsQ0FBQztRQUNHRCxLQUFLLEVBQUUsQ0FBUztRQUNoQkMsVUFBVSxFQUFFLEVBQUU7SUFDbEIsQ0FBQztJQUNELENBQUM7UUFDR0QsS0FBSyxFQUFFLENBQU07UUFDYkMsVUFBVSxFQUFFLEVBQUU7SUFDbEIsQ0FBQztJQUNELENBQUM7UUFDR0QsS0FBSyxFQUFFLENBQU07UUFDYkMsVUFBVSxFQUFFLEVBQUU7SUFDbEIsQ0FBQztJQUNELENBQUM7UUFDR0QsS0FBSyxFQUFFLENBQUs7UUFDWkMsVUFBVSxFQUFFLEVBQUU7SUFDbEIsQ0FBQztBQUlMLENBQUM7QUFDTSxHQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7UUFDR0MsU0FBUyxFQUFFLENBQWtCO1FBQzdCQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxFQUFFLEVBQUUsSUFBSTtRQUNSQyxJQUFJLEVBQUUsQ0FBd0Y7UUFDN0ZDLEtBQUksRUFBRSxDQUFDO1lBQ0osQ0FBMkc7WUFDMUcsQ0FBcUY7WUFDckYsQ0FBd0g7WUFDdEgsQ0FBMEU7UUFDakYsQ0FBQztJQUNMLENBQUM7SUFDRCxDQUFDO1FBQ0dKLFNBQVMsRUFBRSxDQUFhO1FBQ3hCQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxFQUFFLEVBQUUsQ0FBYTtRQUNqQkMsSUFBSSxFQUFFLENBQXNDO1FBQzVDQyxLQUFLLEVBQUUsQ0FBQztZQUNKLENBQXVIO1lBQ3BILENBQStCO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUNNLEdBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQUM7SUFDckIsQ0FBQztRQUNHQyxLQUFLLEVBQUUsQ0FBZ0I7UUFDdkJILElBQUksRUFBRSxDQUE4QjtRQUNwQ0ksR0FBRyxFQUFFLENBQW1CO1FBQ3hCQyxHQUFHLEVBQUUsQ0FBdUM7SUFDaEQsQ0FBQztJQUNELENBQUM7UUFDR0YsS0FBSyxFQUFFLENBQWM7UUFDckJILElBQUksRUFBRSxDQUE4QjtRQUNwQ0ksR0FBRyxFQUFFLENBQWlCO1FBQ3RCQyxHQUFHLEVBQUUsQ0FBdUM7SUFDaEQsQ0FBQztJQUNELENBQUM7UUFDR0YsS0FBSyxFQUFFLENBQXNCO1FBQzdCSCxJQUFJLEVBQUUsQ0FBeUM7UUFDL0NJLEdBQUcsRUFBRSxDQUFjO1FBQ25CQyxHQUFHLEVBQUUsQ0FBd0M7SUFDakQsQ0FBQztJQUNELENBQUM7UUFDR0YsS0FBSyxFQUFFLENBQWU7UUFDdEJILElBQUksRUFBRSxDQUEySDtRQUNqSUksR0FBRyxFQUFFLENBQWtCO1FBQ3ZCQyxHQUFHLEVBQUUsQ0FBMEM7SUFDbkQsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcz85ZGFlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBza2lsbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdKYXZhc2NyaXB0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA5MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0hUTUwnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDEwMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0NTUycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogMTAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnQm9vdHN0cmFwJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1JlYWN0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA5NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0dJVCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdOZXh0LmpzJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1NBU1MnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnR3VscCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNjBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdTUUwnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5dXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlID0gW1xyXG4gICAge1xyXG4gICAgICAgIHdvcmtwbGFjZTogJ0hZQyBIYXJkd2FyZSBTQVMnLFxyXG4gICAgICAgIGZyb206IDIwMTksXHJcbiAgICAgICAgdG86IDIwMjEsXHJcbiAgICAgICAgZGVzYzogJ1NvcG9ydGUgVMOpY25pY28vRXRpcXVldGFkbyBlIGltcHJlc29yYXMgSHlDIEhhcmR3YXJlIFNBU3wgU2VwdGllbWJyZSAyMDE5IGEgSnVuaW8gMjAyMScsXHJcbiAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgJ0NhcGFjaXRhY2nDs24gcmVtb3RhIHkgcHJlc2VuY2lhbCBhIGNsaWVudGVzIHNvYnJlIHNvZnR3YXJlIHByb3BpbyBkZSBsYSBlbXByZXNhIEVhc3lNYW5hZ2VtZW50IGUgRWFzeVBPUy4nLFxyXG4gICAgICAgICAgICAnSW5zdGFsYWNpw7NuIGRlIGVxdWlwb3MgdGFsZXMgY29tbzogaW1wcmVzb3JhcywgbGVjdG9yZXMgZGUgYmFycmFzLCBBbGwgaW4gT25lLCBQQ3MgLicsXHJcbiAgICAgICAgICAgICdSZXNvbHVjacOzbiBkZSBQcm9ibGVtYXMgdsOtYSBSZW1vdGEgTWFuZWpvIGRlIGltcHJlc29yYXMgZGUgZXRpcXVldGFzIHkgcm9sbG9zIHTDqXJtaWNvcy4gU29mdHdhcmU6IFplYnJhIGRlc2lnbmVyIDIgeSAzLicsXHJcbiAgICAgICAgICAgICdNYW5lam8gaW50ZXJtZWRpbyBkZSBTUUwgeSBNeVNxbCBwYXJhIGNvbnN1bHRhcyB5IHJlcG9ydGVzIGRlIGJhc2UgZGUgZGF0b3MnXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB3b3JrcGxhY2U6ICdMb3ZlIE15IENhcicsXHJcbiAgICAgICAgZnJvbTogMjAyMSxcclxuICAgICAgICB0bzogJyBBY3R1YWxpZGFkJyxcclxuICAgICAgICBkZXNjOiAnRGVzYXJyb2xsYWRvciBXZWIgUmVhY3QuSnMgLSBOZXh0LkpzJyxcclxuICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICAnRGVzYXJyb2xsbyBkZSBtw7psdGlwbGVzIGZ1bmNpb25hbGlkYWRlcyBkZSBsYSBhcGxpY2FjacOzbiBvcmllbnRhZGFzIGFsIGRpc2XDsW8geSBmdW5jaW9uYWxpZGFkeSBlZmljaWVudGUgZGUgbGEgbWlzbWEuJyxcclxuICAgICAgICAgICAgJ01hcXVldGFkbyB2aXN1YWwgZGUgbGFzIHZlbnRhbmFzJ1xyXG4gICAgICAgIF1cclxuICAgIH1cclxuXVxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdGcm9udGVuZCBTdG9yZScsXHJcbiAgICAgICAgZGVzYzogJ0xlbmd1YWplcyBVc2Fkb3M6IEhUTUwgeSBDU1MnLFxyXG4gICAgICAgIGltZzogJ2Zyb250ZW5kc3RvcmUucG5nJyxcclxuICAgICAgICBzcmM6ICdodHRwczovL2Zyb250ZW5kc3RvcmVhcHAubmV0bGlmeS5hcHAvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1dlYiBQZXJzb25hbCcsXHJcbiAgICAgICAgZGVzYzogJ0xlbmd1YWplcyBVc2Fkb3M6IEhUTUwgeSBDU1MnLFxyXG4gICAgICAgIGltZzogJ3BlcnNvbmFsd2ViLnBuZycsXHJcbiAgICAgICAgc3JjOiAnaHR0cHM6Ly9wZXJzb25hbHdlYndoaXRlLm5ldGxpZnkuYXBwLydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdCbG9nIGFjZXJjYSBkZWwgQ2Fmw6knLFxyXG4gICAgICAgIGRlc2M6ICdMZW5ndWFqZXMgVXNhZG9zOiBIVE1MLENTUyB5IEphdmFzY3JpcHQnLFxyXG4gICAgICAgIGltZzogJ2Jsb2djYWZlLnBuZycsXHJcbiAgICAgICAgc3JjOiAnaHR0cHM6Ly9ibG9nYWNlcmNhZGVsY2FmZS5uZXRsaWZ5LmFwcC8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQmllbmVzIFJhaWNlcycsXHJcbiAgICAgICAgZGVzYzogJ0xlbmd1YWplcyB5IFRlY25vbG9naWFzIFVzYWRhczogSFRNTCwgU0FTUywgSmF2YXNjcmlwdCwgUEhQLCBTUUwuIEZyYW1ld29ya3M6IE15U1FMIFdvcmtiZW5jaCwgVGFibGVQTHVzLCBMYXJhZ29uLCBBcGFjaGUnLFxyXG4gICAgICAgIGltZzogJ2JpZW5lc3JhaWNlcy5wbmcnLFxyXG4gICAgICAgIHNyYzogJ2h0dHBzOi8vYmllbmVkLXJhaWNlc3Zpc3VhbC5uZXRsaWZ5LmFwcC8nXHJcbiAgICB9XHJcbl0iXSwibmFtZXMiOlsic2tpbGxzIiwic2tpbGwiLCJwZXJjZW50YWdlIiwiZXhwZXJpZW5jZSIsIndvcmtwbGFjZSIsImZyb20iLCJ0byIsImRlc2MiLCJ0YXNrcyIsInByb2plY3RzIiwidGl0bGUiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./profile.js\n");

/***/ })

});