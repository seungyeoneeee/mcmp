import Vue from 'vue';
import VueRouter from 'vue-router';
import { Service1Route } from './service1';

Vue.use(VueRouter);

const routes = [Service1Route];

export const router = new VueRouter({
  mode: 'history',
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   return savedPosition || { top: 0, behavior: 'smooth' }
  // },
});
