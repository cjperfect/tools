/* 增加自定义类型 */
import React, { useState, useEffect } from "react";
import { Drawer, Form, Input, Button, Space, Collapse, message, Modal } from "antd";
import { REQUIRED_RULES } from "config/constant";
import { operateRandomType } from "../../utils";
import "./index.less";
const { TextArea } = Input;
const { Panel } = Collapse;

interface IProps {
  visible: boolean;
  onSubmit: (values: any) => void;
  onClose: () => void;
}

const DiyRandomTypeModal: React.FC<IProps> = props => {
  const { visible, onSubmit, onClose } = props;
  const [activeKey, setActiveKey] = useState([]);
  const [randomState, setRadomState] = useState<any>([{}]);
  const [form] = Form.useForm();

  const init = () => {
    const typeMap = operateRandomType.get();
    const state = [];
    for (let k in typeMap) {
      state.push({
        randomName: k,
        randomValue: typeMap[k].join("&"),
      });
    }
    setRadomState(state);
    form.setFieldValue("typeList", state.length ? state : [{}]);
  };

  useEffect(() => {
    if (visible) {
      init();
    }
    // eslint-disable-next-line
  }, [visible]);

  const onFinish = (values: any) => {
    const { typeList } = values;
    const newTypes = typeList.reduce((prev: any, { randomName, randomValue }: any) => {
      prev[randomName] = randomValue?.split("\n").filter(Boolean);
      return prev;
    }, {});
    operateRandomType.set(JSON.stringify(newTypes));
    onSubmit?.(newTypes);
  };

  const onFinishFailed = () => {
    return message.warn("有必填项没填");
  };

  return (
    <Drawer
      title="新增随机类型"
      placement={"right"}
      open={visible}
      key={"right"}
      size="large"
      onClose={onClose}
      className="diy-random-type-drawer"
    >
      <Form form={form} onFinish={onFinish} layout="horizontal" onFinishFailed={onFinishFailed}>
        <Form.List name={"typeList"}>
          {(fields, { add, remove }) => {
            return (
              <>
                <Button
                  type="primary"
                  onClick={() => {
                    add({});
                  }}
                  style={{ marginBottom: 10 }}
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
                        forceRender={true}
                        header={
                          <Form.Item label="随机类型名称" rules={REQUIRED_RULES} name={[field.name, "randomName"]}>
                            <Input
                              placeholder="fundCode"
                              onClick={e => {
                                e.stopPropagation();
                              }}
                            />
                          </Form.Item>
                        }
                        extra={
                          <Button
                            type="link"
                            danger
                            onClick={e => {
                              e.stopPropagation();
                              const newState = [...randomState];
                              newState.splice(field.name, 1);
                              remove(field.name);
                            }}
                          >
                            删除
                          </Button>
                        }
                      >
                        <Form.Item label={"随机值："} rules={REQUIRED_RULES} name={[field.name, "randomValue"]}>
                          <TextArea
                            placeholder="以\n换行符分隔 如：&#13;chenjiang&#13;aoteman&#13;huluwa"
                            autoSize={{ minRows: 5, maxRows: 5 }}
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
        <Form.Item>
          <Space size="large">
            <Button type="primary" htmlType="submit" style={{ width: 120 }}>
              提交
            </Button>
            <Button
              onClick={() => {
                Modal.confirm({
                  content: "确定要重置吗？",
                  okText: "确认",
                  cancelText: "取消",
                  onOk() {
                    init();
                  },
                });
              }}
            >
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default DiyRandomTypeModal;
