import React, { useState } from "react";
import { Button, Empty, message } from "antd";
import "./index.less";
import copy from "copy-to-clipboard";
import { CopyOutlined } from "@ant-design/icons";
import CodeEditor from "components/CodeEditor";
import DraggableTree from "./components/DraggableTree";
import ImportConfigModal from "./components/ImportConfigModal";

const INITIAL_DATA = [
  {
    key: "chen",
    value: "chen",
    label: "陈",
    title: "陈",
    children: [{ key: "jiang", value: "jiang", title: "江", label: "江" }],
  },
  { key: "25", value: "25", title: "年龄", label: "年龄" },
];

interface IProps {}

const SelectTestData: React.FC<IProps> = (props: IProps) => {
  const [code, setCode] = useState<string>(""); // 生成的代码

  const [treeData, setTreeData] = useState(INITIAL_DATA);

  const [visible, setVisible] = useState(false); // 导入配置

  /**
   * 导入配置弹窗关闭
   */
  const onCancel = () => {
    setVisible(false);
  };

  /* 
    根据导入的导入配置生成折叠面板(也就是表格的columns)
  */
  const importSubmit = (value: any) => {
    setTreeData([...value]);
    setVisible(false);
  };

  return (
    <>
      <div className="select-test-data">
        <div className="condition">
          {/* 左边条件区域 */}
          <h2 className="title">构建配置</h2>
          <div className="control">
            <Button
              onClick={() => {
                setVisible(true);
              }}
            >
              导入配置
            </Button>
            <Button
              type="primary"
              onClick={() => {
                setCode(
                  JSON.stringify(
                    treeData,
                    (key, value) => {
                      if (typeof value === "boolean" || (Array.isArray(value) && !value.length)) {
                        return undefined;
                      }
                      return value;
                    },
                    2
                  )
                );
              }}
            >
              生成代码
            </Button>
          </div>
          <div className="container">
            {/* 导入配置 */}
            <ImportConfigModal visible={visible} onCancel={onCancel} onSubmit={importSubmit} />
            <DraggableTree
              data={treeData}
              onChange={data => {
                setTreeData([...data]);
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
