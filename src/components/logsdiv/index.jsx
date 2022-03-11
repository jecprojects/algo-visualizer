import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

// CSS
import './style.css';

const LogsDiv = () => {
    
    const visual = useSelector(state => state.visual)
    const [currentLogs, setCurrentLogs] = useState();
    const [count, setCount] = useState(0);

    const renderLogs = () => {
        if(currentLogs){
            let ele = document.createElement('div')
            ele.innerHTML = `<div style="width: 100%;height: auto;display: flex;flex-direction: column;padding: 0.5rem 5rem;" key=${Math.random()} className="visualize-div-logs"><label className="arr-lbl" style="color: aqua;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size: 0.8rem;color: #8f8f8f;">arr: ${currentLogs.arr.map(ele => {return `<span style="color: #fff;" key=${ele}> ${ele} </span>`})}</label><label style="color: aqua;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size: 0.8rem;color: #8f8f8f;" className="swap-lbl">swap: <span style="color: #fff;">${currentLogs.swap[0]}, ${currentLogs.swap[1]}</span></label></div>`
            document.getElementById('logs_div_id').appendChild(ele);
            
            // Auto Scroll to Bottom on logs
            let myDiv = document.getElementById("logs_div_id");
            myDiv.scrollTop = myDiv.scrollHeight;
        }
    }

    useEffect(() => {
        if(visual.complete){
            setTimeout(() => {
                setCurrentLogs(visual.visualizeArray[count]);
                if(count < visual.visualizeArray.length){
                    setCount(prev => prev+1)
                }
                renderLogs();
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

            <div id="logs_div_id" className="logs-main-body-div">
                {/* Logs goes here */}
            </div>
        </div>
    );
}

export default LogsDiv;