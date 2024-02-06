/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://unpkg.com/css.gg@2.0.0/icons/css/remove.css);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://unpkg.com/css.gg@2.0.0/icons/css/user-list.css);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://unpkg.com/css.gg@2.0.0/icons/css/list.css);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://unpkg.com/css.gg@2.0.0/icons/css/calendar-due.css);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://unpkg.com/css.gg@2.0.0/icons/css/media-live.css);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://unpkg.com/css.gg@2.0.0/icons/css/add.css);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n:root {\n\t--mainFont: 'Roboto', sans-serif, helvetica;\n\t--designColor: #00BFFF;\n}\n\nbody {\n\tdisplay: grid;\n\tjustify-content: center;\n\tmargin: 0;\n\tpadding: 1rem;\n\tbackground-color: #080B12;\n\tcolor: white;\n\tfont-family: var(--mainFont);\n\toverflow-y: hidden;\n}\n\n#content {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.my-day-header {\n\tfont-size: 2rem;\n\tfont-weight: bold;\n}\n\n\n.header-quote,\n.weekday,\n.month {\n\topacity: 0.6;\n}\n\n.welcome-msg::after {\n\tcontent: '.';\n\tcolor: #0096FF;\n\tfont-size: 3rem;\n}\n\n.my-day-status {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-size: 1.2rem;\n\tgap: 1rem;\n}\n\n.date-wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.week-number {\n\tfont-size: 3rem;\n}\n\n.tasks-wrapper {\n\theight: 32%;\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow-y: scroll;\n\tgap: 16px;\n}\n\n.task-wrapper {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(auto-fit, minmax(30px, 1fr));\n\tgrid-template-columns: 20px 1fr;\n\tgap: 0.1rem 1rem;\n\tpadding: 1rem;\n}\n\n.task-checkbox {\n\tgrid-row: 1 / 5;\n}\n\n.task-title {\n\tfont-size: 1.5rem;\n\tfont-weight: bold;\n}\n\n.task-due-date::before {\n\tcontent: \"Due date: \";\n\tcolor: #FF474C;\n}\n\n.priority-1 {\n\tcolor: #B2FFFF;\n}\n\n.priority-2 {\n\tcolor: #1877F2;\n}\n\n.priority-3{\n\tcolor: #00BFFF;\n}\n\n.task-note {\n\tfont-style: italic;\n}\n\n.input-wrapper {\n\twidth: max(80%, 350px);\n\tdisplay: grid;\n\tgrid-template-rows: 35px;\n\tgrid-template-columns: 20px 1fr;\n\talign-items: center;\n\tgap: 0.5rem;\n\tborder-radius: 16px;\n\tborder: 2px solid lightgray;\n\tpadding-left: 0.5rem;\n}\n\n#task-input {\n\toutline: none;\n\tbackground: inherit;\n\tborder: none;\n\tcolor: white;\n}\n\nform,\n#setting-icon,\n.sidebar {\n\tposition: fixed;\n\tjustify-self: start;\n}\n\n#setting-icon {\n\twidth: 40px;\n\theight: auto;\n\tfilter: invert(1);\n\tmargin: 1rem auto auto 1rem;\n}\n\n#setting-icon:hover {\n\tfilter: drop-shadow(0 0 15px red) invert(100%);\n}\n\n.sidebar,\n.sidebar > div {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tgap: 1rem;\n\tpadding: 1rem;\n}\n\n.sidebar {\n\tmargin-top: 5%;\n\tbackdrop-filter: blur(10px);\n\twidth: 350px;\n\theight: 100%;\n\tz-index: 2;\n}\n\n.sidebar .title-wrapper,\n.folder-wrapper {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 1rem;\n} \n\n.user-list {\n\toverflow-y: scroll;\n\theight: 50%;\n}\n\n.folder-wrapper:hover,\n.title-wrapper:hover i  {\n\tcolor: var(--designColor);\n\tcursor: pointer;\n}\n\n.sidebar .title-wrapper {\n\tflex-direction: row;\n\tfont-size: 1.5rem;\n\tborder-bottom: 2px solid white;\n}\n\n.title-wrapper i {\n\tjustify-self: end;\n}\n\n.file-count {\n\tdisplay: flex;\n\tborder: 1px solid  var(--designColor);\n\tpadding: 5px;\n\tborder-radius: 50%;\n\twidth: 15px;\n\theight: 15px;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-weight: bold;\n}\n\nform {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\tmargin: 0;\n\n\tjustify-self: center;\n\tjustify-content: center;\n\talign-items: center;\n\tbackdrop-filter: blur(10px);\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 3;\n}\n\n#list-form input {\n\tborder: 2px solid white;\n\tborder-radius: 16px;\n\tpadding-left: 12px;\n\twidth: min(70%, 350px);\n\theight: 2rem;\n\tcolor: white;\n}\n\n#list-form .btn-wrapper {\n\tdisplay: flex;\n\tgap: 2rem;\n}\n\n#list-form button {\n\tpadding: 8px 32px;\n\tbackground-color: var(--designColor);\n\tfont-weight: 600;\n\tfont-size: 1rem;\n\tborder: none;\n\tborder-radius: 12px;\n}\n\nform #cancel-btn {\n\tbackground-color: red;\n}\n\n#list-form button:hover {\n\tbackground-color: white;\n\tcolor: var(--designColor);\n}\n\nform #cancel-btn:hover {\n\tcolor: red;\n}\n\n.gg-remove {\n\tjustify-content: end;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayContent: () => (/* binding */ displayContent)\n/* harmony export */ });\n/* harmony import */ var _setting_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.png */ \"./src/setting.png\");\n\n\n\nlet defaultFolders = [\n\t{\n\t\t\"title\": \"My day\",\n\t\t\"iconClass\": \"gg-media-live\",\n\t\t\"files\": \"5\",\n\t},\n\t{\n\t\t\"title\": \"Next 7 days\",\n\t\t\"iconClass\": \"gg-calendar-due\",\n\t\t\"files\": \"3\",\n\t},\n\t{\n\t\t\"title\": \"All my tasks\",\n\t\t\"iconClass\": \"gg-list\",\n\t\t\"files\": \"4\",\n\t},\n]\n\nlet userFolders = [\t\n\t{\n\t\t\"title\": \"Personal\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"3\",\n\t},\n\t{\n\t\t\"title\": \"Work\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"2\",\n\t},\n\t{\n\t\t\"title\": \"Grocery List\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"1\",\n\t},\n\t{\n\t\t\"title\": \"Personal\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"3\",\n\t},\n\t{\n\t\t\"title\": \"Work\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"2\",\n\t},\n\t{\n\t\t\"title\": \"Grocery List\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"1\",\n\t},\n\t{\n\t\t\"title\": \"Personal\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"3\",\n\t},\n\t{\n\t\t\"title\": \"Work\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"2\",\n\t},\n\t{\n\t\t\"title\": \"Grocery List\",\n\t\t\"iconClass\": \"\",\n\t\t\"files\": \"1\",\n\t},\n]\n\nclass SidebarFolder {\n\tconstructor(folder) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('folder-wrapper');\n\t\n\t\tthis.icon = document.createElement('i');\n\t\tif (folder.iconClass != '')\n\t\t\tthis.icon.classList.add(folder.iconClass);\n\t\telse\n\t\t\tthis.icon.classList.add('gg-user-list');\n\n\t\tthis.wrapper.appendChild(this.icon);\n\n\t\tthis.title = document.createElement('div');\n\t\tthis.title.classList.add('folder-title');\n\t\tthis.title.textContent = folder.title;\n\t\tthis.wrapper.appendChild(this.title);\n\n\t\tthis.count = document.createElement('div');\n\t\tthis.count.classList.add('file-count');\n\t\tthis.count.textContent = folder.files;\n\t\tthis.wrapper.appendChild(this.count);\n\t\n\t\tthis.removeIcon = document.createElement('i');\n\t\tthis.removeIcon.classList.add('gg-remove');\n\t\tthis.removeIcon.addEventListener('click', removeUserList);\n\t\tthis.wrapper.appendChild(this.removeIcon);\n\t}\n}\n\nclass Sidebar {\n\tconstructor() {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('sidebar');\n\n\t\tthis.defaultWrapper = document.createElement('div');\n\t\tthis.defaultWrapper.classList.add('default-wrapper');\n\t\tdefaultFolders.forEach(folder => {\n\t\t\tconst f = new SidebarFolder(folder);\n\t\t\tthis.defaultWrapper.appendChild(f.wrapper);\n\t\t});\n\t\tthis.wrapper.appendChild(this.defaultWrapper);\n\n\t\tthis.userList = document.createElement('div');\n\t\tthis.userList.classList.add('user-list');\n\n\t\tthis.titleWrapper =  document.createElement('div');\n\t\tthis.titleWrapper.classList.add('title-wrapper');\n\t\t\n\t\tthis.title = document.createElement('div');\n\t\tthis.title.textContent =  'My lists';\n\t\tthis.titleWrapper.appendChild(this.title);\n\n\t\tthis.icon = document.createElement('i');\n\t\tthis.icon.classList.add('gg-add');\n\t\tthis.icon.addEventListener('click', displayListForm);\t\n\t\tthis.titleWrapper.appendChild(this.icon);\n\t\n\t\tthis.wrapper.appendChild(this.titleWrapper);\n\t\tuserFolders.forEach(folder => {\n\t\t\tconst f = new SidebarFolder(folder);\n\t\t\tthis.userList.appendChild(f.wrapper);\n\t\t});\n\t\tthis.wrapper.appendChild(this.userList);\n\t}\n}\n\nclass MyDayHeader {\n\tconstructor(welcomeText, message) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('my-day-header');\n\n\t\tthis.welcomeText = document.createElement('div');\n\t\tthis.welcomeText.classList.add('welcome-msg');\n\t\tthis.welcomeText.textContent = welcomeText;\n\t\tthis.wrapper.appendChild(this.welcomeText);\n\n\t\tthis.message = document.createElement('div');\n\t\tthis.message.classList.add('header-quote');\n\t\tthis.message.textContent = message;\n\t\tthis.wrapper.appendChild(this.message);\n\t}\n}\n\nclass MyDayStatus {\n\tconstructor(date, message) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('my-day-status');\n\n\t\tthis.date = document.createElement('div');\n\t\tthis.date.classList.add('date-wrapper');\n\t\t\n\t\tthis.weekday = document.createElement('div');\n\t\tthis.weekday.classList.add('weekday');\n\t\tthis.weekday.textContent = date.day;\n\t\tthis.date.appendChild(this.weekday);\n\n\t\tthis.weekNumber = document.createElement('div');\n\t\tthis.weekNumber.classList.add('week-number');\n\t\tthis.weekNumber.textContent = date.number;\n\t\tthis.date.appendChild(this.weekNumber);\n\n\t\tthis.month = document.createElement('div');\n\t\tthis.month.classList.add('month');\n\t\tthis.month.textContent = date.month;\n\t\tthis.date.appendChild(this.month);\n\t\tthis.wrapper.appendChild(this.date);\n\n\t\tthis.msg = document.createElement('div');\n\t\tthis.msg.classList.add('my-day-status-msg');\n\t\tthis.msg.textContent = message;\n\t\tthis.wrapper.appendChild(this.msg);\n\t}\n}\n\nclass Task {\n\tconstructor(task) {\n\t\tthis.wrapper = document.createElement('div');\n\t\tthis.wrapper.classList.add('task-wrapper', `priority-${task.priority}`);\n\n\t\tlet taskId = task.title.toLowerCase().split(' ').join('-');\n\n\t\tthis.checkBtn = document.createElement('input');\n\t\tthis.checkBtn.classList.add('task-checkbox');\n\t\tthis.checkBtn.type = 'checkbox';\n\t\tthis.checkBtn.id = taskId;\n\t\tthis.checkBtn.name = taskId;\n\t\tthis.checkBtn.value = task.title;\n\t\tthis.wrapper.appendChild(this.checkBtn);\n\n\t\tthis.title = document.createElement('div');\n\t\tthis.title.classList.add('task-title');\n\t\tthis.title.textContent = task.title;\n\t\tthis.wrapper.appendChild(this.title);\n\n\t\tthis.description = document.createElement('div');\n\t\tthis.description.classList.add('task-description');\n\t\tthis.description.textContent = task.description;\n\t\tthis.wrapper.appendChild(this.description);\n\n\t\tthis.dueDate = document.createElement('div');\n\t\tthis.dueDate.classList.add('task-due-date');\n\t\tthis.dueDate.textContent = task.dueDate;\n\t\tthis.wrapper.appendChild(this.dueDate);\n\n\t\tthis.notes = document.createElement('div');\n\t\tthis.notes.classList.add('task-note');\n\t\tthis.notes.textContent = task.notes;\n\t\tthis.wrapper.appendChild(this.notes);\t\n\t}\n}\n\nclass ListForm {\n\tconstructor() {\n\t\tthis.form = document.createElement('form');\n\t\tthis.form.id = 'list-form';\n\t\tthis.form.noValidate = true;\n\n\t\tthis.input = document.createElement('input');\n\t\tthis.input.id = 'list-name';\n\t\tthis.input.name = 'list-name';\n\t\tthis.input.placeholder = 'Add list name';\n\t\tthis.form.appendChild(this.input);\n\n\t\tthis.btnWrapper = document.createElement('div');\n\t\tthis.btnWrapper.classList.add('btn-wrapper');\n\t\tthis.btnSave = document.createElement('button');\n\t\tthis.btnSave.id = 'add-list-btn';\n\t\tthis.btnSave.textContent = 'Save'\n\t\tthis.btnSave.addEventListener('click', addFolder);\n\t\tthis.btnWrapper.appendChild(this.btnSave);\n\n\t\tthis.btnCancel = document.createElement('button');\n\t\tthis.btnCancel.id = 'cancel-btn';\n\t\tthis.btnCancel.name = 'cancel-btn';\n\t\tthis.btnCancel.textContent = 'Cancel';\n\t\tthis.btnCancel.addEventListener('click', removeForm);\n\t\tthis.btnWrapper.appendChild(this.btnCancel);\n\n\t\tthis.form.appendChild(this.btnWrapper);\n\t}\n}\n\nfunction displayContent()\n{\n\tconst content = document.createElement('div');\n\tcontent.id = \"content\";\n\t\n\tconst mainIcon = document.createElement('img');\n\tmainIcon.src = _setting_png__WEBPACK_IMPORTED_MODULE_0__;\n\tmainIcon.id = 'setting-icon';\n\tmainIcon.addEventListener('mouseover', displaySidebar);\n\tdocument.body.appendChild(mainIcon);\n\n\tconst welcomeMsg = getWelcomeMessage();\n\tconst quote = getDailyQuote();\n\n\tconst header = new MyDayHeader(welcomeMsg, quote);\n\tcontent.appendChild(header.wrapper);\n\t\n\tconst date = getDate();\n\tconst myDayStatus = new MyDayStatus(date, getDayStatus());\n\tcontent.appendChild(myDayStatus.wrapper);\n\n\tconst tasksWrapper = document.createElement('div');\n\ttasksWrapper.classList.add('tasks-wrapper');\n\tconst tasks = getTasks();\n\ttasks.forEach(task => {\n\t\ttasksWrapper.appendChild(task.wrapper);\n\t});\n\tcontent.appendChild(tasksWrapper);\n\n\tconst inputWrapper = document.createElement('div');\n\tinputWrapper.classList.add('input-wrapper');\n\n\tconst icon = document.createElement('i');\n\ticon.classList.add('gg-add');\n\tinputWrapper.appendChild(icon);\n\n\tconst input = document.createElement('input');\n\tinput.id = 'task-input';\n\tinput.name = 'task-input';\n\tinput.placeholder = \"Add task\";\n\tinputWrapper.appendChild(input);\n\tcontent.appendChild(inputWrapper);\n\tcontent.addEventListener('mouseover', () => {\n\t\tlet sidebar = document.querySelector('.sidebar');\n\t\tif (sidebar != null)\n\t\t\tsidebar.remove();\n\t});\n\tdisplaySidebar();\n\n\tdocument.body.appendChild(content);\n}\n\n\nfunction removeUserList(e) {\n\tconst target = e.currentTarget.parentElement.querySelector('.folder-title').textContent;\n\n\tfor(let i = 0; i < userFolders.length; i++)\n\t{\n\t\tif (userFolders[i].title == target)\n\t\t{\n\t\t\tuserFolders.splice(i, 1);\n\t\t\tconsole.log(userFolders);\n\t\t\te.currentTarget.parentElement.remove();\n\t\t}\n\t}\n}\n\n\nfunction addFolder() {\n\tconst folderName = document.querySelector('#list-name').value;\n\tif (folderName != '')\n\t{\n\t\tuserFolders.push(\n\t\t{\n\t\t\t\"title\": folderName,\n\t\t\t\"iconClass\": \"\",\n\t\t\t\"files\": \"0\",\n\t\t});\n\t\tdocument.querySelector('.sidebar').remove();\n\t\tdisplaySidebar();\n\t\tremoveForm();\n\t}\n}\n\nfunction removeForm() {\n\tconst form = document.querySelector('form');\n\tif(form != null)\n\t\tform.remove();\n}\n\nfunction displayListForm() {\n\tif (document.querySelector('#list-form') == null)\n\t{\n\t\tconst listForm = new ListForm();\n\t\tdocument.body.appendChild(listForm.form);\n\t}\n}\n\nfunction displaySidebar() {\n\tif (document.querySelector('.sidebar') == null)\n\t{\n\t\tconst sidebar = new Sidebar();\n\t\tdocument.body.appendChild(sidebar.wrapper);\n\t}\n}\n\nfunction getTasks() {\n\tlet taskList = [];\n\tlet sortedTasks = getSortedTasks();\n\tsortedTasks.forEach(task => {\n\t\ttaskList.push(new Task(task));\n\t});\n\treturn taskList;\n};\n\nfunction getSortedTasks() {\n\tlet a = tasks;\n\tlet nTasks = a.length;\n\tlet i, j;\n\n\tfor (i = 0; i < nTasks; i++)\n\t{\n\t\tfor(j = i+1; j < nTasks; j++)\n\t\t{\n\t\t\tif (shouldSwap(a[i], a[j]))\n\t\t\t\tswap(a[i], a[j]);\n\t\t}\n\t}\n\treturn a;\n};\n\nfunction swap(a, b)\n{\n\tlet temp = '';\n\n\ttemp = a.title;\n\ta.title = b.title;\n\tb.title = temp;\n\n\ttemp = a.description;\n\ta.description = b.description;\n\tb.description = temp;\n\n\ttemp = a.dueDate;\n\ta.dueDate = b.dueDate;\n\tb.dueDate = temp;\n\n\ttemp = a.priority;\n\ta.priority = b.priority;\n\tb.priority = temp;\n\n\ttemp = a.notes;\n\ta.notes = b.notes;\n\tb.notes = temp;\n\n\ttemp = a.checklist;\n\ta.checklist = b.checklist;\n\tb.checklist = temp;\n}\n\nfunction shouldSwap(first, second) {\n\t// Compare the time of both and return true if a is scheduled later than b\n\tlet a = first.dueDate;\n\tlet b = second.dueDate;\n\tlet timeA = (a.split(' ')[1] == 'PM') ? Number(a.split(' ')[0].split(':').join('')) + 1200 : Number(a.split(' ')[0].split(':').join(''));\n\n\tlet timeB = (b.split(' ')[1] == 'PM') ? Number(b.split(' ')[0].split(':').join('')) + 1200 : Number(b.split(' ')[0].split(':').join(''));\n\n\treturn timeA > timeB;\n}\n\nfunction getDayStatus() {\n\treturn \"You have no event scheduled for today\";\n}\n\nfunction getDate() {\t\n\tconst d = new Date().toDateString().split(' ').splice(0,3);\n\treturn {\n\t\t\"day\": d[0],\n\t\t\"number\": Number(d[2]),\n\t\t\"month\": d[1],\n\t};\n}\n\nfunction getDailyQuote() {\n\treturn quotes[quoteIndex];\n}\n\nfunction getWelcomeMessage() {\n\treturn `Good ${getPeriodOfTheDay()}, ${getUsername()}`;\n};\n\n\nfunction getPeriodOfTheDay() {\n\tconst localeDate = new Date();\n\tconst localeTime = localeDate.toLocaleTimeString(undefined, {\n\t\thour: '2-digit',\n\t\tminute: '2-digit',\n\t\tsecond: '2-digit',\n\t});\n\n\tlet period = localeTime.split(' ')[1] \n\n\tif (period ==  \"AM\")\n\t\treturn \"morning\";\n\telse if (Number(localeTime.split(':')[0]) < 8)\n\t\treturn \"afternoon\";\n\telse\n\t\treturn \"night\";\n}\n\n\nfunction getUsername() {\n\treturn \"Neil\";\n};\n\nconst quotes = [\n\t\"Be so good no one can ignore you\",\n\t\"Remove doubts with actions\",\n];\nconst quoteIndex = Math.floor(Math.random() * quotes.length);\n\nconst tasks = [\n\t{\n\t\t\"title\": \"Practice Chinese\",\n\t\t\"description\": \"Practice writing Chinese characters for 30 minutes.\",\n\t\t\"dueDate\": \"9:00 PM\",\n\t\t\"priority\": \"1\",\n\t\t\"notes\": \"Chapter 5\",\n\t\t\"checklist\": \"\",\n\t},\n\t{\n\t\t\"title\": \"Cook dinner\",\n\t\t\"description\": \"Today we have noodles on the menu.\",\n\t\t\"dueDate\": \"3:00 PM\",\n\t\t\"priority\": \"2\",\n\t\t\"notes\": \"Use mushrooms, green pepper and onions\",\n\t\t\"checklist\": \"\",\n\t},\n\t{\n\t\t\"title\": \"Exercise\",\n\t\t\"description\": \"Five sets of 20 push-ups, five-sets of 20 squats\",\n\t\t\"dueDate\": \"5:00 PM\",\n\t\t\"priority\": \"3\",\n\t\t\"notes\": \"Go hard, go fast and be strong.\",\n\t\t\"checklist\": \"\",\n\t},\n\t{\n\t\t\"title\": \"Buy fruits\",\n\t\t\"description\": \"Buy 7 apples and some bananas for around 150 NTD.\",\n\t\t\"dueDate\": \"7:00 PM\",\n\t\t\"priority\": \"2\",\n\t\t\"notes\": \"Eat at least one fruit per day and you won't have to visit the med before a long time.\",\n\t\t\"checklist\": \"\",\n\t},\n];\n\n\n//# sourceURL=webpack://todo-list/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\n\n(0,_data_js__WEBPACK_IMPORTED_MODULE_1__.displayContent)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/setting.png":
/*!*************************!*\
  !*** ./src/setting.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d8c3bae9051e03eb1018.png\";\n\n//# sourceURL=webpack://todo-list/./src/setting.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;