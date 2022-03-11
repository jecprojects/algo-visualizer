import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import BarChart from "../barchart";

// Styles
import './style.css';

const VisualizeDiv = (props) => {

    const visual = useSelector(state => state.visual);
    const [currentVisuals, setCurrentVisuals] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(visual.complete){
            setTimeout(() => {
                setCurrentVisuals(visual.visualizeArray[count]);
                if(count < visual.visualizeArray.length){
                    setCount(prev => prev+1)
                }
            }, 1000);
        }
    }, [count, visual.complete])

    return(
        <div className="visualize-main-div">
            <div className="visualize-main-header-div">
                {/* Logs header goes here */}
                <div className="visualize-main-header-div-label">
                    <h3>Visualize</h3>
                </div>
            </div>

            <div id="renderingDiv" className="visualize-main-body-div">
                {
                    currentVisuals ? 
                        <BarChart visualData={currentVisuals}/>
                        :
                        <div className='replacement-of-visuals'>
                            Hello
                        </div>
                }
            </div>
        </div>
    );
}

export default VisualizeDiv;