<template>
    <div>
        <h1>Tabla Kardex</h1>
        <v-data-table :headers="headers" :items="orders" :items-per-page="5" class="elevation-1"></v-data-table>
    </div>
</template>

<script>
    export default {
        name: "Kardex",
        props: {
            orders: Array,
        },
        data() {
            return {
                headers: [
                    { text: 'Fecha', value: 'fecha', sortable: false },
                    { text: 'Concepto', value: 'concepto', sortable: false },
                    { text: 'Entrada | Unidades', value: 'entrada-unidades', sortable: false },
                    { text: 'Entrada | Valor Unitario', value: 'entrada-valorUnitario', sortable: false },
                    { text: 'Entrada | Costo Total', value: 'entrada-total', sortable: false },
                    { text: 'Salida | Unidades', value: 'salida-unidades', sortable: false },
                    { text: 'Salida | Valor Unitario', value: 'salida-valorUnitario', sortable: false },
                    { text: 'Salida | Costo Total', value: 'salida-total', sortable: false },
                    { text: 'Saldo | Unidades', value: 'saldo-unidades', sortable: false },
                    { text: 'Saldo | Valor Unitario', value: 'saldo-valorUnitario', sortable: false },
                    { text: 'Saldo | Costo Total', value: 'saldo-total', sortable: false }
                ],
            };
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
