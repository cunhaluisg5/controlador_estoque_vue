import { createRouter, createWebHistory } from 'vue-router';

import Login from './pages/Login.vue';
import Home from './pages/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      props: true
    },
  ]
})

export default router;
