/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayerBoardUI: () => (/* binding */ createPlayerBoardUI)
/* harmony export */ });
/* harmony import */ var _style_DOMController_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function createPlayerBoardUI(player, boardID) {
  let board = document.createElement("div");
  board.classList.add("board");
  board.id = boardID;

  //insert cells into the board and add Event Listeners to them
  for (let i = 0; i < player.gameboard.size; i++) {
    let row = document.createElement("div");
    for (let j = 0; j < player.gameboard.size; j++) {
      let cellUI = document.createElement("div");
      cellUI.id = `(${i},${j})`;
      cellUI.classList.add("cell");

      //cells containing ship
      if (player.gameboard.board[i][j].containsShip()) {
        cellUI.classList.add("ship-cell");
        if(player.name == "Computer"){
          cellUI.classList.add("computer-cell");
        }
      }

      //attacked cells
      if (player.gameboard.board[i][j].hasBeenShot) {
        cellUI.classList.add("hit-cell");
      }

      //sunk ship cells
      if(player.gameboard.board[i][j].containsShip()){
        if (player.gameboard.board[i][j].getShip().isSunk()) {
          cellUI.classList.add("sunk-cell");
        }
      }

      row.appendChild(cellUI);
    }
    board.appendChild(row);
  }
  return board;
}




/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_DOMController_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_DOMController_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_DOMController_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_DOMController_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_DOMController_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 3 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 5 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 8 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 9 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --bg-color: blueviolet;
  --grid-cell-color: gray;
  --grid-hit-cell-color: red;
  --grid-hit-ship-cell-color: green;
  --grid-sunk-cell-color: black;
  --hovored-cell-color: orange;
}

* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  background-color: var(--bg-color);
}

#wrapper-main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#wrapper-main > #header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
}

#wrapper-main > #wrapper-gameboard {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  height: 90%;
  background-color: var(--bg-color);
}

#wrapper-gameboard > div {
  margin: 0 auto;
}

.board {
  width: 500px;
  height: 500px;
  background-color: var(--grid-cell-color);
  border: 2px solid black;
  display: flex;
  flex-direction: column;
}

.cell {
  flex: 1;
  background-color: var(--grid-cell-color);
  border: 2px solid black;
}

.hit-cell {
  background-color: var(--grid-hit-cell-color);
}

/* remove this css in production */
.ship-cell {
  border: 2px solid greenyellow;
}

/* remove this css in production */
.ship-cell.computer-cell {
  border: 2px solid black;
}

.ship-cell.hit-cell {
  background-color: var(--grid-hit-ship-cell-color);
}

.ship-cell.sunk-cell {
  background-color: var(--grid-sunk-cell-color);
}

.hovered-cell{
  background-color: var(--hovored-cell-color);
}

.board > div {
  display: flex;
  flex: 1;
}

