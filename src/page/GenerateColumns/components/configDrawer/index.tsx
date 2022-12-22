/* 查看已导入配置的抽屉 */
import React, { useEffect, useState } from "react";
import { Input, Button, Drawer, Form, Space, Modal, Empty } from "antd";
import { REQUIRED_RULES } from "config/constant";
const { TextArea } = Input;

interface IProps {
  visible: boolean;
  onClose: () => void;
  setContent: (value: string) => void;
}

const ConfigDrawer: React.FC<IProps> = props => {
  const { visible, onClose, setContent } = props;
  const [form] = Form.useForm();
  const [configListState, setConfigListState] = useState<any>([]);
  const configList = JSON.parse(localStorage.myConfig || "[]");

  useEffect(() => {
    if (visible) {
      setConfigListState(configList);
      form.setFieldsValue({
        configList
      });
    }
    // eslint-disable-next-line
  }, [visible]);

  return (
    <Drawer title="查看已导入的配置" placement={"right"} open={visible} key={"right"} size="large" onClose={onClose}>
      {configList?.length ? (
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            configList
          }}
        >
          <Form.List name={"configList"}>
            {(fields, { add, remove, move }) => {
              return fields.map((field, index) => {
                return (
                  <Form.Item
                    key={field.key}
                    name={[field.name, "config"]}
                    rules={REQUIRED_RULES}
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
                                  const data = [...configListState];
                                  data.splice(field.key, 1);
                                  localStorage.myConfig = JSON.stringify(data);
                                  setConfigListState(data);
                                  remove(field.name);
                                }
                              });
                            }}
                          >
                            删除
                          </Button>
                          <Button
                            onClick={() => {
                              setContent(configListState[field.name].config);
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
      ) : (
        <Empty description="暂无数据" />
      )}
    </Drawer>
  );
};

export default ConfigDrawer;
