import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// styling File
import './style.css';


const Header = () => {

    // Getting the current location from browser url
    const location = useLocation();

    const [ algorithmSelected, setAlgorithmSelected ] = useState();

    // This will select the Algorithm name to put it into the header.
    const headingLabel = () => {
        if(location.pathname === '/bubble-sort') return "Bubble Sort";
        else if(location.pathname === '/insertion-sort') return "Insertion Sort";
        else if(location.pathname === '/selection-sort') return "Selection Sort";
        else return "Select algorithm to Visualize."
    }

    // To select the algorithm Name
    useEffect(() => {
        const algoName = headingLabel();
        setAlgorithmSelected(algoName);
    }, [algorithmSelected]);

    return(
        <div className="header-main-div">
            <h2>Visualizer</h2>
            <label className="heading-lbl">{algorithmSelected ? algorithmSelected : 'Loading..'}</label>
        </div>
    );
}

export default Header;