import React, { useState, useRef } from "react";
import { Tabs, Button, message, Space } from "antd";
import "./index.less";
import FormInput from "./components/formInput";
import CodeEditor from "components/CodeEditor";
import copy from "copy-to-clipboard";
import { CopyOutlined } from "@ant-design/icons";
import { generateColumns } from "utils";
import ImportConfigModal from "./components/ImportConfigModal";
import ConfigDrawer from "./components/configDrawer";

interface IProps {
  title: string;
}

const GenerateColumns: React.FC<IProps> = (props: IProps) => {
  const formInputRef: any = useRef();
  const [result, setResult] = useState<object | any>({
    dataText: "",
    columnsText: "",
    data: [],
    columns: []
  });

  const [visible, setVisible] = useState(false);
  const [configVisible, setConfigVisible] = useState(false);

  const onCancel = () => {
    setVisible(false);
  };

  /* 导入配置 */
  const importSubmit = (values: any) => {
    formInputRef.current.setColumnsValue(
      "columns",
      values.map((v: any) => ({ ...v, randomType: "csentence", defaultValue: "- -" }))
    );
    setVisible(false);
  };

  /* 创建columns，根据表单数据 */
  const createColumns = (values: ColumnInterface) => {
    const result = generateColumns(values);
    setResult(result);
  };

  /* 抽屉关闭事件 */
  const drawerClose = () => {
    setConfigVisible(false);
  };

  return (
    <>
      <div className="generate-columns">
        <div className="condition">
          {/* 左边条件区域 */}
          <h2 className="title">输入配置</h2>
          <div className="container">
            <Space style={{ marginBottom: 10 }}>
              <Button
                onClick={() => {
                  setVisible(true);
                }}
              >
                导入配置
              </Button>

              <Button
                onClick={() => {
                  setConfigVisible(true);
                }}
              >
                查看已导入的配置
              </Button>
            </Space>
            <FormInput ref={formInputRef} onSubmit={createColumns} />
          </div>
        </div>
        <div className="code">
          {/* 右边预览区域 */}
          <h2 className="title">测试代码</h2>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                key: "column",
                label: "生成配置columns",
                children: (
                  <>
                    <Button
                      icon={<CopyOutlined />}
                      onClick={() => {
                        if (!result.columnsText) return message.info("没有啥要复制的");
                        copy(result.columnsText);
                        message.success("已复制到剪切板");
                      }}
                    >
                      复制
                    </Button>
                    <CodeEditor value={result.columnsText} language="javascript" />
                  </>
                )
              },
              {
                key: "data",
                label: "生成测试数据",
                children: (
                  <>
                    <Button
                      icon={<CopyOutlined />}
                      onClick={() => {
                        if (!result.dataText) return message.info("没有啥要复制的");
                        copy(result.dataText);
                        message.success("已复制到剪切板");
                      }}
                    >
                      复制
                    </Button>
                    <CodeEditor value={result.dataText} language="javascript" />
                  </>
                )
              }
            ]}
          ></Tabs>
        </div>
      </div>

      {/* 导入配置 */}
      <ImportConfigModal visible={visible} onCancel={onCancel} onSubmit={importSubmit} />

      {/* 查看已导入的配置 */}
      <ConfigDrawer
        visible={configVisible}
        onClose={drawerClose}
        setContent={columnsText => {
          formInputRef.current.setColumnsValue(
            "columns",
            // eslint-disable-next-line
            eval(columnsText).map((v: any) => ({ ...v, randomType: "csentence", defaultValue: "- -" }))
          );
        }}
      />
    </>
  );
};

export default GenerateColumns;
