import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/components/Layout/index.vue';
import RouterView from '@/views/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/admin/home'
    },
    {
      path: '/admin',
      name: 'admin',
      component: Layout,
      children: [
        {
          path: '/admin/home',
          name: 'home',
          component: () => import('@/views/home/index.vue')
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
});

export default router;
