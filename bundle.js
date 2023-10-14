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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root{\r\n    --merryweather: 'Merriweather', serif ;\r\n    --worksans: 'Work Sans', sans-serif ;\r\n\r\n    --red: #B31615;\r\n    --brown: #a66c48;\r\n    --white: #ebedef;\r\n    --grey: #c4c7cf;\r\n    --lightgrey: #dbe4e2;\r\n}\r\n\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml{\r\n    background-color: var(--lightgrey);\r\n}\r\n\r\np,ul{\r\n    font-family: var(--merryweather);\r\n}\r\nh1, h2, h3, h4, h5, h6{\r\n    font-family: var(--worksans);\r\n}\r\n\r\n#content{\r\n    height: 100%;\r\n    width: 100%;\r\n    min-width: 100%;\r\n\r\n}\r\n\r\n/* \r\n    LOGO\r\n*/\r\n.logo{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/* \r\n    HEADER\r\n*/\r\n.header{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100px;\r\n\r\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.541);\r\n\r\n    background-color: var(--white);\r\n\r\n}\r\n/* \r\n    NAVLINKS\r\n*/\r\n\r\n.navlinks{\r\n    display: flex ;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    min-width: 400px;\r\n    color: var(--red);\r\n    list-style: none;\r\n}\r\n\r\n.navlinks li:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n/* #home{}\r\n#menu{}\r\n#contacts{} */\r\n\r\n/* \r\n    MENU LIST\r\n*/\r\n\r\n.container-menu{\r\n    margin-top: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.menu1-list{\r\n    margin: 20px;\r\n\r\n    height: 600px;\r\n    width: 400px;\r\n    background-color: #B31615;\r\n\r\n    border-radius: 40px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n\r\n    list-style: none;\r\n}\r\n\r\n.menu2-list{\r\n    margin: 20px;\r\n\r\n    background-color: #a66c48;\r\n    height: 600px;\r\n    width: 400px;\r\n\r\n    border-radius: 40px;\r\n\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n\r\n    list-style: none;\r\n}\r\n\r\n.menu1-list,.menu2-list{\r\n    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.397);\r\n}\r\n\r\n.menu1-list li:nth-child(odd){\r\n    color: #c4c7cf;\r\n    font-size: 2em;\r\n    font-family: var(--worksans);\r\n}\r\n\r\n.menu1-list li:nth-child(even){\r\n    font-size: 0.9em;\r\n}\r\n\r\n.menu2-list li:nth-child(odd){\r\n    color: #c4c7cf;\r\n    font-size: 2em;\r\n    font-family: var(--worksans);\r\n}\r\n\r\n.menu2-list li:nth-child(even){\r\n    font-size: 0.9em;\r\n}\r\n\r\n.menu1-title,.menu2-title{\r\n    text-align: center;\r\n}\r\n\r\n\r\n/* \r\n    HOMEPAGE\r\n*/\r\n\r\n.container-home{\r\n    margin-top: 50px;\r\n    width: 100%;\r\n}\r\n\r\n.hero{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.hero p{\r\n    margin-left: 20px;\r\n    font-size: 1.5em;\r\n}\r\n\r\n.btn_container{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n.btn_container p{\r\n    font-size: 1.4em;\r\n}\r\n\r\n.prenota, .online-order{\r\n    margin-top: 20px;\r\n    border: 3px solid #B31615;\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.37);\r\n}\r\n\r\n.prenota:hover, .online-order:hover{\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n/* \r\n    CONTACTS\r\n*/\r\n\r\n.container_contacts{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    margin-top: 50px;\r\n}\r\n\r\n\r\n.contactMain{\r\n    background-color: #c4c7cf;\r\n    width: 500px;\r\n    height: 400px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n\r\n    border-radius: 20px;\r\n}\r\n\r\n.contactMain form{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.contactMain form > *{\r\n    margin-top: 20px;\r\n    height: 30px;\r\n}\r\n\r\n.contactMain form textarea{\r\n    max-width: 400px; \r\n    max-height: 100px;\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-with-webpack/./src/assets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-with-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-with-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-with-webpack/./src/assets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-with-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-with-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-with-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-with-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-with-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-with-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/contactPage.js":
/*!***************************************!*\
  !*** ./src/components/contactPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuPage */ \"./src/components/menuPage.js\");\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar */ \"./src/components/navBar.js\");\n\r\n\r\n\r\nlet contactPage = () =>{\r\n    let content = document.getElementById(\"content\");\r\n    let container_contacts = document.createElement('div');\r\n    container_contacts.setAttribute('class','container_contacts');\r\n\r\n    let contactMain = document.createElement(\"div\");\r\n    contactMain.setAttribute(\"class\", \"contactMain\");\r\n\r\n    contactMain.innerHTML = `\r\n    \r\n        <form>\r\n            <h1>Contattaci</h1>\r\n            <input id=\"name\" type=\"text\" placeholder=\"Your name*\" required>\r\n            <input id=\"email\" type=\"email\" placeholder=\"Your email*\" required>\r\n            <input id=\"phone\" type=\"text\" placeholder=\"Your phone\">\r\n            <textarea rows=\"5\" columns=\"5\" placeholder=\"message*\"></textarea>\r\n            <button type=\"submit\" >Send message</button>\r\n        </form>\r\n        `;\r\n    \r\n    container_contacts.append(contactMain);\r\n    content.append((0,_navBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), container_contacts);\r\n\r\n    return content\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://restaurant-with-webpack/./src/components/contactPage.js?");

