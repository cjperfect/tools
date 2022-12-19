import React from "react";
import { Spin } from "antd";
import "./index.less";

interface IProps {
  [extra: string]: any;
}

const BaseLoading: React.FC<IProps> = props => {
  return (
    <div className="base-loading">
      <Spin size="large" tip="加载中..." />
    </div>
  );
};

export default BaseLoading;
