export default class Impuestos {

    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(nuevo_montoBrutoAnual) {
        this._montoBrutoAnual = nuevo_montoBrutoAnual;
    }

    get deducciones() {
        return this._deducciones;
    }

    set deducciones(nueva_deducciones) {
        this._deducciones = nueva_deducciones;
    }

}