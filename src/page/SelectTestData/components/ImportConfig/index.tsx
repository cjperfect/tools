/* 新增字段，模态框 */
import React, { useEffect, useState } from "react";
import { Input, Button, Modal, Form, Space, message, Select, Drawer } from "antd";
import { REQUIRED_RULES, RANDOM_TYPE_ARR } from "config/constant";
import { operateRandomType } from "utils";
import { MinusCircleOutlined } from "@ant-design/icons";
import { INITIAL_DATA, FieldInteface, FormInterface } from "../../config";
import "./index.less";

interface IProps {
  visible: boolean; // 控制显示隐藏
  onSubmit: (values: any) => void; // 表单提交事件
  onCancel: () => void; // 弹框关闭事件
}

const ImportConfigModal: React.FC<IProps> = props => {
  const { visible, onCancel, onSubmit } = props;
  const [form] = Form.useForm();

  const [options, setOptions] = useState<Options[]>([]); // 设置随机类型下拉框数据

  useEffect(() => {
    // 设置随机类型下拉框数据
    setOptions([
      {
        label: "自定义随机类型",
        options: operateRandomType.changeOption(),
      },
      ...RANDOM_TYPE_ARR,
    ]);
  }, []);

  /**
   * 校验是否有相同的字段
   */
  const validateCommon = (fields: FieldInteface[]) => {
    const map: { [extra: string]: number } = {};
    for (let i = 0; i < fields.length; i++) {
      const { field } = fields[i];
      if (!map[field]) map[field] = 0;
      if (++map[field] > 1) {
        message.warn(`字段[${field}]重复了`);
        return false;
      }
    }
    return true;
  };

  /**
   * 表单提交事件
   * @param values 表单收集的值
   * @returns
   */
  const onFinish = (values: FormInterface) => {
    const { allField = [] } = values;
    if (!allField.length) {
      return message.error("至少需要一个字段");
    }
    if (validateCommon(allField)) {
      // 检验通过了, 存在本地
      localStorage.treeTestData = JSON.stringify(allField);
      onSubmit?.(allField);
    }
  };

  return (
    <Drawer title="配置字段" width={600} open={visible} onClose={onCancel} className="select-tree-data-modal">
      <Form<FormInterface>
        form={form}
        onFinish={onFinish}
        layout="horizontal"
        initialValues={{
          allField: INITIAL_DATA,
        }}
      >
        <Form.List name={"allField"}>
          {(fields, { add, remove }) => {
            return (
              <>
                <Button
                  type="primary"
                  className="add-btn"
                  onClick={() => {
                    add({ type: "string" });
                  }}
                >
                  新增
                </Button>

                <div className="random-type-list">
                  {fields.map(field => {
                    return (
                      <div className="field-container" key={field.key}>
                        <Form.Item label={`字段`} rules={REQUIRED_RULES} name={[field.name, "field"]}>
                          <Input placeholder="请输入字段" />
                        </Form.Item>
                        <Form.Item className="random-type" label={"随机值"} rules={REQUIRED_RULES} name={[field.name, "type"]}>
                          <Select
                            style={{ width: 180 }}
                            options={options}
                            onClick={e => {
                              e.stopPropagation();
                            }}
                            placeholder="请选择"
                            showSearch
                            filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                          />
                        </Form.Item>
                        <MinusCircleOutlined
                          onClick={() => {
                            remove(field.name);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            );
          }}
        </Form.List>
        <Form.Item>
          <Space size="large">
            <Button type="primary" htmlType="submit" style={{ width: 120 }}>
              确认
            </Button>
            <Button htmlType="reset">重置</Button>
          </Space>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default ImportConfigModal;