#place-button,
#axis-button {
  margin: 80px 0;
  padding: 20px;
  font-size: 1.2rem;
  background-color: gray;
}
`, "",{"version":3,"sources":["webpack://./src/style/DOMController.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,0BAA0B;EAC1B,iCAAiC;EACjC,6BAA6B;EAC7B,4BAA4B;AAC9B;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,WAAW;EACX,iCAAiC;AACnC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,wCAAwC;EACxC,uBAAuB;EACvB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,OAAO;EACP,wCAAwC;EACxC,uBAAuB;AACzB;;AAEA;EACE,4CAA4C;AAC9C;;AAEA,kCAAkC;AAClC;EACE,6BAA6B;AAC/B;;AAEA,kCAAkC;AAClC;EACE,uBAAuB;AACzB;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,OAAO;AACT;;AAEA;;EAEE,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,sBAAsB;AACxB","sourcesContent":[":root {\n  --bg-color: blueviolet;\n  --grid-cell-color: gray;\n  --grid-hit-cell-color: red;\n  --grid-hit-ship-cell-color: green;\n  --grid-sunk-cell-color: black;\n  --hovored-cell-color: orange;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  background-color: var(--bg-color);\n}\n\n#wrapper-main {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n#wrapper-main > #header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10%;\n}\n\n#wrapper-main > #wrapper-gameboard {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n  height: 90%;\n  background-color: var(--bg-color);\n}\n\n#wrapper-gameboard > div {\n  margin: 0 auto;\n}\n\n.board {\n  width: 500px;\n  height: 500px;\n  background-color: var(--grid-cell-color);\n  border: 2px solid black;\n  display: flex;\n  flex-direction: column;\n}\n\n.cell {\n  flex: 1;\n  background-color: var(--grid-cell-color);\n  border: 2px solid black;\n}\n\n.hit-cell {\n  background-color: var(--grid-hit-cell-color);\n}\n\n/* remove this css in production */\n.ship-cell {\n  border: 2px solid greenyellow;\n}\n\n/* remove this css in production */\n.ship-cell.computer-cell {\n  border: 2px solid black;\n}\n\n.ship-cell.hit-cell {\n  background-color: var(--grid-hit-ship-cell-color);\n}\n\n.ship-cell.sunk-cell {\n  background-color: var(--grid-sunk-cell-color);\n}\n\n.hovered-cell{\n  background-color: var(--hovored-cell-color);\n}\n\n.board > div {\n  display: flex;\n  flex: 1;\n}\n\n#place-button,\n#axis-button {\n  margin: 80px 0;\n  padding: 20px;\n  font-size: 1.2rem;\n  background-color: gray;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 11 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.containingCells = []; //stores which cells contain this ship
  }

  hit() {
    this.hitCount++;
  }

  isSunk() {
    return this.hitCount == this.length;
  }

  insertIntoContainingCells(cell){
    this.containingCells.push(cell);
  }

  getContainingCells(){
    return this.containingCells;
  }
}




/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);


class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
  }
}



/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = [];
    this.shipArray = [];
    for (let i = 0; i < this.size; i++) {
      let row = [];
      for (let j = 0; j < this.size; j++) {
        let cell = new _Cell__WEBPACK_IMPORTED_MODULE_0__.Cell(i, j);
        row.push(cell);
      }
      this.board.push(row);
    }
  }

  getBoardSize() {
    return this.size;
  }

  //horizontal placement : axis= 0
  //vertical placement : axis= 1
  shipPlacementCheck(ship, cell, axis, beingHovered=0) {
    let cellXorY = axis == 0 ? cell.y : cell.x;
    if (cellXorY + ship.length - 1 >= this.size) {
      return 0;
    } else {
      let hoveredCells = [];
      for (let i = cellXorY; i < cellXorY + ship.length; i++) {
        let currentCell;
        if (axis) {
          currentCell = this.board[i][cell.y];
        } else {
          currentCell = this.board[cell.x][i];
        }
        if(beingHovered){
          hoveredCells.push(currentCell);
        }
        if (currentCell.containsShip()) {
          return 0;
        }
      }
      return hoveredCells;
    }
  }

  //horizontal placement : axis= 0
  //vertical placement : axis= 1
  placeShipAt(ship, cell, axis) {
    this.shipArray.push(ship);
    this.insertShipOntoCells(ship, cell, axis);
  }

  //insert ship on all cells starting from startCell until
  //the length of the ship
  insertShipOntoCells(ship, startCell, axis) {
    for (let i = 0; i < ship.length; i++) {
      let cell;
      if (axis == 1) {
        cell = this.board[startCell.x + i][startCell.y];
      } else {
        cell = this.board[startCell.x][startCell.y + i];
      }
      cell.insertShip(ship);
      ship.insertIntoContainingCells(cell);
    }
  }

  receiveAttack(x, y) {
    this.board[x][y].hasBeenShot = true;
    if (!this.board[x][y].ship) {
      return 0;
    } else {
      this.board[x][y].ship.hit();
      return 1;
    }
  }

  haveAllShipsSunk() {
    for (let i = 0; i < this.shipArray.length; i++) {
      if (!this.shipArray[i].isSunk()) {
        return false;
      }
    }
    return true;
  }
}




/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cell: () => (/* binding */ Cell)
/* harmony export */ });
class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ship = null;
    this.hasBeenShot = false;
  }

  getCoordinates(){
    return {x : this.x, y: this.y};
  }

  insertShip(ship) {
    this.ship = ship;
  }

  containsShip(){
    return this.ship != null;
  }

  getShip(){
    return this.ship;
  }

  isDead(){
    return this.hasBeenShot;
  }
}




/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOMController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);




let mainWrapper;
let boardWrapper;

let human;
let computer;

let humanBoardUI;
let computerBoardUI;
let humanTurn = true;
let displayArea;
let shipLengths = [2, 3, 3, 4, 5];
let totalShipsToBePlaced = shipLengths.length;
let currentAxis = 0;
let gameStarted = false;
let placedShipCount;
let controllerDiv;

//initialisation of human board
function humanSetup() {
  let placeButton;
  let axisButton;
  controllerDiv = document.createElement("div");
  controllerDiv.style.cssText = `
    display: flex;
    flex-direction: column;`;

  placeButton = document.createElement("button");
  placeButton.id = "place-button";
  placeButton.textContent = "Place ships";

  axisButton = document.createElement("button");
  axisButton.id = "axis-button";
  axisButton.textContent = "Change axis";

  placeButton.addEventListener("click", () => {
    placeButton.style.visibility = "hidden";
    displayArea.textContent = "Place your ships, human!";
    gameStarted = true;
    renderPlayerBoardsUI();
  });

  axisButton.addEventListener("click", () => {
    currentAxis = currentAxis == 0 ? 1 : 0;
  });

  controllerDiv.appendChild(placeButton);
  controllerDiv.appendChild(axisButton);
}

//initialisation of computer board
function computerSetup() {
  let size = computer.gameboard.getBoardSize();
  let shipLengths = [2, 3, 3, 4, 5];
  let totalShipCount = shipLengths.length;

  function getRandomValidCellFor(ship, axis) {
    while (true) {
      let x = Math.floor(Math.random() * size);
      let y = Math.floor(Math.random() * size);
      let cell = computer.gameboard.board[x][y];
      if (computer.gameboard.shipPlacementCheck(ship, cell, axis)) {
        return cell;
      }
    }
  }

  //place randomly created ships on the board
  for (let i = 0; i < totalShipCount; i++) {
    let len = shipLengths.pop();
    let ship = new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(len);
    let axis = Math.round(Math.random());
    let cell = getRandomValidCellFor(ship, axis);
    computer.gameboard.placeShipAt(ship, cell, axis);
  }
}

//temporary display feature - to be deleted later
function displayAreaSetup() {
  let displayDiv = document.createElement("div");
  displayDiv.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;`;

  displayArea = document.createElement("div");
  displayArea.style.cssText = `
    color: white;
    font-size: 40px;
    height: 100px;`;

  displayDiv.appendChild(displayArea);
  mainWrapper.appendChild(displayDiv);
}

//multiplayer feature - to be implemented later
// function disableClickBasedOnPlayerTurn() {
//   if (humanTurn) {
//     humanBoardUI.style.pointerEvents = 'none';
//     computerBoardUI.style.pointerEvents = 'auto';
//   }
//   else{
//     humanBoardUI.style.pointerEvents = 'auto';
//     computerBoardUI.style.pointerEvents = 'none';
//   }
// }

function swapTurns() {
  humanTurn = !humanTurn;
  displayArea.textContent = humanTurn ? "Human's turn" : "Computer's turn";
}

function computerPlaysAMove() {
  if (!humanTurn) {
    setTimeout(() => {
      computerAttackOn(human);
      swapTurns();
      let winner = getWinnerIfGameOver();
      if (winner) {
        winnerDeclaration(winner);
      }
    }, 700);
  }
}

function getAttackableCells(playerBoard) {
  let attackableCells = [];
  let size = playerBoard.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let currentCell = playerBoard[i][j];
      if (!currentCell.isDead()) {
        attackableCells.push(currentCell);
      }
    }
  }
  return attackableCells;
}

function computerAttackOn(player) {
  let attackableCells = getAttackableCells(player.gameboard.board);
  let cellToAttack =
    attackableCells[Math.floor(Math.random() * attackableCells.length)];
  let coordinates = cellToAttack.getCoordinates();
  player.gameboard.receiveAttack(coordinates.x, coordinates.y);
  renderPlayerBoardsUI();
}

