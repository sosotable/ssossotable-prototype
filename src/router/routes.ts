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
      {
        path: 'normal',
        component: () => import('pages/signup/NormalSignUp.vue'),
      },
      {
        path: 'social',
        component: () => import('pages/signup/SocialSignUp.vue'),
      },
    ],
  },
  {
    path: '/initial/',
    component: () => import('layouts/InitialSignup.vue'),
    children: [
      {
        path: 'info',
        component: () => import('pages/initial/InitialSignupInfo.vue'),
      },
      {
        path: 'food',
        component: () => import('pages/initial/InitialSignupFood.vue'),
      },
    ],
  },
  {
    path: '/main/',
    component: () => import('layouts/MainPage.vue'),
    children: [
      {
        path: 'recommendation',
        component: () => import('pages/main/MainRecommendation.vue'),
      },
      { path: 'rating', component: () => import('pages/main/MainRating.vue') },
      { path: 'record', component: () => import('pages/main/MainRecord.vue') },
      { path: 'feed', component: () => import('pages/main/MainFeed.vue') },
      {
        path: 'friends',
        component: () => import('pages/main/MainFriends.vue'),
      },
      {
        path: 'info/friend',
        component: () => import('pages/main/MainFriendInfo.vue'),
      },
      { path: 'info/my', component: () => import('pages/main/MainMyInfo.vue') },
      {
        path: 'diary/friend',
        component: () => import('pages/main/MainFriendDiary.vue'),
      },
      {
        path: 'diary/my',
        component: () => import('pages/main/MainMyDiary.vue'),
      },
      {
        path: 'setting',
        component: () => import('pages/main/MainSetting.vue'),
      },
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
