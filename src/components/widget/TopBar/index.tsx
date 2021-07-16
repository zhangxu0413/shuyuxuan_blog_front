/*
 * @Date         : 2021-05-26 16:22:18
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-16 15:45:40
 * @FilePath     : /shuyuxuan_blog_front/src/components/widget/TopBar/index.tsx
 */
import React from 'react';
import styles from './index.less'

const TopBar = () => {
  return (<div className={styles.topBar}>
    <img className={styles.logo} src={require('@/assets/images/logo_02.png')} />
    <div className={styles['module-list']}>
      <div className={styles['module-item']}>首页</div>
      <div className={styles['module-item']}>文章</div>
      <div className={styles['module-item']}>关于我</div>
    </div>
  </div>)
}

export default TopBar