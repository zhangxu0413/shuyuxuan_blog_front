/*
 * @Date         : 2021-05-26 15:24:40
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-05-27 16:35:20
 * @FilePath     : /shuyuxuan/shuyuxuan_blog_front/src/components/widget/UserIntro/index.tsx
 */
import React from 'react'
import styles from './index.less'

const UserIntro = () => {
  const userInfo = {
    name: '张书语',
    slogan: '一个带点文艺范的90后前端工程师',
    avatar: 'https://shuyuxuan-1254264552.cos.ap-chengdu.myqcloud.com/shuyuxuanRes/images/avatar01.jpg'
  }
  return (<div className={styles.userIntro}>
    <div className={styles.name}>{ userInfo.name }</div>
    <div className={styles.subInfo}>{ userInfo.slogan }</div>
    <img className={styles.avatar} src={ userInfo.avatar } alt="" />
  </div>)
}
export default UserIntro