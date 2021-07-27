/*
 * @Date         : 2021-05-26 16:22:18
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-27 20:55:14
 * @FilePath     : /shuyuxuan_blog_front/src/components/widget/TopBar/index.tsx
 */
import React from 'react';
import styles from './index.less';
import { history } from 'umi';

const TopBar = () => {
  const modules: Common.HeaderTabItem[] = [
    { name: '首页', id: 1, url: '/' },
    { name: '文章', id: 2, url: '' },
    { name: '前端工具', id: 3, url: '/front-tools' },
    { name: '关于我', id: 4, url: '' },
  ];
  const clickTab = (url: string) => {
    if (url) {
      history.push(url);
    } else {
      alert('👷施工中👷‍♀️');
    }
  };

  return (
    <div className={styles.topBar}>
      <img
        className={styles.logo}
        src={require('@/assets/images/logo_02.png')}
      />
      <div className={styles['module-list']}>
        {modules.map((e) => (
          <div
            className={styles['module-item']}
            key={e.id}
            onClick={() => {
              clickTab(e.url);
            }}
          >
            {e.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
