// router.js
import Vue from 'vue';
import Router from 'vue-router';
import UserApi from '@/components/UserApi.vue';
import SignIn from '@/components/SingIn.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserApi
    }
    {
        path: '/SignIn',
        name: 'SignIn',
        component: SignIn
      }
  ]
});