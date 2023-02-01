/* 生成代码片段 */
import React, { useState } from "react";
import CodeEditor from "components/CodeEditor";
import { Button, message } from "antd";
import { codeSnippetMap } from "config/codeSnippet";
import { CopyOutlined, FormOutlined } from "@ant-design/icons";
import { snippetConfig } from "./buttonConfig";
import copy from "copy-to-clipboard";
import "./index.less";

interface IProps {}

const CodeSnippet: React.FC<IProps> = props => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");

  return (
    <div className="code-snippet">
      <div className="snippet-type">
        <h1 className="title">代码片段类型</h1>
        {Object.keys(snippetConfig).map(k => {
          return (
            <div className="btn-container" key={k}>
              <span className="type-title">{k}</span>
              <div className="btn-arr">
                {snippetConfig[k].map(({ type, btnText, language }) => {
                  return (
                    <Button
                      key={type}
                      icon={<FormOutlined />}
                      onClick={e => {
                        setCode(codeSnippetMap[type] || `console.log("chenjiang")`);
                        setLanguage(language || "javascript");
                      }}
                    >
                      {btnText}
                    </Button>
                  );
                })}
              </div>
            </div>
          );
        })}
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
        <div className="editor-container">
          <CodeEditor value={code} language={language} />
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
