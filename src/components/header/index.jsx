import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { bubbleSortAction } from "../../redux/actions/bubbleSortAction";
// ICONS
import { FiPlay } from 'react-icons/fi';
// styling File
import './style.css';


const Header = () => {

    // Getting the current location from browser url
    const location = useLocation();
    const algorithm = useSelector(state => state.algorithm);
    const dispatch = useDispatch();

    const [algorithmSelected, setAlgorithmSelected] = useState();

    // This will select the Algorithm name to put it into the header.
    const headingLabel = () => {
        if(location.pathname === '/bubble-sort') return "Bubble Sort";
        else if(location.pathname === '/insertion-sort') return "Insertion Sort";
        else if(location.pathname === '/selection-sort') return "Selection Sort";
        else return "Select algorithm to Visualize."
    }

    useEffect(() => {
        const algorithm = headingLabel();
        setAlgorithmSelected(algorithm);
    }, [algorithmSelected]);

    


    // This will select the algorithm and proceed further to visualize
    const playAlgorithm = () => {
        if(algorithm.title){
            dispatch(bubbleSortAction(algorithm))
        }else{
            alert('Please select an Algorithm to RUN')
        }
    }

    return(
        <div className="header-main-div">
            <label className="heading-lbl">{algorithmSelected ? algorithmSelected : 'Loading..'}</label>
            {
                algorithm.title ? 
                <div onClick={playAlgorithm} className="run-btn-div">
                    <span className="run-btn"><FiPlay/></span>
                    <label>PLAY</label>
                </div>
                :
                null
            }
        </div>
    );
}

export default Header;