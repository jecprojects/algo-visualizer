import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// CSS
import './style.css';

const LogsDiv = () => {
    
    const visual = useSelector(state => state.visual)


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
                {
                    visual.complete ? 
                        visual.visualizeArray.map(v => {
                            return(
                                <div key={Math.random()} className="visualize-div-logs">
                                    <label className="arr-lbl">arr: {
                                        v.arr.map(ele => {
                                            return <span key={ele}> {ele} </span>
                                        })
                                    } </label>
                                    <label className="swap-lbl">swap: <span>{v.swap[0]}, {v.swap[1]}</span></label>
                                </div>
                            )
                        })
                        :
                        null
                }
            </div>
        </div>
    );
}

export default LogsDiv;