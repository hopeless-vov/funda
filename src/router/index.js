import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main',
    },
    component: () => import('../pages_custom/House/House.vue'),
  },
];
const router = new VueRouter({
  routes,
});
export default router;
