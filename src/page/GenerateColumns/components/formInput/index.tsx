import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Collapse, Form, Input, Button, Modal, InputNumber, Switch, Radio, Select, Tooltip, message } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { DEFAULT_ADD_FIELD, requiredRules } from "config/constant";
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
        console.log("123213");
      }
    });
  };

  const onFinish = (values: ColumnInterface) => {
    if (!values.columns || !values.columns.length) {
      return message.error("至少需要一个字段");
    }

    onSubmit?.(values);
  };

  // 供父组件调用
  useImperativeHandle(ref, () => ({
    setFormValues: (values: ColumnInterface) => {
      form.setFieldsValue(values);
    }
  }));

  return (
    <Form<ColumnInterface>
      form={form}
      layout="horizontal"
      className="form-input-component"
      scrollToFirstError
      onFinish={onFinish}
      initialValues={{
        variable: "fundCodeList",
        num: 10,
        columns: [DEFAULT_ADD_FIELD]
      }}
    >
      <Form.Item name="variable" label="变量名">
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
        {(fields, { add, remove }) => {
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
                {fields.map(field => {
                  return (
                    <Panel
                      key={field.key}
                      header={
                        <>
                          <Form.Item label="字段名" rules={requiredRules} name={[field.name, "dataIndex"]}>
                            <Input
                              placeholder="fundCode"
                              onClick={e => {
                                e.stopPropagation();
                              }}
                            />
                          </Form.Item>
                          <Form.Item label="字段中文" rules={requiredRules} name={[field.name, "title"]}>
                            <Input
                              placeholder="产品名称"
                              onClick={e => {
                                e.stopPropagation();
                              }}
                            />
                          </Form.Item>
                          <div className="button-group">
                            <Button
                              type="link"
                              danger
                              onClick={e => {
                                e.stopPropagation();
                                Modal.confirm({
                                  content: "确定要删除吗？",
                                  okText: "确认",
                                  cancelText: "取消",
                                  onOk() {
                                    remove(field.name);
                                  }
                                });
                              }}
                            >
                              删除
                            </Button>
                          </div>
                        </>
                      }
                    >
                      <Form.Item label="宽度" rules={requiredRules} name={[field.name, "width"]}>
                        <InputNumber placeholder="请输入" min={50} max={1000} />
                      </Form.Item>
                      <Form.Item label="是否固定" name={[field.name, "fixed"]} valuePropName="checked">
                        <Switch checkedChildren="是" unCheckedChildren="否" />
                      </Form.Item>
                      <Form.Item label="对齐方式" name={[field.name, "align"]}>
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
                        <Select
                          style={{ width: 150 }}
                          options={[
                            {
                              value: "integer",
                              label: "整数"
                            },
                            {
                              value: "cname",
                              label: "名字"
                            },
                            {
                              value: "datetime",
                              label: "日期时间"
                            },
                            {
                              value: "date",
                              label: "日期"
                            },
                            {
                              value: "cparagraph",
                              label: "长文本"
                            },
                            {
                              value: "sex",
                              label: "性别"
                            },
                            {
                              value: "address",
                              label: "地址"
                            }
                          ]}
                        />
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
