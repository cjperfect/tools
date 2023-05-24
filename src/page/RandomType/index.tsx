import React, { useEffect, useState } from "react";
import { Button, Form, message, Badge, Card, Input, Collapse } from "antd";
import { DEFAULT_ADD_FIELD, REQUIRED_RULES } from "../../config/constant";
import "./index.less";
import { operateRandomType } from "page/GenerateColumns/utils";
import { DeleteOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

interface IProps {}

const RandomType: React.FC<IProps> = (props: IProps) => {
  const [form] = Form.useForm();

  const [randomState, setRadomState] = useState<any>([{}]);

  /**
   * 初始化表单
   */
  const init = () => {
    const typeMap = operateRandomType.get();
    const state = [];
    for (let k in typeMap) {
      state.push({
        randomName: k,
        randomValue: typeMap[k].join("\n"),
      });
    }
    setRadomState(state);
    form.setFieldValue("randomList", state.length ? state : [{}]);
  };

  useEffect(() => {
    message.warn("填写完记得保存哦");
    init();
    // eslint-disable-next-line
  }, []);

  /* 保存 */
  const onFinish = (values: any) => {
    const { randomList } = values;
    const newTypes = randomList.reduce((prev: any, { randomName, randomValue }: any) => {
      prev[randomName] = randomValue?.split("\n").filter(Boolean);
      return prev;
    }, {});
    operateRandomType.set(JSON.stringify(newTypes));
    message.success("保存成功");
  };

  const onFinishFailed = () => {
    return message.error("有必填项没填");
  };

  return (
    <div className="random-type-container">
      <Form
        form={form}
        onFinish={onFinish}
        layout="horizontal"
        onFinishFailed={onFinishFailed}
        initialValues={{
          randomList: [{}],
        }}
      >
        <Form.Item className="submit-btn">
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
        <Form.List name={"randomList"}>
          {(fields, { add, remove }) => {
            return (
              <>
                <Button
                  type="primary"
                  onClick={() => {
                    add();
                  }}
                >
                  新增随机类型
                </Button>

                <div className="random-type-list">
                  {fields.map(field => {
                    return (
                      <Badge.Ribbon
                        key={field.key}
                        color={"red"}
                        text={
                          <span
                            className="delete-btn"
                            onClick={e => {
                              e.stopPropagation();
                              const newState = [...randomState];
                              newState.splice(field.name, 1);
                              remove(field.name);
                            }}
                          >
                            删除
                          </span>
                        }
                      >
                        <Card
                          title={
                            <Form.Item label="随机类型名称" rules={REQUIRED_RULES} name={[field.name, "randomName"]}>
                              <Input
                                placeholder="姓名"
                                onClick={e => {
                                  e.stopPropagation();
                                }}
                              />
                            </Form.Item>
                          }
                          size="small"
                        >
                          <Form.Item label={"随机值："} rules={REQUIRED_RULES} name={[field.name, "randomValue"]}>
                            <Input.TextArea
                              placeholder="输入格式如下：&#13;张三&#13;李四&#13;王五"
                              autoSize={{ minRows: 5, maxRows: 5 }}
                            />
                          </Form.Item>
                        </Card>
                      </Badge.Ribbon>
                      // <div className="random-type-item">

                      //   <DeleteOutlined
                      //     onClick={e => {
                      //       e.stopPropagation();
                      //       const newState = [...randomState];
                      //       newState.splice(field.name, 1);
                      //       remove(field.name);
                      //     }}
                      //   />

                      // </div>
                    );
                  })}
                </div>
              </>
            );
          }}
        </Form.List>
      </Form>
    </div>
  );
};

export default RandomType;
