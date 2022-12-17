import React from "react";
import "./style/index.less";

interface IProps {
	children?: React.ReactNode;
}

const App: React.FC<IProps> = (props: IProps) => {
	const { children } = props;
	return <div className="App">{children}</div>;
};

export default App;
