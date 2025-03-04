import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Cart from '../components/Cart.vue';
import Bestellen from '../components/Bestellen.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/bestellen', component: Bestellen }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;