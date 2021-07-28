/*
 * @Date         : 2021-07-27 20:30:48
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-28 09:52:53
 * @FilePath     : /shuyuxuan_blog_front/src/pages/front-tools/index.tsx
 */
import React from 'react';
import Translate from '@/components/tools/translate/index';
import styles from './index.less';

const FrontTools = () => {
  return (
    <div className="">
      <div className="top-box"></div>
      <div className={styles['bd-container']}>
        <div className={styles['bd']}>
          <div className={styles['bd-left']}>
            <div className={styles['tools-item']}>
              <div className={styles['item-hd']}>翻译工具</div>
              <Translate />
            </div>
          </div>
          <div className={styles['bd-right']}>
            <div className={styles['tools-item']}>
              <div className={styles['item-hd']}>JSON工具</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontTools;
