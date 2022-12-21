/* 生成代码片段 */
import React, { useState } from "react";
import CodeEditor from "components/CodeEditor";
import { Button, message } from "antd";
import { codeSnippetMap } from "config/codeSnippet";
import "./index.less";
import { CopyOutlined, FormOutlined } from "@ant-design/icons";
import copy from "copy-to-clipboard";

interface IProps {}
const snippetArr = [
  { type: "commonTable", btnText: "CommonTable代码片段" },
  { type: "searchForm", btnText: "searchForm代码片段" },
  { type: "addMenu", btnText: "addMenu代码片段" }
];

const CodeSnippet: React.FC<IProps> = props => {
  const [code, setCode] = useState("chenjiang");
  return (
    <div className="code-snippet">
      <div className="snippet-type">
        <h1 className="title">代码片段类型</h1>
        <div className="container">
          {snippetArr.map(({ type, btnText }) => {
            return (
              <Button
                icon={<FormOutlined />}
                onClick={e => {
                  setCode(codeSnippetMap[type] || "chenjiang");
                }}
              >
                {btnText}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="code-result">
        <h1 className="title">生成结果</h1>
        <Button
          icon={<CopyOutlined />}
          style={{ marginLeft: "auto", display: "block", marginRight: 20 }}
          onClick={() => {
            if (!code) return message.info("没有啥要复制的");
            copy(code);
            message.success("已复制到剪切板");
          }}
        >
          复制
        </Button>
        <CodeEditor value={code} language="javascript" />
      </div>
    </div>
  );
};

export default CodeSnippet;
