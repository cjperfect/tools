import React from "react";
import MonacoEditor from "react-monaco-editor";

interface IProps {
  value: string;
  language?: string;
  height?: number;
  onChange?: (value: string) => void;
}

const CodeEditor: React.FC<IProps> = (props: IProps) => {
  const { value, height = 460, language = "javascript", onChange } = props;

  const options = {
    selectOnLineNumbers: true,
    fontSize: 14,
    formatOnPaste: true,
    automaticLayout: true,
    formatOnType: true,
    minimap: {
      enabled: false
    }
  };

  return (
    <MonacoEditor
      height={height}
      language={language}
      theme="vs-dark"
      value={value}
      options={options}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
