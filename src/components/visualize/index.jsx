import React from "react";
import './style.css';

const VisualizeDiv = (props) => {
    return(
        <div className="visualize-main-div">
            <div className="visualize-main-header-div">
                {/* Logs header goes here */}
                <div className="visualize-main-header-div-label">
                    <h3>Visualize</h3>
                </div>
            </div>

            <div className="visualize-main-body-div">
                {/* Logs goes here */}
            </div>
        </div>
    );
}

export default VisualizeDiv;