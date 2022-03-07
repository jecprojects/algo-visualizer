import React from "react";
import { useSelector } from "react-redux";
import BarChart from "../barchart";

// Styles
import './style.css';

const VisualizeDiv = (props) => {
    const visual = useSelector(state => state.visual);

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
                {
                    visual.complete ? 
                        <BarChart visualData={visual.visualizeArray[0]}/>
                        :
                        null
                }
            </div>
        </div>
    );
}

export default VisualizeDiv;