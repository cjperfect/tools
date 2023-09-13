import React, { ReactNode, useEffect, useState } from "react";
import { Button, Form, message, Badge, Card, Input, Select, InputNumber, Result } from "antd";
import { REQUIRED_RULES } from "config/constant";
import { allRandomType, formHandler } from "./config";
import { operateRandomType } from "utils";
import "./index.less";
import { SmileOutlined } from "@ant-design/icons";

interface IProps {}

const RandomType: React.FC<IProps> = (props: IProps) => {
  const [form] = Form.useForm();

  const [randomState, setRandomState] = useState<any>([{}]); // 当前所有随机类型

  const [randomType, setRandomType] = useState<AnyObj>({}); // 当前的类型

  /**
   * 初始化表单
   */
  const init = () => {
    // 获取本地localstorage已经存储的随机类型
    const typeMap = operateRandomType.get();
    const state = [];
    for (let k in typeMap) {
      const { name, type, params = {} } = typeMap[k] || {};
      state.push({
        name,
        type,
        ...params,
      });
    }
    setRandomState(state);
    form.setFieldValue("randomList", state.length ? state : [{}]);
  };

  useEffect(() => {
    message.warn("填写完记得保存哦");
    init();
    // eslint-disable-next-line
  }, []);

  /**
   * 表单提交事件
   * @param values 表单所有值
   */
  const onFinish = (values: any): void => {
    const { randomList } = values;
    const newTypes = randomList.reduce((prev: any, { name, type, ...args }: RandomType) => {
      const obj = {
        name,
        type,
        params: {
          ...formHandler(type, args),
        },
      };

      prev[name] = obj;

      return prev;
    }, {});

    operateRandomType.set(JSON.stringify(newTypes));
    message.success("保存成功");
  };

  /**
   * 表单提交后有错误
   * @returns
   */
  const onFinishFailed = () => {
    return message.error("有必填项没填");
  };

  /**
   * 根据类型来渲染不同的随机值组件
   */
  const renderContent = (field: any): ReactNode => {
    const formValues = form.getFieldsValue()["randomList"];
    const type = formValues[field.name].type;

    switch (type) {
      // 随机用户提供内容
      case "content":
        return (
          <Form.Item label={"随机内容："} rules={REQUIRED_RULES} name={[field.name, "content"]}>
            <Input.TextArea placeholder="输入格式如下：&#13;张三&#13;李四&#13;王五" autoSize={{ minRows: 5, maxRows: 5 }} />
          </Form.Item>
        );

      // 随机范围整数
      case "rangeNum":
        return (
          <div className="num-container">
            <Form.Item label={"在范围内随机"} rules={REQUIRED_RULES} name={[field.name, "minNum"]}>
              <InputNumber placeholder="请输入" precision={0} />
            </Form.Item>
            ~
            <Form.Item rules={REQUIRED_RULES} name={[field.name, "maxNum"]}>
              <InputNumber placeholder="请输入" precision={0} />
            </Form.Item>
          </div>
        );

      // 默认占位
      default:
        return <Result icon={<SmileOutlined />} subTitle="请选择随机类型" />;
    }
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
                    add({});
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
                                  placeholder="请输入随机名称"
                                  onClick={e => {
                                    e.stopPropagation();
                                  }}
                                />
                              </Form.Item>
                              <Form.Item label="类型" rules={REQUIRED_RULES} name={[field.name, "type"]}>
                                <Select
                                  placeholder="请选择随机类型"
                                  options={allRandomType}
                                  onChange={val => {
                                    setRandomType({ ...randomType, [field.name]: val });
                                  }}
                                ></Select>
                              </Form.Item>
                            </>
                          }
                          size="small"
                        >
                          {renderContent(field)}
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
