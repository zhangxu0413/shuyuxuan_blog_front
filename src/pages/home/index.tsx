/*
 * @Date         : 2021-05-25 18:45:21
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-16 19:13:21
 * @FilePath     : /shuyuxuan_blog_front/src/pages/home/index.tsx
 */
import React from 'react'
import styles from './index.less';
import { Calendar } from 'antd';
import ArticleCard from '@/components/article/article-card';

export default function IndexPage() {
  const articles = [{
    id: 1,
    title: '青春未满，梦想渐远',
    time: '2014-05-05',
    summary: '刚刚看完了中国好声音的国庆特别节目，说真的感触挺大的，不是因为他们的歌曲多么动听，而是被其中很多选手的执着所触动心灵。自从步入大四，觉得自己一下子改变了很多，有时觉得自己意气风发，到了大有作为的时刻；有时又觉得自己在残酷的社会现实面前如此渺小。作为半步迈入社会的我们，梦想在现实面前显得是那样的微不足道。有多少人迫于生活的压力放弃了自己曾经的梦想，又有几个人能在惊涛骇浪中守住自己心中的那枚火种。可是我们的才二十几岁，我们的青春不能就这样不声不响的画上句号。',
    categoryName: '随笔',
    tagNames:['青春','人生','感悟']
  },{
    id: 2,
    title: '青春未满，梦想渐远',
    time: '2014-05-05',
    summary: '刚刚看完了中国好声音的国庆特别节目，说真的感触挺大的，不是因为他们的歌曲多么动听，而是被其中很多选手的执着所触动心灵。自从步入大四，觉得自己一下子改变了很多，有时觉得自己意气风发，到了大有作为的时刻；有时又觉得自己在残酷的社会现实面前如此渺小。作为半步迈入社会的我们，梦想在现实面前显得是那样的微不足道。有多少人迫于生活的压力放弃了自己曾经的梦想，又有几个人能在惊涛骇浪中守住自己心中的那枚火种。可是我们的才二十几岁，我们的青春不能就这样不声不响的画上句号。',
    categoryName: '随笔',
    tagNames:['青春','人生','感悟']
  },{
    id: 3,
    title: '青春未满，梦想渐远',
    time: '2014-05-05',
    summary: '刚刚看完了中国好声音的国庆特别节目，说真的感触挺大的，不是因为他们的歌曲多么动听，而是被其中很多选手的执着所触动心灵。自从步入大四，觉得自己一下子改变了很多，有时觉得自己意气风发，到了大有作为的时刻；有时又觉得自己在残酷的社会现实面前如此渺小。作为半步迈入社会的我们，梦想在现实面前显得是那样的微不足道。有多少人迫于生活的压力放弃了自己曾经的梦想，又有几个人能在惊涛骇浪中守住自己心中的那枚火种。可是我们的才二十几岁，我们的青春不能就这样不声不响的画上句号。',
    categoryName: '随笔',
    tagNames:['青春','人生','感悟']
  }]
  return (
    <div>
      <div className={styles.hd}>
        <div className={styles["hd-content"]}>
          <div>书语轩<span> —— 博客</span></div>
          <div className={styles["en"]}>Learning is endless, heavy responsibility but not far away</div>
        </div>
      </div>
      <div className={styles["bd-container"]}>
        <div className={styles["bd"]}>
          <div className={styles["bd-left"]}>
            { articles.map(a => <ArticleCard article={a} /> ) }
          </div>
          <div className={styles["bd-right"]}>
            <Calendar fullscreen={false} />
          </div>
        </div>
      </div>
    </div>
  );
}