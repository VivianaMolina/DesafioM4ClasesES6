"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Crear un array de clientes
var cliente1 = [new _cliente["default"]('Joaquin', new _impuestos["default"](7500, 10)), new _cliente["default"]('Diego', new _impuestos["default"](6400, 20)), new _cliente["default"]('Matteo', new _impuestos["default"](2500, 30))];
console.table(cliente1);
console.log("nombre ==> Impuesto anual");
cliente1.forEach(function (cliente) {
  console.table("".concat(cliente.nombre, " ==> ").concat(cliente.calcularImpuesto()));
});