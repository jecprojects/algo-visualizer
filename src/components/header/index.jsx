import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { bubbleSortAction } from "../../redux/actions/bubbleSortAction";
import { selectionSortAction } from "../../redux/actions/selectionSortAction";
import { insertionSortAction } from "../../redux/actions/insertionSortAction";


// ICONS
import { FiPlay, FiPause, FiRefreshCcw } from 'react-icons/fi';
// styling File
import './style.css';


const Header = () => {

    // Getting the current location from browser url
    const location = useLocation();
    const dispatch = useDispatch();

    const algorithm = useSelector(state => state.algorithm);
    const visual = useSelector(state => state.visual);

    const [ algorithmSelected, setAlgorithmSelected ] = useState();
    const [ played, isPlayed ] = useState();

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

    // To manage played state
    useEffect(() => {
        if(visual.complete){
            isPlayed(true)
        }else{
            isPlayed(false)
        }
    }, [visual.complete])

    // This will select the algorithm and proceed further to visualize
    const playAlgorithm = () => {
        if(algorithm.title === 'bubbleSort'){
            dispatch(bubbleSortAction(algorithm, played))
            isPlayed(!played)
        }else if(algorithm.title === 'selectionsort'){
            dispatch(selectionSortAction(algorithm, played))
            isPlayed(!played)
        }else if(algorithm.title === 'insertionSort'){
            dispatch(insertionSortAction(algorithm, played))
            isPlayed(!played)
        }else{
            alert('Please select an Algorithm to RUN')
        }
    }

    const reloadPage = () => {
        window.location.reload();
    }

    return(
        <div className="header-main-div">
            <label className="heading-lbl">{algorithmSelected ? algorithmSelected : 'Loading..'}</label>
            {
                algorithm.title ?
                <div className="heading-right-div">
                    <div onClick={reloadPage} className="run-btn-div">
                        <span className="run-btn"><FiRefreshCcw/></span>
                        <label>RELOAD</label>
                    </div>
                    <div onClick={playAlgorithm} id='run-btn' className="run-btn-div">
                        <span className="run-btn"> {played ? <FiPause/> : <FiPlay/>}</span>
                        <label>{played ? 'PAUSE' : 'PLAY'}</label>
                    </div>
                </div>
                :
                null
            }
        </div>
    );
}

export default Header;