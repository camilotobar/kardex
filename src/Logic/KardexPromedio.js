class KardexPromedio {

    // Aquí se crean las variables globales de la clase
    constructor() {
        this.inventario = [];
        this.datosKardex = [];
        this.saldoUnidades = 0;
        this.saldoTotal = 0;
        this.valor_unitario=0;
    }

    inventarioInicial(datos) {
        this.inventario.push(datos);
        this.saldoUnidades += datos.unidades;
        this.saldoTotal += datos.valorTotal;
        this.valor_unitario += datos.valorUnitario;

        this.datosKardex.push({
            'concepto': 'Inventario Inicial',
            'saldo-unidades': datos.unidades,
            'saldo-valorUnitario': datos.valorUnitario,
            'saldo-total': `$${datos.valorTotal}`,
        });
    }

    compra(orden){


        if(this.inventario.length!=0){

            this.saldoTotal+=orden.valorTotal
            this.saldoUnidades+=orden.unidades
            this.valor_unitario= this.saldoTotal/this.saldoUnidades

        }else{

            this.saldoTotal=orden.valorTotal
            this.saldoUnidades=orden.unidades
            this.valor_unitario=orden.valorUnitario

        }

        this.inventario.push(orden);


        // Agrego la fila de compra a la tabla Kardex
        this.datosKardex.push({
            'fecha': orden.fecha,
            'concepto': orden.concepto,
            'entrada-unidades': orden.unidades,
            'entrada-valorUnitario': this.valor_unitario,
            'entrada-total': `$${orden.valorTotal}`,
            'saldo-unidades': this.saldoUnidades,
            'saldo-valorUnitario':this.valor_unitario,
            'saldo-total': `$${this.saldoTotal}`,
        });


    }

    venta(orden){

        // eslint-disable-next-line no-console
        console.log(this.saldoUnidades);

        if(this.saldoTotal!=0){
            this.saldoTotal-=(orden.unidades * this.valor_unitario)
        }
        if(this.saldoUnidades!=0){
            this.saldoUnidades=this.saldoUnidades-orden.unidades
        }

        // eslint-disable-next-line no-console
        console.log(this.saldoUnidades);

        // Agrego la fila a la tabla Kardex la iteración
        this.datosKardex.push({
            'fecha': orden.fecha,
            'concepto': orden.concepto,
            'salida-unidades': orden.unidades,
            'salida-valorUnitario': this.valor_unitario,
            'salida-total': `$${(orden.unidades * this.valor_unitario)}`,
            'saldo-unidades': this.saldoUnidades,
            'saldo-total': `$${this.saldoTotal}`,
        });


    }

}

export default (new KardexPromedio);
