/*
 * @Date         : 2021-05-26 15:24:40
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-05-27 15:24:12
 * @FilePath     : /shuyuxuan/shuyuxuan_blog_front/src/components/widget/UserIntro/index.tsx
 */
import React from 'react'
import styles from './index.less'

const UserIntro = () => {
  return (<div className={styles.userIntro}>
    <div className={styles.name}>张书语</div>
    <div className={styles.subInfo}>一个带点文艺范的90后前端工程师</div>
    <img className={styles.avatar} src="https://shuyuxuan-1254264552.cos.ap-chengdu.myqcloud.com/shuyuxuanRes/images/avatar01.jpg" alt="" />
  </div>)
}
export default UserIntro