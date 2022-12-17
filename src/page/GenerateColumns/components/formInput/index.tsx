import React, { useState } from "react";
import { Collapse, Form, Input, Button, Modal, InputNumber, Switch, Radio, Select, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { DEFAULT_ADD_FIELD, requiredRules } from "config/constant";
import "./index.less";

const { Panel } = Collapse;

interface IProps {}

const rules = [{ required: true, message: "必填字段" }];

const FormInput: React.FC<IProps> = (props: IProps) => {
  const [form] = Form.useForm();
  const [activeKey, setActiveKey] = useState([]);
  const [configList, setConfigList] = useState([{}]);

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

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      form={form}
      layout="horizontal"
      className="form-input-component"
      scrollToFirstError
      onFinish={onFinish}
      onReset={() => {
        form.resetFields(["fieldList"]);
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
                defaultActiveKey={["0"]}
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
                            <Input placeholder="fundCode" />
                          </Form.Item>
                          <Form.Item label="字段中文" rules={requiredRules} name={[field.name, "title"]}>
                            <Input placeholder="产品名称" />
                          </Form.Item>
                          <div className="button-group">
                            <Button
                              type="link"
                              onClick={e => {
                                e.stopPropagation();
                              }}
                            >
                              保存
                            </Button>
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
                      <Form.Item
                        label={
                          <>
                            随机值类型
                            <Tooltip title="测试数据的类型，例如：段落、名字、数字、带有千分位的数字">
                              <QuestionCircleOutlined />
                            </Tooltip>
                          </>
                        }
                        name={[field.name, "randomType"]}
                      >
                        {/* 段落、名字、数字、带有千分位的数字 */}
                        <Select
                          style={{ width: 150 }}
                          options={[
                            {
                              value: "段落",
                              label: "段落"
                            },
                            {
                              value: "名字",
                              label: "名字"
                            },
                            {
                              value: "整数",
                              label: "整数"
                            },
                            {
                              value: "带有两位小数",
                              label: "带有两位小数"
                            },
                            {
                              value: "百分数",
                              label: "百分数"
                            }
                          ]}
                        />
                      </Form.Item>
                      <Form.Item
                        label={
                          <>
                            默认值
                            <Tooltip title="后端数据返回为null时候展示的内容">
                              <QuestionCircleOutlined />
                            </Tooltip>
                          </>
                        }
                        name={[field.name, "defaultValue"]}
                      >
                        <Input placeholder="默认值" maxLength={100} style={{ width: 150 }} />
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
};

export default FormInput;
