import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
// COMPONENTS
import InputTab from "./inputTab";
import OutputTab from "./ouputTab";
// ICONS
import { BsChevronCompactLeft } from 'react-icons/bs';
// CSS
import './styles/style.css';


const MiddleBar = () => {

    // Getting state from store using useSelector
    const algorithm = useSelector(state => state.algorithm);

    const [outputTab, setOutputTab] = useState(false);

    const toggleTab = () => {
        setOutputTab(prev => !prev);
    }

    return(
        algorithm.algoName ? 
            <div className="middlebar-main-div">
                {
                    outputTab ? <label onClick={toggleTab} className='goback-btn'><BsChevronCompactLeft/> BACK</label> : null
                }
                
                { 
                    outputTab ? 
                        <OutputTab/> 
                        : 
                        <InputTab toggleTab = {toggleTab}/> 
                }
            </div>
            :
                <label className="m-m-label">Please Select an Algorithm from the Sidebar</label>
    )
}

export default MiddleBar;