/*
 * @Date         : 2021-07-16 17:23:20
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-16 19:00:36
 * @FilePath     : /shuyuxuan_blog_front/src/components/article/article-card/index.tsx
 */
import React, { FC } from 'react'
import styles from './index.less'
import { ArticleCardProp } from '../../../interface/article';
import {
  FieldTimeOutlined,
  FolderOutlined,
  TagOutlined
} from '@ant-design/icons';

const ArticleCard:FC<{article: ArticleCardProp}> = ({ article }) => {
  return (<div className={styles['article-card']}>
    <div className={styles['card-hd']}>
      <div className={styles['title']}>{ article.title }</div>
      <div className={styles.time}>
        <FieldTimeOutlined className="mr10" />
        {article.time}
      </div>
    </div>
    <div className={styles['card-bd']}>
      <div className={styles['card-content']}>{ article.summary }</div>
    </div>
    <div className={styles['card-ft']}>
      <div className={styles['ft-l']}>
        <div className={styles['category']}><FolderOutlined className="mr10" style={{color:'#67734D'}} />{ article.categoryName }</div>
        <div className={styles['tags']}><TagOutlined className="mr10" style={{color:'#67734D'}} />{ article.tagNames.join(' , ') }</div>
      </div>
      <div className={styles['enter-btn']}>more</div>
    </div>
  </div>)
}
export default ArticleCard
