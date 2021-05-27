/*
 * @Date         : 2021-05-25 17:55:22
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-05-26 15:22:37
 * @FilePath     : /shuyuxuan/shuyuxuan_blog_front/config/config.ts
 */
import { defineConfig } from 'umi';
import router from './router'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  cssLoader: {
    //将 ClassName 类名变成驼峰命名形式
    localsConvention: 'camelCase'
  },
  // 配置开发服务器。
  devServer: {
    port: 3200
  },
  favicon: '/favicon.ico',
  routes: router,
  fastRefresh: {},
});