import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Collapse, Form, Input, Button, Modal, InputNumber, Switch, Radio, Select, message, Space } from "antd";
import { DEFAULT_ADD_FIELD, REQUIRED_RULES, RANDOM_TYPE_ARR } from "config/constant";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { saveConfigToStorage } from "utils";
import "./index.less";

const { Panel } = Collapse;

interface IProps {
  ref: any;
  onSubmit: (values: ColumnInterface) => void;
}

const FormInput: React.FC<IProps> = forwardRef((props: IProps, ref) => {
  const { onSubmit } = props;

  const [form] = Form.useForm();
  const [activeKey, setActiveKey] = useState([]);

  const handleReset = () => {
    Modal.confirm({
      content: "确定要重置吗？",
      okText: "确认",
      cancelText: "取消",
      onOk() {
        form.resetFields();
      }
    });
  };

  /* 一键生成 */
  const onFinish = (values: ColumnInterface) => {
    if (!values.columns || !values.columns.length) {
      return message.error("至少需要一个字段");
    }
    saveConfigToStorage(JSON.stringify(values.columns, null, 2));
    onSubmit?.(values);
  };

  const onFinishFailed = () => {
    return message.warn("有必填项没填");
  };

  // 供父组件调用
  useImperativeHandle(ref, () => ({
    setColumnsValue: (field: string, values: ColumnInterface) => {
      form.setFieldValue(field, values);
    }
  }));

  return (
    <Form<ColumnInterface>
      form={form}
      layout="horizontal"
      className="form-input-component"
      scrollToFirstError
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        variable: "columns",
        num: 10,
        columns: [DEFAULT_ADD_FIELD]
      }}
    >
      <Form.Item name="variable" label="变量名" rules={REQUIRED_RULES}>
        <Input placeholder="生成的配置用什么变量存放" maxLength={100} />
      </Form.Item>
      <Form.Item
        name="num"
        label="生成多少条测试数据"
        rules={[
          {
            required: true,
            message: "请输入"
          }
        ]}
      >
        <InputNumber min={0} max={1000} placeholder="请输入" />
      </Form.Item>

      <Form.List name="columns">
        {(fields, { add, remove, move }) => {
          return (
            <>
              <Button
                type="primary"
                style={{ marginBottom: 10 }}
                onClick={() => {
                  add(DEFAULT_ADD_FIELD);
                }}
              >
                新增
              </Button>
              <Collapse
                activeKey={activeKey}
                onChange={key => {
                  setActiveKey(key as []);
                }}
              >
                {fields.map((field, index) => {
                  return (
                    <Panel
                      key={field.key}
                      header={
                        <>
                          <Form.Item label="字段名" rules={REQUIRED_RULES} name={[field.name, "dataIndex"]}>
                            <Input
                              placeholder="fundCode"
                              onClick={e => {
                                e.stopPropagation();
                              }}
                            />
                          </Form.Item>
                          <Form.Item label="字段中文" rules={REQUIRED_RULES} name={[field.name, "title"]}>
                            <Input
                              placeholder="产品名称"
                              onClick={e => {
                                e.stopPropagation();
                              }}
                            />
                          </Form.Item>
                        </>
                      }
                      extra={
                        <Space>
                          {index > 0 && (
                            <Button
                              type="text"
                              onClick={e => {
                                e.stopPropagation();
                                move(index, index - 1);
                              }}
                            >
                              <UpOutlined />
                            </Button>
                          )}

                          {index < fields.length - 1 && (
                            <Button
                              type="text"
                              onClick={e => {
                                move(index, index + 1);
                                e.stopPropagation();
                              }}
                            >
                              <DownOutlined />
                            </Button>
                          )}

                          <Button
                            type="link"
                            danger
                            onClick={e => {
                              e.stopPropagation();
                              remove(field.name);
                            }}
                          >
                            删除
                          </Button>
                        </Space>
                      }
                    >
                      <Form.Item label="宽度" rules={REQUIRED_RULES} name={[field.name, "width"]}>
                        <InputNumber placeholder="请输入" min={50} max={1000} />
                      </Form.Item>
                      <Form.Item label="是否固定" name={[field.name, "fixed"]} valuePropName="checked">
                        <Switch checkedChildren="是" unCheckedChildren="否" />
                      </Form.Item>
                      <Form.Item label="对齐方式" name={[field.name, "align"]} rules={REQUIRED_RULES}>
                        <Radio.Group>
                          <Radio.Button value="left">left</Radio.Button>
                          <Radio.Button value="center">center</Radio.Button>
                          <Radio.Button value="right">right</Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                      <Form.Item label="单元格是否自动省略" name={[field.name, "ellipsis"]} valuePropName="checked">
                        <Switch checkedChildren="是" unCheckedChildren="否" />
                      </Form.Item>
                      <Form.Item label="列的类名" name={[field.name, "className"]}>
                        <Input placeholder="className" maxLength={100} style={{ width: 150 }} />
                      </Form.Item>
                      <Form.Item label={"随机值类型"} name={[field.name, "randomType"]}>
                        <Select style={{ width: 150 }} options={RANDOM_TYPE_ARR} />
                      </Form.Item>
                    </Panel>
                  );
                })}
              </Collapse>
            </>
          );
        }}
      </Form.List>
      <Form.Item className="submit-wrap">
        <Button type="primary" htmlType="submit">
          一键生成
        </Button>
        <Button onClick={handleReset}>重置</Button>
      </Form.Item>
    </Form>
  );
});

export default FormInput;
