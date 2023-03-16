import React, { useRef, useState } from "react";
import { Input, Button, Space, Empty, Form, message, Switch, Modal } from "antd";
import "./index.less";
import CodeEditor from "components/CodeEditor";
import copy from "copy-to-clipboard";
import { CopyOutlined } from "@ant-design/icons";
import DraggableTree from "./components/DraggableTree";

const INITIAL_DATA = [
  { key: "chen", value: "chen", title: "陈", children: [{ key: "jiang", value: "jiang", title: "江" }] },
  { key: "25", value: "25", title: "年龄" },
];

interface IProps {}

const SelectTestData: React.FC<IProps> = (props: IProps) => {
  const [code, setCode] = useState<string>(""); // 生成的代码

  const [isConcat, setIsConcat] = useState<boolean>(false); // 是否拼接key-value

  const dataRef = useRef(INITIAL_DATA);

  return (
    <>
      <div className="select-test-data">
        <div className="condition">
          {/* 左边条件区域 */}
          <h2 className="title">构建配置</h2>
          <Button
            type="primary"
            onClick={() => {
              setCode(JSON.stringify(dataRef.current, null, 2));
            }}
          >
            生成代码
          </Button>
          <div className="container">
            <DraggableTree
              data={INITIAL_DATA}
              onChange={data => {
                dataRef.current = data;
              }}
            />
          </div>
        </div>
        <div className="code">
          {/* 右边预览区域 */}
          <h2 className="title">测试数据</h2>
          {code ? (
            <div className="code-content">
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
              <CodeEditor value={code} language="javascript" />
            </div>
          ) : (
            <Empty description="暂无数据" />
          )}
        </div>
      </div>
    </>
  );
};

export default SelectTestData;