/***/ }),

/***/ "./src/components/homePage.js":
/*!************************************!*\
  !*** ./src/components/homePage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/components/navBar.js\");\n/* harmony import */ var _assets_pizza_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/pizza.png */ \"./src/assets/pizza.png\");\n\r\n\r\n\r\nlet homePage = () =>{\r\n    let content = document.getElementById('content');\r\n\r\n    let container = document.createElement('div');\r\n    container.setAttribute('class','container-home');\r\n\r\n    let hero =  document.createElement('div');\r\n    hero.setAttribute('class','hero');\r\n\r\n\r\n    let img = document.createElement('img');\r\n    img.src = _assets_pizza_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    img.alt = 'pizza';\r\n    img.style.height = \"200px\";\r\n\r\n    let p = document.createElement('p');\r\n    p.textContent = \"La miglior pizzeria del mondo!\"\r\n\r\n    let btn_container = document.createElement('div');\r\n    btn_container.setAttribute('class','btn_container');\r\n\r\n\r\n\r\n\r\n    let btn1 = document.createElement('div');\r\n    btn1.setAttribute('class','prenota');\r\n    btn1.innerHTML = \"<p/>PRENOTA</p>\";\r\n\r\n    let btn2 = document.createElement('div');\r\n    btn2.setAttribute('class','online-order');\r\n    btn2.innerHTML = \"<p/>ORDINA ONLINE</p>\";\r\n\r\n    btn_container.append(btn1,btn2);\r\n    hero.append(img,p);\r\n\r\n    container.append(hero,btn_container);\r\n    content.append((0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),container);\r\n\r\n    return content\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-with-webpack/./src/components/homePage.js?");

/***/ }),

