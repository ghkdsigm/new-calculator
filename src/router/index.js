import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sub01',
    name: 'Sub01',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/Sub01.vue'),
  },
  {
    path: '/sub02',
    name: 'Sub02',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/Sub02.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes,
});

export default router;
