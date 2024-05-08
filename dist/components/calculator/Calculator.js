"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.parse-float.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
require("./calculator.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Calculator = () => {
  const [num, setNum] = (0, _react.useState)(0);
  const [oldNum, setOldNum] = (0, _react.useState)(0);
  const [operator, setOperator] = (0, _react.useState)();
  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }
  function clear() {
    setNum(0);
  }
  function porcentagem(e) {
    setNum(num / 100);
  }
  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }
  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }
  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "calculatorwrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: "96px"
    }
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "resultado"
  }, num), /*#__PURE__*/_react.default.createElement("button", {
    onClick: clear
  }, "AC"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: changeSign
  }, "+/-"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: porcentagem
  }, "%"), /*#__PURE__*/_react.default.createElement("button", {
    className: "orange",
    onClick: operatorHandler,
    value: "/"
  }, "/"), /*#__PURE__*/_react.default.createElement("button", {
    className: "grey",
    onClick: inputNum,
    value: 7
  }, "7"), /*#__PURE__*/_react.default.createElement("button", {
    className: "grey",
    onClick: inputNum,
    value: 8
  }, "8"), /*#__PURE__*/_react.default.createElement("button", {
    className: "grey",
    onClick: inputNum,
    value: 9
  }, "9"), /*#__PURE__*/_react.default.createElement("button", {
    className: "orange",
    onClick: operatorHandler,
    value: "X"
  }, "X"), /*#__PURE__*/_react.default.createElement("button", {
    className: "grey",
    onClick: inputNum,
    value: 4
  }, "4"), /*#__PURE__*/_react.default.createElement("button", {
    className: "grey",
    onClick: inputNum,
    value: 5
  }, "5"), /*#__PURE__*/_react.default.createElement("button", {
    className: "grey",
    onClick: inputNum,
    value: 6
  }, "6"), /*#__PURE__*/_react.default.createElement("button", {
    className: "orange",
    onClick: operatorHandler,
    value: "-"
  }, "-"), /*#__PURE__*/_react.default.createElement("button", {
    className: "grey",
    onClick: inputNum,
    value: 1
  }, "1"), /*#__PURE__*/_react.default.createElement("button", {
    className: "grey",
    onClick: inputNum,
    value: 2
  }, "2"), /*#__PURE__*/_react.default.createElement("button", {
    className: "grey",
    onClick: inputNum,
    value: 3
  }, "3"), /*#__PURE__*/_react.default.createElement("button", {
    className: "orange",
    onClick: operatorHandler,
    value: "+"
  }, "+"), /*#__PURE__*/_react.default.createElement("button", {
    className: "grey",
    onClick: inputNum,
    value: 0
  }, "0"), /*#__PURE__*/_react.default.createElement("button", {
    style: {
      visibility: "hidden"
    }
  }, "k"), " ", /*#__PURE__*/_react.default.createElement("button", {
    className: "grey",
    onClick: inputNum,
    value: "."
  }, ","), /*#__PURE__*/_react.default.createElement("button", {
    className: "orange",
    onClick: calculate
  }, "="));
};
var _default = exports.default = Calculator;