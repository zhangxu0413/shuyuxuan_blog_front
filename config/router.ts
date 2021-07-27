/*
 * @Date         : 2021-05-25 18:01:38
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-27 20:34:25
 * @FilePath     : /shuyuxuan_blog_front/config/router.ts
 */
export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: 'home', title: '书语轩-主页' },
      {
        path: '/front-tools',
        component: 'front-tools',
        title: '书语轩-前端工具',
      },
      { path: '/labs', component: 'labs', title: '书语轩-主页' },
    ],
  },
];
