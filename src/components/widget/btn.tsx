/*
 * @Date         : 2021-07-19 11:37:05
 * @LastEditors  : zhangxu
 * @LastEditTime : 2021-07-19 14:32:34
 * @FilePath     : /shuyuxuan_blog_front/src/components/widget/btn.tsx
 */
import React from 'react'
const Intro = (target:any, name:string , descriptor:{
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;
}) => {
  let oldValue = descriptor.value;
  descriptor.value = function () {
      console.log(`before calling ${name} with\n`, arguments[0]);
      return oldValue.apply(this, arguments);
  };

  return descriptor;
}

export default class Btn extends React.Component {
  constructor(props:{}) {
    super(props);
  }
  @Intro
  clickBtn(params:any){
    console.log(params)
  }
  render() {
    return <button onClick={(e) => {
      this.clickBtn(e)
    }}>{ this.props.children }</button>
  }
}