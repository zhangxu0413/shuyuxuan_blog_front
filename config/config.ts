/*
 * @Date         : 2021-05-25 17:55:22
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-05-26 09:48:51
 * @FilePath     : /shuyuxuan/shuyuxuan_blog_front/config/config.ts
 */
import { defineConfig } from 'umi';
import router from './router'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置开发服务器。
  devServer: {
    port: 3200
  },
  favicon: '/favicon.ico',
  routes: router,
  fastRefresh: {},
});