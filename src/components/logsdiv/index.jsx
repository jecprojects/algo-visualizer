import React from "react";
import './style.css';

const LogsDiv = () => {
    return(
        <div className="logs-main-div">
            <div className="logs-main-header-div">
                {/* Logs header goes here */}
                <div className="logs-main-header-div-label">
                    <h3>Log</h3>
                </div>
            </div>

            <div className="logs-main-body-div">
                {/* Logs goes here */}
            </div>
        </div>
    );
}

export default LogsDiv;