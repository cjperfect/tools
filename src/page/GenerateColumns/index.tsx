import React, { useState, useRef } from "react";
import { Tabs, Button, message, Space, Empty } from "antd";
import "./index.less";
import FormInput from "./components/formInput";
import CodeEditor from "components/CodeEditor";
import copy from "copy-to-clipboard";
import { CopyOutlined } from "@ant-design/icons";
import { generateColumns } from "utils";
import ImportConfigModal from "./components/ImportConfigModal";
import ConfigDrawer from "./components/configDrawer";
import { DEFAULT_ADD_FIELD } from "config/constant";

interface IProps {
  title: string;
}

const GenerateColumns: React.FC<IProps> = (props: IProps) => {
  const formInputRef: any = useRef();
  const [result, setResult] = useState<object | any>({
    dataText: "",
    columnsText: "",
    data: [],
    columns: [],
  });

  const [visible, setVisible] = useState(false);
  const [configVisible, setConfigVisible] = useState(false);

  const onCancel = () => {
    setVisible(false);
  };

  /* 
    根据导入的导入配置生成折叠面板(也就是表格的columns)
  */
  const importSubmit = (values: any) => {
    formInputRef.current.setColumnsValue(
      "columns",
      values.map((v: any) => {
        const [field, name] = v.split(":");
        return {
          ...DEFAULT_ADD_FIELD,
          dataIndex: field,
          title: name || "占位符",
        };
      })
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

  /* 查看已导入的配置---提交事件 */
  const onSubmit = (values: ConfigType[]) => {
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
                key: "data",
                label: "测试数据",
                children: result.dataText ? (
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
                ) : (
                  <Empty description="暂无数据, 请点击一键生成" />
                ),
              },
              {
                key: "column",
                label: "Ant design table组件的columns配置",
                children: result.columnsText ? (
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
                ) : (
                  <Empty description="暂无数据, 请点击一键生成" />
                ),
              },
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
        onSubmit={onSubmit}
        setContent={historyConfig => {
          // 选择历史配置
          formInputRef.current.setColumnsValue(
            "columns",
            JSON.parse(historyConfig).map((v: any) => {
              const [field, name] = v.split(":");
              return {
                ...DEFAULT_ADD_FIELD,
                dataIndex: field,
                title: name || "占位符",
              };
            })
          );
        }}
      />
    </>
  );
};

export default GenerateColumns;
