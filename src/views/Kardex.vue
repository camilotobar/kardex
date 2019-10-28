<template>
    <div>
        <v-data-table :headers="headers" :items="orders" :items-per-page="5" class="elevation-1"></v-data-table>

    </div>
</template>

<script>
    export default {
        name: "Kardex",
        data() {
            return {
                headers: [
                    {text: 'Fecha', value: 'fecha', sortable: true},
                    {text: 'Concepto', sortable: false},
                    {text: 'Entrada-Unidades', sortable: false},
                    {text: 'Entrada-Valor Unitario', sortable: false},
                    {text: 'Entrada-Total', sortable: false},
                    {text: 'Salida-Unidades', sortable: false},
                    {text: 'Salida-Valor Unitario', sortable: false},
                    {text: 'Salida-Total', sortable: false},
                    {text: 'Saldo-Unidades', sortable: false},
                    {text: 'Saldo-Valor Unitario', sortable: false},
                    {text: 'Saldo-Total', sortable: false}
                ],

                orders: [
                    {
                        fecha: '10/10/2019'
                    }

                ]

            };
        },
        methods: {
            listenButton() {

            },
        }
    }
</script>

<style scoped>

</style>
