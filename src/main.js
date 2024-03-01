import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

// Crear un array de clientes
let cliente1 = [
    new Cliente('Joaquin', new Impuestos(7500, 10)),
    new Cliente('Diego', new Impuestos(6400, 20)),
    new Cliente('Matteo', new Impuestos(2500, 30))
];

console.table(cliente1);

console.log("nombre ==> Impuesto anual")

cliente1.forEach(cliente => {
    console.table(`${cliente.nombre} ==> ${cliente.calcularImpuesto()}`);
});

