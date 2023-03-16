/* 导入配置，模态框 */
import React from "react";
import { Input, Button, Modal, Form, Space, message } from "antd";
import { REQUIRED_RULES, SELECT_DATA_TEMPLATE } from "config/constant";
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
      const data = JSON.parse(values.content);
      onSubmit(data);
    } catch (e) {
      return message.error("配置格式有误，请检查");
    }
  };

  return (
    <Modal title="批量添加配置" open={visible} onCancel={onCancel} footer={footer || null}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name={"content"}
          label={
            <>
              请输入配置：
              <Space size="middle">
                <Button
                  onClick={() => {
                    form.setFieldValue("content", SELECT_DATA_TEMPLATE);
                  }}
                >
                  示例
                </Button>
              </Space>
            </>
          }
          rules={REQUIRED_RULES}
        >
          <TextArea placeholder={`请输入标准JSON格式`} autoSize={{ minRows: 15, maxRows: 15 }} />
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
