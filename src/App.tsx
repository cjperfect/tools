import React from "react";
import "./style/index.less";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

interface IProps {
	children?: React.ReactNode;
}

type LinkType = {
	label: string;
	path: string;
};

const linkConfig: LinkType[] = [
	{
		label: "生成表格columns",
		path: "/columns",
	},
	{
		label: "生成echarts",
		path: "/echarts",
	},
];

const App: React.FC<IProps> = (props: IProps) => {
	const { children } = props;

	return (
		<div className="generate-columns">
			<Header>
				<Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
					{linkConfig.map(({ label, path }) => {
						return <Menu.Item key={path}></Menu.Item>;
					})}
				</Menu>
			</Header>
			<Content>{children}</Content>
			<Footer>Generate Columns ©2022 Created by Chen Jiang</Footer>
		</div>
	);
};

export default App;
