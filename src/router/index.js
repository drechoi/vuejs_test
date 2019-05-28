import Vue from 'vue';
import Router from 'vue-router';
import auth from '@/auth/authService';

import HelloWorld from '@/components/HelloWorld';
import Callback from '@/components/Callback';
import Profile from '@/views/Profile';
import ShowData from '@/views/showData';
import WishList from '@/views/wishList';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/showData',
      name: 'showData',
      component: ShowData
    },
    {
      path: '/wishList',
      name: 'wish List',
      component: WishList
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/callback' || auth.isAuthenticated()) {
    return next();
  }

  // Specify the current path as the customState parameter, meaning it
  // will be returned to the application after auth
  auth.login({ target: to.path });
});

// Existing export
export default router;
