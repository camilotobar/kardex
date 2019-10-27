import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from "firebase";
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyCfR3UB2XOzo-2R_cDySGMv8VNIArq3nHs",
  authDomain: "taller-kardex.firebaseapp.com",
  databaseURL: "https://taller-kardex.firebaseio.com",
  projectId: "taller-kardex",
  storageBucket: "taller-kardex.appspot.com",
  messagingSenderId: "36838813917",
  appId: "1:36838813917:web:d04b8cb95f0bf4dd932b34"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
