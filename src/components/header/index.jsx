import React from "react";
import { useLocation } from "react-router-dom";

// styling File
import './style.css';


const Header = () => {

    // Getting the current location from browser url
    const location = useLocation();
    const headingLabel = () => {
        if(location.pathname === '/bubble-sort') return "Bubble Sort";
        else if(location.pathname === '/insertion-sort') return "Insertion Sort";
        else if(location.pathname === '/selection-sort') return "Selection Sort";
        else return "Select algorithm to Visualize."
    }

    return(
        <div className="header-main-div">
            <label className="heading-lbl">{headingLabel()}</label>
        </div>
    );
}

export default Header;