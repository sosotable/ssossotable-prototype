import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/IndexPage.vue'),
  },
  {
    path: '/signup/',
    component: () => import('layouts/SignUp.vue'),
    children: [
      { path: 'normal', component: () => import('pages/NormalSignUp.vue') },
      { path: 'social', component: () => import('pages/SocialSignUp.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