/***/ "./src/components/menuPage.js":
/*!************************************!*\
  !*** ./src/components/menuPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/components/navBar.js\");\n\r\n\r\nlet menupage = () =>{\r\n    let content = document.getElementById('content');\r\n\r\n    let container = document.createElement('div');\r\n    container.setAttribute('class','container-menu');\r\n\r\n\r\n    let div_menu1 = document.createElement('div');\r\n    div_menu1.setAttribute('class','menu1');\r\n\r\n    let div_menu2 = document.createElement('div');\r\n    div_menu2.setAttribute('class','menu2');\r\n\r\n    div_menu1.innerHTML = `\r\n        <h1 class=\"menu1-title\">PIZZE</h1>\r\n        <ul class=\"menu1-list\">\r\n            <li>Pizza Margherita</li>\r\n            <li>Lorem ipsum dolor sit amet.</li>\r\n\r\n            <li>Pizza Marinara</li>\r\n            <li>Lorem ipsum dolor sit amet.</li>\r\n\r\n            <li>Pizza 4 stagioni</li>\r\n            <li>Lorem ipsum dolor sit amet.</li>\r\n\r\n            <li>Pizza Diavola</li>\r\n            <li>Lorem ipsum dolor sit amet.</li>\r\n\r\n            <li>Pizza Capricciosa</li>\r\n            <li>Lorem ipsum dolor sit amet.</li>\r\n\r\n        </ul>\r\n    `;\r\n    div_menu2.innerHTML = `\r\n        <h1 class=\"menu2-title\">DOLCI</h1>\r\n        <ul class=\"menu2-list\">\r\n            <li>Bombolone</li>\r\n            <li>Lorem ipsum dolor sit amet.</li>\r\n            \r\n            <li>Muffin alla Nutella</li>\r\n            <li>Lorem ipsum dolor sit amet.</li>\r\n\r\n            <li>Canederli</li>\r\n            <li>Lorem ipsum dolor sit amet.</li>\r\n\r\n            <li>Crostata di Fragole</li>\r\n            <li>Lorem ipsum dolor sit amet.</li>\r\n\r\n            <li>Tiramisú</li>\r\n            <li>Lorem ipsum dolor sit amet.</li>\r\n\r\n        </ul>`;\r\n\r\n    container.append(div_menu1,div_menu2);\r\n    content.append((0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),container);\r\n\r\n    return content\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menupage);\n\n//# sourceURL=webpack://restaurant-with-webpack/./src/components/menuPage.js?");

/***/ }),

/***/ "./src/components/navBar.js":
/*!**********************************!*\
  !*** ./src/components/navBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/components/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/components/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/components/contactPage.js\");\n/* harmony import */ var _assets_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icon.png */ \"./src/assets/icon.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet navBar = () =>{\r\n    let header = document.createElement(\"header\");\r\n    header.setAttribute('class','header');\r\n    \r\n    let img = document.createElement('img');\r\n    img.setAttribute('class','logo');\r\n    img.style.width = '100px';\r\n    img.alt = 'logo';\r\n    img.src = _assets_icon_png__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\n    let navLinks = document.createElement('ul');\r\n    navLinks.setAttribute('class','navlinks');\r\n    navLinks.innerHTML = `\r\n        <li id='home'>HOME</li>\r\n        <li id='menu'>MENU</li>\r\n        <li id='contact'>CONTACTS</li>\r\n        `;\r\n\r\n    img.addEventListener('click', (e)=>{\r\n        content.innerHTML = \"\"\r\n        document.body.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    });\r\n\r\n    navLinks.addEventListener('click', (e)=>{\r\n        switch(e.target.id){\r\n            case 'home':\r\n                content.innerHTML = \"\"\r\n                document.body.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n                break;\r\n            case 'menu':\r\n                content.innerHTML = \"\"\r\n                document.body.appendChild((0,_menuPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n                break;\r\n            case 'contact':\r\n                content.innerHTML = \"\"\r\n                document.body.appendChild((0,_contactPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n                break;\r\n        };  \r\n\r\n    });\r\n\r\n\r\n    header.append(img,navLinks);\r\n    return header;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);\r\n\n\n//# sourceURL=webpack://restaurant-with-webpack/./src/components/navBar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _components_homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homePage */ \"./src/components/homePage.js\");\n\r\n\r\n// import menupage from './components/menuPage';\r\n\r\ndocument.body.appendChild((0,_components_homePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n\n\n//# sourceURL=webpack://restaurant-with-webpack/./src/index.js?");

/***/ }),

/***/ "./src/assets/icon.png":
/*!*****************************!*\
  !*** ./src/assets/icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9c16114d1c1fd6cae3e5.png\";\n\n//# sourceURL=webpack://restaurant-with-webpack/./src/assets/icon.png?");

/***/ }),

/***/ "./src/assets/pizza.png":
/*!******************************!*\
  !*** ./src/assets/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1930ccf39e0d3e0d09a5.png\";\n\n//# sourceURL=webpack://restaurant-with-webpack/./src/assets/pizza.png?");

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