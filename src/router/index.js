import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '',
    component: () => import('@/views/wrapper.vue'),
    children: [
      {
        path: '/support',
        component: () => import('@/views/support.vue'),
      },
      {
        path: '/support-detail',
        component: () => import('@/views/supportDetail.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
