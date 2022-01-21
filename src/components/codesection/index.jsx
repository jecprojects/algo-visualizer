import React from "react";

// Redux modules
import { useSelector } from "react-redux";

// styles
import './style.css';

const CodeSection = (props) => {

    const algorithm  = useSelector(state => state.algorithm);
    console.log(algorithm);


    return(
        <div className="code-section-main-div">
            <div className="code-section-header">
                {/* Header part Goes Here */}
                {/* ___________________ */}
                <label className="filename-heading">{algorithm.title}.{algorithm.ext}</label>
            </div>

            <div className="code-section-body">
                <div className="code-section-body-left-div">
                    {/* Codeing number div goes here */}
                </div>

                <div className="code-section-body-right-div">
                    {/* Coding Part goes here */}
                    <pre>
                        <code className="code-section">
                            {algorithm.code}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}

export default CodeSection;