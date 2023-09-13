/* 导入配置，模态框 */
import React from "react";
import { Input, Button, Modal, Form, Space, message } from "antd";
import { REQUIRED_RULES, CONFIG_EXAMPLE2, CONFIG_EXAMPLE1, CONFIG_EXAMPLE3 } from "config/constant";
const { TextArea } = Input;

// 保存配置到localstorage
export const saveConfigToStorage = (val: any) => {
  let data = [];
  const obj = { config: val };
  if (!localStorage.myConfig) {
    data = [obj];
  } else {
    data = [...JSON.parse(localStorage.myConfig), obj];
  }
  localStorage.myConfig = JSON.stringify(data);
};

interface IProps {
  visible: boolean;
  onSubmit: (values: any) => void;
  onCancel: () => void;
  footer?: any;
}

const ImportConfigModal: React.FC<IProps> = props => {
  const { visible, onSubmit, onCancel, footer } = props;

  // form表单对象
  const [form] = Form.useForm();

  const onFinish = (values: any, ...res: any) => {
    try {
      // 根据换行符截取
      const allField = values.content.split("\n").filter(Boolean);
      // 将用的配置添加到本地存储
      saveConfigToStorage(JSON.stringify(allField));
      // 提交事件
      onSubmit(allField);
    } catch (e) {
      return message.error("配置格式有误，请检查");
    }
  };

  /**
   * 根据配置生成随机字段
   */
  const generateField = () => {
    const content = form.getFieldValue("content");
    try {
      const allField = content
        .split("\n")
        .filter(Boolean)
        .map((v: string, i: number) => `${i}-${v}`)
        .join("\n");

      form.setFieldValue("content", allField);
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
                    form.setFieldValue("content", CONFIG_EXAMPLE1);
                  }}
                >
                  示例 (第一种)
                </Button>
                <Button
                  onClick={() => {
                    form.setFieldValue("content", CONFIG_EXAMPLE2);
                  }}
                >
                  示例 (第二种)
                </Button>
                <Button
                  onClick={() => {
                    form.setFieldValue("content", CONFIG_EXAMPLE3);
                  }}
                >
                  示例 (第三种)
                </Button>
              </Space>
            </>
          }
          rules={REQUIRED_RULES}
        >
          <TextArea
            placeholder="第一种(仅关心测试数据): &#13;name&#13;age&#13;sex&#13;&#13;第二种(同时关心table组件的columns):&#13;name-姓名&#13;age-年龄&#13;sex-性别 &#13;&#13;第三种(仅关心columns, 提供中文, 需要点击生成随机字段按钮): &#13;姓名&#13;年龄&#13;班级&#13;&#13;"
            autoSize={{ minRows: 15, maxRows: 15 }}
          />
        </Form.Item>
        <Form.Item>
          <Space size="large">
            <Button type="primary" htmlType="submit" style={{ width: 120 }}>
              导入
            </Button>
            <Button type="primary" style={{ width: 150 }} onClick={generateField}>
              生成随机字段
            </Button>
            <Button htmlType="reset">重置</Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ImportConfigModal;
