/* 查看已导入配置的抽屉 */
import React, { useEffect, useState } from "react";
import { Input, Button, Drawer, Space, Modal, Empty } from "antd";
const { TextArea } = Input;

interface IProps {
  visible: boolean;
  onClose: () => void;
  setContent: (value: string) => void;
}

const ConfigDrawer: React.FC<IProps> = props => {
  const { visible, onClose, setContent } = props;
  const [configListState, setConfigListState] = useState([]);

  useEffect(() => {
    if (visible) {
      setConfigListState(JSON.parse(localStorage.myConfig || "[]").reverse());
    }
    // eslint-disable-next-line
  }, [visible]);

  return (
    <Drawer title="查看已导入的配置" placement={"right"} open={visible} key={"right"} size="large" onClose={onClose}>
      {configListState?.length ? (
        <div className="config-list">
          {configListState.map(v => {
            const { config, id } = v;
            return (
              <div className="config" style={{ marginBottom: 20 }} key={id}>
                <Space style={{ marginBottom: 10 }}>
                  <Button
                    danger
                    onClick={() => {
                      Modal.confirm({
                        content: "确定要删除吗？",
                        okText: "确认",
                        cancelText: "取消",
                        onOk() {
                          const data = [...configListState];
                          const restData = data.filter((v: ConfigType) => v.id !== id);
                          localStorage.myConfig = JSON.stringify(restData);
                          setConfigListState(restData);
                        }
                      });
                    }}
                  >
                    删除
                  </Button>
                  <Button
                    onClick={() => {
                      setContent(config);
                      onClose();
                    }}
                  >
                    选择
                  </Button>
                </Space>
                <TextArea placeholder="请输入配置" autoSize={{ minRows: 10, maxRows: 10 }} value={config} />
              </div>
            );
          })}
        </div>
      ) : (
        <Empty description="暂无数据" />
      )}
    </Drawer>
  );
};

export default ConfigDrawer;
