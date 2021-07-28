/*
 * @Date         : 2021-07-28 09:33:34
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-28 14:53:01
 * @FilePath     : /shuyuxuan_blog_front/src/components/tools/translate/index.tsx
 */
import React, { FC, useState } from 'react';
import { Input, Select, AutoComplete, Button } from 'antd';
import styles from './index.less';
import md5 from 'md5';
import { translateRequest } from '@/service/tools';
import $ from 'jquery';
const { Option } = Select;
const config = {
  appid: '20210727000899584',
  secret: 'ofYIh1a5qfWw3FAnpNBS',
};
const typeMap = {
  ZH: { from: 'zh', to: 'en' },
  EN: { from: 'en', to: 'zh' },
};
const Translate: FC = () => {
  const [query, setQuery] = useState<string>('');
  const [type, setType] = useState<'ZH' | 'EN'>('ZH');
  const [translateResult, setTranslateResult] = useState('');
  const getSign = (q: string, salt: string) => {
    let str = `${config.appid}${q}${salt}${config.secret}`;
    return md5(str);
  };
  const toHump = (name: string) => {
    return name.replace(/\s(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
  };
  const submit = () => {
    const salt = Math.floor(Math.random() * 1e10);
    const params: FrontTools.translateReq = {
      q: query,
      appid: config.appid,
      salt: salt.toString(),
      sign: getSign(query, salt.toString()),
      from: typeMap[type].from,
      to: typeMap[type].to,
    };
    $.ajax({
      url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
      type: 'get',
      dataType: 'jsonp',
      data: params,
      success: function (data) {
        setTranslateResult(data?.trans_result[0]?.dst || '');
      },
    });
  };
  return (
    <div className={styles['box']}>
      <Input.Group compact>
        <Select
          defaultValue="ZH"
          style={{ width: '20%' }}
          value={type}
          onChange={setType}
        >
          <Option value="ZH">中文转英文</Option>
          <Option value="EN">英文转中文</Option>
        </Select>
        <AutoComplete
          style={{ width: '80%' }}
          value={query}
          onChange={setQuery}
        />
      </Input.Group>
      {translateResult && (
        <div className={styles.result}>
          <div>
            翻译结果：{translateResult}{' '}
            <Button size="small" type="dashed">
              复制
            </Button>
          </div>
          {type === 'ZH' && (
            <div>
              命名建议：{toHump(translateResult)}{' '}
              <Button size="small" type="dashed">
                复制
              </Button>
            </div>
          )}
        </div>
      )}
      <Button className="mt10" type="primary" onClick={submit}>
        翻译
      </Button>
    </div>
  );
};
export default Translate;
