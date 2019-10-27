import Vue from 'vue'
import VueRouter from 'vue-router'
import Kardex from "../views/Kardex";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'kardex',
    component: Kardex
  },
];

const router = new VueRouter({
  routes
});

export default router;
