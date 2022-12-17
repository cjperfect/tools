import React, { useState } from "react";
import { Button, Switch, Empty, InputNumber, Input, Radio, Form, Modal } from "antd";
import "./index.less";
import FormInput from "./components/formInput";

interface IProps {
  title: string;
}

export type ConfigType = {
  key: string;
  label: string;
  type: string;
  [extra: string]: any;
};

const GenerateColumns: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <div className="generate-columns">
        <div className="condition">
          {/* 左边条件区域 */}
          <h2 className="title">输入配置</h2>
          <div className="container">
            <FormInput />
          </div>
        </div>
        <div className="preview">
          {/* 右边预览区域 */}
          <h2 className="title">预览结果</h2>
          <div className="container">
            <Empty description="暂无配置" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateColumns;
