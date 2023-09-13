import React, { useState, useRef } from "react";
import { Tabs, Button, message, Space, Empty, Tooltip } from "antd";
import FormInput from "./components/formInput";
import CodeEditor from "components/CodeEditor";
import copy from "copy-to-clipboard";
import { CopyOutlined } from "@ant-design/icons";
import { generateColumns } from "page/GenerateColumns/utils";
import ImportConfigModal from "./components/ImportConfigModal";
import ConfigDrawer from "./components/configDrawer";
import { DEFAULT_ADD_FIELD } from "./config";
import "./index.less";

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

  // 调用formInput组件的setFieldsValue方法, 将用户的配置写入到表单中
  const writeFormInput = (values: any) => {
    formInputRef.current.setColumnsValue(
      "columns",
      values.map((v: any) => {
        const [field, name] = v.split("-");
        return {
          ...DEFAULT_ADD_FIELD,
          dataIndex: field,
          title: name || "占位符",
        };
      })
    );
  };

  /* 
    根据导入配置生成折叠面板(也就是表格的columns)
  */
  const importSubmit = (values: any) => {
    writeFormInput(values);
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
                批量添加字段
              </Button>

              <Button
                onClick={() => {
                  setConfigVisible(true);
                }}
              >
                <Tooltip title="缓存批量添加的字段">查看历史字段</Tooltip>
              </Button>
            </Space>
            <FormInput ref={formInputRef} onSubmit={createColumns} />
          </div>
        </div>
        <div className="code">
          {/* 右边预览区域 */}
          <h2 className="title">测试数据</h2>
          {result.dataText ? (
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  key: "data",
                  label: "测试数据",
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
                  ),
                },
                {
                  key: "column",
                  label: "Ant design table组件的columns配置",
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
                  ),
                },
              ]}
            />
          ) : (
            <Empty description="暂无数据, 请点击一键生成" />
          )}
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
          // 将选择的配置写入到form表单中
          writeFormInput(JSON.parse(historyConfig));
        }}
      />
    </>
  );
};

export default GenerateColumns;
