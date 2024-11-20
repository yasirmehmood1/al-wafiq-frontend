import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import useAuth from '@/composable/login';

const { user } = useAuth();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'login', component: Login },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/Layouts/AuthLayout.vue'),
      meta: { requiresAuth: true },
      redirect: { name: 'performance' },
      children: [
        {
          path: 'performance',
          name: 'performance',
          component: () => import('@/views/Performance.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken') || user.value;

  if (to.name === 'login' && isAuthenticated) {
    next('/dashboard');
  } else if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/'); 
  } else {
    next(); 
  }
});

export default router;
