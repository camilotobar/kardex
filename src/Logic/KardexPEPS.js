class KardexPEPS {

    constructor() {
        this.inventario = [];
        this.unidadesTotales = 0;
    }

    compra(orden) {
        this.inventario.push(orden);
        this.unidadesTotales += orden.unidades;
    }

    venta(orden) {
        let undsVenta = orden.unidades;

        for (let i = 0; i < this.inventario.length; i++) {
            let lote = this.inventario[i];
            lote.unidades -= undsVenta;
            if (lote.unidades >= 0)
                break;
        }
    }
}

export default (new KardexPEPS);
