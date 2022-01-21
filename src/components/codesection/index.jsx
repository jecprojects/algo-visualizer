import React from "react";

// Code Mirror for colorfull ui of code editor
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

// Redux modules
import { useSelector } from "react-redux";

// styles
import './style.css';

const CodeSection = (props) => {

    const algorithm  = useSelector(state => state.algorithm);
    console.log(algorithm);

    const returnCodeEditor = (code) => {
        return(
            <CodeMirror
                value= {code ? code : "//Select an algorithm"}
                height="100%"
                theme={oneDark}
                extensions={[javascript({ jsx: true })]}
                onChange={(value, viewUpdate) => {
                console.log('value:', value);
                }}
            />
        );
    }


    return(
        <div className="code-section-main-div">
            <div className="code-section-header">
                {/* Header part Goes Here */}
                {/* ___________________ */}
                <label className="filename-heading">
                    {algorithm.title}.{algorithm.ext}
                </label>
            </div>

            <div className="code-section-body">
                <div className="code-section-body-div">
                    {returnCodeEditor(algorithm.code)}
                </div>
            </div>
        </div>
    );
}

export default CodeSection;