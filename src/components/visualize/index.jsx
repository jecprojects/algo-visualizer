import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import BubbleSortTheory from "../../core/JSTheory/bubblesortTheory";
import BarChart from "../barchart";

// Styles
import './style.css';

const VisualizeDiv = (props) => {

    const location = useLocation();
    const pathName = location.pathname;

    const visual = useSelector(state => state.visual);
    const [currentVisuals, setCurrentVisuals] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(visual.complete){
            setTimeout(() => {
                setCurrentVisuals(visual.visualizeArray[count]);
                if(count < visual.visualizeArray.length-1){
                    setCount(prev => prev+1)
                }
            }, 1011);
        }
    }, [count, visual.complete])

    const renderOtherThings = () => {
        switch(pathName){
            case '/bubble-sort':
                return <BubbleSortTheory/>
            break;

        }
    }
    return(
        <div className="visualize-main-div">
            <div className="visualize-main-header-div">
                {/* Logs header goes here */}
                <div className="visualize-main-header-div-label">
                    <h3>{currentVisuals ? 'Viualize' : 'Theory'}</h3>
                </div>
            </div>

            <div id="renderingDiv" className="visualize-main-body-div">
                {
                    currentVisuals ? 
                        <BarChart visualData={currentVisuals}/>
                        :
                        renderOtherThings()
                }
            </div>
        </div>
    );
}

export default VisualizeDiv;