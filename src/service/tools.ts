/*
 * @Date         : 2021-07-28 10:47:09
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-28 11:02:19
 * @FilePath     : /shuyuxuan_blog_front/src/service/tools.ts
 */
import request from '@/utils/request';

export async function translateRequest(
  params: FrontTools.translateReq,
): Promise<any> {
  return request('https://fanyi-api.baidu.com/api/trans/vip/translate', {
    method: 'get',
    params,
  });
}
