import React, { useEffect, useRef, useState} from "react";

// Code Mirror for colorfull ui of code editor
import { useCodeMirror } from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
// Redux modules
import { useSelector } from "react-redux";
// styles
import './style.css';

const CodeSection = () => {

    const algorithm  = useSelector(state => state.algorithm); // getting state from redux states

    const editor = useRef(); // Refering to the text editor.

    const { setContainer } = useCodeMirror({
        container: editor.current,
        extensions: [javascript()],
        value: algorithm ? algorithm.code : '// Select an Algorithm ', 
        theme: oneDark,
        height: '100%',
        editable: false
    });

    useEffect(() => {
        if (editor.current) {
            setContainer(editor.current);
        }
    }, [editor.current]);


    // let b = document.getElementById('code_editor');
    // const lines = b ? 
    //                 b.childNodes[0] ? 
    //                     b.childNodes[0].childNodes[1] ?  
    //                         b.childNodes[0].childNodes[1].childNodes[1] ?
    //                             b.childNodes[0].childNodes[1].childNodes[1].childNodes
    //                         : ''
    //                         : ''
    //                         : ''
    //                         : ''
    // console.log(lines);
    // console.log(lines ? lines[0].childNodes[1]:'');

    return(
        <div className="code-section-main-div">
            <div className="code-section-header">
                {/* Header part Goes Here */}
                <label className="filename-heading">
                    {algorithm.title ? algorithm.title : 'readme'}.{algorithm.ext ? algorithm.ext : 'js'}
                </label>
            </div>

            <div className="code-section-body">
                <div id="code_editor" className="code-section-body-div" ref={editor}></div>
            </div>
        </div>
    );
}

export default CodeSection;