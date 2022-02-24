class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Ratón: [iD_Ratón: ${this._idRaton}, Tipo_Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    
    toString(){
        return `Teclado: [iD_Teclado: ${this._idTeclado}, Tipo_Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`
    }
}
let raton1 = new Raton('Usb', 'Logitech');
console.log(raton1.toString());

let teclado1 = new Teclado('Bluetooth', 'Dell');
console.log(teclado1.toString());

