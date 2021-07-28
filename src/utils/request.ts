/*
 * @Date         : 2021-07-28 10:40:29
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-28 10:47:51
 * @FilePath     : /shuyuxuan_blog_front/src/utils/request.ts
 */
import { extend } from 'umi-request';

const request = extend({
  credentials: 'include',
});

request.interceptors.request.use((_, options) => {
  const { method = 'get', withToken, packageParams } = options;
  const isDataParam = ['post', 'put', 'patch'].includes(method);
  const paramKey = isDataParam ? 'data' : 'params';
  if (packageParams && isDataParam) {
    const param = options[paramKey] || {};
    options[paramKey] = {
      param,
    };
  }

  return {
    options,
  };
});

export default request;
