/*
 * @Date         : 2021-05-26 16:22:18
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-05-26 18:00:20
 * @FilePath     : /shuyuxuan/shuyuxuan_blog_front/src/components/widget/TopBar/index.tsx
 */
import React from 'react';
import styles from './index.less'

const TopBar = () => {
  return (<div className={styles.topBar}>
    <img className={styles.logo} src={require('@/assets/images/logo_01.png')} />
  </div>)
}

export default TopBar