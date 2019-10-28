import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ultimaOrden: {
      concepto: '',
      movimiento: '',
      fecha: '',
      unidades: 0,
      valorUnitario: 0,
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {
  }
})
