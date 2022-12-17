import React from "react";
import { Button, Switch } from "antd";
import "./index.less";

interface IProps {
	title: string;
}

const Home: React.FC<IProps> = (props: IProps) => {
	return (
		<div>
			<Switch defaultChecked onChange={() => {}} />
			<Button type="primary" danger ghost>
				Danger
			</Button>
		</div>
	);
};

export default Home;
