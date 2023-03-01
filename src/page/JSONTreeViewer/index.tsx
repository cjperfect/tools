import React from "react";
import { Input } from "antd";
import { defaultJSONData, textAreaConfig } from "./config";
import "./index.less";

const TextArea = Input.TextArea;

interface IProps {
  [extra: string]: any;
}

const JSONTreeViewer: React.FC<IProps> = props => {
  return (
    <div className="json-tree-viewer">
      <TextArea value={defaultJSONData} {...textAreaConfig} />
    </div>
  );
};

export default JSONTreeViewer;
