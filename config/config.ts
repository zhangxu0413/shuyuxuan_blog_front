/*
 * @Date         : 2021-05-25 17:55:22
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-16 20:01:05
 * @FilePath     : /shuyuxuan_blog_front/config/config.ts
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
  theme: {
    "primary-color": "#1C595A",
    'link-color': '#58A6A6'
  },
  hash: true,
  // 配置开发服务器。
  devServer: {
    port: 3200
  },
  favicon: '/favicon.ico',
  routes: router,
  fastRefresh: {},
});