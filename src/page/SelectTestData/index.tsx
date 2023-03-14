import React, { useState, useRef } from "react";
import { Input, Button, Space, Empty, Form, message, Switch, Modal } from "antd";
import "./index.less";
import CodeEditor from "components/CodeEditor";
import copy from "copy-to-clipboard";
import { DEFAULT_SELECT_TEST_DATA, REQUIRED_RULES } from "config/constant";
import { CopyOutlined } from "@ant-design/icons";
const { TextArea } = Input;

interface IProps {}

const SelectTestData: React.FC<IProps> = (props: IProps) => {
  const [code, setCode] = useState<string>(""); // 生成的代码

  const [isConcat, setIsConcat] = useState<boolean>(false); // 是否拼接key-value

  const [form] = Form.useForm();

  /**
   * 表单提交事件
   * @param values 表单值
   * @returns
   */
  const onFinish = (values: any) => {
    try {
      const fieldArr = values.content?.split("&");
      const allField = fieldArr.map((v: string) => {
        const [field, name] = v.split("-");
        return {
          key: field,
          value: field,
          label: isConcat ? field + "-" + name : name,
          title: isConcat ? field + "-" + name : name,
        };
      });
      setCode(JSON.stringify(allField, null, 2));
    } catch (err) {
      return message.warn("请检查配置格式是否正确");
    }
  };

  /**
   * 表单重置事件
   */
  const handleReset = () => {
    Modal.confirm({
      content: "确定要重置吗？",
      okText: "确认",
      cancelText: "取消",
      onOk() {
        form.resetFields();
        setCode("");
      },
    });
  };

  return (
    <>
      <div className="select-test-data">
        <div className="condition">
          {/* 左边条件区域 */}
          <h2 className="title">输入配置</h2>
          <div className="container">
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item
                name={"content"}
                label={
                  <>
                    请输入配置：
                    <Space size={"large"}>
                      <Button
                        onClick={() => {
                          form.setFieldValue("content", DEFAULT_SELECT_TEST_DATA);
                        }}
                      >
                        示例
                      </Button>
                      <Switch
                        checkedChildren="拼接"
                        unCheckedChildren="不拼接"
                        onChange={v => {
                          setIsConcat(v);
                        }}
                      />
                    </Space>
                  </>
                }
                rules={REQUIRED_RULES}
              >
                <TextArea
                  placeholder="请输入字段: &#13;&#13;0-女&1-男&2-保密"
                  autoSize={{ minRows: 15, maxRows: 15 }}
                />
              </Form.Item>

              <Form.Item>
                <Space size="large">
                  <Button type="primary" htmlType="submit" style={{ width: 120 }}>
                    生成
                  </Button>
                  <Button onClick={handleReset}>重置</Button>
                </Space>
              </Form.Item>
            </Form>
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