function gameplay() {
  placedShipCount = 0;
  human = new _Player__WEBPACK_IMPORTED_MODULE_2__.Player("Human");
  computer = new _Player__WEBPACK_IMPORTED_MODULE_2__.Player("Computer");
  humanSetup();
  computerSetup();
  displayAreaSetup();
  renderPlayerBoardsUI();

  //the following are functions used in testing
  //   defaultHitsOnComputer();
  //   defaultHitsOnHuman();
}

function renderPlayerBoardsUI() {
  let totalShipCount = shipLengths.length;
  let hoveredCells;

  boardWrapper.innerHTML = "";
  humanBoardUI = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.createPlayerBoardUI)(human, "human-board");
  computerBoardUI = (0,_DOMController__WEBPACK_IMPORTED_MODULE_0__.createPlayerBoardUI)(computer, "computer-board");

  if (gameStarted) {
    humanBoardUI.addEventListener("mouseover", (event) => {
      let id = event.target.id;
      let x = id[1];
      let y = id[3];

      //ignores unnecessary target events
      if (isNaN(x)) {
        return;
      }

      // place ships one-by-one on the board
      for (let i = 0; i < totalShipCount; i++) {
        let len = shipLengths[shipLengths.length - 1];
        let ship = new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(len);
        let cell = human.gameboard.board[x][y];
        let beingHovered = 1;
        hoveredCells = human.gameboard.shipPlacementCheck(
          ship,
          cell,
          currentAxis,
          beingHovered
        );
        if (hoveredCells) {
          for (let i = 0; i < hoveredCells.length; i++) {
            let x = hoveredCells[i].getCoordinates().x;
            let y = hoveredCells[i].getCoordinates().y;
            humanBoardUI.children[x].children[y].classList.add("hovered-cell");
          }
        }
      }
    });

    humanBoardUI.addEventListener("mouseout", () => {
      if (hoveredCells) {
        for (let i = 0; i < hoveredCells.length; i++) {
          let x = hoveredCells[i].getCoordinates().x;
          let y = hoveredCells[i].getCoordinates().y;
          humanBoardUI.children[x].children[y].classList.remove("hovered-cell");
        }
      }
    });

    humanBoardUI.addEventListener("click", () => {
      if (hoveredCells) {
        let ship = new _Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(shipLengths.pop());
        human.gameboard.placeShipAt(ship, hoveredCells[0], currentAxis);
        placedShipCount++;
        if (placedShipCount == totalShipsToBePlaced) {
          displayArea.textContent = "Human's turn";
        }
      }
    });
  }

  computerBoardUI.addEventListener("click", (event) => {
    //the following few lines will fetch coordinates from a board
    //less than 10 in size
    let id = event.target.id;
    let x = id[1];
    let y = id[3];

    if (humanTurn) {
      let cell = computer.gameboard.board[x][y];
      if (cell.isDead()) {
        console.log("Cell has been hit already");
      } else {
        computer.gameboard.receiveAttack(x, y);
        swapTurns();
        let winner = getWinnerIfGameOver();
        if (!winner) {
          computerPlaysAMove();
        } else {
          winnerDeclaration(winner);
        }
      }
    }
  });

  boardWrapper.appendChild(humanBoardUI);
  boardWrapper.appendChild(controllerDiv);
  boardWrapper.appendChild(computerBoardUI);
}

function getWinnerIfGameOver() {
  let players = [human, computer];
  let winner = null;
  players.forEach((player) => {
    if (player.gameboard.haveAllShipsSunk()) {
      winner = player;
      return;
    }
  });
  return winner;
}

function winnerDeclaration(player) {
  console.log("GAME OVER");
  if (player.name == "Human") {
    displayArea.textContent = "Computer Wins!";
  } else {
    displayArea.textContent = "Human Wins!";
  }
  boardWrapper.innerHTML = "";
}

//temporary function for tests - to be deleted later
function defaultHitsOnComputer() {
  computer.gameboard.receiveAttack(0, 0);
  computer.gameboard.receiveAttack(0, 1);

  computer.gameboard.receiveAttack(0, 5);
  computer.gameboard.receiveAttack(1, 5);
  computer.gameboard.receiveAttack(2, 5);
  computer.gameboard.receiveAttack(3, 5);

  computer.gameboard.receiveAttack(3, 3);
  computer.gameboard.receiveAttack(4, 3);
  computer.gameboard.receiveAttack(5, 3);

  computer.gameboard.receiveAttack(5, 1);
  computer.gameboard.receiveAttack(6, 1);
  computer.gameboard.receiveAttack(7, 1);
  computer.gameboard.receiveAttack(8, 1);
  computer.gameboard.receiveAttack(9, 1);

  computer.gameboard.receiveAttack(7, 5);
  computer.gameboard.receiveAttack(7, 6);
  computer.gameboard.receiveAttack(7, 7);
  computer.gameboard.receiveAttack(7, 8);
  renderPlayerBoardsUI();
}

function defaultHitsOnHuman() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 10; j++) {
      human.gameboard.receiveAttack(i, j);
    }
  }
  human.gameboard.receiveAttack(9, 0);
  human.gameboard.receiveAttack(9, 1);
  human.gameboard.receiveAttack(9, 2);
  human.gameboard.receiveAttack(9, 3);
  human.gameboard.receiveAttack(9, 4);
  human.gameboard.receiveAttack(9, 5);
  human.gameboard.receiveAttack(9, 7);
  human.gameboard.receiveAttack(9, 8);
  human.gameboard.receiveAttack(9, 9);
  renderPlayerBoardsUI();
}

mainWrapper = document.querySelector("#wrapper-main");
boardWrapper = document.querySelector("#wrapper-gameboard");

boardWrapper.addEventListener("click", () => {
  renderPlayerBoardsUI();
});

