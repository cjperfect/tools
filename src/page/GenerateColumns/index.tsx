import React, { useState, useRef } from "react";
import { Empty, Tabs, Table, Button, message } from "antd";
import "./index.less";
import FormInput from "./components/formInput";
import CodeEditor from "components/CodeEditor";
import copy from "copy-to-clipboard";
import { CopyOutlined } from "@ant-design/icons";
import { generateColumns } from "utils";

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

  const createColumns = (values: ColumnInterface) => {
    // console.log(values);
    const result = generateColumns(values);
    setResult(result);
  };

  return (
    <>
      <div className="generate-columns">
        <div className="condition">
          {/* 左边条件区域 */}
          <h2 className="title">输入配置</h2>
          <div className="container">
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
        <div className="preview">
          <h2 className="title">效果展示</h2>
          <Table columns={result.columns} dataSource={result.data} />
        </div>
      </div>
    </>
  );
};

export default GenerateColumns;
