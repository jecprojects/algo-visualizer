import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

// CSS
import './style.css';

const LogsDiv = () => {
    
    const visual = useSelector(state => state.visual)
    const [currentLogs, setCurrentLogs] = useState();
    const [count, setCount] = useState(0);

    // console.log(visual && visual.visualizeArray.length)
    useEffect(() => {
        if(visual.complete){
            setTimeout(() => {
                setCurrentLogs(visual.visualizeArray[count]);
                if(count < visual.visualizeArray.length){
                    setCount(prev => prev+1)
                    console.log(count)
                }
                console.log(`Log: ${currentLogs}`);
            }, 1000);
        }

    },[count, visual.complete]);
    
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
                    currentLogs && <div key={Math.random()} className="visualize-div-logs">
                        <label className="arr-lbl">arr: {
                            currentLogs.arr.map(ele => {
                                return <span key={ele}> {ele} </span>
                            })
                        }</label>
                        <label className="swap-lbl">swap: <span>{currentLogs.swap[0]}, {currentLogs.swap[1]}</span></label>
                    </div>
                }
            </div>
        </div>
    );
}

export default LogsDiv;