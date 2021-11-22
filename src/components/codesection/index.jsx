import React from "react";
import './style.css';

const CodeSection = (props) => {
    return(
        <div className="code-section-main-div">
            <div className="code-section-header">
                {/* Header part Goes Here */}
                {/* ___________________ */}
            </div>

            <div className="code-section-body">
                <div className="code-section-body-left-div">
                    {/* Codeing number div goes here */}
                </div>

                <div className="code-section-body-right-div">
                    {/* Coding Part goes here */}
                </div>
            </div>
        </div>
    );
}

export default CodeSection;