"use strict";

var _cliente = _interopRequireDefault(require("./cliente"));
var _impuestos = _interopRequireDefault(require("./impuestos"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuesto1 = new _impuestos["default"](2500, 50);
console.log({
  impuesto1: impuesto1
});
var cliente1 = new _cliente["default"]('Joaquin', impuesto1);
console.log({
  cliente1: cliente1
});
console.log(cliente1.calcularImpuesto());