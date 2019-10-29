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

    export default {
        components: {Kardex, Header},
        data() {
            return {
                orders: [],
            };
        },
        methods: {
            newOrder(order) {
                // eslint-disable-next-line no-console
                console.log(`In App: ${order.concepto}`);
                if (order.movimiento === 'Venta' && KardexPEPS.unidadesTotales < order.unidades) {
                    alert(`No existen las suficientes unidades en el inventario para poder venderlas, sólo existen ${KardexPEPS.unidadesTotales} unidades.`);
                }
                this.orders.push(order);

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
