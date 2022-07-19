import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '',
    name: 'login',
    component: () => import('@/views/Authorization/login.vue'),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/Authorization/forgotPassword.vue'),
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
      {
        path: '/users',
        component: () => import('@/views/users.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
