import React, { useEffect, useState } from "react";
import { Button, Form, message, Badge, Card, Input, Select } from "antd";
import { REQUIRED_RULES } from "config/constant";
import { allRandomType } from "./config";
import { operateRandomType } from "utils";
import "./index.less";

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
      const { name, type, contentOrigin } = typeMap[k] || {};
      state.push({
        name,
        type,
        content: contentOrigin,
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
    const newTypes = randomList.reduce((prev: any, { name, content, type }: RandomType) => {
      const obj = {
        name,
        type,
        content: content?.split("\n").filter(Boolean),
        contentOrigin: content,
      };

      prev[name] = obj;

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
      <Form form={form} onFinish={onFinish} layout="horizontal" onFinishFailed={onFinishFailed}>
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
                    add({ type: "content" });
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
                            <>
                              <Form.Item label="名称" rules={REQUIRED_RULES} name={[field.name, "name"]}>
                                <Input
                                  placeholder="姓名"
                                  onClick={e => {
                                    e.stopPropagation();
                                  }}
                                />
                              </Form.Item>
                              <Form.Item
                                label="类型"
                                rules={REQUIRED_RULES}
                                name={[field.name, "type"]}
                                initialValue="content"
                              >
                                <Select options={allRandomType}></Select>
                              </Form.Item>
                            </>
                          }
                          size="small"
                        >
                          <Form.Item label={"随机值："} rules={REQUIRED_RULES} name={[field.name, "content"]}>
                            <Input.TextArea
                              placeholder="输入格式如下：&#13;张三&#13;李四&#13;王五"
                              autoSize={{ minRows: 5, maxRows: 5 }}
                            />
                          </Form.Item>
                        </Card>
                      </Badge.Ribbon>
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
