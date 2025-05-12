
export function Movimiento(nombre, tipo, monto, descripcion){
        this.nombre = nombre;
        this.tipo = tipo;
        this.monto = monto;
        this.descripcion = descripcion;
}

Movimiento.prototype.desplegarInfo = function(){
    console.log(`Nombre: ${this.nombre}\tTipo: ${this.tipo}\tMonto: ${this.monto}`);
}
