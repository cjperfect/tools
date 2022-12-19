import React, { useEffect, useRef } from "react";
import MonacoEditor from "react-monaco-editor";

interface IProps {
  value: string;
  language?: string;
  height?: number;
  onChange?: (value: string) => void;
}

const CodeEditor: React.FC<IProps> = (props: IProps) => {
  const { value, height = 460, language = "javascript", onChange } = props;
  const editorRef = useRef<{ [extra: string]: any }>();
  console.log(value);

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

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setValue(value);
      editorRef.current.getAction("editor.action.formatDocument").run(); //自动格式化代码
      editorRef.current.setValue(editorRef.current.getValue()); //再次设置
    }
  }, [value]);

  const editorDidMountHandle = (editor: any) => {
    editorRef.current = editor;
  };

  return (
    <MonacoEditor
      height={height}
      language={language}
      theme="vs-dark"
      // value={value}
      options={options}
      onChange={onChange}
      editorDidMount={editorDidMountHandle}
    />
  );
};

export default CodeEditor;
