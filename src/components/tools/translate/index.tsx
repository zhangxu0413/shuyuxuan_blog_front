/*
 * @Date         : 2021-07-28 09:33:34
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-28 10:06:44
 * @FilePath     : /shuyuxuan_blog_front/src/components/tools/translate/index.tsx
 */
import React, { FC } from 'react';
import { Input, Select, AutoComplete, Button } from 'antd';
import styles from './index.less';
const { Option } = Select;
const Translate: FC = () => {
  return (
    <div className={styles['box']}>
      <Input.Group compact>
        <Select defaultValue="CN" style={{ width: '20%' }}>
          <Option value="CN">中文转英文</Option>
          <Option value="EN">英文转中文</Option>
        </Select>
        <AutoComplete style={{ width: '80%' }} />
      </Input.Group>
      <div className={styles.result}>
        <div>翻译结果：</div>
        <div>命名建议：</div>
      </div>
      <Button>翻译</Button>
    </div>
  );
};
export default Translate;
