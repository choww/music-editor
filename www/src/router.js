import Vue from 'vue';
import Router from 'vue-router';
import Signup from './Signup.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: { auth: false },
    },
  ],
});

// before each page change
// TODO - redirect unauthenticated users to login page
router.beforeEach((to, from, next) => {
  let requiresAuth = false;
  to.matched.forEach(route => {
    if (!requiresAuth) requiresAuth = route.meta.auth;
  });

  if (requiresAuth) {
    // TODO
  } else {
    next();
  }
});

export default router;
