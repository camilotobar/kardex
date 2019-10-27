<template>
    <div>
         <v-data-table
            :headers="headers"
            :items="orders"
            :items-per-page="5"
            class="elevation-1"
        ></v-data-table>
    </div>
</template>

<script>
    export default {
        name: "Kardex",
        data() {
            return {
               headers:[
                { text:'Fecha', value: 'fecha'},
               { text:'Concepto'},
               { text:'Entrada-Unidades'},
               { text:'Entrada-Valor Unitario'},
               { text:'Entrada-Total'},
                { text:'Salida-Unidades'},
                { text:'Salida-Valor Unitario'},
                { text:'Salida-Total'},
                { text:'Saldo-Unidades'},
                { text:'Saldo-Valor Unitario'},
                { text: 'Saldo-Total'}
                ],

                orders:[
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
