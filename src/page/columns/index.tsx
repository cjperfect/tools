import React from "react";
import { Button, Switch, Layout, Menu, Breadcrumb } from "antd";
import "./index.less";
const { Header, Content, Footer } = Layout;
interface IProps {
	title: string;
}

const Home: React.FC<IProps> = (props: IProps) => {
	return <h1>Home</h1>;
};

export default Home;
