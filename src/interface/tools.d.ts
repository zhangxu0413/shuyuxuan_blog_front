/*
 * @Date         : 2021-07-28 10:52:39
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-28 10:57:36
 * @FilePath     : /shuyuxuan_blog_front/src/interface/tools.d.ts
 */
declare namespace FrontTools {
  export interface translateReq {
    q: string;
    from: string;
    to: string;
    appid: string;
    salt: string;
    sign: string;
  }
}
