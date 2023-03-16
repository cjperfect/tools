import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import DraggableTreeCom, { addNodeUnderParent, removeNodeAtPath } from "react-sortable-tree";
import "react-sortable-tree/style.css";
import "./index.less";

interface IProps {
  data: any;
  onChange: (data: any) => void;
}
const NEW_NODE = { key: "test", value: "test", title: "test的中文" };

const DraggableTree: React.FC<IProps> = (props: IProps) => {
  const { data, onChange } = props;
  const [treeData, setTreeData] = useState<any>([]);

  useEffect(() => {
    setTreeData(data);
  }, [data]);

  /**
   * 添加子节点
   * @param rowInfo 当前节点信息
   */
  const addNode = (rowInfo: any) => {
    const newTree = addNodeUnderParent({
      treeData: treeData,
      newNode: NEW_NODE,
      expandParent: true,
      parentKey: rowInfo ? rowInfo.treeIndex : undefined,
      getNodeKey: ({ treeIndex }) => treeIndex,
    });
    setTreeData(newTree.treeData);
  };

  /**
   * 删除当前节点
   * @param rowInfo 当前节点信息
   */
  const removeNode = (rowInfo: any) => {
    const { path } = rowInfo;
    const newTree = removeNodeAtPath({
      treeData: treeData,
      path,
      getNodeKey: ({ treeIndex }) => treeIndex,
    });
    setTreeData(newTree);
  };

  /**
   * 添加顶层节点
   */
  const addTopNode = () => {
    setTreeData([...treeData, NEW_NODE]);
  };

  return (
    <div className="draggable-tree-com">
      <Button onClick={addTopNode}>添加节点</Button>
      <DraggableTreeCom
        isVirtualized={false}
        treeData={treeData}
        onChange={(data: any) => {
          setTreeData(data);
          onChange(data);
        }}
        generateNodeProps={(rowInfo: any) => {
          const { node } = rowInfo;
          console.log(node);
          return {
            title: (
              <div className="field-wrap">
                <div className="field-line">
                  <span>值：</span>
                  <Input
                    placeholder="请输入值"
                    defaultValue={node.value as string}
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
                    defaultValue={node.title as string}
                    onChange={e => {
                      const val = e.target.value.trim();
                      node.title = node.label = val;
                    }}
                  />
                </div>
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
    </div>
  );
};

export default DraggableTree;
