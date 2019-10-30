class KardexPEPS {

    // Aquí se crean las variables globales de la clase
    constructor() {
        this.inventario = [];
        this.datosKardex = [];
        this.saldoUnidades = 0;
        this.saldoTotal = 0;
    }

    // Método para comprar a través del método PEPS
    compra(orden) {
        this.inventario.push(orden);
        this.saldoUnidades += orden.unidades;
        this.saldoTotal += orden.valorTotal;

        // Agrego la fila de compra a la tabla Kardex
        this.datosKardex.push({
            'fecha': orden.fecha,
            'concepto': orden.concepto,
            'entrada-unidades': orden.unidades,
            'entrada-valorUnitario': `$${orden.valorUnitario}`,
            'entrada-total': `$${(orden.unidades * orden.valorUnitario)}`,
            'saldo-unidades': this.saldoUnidades,
            'saldo-total': `$${this.saldoTotal}`,
        });
    }

    // Método para vender a través de PEPS
    venta(orden) {
        let undsVenta = orden.unidades;

        // eslint-disable-next-line no-console
        console.log(this.inventario);

        var i;
        //let inventoryLength = this.inventario.length;
        for (i = 0; i < this.inventario.length; i++) {
            let lote = this.inventario[i];
            let diferencia = lote.unidades - undsVenta;
            let salidaUnds = undsVenta;
            let salidaTotal = lote.valorUnitario;

            // Si en este lote puedo vender solito lo que falta de la venta
            if (diferencia >= 0) {
                this.inventario[i].unidades -= undsVenta;
                this.saldoUnidades -= undsVenta;
                this.saldoTotal -= (undsVenta * lote.valorUnitario);

                salidaUnds = undsVenta;
                salidaTotal = (salidaUnds * lote.valorUnitario);
            }
            // De lo contrario
            else {
                // Calculo de salida
                salidaUnds = lote.unidades;
                undsVenta -= lote.unidades;
                salidaTotal = (salidaUnds * lote.valorUnitario);
                this.saldoUnidades -= lote.unidades;
                this.saldoTotal -= salidaTotal;

                // Saco el registro del inventario
                this.inventario.splice(i, 1);
                i--;
            }

            // Agrego la fila a la tabla Kardex la iteración
            this.datosKardex.push({
                'fecha': orden.fecha,
                'concepto': orden.concepto,
                'salida-unidades': salidaUnds,
                'salida-valorUnitario': `$${lote.valorUnitario}`,
                'salida-total': `$${salidaTotal}`,
                'saldo-unidades': this.saldoUnidades,
                'saldo-total': `$${this.saldoTotal}`,
            });

            if (diferencia >= 0)
                break;
        }
    }
}

export default (new KardexPEPS);
