/*
 * @Date         : 2021-05-26 15:10:19
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-16 15:21:31
 * @FilePath     : /shuyuxuan_blog_front/src/layouts/index.tsx
 */
import { IRouteComponentProps } from 'umi'
import styles from './index.less'
import UserIntro from '@/components/widget/UserIntro'
import TopBar from '../components/widget/TopBar';

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return (
    <div className={styles.main}>
      <TopBar />
      <div className={styles.bd}>
        {/* <UserIntro /> */}
        <div>{ children }</div>
      </div>
    </div>
  )
}