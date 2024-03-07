import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

interface EditorWithTextProps {
  title: string;
  description: string;
  example1: string[];
  example2?: string[];
  example3?: string[];
}

const EditorWithText: React.FC<EditorWithTextProps> = ({
  title,
  description,
  example1,
  example2,
  example3,
}) => {
  return (
    <div className="flex min-h-screen p-4">
      <div className="flex w-2/3 flex-col pt-16 pr-16">
        <h1 className="text-3xl">{title}</h1>
        <div className="py-9">{description}</div>
        <div className="pt-5 flex flex-col">
          <div className="text-xl">Example:</div>
          <div className="flex flex-col py-6">
            {example1.map((value, index) => (
              <div key={index}>{value}</div>
            ))}
          </div>
          <div className="flex flex-col py-6">
            {example2 &&
              example2.map((value, index) => <div key={index}>{value}</div>)}
          </div>
          <div className="flex flex-col py-6">
            {example3 &&
              example3.map((value, index) => <div key={index}>{value}</div>)}
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <CodeMirror
          value="Type your code for the APT here!"
          height="600px"
          extensions={[javascript()]}
          onChange={(value: string, viewUpdate: any) => {
            console.log("value:", value);
          }}
        />
      </div>
    </div>
  );
};

export default EditorWithText;
