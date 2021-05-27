/*
 * @Date         : 2021-05-25 18:01:38
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-05-26 15:17:10
 * @FilePath     : /shuyuxuan/shuyuxuan_blog_front/config/router.ts
 */
export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: 'home', title: '书语轩-主页' }
    ],
  }
]