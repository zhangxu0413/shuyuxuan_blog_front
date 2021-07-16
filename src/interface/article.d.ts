/*
 * @Date         : 2021-07-16 18:50:57
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-16 18:56:37
 * @FilePath     : /shuyuxuan_blog_front/src/interface/article.d.ts
 */
export interface ArticleCardProp {
  id: number;
  title: string;
  time: string;
  summary: string;
  categoryName: string;
  tagNames: string[];
}