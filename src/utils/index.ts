/*
 * @Date         : 2021-07-28 20:04:26
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-28 20:05:00
 * @FilePath     : /shuyuxuan_blog_front/src/utils/index.ts
 */
export const copyText = (t: string) => {
  const node = document.createElement('textarea');
  document.body.appendChild(node);
  node.value = t;
  node.setSelectionRange(0, 9999);
  node.select();
  document.execCommand('copy');
  node.remove();
};
