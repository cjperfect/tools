import { Button, Empty } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import DraggableTreeCom, { addNodeUnderParent, removeNodeAtPath } from "react-sortable-tree";
import { createNode } from "../../config";
import "react-sortable-tree/style.css";
import "./index.less";

interface IProps {
  data: any; // 拖拽树, 数据源
  onChange: (data: any) => void; // 拖拽树change事件
}

const DraggableTree: React.FC<IProps> = (props: IProps) => {
  const { data, onChange } = props;
  const [treeData, setTreeData] = useState<any>([]); // 数据源

  useEffect(() => {
    setTreeData(data);
  }, [data]);

  /**
   * 添加子节点
   * @param rowInfo 当前节点信息
   */
  const addNode = (rowInfo: any) => {
    const NEW_NODE = createNode();

    /**
     * addNodeUnderParent 组件里面带的工具方法
     */
    const newTree = addNodeUnderParent({
      treeData: treeData,
      newNode: NEW_NODE,
      expandParent: true,
      parentKey: rowInfo ? rowInfo.treeIndex : undefined,
      getNodeKey: ({ treeIndex }: any) => treeIndex,
    });
    onChange(newTree.treeData);
    setTreeData(newTree.treeData);
  };

  /**
   * 删除当前节点
   * @param rowInfo 当前节点信息
   */
  const removeNode = (rowInfo: any) => {
    const { path } = rowInfo;
    /**
     * removeNodeAtPath 组件里面带的工具方法
     */
    const newTree = removeNodeAtPath({
      treeData: treeData,
      path,
      getNodeKey: ({ treeIndex }: any) => treeIndex,
    });
    onChange(newTree);
    setTreeData(newTree);
  };

  /**
   * 添加顶层节点
   */
  const addTopNode = () => {
    const data = [...treeData, createNode()];
    onChange(data);
    setTreeData(data);
  };

  return (
    <div className="draggable-tree-com">
      <Button onClick={addTopNode}>添加节点</Button>
      {treeData.length ? (
        <DraggableTreeCom
          isVirtualized={false}
          treeData={treeData}
          onChange={(data: any) => {
            setTreeData(data);
            onChange(data);
          }}
          generateNodeProps={(rowInfo: any) => {
            const { node } = rowInfo;
            return {
              title: (
                <div className="field-wrap" key={node.value + node.title}>
                  节点
                  {/* <div className="field-line">
                  <span>字段：</span>
                  <Input
                    placeholder="请输入值"
                    defaultValue={node.value}
                    onChange={e => {
                      const val = e.target.value.trim();
                      node.value = node.key = val;
                    }}
                  />
                </div>
                <div className="field-line">
                  <span>中文：</span>
                  <Input
                    placeholder="请输入值对应的中文"
                    defaultValue={node.title}
                    onChange={e => {
                      const val = e.target.value.trim();
                      node.title = node.label = val;
                    }}
                  />
                </div> */}
                </div>
              ),
              buttons: [
                <PlusCircleOutlined
                  onClick={() => {
                    addNode(rowInfo);
                  }}
                />,
                <MinusCircleOutlined
                  onClick={() => {
                    removeNode(rowInfo);
                  }}
                />,
              ],
            };
          }}
        />
      ) : (
        <Empty description="请先配置字段, 再添加节点" />
      )}
    </div>
  );
};

export default DraggableTree;
