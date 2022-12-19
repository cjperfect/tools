/* 查看已导入配置的抽屉 */
import React, { useEffect, useRef, useState } from "react";
import { Input, Button, Drawer, Form, Space, message, Modal } from "antd";
import { requiredRules } from "config/constant";
import { CopyOutlined } from "@ant-design/icons";
const { TextArea } = Input;

interface IProps {
  visible: boolean;
  onClose: () => void;
  setContent: (value: string) => void;
}

const ConfigDrawer: React.FC<IProps> = props => {
  const { visible, onClose, setContent } = props;
  const [form] = Form.useForm();
  const configListRef = useRef(JSON.parse(localStorage.myConfig || "[]"));

  useEffect(() => {
    configListRef.current = JSON.parse(localStorage.myConfig || "[]");
  }, [localStorage.myConfig]);

  const onFinish = (values: any) => {
    console.log(values);
  };

  const initialConfigList = () => {};

  return (
    <Drawer title="查看已导入的配置" placement={"right"} open={visible} key={"right"} size="large" onClose={onClose}>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          configList: configListRef.current
        }}
      >
        <Form.List name={"configList"}>
          {(fields, { add, remove, move }) => {
            return fields.map((field, index) => {
              return (
                <Form.Item
                  name={[field.name, "config"]}
                  rules={requiredRules}
                  label={
                    <>
                      <Space>
                        编号{index + 1}
                        <Button
                          danger
                          onClick={() => {
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
                        <Button
                          onClick={() => {
                            setContent(JSON.parse(configListRef.current[field.name].config));
                            onClose();
                          }}
                        >
                          选择
                        </Button>
                      </Space>
                    </>
                  }
                >
                  <TextArea placeholder="请输入配置" autoSize={{ minRows: 10, maxRows: 10 }} />
                </Form.Item>
              );
            });
          }}
        </Form.List>
      </Form>
    </Drawer>
  );
};

export default ConfigDrawer;
