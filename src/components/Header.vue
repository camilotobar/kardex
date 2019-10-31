<template>
  <div>
    <v-card class="pa-5" outlined width="96vw">
      <v-card-text>
        <v-content>
          <v-row>
            <v-col cols="2">
              <v-select :items="items" label="Método de valoración" v-model="metodoEscogido" @change="metodo_valoracion" outlined></v-select>
            </v-col>
            <v-col cols="6" align="left">
              <h1 style="color: #2c3e50">{{ nombreEmpresa }}</h1>
              <h2>Producto: {{ nombreProducto }}</h2>
            </v-col>
            <v-col cols="4" align="right">
              <v-flex>
                <Orden :metodoActual="metodoEscogido" @newOrder="newOrder" />
              </v-flex>
            </v-col>
          </v-row>
        </v-content>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Orden from "./Nueva_Orden";
export default {
  components: { Orden },
  name: "Header",
  props: {
    nombreEmpresa: String,
    nombreProducto: String,
  },
  data() {
    return {
      items: ["Promedio ponderado", "PEPS"],
      metodoEscogido: "PEPS"
    };
  },
  methods: {
    metodo_valoracion() {
      this.$emit("methodChanged", this.metodoEscogido);
    },
    newOrder(order) {
      this.$emit("newOrder", order);
    }
  }
};
</script>

<style scoped>
</style>
