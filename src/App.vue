<template>
  <div id="app">
    <v-app>
      <v-content class="my-5 mx-10">
        <v-row>
          <Header @methodChanged="methodChanged" @newOrder="newOrder" :nombreEmpresa="nombreEmpresa"></Header>
        </v-row>
        <v-divider class="my-5 mx-10"></v-divider>
        <v-row>
          <Kardex :orders="orders"></Kardex>
        </v-row>
      </v-content>

      <v-overlay :value="overlay">
        <v-card class="pa-8" light>
          <v-form>
            <v-text-field label="Empresa" v-model="nombreEmpresa" outlined></v-text-field>
            <v-text-field label="Producto" v-model="invInicial" outlined></v-text-field>
            <v-text-field label="Unidades iniciales" v-model="unidadesInicial" outlined></v-text-field>
            <v-text-field label="Valor inicial por unidad" v-model="valorInicial" outlined></v-text-field>
            <v-btn icon color="#000000" @click="overlay = false">
              <v-icon>mdi-check-bold</v-icon>
            </v-btn>
          </v-form>
        </v-card>
      </v-overlay>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header";
import Kardex from "./views/Kardex";
import KardexPEPS from "./Logic/KardexPEPS";
import KardexPromedio from "./Logic/KardexPromedio";

export default {
  components: { Kardex, Header },
  data() {
    return {
      overlay: true,
      orders: [],
      currentMethod: "",
      nombreEmpresa:'',
      invInicial: '',
      unidadesInicial:0,
      valorInicial:0
    };
  },
  methods: {
    newOrder(order) {
      //No deja que se venda si el inventario no lo soporta
      if (
        order.movimiento === "Venta" &&
        ((KardexPEPS.saldoUnidades < order.unidades &&
          order.metodoValoracion === "PEPS") ||
          (KardexPromedio.saldoUnidades < order.unidades &&
            order.metodoValoracion === "Promedio ponderado"))
      ) {
        if (order.metodoValoracion === "PEPS") {
          alert(
            `No existen las suficientes unidades en el inventario para poder venderlas, sólo existen ${KardexPEPS.saldoUnidades} unidades.`
          );
        } else {
          alert(
            `No existen las suficientes unidades en el inventario para poder venderlas, sólo existen ${KardexPromedio.saldoUnidades} unidades.`
          );
        }
      } else {
        // Calculo de la orden en el método PEPS
        if (order.metodoValoracion === "PEPS") {
          if (order.movimiento === "Venta") KardexPEPS.venta(order);
          else KardexPEPS.compra(order);

          this.orders = KardexPEPS.datosKardex;
        }
        // Calculo de la orden en el método Promedio Ponderado
        else {
          if (order.movimiento === "Venta") KardexPromedio.venta(order);
          else KardexPromedio.compra(order);

          this.orders = KardexPromedio.datosKardex;
        }
      }
    },
    methodChanged(selected) {
      if (selected === "PEPS") this.orders = KardexPEPS.datosKardex;
      else this.orders = KardexPromedio.datosKardex;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
