/* 导入配置，模态框 */
import React from "react";
import { Input, Button, Modal, Form, Space, message } from "antd";
import { CONFIG_EXAMPLE, REQUIRED_RULES } from "config/constant";
import { saveConfigToStorage } from "utils";
const { TextArea } = Input;

interface IProps {
  visible: boolean;
  onSubmit: (values: any) => void;
  onCancel: () => void;
  footer?: any;
}

const ImportConfigModal: React.FC<IProps> = props => {
  const { visible, onSubmit, onCancel, footer } = props;
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    try {
      const allField = values.content.split(",");
      saveConfigToStorage(JSON.stringify(allField));
      onSubmit(allField);
    } catch (e) {
      return message.error("配置格式有误，请检查");
    }
  };

  return (
    <Modal title="导入配置" open={visible} onCancel={onCancel} footer={footer || null}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name={"content"}
          label={
            <>
              请输入配置：
              <Space size="middle">
                <Button
                  onClick={() => {
                    form.setFieldValue("content", CONFIG_EXAMPLE);
                  }}
                >
                  导入示例
                </Button>
              </Space>
            </>
          }
          rules={REQUIRED_RULES}
        >
          <TextArea
            placeholder="请输入配置: name:姓名,age:年龄,sex:性别 中间以,分割"
            autoSize={{ minRows: 15, maxRows: 15 }}
          />
        </Form.Item>
        <Form.Item>
          <Space size="large">
            <Button type="primary" htmlType="submit" style={{ width: 120 }}>
              导入
            </Button>
            <Button htmlType="reset">重置</Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ImportConfigModal;
