"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpoc_mf_todo_remote_details"] = self["webpackChunkpoc_mf_todo_remote_details"] || []).push([["src_module_Details_index_js"],{

/***/ "./src/module/Details/index.js":
/*!*************************************!*\
  !*** ./src/module/Details/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c217\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/module/Details/style.js\");\n\n\n\nconst Details = props => {\n  const {\n    todoId,\n    handleGoBack\n  } = props;\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [todoData, setTodoData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then(res => res.json()).then(result => {\n      setTodoData(result);\n      setLoading(false);\n    }).catch(err => {\n      console.log(err);\n      setLoading(false);\n    });\n  }, [todoId]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Loading, null, \"Loading.....\") : !todoData?.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.NotFound, null, \"404 Not Found\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.DetailsRow, null, \"Task ID\\xA0:\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.ValueData, null, todoData?.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.DetailsRow, null, \"Task title\\xA0:\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.ValueData, null, todoData?.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.DetailsRow, null, \"Is complete?\\xA0:\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.ValueData, null, todoData?.completed ? 'True' : 'False')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.BackButton, {\n    onClick: handleGoBack\n  }, '< Go back')));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);\n\n//# sourceURL=webpack://poc_mf_todo_remote_details/./src/module/Details/index.js?");

/***/ }),

/***/ "./src/module/Details/style.js":
/*!*************************************!*\
  !*** ./src/module/Details/style.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BackButton: () => (/* binding */ BackButton),\n/* harmony export */   DetailsRow: () => (/* binding */ DetailsRow),\n/* harmony export */   Loading: () => (/* binding */ Loading),\n/* harmony export */   NotFound: () => (/* binding */ NotFound),\n/* harmony export */   ValueData: () => (/* binding */ ValueData)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst ValueData = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span`\n    color: red;\n`;\nconst DetailsRow = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2`\n    display: flex;\n    justify-content: center;\n    border-top: 2px solid white;\n    border-bottom: 2px solid white;\n    padding: 20px;\n    width: 100%;\n`;\nconst BackButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button`\n    width: 200px;\n    background: transparent;\n    color: greenyellow;\n    border: 1px solid greenyellow;\n    border-radius: 5px;\n    padding: 10px;\n    cursor: pointer;\n`;\nconst NotFound = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1`\n    color: red;\n`;\nconst Loading = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2`\n    color: yellow;\n`;\n\n//# sourceURL=webpack://poc_mf_todo_remote_details/./src/module/Details/style.js?");

/***/ })

}]);