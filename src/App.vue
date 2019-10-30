<template>
    <div id="app">
        <v-app>
            <v-content class="my-5 mx-10">
                <v-row>
                    <Header @newOrder="newOrder"></Header>
                </v-row>
                <v-divider class="my-5 mx-10"></v-divider>
                <v-row>
                    <Kardex :orders="orders"></Kardex>
                </v-row>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import Kardex from "./views/Kardex";
    import KardexPEPS from "./Logic/KardexPEPS";
    import KardexPromedio from "./Logic/KardexPromedio";

    export default {
        components: {Kardex, Header},
        data() {
            return {
                orders: [],
                currentMethod: '',
            };
        },
        methods: {
            newOrder(order) {
                if (order.movimiento === 'Venta' && KardexPEPS.saldoUnidades < order.unidades) {
                    alert(`No existen las suficientes unidades en el inventario para poder venderlas, sólo existen ${KardexPEPS.saldoUnidades} unidades.`);
                }
                else {
                    if (order.movimiento === 'Venta' && order.metodoValoracion === 'PEPS')
                        KardexPEPS.venta(order);
                    else if (order.metodoValoracion === 'PEPS')
                        KardexPEPS.compra(order);
                    else if (order.movimiento === 'Venta')
                        KardexPromedio.venta(order);
                    else
                        KardexPromedio.compra(order);

                    this.orders = KardexPEPS.datosKardex;
                }
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    h2 {
        font-size: 22px;
    }
</style>
