/*
 * @Date         : 2021-05-25 17:55:22
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-05-25 18:34:38
 * @FilePath     : /shuyuxuan/shuyuxuan_blog_front/src/config/config.ts
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
  routes: router,
  fastRefresh: {},
});