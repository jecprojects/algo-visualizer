import React, { useState, useEffect } from "react";
// COMPONENTS
import InputTab from "./inputTab";
import OutputTab from "./ouputTab";
// ICONS
import { BsChevronCompactLeft } from 'react-icons/bs';
// CSS
import './styles/style.css';


const MiddleBar = () => {

    const [outputTab, setOutputTab] = useState(false);

    const toggleTab = () => {
        setOutputTab(prev => !prev);
    }

    return(
        <div className="middlebar-main-div">
            {
                outputTab ? <label onClick={toggleTab} className='goback-btn'><BsChevronCompactLeft/> BACK</label> : null
            }
            
            <span>{outputTab ? 'OUTPUT' : 'INPUT'}</span>
            { 
                outputTab ? 
                    <OutputTab/> 
                    : 
                    <InputTab toggleTab = {toggleTab}/> 
            }
        </div>
    )
}

export default MiddleBar;