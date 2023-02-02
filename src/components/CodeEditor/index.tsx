import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface IProps {
  value: string;
  language?: string;
}

const CodeEditor: React.FC<IProps> = (props: IProps) => {
  const { value, language = "javascript" } = props;
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      startingLineNumber={1}
      language={language}
      style={oneDark}
      wrapLines={true}
      customStyle={{
        fontSize: 16,
      }}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeEditor;
