import React, { useState } from "react";
import "./style/index.less";
import { useHistory } from "react-router-dom";
import { Layout, Menu } from "antd";
import { FieldStringOutlined, ChromeOutlined, RedditOutlined, TableOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

interface IProps {
  children?: React.ReactNode;
}

type LinkType = {
  key: string;
  label: string;
  children?: LinkType[];
  [extra: string]: any;
};

/* 菜单页面 */
const linkConfig: LinkType[] = [
  {
    key: "/",
    label: "Ant Table测试数据",
    icon: <TableOutlined />,
  },
  {
    key: "/randomType",
    label: "自定义随机类型",
    icon: <FieldStringOutlined />,
  },
  // {
  //   key: "/select-data",
  //   label: "树形测试数据",
  //   icon: <BarsOutlined />,
  // },
  {
    key: "/blog",
    label: "个人博客",
    icon: <ChromeOutlined />,
    children: [
      {
        key: "https://blog.csdn.net/qq_39583550",
        label: "CSDN",
        icon: <RedditOutlined />,
      },
    ],
  },
];

const App: React.FC<IProps> = (props: IProps) => {
  const { children } = props;
  const history = useHistory();
  const [selectedKey, setSelectedKey] = useState(history.location?.pathname);

  return (
    <div className="main-page">
      <Header>
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={linkConfig}
          onClick={({ key }) => {
            if (key.includes("http")) {
              // 打开新的网页
              window.open(key);
              return;
            }
            if (history.location.pathname === key) return;
            setSelectedKey(key);
            history.push(key);
          }}
        />
      </Header>
      <Content>{children}</Content>
    </div>
  );
};

export default App;
