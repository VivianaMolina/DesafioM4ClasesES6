export default class Cliente {

    constructor(nombre, impuestos) {
        this._nombre = nombre;
        this._impuestos = impuestos;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }

    // Fórmula: ((𝑚𝑜𝑛𝑡𝑜𝐵𝑟𝑢𝑡𝑜𝐴𝑛𝑢𝑎𝑙 − 𝑑𝑒𝑑𝑢𝑐𝑐𝑖𝑜𝑛𝑒𝑠) * 21%)
    calcularImpuesto() {
        return (this._impuestos._montoBrutoAnual - this._impuestos._deducciones) * 0.21;
    }
}