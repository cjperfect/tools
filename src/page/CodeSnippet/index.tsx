/* 生成代码片段 */
import React, { useState } from "react";
import CodeEditor from "components/CodeEditor";
import { Button, message } from "antd";
import { codeSnippetMap } from "config/codeSnippet";
import { CopyOutlined, FormOutlined } from "@ant-design/icons";
import copy from "copy-to-clipboard";
import "./index.less";

interface IProps {}

const snippetArr: SnippetType[] = [
  { type: "randomNum", btnText: "生成一个范围内的随机数" },
  { type: "idReg", btnText: "身份证号验证" }
];

const CodeSnippet: React.FC<IProps> = props => {
  const [code, setCode] = useState("");
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
                  setCode(codeSnippetMap[type] || `console.log("chenjiang")`);
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
        <p className="btn-group">
          <Button
            icon={<CopyOutlined />}
            onClick={() => {
              if (!code) return message.info("没有啥要复制的");
              copy(code);
              message.success("已复制到剪切板");
            }}
          >
            复制
          </Button>
        </p>
        <CodeEditor value={code} language="javascript" />
      </div>
    </div>
  );
};

export default CodeSnippet;