gameplay();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx1QkFBdUIsdUNBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlL0RPTUNvbnRyb2xsZXIuY3NzP2QzNTIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGUvRE9NQ29udHJvbGxlci5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL0NlbGwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUvRE9NQ29udHJvbGxlci5jc3NcIjtcblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyQm9hcmRVSShwbGF5ZXIsIGJvYXJkSUQpIHtcbiAgbGV0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9hcmQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuICBib2FyZC5pZCA9IGJvYXJkSUQ7XG5cbiAgLy9pbnNlcnQgY2VsbHMgaW50byB0aGUgYm9hcmQgYW5kIGFkZCBFdmVudCBMaXN0ZW5lcnMgdG8gdGhlbVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5nYW1lYm9hcmQuc2l6ZTsgaSsrKSB7XG4gICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIuZ2FtZWJvYXJkLnNpemU7IGorKykge1xuICAgICAgbGV0IGNlbGxVSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjZWxsVUkuaWQgPSBgKCR7aX0sJHtqfSlgO1xuICAgICAgY2VsbFVJLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuXG4gICAgICAvL2NlbGxzIGNvbnRhaW5pbmcgc2hpcFxuICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuYm9hcmRbaV1bal0uY29udGFpbnNTaGlwKCkpIHtcbiAgICAgICAgY2VsbFVJLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWNlbGxcIik7XG4gICAgICAgIGlmKHBsYXllci5uYW1lID09IFwiQ29tcHV0ZXJcIil7XG4gICAgICAgICAgY2VsbFVJLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1jZWxsXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vYXR0YWNrZWQgY2VsbHNcbiAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmhhc0JlZW5TaG90KSB7XG4gICAgICAgIGNlbGxVSS5jbGFzc0xpc3QuYWRkKFwiaGl0LWNlbGxcIik7XG4gICAgICB9XG5cbiAgICAgIC8vc3VuayBzaGlwIGNlbGxzXG4gICAgICBpZihwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmNvbnRhaW5zU2hpcCgpKXtcbiAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuYm9hcmRbaV1bal0uZ2V0U2hpcCgpLmlzU3VuaygpKSB7XG4gICAgICAgICAgY2VsbFVJLmNsYXNzTGlzdC5hZGQoXCJzdW5rLWNlbGxcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGxVSSk7XG4gICAgfVxuICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbiAgcmV0dXJuIGJvYXJkO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQbGF5ZXJCb2FyZFVJIH07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vRE9NQ29udHJvbGxlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ET01Db250cm9sbGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1iZy1jb2xvcjogYmx1ZXZpb2xldDtcbiAgLS1ncmlkLWNlbGwtY29sb3I6IGdyYXk7XG4gIC0tZ3JpZC1oaXQtY2VsbC1jb2xvcjogcmVkO1xuICAtLWdyaWQtaGl0LXNoaXAtY2VsbC1jb2xvcjogZ3JlZW47XG4gIC0tZ3JpZC1zdW5rLWNlbGwtY29sb3I6IGJsYWNrO1xuICAtLWhvdm9yZWQtY2VsbC1jb2xvcjogb3JhbmdlO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG59XG5cbiN3cmFwcGVyLW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiN3cmFwcGVyLW1haW4gPiAjaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAlO1xufVxuXG4jd3JhcHBlci1tYWluID4gI3dyYXBwZXItZ2FtZWJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGhlaWdodDogOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG59XG5cbiN3cmFwcGVyLWdhbWVib2FyZCA+IGRpdiB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYm9hcmQge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQtY2VsbC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2VsbCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQtY2VsbC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaGl0LWNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkLWhpdC1jZWxsLWNvbG9yKTtcbn1cblxuLyogcmVtb3ZlIHRoaXMgY3NzIGluIHByb2R1Y3Rpb24gKi9cbi5zaGlwLWNlbGwge1xuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdztcbn1cblxuLyogcmVtb3ZlIHRoaXMgY3NzIGluIHByb2R1Y3Rpb24gKi9cbi5zaGlwLWNlbGwuY29tcHV0ZXItY2VsbCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4uc2hpcC1jZWxsLmhpdC1jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JpZC1oaXQtc2hpcC1jZWxsLWNvbG9yKTtcbn1cblxuLnNoaXAtY2VsbC5zdW5rLWNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkLXN1bmstY2VsbC1jb2xvcik7XG59XG5cbi5ob3ZlcmVkLWNlbGx7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdm9yZWQtY2VsbC1jb2xvcik7XG59XG5cbi5ib2FyZCA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG5cbiNwbGFjZS1idXR0b24sXG4jYXhpcy1idXR0b24ge1xuICBtYXJnaW46IDgwcHggMDtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9ET01Db250cm9sbGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLHdDQUF3QztFQUN4Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBLGtDQUFrQztBQUNsQztFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0FBQ1Q7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmctY29sb3I6IGJsdWV2aW9sZXQ7XFxuICAtLWdyaWQtY2VsbC1jb2xvcjogZ3JheTtcXG4gIC0tZ3JpZC1oaXQtY2VsbC1jb2xvcjogcmVkO1xcbiAgLS1ncmlkLWhpdC1zaGlwLWNlbGwtY29sb3I6IGdyZWVuO1xcbiAgLS1ncmlkLXN1bmstY2VsbC1jb2xvcjogYmxhY2s7XFxuICAtLWhvdm9yZWQtY2VsbC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbiN3cmFwcGVyLW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiN3cmFwcGVyLW1haW4gPiAjaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwJTtcXG59XFxuXFxuI3dyYXBwZXItbWFpbiA+ICN3cmFwcGVyLWdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbiN3cmFwcGVyLWdhbWVib2FyZCA+IGRpdiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmJvYXJkIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmlkLWNlbGwtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNlbGwge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQtY2VsbC1jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhpdC1jZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQtaGl0LWNlbGwtY29sb3IpO1xcbn1cXG5cXG4vKiByZW1vdmUgdGhpcyBjc3MgaW4gcHJvZHVjdGlvbiAqL1xcbi5zaGlwLWNlbGwge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7XFxufVxcblxcbi8qIHJlbW92ZSB0aGlzIGNzcyBpbiBwcm9kdWN0aW9uICovXFxuLnNoaXAtY2VsbC5jb21wdXRlci1jZWxsIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc2hpcC1jZWxsLmhpdC1jZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQtaGl0LXNoaXAtY2VsbC1jb2xvcik7XFxufVxcblxcbi5zaGlwLWNlbGwuc3Vuay1jZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyaWQtc3Vuay1jZWxsLWNvbG9yKTtcXG59XFxuXFxuLmhvdmVyZWQtY2VsbHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdm9yZWQtY2VsbC1jb2xvcik7XFxufVxcblxcbi5ib2FyZCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuI3BsYWNlLWJ1dHRvbixcXG4jYXhpcy1idXR0b24ge1xcbiAgbWFyZ2luOiA4MHB4IDA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdENvdW50ID0gMDtcbiAgICB0aGlzLmNvbnRhaW5pbmdDZWxscyA9IFtdOyAvL3N0b3JlcyB3aGljaCBjZWxscyBjb250YWluIHRoaXMgc2hpcFxuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0Q291bnQrKztcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRDb3VudCA9PSB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIGluc2VydEludG9Db250YWluaW5nQ2VsbHMoY2VsbCl7XG4gICAgdGhpcy5jb250YWluaW5nQ2VsbHMucHVzaChjZWxsKTtcbiAgfVxuXG4gIGdldENvbnRhaW5pbmdDZWxscygpe1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5pbmdDZWxscztcbiAgfVxufVxuXG5leHBvcnQgeyBTaGlwIH07XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdHlwZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxufVxuXG5leHBvcnQge1BsYXllcn0iLCJpbXBvcnQgeyBDZWxsIH0gZnJvbSBcIi4vQ2VsbFwiO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcihzaXplID0gMTApIHtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICB0aGlzLnNoaXBBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcbiAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaXplOyBqKyspIHtcbiAgICAgICAgbGV0IGNlbGwgPSBuZXcgQ2VsbChpLCBqKTtcbiAgICAgICAgcm93LnB1c2goY2VsbCk7XG4gICAgICB9XG4gICAgICB0aGlzLmJvYXJkLnB1c2gocm93KTtcbiAgICB9XG4gIH1cblxuICBnZXRCb2FyZFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuXG4gIC8vaG9yaXpvbnRhbCBwbGFjZW1lbnQgOiBheGlzPSAwXG4gIC8vdmVydGljYWwgcGxhY2VtZW50IDogYXhpcz0gMVxuICBzaGlwUGxhY2VtZW50Q2hlY2soc2hpcCwgY2VsbCwgYXhpcywgYmVpbmdIb3ZlcmVkPTApIHtcbiAgICBsZXQgY2VsbFhvclkgPSBheGlzID09IDAgPyBjZWxsLnkgOiBjZWxsLng7XG4gICAgaWYgKGNlbGxYb3JZICsgc2hpcC5sZW5ndGggLSAxID49IHRoaXMuc2l6ZSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBob3ZlcmVkQ2VsbHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSBjZWxsWG9yWTsgaSA8IGNlbGxYb3JZICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudENlbGw7XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgY3VycmVudENlbGwgPSB0aGlzLmJvYXJkW2ldW2NlbGwueV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudENlbGwgPSB0aGlzLmJvYXJkW2NlbGwueF1baV07XG4gICAgICAgIH1cbiAgICAgICAgaWYoYmVpbmdIb3ZlcmVkKXtcbiAgICAgICAgICBob3ZlcmVkQ2VsbHMucHVzaChjdXJyZW50Q2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRDZWxsLmNvbnRhaW5zU2hpcCgpKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBob3ZlcmVkQ2VsbHM7XG4gICAgfVxuICB9XG5cbiAgLy9ob3Jpem9udGFsIHBsYWNlbWVudCA6IGF4aXM9IDBcbiAgLy92ZXJ0aWNhbCBwbGFjZW1lbnQgOiBheGlzPSAxXG4gIHBsYWNlU2hpcEF0KHNoaXAsIGNlbGwsIGF4aXMpIHtcbiAgICB0aGlzLnNoaXBBcnJheS5wdXNoKHNoaXApO1xuICAgIHRoaXMuaW5zZXJ0U2hpcE9udG9DZWxscyhzaGlwLCBjZWxsLCBheGlzKTtcbiAgfVxuXG4gIC8vaW5zZXJ0IHNoaXAgb24gYWxsIGNlbGxzIHN0YXJ0aW5nIGZyb20gc3RhcnRDZWxsIHVudGlsXG4gIC8vdGhlIGxlbmd0aCBvZiB0aGUgc2hpcFxuICBpbnNlcnRTaGlwT250b0NlbGxzKHNoaXAsIHN0YXJ0Q2VsbCwgYXhpcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNlbGw7XG4gICAgICBpZiAoYXhpcyA9PSAxKSB7XG4gICAgICAgIGNlbGwgPSB0aGlzLmJvYXJkW3N0YXJ0Q2VsbC54ICsgaV1bc3RhcnRDZWxsLnldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbCA9IHRoaXMuYm9hcmRbc3RhcnRDZWxsLnhdW3N0YXJ0Q2VsbC55ICsgaV07XG4gICAgICB9XG4gICAgICBjZWxsLmluc2VydFNoaXAoc2hpcCk7XG4gICAgICBzaGlwLmluc2VydEludG9Db250YWluaW5nQ2VsbHMoY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgdGhpcy5ib2FyZFt4XVt5XS5oYXNCZWVuU2hvdCA9IHRydWU7XG4gICAgaWYgKCF0aGlzLmJvYXJkW3hdW3ldLnNoaXApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLnNoaXAuaGl0KCk7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cblxuICBoYXZlQWxsU2hpcHNTdW5rKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5zaGlwQXJyYXlbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImNsYXNzIENlbGwge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuc2hpcCA9IG51bGw7XG4gICAgdGhpcy5oYXNCZWVuU2hvdCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0Q29vcmRpbmF0ZXMoKXtcbiAgICByZXR1cm4ge3ggOiB0aGlzLngsIHk6IHRoaXMueX07XG4gIH1cblxuICBpbnNlcnRTaGlwKHNoaXApIHtcbiAgICB0aGlzLnNoaXAgPSBzaGlwO1xuICB9XG5cbiAgY29udGFpbnNTaGlwKCl7XG4gICAgcmV0dXJuIHRoaXMuc2hpcCAhPSBudWxsO1xuICB9XG5cbiAgZ2V0U2hpcCgpe1xuICAgIHJldHVybiB0aGlzLnNoaXA7XG4gIH1cblxuICBpc0RlYWQoKXtcbiAgICByZXR1cm4gdGhpcy5oYXNCZWVuU2hvdDtcbiAgfVxufVxuXG5leHBvcnQgeyBDZWxsIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBjcmVhdGVQbGF5ZXJCb2FyZFVJIH0gZnJvbSBcIi4vRE9NQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuXG5sZXQgbWFpbldyYXBwZXI7XG5sZXQgYm9hcmRXcmFwcGVyO1xuXG5sZXQgaHVtYW47XG5sZXQgY29tcHV0ZXI7XG5cbmxldCBodW1hbkJvYXJkVUk7XG5sZXQgY29tcHV0ZXJCb2FyZFVJO1xubGV0IGh1bWFuVHVybiA9IHRydWU7XG5sZXQgZGlzcGxheUFyZWE7XG5sZXQgc2hpcExlbmd0aHMgPSBbMiwgMywgMywgNCwgNV07XG5sZXQgdG90YWxTaGlwc1RvQmVQbGFjZWQgPSBzaGlwTGVuZ3Rocy5sZW5ndGg7XG5sZXQgY3VycmVudEF4aXMgPSAwO1xubGV0IGdhbWVTdGFydGVkID0gZmFsc2U7XG5sZXQgcGxhY2VkU2hpcENvdW50O1xubGV0IGNvbnRyb2xsZXJEaXY7XG5cbi8vaW5pdGlhbGlzYXRpb24gb2YgaHVtYW4gYm9hcmRcbmZ1bmN0aW9uIGh1bWFuU2V0dXAoKSB7XG4gIGxldCBwbGFjZUJ1dHRvbjtcbiAgbGV0IGF4aXNCdXR0b247XG4gIGNvbnRyb2xsZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250cm9sbGVyRGl2LnN0eWxlLmNzc1RleHQgPSBgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO2A7XG5cbiAgcGxhY2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwbGFjZUJ1dHRvbi5pZCA9IFwicGxhY2UtYnV0dG9uXCI7XG4gIHBsYWNlQnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGFjZSBzaGlwc1wiO1xuXG4gIGF4aXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBheGlzQnV0dG9uLmlkID0gXCJheGlzLWJ1dHRvblwiO1xuICBheGlzQnV0dG9uLnRleHRDb250ZW50ID0gXCJDaGFuZ2UgYXhpc1wiO1xuXG4gIHBsYWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGxhY2VCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgZGlzcGxheUFyZWEudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgc2hpcHMsIGh1bWFuIVwiO1xuICAgIGdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICByZW5kZXJQbGF5ZXJCb2FyZHNVSSgpO1xuICB9KTtcblxuICBheGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY3VycmVudEF4aXMgPSBjdXJyZW50QXhpcyA9PSAwID8gMSA6IDA7XG4gIH0pO1xuXG4gIGNvbnRyb2xsZXJEaXYuYXBwZW5kQ2hpbGQocGxhY2VCdXR0b24pO1xuICBjb250cm9sbGVyRGl2LmFwcGVuZENoaWxkKGF4aXNCdXR0b24pO1xufVxuXG4vL2luaXRpYWxpc2F0aW9uIG9mIGNvbXB1dGVyIGJvYXJkXG5mdW5jdGlvbiBjb21wdXRlclNldHVwKCkge1xuICBsZXQgc2l6ZSA9IGNvbXB1dGVyLmdhbWVib2FyZC5nZXRCb2FyZFNpemUoKTtcbiAgbGV0IHNoaXBMZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdO1xuICBsZXQgdG90YWxTaGlwQ291bnQgPSBzaGlwTGVuZ3Rocy5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tVmFsaWRDZWxsRm9yKHNoaXAsIGF4aXMpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcbiAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSk7XG4gICAgICBsZXQgY2VsbCA9IGNvbXB1dGVyLmdhbWVib2FyZC5ib2FyZFt4XVt5XTtcbiAgICAgIGlmIChjb21wdXRlci5nYW1lYm9hcmQuc2hpcFBsYWNlbWVudENoZWNrKHNoaXAsIGNlbGwsIGF4aXMpKSB7XG4gICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vcGxhY2UgcmFuZG9tbHkgY3JlYXRlZCBzaGlwcyBvbiB0aGUgYm9hcmRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFNoaXBDb3VudDsgaSsrKSB7XG4gICAgbGV0IGxlbiA9IHNoaXBMZW5ndGhzLnBvcCgpO1xuICAgIGxldCBzaGlwID0gbmV3IFNoaXAobGVuKTtcbiAgICBsZXQgYXhpcyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgbGV0IGNlbGwgPSBnZXRSYW5kb21WYWxpZENlbGxGb3Ioc2hpcCwgYXhpcyk7XG4gICAgY29tcHV0ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcEF0KHNoaXAsIGNlbGwsIGF4aXMpO1xuICB9XG59XG5cbi8vdGVtcG9yYXJ5IGRpc3BsYXkgZmVhdHVyZSAtIHRvIGJlIGRlbGV0ZWQgbGF0ZXJcbmZ1bmN0aW9uIGRpc3BsYXlBcmVhU2V0dXAoKSB7XG4gIGxldCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGlzcGxheURpdi5zdHlsZS5jc3NUZXh0ID0gYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtgO1xuXG4gIGRpc3BsYXlBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGlzcGxheUFyZWEuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGhlaWdodDogMTAwcHg7YDtcblxuICBkaXNwbGF5RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlBcmVhKTtcbiAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQoZGlzcGxheURpdik7XG59XG5cbi8vbXVsdGlwbGF5ZXIgZmVhdHVyZSAtIHRvIGJlIGltcGxlbWVudGVkIGxhdGVyXG4vLyBmdW5jdGlvbiBkaXNhYmxlQ2xpY2tCYXNlZE9uUGxheWVyVHVybigpIHtcbi8vICAgaWYgKGh1bWFuVHVybikge1xuLy8gICAgIGh1bWFuQm9hcmRVSS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuLy8gICAgIGNvbXB1dGVyQm9hcmRVSS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuLy8gICB9XG4vLyAgIGVsc2V7XG4vLyAgICAgaHVtYW5Cb2FyZFVJLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4vLyAgICAgY29tcHV0ZXJCb2FyZFVJLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4vLyAgIH1cbi8vIH1cblxuZnVuY3Rpb24gc3dhcFR1cm5zKCkge1xuICBodW1hblR1cm4gPSAhaHVtYW5UdXJuO1xuICBkaXNwbGF5QXJlYS50ZXh0Q29udGVudCA9IGh1bWFuVHVybiA/IFwiSHVtYW4ncyB0dXJuXCIgOiBcIkNvbXB1dGVyJ3MgdHVyblwiO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlclBsYXlzQU1vdmUoKSB7XG4gIGlmICghaHVtYW5UdXJuKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb21wdXRlckF0dGFja09uKGh1bWFuKTtcbiAgICAgIHN3YXBUdXJucygpO1xuICAgICAgbGV0IHdpbm5lciA9IGdldFdpbm5lcklmR2FtZU92ZXIoKTtcbiAgICAgIGlmICh3aW5uZXIpIHtcbiAgICAgICAgd2lubmVyRGVjbGFyYXRpb24od2lubmVyKTtcbiAgICAgIH1cbiAgICB9LCA3MDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEF0dGFja2FibGVDZWxscyhwbGF5ZXJCb2FyZCkge1xuICBsZXQgYXR0YWNrYWJsZUNlbGxzID0gW107XG4gIGxldCBzaXplID0gcGxheWVyQm9hcmQubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG4gICAgICBsZXQgY3VycmVudENlbGwgPSBwbGF5ZXJCb2FyZFtpXVtqXTtcbiAgICAgIGlmICghY3VycmVudENlbGwuaXNEZWFkKCkpIHtcbiAgICAgICAgYXR0YWNrYWJsZUNlbGxzLnB1c2goY3VycmVudENlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXR0YWNrYWJsZUNlbGxzO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlckF0dGFja09uKHBsYXllcikge1xuICBsZXQgYXR0YWNrYWJsZUNlbGxzID0gZ2V0QXR0YWNrYWJsZUNlbGxzKHBsYXllci5nYW1lYm9hcmQuYm9hcmQpO1xuICBsZXQgY2VsbFRvQXR0YWNrID1cbiAgICBhdHRhY2thYmxlQ2VsbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXR0YWNrYWJsZUNlbGxzLmxlbmd0aCldO1xuICBsZXQgY29vcmRpbmF0ZXMgPSBjZWxsVG9BdHRhY2suZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzLngsIGNvb3JkaW5hdGVzLnkpO1xuICByZW5kZXJQbGF5ZXJCb2FyZHNVSSgpO1xufVxuXG5mdW5jdGlvbiBnYW1lcGxheSgpIHtcbiAgcGxhY2VkU2hpcENvdW50ID0gMDtcbiAgaHVtYW4gPSBuZXcgUGxheWVyKFwiSHVtYW5cIik7XG4gIGNvbXB1dGVyID0gbmV3IFBsYXllcihcIkNvbXB1dGVyXCIpO1xuICBodW1hblNldHVwKCk7XG4gIGNvbXB1dGVyU2V0dXAoKTtcbiAgZGlzcGxheUFyZWFTZXR1cCgpO1xuICByZW5kZXJQbGF5ZXJCb2FyZHNVSSgpO1xuXG4gIC8vdGhlIGZvbGxvd2luZyBhcmUgZnVuY3Rpb25zIHVzZWQgaW4gdGVzdGluZ1xuICAvLyAgIGRlZmF1bHRIaXRzT25Db21wdXRlcigpO1xuICAvLyAgIGRlZmF1bHRIaXRzT25IdW1hbigpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJCb2FyZHNVSSgpIHtcbiAgbGV0IHRvdGFsU2hpcENvdW50ID0gc2hpcExlbmd0aHMubGVuZ3RoO1xuICBsZXQgaG92ZXJlZENlbGxzO1xuXG4gIGJvYXJkV3JhcHBlci5pbm5lckhUTUwgPSBcIlwiO1xuICBodW1hbkJvYXJkVUkgPSBjcmVhdGVQbGF5ZXJCb2FyZFVJKGh1bWFuLCBcImh1bWFuLWJvYXJkXCIpO1xuICBjb21wdXRlckJvYXJkVUkgPSBjcmVhdGVQbGF5ZXJCb2FyZFVJKGNvbXB1dGVyLCBcImNvbXB1dGVyLWJvYXJkXCIpO1xuXG4gIGlmIChnYW1lU3RhcnRlZCkge1xuICAgIGh1bWFuQm9hcmRVSS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgbGV0IGlkID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgICAgbGV0IHggPSBpZFsxXTtcbiAgICAgIGxldCB5ID0gaWRbM107XG5cbiAgICAgIC8vaWdub3JlcyB1bm5lY2Vzc2FyeSB0YXJnZXQgZXZlbnRzXG4gICAgICBpZiAoaXNOYU4oeCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBwbGFjZSBzaGlwcyBvbmUtYnktb25lIG9uIHRoZSBib2FyZFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFNoaXBDb3VudDsgaSsrKSB7XG4gICAgICAgIGxldCBsZW4gPSBzaGlwTGVuZ3Roc1tzaGlwTGVuZ3Rocy5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcChsZW4pO1xuICAgICAgICBsZXQgY2VsbCA9IGh1bWFuLmdhbWVib2FyZC5ib2FyZFt4XVt5XTtcbiAgICAgICAgbGV0IGJlaW5nSG92ZXJlZCA9IDE7XG4gICAgICAgIGhvdmVyZWRDZWxscyA9IGh1bWFuLmdhbWVib2FyZC5zaGlwUGxhY2VtZW50Q2hlY2soXG4gICAgICAgICAgc2hpcCxcbiAgICAgICAgICBjZWxsLFxuICAgICAgICAgIGN1cnJlbnRBeGlzLFxuICAgICAgICAgIGJlaW5nSG92ZXJlZFxuICAgICAgICApO1xuICAgICAgICBpZiAoaG92ZXJlZENlbGxzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3ZlcmVkQ2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB4ID0gaG92ZXJlZENlbGxzW2ldLmdldENvb3JkaW5hdGVzKCkueDtcbiAgICAgICAgICAgIGxldCB5ID0gaG92ZXJlZENlbGxzW2ldLmdldENvb3JkaW5hdGVzKCkueTtcbiAgICAgICAgICAgIGh1bWFuQm9hcmRVSS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZC1jZWxsXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaHVtYW5Cb2FyZFVJLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICBpZiAoaG92ZXJlZENlbGxzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG92ZXJlZENlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHggPSBob3ZlcmVkQ2VsbHNbaV0uZ2V0Q29vcmRpbmF0ZXMoKS54O1xuICAgICAgICAgIGxldCB5ID0gaG92ZXJlZENlbGxzW2ldLmdldENvb3JkaW5hdGVzKCkueTtcbiAgICAgICAgICBodW1hbkJvYXJkVUkuY2hpbGRyZW5beF0uY2hpbGRyZW5beV0uY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyZWQtY2VsbFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaHVtYW5Cb2FyZFVJLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoaG92ZXJlZENlbGxzKSB7XG4gICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoc2hpcExlbmd0aHMucG9wKCkpO1xuICAgICAgICBodW1hbi5nYW1lYm9hcmQucGxhY2VTaGlwQXQoc2hpcCwgaG92ZXJlZENlbGxzWzBdLCBjdXJyZW50QXhpcyk7XG4gICAgICAgIHBsYWNlZFNoaXBDb3VudCsrO1xuICAgICAgICBpZiAocGxhY2VkU2hpcENvdW50ID09IHRvdGFsU2hpcHNUb0JlUGxhY2VkKSB7XG4gICAgICAgICAgZGlzcGxheUFyZWEudGV4dENvbnRlbnQgPSBcIkh1bWFuJ3MgdHVyblwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wdXRlckJvYXJkVUkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIC8vdGhlIGZvbGxvd2luZyBmZXcgbGluZXMgd2lsbCBmZXRjaCBjb29yZGluYXRlcyBmcm9tIGEgYm9hcmRcbiAgICAvL2xlc3MgdGhhbiAxMCBpbiBzaXplXG4gICAgbGV0IGlkID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgIGxldCB4ID0gaWRbMV07XG4gICAgbGV0IHkgPSBpZFszXTtcblxuICAgIGlmIChodW1hblR1cm4pIHtcbiAgICAgIGxldCBjZWxsID0gY29tcHV0ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldO1xuICAgICAgaWYgKGNlbGwuaXNEZWFkKCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDZWxsIGhhcyBiZWVuIGhpdCBhbHJlYWR5XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcHV0ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIHN3YXBUdXJucygpO1xuICAgICAgICBsZXQgd2lubmVyID0gZ2V0V2lubmVySWZHYW1lT3ZlcigpO1xuICAgICAgICBpZiAoIXdpbm5lcikge1xuICAgICAgICAgIGNvbXB1dGVyUGxheXNBTW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbm5lckRlY2xhcmF0aW9uKHdpbm5lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGJvYXJkV3JhcHBlci5hcHBlbmRDaGlsZChodW1hbkJvYXJkVUkpO1xuICBib2FyZFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udHJvbGxlckRpdik7XG4gIGJvYXJkV3JhcHBlci5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkVUkpO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5uZXJJZkdhbWVPdmVyKCkge1xuICBsZXQgcGxheWVycyA9IFtodW1hbiwgY29tcHV0ZXJdO1xuICBsZXQgd2lubmVyID0gbnVsbDtcbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBpZiAocGxheWVyLmdhbWVib2FyZC5oYXZlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIHdpbm5lciA9IHBsYXllcjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gd2lubmVyO1xufVxuXG5mdW5jdGlvbiB3aW5uZXJEZWNsYXJhdGlvbihwbGF5ZXIpIHtcbiAgY29uc29sZS5sb2coXCJHQU1FIE9WRVJcIik7XG4gIGlmIChwbGF5ZXIubmFtZSA9PSBcIkh1bWFuXCIpIHtcbiAgICBkaXNwbGF5QXJlYS50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXIgV2lucyFcIjtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5QXJlYS50ZXh0Q29udGVudCA9IFwiSHVtYW4gV2lucyFcIjtcbiAgfVxuICBib2FyZFdyYXBwZXIuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuLy90ZW1wb3JhcnkgZnVuY3Rpb24gZm9yIHRlc3RzIC0gdG8gYmUgZGVsZXRlZCBsYXRlclxuZnVuY3Rpb24gZGVmYXVsdEhpdHNPbkNvbXB1dGVyKCkge1xuICBjb21wdXRlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygwLCAwKTtcbiAgY29tcHV0ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMCwgMSk7XG5cbiAgY29tcHV0ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMCwgNSk7XG4gIGNvbXB1dGVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDEsIDUpO1xuICBjb21wdXRlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjaygyLCA1KTtcbiAgY29tcHV0ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMywgNSk7XG5cbiAgY29tcHV0ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soMywgMyk7XG4gIGNvbXB1dGVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDQsIDMpO1xuICBjb21wdXRlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg1LCAzKTtcblxuICBjb21wdXRlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg1LCAxKTtcbiAgY29tcHV0ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soNiwgMSk7XG4gIGNvbXB1dGVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDcsIDEpO1xuICBjb21wdXRlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg4LCAxKTtcbiAgY29tcHV0ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soOSwgMSk7XG5cbiAgY29tcHV0ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soNywgNSk7XG4gIGNvbXB1dGVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDcsIDYpO1xuICBjb21wdXRlci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg3LCA3KTtcbiAgY29tcHV0ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soNywgOCk7XG4gIHJlbmRlclBsYXllckJvYXJkc1VJKCk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRIaXRzT25IdW1hbigpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGh1bWFuLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGksIGopO1xuICAgIH1cbiAgfVxuICBodW1hbi5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg5LCAwKTtcbiAgaHVtYW4uZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soOSwgMSk7XG4gIGh1bWFuLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDksIDIpO1xuICBodW1hbi5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg5LCAzKTtcbiAgaHVtYW4uZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soOSwgNCk7XG4gIGh1bWFuLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDksIDUpO1xuICBodW1hbi5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayg5LCA3KTtcbiAgaHVtYW4uZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soOSwgOCk7XG4gIGh1bWFuLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDksIDkpO1xuICByZW5kZXJQbGF5ZXJCb2FyZHNVSSgpO1xufVxuXG5tYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd3JhcHBlci1tYWluXCIpO1xuYm9hcmRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cmFwcGVyLWdhbWVib2FyZFwiKTtcblxuYm9hcmRXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHJlbmRlclBsYXllckJvYXJkc1VJKCk7XG59KTtcblxuZ2FtZXBsYXkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==